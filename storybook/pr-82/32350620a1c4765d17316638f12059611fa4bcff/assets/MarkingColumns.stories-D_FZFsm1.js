import{f as p,j as e}from"./iframe-DDeGahZQ.js";import{O as i}from"./object-table-c69OShAs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtgmNnbI.js";import"./Table-BamUVRRT.js";import"./index-DmzUE8wO.js";import"./Dialog-BD_j3EQN.js";import"./cross-CI1lfvZf.js";import"./svgIconContainer-B2HbnTiE.js";import"./useBaseUiId-Uk2yI-zs.js";import"./InternalBackdrop-Cm6MUtgn.js";import"./composite-DuB4E-UY.js";import"./index-Qn8k8FvG.js";import"./index-CY6cJAVJ.js";import"./index-CG45M_Q5.js";import"./useEventCallback-CbwAvO5m.js";import"./SkeletonBar-DUki0Hfs.js";import"./LoadingCell-BnEAQ4Tz.js";import"./ColumnConfigDialog-PmU2pUZk.js";import"./DraggableList-Ciepwsi-.js";import"./search-C8c8T19Z.js";import"./Input-CvWBm2e5.js";import"./useControlled-DDjbaAaA.js";import"./Button-UHTxjv3g.js";import"./small-cross-Dh8kd4Rj.js";import"./ActionButton-B6GTvDM6.js";import"./Checkbox-Dl8_g-Nt.js";import"./useValueChanged-CpeiEUnJ.js";import"./CollapsiblePanel-jNUt8N7a.js";import"./MultiColumnSortDialog-BNuKplea.js";import"./MenuTrigger-C3PQd1MF.js";import"./CompositeItem-CzJNtMzg.js";import"./ToolbarRootContext-BskRjAbe.js";import"./getDisabledMountTransitionStyles-CmGIaxiE.js";import"./getPseudoElementBounds-oOnpUTl1.js";import"./chevron-down-pfh009HU.js";import"./index-DYAYOGTV.js";import"./error-CAQ2487J.js";import"./BaseCbacBanner-AXmQGftr.js";import"./makeExternalStore-BTS0MLYS.js";import"./Tooltip-DAVQzJGV.js";import"./PopoverPopup-Ce6kI-Gj.js";import"./debounce-1Ye5cs9J.js";import"./useOsdkClient-Da_ZExXm.js";import"./tick-2i2QjURW.js";import"./DropdownField-CtMobLbF.js";import"./isEqual-BSEwlXdh.js";import"./withOsdkMetrics-WPbxRBR5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
