import{j as r,M as s}from"./iframe-AucoVF3S.js";import{P as p}from"./pdf-viewer-8QSHjITo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-hruihNO0.js";import"./preload-helper-C9ibelWf.js";import"./PdfViewer-FnlsCYjw.js";import"./index-BCzMg9g9.js";import"./BasePdfViewer-DpFkl31U.js";import"./BasePdfViewer.module.css-Cb-0_3Bt.js";import"./PdfViewerAnnotationLayer-BmaMMHb6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiFS7dCZ.js";import"./PdfViewerOutlineSidebar-BMcUj5XU.js";import"./PdfViewerSidebarHeader-DXLANabK.js";import"./useBaseUiId-8trwhzTr.js";import"./useControlled-CzfSKEfy.js";import"./CompositeRoot-Do99u0Jf.js";import"./CompositeItem-DOrX4W-o.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./composite-DSdmvgK1.js";import"./svgIconContainer-61R_Lu5T.js";import"./PdfViewerSearchBar-CAEg6cEQ.js";import"./chevron-up-D6K4qSXx.js";import"./chevron-down-gqlYPD2T.js";import"./cross-CXJnoTqk.js";import"./PdfViewerSidebar-CDhqGFgz.js";import"./index-BLHxMhxy.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./PdfViewerToolbar-BGMJhxJo.js";import"./Button-Dz4p_z9s.js";import"./chevron-right-FaHrVhQ_.js";import"./Input-BiAZvzzV.js";import"./search-DPzEqCxj.js";import"./spin-CmNMAbTa.js";import"./error-SdAehXSj.js";import"./withOsdkMetrics-g1UKMxg9.js";import"./makeExternalStore-DKsNeQJB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
