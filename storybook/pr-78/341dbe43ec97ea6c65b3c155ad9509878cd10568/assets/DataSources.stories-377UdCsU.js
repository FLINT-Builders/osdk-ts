import{j as r}from"./iframe-6Z8QeqqP.js";import{O as b}from"./object-table-CECxFAns.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-F0WwD9ag.js";import{u as g}from"./useOsdkClient-HylTLrl8.js";import"./preload-helper-y0D87bsA.js";import"./Table-CxvM8rGk.js";import"./index-HkxEzDx6.js";import"./Dialog-CK4HQAcY.js";import"./cross-MCgjL0SO.js";import"./svgIconContainer-8--RoJPk.js";import"./useBaseUiId-Dmz3cJQe.js";import"./InternalBackdrop-4jpidxXn.js";import"./composite-DbAi9sOR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./index-iLFhFJRI.js";import"./useEventCallback-gCzDUKPv.js";import"./SkeletonBar-DSdvgAJi.js";import"./LoadingCell-B2-rT-Br.js";import"./ColumnConfigDialog-oC-HZ2Wn.js";import"./DraggableList-Dzqqt3U_.js";import"./search-CvqEaj-y.js";import"./Input-DaVTG5o1.js";import"./useControlled-Bx6RLClW.js";import"./Button-CwPVz1_L.js";import"./small-cross-B-wOlo0v.js";import"./ActionButton-BROaqCpF.js";import"./Checkbox-BVnAR-am.js";import"./useValueChanged-17CWfsm_.js";import"./CollapsiblePanel-CBemhgM_.js";import"./MultiColumnSortDialog-7t2q7viX.js";import"./MenuTrigger-BF02E5JL.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./getDisabledMountTransitionStyles-6bxwWprB.js";import"./getPseudoElementBounds-CXK9C3Gp.js";import"./chevron-down-C4hWEHAB.js";import"./index-Ds85d0HR.js";import"./error-DBQvGp4O.js";import"./BaseCbacBanner-Hxhoa-_l.js";import"./makeExternalStore-CBiKzjzF.js";import"./Tooltip-CzZyPcm7.js";import"./PopoverPopup-kC84IpyX.js";import"./debounce-Doh9hDTV.js";import"./tick-D9u7tIy2.js";import"./DropdownField-Ue-qV6y1.js";import"./isEqual-COSWBm2c.js";import"./withOsdkMetrics-CL7caFuf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
