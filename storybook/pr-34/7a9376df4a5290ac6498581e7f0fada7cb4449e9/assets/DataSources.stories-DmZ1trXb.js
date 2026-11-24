import{j as r}from"./iframe-CblSHN44.js";import{O as b}from"./object-table-NrfhXZMw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CtdHVXQY.js";import{u as g}from"./useOsdkClient-DvNhOVDU.js";import"./preload-helper-NGhizEuB.js";import"./Table-B9S3TsP0.js";import"./index-BQ7zJ7he.js";import"./Dialog-CFJvv8RE.js";import"./cross-BUglgpN5.js";import"./svgIconContainer-CF_MW71M.js";import"./useBaseUiId-B2pTi154.js";import"./InternalBackdrop-CdBXMVDV.js";import"./composite-DJG-zPIc.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./index-BTICbwFi.js";import"./useEventCallback-Gp2djsqb.js";import"./SkeletonBar-tik-rx_X.js";import"./LoadingCell-Br58Xfz1.js";import"./ColumnConfigDialog-CX-XPY4L.js";import"./DraggableList-CF8oysvU.js";import"./search-CXloA44P.js";import"./Input-DBybejkY.js";import"./useControlled-Bg0Zzn-2.js";import"./Button-Wy_PutQU.js";import"./small-cross-Bf8RpEZ1.js";import"./ActionButton-B_RqefyB.js";import"./Checkbox-D7WPqzH4.js";import"./useValueChanged-qSo-FEmP.js";import"./CollapsiblePanel-V6VhVNxj.js";import"./MultiColumnSortDialog-Cu_s8VJS.js";import"./MenuTrigger-CxJXAJFY.js";import"./CompositeItem-DuOAdpQK.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./getDisabledMountTransitionStyles-7TLN3kNJ.js";import"./getPseudoElementBounds-DjDH-yid.js";import"./chevron-down-BysZ9GN-.js";import"./index-CBgrw70i.js";import"./error-DuPAr2Go.js";import"./BaseCbacBanner-O8pa1Cnr.js";import"./makeExternalStore-DbO86LPP.js";import"./Tooltip-Bd9UBwBY.js";import"./PopoverPopup-BOyF1dvC.js";import"./debounce-DScc-am-.js";import"./tick-DWIXpsmv.js";import"./DropdownField-BX_lVSWT.js";import"./isEqual-ZjIkYTio.js";import"./withOsdkMetrics-CRV0LY7d.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
