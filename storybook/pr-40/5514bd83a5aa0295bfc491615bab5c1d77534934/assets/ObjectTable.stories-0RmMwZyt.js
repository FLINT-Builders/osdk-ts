import{j as i}from"./iframe-BYlTxwz3.js";import{O as p}from"./object-table-B_gEyXcz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-9L2iMZ.js";import"./preload-helper-Dkt_E4uP.js";import"./Table-CBByl1CU.js";import"./index-Cx2xXvCr.js";import"./Dialog-D6HbhEZo.js";import"./cross-C7CDDNJi.js";import"./svgIconContainer-CCHa_D4L.js";import"./useBaseUiId-CHVkZxqH.js";import"./InternalBackdrop-BnI_3_S0.js";import"./composite-Oihes5Z3.js";import"./index-BLjbxIz_.js";import"./index-BCCUn5eT.js";import"./index-B-CUWwrE.js";import"./useEventCallback-6aIfP3km.js";import"./SkeletonBar-Csj_wsFv.js";import"./LoadingCell-DQ0vwGsu.js";import"./ColumnConfigDialog-DggvHg5b.js";import"./DraggableList-B-WThPOH.js";import"./search-CfzUYg2F.js";import"./Input-D3288P-o.js";import"./useControlled-2dwLF0eF.js";import"./Button-Dplh-cKa.js";import"./small-cross-aeJJ7SSq.js";import"./ActionButton-C_0V6gM3.js";import"./Checkbox-CiqviK43.js";import"./useValueChanged-vNkrsn5_.js";import"./CollapsiblePanel-yPU4El-7.js";import"./MultiColumnSortDialog-BrlL2EkL.js";import"./MenuTrigger-BN1Z5olc.js";import"./CompositeItem-Bu4ubHAW.js";import"./ToolbarRootContext-oJ3Dqb0I.js";import"./getDisabledMountTransitionStyles-BV5FL582.js";import"./getPseudoElementBounds-DoGGqUvJ.js";import"./chevron-down-DLOLLqcE.js";import"./index-C8P2LxHs.js";import"./error-Ox3QZuhk.js";import"./BaseCbacBanner-BVaKmTmi.js";import"./makeExternalStore-DAxSMl-f.js";import"./Tooltip-Cj8Rzvni.js";import"./PopoverPopup-BlhfYCCJ.js";import"./debounce-C0op11OR.js";import"./useOsdkClient-Cu-1fp9t.js";import"./tick--pYF85S_.js";import"./DropdownField-D7WS7Sjf.js";import"./isEqual-CxBRAjWE.js";import"./withOsdkMetrics-C0BX98Nf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
