import{f as p,j as e}from"./iframe-BuSw4B6O.js";import{O as i}from"./object-table-DJouJ_zt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-lqh4ZshJ.js";import"./Table-CfhNV2Ii.js";import"./index-D9SEgQNF.js";import"./Dialog-B_f1Ez79.js";import"./cross-7xpX4Ge0.js";import"./svgIconContainer-BZgPnQyZ.js";import"./useBaseUiId-DViO3tgt.js";import"./InternalBackdrop-CA7307o1.js";import"./composite-DAXoYC61.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./index-7KpkRFDe.js";import"./useEventCallback-BVVXZcvZ.js";import"./SkeletonBar-Bjsc0Vlg.js";import"./LoadingCell-DyYZRjN4.js";import"./ColumnConfigDialog-B-pp2uLb.js";import"./DraggableList-uY2SXCwv.js";import"./search-DRWDcQXz.js";import"./Input-Ct08sj7B.js";import"./useControlled-8U03TFMg.js";import"./Button-DZw1-eKI.js";import"./small-cross-D6It-7yt.js";import"./ActionButton-CbDgFm0H.js";import"./Checkbox-BAo2Bb0u.js";import"./useValueChanged-CObbYU8S.js";import"./CollapsiblePanel-OoIliCXc.js";import"./MultiColumnSortDialog-DWOorCge.js";import"./MenuTrigger-BvVKcwFG.js";import"./CompositeItem-0tc6F5lP.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./getDisabledMountTransitionStyles-4Lq6Qrl-.js";import"./getPseudoElementBounds-B5CjaZhn.js";import"./chevron-down-Cbm7pBxW.js";import"./index-DzxxLWoo.js";import"./error-mcJBKPob.js";import"./BaseCbacBanner-BOKW3MY9.js";import"./makeExternalStore-2iAw82Qk.js";import"./Tooltip-D3zKUMKo.js";import"./PopoverPopup-BlwV2f1d.js";import"./debounce-Bjcpa4D8.js";import"./useOsdkClient-CC-HmWmp.js";import"./tick-DStEO9pf.js";import"./DropdownField-7MeYkNlB.js";import"./isEqual-BKdG9moy.js";import"./withOsdkMetrics-DUOa1-5i.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
