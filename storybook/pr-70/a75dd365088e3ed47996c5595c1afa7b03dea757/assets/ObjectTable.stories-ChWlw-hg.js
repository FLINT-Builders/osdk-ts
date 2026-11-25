import{j as i}from"./iframe-CP9a7nUw.js";import{O as p}from"./object-table-BruGR1AQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtTUNa7h.js";import"./preload-helper-CEsPI4dA.js";import"./Table-Hczb4WTJ.js";import"./index-DniCSj7w.js";import"./Dialog-BZGlhhfP.js";import"./cross-CzNskJpg.js";import"./svgIconContainer-2VLDNHQf.js";import"./useBaseUiId-DiSl6omO.js";import"./InternalBackdrop-INOUWv7w.js";import"./composite-glykujGt.js";import"./index-iwc-nvij.js";import"./index-DmfmdOfN.js";import"./index--1cLqxis.js";import"./useEventCallback-ChYCugrs.js";import"./SkeletonBar-N9YLL7wQ.js";import"./LoadingCell-Cve1Kf7h.js";import"./ColumnConfigDialog-BjWG-hci.js";import"./DraggableList-D29nndwp.js";import"./search-XcYtnEQZ.js";import"./Input-CWaAUNjQ.js";import"./useControlled-CuJAn8pg.js";import"./Button-CmgLZAkm.js";import"./small-cross-Cn3FY_V8.js";import"./ActionButton-xfKsHh_O.js";import"./Checkbox-DqvQ_8P_.js";import"./useValueChanged-rrXn3TDR.js";import"./CollapsiblePanel-CCQUbxVQ.js";import"./MultiColumnSortDialog-Cxmv9l-b.js";import"./MenuTrigger-DKmVApA5.js";import"./CompositeItem-CqeBUtGk.js";import"./ToolbarRootContext-UMchbOHm.js";import"./getDisabledMountTransitionStyles-wj6lRVON.js";import"./getPseudoElementBounds-DA4wJ9CI.js";import"./chevron-down-BeMypg5x.js";import"./index-C0KVErgA.js";import"./error-XoDyt_r9.js";import"./BaseCbacBanner-0k60aUbW.js";import"./makeExternalStore-BVCeMHz1.js";import"./Tooltip-BHR2-9_G.js";import"./PopoverPopup-DmK1cLX2.js";import"./debounce-CN_ZmUe7.js";import"./useOsdkClient-HDPiO6O7.js";import"./tick-X1olulBP.js";import"./DropdownField-B-yjH5_t.js";import"./isEqual-DH7O2jmc.js";import"./withOsdkMetrics-tcURfXmI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
