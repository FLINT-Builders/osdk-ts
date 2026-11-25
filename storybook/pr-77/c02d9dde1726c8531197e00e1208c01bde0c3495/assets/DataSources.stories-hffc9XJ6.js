import{j as r}from"./iframe-BimQ5I7B.js";import{O as b}from"./object-table-ncEil8FU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-qlA4hof9.js";import{u as g}from"./useOsdkClient-B6IDuaBu.js";import"./preload-helper-DVgp4Odj.js";import"./Table-qM2MBR7T.js";import"./index-Bterpizd.js";import"./Dialog-Co03GsOl.js";import"./cross-B1ycp5D_.js";import"./svgIconContainer-B7sYR9CH.js";import"./useBaseUiId-C8madkWI.js";import"./InternalBackdrop-CX3KLEvW.js";import"./composite-CFQYUg6D.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./index-8RuBob7j.js";import"./useEventCallback-p4N8Eyn2.js";import"./SkeletonBar-Bt_B5dG6.js";import"./LoadingCell-DWCuiV5v.js";import"./ColumnConfigDialog-BOYtEBmh.js";import"./DraggableList-C1YCs_mx.js";import"./search-2ZJHkAe4.js";import"./Input-BgCDGlWE.js";import"./useControlled-BZPlZ-l4.js";import"./Button-BDC1u4I1.js";import"./small-cross-FAi29SOY.js";import"./ActionButton-ButrV8bA.js";import"./Checkbox-DTBdc949.js";import"./useValueChanged-DYoiWqYd.js";import"./CollapsiblePanel-CpyR6Z1C.js";import"./MultiColumnSortDialog-YtfNFFnp.js";import"./MenuTrigger-BQKwEvQH.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./getDisabledMountTransitionStyles-DrpCBbHi.js";import"./getPseudoElementBounds-BKz8oGoA.js";import"./chevron-down-BSMcI5Uh.js";import"./index-Drk-T-LH.js";import"./error-Cm6SmQec.js";import"./BaseCbacBanner-D-qTc9yO.js";import"./makeExternalStore-BMJZ0gXh.js";import"./Tooltip-CYgKzjZV.js";import"./PopoverPopup-CqVwxtDC.js";import"./debounce-Dr3bOVOf.js";import"./tick-B97f0SKP.js";import"./DropdownField-vEf4IKfs.js";import"./isEqual-CqUAJ4RL.js";import"./withOsdkMetrics-D3LiHDOi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
