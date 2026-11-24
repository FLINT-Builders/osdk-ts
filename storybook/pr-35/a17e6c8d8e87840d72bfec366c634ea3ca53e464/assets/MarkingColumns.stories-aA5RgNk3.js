import{f as p,j as e}from"./iframe-BD75_EF7.js";import{O as i}from"./object-table-CPkwxh5D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5GixA8k.js";import"./Table-FgVFuUsS.js";import"./index-Cls2haw5.js";import"./Dialog-C-_mpGRm.js";import"./cross-sDHwt2tZ.js";import"./svgIconContainer-Bxdyh2CW.js";import"./useBaseUiId-Se7wVqTf.js";import"./InternalBackdrop-OFlNwMz7.js";import"./composite-yd7firDo.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./index-5f1XfQ5f.js";import"./useEventCallback-Vm032kvl.js";import"./SkeletonBar-DUDeQRgC.js";import"./LoadingCell-BCnm8IEN.js";import"./ColumnConfigDialog-gtPEqXRz.js";import"./DraggableList-OBslZTBK.js";import"./search-Fzzl4G8z.js";import"./Input-Dmpn7F0W.js";import"./useControlled-Bb3Vr0M6.js";import"./Button-DDPidDHF.js";import"./small-cross-D4uWwtpx.js";import"./ActionButton-CEyHVhsP.js";import"./Checkbox-ZqbWzpkB.js";import"./useValueChanged-BDuexEHu.js";import"./CollapsiblePanel-BQzsjVFn.js";import"./MultiColumnSortDialog-LyTWyKq1.js";import"./MenuTrigger-D7Kr2HLn.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./getDisabledMountTransitionStyles-DJ3nnjim.js";import"./getPseudoElementBounds-BMxp26EN.js";import"./chevron-down-34AB4AXv.js";import"./index-BnVPpix6.js";import"./error-BHpOgTkX.js";import"./BaseCbacBanner-iD_njxeV.js";import"./makeExternalStore-C1ym4VUW.js";import"./Tooltip-DhVNQ1yF.js";import"./PopoverPopup-C3w3Aozm.js";import"./debounce-pSE0AIDq.js";import"./useOsdkClient-c_BjiQFC.js";import"./tick-G5s6pEHr.js";import"./DropdownField-Bk2ZJyrJ.js";import"./isEqual-eXaYvtIg.js";import"./withOsdkMetrics-DR6keFLB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
