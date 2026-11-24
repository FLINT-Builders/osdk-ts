import{j as r}from"./iframe-DbWO1H6Q.js";import{O as b}from"./object-table-AYkmPKtB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHjhKeOt.js";import{u as g}from"./useOsdkClient-eSWHemU6.js";import"./preload-helper-BJFhMS3h.js";import"./Table-Dl-ajeLA.js";import"./index-8DlTsQ0i.js";import"./Dialog-CTqlBN0B.js";import"./cross-BDoBIXl6.js";import"./svgIconContainer-jTmyv8Oj.js";import"./useBaseUiId-D72Xv_RL.js";import"./InternalBackdrop-Dvh_wZ0g.js";import"./composite-EggcNtT2.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./index-Dh9Wtqsz.js";import"./useEventCallback-IzVRxhrH.js";import"./SkeletonBar-Dp36ivGE.js";import"./LoadingCell-06xMyvS8.js";import"./ColumnConfigDialog-LCtjn8XO.js";import"./DraggableList-BJ2ozh5L.js";import"./search-zgN6AfWU.js";import"./Input-DsJzclhr.js";import"./useControlled-Dvfgqsbh.js";import"./Button-AMxsa0l_.js";import"./small-cross-di1YPofV.js";import"./ActionButton-CF_WcN8f.js";import"./Checkbox-DsdSVPMb.js";import"./useValueChanged-BV-Eaapg.js";import"./CollapsiblePanel-D1EuzeA-.js";import"./MultiColumnSortDialog-BGVR93S7.js";import"./MenuTrigger-Di6xZdsh.js";import"./CompositeItem-DXkoNi3p.js";import"./ToolbarRootContext-BAe250S1.js";import"./getDisabledMountTransitionStyles-BZMRoe-H.js";import"./getPseudoElementBounds-CjiqI0zD.js";import"./chevron-down-tGzF8KYs.js";import"./index-BHrDqoFX.js";import"./error-7sAzP_x2.js";import"./BaseCbacBanner-BeFI_DqK.js";import"./makeExternalStore-Ce1bwc1S.js";import"./Tooltip-z-ifkWQQ.js";import"./PopoverPopup-n8CSHUcF.js";import"./debounce-BwGdN9pQ.js";import"./tick-B765rRXZ.js";import"./DropdownField-Beb9lqY7.js";import"./isEqual-Lo3Z1Czc.js";import"./withOsdkMetrics-Dlfz6qvi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
