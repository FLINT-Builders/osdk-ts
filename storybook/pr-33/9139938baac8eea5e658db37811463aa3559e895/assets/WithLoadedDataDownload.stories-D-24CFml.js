import{f as b,j as a,r as i}from"./iframe-CSBSqJV-.js";import{O as u}from"./object-table-CQlh17pU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-y6YPEm4u.js";import"./Table-DGzGYFQo.js";import"./index-BJfVWZd-.js";import"./Dialog-driLLg7n.js";import"./cross-B6WlAhq-.js";import"./svgIconContainer-CLK7EnDK.js";import"./useBaseUiId-Bc5TgsQW.js";import"./InternalBackdrop-Beq1X7xS.js";import"./composite-jPJKKGn2.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./index-LUSaJ2vo.js";import"./useEventCallback-DKSmEp2D.js";import"./SkeletonBar-DUkAKkre.js";import"./LoadingCell-C72uwxIB.js";import"./ColumnConfigDialog-BB1p_5kR.js";import"./DraggableList-BcrePS-Y.js";import"./search-DvlP61aE.js";import"./Input-B47Y97Of.js";import"./useControlled-Bac_91v3.js";import"./Button-Dh9tN-kh.js";import"./small-cross-CSds0n2Q.js";import"./ActionButton-cyr4kPxp.js";import"./Checkbox-D3JwoAva.js";import"./useValueChanged-D2mv37rP.js";import"./CollapsiblePanel-CFBpR34G.js";import"./MultiColumnSortDialog-s81HUVpC.js";import"./MenuTrigger-NP9ud2uM.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./getDisabledMountTransitionStyles-BniS6qDk.js";import"./getPseudoElementBounds-DhrtV-tW.js";import"./chevron-down-C4EMQsdy.js";import"./index-B3n_oO7A.js";import"./error-CRSueJec.js";import"./BaseCbacBanner-CFcln0a-.js";import"./makeExternalStore-BuktQzqG.js";import"./Tooltip-Bo7GAIpf.js";import"./PopoverPopup-BFehPzV1.js";import"./debounce-gyo9KVfh.js";import"./useOsdkClient-0i4-BUE5.js";import"./tick-WiW2BOLj.js";import"./DropdownField-BIxLro4D.js";import"./isEqual-tRqZMX7m.js";import"./withOsdkMetrics-B-CwHZa2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
