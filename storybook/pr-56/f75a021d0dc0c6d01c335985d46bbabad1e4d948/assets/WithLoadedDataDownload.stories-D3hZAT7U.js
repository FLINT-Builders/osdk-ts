import{f as b,j as a,r as i}from"./iframe-SC996r8Q.js";import{O as u}from"./object-table-DOdp5ZjA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-4MonG5NX.js";import"./Table-BHqFADw2.js";import"./index-wDhWF-Jn.js";import"./Dialog-Bjl7oJOt.js";import"./cross-CSzOPxz_.js";import"./svgIconContainer-B-5c0m9a.js";import"./useBaseUiId-BGvjsW3d.js";import"./InternalBackdrop-DNC5MyZD.js";import"./composite-Gzk6HQ8U.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./index-85g-pXui.js";import"./useEventCallback-CgwfU7lc.js";import"./SkeletonBar-pBY25qw4.js";import"./LoadingCell-BHzQ8MOB.js";import"./ColumnConfigDialog-yFcbmUS6.js";import"./DraggableList-B0Mn8gGq.js";import"./search-DMkfs-8L.js";import"./Input-CJVpnIyi.js";import"./useControlled-BSXRDWWj.js";import"./Button-4P3mfFZX.js";import"./small-cross-HUX1_LBw.js";import"./ActionButton-ByIO7PT5.js";import"./Checkbox-DphhRBj3.js";import"./useValueChanged-CCo4wtuS.js";import"./CollapsiblePanel-p7nu56Bn.js";import"./MultiColumnSortDialog-DlliR06t.js";import"./MenuTrigger-CJZwVEpf.js";import"./CompositeItem-CYqhRUaL.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./getDisabledMountTransitionStyles-spVW-j4h.js";import"./getPseudoElementBounds-a71QRY78.js";import"./chevron-down-Bymbl15e.js";import"./index-lAH3DKJQ.js";import"./error-BsBvF-VX.js";import"./BaseCbacBanner-BzdpJ56M.js";import"./makeExternalStore-CnxIOnyb.js";import"./Tooltip-C5K7kdO5.js";import"./PopoverPopup-CehfZg5Y.js";import"./debounce-DtZn3Jt8.js";import"./useOsdkClient-D5cV3NWU.js";import"./tick-DYksh_VF.js";import"./DropdownField-C60HSoXi.js";import"./isEqual-BbgfJPkf.js";import"./withOsdkMetrics-Dlvqw_Pf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
