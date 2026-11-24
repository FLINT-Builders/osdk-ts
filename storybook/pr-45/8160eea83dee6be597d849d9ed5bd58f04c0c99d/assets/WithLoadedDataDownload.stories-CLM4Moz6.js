import{f as b,j as a,r as i}from"./iframe-xhm5OChx.js";import{O as u}from"./object-table-HQWVkrkb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZJxKfIr.js";import"./Table-BH6BTYWA.js";import"./index-Ctr0pjQq.js";import"./Dialog-CYaeLi8E.js";import"./cross-C-3m77s9.js";import"./svgIconContainer-CdfxSdaj.js";import"./useBaseUiId-q04gmumk.js";import"./InternalBackdrop-i2Jv6yd1.js";import"./composite-BhQucQ6w.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./index-DWPvyRFK.js";import"./useEventCallback-DOJI8S3u.js";import"./SkeletonBar-mT-JS0Ox.js";import"./LoadingCell-UzLA8R8y.js";import"./ColumnConfigDialog-B9yJe-N2.js";import"./DraggableList-Bnc84gYz.js";import"./search-Cq1dDtD0.js";import"./Input-wfXCkxXX.js";import"./useControlled-CXKnX_iS.js";import"./Button-Cx_zDl37.js";import"./small-cross-C74z8jlp.js";import"./ActionButton-0NMO3aYn.js";import"./Checkbox-jmx13kFy.js";import"./useValueChanged-CW8UuRxF.js";import"./CollapsiblePanel-BUNoQZyA.js";import"./MultiColumnSortDialog-BVqyEIa1.js";import"./MenuTrigger-o5fhUgJ3.js";import"./CompositeItem-CtXkcFLl.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./getDisabledMountTransitionStyles-B85vDvpF.js";import"./getPseudoElementBounds-DSDAFN2S.js";import"./chevron-down-BsRYwsxE.js";import"./index-DRcQ3DSW.js";import"./error-QOz5QiuQ.js";import"./BaseCbacBanner--jqZ3Clz.js";import"./makeExternalStore-Yu1AfO63.js";import"./Tooltip-DByTNzzG.js";import"./PopoverPopup-2glF1cOR.js";import"./debounce-BL8n_G_Q.js";import"./useOsdkClient-DsZIT7A4.js";import"./tick-Bt601WgM.js";import"./DropdownField-PqL2lLdH.js";import"./isEqual-evpreXH6.js";import"./withOsdkMetrics-nVSio52c.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
