import{j as r}from"./iframe-DSkRGESf.js";import{O as b}from"./object-table-DfGb60MT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vl2kU-rn.js";import{u as g}from"./useOsdkClient-ncq2w8Z8.js";import"./preload-helper-Du8a5MkV.js";import"./Table-BPQDZC7R.js";import"./index-BNFB2Cjh.js";import"./Dialog-n6fnkjS5.js";import"./cross-HIAn8DML.js";import"./svgIconContainer-CgBYdrzc.js";import"./useBaseUiId-B4X2m0nz.js";import"./InternalBackdrop-C-ExtsJs.js";import"./composite-CgZ_kExF.js";import"./index-eLB5m-VM.js";import"./index-BogfGi5C.js";import"./index-wflXaNK9.js";import"./useEventCallback-CbgSPNVN.js";import"./SkeletonBar-caUYM5Zj.js";import"./LoadingCell-Bsjb8yaQ.js";import"./ColumnConfigDialog-9kE-J35r.js";import"./DraggableList-Di6B-kKE.js";import"./search-D5ZgJhKz.js";import"./Input-CDxPmZXG.js";import"./useControlled-DRRjE45d.js";import"./Button-DxPyCFzS.js";import"./small-cross-BosWx3lC.js";import"./ActionButton-IjiA5MzP.js";import"./Checkbox-DXrEO7Hj.js";import"./useValueChanged-CSNKFQVN.js";import"./CollapsiblePanel-CU1UF0zM.js";import"./MultiColumnSortDialog-CJBLegij.js";import"./MenuTrigger-BUEt6TOa.js";import"./CompositeItem-CLoyw74g.js";import"./ToolbarRootContext-BXHKua9s.js";import"./getDisabledMountTransitionStyles-CL2BXhxo.js";import"./getPseudoElementBounds-D_fpBJ2K.js";import"./chevron-down-D93VaLA7.js";import"./index-B67Hn2Oj.js";import"./error-DwrNHlKr.js";import"./BaseCbacBanner-BvfHZWc9.js";import"./makeExternalStore-DiqN5xTe.js";import"./Tooltip-BnbMPUtw.js";import"./PopoverPopup-MLe4RJY9.js";import"./debounce-DejaveeD.js";import"./tick-CMvN_MpF.js";import"./DropdownField-CwJ2N8FN.js";import"./isEqual-B1Re2qHI.js";import"./withOsdkMetrics-Ca7Fya9M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
