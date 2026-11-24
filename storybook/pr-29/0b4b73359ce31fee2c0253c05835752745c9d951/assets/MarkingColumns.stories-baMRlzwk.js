import{f as p,j as e}from"./iframe-Dv8One7V.js";import{O as i}from"./object-table-CfRYWgsZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBoDOBGQ.js";import"./Table-B-B99IvY.js";import"./index-BWSDrnLY.js";import"./Dialog-DxY3Fx_o.js";import"./cross-DtsB4Pth.js";import"./svgIconContainer-frnooqcF.js";import"./useBaseUiId-CGmk-t13.js";import"./InternalBackdrop-DCePJn6p.js";import"./composite-lgOQMlQp.js";import"./index-Ctu1Wao6.js";import"./index-D03dI7Zm.js";import"./index-DcQ5HyEs.js";import"./useEventCallback-6cjXoQ8Y.js";import"./SkeletonBar-fAb0c0T8.js";import"./LoadingCell-DS7KPRVt.js";import"./ColumnConfigDialog-foN_V3UI.js";import"./DraggableList-DfKstJRE.js";import"./search-DIkoxWAI.js";import"./Input-CVOjTeyF.js";import"./useControlled-Xs-DgsXw.js";import"./Button-BvCCqPbi.js";import"./small-cross-BWiwWK5R.js";import"./ActionButton-CNvW2NgU.js";import"./Checkbox-DHn8_urd.js";import"./useValueChanged-CugKpIVt.js";import"./CollapsiblePanel-RlfeAOIs.js";import"./MultiColumnSortDialog-DDEKoryj.js";import"./MenuTrigger-khv0mkpD.js";import"./CompositeItem-DnhodDvF.js";import"./ToolbarRootContext-puaQBB4T.js";import"./getDisabledMountTransitionStyles-BkcjIdFx.js";import"./getPseudoElementBounds-ShrpqpOE.js";import"./chevron-down-BxGUpntZ.js";import"./index-BNO6OCKx.js";import"./error-DLGPeg_I.js";import"./BaseCbacBanner-C1GsAefg.js";import"./makeExternalStore-BdR9BUh7.js";import"./Tooltip-hfd-RkvL.js";import"./PopoverPopup-CwVc1ewd.js";import"./debounce-BRUGc1K3.js";import"./useOsdkClient-DoPqkbEf.js";import"./tick-CoFklBfZ.js";import"./DropdownField-Cq5lnh0S.js";import"./isEqual-B5kZnmRB.js";import"./withOsdkMetrics-CktMaht-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
