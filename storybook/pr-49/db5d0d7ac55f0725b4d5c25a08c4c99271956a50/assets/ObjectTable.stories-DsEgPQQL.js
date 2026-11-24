import{j as i}from"./iframe-ClewFmdb.js";import{O as p}from"./object-table-8K4aePLH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BesIkqqY.js";import"./preload-helper-C7O4zYJs.js";import"./Table-0qXuSpiD.js";import"./index-euIemqPw.js";import"./Dialog-DQpS9gtB.js";import"./cross-C3it1rM0.js";import"./svgIconContainer-6Af8qoOE.js";import"./useBaseUiId-CM0luRv8.js";import"./InternalBackdrop-DwZ14DHU.js";import"./composite-C-wFuse1.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./index-DIwsgw5y.js";import"./useEventCallback-Dm_-ERSx.js";import"./SkeletonBar-FwwEYK9L.js";import"./LoadingCell-BxFRA9K3.js";import"./ColumnConfigDialog-DCzvHOWU.js";import"./DraggableList-CJc0qD0P.js";import"./search-D0xA_Pz7.js";import"./Input-eZMgRwLi.js";import"./useControlled-8bbLsKqv.js";import"./Button-Br0QmuY1.js";import"./small-cross-uC2CoRN_.js";import"./ActionButton-C4_8y7RX.js";import"./Checkbox-aaq5Ho4E.js";import"./useValueChanged-BuF2EKQm.js";import"./CollapsiblePanel-IjgMvAVk.js";import"./MultiColumnSortDialog-BcP8s1U4.js";import"./MenuTrigger-UCF9DPXZ.js";import"./CompositeItem-LzMD5IlK.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./getDisabledMountTransitionStyles-vZzLMj6x.js";import"./getPseudoElementBounds-Bp53_Y_k.js";import"./chevron-down-CN3rbJYx.js";import"./index-wZBaNT0h.js";import"./error-BpCPRxU6.js";import"./BaseCbacBanner-tpjBGn7l.js";import"./makeExternalStore-B6ZLCKG0.js";import"./Tooltip-Dhf32NVV.js";import"./PopoverPopup-BRgxxAdh.js";import"./debounce-DRq1cdjb.js";import"./useOsdkClient-CvCsWpzO.js";import"./tick-BrTAlGhW.js";import"./DropdownField-DJ_QrvtP.js";import"./isEqual-B878mnik.js";import"./withOsdkMetrics-DMwTLP5k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
