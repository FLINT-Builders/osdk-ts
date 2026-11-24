import{j as r}from"./iframe-Cfy1VfwI.js";import{O as b}from"./object-table-OGRSCvgp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KyqE6jgN.js";import{u as g}from"./useOsdkClient-BcTcp2zs.js";import"./preload-helper-D7hEGIHW.js";import"./Table-mlnthY26.js";import"./index-D9qChlkT.js";import"./Dialog-DF9EtPFZ.js";import"./cross-DCuCUk-Y.js";import"./svgIconContainer-DIZS-ng4.js";import"./useBaseUiId-Bl3BCz40.js";import"./InternalBackdrop-DJybReYS.js";import"./composite-DcidvM5B.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./index-CK2Vk24k.js";import"./useEventCallback-dqu5-SHz.js";import"./SkeletonBar-BuAHtDLm.js";import"./LoadingCell-gSWW82f3.js";import"./ColumnConfigDialog-CfsTDY2L.js";import"./DraggableList-xqj0cC0n.js";import"./search-m5EKgstc.js";import"./Input-DeAzpHTT.js";import"./useControlled-Bb34JJQm.js";import"./Button-NH8o7MdQ.js";import"./small-cross-CbTS0UJl.js";import"./ActionButton-BE3V6UYF.js";import"./Checkbox-D95EDxuQ.js";import"./useValueChanged-D8jzwMFp.js";import"./CollapsiblePanel-D9bDfrrQ.js";import"./MultiColumnSortDialog-DKBmJLiz.js";import"./MenuTrigger-C6MWEMLO.js";import"./CompositeItem-BJZgOdXE.js";import"./ToolbarRootContext-BGtapBDY.js";import"./getDisabledMountTransitionStyles-BcyKzADO.js";import"./getPseudoElementBounds-CR_thFgC.js";import"./chevron-down-LTPIgxFV.js";import"./index-Bx8gvAM_.js";import"./error-CmqKN1z-.js";import"./BaseCbacBanner-BuhCxIpY.js";import"./makeExternalStore-DUu0ElVX.js";import"./Tooltip-Ny6lMCIs.js";import"./PopoverPopup-Zy0TwZWf.js";import"./debounce-FHf42ThN.js";import"./tick-Dk0AG9pV.js";import"./DropdownField-BycB_EL4.js";import"./isEqual-CoKKqdlc.js";import"./withOsdkMetrics-COKuhu-t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
