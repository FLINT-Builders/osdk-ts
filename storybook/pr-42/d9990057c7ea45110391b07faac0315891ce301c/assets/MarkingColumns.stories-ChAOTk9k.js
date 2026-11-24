import{f as p,j as e}from"./iframe-C-2fM64A.js";import{O as i}from"./object-table-DnfGK1BU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5l20kbgh.js";import"./Table-B8exTvRS.js";import"./index-Dyfx2zPa.js";import"./Dialog-WscBU8CC.js";import"./cross-CgNS1GgR.js";import"./svgIconContainer-C9IKjxfB.js";import"./useBaseUiId-CTryWo_g.js";import"./InternalBackdrop-UxmxiKm7.js";import"./composite-DwmZEnpk.js";import"./index-BdbAVji3.js";import"./index-BbVHPZNY.js";import"./index-D8oWn7w6.js";import"./useEventCallback-BPmnomYn.js";import"./SkeletonBar-DU5JM7iL.js";import"./LoadingCell-CRd4Lps8.js";import"./ColumnConfigDialog-Kt7u0FdA.js";import"./DraggableList-C9U23trS.js";import"./search-CLHFOlZI.js";import"./Input-Dlx-frSm.js";import"./useControlled-BF8LnBHR.js";import"./Button-De1R0ypn.js";import"./small-cross-BklgATg6.js";import"./ActionButton-487khAzZ.js";import"./Checkbox-DOMVATt6.js";import"./useValueChanged-CHlXRDud.js";import"./CollapsiblePanel-DyD1UVL_.js";import"./MultiColumnSortDialog-DxphMA5D.js";import"./MenuTrigger-Z7Z4FSrc.js";import"./CompositeItem-CUIe3tWP.js";import"./ToolbarRootContext-BnUbB36R.js";import"./getDisabledMountTransitionStyles-CxaJ42JS.js";import"./getPseudoElementBounds-CqzFYEIN.js";import"./chevron-down-BIEm0AX1.js";import"./index-cGgaE_Im.js";import"./error-DCBUh_j7.js";import"./BaseCbacBanner-D0zM5BSH.js";import"./makeExternalStore-C-9kweRw.js";import"./Tooltip-CbS0pN8T.js";import"./PopoverPopup-ZZdakFoe.js";import"./debounce-Cqmr5QPm.js";import"./useOsdkClient-Bq_YKUUv.js";import"./tick-B4a_6SHF.js";import"./DropdownField-CrZRfkaF.js";import"./isEqual-BB86EMHb.js";import"./withOsdkMetrics-HX80CHoP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
