import{j as i}from"./iframe-OFDiPCrG.js";import{O as p}from"./object-table-BPDKIWGN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CnHFX2aS.js";import"./preload-helper-DUjfNDkl.js";import"./Table-KQeOisGx.js";import"./index-BeuOzgqu.js";import"./Dialog-Dqr1bH5t.js";import"./cross-jB5PN8IY.js";import"./svgIconContainer-DhDKsT9z.js";import"./useBaseUiId-BFA8n74e.js";import"./InternalBackdrop-DbDjPHet.js";import"./composite-PM-R8SRV.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./index-DkR0Sm-A.js";import"./useEventCallback-u5zfbyPP.js";import"./SkeletonBar-YHngoHZJ.js";import"./LoadingCell-CPbAcYO7.js";import"./ColumnConfigDialog-BzkVhHi-.js";import"./DraggableList-DOIwgRoD.js";import"./search-rykp5p6r.js";import"./Input-DDs2WsUf.js";import"./useControlled-DB7vMkHQ.js";import"./Button-C0oJYbtE.js";import"./small-cross-CzS85_Ss.js";import"./ActionButton-Dafw0kRv.js";import"./Checkbox-DhzgJCT-.js";import"./useValueChanged-O-f8K84Z.js";import"./CollapsiblePanel-iJsKp1Sk.js";import"./MultiColumnSortDialog-DqbRJlfk.js";import"./MenuTrigger-D9na9TlD.js";import"./CompositeItem-BEOwPENe.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./getDisabledMountTransitionStyles-C6EZ30T_.js";import"./getPseudoElementBounds-Bv073C_P.js";import"./chevron-down-BlpQBexS.js";import"./index-Dhs37uf9.js";import"./error-BuvCTlk4.js";import"./BaseCbacBanner-ingasLzJ.js";import"./makeExternalStore-CFPNQ_aD.js";import"./Tooltip-Dy2MALoM.js";import"./PopoverPopup-DBszHbY8.js";import"./debounce-ComwDjtY.js";import"./useOsdkClient-DCpLRsuK.js";import"./tick-DpIF400T.js";import"./DropdownField-BnKkKUrN.js";import"./isEqual-Ciu65pfO.js";import"./withOsdkMetrics-BSB8rkK5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
