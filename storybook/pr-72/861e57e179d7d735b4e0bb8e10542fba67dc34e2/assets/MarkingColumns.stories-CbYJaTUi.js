import{f as p,j as e}from"./iframe-NQpNXTjy.js";import{O as i}from"./object-table-C2Ty1QZM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxQobykS.js";import"./Table-ClAaLI_Z.js";import"./index-DPTMEED5.js";import"./Dialog-CwuoTZv0.js";import"./cross-BXjngWjd.js";import"./svgIconContainer-CuTwM0es.js";import"./useBaseUiId-CA0Hx9BI.js";import"./InternalBackdrop-6ARUn0ZZ.js";import"./composite-CckoXbi1.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./index-BFl4Kuhx.js";import"./useEventCallback-CFM9jrEt.js";import"./SkeletonBar-DV2B4sl1.js";import"./LoadingCell-Ch6zqmvo.js";import"./ColumnConfigDialog-CFx_2dbj.js";import"./DraggableList-CokhiAiZ.js";import"./search-5LAMc9Yr.js";import"./Input-8evEI4JC.js";import"./useControlled-Dfym0E7J.js";import"./Button-BW-em3cF.js";import"./small-cross-B3yU2vZR.js";import"./ActionButton-zJRNa7Ux.js";import"./Checkbox-gwz4RQas.js";import"./useValueChanged-CMvtaO4q.js";import"./CollapsiblePanel-BxFWJsn2.js";import"./MultiColumnSortDialog-DEMi2uAt.js";import"./MenuTrigger-CjfBPdjD.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./getDisabledMountTransitionStyles-Ceat6ftx.js";import"./getPseudoElementBounds-DzeDuzLQ.js";import"./chevron-down-CpS1Uhst.js";import"./index-DD2WCnOg.js";import"./error-DtbT1aJ_.js";import"./BaseCbacBanner-CT-a_Rkb.js";import"./makeExternalStore-C9iKzFcW.js";import"./Tooltip-BB-3PmXh.js";import"./PopoverPopup-Bbh9gvxv.js";import"./debounce-D0cuI_rP.js";import"./useOsdkClient-CD2MlnJ0.js";import"./tick-Cgl4xEea.js";import"./DropdownField-CzOL9fzI.js";import"./isEqual-wBsHbSR6.js";import"./withOsdkMetrics-BrRP7bk2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
