import{f as p,j as e}from"./iframe-CEEl8rhe.js";import{O as i}from"./object-table-BRYEavK4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BNeS4N_d.js";import"./Table-CH1HBcKP.js";import"./index-D3BMxXWO.js";import"./Dialog-CExnZc08.js";import"./cross-CC3rT2Cs.js";import"./svgIconContainer-BoK1M0P8.js";import"./useBaseUiId-Bj988QM0.js";import"./InternalBackdrop-BmSff-mp.js";import"./composite-DpkIpZoZ.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./index-D_PVV5Fd.js";import"./useEventCallback-C5vlArFZ.js";import"./SkeletonBar-p0RmfKN_.js";import"./LoadingCell-CCkUjs7m.js";import"./ColumnConfigDialog-Ckp9UGz4.js";import"./DraggableList-mCtVzcc0.js";import"./search-BpfeUnuY.js";import"./Input-BDwKsEY1.js";import"./useControlled-B70mnLby.js";import"./Button-YcHEvqMa.js";import"./small-cross-BwPiA_ZV.js";import"./ActionButton-jLAD1Qmw.js";import"./Checkbox-D8YHrR9c.js";import"./useValueChanged-C-fNJX81.js";import"./CollapsiblePanel-C1Fn1_Kr.js";import"./MultiColumnSortDialog-_TG7ke8e.js";import"./MenuTrigger-ncb26Pw2.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./getDisabledMountTransitionStyles-xN5v6pd8.js";import"./getPseudoElementBounds-Qyou3wPJ.js";import"./chevron-down-BGwNr8cZ.js";import"./index-BCtfyswk.js";import"./error-nlz9dA9p.js";import"./BaseCbacBanner-DdFaRu3i.js";import"./makeExternalStore-hwf9V02L.js";import"./Tooltip-Bwai2e_Y.js";import"./PopoverPopup-T8H6T0aO.js";import"./debounce-CHYKXz2Y.js";import"./useOsdkClient-_z2zV0V9.js";import"./tick-CRV1-A87.js";import"./DropdownField-Ba7JB-vZ.js";import"./isEqual-c3KaD12f.js";import"./withOsdkMetrics-DLFNJZK7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
