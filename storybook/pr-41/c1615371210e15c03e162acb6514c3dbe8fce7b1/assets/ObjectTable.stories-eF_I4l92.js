import{j as i}from"./iframe-Bp1PfZ7l.js";import{O as p}from"./object-table-fzrkZXkR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C36P-j15.js";import"./preload-helper-BYGb1pKj.js";import"./Table-DzITeJpu.js";import"./index-DadzeF-d.js";import"./Dialog-CkumyFlj.js";import"./cross-DFx0C0Nt.js";import"./svgIconContainer-OMPXv01U.js";import"./useBaseUiId-XqSzBNHS.js";import"./InternalBackdrop-DFmByEwF.js";import"./composite-DLzwtS5G.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./index-DLVfdXgo.js";import"./useEventCallback-BN9hpBvA.js";import"./SkeletonBar-Cm22PUkZ.js";import"./LoadingCell-Df41ZT7m.js";import"./ColumnConfigDialog-C8SNW7ic.js";import"./DraggableList-EFyF-XBF.js";import"./search-BsLkibR5.js";import"./Input-B12oUm4E.js";import"./useControlled-C8ihAa2k.js";import"./Button-Bt-2SXbx.js";import"./small-cross-C8-5dUWe.js";import"./ActionButton-qLC49eRN.js";import"./Checkbox-3_uuu8Vo.js";import"./useValueChanged-okYo1yvb.js";import"./CollapsiblePanel-B-j7ee1F.js";import"./MultiColumnSortDialog-5t2TiADZ.js";import"./MenuTrigger-DCwY8LEj.js";import"./CompositeItem-CblUCnkP.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./getDisabledMountTransitionStyles-CqLHy__b.js";import"./getPseudoElementBounds-Mutkij03.js";import"./chevron-down-BV-xsSzp.js";import"./index-Dw1tJRkX.js";import"./error-CO92q5PK.js";import"./BaseCbacBanner-C0tqpc35.js";import"./makeExternalStore-B5XHk3Oq.js";import"./Tooltip-CLl9UtD5.js";import"./PopoverPopup-Cg3oU8gt.js";import"./debounce-D9UeryKI.js";import"./useOsdkClient-BzwwsB1i.js";import"./tick-O_f_a0G5.js";import"./DropdownField-DSF1PkvW.js";import"./isEqual-DvlOzGt9.js";import"./withOsdkMetrics-DXXjNZYb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
