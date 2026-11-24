import{j as r}from"./iframe-CSBSqJV-.js";import{O as b}from"./object-table-CQlh17pU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DSPpUygG.js";import{u as g}from"./useOsdkClient-0i4-BUE5.js";import"./preload-helper-y6YPEm4u.js";import"./Table-DGzGYFQo.js";import"./index-BJfVWZd-.js";import"./Dialog-driLLg7n.js";import"./cross-B6WlAhq-.js";import"./svgIconContainer-CLK7EnDK.js";import"./useBaseUiId-Bc5TgsQW.js";import"./InternalBackdrop-Beq1X7xS.js";import"./composite-jPJKKGn2.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./index-LUSaJ2vo.js";import"./useEventCallback-DKSmEp2D.js";import"./SkeletonBar-DUkAKkre.js";import"./LoadingCell-C72uwxIB.js";import"./ColumnConfigDialog-BB1p_5kR.js";import"./DraggableList-BcrePS-Y.js";import"./search-DvlP61aE.js";import"./Input-B47Y97Of.js";import"./useControlled-Bac_91v3.js";import"./Button-Dh9tN-kh.js";import"./small-cross-CSds0n2Q.js";import"./ActionButton-cyr4kPxp.js";import"./Checkbox-D3JwoAva.js";import"./useValueChanged-D2mv37rP.js";import"./CollapsiblePanel-CFBpR34G.js";import"./MultiColumnSortDialog-s81HUVpC.js";import"./MenuTrigger-NP9ud2uM.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./getDisabledMountTransitionStyles-BniS6qDk.js";import"./getPseudoElementBounds-DhrtV-tW.js";import"./chevron-down-C4EMQsdy.js";import"./index-B3n_oO7A.js";import"./error-CRSueJec.js";import"./BaseCbacBanner-CFcln0a-.js";import"./makeExternalStore-BuktQzqG.js";import"./Tooltip-Bo7GAIpf.js";import"./PopoverPopup-BFehPzV1.js";import"./debounce-gyo9KVfh.js";import"./tick-WiW2BOLj.js";import"./DropdownField-BIxLro4D.js";import"./isEqual-tRqZMX7m.js";import"./withOsdkMetrics-B-CwHZa2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
