import{j as r,M as s}from"./iframe-COTYg0i4.js";import{P as p}from"./pdf-viewer-DBF5JrKl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PW8dT0Wm.js";import"./preload-helper-BfUBPZQv.js";import"./PdfViewer-BFikDWlr.js";import"./index-DEWKwQ6D.js";import"./BasePdfViewer-YjbleucY.js";import"./BasePdfViewer.module.css-IZH5mnx8.js";import"./PdfViewerAnnotationLayer-DnKpAq9I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BM79nqW9.js";import"./PdfViewerOutlineSidebar-D8k41uGE.js";import"./PdfViewerSidebarHeader-JXBxUxXP.js";import"./useBaseUiId-B73nbOFb.js";import"./useControlled-BH9DAJiP.js";import"./CompositeRoot-2mcF1pFV.js";import"./CompositeItem-D4sOZv8D.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./composite-DLNSROKR.js";import"./svgIconContainer-DSLsCdLH.js";import"./PdfViewerSearchBar-ZUJdWvBd.js";import"./chevron-up-DmL2Ml8d.js";import"./chevron-down-DHzInOjp.js";import"./cross-pC4h9ZyI.js";import"./PdfViewerSidebar-Ys5trzIa.js";import"./index-BaMA_XVs.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./PdfViewerToolbar-ja5oxJT6.js";import"./Button-BBJ0BrTf.js";import"./chevron-right-DC5UOkyW.js";import"./Input-DNkGR0ru.js";import"./search-Di0PIeOa.js";import"./spin-DoRb3-Cb.js";import"./error-DlWRXjMl.js";import"./withOsdkMetrics-0S6rxLM8.js";import"./makeExternalStore-DrnQQ2FN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
