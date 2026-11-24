import{j as i}from"./iframe-xhm5OChx.js";import{O as p}from"./object-table-HQWVkrkb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IHyLdGt5.js";import"./preload-helper-BZJxKfIr.js";import"./Table-BH6BTYWA.js";import"./index-Ctr0pjQq.js";import"./Dialog-CYaeLi8E.js";import"./cross-C-3m77s9.js";import"./svgIconContainer-CdfxSdaj.js";import"./useBaseUiId-q04gmumk.js";import"./InternalBackdrop-i2Jv6yd1.js";import"./composite-BhQucQ6w.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./index-DWPvyRFK.js";import"./useEventCallback-DOJI8S3u.js";import"./SkeletonBar-mT-JS0Ox.js";import"./LoadingCell-UzLA8R8y.js";import"./ColumnConfigDialog-B9yJe-N2.js";import"./DraggableList-Bnc84gYz.js";import"./search-Cq1dDtD0.js";import"./Input-wfXCkxXX.js";import"./useControlled-CXKnX_iS.js";import"./Button-Cx_zDl37.js";import"./small-cross-C74z8jlp.js";import"./ActionButton-0NMO3aYn.js";import"./Checkbox-jmx13kFy.js";import"./useValueChanged-CW8UuRxF.js";import"./CollapsiblePanel-BUNoQZyA.js";import"./MultiColumnSortDialog-BVqyEIa1.js";import"./MenuTrigger-o5fhUgJ3.js";import"./CompositeItem-CtXkcFLl.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./getDisabledMountTransitionStyles-B85vDvpF.js";import"./getPseudoElementBounds-DSDAFN2S.js";import"./chevron-down-BsRYwsxE.js";import"./index-DRcQ3DSW.js";import"./error-QOz5QiuQ.js";import"./BaseCbacBanner--jqZ3Clz.js";import"./makeExternalStore-Yu1AfO63.js";import"./Tooltip-DByTNzzG.js";import"./PopoverPopup-2glF1cOR.js";import"./debounce-BL8n_G_Q.js";import"./useOsdkClient-DsZIT7A4.js";import"./tick-Bt601WgM.js";import"./DropdownField-PqL2lLdH.js";import"./isEqual-evpreXH6.js";import"./withOsdkMetrics-nVSio52c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
