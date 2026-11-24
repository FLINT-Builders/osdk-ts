import{j as r,M as s}from"./iframe-Dv8One7V.js";import{P as p}from"./pdf-viewer-Cox_kU1I.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8urGH32.js";import"./preload-helper-BBoDOBGQ.js";import"./PdfViewer-Crl4ggEG.js";import"./index-BWSDrnLY.js";import"./BasePdfViewer-CUz8R_gF.js";import"./BasePdfViewer.module.css-4KrWG_ws.js";import"./PdfViewerAnnotationLayer-BTzZevmm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYgJqoc6.js";import"./PdfViewerOutlineSidebar-D00UNmSp.js";import"./PdfViewerSidebarHeader-Cx0ljc5Q.js";import"./useBaseUiId-CGmk-t13.js";import"./useControlled-Xs-DgsXw.js";import"./CompositeRoot-urMWMX1d.js";import"./CompositeItem-DnhodDvF.js";import"./ToolbarRootContext-puaQBB4T.js";import"./composite-lgOQMlQp.js";import"./svgIconContainer-frnooqcF.js";import"./PdfViewerSearchBar-B_5xBRVM.js";import"./chevron-up-DP_i6R8n.js";import"./chevron-down-BxGUpntZ.js";import"./cross-DtsB4Pth.js";import"./PdfViewerSidebar-Bcj0VimN.js";import"./index-BNO6OCKx.js";import"./index-Ctu1Wao6.js";import"./index-D03dI7Zm.js";import"./PdfViewerToolbar-RjlYpUQa.js";import"./Button-BvCCqPbi.js";import"./chevron-right-IiYeH2Q3.js";import"./Input-CVOjTeyF.js";import"./search-DIkoxWAI.js";import"./spin-CfiQxmbj.js";import"./error-DLGPeg_I.js";import"./withOsdkMetrics-CktMaht-.js";import"./makeExternalStore-BdR9BUh7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
