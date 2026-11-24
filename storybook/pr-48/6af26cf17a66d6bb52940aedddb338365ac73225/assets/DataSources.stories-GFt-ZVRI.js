import{j as r}from"./iframe-OFDiPCrG.js";import{O as b}from"./object-table-BPDKIWGN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CnHFX2aS.js";import{u as g}from"./useOsdkClient-DCpLRsuK.js";import"./preload-helper-DUjfNDkl.js";import"./Table-KQeOisGx.js";import"./index-BeuOzgqu.js";import"./Dialog-Dqr1bH5t.js";import"./cross-jB5PN8IY.js";import"./svgIconContainer-DhDKsT9z.js";import"./useBaseUiId-BFA8n74e.js";import"./InternalBackdrop-DbDjPHet.js";import"./composite-PM-R8SRV.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./index-DkR0Sm-A.js";import"./useEventCallback-u5zfbyPP.js";import"./SkeletonBar-YHngoHZJ.js";import"./LoadingCell-CPbAcYO7.js";import"./ColumnConfigDialog-BzkVhHi-.js";import"./DraggableList-DOIwgRoD.js";import"./search-rykp5p6r.js";import"./Input-DDs2WsUf.js";import"./useControlled-DB7vMkHQ.js";import"./Button-C0oJYbtE.js";import"./small-cross-CzS85_Ss.js";import"./ActionButton-Dafw0kRv.js";import"./Checkbox-DhzgJCT-.js";import"./useValueChanged-O-f8K84Z.js";import"./CollapsiblePanel-iJsKp1Sk.js";import"./MultiColumnSortDialog-DqbRJlfk.js";import"./MenuTrigger-D9na9TlD.js";import"./CompositeItem-BEOwPENe.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./getDisabledMountTransitionStyles-C6EZ30T_.js";import"./getPseudoElementBounds-Bv073C_P.js";import"./chevron-down-BlpQBexS.js";import"./index-Dhs37uf9.js";import"./error-BuvCTlk4.js";import"./BaseCbacBanner-ingasLzJ.js";import"./makeExternalStore-CFPNQ_aD.js";import"./Tooltip-Dy2MALoM.js";import"./PopoverPopup-DBszHbY8.js";import"./debounce-ComwDjtY.js";import"./tick-DpIF400T.js";import"./DropdownField-BnKkKUrN.js";import"./isEqual-Ciu65pfO.js";import"./withOsdkMetrics-BSB8rkK5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
