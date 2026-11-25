import{f as p,j as e}from"./iframe-CXJvlF9f.js";import{O as i}from"./object-table-hPC5NeVU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4wndH43.js";import"./Table-BoOD-L8G.js";import"./index-DbRhx2FS.js";import"./Dialog-Dvb2pSOZ.js";import"./cross-smvXwA6k.js";import"./svgIconContainer-JnMWnddt.js";import"./useBaseUiId-CS56QWvK.js";import"./InternalBackdrop-CqtSiTpM.js";import"./composite-BN9qtXxc.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./index-Dp2pLEF1.js";import"./useEventCallback-B_1Z_QCH.js";import"./SkeletonBar-C1x9OOkX.js";import"./LoadingCell-CAYnxbGs.js";import"./ColumnConfigDialog-Cky7nE9P.js";import"./DraggableList-Bk7Jl0QM.js";import"./search-B7r0qDmR.js";import"./Input-Bsqv1_ng.js";import"./useControlled-Cpt07hfE.js";import"./Button-CsdSAMDu.js";import"./small-cross-DMWa4kPj.js";import"./ActionButton-CsFrYYGI.js";import"./Checkbox-Bi9_OJUW.js";import"./useValueChanged-Byd_0DcO.js";import"./CollapsiblePanel-CkEuIXiI.js";import"./MultiColumnSortDialog-D3T1AI8W.js";import"./MenuTrigger-DthotZrc.js";import"./CompositeItem-CThXZzFK.js";import"./ToolbarRootContext-CYby2zsu.js";import"./getDisabledMountTransitionStyles-CgmP4-RG.js";import"./getPseudoElementBounds-CgYpcBOV.js";import"./chevron-down-xbAc8Fo2.js";import"./index-Doi1M16Z.js";import"./error-D6bGjg1T.js";import"./BaseCbacBanner-C4rNu7bR.js";import"./makeExternalStore-BjpJhFKl.js";import"./Tooltip-O-viL_pu.js";import"./PopoverPopup-BaZKNv6D.js";import"./debounce-V9eN7pLv.js";import"./useOsdkClient-C_VqVBcI.js";import"./tick-CbWMloSO.js";import"./DropdownField-C_cDwqJ_.js";import"./isEqual-CDTky0Be.js";import"./withOsdkMetrics-C6MxL57R.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
