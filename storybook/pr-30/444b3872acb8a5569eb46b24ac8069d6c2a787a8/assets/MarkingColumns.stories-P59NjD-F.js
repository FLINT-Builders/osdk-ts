import{f as p,j as e}from"./iframe-DTT6nz7o.js";import{O as i}from"./object-table-BuFYa5XZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1xGfzPI.js";import"./Table-B9_GvBk1.js";import"./index-CTxHEiTU.js";import"./Dialog-t6Y6xSYi.js";import"./cross-BgvHTgXn.js";import"./svgIconContainer-CgqmpPt6.js";import"./useBaseUiId-eE74TdDR.js";import"./InternalBackdrop-CzODpXWQ.js";import"./composite-Cb2l-Kwg.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./index-C79qnBzb.js";import"./useEventCallback-D3wxufVs.js";import"./SkeletonBar-BqNZZo2k.js";import"./LoadingCell-C6lmrfbQ.js";import"./ColumnConfigDialog-R-laWYXZ.js";import"./DraggableList-DYY0D_Bu.js";import"./search-pmwVSsC3.js";import"./Input-DUSBBA6M.js";import"./useControlled-nQOh3ft9.js";import"./Button-CQ5X8faA.js";import"./small-cross-GWNLyjvR.js";import"./ActionButton-DCl1Vnp4.js";import"./Checkbox-DrrX-Z5B.js";import"./useValueChanged-Cmi0P8zg.js";import"./CollapsiblePanel-DaCbRpGf.js";import"./MultiColumnSortDialog-Bs_GGBzS.js";import"./MenuTrigger-HOlRD3Yu.js";import"./CompositeItem-Wk4nNvBM.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./getDisabledMountTransitionStyles-Bvaoj8VB.js";import"./getPseudoElementBounds-DSrPRsVI.js";import"./chevron-down-C4sokJMh.js";import"./index-BU5fSJ65.js";import"./error-DTxCn2-C.js";import"./BaseCbacBanner-ByjZ5iyO.js";import"./makeExternalStore-S1Q9iP-N.js";import"./Tooltip-BcSgBIwr.js";import"./PopoverPopup-B7rrkVjJ.js";import"./debounce-DxKPhidQ.js";import"./useOsdkClient-DvmPcDA4.js";import"./tick-CPW7UZx4.js";import"./DropdownField-BhgIN6ih.js";import"./isEqual-hFo8Qatz.js";import"./withOsdkMetrics-pvC18r39.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
