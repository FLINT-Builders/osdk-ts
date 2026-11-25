import{f as p,j as e}from"./iframe-DowOz9LG.js";import{O as i}from"./object-table-DNxNGDFc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLch6InM.js";import"./Table-CL_1Gnac.js";import"./index-D3uCKFRQ.js";import"./Dialog-B2DiGny7.js";import"./cross-XY9bNztf.js";import"./svgIconContainer-CjMFf37k.js";import"./useBaseUiId-DLP_J0js.js";import"./InternalBackdrop-DWjSsQXw.js";import"./composite-BqSVn4pm.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./index-C6QSp11H.js";import"./useEventCallback-DZWgYqJ2.js";import"./SkeletonBar-Lecq5ISR.js";import"./LoadingCell-Ho22PisO.js";import"./ColumnConfigDialog-DIcz9ho9.js";import"./DraggableList-C2PpvmOK.js";import"./search-Dq7gXSV-.js";import"./Input-EdSRgRoE.js";import"./useControlled-LhJY_NAc.js";import"./Button-BsxP5OVh.js";import"./small-cross-CBbvwGg2.js";import"./ActionButton-BC7KqzhK.js";import"./Checkbox-7yvYJnnp.js";import"./useValueChanged-DmWHkYMC.js";import"./CollapsiblePanel-B3nL6cUm.js";import"./MultiColumnSortDialog-CLdJ3cH4.js";import"./MenuTrigger-E3XbwEgZ.js";import"./CompositeItem-qaontuDZ.js";import"./ToolbarRootContext-tzl66m83.js";import"./getDisabledMountTransitionStyles-QmcvFDJq.js";import"./getPseudoElementBounds-D1yJG2tC.js";import"./chevron-down-p34WEL5t.js";import"./index-UMBJij_W.js";import"./error-CvT_Kc0h.js";import"./BaseCbacBanner-C2yHATAt.js";import"./makeExternalStore-whfuUtu3.js";import"./Tooltip-Bzrc7BTQ.js";import"./PopoverPopup-Bh5tu-Zh.js";import"./debounce-8B2PZIEg.js";import"./useOsdkClient-D0xHO4NP.js";import"./tick-rTdqC_yK.js";import"./DropdownField-P6sq-h2_.js";import"./isEqual-BtyoY62f.js";import"./withOsdkMetrics-CwlXQjw2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
