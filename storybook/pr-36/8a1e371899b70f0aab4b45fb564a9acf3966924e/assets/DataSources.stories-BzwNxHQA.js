import{j as r}from"./iframe-DUf0ZM0m.js";import{O as b}from"./object-table-BZQfq3Js.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-24n93Plb.js";import{u as g}from"./useOsdkClient-CnVn3iVU.js";import"./preload-helper-KlMKjl9V.js";import"./Table-BpqgbLs4.js";import"./index-DhPIhyt4.js";import"./Dialog-CayXW5M3.js";import"./cross-CSu9pd0U.js";import"./svgIconContainer-DIQ4r6yH.js";import"./useBaseUiId-CCdSaAp3.js";import"./InternalBackdrop-BpRU2U_8.js";import"./composite-Ca3Atwol.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./index-C0yU06Q6.js";import"./useEventCallback-BgsfaB3Y.js";import"./SkeletonBar-COiOlbH0.js";import"./LoadingCell-B2QIRUcR.js";import"./ColumnConfigDialog-DWrprQ7Z.js";import"./DraggableList-DK4DOOpd.js";import"./search-BTSIL3B5.js";import"./Input-D5jZGu61.js";import"./useControlled-D9pcZLhn.js";import"./Button-27JXw8gN.js";import"./small-cross-DPoZyTDD.js";import"./ActionButton-COPug63M.js";import"./Checkbox-B0VGQD67.js";import"./useValueChanged-z0aioFdT.js";import"./CollapsiblePanel-mRxE6gsX.js";import"./MultiColumnSortDialog-C6tqy3oQ.js";import"./MenuTrigger-zVMPfwjS.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./getDisabledMountTransitionStyles-DxcTI9oz.js";import"./getPseudoElementBounds-Cgd5KJAZ.js";import"./chevron-down-BElmyRaO.js";import"./index-C9tEn2VI.js";import"./error-wj1vfq65.js";import"./BaseCbacBanner-DpcCkxH6.js";import"./makeExternalStore-CiGKFh7B.js";import"./Tooltip-XJCpwDJu.js";import"./PopoverPopup-DSjEA-Cg.js";import"./debounce-D4eo-Ale.js";import"./tick-Cf9GU9iy.js";import"./DropdownField-DAuhKtCc.js";import"./isEqual-Bk5F-IFE.js";import"./withOsdkMetrics-DuLTXoUD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
