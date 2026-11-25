import{j as r,M as s}from"./iframe-BuSw4B6O.js";import{P as p}from"./pdf-viewer-CPNdvWNS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-haKPXppS.js";import"./preload-helper-lqh4ZshJ.js";import"./PdfViewer-D9btzTy0.js";import"./index-D9SEgQNF.js";import"./BasePdfViewer-DtyTFqS1.js";import"./BasePdfViewer.module.css-CagTZU7g.js";import"./PdfViewerAnnotationLayer-CYwCGo8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZ5p4YKE.js";import"./PdfViewerOutlineSidebar-PbANv_wL.js";import"./PdfViewerSidebarHeader-DMMJaguH.js";import"./useBaseUiId-DViO3tgt.js";import"./useControlled-8U03TFMg.js";import"./CompositeRoot-3LPr0OyZ.js";import"./CompositeItem-0tc6F5lP.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./composite-DAXoYC61.js";import"./svgIconContainer-BZgPnQyZ.js";import"./PdfViewerSearchBar-D_qbfkKq.js";import"./chevron-up-Dz5DjGZ1.js";import"./chevron-down-Cbm7pBxW.js";import"./cross-7xpX4Ge0.js";import"./PdfViewerSidebar-CCIOHtpQ.js";import"./index-DzxxLWoo.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./PdfViewerToolbar-CqB-Bmot.js";import"./Button-DZw1-eKI.js";import"./chevron-right-l9w87v6g.js";import"./Input-Ct08sj7B.js";import"./search-DRWDcQXz.js";import"./spin-DA7JA1wn.js";import"./error-mcJBKPob.js";import"./withOsdkMetrics-DUOa1-5i.js";import"./makeExternalStore-2iAw82Qk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
