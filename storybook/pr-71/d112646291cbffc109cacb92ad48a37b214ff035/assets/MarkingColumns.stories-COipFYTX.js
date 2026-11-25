import{f as p,j as e}from"./iframe-DchqE16O.js";import{O as i}from"./object-table-DcwiNNzU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CruhVp8d.js";import"./Table-CGkDzmTC.js";import"./index-C9pVGgAF.js";import"./Dialog-BW9erraE.js";import"./cross-pv8yLqK0.js";import"./svgIconContainer-o0BLlK91.js";import"./useBaseUiId-DavIhVcf.js";import"./InternalBackdrop-LybRFn-n.js";import"./composite-C-jL-lwP.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./index-BoEySXuY.js";import"./useEventCallback-D9yoUN4j.js";import"./SkeletonBar-DukQAzpM.js";import"./LoadingCell-GU17jzUP.js";import"./ColumnConfigDialog-Bl2Ge5kO.js";import"./DraggableList-W8UVm6lY.js";import"./search-BePaI44o.js";import"./Input-DZYpZIAm.js";import"./useControlled-CSem3ovp.js";import"./Button-DG5zH7tS.js";import"./small-cross-8E9tPeRL.js";import"./ActionButton-BJMvEM6L.js";import"./Checkbox-BhXu6eHc.js";import"./useValueChanged-CoQERUSb.js";import"./CollapsiblePanel-BdSEsD6W.js";import"./MultiColumnSortDialog-CHslCwFF.js";import"./MenuTrigger-DWP4xach.js";import"./CompositeItem-B0Rg-Lxm.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./getDisabledMountTransitionStyles-BBnhTzgD.js";import"./getPseudoElementBounds-AEkTlzBM.js";import"./chevron-down-C-JwTnNq.js";import"./index-CyPTDzGy.js";import"./error-BZzNTwNw.js";import"./BaseCbacBanner-BhUML3mx.js";import"./makeExternalStore-DOPJ0IZk.js";import"./Tooltip-DX6d1ahi.js";import"./PopoverPopup-Dp1eQXG2.js";import"./debounce-D_wvzfMc.js";import"./useOsdkClient-BBdDY5jb.js";import"./tick-BBgvL453.js";import"./DropdownField-BeWNTIQ_.js";import"./isEqual-DS1T2zLV.js";import"./withOsdkMetrics-B8g_jVC8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
