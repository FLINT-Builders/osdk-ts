import{j as i}from"./iframe-COTYg0i4.js";import{O as p}from"./object-table-B1lu4fBP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9-fJ1LO.js";import"./preload-helper-BfUBPZQv.js";import"./Table-ZCwk7fhG.js";import"./index-DEWKwQ6D.js";import"./Dialog-DLvNEGJL.js";import"./cross-pC4h9ZyI.js";import"./svgIconContainer-DSLsCdLH.js";import"./useBaseUiId-B73nbOFb.js";import"./InternalBackdrop-B63HsuZ1.js";import"./composite-DLNSROKR.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./index-Pg3lOjt6.js";import"./useEventCallback-CiBIzJgi.js";import"./SkeletonBar-BZj2rBym.js";import"./LoadingCell-Ca5ZGjYw.js";import"./ColumnConfigDialog-B5wcyeXe.js";import"./DraggableList-Bs0zZt68.js";import"./search-Di0PIeOa.js";import"./Input-DNkGR0ru.js";import"./useControlled-BH9DAJiP.js";import"./Button-BBJ0BrTf.js";import"./small-cross-BeoxIJGH.js";import"./ActionButton-CW1Oc_Lq.js";import"./Checkbox-C0rTX60W.js";import"./useValueChanged-WywSbPil.js";import"./CollapsiblePanel-6UtNAlT1.js";import"./MultiColumnSortDialog-DHzW6erw.js";import"./MenuTrigger-Bl15Mqgy.js";import"./CompositeItem-D4sOZv8D.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./getDisabledMountTransitionStyles-CoNaBqL_.js";import"./getPseudoElementBounds-VlWfte-L.js";import"./chevron-down-DHzInOjp.js";import"./index-BaMA_XVs.js";import"./error-DlWRXjMl.js";import"./BaseCbacBanner-CRZYCJ0Z.js";import"./makeExternalStore-DrnQQ2FN.js";import"./Tooltip-g0ERy23q.js";import"./PopoverPopup-liRqNt55.js";import"./debounce-CRgNZ5We.js";import"./useOsdkClient-Crr6_6H9.js";import"./tick-C2nrRSUw.js";import"./DropdownField-CbKzwlXJ.js";import"./isEqual-CQOK5UhL.js";import"./withOsdkMetrics-0S6rxLM8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
