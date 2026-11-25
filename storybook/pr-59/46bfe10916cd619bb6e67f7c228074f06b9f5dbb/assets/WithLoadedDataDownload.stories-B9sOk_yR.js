import{f as b,j as a,r as i}from"./iframe-DSQ_OwRS.js";import{O as u}from"./object-table-BzCVcJkW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CLqqVN7k.js";import"./Table-DODCuAAE.js";import"./index-B0q23UFt.js";import"./Dialog-CzPXSI5J.js";import"./cross-BpS57vew.js";import"./svgIconContainer-BcPAhmn-.js";import"./useBaseUiId-C6Wr8zKH.js";import"./InternalBackdrop-DRNACM8M.js";import"./composite-Dp3eVNnJ.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./index-7A6i3Ro6.js";import"./useEventCallback-BBYu6w4b.js";import"./SkeletonBar-5O6gfTS2.js";import"./LoadingCell-CocsZB85.js";import"./ColumnConfigDialog-D9IrT-DM.js";import"./DraggableList-gh0OXUxU.js";import"./search-DlOSHXy8.js";import"./Input-BzO2QOS7.js";import"./useControlled-C2eTizRr.js";import"./Button-ChRZXQ3B.js";import"./small-cross-DxTQPK98.js";import"./ActionButton-CL0gqC-W.js";import"./Checkbox-u1nZIEbD.js";import"./useValueChanged-BbBFOoz_.js";import"./CollapsiblePanel-C00H4WLv.js";import"./MultiColumnSortDialog-DPAqYct5.js";import"./MenuTrigger-CcQ9MIGZ.js";import"./CompositeItem-GcMwnNE0.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./getDisabledMountTransitionStyles-DEdqAy31.js";import"./getPseudoElementBounds-1CB_OMbt.js";import"./chevron-down-Cro00f4s.js";import"./index-DXTnQeDh.js";import"./error-BA2QLyzo.js";import"./BaseCbacBanner-DMGjlz4g.js";import"./makeExternalStore-CjWUDfwP.js";import"./Tooltip-80MHgkyW.js";import"./PopoverPopup-2vcuvUQ8.js";import"./debounce-BhztiTp3.js";import"./useOsdkClient-C-vOeiVW.js";import"./tick-B_ML4ack.js";import"./DropdownField-B3YeiUlT.js";import"./isEqual-CfYpveDj.js";import"./withOsdkMetrics-DCENCPrl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};
