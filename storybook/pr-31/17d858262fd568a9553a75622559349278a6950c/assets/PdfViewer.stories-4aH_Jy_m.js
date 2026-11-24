import{j as r,M as s}from"./iframe-KADiCVVG.js";import{P as p}from"./pdf-viewer-DT5UF-mM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYXiwf7z.js";import"./preload-helper-D58te3M_.js";import"./PdfViewer-Dn7xMRy3.js";import"./index-CFNt4Hmh.js";import"./BasePdfViewer-BtA2wWj3.js";import"./BasePdfViewer.module.css-BBNtuUp4.js";import"./PdfViewerAnnotationLayer-b9ejk768.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJdqC5cF.js";import"./PdfViewerOutlineSidebar-D_2WiG-T.js";import"./PdfViewerSidebarHeader-BrTQfSmt.js";import"./useBaseUiId-DkJPSlIK.js";import"./useControlled-CuQRRHJE.js";import"./CompositeRoot-CwY13Uvg.js";import"./CompositeItem-DQEBOfk4.js";import"./ToolbarRootContext-uHdBl0yg.js";import"./composite-SeDB-2XH.js";import"./svgIconContainer-Dv3Hq4or.js";import"./PdfViewerSearchBar-C9YR6E6G.js";import"./chevron-up-DnVww3b6.js";import"./chevron-down-BTIEyZQH.js";import"./cross-Cxbp7dY8.js";import"./PdfViewerSidebar-IwepKygW.js";import"./index-WuLuUP0t.js";import"./index-CrcqA8vK.js";import"./index-CTYcp5kB.js";import"./PdfViewerToolbar-zxjI5Rj3.js";import"./Button-DWsj5IuF.js";import"./chevron-right-DJOsXnQB.js";import"./Input-Bp50UMCa.js";import"./search-Dgg_RVXN.js";import"./spin-CA-5rWFA.js";import"./error-DeZcuLi4.js";import"./withOsdkMetrics-DJ3LBRiG.js";import"./makeExternalStore-DhWGArAF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
