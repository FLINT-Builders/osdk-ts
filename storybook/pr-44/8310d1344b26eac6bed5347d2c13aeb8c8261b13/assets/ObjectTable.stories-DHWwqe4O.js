import{j as i}from"./iframe-Ci8jv4db.js";import{O as p}from"./object-table-Dacr0ifo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1a_m51ee.js";import"./preload-helper-BijYl_hj.js";import"./Table-CdSPN2Q9.js";import"./index-Cb4PYHc_.js";import"./Dialog-CU4h8-6w.js";import"./cross-DUbcKgzt.js";import"./svgIconContainer-Y9M5A49t.js";import"./useBaseUiId-Dty0keys.js";import"./InternalBackdrop-DNudlJn1.js";import"./composite-dn8KtEdo.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./index-DbJfPldr.js";import"./useEventCallback-BoVAQff_.js";import"./SkeletonBar-C9OdSW8N.js";import"./LoadingCell-DLN_h4p2.js";import"./ColumnConfigDialog-CyYseEM-.js";import"./DraggableList-CAzFZL8D.js";import"./search-D0vckm_H.js";import"./Input-Ctv6ca3A.js";import"./useControlled-AQzCfptX.js";import"./Button-DXyPvcOa.js";import"./small-cross-CzYmJZ8j.js";import"./ActionButton-CpnY3Zoi.js";import"./Checkbox-C4duWPNx.js";import"./useValueChanged-Bjs7PV0z.js";import"./CollapsiblePanel-BZkK1yay.js";import"./MultiColumnSortDialog-BbtaWRjx.js";import"./MenuTrigger-DoMDuH9X.js";import"./CompositeItem-pAC9-vMM.js";import"./ToolbarRootContext-BBg552Fz.js";import"./getDisabledMountTransitionStyles-C3sdXLul.js";import"./getPseudoElementBounds-hHPF40eR.js";import"./chevron-down-Cogx4pq7.js";import"./index-DBQv4m84.js";import"./error-BVKGD7Ps.js";import"./BaseCbacBanner-BNWc-wSO.js";import"./makeExternalStore-MN51YzUq.js";import"./Tooltip-CPVVmqYN.js";import"./PopoverPopup-DX5l843X.js";import"./debounce-Q2FLO271.js";import"./useOsdkClient-CY0rgXDT.js";import"./tick-kwWHIM-G.js";import"./DropdownField-DODhTvNS.js";import"./isEqual-3tAmgqC1.js";import"./withOsdkMetrics-BOl2WiFX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
