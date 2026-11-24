import{j as i}from"./iframe-DSkRGESf.js";import{O as p}from"./object-table-DfGb60MT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vl2kU-rn.js";import"./preload-helper-Du8a5MkV.js";import"./Table-BPQDZC7R.js";import"./index-BNFB2Cjh.js";import"./Dialog-n6fnkjS5.js";import"./cross-HIAn8DML.js";import"./svgIconContainer-CgBYdrzc.js";import"./useBaseUiId-B4X2m0nz.js";import"./InternalBackdrop-C-ExtsJs.js";import"./composite-CgZ_kExF.js";import"./index-eLB5m-VM.js";import"./index-BogfGi5C.js";import"./index-wflXaNK9.js";import"./useEventCallback-CbgSPNVN.js";import"./SkeletonBar-caUYM5Zj.js";import"./LoadingCell-Bsjb8yaQ.js";import"./ColumnConfigDialog-9kE-J35r.js";import"./DraggableList-Di6B-kKE.js";import"./search-D5ZgJhKz.js";import"./Input-CDxPmZXG.js";import"./useControlled-DRRjE45d.js";import"./Button-DxPyCFzS.js";import"./small-cross-BosWx3lC.js";import"./ActionButton-IjiA5MzP.js";import"./Checkbox-DXrEO7Hj.js";import"./useValueChanged-CSNKFQVN.js";import"./CollapsiblePanel-CU1UF0zM.js";import"./MultiColumnSortDialog-CJBLegij.js";import"./MenuTrigger-BUEt6TOa.js";import"./CompositeItem-CLoyw74g.js";import"./ToolbarRootContext-BXHKua9s.js";import"./getDisabledMountTransitionStyles-CL2BXhxo.js";import"./getPseudoElementBounds-D_fpBJ2K.js";import"./chevron-down-D93VaLA7.js";import"./index-B67Hn2Oj.js";import"./error-DwrNHlKr.js";import"./BaseCbacBanner-BvfHZWc9.js";import"./makeExternalStore-DiqN5xTe.js";import"./Tooltip-BnbMPUtw.js";import"./PopoverPopup-MLe4RJY9.js";import"./debounce-DejaveeD.js";import"./useOsdkClient-ncq2w8Z8.js";import"./tick-CMvN_MpF.js";import"./DropdownField-CwJ2N8FN.js";import"./isEqual-B1Re2qHI.js";import"./withOsdkMetrics-Ca7Fya9M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
