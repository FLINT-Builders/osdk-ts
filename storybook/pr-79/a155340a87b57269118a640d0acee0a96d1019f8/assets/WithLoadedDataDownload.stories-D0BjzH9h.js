import{f as b,j as a,r as i}from"./iframe-D2N6QAO4.js";import{O as u}from"./object-table-lxDeLJoa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0G0Ely3.js";import"./Table-C19ILbqk.js";import"./index-C6mUO3LG.js";import"./Dialog-B0kvSLe8.js";import"./cross-33P9gQ16.js";import"./svgIconContainer-CNArd5Vw.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./InternalBackdrop-BC53QrF9.js";import"./composite-Csdn23VF.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./index-BuEE91VM.js";import"./useEventCallback-SR7xrDYW.js";import"./SkeletonBar-DfIaa6sS.js";import"./LoadingCell-DctXHB2C.js";import"./ColumnConfigDialog-khpK5TXG.js";import"./DraggableList-DIXakBW0.js";import"./search-C7B0jIv9.js";import"./Input-DOJuMFjU.js";import"./useControlled-BXWTj0go.js";import"./Button-g15W-Nz5.js";import"./small-cross-D3BxVY3q.js";import"./ActionButton-DdZRctiY.js";import"./Checkbox-BsFto3s4.js";import"./useValueChanged-D2aWPQQV.js";import"./CollapsiblePanel-BVQv8eQV.js";import"./MultiColumnSortDialog-CDDnCRAh.js";import"./MenuTrigger-FLFe0gWC.js";import"./CompositeItem-DgrMig66.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./getDisabledMountTransitionStyles-BB_Hcyjk.js";import"./getPseudoElementBounds-Dunwefln.js";import"./chevron-down-BAjPYhxH.js";import"./index-BaO-kZLo.js";import"./error-DOYfumOT.js";import"./BaseCbacBanner-BnfEs82n.js";import"./makeExternalStore-B1G3DsJO.js";import"./Tooltip-XE7UgRlK.js";import"./PopoverPopup-BhVSGBKw.js";import"./debounce-BkOPavrs.js";import"./useOsdkClient-BdxxenZf.js";import"./tick-BYuKeJ0M.js";import"./DropdownField-dwtwvXXB.js";import"./isEqual-CfeS8fMi.js";import"./withOsdkMetrics-gaJzJVhq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
