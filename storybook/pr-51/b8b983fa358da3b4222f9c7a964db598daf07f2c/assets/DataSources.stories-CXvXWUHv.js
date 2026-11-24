import{j as r}from"./iframe-Bf8iAqL7.js";import{O as b}from"./object-table-CtvztlQ4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BqnUn64S.js";import{u as g}from"./useOsdkClient-Cvr99OkN.js";import"./preload-helper-A1AS_NiL.js";import"./Table-BlcY20YB.js";import"./index-Db0mdORg.js";import"./Dialog-BbuGk_ef.js";import"./cross-DO1QLnzH.js";import"./svgIconContainer-D52qXfX5.js";import"./useBaseUiId-C3S3f6WK.js";import"./InternalBackdrop-BlMO4Ova.js";import"./composite-DIFH8mgU.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./index-C0BMu-E0.js";import"./useEventCallback-CVkQOs3D.js";import"./SkeletonBar-C8ox7Pyn.js";import"./LoadingCell-DBPZu4Hz.js";import"./ColumnConfigDialog-CE5V5I8x.js";import"./DraggableList-bepDk-q0.js";import"./search-k-BDZpAM.js";import"./Input-3S863M3T.js";import"./useControlled-BxkhcEK2.js";import"./Button-H641EagL.js";import"./small-cross-BmVVnuZH.js";import"./ActionButton-CI5S3k3v.js";import"./Checkbox-CIK4xHnB.js";import"./useValueChanged-B4RhT_mT.js";import"./CollapsiblePanel-BR9JLyXV.js";import"./MultiColumnSortDialog-CQv6RXwg.js";import"./MenuTrigger-CFCoJv4p.js";import"./CompositeItem-C29Fnmef.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./getDisabledMountTransitionStyles-BkOgHLaz.js";import"./getPseudoElementBounds-BjiN3SJE.js";import"./chevron-down-BF98-CIj.js";import"./index-CJ290pxf.js";import"./error-DTUZUWgs.js";import"./BaseCbacBanner-ibJi_Mqm.js";import"./makeExternalStore-BeW1g1b1.js";import"./Tooltip-D1ph3_EU.js";import"./PopoverPopup-JpuFEWOE.js";import"./debounce-cgA55fD7.js";import"./tick-BLri3Pi1.js";import"./DropdownField-RxrVsgU9.js";import"./isEqual-DUkrTRcX.js";import"./withOsdkMetrics-BNJYvdSI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
