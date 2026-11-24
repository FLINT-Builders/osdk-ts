import{f as b,j as a,r as i}from"./iframe-C4244Bm_.js";import{O as u}from"./object-table-CWI95tL9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci98jyni.js";import"./Table-DLA6JNP_.js";import"./index-ClH59eky.js";import"./Dialog-rWA87_5x.js";import"./cross-Ndayjde5.js";import"./svgIconContainer-C9qKBg5g.js";import"./useBaseUiId-X9XCdkpw.js";import"./InternalBackdrop-BgtvNRvm.js";import"./composite-Ckn5xSHc.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./index-Bi8RWIrI.js";import"./useEventCallback-DjDRvhxl.js";import"./SkeletonBar-1wmzXisw.js";import"./LoadingCell-JMXuLf4_.js";import"./ColumnConfigDialog-D7iHn2dh.js";import"./DraggableList-D93qNxY3.js";import"./search-CyQQCVme.js";import"./Input-DLoAGHyA.js";import"./useControlled-zrsS7sbr.js";import"./Button-DdPOxW32.js";import"./small-cross-BKLGSFz1.js";import"./ActionButton-DERxyeDa.js";import"./Checkbox-FK2fRdAN.js";import"./useValueChanged-CnEeirqz.js";import"./CollapsiblePanel-B8EFIibH.js";import"./MultiColumnSortDialog-BosRxKkz.js";import"./MenuTrigger-BTCInV-G.js";import"./CompositeItem-BHbjzdkB.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./getDisabledMountTransitionStyles-CCxWABNx.js";import"./getPseudoElementBounds-Cpfu0jjM.js";import"./chevron-down-BL39hyz4.js";import"./index-Dhn7ITQm.js";import"./error-_egmS3m2.js";import"./BaseCbacBanner-CgTjAuLA.js";import"./makeExternalStore-D1LNnd-p.js";import"./Tooltip-Btlg-yIO.js";import"./PopoverPopup-Bw-hztAp.js";import"./debounce-C-dm4-uQ.js";import"./useOsdkClient-B6lLUCBK.js";import"./tick-D4xU7MKe.js";import"./DropdownField-BLtmL1tB.js";import"./isEqual-BO6QlNLr.js";import"./withOsdkMetrics-GAx3Og7v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
