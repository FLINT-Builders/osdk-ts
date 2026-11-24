import{j as i}from"./iframe-Cfy1VfwI.js";import{O as p}from"./object-table-OGRSCvgp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KyqE6jgN.js";import"./preload-helper-D7hEGIHW.js";import"./Table-mlnthY26.js";import"./index-D9qChlkT.js";import"./Dialog-DF9EtPFZ.js";import"./cross-DCuCUk-Y.js";import"./svgIconContainer-DIZS-ng4.js";import"./useBaseUiId-Bl3BCz40.js";import"./InternalBackdrop-DJybReYS.js";import"./composite-DcidvM5B.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./index-CK2Vk24k.js";import"./useEventCallback-dqu5-SHz.js";import"./SkeletonBar-BuAHtDLm.js";import"./LoadingCell-gSWW82f3.js";import"./ColumnConfigDialog-CfsTDY2L.js";import"./DraggableList-xqj0cC0n.js";import"./search-m5EKgstc.js";import"./Input-DeAzpHTT.js";import"./useControlled-Bb34JJQm.js";import"./Button-NH8o7MdQ.js";import"./small-cross-CbTS0UJl.js";import"./ActionButton-BE3V6UYF.js";import"./Checkbox-D95EDxuQ.js";import"./useValueChanged-D8jzwMFp.js";import"./CollapsiblePanel-D9bDfrrQ.js";import"./MultiColumnSortDialog-DKBmJLiz.js";import"./MenuTrigger-C6MWEMLO.js";import"./CompositeItem-BJZgOdXE.js";import"./ToolbarRootContext-BGtapBDY.js";import"./getDisabledMountTransitionStyles-BcyKzADO.js";import"./getPseudoElementBounds-CR_thFgC.js";import"./chevron-down-LTPIgxFV.js";import"./index-Bx8gvAM_.js";import"./error-CmqKN1z-.js";import"./BaseCbacBanner-BuhCxIpY.js";import"./makeExternalStore-DUu0ElVX.js";import"./Tooltip-Ny6lMCIs.js";import"./PopoverPopup-Zy0TwZWf.js";import"./debounce-FHf42ThN.js";import"./useOsdkClient-BcTcp2zs.js";import"./tick-Dk0AG9pV.js";import"./DropdownField-BycB_EL4.js";import"./isEqual-CoKKqdlc.js";import"./withOsdkMetrics-COKuhu-t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
