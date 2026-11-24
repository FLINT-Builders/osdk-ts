import{j as r,M as s}from"./iframe-Ci4kbbjH.js";import{P as p}from"./pdf-viewer-BKkwAUZO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cdn3NmdG.js";import"./preload-helper-DNzzp09Q.js";import"./PdfViewer-BZo9qrtS.js";import"./index-BzmIzG5f.js";import"./BasePdfViewer-Cc_1XSop.js";import"./BasePdfViewer.module.css-GobZWzE0.js";import"./PdfViewerAnnotationLayer-GhcVI9J6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0Tq-koj.js";import"./PdfViewerOutlineSidebar-y-4uzI5Y.js";import"./PdfViewerSidebarHeader-BDom5esP.js";import"./useBaseUiId-yqmrIV5M.js";import"./useControlled-CyWOUz9h.js";import"./CompositeRoot-BJiIjT8A.js";import"./CompositeItem-Cku2i2Hz.js";import"./ToolbarRootContext-rMCKHck4.js";import"./composite-CkTQf-5C.js";import"./svgIconContainer-DoVy9nda.js";import"./PdfViewerSearchBar-oUK-ehdI.js";import"./chevron-up-C4WVLM1G.js";import"./chevron-down-HIxicj7V.js";import"./cross-Baj2Wcx8.js";import"./PdfViewerSidebar-CxsV8t_G.js";import"./index-DHl6CAnB.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./PdfViewerToolbar-DfY9kStu.js";import"./Button-DGtRliq1.js";import"./chevron-right-DKOHsBIJ.js";import"./Input-DEpJNDRU.js";import"./search-kOpaiDxH.js";import"./spin-BMZh_y8g.js";import"./error-BDWAkWkg.js";import"./withOsdkMetrics-5lZ7fCNU.js";import"./makeExternalStore-DM45UVPU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
