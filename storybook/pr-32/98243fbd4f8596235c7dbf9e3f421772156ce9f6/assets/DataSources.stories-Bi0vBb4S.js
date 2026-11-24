import{j as r}from"./iframe-BrM52See.js";import{O as b}from"./object-table-VQLhFWF1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9KUddk7D.js";import{u as g}from"./useOsdkClient-CUbGPJm8.js";import"./preload-helper-DPLtzYOe.js";import"./Table-DBrEBYq-.js";import"./index-H3qcjrO1.js";import"./Dialog-C6ykfz8O.js";import"./cross-BS83Kw7I.js";import"./svgIconContainer-DWvq_kJI.js";import"./useBaseUiId-LwZBbKwi.js";import"./InternalBackdrop-B0v8ialf.js";import"./composite-BZFmOQck.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./index-l8fykvfj.js";import"./useEventCallback-BHcaXjux.js";import"./SkeletonBar-CyZkMeKi.js";import"./LoadingCell-BKsSrcW2.js";import"./ColumnConfigDialog-CA_TaoPw.js";import"./DraggableList-BjT_lsmH.js";import"./search-B5gd2r9J.js";import"./Input-Ctwp83L6.js";import"./useControlled--LTXft-F.js";import"./Button-Bor1IKlq.js";import"./small-cross-mZTcJe0Y.js";import"./ActionButton-Bjg5SHwB.js";import"./Checkbox-CpcYXb7o.js";import"./useValueChanged-CaQ00tTB.js";import"./CollapsiblePanel-DNThs05J.js";import"./MultiColumnSortDialog-DdgbljRq.js";import"./MenuTrigger-DgZhECnA.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./getDisabledMountTransitionStyles-ZwWdEcJk.js";import"./getPseudoElementBounds-DNWW4OHS.js";import"./chevron-down-IA-50EVq.js";import"./index-CHWvcJrG.js";import"./error-DUN9wjL6.js";import"./BaseCbacBanner-CaBAfIKG.js";import"./makeExternalStore-ByUo-Oil.js";import"./Tooltip-Dmxc3XnT.js";import"./PopoverPopup-Hoh-5uEa.js";import"./debounce-I5NpiXWy.js";import"./tick-s7oDZI4G.js";import"./DropdownField-BjLRMnJ9.js";import"./isEqual-CGSZE7_m.js";import"./withOsdkMetrics-DCPJGWBb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
