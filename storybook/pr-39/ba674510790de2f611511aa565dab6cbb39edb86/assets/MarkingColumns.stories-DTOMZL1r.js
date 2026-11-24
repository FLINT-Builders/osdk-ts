import{f as p,j as e}from"./iframe-DXCJdDjk.js";import{O as i}from"./object-table-CMu3OqPI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCqQIOQj.js";import"./Table-DtU9_wlU.js";import"./index-QhP10yDY.js";import"./Dialog-B0n-hSzS.js";import"./cross-QCx31p9d.js";import"./svgIconContainer-PeTmNDz1.js";import"./useBaseUiId-BVzNdyaI.js";import"./InternalBackdrop-DiEb60oM.js";import"./composite-VErlwM2g.js";import"./index-DBzdfvA2.js";import"./index-DYK3IbAw.js";import"./index-fUnQH0Ng.js";import"./useEventCallback-NMYaIxLD.js";import"./SkeletonBar-BvIRP9GG.js";import"./LoadingCell-ClWgT-D4.js";import"./ColumnConfigDialog-D8f5iZrV.js";import"./DraggableList-LasHmkhR.js";import"./search-DRi_hMxi.js";import"./Input-BTjVOb0y.js";import"./useControlled-BjYAliAA.js";import"./Button-D_PTcbbI.js";import"./small-cross-YgIpoi-c.js";import"./ActionButton-C4OP8Ud5.js";import"./Checkbox-DW4OHk_e.js";import"./useValueChanged-CYU4OOoO.js";import"./CollapsiblePanel-Dz0EiOlC.js";import"./MultiColumnSortDialog-Rdfmlb0r.js";import"./MenuTrigger-DDBS9uJd.js";import"./CompositeItem-DleHBTVF.js";import"./ToolbarRootContext-BXXCNwbt.js";import"./getDisabledMountTransitionStyles-Crvdet31.js";import"./getPseudoElementBounds-BdNIU5Gh.js";import"./chevron-down-Dukj-qIY.js";import"./index-CDTndXsg.js";import"./error-DYQlLdEW.js";import"./BaseCbacBanner-C-jd6aGE.js";import"./makeExternalStore-BQt7qWsh.js";import"./Tooltip-kA7Y0tfn.js";import"./PopoverPopup-Dott-kRm.js";import"./debounce-C2si1I5i.js";import"./useOsdkClient-Cp8dLbkr.js";import"./tick-oJgzJDQ-.js";import"./DropdownField-D3NdJ4rJ.js";import"./isEqual-CvNiF6Lf.js";import"./withOsdkMetrics-Cl21Vd8T.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
