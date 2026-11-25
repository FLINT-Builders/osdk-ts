import{f as p,j as e}from"./iframe-D4nn_Ti-.js";import{O as i}from"./object-table-CNmSALDV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ce3BUon1.js";import"./Table-Cx2_p0XJ.js";import"./index-ng3tbe9P.js";import"./Dialog-DZnPkgpD.js";import"./cross-Ru3cb-0v.js";import"./svgIconContainer-DHuWaZTY.js";import"./useBaseUiId-CzdAPKcM.js";import"./InternalBackdrop-BmMwY1G8.js";import"./composite-DYx0o4xU.js";import"./index-CAS93zYH.js";import"./index-2u3EkiNe.js";import"./index-B-q1-RGO.js";import"./useEventCallback-DfL7Xwj3.js";import"./SkeletonBar-DSusNGP9.js";import"./LoadingCell-CYJYg4A2.js";import"./ColumnConfigDialog-C6Ou_8-m.js";import"./DraggableList-DtFsL6Te.js";import"./search-Bp5Pu1gz.js";import"./Input-BS3oHtWW.js";import"./useControlled-C9uWc1JH.js";import"./Button-ClRUUN4D.js";import"./small-cross-C5fgYdja.js";import"./ActionButton-DJtGz9fC.js";import"./Checkbox-CVjzm5Rx.js";import"./useValueChanged-CAq7ZKSq.js";import"./CollapsiblePanel-C0-syFXf.js";import"./MultiColumnSortDialog-Bmk2o4Gq.js";import"./MenuTrigger-LUO586af.js";import"./CompositeItem-C2VQoVHh.js";import"./ToolbarRootContext-BeHAyrdi.js";import"./getDisabledMountTransitionStyles-t9u9WVJm.js";import"./getPseudoElementBounds-Bxn--1AT.js";import"./chevron-down-CHYkUqFt.js";import"./index-Kx6fu-in.js";import"./error-BpjJAz0p.js";import"./BaseCbacBanner-BKFF2omj.js";import"./makeExternalStore-BCGLTkZK.js";import"./Tooltip-B-SB3nD8.js";import"./PopoverPopup-DDAnQOO5.js";import"./debounce-M4p3mf0R.js";import"./useOsdkClient-D4eIr_PA.js";import"./tick-BFeHnwNZ.js";import"./DropdownField-Cw3pM5Se.js";import"./isEqual-D41XWVlX.js";import"./withOsdkMetrics-CSFskl9_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
