import{f as b,j as a,r as i}from"./iframe-BYlTxwz3.js";import{O as u}from"./object-table-B_gEyXcz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dkt_E4uP.js";import"./Table-CBByl1CU.js";import"./index-Cx2xXvCr.js";import"./Dialog-D6HbhEZo.js";import"./cross-C7CDDNJi.js";import"./svgIconContainer-CCHa_D4L.js";import"./useBaseUiId-CHVkZxqH.js";import"./InternalBackdrop-BnI_3_S0.js";import"./composite-Oihes5Z3.js";import"./index-BLjbxIz_.js";import"./index-BCCUn5eT.js";import"./index-B-CUWwrE.js";import"./useEventCallback-6aIfP3km.js";import"./SkeletonBar-Csj_wsFv.js";import"./LoadingCell-DQ0vwGsu.js";import"./ColumnConfigDialog-DggvHg5b.js";import"./DraggableList-B-WThPOH.js";import"./search-CfzUYg2F.js";import"./Input-D3288P-o.js";import"./useControlled-2dwLF0eF.js";import"./Button-Dplh-cKa.js";import"./small-cross-aeJJ7SSq.js";import"./ActionButton-C_0V6gM3.js";import"./Checkbox-CiqviK43.js";import"./useValueChanged-vNkrsn5_.js";import"./CollapsiblePanel-yPU4El-7.js";import"./MultiColumnSortDialog-BrlL2EkL.js";import"./MenuTrigger-BN1Z5olc.js";import"./CompositeItem-Bu4ubHAW.js";import"./ToolbarRootContext-oJ3Dqb0I.js";import"./getDisabledMountTransitionStyles-BV5FL582.js";import"./getPseudoElementBounds-DoGGqUvJ.js";import"./chevron-down-DLOLLqcE.js";import"./index-C8P2LxHs.js";import"./error-Ox3QZuhk.js";import"./BaseCbacBanner-BVaKmTmi.js";import"./makeExternalStore-DAxSMl-f.js";import"./Tooltip-Cj8Rzvni.js";import"./PopoverPopup-BlhfYCCJ.js";import"./debounce-C0op11OR.js";import"./useOsdkClient-Cu-1fp9t.js";import"./tick--pYF85S_.js";import"./DropdownField-D7WS7Sjf.js";import"./isEqual-CxBRAjWE.js";import"./withOsdkMetrics-C0BX98Nf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
