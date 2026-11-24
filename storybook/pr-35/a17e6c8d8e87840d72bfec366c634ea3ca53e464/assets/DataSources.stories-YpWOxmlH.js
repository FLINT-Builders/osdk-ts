import{j as r}from"./iframe-BD75_EF7.js";import{O as b}from"./object-table-CPkwxh5D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dchg6iJO.js";import{u as g}from"./useOsdkClient-c_BjiQFC.js";import"./preload-helper-C5GixA8k.js";import"./Table-FgVFuUsS.js";import"./index-Cls2haw5.js";import"./Dialog-C-_mpGRm.js";import"./cross-sDHwt2tZ.js";import"./svgIconContainer-Bxdyh2CW.js";import"./useBaseUiId-Se7wVqTf.js";import"./InternalBackdrop-OFlNwMz7.js";import"./composite-yd7firDo.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./index-5f1XfQ5f.js";import"./useEventCallback-Vm032kvl.js";import"./SkeletonBar-DUDeQRgC.js";import"./LoadingCell-BCnm8IEN.js";import"./ColumnConfigDialog-gtPEqXRz.js";import"./DraggableList-OBslZTBK.js";import"./search-Fzzl4G8z.js";import"./Input-Dmpn7F0W.js";import"./useControlled-Bb3Vr0M6.js";import"./Button-DDPidDHF.js";import"./small-cross-D4uWwtpx.js";import"./ActionButton-CEyHVhsP.js";import"./Checkbox-ZqbWzpkB.js";import"./useValueChanged-BDuexEHu.js";import"./CollapsiblePanel-BQzsjVFn.js";import"./MultiColumnSortDialog-LyTWyKq1.js";import"./MenuTrigger-D7Kr2HLn.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./getDisabledMountTransitionStyles-DJ3nnjim.js";import"./getPseudoElementBounds-BMxp26EN.js";import"./chevron-down-34AB4AXv.js";import"./index-BnVPpix6.js";import"./error-BHpOgTkX.js";import"./BaseCbacBanner-iD_njxeV.js";import"./makeExternalStore-C1ym4VUW.js";import"./Tooltip-DhVNQ1yF.js";import"./PopoverPopup-C3w3Aozm.js";import"./debounce-pSE0AIDq.js";import"./tick-G5s6pEHr.js";import"./DropdownField-Bk2ZJyrJ.js";import"./isEqual-eXaYvtIg.js";import"./withOsdkMetrics-DR6keFLB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
