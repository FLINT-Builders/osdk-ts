import{j as r}from"./iframe-9Qc56ENr.js";import{O as b}from"./object-table-VWvjSsNP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1DVgk97P.js";import{u as g}from"./useOsdkClient-9Nrv4s3L.js";import"./preload-helper-DyAcE4yv.js";import"./Table-DVjzdimX.js";import"./index-OROGqtQ6.js";import"./Dialog-DDaqFSdl.js";import"./cross-BiOFXjvO.js";import"./svgIconContainer-8v5BjuYc.js";import"./useBaseUiId-FwL7BYPy.js";import"./InternalBackdrop-CUc8C_zH.js";import"./composite-DhCF3AFw.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./index-CJPP9-f3.js";import"./useEventCallback-DIxqN6fJ.js";import"./SkeletonBar-C702hny6.js";import"./LoadingCell-DS672NFP.js";import"./ColumnConfigDialog-CA1dYBJP.js";import"./DraggableList-B1F4pXEu.js";import"./search-cLeveEh6.js";import"./Input-BNo-_u5D.js";import"./useControlled-B_qIqTVD.js";import"./Button-D4UJHZ4Q.js";import"./small-cross-DTTV9D1S.js";import"./ActionButton-DmbgcWXC.js";import"./Checkbox-B2rYdyjP.js";import"./useValueChanged-MCZoLrLU.js";import"./CollapsiblePanel-CFuv4DzY.js";import"./MultiColumnSortDialog-eWu75AP5.js";import"./MenuTrigger-CSjAvRyJ.js";import"./CompositeItem-BURGIqnl.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./getDisabledMountTransitionStyles-BW75AxGn.js";import"./getPseudoElementBounds-DOKmjR3u.js";import"./chevron-down-DTg_s13_.js";import"./index-DZAIQf61.js";import"./error-BiGuleu5.js";import"./BaseCbacBanner-UxcbrKA6.js";import"./makeExternalStore-DqYHgnt1.js";import"./Tooltip-CDE1Wq1X.js";import"./PopoverPopup-DCCXAG8S.js";import"./debounce-yYyDTVJY.js";import"./tick-ZseZQiB-.js";import"./DropdownField-yTdkTLuM.js";import"./isEqual-DKuEVMgA.js";import"./withOsdkMetrics-HzozZnUd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
