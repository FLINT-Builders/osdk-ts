import{j as i}from"./iframe-D4nn_Ti-.js";import{O as p}from"./object-table-CNmSALDV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DzSqYy6w.js";import"./preload-helper-Ce3BUon1.js";import"./Table-Cx2_p0XJ.js";import"./index-ng3tbe9P.js";import"./Dialog-DZnPkgpD.js";import"./cross-Ru3cb-0v.js";import"./svgIconContainer-DHuWaZTY.js";import"./useBaseUiId-CzdAPKcM.js";import"./InternalBackdrop-BmMwY1G8.js";import"./composite-DYx0o4xU.js";import"./index-CAS93zYH.js";import"./index-2u3EkiNe.js";import"./index-B-q1-RGO.js";import"./useEventCallback-DfL7Xwj3.js";import"./SkeletonBar-DSusNGP9.js";import"./LoadingCell-CYJYg4A2.js";import"./ColumnConfigDialog-C6Ou_8-m.js";import"./DraggableList-DtFsL6Te.js";import"./search-Bp5Pu1gz.js";import"./Input-BS3oHtWW.js";import"./useControlled-C9uWc1JH.js";import"./Button-ClRUUN4D.js";import"./small-cross-C5fgYdja.js";import"./ActionButton-DJtGz9fC.js";import"./Checkbox-CVjzm5Rx.js";import"./useValueChanged-CAq7ZKSq.js";import"./CollapsiblePanel-C0-syFXf.js";import"./MultiColumnSortDialog-Bmk2o4Gq.js";import"./MenuTrigger-LUO586af.js";import"./CompositeItem-C2VQoVHh.js";import"./ToolbarRootContext-BeHAyrdi.js";import"./getDisabledMountTransitionStyles-t9u9WVJm.js";import"./getPseudoElementBounds-Bxn--1AT.js";import"./chevron-down-CHYkUqFt.js";import"./index-Kx6fu-in.js";import"./error-BpjJAz0p.js";import"./BaseCbacBanner-BKFF2omj.js";import"./makeExternalStore-BCGLTkZK.js";import"./Tooltip-B-SB3nD8.js";import"./PopoverPopup-DDAnQOO5.js";import"./debounce-M4p3mf0R.js";import"./useOsdkClient-D4eIr_PA.js";import"./tick-BFeHnwNZ.js";import"./DropdownField-Cw3pM5Se.js";import"./isEqual-D41XWVlX.js";import"./withOsdkMetrics-CSFskl9_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
