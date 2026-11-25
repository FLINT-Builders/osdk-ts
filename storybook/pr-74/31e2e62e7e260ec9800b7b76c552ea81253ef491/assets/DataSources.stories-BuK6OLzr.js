import{j as r}from"./iframe-COTYg0i4.js";import{O as b}from"./object-table-B1lu4fBP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9-fJ1LO.js";import{u as g}from"./useOsdkClient-Crr6_6H9.js";import"./preload-helper-BfUBPZQv.js";import"./Table-ZCwk7fhG.js";import"./index-DEWKwQ6D.js";import"./Dialog-DLvNEGJL.js";import"./cross-pC4h9ZyI.js";import"./svgIconContainer-DSLsCdLH.js";import"./useBaseUiId-B73nbOFb.js";import"./InternalBackdrop-B63HsuZ1.js";import"./composite-DLNSROKR.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./index-Pg3lOjt6.js";import"./useEventCallback-CiBIzJgi.js";import"./SkeletonBar-BZj2rBym.js";import"./LoadingCell-Ca5ZGjYw.js";import"./ColumnConfigDialog-B5wcyeXe.js";import"./DraggableList-Bs0zZt68.js";import"./search-Di0PIeOa.js";import"./Input-DNkGR0ru.js";import"./useControlled-BH9DAJiP.js";import"./Button-BBJ0BrTf.js";import"./small-cross-BeoxIJGH.js";import"./ActionButton-CW1Oc_Lq.js";import"./Checkbox-C0rTX60W.js";import"./useValueChanged-WywSbPil.js";import"./CollapsiblePanel-6UtNAlT1.js";import"./MultiColumnSortDialog-DHzW6erw.js";import"./MenuTrigger-Bl15Mqgy.js";import"./CompositeItem-D4sOZv8D.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./getDisabledMountTransitionStyles-CoNaBqL_.js";import"./getPseudoElementBounds-VlWfte-L.js";import"./chevron-down-DHzInOjp.js";import"./index-BaMA_XVs.js";import"./error-DlWRXjMl.js";import"./BaseCbacBanner-CRZYCJ0Z.js";import"./makeExternalStore-DrnQQ2FN.js";import"./Tooltip-g0ERy23q.js";import"./PopoverPopup-liRqNt55.js";import"./debounce-CRgNZ5We.js";import"./tick-C2nrRSUw.js";import"./DropdownField-CbKzwlXJ.js";import"./isEqual-CQOK5UhL.js";import"./withOsdkMetrics-0S6rxLM8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
