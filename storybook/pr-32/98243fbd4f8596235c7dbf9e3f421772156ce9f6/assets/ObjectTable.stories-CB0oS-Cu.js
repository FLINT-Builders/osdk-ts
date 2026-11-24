import{j as i}from"./iframe-BrM52See.js";import{O as p}from"./object-table-VQLhFWF1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9KUddk7D.js";import"./preload-helper-DPLtzYOe.js";import"./Table-DBrEBYq-.js";import"./index-H3qcjrO1.js";import"./Dialog-C6ykfz8O.js";import"./cross-BS83Kw7I.js";import"./svgIconContainer-DWvq_kJI.js";import"./useBaseUiId-LwZBbKwi.js";import"./InternalBackdrop-B0v8ialf.js";import"./composite-BZFmOQck.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./index-l8fykvfj.js";import"./useEventCallback-BHcaXjux.js";import"./SkeletonBar-CyZkMeKi.js";import"./LoadingCell-BKsSrcW2.js";import"./ColumnConfigDialog-CA_TaoPw.js";import"./DraggableList-BjT_lsmH.js";import"./search-B5gd2r9J.js";import"./Input-Ctwp83L6.js";import"./useControlled--LTXft-F.js";import"./Button-Bor1IKlq.js";import"./small-cross-mZTcJe0Y.js";import"./ActionButton-Bjg5SHwB.js";import"./Checkbox-CpcYXb7o.js";import"./useValueChanged-CaQ00tTB.js";import"./CollapsiblePanel-DNThs05J.js";import"./MultiColumnSortDialog-DdgbljRq.js";import"./MenuTrigger-DgZhECnA.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./getDisabledMountTransitionStyles-ZwWdEcJk.js";import"./getPseudoElementBounds-DNWW4OHS.js";import"./chevron-down-IA-50EVq.js";import"./index-CHWvcJrG.js";import"./error-DUN9wjL6.js";import"./BaseCbacBanner-CaBAfIKG.js";import"./makeExternalStore-ByUo-Oil.js";import"./Tooltip-Dmxc3XnT.js";import"./PopoverPopup-Hoh-5uEa.js";import"./debounce-I5NpiXWy.js";import"./useOsdkClient-CUbGPJm8.js";import"./tick-s7oDZI4G.js";import"./DropdownField-BjLRMnJ9.js";import"./isEqual-CGSZE7_m.js";import"./withOsdkMetrics-DCPJGWBb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
