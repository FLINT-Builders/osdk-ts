import{j as i}from"./iframe-BzttuLup.js";import{O as p}from"./object-table-V3vtQDzj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cf64qLTF.js";import"./preload-helper-DEinGEya.js";import"./Table-Dkw6qntG.js";import"./index-7CJFn-ex.js";import"./Dialog-B4bx3-G4.js";import"./cross-4RHnOViN.js";import"./svgIconContainer-BicyMjFC.js";import"./useBaseUiId-C_qs9mR7.js";import"./InternalBackdrop-PyFDeOLi.js";import"./composite-CYx1_fMl.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./index-DTD6QywL.js";import"./useEventCallback-B08CG3mJ.js";import"./SkeletonBar-B9sLOoZd.js";import"./LoadingCell-e_8nVwWI.js";import"./ColumnConfigDialog-D-LHf8uu.js";import"./DraggableList-wSZtHt_j.js";import"./search-Dt2zfbsw.js";import"./Input-BumRROcl.js";import"./useControlled-DvTO4Lqf.js";import"./Button-B0wCjsGN.js";import"./small-cross-CXStxdm6.js";import"./ActionButton-DXY5W19F.js";import"./Checkbox-B5eAc9Qm.js";import"./useValueChanged-BFZjFvxq.js";import"./CollapsiblePanel-B08RbuOL.js";import"./MultiColumnSortDialog-Lydy8ubJ.js";import"./MenuTrigger-tipzUI00.js";import"./CompositeItem-E8-A5SU4.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./getDisabledMountTransitionStyles-BMOazWhO.js";import"./getPseudoElementBounds-Cn4AgsTS.js";import"./chevron-down-_FTLKkTP.js";import"./index-Dint05uq.js";import"./error-CLZJuCl2.js";import"./BaseCbacBanner-6v7FlQJC.js";import"./makeExternalStore-DAGqxfwp.js";import"./Tooltip-BTYfzcBb.js";import"./PopoverPopup-Dx6YNas4.js";import"./debounce-DlVBfSqq.js";import"./useOsdkClient-BgCetPCz.js";import"./tick-DOtLTALy.js";import"./DropdownField--AwpHRkt.js";import"./isEqual-DldK_P3t.js";import"./withOsdkMetrics-Dfc2rN4I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
