import{f as b,j as a,r as i}from"./iframe-NQpNXTjy.js";import{O as u}from"./object-table-C2Ty1QZM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CxQobykS.js";import"./Table-ClAaLI_Z.js";import"./index-DPTMEED5.js";import"./Dialog-CwuoTZv0.js";import"./cross-BXjngWjd.js";import"./svgIconContainer-CuTwM0es.js";import"./useBaseUiId-CA0Hx9BI.js";import"./InternalBackdrop-6ARUn0ZZ.js";import"./composite-CckoXbi1.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./index-BFl4Kuhx.js";import"./useEventCallback-CFM9jrEt.js";import"./SkeletonBar-DV2B4sl1.js";import"./LoadingCell-Ch6zqmvo.js";import"./ColumnConfigDialog-CFx_2dbj.js";import"./DraggableList-CokhiAiZ.js";import"./search-5LAMc9Yr.js";import"./Input-8evEI4JC.js";import"./useControlled-Dfym0E7J.js";import"./Button-BW-em3cF.js";import"./small-cross-B3yU2vZR.js";import"./ActionButton-zJRNa7Ux.js";import"./Checkbox-gwz4RQas.js";import"./useValueChanged-CMvtaO4q.js";import"./CollapsiblePanel-BxFWJsn2.js";import"./MultiColumnSortDialog-DEMi2uAt.js";import"./MenuTrigger-CjfBPdjD.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./getDisabledMountTransitionStyles-Ceat6ftx.js";import"./getPseudoElementBounds-DzeDuzLQ.js";import"./chevron-down-CpS1Uhst.js";import"./index-DD2WCnOg.js";import"./error-DtbT1aJ_.js";import"./BaseCbacBanner-CT-a_Rkb.js";import"./makeExternalStore-C9iKzFcW.js";import"./Tooltip-BB-3PmXh.js";import"./PopoverPopup-Bbh9gvxv.js";import"./debounce-D0cuI_rP.js";import"./useOsdkClient-CD2MlnJ0.js";import"./tick-Cgl4xEea.js";import"./DropdownField-CzOL9fzI.js";import"./isEqual-wBsHbSR6.js";import"./withOsdkMetrics-BrRP7bk2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
