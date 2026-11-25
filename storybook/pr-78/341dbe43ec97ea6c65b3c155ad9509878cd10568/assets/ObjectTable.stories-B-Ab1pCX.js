import{j as i}from"./iframe-6Z8QeqqP.js";import{O as p}from"./object-table-CECxFAns.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-F0WwD9ag.js";import"./preload-helper-y0D87bsA.js";import"./Table-CxvM8rGk.js";import"./index-HkxEzDx6.js";import"./Dialog-CK4HQAcY.js";import"./cross-MCgjL0SO.js";import"./svgIconContainer-8--RoJPk.js";import"./useBaseUiId-Dmz3cJQe.js";import"./InternalBackdrop-4jpidxXn.js";import"./composite-DbAi9sOR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./index-iLFhFJRI.js";import"./useEventCallback-gCzDUKPv.js";import"./SkeletonBar-DSdvgAJi.js";import"./LoadingCell-B2-rT-Br.js";import"./ColumnConfigDialog-oC-HZ2Wn.js";import"./DraggableList-Dzqqt3U_.js";import"./search-CvqEaj-y.js";import"./Input-DaVTG5o1.js";import"./useControlled-Bx6RLClW.js";import"./Button-CwPVz1_L.js";import"./small-cross-B-wOlo0v.js";import"./ActionButton-BROaqCpF.js";import"./Checkbox-BVnAR-am.js";import"./useValueChanged-17CWfsm_.js";import"./CollapsiblePanel-CBemhgM_.js";import"./MultiColumnSortDialog-7t2q7viX.js";import"./MenuTrigger-BF02E5JL.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./getDisabledMountTransitionStyles-6bxwWprB.js";import"./getPseudoElementBounds-CXK9C3Gp.js";import"./chevron-down-C4hWEHAB.js";import"./index-Ds85d0HR.js";import"./error-DBQvGp4O.js";import"./BaseCbacBanner-Hxhoa-_l.js";import"./makeExternalStore-CBiKzjzF.js";import"./Tooltip-CzZyPcm7.js";import"./PopoverPopup-kC84IpyX.js";import"./debounce-Doh9hDTV.js";import"./useOsdkClient-HylTLrl8.js";import"./tick-D9u7tIy2.js";import"./DropdownField-Ue-qV6y1.js";import"./isEqual-COSWBm2c.js";import"./withOsdkMetrics-CL7caFuf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
