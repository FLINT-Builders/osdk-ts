import{j as r,M as s}from"./iframe-Bp1PfZ7l.js";import{P as p}from"./pdf-viewer-BkTFG82Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BYHJbfgl.js";import"./preload-helper-BYGb1pKj.js";import"./PdfViewer-u6hvQPyn.js";import"./index-DadzeF-d.js";import"./BasePdfViewer-uHIQcRxq.js";import"./BasePdfViewer.module.css-BGaKdcBh.js";import"./PdfViewerAnnotationLayer-DkJuqpjM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bowTOqn-.js";import"./PdfViewerOutlineSidebar-B2S8SAMS.js";import"./PdfViewerSidebarHeader-BtbwrEl8.js";import"./useBaseUiId-XqSzBNHS.js";import"./useControlled-C8ihAa2k.js";import"./CompositeRoot-Dhhl8j5D.js";import"./CompositeItem-CblUCnkP.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./composite-DLzwtS5G.js";import"./svgIconContainer-OMPXv01U.js";import"./PdfViewerSearchBar-DkdYTrMG.js";import"./chevron-up-CxkBKpuj.js";import"./chevron-down-BV-xsSzp.js";import"./cross-DFx0C0Nt.js";import"./PdfViewerSidebar-yveXimRh.js";import"./index-Dw1tJRkX.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./PdfViewerToolbar-DgXTnpG0.js";import"./Button-Bt-2SXbx.js";import"./chevron-right-GnlBhw-E.js";import"./Input-B12oUm4E.js";import"./search-BsLkibR5.js";import"./spin-CpHJj3Eh.js";import"./error-CO92q5PK.js";import"./withOsdkMetrics-DXXjNZYb.js";import"./makeExternalStore-B5XHk3Oq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
