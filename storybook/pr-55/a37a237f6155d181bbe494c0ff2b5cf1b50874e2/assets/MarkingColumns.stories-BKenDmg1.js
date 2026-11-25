import{f as p,j as e}from"./iframe-BQ-KHcHE.js";import{O as i}from"./object-table-D7pYQb3P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_u3--ud.js";import"./Table-CCjqCmAm.js";import"./index-Bi4ii54G.js";import"./Dialog-YJ5Y5IZw.js";import"./cross-CTORp-eO.js";import"./svgIconContainer-BkJqfnsZ.js";import"./useBaseUiId-Da1a09f-.js";import"./InternalBackdrop-BeLoEUss.js";import"./composite-pFx5Riq1.js";import"./index-9EejlPKp.js";import"./index-eHVziK00.js";import"./index-c3QE1mje.js";import"./useEventCallback-CwAUxMau.js";import"./SkeletonBar-Comqxq8o.js";import"./LoadingCell-BsCWYNY9.js";import"./ColumnConfigDialog-Ld-e3a3c.js";import"./DraggableList-C9IvtlIA.js";import"./search-D2FdgE19.js";import"./Input-DzeLPEOm.js";import"./useControlled-D0CpkFUO.js";import"./Button-CWYPsBwI.js";import"./small-cross-BEdJA5Lo.js";import"./ActionButton-DVp_A1sh.js";import"./Checkbox-D5SJJ5wR.js";import"./useValueChanged-BzLrFWOP.js";import"./CollapsiblePanel-kLnFiWuY.js";import"./MultiColumnSortDialog-C0J2j61-.js";import"./MenuTrigger-DOnH68Cz.js";import"./CompositeItem-BvMYLyDt.js";import"./ToolbarRootContext-GvDSdibe.js";import"./getDisabledMountTransitionStyles-CJE6Zpnj.js";import"./getPseudoElementBounds-dMzXYP3e.js";import"./chevron-down-Bo4eEeQA.js";import"./index-Dd2QToo9.js";import"./error-Bd9iDu5J.js";import"./BaseCbacBanner-CNtS5jwp.js";import"./makeExternalStore-wa371Aji.js";import"./Tooltip-pNyVdFzA.js";import"./PopoverPopup-DRD2vKLI.js";import"./debounce-aoiaDW2x.js";import"./useOsdkClient-QySWZGED.js";import"./tick-qNWElNJO.js";import"./DropdownField-DnnSL_kI.js";import"./isEqual-BftbWPWG.js";import"./withOsdkMetrics-DcXC33Yd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
