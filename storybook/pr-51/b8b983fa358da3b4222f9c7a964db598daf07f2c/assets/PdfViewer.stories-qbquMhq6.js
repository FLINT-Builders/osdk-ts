import{j as r,M as s}from"./iframe-Bf8iAqL7.js";import{P as p}from"./pdf-viewer-5T3ZlaVB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BU57I_wN.js";import"./preload-helper-A1AS_NiL.js";import"./PdfViewer-BaNwOoEz.js";import"./index-Db0mdORg.js";import"./BasePdfViewer-DH9_b2pv.js";import"./BasePdfViewer.module.css-rakBJlsV.js";import"./PdfViewerAnnotationLayer-BHHaUCln.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EFp8cDL7.js";import"./PdfViewerOutlineSidebar-ooCks8Dl.js";import"./PdfViewerSidebarHeader-DW8fNr4f.js";import"./useBaseUiId-C3S3f6WK.js";import"./useControlled-BxkhcEK2.js";import"./CompositeRoot-DaDVHwhw.js";import"./CompositeItem-C29Fnmef.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./composite-DIFH8mgU.js";import"./svgIconContainer-D52qXfX5.js";import"./PdfViewerSearchBar-DRZtl9ui.js";import"./chevron-up-BNce4YsG.js";import"./chevron-down-BF98-CIj.js";import"./cross-DO1QLnzH.js";import"./PdfViewerSidebar-B4-2w6VQ.js";import"./index-CJ290pxf.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./PdfViewerToolbar-Cp5iNJhY.js";import"./Button-H641EagL.js";import"./chevron-right-BC68ajY3.js";import"./Input-3S863M3T.js";import"./search-k-BDZpAM.js";import"./spin-DbcZyuc7.js";import"./error-DTUZUWgs.js";import"./withOsdkMetrics-BNJYvdSI.js";import"./makeExternalStore-BeW1g1b1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
