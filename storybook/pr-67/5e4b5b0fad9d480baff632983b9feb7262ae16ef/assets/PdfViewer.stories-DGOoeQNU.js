import{j as r,M as s}from"./iframe-BzttuLup.js";import{P as p}from"./pdf-viewer-DMirQKAn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B0Sxhpf0.js";import"./preload-helper-DEinGEya.js";import"./PdfViewer-BIs2jsij.js";import"./index-7CJFn-ex.js";import"./BasePdfViewer-1c7jGNl1.js";import"./BasePdfViewer.module.css-CZo5RwkA.js";import"./PdfViewerAnnotationLayer-nBosNvaO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_uZo-ji.js";import"./PdfViewerOutlineSidebar-Byw9LTDH.js";import"./PdfViewerSidebarHeader-14rlFSTC.js";import"./useBaseUiId-C_qs9mR7.js";import"./useControlled-DvTO4Lqf.js";import"./CompositeRoot-DTByr4D7.js";import"./CompositeItem-E8-A5SU4.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./composite-CYx1_fMl.js";import"./svgIconContainer-BicyMjFC.js";import"./PdfViewerSearchBar-CJT-HNo7.js";import"./chevron-up-hQRFXICB.js";import"./chevron-down-_FTLKkTP.js";import"./cross-4RHnOViN.js";import"./PdfViewerSidebar-Cp3peGRo.js";import"./index-Dint05uq.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./PdfViewerToolbar-Vot6a9Vw.js";import"./Button-B0wCjsGN.js";import"./chevron-right-Cm7dHnzK.js";import"./Input-BumRROcl.js";import"./search-Dt2zfbsw.js";import"./spin-qrt8w3_s.js";import"./error-CLZJuCl2.js";import"./withOsdkMetrics-Dfc2rN4I.js";import"./makeExternalStore-DAGqxfwp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
