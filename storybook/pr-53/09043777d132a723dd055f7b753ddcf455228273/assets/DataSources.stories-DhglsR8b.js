import{j as r}from"./iframe-C4244Bm_.js";import{O as b}from"./object-table-CWI95tL9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cba_y7QS.js";import{u as g}from"./useOsdkClient-B6lLUCBK.js";import"./preload-helper-Ci98jyni.js";import"./Table-DLA6JNP_.js";import"./index-ClH59eky.js";import"./Dialog-rWA87_5x.js";import"./cross-Ndayjde5.js";import"./svgIconContainer-C9qKBg5g.js";import"./useBaseUiId-X9XCdkpw.js";import"./InternalBackdrop-BgtvNRvm.js";import"./composite-Ckn5xSHc.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./index-Bi8RWIrI.js";import"./useEventCallback-DjDRvhxl.js";import"./SkeletonBar-1wmzXisw.js";import"./LoadingCell-JMXuLf4_.js";import"./ColumnConfigDialog-D7iHn2dh.js";import"./DraggableList-D93qNxY3.js";import"./search-CyQQCVme.js";import"./Input-DLoAGHyA.js";import"./useControlled-zrsS7sbr.js";import"./Button-DdPOxW32.js";import"./small-cross-BKLGSFz1.js";import"./ActionButton-DERxyeDa.js";import"./Checkbox-FK2fRdAN.js";import"./useValueChanged-CnEeirqz.js";import"./CollapsiblePanel-B8EFIibH.js";import"./MultiColumnSortDialog-BosRxKkz.js";import"./MenuTrigger-BTCInV-G.js";import"./CompositeItem-BHbjzdkB.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./getDisabledMountTransitionStyles-CCxWABNx.js";import"./getPseudoElementBounds-Cpfu0jjM.js";import"./chevron-down-BL39hyz4.js";import"./index-Dhn7ITQm.js";import"./error-_egmS3m2.js";import"./BaseCbacBanner-CgTjAuLA.js";import"./makeExternalStore-D1LNnd-p.js";import"./Tooltip-Btlg-yIO.js";import"./PopoverPopup-Bw-hztAp.js";import"./debounce-C-dm4-uQ.js";import"./tick-D4xU7MKe.js";import"./DropdownField-BLtmL1tB.js";import"./isEqual-BO6QlNLr.js";import"./withOsdkMetrics-GAx3Og7v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
