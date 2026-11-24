import{f as b,j as a,r as i}from"./iframe-DGWnG-cP.js";import{O as u}from"./object-table-rQF7zj4h.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-3cdipQWl.js";import"./Table-569peSy1.js";import"./index-C0zbU9rL.js";import"./Dialog-DsXbvmJy.js";import"./cross-DlI64HlO.js";import"./svgIconContainer-B16Mzywl.js";import"./useBaseUiId-DVxcG4_I.js";import"./InternalBackdrop-BJR0xs8j.js";import"./composite-B33N3UBB.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./index-D_bbN_cd.js";import"./useEventCallback-CxJpG0mK.js";import"./SkeletonBar-DvB39Rdm.js";import"./LoadingCell-BvgZglXZ.js";import"./ColumnConfigDialog-BS73iygW.js";import"./DraggableList-CliT0f_Y.js";import"./search-UMxzoTWH.js";import"./Input-DwaikOPa.js";import"./useControlled-BBmR2WL-.js";import"./Button-BcmhO12Y.js";import"./small-cross-DmdM27Kn.js";import"./ActionButton-WSvr-wI_.js";import"./Checkbox-SQRRgXI2.js";import"./useValueChanged-ChEZciPX.js";import"./CollapsiblePanel-CVt-m52O.js";import"./MultiColumnSortDialog-DPhx5BMU.js";import"./MenuTrigger-BCDlzjR7.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./getDisabledMountTransitionStyles-CyXwlfcm.js";import"./getPseudoElementBounds-B9TtSSG4.js";import"./chevron-down-BFuZIkTt.js";import"./index-CrcNgxS8.js";import"./error-qdaiM9ZH.js";import"./BaseCbacBanner-lZp0UVMg.js";import"./makeExternalStore-WGQ2sL4W.js";import"./Tooltip-WUVYr8N6.js";import"./PopoverPopup-B75UTycU.js";import"./debounce-BI_4kNch.js";import"./useOsdkClient-D8G8-hzC.js";import"./tick-DVANyX1P.js";import"./DropdownField-nTKXuw1F.js";import"./isEqual-_zVrSe3d.js";import"./withOsdkMetrics-UcMYR7XC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
