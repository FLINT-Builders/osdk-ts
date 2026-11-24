import{j as r,M as s}from"./iframe-9Qc56ENr.js";import{P as p}from"./pdf-viewer-DrciqyOs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZnvx6Od.js";import"./preload-helper-DyAcE4yv.js";import"./PdfViewer-B7bgKpBp.js";import"./index-OROGqtQ6.js";import"./BasePdfViewer-BOWFUqs5.js";import"./BasePdfViewer.module.css-DFLeAuip.js";import"./PdfViewerAnnotationLayer-CCYAUMmt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM9q5VND.js";import"./PdfViewerOutlineSidebar-DY532s8V.js";import"./PdfViewerSidebarHeader-CCXIjl1M.js";import"./useBaseUiId-FwL7BYPy.js";import"./useControlled-B_qIqTVD.js";import"./CompositeRoot-B8gwICha.js";import"./CompositeItem-BURGIqnl.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./composite-DhCF3AFw.js";import"./svgIconContainer-8v5BjuYc.js";import"./PdfViewerSearchBar-DBWZiBup.js";import"./chevron-up-DU32ULko.js";import"./chevron-down-DTg_s13_.js";import"./cross-BiOFXjvO.js";import"./PdfViewerSidebar-Dtid74Z8.js";import"./index-DZAIQf61.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./PdfViewerToolbar-DolzFeEA.js";import"./Button-D4UJHZ4Q.js";import"./chevron-right-DwFFo-TS.js";import"./Input-BNo-_u5D.js";import"./search-cLeveEh6.js";import"./spin-Bf5RtnYi.js";import"./error-BiGuleu5.js";import"./withOsdkMetrics-HzozZnUd.js";import"./makeExternalStore-DqYHgnt1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
