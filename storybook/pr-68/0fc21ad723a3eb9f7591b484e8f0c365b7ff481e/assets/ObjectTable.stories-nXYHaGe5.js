import{j as i}from"./iframe-C18Efs5F.js";import{O as p}from"./object-table-DHoaKuW1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BcUAfcQR.js";import"./preload-helper-syT6W8iC.js";import"./Table-B6mOhdKx.js";import"./index-BiAToM_x.js";import"./Dialog-Cx51cGgH.js";import"./cross-BKCn1P0Q.js";import"./svgIconContainer-aD2IgP3d.js";import"./useBaseUiId-CH-RqI0L.js";import"./InternalBackdrop-DfISNAb-.js";import"./composite-DGxpdZBR.js";import"./index-MJOAOM5u.js";import"./index-Bf7Y9tWm.js";import"./index-BDD6V94w.js";import"./useEventCallback-DIC_b8VN.js";import"./SkeletonBar-bmSFgVV9.js";import"./LoadingCell-CDZIaCbG.js";import"./ColumnConfigDialog-BmiZHTLm.js";import"./DraggableList-n1hTNqrt.js";import"./search-CkIpSze3.js";import"./Input-CU8PLyZJ.js";import"./useControlled-DX15Gk8S.js";import"./Button-C1f49fJS.js";import"./small-cross-C0nyK2gy.js";import"./ActionButton-qW0Ez94V.js";import"./Checkbox-DKptJVlY.js";import"./useValueChanged-BxaoofY_.js";import"./CollapsiblePanel-DblJ8HD2.js";import"./MultiColumnSortDialog-BsNZBYiB.js";import"./MenuTrigger-C5OcVShu.js";import"./CompositeItem-BfnoZmPC.js";import"./ToolbarRootContext-BtDS6Lf9.js";import"./getDisabledMountTransitionStyles-CxLtBXi2.js";import"./getPseudoElementBounds-B5_wrGbO.js";import"./chevron-down-B5XN77pz.js";import"./index-eBUb3cd0.js";import"./error-BbYA8FVM.js";import"./BaseCbacBanner-CqyQY9yF.js";import"./makeExternalStore-6HXO66jA.js";import"./Tooltip-Bwivcl2f.js";import"./PopoverPopup-D-mHvT1H.js";import"./debounce-BBaPqMcK.js";import"./useOsdkClient-CBIB33XW.js";import"./tick-rK0_sMUG.js";import"./DropdownField-DwQ4_zC_.js";import"./isEqual-CfbuowZK.js";import"./withOsdkMetrics-D2m3J2jO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
