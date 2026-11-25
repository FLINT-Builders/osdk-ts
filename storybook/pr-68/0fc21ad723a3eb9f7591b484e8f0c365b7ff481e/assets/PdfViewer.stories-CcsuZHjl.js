import{j as r,M as s}from"./iframe-C18Efs5F.js";import{P as p}from"./pdf-viewer-BiTvJiOv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dd1rXz56.js";import"./preload-helper-syT6W8iC.js";import"./PdfViewer-x2lNZtVu.js";import"./index-BiAToM_x.js";import"./BasePdfViewer-CoD91eV2.js";import"./BasePdfViewer.module.css-DlIElMF6.js";import"./PdfViewerAnnotationLayer-BAvFZ470.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PdYGrKmE.js";import"./PdfViewerOutlineSidebar-O_1_AlB3.js";import"./PdfViewerSidebarHeader-Cs5mvqGG.js";import"./useBaseUiId-CH-RqI0L.js";import"./useControlled-DX15Gk8S.js";import"./CompositeRoot-DPTpW5Jz.js";import"./CompositeItem-BfnoZmPC.js";import"./ToolbarRootContext-BtDS6Lf9.js";import"./composite-DGxpdZBR.js";import"./svgIconContainer-aD2IgP3d.js";import"./PdfViewerSearchBar-CDXKldAh.js";import"./chevron-up-CB1d-oq9.js";import"./chevron-down-B5XN77pz.js";import"./cross-BKCn1P0Q.js";import"./PdfViewerSidebar-DQeKFhq7.js";import"./index-eBUb3cd0.js";import"./index-MJOAOM5u.js";import"./index-Bf7Y9tWm.js";import"./PdfViewerToolbar-CV8ZGWvG.js";import"./Button-C1f49fJS.js";import"./chevron-right-cUtFaNkv.js";import"./Input-CU8PLyZJ.js";import"./search-CkIpSze3.js";import"./spin-DZ_jzcAQ.js";import"./error-BbYA8FVM.js";import"./withOsdkMetrics-D2m3J2jO.js";import"./makeExternalStore-6HXO66jA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
