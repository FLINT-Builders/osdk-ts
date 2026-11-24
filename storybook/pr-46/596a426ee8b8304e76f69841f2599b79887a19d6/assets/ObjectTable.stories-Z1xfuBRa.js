import{j as i}from"./iframe-DbWO1H6Q.js";import{O as p}from"./object-table-AYkmPKtB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHjhKeOt.js";import"./preload-helper-BJFhMS3h.js";import"./Table-Dl-ajeLA.js";import"./index-8DlTsQ0i.js";import"./Dialog-CTqlBN0B.js";import"./cross-BDoBIXl6.js";import"./svgIconContainer-jTmyv8Oj.js";import"./useBaseUiId-D72Xv_RL.js";import"./InternalBackdrop-Dvh_wZ0g.js";import"./composite-EggcNtT2.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./index-Dh9Wtqsz.js";import"./useEventCallback-IzVRxhrH.js";import"./SkeletonBar-Dp36ivGE.js";import"./LoadingCell-06xMyvS8.js";import"./ColumnConfigDialog-LCtjn8XO.js";import"./DraggableList-BJ2ozh5L.js";import"./search-zgN6AfWU.js";import"./Input-DsJzclhr.js";import"./useControlled-Dvfgqsbh.js";import"./Button-AMxsa0l_.js";import"./small-cross-di1YPofV.js";import"./ActionButton-CF_WcN8f.js";import"./Checkbox-DsdSVPMb.js";import"./useValueChanged-BV-Eaapg.js";import"./CollapsiblePanel-D1EuzeA-.js";import"./MultiColumnSortDialog-BGVR93S7.js";import"./MenuTrigger-Di6xZdsh.js";import"./CompositeItem-DXkoNi3p.js";import"./ToolbarRootContext-BAe250S1.js";import"./getDisabledMountTransitionStyles-BZMRoe-H.js";import"./getPseudoElementBounds-CjiqI0zD.js";import"./chevron-down-tGzF8KYs.js";import"./index-BHrDqoFX.js";import"./error-7sAzP_x2.js";import"./BaseCbacBanner-BeFI_DqK.js";import"./makeExternalStore-Ce1bwc1S.js";import"./Tooltip-z-ifkWQQ.js";import"./PopoverPopup-n8CSHUcF.js";import"./debounce-BwGdN9pQ.js";import"./useOsdkClient-eSWHemU6.js";import"./tick-B765rRXZ.js";import"./DropdownField-Beb9lqY7.js";import"./isEqual-Lo3Z1Czc.js";import"./withOsdkMetrics-Dlfz6qvi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
