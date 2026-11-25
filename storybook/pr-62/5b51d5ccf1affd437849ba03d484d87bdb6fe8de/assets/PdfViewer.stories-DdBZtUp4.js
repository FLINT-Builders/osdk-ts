import{j as r,M as s}from"./iframe-Bpe98Dj4.js";import{P as p}from"./pdf-viewer-Cj4Gg7u0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bm1dntPs.js";import"./preload-helper-Bt7Pwj0U.js";import"./PdfViewer-DsW7OXri.js";import"./index-Jn5RtXdC.js";import"./BasePdfViewer-2p7dr0Ca.js";import"./BasePdfViewer.module.css-6iR4BC9A.js";import"./PdfViewerAnnotationLayer-DcC8lX-a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX8R5tDW.js";import"./PdfViewerOutlineSidebar-IUYM6FDr.js";import"./PdfViewerSidebarHeader-CdKhw4y4.js";import"./useBaseUiId-CJdlvVPQ.js";import"./useControlled-D2vfPoU0.js";import"./CompositeRoot-DOZXrzeJ.js";import"./CompositeItem-Cb_CEEPz.js";import"./ToolbarRootContext-B7sQOt43.js";import"./composite-BEI44NiL.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./PdfViewerSearchBar-BPwmh9P8.js";import"./chevron-up-1EqwUT07.js";import"./chevron-down-B2AZuAlJ.js";import"./cross-B4LWD9WI.js";import"./PdfViewerSidebar--LpNBJDA.js";import"./index-qE8U94CR.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./PdfViewerToolbar-B7nhGlIr.js";import"./Button-CKCuh_PT.js";import"./chevron-right-BQP4AtQd.js";import"./Input-5kFdRd8C.js";import"./search-DczXofvN.js";import"./spin-sPBmBTAQ.js";import"./error-xXUB5Jtg.js";import"./withOsdkMetrics-c2fg5j0X.js";import"./makeExternalStore-hK8JV_UH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
