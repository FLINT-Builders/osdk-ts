import{j as r}from"./iframe-DTT6nz7o.js";import{O as b}from"./object-table-BuFYa5XZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQZ-7Gir.js";import{u as g}from"./useOsdkClient-DvmPcDA4.js";import"./preload-helper-B1xGfzPI.js";import"./Table-B9_GvBk1.js";import"./index-CTxHEiTU.js";import"./Dialog-t6Y6xSYi.js";import"./cross-BgvHTgXn.js";import"./svgIconContainer-CgqmpPt6.js";import"./useBaseUiId-eE74TdDR.js";import"./InternalBackdrop-CzODpXWQ.js";import"./composite-Cb2l-Kwg.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./index-C79qnBzb.js";import"./useEventCallback-D3wxufVs.js";import"./SkeletonBar-BqNZZo2k.js";import"./LoadingCell-C6lmrfbQ.js";import"./ColumnConfigDialog-R-laWYXZ.js";import"./DraggableList-DYY0D_Bu.js";import"./search-pmwVSsC3.js";import"./Input-DUSBBA6M.js";import"./useControlled-nQOh3ft9.js";import"./Button-CQ5X8faA.js";import"./small-cross-GWNLyjvR.js";import"./ActionButton-DCl1Vnp4.js";import"./Checkbox-DrrX-Z5B.js";import"./useValueChanged-Cmi0P8zg.js";import"./CollapsiblePanel-DaCbRpGf.js";import"./MultiColumnSortDialog-Bs_GGBzS.js";import"./MenuTrigger-HOlRD3Yu.js";import"./CompositeItem-Wk4nNvBM.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./getDisabledMountTransitionStyles-Bvaoj8VB.js";import"./getPseudoElementBounds-DSrPRsVI.js";import"./chevron-down-C4sokJMh.js";import"./index-BU5fSJ65.js";import"./error-DTxCn2-C.js";import"./BaseCbacBanner-ByjZ5iyO.js";import"./makeExternalStore-S1Q9iP-N.js";import"./Tooltip-BcSgBIwr.js";import"./PopoverPopup-B7rrkVjJ.js";import"./debounce-DxKPhidQ.js";import"./tick-CPW7UZx4.js";import"./DropdownField-BhgIN6ih.js";import"./isEqual-hFo8Qatz.js";import"./withOsdkMetrics-pvC18r39.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
