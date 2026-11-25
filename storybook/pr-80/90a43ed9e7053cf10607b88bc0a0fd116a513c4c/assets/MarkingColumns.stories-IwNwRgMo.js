import{f as p,j as e}from"./iframe-evcKlg9V.js";import{O as i}from"./object-table-SUOIkIIu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WHPhz6sD.js";import"./Table-q41Sb_Mi.js";import"./index-BHwj9ia0.js";import"./Dialog-D-xLZC1d.js";import"./cross-BbmJFYQF.js";import"./svgIconContainer-DOh5rP9T.js";import"./useBaseUiId-DdAriUni.js";import"./InternalBackdrop-BBabxNjC.js";import"./composite-BltyBfwn.js";import"./index-fwET-1_r.js";import"./index-Cyl-_-yn.js";import"./index-O4DHWyqo.js";import"./useEventCallback-_R1SuQ--.js";import"./SkeletonBar-BdyajZcd.js";import"./LoadingCell-DysHkDtt.js";import"./ColumnConfigDialog-C9b7wqvX.js";import"./DraggableList-oXDZY61M.js";import"./search-DhcR5bm1.js";import"./Input-iRDe1k4_.js";import"./useControlled-DXtgTA3C.js";import"./Button-Bz5serEd.js";import"./small-cross-B30QXwxO.js";import"./ActionButton-lCE-fGOM.js";import"./Checkbox-CXix4bmY.js";import"./useValueChanged-DTq6En14.js";import"./CollapsiblePanel-DJfTc0NL.js";import"./MultiColumnSortDialog-BDGoSocz.js";import"./MenuTrigger-DrJfkCqI.js";import"./CompositeItem-Cm5MVItV.js";import"./ToolbarRootContext-RfiWxa4c.js";import"./getDisabledMountTransitionStyles-BwnYd9Fi.js";import"./getPseudoElementBounds-BzQUzGR6.js";import"./chevron-down-BvJqIX5i.js";import"./index-BU0mDmBx.js";import"./error-BDn6-GLZ.js";import"./BaseCbacBanner-Dyg5JJV_.js";import"./makeExternalStore-DSan-vOh.js";import"./Tooltip-DfpJpJwe.js";import"./PopoverPopup-CUAmX7eQ.js";import"./debounce-DziosmGC.js";import"./useOsdkClient-BFKEpEYK.js";import"./tick-aNfHfk5E.js";import"./DropdownField-BhbpYF1Z.js";import"./isEqual-D7GRqXwZ.js";import"./withOsdkMetrics-BriAHFRe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
