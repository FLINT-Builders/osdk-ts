import{f as p,j as e}from"./iframe-DVXjYepe.js";import{O as i}from"./object-table-DqpNm8Hb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoQZ9wQO.js";import"./Table-CrAztDvv.js";import"./index-xEG3qOed.js";import"./Dialog-CrjAt9qc.js";import"./cross-B8UbpGAg.js";import"./svgIconContainer-BJPtXOwn.js";import"./useBaseUiId--5oKpwvu.js";import"./InternalBackdrop-inXTS0yx.js";import"./composite-D8RKaTKg.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./index-CSeYDT8l.js";import"./useEventCallback-DkAeY7hG.js";import"./SkeletonBar-SOwc_Qrs.js";import"./LoadingCell-p7qL3SN_.js";import"./ColumnConfigDialog-oDYR3l_f.js";import"./DraggableList-CjcyPHW-.js";import"./search-B-9-6Ofx.js";import"./Input-BN6UqcCj.js";import"./useControlled-urWeze7M.js";import"./Button-CMf4Lntc.js";import"./small-cross-CXxGQkOn.js";import"./ActionButton-FeoD3QJR.js";import"./Checkbox-DWqsnJ9A.js";import"./useValueChanged-DQdsowWS.js";import"./CollapsiblePanel-BtSjatWQ.js";import"./MultiColumnSortDialog-sBOZ2Kl1.js";import"./MenuTrigger-D_kSWag0.js";import"./CompositeItem-Bmf0StTl.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./getDisabledMountTransitionStyles-C9YsekIJ.js";import"./getPseudoElementBounds-DaAwz07x.js";import"./chevron-down-Bzvk1BIc.js";import"./index-BOgvpjI5.js";import"./error-DfVU-Ijw.js";import"./BaseCbacBanner-Qy2snOko.js";import"./makeExternalStore-BgZoDepZ.js";import"./Tooltip-CJ_e6i_k.js";import"./PopoverPopup-um6wJ3Q9.js";import"./debounce-BIK5BkHx.js";import"./useOsdkClient-BXsdu0M4.js";import"./tick-DfRCIBAT.js";import"./DropdownField-v3RWXYr3.js";import"./isEqual-w6xswxHo.js";import"./withOsdkMetrics-DmcVbwBr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
