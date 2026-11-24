import{j as r,M as s}from"./iframe-DM4xkxPz.js";import{P as p}from"./pdf-viewer-CnjlJ9ie.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9H8GyQB.js";import"./preload-helper-DjYsY0e4.js";import"./PdfViewer-BTHh6JR-.js";import"./index-CA3PhY9C.js";import"./BasePdfViewer-Bgb0o8wr.js";import"./BasePdfViewer.module.css-CIjqq0T7.js";import"./PdfViewerAnnotationLayer-DuDgJUUZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DG6fju7r.js";import"./PdfViewerOutlineSidebar-B0SwyaUs.js";import"./PdfViewerSidebarHeader-FQ_CS7jw.js";import"./useBaseUiId-06FsOnRS.js";import"./useControlled-DWhJIBEC.js";import"./CompositeRoot-DvKGMHmv.js";import"./CompositeItem-D5I-ZnjA.js";import"./ToolbarRootContext-DaxififC.js";import"./composite-DPjRORK_.js";import"./svgIconContainer-DRHE02a1.js";import"./PdfViewerSearchBar-CY-bG_nY.js";import"./chevron-up-o5g88JJ5.js";import"./chevron-down-2d4v9sYb.js";import"./cross-BIpUExIv.js";import"./PdfViewerSidebar-DN85pzLN.js";import"./index-DpHY-Tke.js";import"./index-BaPxcL-U.js";import"./index-CKWQIFc6.js";import"./PdfViewerToolbar-JW-2Vzdw.js";import"./Button-D6sOWWJg.js";import"./chevron-right-CwFfdX1f.js";import"./Input-BtFpG8L-.js";import"./search-ChvjyncO.js";import"./spin-OcCR0jFc.js";import"./error-C2OR8u8c.js";import"./withOsdkMetrics-DK0sAIWr.js";import"./makeExternalStore-oSWvZmSa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
