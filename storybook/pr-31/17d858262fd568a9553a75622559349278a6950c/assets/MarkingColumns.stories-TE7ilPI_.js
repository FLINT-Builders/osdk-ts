import{f as p,j as e}from"./iframe-KADiCVVG.js";import{O as i}from"./object-table-VyvO3zHi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D58te3M_.js";import"./Table-CHmSWGwI.js";import"./index-CFNt4Hmh.js";import"./Dialog-BrMSiJ5z.js";import"./cross-Cxbp7dY8.js";import"./svgIconContainer-Dv3Hq4or.js";import"./useBaseUiId-DkJPSlIK.js";import"./InternalBackdrop-C6IlLqVC.js";import"./composite-SeDB-2XH.js";import"./index-CrcqA8vK.js";import"./index-CTYcp5kB.js";import"./index-CEqQ6QN7.js";import"./useEventCallback-QpCC-2EL.js";import"./SkeletonBar-NKcCYLqD.js";import"./LoadingCell-BG8XSZ7n.js";import"./ColumnConfigDialog-BlNunUmb.js";import"./DraggableList-C33391pr.js";import"./search-Dgg_RVXN.js";import"./Input-Bp50UMCa.js";import"./useControlled-CuQRRHJE.js";import"./Button-DWsj5IuF.js";import"./small-cross-DK_a0kls.js";import"./ActionButton-B3RH8t1U.js";import"./Checkbox-CrYJaWfE.js";import"./useValueChanged-D-ZC5TBA.js";import"./CollapsiblePanel-DIHxo3eu.js";import"./MultiColumnSortDialog-Dj5wZOHK.js";import"./MenuTrigger-CyvVk3SH.js";import"./CompositeItem-DQEBOfk4.js";import"./ToolbarRootContext-uHdBl0yg.js";import"./getDisabledMountTransitionStyles-DX6hxhRU.js";import"./getPseudoElementBounds-fODdc8DP.js";import"./chevron-down-BTIEyZQH.js";import"./index-WuLuUP0t.js";import"./error-DeZcuLi4.js";import"./BaseCbacBanner-Cv2tUQFS.js";import"./makeExternalStore-DhWGArAF.js";import"./Tooltip-J-34mFdp.js";import"./PopoverPopup-CANNT4MX.js";import"./debounce-By9KAAPn.js";import"./useOsdkClient-D1mjkhYU.js";import"./tick-Dl42ovZM.js";import"./DropdownField-DkfBVsoR.js";import"./isEqual-C5JJSa9v.js";import"./withOsdkMetrics-DJ3LBRiG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
