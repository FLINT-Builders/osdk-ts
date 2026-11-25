import{j as r,M as s}from"./iframe-B33FiDGM.js";import{P as p}from"./pdf-viewer-BrvEl1pN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbfoFRlo.js";import"./preload-helper-Cg7VMV6C.js";import"./PdfViewer-B6Gms7rT.js";import"./index-B5YN0Y56.js";import"./BasePdfViewer-PL6UWqQi.js";import"./BasePdfViewer.module.css-DB0vCJ84.js";import"./PdfViewerAnnotationLayer-B2K1Pmb7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CkWGPfLl.js";import"./PdfViewerOutlineSidebar-DUU2odgx.js";import"./PdfViewerSidebarHeader-C4pCPznV.js";import"./useBaseUiId-DmUoOZel.js";import"./useControlled-DJSk-4eD.js";import"./CompositeRoot-CXjATUbj.js";import"./CompositeItem-Bvfghm7d.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./composite-BOK6xXDF.js";import"./svgIconContainer-ClieOgTu.js";import"./PdfViewerSearchBar-Dw1_3Nq4.js";import"./chevron-up-aZT7OeK_.js";import"./chevron-down-Btg0m5Mr.js";import"./cross-DM8-ytCZ.js";import"./PdfViewerSidebar-Dzt7TnKE.js";import"./index-DNAzx9pt.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./PdfViewerToolbar-Bu8aFNne.js";import"./Button-CyQdblJP.js";import"./chevron-right-9cBFpSvA.js";import"./Input-BUa4RtbK.js";import"./search-C5uprCHM.js";import"./spin-MFUySxMM.js";import"./error-DU6Loo59.js";import"./withOsdkMetrics-8fzs58WB.js";import"./makeExternalStore-zxZeOhNi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
