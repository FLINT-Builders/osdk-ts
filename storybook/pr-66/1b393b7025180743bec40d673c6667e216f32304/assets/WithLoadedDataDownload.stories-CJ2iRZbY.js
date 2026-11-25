import{f as b,j as a,r as i}from"./iframe-DVXjYepe.js";import{O as u}from"./object-table-DqpNm8Hb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoQZ9wQO.js";import"./Table-CrAztDvv.js";import"./index-xEG3qOed.js";import"./Dialog-CrjAt9qc.js";import"./cross-B8UbpGAg.js";import"./svgIconContainer-BJPtXOwn.js";import"./useBaseUiId--5oKpwvu.js";import"./InternalBackdrop-inXTS0yx.js";import"./composite-D8RKaTKg.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./index-CSeYDT8l.js";import"./useEventCallback-DkAeY7hG.js";import"./SkeletonBar-SOwc_Qrs.js";import"./LoadingCell-p7qL3SN_.js";import"./ColumnConfigDialog-oDYR3l_f.js";import"./DraggableList-CjcyPHW-.js";import"./search-B-9-6Ofx.js";import"./Input-BN6UqcCj.js";import"./useControlled-urWeze7M.js";import"./Button-CMf4Lntc.js";import"./small-cross-CXxGQkOn.js";import"./ActionButton-FeoD3QJR.js";import"./Checkbox-DWqsnJ9A.js";import"./useValueChanged-DQdsowWS.js";import"./CollapsiblePanel-BtSjatWQ.js";import"./MultiColumnSortDialog-sBOZ2Kl1.js";import"./MenuTrigger-D_kSWag0.js";import"./CompositeItem-Bmf0StTl.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./getDisabledMountTransitionStyles-C9YsekIJ.js";import"./getPseudoElementBounds-DaAwz07x.js";import"./chevron-down-Bzvk1BIc.js";import"./index-BOgvpjI5.js";import"./error-DfVU-Ijw.js";import"./BaseCbacBanner-Qy2snOko.js";import"./makeExternalStore-BgZoDepZ.js";import"./Tooltip-CJ_e6i_k.js";import"./PopoverPopup-um6wJ3Q9.js";import"./debounce-BIK5BkHx.js";import"./useOsdkClient-BXsdu0M4.js";import"./tick-DfRCIBAT.js";import"./DropdownField-v3RWXYr3.js";import"./isEqual-w6xswxHo.js";import"./withOsdkMetrics-DmcVbwBr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
