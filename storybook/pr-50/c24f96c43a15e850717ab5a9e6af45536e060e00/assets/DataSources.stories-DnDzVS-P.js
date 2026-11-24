import{j as r}from"./iframe-DGWnG-cP.js";import{O as b}from"./object-table-rQF7zj4h.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-bCv7Z8mt.js";import{u as g}from"./useOsdkClient-D8G8-hzC.js";import"./preload-helper-3cdipQWl.js";import"./Table-569peSy1.js";import"./index-C0zbU9rL.js";import"./Dialog-DsXbvmJy.js";import"./cross-DlI64HlO.js";import"./svgIconContainer-B16Mzywl.js";import"./useBaseUiId-DVxcG4_I.js";import"./InternalBackdrop-BJR0xs8j.js";import"./composite-B33N3UBB.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./index-D_bbN_cd.js";import"./useEventCallback-CxJpG0mK.js";import"./SkeletonBar-DvB39Rdm.js";import"./LoadingCell-BvgZglXZ.js";import"./ColumnConfigDialog-BS73iygW.js";import"./DraggableList-CliT0f_Y.js";import"./search-UMxzoTWH.js";import"./Input-DwaikOPa.js";import"./useControlled-BBmR2WL-.js";import"./Button-BcmhO12Y.js";import"./small-cross-DmdM27Kn.js";import"./ActionButton-WSvr-wI_.js";import"./Checkbox-SQRRgXI2.js";import"./useValueChanged-ChEZciPX.js";import"./CollapsiblePanel-CVt-m52O.js";import"./MultiColumnSortDialog-DPhx5BMU.js";import"./MenuTrigger-BCDlzjR7.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./getDisabledMountTransitionStyles-CyXwlfcm.js";import"./getPseudoElementBounds-B9TtSSG4.js";import"./chevron-down-BFuZIkTt.js";import"./index-CrcNgxS8.js";import"./error-qdaiM9ZH.js";import"./BaseCbacBanner-lZp0UVMg.js";import"./makeExternalStore-WGQ2sL4W.js";import"./Tooltip-WUVYr8N6.js";import"./PopoverPopup-B75UTycU.js";import"./debounce-BI_4kNch.js";import"./tick-DVANyX1P.js";import"./DropdownField-nTKXuw1F.js";import"./isEqual-_zVrSe3d.js";import"./withOsdkMetrics-UcMYR7XC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
