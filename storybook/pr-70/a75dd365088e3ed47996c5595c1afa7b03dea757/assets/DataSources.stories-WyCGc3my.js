import{j as r}from"./iframe-CP9a7nUw.js";import{O as b}from"./object-table-BruGR1AQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtTUNa7h.js";import{u as g}from"./useOsdkClient-HDPiO6O7.js";import"./preload-helper-CEsPI4dA.js";import"./Table-Hczb4WTJ.js";import"./index-DniCSj7w.js";import"./Dialog-BZGlhhfP.js";import"./cross-CzNskJpg.js";import"./svgIconContainer-2VLDNHQf.js";import"./useBaseUiId-DiSl6omO.js";import"./InternalBackdrop-INOUWv7w.js";import"./composite-glykujGt.js";import"./index-iwc-nvij.js";import"./index-DmfmdOfN.js";import"./index--1cLqxis.js";import"./useEventCallback-ChYCugrs.js";import"./SkeletonBar-N9YLL7wQ.js";import"./LoadingCell-Cve1Kf7h.js";import"./ColumnConfigDialog-BjWG-hci.js";import"./DraggableList-D29nndwp.js";import"./search-XcYtnEQZ.js";import"./Input-CWaAUNjQ.js";import"./useControlled-CuJAn8pg.js";import"./Button-CmgLZAkm.js";import"./small-cross-Cn3FY_V8.js";import"./ActionButton-xfKsHh_O.js";import"./Checkbox-DqvQ_8P_.js";import"./useValueChanged-rrXn3TDR.js";import"./CollapsiblePanel-CCQUbxVQ.js";import"./MultiColumnSortDialog-Cxmv9l-b.js";import"./MenuTrigger-DKmVApA5.js";import"./CompositeItem-CqeBUtGk.js";import"./ToolbarRootContext-UMchbOHm.js";import"./getDisabledMountTransitionStyles-wj6lRVON.js";import"./getPseudoElementBounds-DA4wJ9CI.js";import"./chevron-down-BeMypg5x.js";import"./index-C0KVErgA.js";import"./error-XoDyt_r9.js";import"./BaseCbacBanner-0k60aUbW.js";import"./makeExternalStore-BVCeMHz1.js";import"./Tooltip-BHR2-9_G.js";import"./PopoverPopup-DmK1cLX2.js";import"./debounce-CN_ZmUe7.js";import"./tick-X1olulBP.js";import"./DropdownField-B-yjH5_t.js";import"./isEqual-DH7O2jmc.js";import"./withOsdkMetrics-tcURfXmI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
