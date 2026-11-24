import{f as p,j as e}from"./iframe-BrM52See.js";import{O as i}from"./object-table-VQLhFWF1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPLtzYOe.js";import"./Table-DBrEBYq-.js";import"./index-H3qcjrO1.js";import"./Dialog-C6ykfz8O.js";import"./cross-BS83Kw7I.js";import"./svgIconContainer-DWvq_kJI.js";import"./useBaseUiId-LwZBbKwi.js";import"./InternalBackdrop-B0v8ialf.js";import"./composite-BZFmOQck.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./index-l8fykvfj.js";import"./useEventCallback-BHcaXjux.js";import"./SkeletonBar-CyZkMeKi.js";import"./LoadingCell-BKsSrcW2.js";import"./ColumnConfigDialog-CA_TaoPw.js";import"./DraggableList-BjT_lsmH.js";import"./search-B5gd2r9J.js";import"./Input-Ctwp83L6.js";import"./useControlled--LTXft-F.js";import"./Button-Bor1IKlq.js";import"./small-cross-mZTcJe0Y.js";import"./ActionButton-Bjg5SHwB.js";import"./Checkbox-CpcYXb7o.js";import"./useValueChanged-CaQ00tTB.js";import"./CollapsiblePanel-DNThs05J.js";import"./MultiColumnSortDialog-DdgbljRq.js";import"./MenuTrigger-DgZhECnA.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./getDisabledMountTransitionStyles-ZwWdEcJk.js";import"./getPseudoElementBounds-DNWW4OHS.js";import"./chevron-down-IA-50EVq.js";import"./index-CHWvcJrG.js";import"./error-DUN9wjL6.js";import"./BaseCbacBanner-CaBAfIKG.js";import"./makeExternalStore-ByUo-Oil.js";import"./Tooltip-Dmxc3XnT.js";import"./PopoverPopup-Hoh-5uEa.js";import"./debounce-I5NpiXWy.js";import"./useOsdkClient-CUbGPJm8.js";import"./tick-s7oDZI4G.js";import"./DropdownField-BjLRMnJ9.js";import"./isEqual-CGSZE7_m.js";import"./withOsdkMetrics-DCPJGWBb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
