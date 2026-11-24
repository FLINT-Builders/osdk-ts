import{j as i}from"./iframe-9Qc56ENr.js";import{O as p}from"./object-table-VWvjSsNP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1DVgk97P.js";import"./preload-helper-DyAcE4yv.js";import"./Table-DVjzdimX.js";import"./index-OROGqtQ6.js";import"./Dialog-DDaqFSdl.js";import"./cross-BiOFXjvO.js";import"./svgIconContainer-8v5BjuYc.js";import"./useBaseUiId-FwL7BYPy.js";import"./InternalBackdrop-CUc8C_zH.js";import"./composite-DhCF3AFw.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./index-CJPP9-f3.js";import"./useEventCallback-DIxqN6fJ.js";import"./SkeletonBar-C702hny6.js";import"./LoadingCell-DS672NFP.js";import"./ColumnConfigDialog-CA1dYBJP.js";import"./DraggableList-B1F4pXEu.js";import"./search-cLeveEh6.js";import"./Input-BNo-_u5D.js";import"./useControlled-B_qIqTVD.js";import"./Button-D4UJHZ4Q.js";import"./small-cross-DTTV9D1S.js";import"./ActionButton-DmbgcWXC.js";import"./Checkbox-B2rYdyjP.js";import"./useValueChanged-MCZoLrLU.js";import"./CollapsiblePanel-CFuv4DzY.js";import"./MultiColumnSortDialog-eWu75AP5.js";import"./MenuTrigger-CSjAvRyJ.js";import"./CompositeItem-BURGIqnl.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./getDisabledMountTransitionStyles-BW75AxGn.js";import"./getPseudoElementBounds-DOKmjR3u.js";import"./chevron-down-DTg_s13_.js";import"./index-DZAIQf61.js";import"./error-BiGuleu5.js";import"./BaseCbacBanner-UxcbrKA6.js";import"./makeExternalStore-DqYHgnt1.js";import"./Tooltip-CDE1Wq1X.js";import"./PopoverPopup-DCCXAG8S.js";import"./debounce-yYyDTVJY.js";import"./useOsdkClient-9Nrv4s3L.js";import"./tick-ZseZQiB-.js";import"./DropdownField-yTdkTLuM.js";import"./isEqual-DKuEVMgA.js";import"./withOsdkMetrics-HzozZnUd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
