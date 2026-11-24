import{j as r,M as s}from"./iframe-DXCJdDjk.js";import{P as p}from"./pdf-viewer-bpDHKo1o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BBcZbW1l.js";import"./preload-helper-BCqQIOQj.js";import"./PdfViewer-BoQYuP1Y.js";import"./index-QhP10yDY.js";import"./BasePdfViewer-BpYyBu2G.js";import"./BasePdfViewer.module.css-C-wZlJu6.js";import"./PdfViewerAnnotationLayer-DI4CW65Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B-3abd2l.js";import"./PdfViewerOutlineSidebar-D0E95X_B.js";import"./PdfViewerSidebarHeader-mlFIKszI.js";import"./useBaseUiId-BVzNdyaI.js";import"./useControlled-BjYAliAA.js";import"./CompositeRoot-DB1mqScF.js";import"./CompositeItem-DleHBTVF.js";import"./ToolbarRootContext-BXXCNwbt.js";import"./composite-VErlwM2g.js";import"./svgIconContainer-PeTmNDz1.js";import"./PdfViewerSearchBar-wc8A9kkL.js";import"./chevron-up-BtF_984-.js";import"./chevron-down-Dukj-qIY.js";import"./cross-QCx31p9d.js";import"./PdfViewerSidebar-Dt4uUOg7.js";import"./index-CDTndXsg.js";import"./index-DBzdfvA2.js";import"./index-DYK3IbAw.js";import"./PdfViewerToolbar-DbCFqIaN.js";import"./Button-D_PTcbbI.js";import"./chevron-right-DfgAh_5R.js";import"./Input-BTjVOb0y.js";import"./search-DRi_hMxi.js";import"./spin-CCAxgO5L.js";import"./error-DYQlLdEW.js";import"./withOsdkMetrics-Cl21Vd8T.js";import"./makeExternalStore-BQt7qWsh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
