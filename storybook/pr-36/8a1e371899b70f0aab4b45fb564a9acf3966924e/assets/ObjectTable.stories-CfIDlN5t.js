import{j as i}from"./iframe-DUf0ZM0m.js";import{O as p}from"./object-table-BZQfq3Js.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-24n93Plb.js";import"./preload-helper-KlMKjl9V.js";import"./Table-BpqgbLs4.js";import"./index-DhPIhyt4.js";import"./Dialog-CayXW5M3.js";import"./cross-CSu9pd0U.js";import"./svgIconContainer-DIQ4r6yH.js";import"./useBaseUiId-CCdSaAp3.js";import"./InternalBackdrop-BpRU2U_8.js";import"./composite-Ca3Atwol.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./index-C0yU06Q6.js";import"./useEventCallback-BgsfaB3Y.js";import"./SkeletonBar-COiOlbH0.js";import"./LoadingCell-B2QIRUcR.js";import"./ColumnConfigDialog-DWrprQ7Z.js";import"./DraggableList-DK4DOOpd.js";import"./search-BTSIL3B5.js";import"./Input-D5jZGu61.js";import"./useControlled-D9pcZLhn.js";import"./Button-27JXw8gN.js";import"./small-cross-DPoZyTDD.js";import"./ActionButton-COPug63M.js";import"./Checkbox-B0VGQD67.js";import"./useValueChanged-z0aioFdT.js";import"./CollapsiblePanel-mRxE6gsX.js";import"./MultiColumnSortDialog-C6tqy3oQ.js";import"./MenuTrigger-zVMPfwjS.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./getDisabledMountTransitionStyles-DxcTI9oz.js";import"./getPseudoElementBounds-Cgd5KJAZ.js";import"./chevron-down-BElmyRaO.js";import"./index-C9tEn2VI.js";import"./error-wj1vfq65.js";import"./BaseCbacBanner-DpcCkxH6.js";import"./makeExternalStore-CiGKFh7B.js";import"./Tooltip-XJCpwDJu.js";import"./PopoverPopup-DSjEA-Cg.js";import"./debounce-D4eo-Ale.js";import"./useOsdkClient-CnVn3iVU.js";import"./tick-Cf9GU9iy.js";import"./DropdownField-DAuhKtCc.js";import"./isEqual-Bk5F-IFE.js";import"./withOsdkMetrics-DuLTXoUD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
