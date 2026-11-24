import{j as i}from"./iframe-Bh45DKn3.js";import{O as p}from"./object-table-DbyKNSVh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-taSQyGhb.js";import"./preload-helper-LJhXTPCv.js";import"./Table-Coc-XLOq.js";import"./index-BazZquql.js";import"./Dialog-1vhJoqh9.js";import"./cross-RpPg89dZ.js";import"./svgIconContainer-BfPBlfHC.js";import"./useBaseUiId-BfSMp68R.js";import"./InternalBackdrop-DIwYAmQX.js";import"./composite-DWucITgI.js";import"./index-BSd5iftC.js";import"./index-CDLdpsSb.js";import"./index-rTGldpxn.js";import"./useEventCallback-BjCmEzcn.js";import"./SkeletonBar-Byf20GVv.js";import"./LoadingCell-Cr0-Vtyp.js";import"./ColumnConfigDialog-DZoWMp_h.js";import"./DraggableList-B3JlWQAD.js";import"./search-Brd7oyMK.js";import"./Input-iUZFI1La.js";import"./useControlled-BrBmyOo2.js";import"./Button-Dy9bad7W.js";import"./small-cross-D2rBK4H_.js";import"./ActionButton-MfZdPyWj.js";import"./Checkbox-R65Rxn08.js";import"./useValueChanged--KdOJzwF.js";import"./CollapsiblePanel-CIXeu-cF.js";import"./MultiColumnSortDialog-DE5GTJ1R.js";import"./MenuTrigger-m7vp11gt.js";import"./CompositeItem-uwTTFrvD.js";import"./ToolbarRootContext-BUoifa8H.js";import"./getDisabledMountTransitionStyles-IkmlIA3z.js";import"./getPseudoElementBounds-JVlUWG3W.js";import"./chevron-down-BP-IXn8o.js";import"./index-CIr-D7oP.js";import"./error-BuY4OKaU.js";import"./BaseCbacBanner-CGUj6vGC.js";import"./makeExternalStore-WafiyNY8.js";import"./Tooltip-D8h_Xk4s.js";import"./PopoverPopup-mOdIo3-Q.js";import"./debounce-Coqd0i8P.js";import"./useOsdkClient-DkRSeke5.js";import"./tick-Civ6UOpK.js";import"./DropdownField-Bdykv7F3.js";import"./isEqual-B27HEN1w.js";import"./withOsdkMetrics-1D0C0Hkk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
