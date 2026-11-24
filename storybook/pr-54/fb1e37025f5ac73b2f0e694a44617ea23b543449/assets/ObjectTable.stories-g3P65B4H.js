import{j as i}from"./iframe-DM4xkxPz.js";import{O as p}from"./object-table-BwG6GD9b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CE2244_G.js";import"./preload-helper-DjYsY0e4.js";import"./Table-CcKGWX2z.js";import"./index-CA3PhY9C.js";import"./Dialog-DiB6aMIR.js";import"./cross-BIpUExIv.js";import"./svgIconContainer-DRHE02a1.js";import"./useBaseUiId-06FsOnRS.js";import"./InternalBackdrop-atnimPNE.js";import"./composite-DPjRORK_.js";import"./index-BaPxcL-U.js";import"./index-CKWQIFc6.js";import"./index-HBJubKVl.js";import"./useEventCallback-xkxPv1XK.js";import"./SkeletonBar-CAreatfx.js";import"./LoadingCell-DZgkJAKm.js";import"./ColumnConfigDialog-CkTEzgSA.js";import"./DraggableList-DO4N10B8.js";import"./search-ChvjyncO.js";import"./Input-BtFpG8L-.js";import"./useControlled-DWhJIBEC.js";import"./Button-D6sOWWJg.js";import"./small-cross-DlPYjgwz.js";import"./ActionButton-DiqtwetY.js";import"./Checkbox-CJICDHUp.js";import"./useValueChanged-BvA5FaKj.js";import"./CollapsiblePanel-PDqHktLP.js";import"./MultiColumnSortDialog-DqGL67Xh.js";import"./MenuTrigger-BzaLQE7D.js";import"./CompositeItem-D5I-ZnjA.js";import"./ToolbarRootContext-DaxififC.js";import"./getDisabledMountTransitionStyles-cqxjXfXt.js";import"./getPseudoElementBounds-BzpbsaWw.js";import"./chevron-down-2d4v9sYb.js";import"./index-DpHY-Tke.js";import"./error-C2OR8u8c.js";import"./BaseCbacBanner-B4_4gqDk.js";import"./makeExternalStore-oSWvZmSa.js";import"./Tooltip-CyL_Vgso.js";import"./PopoverPopup-C2RXGzDC.js";import"./debounce-BTJweAvj.js";import"./useOsdkClient-tJuqjJBg.js";import"./tick-VaEeN5iX.js";import"./DropdownField-DO3iEBks.js";import"./isEqual-DBOXNISH.js";import"./withOsdkMetrics-DK0sAIWr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
