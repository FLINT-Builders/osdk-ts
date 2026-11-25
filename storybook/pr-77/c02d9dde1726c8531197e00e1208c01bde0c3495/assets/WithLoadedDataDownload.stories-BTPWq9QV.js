import{f as b,j as a,r as i}from"./iframe-BimQ5I7B.js";import{O as u}from"./object-table-ncEil8FU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVgp4Odj.js";import"./Table-qM2MBR7T.js";import"./index-Bterpizd.js";import"./Dialog-Co03GsOl.js";import"./cross-B1ycp5D_.js";import"./svgIconContainer-B7sYR9CH.js";import"./useBaseUiId-C8madkWI.js";import"./InternalBackdrop-CX3KLEvW.js";import"./composite-CFQYUg6D.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./index-8RuBob7j.js";import"./useEventCallback-p4N8Eyn2.js";import"./SkeletonBar-Bt_B5dG6.js";import"./LoadingCell-DWCuiV5v.js";import"./ColumnConfigDialog-BOYtEBmh.js";import"./DraggableList-C1YCs_mx.js";import"./search-2ZJHkAe4.js";import"./Input-BgCDGlWE.js";import"./useControlled-BZPlZ-l4.js";import"./Button-BDC1u4I1.js";import"./small-cross-FAi29SOY.js";import"./ActionButton-ButrV8bA.js";import"./Checkbox-DTBdc949.js";import"./useValueChanged-DYoiWqYd.js";import"./CollapsiblePanel-CpyR6Z1C.js";import"./MultiColumnSortDialog-YtfNFFnp.js";import"./MenuTrigger-BQKwEvQH.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./getDisabledMountTransitionStyles-DrpCBbHi.js";import"./getPseudoElementBounds-BKz8oGoA.js";import"./chevron-down-BSMcI5Uh.js";import"./index-Drk-T-LH.js";import"./error-Cm6SmQec.js";import"./BaseCbacBanner-D-qTc9yO.js";import"./makeExternalStore-BMJZ0gXh.js";import"./Tooltip-CYgKzjZV.js";import"./PopoverPopup-CqVwxtDC.js";import"./debounce-Dr3bOVOf.js";import"./useOsdkClient-B6IDuaBu.js";import"./tick-B97f0SKP.js";import"./DropdownField-vEf4IKfs.js";import"./isEqual-CqUAJ4RL.js";import"./withOsdkMetrics-D3LiHDOi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
