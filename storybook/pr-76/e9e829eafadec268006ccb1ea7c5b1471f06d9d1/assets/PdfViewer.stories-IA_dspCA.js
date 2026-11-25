import{j as r,M as s}from"./iframe-rKl8dl72.js";import{P as p}from"./pdf-viewer-BTE-GheX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ1486sa.js";import"./preload-helper--BImneDc.js";import"./PdfViewer-CYEWKzFT.js";import"./index-DPEXUCgg.js";import"./BasePdfViewer-Cc-HydOH.js";import"./BasePdfViewer.module.css-sDeTEVvk.js";import"./PdfViewerAnnotationLayer-C-pFUzDc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V7r6-ZJn.js";import"./PdfViewerOutlineSidebar-Cvwm2Rpp.js";import"./PdfViewerSidebarHeader-DOEs8a0U.js";import"./useBaseUiId-BMGLO8NS.js";import"./useControlled-CmATnzdQ.js";import"./CompositeRoot-Cn5EYLtt.js";import"./CompositeItem-CkfIEwxY.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./composite-DHl1pO1N.js";import"./svgIconContainer-_-NrNaam.js";import"./PdfViewerSearchBar-BynOC73l.js";import"./chevron-up-ChcYb3av.js";import"./chevron-down-BNJHEUQl.js";import"./cross-a0o186aD.js";import"./PdfViewerSidebar-iexdHoH9.js";import"./index-BjIgEO6K.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./PdfViewerToolbar-DSXfWTbD.js";import"./Button-CxkErfOv.js";import"./chevron-right-C_E-tKhc.js";import"./Input-CJ84JYl8.js";import"./search-jvK2oU2l.js";import"./spin-B2g_LNXZ.js";import"./error-Cgom9DOc.js";import"./withOsdkMetrics-CO0kjJn7.js";import"./makeExternalStore-DsJbcG05.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
