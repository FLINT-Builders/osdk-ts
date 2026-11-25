import{j as r,M as s}from"./iframe-DSQ_OwRS.js";import{P as p}from"./pdf-viewer-DM_F2ofe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-CJrZqd.js";import"./preload-helper-CLqqVN7k.js";import"./PdfViewer-DRhgUvJ2.js";import"./index-B0q23UFt.js";import"./BasePdfViewer-D58nxy_C.js";import"./BasePdfViewer.module.css-BW1zoPHP.js";import"./PdfViewerAnnotationLayer-BCu-93Zw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dva3_Sgx.js";import"./PdfViewerOutlineSidebar-DTxMkOGA.js";import"./PdfViewerSidebarHeader-BbksBieq.js";import"./useBaseUiId-C6Wr8zKH.js";import"./useControlled-C2eTizRr.js";import"./CompositeRoot-MA4Aekb5.js";import"./CompositeItem-GcMwnNE0.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./composite-Dp3eVNnJ.js";import"./svgIconContainer-BcPAhmn-.js";import"./PdfViewerSearchBar-UboHRvKn.js";import"./chevron-up-B_f1sOSM.js";import"./chevron-down-Cro00f4s.js";import"./cross-BpS57vew.js";import"./PdfViewerSidebar-DF-fpmLD.js";import"./index-DXTnQeDh.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./PdfViewerToolbar-630ZPZRb.js";import"./Button-ChRZXQ3B.js";import"./chevron-right-N3bblzox.js";import"./Input-BzO2QOS7.js";import"./search-DlOSHXy8.js";import"./spin-Bp_PbUWv.js";import"./error-BA2QLyzo.js";import"./withOsdkMetrics-DCENCPrl.js";import"./makeExternalStore-CjWUDfwP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
