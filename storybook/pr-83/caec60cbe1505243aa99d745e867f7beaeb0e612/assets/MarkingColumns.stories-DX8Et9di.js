import{f as p,j as e}from"./iframe-C6x_-cCw.js";import{O as i}from"./object-table-DlDFpEfo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5M_clDJ.js";import"./Table-TOB7DXhq.js";import"./index-DG092T-D.js";import"./Dialog-B7PiXdbh.js";import"./cross-l0aAmTW5.js";import"./svgIconContainer-Bkyrnuc-.js";import"./useBaseUiId-UYgWBkOi.js";import"./InternalBackdrop-BWEfKABb.js";import"./composite-BSZVTMPL.js";import"./index-hI-Jf30A.js";import"./index-C-0Da6r-.js";import"./index-DhALpsH2.js";import"./useEventCallback-Bfoj9m8E.js";import"./SkeletonBar-BoDD1_vM.js";import"./LoadingCell-CanDKc3Z.js";import"./ColumnConfigDialog-BxU5iTzY.js";import"./DraggableList-_GDJXAQ8.js";import"./search-DNxvrUDH.js";import"./Input-wynBa1uS.js";import"./useControlled-DzDgqIkH.js";import"./Button-BKdv7kuC.js";import"./small-cross-BSf0QNWN.js";import"./ActionButton-DhU9U98Q.js";import"./Checkbox-C5q03WxR.js";import"./useValueChanged-D9fSnI04.js";import"./CollapsiblePanel-xqDVzon_.js";import"./MultiColumnSortDialog-CCCGeldt.js";import"./MenuTrigger-Ci6XufKf.js";import"./CompositeItem-DKoeFQh8.js";import"./ToolbarRootContext-DBEn4rvT.js";import"./getDisabledMountTransitionStyles-DPQ1PlPt.js";import"./getPseudoElementBounds-B-iH7G1J.js";import"./chevron-down-BDM7mpPh.js";import"./index-BmgKiP-K.js";import"./error-owN_za9g.js";import"./BaseCbacBanner-B0GplK9k.js";import"./makeExternalStore-DVp6XbDL.js";import"./Tooltip-g_XfUcJD.js";import"./PopoverPopup--Wx5Qz1n.js";import"./debounce-BdodUMZs.js";import"./useOsdkClient-D1P3vg8H.js";import"./tick-jJZnrm3J.js";import"./DropdownField-BUFMPHNJ.js";import"./isEqual-C4fmZI7Y.js";import"./withOsdkMetrics-FojMXCRT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
