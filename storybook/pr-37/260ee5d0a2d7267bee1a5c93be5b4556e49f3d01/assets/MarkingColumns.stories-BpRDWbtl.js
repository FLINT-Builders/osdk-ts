import{f as p,j as e}from"./iframe-BidCv6LV.js";import{O as i}from"./object-table-1ndn2q85.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBvVXsFn.js";import"./Table-CJ7bROKj.js";import"./index-D_xbPbxF.js";import"./Dialog-kWDXaucF.js";import"./cross-CCgwUKs5.js";import"./svgIconContainer-nuda1Slf.js";import"./useBaseUiId-CQmafZWA.js";import"./InternalBackdrop-DObkkMkv.js";import"./composite-DQsyuPSU.js";import"./index-DdFBJ6Hh.js";import"./index-ClJ31HK1.js";import"./index-BhZS4a31.js";import"./useEventCallback-Baep12rq.js";import"./SkeletonBar-CWAvpKGo.js";import"./LoadingCell-BeYVbx4W.js";import"./ColumnConfigDialog-BCq2a7Lb.js";import"./DraggableList-BhLuOWgQ.js";import"./search-Dw6H1JFW.js";import"./Input-J58txkes.js";import"./useControlled-BQp7ePj5.js";import"./Button-COF8krnH.js";import"./small-cross-DW2DHUmB.js";import"./ActionButton-D74vQdpd.js";import"./Checkbox-CJjc1v6n.js";import"./useValueChanged-BaKIasuJ.js";import"./CollapsiblePanel-CRUTvRPJ.js";import"./MultiColumnSortDialog-Ds52YtJ5.js";import"./MenuTrigger-C40-3wGK.js";import"./CompositeItem-BDSq8mI7.js";import"./ToolbarRootContext-DxOeY7F6.js";import"./getDisabledMountTransitionStyles-B7f6fBGw.js";import"./getPseudoElementBounds-B2Ni9bqk.js";import"./chevron-down-BWg13NGV.js";import"./index-B55EwGFb.js";import"./error-CX48AH-F.js";import"./BaseCbacBanner-BnAPZiFE.js";import"./makeExternalStore-mkujOin6.js";import"./Tooltip-D9gJLDaZ.js";import"./PopoverPopup-B2aM6x7h.js";import"./debounce-qZI5pjM5.js";import"./useOsdkClient-WoDqiidY.js";import"./tick-CdWDJea5.js";import"./DropdownField-BUNetrXn.js";import"./isEqual-DnkiOhRI.js";import"./withOsdkMetrics-CGezrU5C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
