import{f as b,j as a,r as i}from"./iframe-Bp1PfZ7l.js";import{O as u}from"./object-table-fzrkZXkR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BYGb1pKj.js";import"./Table-DzITeJpu.js";import"./index-DadzeF-d.js";import"./Dialog-CkumyFlj.js";import"./cross-DFx0C0Nt.js";import"./svgIconContainer-OMPXv01U.js";import"./useBaseUiId-XqSzBNHS.js";import"./InternalBackdrop-DFmByEwF.js";import"./composite-DLzwtS5G.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./index-DLVfdXgo.js";import"./useEventCallback-BN9hpBvA.js";import"./SkeletonBar-Cm22PUkZ.js";import"./LoadingCell-Df41ZT7m.js";import"./ColumnConfigDialog-C8SNW7ic.js";import"./DraggableList-EFyF-XBF.js";import"./search-BsLkibR5.js";import"./Input-B12oUm4E.js";import"./useControlled-C8ihAa2k.js";import"./Button-Bt-2SXbx.js";import"./small-cross-C8-5dUWe.js";import"./ActionButton-qLC49eRN.js";import"./Checkbox-3_uuu8Vo.js";import"./useValueChanged-okYo1yvb.js";import"./CollapsiblePanel-B-j7ee1F.js";import"./MultiColumnSortDialog-5t2TiADZ.js";import"./MenuTrigger-DCwY8LEj.js";import"./CompositeItem-CblUCnkP.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./getDisabledMountTransitionStyles-CqLHy__b.js";import"./getPseudoElementBounds-Mutkij03.js";import"./chevron-down-BV-xsSzp.js";import"./index-Dw1tJRkX.js";import"./error-CO92q5PK.js";import"./BaseCbacBanner-C0tqpc35.js";import"./makeExternalStore-B5XHk3Oq.js";import"./Tooltip-CLl9UtD5.js";import"./PopoverPopup-Cg3oU8gt.js";import"./debounce-D9UeryKI.js";import"./useOsdkClient-BzwwsB1i.js";import"./tick-O_f_a0G5.js";import"./DropdownField-DSF1PkvW.js";import"./isEqual-DvlOzGt9.js";import"./withOsdkMetrics-DXXjNZYb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
