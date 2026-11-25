import{j as r}from"./iframe-DowOz9LG.js";import{O as b}from"./object-table-DNxNGDFc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDdn7ZHu.js";import{u as g}from"./useOsdkClient-D0xHO4NP.js";import"./preload-helper-DLch6InM.js";import"./Table-CL_1Gnac.js";import"./index-D3uCKFRQ.js";import"./Dialog-B2DiGny7.js";import"./cross-XY9bNztf.js";import"./svgIconContainer-CjMFf37k.js";import"./useBaseUiId-DLP_J0js.js";import"./InternalBackdrop-DWjSsQXw.js";import"./composite-BqSVn4pm.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./index-C6QSp11H.js";import"./useEventCallback-DZWgYqJ2.js";import"./SkeletonBar-Lecq5ISR.js";import"./LoadingCell-Ho22PisO.js";import"./ColumnConfigDialog-DIcz9ho9.js";import"./DraggableList-C2PpvmOK.js";import"./search-Dq7gXSV-.js";import"./Input-EdSRgRoE.js";import"./useControlled-LhJY_NAc.js";import"./Button-BsxP5OVh.js";import"./small-cross-CBbvwGg2.js";import"./ActionButton-BC7KqzhK.js";import"./Checkbox-7yvYJnnp.js";import"./useValueChanged-DmWHkYMC.js";import"./CollapsiblePanel-B3nL6cUm.js";import"./MultiColumnSortDialog-CLdJ3cH4.js";import"./MenuTrigger-E3XbwEgZ.js";import"./CompositeItem-qaontuDZ.js";import"./ToolbarRootContext-tzl66m83.js";import"./getDisabledMountTransitionStyles-QmcvFDJq.js";import"./getPseudoElementBounds-D1yJG2tC.js";import"./chevron-down-p34WEL5t.js";import"./index-UMBJij_W.js";import"./error-CvT_Kc0h.js";import"./BaseCbacBanner-C2yHATAt.js";import"./makeExternalStore-whfuUtu3.js";import"./Tooltip-Bzrc7BTQ.js";import"./PopoverPopup-Bh5tu-Zh.js";import"./debounce-8B2PZIEg.js";import"./tick-rTdqC_yK.js";import"./DropdownField-P6sq-h2_.js";import"./isEqual-BtyoY62f.js";import"./withOsdkMetrics-CwlXQjw2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
