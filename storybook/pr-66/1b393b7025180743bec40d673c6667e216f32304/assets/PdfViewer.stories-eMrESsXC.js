import{j as r,M as s}from"./iframe-DVXjYepe.js";import{P as p}from"./pdf-viewer-DlNVTt2r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MeieRVUC.js";import"./preload-helper-DoQZ9wQO.js";import"./PdfViewer-W7LV2v9t.js";import"./index-xEG3qOed.js";import"./BasePdfViewer-C4q4K14U.js";import"./BasePdfViewer.module.css-CObC6nRR.js";import"./PdfViewerAnnotationLayer-DtHWCoRj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be3KsedH.js";import"./PdfViewerOutlineSidebar-qbEj2Lds.js";import"./PdfViewerSidebarHeader-D3ZzNKQK.js";import"./useBaseUiId--5oKpwvu.js";import"./useControlled-urWeze7M.js";import"./CompositeRoot-2Gh4EtYu.js";import"./CompositeItem-Bmf0StTl.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./composite-D8RKaTKg.js";import"./svgIconContainer-BJPtXOwn.js";import"./PdfViewerSearchBar-WKt3SUdL.js";import"./chevron-up-ChqE3_Am.js";import"./chevron-down-Bzvk1BIc.js";import"./cross-B8UbpGAg.js";import"./PdfViewerSidebar-Dr4cEE77.js";import"./index-BOgvpjI5.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./PdfViewerToolbar-CYqWVmaz.js";import"./Button-CMf4Lntc.js";import"./chevron-right-7MODY3jV.js";import"./Input-BN6UqcCj.js";import"./search-B-9-6Ofx.js";import"./spin-HsvXL76h.js";import"./error-DfVU-Ijw.js";import"./withOsdkMetrics-DmcVbwBr.js";import"./makeExternalStore-BgZoDepZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
