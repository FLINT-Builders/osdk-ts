import{f as p,j as e}from"./iframe-Bpe98Dj4.js";import{O as i}from"./object-table-rroctWTB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt7Pwj0U.js";import"./Table-STbRnp0I.js";import"./index-Jn5RtXdC.js";import"./Dialog-D6iAyEKI.js";import"./cross-B4LWD9WI.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./useBaseUiId-CJdlvVPQ.js";import"./InternalBackdrop-C00MZUgD.js";import"./composite-BEI44NiL.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./index-DbJfw5Jw.js";import"./useEventCallback-jPkrsSwe.js";import"./SkeletonBar-Dio7HcWx.js";import"./LoadingCell-DiLMgH0z.js";import"./ColumnConfigDialog-CN70o2LH.js";import"./DraggableList-CVfOpD9R.js";import"./search-DczXofvN.js";import"./Input-5kFdRd8C.js";import"./useControlled-D2vfPoU0.js";import"./Button-CKCuh_PT.js";import"./small-cross-BQ5BxFpj.js";import"./ActionButton-BO6R8BaB.js";import"./Checkbox-C6awXPu3.js";import"./useValueChanged-CWbrPk1H.js";import"./CollapsiblePanel-CZ_2QIXb.js";import"./MultiColumnSortDialog-03FtNBsk.js";import"./MenuTrigger-LBhqhGgE.js";import"./CompositeItem-Cb_CEEPz.js";import"./ToolbarRootContext-B7sQOt43.js";import"./getDisabledMountTransitionStyles-B4PbYPUw.js";import"./getPseudoElementBounds-B1-hZC8t.js";import"./chevron-down-B2AZuAlJ.js";import"./index-qE8U94CR.js";import"./error-xXUB5Jtg.js";import"./BaseCbacBanner-BJlb7WUt.js";import"./makeExternalStore-hK8JV_UH.js";import"./Tooltip-C0c48BL6.js";import"./PopoverPopup-BT66tNSv.js";import"./debounce-CHjm_yWr.js";import"./useOsdkClient-BRImiEXq.js";import"./tick-CYKDx9Yh.js";import"./DropdownField-DkUTWihP.js";import"./isEqual-CDVwuKaY.js";import"./withOsdkMetrics-c2fg5j0X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
