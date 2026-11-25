import{j as r,M as s}from"./iframe-DhvlIxBR.js";import{P as p}from"./pdf-viewer-DeYCT7ci.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-YagD-uZW.js";import"./preload-helper-D751HZEW.js";import"./PdfViewer-CGmDXJf7.js";import"./index-BUWZX9Fc.js";import"./BasePdfViewer-CSFDOVu6.js";import"./BasePdfViewer.module.css-BEsElC9r.js";import"./PdfViewerAnnotationLayer-qxLLpaFu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1QDnRh2.js";import"./PdfViewerOutlineSidebar-DT_jX8Cb.js";import"./PdfViewerSidebarHeader-C1ujb3ul.js";import"./useBaseUiId-BHihEKOR.js";import"./useControlled-8xbCIwQq.js";import"./CompositeRoot-CuH4EY6f.js";import"./CompositeItem-feBepckq.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./composite-ChzFIgZg.js";import"./svgIconContainer-D7zjQbdd.js";import"./PdfViewerSearchBar-DUMcfcgr.js";import"./chevron-up-BssmTsyd.js";import"./chevron-down-Cl04GCmI.js";import"./cross-DZn8lU4z.js";import"./PdfViewerSidebar-B6Me8F25.js";import"./index-BJZEpaeF.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./PdfViewerToolbar-C6Ja67jX.js";import"./Button-CIdQiPdq.js";import"./chevron-right-BWgVdXrb.js";import"./Input-BFA2W1TJ.js";import"./search-CvBEwoSG.js";import"./spin-CkB1WIgH.js";import"./error-CuUFOnij.js";import"./withOsdkMetrics-CNcx6if6.js";import"./makeExternalStore-s_GWGbTj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
