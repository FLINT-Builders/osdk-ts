import{j as i}from"./iframe-Bf8iAqL7.js";import{O as p}from"./object-table-CtvztlQ4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BqnUn64S.js";import"./preload-helper-A1AS_NiL.js";import"./Table-BlcY20YB.js";import"./index-Db0mdORg.js";import"./Dialog-BbuGk_ef.js";import"./cross-DO1QLnzH.js";import"./svgIconContainer-D52qXfX5.js";import"./useBaseUiId-C3S3f6WK.js";import"./InternalBackdrop-BlMO4Ova.js";import"./composite-DIFH8mgU.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./index-C0BMu-E0.js";import"./useEventCallback-CVkQOs3D.js";import"./SkeletonBar-C8ox7Pyn.js";import"./LoadingCell-DBPZu4Hz.js";import"./ColumnConfigDialog-CE5V5I8x.js";import"./DraggableList-bepDk-q0.js";import"./search-k-BDZpAM.js";import"./Input-3S863M3T.js";import"./useControlled-BxkhcEK2.js";import"./Button-H641EagL.js";import"./small-cross-BmVVnuZH.js";import"./ActionButton-CI5S3k3v.js";import"./Checkbox-CIK4xHnB.js";import"./useValueChanged-B4RhT_mT.js";import"./CollapsiblePanel-BR9JLyXV.js";import"./MultiColumnSortDialog-CQv6RXwg.js";import"./MenuTrigger-CFCoJv4p.js";import"./CompositeItem-C29Fnmef.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./getDisabledMountTransitionStyles-BkOgHLaz.js";import"./getPseudoElementBounds-BjiN3SJE.js";import"./chevron-down-BF98-CIj.js";import"./index-CJ290pxf.js";import"./error-DTUZUWgs.js";import"./BaseCbacBanner-ibJi_Mqm.js";import"./makeExternalStore-BeW1g1b1.js";import"./Tooltip-D1ph3_EU.js";import"./PopoverPopup-JpuFEWOE.js";import"./debounce-cgA55fD7.js";import"./useOsdkClient-Cvr99OkN.js";import"./tick-BLri3Pi1.js";import"./DropdownField-RxrVsgU9.js";import"./isEqual-DUkrTRcX.js";import"./withOsdkMetrics-BNJYvdSI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
