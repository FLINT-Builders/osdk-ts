import{j as r}from"./iframe-AucoVF3S.js";import{O as b}from"./object-table-B4O2k6KZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DLTNbtrZ.js";import{u as g}from"./useOsdkClient-D4rgIYhL.js";import"./preload-helper-C9ibelWf.js";import"./Table-BNldCwgw.js";import"./index-BCzMg9g9.js";import"./Dialog-CCJCv316.js";import"./cross-CXJnoTqk.js";import"./svgIconContainer-61R_Lu5T.js";import"./useBaseUiId-8trwhzTr.js";import"./InternalBackdrop-H6g9AIjw.js";import"./composite-DSdmvgK1.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./index-1RXFbTsx.js";import"./useEventCallback-BIW5Bdvm.js";import"./SkeletonBar-BZh-fM1u.js";import"./LoadingCell-FJkElyBo.js";import"./ColumnConfigDialog-BPCQBYMp.js";import"./DraggableList-Dchq4Xbo.js";import"./search-DPzEqCxj.js";import"./Input-BiAZvzzV.js";import"./useControlled-CzfSKEfy.js";import"./Button-Dz4p_z9s.js";import"./small-cross-BfH9_XDO.js";import"./ActionButton-COPO59vI.js";import"./Checkbox-B5wBC7Ni.js";import"./useValueChanged-Cp3v6jl-.js";import"./CollapsiblePanel-dZxZKyMJ.js";import"./MultiColumnSortDialog-B7fSlvm9.js";import"./MenuTrigger-CLgOGu1K.js";import"./CompositeItem-DOrX4W-o.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./getDisabledMountTransitionStyles-higzgc3K.js";import"./getPseudoElementBounds-DA-UNPJk.js";import"./chevron-down-gqlYPD2T.js";import"./index-BLHxMhxy.js";import"./error-SdAehXSj.js";import"./BaseCbacBanner-7jhQujGw.js";import"./makeExternalStore-DKsNeQJB.js";import"./Tooltip-BZUDpMvt.js";import"./PopoverPopup-BX3JA3C9.js";import"./debounce-CFR0ltnl.js";import"./tick-BVqGDNac.js";import"./DropdownField-Bbed1NBQ.js";import"./isEqual-BAb600At.js";import"./withOsdkMetrics-g1UKMxg9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
