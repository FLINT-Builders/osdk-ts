import{f as b,j as a,r as i}from"./iframe-BrM52See.js";import{O as u}from"./object-table-VQLhFWF1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPLtzYOe.js";import"./Table-DBrEBYq-.js";import"./index-H3qcjrO1.js";import"./Dialog-C6ykfz8O.js";import"./cross-BS83Kw7I.js";import"./svgIconContainer-DWvq_kJI.js";import"./useBaseUiId-LwZBbKwi.js";import"./InternalBackdrop-B0v8ialf.js";import"./composite-BZFmOQck.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./index-l8fykvfj.js";import"./useEventCallback-BHcaXjux.js";import"./SkeletonBar-CyZkMeKi.js";import"./LoadingCell-BKsSrcW2.js";import"./ColumnConfigDialog-CA_TaoPw.js";import"./DraggableList-BjT_lsmH.js";import"./search-B5gd2r9J.js";import"./Input-Ctwp83L6.js";import"./useControlled--LTXft-F.js";import"./Button-Bor1IKlq.js";import"./small-cross-mZTcJe0Y.js";import"./ActionButton-Bjg5SHwB.js";import"./Checkbox-CpcYXb7o.js";import"./useValueChanged-CaQ00tTB.js";import"./CollapsiblePanel-DNThs05J.js";import"./MultiColumnSortDialog-DdgbljRq.js";import"./MenuTrigger-DgZhECnA.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./getDisabledMountTransitionStyles-ZwWdEcJk.js";import"./getPseudoElementBounds-DNWW4OHS.js";import"./chevron-down-IA-50EVq.js";import"./index-CHWvcJrG.js";import"./error-DUN9wjL6.js";import"./BaseCbacBanner-CaBAfIKG.js";import"./makeExternalStore-ByUo-Oil.js";import"./Tooltip-Dmxc3XnT.js";import"./PopoverPopup-Hoh-5uEa.js";import"./debounce-I5NpiXWy.js";import"./useOsdkClient-CUbGPJm8.js";import"./tick-s7oDZI4G.js";import"./DropdownField-BjLRMnJ9.js";import"./isEqual-CGSZE7_m.js";import"./withOsdkMetrics-DCPJGWBb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
