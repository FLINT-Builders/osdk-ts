import{j as r}from"./iframe-Bp1PfZ7l.js";import{O as b}from"./object-table-fzrkZXkR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C36P-j15.js";import{u as g}from"./useOsdkClient-BzwwsB1i.js";import"./preload-helper-BYGb1pKj.js";import"./Table-DzITeJpu.js";import"./index-DadzeF-d.js";import"./Dialog-CkumyFlj.js";import"./cross-DFx0C0Nt.js";import"./svgIconContainer-OMPXv01U.js";import"./useBaseUiId-XqSzBNHS.js";import"./InternalBackdrop-DFmByEwF.js";import"./composite-DLzwtS5G.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./index-DLVfdXgo.js";import"./useEventCallback-BN9hpBvA.js";import"./SkeletonBar-Cm22PUkZ.js";import"./LoadingCell-Df41ZT7m.js";import"./ColumnConfigDialog-C8SNW7ic.js";import"./DraggableList-EFyF-XBF.js";import"./search-BsLkibR5.js";import"./Input-B12oUm4E.js";import"./useControlled-C8ihAa2k.js";import"./Button-Bt-2SXbx.js";import"./small-cross-C8-5dUWe.js";import"./ActionButton-qLC49eRN.js";import"./Checkbox-3_uuu8Vo.js";import"./useValueChanged-okYo1yvb.js";import"./CollapsiblePanel-B-j7ee1F.js";import"./MultiColumnSortDialog-5t2TiADZ.js";import"./MenuTrigger-DCwY8LEj.js";import"./CompositeItem-CblUCnkP.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./getDisabledMountTransitionStyles-CqLHy__b.js";import"./getPseudoElementBounds-Mutkij03.js";import"./chevron-down-BV-xsSzp.js";import"./index-Dw1tJRkX.js";import"./error-CO92q5PK.js";import"./BaseCbacBanner-C0tqpc35.js";import"./makeExternalStore-B5XHk3Oq.js";import"./Tooltip-CLl9UtD5.js";import"./PopoverPopup-Cg3oU8gt.js";import"./debounce-D9UeryKI.js";import"./tick-O_f_a0G5.js";import"./DropdownField-DSF1PkvW.js";import"./isEqual-DvlOzGt9.js";import"./withOsdkMetrics-DXXjNZYb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
