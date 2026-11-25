import{j as r,M as s}from"./iframe-D3-3nK7q.js";import{P as p}from"./pdf-viewer-DZfBO6VH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CeaoXu65.js";import"./preload-helper-BElTUCt9.js";import"./PdfViewer-DFyh3AoM.js";import"./index-CGTNyrvF.js";import"./BasePdfViewer-Bu2loNJP.js";import"./BasePdfViewer.module.css-CRdqX5OX.js";import"./PdfViewerAnnotationLayer-DHHImRSO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ycp7lw23.js";import"./PdfViewerOutlineSidebar-Du2iChHp.js";import"./PdfViewerSidebarHeader-hmbjjejh.js";import"./useBaseUiId-BfpIc49G.js";import"./useControlled-DjBtz4s1.js";import"./CompositeRoot-Csr6Nu1y.js";import"./CompositeItem-Areoylt-.js";import"./ToolbarRootContext-DQWI9XbP.js";import"./composite-D0w8ui7I.js";import"./svgIconContainer-Dmn3JYop.js";import"./PdfViewerSearchBar-DLWqQsO8.js";import"./chevron-up-EwiTS5MD.js";import"./chevron-down-B7WxA5SS.js";import"./cross-NOSp3crr.js";import"./PdfViewerSidebar-DqkC0ifc.js";import"./index-DlYOU8ER.js";import"./index-BuNH2rO3.js";import"./index-C3yTrjgV.js";import"./PdfViewerToolbar-BjHH4phB.js";import"./Button-_NTWHkbN.js";import"./chevron-right-C4BZnPsn.js";import"./Input-DujYPLSI.js";import"./search-DdBNOuKg.js";import"./spin-Df_wn2xg.js";import"./error-oDVaVcOP.js";import"./withOsdkMetrics-DQqeF1TA.js";import"./makeExternalStore-Dirg-OTC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
