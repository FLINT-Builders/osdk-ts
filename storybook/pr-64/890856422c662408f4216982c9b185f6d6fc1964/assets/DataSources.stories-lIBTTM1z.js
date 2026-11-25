import{j as r}from"./iframe-CXJvlF9f.js";import{O as b}from"./object-table-hPC5NeVU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ncJJYxJa.js";import{u as g}from"./useOsdkClient-C_VqVBcI.js";import"./preload-helper-D4wndH43.js";import"./Table-BoOD-L8G.js";import"./index-DbRhx2FS.js";import"./Dialog-Dvb2pSOZ.js";import"./cross-smvXwA6k.js";import"./svgIconContainer-JnMWnddt.js";import"./useBaseUiId-CS56QWvK.js";import"./InternalBackdrop-CqtSiTpM.js";import"./composite-BN9qtXxc.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./index-Dp2pLEF1.js";import"./useEventCallback-B_1Z_QCH.js";import"./SkeletonBar-C1x9OOkX.js";import"./LoadingCell-CAYnxbGs.js";import"./ColumnConfigDialog-Cky7nE9P.js";import"./DraggableList-Bk7Jl0QM.js";import"./search-B7r0qDmR.js";import"./Input-Bsqv1_ng.js";import"./useControlled-Cpt07hfE.js";import"./Button-CsdSAMDu.js";import"./small-cross-DMWa4kPj.js";import"./ActionButton-CsFrYYGI.js";import"./Checkbox-Bi9_OJUW.js";import"./useValueChanged-Byd_0DcO.js";import"./CollapsiblePanel-CkEuIXiI.js";import"./MultiColumnSortDialog-D3T1AI8W.js";import"./MenuTrigger-DthotZrc.js";import"./CompositeItem-CThXZzFK.js";import"./ToolbarRootContext-CYby2zsu.js";import"./getDisabledMountTransitionStyles-CgmP4-RG.js";import"./getPseudoElementBounds-CgYpcBOV.js";import"./chevron-down-xbAc8Fo2.js";import"./index-Doi1M16Z.js";import"./error-D6bGjg1T.js";import"./BaseCbacBanner-C4rNu7bR.js";import"./makeExternalStore-BjpJhFKl.js";import"./Tooltip-O-viL_pu.js";import"./PopoverPopup-BaZKNv6D.js";import"./debounce-V9eN7pLv.js";import"./tick-CbWMloSO.js";import"./DropdownField-C_cDwqJ_.js";import"./isEqual-CDTky0Be.js";import"./withOsdkMetrics-C6MxL57R.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
