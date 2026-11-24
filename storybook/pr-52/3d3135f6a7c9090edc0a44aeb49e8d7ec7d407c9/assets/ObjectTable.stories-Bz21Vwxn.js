import{j as i}from"./iframe-DzUHN8ca.js";import{O as p}from"./object-table-a42T1fjt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOdr1Cz-.js";import"./preload-helper--9RxGpgt.js";import"./Table-XGjWcrOi.js";import"./index-D6O_ioKN.js";import"./Dialog-BhT1ko5e.js";import"./cross-Ba2yr2aR.js";import"./svgIconContainer-PY62KixA.js";import"./useBaseUiId-sxd6xo0y.js";import"./InternalBackdrop-DkhciH2d.js";import"./composite-BXmDwDE8.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./index-CTEKPH5s.js";import"./useEventCallback-DYoF4AP_.js";import"./SkeletonBar-DWrRSBfJ.js";import"./LoadingCell-BDGcErL7.js";import"./ColumnConfigDialog-D9R8QxpQ.js";import"./DraggableList-B5_EIa_U.js";import"./search-CykjRKOt.js";import"./Input-miTMtrPD.js";import"./useControlled-C2MYeSWY.js";import"./Button-C_9t5m1R.js";import"./small-cross-Du7Izp1r.js";import"./ActionButton-D40edvmP.js";import"./Checkbox-C57PggZb.js";import"./useValueChanged-BW_6iowi.js";import"./CollapsiblePanel-CvKRyI0p.js";import"./MultiColumnSortDialog-C0w9MWJS.js";import"./MenuTrigger-BMQAqfRy.js";import"./CompositeItem-y4Pst_mH.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./getDisabledMountTransitionStyles-aw8w9V1B.js";import"./getPseudoElementBounds-DGlfh4Q1.js";import"./chevron-down-gUZOAhoK.js";import"./index-WtiTKFpP.js";import"./error-BMVJPOE-.js";import"./BaseCbacBanner-D-yoKQBL.js";import"./makeExternalStore-BysZSooj.js";import"./Tooltip-D32WVKHM.js";import"./PopoverPopup-Dv9M1d_z.js";import"./debounce-UzKpvpaD.js";import"./useOsdkClient-y4syjW26.js";import"./tick-6VSUfxzF.js";import"./DropdownField-v2O8kawS.js";import"./isEqual-Brm8eKHv.js";import"./withOsdkMetrics-DpCE12mV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
