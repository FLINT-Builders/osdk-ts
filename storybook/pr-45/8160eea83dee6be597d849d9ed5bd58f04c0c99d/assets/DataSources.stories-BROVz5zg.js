import{j as r}from"./iframe-xhm5OChx.js";import{O as b}from"./object-table-HQWVkrkb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-IHyLdGt5.js";import{u as g}from"./useOsdkClient-DsZIT7A4.js";import"./preload-helper-BZJxKfIr.js";import"./Table-BH6BTYWA.js";import"./index-Ctr0pjQq.js";import"./Dialog-CYaeLi8E.js";import"./cross-C-3m77s9.js";import"./svgIconContainer-CdfxSdaj.js";import"./useBaseUiId-q04gmumk.js";import"./InternalBackdrop-i2Jv6yd1.js";import"./composite-BhQucQ6w.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./index-DWPvyRFK.js";import"./useEventCallback-DOJI8S3u.js";import"./SkeletonBar-mT-JS0Ox.js";import"./LoadingCell-UzLA8R8y.js";import"./ColumnConfigDialog-B9yJe-N2.js";import"./DraggableList-Bnc84gYz.js";import"./search-Cq1dDtD0.js";import"./Input-wfXCkxXX.js";import"./useControlled-CXKnX_iS.js";import"./Button-Cx_zDl37.js";import"./small-cross-C74z8jlp.js";import"./ActionButton-0NMO3aYn.js";import"./Checkbox-jmx13kFy.js";import"./useValueChanged-CW8UuRxF.js";import"./CollapsiblePanel-BUNoQZyA.js";import"./MultiColumnSortDialog-BVqyEIa1.js";import"./MenuTrigger-o5fhUgJ3.js";import"./CompositeItem-CtXkcFLl.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./getDisabledMountTransitionStyles-B85vDvpF.js";import"./getPseudoElementBounds-DSDAFN2S.js";import"./chevron-down-BsRYwsxE.js";import"./index-DRcQ3DSW.js";import"./error-QOz5QiuQ.js";import"./BaseCbacBanner--jqZ3Clz.js";import"./makeExternalStore-Yu1AfO63.js";import"./Tooltip-DByTNzzG.js";import"./PopoverPopup-2glF1cOR.js";import"./debounce-BL8n_G_Q.js";import"./tick-Bt601WgM.js";import"./DropdownField-PqL2lLdH.js";import"./isEqual-evpreXH6.js";import"./withOsdkMetrics-nVSio52c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
