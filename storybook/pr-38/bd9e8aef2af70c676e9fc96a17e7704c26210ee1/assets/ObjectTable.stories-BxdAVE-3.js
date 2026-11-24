import{j as i}from"./iframe-Ci4kbbjH.js";import{O as p}from"./object-table-CMpsxPRK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQjQl7b7.js";import"./preload-helper-DNzzp09Q.js";import"./Table-BZwMeVfc.js";import"./index-BzmIzG5f.js";import"./Dialog-Dlc2e5wE.js";import"./cross-Baj2Wcx8.js";import"./svgIconContainer-DoVy9nda.js";import"./useBaseUiId-yqmrIV5M.js";import"./InternalBackdrop-BOeYS53O.js";import"./composite-CkTQf-5C.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./index-D8Mu-PFN.js";import"./useEventCallback-BVSpbYHx.js";import"./SkeletonBar-B-AUQL2s.js";import"./LoadingCell-4knZ9c1y.js";import"./ColumnConfigDialog-CC_OP8zR.js";import"./DraggableList-CydMIqIu.js";import"./search-kOpaiDxH.js";import"./Input-DEpJNDRU.js";import"./useControlled-CyWOUz9h.js";import"./Button-DGtRliq1.js";import"./small-cross-CQm56ECa.js";import"./ActionButton-Cw_Fc-zI.js";import"./Checkbox-n8W4S_Az.js";import"./useValueChanged-DxNmdQBj.js";import"./CollapsiblePanel-6Zz-7gJ1.js";import"./MultiColumnSortDialog-DrfzYAq2.js";import"./MenuTrigger-D62nUIK8.js";import"./CompositeItem-Cku2i2Hz.js";import"./ToolbarRootContext-rMCKHck4.js";import"./getDisabledMountTransitionStyles-DhKtaVzl.js";import"./getPseudoElementBounds-m0MFy2PT.js";import"./chevron-down-HIxicj7V.js";import"./index-DHl6CAnB.js";import"./error-BDWAkWkg.js";import"./BaseCbacBanner-DEkDMCDW.js";import"./makeExternalStore-DM45UVPU.js";import"./Tooltip-RdLhjfP3.js";import"./PopoverPopup-DkzyhZf2.js";import"./debounce-BxJnFfrY.js";import"./useOsdkClient-BuBxCDzw.js";import"./tick-Boowirwm.js";import"./DropdownField-DDcc5zir.js";import"./isEqual-CHleId0a.js";import"./withOsdkMetrics-5lZ7fCNU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
