import{j as r,M as s}from"./iframe-DzUHN8ca.js";import{P as p}from"./pdf-viewer-DonzvFtk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcYaJmKE.js";import"./preload-helper--9RxGpgt.js";import"./PdfViewer-BrK1q7Xx.js";import"./index-D6O_ioKN.js";import"./BasePdfViewer-Bc-l6A1-.js";import"./BasePdfViewer.module.css-DSZCvCz0.js";import"./PdfViewerAnnotationLayer-Blb9fC8V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct187y1t.js";import"./PdfViewerOutlineSidebar-CYfYCFvm.js";import"./PdfViewerSidebarHeader-B5NYhRYC.js";import"./useBaseUiId-sxd6xo0y.js";import"./useControlled-C2MYeSWY.js";import"./CompositeRoot-CpOQ9BSI.js";import"./CompositeItem-y4Pst_mH.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./composite-BXmDwDE8.js";import"./svgIconContainer-PY62KixA.js";import"./PdfViewerSearchBar-CpRUI5Ke.js";import"./chevron-up-CJu0Igpx.js";import"./chevron-down-gUZOAhoK.js";import"./cross-Ba2yr2aR.js";import"./PdfViewerSidebar-Dysb7myX.js";import"./index-WtiTKFpP.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./PdfViewerToolbar-BdWfHwy4.js";import"./Button-C_9t5m1R.js";import"./chevron-right-CdgHav7o.js";import"./Input-miTMtrPD.js";import"./search-CykjRKOt.js";import"./spin-B3U684Ko.js";import"./error-BMVJPOE-.js";import"./withOsdkMetrics-DpCE12mV.js";import"./makeExternalStore-BysZSooj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
