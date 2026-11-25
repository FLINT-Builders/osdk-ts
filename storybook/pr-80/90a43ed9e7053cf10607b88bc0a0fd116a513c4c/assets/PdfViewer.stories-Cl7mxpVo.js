import{j as r,M as s}from"./iframe-evcKlg9V.js";import{P as p}from"./pdf-viewer-BmAYRbhn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BATDG7te.js";import"./preload-helper-WHPhz6sD.js";import"./PdfViewer-cr2Gp4L_.js";import"./index-BHwj9ia0.js";import"./BasePdfViewer-CSV2O9Bu.js";import"./BasePdfViewer.module.css-D071YQaY.js";import"./PdfViewerAnnotationLayer-BXZObZVq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7HaAjym.js";import"./PdfViewerOutlineSidebar-Cyic8mnA.js";import"./PdfViewerSidebarHeader-DtnIH29B.js";import"./useBaseUiId-DdAriUni.js";import"./useControlled-DXtgTA3C.js";import"./CompositeRoot-CqGAOBl-.js";import"./CompositeItem-Cm5MVItV.js";import"./ToolbarRootContext-RfiWxa4c.js";import"./composite-BltyBfwn.js";import"./svgIconContainer-DOh5rP9T.js";import"./PdfViewerSearchBar-Bngii11O.js";import"./chevron-up-DHFaubhs.js";import"./chevron-down-BvJqIX5i.js";import"./cross-BbmJFYQF.js";import"./PdfViewerSidebar-C-28mSIV.js";import"./index-BU0mDmBx.js";import"./index-fwET-1_r.js";import"./index-Cyl-_-yn.js";import"./PdfViewerToolbar-CFcMagw-.js";import"./Button-Bz5serEd.js";import"./chevron-right-CbLV_O7E.js";import"./Input-iRDe1k4_.js";import"./search-DhcR5bm1.js";import"./spin-Bfkyb62-.js";import"./error-BDn6-GLZ.js";import"./withOsdkMetrics-BriAHFRe.js";import"./makeExternalStore-DSan-vOh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
