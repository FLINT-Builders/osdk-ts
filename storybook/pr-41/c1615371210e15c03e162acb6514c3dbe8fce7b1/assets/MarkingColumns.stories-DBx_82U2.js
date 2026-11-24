import{f as p,j as e}from"./iframe-Bp1PfZ7l.js";import{O as i}from"./object-table-fzrkZXkR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYGb1pKj.js";import"./Table-DzITeJpu.js";import"./index-DadzeF-d.js";import"./Dialog-CkumyFlj.js";import"./cross-DFx0C0Nt.js";import"./svgIconContainer-OMPXv01U.js";import"./useBaseUiId-XqSzBNHS.js";import"./InternalBackdrop-DFmByEwF.js";import"./composite-DLzwtS5G.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./index-DLVfdXgo.js";import"./useEventCallback-BN9hpBvA.js";import"./SkeletonBar-Cm22PUkZ.js";import"./LoadingCell-Df41ZT7m.js";import"./ColumnConfigDialog-C8SNW7ic.js";import"./DraggableList-EFyF-XBF.js";import"./search-BsLkibR5.js";import"./Input-B12oUm4E.js";import"./useControlled-C8ihAa2k.js";import"./Button-Bt-2SXbx.js";import"./small-cross-C8-5dUWe.js";import"./ActionButton-qLC49eRN.js";import"./Checkbox-3_uuu8Vo.js";import"./useValueChanged-okYo1yvb.js";import"./CollapsiblePanel-B-j7ee1F.js";import"./MultiColumnSortDialog-5t2TiADZ.js";import"./MenuTrigger-DCwY8LEj.js";import"./CompositeItem-CblUCnkP.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./getDisabledMountTransitionStyles-CqLHy__b.js";import"./getPseudoElementBounds-Mutkij03.js";import"./chevron-down-BV-xsSzp.js";import"./index-Dw1tJRkX.js";import"./error-CO92q5PK.js";import"./BaseCbacBanner-C0tqpc35.js";import"./makeExternalStore-B5XHk3Oq.js";import"./Tooltip-CLl9UtD5.js";import"./PopoverPopup-Cg3oU8gt.js";import"./debounce-D9UeryKI.js";import"./useOsdkClient-BzwwsB1i.js";import"./tick-O_f_a0G5.js";import"./DropdownField-DSF1PkvW.js";import"./isEqual-DvlOzGt9.js";import"./withOsdkMetrics-DXXjNZYb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
