import{j as r,M as s}from"./iframe-DDeGahZQ.js";import{P as p}from"./pdf-viewer-BKfYL7PT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDiLIj3G.js";import"./preload-helper-DtgmNnbI.js";import"./PdfViewer-BwC2m5Bi.js";import"./index-DmzUE8wO.js";import"./BasePdfViewer-Dmo4NMnG.js";import"./BasePdfViewer.module.css-B960dpcs.js";import"./PdfViewerAnnotationLayer-D8TTT2ME.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwN6l1wB.js";import"./PdfViewerOutlineSidebar-CS2g4gMm.js";import"./PdfViewerSidebarHeader-D6JhENs6.js";import"./useBaseUiId-Uk2yI-zs.js";import"./useControlled-DDjbaAaA.js";import"./CompositeRoot-4sUeKOQB.js";import"./CompositeItem-CzJNtMzg.js";import"./ToolbarRootContext-BskRjAbe.js";import"./composite-DuB4E-UY.js";import"./svgIconContainer-B2HbnTiE.js";import"./PdfViewerSearchBar-6Zg8hiBC.js";import"./chevron-up-BGhtc_wn.js";import"./chevron-down-pfh009HU.js";import"./cross-CI1lfvZf.js";import"./PdfViewerSidebar-4tKqMPBD.js";import"./index-DYAYOGTV.js";import"./index-Qn8k8FvG.js";import"./index-CY6cJAVJ.js";import"./PdfViewerToolbar-CU7rt7Uu.js";import"./Button-UHTxjv3g.js";import"./chevron-right-Tyqx-etd.js";import"./Input-CvWBm2e5.js";import"./search-C8c8T19Z.js";import"./spin-r13NKNZl.js";import"./error-CAQ2487J.js";import"./withOsdkMetrics-WPbxRBR5.js";import"./makeExternalStore-BTS0MLYS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
