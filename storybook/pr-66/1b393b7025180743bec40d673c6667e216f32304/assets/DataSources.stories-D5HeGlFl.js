import{j as r}from"./iframe-DVXjYepe.js";import{O as b}from"./object-table-DqpNm8Hb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_3ay9-8R.js";import{u as g}from"./useOsdkClient-BXsdu0M4.js";import"./preload-helper-DoQZ9wQO.js";import"./Table-CrAztDvv.js";import"./index-xEG3qOed.js";import"./Dialog-CrjAt9qc.js";import"./cross-B8UbpGAg.js";import"./svgIconContainer-BJPtXOwn.js";import"./useBaseUiId--5oKpwvu.js";import"./InternalBackdrop-inXTS0yx.js";import"./composite-D8RKaTKg.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./index-CSeYDT8l.js";import"./useEventCallback-DkAeY7hG.js";import"./SkeletonBar-SOwc_Qrs.js";import"./LoadingCell-p7qL3SN_.js";import"./ColumnConfigDialog-oDYR3l_f.js";import"./DraggableList-CjcyPHW-.js";import"./search-B-9-6Ofx.js";import"./Input-BN6UqcCj.js";import"./useControlled-urWeze7M.js";import"./Button-CMf4Lntc.js";import"./small-cross-CXxGQkOn.js";import"./ActionButton-FeoD3QJR.js";import"./Checkbox-DWqsnJ9A.js";import"./useValueChanged-DQdsowWS.js";import"./CollapsiblePanel-BtSjatWQ.js";import"./MultiColumnSortDialog-sBOZ2Kl1.js";import"./MenuTrigger-D_kSWag0.js";import"./CompositeItem-Bmf0StTl.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./getDisabledMountTransitionStyles-C9YsekIJ.js";import"./getPseudoElementBounds-DaAwz07x.js";import"./chevron-down-Bzvk1BIc.js";import"./index-BOgvpjI5.js";import"./error-DfVU-Ijw.js";import"./BaseCbacBanner-Qy2snOko.js";import"./makeExternalStore-BgZoDepZ.js";import"./Tooltip-CJ_e6i_k.js";import"./PopoverPopup-um6wJ3Q9.js";import"./debounce-BIK5BkHx.js";import"./tick-DfRCIBAT.js";import"./DropdownField-v3RWXYr3.js";import"./isEqual-w6xswxHo.js";import"./withOsdkMetrics-DmcVbwBr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
