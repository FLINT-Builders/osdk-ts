import{j as r,M as s}from"./iframe-BQ-KHcHE.js";import{P as p}from"./pdf-viewer-BQRcM-eK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D9ycL1in.js";import"./preload-helper-D_u3--ud.js";import"./PdfViewer-V-KTUpaD.js";import"./index-Bi4ii54G.js";import"./BasePdfViewer-D-K5LqR9.js";import"./BasePdfViewer.module.css-WQrqgobT.js";import"./PdfViewerAnnotationLayer-BHHQbTZm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eVNDsNOT.js";import"./PdfViewerOutlineSidebar-BzdhhDg3.js";import"./PdfViewerSidebarHeader-BDlYhfth.js";import"./useBaseUiId-Da1a09f-.js";import"./useControlled-D0CpkFUO.js";import"./CompositeRoot-BdKUlpTZ.js";import"./CompositeItem-BvMYLyDt.js";import"./ToolbarRootContext-GvDSdibe.js";import"./composite-pFx5Riq1.js";import"./svgIconContainer-BkJqfnsZ.js";import"./PdfViewerSearchBar-CUvlJ7vB.js";import"./chevron-up-DKTNmGm0.js";import"./chevron-down-Bo4eEeQA.js";import"./cross-CTORp-eO.js";import"./PdfViewerSidebar-VvYWopni.js";import"./index-Dd2QToo9.js";import"./index-9EejlPKp.js";import"./index-eHVziK00.js";import"./PdfViewerToolbar-CucHzy5b.js";import"./Button-CWYPsBwI.js";import"./chevron-right-DEjpXX8T.js";import"./Input-DzeLPEOm.js";import"./search-D2FdgE19.js";import"./spin-D1tJp32W.js";import"./error-Bd9iDu5J.js";import"./withOsdkMetrics-DcXC33Yd.js";import"./makeExternalStore-wa371Aji.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
