import{f as p,j as e}from"./iframe-xhm5OChx.js";import{O as i}from"./object-table-HQWVkrkb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZJxKfIr.js";import"./Table-BH6BTYWA.js";import"./index-Ctr0pjQq.js";import"./Dialog-CYaeLi8E.js";import"./cross-C-3m77s9.js";import"./svgIconContainer-CdfxSdaj.js";import"./useBaseUiId-q04gmumk.js";import"./InternalBackdrop-i2Jv6yd1.js";import"./composite-BhQucQ6w.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./index-DWPvyRFK.js";import"./useEventCallback-DOJI8S3u.js";import"./SkeletonBar-mT-JS0Ox.js";import"./LoadingCell-UzLA8R8y.js";import"./ColumnConfigDialog-B9yJe-N2.js";import"./DraggableList-Bnc84gYz.js";import"./search-Cq1dDtD0.js";import"./Input-wfXCkxXX.js";import"./useControlled-CXKnX_iS.js";import"./Button-Cx_zDl37.js";import"./small-cross-C74z8jlp.js";import"./ActionButton-0NMO3aYn.js";import"./Checkbox-jmx13kFy.js";import"./useValueChanged-CW8UuRxF.js";import"./CollapsiblePanel-BUNoQZyA.js";import"./MultiColumnSortDialog-BVqyEIa1.js";import"./MenuTrigger-o5fhUgJ3.js";import"./CompositeItem-CtXkcFLl.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./getDisabledMountTransitionStyles-B85vDvpF.js";import"./getPseudoElementBounds-DSDAFN2S.js";import"./chevron-down-BsRYwsxE.js";import"./index-DRcQ3DSW.js";import"./error-QOz5QiuQ.js";import"./BaseCbacBanner--jqZ3Clz.js";import"./makeExternalStore-Yu1AfO63.js";import"./Tooltip-DByTNzzG.js";import"./PopoverPopup-2glF1cOR.js";import"./debounce-BL8n_G_Q.js";import"./useOsdkClient-DsZIT7A4.js";import"./tick-Bt601WgM.js";import"./DropdownField-PqL2lLdH.js";import"./isEqual-evpreXH6.js";import"./withOsdkMetrics-nVSio52c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
