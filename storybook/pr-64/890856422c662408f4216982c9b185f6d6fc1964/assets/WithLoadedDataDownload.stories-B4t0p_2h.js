import{f as b,j as a,r as i}from"./iframe-CXJvlF9f.js";import{O as u}from"./object-table-hPC5NeVU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D4wndH43.js";import"./Table-BoOD-L8G.js";import"./index-DbRhx2FS.js";import"./Dialog-Dvb2pSOZ.js";import"./cross-smvXwA6k.js";import"./svgIconContainer-JnMWnddt.js";import"./useBaseUiId-CS56QWvK.js";import"./InternalBackdrop-CqtSiTpM.js";import"./composite-BN9qtXxc.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./index-Dp2pLEF1.js";import"./useEventCallback-B_1Z_QCH.js";import"./SkeletonBar-C1x9OOkX.js";import"./LoadingCell-CAYnxbGs.js";import"./ColumnConfigDialog-Cky7nE9P.js";import"./DraggableList-Bk7Jl0QM.js";import"./search-B7r0qDmR.js";import"./Input-Bsqv1_ng.js";import"./useControlled-Cpt07hfE.js";import"./Button-CsdSAMDu.js";import"./small-cross-DMWa4kPj.js";import"./ActionButton-CsFrYYGI.js";import"./Checkbox-Bi9_OJUW.js";import"./useValueChanged-Byd_0DcO.js";import"./CollapsiblePanel-CkEuIXiI.js";import"./MultiColumnSortDialog-D3T1AI8W.js";import"./MenuTrigger-DthotZrc.js";import"./CompositeItem-CThXZzFK.js";import"./ToolbarRootContext-CYby2zsu.js";import"./getDisabledMountTransitionStyles-CgmP4-RG.js";import"./getPseudoElementBounds-CgYpcBOV.js";import"./chevron-down-xbAc8Fo2.js";import"./index-Doi1M16Z.js";import"./error-D6bGjg1T.js";import"./BaseCbacBanner-C4rNu7bR.js";import"./makeExternalStore-BjpJhFKl.js";import"./Tooltip-O-viL_pu.js";import"./PopoverPopup-BaZKNv6D.js";import"./debounce-V9eN7pLv.js";import"./useOsdkClient-C_VqVBcI.js";import"./tick-CbWMloSO.js";import"./DropdownField-C_cDwqJ_.js";import"./isEqual-CDTky0Be.js";import"./withOsdkMetrics-C6MxL57R.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
