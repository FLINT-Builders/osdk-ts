import{j as r,M as s}from"./iframe-BrM52See.js";import{P as p}from"./pdf-viewer-CEgei0Fa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLkdsPGX.js";import"./preload-helper-DPLtzYOe.js";import"./PdfViewer-BaaSspX_.js";import"./index-H3qcjrO1.js";import"./BasePdfViewer-r-c4jXg-.js";import"./BasePdfViewer.module.css-BnnMDRCw.js";import"./PdfViewerAnnotationLayer-DpeGWQsm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYVJB-fK.js";import"./PdfViewerOutlineSidebar-c3aQ0FKR.js";import"./PdfViewerSidebarHeader-De3LK0_c.js";import"./useBaseUiId-LwZBbKwi.js";import"./useControlled--LTXft-F.js";import"./CompositeRoot-uo8Fdut_.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./composite-BZFmOQck.js";import"./svgIconContainer-DWvq_kJI.js";import"./PdfViewerSearchBar-DPl5QOpO.js";import"./chevron-up-BuIKXeGr.js";import"./chevron-down-IA-50EVq.js";import"./cross-BS83Kw7I.js";import"./PdfViewerSidebar-Cb6SckEv.js";import"./index-CHWvcJrG.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./PdfViewerToolbar-D5tWTIIV.js";import"./Button-Bor1IKlq.js";import"./chevron-right-C4zV0nyI.js";import"./Input-Ctwp83L6.js";import"./search-B5gd2r9J.js";import"./spin-CPMPS1nP.js";import"./error-DUN9wjL6.js";import"./withOsdkMetrics-DCPJGWBb.js";import"./makeExternalStore-ByUo-Oil.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
