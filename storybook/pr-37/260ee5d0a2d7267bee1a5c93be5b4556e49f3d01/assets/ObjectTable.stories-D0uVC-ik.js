import{j as i}from"./iframe-BidCv6LV.js";import{O as p}from"./object-table-1ndn2q85.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ciz9mPCj.js";import"./preload-helper-BBvVXsFn.js";import"./Table-CJ7bROKj.js";import"./index-D_xbPbxF.js";import"./Dialog-kWDXaucF.js";import"./cross-CCgwUKs5.js";import"./svgIconContainer-nuda1Slf.js";import"./useBaseUiId-CQmafZWA.js";import"./InternalBackdrop-DObkkMkv.js";import"./composite-DQsyuPSU.js";import"./index-DdFBJ6Hh.js";import"./index-ClJ31HK1.js";import"./index-BhZS4a31.js";import"./useEventCallback-Baep12rq.js";import"./SkeletonBar-CWAvpKGo.js";import"./LoadingCell-BeYVbx4W.js";import"./ColumnConfigDialog-BCq2a7Lb.js";import"./DraggableList-BhLuOWgQ.js";import"./search-Dw6H1JFW.js";import"./Input-J58txkes.js";import"./useControlled-BQp7ePj5.js";import"./Button-COF8krnH.js";import"./small-cross-DW2DHUmB.js";import"./ActionButton-D74vQdpd.js";import"./Checkbox-CJjc1v6n.js";import"./useValueChanged-BaKIasuJ.js";import"./CollapsiblePanel-CRUTvRPJ.js";import"./MultiColumnSortDialog-Ds52YtJ5.js";import"./MenuTrigger-C40-3wGK.js";import"./CompositeItem-BDSq8mI7.js";import"./ToolbarRootContext-DxOeY7F6.js";import"./getDisabledMountTransitionStyles-B7f6fBGw.js";import"./getPseudoElementBounds-B2Ni9bqk.js";import"./chevron-down-BWg13NGV.js";import"./index-B55EwGFb.js";import"./error-CX48AH-F.js";import"./BaseCbacBanner-BnAPZiFE.js";import"./makeExternalStore-mkujOin6.js";import"./Tooltip-D9gJLDaZ.js";import"./PopoverPopup-B2aM6x7h.js";import"./debounce-qZI5pjM5.js";import"./useOsdkClient-WoDqiidY.js";import"./tick-CdWDJea5.js";import"./DropdownField-BUNetrXn.js";import"./isEqual-DnkiOhRI.js";import"./withOsdkMetrics-CGezrU5C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
