import{f as b,j as a,r as i}from"./iframe-BD75_EF7.js";import{O as u}from"./object-table-CPkwxh5D.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C5GixA8k.js";import"./Table-FgVFuUsS.js";import"./index-Cls2haw5.js";import"./Dialog-C-_mpGRm.js";import"./cross-sDHwt2tZ.js";import"./svgIconContainer-Bxdyh2CW.js";import"./useBaseUiId-Se7wVqTf.js";import"./InternalBackdrop-OFlNwMz7.js";import"./composite-yd7firDo.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./index-5f1XfQ5f.js";import"./useEventCallback-Vm032kvl.js";import"./SkeletonBar-DUDeQRgC.js";import"./LoadingCell-BCnm8IEN.js";import"./ColumnConfigDialog-gtPEqXRz.js";import"./DraggableList-OBslZTBK.js";import"./search-Fzzl4G8z.js";import"./Input-Dmpn7F0W.js";import"./useControlled-Bb3Vr0M6.js";import"./Button-DDPidDHF.js";import"./small-cross-D4uWwtpx.js";import"./ActionButton-CEyHVhsP.js";import"./Checkbox-ZqbWzpkB.js";import"./useValueChanged-BDuexEHu.js";import"./CollapsiblePanel-BQzsjVFn.js";import"./MultiColumnSortDialog-LyTWyKq1.js";import"./MenuTrigger-D7Kr2HLn.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./getDisabledMountTransitionStyles-DJ3nnjim.js";import"./getPseudoElementBounds-BMxp26EN.js";import"./chevron-down-34AB4AXv.js";import"./index-BnVPpix6.js";import"./error-BHpOgTkX.js";import"./BaseCbacBanner-iD_njxeV.js";import"./makeExternalStore-C1ym4VUW.js";import"./Tooltip-DhVNQ1yF.js";import"./PopoverPopup-C3w3Aozm.js";import"./debounce-pSE0AIDq.js";import"./useOsdkClient-c_BjiQFC.js";import"./tick-G5s6pEHr.js";import"./DropdownField-Bk2ZJyrJ.js";import"./isEqual-eXaYvtIg.js";import"./withOsdkMetrics-DR6keFLB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
