import{f as p,j as e}from"./iframe-ClewFmdb.js";import{O as i}from"./object-table-8K4aePLH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7O4zYJs.js";import"./Table-0qXuSpiD.js";import"./index-euIemqPw.js";import"./Dialog-DQpS9gtB.js";import"./cross-C3it1rM0.js";import"./svgIconContainer-6Af8qoOE.js";import"./useBaseUiId-CM0luRv8.js";import"./InternalBackdrop-DwZ14DHU.js";import"./composite-C-wFuse1.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./index-DIwsgw5y.js";import"./useEventCallback-Dm_-ERSx.js";import"./SkeletonBar-FwwEYK9L.js";import"./LoadingCell-BxFRA9K3.js";import"./ColumnConfigDialog-DCzvHOWU.js";import"./DraggableList-CJc0qD0P.js";import"./search-D0xA_Pz7.js";import"./Input-eZMgRwLi.js";import"./useControlled-8bbLsKqv.js";import"./Button-Br0QmuY1.js";import"./small-cross-uC2CoRN_.js";import"./ActionButton-C4_8y7RX.js";import"./Checkbox-aaq5Ho4E.js";import"./useValueChanged-BuF2EKQm.js";import"./CollapsiblePanel-IjgMvAVk.js";import"./MultiColumnSortDialog-BcP8s1U4.js";import"./MenuTrigger-UCF9DPXZ.js";import"./CompositeItem-LzMD5IlK.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./getDisabledMountTransitionStyles-vZzLMj6x.js";import"./getPseudoElementBounds-Bp53_Y_k.js";import"./chevron-down-CN3rbJYx.js";import"./index-wZBaNT0h.js";import"./error-BpCPRxU6.js";import"./BaseCbacBanner-tpjBGn7l.js";import"./makeExternalStore-B6ZLCKG0.js";import"./Tooltip-Dhf32NVV.js";import"./PopoverPopup-BRgxxAdh.js";import"./debounce-DRq1cdjb.js";import"./useOsdkClient-CvCsWpzO.js";import"./tick-BrTAlGhW.js";import"./DropdownField-DJ_QrvtP.js";import"./isEqual-B878mnik.js";import"./withOsdkMetrics-DMwTLP5k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
