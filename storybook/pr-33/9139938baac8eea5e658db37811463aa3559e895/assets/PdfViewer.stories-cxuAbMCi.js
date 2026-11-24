import{j as r,M as s}from"./iframe-CSBSqJV-.js";import{P as p}from"./pdf-viewer-G9uyxSKF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B1J2g5Dy.js";import"./preload-helper-y6YPEm4u.js";import"./PdfViewer-Da3dcyHG.js";import"./index-BJfVWZd-.js";import"./BasePdfViewer-qynTSaHb.js";import"./BasePdfViewer.module.css-BdWOjFsb.js";import"./PdfViewerAnnotationLayer-BD3urzEW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAd7Y3Ts.js";import"./PdfViewerOutlineSidebar-Dk01yFYC.js";import"./PdfViewerSidebarHeader-5-nb2l3t.js";import"./useBaseUiId-Bc5TgsQW.js";import"./useControlled-Bac_91v3.js";import"./CompositeRoot-hq88bvC5.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./composite-jPJKKGn2.js";import"./svgIconContainer-CLK7EnDK.js";import"./PdfViewerSearchBar-CVCMjZCI.js";import"./chevron-up-D8M8WnFY.js";import"./chevron-down-C4EMQsdy.js";import"./cross-B6WlAhq-.js";import"./PdfViewerSidebar-DzX53o5L.js";import"./index-B3n_oO7A.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./PdfViewerToolbar-IPXypMMr.js";import"./Button-Dh9tN-kh.js";import"./chevron-right-BZgL6DkM.js";import"./Input-B47Y97Of.js";import"./search-DvlP61aE.js";import"./spin-BRXlMFHC.js";import"./error-CRSueJec.js";import"./withOsdkMetrics-B-CwHZa2.js";import"./makeExternalStore-BuktQzqG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
