import{j as r,M as s}from"./iframe-ClewFmdb.js";import{P as p}from"./pdf-viewer-DWUsfRat.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DNJ986Gh.js";import"./preload-helper-C7O4zYJs.js";import"./PdfViewer-DHsXK63q.js";import"./index-euIemqPw.js";import"./BasePdfViewer-CYWs6t8U.js";import"./BasePdfViewer.module.css-DrolRzDf.js";import"./PdfViewerAnnotationLayer-kq7ERavb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w5bDwvUD.js";import"./PdfViewerOutlineSidebar-NkNGGBgw.js";import"./PdfViewerSidebarHeader-8v92o0M5.js";import"./useBaseUiId-CM0luRv8.js";import"./useControlled-8bbLsKqv.js";import"./CompositeRoot-CM77FXSy.js";import"./CompositeItem-LzMD5IlK.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./composite-C-wFuse1.js";import"./svgIconContainer-6Af8qoOE.js";import"./PdfViewerSearchBar-CmXtY6-N.js";import"./chevron-up-CgqgaZbw.js";import"./chevron-down-CN3rbJYx.js";import"./cross-C3it1rM0.js";import"./PdfViewerSidebar-Dg3FNVaQ.js";import"./index-wZBaNT0h.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./PdfViewerToolbar-CKDAtcI5.js";import"./Button-Br0QmuY1.js";import"./chevron-right-BbcA7tNE.js";import"./Input-eZMgRwLi.js";import"./search-D0xA_Pz7.js";import"./spin-BrxFvO6Q.js";import"./error-BpCPRxU6.js";import"./withOsdkMetrics-DMwTLP5k.js";import"./makeExternalStore-B6ZLCKG0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
