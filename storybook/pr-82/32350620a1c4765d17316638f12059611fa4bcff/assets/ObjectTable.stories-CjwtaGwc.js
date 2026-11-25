import{j as i}from"./iframe-DDeGahZQ.js";import{O as p}from"./object-table-c69OShAs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B12podOC.js";import"./preload-helper-DtgmNnbI.js";import"./Table-BamUVRRT.js";import"./index-DmzUE8wO.js";import"./Dialog-BD_j3EQN.js";import"./cross-CI1lfvZf.js";import"./svgIconContainer-B2HbnTiE.js";import"./useBaseUiId-Uk2yI-zs.js";import"./InternalBackdrop-Cm6MUtgn.js";import"./composite-DuB4E-UY.js";import"./index-Qn8k8FvG.js";import"./index-CY6cJAVJ.js";import"./index-CG45M_Q5.js";import"./useEventCallback-CbwAvO5m.js";import"./SkeletonBar-DUki0Hfs.js";import"./LoadingCell-BnEAQ4Tz.js";import"./ColumnConfigDialog-PmU2pUZk.js";import"./DraggableList-Ciepwsi-.js";import"./search-C8c8T19Z.js";import"./Input-CvWBm2e5.js";import"./useControlled-DDjbaAaA.js";import"./Button-UHTxjv3g.js";import"./small-cross-Dh8kd4Rj.js";import"./ActionButton-B6GTvDM6.js";import"./Checkbox-Dl8_g-Nt.js";import"./useValueChanged-CpeiEUnJ.js";import"./CollapsiblePanel-jNUt8N7a.js";import"./MultiColumnSortDialog-BNuKplea.js";import"./MenuTrigger-C3PQd1MF.js";import"./CompositeItem-CzJNtMzg.js";import"./ToolbarRootContext-BskRjAbe.js";import"./getDisabledMountTransitionStyles-CmGIaxiE.js";import"./getPseudoElementBounds-oOnpUTl1.js";import"./chevron-down-pfh009HU.js";import"./index-DYAYOGTV.js";import"./error-CAQ2487J.js";import"./BaseCbacBanner-AXmQGftr.js";import"./makeExternalStore-BTS0MLYS.js";import"./Tooltip-DAVQzJGV.js";import"./PopoverPopup-Ce6kI-Gj.js";import"./debounce-1Ye5cs9J.js";import"./useOsdkClient-Da_ZExXm.js";import"./tick-2i2QjURW.js";import"./DropdownField-CtMobLbF.js";import"./isEqual-BSEwlXdh.js";import"./withOsdkMetrics-WPbxRBR5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
