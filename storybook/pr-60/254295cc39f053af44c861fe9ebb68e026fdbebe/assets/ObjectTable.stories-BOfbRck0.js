import{j as i}from"./iframe-BuSw4B6O.js";import{O as p}from"./object-table-DJouJ_zt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C57uIocz.js";import"./preload-helper-lqh4ZshJ.js";import"./Table-CfhNV2Ii.js";import"./index-D9SEgQNF.js";import"./Dialog-B_f1Ez79.js";import"./cross-7xpX4Ge0.js";import"./svgIconContainer-BZgPnQyZ.js";import"./useBaseUiId-DViO3tgt.js";import"./InternalBackdrop-CA7307o1.js";import"./composite-DAXoYC61.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./index-7KpkRFDe.js";import"./useEventCallback-BVVXZcvZ.js";import"./SkeletonBar-Bjsc0Vlg.js";import"./LoadingCell-DyYZRjN4.js";import"./ColumnConfigDialog-B-pp2uLb.js";import"./DraggableList-uY2SXCwv.js";import"./search-DRWDcQXz.js";import"./Input-Ct08sj7B.js";import"./useControlled-8U03TFMg.js";import"./Button-DZw1-eKI.js";import"./small-cross-D6It-7yt.js";import"./ActionButton-CbDgFm0H.js";import"./Checkbox-BAo2Bb0u.js";import"./useValueChanged-CObbYU8S.js";import"./CollapsiblePanel-OoIliCXc.js";import"./MultiColumnSortDialog-DWOorCge.js";import"./MenuTrigger-BvVKcwFG.js";import"./CompositeItem-0tc6F5lP.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./getDisabledMountTransitionStyles-4Lq6Qrl-.js";import"./getPseudoElementBounds-B5CjaZhn.js";import"./chevron-down-Cbm7pBxW.js";import"./index-DzxxLWoo.js";import"./error-mcJBKPob.js";import"./BaseCbacBanner-BOKW3MY9.js";import"./makeExternalStore-2iAw82Qk.js";import"./Tooltip-D3zKUMKo.js";import"./PopoverPopup-BlwV2f1d.js";import"./debounce-Bjcpa4D8.js";import"./useOsdkClient-CC-HmWmp.js";import"./tick-DStEO9pf.js";import"./DropdownField-7MeYkNlB.js";import"./isEqual-BKdG9moy.js";import"./withOsdkMetrics-DUOa1-5i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
