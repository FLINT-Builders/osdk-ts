import{j as r,M as s}from"./iframe-BYlTxwz3.js";import{P as p}from"./pdf-viewer-BDyw4VVw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CLskONXZ.js";import"./preload-helper-Dkt_E4uP.js";import"./PdfViewer-w2IlnUSy.js";import"./index-Cx2xXvCr.js";import"./BasePdfViewer-DmMoYynu.js";import"./BasePdfViewer.module.css-DW9MJF5m.js";import"./PdfViewerAnnotationLayer-OuOn97XN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0MPZuX5.js";import"./PdfViewerOutlineSidebar-CevchUUG.js";import"./PdfViewerSidebarHeader-VBIfR5kt.js";import"./useBaseUiId-CHVkZxqH.js";import"./useControlled-2dwLF0eF.js";import"./CompositeRoot-B1IL3-ty.js";import"./CompositeItem-Bu4ubHAW.js";import"./ToolbarRootContext-oJ3Dqb0I.js";import"./composite-Oihes5Z3.js";import"./svgIconContainer-CCHa_D4L.js";import"./PdfViewerSearchBar-DNLZvTOt.js";import"./chevron-up-D9f0wOvg.js";import"./chevron-down-DLOLLqcE.js";import"./cross-C7CDDNJi.js";import"./PdfViewerSidebar-BycNyp4R.js";import"./index-C8P2LxHs.js";import"./index-BLjbxIz_.js";import"./index-BCCUn5eT.js";import"./PdfViewerToolbar-4Yeo8GDn.js";import"./Button-Dplh-cKa.js";import"./chevron-right-ClBNAtKP.js";import"./Input-D3288P-o.js";import"./search-CfzUYg2F.js";import"./spin-DXP1iZbc.js";import"./error-Ox3QZuhk.js";import"./withOsdkMetrics-C0BX98Nf.js";import"./makeExternalStore-DAxSMl-f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
