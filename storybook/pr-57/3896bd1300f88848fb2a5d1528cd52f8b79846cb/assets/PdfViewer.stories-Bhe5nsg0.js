import{j as r,M as s}from"./iframe-DowOz9LG.js";import{P as p}from"./pdf-viewer-cLITVf1Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSW54uz1.js";import"./preload-helper-DLch6InM.js";import"./PdfViewer-C8RGysYa.js";import"./index-D3uCKFRQ.js";import"./BasePdfViewer-Y6LI7xHd.js";import"./BasePdfViewer.module.css-CWD95pu1.js";import"./PdfViewerAnnotationLayer-CXyPknIs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CG27D1Fg.js";import"./PdfViewerOutlineSidebar-BGuzDTuj.js";import"./PdfViewerSidebarHeader-NGzFHsG9.js";import"./useBaseUiId-DLP_J0js.js";import"./useControlled-LhJY_NAc.js";import"./CompositeRoot-DUYivhM4.js";import"./CompositeItem-qaontuDZ.js";import"./ToolbarRootContext-tzl66m83.js";import"./composite-BqSVn4pm.js";import"./svgIconContainer-CjMFf37k.js";import"./PdfViewerSearchBar-CxK9_EXP.js";import"./chevron-up-Rtqu8gIR.js";import"./chevron-down-p34WEL5t.js";import"./cross-XY9bNztf.js";import"./PdfViewerSidebar-DKDrIj8s.js";import"./index-UMBJij_W.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./PdfViewerToolbar-CoMmbm5m.js";import"./Button-BsxP5OVh.js";import"./chevron-right-BugptRbT.js";import"./Input-EdSRgRoE.js";import"./search-Dq7gXSV-.js";import"./spin-CHa9OX3a.js";import"./error-CvT_Kc0h.js";import"./withOsdkMetrics-CwlXQjw2.js";import"./makeExternalStore-whfuUtu3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
