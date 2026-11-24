import{j as r,M as s}from"./iframe-DGWnG-cP.js";import{P as p}from"./pdf-viewer-Bj2sa6_e.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5YRc-dog.js";import"./preload-helper-3cdipQWl.js";import"./PdfViewer-DPRVjZ57.js";import"./index-C0zbU9rL.js";import"./BasePdfViewer-C3MJaxvT.js";import"./BasePdfViewer.module.css-DKrwvPFX.js";import"./PdfViewerAnnotationLayer-BfFJQ2MP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiPcMg7g.js";import"./PdfViewerOutlineSidebar-Dw3ToZNS.js";import"./PdfViewerSidebarHeader-C0EeQbS-.js";import"./useBaseUiId-DVxcG4_I.js";import"./useControlled-BBmR2WL-.js";import"./CompositeRoot-CbdQ8BoQ.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./composite-B33N3UBB.js";import"./svgIconContainer-B16Mzywl.js";import"./PdfViewerSearchBar-mXXDpy5W.js";import"./chevron-up-CeZ3fwKx.js";import"./chevron-down-BFuZIkTt.js";import"./cross-DlI64HlO.js";import"./PdfViewerSidebar-CQqEKRE9.js";import"./index-CrcNgxS8.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./PdfViewerToolbar-AZb6ZzMB.js";import"./Button-BcmhO12Y.js";import"./chevron-right-CsK0urMv.js";import"./Input-DwaikOPa.js";import"./search-UMxzoTWH.js";import"./spin-Cwe7KqtK.js";import"./error-qdaiM9ZH.js";import"./withOsdkMetrics-UcMYR7XC.js";import"./makeExternalStore-WGQ2sL4W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
