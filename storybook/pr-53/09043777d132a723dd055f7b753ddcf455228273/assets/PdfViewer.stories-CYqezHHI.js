import{j as r,M as s}from"./iframe-C4244Bm_.js";import{P as p}from"./pdf-viewer-qkSNwksO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0BToVOH.js";import"./preload-helper-Ci98jyni.js";import"./PdfViewer-CGr-Py4Y.js";import"./index-ClH59eky.js";import"./BasePdfViewer-D_FbraIG.js";import"./BasePdfViewer.module.css-C32Y64iL.js";import"./PdfViewerAnnotationLayer-Cee8bkin.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdhZcb76.js";import"./PdfViewerOutlineSidebar-DEtNq6rO.js";import"./PdfViewerSidebarHeader-B5ZVkrT3.js";import"./useBaseUiId-X9XCdkpw.js";import"./useControlled-zrsS7sbr.js";import"./CompositeRoot-COgzZcLT.js";import"./CompositeItem-BHbjzdkB.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./composite-Ckn5xSHc.js";import"./svgIconContainer-C9qKBg5g.js";import"./PdfViewerSearchBar-BOyzjfRo.js";import"./chevron-up-DfctdlzO.js";import"./chevron-down-BL39hyz4.js";import"./cross-Ndayjde5.js";import"./PdfViewerSidebar-HZYncBMz.js";import"./index-Dhn7ITQm.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./PdfViewerToolbar-Cnc-ioHk.js";import"./Button-DdPOxW32.js";import"./chevron-right-CoMN9b55.js";import"./Input-DLoAGHyA.js";import"./search-CyQQCVme.js";import"./spin-D6n294cn.js";import"./error-_egmS3m2.js";import"./withOsdkMetrics-GAx3Og7v.js";import"./makeExternalStore-D1LNnd-p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
