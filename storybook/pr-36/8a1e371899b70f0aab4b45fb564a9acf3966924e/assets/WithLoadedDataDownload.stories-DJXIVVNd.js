import{f as b,j as a,r as i}from"./iframe-DUf0ZM0m.js";import{O as u}from"./object-table-BZQfq3Js.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KlMKjl9V.js";import"./Table-BpqgbLs4.js";import"./index-DhPIhyt4.js";import"./Dialog-CayXW5M3.js";import"./cross-CSu9pd0U.js";import"./svgIconContainer-DIQ4r6yH.js";import"./useBaseUiId-CCdSaAp3.js";import"./InternalBackdrop-BpRU2U_8.js";import"./composite-Ca3Atwol.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./index-C0yU06Q6.js";import"./useEventCallback-BgsfaB3Y.js";import"./SkeletonBar-COiOlbH0.js";import"./LoadingCell-B2QIRUcR.js";import"./ColumnConfigDialog-DWrprQ7Z.js";import"./DraggableList-DK4DOOpd.js";import"./search-BTSIL3B5.js";import"./Input-D5jZGu61.js";import"./useControlled-D9pcZLhn.js";import"./Button-27JXw8gN.js";import"./small-cross-DPoZyTDD.js";import"./ActionButton-COPug63M.js";import"./Checkbox-B0VGQD67.js";import"./useValueChanged-z0aioFdT.js";import"./CollapsiblePanel-mRxE6gsX.js";import"./MultiColumnSortDialog-C6tqy3oQ.js";import"./MenuTrigger-zVMPfwjS.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./getDisabledMountTransitionStyles-DxcTI9oz.js";import"./getPseudoElementBounds-Cgd5KJAZ.js";import"./chevron-down-BElmyRaO.js";import"./index-C9tEn2VI.js";import"./error-wj1vfq65.js";import"./BaseCbacBanner-DpcCkxH6.js";import"./makeExternalStore-CiGKFh7B.js";import"./Tooltip-XJCpwDJu.js";import"./PopoverPopup-DSjEA-Cg.js";import"./debounce-D4eo-Ale.js";import"./useOsdkClient-CnVn3iVU.js";import"./tick-Cf9GU9iy.js";import"./DropdownField-DAuhKtCc.js";import"./isEqual-Bk5F-IFE.js";import"./withOsdkMetrics-DuLTXoUD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
