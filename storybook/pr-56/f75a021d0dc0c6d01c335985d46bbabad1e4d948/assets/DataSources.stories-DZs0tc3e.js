import{j as r}from"./iframe-SC996r8Q.js";import{O as b}from"./object-table-DOdp5ZjA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-oxNxreTI.js";import{u as g}from"./useOsdkClient-D5cV3NWU.js";import"./preload-helper-4MonG5NX.js";import"./Table-BHqFADw2.js";import"./index-wDhWF-Jn.js";import"./Dialog-Bjl7oJOt.js";import"./cross-CSzOPxz_.js";import"./svgIconContainer-B-5c0m9a.js";import"./useBaseUiId-BGvjsW3d.js";import"./InternalBackdrop-DNC5MyZD.js";import"./composite-Gzk6HQ8U.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./index-85g-pXui.js";import"./useEventCallback-CgwfU7lc.js";import"./SkeletonBar-pBY25qw4.js";import"./LoadingCell-BHzQ8MOB.js";import"./ColumnConfigDialog-yFcbmUS6.js";import"./DraggableList-B0Mn8gGq.js";import"./search-DMkfs-8L.js";import"./Input-CJVpnIyi.js";import"./useControlled-BSXRDWWj.js";import"./Button-4P3mfFZX.js";import"./small-cross-HUX1_LBw.js";import"./ActionButton-ByIO7PT5.js";import"./Checkbox-DphhRBj3.js";import"./useValueChanged-CCo4wtuS.js";import"./CollapsiblePanel-p7nu56Bn.js";import"./MultiColumnSortDialog-DlliR06t.js";import"./MenuTrigger-CJZwVEpf.js";import"./CompositeItem-CYqhRUaL.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./getDisabledMountTransitionStyles-spVW-j4h.js";import"./getPseudoElementBounds-a71QRY78.js";import"./chevron-down-Bymbl15e.js";import"./index-lAH3DKJQ.js";import"./error-BsBvF-VX.js";import"./BaseCbacBanner-BzdpJ56M.js";import"./makeExternalStore-CnxIOnyb.js";import"./Tooltip-C5K7kdO5.js";import"./PopoverPopup-CehfZg5Y.js";import"./debounce-DtZn3Jt8.js";import"./tick-DYksh_VF.js";import"./DropdownField-C60HSoXi.js";import"./isEqual-BbgfJPkf.js";import"./withOsdkMetrics-Dlvqw_Pf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
