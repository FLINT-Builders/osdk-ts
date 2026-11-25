import{f as b,j as a,r as i}from"./iframe-Bpe98Dj4.js";import{O as u}from"./object-table-rroctWTB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt7Pwj0U.js";import"./Table-STbRnp0I.js";import"./index-Jn5RtXdC.js";import"./Dialog-D6iAyEKI.js";import"./cross-B4LWD9WI.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./useBaseUiId-CJdlvVPQ.js";import"./InternalBackdrop-C00MZUgD.js";import"./composite-BEI44NiL.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./index-DbJfw5Jw.js";import"./useEventCallback-jPkrsSwe.js";import"./SkeletonBar-Dio7HcWx.js";import"./LoadingCell-DiLMgH0z.js";import"./ColumnConfigDialog-CN70o2LH.js";import"./DraggableList-CVfOpD9R.js";import"./search-DczXofvN.js";import"./Input-5kFdRd8C.js";import"./useControlled-D2vfPoU0.js";import"./Button-CKCuh_PT.js";import"./small-cross-BQ5BxFpj.js";import"./ActionButton-BO6R8BaB.js";import"./Checkbox-C6awXPu3.js";import"./useValueChanged-CWbrPk1H.js";import"./CollapsiblePanel-CZ_2QIXb.js";import"./MultiColumnSortDialog-03FtNBsk.js";import"./MenuTrigger-LBhqhGgE.js";import"./CompositeItem-Cb_CEEPz.js";import"./ToolbarRootContext-B7sQOt43.js";import"./getDisabledMountTransitionStyles-B4PbYPUw.js";import"./getPseudoElementBounds-B1-hZC8t.js";import"./chevron-down-B2AZuAlJ.js";import"./index-qE8U94CR.js";import"./error-xXUB5Jtg.js";import"./BaseCbacBanner-BJlb7WUt.js";import"./makeExternalStore-hK8JV_UH.js";import"./Tooltip-C0c48BL6.js";import"./PopoverPopup-BT66tNSv.js";import"./debounce-CHjm_yWr.js";import"./useOsdkClient-BRImiEXq.js";import"./tick-CYKDx9Yh.js";import"./DropdownField-DkUTWihP.js";import"./isEqual-CDVwuKaY.js";import"./withOsdkMetrics-c2fg5j0X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
