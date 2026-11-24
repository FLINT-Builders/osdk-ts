import{j as n}from"./iframe-DzUHN8ca.js";import{B as e}from"./BasePdfViewer-Bc-l6A1-.js";import"./preload-helper--9RxGpgt.js";import"./index-D6O_ioKN.js";import"./BasePdfViewer.module.css-DSZCvCz0.js";import"./PdfViewerAnnotationLayer-Blb9fC8V.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct187y1t.js";import"./PdfViewerOutlineSidebar-CYfYCFvm.js";import"./PdfViewerSidebarHeader-B5NYhRYC.js";import"./useBaseUiId-sxd6xo0y.js";import"./useControlled-C2MYeSWY.js";import"./CompositeRoot-CpOQ9BSI.js";import"./CompositeItem-y4Pst_mH.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./composite-BXmDwDE8.js";import"./svgIconContainer-PY62KixA.js";import"./PdfViewerSearchBar-CpRUI5Ke.js";import"./chevron-up-CJu0Igpx.js";import"./chevron-down-gUZOAhoK.js";import"./cross-Ba2yr2aR.js";import"./PdfViewerSidebar-Dysb7myX.js";import"./index-WtiTKFpP.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./PdfViewerToolbar-BdWfHwy4.js";import"./Button-C_9t5m1R.js";import"./chevron-right-CdgHav7o.js";import"./Input-miTMtrPD.js";import"./search-CykjRKOt.js";import"./spin-B3U684Ko.js";import"./error-BMVJPOE-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-52/3d3135f6a7c9090edc0a44aeb49e8d7ec7d407c9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
