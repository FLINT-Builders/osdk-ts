import{j as r,M as s}from"./iframe-BD75_EF7.js";import{P as p}from"./pdf-viewer-EJQ0CtEX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DaCreZdR.js";import"./preload-helper-C5GixA8k.js";import"./PdfViewer-CyW_NfOi.js";import"./index-Cls2haw5.js";import"./BasePdfViewer-Cg03OgtR.js";import"./BasePdfViewer.module.css-D1UevZNM.js";import"./PdfViewerAnnotationLayer-CVkeoUmL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzxXho7I.js";import"./PdfViewerOutlineSidebar-CUT2g5yx.js";import"./PdfViewerSidebarHeader-BcpkAf8h.js";import"./useBaseUiId-Se7wVqTf.js";import"./useControlled-Bb3Vr0M6.js";import"./CompositeRoot-4TSizE1k.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./composite-yd7firDo.js";import"./svgIconContainer-Bxdyh2CW.js";import"./PdfViewerSearchBar-C2Cf7fV9.js";import"./chevron-up-C_K7Qq1o.js";import"./chevron-down-34AB4AXv.js";import"./cross-sDHwt2tZ.js";import"./PdfViewerSidebar-CyXn18VN.js";import"./index-BnVPpix6.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./PdfViewerToolbar-CxulkUHa.js";import"./Button-DDPidDHF.js";import"./chevron-right-CEc8jjcp.js";import"./Input-Dmpn7F0W.js";import"./search-Fzzl4G8z.js";import"./spin-CwP0KP5S.js";import"./error-BHpOgTkX.js";import"./withOsdkMetrics-DR6keFLB.js";import"./makeExternalStore-C1ym4VUW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
