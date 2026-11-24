import{j as r}from"./iframe-Ci8jv4db.js";import{O as b}from"./object-table-Dacr0ifo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1a_m51ee.js";import{u as g}from"./useOsdkClient-CY0rgXDT.js";import"./preload-helper-BijYl_hj.js";import"./Table-CdSPN2Q9.js";import"./index-Cb4PYHc_.js";import"./Dialog-CU4h8-6w.js";import"./cross-DUbcKgzt.js";import"./svgIconContainer-Y9M5A49t.js";import"./useBaseUiId-Dty0keys.js";import"./InternalBackdrop-DNudlJn1.js";import"./composite-dn8KtEdo.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./index-DbJfPldr.js";import"./useEventCallback-BoVAQff_.js";import"./SkeletonBar-C9OdSW8N.js";import"./LoadingCell-DLN_h4p2.js";import"./ColumnConfigDialog-CyYseEM-.js";import"./DraggableList-CAzFZL8D.js";import"./search-D0vckm_H.js";import"./Input-Ctv6ca3A.js";import"./useControlled-AQzCfptX.js";import"./Button-DXyPvcOa.js";import"./small-cross-CzYmJZ8j.js";import"./ActionButton-CpnY3Zoi.js";import"./Checkbox-C4duWPNx.js";import"./useValueChanged-Bjs7PV0z.js";import"./CollapsiblePanel-BZkK1yay.js";import"./MultiColumnSortDialog-BbtaWRjx.js";import"./MenuTrigger-DoMDuH9X.js";import"./CompositeItem-pAC9-vMM.js";import"./ToolbarRootContext-BBg552Fz.js";import"./getDisabledMountTransitionStyles-C3sdXLul.js";import"./getPseudoElementBounds-hHPF40eR.js";import"./chevron-down-Cogx4pq7.js";import"./index-DBQv4m84.js";import"./error-BVKGD7Ps.js";import"./BaseCbacBanner-BNWc-wSO.js";import"./makeExternalStore-MN51YzUq.js";import"./Tooltip-CPVVmqYN.js";import"./PopoverPopup-DX5l843X.js";import"./debounce-Q2FLO271.js";import"./tick-kwWHIM-G.js";import"./DropdownField-DODhTvNS.js";import"./isEqual-3tAmgqC1.js";import"./withOsdkMetrics-BOl2WiFX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
