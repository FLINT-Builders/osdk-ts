/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ObjectSet, Osdk, PageResult } from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import type { Observable, Subscription } from "rxjs";

import { additionalContext } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { extractRdpDefinition } from "../../../util/extractRdpDefinition.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "../Changes.js";
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";
import type { Entry } from "../Layer.js";
import {
  API_NAME_IDX as OBJECT_API_NAME_IDX,
  type ObjectCacheKey,
} from "../object/ObjectCacheKey.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "../objectMatchesWhereClause.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import { OrderBySortingStrategy } from "../sorting/SortingStrategy.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type {
  ObjectSetCacheKey,
  ObjectSetOperations,
} from "./ObjectSetCacheKey.js";
import type { ObjectSetQueryOptions } from "./ObjectSetQueryOptions.js";

export class ObjectSetQuery extends BaseListQuery<
  ObjectSetCacheKey,
  ObjectSetPayload,
  ObjectSetQueryOptions
> {
  #operations: Canonical<ObjectSetOperations>;
  #composedObjectSet: ObjectSet<any, any>;
  #objectTypes: ReadonlySet<string>;
  #resolvedObjectTypes:
    | ReturnType<typeof getObjectTypesThatInvalidate>
    | undefined;
  #requiresServerEvaluation: boolean;
  #resultTypeApiName: string;

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ObjectSetCacheKey>>,
    baseObjectSetWire: string,
    operations: Canonical<ObjectSetOperations>,
    cacheKey: ObjectSetCacheKey,
    opts: ObjectSetQueryOptions,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? store.client[additionalContext].logger?.child(
            {},
            {
              msgPrefix: `ObjectSetQuery<${cacheKey.otherKeys
                .map((x) => JSON.stringify(x))
                .join(", ")}>`,
            },
          )
        : undefined,
    );

    this.#operations = operations;
    this.#composedObjectSet = this.#composeObjectSet(opts);

    const baseWire: WireObjectSet = JSON.parse(baseObjectSetWire);
    this.#resultTypeApiName =
      baseWire.type === "base" ? baseWire.objectType : "";
    this.#objectTypes = new Set(
      this.#resultTypeApiName ? [this.#resultTypeApiName] : [],
    );

    this.#requiresServerEvaluation =
      baseWire.type !== "base" ||
      !!(
        operations.withProperties ||
        operations.pivotTo ||
        (operations.union && operations.union.length > 0) ||
        (operations.intersect && operations.intersect.length > 0) ||
        (operations.subtract && operations.subtract.length > 0)
      );

    if (opts.autoFetchMore === true) {
      this.minResultsToLoad = Number.MAX_SAFE_INTEGER;
    } else if (typeof opts.autoFetchMore === "number") {
      this.minResultsToLoad = Math.max(0, opts.autoFetchMore);
    } else {
      this.minResultsToLoad = opts.pageSize || 0;
    }
  }

  get objectTypes(): ReadonlySet<string> {
    return this.#objectTypes;
  }

  public override get rdpConfig(): Canonical<Rdp> | undefined {
    return this.#operations.withProperties;
  }

  public get selectFields(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
  }

  protected get rawSelect(): Canonical<readonly string[]> | undefined {
    return this.#operations.select;
  }

  #composeObjectSet(opts: ObjectSetQueryOptions): ObjectSet<any, any> {
    let result = opts.baseObjectSet;

    if (opts.withProperties) {
      result = result.withProperties(opts.withProperties);
    }
    if (opts.where) {
      result = result.where(opts.where);
    }
    if (opts.union && opts.union.length > 0) {
      result = result.union(...opts.union);
    }
    if (opts.intersect && opts.intersect.length > 0) {
      result = result.intersect(...opts.intersect);
    }
    if (opts.subtract && opts.subtract.length > 0) {
      result = result.subtract(...opts.subtract);
    }
    if (opts.pivotTo) {
      result = result.pivotTo(opts.pivotTo);
    }

    return result;
  }

  #resolveObjectTypes(): ReturnType<typeof getObjectTypesThatInvalidate> {
    return (this.#resolvedObjectTypes ??= getObjectTypesThatInvalidate(
      this.store.client[additionalContext],
      getWireObjectSet(this.#composedObjectSet),
    )
      .then((result) => {
        this.#resultTypeApiName = result.resultType.apiName;
        this.#objectTypes = new Set([
          result.resultType.apiName,
          ...result.invalidationSet,
        ]);
        return result;
      })
      .catch((error: unknown) => {
        this.#resolvedObjectTypes = undefined;
        throw error;
      }));
  }

  /**
   * Register changes to the cache specific to ObjectSetQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.registerObjectSet(this.cacheKey);
  }

  /**
   * Implements fetchPageData from BaseListQuery template method
   * Fetches a page of data from the composed ObjectSet
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>> {
    const { resultType } = await this.#resolveObjectTypes();

    if (
      this.#operations.orderBy &&
      Object.keys(this.#operations.orderBy).length > 0 &&
      !(this.sortingStrategy instanceof OrderBySortingStrategy)
    ) {
      const wireObjectSet = getWireObjectSet(this.#composedObjectSet);
      this.sortingStrategy = new OrderBySortingStrategy(
        resultType.apiName,
        this.#operations.orderBy,
        await extractRdpDefinition(
          this.store.client[additionalContext],
          wireObjectSet,
        ),
      );
    }

    // Fetch the data with pagination
    const resp = await this.#composedObjectSet.fetchPage({
      $nextPageToken: this.nextPageToken,
      $pageSize: this.getEffectiveFetchPageSize(),
      $includeRid: true,
      ...(this.#operations.select && this.#operations.select.length > 0
        ? { $select: this.#operations.select }
        : {}),
      // OrderBy is already applied in the composed ObjectSet
      ...(this.#operations.orderBy &&
      Object.keys(this.#operations.orderBy).length > 0
        ? { $orderBy: this.#operations.orderBy }
        : {}),
      ...(this.options.$loadPropertySecurityMetadata
        ? { $loadPropertySecurityMetadata: true }
        : {}),
    });

    if (signal?.aborted) {
      throw new Error("Aborted");
    }

    this.nextPageToken = resp.nextPageToken;

    return resp;
  }

  protected handleFetchError(
    error: unknown,
    _status: Status,
    batch: BatchContext,
  ): Entry<ObjectSetCacheKey> {
    this.logger?.error("error", error);
    this.store.subjects.get(this.cacheKey).error(error);

    const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
    return this.writeToStore(
      { data: [], totalCount: existingTotalCount },
      "error",
      batch,
    );
  }

  registerStreamUpdates(sub: Subscription): void {
    this.createWebsocketSubscription(
      this.#composedObjectSet,
      sub,
      "observeObjectSet",
    );
  }

  maybeUpdateAndRevalidate = (
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    if (process.env.NODE_ENV !== "production") {
      this.logger
        ?.child({ methodName: "maybeUpdateAndRevalidate" })
        .debug(DEBUG_ONLY__changesToString(changes));
      this.logger
        ?.child({ methodName: "maybeUpdateAndRevalidate" })
        .debug(`Already in changes? ${changes.modified.has(this.cacheKey)}`);
    }

    if (changes.modified.has(this.cacheKey)) {
      return;
    }
    changes.modified.add(this.cacheKey);

    try {
      if (this.#requiresServerEvaluation) {
        if (optimisticId) {
          this.#removeOptimisticallyDeletedObjects(changes, optimisticId);
          return;
        }
        return this.#handleServerRevalidation(changes);
      }
      return this.#handleLocalUpdate(changes, optimisticId);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger
          ?.child({ methodName: "maybeUpdateAndRevalidate" })
          .debug("in finally");
      }
    }
  };

  #removeOptimisticallyDeletedObjects(
    changes: Changes,
    optimisticId: OptimisticId,
  ): void {
    if (changes.deleted.size === 0) {
      return;
    }
    this.store.batch({ optimisticId, changes }, (batch) => {
      const existing = batch.read(this.cacheKey)?.value;
      if (!existing) {
        return;
      }
      const remaining = existing.data.filter(
        (key) => !changes.deleted.has(key),
      );
      if (remaining.length === existing.data.length) {
        return;
      }
      this._updateList(
        remaining,
        "loading",
        batch,
        { type: "clientOrdered" },
        existing.totalCount,
      );
    });
  }

  #handleServerRevalidation(changes: Changes): Promise<void> | undefined {
    for (const objectType of this.#objectTypes) {
      const added = changes.addedObjects.get(objectType);
      const modified = changes.modifiedObjects.get(objectType);
      if ((added && added.length > 0) || (modified && modified.length > 0)) {
        return this.revalidate(true);
      }
    }

    for (const deletedKey of changes.deleted) {
      if (
        deletedKey.type === "object" &&
        this.#objectTypes.has(deletedKey.otherKeys[OBJECT_API_NAME_IDX])
      ) {
        return this.revalidate(true);
      }
    }

    return undefined;
  }

  #getRelevantChanges(
    changes: Changes,
  ):
    | { addedObjects: ObjectHolder[]; modifiedObjects: ObjectHolder[] }
    | undefined {
    const resultApiName = this.#resultTypeApiName;
    const addedObjects = changes.addedObjects.get(resultApiName) ?? [];
    const modifiedObjects = changes.modifiedObjects.get(resultApiName) ?? [];

    let hasRelevantDeletions = false;
    for (const key of changes.deleted) {
      if (
        key.type === "object" &&
        key.otherKeys[OBJECT_API_NAME_IDX] === resultApiName
      ) {
        hasRelevantDeletions = true;
        break;
      }
    }

    if (
      addedObjects.length === 0 &&
      modifiedObjects.length === 0 &&
      !hasRelevantDeletions
    ) {
      return undefined;
    }

    return { addedObjects, modifiedObjects };
  }

  #handleLocalUpdate(
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined {
    const whereClause = this.#operations.where as
      | Canonical<SimpleWhereClause>
      | undefined;
    const effectiveWhere =
      whereClause ?? this.store.whereCanonicalizer.canonicalize({ $and: [] });

    const relevant = this.#getRelevantChanges(changes);
    if (!relevant) {
      return undefined;
    }

    const addedMatches = this.#classifyByWhereMatch(
      relevant.addedObjects,
      effectiveWhere,
    );
    const modifiedMatches = this.#classifyByWhereMatch(
      relevant.modifiedObjects,
      effectiveWhere,
    );

    const status =
      optimisticId ||
      addedMatches.uncertain.size > 0 ||
      modifiedMatches.uncertain.size > 0
        ? "loading"
        : "loaded";

    const { retVal: needsRevalidation } = this.store.batch(
      { optimisticId, changes },
      (batch) => {
        const existingKeys = new Set(batch.read(this.cacheKey)?.value?.data);

        const { newList, needsRevalidation } = reconcileListChanges(
          existingKeys,
          addedMatches.definite,
          relevant.modifiedObjects,
          modifiedMatches,
          changes.deleted,
          batch.optimisticWrite,
          (obj) => this.#getObjectCacheKey(obj),
        );

        const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
        this._updateList(
          newList,
          status,
          batch,
          { type: "clientOrdered" },
          existingTotalCount,
        );

        return needsRevalidation;
      },
    );

    if (needsRevalidation) {
      return this.revalidate(true);
    }
    return undefined;
  }

  #classifyByWhereMatch(
    objects: ReadonlyArray<ObjectHolder | InterfaceHolder>,
    whereClause: Canonical<SimpleWhereClause>,
  ): {
    definite: ReadonlySet<ObjectHolder | InterfaceHolder>;
    uncertain: ReadonlySet<ObjectHolder | InterfaceHolder>;
  } {
    const definite = new Set<ObjectHolder | InterfaceHolder>();
    const uncertain = new Set<ObjectHolder | InterfaceHolder>();
    for (const obj of objects) {
      if (objectMatchesWhereClause(obj, whereClause, true)) {
        definite.add(obj);
      } else if (objectMatchesWhereClause(obj, whereClause, false)) {
        uncertain.add(obj);
      }
    }
    return { definite, uncertain };
  }

  #getObjectCacheKey(obj: {
    $objectType: string;
    $primaryKey: string | number;
  }): ObjectCacheKey {
    const pk = obj.$primaryKey;
    return this.cacheKeys.get<ObjectCacheKey>(
      "object",
      obj.$objectType,
      pk,
      this.rdpConfig ?? undefined,
    );
  }

  invalidateObjectType = async (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    await this.#resolveObjectTypes();
    if (this.#objectTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };

  protected createPayload(params: {
    resolvedData: any[] | undefined;
    isOptimistic: boolean;
    status: Status;
    lastUpdated: number;
    totalCount?: string;
  }): ObjectSetPayload {
    return {
      resolvedList: params.resolvedData,
      isOptimistic: params.isOptimistic,
      fetchMore: this.fetchMore,
      hasMore: this.nextPageToken != null,
      status: params.status,
      lastUpdated: params.lastUpdated,
      objectSet: this.#composedObjectSet,
      totalCount: params.totalCount,
    };
  }
}

function reconcileListChanges(
  existingKeys: ReadonlySet<ObjectCacheKey>,
  addedDefiniteMatches: ReadonlySet<ObjectHolder | InterfaceHolder>,
  modifiedObjects: ReadonlyArray<ObjectHolder>,
  modifiedMatches: {
    definite: ReadonlySet<ObjectHolder | InterfaceHolder>;
    uncertain: ReadonlySet<ObjectHolder | InterfaceHolder>;
  },
  deleted: ReadonlySet<CacheKey>,
  isOptimistic: boolean,
  getObjectCacheKey: (obj: ObjectHolder | InterfaceHolder) => ObjectCacheKey,
): { newList: ObjectCacheKey[]; needsRevalidation: boolean } {
  const objectsToInsert = new Set<ObjectHolder | InterfaceHolder>(
    addedDefiniteMatches,
  );
  const keysToRemove = new Set<CacheKey>(deleted);

  let needsRevalidation = false;
  for (const obj of modifiedObjects) {
    if (modifiedMatches.definite.has(obj)) {
      if (!existingKeys.has(getObjectCacheKey(obj))) {
        objectsToInsert.add(obj);
      }
    } else if (!isOptimistic) {
      keysToRemove.add(getObjectCacheKey(obj));
      if (modifiedMatches.uncertain.has(obj)) {
        needsRevalidation = true;
      }
    }
  }

  const newList: ObjectCacheKey[] = [];
  for (const key of existingKeys) {
    if (!keysToRemove.has(key)) {
      newList.push(key);
    }
  }
  for (const obj of objectsToInsert) {
    newList.push(getObjectCacheKey(obj));
  }

  return { newList, needsRevalidation };
}
