import{j as i}from"./iframe-CblSHN44.js";import{O as p}from"./object-table-NrfhXZMw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CtdHVXQY.js";import"./preload-helper-NGhizEuB.js";import"./Table-B9S3TsP0.js";import"./index-BQ7zJ7he.js";import"./Dialog-CFJvv8RE.js";import"./cross-BUglgpN5.js";import"./svgIconContainer-CF_MW71M.js";import"./useBaseUiId-B2pTi154.js";import"./InternalBackdrop-CdBXMVDV.js";import"./composite-DJG-zPIc.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./index-BTICbwFi.js";import"./useEventCallback-Gp2djsqb.js";import"./SkeletonBar-tik-rx_X.js";import"./LoadingCell-Br58Xfz1.js";import"./ColumnConfigDialog-CX-XPY4L.js";import"./DraggableList-CF8oysvU.js";import"./search-CXloA44P.js";import"./Input-DBybejkY.js";import"./useControlled-Bg0Zzn-2.js";import"./Button-Wy_PutQU.js";import"./small-cross-Bf8RpEZ1.js";import"./ActionButton-B_RqefyB.js";import"./Checkbox-D7WPqzH4.js";import"./useValueChanged-qSo-FEmP.js";import"./CollapsiblePanel-V6VhVNxj.js";import"./MultiColumnSortDialog-Cu_s8VJS.js";import"./MenuTrigger-CxJXAJFY.js";import"./CompositeItem-DuOAdpQK.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./getDisabledMountTransitionStyles-7TLN3kNJ.js";import"./getPseudoElementBounds-DjDH-yid.js";import"./chevron-down-BysZ9GN-.js";import"./index-CBgrw70i.js";import"./error-DuPAr2Go.js";import"./BaseCbacBanner-O8pa1Cnr.js";import"./makeExternalStore-DbO86LPP.js";import"./Tooltip-Bd9UBwBY.js";import"./PopoverPopup-BOyF1dvC.js";import"./debounce-DScc-am-.js";import"./useOsdkClient-DvNhOVDU.js";import"./tick-DWIXpsmv.js";import"./DropdownField-BX_lVSWT.js";import"./isEqual-ZjIkYTio.js";import"./withOsdkMetrics-CRV0LY7d.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
