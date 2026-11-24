import{j as i}from"./iframe-Dv8One7V.js";import{O as p}from"./object-table-CfRYWgsZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-j2s3B52G.js";import"./preload-helper-BBoDOBGQ.js";import"./Table-B-B99IvY.js";import"./index-BWSDrnLY.js";import"./Dialog-DxY3Fx_o.js";import"./cross-DtsB4Pth.js";import"./svgIconContainer-frnooqcF.js";import"./useBaseUiId-CGmk-t13.js";import"./InternalBackdrop-DCePJn6p.js";import"./composite-lgOQMlQp.js";import"./index-Ctu1Wao6.js";import"./index-D03dI7Zm.js";import"./index-DcQ5HyEs.js";import"./useEventCallback-6cjXoQ8Y.js";import"./SkeletonBar-fAb0c0T8.js";import"./LoadingCell-DS7KPRVt.js";import"./ColumnConfigDialog-foN_V3UI.js";import"./DraggableList-DfKstJRE.js";import"./search-DIkoxWAI.js";import"./Input-CVOjTeyF.js";import"./useControlled-Xs-DgsXw.js";import"./Button-BvCCqPbi.js";import"./small-cross-BWiwWK5R.js";import"./ActionButton-CNvW2NgU.js";import"./Checkbox-DHn8_urd.js";import"./useValueChanged-CugKpIVt.js";import"./CollapsiblePanel-RlfeAOIs.js";import"./MultiColumnSortDialog-DDEKoryj.js";import"./MenuTrigger-khv0mkpD.js";import"./CompositeItem-DnhodDvF.js";import"./ToolbarRootContext-puaQBB4T.js";import"./getDisabledMountTransitionStyles-BkcjIdFx.js";import"./getPseudoElementBounds-ShrpqpOE.js";import"./chevron-down-BxGUpntZ.js";import"./index-BNO6OCKx.js";import"./error-DLGPeg_I.js";import"./BaseCbacBanner-C1GsAefg.js";import"./makeExternalStore-BdR9BUh7.js";import"./Tooltip-hfd-RkvL.js";import"./PopoverPopup-CwVc1ewd.js";import"./debounce-BRUGc1K3.js";import"./useOsdkClient-DoPqkbEf.js";import"./tick-CoFklBfZ.js";import"./DropdownField-Cq5lnh0S.js";import"./isEqual-B5kZnmRB.js";import"./withOsdkMetrics-CktMaht-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
