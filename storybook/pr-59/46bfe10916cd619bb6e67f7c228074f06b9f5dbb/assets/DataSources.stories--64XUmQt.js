import{j as r}from"./iframe-DSQ_OwRS.js";import{O as b}from"./object-table-BzCVcJkW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-De7LuXwH.js";import{u as g}from"./useOsdkClient-C-vOeiVW.js";import"./preload-helper-CLqqVN7k.js";import"./Table-DODCuAAE.js";import"./index-B0q23UFt.js";import"./Dialog-CzPXSI5J.js";import"./cross-BpS57vew.js";import"./svgIconContainer-BcPAhmn-.js";import"./useBaseUiId-C6Wr8zKH.js";import"./InternalBackdrop-DRNACM8M.js";import"./composite-Dp3eVNnJ.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./index-7A6i3Ro6.js";import"./useEventCallback-BBYu6w4b.js";import"./SkeletonBar-5O6gfTS2.js";import"./LoadingCell-CocsZB85.js";import"./ColumnConfigDialog-D9IrT-DM.js";import"./DraggableList-gh0OXUxU.js";import"./search-DlOSHXy8.js";import"./Input-BzO2QOS7.js";import"./useControlled-C2eTizRr.js";import"./Button-ChRZXQ3B.js";import"./small-cross-DxTQPK98.js";import"./ActionButton-CL0gqC-W.js";import"./Checkbox-u1nZIEbD.js";import"./useValueChanged-BbBFOoz_.js";import"./CollapsiblePanel-C00H4WLv.js";import"./MultiColumnSortDialog-DPAqYct5.js";import"./MenuTrigger-CcQ9MIGZ.js";import"./CompositeItem-GcMwnNE0.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./getDisabledMountTransitionStyles-DEdqAy31.js";import"./getPseudoElementBounds-1CB_OMbt.js";import"./chevron-down-Cro00f4s.js";import"./index-DXTnQeDh.js";import"./error-BA2QLyzo.js";import"./BaseCbacBanner-DMGjlz4g.js";import"./makeExternalStore-CjWUDfwP.js";import"./Tooltip-80MHgkyW.js";import"./PopoverPopup-2vcuvUQ8.js";import"./debounce-BhztiTp3.js";import"./tick-B_ML4ack.js";import"./DropdownField-B3YeiUlT.js";import"./isEqual-CfYpveDj.js";import"./withOsdkMetrics-DCENCPrl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
