import{j as r,M as s}from"./iframe-DUf0ZM0m.js";import{P as p}from"./pdf-viewer-k9CphKWW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCXSPTLh.js";import"./preload-helper-KlMKjl9V.js";import"./PdfViewer-BUXnMBIR.js";import"./index-DhPIhyt4.js";import"./BasePdfViewer-yw55y2zK.js";import"./BasePdfViewer.module.css-BfMEYkfT.js";import"./PdfViewerAnnotationLayer-DWaTttQe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2obAOJMA.js";import"./PdfViewerOutlineSidebar-D2VtBzpE.js";import"./PdfViewerSidebarHeader-UeEa4M6w.js";import"./useBaseUiId-CCdSaAp3.js";import"./useControlled-D9pcZLhn.js";import"./CompositeRoot-CZZ219Vr.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./composite-Ca3Atwol.js";import"./svgIconContainer-DIQ4r6yH.js";import"./PdfViewerSearchBar-BpS8fqWO.js";import"./chevron-up-CNKZo9h0.js";import"./chevron-down-BElmyRaO.js";import"./cross-CSu9pd0U.js";import"./PdfViewerSidebar-DbJvqGKp.js";import"./index-C9tEn2VI.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./PdfViewerToolbar-jkQJXmWB.js";import"./Button-27JXw8gN.js";import"./chevron-right-dTy-D5bE.js";import"./Input-D5jZGu61.js";import"./search-BTSIL3B5.js";import"./spin-CCR0XPvT.js";import"./error-wj1vfq65.js";import"./withOsdkMetrics-DuLTXoUD.js";import"./makeExternalStore-CiGKFh7B.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
