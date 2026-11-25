import{j as i}from"./iframe-Bpe98Dj4.js";import{O as p}from"./object-table-rroctWTB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-K0WoweF2.js";import"./preload-helper-Bt7Pwj0U.js";import"./Table-STbRnp0I.js";import"./index-Jn5RtXdC.js";import"./Dialog-D6iAyEKI.js";import"./cross-B4LWD9WI.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./useBaseUiId-CJdlvVPQ.js";import"./InternalBackdrop-C00MZUgD.js";import"./composite-BEI44NiL.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./index-DbJfw5Jw.js";import"./useEventCallback-jPkrsSwe.js";import"./SkeletonBar-Dio7HcWx.js";import"./LoadingCell-DiLMgH0z.js";import"./ColumnConfigDialog-CN70o2LH.js";import"./DraggableList-CVfOpD9R.js";import"./search-DczXofvN.js";import"./Input-5kFdRd8C.js";import"./useControlled-D2vfPoU0.js";import"./Button-CKCuh_PT.js";import"./small-cross-BQ5BxFpj.js";import"./ActionButton-BO6R8BaB.js";import"./Checkbox-C6awXPu3.js";import"./useValueChanged-CWbrPk1H.js";import"./CollapsiblePanel-CZ_2QIXb.js";import"./MultiColumnSortDialog-03FtNBsk.js";import"./MenuTrigger-LBhqhGgE.js";import"./CompositeItem-Cb_CEEPz.js";import"./ToolbarRootContext-B7sQOt43.js";import"./getDisabledMountTransitionStyles-B4PbYPUw.js";import"./getPseudoElementBounds-B1-hZC8t.js";import"./chevron-down-B2AZuAlJ.js";import"./index-qE8U94CR.js";import"./error-xXUB5Jtg.js";import"./BaseCbacBanner-BJlb7WUt.js";import"./makeExternalStore-hK8JV_UH.js";import"./Tooltip-C0c48BL6.js";import"./PopoverPopup-BT66tNSv.js";import"./debounce-CHjm_yWr.js";import"./useOsdkClient-BRImiEXq.js";import"./tick-CYKDx9Yh.js";import"./DropdownField-DkUTWihP.js";import"./isEqual-CDVwuKaY.js";import"./withOsdkMetrics-c2fg5j0X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
