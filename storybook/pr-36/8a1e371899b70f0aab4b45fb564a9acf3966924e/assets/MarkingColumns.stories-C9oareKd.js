import{f as p,j as e}from"./iframe-DUf0ZM0m.js";import{O as i}from"./object-table-BZQfq3Js.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KlMKjl9V.js";import"./Table-BpqgbLs4.js";import"./index-DhPIhyt4.js";import"./Dialog-CayXW5M3.js";import"./cross-CSu9pd0U.js";import"./svgIconContainer-DIQ4r6yH.js";import"./useBaseUiId-CCdSaAp3.js";import"./InternalBackdrop-BpRU2U_8.js";import"./composite-Ca3Atwol.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./index-C0yU06Q6.js";import"./useEventCallback-BgsfaB3Y.js";import"./SkeletonBar-COiOlbH0.js";import"./LoadingCell-B2QIRUcR.js";import"./ColumnConfigDialog-DWrprQ7Z.js";import"./DraggableList-DK4DOOpd.js";import"./search-BTSIL3B5.js";import"./Input-D5jZGu61.js";import"./useControlled-D9pcZLhn.js";import"./Button-27JXw8gN.js";import"./small-cross-DPoZyTDD.js";import"./ActionButton-COPug63M.js";import"./Checkbox-B0VGQD67.js";import"./useValueChanged-z0aioFdT.js";import"./CollapsiblePanel-mRxE6gsX.js";import"./MultiColumnSortDialog-C6tqy3oQ.js";import"./MenuTrigger-zVMPfwjS.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./getDisabledMountTransitionStyles-DxcTI9oz.js";import"./getPseudoElementBounds-Cgd5KJAZ.js";import"./chevron-down-BElmyRaO.js";import"./index-C9tEn2VI.js";import"./error-wj1vfq65.js";import"./BaseCbacBanner-DpcCkxH6.js";import"./makeExternalStore-CiGKFh7B.js";import"./Tooltip-XJCpwDJu.js";import"./PopoverPopup-DSjEA-Cg.js";import"./debounce-D4eo-Ale.js";import"./useOsdkClient-CnVn3iVU.js";import"./tick-Cf9GU9iy.js";import"./DropdownField-DAuhKtCc.js";import"./isEqual-Bk5F-IFE.js";import"./withOsdkMetrics-DuLTXoUD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
