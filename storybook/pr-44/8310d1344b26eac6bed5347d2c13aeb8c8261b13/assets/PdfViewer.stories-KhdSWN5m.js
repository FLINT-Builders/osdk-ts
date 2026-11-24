import{j as r,M as s}from"./iframe-Ci8jv4db.js";import{P as p}from"./pdf-viewer-CRW37buI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBTn-30E.js";import"./preload-helper-BijYl_hj.js";import"./PdfViewer-C_Gp-Lza.js";import"./index-Cb4PYHc_.js";import"./BasePdfViewer-w2n2C1Ej.js";import"./BasePdfViewer.module.css-C1p1KzkQ.js";import"./PdfViewerAnnotationLayer-D2eZW-fD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLMQLcxT.js";import"./PdfViewerOutlineSidebar-B_Kv6pVc.js";import"./PdfViewerSidebarHeader-DkfAUdIn.js";import"./useBaseUiId-Dty0keys.js";import"./useControlled-AQzCfptX.js";import"./CompositeRoot-XUmcYAzj.js";import"./CompositeItem-pAC9-vMM.js";import"./ToolbarRootContext-BBg552Fz.js";import"./composite-dn8KtEdo.js";import"./svgIconContainer-Y9M5A49t.js";import"./PdfViewerSearchBar-DtZOU9Ti.js";import"./chevron-up-Daqk8-71.js";import"./chevron-down-Cogx4pq7.js";import"./cross-DUbcKgzt.js";import"./PdfViewerSidebar-Cmowur7J.js";import"./index-DBQv4m84.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./PdfViewerToolbar-up-ZzKxE.js";import"./Button-DXyPvcOa.js";import"./chevron-right-DvrzFAw_.js";import"./Input-Ctv6ca3A.js";import"./search-D0vckm_H.js";import"./spin-hLfDBB1-.js";import"./error-BVKGD7Ps.js";import"./withOsdkMetrics-BOl2WiFX.js";import"./makeExternalStore-MN51YzUq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
