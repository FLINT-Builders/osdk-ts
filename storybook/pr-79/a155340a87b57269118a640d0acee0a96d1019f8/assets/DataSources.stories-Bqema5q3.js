import{j as r}from"./iframe-D2N6QAO4.js";import{O as b}from"./object-table-lxDeLJoa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQ1QVOn-.js";import{u as g}from"./useOsdkClient-BdxxenZf.js";import"./preload-helper-C0G0Ely3.js";import"./Table-C19ILbqk.js";import"./index-C6mUO3LG.js";import"./Dialog-B0kvSLe8.js";import"./cross-33P9gQ16.js";import"./svgIconContainer-CNArd5Vw.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./InternalBackdrop-BC53QrF9.js";import"./composite-Csdn23VF.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./index-BuEE91VM.js";import"./useEventCallback-SR7xrDYW.js";import"./SkeletonBar-DfIaa6sS.js";import"./LoadingCell-DctXHB2C.js";import"./ColumnConfigDialog-khpK5TXG.js";import"./DraggableList-DIXakBW0.js";import"./search-C7B0jIv9.js";import"./Input-DOJuMFjU.js";import"./useControlled-BXWTj0go.js";import"./Button-g15W-Nz5.js";import"./small-cross-D3BxVY3q.js";import"./ActionButton-DdZRctiY.js";import"./Checkbox-BsFto3s4.js";import"./useValueChanged-D2aWPQQV.js";import"./CollapsiblePanel-BVQv8eQV.js";import"./MultiColumnSortDialog-CDDnCRAh.js";import"./MenuTrigger-FLFe0gWC.js";import"./CompositeItem-DgrMig66.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./getDisabledMountTransitionStyles-BB_Hcyjk.js";import"./getPseudoElementBounds-Dunwefln.js";import"./chevron-down-BAjPYhxH.js";import"./index-BaO-kZLo.js";import"./error-DOYfumOT.js";import"./BaseCbacBanner-BnfEs82n.js";import"./makeExternalStore-B1G3DsJO.js";import"./Tooltip-XE7UgRlK.js";import"./PopoverPopup-BhVSGBKw.js";import"./debounce-BkOPavrs.js";import"./tick-BYuKeJ0M.js";import"./DropdownField-dwtwvXXB.js";import"./isEqual-CfeS8fMi.js";import"./withOsdkMetrics-gaJzJVhq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
