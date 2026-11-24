import{j as i}from"./iframe-DGWnG-cP.js";import{O as p}from"./object-table-rQF7zj4h.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-bCv7Z8mt.js";import"./preload-helper-3cdipQWl.js";import"./Table-569peSy1.js";import"./index-C0zbU9rL.js";import"./Dialog-DsXbvmJy.js";import"./cross-DlI64HlO.js";import"./svgIconContainer-B16Mzywl.js";import"./useBaseUiId-DVxcG4_I.js";import"./InternalBackdrop-BJR0xs8j.js";import"./composite-B33N3UBB.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./index-D_bbN_cd.js";import"./useEventCallback-CxJpG0mK.js";import"./SkeletonBar-DvB39Rdm.js";import"./LoadingCell-BvgZglXZ.js";import"./ColumnConfigDialog-BS73iygW.js";import"./DraggableList-CliT0f_Y.js";import"./search-UMxzoTWH.js";import"./Input-DwaikOPa.js";import"./useControlled-BBmR2WL-.js";import"./Button-BcmhO12Y.js";import"./small-cross-DmdM27Kn.js";import"./ActionButton-WSvr-wI_.js";import"./Checkbox-SQRRgXI2.js";import"./useValueChanged-ChEZciPX.js";import"./CollapsiblePanel-CVt-m52O.js";import"./MultiColumnSortDialog-DPhx5BMU.js";import"./MenuTrigger-BCDlzjR7.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./getDisabledMountTransitionStyles-CyXwlfcm.js";import"./getPseudoElementBounds-B9TtSSG4.js";import"./chevron-down-BFuZIkTt.js";import"./index-CrcNgxS8.js";import"./error-qdaiM9ZH.js";import"./BaseCbacBanner-lZp0UVMg.js";import"./makeExternalStore-WGQ2sL4W.js";import"./Tooltip-WUVYr8N6.js";import"./PopoverPopup-B75UTycU.js";import"./debounce-BI_4kNch.js";import"./useOsdkClient-D8G8-hzC.js";import"./tick-DVANyX1P.js";import"./DropdownField-nTKXuw1F.js";import"./isEqual-_zVrSe3d.js";import"./withOsdkMetrics-UcMYR7XC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
