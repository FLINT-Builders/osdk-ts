import{j as r,M as s}from"./iframe-Cfy1VfwI.js";import{P as p}from"./pdf-viewer-CWARSMxv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8uRhWW31.js";import"./preload-helper-D7hEGIHW.js";import"./PdfViewer-B5ECkUmE.js";import"./index-D9qChlkT.js";import"./BasePdfViewer-BSlQIhFr.js";import"./BasePdfViewer.module.css-BGqJtOXQ.js";import"./PdfViewerAnnotationLayer-CB7OpGzM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxpMoncQ.js";import"./PdfViewerOutlineSidebar-8cyBl_pG.js";import"./PdfViewerSidebarHeader-RcQpSVsA.js";import"./useBaseUiId-Bl3BCz40.js";import"./useControlled-Bb34JJQm.js";import"./CompositeRoot-kxqMthyS.js";import"./CompositeItem-BJZgOdXE.js";import"./ToolbarRootContext-BGtapBDY.js";import"./composite-DcidvM5B.js";import"./svgIconContainer-DIZS-ng4.js";import"./PdfViewerSearchBar-DNLoAf5N.js";import"./chevron-up-7_M09YGF.js";import"./chevron-down-LTPIgxFV.js";import"./cross-DCuCUk-Y.js";import"./PdfViewerSidebar-_7juP3hm.js";import"./index-Bx8gvAM_.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./PdfViewerToolbar-BVyep6mU.js";import"./Button-NH8o7MdQ.js";import"./chevron-right-C2LnPP9Y.js";import"./Input-DeAzpHTT.js";import"./search-m5EKgstc.js";import"./spin-BFVe0SM-.js";import"./error-CmqKN1z-.js";import"./withOsdkMetrics-COKuhu-t.js";import"./makeExternalStore-DUu0ElVX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
