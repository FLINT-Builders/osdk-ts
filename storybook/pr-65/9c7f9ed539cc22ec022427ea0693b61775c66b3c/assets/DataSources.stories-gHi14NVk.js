import{j as r}from"./iframe-DhvlIxBR.js";import{O as b}from"./object-table-BlzMzEtW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfHx1Qc9.js";import{u as g}from"./useOsdkClient-Dk6VWjvC.js";import"./preload-helper-D751HZEW.js";import"./Table-BeJwmrK7.js";import"./index-BUWZX9Fc.js";import"./Dialog-CauBFPi2.js";import"./cross-DZn8lU4z.js";import"./svgIconContainer-D7zjQbdd.js";import"./useBaseUiId-BHihEKOR.js";import"./InternalBackdrop-dLkigMoq.js";import"./composite-ChzFIgZg.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./index-BCPA7iDP.js";import"./useEventCallback-1TV48a-R.js";import"./SkeletonBar-DzkLjRbm.js";import"./LoadingCell-DSNHnbna.js";import"./ColumnConfigDialog-Chz-gxcq.js";import"./DraggableList-Ft09WuM9.js";import"./search-CvBEwoSG.js";import"./Input-BFA2W1TJ.js";import"./useControlled-8xbCIwQq.js";import"./Button-CIdQiPdq.js";import"./small-cross-Cee8oMTc.js";import"./ActionButton-NnowqCGc.js";import"./Checkbox-CRK3yBAC.js";import"./useValueChanged-BTfADdZZ.js";import"./CollapsiblePanel-CHRzUX6p.js";import"./MultiColumnSortDialog-D7EAWZt-.js";import"./MenuTrigger-C82M0KW8.js";import"./CompositeItem-feBepckq.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./getDisabledMountTransitionStyles-BdnwsIyN.js";import"./getPseudoElementBounds-uPAwbLXV.js";import"./chevron-down-Cl04GCmI.js";import"./index-BJZEpaeF.js";import"./error-CuUFOnij.js";import"./BaseCbacBanner-DDeSHTsc.js";import"./makeExternalStore-s_GWGbTj.js";import"./Tooltip-BcLf233N.js";import"./PopoverPopup-BwA2nu12.js";import"./debounce-H8a6NtlN.js";import"./tick-peuNDpsM.js";import"./DropdownField-DGdaq3wW.js";import"./isEqual-DtpVwRjJ.js";import"./withOsdkMetrics-CNcx6if6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
