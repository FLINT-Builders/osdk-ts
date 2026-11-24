import{f as p,j as e}from"./iframe-DzUHN8ca.js";import{O as i}from"./object-table-a42T1fjt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--9RxGpgt.js";import"./Table-XGjWcrOi.js";import"./index-D6O_ioKN.js";import"./Dialog-BhT1ko5e.js";import"./cross-Ba2yr2aR.js";import"./svgIconContainer-PY62KixA.js";import"./useBaseUiId-sxd6xo0y.js";import"./InternalBackdrop-DkhciH2d.js";import"./composite-BXmDwDE8.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./index-CTEKPH5s.js";import"./useEventCallback-DYoF4AP_.js";import"./SkeletonBar-DWrRSBfJ.js";import"./LoadingCell-BDGcErL7.js";import"./ColumnConfigDialog-D9R8QxpQ.js";import"./DraggableList-B5_EIa_U.js";import"./search-CykjRKOt.js";import"./Input-miTMtrPD.js";import"./useControlled-C2MYeSWY.js";import"./Button-C_9t5m1R.js";import"./small-cross-Du7Izp1r.js";import"./ActionButton-D40edvmP.js";import"./Checkbox-C57PggZb.js";import"./useValueChanged-BW_6iowi.js";import"./CollapsiblePanel-CvKRyI0p.js";import"./MultiColumnSortDialog-C0w9MWJS.js";import"./MenuTrigger-BMQAqfRy.js";import"./CompositeItem-y4Pst_mH.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./getDisabledMountTransitionStyles-aw8w9V1B.js";import"./getPseudoElementBounds-DGlfh4Q1.js";import"./chevron-down-gUZOAhoK.js";import"./index-WtiTKFpP.js";import"./error-BMVJPOE-.js";import"./BaseCbacBanner-D-yoKQBL.js";import"./makeExternalStore-BysZSooj.js";import"./Tooltip-D32WVKHM.js";import"./PopoverPopup-Dv9M1d_z.js";import"./debounce-UzKpvpaD.js";import"./useOsdkClient-y4syjW26.js";import"./tick-6VSUfxzF.js";import"./DropdownField-v2O8kawS.js";import"./isEqual-Brm8eKHv.js";import"./withOsdkMetrics-DpCE12mV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
