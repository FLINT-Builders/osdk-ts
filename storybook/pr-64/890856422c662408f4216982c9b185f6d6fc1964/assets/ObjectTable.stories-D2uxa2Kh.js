import{j as i}from"./iframe-CXJvlF9f.js";import{O as p}from"./object-table-hPC5NeVU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ncJJYxJa.js";import"./preload-helper-D4wndH43.js";import"./Table-BoOD-L8G.js";import"./index-DbRhx2FS.js";import"./Dialog-Dvb2pSOZ.js";import"./cross-smvXwA6k.js";import"./svgIconContainer-JnMWnddt.js";import"./useBaseUiId-CS56QWvK.js";import"./InternalBackdrop-CqtSiTpM.js";import"./composite-BN9qtXxc.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./index-Dp2pLEF1.js";import"./useEventCallback-B_1Z_QCH.js";import"./SkeletonBar-C1x9OOkX.js";import"./LoadingCell-CAYnxbGs.js";import"./ColumnConfigDialog-Cky7nE9P.js";import"./DraggableList-Bk7Jl0QM.js";import"./search-B7r0qDmR.js";import"./Input-Bsqv1_ng.js";import"./useControlled-Cpt07hfE.js";import"./Button-CsdSAMDu.js";import"./small-cross-DMWa4kPj.js";import"./ActionButton-CsFrYYGI.js";import"./Checkbox-Bi9_OJUW.js";import"./useValueChanged-Byd_0DcO.js";import"./CollapsiblePanel-CkEuIXiI.js";import"./MultiColumnSortDialog-D3T1AI8W.js";import"./MenuTrigger-DthotZrc.js";import"./CompositeItem-CThXZzFK.js";import"./ToolbarRootContext-CYby2zsu.js";import"./getDisabledMountTransitionStyles-CgmP4-RG.js";import"./getPseudoElementBounds-CgYpcBOV.js";import"./chevron-down-xbAc8Fo2.js";import"./index-Doi1M16Z.js";import"./error-D6bGjg1T.js";import"./BaseCbacBanner-C4rNu7bR.js";import"./makeExternalStore-BjpJhFKl.js";import"./Tooltip-O-viL_pu.js";import"./PopoverPopup-BaZKNv6D.js";import"./debounce-V9eN7pLv.js";import"./useOsdkClient-C_VqVBcI.js";import"./tick-CbWMloSO.js";import"./DropdownField-C_cDwqJ_.js";import"./isEqual-CDTky0Be.js";import"./withOsdkMetrics-C6MxL57R.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
