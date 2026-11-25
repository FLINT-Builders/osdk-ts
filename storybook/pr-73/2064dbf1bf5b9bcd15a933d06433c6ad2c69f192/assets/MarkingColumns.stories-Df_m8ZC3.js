import{f as p,j as e}from"./iframe-B8aqmfIp.js";import{O as i}from"./object-table-C2Z8fJQm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BobhKb97.js";import"./Table-B5gMWbyg.js";import"./index-CCmxkdzs.js";import"./Dialog-QxdoqVVk.js";import"./cross-DRKTQkbP.js";import"./svgIconContainer-FLeE6-vR.js";import"./useBaseUiId-CHkfiAje.js";import"./InternalBackdrop-BaQEyxva.js";import"./composite-1RtIqJwV.js";import"./index-DKejFzow.js";import"./index-BSGZXMXF.js";import"./index-BdH5xGxi.js";import"./useEventCallback-CZb3TsYF.js";import"./SkeletonBar-7eOqRXW8.js";import"./LoadingCell-CLcKJ9dD.js";import"./ColumnConfigDialog-JP_AUJeg.js";import"./DraggableList-B_z1tppe.js";import"./search-Bqpxl0Af.js";import"./Input-CgHBa2SL.js";import"./useControlled-l0oFblvc.js";import"./Button-DdUUuDX9.js";import"./small-cross-DfPj-GvA.js";import"./ActionButton-DCobCyrf.js";import"./Checkbox-CotItJ6c.js";import"./useValueChanged-CbLTECGR.js";import"./CollapsiblePanel-DTTY03tg.js";import"./MultiColumnSortDialog-oSmZ6zrX.js";import"./MenuTrigger-CxgDCtCW.js";import"./CompositeItem-n7lnxb-_.js";import"./ToolbarRootContext-DSbkosxV.js";import"./getDisabledMountTransitionStyles-VoFjrkuY.js";import"./getPseudoElementBounds-FKAYaJ1n.js";import"./chevron-down-BVT6rcNJ.js";import"./index-Cywz4iSb.js";import"./error-DApsL9NG.js";import"./BaseCbacBanner-DLWay6c-.js";import"./makeExternalStore-DGiu_EM6.js";import"./Tooltip-DXOq14Zl.js";import"./PopoverPopup-DU-xFQkp.js";import"./debounce-CV6t4kI7.js";import"./useOsdkClient-W6a7pgjt.js";import"./tick-C64PnUJ8.js";import"./DropdownField-BW4-2DGd.js";import"./isEqual-DY3SpEFX.js";import"./withOsdkMetrics-C411Tmmb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
