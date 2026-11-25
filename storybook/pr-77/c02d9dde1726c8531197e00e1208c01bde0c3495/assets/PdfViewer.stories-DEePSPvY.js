import{j as r,M as s}from"./iframe-BimQ5I7B.js";import{P as p}from"./pdf-viewer-dCoy9yIc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cjm2ZDPr.js";import"./preload-helper-DVgp4Odj.js";import"./PdfViewer-CXcL-540.js";import"./index-Bterpizd.js";import"./BasePdfViewer-C9zNeyNn.js";import"./BasePdfViewer.module.css-CX2aBhaJ.js";import"./PdfViewerAnnotationLayer-CKQQMyqZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeLrRa4i.js";import"./PdfViewerOutlineSidebar-OxhfYwQE.js";import"./PdfViewerSidebarHeader-BF2udWn5.js";import"./useBaseUiId-C8madkWI.js";import"./useControlled-BZPlZ-l4.js";import"./CompositeRoot-d575uYhY.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./composite-CFQYUg6D.js";import"./svgIconContainer-B7sYR9CH.js";import"./PdfViewerSearchBar-D0sevriG.js";import"./chevron-up-D88hSPpg.js";import"./chevron-down-BSMcI5Uh.js";import"./cross-B1ycp5D_.js";import"./PdfViewerSidebar-Snb27eeC.js";import"./index-Drk-T-LH.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./PdfViewerToolbar-Cg3azeyA.js";import"./Button-BDC1u4I1.js";import"./chevron-right-BLdCnZqq.js";import"./Input-BgCDGlWE.js";import"./search-2ZJHkAe4.js";import"./spin-Cip8oUnA.js";import"./error-Cm6SmQec.js";import"./withOsdkMetrics-D3LiHDOi.js";import"./makeExternalStore-BMJZ0gXh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
