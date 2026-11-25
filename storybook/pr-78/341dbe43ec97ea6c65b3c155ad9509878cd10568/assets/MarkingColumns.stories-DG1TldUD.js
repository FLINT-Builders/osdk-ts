import{f as p,j as e}from"./iframe-6Z8QeqqP.js";import{O as i}from"./object-table-CECxFAns.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y0D87bsA.js";import"./Table-CxvM8rGk.js";import"./index-HkxEzDx6.js";import"./Dialog-CK4HQAcY.js";import"./cross-MCgjL0SO.js";import"./svgIconContainer-8--RoJPk.js";import"./useBaseUiId-Dmz3cJQe.js";import"./InternalBackdrop-4jpidxXn.js";import"./composite-DbAi9sOR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./index-iLFhFJRI.js";import"./useEventCallback-gCzDUKPv.js";import"./SkeletonBar-DSdvgAJi.js";import"./LoadingCell-B2-rT-Br.js";import"./ColumnConfigDialog-oC-HZ2Wn.js";import"./DraggableList-Dzqqt3U_.js";import"./search-CvqEaj-y.js";import"./Input-DaVTG5o1.js";import"./useControlled-Bx6RLClW.js";import"./Button-CwPVz1_L.js";import"./small-cross-B-wOlo0v.js";import"./ActionButton-BROaqCpF.js";import"./Checkbox-BVnAR-am.js";import"./useValueChanged-17CWfsm_.js";import"./CollapsiblePanel-CBemhgM_.js";import"./MultiColumnSortDialog-7t2q7viX.js";import"./MenuTrigger-BF02E5JL.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./getDisabledMountTransitionStyles-6bxwWprB.js";import"./getPseudoElementBounds-CXK9C3Gp.js";import"./chevron-down-C4hWEHAB.js";import"./index-Ds85d0HR.js";import"./error-DBQvGp4O.js";import"./BaseCbacBanner-Hxhoa-_l.js";import"./makeExternalStore-CBiKzjzF.js";import"./Tooltip-CzZyPcm7.js";import"./PopoverPopup-kC84IpyX.js";import"./debounce-Doh9hDTV.js";import"./useOsdkClient-HylTLrl8.js";import"./tick-D9u7tIy2.js";import"./DropdownField-Ue-qV6y1.js";import"./isEqual-COSWBm2c.js";import"./withOsdkMetrics-CL7caFuf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
