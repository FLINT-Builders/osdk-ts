import{f as b,j as a,r as i}from"./iframe-BzttuLup.js";import{O as u}from"./object-table-V3vtQDzj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEinGEya.js";import"./Table-Dkw6qntG.js";import"./index-7CJFn-ex.js";import"./Dialog-B4bx3-G4.js";import"./cross-4RHnOViN.js";import"./svgIconContainer-BicyMjFC.js";import"./useBaseUiId-C_qs9mR7.js";import"./InternalBackdrop-PyFDeOLi.js";import"./composite-CYx1_fMl.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./index-DTD6QywL.js";import"./useEventCallback-B08CG3mJ.js";import"./SkeletonBar-B9sLOoZd.js";import"./LoadingCell-e_8nVwWI.js";import"./ColumnConfigDialog-D-LHf8uu.js";import"./DraggableList-wSZtHt_j.js";import"./search-Dt2zfbsw.js";import"./Input-BumRROcl.js";import"./useControlled-DvTO4Lqf.js";import"./Button-B0wCjsGN.js";import"./small-cross-CXStxdm6.js";import"./ActionButton-DXY5W19F.js";import"./Checkbox-B5eAc9Qm.js";import"./useValueChanged-BFZjFvxq.js";import"./CollapsiblePanel-B08RbuOL.js";import"./MultiColumnSortDialog-Lydy8ubJ.js";import"./MenuTrigger-tipzUI00.js";import"./CompositeItem-E8-A5SU4.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./getDisabledMountTransitionStyles-BMOazWhO.js";import"./getPseudoElementBounds-Cn4AgsTS.js";import"./chevron-down-_FTLKkTP.js";import"./index-Dint05uq.js";import"./error-CLZJuCl2.js";import"./BaseCbacBanner-6v7FlQJC.js";import"./makeExternalStore-DAGqxfwp.js";import"./Tooltip-BTYfzcBb.js";import"./PopoverPopup-Dx6YNas4.js";import"./debounce-DlVBfSqq.js";import"./useOsdkClient-BgCetPCz.js";import"./tick-DOtLTALy.js";import"./DropdownField--AwpHRkt.js";import"./isEqual-DldK_P3t.js";import"./withOsdkMetrics-Dfc2rN4I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
