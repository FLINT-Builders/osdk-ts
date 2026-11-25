import{j as r}from"./iframe-evcKlg9V.js";import{O as b}from"./object-table-SUOIkIIu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDPnzZ-a.js";import{u as g}from"./useOsdkClient-BFKEpEYK.js";import"./preload-helper-WHPhz6sD.js";import"./Table-q41Sb_Mi.js";import"./index-BHwj9ia0.js";import"./Dialog-D-xLZC1d.js";import"./cross-BbmJFYQF.js";import"./svgIconContainer-DOh5rP9T.js";import"./useBaseUiId-DdAriUni.js";import"./InternalBackdrop-BBabxNjC.js";import"./composite-BltyBfwn.js";import"./index-fwET-1_r.js";import"./index-Cyl-_-yn.js";import"./index-O4DHWyqo.js";import"./useEventCallback-_R1SuQ--.js";import"./SkeletonBar-BdyajZcd.js";import"./LoadingCell-DysHkDtt.js";import"./ColumnConfigDialog-C9b7wqvX.js";import"./DraggableList-oXDZY61M.js";import"./search-DhcR5bm1.js";import"./Input-iRDe1k4_.js";import"./useControlled-DXtgTA3C.js";import"./Button-Bz5serEd.js";import"./small-cross-B30QXwxO.js";import"./ActionButton-lCE-fGOM.js";import"./Checkbox-CXix4bmY.js";import"./useValueChanged-DTq6En14.js";import"./CollapsiblePanel-DJfTc0NL.js";import"./MultiColumnSortDialog-BDGoSocz.js";import"./MenuTrigger-DrJfkCqI.js";import"./CompositeItem-Cm5MVItV.js";import"./ToolbarRootContext-RfiWxa4c.js";import"./getDisabledMountTransitionStyles-BwnYd9Fi.js";import"./getPseudoElementBounds-BzQUzGR6.js";import"./chevron-down-BvJqIX5i.js";import"./index-BU0mDmBx.js";import"./error-BDn6-GLZ.js";import"./BaseCbacBanner-Dyg5JJV_.js";import"./makeExternalStore-DSan-vOh.js";import"./Tooltip-DfpJpJwe.js";import"./PopoverPopup-CUAmX7eQ.js";import"./debounce-DziosmGC.js";import"./tick-aNfHfk5E.js";import"./DropdownField-BhbpYF1Z.js";import"./isEqual-D7GRqXwZ.js";import"./withOsdkMetrics-BriAHFRe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
