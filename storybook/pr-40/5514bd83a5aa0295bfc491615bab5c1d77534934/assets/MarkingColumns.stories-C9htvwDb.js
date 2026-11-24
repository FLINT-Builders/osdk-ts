import{f as p,j as e}from"./iframe-BYlTxwz3.js";import{O as i}from"./object-table-B_gEyXcz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dkt_E4uP.js";import"./Table-CBByl1CU.js";import"./index-Cx2xXvCr.js";import"./Dialog-D6HbhEZo.js";import"./cross-C7CDDNJi.js";import"./svgIconContainer-CCHa_D4L.js";import"./useBaseUiId-CHVkZxqH.js";import"./InternalBackdrop-BnI_3_S0.js";import"./composite-Oihes5Z3.js";import"./index-BLjbxIz_.js";import"./index-BCCUn5eT.js";import"./index-B-CUWwrE.js";import"./useEventCallback-6aIfP3km.js";import"./SkeletonBar-Csj_wsFv.js";import"./LoadingCell-DQ0vwGsu.js";import"./ColumnConfigDialog-DggvHg5b.js";import"./DraggableList-B-WThPOH.js";import"./search-CfzUYg2F.js";import"./Input-D3288P-o.js";import"./useControlled-2dwLF0eF.js";import"./Button-Dplh-cKa.js";import"./small-cross-aeJJ7SSq.js";import"./ActionButton-C_0V6gM3.js";import"./Checkbox-CiqviK43.js";import"./useValueChanged-vNkrsn5_.js";import"./CollapsiblePanel-yPU4El-7.js";import"./MultiColumnSortDialog-BrlL2EkL.js";import"./MenuTrigger-BN1Z5olc.js";import"./CompositeItem-Bu4ubHAW.js";import"./ToolbarRootContext-oJ3Dqb0I.js";import"./getDisabledMountTransitionStyles-BV5FL582.js";import"./getPseudoElementBounds-DoGGqUvJ.js";import"./chevron-down-DLOLLqcE.js";import"./index-C8P2LxHs.js";import"./error-Ox3QZuhk.js";import"./BaseCbacBanner-BVaKmTmi.js";import"./makeExternalStore-DAxSMl-f.js";import"./Tooltip-Cj8Rzvni.js";import"./PopoverPopup-BlhfYCCJ.js";import"./debounce-C0op11OR.js";import"./useOsdkClient-Cu-1fp9t.js";import"./tick--pYF85S_.js";import"./DropdownField-D7WS7Sjf.js";import"./isEqual-CxBRAjWE.js";import"./withOsdkMetrics-C0BX98Nf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
