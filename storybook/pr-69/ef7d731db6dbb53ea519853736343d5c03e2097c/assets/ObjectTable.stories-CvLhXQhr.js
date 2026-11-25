import{j as i}from"./iframe-CEEl8rhe.js";import{O as p}from"./object-table-BRYEavK4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-v_D3hssz.js";import"./preload-helper-BNeS4N_d.js";import"./Table-CH1HBcKP.js";import"./index-D3BMxXWO.js";import"./Dialog-CExnZc08.js";import"./cross-CC3rT2Cs.js";import"./svgIconContainer-BoK1M0P8.js";import"./useBaseUiId-Bj988QM0.js";import"./InternalBackdrop-BmSff-mp.js";import"./composite-DpkIpZoZ.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./index-D_PVV5Fd.js";import"./useEventCallback-C5vlArFZ.js";import"./SkeletonBar-p0RmfKN_.js";import"./LoadingCell-CCkUjs7m.js";import"./ColumnConfigDialog-Ckp9UGz4.js";import"./DraggableList-mCtVzcc0.js";import"./search-BpfeUnuY.js";import"./Input-BDwKsEY1.js";import"./useControlled-B70mnLby.js";import"./Button-YcHEvqMa.js";import"./small-cross-BwPiA_ZV.js";import"./ActionButton-jLAD1Qmw.js";import"./Checkbox-D8YHrR9c.js";import"./useValueChanged-C-fNJX81.js";import"./CollapsiblePanel-C1Fn1_Kr.js";import"./MultiColumnSortDialog-_TG7ke8e.js";import"./MenuTrigger-ncb26Pw2.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./getDisabledMountTransitionStyles-xN5v6pd8.js";import"./getPseudoElementBounds-Qyou3wPJ.js";import"./chevron-down-BGwNr8cZ.js";import"./index-BCtfyswk.js";import"./error-nlz9dA9p.js";import"./BaseCbacBanner-DdFaRu3i.js";import"./makeExternalStore-hwf9V02L.js";import"./Tooltip-Bwai2e_Y.js";import"./PopoverPopup-T8H6T0aO.js";import"./debounce-CHYKXz2Y.js";import"./useOsdkClient-_z2zV0V9.js";import"./tick-CRV1-A87.js";import"./DropdownField-Ba7JB-vZ.js";import"./isEqual-c3KaD12f.js";import"./withOsdkMetrics-DLFNJZK7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
