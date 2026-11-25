import{j as r}from"./iframe-B33FiDGM.js";import{O as b}from"./object-table-Cd9X1y5Y.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BuqOxC3w.js";import{u as g}from"./useOsdkClient-DzcQCh9h.js";import"./preload-helper-Cg7VMV6C.js";import"./Table-D1t5A_0z.js";import"./index-B5YN0Y56.js";import"./Dialog-C7nRwVTO.js";import"./cross-DM8-ytCZ.js";import"./svgIconContainer-ClieOgTu.js";import"./useBaseUiId-DmUoOZel.js";import"./InternalBackdrop-Bc6Qn10Y.js";import"./composite-BOK6xXDF.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./index-BkpulrI-.js";import"./useEventCallback-CUqu6vM2.js";import"./SkeletonBar-CnLHYQNB.js";import"./LoadingCell-Gr9gnu7q.js";import"./ColumnConfigDialog-0fqvoH_h.js";import"./DraggableList-CQALhbaS.js";import"./search-C5uprCHM.js";import"./Input-BUa4RtbK.js";import"./useControlled-DJSk-4eD.js";import"./Button-CyQdblJP.js";import"./small-cross-C4rGQ9AX.js";import"./ActionButton-C1CptcBU.js";import"./Checkbox-DgsjFVUP.js";import"./useValueChanged-rm8GvKSd.js";import"./CollapsiblePanel-DtZcxswM.js";import"./MultiColumnSortDialog-52qg3BYK.js";import"./MenuTrigger-B7ZsfWcK.js";import"./CompositeItem-Bvfghm7d.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./getDisabledMountTransitionStyles-DXyRWdV6.js";import"./getPseudoElementBounds-Dz6sul8_.js";import"./chevron-down-Btg0m5Mr.js";import"./index-DNAzx9pt.js";import"./error-DU6Loo59.js";import"./BaseCbacBanner-bdCVeoPH.js";import"./makeExternalStore-zxZeOhNi.js";import"./Tooltip-DCvW2Y7A.js";import"./PopoverPopup-DJjNkjXn.js";import"./debounce-G8bS-CmE.js";import"./tick-CYGrOqhY.js";import"./DropdownField-B_28b-Fe.js";import"./isEqual-BkJ-04z-.js";import"./withOsdkMetrics-8fzs58WB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
