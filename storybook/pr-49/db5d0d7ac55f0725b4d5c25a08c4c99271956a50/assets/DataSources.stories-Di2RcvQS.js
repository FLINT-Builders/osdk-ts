import{j as r}from"./iframe-ClewFmdb.js";import{O as b}from"./object-table-8K4aePLH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BesIkqqY.js";import{u as g}from"./useOsdkClient-CvCsWpzO.js";import"./preload-helper-C7O4zYJs.js";import"./Table-0qXuSpiD.js";import"./index-euIemqPw.js";import"./Dialog-DQpS9gtB.js";import"./cross-C3it1rM0.js";import"./svgIconContainer-6Af8qoOE.js";import"./useBaseUiId-CM0luRv8.js";import"./InternalBackdrop-DwZ14DHU.js";import"./composite-C-wFuse1.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./index-DIwsgw5y.js";import"./useEventCallback-Dm_-ERSx.js";import"./SkeletonBar-FwwEYK9L.js";import"./LoadingCell-BxFRA9K3.js";import"./ColumnConfigDialog-DCzvHOWU.js";import"./DraggableList-CJc0qD0P.js";import"./search-D0xA_Pz7.js";import"./Input-eZMgRwLi.js";import"./useControlled-8bbLsKqv.js";import"./Button-Br0QmuY1.js";import"./small-cross-uC2CoRN_.js";import"./ActionButton-C4_8y7RX.js";import"./Checkbox-aaq5Ho4E.js";import"./useValueChanged-BuF2EKQm.js";import"./CollapsiblePanel-IjgMvAVk.js";import"./MultiColumnSortDialog-BcP8s1U4.js";import"./MenuTrigger-UCF9DPXZ.js";import"./CompositeItem-LzMD5IlK.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./getDisabledMountTransitionStyles-vZzLMj6x.js";import"./getPseudoElementBounds-Bp53_Y_k.js";import"./chevron-down-CN3rbJYx.js";import"./index-wZBaNT0h.js";import"./error-BpCPRxU6.js";import"./BaseCbacBanner-tpjBGn7l.js";import"./makeExternalStore-B6ZLCKG0.js";import"./Tooltip-Dhf32NVV.js";import"./PopoverPopup-BRgxxAdh.js";import"./debounce-DRq1cdjb.js";import"./tick-BrTAlGhW.js";import"./DropdownField-DJ_QrvtP.js";import"./isEqual-B878mnik.js";import"./withOsdkMetrics-DMwTLP5k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
