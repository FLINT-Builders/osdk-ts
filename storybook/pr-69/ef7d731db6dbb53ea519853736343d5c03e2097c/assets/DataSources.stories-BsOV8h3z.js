import{j as r}from"./iframe-CEEl8rhe.js";import{O as b}from"./object-table-BRYEavK4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-v_D3hssz.js";import{u as g}from"./useOsdkClient-_z2zV0V9.js";import"./preload-helper-BNeS4N_d.js";import"./Table-CH1HBcKP.js";import"./index-D3BMxXWO.js";import"./Dialog-CExnZc08.js";import"./cross-CC3rT2Cs.js";import"./svgIconContainer-BoK1M0P8.js";import"./useBaseUiId-Bj988QM0.js";import"./InternalBackdrop-BmSff-mp.js";import"./composite-DpkIpZoZ.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./index-D_PVV5Fd.js";import"./useEventCallback-C5vlArFZ.js";import"./SkeletonBar-p0RmfKN_.js";import"./LoadingCell-CCkUjs7m.js";import"./ColumnConfigDialog-Ckp9UGz4.js";import"./DraggableList-mCtVzcc0.js";import"./search-BpfeUnuY.js";import"./Input-BDwKsEY1.js";import"./useControlled-B70mnLby.js";import"./Button-YcHEvqMa.js";import"./small-cross-BwPiA_ZV.js";import"./ActionButton-jLAD1Qmw.js";import"./Checkbox-D8YHrR9c.js";import"./useValueChanged-C-fNJX81.js";import"./CollapsiblePanel-C1Fn1_Kr.js";import"./MultiColumnSortDialog-_TG7ke8e.js";import"./MenuTrigger-ncb26Pw2.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./getDisabledMountTransitionStyles-xN5v6pd8.js";import"./getPseudoElementBounds-Qyou3wPJ.js";import"./chevron-down-BGwNr8cZ.js";import"./index-BCtfyswk.js";import"./error-nlz9dA9p.js";import"./BaseCbacBanner-DdFaRu3i.js";import"./makeExternalStore-hwf9V02L.js";import"./Tooltip-Bwai2e_Y.js";import"./PopoverPopup-T8H6T0aO.js";import"./debounce-CHYKXz2Y.js";import"./tick-CRV1-A87.js";import"./DropdownField-Ba7JB-vZ.js";import"./isEqual-c3KaD12f.js";import"./withOsdkMetrics-DLFNJZK7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
