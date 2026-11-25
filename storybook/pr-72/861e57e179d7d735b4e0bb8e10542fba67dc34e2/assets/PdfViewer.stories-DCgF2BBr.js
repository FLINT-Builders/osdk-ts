import{j as r,M as s}from"./iframe-NQpNXTjy.js";import{P as p}from"./pdf-viewer-J_COEw-3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C5i1bZpL.js";import"./preload-helper-CxQobykS.js";import"./PdfViewer-CPEw2gGt.js";import"./index-DPTMEED5.js";import"./BasePdfViewer-JiuLwIcA.js";import"./BasePdfViewer.module.css-BgLFZYBx.js";import"./PdfViewerAnnotationLayer-DRaICNhL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8Y18E7h.js";import"./PdfViewerOutlineSidebar-DOqiv6YB.js";import"./PdfViewerSidebarHeader-WSkjml6D.js";import"./useBaseUiId-CA0Hx9BI.js";import"./useControlled-Dfym0E7J.js";import"./CompositeRoot-BdMisPTO.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./composite-CckoXbi1.js";import"./svgIconContainer-CuTwM0es.js";import"./PdfViewerSearchBar-C55F8r_L.js";import"./chevron-up-B7IQHaXU.js";import"./chevron-down-CpS1Uhst.js";import"./cross-BXjngWjd.js";import"./PdfViewerSidebar-TYJNrS5C.js";import"./index-DD2WCnOg.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./PdfViewerToolbar-Dlbc1W9D.js";import"./Button-BW-em3cF.js";import"./chevron-right-BOmfGKrC.js";import"./Input-8evEI4JC.js";import"./search-5LAMc9Yr.js";import"./spin-MZYPvdKa.js";import"./error-DtbT1aJ_.js";import"./withOsdkMetrics-BrRP7bk2.js";import"./makeExternalStore-C9iKzFcW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
