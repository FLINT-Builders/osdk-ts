import{j as i}from"./iframe-NyHN5VRq.js";import{O as p}from"./object-table-C81DNPEN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B34rbYJY.js";import"./preload-helper-V-uedkqD.js";import"./Table-ZpVbTwfW.js";import"./index-BfjQx6Ly.js";import"./Dialog-DKEJlEC2.js";import"./cross-Dw9UKTtm.js";import"./svgIconContainer-D2-PKO04.js";import"./useBaseUiId-D2dSZ8xw.js";import"./InternalBackdrop-D7Xp3E9p.js";import"./composite-dEyBM_w4.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./index-B3mmWQ0F.js";import"./useEventCallback-DoOCRT8a.js";import"./SkeletonBar-GrYatSDE.js";import"./LoadingCell-DynSbYUR.js";import"./ColumnConfigDialog-r2G1cMvL.js";import"./DraggableList-C1u518YK.js";import"./search-5FdBAUHN.js";import"./Input-CNTzIZ_0.js";import"./useControlled-Dh_cMPIe.js";import"./Button-Czn8jZsp.js";import"./small-cross-B006-969.js";import"./ActionButton-B_hA--wV.js";import"./Checkbox-CHTGGrx7.js";import"./useValueChanged-2qCvj704.js";import"./CollapsiblePanel-DyupETYF.js";import"./MultiColumnSortDialog-hp_Xxbvk.js";import"./MenuTrigger-BsZAgMhw.js";import"./CompositeItem-D6OEWPs8.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./getDisabledMountTransitionStyles-BnTV1GCv.js";import"./getPseudoElementBounds-liAYIzgN.js";import"./chevron-down-D5RxD_5a.js";import"./index-Cf28HvbY.js";import"./error-CmvnS4M6.js";import"./BaseCbacBanner-B5vq67kq.js";import"./makeExternalStore-DXy-cErB.js";import"./Tooltip-CKdMZe0K.js";import"./PopoverPopup-BXMQLUfh.js";import"./debounce-DTG0i2xp.js";import"./useOsdkClient-KQa4vScA.js";import"./tick-Dv-MwZz4.js";import"./DropdownField-DDnDtQPw.js";import"./isEqual-Dok9u36d.js";import"./withOsdkMetrics-5n_JPyv4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
