import{f as b,j as a,r as i}from"./iframe-DchqE16O.js";import{O as u}from"./object-table-DcwiNNzU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CruhVp8d.js";import"./Table-CGkDzmTC.js";import"./index-C9pVGgAF.js";import"./Dialog-BW9erraE.js";import"./cross-pv8yLqK0.js";import"./svgIconContainer-o0BLlK91.js";import"./useBaseUiId-DavIhVcf.js";import"./InternalBackdrop-LybRFn-n.js";import"./composite-C-jL-lwP.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./index-BoEySXuY.js";import"./useEventCallback-D9yoUN4j.js";import"./SkeletonBar-DukQAzpM.js";import"./LoadingCell-GU17jzUP.js";import"./ColumnConfigDialog-Bl2Ge5kO.js";import"./DraggableList-W8UVm6lY.js";import"./search-BePaI44o.js";import"./Input-DZYpZIAm.js";import"./useControlled-CSem3ovp.js";import"./Button-DG5zH7tS.js";import"./small-cross-8E9tPeRL.js";import"./ActionButton-BJMvEM6L.js";import"./Checkbox-BhXu6eHc.js";import"./useValueChanged-CoQERUSb.js";import"./CollapsiblePanel-BdSEsD6W.js";import"./MultiColumnSortDialog-CHslCwFF.js";import"./MenuTrigger-DWP4xach.js";import"./CompositeItem-B0Rg-Lxm.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./getDisabledMountTransitionStyles-BBnhTzgD.js";import"./getPseudoElementBounds-AEkTlzBM.js";import"./chevron-down-C-JwTnNq.js";import"./index-CyPTDzGy.js";import"./error-BZzNTwNw.js";import"./BaseCbacBanner-BhUML3mx.js";import"./makeExternalStore-DOPJ0IZk.js";import"./Tooltip-DX6d1ahi.js";import"./PopoverPopup-Dp1eQXG2.js";import"./debounce-D_wvzfMc.js";import"./useOsdkClient-BBdDY5jb.js";import"./tick-BBgvL453.js";import"./DropdownField-BeWNTIQ_.js";import"./isEqual-DS1T2zLV.js";import"./withOsdkMetrics-B8g_jVC8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
