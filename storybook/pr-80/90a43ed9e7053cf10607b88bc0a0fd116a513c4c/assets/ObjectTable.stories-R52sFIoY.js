import{j as i}from"./iframe-evcKlg9V.js";import{O as p}from"./object-table-SUOIkIIu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDPnzZ-a.js";import"./preload-helper-WHPhz6sD.js";import"./Table-q41Sb_Mi.js";import"./index-BHwj9ia0.js";import"./Dialog-D-xLZC1d.js";import"./cross-BbmJFYQF.js";import"./svgIconContainer-DOh5rP9T.js";import"./useBaseUiId-DdAriUni.js";import"./InternalBackdrop-BBabxNjC.js";import"./composite-BltyBfwn.js";import"./index-fwET-1_r.js";import"./index-Cyl-_-yn.js";import"./index-O4DHWyqo.js";import"./useEventCallback-_R1SuQ--.js";import"./SkeletonBar-BdyajZcd.js";import"./LoadingCell-DysHkDtt.js";import"./ColumnConfigDialog-C9b7wqvX.js";import"./DraggableList-oXDZY61M.js";import"./search-DhcR5bm1.js";import"./Input-iRDe1k4_.js";import"./useControlled-DXtgTA3C.js";import"./Button-Bz5serEd.js";import"./small-cross-B30QXwxO.js";import"./ActionButton-lCE-fGOM.js";import"./Checkbox-CXix4bmY.js";import"./useValueChanged-DTq6En14.js";import"./CollapsiblePanel-DJfTc0NL.js";import"./MultiColumnSortDialog-BDGoSocz.js";import"./MenuTrigger-DrJfkCqI.js";import"./CompositeItem-Cm5MVItV.js";import"./ToolbarRootContext-RfiWxa4c.js";import"./getDisabledMountTransitionStyles-BwnYd9Fi.js";import"./getPseudoElementBounds-BzQUzGR6.js";import"./chevron-down-BvJqIX5i.js";import"./index-BU0mDmBx.js";import"./error-BDn6-GLZ.js";import"./BaseCbacBanner-Dyg5JJV_.js";import"./makeExternalStore-DSan-vOh.js";import"./Tooltip-DfpJpJwe.js";import"./PopoverPopup-CUAmX7eQ.js";import"./debounce-DziosmGC.js";import"./useOsdkClient-BFKEpEYK.js";import"./tick-aNfHfk5E.js";import"./DropdownField-BhbpYF1Z.js";import"./isEqual-D7GRqXwZ.js";import"./withOsdkMetrics-BriAHFRe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
