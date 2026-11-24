import{j as r,M as s}from"./iframe-DbWO1H6Q.js";import{P as p}from"./pdf-viewer-CAFO1P7X.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bg_TT4L3.js";import"./preload-helper-BJFhMS3h.js";import"./PdfViewer-gQ9gve64.js";import"./index-8DlTsQ0i.js";import"./BasePdfViewer-CDoSwCSD.js";import"./BasePdfViewer.module.css-BuRP6EN-.js";import"./PdfViewerAnnotationLayer-CSAjFjwR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcaUlf7N.js";import"./PdfViewerOutlineSidebar-BgCA1pBB.js";import"./PdfViewerSidebarHeader-C_ukKRqy.js";import"./useBaseUiId-D72Xv_RL.js";import"./useControlled-Dvfgqsbh.js";import"./CompositeRoot-BIbtdOWq.js";import"./CompositeItem-DXkoNi3p.js";import"./ToolbarRootContext-BAe250S1.js";import"./composite-EggcNtT2.js";import"./svgIconContainer-jTmyv8Oj.js";import"./PdfViewerSearchBar-BWpuRA3h.js";import"./chevron-up-DVR-Z4u3.js";import"./chevron-down-tGzF8KYs.js";import"./cross-BDoBIXl6.js";import"./PdfViewerSidebar-8xe7IDsk.js";import"./index-BHrDqoFX.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./PdfViewerToolbar-BdHuWlKp.js";import"./Button-AMxsa0l_.js";import"./chevron-right-Dr3V1djH.js";import"./Input-DsJzclhr.js";import"./search-zgN6AfWU.js";import"./spin-DZ1eeqXE.js";import"./error-7sAzP_x2.js";import"./withOsdkMetrics-Dlfz6qvi.js";import"./makeExternalStore-Ce1bwc1S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
