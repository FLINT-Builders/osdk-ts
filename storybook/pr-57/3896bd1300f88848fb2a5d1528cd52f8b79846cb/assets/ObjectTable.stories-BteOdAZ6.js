import{j as i}from"./iframe-DowOz9LG.js";import{O as p}from"./object-table-DNxNGDFc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDdn7ZHu.js";import"./preload-helper-DLch6InM.js";import"./Table-CL_1Gnac.js";import"./index-D3uCKFRQ.js";import"./Dialog-B2DiGny7.js";import"./cross-XY9bNztf.js";import"./svgIconContainer-CjMFf37k.js";import"./useBaseUiId-DLP_J0js.js";import"./InternalBackdrop-DWjSsQXw.js";import"./composite-BqSVn4pm.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./index-C6QSp11H.js";import"./useEventCallback-DZWgYqJ2.js";import"./SkeletonBar-Lecq5ISR.js";import"./LoadingCell-Ho22PisO.js";import"./ColumnConfigDialog-DIcz9ho9.js";import"./DraggableList-C2PpvmOK.js";import"./search-Dq7gXSV-.js";import"./Input-EdSRgRoE.js";import"./useControlled-LhJY_NAc.js";import"./Button-BsxP5OVh.js";import"./small-cross-CBbvwGg2.js";import"./ActionButton-BC7KqzhK.js";import"./Checkbox-7yvYJnnp.js";import"./useValueChanged-DmWHkYMC.js";import"./CollapsiblePanel-B3nL6cUm.js";import"./MultiColumnSortDialog-CLdJ3cH4.js";import"./MenuTrigger-E3XbwEgZ.js";import"./CompositeItem-qaontuDZ.js";import"./ToolbarRootContext-tzl66m83.js";import"./getDisabledMountTransitionStyles-QmcvFDJq.js";import"./getPseudoElementBounds-D1yJG2tC.js";import"./chevron-down-p34WEL5t.js";import"./index-UMBJij_W.js";import"./error-CvT_Kc0h.js";import"./BaseCbacBanner-C2yHATAt.js";import"./makeExternalStore-whfuUtu3.js";import"./Tooltip-Bzrc7BTQ.js";import"./PopoverPopup-Bh5tu-Zh.js";import"./debounce-8B2PZIEg.js";import"./useOsdkClient-D0xHO4NP.js";import"./tick-rTdqC_yK.js";import"./DropdownField-P6sq-h2_.js";import"./isEqual-BtyoY62f.js";import"./withOsdkMetrics-CwlXQjw2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
