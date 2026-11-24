import{f as p,j as e}from"./iframe-C4244Bm_.js";import{O as i}from"./object-table-CWI95tL9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci98jyni.js";import"./Table-DLA6JNP_.js";import"./index-ClH59eky.js";import"./Dialog-rWA87_5x.js";import"./cross-Ndayjde5.js";import"./svgIconContainer-C9qKBg5g.js";import"./useBaseUiId-X9XCdkpw.js";import"./InternalBackdrop-BgtvNRvm.js";import"./composite-Ckn5xSHc.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./index-Bi8RWIrI.js";import"./useEventCallback-DjDRvhxl.js";import"./SkeletonBar-1wmzXisw.js";import"./LoadingCell-JMXuLf4_.js";import"./ColumnConfigDialog-D7iHn2dh.js";import"./DraggableList-D93qNxY3.js";import"./search-CyQQCVme.js";import"./Input-DLoAGHyA.js";import"./useControlled-zrsS7sbr.js";import"./Button-DdPOxW32.js";import"./small-cross-BKLGSFz1.js";import"./ActionButton-DERxyeDa.js";import"./Checkbox-FK2fRdAN.js";import"./useValueChanged-CnEeirqz.js";import"./CollapsiblePanel-B8EFIibH.js";import"./MultiColumnSortDialog-BosRxKkz.js";import"./MenuTrigger-BTCInV-G.js";import"./CompositeItem-BHbjzdkB.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./getDisabledMountTransitionStyles-CCxWABNx.js";import"./getPseudoElementBounds-Cpfu0jjM.js";import"./chevron-down-BL39hyz4.js";import"./index-Dhn7ITQm.js";import"./error-_egmS3m2.js";import"./BaseCbacBanner-CgTjAuLA.js";import"./makeExternalStore-D1LNnd-p.js";import"./Tooltip-Btlg-yIO.js";import"./PopoverPopup-Bw-hztAp.js";import"./debounce-C-dm4-uQ.js";import"./useOsdkClient-B6lLUCBK.js";import"./tick-D4xU7MKe.js";import"./DropdownField-BLtmL1tB.js";import"./isEqual-BO6QlNLr.js";import"./withOsdkMetrics-GAx3Og7v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
