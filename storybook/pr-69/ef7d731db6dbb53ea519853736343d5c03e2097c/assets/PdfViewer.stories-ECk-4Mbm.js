import{j as r,M as s}from"./iframe-CEEl8rhe.js";import{P as p}from"./pdf-viewer-C-rVCJ6y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-XAa0QjJM.js";import"./preload-helper-BNeS4N_d.js";import"./PdfViewer-7RIUSAkL.js";import"./index-D3BMxXWO.js";import"./BasePdfViewer-DTQVJPbf.js";import"./BasePdfViewer.module.css-Hr_tnlzW.js";import"./PdfViewerAnnotationLayer-XTVvPBqy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHEl369E.js";import"./PdfViewerOutlineSidebar-DHXv2pB5.js";import"./PdfViewerSidebarHeader-CRexzgKL.js";import"./useBaseUiId-Bj988QM0.js";import"./useControlled-B70mnLby.js";import"./CompositeRoot-BheFnEJQ.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./composite-DpkIpZoZ.js";import"./svgIconContainer-BoK1M0P8.js";import"./PdfViewerSearchBar-Bllfm1ym.js";import"./chevron-up-n42ngsWX.js";import"./chevron-down-BGwNr8cZ.js";import"./cross-CC3rT2Cs.js";import"./PdfViewerSidebar-DSHsYv3k.js";import"./index-BCtfyswk.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./PdfViewerToolbar-C_qacoJT.js";import"./Button-YcHEvqMa.js";import"./chevron-right-CF-SiPa7.js";import"./Input-BDwKsEY1.js";import"./search-BpfeUnuY.js";import"./spin-JeEWUhTh.js";import"./error-nlz9dA9p.js";import"./withOsdkMetrics-DLFNJZK7.js";import"./makeExternalStore-hwf9V02L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
