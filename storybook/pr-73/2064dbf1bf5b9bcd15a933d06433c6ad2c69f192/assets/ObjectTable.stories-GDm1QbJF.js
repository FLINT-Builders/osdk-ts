import{j as i}from"./iframe-B8aqmfIp.js";import{O as p}from"./object-table-C2Z8fJQm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXlEAnKu.js";import"./preload-helper-BobhKb97.js";import"./Table-B5gMWbyg.js";import"./index-CCmxkdzs.js";import"./Dialog-QxdoqVVk.js";import"./cross-DRKTQkbP.js";import"./svgIconContainer-FLeE6-vR.js";import"./useBaseUiId-CHkfiAje.js";import"./InternalBackdrop-BaQEyxva.js";import"./composite-1RtIqJwV.js";import"./index-DKejFzow.js";import"./index-BSGZXMXF.js";import"./index-BdH5xGxi.js";import"./useEventCallback-CZb3TsYF.js";import"./SkeletonBar-7eOqRXW8.js";import"./LoadingCell-CLcKJ9dD.js";import"./ColumnConfigDialog-JP_AUJeg.js";import"./DraggableList-B_z1tppe.js";import"./search-Bqpxl0Af.js";import"./Input-CgHBa2SL.js";import"./useControlled-l0oFblvc.js";import"./Button-DdUUuDX9.js";import"./small-cross-DfPj-GvA.js";import"./ActionButton-DCobCyrf.js";import"./Checkbox-CotItJ6c.js";import"./useValueChanged-CbLTECGR.js";import"./CollapsiblePanel-DTTY03tg.js";import"./MultiColumnSortDialog-oSmZ6zrX.js";import"./MenuTrigger-CxgDCtCW.js";import"./CompositeItem-n7lnxb-_.js";import"./ToolbarRootContext-DSbkosxV.js";import"./getDisabledMountTransitionStyles-VoFjrkuY.js";import"./getPseudoElementBounds-FKAYaJ1n.js";import"./chevron-down-BVT6rcNJ.js";import"./index-Cywz4iSb.js";import"./error-DApsL9NG.js";import"./BaseCbacBanner-DLWay6c-.js";import"./makeExternalStore-DGiu_EM6.js";import"./Tooltip-DXOq14Zl.js";import"./PopoverPopup-DU-xFQkp.js";import"./debounce-CV6t4kI7.js";import"./useOsdkClient-W6a7pgjt.js";import"./tick-C64PnUJ8.js";import"./DropdownField-BW4-2DGd.js";import"./isEqual-DY3SpEFX.js";import"./withOsdkMetrics-C411Tmmb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
