import{j as r}from"./iframe-Ci4kbbjH.js";import{O as b}from"./object-table-CMpsxPRK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQjQl7b7.js";import{u as g}from"./useOsdkClient-BuBxCDzw.js";import"./preload-helper-DNzzp09Q.js";import"./Table-BZwMeVfc.js";import"./index-BzmIzG5f.js";import"./Dialog-Dlc2e5wE.js";import"./cross-Baj2Wcx8.js";import"./svgIconContainer-DoVy9nda.js";import"./useBaseUiId-yqmrIV5M.js";import"./InternalBackdrop-BOeYS53O.js";import"./composite-CkTQf-5C.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./index-D8Mu-PFN.js";import"./useEventCallback-BVSpbYHx.js";import"./SkeletonBar-B-AUQL2s.js";import"./LoadingCell-4knZ9c1y.js";import"./ColumnConfigDialog-CC_OP8zR.js";import"./DraggableList-CydMIqIu.js";import"./search-kOpaiDxH.js";import"./Input-DEpJNDRU.js";import"./useControlled-CyWOUz9h.js";import"./Button-DGtRliq1.js";import"./small-cross-CQm56ECa.js";import"./ActionButton-Cw_Fc-zI.js";import"./Checkbox-n8W4S_Az.js";import"./useValueChanged-DxNmdQBj.js";import"./CollapsiblePanel-6Zz-7gJ1.js";import"./MultiColumnSortDialog-DrfzYAq2.js";import"./MenuTrigger-D62nUIK8.js";import"./CompositeItem-Cku2i2Hz.js";import"./ToolbarRootContext-rMCKHck4.js";import"./getDisabledMountTransitionStyles-DhKtaVzl.js";import"./getPseudoElementBounds-m0MFy2PT.js";import"./chevron-down-HIxicj7V.js";import"./index-DHl6CAnB.js";import"./error-BDWAkWkg.js";import"./BaseCbacBanner-DEkDMCDW.js";import"./makeExternalStore-DM45UVPU.js";import"./Tooltip-RdLhjfP3.js";import"./PopoverPopup-DkzyhZf2.js";import"./debounce-BxJnFfrY.js";import"./tick-Boowirwm.js";import"./DropdownField-DDcc5zir.js";import"./isEqual-CHleId0a.js";import"./withOsdkMetrics-5lZ7fCNU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
