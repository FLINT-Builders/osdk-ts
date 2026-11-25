import{f as p,j as e}from"./iframe-NyHN5VRq.js";import{O as i}from"./object-table-C81DNPEN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-V-uedkqD.js";import"./Table-ZpVbTwfW.js";import"./index-BfjQx6Ly.js";import"./Dialog-DKEJlEC2.js";import"./cross-Dw9UKTtm.js";import"./svgIconContainer-D2-PKO04.js";import"./useBaseUiId-D2dSZ8xw.js";import"./InternalBackdrop-D7Xp3E9p.js";import"./composite-dEyBM_w4.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./index-B3mmWQ0F.js";import"./useEventCallback-DoOCRT8a.js";import"./SkeletonBar-GrYatSDE.js";import"./LoadingCell-DynSbYUR.js";import"./ColumnConfigDialog-r2G1cMvL.js";import"./DraggableList-C1u518YK.js";import"./search-5FdBAUHN.js";import"./Input-CNTzIZ_0.js";import"./useControlled-Dh_cMPIe.js";import"./Button-Czn8jZsp.js";import"./small-cross-B006-969.js";import"./ActionButton-B_hA--wV.js";import"./Checkbox-CHTGGrx7.js";import"./useValueChanged-2qCvj704.js";import"./CollapsiblePanel-DyupETYF.js";import"./MultiColumnSortDialog-hp_Xxbvk.js";import"./MenuTrigger-BsZAgMhw.js";import"./CompositeItem-D6OEWPs8.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./getDisabledMountTransitionStyles-BnTV1GCv.js";import"./getPseudoElementBounds-liAYIzgN.js";import"./chevron-down-D5RxD_5a.js";import"./index-Cf28HvbY.js";import"./error-CmvnS4M6.js";import"./BaseCbacBanner-B5vq67kq.js";import"./makeExternalStore-DXy-cErB.js";import"./Tooltip-CKdMZe0K.js";import"./PopoverPopup-BXMQLUfh.js";import"./debounce-DTG0i2xp.js";import"./useOsdkClient-KQa4vScA.js";import"./tick-Dv-MwZz4.js";import"./DropdownField-DDnDtQPw.js";import"./isEqual-Dok9u36d.js";import"./withOsdkMetrics-5n_JPyv4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
