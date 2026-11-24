import{f as p,j as e}from"./iframe-Cfy1VfwI.js";import{O as i}from"./object-table-OGRSCvgp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D7hEGIHW.js";import"./Table-mlnthY26.js";import"./index-D9qChlkT.js";import"./Dialog-DF9EtPFZ.js";import"./cross-DCuCUk-Y.js";import"./svgIconContainer-DIZS-ng4.js";import"./useBaseUiId-Bl3BCz40.js";import"./InternalBackdrop-DJybReYS.js";import"./composite-DcidvM5B.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./index-CK2Vk24k.js";import"./useEventCallback-dqu5-SHz.js";import"./SkeletonBar-BuAHtDLm.js";import"./LoadingCell-gSWW82f3.js";import"./ColumnConfigDialog-CfsTDY2L.js";import"./DraggableList-xqj0cC0n.js";import"./search-m5EKgstc.js";import"./Input-DeAzpHTT.js";import"./useControlled-Bb34JJQm.js";import"./Button-NH8o7MdQ.js";import"./small-cross-CbTS0UJl.js";import"./ActionButton-BE3V6UYF.js";import"./Checkbox-D95EDxuQ.js";import"./useValueChanged-D8jzwMFp.js";import"./CollapsiblePanel-D9bDfrrQ.js";import"./MultiColumnSortDialog-DKBmJLiz.js";import"./MenuTrigger-C6MWEMLO.js";import"./CompositeItem-BJZgOdXE.js";import"./ToolbarRootContext-BGtapBDY.js";import"./getDisabledMountTransitionStyles-BcyKzADO.js";import"./getPseudoElementBounds-CR_thFgC.js";import"./chevron-down-LTPIgxFV.js";import"./index-Bx8gvAM_.js";import"./error-CmqKN1z-.js";import"./BaseCbacBanner-BuhCxIpY.js";import"./makeExternalStore-DUu0ElVX.js";import"./Tooltip-Ny6lMCIs.js";import"./PopoverPopup-Zy0TwZWf.js";import"./debounce-FHf42ThN.js";import"./useOsdkClient-BcTcp2zs.js";import"./tick-Dk0AG9pV.js";import"./DropdownField-BycB_EL4.js";import"./isEqual-CoKKqdlc.js";import"./withOsdkMetrics-COKuhu-t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
