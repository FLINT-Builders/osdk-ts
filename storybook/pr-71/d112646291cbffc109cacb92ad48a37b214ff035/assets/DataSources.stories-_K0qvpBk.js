import{j as r}from"./iframe-DchqE16O.js";import{O as b}from"./object-table-DcwiNNzU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCzNQJzn.js";import{u as g}from"./useOsdkClient-BBdDY5jb.js";import"./preload-helper-CruhVp8d.js";import"./Table-CGkDzmTC.js";import"./index-C9pVGgAF.js";import"./Dialog-BW9erraE.js";import"./cross-pv8yLqK0.js";import"./svgIconContainer-o0BLlK91.js";import"./useBaseUiId-DavIhVcf.js";import"./InternalBackdrop-LybRFn-n.js";import"./composite-C-jL-lwP.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./index-BoEySXuY.js";import"./useEventCallback-D9yoUN4j.js";import"./SkeletonBar-DukQAzpM.js";import"./LoadingCell-GU17jzUP.js";import"./ColumnConfigDialog-Bl2Ge5kO.js";import"./DraggableList-W8UVm6lY.js";import"./search-BePaI44o.js";import"./Input-DZYpZIAm.js";import"./useControlled-CSem3ovp.js";import"./Button-DG5zH7tS.js";import"./small-cross-8E9tPeRL.js";import"./ActionButton-BJMvEM6L.js";import"./Checkbox-BhXu6eHc.js";import"./useValueChanged-CoQERUSb.js";import"./CollapsiblePanel-BdSEsD6W.js";import"./MultiColumnSortDialog-CHslCwFF.js";import"./MenuTrigger-DWP4xach.js";import"./CompositeItem-B0Rg-Lxm.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./getDisabledMountTransitionStyles-BBnhTzgD.js";import"./getPseudoElementBounds-AEkTlzBM.js";import"./chevron-down-C-JwTnNq.js";import"./index-CyPTDzGy.js";import"./error-BZzNTwNw.js";import"./BaseCbacBanner-BhUML3mx.js";import"./makeExternalStore-DOPJ0IZk.js";import"./Tooltip-DX6d1ahi.js";import"./PopoverPopup-Dp1eQXG2.js";import"./debounce-D_wvzfMc.js";import"./tick-BBgvL453.js";import"./DropdownField-BeWNTIQ_.js";import"./isEqual-DS1T2zLV.js";import"./withOsdkMetrics-B8g_jVC8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
