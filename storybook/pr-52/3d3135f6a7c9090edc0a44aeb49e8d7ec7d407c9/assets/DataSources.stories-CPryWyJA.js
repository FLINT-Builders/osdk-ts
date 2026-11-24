import{j as r}from"./iframe-DzUHN8ca.js";import{O as b}from"./object-table-a42T1fjt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DOdr1Cz-.js";import{u as g}from"./useOsdkClient-y4syjW26.js";import"./preload-helper--9RxGpgt.js";import"./Table-XGjWcrOi.js";import"./index-D6O_ioKN.js";import"./Dialog-BhT1ko5e.js";import"./cross-Ba2yr2aR.js";import"./svgIconContainer-PY62KixA.js";import"./useBaseUiId-sxd6xo0y.js";import"./InternalBackdrop-DkhciH2d.js";import"./composite-BXmDwDE8.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./index-CTEKPH5s.js";import"./useEventCallback-DYoF4AP_.js";import"./SkeletonBar-DWrRSBfJ.js";import"./LoadingCell-BDGcErL7.js";import"./ColumnConfigDialog-D9R8QxpQ.js";import"./DraggableList-B5_EIa_U.js";import"./search-CykjRKOt.js";import"./Input-miTMtrPD.js";import"./useControlled-C2MYeSWY.js";import"./Button-C_9t5m1R.js";import"./small-cross-Du7Izp1r.js";import"./ActionButton-D40edvmP.js";import"./Checkbox-C57PggZb.js";import"./useValueChanged-BW_6iowi.js";import"./CollapsiblePanel-CvKRyI0p.js";import"./MultiColumnSortDialog-C0w9MWJS.js";import"./MenuTrigger-BMQAqfRy.js";import"./CompositeItem-y4Pst_mH.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./getDisabledMountTransitionStyles-aw8w9V1B.js";import"./getPseudoElementBounds-DGlfh4Q1.js";import"./chevron-down-gUZOAhoK.js";import"./index-WtiTKFpP.js";import"./error-BMVJPOE-.js";import"./BaseCbacBanner-D-yoKQBL.js";import"./makeExternalStore-BysZSooj.js";import"./Tooltip-D32WVKHM.js";import"./PopoverPopup-Dv9M1d_z.js";import"./debounce-UzKpvpaD.js";import"./tick-6VSUfxzF.js";import"./DropdownField-v2O8kawS.js";import"./isEqual-Brm8eKHv.js";import"./withOsdkMetrics-DpCE12mV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
