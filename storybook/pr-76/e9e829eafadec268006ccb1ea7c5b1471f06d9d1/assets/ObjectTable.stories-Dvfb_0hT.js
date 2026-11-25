import{j as i}from"./iframe-rKl8dl72.js";import{O as p}from"./object-table-Z_cJ_BSj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-F9zzJiCN.js";import"./preload-helper--BImneDc.js";import"./Table-BW09YW4o.js";import"./index-DPEXUCgg.js";import"./Dialog-C3B3LjHj.js";import"./cross-a0o186aD.js";import"./svgIconContainer-_-NrNaam.js";import"./useBaseUiId-BMGLO8NS.js";import"./InternalBackdrop-BLFJ3wvQ.js";import"./composite-DHl1pO1N.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./index-DF5p8sUY.js";import"./useEventCallback-CFBK0YJz.js";import"./SkeletonBar-DPocxRng.js";import"./LoadingCell-DaOOQr3j.js";import"./ColumnConfigDialog-gzvWyMf9.js";import"./DraggableList-BNn-fQty.js";import"./search-jvK2oU2l.js";import"./Input-CJ84JYl8.js";import"./useControlled-CmATnzdQ.js";import"./Button-CxkErfOv.js";import"./small-cross-BoqwdjyD.js";import"./ActionButton-DoscJM3L.js";import"./Checkbox-Hq0quoQ-.js";import"./useValueChanged-CEfl-o9u.js";import"./CollapsiblePanel-DlSFFH-3.js";import"./MultiColumnSortDialog-DWgZFh55.js";import"./MenuTrigger-B3dSJo9E.js";import"./CompositeItem-CkfIEwxY.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./getDisabledMountTransitionStyles-DpfNJcDT.js";import"./getPseudoElementBounds-zc0WMmOl.js";import"./chevron-down-BNJHEUQl.js";import"./index-BjIgEO6K.js";import"./error-Cgom9DOc.js";import"./BaseCbacBanner-D3Dni7oh.js";import"./makeExternalStore-DsJbcG05.js";import"./Tooltip-lR7hYztD.js";import"./PopoverPopup-BF7KHn70.js";import"./debounce-hqGPRRGb.js";import"./useOsdkClient-1eh8dYaj.js";import"./tick-RGW3NTLE.js";import"./DropdownField-i4PyW7Yk.js";import"./isEqual-fbTxlLCA.js";import"./withOsdkMetrics-CO0kjJn7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
