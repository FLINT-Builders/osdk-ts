import{f as p,j as e}from"./iframe-BzttuLup.js";import{O as i}from"./object-table-V3vtQDzj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEinGEya.js";import"./Table-Dkw6qntG.js";import"./index-7CJFn-ex.js";import"./Dialog-B4bx3-G4.js";import"./cross-4RHnOViN.js";import"./svgIconContainer-BicyMjFC.js";import"./useBaseUiId-C_qs9mR7.js";import"./InternalBackdrop-PyFDeOLi.js";import"./composite-CYx1_fMl.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./index-DTD6QywL.js";import"./useEventCallback-B08CG3mJ.js";import"./SkeletonBar-B9sLOoZd.js";import"./LoadingCell-e_8nVwWI.js";import"./ColumnConfigDialog-D-LHf8uu.js";import"./DraggableList-wSZtHt_j.js";import"./search-Dt2zfbsw.js";import"./Input-BumRROcl.js";import"./useControlled-DvTO4Lqf.js";import"./Button-B0wCjsGN.js";import"./small-cross-CXStxdm6.js";import"./ActionButton-DXY5W19F.js";import"./Checkbox-B5eAc9Qm.js";import"./useValueChanged-BFZjFvxq.js";import"./CollapsiblePanel-B08RbuOL.js";import"./MultiColumnSortDialog-Lydy8ubJ.js";import"./MenuTrigger-tipzUI00.js";import"./CompositeItem-E8-A5SU4.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./getDisabledMountTransitionStyles-BMOazWhO.js";import"./getPseudoElementBounds-Cn4AgsTS.js";import"./chevron-down-_FTLKkTP.js";import"./index-Dint05uq.js";import"./error-CLZJuCl2.js";import"./BaseCbacBanner-6v7FlQJC.js";import"./makeExternalStore-DAGqxfwp.js";import"./Tooltip-BTYfzcBb.js";import"./PopoverPopup-Dx6YNas4.js";import"./debounce-DlVBfSqq.js";import"./useOsdkClient-BgCetPCz.js";import"./tick-DOtLTALy.js";import"./DropdownField--AwpHRkt.js";import"./isEqual-DldK_P3t.js";import"./withOsdkMetrics-Dfc2rN4I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
