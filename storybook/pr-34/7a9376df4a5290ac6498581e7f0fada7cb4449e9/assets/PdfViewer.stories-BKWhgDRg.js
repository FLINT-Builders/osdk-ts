import{j as r,M as s}from"./iframe-CblSHN44.js";import{P as p}from"./pdf-viewer-C52cpDHQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C6MGH1Mq.js";import"./preload-helper-NGhizEuB.js";import"./PdfViewer-hEP6hbrL.js";import"./index-BQ7zJ7he.js";import"./BasePdfViewer-Ci-ZkbtC.js";import"./BasePdfViewer.module.css-C2Dux78V.js";import"./PdfViewerAnnotationLayer-CLHWntb-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKGyUoqq.js";import"./PdfViewerOutlineSidebar-CDTrG077.js";import"./PdfViewerSidebarHeader-CX3J3ZK2.js";import"./useBaseUiId-B2pTi154.js";import"./useControlled-Bg0Zzn-2.js";import"./CompositeRoot-CUhI4t_B.js";import"./CompositeItem-DuOAdpQK.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./composite-DJG-zPIc.js";import"./svgIconContainer-CF_MW71M.js";import"./PdfViewerSearchBar-FzYmPeBN.js";import"./chevron-up-BOusGa9A.js";import"./chevron-down-BysZ9GN-.js";import"./cross-BUglgpN5.js";import"./PdfViewerSidebar-DWu3ZkYm.js";import"./index-CBgrw70i.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./PdfViewerToolbar-B5Pk0-Z8.js";import"./Button-Wy_PutQU.js";import"./chevron-right-DnTaGYAh.js";import"./Input-DBybejkY.js";import"./search-CXloA44P.js";import"./spin-D8C-nEcg.js";import"./error-DuPAr2Go.js";import"./withOsdkMetrics-CRV0LY7d.js";import"./makeExternalStore-DbO86LPP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
