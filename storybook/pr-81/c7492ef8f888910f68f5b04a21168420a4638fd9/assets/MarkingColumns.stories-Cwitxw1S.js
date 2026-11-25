import{f as p,j as e}from"./iframe-noPC7Lrb.js";import{O as i}from"./object-table-D_qw8f9Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv3u2ZXJ.js";import"./Table-B4jzDKTc.js";import"./index-CRR0rEAm.js";import"./Dialog-BbiOfpCm.js";import"./cross-B9cEQ0YT.js";import"./svgIconContainer-BC4HVzzK.js";import"./useBaseUiId-CoV6fGPK.js";import"./InternalBackdrop-BtdcLV1x.js";import"./composite-DfMavTxP.js";import"./index-DsgPUYZ8.js";import"./index-CmlqLPJk.js";import"./index-b3Gbynch.js";import"./useEventCallback-jasGEfud.js";import"./SkeletonBar-XdXpCukV.js";import"./LoadingCell-4znh7b2T.js";import"./ColumnConfigDialog-gGW3jt0Y.js";import"./DraggableList-2zdkzerp.js";import"./search-DEVlZZxm.js";import"./Input-BP2SPX2T.js";import"./useControlled-C-YKkMIr.js";import"./Button-s6ph9E-u.js";import"./small-cross-uW76wDhg.js";import"./ActionButton-CFNFQXUC.js";import"./Checkbox-DmQ_dihR.js";import"./useValueChanged-BXxDSm6S.js";import"./CollapsiblePanel-BO1AEOsB.js";import"./MultiColumnSortDialog-B1Krs8NE.js";import"./MenuTrigger-DSXVHShm.js";import"./CompositeItem-D_EklmEL.js";import"./ToolbarRootContext-Bdg1UlUu.js";import"./getDisabledMountTransitionStyles-NQwUYsn_.js";import"./getPseudoElementBounds-CA_wbbMb.js";import"./chevron-down-HJE4Bk-A.js";import"./index-COKLl5_k.js";import"./error-P0w1sFZO.js";import"./BaseCbacBanner-Df00L_jt.js";import"./makeExternalStore-BIBA_2Dm.js";import"./Tooltip-Cq2b8j00.js";import"./PopoverPopup-ZtlUJYph.js";import"./debounce-Dox6g36G.js";import"./useOsdkClient-CwTcc72O.js";import"./tick-BNpJfYgA.js";import"./DropdownField-DE00aYFp.js";import"./isEqual-O5ui8mSo.js";import"./withOsdkMetrics-8bSzfY7q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
