import{f as p,j as e}from"./iframe-C18Efs5F.js";import{O as i}from"./object-table-DHoaKuW1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-syT6W8iC.js";import"./Table-B6mOhdKx.js";import"./index-BiAToM_x.js";import"./Dialog-Cx51cGgH.js";import"./cross-BKCn1P0Q.js";import"./svgIconContainer-aD2IgP3d.js";import"./useBaseUiId-CH-RqI0L.js";import"./InternalBackdrop-DfISNAb-.js";import"./composite-DGxpdZBR.js";import"./index-MJOAOM5u.js";import"./index-Bf7Y9tWm.js";import"./index-BDD6V94w.js";import"./useEventCallback-DIC_b8VN.js";import"./SkeletonBar-bmSFgVV9.js";import"./LoadingCell-CDZIaCbG.js";import"./ColumnConfigDialog-BmiZHTLm.js";import"./DraggableList-n1hTNqrt.js";import"./search-CkIpSze3.js";import"./Input-CU8PLyZJ.js";import"./useControlled-DX15Gk8S.js";import"./Button-C1f49fJS.js";import"./small-cross-C0nyK2gy.js";import"./ActionButton-qW0Ez94V.js";import"./Checkbox-DKptJVlY.js";import"./useValueChanged-BxaoofY_.js";import"./CollapsiblePanel-DblJ8HD2.js";import"./MultiColumnSortDialog-BsNZBYiB.js";import"./MenuTrigger-C5OcVShu.js";import"./CompositeItem-BfnoZmPC.js";import"./ToolbarRootContext-BtDS6Lf9.js";import"./getDisabledMountTransitionStyles-CxLtBXi2.js";import"./getPseudoElementBounds-B5_wrGbO.js";import"./chevron-down-B5XN77pz.js";import"./index-eBUb3cd0.js";import"./error-BbYA8FVM.js";import"./BaseCbacBanner-CqyQY9yF.js";import"./makeExternalStore-6HXO66jA.js";import"./Tooltip-Bwivcl2f.js";import"./PopoverPopup-D-mHvT1H.js";import"./debounce-BBaPqMcK.js";import"./useOsdkClient-CBIB33XW.js";import"./tick-rK0_sMUG.js";import"./DropdownField-DwQ4_zC_.js";import"./isEqual-CfbuowZK.js";import"./withOsdkMetrics-D2m3J2jO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
