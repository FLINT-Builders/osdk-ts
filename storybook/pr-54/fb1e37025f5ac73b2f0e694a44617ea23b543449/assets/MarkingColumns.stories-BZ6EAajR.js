import{f as p,j as e}from"./iframe-DM4xkxPz.js";import{O as i}from"./object-table-BwG6GD9b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjYsY0e4.js";import"./Table-CcKGWX2z.js";import"./index-CA3PhY9C.js";import"./Dialog-DiB6aMIR.js";import"./cross-BIpUExIv.js";import"./svgIconContainer-DRHE02a1.js";import"./useBaseUiId-06FsOnRS.js";import"./InternalBackdrop-atnimPNE.js";import"./composite-DPjRORK_.js";import"./index-BaPxcL-U.js";import"./index-CKWQIFc6.js";import"./index-HBJubKVl.js";import"./useEventCallback-xkxPv1XK.js";import"./SkeletonBar-CAreatfx.js";import"./LoadingCell-DZgkJAKm.js";import"./ColumnConfigDialog-CkTEzgSA.js";import"./DraggableList-DO4N10B8.js";import"./search-ChvjyncO.js";import"./Input-BtFpG8L-.js";import"./useControlled-DWhJIBEC.js";import"./Button-D6sOWWJg.js";import"./small-cross-DlPYjgwz.js";import"./ActionButton-DiqtwetY.js";import"./Checkbox-CJICDHUp.js";import"./useValueChanged-BvA5FaKj.js";import"./CollapsiblePanel-PDqHktLP.js";import"./MultiColumnSortDialog-DqGL67Xh.js";import"./MenuTrigger-BzaLQE7D.js";import"./CompositeItem-D5I-ZnjA.js";import"./ToolbarRootContext-DaxififC.js";import"./getDisabledMountTransitionStyles-cqxjXfXt.js";import"./getPseudoElementBounds-BzpbsaWw.js";import"./chevron-down-2d4v9sYb.js";import"./index-DpHY-Tke.js";import"./error-C2OR8u8c.js";import"./BaseCbacBanner-B4_4gqDk.js";import"./makeExternalStore-oSWvZmSa.js";import"./Tooltip-CyL_Vgso.js";import"./PopoverPopup-C2RXGzDC.js";import"./debounce-BTJweAvj.js";import"./useOsdkClient-tJuqjJBg.js";import"./tick-VaEeN5iX.js";import"./DropdownField-DO3iEBks.js";import"./isEqual-DBOXNISH.js";import"./withOsdkMetrics-DK0sAIWr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
