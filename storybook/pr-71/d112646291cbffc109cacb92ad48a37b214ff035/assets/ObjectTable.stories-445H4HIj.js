import{j as i}from"./iframe-DchqE16O.js";import{O as p}from"./object-table-DcwiNNzU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCzNQJzn.js";import"./preload-helper-CruhVp8d.js";import"./Table-CGkDzmTC.js";import"./index-C9pVGgAF.js";import"./Dialog-BW9erraE.js";import"./cross-pv8yLqK0.js";import"./svgIconContainer-o0BLlK91.js";import"./useBaseUiId-DavIhVcf.js";import"./InternalBackdrop-LybRFn-n.js";import"./composite-C-jL-lwP.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./index-BoEySXuY.js";import"./useEventCallback-D9yoUN4j.js";import"./SkeletonBar-DukQAzpM.js";import"./LoadingCell-GU17jzUP.js";import"./ColumnConfigDialog-Bl2Ge5kO.js";import"./DraggableList-W8UVm6lY.js";import"./search-BePaI44o.js";import"./Input-DZYpZIAm.js";import"./useControlled-CSem3ovp.js";import"./Button-DG5zH7tS.js";import"./small-cross-8E9tPeRL.js";import"./ActionButton-BJMvEM6L.js";import"./Checkbox-BhXu6eHc.js";import"./useValueChanged-CoQERUSb.js";import"./CollapsiblePanel-BdSEsD6W.js";import"./MultiColumnSortDialog-CHslCwFF.js";import"./MenuTrigger-DWP4xach.js";import"./CompositeItem-B0Rg-Lxm.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./getDisabledMountTransitionStyles-BBnhTzgD.js";import"./getPseudoElementBounds-AEkTlzBM.js";import"./chevron-down-C-JwTnNq.js";import"./index-CyPTDzGy.js";import"./error-BZzNTwNw.js";import"./BaseCbacBanner-BhUML3mx.js";import"./makeExternalStore-DOPJ0IZk.js";import"./Tooltip-DX6d1ahi.js";import"./PopoverPopup-Dp1eQXG2.js";import"./debounce-D_wvzfMc.js";import"./useOsdkClient-BBdDY5jb.js";import"./tick-BBgvL453.js";import"./DropdownField-BeWNTIQ_.js";import"./isEqual-DS1T2zLV.js";import"./withOsdkMetrics-B8g_jVC8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
