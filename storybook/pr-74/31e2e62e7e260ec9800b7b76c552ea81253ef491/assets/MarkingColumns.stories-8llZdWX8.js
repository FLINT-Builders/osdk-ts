import{f as p,j as e}from"./iframe-COTYg0i4.js";import{O as i}from"./object-table-B1lu4fBP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfUBPZQv.js";import"./Table-ZCwk7fhG.js";import"./index-DEWKwQ6D.js";import"./Dialog-DLvNEGJL.js";import"./cross-pC4h9ZyI.js";import"./svgIconContainer-DSLsCdLH.js";import"./useBaseUiId-B73nbOFb.js";import"./InternalBackdrop-B63HsuZ1.js";import"./composite-DLNSROKR.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./index-Pg3lOjt6.js";import"./useEventCallback-CiBIzJgi.js";import"./SkeletonBar-BZj2rBym.js";import"./LoadingCell-Ca5ZGjYw.js";import"./ColumnConfigDialog-B5wcyeXe.js";import"./DraggableList-Bs0zZt68.js";import"./search-Di0PIeOa.js";import"./Input-DNkGR0ru.js";import"./useControlled-BH9DAJiP.js";import"./Button-BBJ0BrTf.js";import"./small-cross-BeoxIJGH.js";import"./ActionButton-CW1Oc_Lq.js";import"./Checkbox-C0rTX60W.js";import"./useValueChanged-WywSbPil.js";import"./CollapsiblePanel-6UtNAlT1.js";import"./MultiColumnSortDialog-DHzW6erw.js";import"./MenuTrigger-Bl15Mqgy.js";import"./CompositeItem-D4sOZv8D.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./getDisabledMountTransitionStyles-CoNaBqL_.js";import"./getPseudoElementBounds-VlWfte-L.js";import"./chevron-down-DHzInOjp.js";import"./index-BaMA_XVs.js";import"./error-DlWRXjMl.js";import"./BaseCbacBanner-CRZYCJ0Z.js";import"./makeExternalStore-DrnQQ2FN.js";import"./Tooltip-g0ERy23q.js";import"./PopoverPopup-liRqNt55.js";import"./debounce-CRgNZ5We.js";import"./useOsdkClient-Crr6_6H9.js";import"./tick-C2nrRSUw.js";import"./DropdownField-CbKzwlXJ.js";import"./isEqual-CQOK5UhL.js";import"./withOsdkMetrics-0S6rxLM8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
