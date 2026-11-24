import{j as i}from"./iframe-BD75_EF7.js";import{O as p}from"./object-table-CPkwxh5D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dchg6iJO.js";import"./preload-helper-C5GixA8k.js";import"./Table-FgVFuUsS.js";import"./index-Cls2haw5.js";import"./Dialog-C-_mpGRm.js";import"./cross-sDHwt2tZ.js";import"./svgIconContainer-Bxdyh2CW.js";import"./useBaseUiId-Se7wVqTf.js";import"./InternalBackdrop-OFlNwMz7.js";import"./composite-yd7firDo.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./index-5f1XfQ5f.js";import"./useEventCallback-Vm032kvl.js";import"./SkeletonBar-DUDeQRgC.js";import"./LoadingCell-BCnm8IEN.js";import"./ColumnConfigDialog-gtPEqXRz.js";import"./DraggableList-OBslZTBK.js";import"./search-Fzzl4G8z.js";import"./Input-Dmpn7F0W.js";import"./useControlled-Bb3Vr0M6.js";import"./Button-DDPidDHF.js";import"./small-cross-D4uWwtpx.js";import"./ActionButton-CEyHVhsP.js";import"./Checkbox-ZqbWzpkB.js";import"./useValueChanged-BDuexEHu.js";import"./CollapsiblePanel-BQzsjVFn.js";import"./MultiColumnSortDialog-LyTWyKq1.js";import"./MenuTrigger-D7Kr2HLn.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./getDisabledMountTransitionStyles-DJ3nnjim.js";import"./getPseudoElementBounds-BMxp26EN.js";import"./chevron-down-34AB4AXv.js";import"./index-BnVPpix6.js";import"./error-BHpOgTkX.js";import"./BaseCbacBanner-iD_njxeV.js";import"./makeExternalStore-C1ym4VUW.js";import"./Tooltip-DhVNQ1yF.js";import"./PopoverPopup-C3w3Aozm.js";import"./debounce-pSE0AIDq.js";import"./useOsdkClient-c_BjiQFC.js";import"./tick-G5s6pEHr.js";import"./DropdownField-Bk2ZJyrJ.js";import"./isEqual-eXaYvtIg.js";import"./withOsdkMetrics-DR6keFLB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
