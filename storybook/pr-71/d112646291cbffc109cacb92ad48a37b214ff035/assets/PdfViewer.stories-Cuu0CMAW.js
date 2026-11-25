import{j as r,M as s}from"./iframe-DchqE16O.js";import{P as p}from"./pdf-viewer-BliZTW1y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CmpoaeRB.js";import"./preload-helper-CruhVp8d.js";import"./PdfViewer-CaZYBg_h.js";import"./index-C9pVGgAF.js";import"./BasePdfViewer-6GLiwDoY.js";import"./BasePdfViewer.module.css-DHtWTsGU.js";import"./PdfViewerAnnotationLayer-D2LL6h7a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2VcrYg3.js";import"./PdfViewerOutlineSidebar-DsrZIj6N.js";import"./PdfViewerSidebarHeader-vBJvmIa1.js";import"./useBaseUiId-DavIhVcf.js";import"./useControlled-CSem3ovp.js";import"./CompositeRoot-CLpdVBfX.js";import"./CompositeItem-B0Rg-Lxm.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./composite-C-jL-lwP.js";import"./svgIconContainer-o0BLlK91.js";import"./PdfViewerSearchBar-BIcrDFBZ.js";import"./chevron-up-C61hOPNq.js";import"./chevron-down-C-JwTnNq.js";import"./cross-pv8yLqK0.js";import"./PdfViewerSidebar-DbdiRemM.js";import"./index-CyPTDzGy.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./PdfViewerToolbar-CTsj8i81.js";import"./Button-DG5zH7tS.js";import"./chevron-right-DvZFt0qg.js";import"./Input-DZYpZIAm.js";import"./search-BePaI44o.js";import"./spin-Bpuvpg-p.js";import"./error-BZzNTwNw.js";import"./withOsdkMetrics-B8g_jVC8.js";import"./makeExternalStore-DOPJ0IZk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
