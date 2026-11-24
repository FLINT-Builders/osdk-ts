import{f as b,j as a,r as i}from"./iframe-DXCJdDjk.js";import{O as u}from"./object-table-CMu3OqPI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BCqQIOQj.js";import"./Table-DtU9_wlU.js";import"./index-QhP10yDY.js";import"./Dialog-B0n-hSzS.js";import"./cross-QCx31p9d.js";import"./svgIconContainer-PeTmNDz1.js";import"./useBaseUiId-BVzNdyaI.js";import"./InternalBackdrop-DiEb60oM.js";import"./composite-VErlwM2g.js";import"./index-DBzdfvA2.js";import"./index-DYK3IbAw.js";import"./index-fUnQH0Ng.js";import"./useEventCallback-NMYaIxLD.js";import"./SkeletonBar-BvIRP9GG.js";import"./LoadingCell-ClWgT-D4.js";import"./ColumnConfigDialog-D8f5iZrV.js";import"./DraggableList-LasHmkhR.js";import"./search-DRi_hMxi.js";import"./Input-BTjVOb0y.js";import"./useControlled-BjYAliAA.js";import"./Button-D_PTcbbI.js";import"./small-cross-YgIpoi-c.js";import"./ActionButton-C4OP8Ud5.js";import"./Checkbox-DW4OHk_e.js";import"./useValueChanged-CYU4OOoO.js";import"./CollapsiblePanel-Dz0EiOlC.js";import"./MultiColumnSortDialog-Rdfmlb0r.js";import"./MenuTrigger-DDBS9uJd.js";import"./CompositeItem-DleHBTVF.js";import"./ToolbarRootContext-BXXCNwbt.js";import"./getDisabledMountTransitionStyles-Crvdet31.js";import"./getPseudoElementBounds-BdNIU5Gh.js";import"./chevron-down-Dukj-qIY.js";import"./index-CDTndXsg.js";import"./error-DYQlLdEW.js";import"./BaseCbacBanner-C-jd6aGE.js";import"./makeExternalStore-BQt7qWsh.js";import"./Tooltip-kA7Y0tfn.js";import"./PopoverPopup-Dott-kRm.js";import"./debounce-C2si1I5i.js";import"./useOsdkClient-Cp8dLbkr.js";import"./tick-oJgzJDQ-.js";import"./DropdownField-D3NdJ4rJ.js";import"./isEqual-CvNiF6Lf.js";import"./withOsdkMetrics-Cl21Vd8T.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
