import{j as r,M as s}from"./iframe-D4nn_Ti-.js";import{P as p}from"./pdf-viewer-D_pnEjtO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xlX2nuQq.js";import"./preload-helper-Ce3BUon1.js";import"./PdfViewer-D3MLfEHS.js";import"./index-ng3tbe9P.js";import"./BasePdfViewer-De5PfVfK.js";import"./BasePdfViewer.module.css-Blf0sFBV.js";import"./PdfViewerAnnotationLayer-Ca7G4ERv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IDyqnIqV.js";import"./PdfViewerOutlineSidebar-K2A-PT_j.js";import"./PdfViewerSidebarHeader-CcvCqzkF.js";import"./useBaseUiId-CzdAPKcM.js";import"./useControlled-C9uWc1JH.js";import"./CompositeRoot-Ccy26ic0.js";import"./CompositeItem-C2VQoVHh.js";import"./ToolbarRootContext-BeHAyrdi.js";import"./composite-DYx0o4xU.js";import"./svgIconContainer-DHuWaZTY.js";import"./PdfViewerSearchBar-BWB_51uG.js";import"./chevron-up-ovqeMCkM.js";import"./chevron-down-CHYkUqFt.js";import"./cross-Ru3cb-0v.js";import"./PdfViewerSidebar-DQjXnVUM.js";import"./index-Kx6fu-in.js";import"./index-CAS93zYH.js";import"./index-2u3EkiNe.js";import"./PdfViewerToolbar-BezMxd5z.js";import"./Button-ClRUUN4D.js";import"./chevron-right-BIKtjT4Q.js";import"./Input-BS3oHtWW.js";import"./search-Bp5Pu1gz.js";import"./spin-CpUkHYN2.js";import"./error-BpjJAz0p.js";import"./withOsdkMetrics-CSFskl9_.js";import"./makeExternalStore-BCGLTkZK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
