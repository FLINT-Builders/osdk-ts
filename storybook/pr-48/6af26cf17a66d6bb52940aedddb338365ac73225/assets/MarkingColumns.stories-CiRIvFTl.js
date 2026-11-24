import{f as p,j as e}from"./iframe-OFDiPCrG.js";import{O as i}from"./object-table-BPDKIWGN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUjfNDkl.js";import"./Table-KQeOisGx.js";import"./index-BeuOzgqu.js";import"./Dialog-Dqr1bH5t.js";import"./cross-jB5PN8IY.js";import"./svgIconContainer-DhDKsT9z.js";import"./useBaseUiId-BFA8n74e.js";import"./InternalBackdrop-DbDjPHet.js";import"./composite-PM-R8SRV.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./index-DkR0Sm-A.js";import"./useEventCallback-u5zfbyPP.js";import"./SkeletonBar-YHngoHZJ.js";import"./LoadingCell-CPbAcYO7.js";import"./ColumnConfigDialog-BzkVhHi-.js";import"./DraggableList-DOIwgRoD.js";import"./search-rykp5p6r.js";import"./Input-DDs2WsUf.js";import"./useControlled-DB7vMkHQ.js";import"./Button-C0oJYbtE.js";import"./small-cross-CzS85_Ss.js";import"./ActionButton-Dafw0kRv.js";import"./Checkbox-DhzgJCT-.js";import"./useValueChanged-O-f8K84Z.js";import"./CollapsiblePanel-iJsKp1Sk.js";import"./MultiColumnSortDialog-DqbRJlfk.js";import"./MenuTrigger-D9na9TlD.js";import"./CompositeItem-BEOwPENe.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./getDisabledMountTransitionStyles-C6EZ30T_.js";import"./getPseudoElementBounds-Bv073C_P.js";import"./chevron-down-BlpQBexS.js";import"./index-Dhs37uf9.js";import"./error-BuvCTlk4.js";import"./BaseCbacBanner-ingasLzJ.js";import"./makeExternalStore-CFPNQ_aD.js";import"./Tooltip-Dy2MALoM.js";import"./PopoverPopup-DBszHbY8.js";import"./debounce-ComwDjtY.js";import"./useOsdkClient-DCpLRsuK.js";import"./tick-DpIF400T.js";import"./DropdownField-BnKkKUrN.js";import"./isEqual-Ciu65pfO.js";import"./withOsdkMetrics-BSB8rkK5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
