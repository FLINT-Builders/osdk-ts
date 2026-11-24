import{j as r,M as s}from"./iframe-BidCv6LV.js";import{P as p}from"./pdf-viewer-D6iPk7W1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAvE3br9.js";import"./preload-helper-BBvVXsFn.js";import"./PdfViewer-DgljNrOT.js";import"./index-D_xbPbxF.js";import"./BasePdfViewer-Cf6mPRrw.js";import"./BasePdfViewer.module.css-NtAjcffP.js";import"./PdfViewerAnnotationLayer-BrVY9Jh-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuWeXfIA.js";import"./PdfViewerOutlineSidebar-BsMbFPhu.js";import"./PdfViewerSidebarHeader-CJNazInI.js";import"./useBaseUiId-CQmafZWA.js";import"./useControlled-BQp7ePj5.js";import"./CompositeRoot-CgZsOIHX.js";import"./CompositeItem-BDSq8mI7.js";import"./ToolbarRootContext-DxOeY7F6.js";import"./composite-DQsyuPSU.js";import"./svgIconContainer-nuda1Slf.js";import"./PdfViewerSearchBar-vrQ24lHt.js";import"./chevron-up-C347BKUI.js";import"./chevron-down-BWg13NGV.js";import"./cross-CCgwUKs5.js";import"./PdfViewerSidebar-mEuQ4xl3.js";import"./index-B55EwGFb.js";import"./index-DdFBJ6Hh.js";import"./index-ClJ31HK1.js";import"./PdfViewerToolbar-Bqky6oXl.js";import"./Button-COF8krnH.js";import"./chevron-right-sFssOfFB.js";import"./Input-J58txkes.js";import"./search-Dw6H1JFW.js";import"./spin-CtTvyjeO.js";import"./error-CX48AH-F.js";import"./withOsdkMetrics-CGezrU5C.js";import"./makeExternalStore-mkujOin6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
