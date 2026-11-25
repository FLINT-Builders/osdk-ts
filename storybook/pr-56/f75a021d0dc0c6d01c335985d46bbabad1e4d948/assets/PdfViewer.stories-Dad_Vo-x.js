import{j as r,M as s}from"./iframe-SC996r8Q.js";import{P as p}from"./pdf-viewer-CI8WPFKU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8A0sW8f.js";import"./preload-helper-4MonG5NX.js";import"./PdfViewer-CYqHarn4.js";import"./index-wDhWF-Jn.js";import"./BasePdfViewer-CtFANKZZ.js";import"./BasePdfViewer.module.css-DjWkNOV-.js";import"./PdfViewerAnnotationLayer-B4TblL4p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnztzM_2.js";import"./PdfViewerOutlineSidebar-Cqx_bKWU.js";import"./PdfViewerSidebarHeader-Vgbhvgzs.js";import"./useBaseUiId-BGvjsW3d.js";import"./useControlled-BSXRDWWj.js";import"./CompositeRoot-DPai_XzD.js";import"./CompositeItem-CYqhRUaL.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./composite-Gzk6HQ8U.js";import"./svgIconContainer-B-5c0m9a.js";import"./PdfViewerSearchBar-Bnocbnjt.js";import"./chevron-up-CKZuBF0G.js";import"./chevron-down-Bymbl15e.js";import"./cross-CSzOPxz_.js";import"./PdfViewerSidebar-bfLB-rOX.js";import"./index-lAH3DKJQ.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./PdfViewerToolbar-C6zAVMgh.js";import"./Button-4P3mfFZX.js";import"./chevron-right-BvSa08qk.js";import"./Input-CJVpnIyi.js";import"./search-DMkfs-8L.js";import"./spin-Cr6nj71E.js";import"./error-BsBvF-VX.js";import"./withOsdkMetrics-Dlvqw_Pf.js";import"./makeExternalStore-CnxIOnyb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
