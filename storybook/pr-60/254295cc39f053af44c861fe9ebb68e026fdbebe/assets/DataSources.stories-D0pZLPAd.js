import{j as r}from"./iframe-BuSw4B6O.js";import{O as b}from"./object-table-DJouJ_zt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C57uIocz.js";import{u as g}from"./useOsdkClient-CC-HmWmp.js";import"./preload-helper-lqh4ZshJ.js";import"./Table-CfhNV2Ii.js";import"./index-D9SEgQNF.js";import"./Dialog-B_f1Ez79.js";import"./cross-7xpX4Ge0.js";import"./svgIconContainer-BZgPnQyZ.js";import"./useBaseUiId-DViO3tgt.js";import"./InternalBackdrop-CA7307o1.js";import"./composite-DAXoYC61.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./index-7KpkRFDe.js";import"./useEventCallback-BVVXZcvZ.js";import"./SkeletonBar-Bjsc0Vlg.js";import"./LoadingCell-DyYZRjN4.js";import"./ColumnConfigDialog-B-pp2uLb.js";import"./DraggableList-uY2SXCwv.js";import"./search-DRWDcQXz.js";import"./Input-Ct08sj7B.js";import"./useControlled-8U03TFMg.js";import"./Button-DZw1-eKI.js";import"./small-cross-D6It-7yt.js";import"./ActionButton-CbDgFm0H.js";import"./Checkbox-BAo2Bb0u.js";import"./useValueChanged-CObbYU8S.js";import"./CollapsiblePanel-OoIliCXc.js";import"./MultiColumnSortDialog-DWOorCge.js";import"./MenuTrigger-BvVKcwFG.js";import"./CompositeItem-0tc6F5lP.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./getDisabledMountTransitionStyles-4Lq6Qrl-.js";import"./getPseudoElementBounds-B5CjaZhn.js";import"./chevron-down-Cbm7pBxW.js";import"./index-DzxxLWoo.js";import"./error-mcJBKPob.js";import"./BaseCbacBanner-BOKW3MY9.js";import"./makeExternalStore-2iAw82Qk.js";import"./Tooltip-D3zKUMKo.js";import"./PopoverPopup-BlwV2f1d.js";import"./debounce-Bjcpa4D8.js";import"./tick-DStEO9pf.js";import"./DropdownField-7MeYkNlB.js";import"./isEqual-BKdG9moy.js";import"./withOsdkMetrics-DUOa1-5i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
