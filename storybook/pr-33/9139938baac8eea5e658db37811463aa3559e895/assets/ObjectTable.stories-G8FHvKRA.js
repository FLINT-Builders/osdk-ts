import{j as i}from"./iframe-CSBSqJV-.js";import{O as p}from"./object-table-CQlh17pU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSPpUygG.js";import"./preload-helper-y6YPEm4u.js";import"./Table-DGzGYFQo.js";import"./index-BJfVWZd-.js";import"./Dialog-driLLg7n.js";import"./cross-B6WlAhq-.js";import"./svgIconContainer-CLK7EnDK.js";import"./useBaseUiId-Bc5TgsQW.js";import"./InternalBackdrop-Beq1X7xS.js";import"./composite-jPJKKGn2.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./index-LUSaJ2vo.js";import"./useEventCallback-DKSmEp2D.js";import"./SkeletonBar-DUkAKkre.js";import"./LoadingCell-C72uwxIB.js";import"./ColumnConfigDialog-BB1p_5kR.js";import"./DraggableList-BcrePS-Y.js";import"./search-DvlP61aE.js";import"./Input-B47Y97Of.js";import"./useControlled-Bac_91v3.js";import"./Button-Dh9tN-kh.js";import"./small-cross-CSds0n2Q.js";import"./ActionButton-cyr4kPxp.js";import"./Checkbox-D3JwoAva.js";import"./useValueChanged-D2mv37rP.js";import"./CollapsiblePanel-CFBpR34G.js";import"./MultiColumnSortDialog-s81HUVpC.js";import"./MenuTrigger-NP9ud2uM.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./getDisabledMountTransitionStyles-BniS6qDk.js";import"./getPseudoElementBounds-DhrtV-tW.js";import"./chevron-down-C4EMQsdy.js";import"./index-B3n_oO7A.js";import"./error-CRSueJec.js";import"./BaseCbacBanner-CFcln0a-.js";import"./makeExternalStore-BuktQzqG.js";import"./Tooltip-Bo7GAIpf.js";import"./PopoverPopup-BFehPzV1.js";import"./debounce-gyo9KVfh.js";import"./useOsdkClient-0i4-BUE5.js";import"./tick-WiW2BOLj.js";import"./DropdownField-BIxLro4D.js";import"./isEqual-tRqZMX7m.js";import"./withOsdkMetrics-B-CwHZa2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
