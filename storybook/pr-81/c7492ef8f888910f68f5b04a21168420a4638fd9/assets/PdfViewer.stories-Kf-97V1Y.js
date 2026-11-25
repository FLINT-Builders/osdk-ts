import{j as r,M as s}from"./iframe-noPC7Lrb.js";import{P as p}from"./pdf-viewer-CQwoAIDF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DANACj5v.js";import"./preload-helper-Cv3u2ZXJ.js";import"./PdfViewer-DCMQhLKW.js";import"./index-CRR0rEAm.js";import"./BasePdfViewer-Cd51xmsv.js";import"./BasePdfViewer.module.css-C8IRHYBk.js";import"./PdfViewerAnnotationLayer-DY0Oai08.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmxWtzxx.js";import"./PdfViewerOutlineSidebar-B0XDgTtj.js";import"./PdfViewerSidebarHeader-CO5je6yK.js";import"./useBaseUiId-CoV6fGPK.js";import"./useControlled-C-YKkMIr.js";import"./CompositeRoot-Lsq7g8jM.js";import"./CompositeItem-D_EklmEL.js";import"./ToolbarRootContext-Bdg1UlUu.js";import"./composite-DfMavTxP.js";import"./svgIconContainer-BC4HVzzK.js";import"./PdfViewerSearchBar-BSKOn4-q.js";import"./chevron-up-AOdU2TP1.js";import"./chevron-down-HJE4Bk-A.js";import"./cross-B9cEQ0YT.js";import"./PdfViewerSidebar-DR6rjfh0.js";import"./index-COKLl5_k.js";import"./index-DsgPUYZ8.js";import"./index-CmlqLPJk.js";import"./PdfViewerToolbar-CV2iHjqk.js";import"./Button-s6ph9E-u.js";import"./chevron-right-D5h646T1.js";import"./Input-BP2SPX2T.js";import"./search-DEVlZZxm.js";import"./spin-Iospq_wb.js";import"./error-P0w1sFZO.js";import"./withOsdkMetrics-8bSzfY7q.js";import"./makeExternalStore-BIBA_2Dm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
