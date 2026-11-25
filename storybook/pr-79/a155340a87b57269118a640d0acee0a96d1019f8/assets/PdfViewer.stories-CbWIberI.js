import{j as r,M as s}from"./iframe-D2N6QAO4.js";import{P as p}from"./pdf-viewer-DumFGtOv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bmayokw_.js";import"./preload-helper-C0G0Ely3.js";import"./PdfViewer-CngA0upG.js";import"./index-C6mUO3LG.js";import"./BasePdfViewer-kVm9ruzl.js";import"./BasePdfViewer.module.css-Dr0q5w3q.js";import"./PdfViewerAnnotationLayer-CMGxfCjn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8AuGxiw.js";import"./PdfViewerOutlineSidebar-Y3ibHnzM.js";import"./PdfViewerSidebarHeader-ChmWpPKF.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./useControlled-BXWTj0go.js";import"./CompositeRoot-BtQckVxC.js";import"./CompositeItem-DgrMig66.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./composite-Csdn23VF.js";import"./svgIconContainer-CNArd5Vw.js";import"./PdfViewerSearchBar-DY2fjbXm.js";import"./chevron-up-BrEHWZ8y.js";import"./chevron-down-BAjPYhxH.js";import"./cross-33P9gQ16.js";import"./PdfViewerSidebar-DwlGFKqT.js";import"./index-BaO-kZLo.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./PdfViewerToolbar-C31PrChJ.js";import"./Button-g15W-Nz5.js";import"./chevron-right-I5y9F_Up.js";import"./Input-DOJuMFjU.js";import"./search-C7B0jIv9.js";import"./spin-Dv8zs8UW.js";import"./error-DOYfumOT.js";import"./withOsdkMetrics-gaJzJVhq.js";import"./makeExternalStore-B1G3DsJO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
