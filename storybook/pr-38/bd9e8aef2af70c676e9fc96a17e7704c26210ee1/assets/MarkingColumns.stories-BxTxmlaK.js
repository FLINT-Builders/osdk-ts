import{f as p,j as e}from"./iframe-Ci4kbbjH.js";import{O as i}from"./object-table-CMpsxPRK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DNzzp09Q.js";import"./Table-BZwMeVfc.js";import"./index-BzmIzG5f.js";import"./Dialog-Dlc2e5wE.js";import"./cross-Baj2Wcx8.js";import"./svgIconContainer-DoVy9nda.js";import"./useBaseUiId-yqmrIV5M.js";import"./InternalBackdrop-BOeYS53O.js";import"./composite-CkTQf-5C.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./index-D8Mu-PFN.js";import"./useEventCallback-BVSpbYHx.js";import"./SkeletonBar-B-AUQL2s.js";import"./LoadingCell-4knZ9c1y.js";import"./ColumnConfigDialog-CC_OP8zR.js";import"./DraggableList-CydMIqIu.js";import"./search-kOpaiDxH.js";import"./Input-DEpJNDRU.js";import"./useControlled-CyWOUz9h.js";import"./Button-DGtRliq1.js";import"./small-cross-CQm56ECa.js";import"./ActionButton-Cw_Fc-zI.js";import"./Checkbox-n8W4S_Az.js";import"./useValueChanged-DxNmdQBj.js";import"./CollapsiblePanel-6Zz-7gJ1.js";import"./MultiColumnSortDialog-DrfzYAq2.js";import"./MenuTrigger-D62nUIK8.js";import"./CompositeItem-Cku2i2Hz.js";import"./ToolbarRootContext-rMCKHck4.js";import"./getDisabledMountTransitionStyles-DhKtaVzl.js";import"./getPseudoElementBounds-m0MFy2PT.js";import"./chevron-down-HIxicj7V.js";import"./index-DHl6CAnB.js";import"./error-BDWAkWkg.js";import"./BaseCbacBanner-DEkDMCDW.js";import"./makeExternalStore-DM45UVPU.js";import"./Tooltip-RdLhjfP3.js";import"./PopoverPopup-DkzyhZf2.js";import"./debounce-BxJnFfrY.js";import"./useOsdkClient-BuBxCDzw.js";import"./tick-Boowirwm.js";import"./DropdownField-DDcc5zir.js";import"./isEqual-CHleId0a.js";import"./withOsdkMetrics-5lZ7fCNU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
