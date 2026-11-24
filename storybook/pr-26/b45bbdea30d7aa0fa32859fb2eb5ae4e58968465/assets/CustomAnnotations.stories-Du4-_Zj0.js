import{j as n}from"./iframe-9Qc56ENr.js";import{B as e}from"./BasePdfViewer-BOWFUqs5.js";import"./preload-helper-DyAcE4yv.js";import"./index-OROGqtQ6.js";import"./BasePdfViewer.module.css-DFLeAuip.js";import"./PdfViewerAnnotationLayer-CCYAUMmt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM9q5VND.js";import"./PdfViewerOutlineSidebar-DY532s8V.js";import"./PdfViewerSidebarHeader-CCXIjl1M.js";import"./useBaseUiId-FwL7BYPy.js";import"./useControlled-B_qIqTVD.js";import"./CompositeRoot-B8gwICha.js";import"./CompositeItem-BURGIqnl.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./composite-DhCF3AFw.js";import"./svgIconContainer-8v5BjuYc.js";import"./PdfViewerSearchBar-DBWZiBup.js";import"./chevron-up-DU32ULko.js";import"./chevron-down-DTg_s13_.js";import"./cross-BiOFXjvO.js";import"./PdfViewerSidebar-Dtid74Z8.js";import"./index-DZAIQf61.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./PdfViewerToolbar-DolzFeEA.js";import"./Button-D4UJHZ4Q.js";import"./chevron-right-DwFFo-TS.js";import"./Input-BNo-_u5D.js";import"./search-cLeveEh6.js";import"./spin-Bf5RtnYi.js";import"./error-BiGuleu5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-26/b45bbdea30d7aa0fa32859fb2eb5ae4e58968465/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
