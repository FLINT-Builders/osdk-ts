import{f as p,j as e}from"./iframe-AucoVF3S.js";import{O as i}from"./object-table-B4O2k6KZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9ibelWf.js";import"./Table-BNldCwgw.js";import"./index-BCzMg9g9.js";import"./Dialog-CCJCv316.js";import"./cross-CXJnoTqk.js";import"./svgIconContainer-61R_Lu5T.js";import"./useBaseUiId-8trwhzTr.js";import"./InternalBackdrop-H6g9AIjw.js";import"./composite-DSdmvgK1.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./index-1RXFbTsx.js";import"./useEventCallback-BIW5Bdvm.js";import"./SkeletonBar-BZh-fM1u.js";import"./LoadingCell-FJkElyBo.js";import"./ColumnConfigDialog-BPCQBYMp.js";import"./DraggableList-Dchq4Xbo.js";import"./search-DPzEqCxj.js";import"./Input-BiAZvzzV.js";import"./useControlled-CzfSKEfy.js";import"./Button-Dz4p_z9s.js";import"./small-cross-BfH9_XDO.js";import"./ActionButton-COPO59vI.js";import"./Checkbox-B5wBC7Ni.js";import"./useValueChanged-Cp3v6jl-.js";import"./CollapsiblePanel-dZxZKyMJ.js";import"./MultiColumnSortDialog-B7fSlvm9.js";import"./MenuTrigger-CLgOGu1K.js";import"./CompositeItem-DOrX4W-o.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./getDisabledMountTransitionStyles-higzgc3K.js";import"./getPseudoElementBounds-DA-UNPJk.js";import"./chevron-down-gqlYPD2T.js";import"./index-BLHxMhxy.js";import"./error-SdAehXSj.js";import"./BaseCbacBanner-7jhQujGw.js";import"./makeExternalStore-DKsNeQJB.js";import"./Tooltip-BZUDpMvt.js";import"./PopoverPopup-BX3JA3C9.js";import"./debounce-CFR0ltnl.js";import"./useOsdkClient-D4rgIYhL.js";import"./tick-BVqGDNac.js";import"./DropdownField-Bbed1NBQ.js";import"./isEqual-BAb600At.js";import"./withOsdkMetrics-g1UKMxg9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
