import{f as p,j as e}from"./iframe-DbWO1H6Q.js";import{O as i}from"./object-table-AYkmPKtB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJFhMS3h.js";import"./Table-Dl-ajeLA.js";import"./index-8DlTsQ0i.js";import"./Dialog-CTqlBN0B.js";import"./cross-BDoBIXl6.js";import"./svgIconContainer-jTmyv8Oj.js";import"./useBaseUiId-D72Xv_RL.js";import"./InternalBackdrop-Dvh_wZ0g.js";import"./composite-EggcNtT2.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./index-Dh9Wtqsz.js";import"./useEventCallback-IzVRxhrH.js";import"./SkeletonBar-Dp36ivGE.js";import"./LoadingCell-06xMyvS8.js";import"./ColumnConfigDialog-LCtjn8XO.js";import"./DraggableList-BJ2ozh5L.js";import"./search-zgN6AfWU.js";import"./Input-DsJzclhr.js";import"./useControlled-Dvfgqsbh.js";import"./Button-AMxsa0l_.js";import"./small-cross-di1YPofV.js";import"./ActionButton-CF_WcN8f.js";import"./Checkbox-DsdSVPMb.js";import"./useValueChanged-BV-Eaapg.js";import"./CollapsiblePanel-D1EuzeA-.js";import"./MultiColumnSortDialog-BGVR93S7.js";import"./MenuTrigger-Di6xZdsh.js";import"./CompositeItem-DXkoNi3p.js";import"./ToolbarRootContext-BAe250S1.js";import"./getDisabledMountTransitionStyles-BZMRoe-H.js";import"./getPseudoElementBounds-CjiqI0zD.js";import"./chevron-down-tGzF8KYs.js";import"./index-BHrDqoFX.js";import"./error-7sAzP_x2.js";import"./BaseCbacBanner-BeFI_DqK.js";import"./makeExternalStore-Ce1bwc1S.js";import"./Tooltip-z-ifkWQQ.js";import"./PopoverPopup-n8CSHUcF.js";import"./debounce-BwGdN9pQ.js";import"./useOsdkClient-eSWHemU6.js";import"./tick-B765rRXZ.js";import"./DropdownField-Beb9lqY7.js";import"./isEqual-Lo3Z1Czc.js";import"./withOsdkMetrics-Dlfz6qvi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
