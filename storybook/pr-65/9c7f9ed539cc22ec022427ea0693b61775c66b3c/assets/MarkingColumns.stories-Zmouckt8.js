import{f as p,j as e}from"./iframe-DhvlIxBR.js";import{O as i}from"./object-table-BlzMzEtW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D751HZEW.js";import"./Table-BeJwmrK7.js";import"./index-BUWZX9Fc.js";import"./Dialog-CauBFPi2.js";import"./cross-DZn8lU4z.js";import"./svgIconContainer-D7zjQbdd.js";import"./useBaseUiId-BHihEKOR.js";import"./InternalBackdrop-dLkigMoq.js";import"./composite-ChzFIgZg.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./index-BCPA7iDP.js";import"./useEventCallback-1TV48a-R.js";import"./SkeletonBar-DzkLjRbm.js";import"./LoadingCell-DSNHnbna.js";import"./ColumnConfigDialog-Chz-gxcq.js";import"./DraggableList-Ft09WuM9.js";import"./search-CvBEwoSG.js";import"./Input-BFA2W1TJ.js";import"./useControlled-8xbCIwQq.js";import"./Button-CIdQiPdq.js";import"./small-cross-Cee8oMTc.js";import"./ActionButton-NnowqCGc.js";import"./Checkbox-CRK3yBAC.js";import"./useValueChanged-BTfADdZZ.js";import"./CollapsiblePanel-CHRzUX6p.js";import"./MultiColumnSortDialog-D7EAWZt-.js";import"./MenuTrigger-C82M0KW8.js";import"./CompositeItem-feBepckq.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./getDisabledMountTransitionStyles-BdnwsIyN.js";import"./getPseudoElementBounds-uPAwbLXV.js";import"./chevron-down-Cl04GCmI.js";import"./index-BJZEpaeF.js";import"./error-CuUFOnij.js";import"./BaseCbacBanner-DDeSHTsc.js";import"./makeExternalStore-s_GWGbTj.js";import"./Tooltip-BcLf233N.js";import"./PopoverPopup-BwA2nu12.js";import"./debounce-H8a6NtlN.js";import"./useOsdkClient-Dk6VWjvC.js";import"./tick-peuNDpsM.js";import"./DropdownField-DGdaq3wW.js";import"./isEqual-DtpVwRjJ.js";import"./withOsdkMetrics-CNcx6if6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
