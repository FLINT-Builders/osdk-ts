import{j as r}from"./iframe-Dv8One7V.js";import{O as b}from"./object-table-CfRYWgsZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-j2s3B52G.js";import{u as g}from"./useOsdkClient-DoPqkbEf.js";import"./preload-helper-BBoDOBGQ.js";import"./Table-B-B99IvY.js";import"./index-BWSDrnLY.js";import"./Dialog-DxY3Fx_o.js";import"./cross-DtsB4Pth.js";import"./svgIconContainer-frnooqcF.js";import"./useBaseUiId-CGmk-t13.js";import"./InternalBackdrop-DCePJn6p.js";import"./composite-lgOQMlQp.js";import"./index-Ctu1Wao6.js";import"./index-D03dI7Zm.js";import"./index-DcQ5HyEs.js";import"./useEventCallback-6cjXoQ8Y.js";import"./SkeletonBar-fAb0c0T8.js";import"./LoadingCell-DS7KPRVt.js";import"./ColumnConfigDialog-foN_V3UI.js";import"./DraggableList-DfKstJRE.js";import"./search-DIkoxWAI.js";import"./Input-CVOjTeyF.js";import"./useControlled-Xs-DgsXw.js";import"./Button-BvCCqPbi.js";import"./small-cross-BWiwWK5R.js";import"./ActionButton-CNvW2NgU.js";import"./Checkbox-DHn8_urd.js";import"./useValueChanged-CugKpIVt.js";import"./CollapsiblePanel-RlfeAOIs.js";import"./MultiColumnSortDialog-DDEKoryj.js";import"./MenuTrigger-khv0mkpD.js";import"./CompositeItem-DnhodDvF.js";import"./ToolbarRootContext-puaQBB4T.js";import"./getDisabledMountTransitionStyles-BkcjIdFx.js";import"./getPseudoElementBounds-ShrpqpOE.js";import"./chevron-down-BxGUpntZ.js";import"./index-BNO6OCKx.js";import"./error-DLGPeg_I.js";import"./BaseCbacBanner-C1GsAefg.js";import"./makeExternalStore-BdR9BUh7.js";import"./Tooltip-hfd-RkvL.js";import"./PopoverPopup-CwVc1ewd.js";import"./debounce-BRUGc1K3.js";import"./tick-CoFklBfZ.js";import"./DropdownField-Cq5lnh0S.js";import"./isEqual-B5kZnmRB.js";import"./withOsdkMetrics-CktMaht-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
