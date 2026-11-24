import{j as i}from"./iframe-C-2fM64A.js";import{O as p}from"./object-table-DnfGK1BU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGo3HOCG.js";import"./preload-helper-5l20kbgh.js";import"./Table-B8exTvRS.js";import"./index-Dyfx2zPa.js";import"./Dialog-WscBU8CC.js";import"./cross-CgNS1GgR.js";import"./svgIconContainer-C9IKjxfB.js";import"./useBaseUiId-CTryWo_g.js";import"./InternalBackdrop-UxmxiKm7.js";import"./composite-DwmZEnpk.js";import"./index-BdbAVji3.js";import"./index-BbVHPZNY.js";import"./index-D8oWn7w6.js";import"./useEventCallback-BPmnomYn.js";import"./SkeletonBar-DU5JM7iL.js";import"./LoadingCell-CRd4Lps8.js";import"./ColumnConfigDialog-Kt7u0FdA.js";import"./DraggableList-C9U23trS.js";import"./search-CLHFOlZI.js";import"./Input-Dlx-frSm.js";import"./useControlled-BF8LnBHR.js";import"./Button-De1R0ypn.js";import"./small-cross-BklgATg6.js";import"./ActionButton-487khAzZ.js";import"./Checkbox-DOMVATt6.js";import"./useValueChanged-CHlXRDud.js";import"./CollapsiblePanel-DyD1UVL_.js";import"./MultiColumnSortDialog-DxphMA5D.js";import"./MenuTrigger-Z7Z4FSrc.js";import"./CompositeItem-CUIe3tWP.js";import"./ToolbarRootContext-BnUbB36R.js";import"./getDisabledMountTransitionStyles-CxaJ42JS.js";import"./getPseudoElementBounds-CqzFYEIN.js";import"./chevron-down-BIEm0AX1.js";import"./index-cGgaE_Im.js";import"./error-DCBUh_j7.js";import"./BaseCbacBanner-D0zM5BSH.js";import"./makeExternalStore-C-9kweRw.js";import"./Tooltip-CbS0pN8T.js";import"./PopoverPopup-ZZdakFoe.js";import"./debounce-Cqmr5QPm.js";import"./useOsdkClient-Bq_YKUUv.js";import"./tick-B4a_6SHF.js";import"./DropdownField-CrZRfkaF.js";import"./isEqual-BB86EMHb.js";import"./withOsdkMetrics-HX80CHoP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
