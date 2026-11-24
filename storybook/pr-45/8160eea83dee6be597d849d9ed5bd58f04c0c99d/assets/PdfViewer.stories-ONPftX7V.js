import{j as r,M as s}from"./iframe-xhm5OChx.js";import{P as p}from"./pdf-viewer-BwAx4GmT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CR_eUdxf.js";import"./preload-helper-BZJxKfIr.js";import"./PdfViewer-CKeyPzVE.js";import"./index-Ctr0pjQq.js";import"./BasePdfViewer-DEwhh3nF.js";import"./BasePdfViewer.module.css-CH-1T45r.js";import"./PdfViewerAnnotationLayer-CJs09Sr3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX_SlNiM.js";import"./PdfViewerOutlineSidebar-DzJfnPGJ.js";import"./PdfViewerSidebarHeader-nIQr0Iae.js";import"./useBaseUiId-q04gmumk.js";import"./useControlled-CXKnX_iS.js";import"./CompositeRoot-CUokxOWA.js";import"./CompositeItem-CtXkcFLl.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./composite-BhQucQ6w.js";import"./svgIconContainer-CdfxSdaj.js";import"./PdfViewerSearchBar-BlOdEkmz.js";import"./chevron-up-dxjC7vAP.js";import"./chevron-down-BsRYwsxE.js";import"./cross-C-3m77s9.js";import"./PdfViewerSidebar-Cn0GzM1X.js";import"./index-DRcQ3DSW.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./PdfViewerToolbar-C2_bdvGK.js";import"./Button-Cx_zDl37.js";import"./chevron-right-D0vhGFGt.js";import"./Input-wfXCkxXX.js";import"./search-Cq1dDtD0.js";import"./spin-JDpABkA3.js";import"./error-QOz5QiuQ.js";import"./withOsdkMetrics-nVSio52c.js";import"./makeExternalStore-Yu1AfO63.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
