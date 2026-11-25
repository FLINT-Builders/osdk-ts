import{f as p,j as e}from"./iframe-rKl8dl72.js";import{O as i}from"./object-table-Z_cJ_BSj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--BImneDc.js";import"./Table-BW09YW4o.js";import"./index-DPEXUCgg.js";import"./Dialog-C3B3LjHj.js";import"./cross-a0o186aD.js";import"./svgIconContainer-_-NrNaam.js";import"./useBaseUiId-BMGLO8NS.js";import"./InternalBackdrop-BLFJ3wvQ.js";import"./composite-DHl1pO1N.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./index-DF5p8sUY.js";import"./useEventCallback-CFBK0YJz.js";import"./SkeletonBar-DPocxRng.js";import"./LoadingCell-DaOOQr3j.js";import"./ColumnConfigDialog-gzvWyMf9.js";import"./DraggableList-BNn-fQty.js";import"./search-jvK2oU2l.js";import"./Input-CJ84JYl8.js";import"./useControlled-CmATnzdQ.js";import"./Button-CxkErfOv.js";import"./small-cross-BoqwdjyD.js";import"./ActionButton-DoscJM3L.js";import"./Checkbox-Hq0quoQ-.js";import"./useValueChanged-CEfl-o9u.js";import"./CollapsiblePanel-DlSFFH-3.js";import"./MultiColumnSortDialog-DWgZFh55.js";import"./MenuTrigger-B3dSJo9E.js";import"./CompositeItem-CkfIEwxY.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./getDisabledMountTransitionStyles-DpfNJcDT.js";import"./getPseudoElementBounds-zc0WMmOl.js";import"./chevron-down-BNJHEUQl.js";import"./index-BjIgEO6K.js";import"./error-Cgom9DOc.js";import"./BaseCbacBanner-D3Dni7oh.js";import"./makeExternalStore-DsJbcG05.js";import"./Tooltip-lR7hYztD.js";import"./PopoverPopup-BF7KHn70.js";import"./debounce-hqGPRRGb.js";import"./useOsdkClient-1eh8dYaj.js";import"./tick-RGW3NTLE.js";import"./DropdownField-i4PyW7Yk.js";import"./isEqual-fbTxlLCA.js";import"./withOsdkMetrics-CO0kjJn7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
