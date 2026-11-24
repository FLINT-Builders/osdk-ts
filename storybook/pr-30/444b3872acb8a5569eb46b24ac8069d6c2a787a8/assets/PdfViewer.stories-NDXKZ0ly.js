import{j as r,M as s}from"./iframe-DTT6nz7o.js";import{P as p}from"./pdf-viewer-CVvE1YCo.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D4gifwtg.js";import"./preload-helper-B1xGfzPI.js";import"./PdfViewer-C4wCxaBH.js";import"./index-CTxHEiTU.js";import"./BasePdfViewer-viUZJFQK.js";import"./BasePdfViewer.module.css-DNrb_Nw2.js";import"./PdfViewerAnnotationLayer-CsXR_VRM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU3QmSZ3.js";import"./PdfViewerOutlineSidebar-DshRmllm.js";import"./PdfViewerSidebarHeader-BDx8HiSs.js";import"./useBaseUiId-eE74TdDR.js";import"./useControlled-nQOh3ft9.js";import"./CompositeRoot-B4HFpd9W.js";import"./CompositeItem-Wk4nNvBM.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./composite-Cb2l-Kwg.js";import"./svgIconContainer-CgqmpPt6.js";import"./PdfViewerSearchBar-Cz_jhgPD.js";import"./chevron-up-JjuR9-oT.js";import"./chevron-down-C4sokJMh.js";import"./cross-BgvHTgXn.js";import"./PdfViewerSidebar-BJ0n6CRL.js";import"./index-BU5fSJ65.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./PdfViewerToolbar-DfU-Orc7.js";import"./Button-CQ5X8faA.js";import"./chevron-right-Dre0YvD_.js";import"./Input-DUSBBA6M.js";import"./search-pmwVSsC3.js";import"./spin-u_Gd6uE5.js";import"./error-DTxCn2-C.js";import"./withOsdkMetrics-pvC18r39.js";import"./makeExternalStore-S1Q9iP-N.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
