import{j as r,M as s}from"./iframe-Bh45DKn3.js";import{P as p}from"./pdf-viewer-EXt17Su7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BRJ5dLuQ.js";import"./preload-helper-LJhXTPCv.js";import"./PdfViewer-CPj-Qpnv.js";import"./index-BazZquql.js";import"./BasePdfViewer-kmmwX0zo.js";import"./BasePdfViewer.module.css-9TcSHF2a.js";import"./PdfViewerAnnotationLayer-DhMS44Ky.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKDJggfx.js";import"./PdfViewerOutlineSidebar-S-wIDIUZ.js";import"./PdfViewerSidebarHeader-DyIQqGKx.js";import"./useBaseUiId-BfSMp68R.js";import"./useControlled-BrBmyOo2.js";import"./CompositeRoot-BLP1vOgl.js";import"./CompositeItem-uwTTFrvD.js";import"./ToolbarRootContext-BUoifa8H.js";import"./composite-DWucITgI.js";import"./svgIconContainer-BfPBlfHC.js";import"./PdfViewerSearchBar-CAWxJnkl.js";import"./chevron-up-kx1OzGhS.js";import"./chevron-down-BP-IXn8o.js";import"./cross-RpPg89dZ.js";import"./PdfViewerSidebar-Bb6_hzEq.js";import"./index-CIr-D7oP.js";import"./index-BSd5iftC.js";import"./index-CDLdpsSb.js";import"./PdfViewerToolbar-BcKmmufF.js";import"./Button-Dy9bad7W.js";import"./chevron-right-DeWBsu0p.js";import"./Input-iUZFI1La.js";import"./search-Brd7oyMK.js";import"./spin-BcXfuXqT.js";import"./error-BuY4OKaU.js";import"./withOsdkMetrics-1D0C0Hkk.js";import"./makeExternalStore-WafiyNY8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
