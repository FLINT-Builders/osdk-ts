import{f as p,j as e}from"./iframe-BimQ5I7B.js";import{O as i}from"./object-table-ncEil8FU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVgp4Odj.js";import"./Table-qM2MBR7T.js";import"./index-Bterpizd.js";import"./Dialog-Co03GsOl.js";import"./cross-B1ycp5D_.js";import"./svgIconContainer-B7sYR9CH.js";import"./useBaseUiId-C8madkWI.js";import"./InternalBackdrop-CX3KLEvW.js";import"./composite-CFQYUg6D.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./index-8RuBob7j.js";import"./useEventCallback-p4N8Eyn2.js";import"./SkeletonBar-Bt_B5dG6.js";import"./LoadingCell-DWCuiV5v.js";import"./ColumnConfigDialog-BOYtEBmh.js";import"./DraggableList-C1YCs_mx.js";import"./search-2ZJHkAe4.js";import"./Input-BgCDGlWE.js";import"./useControlled-BZPlZ-l4.js";import"./Button-BDC1u4I1.js";import"./small-cross-FAi29SOY.js";import"./ActionButton-ButrV8bA.js";import"./Checkbox-DTBdc949.js";import"./useValueChanged-DYoiWqYd.js";import"./CollapsiblePanel-CpyR6Z1C.js";import"./MultiColumnSortDialog-YtfNFFnp.js";import"./MenuTrigger-BQKwEvQH.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./getDisabledMountTransitionStyles-DrpCBbHi.js";import"./getPseudoElementBounds-BKz8oGoA.js";import"./chevron-down-BSMcI5Uh.js";import"./index-Drk-T-LH.js";import"./error-Cm6SmQec.js";import"./BaseCbacBanner-D-qTc9yO.js";import"./makeExternalStore-BMJZ0gXh.js";import"./Tooltip-CYgKzjZV.js";import"./PopoverPopup-CqVwxtDC.js";import"./debounce-Dr3bOVOf.js";import"./useOsdkClient-B6IDuaBu.js";import"./tick-B97f0SKP.js";import"./DropdownField-vEf4IKfs.js";import"./isEqual-CqUAJ4RL.js";import"./withOsdkMetrics-D3LiHDOi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
