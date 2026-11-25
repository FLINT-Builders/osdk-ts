import{f as b,j as a,r as i}from"./iframe-NyHN5VRq.js";import{O as u}from"./object-table-C81DNPEN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-V-uedkqD.js";import"./Table-ZpVbTwfW.js";import"./index-BfjQx6Ly.js";import"./Dialog-DKEJlEC2.js";import"./cross-Dw9UKTtm.js";import"./svgIconContainer-D2-PKO04.js";import"./useBaseUiId-D2dSZ8xw.js";import"./InternalBackdrop-D7Xp3E9p.js";import"./composite-dEyBM_w4.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./index-B3mmWQ0F.js";import"./useEventCallback-DoOCRT8a.js";import"./SkeletonBar-GrYatSDE.js";import"./LoadingCell-DynSbYUR.js";import"./ColumnConfigDialog-r2G1cMvL.js";import"./DraggableList-C1u518YK.js";import"./search-5FdBAUHN.js";import"./Input-CNTzIZ_0.js";import"./useControlled-Dh_cMPIe.js";import"./Button-Czn8jZsp.js";import"./small-cross-B006-969.js";import"./ActionButton-B_hA--wV.js";import"./Checkbox-CHTGGrx7.js";import"./useValueChanged-2qCvj704.js";import"./CollapsiblePanel-DyupETYF.js";import"./MultiColumnSortDialog-hp_Xxbvk.js";import"./MenuTrigger-BsZAgMhw.js";import"./CompositeItem-D6OEWPs8.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./getDisabledMountTransitionStyles-BnTV1GCv.js";import"./getPseudoElementBounds-liAYIzgN.js";import"./chevron-down-D5RxD_5a.js";import"./index-Cf28HvbY.js";import"./error-CmvnS4M6.js";import"./BaseCbacBanner-B5vq67kq.js";import"./makeExternalStore-DXy-cErB.js";import"./Tooltip-CKdMZe0K.js";import"./PopoverPopup-BXMQLUfh.js";import"./debounce-DTG0i2xp.js";import"./useOsdkClient-KQa4vScA.js";import"./tick-Dv-MwZz4.js";import"./DropdownField-DDnDtQPw.js";import"./isEqual-Dok9u36d.js";import"./withOsdkMetrics-5n_JPyv4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
