import{j as r}from"./iframe-Bh45DKn3.js";import{O as b}from"./object-table-DbyKNSVh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-taSQyGhb.js";import{u as g}from"./useOsdkClient-DkRSeke5.js";import"./preload-helper-LJhXTPCv.js";import"./Table-Coc-XLOq.js";import"./index-BazZquql.js";import"./Dialog-1vhJoqh9.js";import"./cross-RpPg89dZ.js";import"./svgIconContainer-BfPBlfHC.js";import"./useBaseUiId-BfSMp68R.js";import"./InternalBackdrop-DIwYAmQX.js";import"./composite-DWucITgI.js";import"./index-BSd5iftC.js";import"./index-CDLdpsSb.js";import"./index-rTGldpxn.js";import"./useEventCallback-BjCmEzcn.js";import"./SkeletonBar-Byf20GVv.js";import"./LoadingCell-Cr0-Vtyp.js";import"./ColumnConfigDialog-DZoWMp_h.js";import"./DraggableList-B3JlWQAD.js";import"./search-Brd7oyMK.js";import"./Input-iUZFI1La.js";import"./useControlled-BrBmyOo2.js";import"./Button-Dy9bad7W.js";import"./small-cross-D2rBK4H_.js";import"./ActionButton-MfZdPyWj.js";import"./Checkbox-R65Rxn08.js";import"./useValueChanged--KdOJzwF.js";import"./CollapsiblePanel-CIXeu-cF.js";import"./MultiColumnSortDialog-DE5GTJ1R.js";import"./MenuTrigger-m7vp11gt.js";import"./CompositeItem-uwTTFrvD.js";import"./ToolbarRootContext-BUoifa8H.js";import"./getDisabledMountTransitionStyles-IkmlIA3z.js";import"./getPseudoElementBounds-JVlUWG3W.js";import"./chevron-down-BP-IXn8o.js";import"./index-CIr-D7oP.js";import"./error-BuY4OKaU.js";import"./BaseCbacBanner-CGUj6vGC.js";import"./makeExternalStore-WafiyNY8.js";import"./Tooltip-D8h_Xk4s.js";import"./PopoverPopup-mOdIo3-Q.js";import"./debounce-Coqd0i8P.js";import"./tick-Civ6UOpK.js";import"./DropdownField-Bdykv7F3.js";import"./isEqual-B27HEN1w.js";import"./withOsdkMetrics-1D0C0Hkk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
