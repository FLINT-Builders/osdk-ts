import{f as p,j as e}from"./iframe-CSBSqJV-.js";import{O as i}from"./object-table-CQlh17pU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y6YPEm4u.js";import"./Table-DGzGYFQo.js";import"./index-BJfVWZd-.js";import"./Dialog-driLLg7n.js";import"./cross-B6WlAhq-.js";import"./svgIconContainer-CLK7EnDK.js";import"./useBaseUiId-Bc5TgsQW.js";import"./InternalBackdrop-Beq1X7xS.js";import"./composite-jPJKKGn2.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./index-LUSaJ2vo.js";import"./useEventCallback-DKSmEp2D.js";import"./SkeletonBar-DUkAKkre.js";import"./LoadingCell-C72uwxIB.js";import"./ColumnConfigDialog-BB1p_5kR.js";import"./DraggableList-BcrePS-Y.js";import"./search-DvlP61aE.js";import"./Input-B47Y97Of.js";import"./useControlled-Bac_91v3.js";import"./Button-Dh9tN-kh.js";import"./small-cross-CSds0n2Q.js";import"./ActionButton-cyr4kPxp.js";import"./Checkbox-D3JwoAva.js";import"./useValueChanged-D2mv37rP.js";import"./CollapsiblePanel-CFBpR34G.js";import"./MultiColumnSortDialog-s81HUVpC.js";import"./MenuTrigger-NP9ud2uM.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./getDisabledMountTransitionStyles-BniS6qDk.js";import"./getPseudoElementBounds-DhrtV-tW.js";import"./chevron-down-C4EMQsdy.js";import"./index-B3n_oO7A.js";import"./error-CRSueJec.js";import"./BaseCbacBanner-CFcln0a-.js";import"./makeExternalStore-BuktQzqG.js";import"./Tooltip-Bo7GAIpf.js";import"./PopoverPopup-BFehPzV1.js";import"./debounce-gyo9KVfh.js";import"./useOsdkClient-0i4-BUE5.js";import"./tick-WiW2BOLj.js";import"./DropdownField-BIxLro4D.js";import"./isEqual-tRqZMX7m.js";import"./withOsdkMetrics-B-CwHZa2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
