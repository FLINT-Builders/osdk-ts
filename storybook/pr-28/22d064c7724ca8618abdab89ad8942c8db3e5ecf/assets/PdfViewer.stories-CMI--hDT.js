import{j as r,M as s}from"./iframe-DSkRGESf.js";import{P as p}from"./pdf-viewer-Bcbjwgah.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B02xx64l.js";import"./preload-helper-Du8a5MkV.js";import"./PdfViewer-CKdh9xt3.js";import"./index-BNFB2Cjh.js";import"./BasePdfViewer-C7L7g_7b.js";import"./BasePdfViewer.module.css-D8H3qpZe.js";import"./PdfViewerAnnotationLayer-BTFtChkM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CkHKX5VN.js";import"./PdfViewerOutlineSidebar-BEU965HL.js";import"./PdfViewerSidebarHeader-CfYZbwzZ.js";import"./useBaseUiId-B4X2m0nz.js";import"./useControlled-DRRjE45d.js";import"./CompositeRoot-BxIjLCkX.js";import"./CompositeItem-CLoyw74g.js";import"./ToolbarRootContext-BXHKua9s.js";import"./composite-CgZ_kExF.js";import"./svgIconContainer-CgBYdrzc.js";import"./PdfViewerSearchBar-BB5LzXf5.js";import"./chevron-up-Dx9X-1VS.js";import"./chevron-down-D93VaLA7.js";import"./cross-HIAn8DML.js";import"./PdfViewerSidebar-BaRnjnrA.js";import"./index-B67Hn2Oj.js";import"./index-eLB5m-VM.js";import"./index-BogfGi5C.js";import"./PdfViewerToolbar-Vk-nsUMu.js";import"./Button-DxPyCFzS.js";import"./chevron-right-3mqLHFaD.js";import"./Input-CDxPmZXG.js";import"./search-D5ZgJhKz.js";import"./spin-Be9Gseid.js";import"./error-DwrNHlKr.js";import"./withOsdkMetrics-Ca7Fya9M.js";import"./makeExternalStore-DiqN5xTe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
