import{f as p,j as e}from"./iframe-B33FiDGM.js";import{O as i}from"./object-table-Cd9X1y5Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cg7VMV6C.js";import"./Table-D1t5A_0z.js";import"./index-B5YN0Y56.js";import"./Dialog-C7nRwVTO.js";import"./cross-DM8-ytCZ.js";import"./svgIconContainer-ClieOgTu.js";import"./useBaseUiId-DmUoOZel.js";import"./InternalBackdrop-Bc6Qn10Y.js";import"./composite-BOK6xXDF.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./index-BkpulrI-.js";import"./useEventCallback-CUqu6vM2.js";import"./SkeletonBar-CnLHYQNB.js";import"./LoadingCell-Gr9gnu7q.js";import"./ColumnConfigDialog-0fqvoH_h.js";import"./DraggableList-CQALhbaS.js";import"./search-C5uprCHM.js";import"./Input-BUa4RtbK.js";import"./useControlled-DJSk-4eD.js";import"./Button-CyQdblJP.js";import"./small-cross-C4rGQ9AX.js";import"./ActionButton-C1CptcBU.js";import"./Checkbox-DgsjFVUP.js";import"./useValueChanged-rm8GvKSd.js";import"./CollapsiblePanel-DtZcxswM.js";import"./MultiColumnSortDialog-52qg3BYK.js";import"./MenuTrigger-B7ZsfWcK.js";import"./CompositeItem-Bvfghm7d.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./getDisabledMountTransitionStyles-DXyRWdV6.js";import"./getPseudoElementBounds-Dz6sul8_.js";import"./chevron-down-Btg0m5Mr.js";import"./index-DNAzx9pt.js";import"./error-DU6Loo59.js";import"./BaseCbacBanner-bdCVeoPH.js";import"./makeExternalStore-zxZeOhNi.js";import"./Tooltip-DCvW2Y7A.js";import"./PopoverPopup-DJjNkjXn.js";import"./debounce-G8bS-CmE.js";import"./useOsdkClient-DzcQCh9h.js";import"./tick-CYGrOqhY.js";import"./DropdownField-B_28b-Fe.js";import"./isEqual-BkJ-04z-.js";import"./withOsdkMetrics-8fzs58WB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
