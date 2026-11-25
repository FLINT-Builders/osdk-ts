import{f as b,j as a,r as i}from"./iframe-rKl8dl72.js";import{O as u}from"./object-table-Z_cJ_BSj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--BImneDc.js";import"./Table-BW09YW4o.js";import"./index-DPEXUCgg.js";import"./Dialog-C3B3LjHj.js";import"./cross-a0o186aD.js";import"./svgIconContainer-_-NrNaam.js";import"./useBaseUiId-BMGLO8NS.js";import"./InternalBackdrop-BLFJ3wvQ.js";import"./composite-DHl1pO1N.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./index-DF5p8sUY.js";import"./useEventCallback-CFBK0YJz.js";import"./SkeletonBar-DPocxRng.js";import"./LoadingCell-DaOOQr3j.js";import"./ColumnConfigDialog-gzvWyMf9.js";import"./DraggableList-BNn-fQty.js";import"./search-jvK2oU2l.js";import"./Input-CJ84JYl8.js";import"./useControlled-CmATnzdQ.js";import"./Button-CxkErfOv.js";import"./small-cross-BoqwdjyD.js";import"./ActionButton-DoscJM3L.js";import"./Checkbox-Hq0quoQ-.js";import"./useValueChanged-CEfl-o9u.js";import"./CollapsiblePanel-DlSFFH-3.js";import"./MultiColumnSortDialog-DWgZFh55.js";import"./MenuTrigger-B3dSJo9E.js";import"./CompositeItem-CkfIEwxY.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./getDisabledMountTransitionStyles-DpfNJcDT.js";import"./getPseudoElementBounds-zc0WMmOl.js";import"./chevron-down-BNJHEUQl.js";import"./index-BjIgEO6K.js";import"./error-Cgom9DOc.js";import"./BaseCbacBanner-D3Dni7oh.js";import"./makeExternalStore-DsJbcG05.js";import"./Tooltip-lR7hYztD.js";import"./PopoverPopup-BF7KHn70.js";import"./debounce-hqGPRRGb.js";import"./useOsdkClient-1eh8dYaj.js";import"./tick-RGW3NTLE.js";import"./DropdownField-i4PyW7Yk.js";import"./isEqual-fbTxlLCA.js";import"./withOsdkMetrics-CO0kjJn7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
