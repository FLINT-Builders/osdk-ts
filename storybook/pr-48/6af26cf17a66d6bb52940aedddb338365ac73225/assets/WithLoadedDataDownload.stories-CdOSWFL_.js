import{f as b,j as a,r as i}from"./iframe-OFDiPCrG.js";import{O as u}from"./object-table-BPDKIWGN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUjfNDkl.js";import"./Table-KQeOisGx.js";import"./index-BeuOzgqu.js";import"./Dialog-Dqr1bH5t.js";import"./cross-jB5PN8IY.js";import"./svgIconContainer-DhDKsT9z.js";import"./useBaseUiId-BFA8n74e.js";import"./InternalBackdrop-DbDjPHet.js";import"./composite-PM-R8SRV.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./index-DkR0Sm-A.js";import"./useEventCallback-u5zfbyPP.js";import"./SkeletonBar-YHngoHZJ.js";import"./LoadingCell-CPbAcYO7.js";import"./ColumnConfigDialog-BzkVhHi-.js";import"./DraggableList-DOIwgRoD.js";import"./search-rykp5p6r.js";import"./Input-DDs2WsUf.js";import"./useControlled-DB7vMkHQ.js";import"./Button-C0oJYbtE.js";import"./small-cross-CzS85_Ss.js";import"./ActionButton-Dafw0kRv.js";import"./Checkbox-DhzgJCT-.js";import"./useValueChanged-O-f8K84Z.js";import"./CollapsiblePanel-iJsKp1Sk.js";import"./MultiColumnSortDialog-DqbRJlfk.js";import"./MenuTrigger-D9na9TlD.js";import"./CompositeItem-BEOwPENe.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./getDisabledMountTransitionStyles-C6EZ30T_.js";import"./getPseudoElementBounds-Bv073C_P.js";import"./chevron-down-BlpQBexS.js";import"./index-Dhs37uf9.js";import"./error-BuvCTlk4.js";import"./BaseCbacBanner-ingasLzJ.js";import"./makeExternalStore-CFPNQ_aD.js";import"./Tooltip-Dy2MALoM.js";import"./PopoverPopup-DBszHbY8.js";import"./debounce-ComwDjtY.js";import"./useOsdkClient-DCpLRsuK.js";import"./tick-DpIF400T.js";import"./DropdownField-BnKkKUrN.js";import"./isEqual-Ciu65pfO.js";import"./withOsdkMetrics-BSB8rkK5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
