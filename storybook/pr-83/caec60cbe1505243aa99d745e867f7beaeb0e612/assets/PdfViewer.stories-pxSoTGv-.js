import{j as r,M as s}from"./iframe-C6x_-cCw.js";import{P as p}from"./pdf-viewer-CkgrmvPf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DI0vaN7G.js";import"./preload-helper-C5M_clDJ.js";import"./PdfViewer-BXB0ie6n.js";import"./index-DG092T-D.js";import"./BasePdfViewer-MAEK9diE.js";import"./BasePdfViewer.module.css-vE4hgW89.js";import"./PdfViewerAnnotationLayer-Blz6waIy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNFzG7DT.js";import"./PdfViewerOutlineSidebar-BRQ08YwF.js";import"./PdfViewerSidebarHeader-DnqVvnad.js";import"./useBaseUiId-UYgWBkOi.js";import"./useControlled-DzDgqIkH.js";import"./CompositeRoot-Dk-xtveW.js";import"./CompositeItem-DKoeFQh8.js";import"./ToolbarRootContext-DBEn4rvT.js";import"./composite-BSZVTMPL.js";import"./svgIconContainer-Bkyrnuc-.js";import"./PdfViewerSearchBar-BuLx7s28.js";import"./chevron-up-B1IsUn2J.js";import"./chevron-down-BDM7mpPh.js";import"./cross-l0aAmTW5.js";import"./PdfViewerSidebar-BPguCvRM.js";import"./index-BmgKiP-K.js";import"./index-hI-Jf30A.js";import"./index-C-0Da6r-.js";import"./PdfViewerToolbar-CwlHJJHj.js";import"./Button-BKdv7kuC.js";import"./chevron-right-CEDB-r0F.js";import"./Input-wynBa1uS.js";import"./search-DNxvrUDH.js";import"./spin-qr0NPuB6.js";import"./error-owN_za9g.js";import"./withOsdkMetrics-FojMXCRT.js";import"./makeExternalStore-DVp6XbDL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
