import{f as b,j as a,r as i}from"./iframe-CEEl8rhe.js";import{O as u}from"./object-table-BRYEavK4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BNeS4N_d.js";import"./Table-CH1HBcKP.js";import"./index-D3BMxXWO.js";import"./Dialog-CExnZc08.js";import"./cross-CC3rT2Cs.js";import"./svgIconContainer-BoK1M0P8.js";import"./useBaseUiId-Bj988QM0.js";import"./InternalBackdrop-BmSff-mp.js";import"./composite-DpkIpZoZ.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./index-D_PVV5Fd.js";import"./useEventCallback-C5vlArFZ.js";import"./SkeletonBar-p0RmfKN_.js";import"./LoadingCell-CCkUjs7m.js";import"./ColumnConfigDialog-Ckp9UGz4.js";import"./DraggableList-mCtVzcc0.js";import"./search-BpfeUnuY.js";import"./Input-BDwKsEY1.js";import"./useControlled-B70mnLby.js";import"./Button-YcHEvqMa.js";import"./small-cross-BwPiA_ZV.js";import"./ActionButton-jLAD1Qmw.js";import"./Checkbox-D8YHrR9c.js";import"./useValueChanged-C-fNJX81.js";import"./CollapsiblePanel-C1Fn1_Kr.js";import"./MultiColumnSortDialog-_TG7ke8e.js";import"./MenuTrigger-ncb26Pw2.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./getDisabledMountTransitionStyles-xN5v6pd8.js";import"./getPseudoElementBounds-Qyou3wPJ.js";import"./chevron-down-BGwNr8cZ.js";import"./index-BCtfyswk.js";import"./error-nlz9dA9p.js";import"./BaseCbacBanner-DdFaRu3i.js";import"./makeExternalStore-hwf9V02L.js";import"./Tooltip-Bwai2e_Y.js";import"./PopoverPopup-T8H6T0aO.js";import"./debounce-CHYKXz2Y.js";import"./useOsdkClient-_z2zV0V9.js";import"./tick-CRV1-A87.js";import"./DropdownField-Ba7JB-vZ.js";import"./isEqual-c3KaD12f.js";import"./withOsdkMetrics-DLFNJZK7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
