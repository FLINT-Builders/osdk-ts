import{j as i}from"./iframe-NQpNXTjy.js";import{O as p}from"./object-table-C2Ty1QZM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8E3Jk7L.js";import"./preload-helper-CxQobykS.js";import"./Table-ClAaLI_Z.js";import"./index-DPTMEED5.js";import"./Dialog-CwuoTZv0.js";import"./cross-BXjngWjd.js";import"./svgIconContainer-CuTwM0es.js";import"./useBaseUiId-CA0Hx9BI.js";import"./InternalBackdrop-6ARUn0ZZ.js";import"./composite-CckoXbi1.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./index-BFl4Kuhx.js";import"./useEventCallback-CFM9jrEt.js";import"./SkeletonBar-DV2B4sl1.js";import"./LoadingCell-Ch6zqmvo.js";import"./ColumnConfigDialog-CFx_2dbj.js";import"./DraggableList-CokhiAiZ.js";import"./search-5LAMc9Yr.js";import"./Input-8evEI4JC.js";import"./useControlled-Dfym0E7J.js";import"./Button-BW-em3cF.js";import"./small-cross-B3yU2vZR.js";import"./ActionButton-zJRNa7Ux.js";import"./Checkbox-gwz4RQas.js";import"./useValueChanged-CMvtaO4q.js";import"./CollapsiblePanel-BxFWJsn2.js";import"./MultiColumnSortDialog-DEMi2uAt.js";import"./MenuTrigger-CjfBPdjD.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./getDisabledMountTransitionStyles-Ceat6ftx.js";import"./getPseudoElementBounds-DzeDuzLQ.js";import"./chevron-down-CpS1Uhst.js";import"./index-DD2WCnOg.js";import"./error-DtbT1aJ_.js";import"./BaseCbacBanner-CT-a_Rkb.js";import"./makeExternalStore-C9iKzFcW.js";import"./Tooltip-BB-3PmXh.js";import"./PopoverPopup-Bbh9gvxv.js";import"./debounce-D0cuI_rP.js";import"./useOsdkClient-CD2MlnJ0.js";import"./tick-Cgl4xEea.js";import"./DropdownField-CzOL9fzI.js";import"./isEqual-wBsHbSR6.js";import"./withOsdkMetrics-BrRP7bk2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
