import{f as b,j as a,r as i}from"./iframe-D3-3nK7q.js";import{O as u}from"./object-table-BC3q--Sf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BElTUCt9.js";import"./Table-BEPLnAeG.js";import"./index-CGTNyrvF.js";import"./Dialog-DXTQqsA4.js";import"./cross-NOSp3crr.js";import"./svgIconContainer-Dmn3JYop.js";import"./useBaseUiId-BfpIc49G.js";import"./InternalBackdrop-D1EZm1AQ.js";import"./composite-D0w8ui7I.js";import"./index-BuNH2rO3.js";import"./index-C3yTrjgV.js";import"./index-C4_vrnPE.js";import"./useEventCallback-Cbb79cWA.js";import"./SkeletonBar-Dxus3qqZ.js";import"./LoadingCell-BJhD4BL5.js";import"./ColumnConfigDialog-e8VugdiW.js";import"./DraggableList-BRDbCBH_.js";import"./search-DdBNOuKg.js";import"./Input-DujYPLSI.js";import"./useControlled-DjBtz4s1.js";import"./Button-_NTWHkbN.js";import"./small-cross-CI8b4jpP.js";import"./ActionButton-C1fl511w.js";import"./Checkbox-Bq74aFCD.js";import"./useValueChanged-D0XFuiDP.js";import"./CollapsiblePanel-Dnk44RSY.js";import"./MultiColumnSortDialog-Do6WvpHO.js";import"./MenuTrigger-PBlMpzba.js";import"./CompositeItem-Areoylt-.js";import"./ToolbarRootContext-DQWI9XbP.js";import"./getDisabledMountTransitionStyles-VRYpsqgo.js";import"./getPseudoElementBounds-CsMk40JZ.js";import"./chevron-down-B7WxA5SS.js";import"./index-DlYOU8ER.js";import"./error-oDVaVcOP.js";import"./BaseCbacBanner-PBLy5YlT.js";import"./makeExternalStore-Dirg-OTC.js";import"./Tooltip-CYjmQQLe.js";import"./PopoverPopup-CI-Szge2.js";import"./debounce-CvskZtP5.js";import"./useOsdkClient-CkMOlfJx.js";import"./tick-CkByZXDz.js";import"./DropdownField-CIyitf5P.js";import"./isEqual-BsZfEb8L.js";import"./withOsdkMetrics-DQqeF1TA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
