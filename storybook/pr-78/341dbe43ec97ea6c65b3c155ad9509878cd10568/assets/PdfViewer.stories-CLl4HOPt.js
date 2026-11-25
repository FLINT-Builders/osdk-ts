import{j as r,M as s}from"./iframe-6Z8QeqqP.js";import{P as p}from"./pdf-viewer-DOLP7Jmf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-R1BnyaXF.js";import"./preload-helper-y0D87bsA.js";import"./PdfViewer-BhNJ-0AZ.js";import"./index-HkxEzDx6.js";import"./BasePdfViewer-GHFCS9To.js";import"./BasePdfViewer.module.css-Cj6yOhTu.js";import"./PdfViewerAnnotationLayer-BlJNTWdO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aX44R5PL.js";import"./PdfViewerOutlineSidebar-BqNdMifA.js";import"./PdfViewerSidebarHeader-DS85E9BP.js";import"./useBaseUiId-Dmz3cJQe.js";import"./useControlled-Bx6RLClW.js";import"./CompositeRoot-BO1o2wsI.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./composite-DbAi9sOR.js";import"./svgIconContainer-8--RoJPk.js";import"./PdfViewerSearchBar-DaMBZE1m.js";import"./chevron-up-C7yCS-9H.js";import"./chevron-down-C4hWEHAB.js";import"./cross-MCgjL0SO.js";import"./PdfViewerSidebar-ClvfeBzj.js";import"./index-Ds85d0HR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./PdfViewerToolbar-C5gMvDXS.js";import"./Button-CwPVz1_L.js";import"./chevron-right-TcoIHU5d.js";import"./Input-DaVTG5o1.js";import"./search-CvqEaj-y.js";import"./spin-CD2ILwBM.js";import"./error-DBQvGp4O.js";import"./withOsdkMetrics-CL7caFuf.js";import"./makeExternalStore-CBiKzjzF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
