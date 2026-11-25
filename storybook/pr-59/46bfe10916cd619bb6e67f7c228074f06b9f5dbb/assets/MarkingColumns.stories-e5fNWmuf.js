import{f as p,j as e}from"./iframe-DSQ_OwRS.js";import{O as i}from"./object-table-BzCVcJkW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLqqVN7k.js";import"./Table-DODCuAAE.js";import"./index-B0q23UFt.js";import"./Dialog-CzPXSI5J.js";import"./cross-BpS57vew.js";import"./svgIconContainer-BcPAhmn-.js";import"./useBaseUiId-C6Wr8zKH.js";import"./InternalBackdrop-DRNACM8M.js";import"./composite-Dp3eVNnJ.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./index-7A6i3Ro6.js";import"./useEventCallback-BBYu6w4b.js";import"./SkeletonBar-5O6gfTS2.js";import"./LoadingCell-CocsZB85.js";import"./ColumnConfigDialog-D9IrT-DM.js";import"./DraggableList-gh0OXUxU.js";import"./search-DlOSHXy8.js";import"./Input-BzO2QOS7.js";import"./useControlled-C2eTizRr.js";import"./Button-ChRZXQ3B.js";import"./small-cross-DxTQPK98.js";import"./ActionButton-CL0gqC-W.js";import"./Checkbox-u1nZIEbD.js";import"./useValueChanged-BbBFOoz_.js";import"./CollapsiblePanel-C00H4WLv.js";import"./MultiColumnSortDialog-DPAqYct5.js";import"./MenuTrigger-CcQ9MIGZ.js";import"./CompositeItem-GcMwnNE0.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./getDisabledMountTransitionStyles-DEdqAy31.js";import"./getPseudoElementBounds-1CB_OMbt.js";import"./chevron-down-Cro00f4s.js";import"./index-DXTnQeDh.js";import"./error-BA2QLyzo.js";import"./BaseCbacBanner-DMGjlz4g.js";import"./makeExternalStore-CjWUDfwP.js";import"./Tooltip-80MHgkyW.js";import"./PopoverPopup-2vcuvUQ8.js";import"./debounce-BhztiTp3.js";import"./useOsdkClient-C-vOeiVW.js";import"./tick-B_ML4ack.js";import"./DropdownField-B3YeiUlT.js";import"./isEqual-CfYpveDj.js";import"./withOsdkMetrics-DCENCPrl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
