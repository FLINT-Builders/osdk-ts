import{j as r}from"./iframe-NQpNXTjy.js";import{O as b}from"./object-table-C2Ty1QZM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8E3Jk7L.js";import{u as g}from"./useOsdkClient-CD2MlnJ0.js";import"./preload-helper-CxQobykS.js";import"./Table-ClAaLI_Z.js";import"./index-DPTMEED5.js";import"./Dialog-CwuoTZv0.js";import"./cross-BXjngWjd.js";import"./svgIconContainer-CuTwM0es.js";import"./useBaseUiId-CA0Hx9BI.js";import"./InternalBackdrop-6ARUn0ZZ.js";import"./composite-CckoXbi1.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./index-BFl4Kuhx.js";import"./useEventCallback-CFM9jrEt.js";import"./SkeletonBar-DV2B4sl1.js";import"./LoadingCell-Ch6zqmvo.js";import"./ColumnConfigDialog-CFx_2dbj.js";import"./DraggableList-CokhiAiZ.js";import"./search-5LAMc9Yr.js";import"./Input-8evEI4JC.js";import"./useControlled-Dfym0E7J.js";import"./Button-BW-em3cF.js";import"./small-cross-B3yU2vZR.js";import"./ActionButton-zJRNa7Ux.js";import"./Checkbox-gwz4RQas.js";import"./useValueChanged-CMvtaO4q.js";import"./CollapsiblePanel-BxFWJsn2.js";import"./MultiColumnSortDialog-DEMi2uAt.js";import"./MenuTrigger-CjfBPdjD.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./getDisabledMountTransitionStyles-Ceat6ftx.js";import"./getPseudoElementBounds-DzeDuzLQ.js";import"./chevron-down-CpS1Uhst.js";import"./index-DD2WCnOg.js";import"./error-DtbT1aJ_.js";import"./BaseCbacBanner-CT-a_Rkb.js";import"./makeExternalStore-C9iKzFcW.js";import"./Tooltip-BB-3PmXh.js";import"./PopoverPopup-Bbh9gvxv.js";import"./debounce-D0cuI_rP.js";import"./tick-Cgl4xEea.js";import"./DropdownField-CzOL9fzI.js";import"./isEqual-wBsHbSR6.js";import"./withOsdkMetrics-BrRP7bk2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
