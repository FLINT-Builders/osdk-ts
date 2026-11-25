import{j as i}from"./iframe-DhvlIxBR.js";import{O as p}from"./object-table-BlzMzEtW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BfHx1Qc9.js";import"./preload-helper-D751HZEW.js";import"./Table-BeJwmrK7.js";import"./index-BUWZX9Fc.js";import"./Dialog-CauBFPi2.js";import"./cross-DZn8lU4z.js";import"./svgIconContainer-D7zjQbdd.js";import"./useBaseUiId-BHihEKOR.js";import"./InternalBackdrop-dLkigMoq.js";import"./composite-ChzFIgZg.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./index-BCPA7iDP.js";import"./useEventCallback-1TV48a-R.js";import"./SkeletonBar-DzkLjRbm.js";import"./LoadingCell-DSNHnbna.js";import"./ColumnConfigDialog-Chz-gxcq.js";import"./DraggableList-Ft09WuM9.js";import"./search-CvBEwoSG.js";import"./Input-BFA2W1TJ.js";import"./useControlled-8xbCIwQq.js";import"./Button-CIdQiPdq.js";import"./small-cross-Cee8oMTc.js";import"./ActionButton-NnowqCGc.js";import"./Checkbox-CRK3yBAC.js";import"./useValueChanged-BTfADdZZ.js";import"./CollapsiblePanel-CHRzUX6p.js";import"./MultiColumnSortDialog-D7EAWZt-.js";import"./MenuTrigger-C82M0KW8.js";import"./CompositeItem-feBepckq.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./getDisabledMountTransitionStyles-BdnwsIyN.js";import"./getPseudoElementBounds-uPAwbLXV.js";import"./chevron-down-Cl04GCmI.js";import"./index-BJZEpaeF.js";import"./error-CuUFOnij.js";import"./BaseCbacBanner-DDeSHTsc.js";import"./makeExternalStore-s_GWGbTj.js";import"./Tooltip-BcLf233N.js";import"./PopoverPopup-BwA2nu12.js";import"./debounce-H8a6NtlN.js";import"./useOsdkClient-Dk6VWjvC.js";import"./tick-peuNDpsM.js";import"./DropdownField-DGdaq3wW.js";import"./isEqual-DtpVwRjJ.js";import"./withOsdkMetrics-CNcx6if6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
