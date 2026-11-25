import{j as r,M as s}from"./iframe-CXJvlF9f.js";import{P as p}from"./pdf-viewer-Dos7ziuR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-wRlzneFZ.js";import"./preload-helper-D4wndH43.js";import"./PdfViewer-DscNwafA.js";import"./index-DbRhx2FS.js";import"./BasePdfViewer-DxzqRRzf.js";import"./BasePdfViewer.module.css-yIccHtvO.js";import"./PdfViewerAnnotationLayer-BNYKxLSD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DXLWMB-W.js";import"./PdfViewerOutlineSidebar-DCX9VuO2.js";import"./PdfViewerSidebarHeader--KNYzRDD.js";import"./useBaseUiId-CS56QWvK.js";import"./useControlled-Cpt07hfE.js";import"./CompositeRoot-OuuCSZnm.js";import"./CompositeItem-CThXZzFK.js";import"./ToolbarRootContext-CYby2zsu.js";import"./composite-BN9qtXxc.js";import"./svgIconContainer-JnMWnddt.js";import"./PdfViewerSearchBar-BlO8uhRK.js";import"./chevron-up-qxyzUUZl.js";import"./chevron-down-xbAc8Fo2.js";import"./cross-smvXwA6k.js";import"./PdfViewerSidebar-BkRAOPgo.js";import"./index-Doi1M16Z.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./PdfViewerToolbar-BihJd7dJ.js";import"./Button-CsdSAMDu.js";import"./chevron-right-BWxZRdm3.js";import"./Input-Bsqv1_ng.js";import"./search-B7r0qDmR.js";import"./spin-B2AmQfCa.js";import"./error-D6bGjg1T.js";import"./withOsdkMetrics-C6MxL57R.js";import"./makeExternalStore-BjpJhFKl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
