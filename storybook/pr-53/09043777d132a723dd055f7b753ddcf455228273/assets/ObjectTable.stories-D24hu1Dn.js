import{j as i}from"./iframe-C4244Bm_.js";import{O as p}from"./object-table-CWI95tL9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cba_y7QS.js";import"./preload-helper-Ci98jyni.js";import"./Table-DLA6JNP_.js";import"./index-ClH59eky.js";import"./Dialog-rWA87_5x.js";import"./cross-Ndayjde5.js";import"./svgIconContainer-C9qKBg5g.js";import"./useBaseUiId-X9XCdkpw.js";import"./InternalBackdrop-BgtvNRvm.js";import"./composite-Ckn5xSHc.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./index-Bi8RWIrI.js";import"./useEventCallback-DjDRvhxl.js";import"./SkeletonBar-1wmzXisw.js";import"./LoadingCell-JMXuLf4_.js";import"./ColumnConfigDialog-D7iHn2dh.js";import"./DraggableList-D93qNxY3.js";import"./search-CyQQCVme.js";import"./Input-DLoAGHyA.js";import"./useControlled-zrsS7sbr.js";import"./Button-DdPOxW32.js";import"./small-cross-BKLGSFz1.js";import"./ActionButton-DERxyeDa.js";import"./Checkbox-FK2fRdAN.js";import"./useValueChanged-CnEeirqz.js";import"./CollapsiblePanel-B8EFIibH.js";import"./MultiColumnSortDialog-BosRxKkz.js";import"./MenuTrigger-BTCInV-G.js";import"./CompositeItem-BHbjzdkB.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./getDisabledMountTransitionStyles-CCxWABNx.js";import"./getPseudoElementBounds-Cpfu0jjM.js";import"./chevron-down-BL39hyz4.js";import"./index-Dhn7ITQm.js";import"./error-_egmS3m2.js";import"./BaseCbacBanner-CgTjAuLA.js";import"./makeExternalStore-D1LNnd-p.js";import"./Tooltip-Btlg-yIO.js";import"./PopoverPopup-Bw-hztAp.js";import"./debounce-C-dm4-uQ.js";import"./useOsdkClient-B6lLUCBK.js";import"./tick-D4xU7MKe.js";import"./DropdownField-BLtmL1tB.js";import"./isEqual-BO6QlNLr.js";import"./withOsdkMetrics-GAx3Og7v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
