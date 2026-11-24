import{j as i}from"./iframe-KADiCVVG.js";import{O as p}from"./object-table-VyvO3zHi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIWNKM20.js";import"./preload-helper-D58te3M_.js";import"./Table-CHmSWGwI.js";import"./index-CFNt4Hmh.js";import"./Dialog-BrMSiJ5z.js";import"./cross-Cxbp7dY8.js";import"./svgIconContainer-Dv3Hq4or.js";import"./useBaseUiId-DkJPSlIK.js";import"./InternalBackdrop-C6IlLqVC.js";import"./composite-SeDB-2XH.js";import"./index-CrcqA8vK.js";import"./index-CTYcp5kB.js";import"./index-CEqQ6QN7.js";import"./useEventCallback-QpCC-2EL.js";import"./SkeletonBar-NKcCYLqD.js";import"./LoadingCell-BG8XSZ7n.js";import"./ColumnConfigDialog-BlNunUmb.js";import"./DraggableList-C33391pr.js";import"./search-Dgg_RVXN.js";import"./Input-Bp50UMCa.js";import"./useControlled-CuQRRHJE.js";import"./Button-DWsj5IuF.js";import"./small-cross-DK_a0kls.js";import"./ActionButton-B3RH8t1U.js";import"./Checkbox-CrYJaWfE.js";import"./useValueChanged-D-ZC5TBA.js";import"./CollapsiblePanel-DIHxo3eu.js";import"./MultiColumnSortDialog-Dj5wZOHK.js";import"./MenuTrigger-CyvVk3SH.js";import"./CompositeItem-DQEBOfk4.js";import"./ToolbarRootContext-uHdBl0yg.js";import"./getDisabledMountTransitionStyles-DX6hxhRU.js";import"./getPseudoElementBounds-fODdc8DP.js";import"./chevron-down-BTIEyZQH.js";import"./index-WuLuUP0t.js";import"./error-DeZcuLi4.js";import"./BaseCbacBanner-Cv2tUQFS.js";import"./makeExternalStore-DhWGArAF.js";import"./Tooltip-J-34mFdp.js";import"./PopoverPopup-CANNT4MX.js";import"./debounce-By9KAAPn.js";import"./useOsdkClient-D1mjkhYU.js";import"./tick-Dl42ovZM.js";import"./DropdownField-DkfBVsoR.js";import"./isEqual-C5JJSa9v.js";import"./withOsdkMetrics-DJ3LBRiG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
