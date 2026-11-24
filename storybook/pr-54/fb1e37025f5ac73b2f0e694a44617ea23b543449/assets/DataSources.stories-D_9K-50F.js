import{j as r}from"./iframe-DM4xkxPz.js";import{O as b}from"./object-table-BwG6GD9b.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CE2244_G.js";import{u as g}from"./useOsdkClient-tJuqjJBg.js";import"./preload-helper-DjYsY0e4.js";import"./Table-CcKGWX2z.js";import"./index-CA3PhY9C.js";import"./Dialog-DiB6aMIR.js";import"./cross-BIpUExIv.js";import"./svgIconContainer-DRHE02a1.js";import"./useBaseUiId-06FsOnRS.js";import"./InternalBackdrop-atnimPNE.js";import"./composite-DPjRORK_.js";import"./index-BaPxcL-U.js";import"./index-CKWQIFc6.js";import"./index-HBJubKVl.js";import"./useEventCallback-xkxPv1XK.js";import"./SkeletonBar-CAreatfx.js";import"./LoadingCell-DZgkJAKm.js";import"./ColumnConfigDialog-CkTEzgSA.js";import"./DraggableList-DO4N10B8.js";import"./search-ChvjyncO.js";import"./Input-BtFpG8L-.js";import"./useControlled-DWhJIBEC.js";import"./Button-D6sOWWJg.js";import"./small-cross-DlPYjgwz.js";import"./ActionButton-DiqtwetY.js";import"./Checkbox-CJICDHUp.js";import"./useValueChanged-BvA5FaKj.js";import"./CollapsiblePanel-PDqHktLP.js";import"./MultiColumnSortDialog-DqGL67Xh.js";import"./MenuTrigger-BzaLQE7D.js";import"./CompositeItem-D5I-ZnjA.js";import"./ToolbarRootContext-DaxififC.js";import"./getDisabledMountTransitionStyles-cqxjXfXt.js";import"./getPseudoElementBounds-BzpbsaWw.js";import"./chevron-down-2d4v9sYb.js";import"./index-DpHY-Tke.js";import"./error-C2OR8u8c.js";import"./BaseCbacBanner-B4_4gqDk.js";import"./makeExternalStore-oSWvZmSa.js";import"./Tooltip-CyL_Vgso.js";import"./PopoverPopup-C2RXGzDC.js";import"./debounce-BTJweAvj.js";import"./tick-VaEeN5iX.js";import"./DropdownField-DO3iEBks.js";import"./isEqual-DBOXNISH.js";import"./withOsdkMetrics-DK0sAIWr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
