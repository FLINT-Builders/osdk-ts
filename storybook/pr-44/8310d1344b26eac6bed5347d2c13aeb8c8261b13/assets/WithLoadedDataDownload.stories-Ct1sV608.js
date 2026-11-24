import{f as b,j as a,r as i}from"./iframe-Ci8jv4db.js";import{O as u}from"./object-table-Dacr0ifo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BijYl_hj.js";import"./Table-CdSPN2Q9.js";import"./index-Cb4PYHc_.js";import"./Dialog-CU4h8-6w.js";import"./cross-DUbcKgzt.js";import"./svgIconContainer-Y9M5A49t.js";import"./useBaseUiId-Dty0keys.js";import"./InternalBackdrop-DNudlJn1.js";import"./composite-dn8KtEdo.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./index-DbJfPldr.js";import"./useEventCallback-BoVAQff_.js";import"./SkeletonBar-C9OdSW8N.js";import"./LoadingCell-DLN_h4p2.js";import"./ColumnConfigDialog-CyYseEM-.js";import"./DraggableList-CAzFZL8D.js";import"./search-D0vckm_H.js";import"./Input-Ctv6ca3A.js";import"./useControlled-AQzCfptX.js";import"./Button-DXyPvcOa.js";import"./small-cross-CzYmJZ8j.js";import"./ActionButton-CpnY3Zoi.js";import"./Checkbox-C4duWPNx.js";import"./useValueChanged-Bjs7PV0z.js";import"./CollapsiblePanel-BZkK1yay.js";import"./MultiColumnSortDialog-BbtaWRjx.js";import"./MenuTrigger-DoMDuH9X.js";import"./CompositeItem-pAC9-vMM.js";import"./ToolbarRootContext-BBg552Fz.js";import"./getDisabledMountTransitionStyles-C3sdXLul.js";import"./getPseudoElementBounds-hHPF40eR.js";import"./chevron-down-Cogx4pq7.js";import"./index-DBQv4m84.js";import"./error-BVKGD7Ps.js";import"./BaseCbacBanner-BNWc-wSO.js";import"./makeExternalStore-MN51YzUq.js";import"./Tooltip-CPVVmqYN.js";import"./PopoverPopup-DX5l843X.js";import"./debounce-Q2FLO271.js";import"./useOsdkClient-CY0rgXDT.js";import"./tick-kwWHIM-G.js";import"./DropdownField-DODhTvNS.js";import"./isEqual-3tAmgqC1.js";import"./withOsdkMetrics-BOl2WiFX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
