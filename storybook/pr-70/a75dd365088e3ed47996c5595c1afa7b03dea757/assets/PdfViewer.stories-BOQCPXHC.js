import{j as r,M as s}from"./iframe-CP9a7nUw.js";import{P as p}from"./pdf-viewer-CJlwKkGa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtwOiyZG.js";import"./preload-helper-CEsPI4dA.js";import"./PdfViewer-VA3gpuha.js";import"./index-DniCSj7w.js";import"./BasePdfViewer-BK0QzEX4.js";import"./BasePdfViewer.module.css-BBamwvo9.js";import"./PdfViewerAnnotationLayer-C_4qkwOv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjMBqI11.js";import"./PdfViewerOutlineSidebar-BHkkiqL6.js";import"./PdfViewerSidebarHeader-DT8mACg6.js";import"./useBaseUiId-DiSl6omO.js";import"./useControlled-CuJAn8pg.js";import"./CompositeRoot--EiGvR1F.js";import"./CompositeItem-CqeBUtGk.js";import"./ToolbarRootContext-UMchbOHm.js";import"./composite-glykujGt.js";import"./svgIconContainer-2VLDNHQf.js";import"./PdfViewerSearchBar-Dy9j8pdC.js";import"./chevron-up-CPCCmFza.js";import"./chevron-down-BeMypg5x.js";import"./cross-CzNskJpg.js";import"./PdfViewerSidebar-DHQXNlUx.js";import"./index-C0KVErgA.js";import"./index-iwc-nvij.js";import"./index-DmfmdOfN.js";import"./PdfViewerToolbar-BFssttHC.js";import"./Button-CmgLZAkm.js";import"./chevron-right-CNYe4TwH.js";import"./Input-CWaAUNjQ.js";import"./search-XcYtnEQZ.js";import"./spin-Be_giZcd.js";import"./error-XoDyt_r9.js";import"./withOsdkMetrics-tcURfXmI.js";import"./makeExternalStore-BVCeMHz1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
