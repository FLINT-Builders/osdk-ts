import{j as i}from"./iframe-D2N6QAO4.js";import{O as p}from"./object-table-lxDeLJoa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQ1QVOn-.js";import"./preload-helper-C0G0Ely3.js";import"./Table-C19ILbqk.js";import"./index-C6mUO3LG.js";import"./Dialog-B0kvSLe8.js";import"./cross-33P9gQ16.js";import"./svgIconContainer-CNArd5Vw.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./InternalBackdrop-BC53QrF9.js";import"./composite-Csdn23VF.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./index-BuEE91VM.js";import"./useEventCallback-SR7xrDYW.js";import"./SkeletonBar-DfIaa6sS.js";import"./LoadingCell-DctXHB2C.js";import"./ColumnConfigDialog-khpK5TXG.js";import"./DraggableList-DIXakBW0.js";import"./search-C7B0jIv9.js";import"./Input-DOJuMFjU.js";import"./useControlled-BXWTj0go.js";import"./Button-g15W-Nz5.js";import"./small-cross-D3BxVY3q.js";import"./ActionButton-DdZRctiY.js";import"./Checkbox-BsFto3s4.js";import"./useValueChanged-D2aWPQQV.js";import"./CollapsiblePanel-BVQv8eQV.js";import"./MultiColumnSortDialog-CDDnCRAh.js";import"./MenuTrigger-FLFe0gWC.js";import"./CompositeItem-DgrMig66.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./getDisabledMountTransitionStyles-BB_Hcyjk.js";import"./getPseudoElementBounds-Dunwefln.js";import"./chevron-down-BAjPYhxH.js";import"./index-BaO-kZLo.js";import"./error-DOYfumOT.js";import"./BaseCbacBanner-BnfEs82n.js";import"./makeExternalStore-B1G3DsJO.js";import"./Tooltip-XE7UgRlK.js";import"./PopoverPopup-BhVSGBKw.js";import"./debounce-BkOPavrs.js";import"./useOsdkClient-BdxxenZf.js";import"./tick-BYuKeJ0M.js";import"./DropdownField-dwtwvXXB.js";import"./isEqual-CfeS8fMi.js";import"./withOsdkMetrics-gaJzJVhq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
