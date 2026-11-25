import{j as i}from"./iframe-noPC7Lrb.js";import{O as p}from"./object-table-D_qw8f9Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BBhpPMo-.js";import"./preload-helper-Cv3u2ZXJ.js";import"./Table-B4jzDKTc.js";import"./index-CRR0rEAm.js";import"./Dialog-BbiOfpCm.js";import"./cross-B9cEQ0YT.js";import"./svgIconContainer-BC4HVzzK.js";import"./useBaseUiId-CoV6fGPK.js";import"./InternalBackdrop-BtdcLV1x.js";import"./composite-DfMavTxP.js";import"./index-DsgPUYZ8.js";import"./index-CmlqLPJk.js";import"./index-b3Gbynch.js";import"./useEventCallback-jasGEfud.js";import"./SkeletonBar-XdXpCukV.js";import"./LoadingCell-4znh7b2T.js";import"./ColumnConfigDialog-gGW3jt0Y.js";import"./DraggableList-2zdkzerp.js";import"./search-DEVlZZxm.js";import"./Input-BP2SPX2T.js";import"./useControlled-C-YKkMIr.js";import"./Button-s6ph9E-u.js";import"./small-cross-uW76wDhg.js";import"./ActionButton-CFNFQXUC.js";import"./Checkbox-DmQ_dihR.js";import"./useValueChanged-BXxDSm6S.js";import"./CollapsiblePanel-BO1AEOsB.js";import"./MultiColumnSortDialog-B1Krs8NE.js";import"./MenuTrigger-DSXVHShm.js";import"./CompositeItem-D_EklmEL.js";import"./ToolbarRootContext-Bdg1UlUu.js";import"./getDisabledMountTransitionStyles-NQwUYsn_.js";import"./getPseudoElementBounds-CA_wbbMb.js";import"./chevron-down-HJE4Bk-A.js";import"./index-COKLl5_k.js";import"./error-P0w1sFZO.js";import"./BaseCbacBanner-Df00L_jt.js";import"./makeExternalStore-BIBA_2Dm.js";import"./Tooltip-Cq2b8j00.js";import"./PopoverPopup-ZtlUJYph.js";import"./debounce-Dox6g36G.js";import"./useOsdkClient-CwTcc72O.js";import"./tick-BNpJfYgA.js";import"./DropdownField-DE00aYFp.js";import"./isEqual-O5ui8mSo.js";import"./withOsdkMetrics-8bSzfY7q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
