import{j as i}from"./iframe-AucoVF3S.js";import{O as p}from"./object-table-B4O2k6KZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLTNbtrZ.js";import"./preload-helper-C9ibelWf.js";import"./Table-BNldCwgw.js";import"./index-BCzMg9g9.js";import"./Dialog-CCJCv316.js";import"./cross-CXJnoTqk.js";import"./svgIconContainer-61R_Lu5T.js";import"./useBaseUiId-8trwhzTr.js";import"./InternalBackdrop-H6g9AIjw.js";import"./composite-DSdmvgK1.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./index-1RXFbTsx.js";import"./useEventCallback-BIW5Bdvm.js";import"./SkeletonBar-BZh-fM1u.js";import"./LoadingCell-FJkElyBo.js";import"./ColumnConfigDialog-BPCQBYMp.js";import"./DraggableList-Dchq4Xbo.js";import"./search-DPzEqCxj.js";import"./Input-BiAZvzzV.js";import"./useControlled-CzfSKEfy.js";import"./Button-Dz4p_z9s.js";import"./small-cross-BfH9_XDO.js";import"./ActionButton-COPO59vI.js";import"./Checkbox-B5wBC7Ni.js";import"./useValueChanged-Cp3v6jl-.js";import"./CollapsiblePanel-dZxZKyMJ.js";import"./MultiColumnSortDialog-B7fSlvm9.js";import"./MenuTrigger-CLgOGu1K.js";import"./CompositeItem-DOrX4W-o.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./getDisabledMountTransitionStyles-higzgc3K.js";import"./getPseudoElementBounds-DA-UNPJk.js";import"./chevron-down-gqlYPD2T.js";import"./index-BLHxMhxy.js";import"./error-SdAehXSj.js";import"./BaseCbacBanner-7jhQujGw.js";import"./makeExternalStore-DKsNeQJB.js";import"./Tooltip-BZUDpMvt.js";import"./PopoverPopup-BX3JA3C9.js";import"./debounce-CFR0ltnl.js";import"./useOsdkClient-D4rgIYhL.js";import"./tick-BVqGDNac.js";import"./DropdownField-Bbed1NBQ.js";import"./isEqual-BAb600At.js";import"./withOsdkMetrics-g1UKMxg9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
