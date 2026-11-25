import{j as r}from"./iframe-rKl8dl72.js";import{O as b}from"./object-table-Z_cJ_BSj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-F9zzJiCN.js";import{u as g}from"./useOsdkClient-1eh8dYaj.js";import"./preload-helper--BImneDc.js";import"./Table-BW09YW4o.js";import"./index-DPEXUCgg.js";import"./Dialog-C3B3LjHj.js";import"./cross-a0o186aD.js";import"./svgIconContainer-_-NrNaam.js";import"./useBaseUiId-BMGLO8NS.js";import"./InternalBackdrop-BLFJ3wvQ.js";import"./composite-DHl1pO1N.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./index-DF5p8sUY.js";import"./useEventCallback-CFBK0YJz.js";import"./SkeletonBar-DPocxRng.js";import"./LoadingCell-DaOOQr3j.js";import"./ColumnConfigDialog-gzvWyMf9.js";import"./DraggableList-BNn-fQty.js";import"./search-jvK2oU2l.js";import"./Input-CJ84JYl8.js";import"./useControlled-CmATnzdQ.js";import"./Button-CxkErfOv.js";import"./small-cross-BoqwdjyD.js";import"./ActionButton-DoscJM3L.js";import"./Checkbox-Hq0quoQ-.js";import"./useValueChanged-CEfl-o9u.js";import"./CollapsiblePanel-DlSFFH-3.js";import"./MultiColumnSortDialog-DWgZFh55.js";import"./MenuTrigger-B3dSJo9E.js";import"./CompositeItem-CkfIEwxY.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./getDisabledMountTransitionStyles-DpfNJcDT.js";import"./getPseudoElementBounds-zc0WMmOl.js";import"./chevron-down-BNJHEUQl.js";import"./index-BjIgEO6K.js";import"./error-Cgom9DOc.js";import"./BaseCbacBanner-D3Dni7oh.js";import"./makeExternalStore-DsJbcG05.js";import"./Tooltip-lR7hYztD.js";import"./PopoverPopup-BF7KHn70.js";import"./debounce-hqGPRRGb.js";import"./tick-RGW3NTLE.js";import"./DropdownField-i4PyW7Yk.js";import"./isEqual-fbTxlLCA.js";import"./withOsdkMetrics-CO0kjJn7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
