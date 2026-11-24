import{j as r}from"./iframe-C-2fM64A.js";import{O as b}from"./object-table-DnfGK1BU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGo3HOCG.js";import{u as g}from"./useOsdkClient-Bq_YKUUv.js";import"./preload-helper-5l20kbgh.js";import"./Table-B8exTvRS.js";import"./index-Dyfx2zPa.js";import"./Dialog-WscBU8CC.js";import"./cross-CgNS1GgR.js";import"./svgIconContainer-C9IKjxfB.js";import"./useBaseUiId-CTryWo_g.js";import"./InternalBackdrop-UxmxiKm7.js";import"./composite-DwmZEnpk.js";import"./index-BdbAVji3.js";import"./index-BbVHPZNY.js";import"./index-D8oWn7w6.js";import"./useEventCallback-BPmnomYn.js";import"./SkeletonBar-DU5JM7iL.js";import"./LoadingCell-CRd4Lps8.js";import"./ColumnConfigDialog-Kt7u0FdA.js";import"./DraggableList-C9U23trS.js";import"./search-CLHFOlZI.js";import"./Input-Dlx-frSm.js";import"./useControlled-BF8LnBHR.js";import"./Button-De1R0ypn.js";import"./small-cross-BklgATg6.js";import"./ActionButton-487khAzZ.js";import"./Checkbox-DOMVATt6.js";import"./useValueChanged-CHlXRDud.js";import"./CollapsiblePanel-DyD1UVL_.js";import"./MultiColumnSortDialog-DxphMA5D.js";import"./MenuTrigger-Z7Z4FSrc.js";import"./CompositeItem-CUIe3tWP.js";import"./ToolbarRootContext-BnUbB36R.js";import"./getDisabledMountTransitionStyles-CxaJ42JS.js";import"./getPseudoElementBounds-CqzFYEIN.js";import"./chevron-down-BIEm0AX1.js";import"./index-cGgaE_Im.js";import"./error-DCBUh_j7.js";import"./BaseCbacBanner-D0zM5BSH.js";import"./makeExternalStore-C-9kweRw.js";import"./Tooltip-CbS0pN8T.js";import"./PopoverPopup-ZZdakFoe.js";import"./debounce-Cqmr5QPm.js";import"./tick-B4a_6SHF.js";import"./DropdownField-CrZRfkaF.js";import"./isEqual-BB86EMHb.js";import"./withOsdkMetrics-HX80CHoP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
