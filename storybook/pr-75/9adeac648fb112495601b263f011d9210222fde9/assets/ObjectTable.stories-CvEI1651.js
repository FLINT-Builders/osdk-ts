import{j as i}from"./iframe-B33FiDGM.js";import{O as p}from"./object-table-Cd9X1y5Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuqOxC3w.js";import"./preload-helper-Cg7VMV6C.js";import"./Table-D1t5A_0z.js";import"./index-B5YN0Y56.js";import"./Dialog-C7nRwVTO.js";import"./cross-DM8-ytCZ.js";import"./svgIconContainer-ClieOgTu.js";import"./useBaseUiId-DmUoOZel.js";import"./InternalBackdrop-Bc6Qn10Y.js";import"./composite-BOK6xXDF.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./index-BkpulrI-.js";import"./useEventCallback-CUqu6vM2.js";import"./SkeletonBar-CnLHYQNB.js";import"./LoadingCell-Gr9gnu7q.js";import"./ColumnConfigDialog-0fqvoH_h.js";import"./DraggableList-CQALhbaS.js";import"./search-C5uprCHM.js";import"./Input-BUa4RtbK.js";import"./useControlled-DJSk-4eD.js";import"./Button-CyQdblJP.js";import"./small-cross-C4rGQ9AX.js";import"./ActionButton-C1CptcBU.js";import"./Checkbox-DgsjFVUP.js";import"./useValueChanged-rm8GvKSd.js";import"./CollapsiblePanel-DtZcxswM.js";import"./MultiColumnSortDialog-52qg3BYK.js";import"./MenuTrigger-B7ZsfWcK.js";import"./CompositeItem-Bvfghm7d.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./getDisabledMountTransitionStyles-DXyRWdV6.js";import"./getPseudoElementBounds-Dz6sul8_.js";import"./chevron-down-Btg0m5Mr.js";import"./index-DNAzx9pt.js";import"./error-DU6Loo59.js";import"./BaseCbacBanner-bdCVeoPH.js";import"./makeExternalStore-zxZeOhNi.js";import"./Tooltip-DCvW2Y7A.js";import"./PopoverPopup-DJjNkjXn.js";import"./debounce-G8bS-CmE.js";import"./useOsdkClient-DzcQCh9h.js";import"./tick-CYGrOqhY.js";import"./DropdownField-B_28b-Fe.js";import"./isEqual-BkJ-04z-.js";import"./withOsdkMetrics-8fzs58WB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
