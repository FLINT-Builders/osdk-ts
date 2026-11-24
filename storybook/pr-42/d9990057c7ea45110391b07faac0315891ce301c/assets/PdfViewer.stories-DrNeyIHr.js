import{j as r,M as s}from"./iframe-C-2fM64A.js";import{P as p}from"./pdf-viewer-DD2YnEx2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6DKNu30.js";import"./preload-helper-5l20kbgh.js";import"./PdfViewer-P5JsS891.js";import"./index-Dyfx2zPa.js";import"./BasePdfViewer-7-RNwYwf.js";import"./BasePdfViewer.module.css-DUsYxzd2.js";import"./PdfViewerAnnotationLayer-DbHvA21G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNMoEaKE.js";import"./PdfViewerOutlineSidebar-BB_maUG5.js";import"./PdfViewerSidebarHeader-DKVpdEMb.js";import"./useBaseUiId-CTryWo_g.js";import"./useControlled-BF8LnBHR.js";import"./CompositeRoot-DZ2My_Dy.js";import"./CompositeItem-CUIe3tWP.js";import"./ToolbarRootContext-BnUbB36R.js";import"./composite-DwmZEnpk.js";import"./svgIconContainer-C9IKjxfB.js";import"./PdfViewerSearchBar-COO52KPI.js";import"./chevron-up-Be5sFlZr.js";import"./chevron-down-BIEm0AX1.js";import"./cross-CgNS1GgR.js";import"./PdfViewerSidebar-DVP4QLJu.js";import"./index-cGgaE_Im.js";import"./index-BdbAVji3.js";import"./index-BbVHPZNY.js";import"./PdfViewerToolbar-BK_PGy5m.js";import"./Button-De1R0ypn.js";import"./chevron-right-DK-cBSwq.js";import"./Input-Dlx-frSm.js";import"./search-CLHFOlZI.js";import"./spin-r_WyrSVE.js";import"./error-DCBUh_j7.js";import"./withOsdkMetrics-HX80CHoP.js";import"./makeExternalStore-C-9kweRw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
