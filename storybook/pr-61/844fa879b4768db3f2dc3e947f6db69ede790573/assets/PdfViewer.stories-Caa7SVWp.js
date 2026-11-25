import{j as r,M as s}from"./iframe-NyHN5VRq.js";import{P as p}from"./pdf-viewer-BfJmozSD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BytkJ83s.js";import"./preload-helper-V-uedkqD.js";import"./PdfViewer-CWdaNyWt.js";import"./index-BfjQx6Ly.js";import"./BasePdfViewer-B35bLgyT.js";import"./BasePdfViewer.module.css-BvQHtGg3.js";import"./PdfViewerAnnotationLayer-DZr5DVeS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlE7UGsa.js";import"./PdfViewerOutlineSidebar-DpEOYvc4.js";import"./PdfViewerSidebarHeader-BhII8W4a.js";import"./useBaseUiId-D2dSZ8xw.js";import"./useControlled-Dh_cMPIe.js";import"./CompositeRoot-Dj0kOUZh.js";import"./CompositeItem-D6OEWPs8.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./composite-dEyBM_w4.js";import"./svgIconContainer-D2-PKO04.js";import"./PdfViewerSearchBar-Bbwhv5KR.js";import"./chevron-up-Ckv21Z8s.js";import"./chevron-down-D5RxD_5a.js";import"./cross-Dw9UKTtm.js";import"./PdfViewerSidebar-kCHtcLoZ.js";import"./index-Cf28HvbY.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./PdfViewerToolbar-bRbyl-rP.js";import"./Button-Czn8jZsp.js";import"./chevron-right-BkkLxexJ.js";import"./Input-CNTzIZ_0.js";import"./search-5FdBAUHN.js";import"./spin-CRg8N3XW.js";import"./error-CmvnS4M6.js";import"./withOsdkMetrics-5n_JPyv4.js";import"./makeExternalStore-DXy-cErB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
