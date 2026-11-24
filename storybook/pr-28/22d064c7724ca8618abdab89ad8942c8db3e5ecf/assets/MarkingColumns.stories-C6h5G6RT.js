import{f as p,j as e}from"./iframe-DSkRGESf.js";import{O as i}from"./object-table-DfGb60MT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Du8a5MkV.js";import"./Table-BPQDZC7R.js";import"./index-BNFB2Cjh.js";import"./Dialog-n6fnkjS5.js";import"./cross-HIAn8DML.js";import"./svgIconContainer-CgBYdrzc.js";import"./useBaseUiId-B4X2m0nz.js";import"./InternalBackdrop-C-ExtsJs.js";import"./composite-CgZ_kExF.js";import"./index-eLB5m-VM.js";import"./index-BogfGi5C.js";import"./index-wflXaNK9.js";import"./useEventCallback-CbgSPNVN.js";import"./SkeletonBar-caUYM5Zj.js";import"./LoadingCell-Bsjb8yaQ.js";import"./ColumnConfigDialog-9kE-J35r.js";import"./DraggableList-Di6B-kKE.js";import"./search-D5ZgJhKz.js";import"./Input-CDxPmZXG.js";import"./useControlled-DRRjE45d.js";import"./Button-DxPyCFzS.js";import"./small-cross-BosWx3lC.js";import"./ActionButton-IjiA5MzP.js";import"./Checkbox-DXrEO7Hj.js";import"./useValueChanged-CSNKFQVN.js";import"./CollapsiblePanel-CU1UF0zM.js";import"./MultiColumnSortDialog-CJBLegij.js";import"./MenuTrigger-BUEt6TOa.js";import"./CompositeItem-CLoyw74g.js";import"./ToolbarRootContext-BXHKua9s.js";import"./getDisabledMountTransitionStyles-CL2BXhxo.js";import"./getPseudoElementBounds-D_fpBJ2K.js";import"./chevron-down-D93VaLA7.js";import"./index-B67Hn2Oj.js";import"./error-DwrNHlKr.js";import"./BaseCbacBanner-BvfHZWc9.js";import"./makeExternalStore-DiqN5xTe.js";import"./Tooltip-BnbMPUtw.js";import"./PopoverPopup-MLe4RJY9.js";import"./debounce-DejaveeD.js";import"./useOsdkClient-ncq2w8Z8.js";import"./tick-CMvN_MpF.js";import"./DropdownField-CwJ2N8FN.js";import"./isEqual-B1Re2qHI.js";import"./withOsdkMetrics-Ca7Fya9M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
