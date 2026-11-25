import{j as i}from"./iframe-BQ-KHcHE.js";import{O as p}from"./object-table-D7pYQb3P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CI6KhBdN.js";import"./preload-helper-D_u3--ud.js";import"./Table-CCjqCmAm.js";import"./index-Bi4ii54G.js";import"./Dialog-YJ5Y5IZw.js";import"./cross-CTORp-eO.js";import"./svgIconContainer-BkJqfnsZ.js";import"./useBaseUiId-Da1a09f-.js";import"./InternalBackdrop-BeLoEUss.js";import"./composite-pFx5Riq1.js";import"./index-9EejlPKp.js";import"./index-eHVziK00.js";import"./index-c3QE1mje.js";import"./useEventCallback-CwAUxMau.js";import"./SkeletonBar-Comqxq8o.js";import"./LoadingCell-BsCWYNY9.js";import"./ColumnConfigDialog-Ld-e3a3c.js";import"./DraggableList-C9IvtlIA.js";import"./search-D2FdgE19.js";import"./Input-DzeLPEOm.js";import"./useControlled-D0CpkFUO.js";import"./Button-CWYPsBwI.js";import"./small-cross-BEdJA5Lo.js";import"./ActionButton-DVp_A1sh.js";import"./Checkbox-D5SJJ5wR.js";import"./useValueChanged-BzLrFWOP.js";import"./CollapsiblePanel-kLnFiWuY.js";import"./MultiColumnSortDialog-C0J2j61-.js";import"./MenuTrigger-DOnH68Cz.js";import"./CompositeItem-BvMYLyDt.js";import"./ToolbarRootContext-GvDSdibe.js";import"./getDisabledMountTransitionStyles-CJE6Zpnj.js";import"./getPseudoElementBounds-dMzXYP3e.js";import"./chevron-down-Bo4eEeQA.js";import"./index-Dd2QToo9.js";import"./error-Bd9iDu5J.js";import"./BaseCbacBanner-CNtS5jwp.js";import"./makeExternalStore-wa371Aji.js";import"./Tooltip-pNyVdFzA.js";import"./PopoverPopup-DRD2vKLI.js";import"./debounce-aoiaDW2x.js";import"./useOsdkClient-QySWZGED.js";import"./tick-qNWElNJO.js";import"./DropdownField-DnnSL_kI.js";import"./isEqual-BftbWPWG.js";import"./withOsdkMetrics-DcXC33Yd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
