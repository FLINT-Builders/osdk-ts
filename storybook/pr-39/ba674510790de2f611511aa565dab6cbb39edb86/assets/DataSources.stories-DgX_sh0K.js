import{j as r}from"./iframe-DXCJdDjk.js";import{O as b}from"./object-table-CMu3OqPI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-U5fgqAFD.js";import{u as g}from"./useOsdkClient-Cp8dLbkr.js";import"./preload-helper-BCqQIOQj.js";import"./Table-DtU9_wlU.js";import"./index-QhP10yDY.js";import"./Dialog-B0n-hSzS.js";import"./cross-QCx31p9d.js";import"./svgIconContainer-PeTmNDz1.js";import"./useBaseUiId-BVzNdyaI.js";import"./InternalBackdrop-DiEb60oM.js";import"./composite-VErlwM2g.js";import"./index-DBzdfvA2.js";import"./index-DYK3IbAw.js";import"./index-fUnQH0Ng.js";import"./useEventCallback-NMYaIxLD.js";import"./SkeletonBar-BvIRP9GG.js";import"./LoadingCell-ClWgT-D4.js";import"./ColumnConfigDialog-D8f5iZrV.js";import"./DraggableList-LasHmkhR.js";import"./search-DRi_hMxi.js";import"./Input-BTjVOb0y.js";import"./useControlled-BjYAliAA.js";import"./Button-D_PTcbbI.js";import"./small-cross-YgIpoi-c.js";import"./ActionButton-C4OP8Ud5.js";import"./Checkbox-DW4OHk_e.js";import"./useValueChanged-CYU4OOoO.js";import"./CollapsiblePanel-Dz0EiOlC.js";import"./MultiColumnSortDialog-Rdfmlb0r.js";import"./MenuTrigger-DDBS9uJd.js";import"./CompositeItem-DleHBTVF.js";import"./ToolbarRootContext-BXXCNwbt.js";import"./getDisabledMountTransitionStyles-Crvdet31.js";import"./getPseudoElementBounds-BdNIU5Gh.js";import"./chevron-down-Dukj-qIY.js";import"./index-CDTndXsg.js";import"./error-DYQlLdEW.js";import"./BaseCbacBanner-C-jd6aGE.js";import"./makeExternalStore-BQt7qWsh.js";import"./Tooltip-kA7Y0tfn.js";import"./PopoverPopup-Dott-kRm.js";import"./debounce-C2si1I5i.js";import"./tick-oJgzJDQ-.js";import"./DropdownField-D3NdJ4rJ.js";import"./isEqual-CvNiF6Lf.js";import"./withOsdkMetrics-Cl21Vd8T.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
