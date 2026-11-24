import{f as p,j as e}from"./iframe-DGWnG-cP.js";import{O as i}from"./object-table-rQF7zj4h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3cdipQWl.js";import"./Table-569peSy1.js";import"./index-C0zbU9rL.js";import"./Dialog-DsXbvmJy.js";import"./cross-DlI64HlO.js";import"./svgIconContainer-B16Mzywl.js";import"./useBaseUiId-DVxcG4_I.js";import"./InternalBackdrop-BJR0xs8j.js";import"./composite-B33N3UBB.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./index-D_bbN_cd.js";import"./useEventCallback-CxJpG0mK.js";import"./SkeletonBar-DvB39Rdm.js";import"./LoadingCell-BvgZglXZ.js";import"./ColumnConfigDialog-BS73iygW.js";import"./DraggableList-CliT0f_Y.js";import"./search-UMxzoTWH.js";import"./Input-DwaikOPa.js";import"./useControlled-BBmR2WL-.js";import"./Button-BcmhO12Y.js";import"./small-cross-DmdM27Kn.js";import"./ActionButton-WSvr-wI_.js";import"./Checkbox-SQRRgXI2.js";import"./useValueChanged-ChEZciPX.js";import"./CollapsiblePanel-CVt-m52O.js";import"./MultiColumnSortDialog-DPhx5BMU.js";import"./MenuTrigger-BCDlzjR7.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./getDisabledMountTransitionStyles-CyXwlfcm.js";import"./getPseudoElementBounds-B9TtSSG4.js";import"./chevron-down-BFuZIkTt.js";import"./index-CrcNgxS8.js";import"./error-qdaiM9ZH.js";import"./BaseCbacBanner-lZp0UVMg.js";import"./makeExternalStore-WGQ2sL4W.js";import"./Tooltip-WUVYr8N6.js";import"./PopoverPopup-B75UTycU.js";import"./debounce-BI_4kNch.js";import"./useOsdkClient-D8G8-hzC.js";import"./tick-DVANyX1P.js";import"./DropdownField-nTKXuw1F.js";import"./isEqual-_zVrSe3d.js";import"./withOsdkMetrics-UcMYR7XC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
