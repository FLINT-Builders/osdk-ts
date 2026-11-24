import{f as b,j as a,r as i}from"./iframe-Bf8iAqL7.js";import{O as u}from"./object-table-CtvztlQ4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-A1AS_NiL.js";import"./Table-BlcY20YB.js";import"./index-Db0mdORg.js";import"./Dialog-BbuGk_ef.js";import"./cross-DO1QLnzH.js";import"./svgIconContainer-D52qXfX5.js";import"./useBaseUiId-C3S3f6WK.js";import"./InternalBackdrop-BlMO4Ova.js";import"./composite-DIFH8mgU.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./index-C0BMu-E0.js";import"./useEventCallback-CVkQOs3D.js";import"./SkeletonBar-C8ox7Pyn.js";import"./LoadingCell-DBPZu4Hz.js";import"./ColumnConfigDialog-CE5V5I8x.js";import"./DraggableList-bepDk-q0.js";import"./search-k-BDZpAM.js";import"./Input-3S863M3T.js";import"./useControlled-BxkhcEK2.js";import"./Button-H641EagL.js";import"./small-cross-BmVVnuZH.js";import"./ActionButton-CI5S3k3v.js";import"./Checkbox-CIK4xHnB.js";import"./useValueChanged-B4RhT_mT.js";import"./CollapsiblePanel-BR9JLyXV.js";import"./MultiColumnSortDialog-CQv6RXwg.js";import"./MenuTrigger-CFCoJv4p.js";import"./CompositeItem-C29Fnmef.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./getDisabledMountTransitionStyles-BkOgHLaz.js";import"./getPseudoElementBounds-BjiN3SJE.js";import"./chevron-down-BF98-CIj.js";import"./index-CJ290pxf.js";import"./error-DTUZUWgs.js";import"./BaseCbacBanner-ibJi_Mqm.js";import"./makeExternalStore-BeW1g1b1.js";import"./Tooltip-D1ph3_EU.js";import"./PopoverPopup-JpuFEWOE.js";import"./debounce-cgA55fD7.js";import"./useOsdkClient-Cvr99OkN.js";import"./tick-BLri3Pi1.js";import"./DropdownField-RxrVsgU9.js";import"./isEqual-DUkrTRcX.js";import"./withOsdkMetrics-BNJYvdSI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
