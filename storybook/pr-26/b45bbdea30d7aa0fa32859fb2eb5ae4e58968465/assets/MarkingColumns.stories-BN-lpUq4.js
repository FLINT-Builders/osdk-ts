import{f as p,j as e}from"./iframe-9Qc56ENr.js";import{O as i}from"./object-table-VWvjSsNP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyAcE4yv.js";import"./Table-DVjzdimX.js";import"./index-OROGqtQ6.js";import"./Dialog-DDaqFSdl.js";import"./cross-BiOFXjvO.js";import"./svgIconContainer-8v5BjuYc.js";import"./useBaseUiId-FwL7BYPy.js";import"./InternalBackdrop-CUc8C_zH.js";import"./composite-DhCF3AFw.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./index-CJPP9-f3.js";import"./useEventCallback-DIxqN6fJ.js";import"./SkeletonBar-C702hny6.js";import"./LoadingCell-DS672NFP.js";import"./ColumnConfigDialog-CA1dYBJP.js";import"./DraggableList-B1F4pXEu.js";import"./search-cLeveEh6.js";import"./Input-BNo-_u5D.js";import"./useControlled-B_qIqTVD.js";import"./Button-D4UJHZ4Q.js";import"./small-cross-DTTV9D1S.js";import"./ActionButton-DmbgcWXC.js";import"./Checkbox-B2rYdyjP.js";import"./useValueChanged-MCZoLrLU.js";import"./CollapsiblePanel-CFuv4DzY.js";import"./MultiColumnSortDialog-eWu75AP5.js";import"./MenuTrigger-CSjAvRyJ.js";import"./CompositeItem-BURGIqnl.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./getDisabledMountTransitionStyles-BW75AxGn.js";import"./getPseudoElementBounds-DOKmjR3u.js";import"./chevron-down-DTg_s13_.js";import"./index-DZAIQf61.js";import"./error-BiGuleu5.js";import"./BaseCbacBanner-UxcbrKA6.js";import"./makeExternalStore-DqYHgnt1.js";import"./Tooltip-CDE1Wq1X.js";import"./PopoverPopup-DCCXAG8S.js";import"./debounce-yYyDTVJY.js";import"./useOsdkClient-9Nrv4s3L.js";import"./tick-ZseZQiB-.js";import"./DropdownField-yTdkTLuM.js";import"./isEqual-DKuEVMgA.js";import"./withOsdkMetrics-HzozZnUd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
