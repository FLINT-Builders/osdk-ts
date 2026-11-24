import{j as n}from"./iframe-CSBSqJV-.js";import{B as e}from"./BasePdfViewer-qynTSaHb.js";import"./preload-helper-y6YPEm4u.js";import"./index-BJfVWZd-.js";import"./BasePdfViewer.module.css-BdWOjFsb.js";import"./PdfViewerAnnotationLayer-BD3urzEW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAd7Y3Ts.js";import"./PdfViewerOutlineSidebar-Dk01yFYC.js";import"./PdfViewerSidebarHeader-5-nb2l3t.js";import"./useBaseUiId-Bc5TgsQW.js";import"./useControlled-Bac_91v3.js";import"./CompositeRoot-hq88bvC5.js";import"./CompositeItem-Cevizy2o.js";import"./ToolbarRootContext-DEZkowdo.js";import"./composite-jPJKKGn2.js";import"./svgIconContainer-CLK7EnDK.js";import"./PdfViewerSearchBar-CVCMjZCI.js";import"./chevron-up-D8M8WnFY.js";import"./chevron-down-C4EMQsdy.js";import"./cross-B6WlAhq-.js";import"./PdfViewerSidebar-DzX53o5L.js";import"./index-B3n_oO7A.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./PdfViewerToolbar-IPXypMMr.js";import"./Button-Dh9tN-kh.js";import"./chevron-right-BZgL6DkM.js";import"./Input-B47Y97Of.js";import"./search-DvlP61aE.js";import"./spin-BRXlMFHC.js";import"./error-CRSueJec.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-33/9139938baac8eea5e658db37811463aa3559e895/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
