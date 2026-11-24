import{f as b,j as a,r as i}from"./iframe-CblSHN44.js";import{O as u}from"./object-table-NrfhXZMw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-NGhizEuB.js";import"./Table-B9S3TsP0.js";import"./index-BQ7zJ7he.js";import"./Dialog-CFJvv8RE.js";import"./cross-BUglgpN5.js";import"./svgIconContainer-CF_MW71M.js";import"./useBaseUiId-B2pTi154.js";import"./InternalBackdrop-CdBXMVDV.js";import"./composite-DJG-zPIc.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./index-BTICbwFi.js";import"./useEventCallback-Gp2djsqb.js";import"./SkeletonBar-tik-rx_X.js";import"./LoadingCell-Br58Xfz1.js";import"./ColumnConfigDialog-CX-XPY4L.js";import"./DraggableList-CF8oysvU.js";import"./search-CXloA44P.js";import"./Input-DBybejkY.js";import"./useControlled-Bg0Zzn-2.js";import"./Button-Wy_PutQU.js";import"./small-cross-Bf8RpEZ1.js";import"./ActionButton-B_RqefyB.js";import"./Checkbox-D7WPqzH4.js";import"./useValueChanged-qSo-FEmP.js";import"./CollapsiblePanel-V6VhVNxj.js";import"./MultiColumnSortDialog-Cu_s8VJS.js";import"./MenuTrigger-CxJXAJFY.js";import"./CompositeItem-DuOAdpQK.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./getDisabledMountTransitionStyles-7TLN3kNJ.js";import"./getPseudoElementBounds-DjDH-yid.js";import"./chevron-down-BysZ9GN-.js";import"./index-CBgrw70i.js";import"./error-DuPAr2Go.js";import"./BaseCbacBanner-O8pa1Cnr.js";import"./makeExternalStore-DbO86LPP.js";import"./Tooltip-Bd9UBwBY.js";import"./PopoverPopup-BOyF1dvC.js";import"./debounce-DScc-am-.js";import"./useOsdkClient-DvNhOVDU.js";import"./tick-DWIXpsmv.js";import"./DropdownField-BX_lVSWT.js";import"./isEqual-ZjIkYTio.js";import"./withOsdkMetrics-CRV0LY7d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
