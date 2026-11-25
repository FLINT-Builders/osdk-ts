import{f as p,j as e}from"./iframe-D3-3nK7q.js";import{O as i}from"./object-table-BC3q--Sf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BElTUCt9.js";import"./Table-BEPLnAeG.js";import"./index-CGTNyrvF.js";import"./Dialog-DXTQqsA4.js";import"./cross-NOSp3crr.js";import"./svgIconContainer-Dmn3JYop.js";import"./useBaseUiId-BfpIc49G.js";import"./InternalBackdrop-D1EZm1AQ.js";import"./composite-D0w8ui7I.js";import"./index-BuNH2rO3.js";import"./index-C3yTrjgV.js";import"./index-C4_vrnPE.js";import"./useEventCallback-Cbb79cWA.js";import"./SkeletonBar-Dxus3qqZ.js";import"./LoadingCell-BJhD4BL5.js";import"./ColumnConfigDialog-e8VugdiW.js";import"./DraggableList-BRDbCBH_.js";import"./search-DdBNOuKg.js";import"./Input-DujYPLSI.js";import"./useControlled-DjBtz4s1.js";import"./Button-_NTWHkbN.js";import"./small-cross-CI8b4jpP.js";import"./ActionButton-C1fl511w.js";import"./Checkbox-Bq74aFCD.js";import"./useValueChanged-D0XFuiDP.js";import"./CollapsiblePanel-Dnk44RSY.js";import"./MultiColumnSortDialog-Do6WvpHO.js";import"./MenuTrigger-PBlMpzba.js";import"./CompositeItem-Areoylt-.js";import"./ToolbarRootContext-DQWI9XbP.js";import"./getDisabledMountTransitionStyles-VRYpsqgo.js";import"./getPseudoElementBounds-CsMk40JZ.js";import"./chevron-down-B7WxA5SS.js";import"./index-DlYOU8ER.js";import"./error-oDVaVcOP.js";import"./BaseCbacBanner-PBLy5YlT.js";import"./makeExternalStore-Dirg-OTC.js";import"./Tooltip-CYjmQQLe.js";import"./PopoverPopup-CI-Szge2.js";import"./debounce-CvskZtP5.js";import"./useOsdkClient-CkMOlfJx.js";import"./tick-CkByZXDz.js";import"./DropdownField-CIyitf5P.js";import"./isEqual-BsZfEb8L.js";import"./withOsdkMetrics-DQqeF1TA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
