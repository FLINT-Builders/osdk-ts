import{j as r,M as s}from"./iframe-OFDiPCrG.js";import{P as p}from"./pdf-viewer-CkAiowCH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzUK3cpS.js";import"./preload-helper-DUjfNDkl.js";import"./PdfViewer-CxSpoJtX.js";import"./index-BeuOzgqu.js";import"./BasePdfViewer-Diephso-.js";import"./BasePdfViewer.module.css-Co43F42k.js";import"./PdfViewerAnnotationLayer-BRqXTGVv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ts5I8qpG.js";import"./PdfViewerOutlineSidebar-Cm93wY01.js";import"./PdfViewerSidebarHeader-B4A0TrfO.js";import"./useBaseUiId-BFA8n74e.js";import"./useControlled-DB7vMkHQ.js";import"./CompositeRoot-BTGQ1jw9.js";import"./CompositeItem-BEOwPENe.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./composite-PM-R8SRV.js";import"./svgIconContainer-DhDKsT9z.js";import"./PdfViewerSearchBar-B6epAo3u.js";import"./chevron-up-Cs6JllkH.js";import"./chevron-down-BlpQBexS.js";import"./cross-jB5PN8IY.js";import"./PdfViewerSidebar-BrgEt4xH.js";import"./index-Dhs37uf9.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./PdfViewerToolbar-7md6V22Y.js";import"./Button-C0oJYbtE.js";import"./chevron-right-TftXrO2u.js";import"./Input-DDs2WsUf.js";import"./search-rykp5p6r.js";import"./spin-BgW77s68.js";import"./error-BuvCTlk4.js";import"./withOsdkMetrics-BSB8rkK5.js";import"./makeExternalStore-CFPNQ_aD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
