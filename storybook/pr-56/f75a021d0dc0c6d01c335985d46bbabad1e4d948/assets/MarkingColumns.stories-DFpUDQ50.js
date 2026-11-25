import{f as p,j as e}from"./iframe-SC996r8Q.js";import{O as i}from"./object-table-DOdp5ZjA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4MonG5NX.js";import"./Table-BHqFADw2.js";import"./index-wDhWF-Jn.js";import"./Dialog-Bjl7oJOt.js";import"./cross-CSzOPxz_.js";import"./svgIconContainer-B-5c0m9a.js";import"./useBaseUiId-BGvjsW3d.js";import"./InternalBackdrop-DNC5MyZD.js";import"./composite-Gzk6HQ8U.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./index-85g-pXui.js";import"./useEventCallback-CgwfU7lc.js";import"./SkeletonBar-pBY25qw4.js";import"./LoadingCell-BHzQ8MOB.js";import"./ColumnConfigDialog-yFcbmUS6.js";import"./DraggableList-B0Mn8gGq.js";import"./search-DMkfs-8L.js";import"./Input-CJVpnIyi.js";import"./useControlled-BSXRDWWj.js";import"./Button-4P3mfFZX.js";import"./small-cross-HUX1_LBw.js";import"./ActionButton-ByIO7PT5.js";import"./Checkbox-DphhRBj3.js";import"./useValueChanged-CCo4wtuS.js";import"./CollapsiblePanel-p7nu56Bn.js";import"./MultiColumnSortDialog-DlliR06t.js";import"./MenuTrigger-CJZwVEpf.js";import"./CompositeItem-CYqhRUaL.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./getDisabledMountTransitionStyles-spVW-j4h.js";import"./getPseudoElementBounds-a71QRY78.js";import"./chevron-down-Bymbl15e.js";import"./index-lAH3DKJQ.js";import"./error-BsBvF-VX.js";import"./BaseCbacBanner-BzdpJ56M.js";import"./makeExternalStore-CnxIOnyb.js";import"./Tooltip-C5K7kdO5.js";import"./PopoverPopup-CehfZg5Y.js";import"./debounce-DtZn3Jt8.js";import"./useOsdkClient-D5cV3NWU.js";import"./tick-DYksh_VF.js";import"./DropdownField-C60HSoXi.js";import"./isEqual-BbgfJPkf.js";import"./withOsdkMetrics-Dlvqw_Pf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
