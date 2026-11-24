import{f as p,j as e}from"./iframe-Bf8iAqL7.js";import{O as i}from"./object-table-CtvztlQ4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-A1AS_NiL.js";import"./Table-BlcY20YB.js";import"./index-Db0mdORg.js";import"./Dialog-BbuGk_ef.js";import"./cross-DO1QLnzH.js";import"./svgIconContainer-D52qXfX5.js";import"./useBaseUiId-C3S3f6WK.js";import"./InternalBackdrop-BlMO4Ova.js";import"./composite-DIFH8mgU.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./index-C0BMu-E0.js";import"./useEventCallback-CVkQOs3D.js";import"./SkeletonBar-C8ox7Pyn.js";import"./LoadingCell-DBPZu4Hz.js";import"./ColumnConfigDialog-CE5V5I8x.js";import"./DraggableList-bepDk-q0.js";import"./search-k-BDZpAM.js";import"./Input-3S863M3T.js";import"./useControlled-BxkhcEK2.js";import"./Button-H641EagL.js";import"./small-cross-BmVVnuZH.js";import"./ActionButton-CI5S3k3v.js";import"./Checkbox-CIK4xHnB.js";import"./useValueChanged-B4RhT_mT.js";import"./CollapsiblePanel-BR9JLyXV.js";import"./MultiColumnSortDialog-CQv6RXwg.js";import"./MenuTrigger-CFCoJv4p.js";import"./CompositeItem-C29Fnmef.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./getDisabledMountTransitionStyles-BkOgHLaz.js";import"./getPseudoElementBounds-BjiN3SJE.js";import"./chevron-down-BF98-CIj.js";import"./index-CJ290pxf.js";import"./error-DTUZUWgs.js";import"./BaseCbacBanner-ibJi_Mqm.js";import"./makeExternalStore-BeW1g1b1.js";import"./Tooltip-D1ph3_EU.js";import"./PopoverPopup-JpuFEWOE.js";import"./debounce-cgA55fD7.js";import"./useOsdkClient-Cvr99OkN.js";import"./tick-BLri3Pi1.js";import"./DropdownField-RxrVsgU9.js";import"./isEqual-DUkrTRcX.js";import"./withOsdkMetrics-BNJYvdSI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
