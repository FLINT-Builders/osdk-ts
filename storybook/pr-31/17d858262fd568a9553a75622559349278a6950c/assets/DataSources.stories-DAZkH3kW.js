import{j as r}from"./iframe-KADiCVVG.js";import{O as b}from"./object-table-VyvO3zHi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIWNKM20.js";import{u as g}from"./useOsdkClient-D1mjkhYU.js";import"./preload-helper-D58te3M_.js";import"./Table-CHmSWGwI.js";import"./index-CFNt4Hmh.js";import"./Dialog-BrMSiJ5z.js";import"./cross-Cxbp7dY8.js";import"./svgIconContainer-Dv3Hq4or.js";import"./useBaseUiId-DkJPSlIK.js";import"./InternalBackdrop-C6IlLqVC.js";import"./composite-SeDB-2XH.js";import"./index-CrcqA8vK.js";import"./index-CTYcp5kB.js";import"./index-CEqQ6QN7.js";import"./useEventCallback-QpCC-2EL.js";import"./SkeletonBar-NKcCYLqD.js";import"./LoadingCell-BG8XSZ7n.js";import"./ColumnConfigDialog-BlNunUmb.js";import"./DraggableList-C33391pr.js";import"./search-Dgg_RVXN.js";import"./Input-Bp50UMCa.js";import"./useControlled-CuQRRHJE.js";import"./Button-DWsj5IuF.js";import"./small-cross-DK_a0kls.js";import"./ActionButton-B3RH8t1U.js";import"./Checkbox-CrYJaWfE.js";import"./useValueChanged-D-ZC5TBA.js";import"./CollapsiblePanel-DIHxo3eu.js";import"./MultiColumnSortDialog-Dj5wZOHK.js";import"./MenuTrigger-CyvVk3SH.js";import"./CompositeItem-DQEBOfk4.js";import"./ToolbarRootContext-uHdBl0yg.js";import"./getDisabledMountTransitionStyles-DX6hxhRU.js";import"./getPseudoElementBounds-fODdc8DP.js";import"./chevron-down-BTIEyZQH.js";import"./index-WuLuUP0t.js";import"./error-DeZcuLi4.js";import"./BaseCbacBanner-Cv2tUQFS.js";import"./makeExternalStore-DhWGArAF.js";import"./Tooltip-J-34mFdp.js";import"./PopoverPopup-CANNT4MX.js";import"./debounce-By9KAAPn.js";import"./tick-Dl42ovZM.js";import"./DropdownField-DkfBVsoR.js";import"./isEqual-C5JJSa9v.js";import"./withOsdkMetrics-DJ3LBRiG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
