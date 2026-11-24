import{f as p,j as e}from"./iframe-Bh45DKn3.js";import{O as i}from"./object-table-DbyKNSVh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LJhXTPCv.js";import"./Table-Coc-XLOq.js";import"./index-BazZquql.js";import"./Dialog-1vhJoqh9.js";import"./cross-RpPg89dZ.js";import"./svgIconContainer-BfPBlfHC.js";import"./useBaseUiId-BfSMp68R.js";import"./InternalBackdrop-DIwYAmQX.js";import"./composite-DWucITgI.js";import"./index-BSd5iftC.js";import"./index-CDLdpsSb.js";import"./index-rTGldpxn.js";import"./useEventCallback-BjCmEzcn.js";import"./SkeletonBar-Byf20GVv.js";import"./LoadingCell-Cr0-Vtyp.js";import"./ColumnConfigDialog-DZoWMp_h.js";import"./DraggableList-B3JlWQAD.js";import"./search-Brd7oyMK.js";import"./Input-iUZFI1La.js";import"./useControlled-BrBmyOo2.js";import"./Button-Dy9bad7W.js";import"./small-cross-D2rBK4H_.js";import"./ActionButton-MfZdPyWj.js";import"./Checkbox-R65Rxn08.js";import"./useValueChanged--KdOJzwF.js";import"./CollapsiblePanel-CIXeu-cF.js";import"./MultiColumnSortDialog-DE5GTJ1R.js";import"./MenuTrigger-m7vp11gt.js";import"./CompositeItem-uwTTFrvD.js";import"./ToolbarRootContext-BUoifa8H.js";import"./getDisabledMountTransitionStyles-IkmlIA3z.js";import"./getPseudoElementBounds-JVlUWG3W.js";import"./chevron-down-BP-IXn8o.js";import"./index-CIr-D7oP.js";import"./error-BuY4OKaU.js";import"./BaseCbacBanner-CGUj6vGC.js";import"./makeExternalStore-WafiyNY8.js";import"./Tooltip-D8h_Xk4s.js";import"./PopoverPopup-mOdIo3-Q.js";import"./debounce-Coqd0i8P.js";import"./useOsdkClient-DkRSeke5.js";import"./tick-Civ6UOpK.js";import"./DropdownField-Bdykv7F3.js";import"./isEqual-B27HEN1w.js";import"./withOsdkMetrics-1D0C0Hkk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
