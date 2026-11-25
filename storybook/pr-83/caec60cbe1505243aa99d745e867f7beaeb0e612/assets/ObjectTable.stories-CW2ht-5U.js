import{j as i}from"./iframe-C6x_-cCw.js";import{O as p}from"./object-table-DlDFpEfo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cy30yG9Q.js";import"./preload-helper-C5M_clDJ.js";import"./Table-TOB7DXhq.js";import"./index-DG092T-D.js";import"./Dialog-B7PiXdbh.js";import"./cross-l0aAmTW5.js";import"./svgIconContainer-Bkyrnuc-.js";import"./useBaseUiId-UYgWBkOi.js";import"./InternalBackdrop-BWEfKABb.js";import"./composite-BSZVTMPL.js";import"./index-hI-Jf30A.js";import"./index-C-0Da6r-.js";import"./index-DhALpsH2.js";import"./useEventCallback-Bfoj9m8E.js";import"./SkeletonBar-BoDD1_vM.js";import"./LoadingCell-CanDKc3Z.js";import"./ColumnConfigDialog-BxU5iTzY.js";import"./DraggableList-_GDJXAQ8.js";import"./search-DNxvrUDH.js";import"./Input-wynBa1uS.js";import"./useControlled-DzDgqIkH.js";import"./Button-BKdv7kuC.js";import"./small-cross-BSf0QNWN.js";import"./ActionButton-DhU9U98Q.js";import"./Checkbox-C5q03WxR.js";import"./useValueChanged-D9fSnI04.js";import"./CollapsiblePanel-xqDVzon_.js";import"./MultiColumnSortDialog-CCCGeldt.js";import"./MenuTrigger-Ci6XufKf.js";import"./CompositeItem-DKoeFQh8.js";import"./ToolbarRootContext-DBEn4rvT.js";import"./getDisabledMountTransitionStyles-DPQ1PlPt.js";import"./getPseudoElementBounds-B-iH7G1J.js";import"./chevron-down-BDM7mpPh.js";import"./index-BmgKiP-K.js";import"./error-owN_za9g.js";import"./BaseCbacBanner-B0GplK9k.js";import"./makeExternalStore-DVp6XbDL.js";import"./Tooltip-g_XfUcJD.js";import"./PopoverPopup--Wx5Qz1n.js";import"./debounce-BdodUMZs.js";import"./useOsdkClient-D1P3vg8H.js";import"./tick-jJZnrm3J.js";import"./DropdownField-BUFMPHNJ.js";import"./isEqual-C4fmZI7Y.js";import"./withOsdkMetrics-FojMXCRT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
