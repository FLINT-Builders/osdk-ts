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

import type { RequiredMarkingGroup, RestrictionsStatus } from "../types.js";

export interface ValidationContext {
  isValid: boolean;
  requiredMarkingGroups: ReadonlyArray<RequiredMarkingGroup>;
  selectedIds: string[];
  disallowedMarkingIds: readonly string[];
  userSatisfiesMarkings: boolean;
  restrictionsStatus?: RestrictionsStatus;
}

export function getSubmitDisabledReason(
  ctx: ValidationContext,
): string | undefined {
  if (ctx.isValid) {
    return undefined;
  }
  if (ctx.restrictionsStatus === "loading") {
    return "Checking marking restrictions...";
  }
  if (ctx.restrictionsStatus === "error") {
    return "Unable to verify marking restrictions. Please try again.";
  }
  if (ctx.restrictionsStatus === "unavailable") {
    return ctx.selectedIds.length === 0
      ? "Select at least one marking."
      : "Marking restrictions have not been verified.";
  }
  if (ctx.requiredMarkingGroups.length > 0) {
    return "Selected markings do not include all required markings.";
  }
  const selectedSet = new Set(ctx.selectedIds);
  const hasDisallowedSelected = ctx.disallowedMarkingIds.some((id) =>
    selectedSet.has(id),
  );
  if (hasDisallowedSelected) {
    return "Selections include disallowed markings.";
  }
  if (!ctx.userSatisfiesMarkings) {
    return "Invalid configuration of markings. Please ensure that you have permission to use all selected markings.";
  }
  return "Invalid marking selection.";
}
