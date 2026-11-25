import{f as b,j as a,r as i}from"./iframe-6Z8QeqqP.js";import{O as u}from"./object-table-CECxFAns.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-y0D87bsA.js";import"./Table-CxvM8rGk.js";import"./index-HkxEzDx6.js";import"./Dialog-CK4HQAcY.js";import"./cross-MCgjL0SO.js";import"./svgIconContainer-8--RoJPk.js";import"./useBaseUiId-Dmz3cJQe.js";import"./InternalBackdrop-4jpidxXn.js";import"./composite-DbAi9sOR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./index-iLFhFJRI.js";import"./useEventCallback-gCzDUKPv.js";import"./SkeletonBar-DSdvgAJi.js";import"./LoadingCell-B2-rT-Br.js";import"./ColumnConfigDialog-oC-HZ2Wn.js";import"./DraggableList-Dzqqt3U_.js";import"./search-CvqEaj-y.js";import"./Input-DaVTG5o1.js";import"./useControlled-Bx6RLClW.js";import"./Button-CwPVz1_L.js";import"./small-cross-B-wOlo0v.js";import"./ActionButton-BROaqCpF.js";import"./Checkbox-BVnAR-am.js";import"./useValueChanged-17CWfsm_.js";import"./CollapsiblePanel-CBemhgM_.js";import"./MultiColumnSortDialog-7t2q7viX.js";import"./MenuTrigger-BF02E5JL.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./getDisabledMountTransitionStyles-6bxwWprB.js";import"./getPseudoElementBounds-CXK9C3Gp.js";import"./chevron-down-C4hWEHAB.js";import"./index-Ds85d0HR.js";import"./error-DBQvGp4O.js";import"./BaseCbacBanner-Hxhoa-_l.js";import"./makeExternalStore-CBiKzjzF.js";import"./Tooltip-CzZyPcm7.js";import"./PopoverPopup-kC84IpyX.js";import"./debounce-Doh9hDTV.js";import"./useOsdkClient-HylTLrl8.js";import"./tick-D9u7tIy2.js";import"./DropdownField-Ue-qV6y1.js";import"./isEqual-COSWBm2c.js";import"./withOsdkMetrics-CL7caFuf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
