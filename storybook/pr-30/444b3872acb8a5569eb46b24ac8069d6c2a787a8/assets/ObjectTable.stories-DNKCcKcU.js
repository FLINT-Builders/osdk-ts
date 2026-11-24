import{j as i}from"./iframe-DTT6nz7o.js";import{O as p}from"./object-table-BuFYa5XZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BQZ-7Gir.js";import"./preload-helper-B1xGfzPI.js";import"./Table-B9_GvBk1.js";import"./index-CTxHEiTU.js";import"./Dialog-t6Y6xSYi.js";import"./cross-BgvHTgXn.js";import"./svgIconContainer-CgqmpPt6.js";import"./useBaseUiId-eE74TdDR.js";import"./InternalBackdrop-CzODpXWQ.js";import"./composite-Cb2l-Kwg.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./index-C79qnBzb.js";import"./useEventCallback-D3wxufVs.js";import"./SkeletonBar-BqNZZo2k.js";import"./LoadingCell-C6lmrfbQ.js";import"./ColumnConfigDialog-R-laWYXZ.js";import"./DraggableList-DYY0D_Bu.js";import"./search-pmwVSsC3.js";import"./Input-DUSBBA6M.js";import"./useControlled-nQOh3ft9.js";import"./Button-CQ5X8faA.js";import"./small-cross-GWNLyjvR.js";import"./ActionButton-DCl1Vnp4.js";import"./Checkbox-DrrX-Z5B.js";import"./useValueChanged-Cmi0P8zg.js";import"./CollapsiblePanel-DaCbRpGf.js";import"./MultiColumnSortDialog-Bs_GGBzS.js";import"./MenuTrigger-HOlRD3Yu.js";import"./CompositeItem-Wk4nNvBM.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./getDisabledMountTransitionStyles-Bvaoj8VB.js";import"./getPseudoElementBounds-DSrPRsVI.js";import"./chevron-down-C4sokJMh.js";import"./index-BU5fSJ65.js";import"./error-DTxCn2-C.js";import"./BaseCbacBanner-ByjZ5iyO.js";import"./makeExternalStore-S1Q9iP-N.js";import"./Tooltip-BcSgBIwr.js";import"./PopoverPopup-B7rrkVjJ.js";import"./debounce-DxKPhidQ.js";import"./useOsdkClient-DvmPcDA4.js";import"./tick-CPW7UZx4.js";import"./DropdownField-BhgIN6ih.js";import"./isEqual-hFo8Qatz.js";import"./withOsdkMetrics-pvC18r39.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
