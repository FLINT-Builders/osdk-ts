import{j as r,M as s}from"./iframe-B8aqmfIp.js";import{P as p}from"./pdf-viewer-DGCKIZRm.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-htuV7hxZ.js";import"./preload-helper-BobhKb97.js";import"./PdfViewer-Bbo9h2D3.js";import"./index-CCmxkdzs.js";import"./BasePdfViewer-Cx3XI7o7.js";import"./BasePdfViewer.module.css-DPLC8Ipi.js";import"./PdfViewerAnnotationLayer-J55K09K6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfhrtCrW.js";import"./PdfViewerOutlineSidebar-B2PTNVJ8.js";import"./PdfViewerSidebarHeader-DJ2v-FvB.js";import"./useBaseUiId-CHkfiAje.js";import"./useControlled-l0oFblvc.js";import"./CompositeRoot-CaPCD8lM.js";import"./CompositeItem-n7lnxb-_.js";import"./ToolbarRootContext-DSbkosxV.js";import"./composite-1RtIqJwV.js";import"./svgIconContainer-FLeE6-vR.js";import"./PdfViewerSearchBar-Dra_2QyV.js";import"./chevron-up-Bij9WhX-.js";import"./chevron-down-BVT6rcNJ.js";import"./cross-DRKTQkbP.js";import"./PdfViewerSidebar-PJ3tOhuJ.js";import"./index-Cywz4iSb.js";import"./index-DKejFzow.js";import"./index-BSGZXMXF.js";import"./PdfViewerToolbar-B29SeKaZ.js";import"./Button-DdUUuDX9.js";import"./chevron-right-S9mlitk3.js";import"./Input-CgHBa2SL.js";import"./search-Bqpxl0Af.js";import"./spin-MfDNNiOq.js";import"./error-DApsL9NG.js";import"./withOsdkMetrics-C411Tmmb.js";import"./makeExternalStore-DGiu_EM6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
