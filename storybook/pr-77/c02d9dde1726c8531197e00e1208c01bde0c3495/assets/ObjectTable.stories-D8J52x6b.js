import{j as i}from"./iframe-BimQ5I7B.js";import{O as p}from"./object-table-ncEil8FU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qlA4hof9.js";import"./preload-helper-DVgp4Odj.js";import"./Table-qM2MBR7T.js";import"./index-Bterpizd.js";import"./Dialog-Co03GsOl.js";import"./cross-B1ycp5D_.js";import"./svgIconContainer-B7sYR9CH.js";import"./useBaseUiId-C8madkWI.js";import"./InternalBackdrop-CX3KLEvW.js";import"./composite-CFQYUg6D.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./index-8RuBob7j.js";import"./useEventCallback-p4N8Eyn2.js";import"./SkeletonBar-Bt_B5dG6.js";import"./LoadingCell-DWCuiV5v.js";import"./ColumnConfigDialog-BOYtEBmh.js";import"./DraggableList-C1YCs_mx.js";import"./search-2ZJHkAe4.js";import"./Input-BgCDGlWE.js";import"./useControlled-BZPlZ-l4.js";import"./Button-BDC1u4I1.js";import"./small-cross-FAi29SOY.js";import"./ActionButton-ButrV8bA.js";import"./Checkbox-DTBdc949.js";import"./useValueChanged-DYoiWqYd.js";import"./CollapsiblePanel-CpyR6Z1C.js";import"./MultiColumnSortDialog-YtfNFFnp.js";import"./MenuTrigger-BQKwEvQH.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./getDisabledMountTransitionStyles-DrpCBbHi.js";import"./getPseudoElementBounds-BKz8oGoA.js";import"./chevron-down-BSMcI5Uh.js";import"./index-Drk-T-LH.js";import"./error-Cm6SmQec.js";import"./BaseCbacBanner-D-qTc9yO.js";import"./makeExternalStore-BMJZ0gXh.js";import"./Tooltip-CYgKzjZV.js";import"./PopoverPopup-CqVwxtDC.js";import"./debounce-Dr3bOVOf.js";import"./useOsdkClient-B6IDuaBu.js";import"./tick-B97f0SKP.js";import"./DropdownField-vEf4IKfs.js";import"./isEqual-CqUAJ4RL.js";import"./withOsdkMetrics-D3LiHDOi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
