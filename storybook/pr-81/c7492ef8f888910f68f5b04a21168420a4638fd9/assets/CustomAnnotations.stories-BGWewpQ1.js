import{j as n}from"./iframe-noPC7Lrb.js";import{B as e}from"./BasePdfViewer-Cd51xmsv.js";import"./preload-helper-Cv3u2ZXJ.js";import"./index-CRR0rEAm.js";import"./BasePdfViewer.module.css-C8IRHYBk.js";import"./PdfViewerAnnotationLayer-DY0Oai08.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmxWtzxx.js";import"./PdfViewerOutlineSidebar-B0XDgTtj.js";import"./PdfViewerSidebarHeader-CO5je6yK.js";import"./useBaseUiId-CoV6fGPK.js";import"./useControlled-C-YKkMIr.js";import"./CompositeRoot-Lsq7g8jM.js";import"./CompositeItem-D_EklmEL.js";import"./ToolbarRootContext-Bdg1UlUu.js";import"./composite-DfMavTxP.js";import"./svgIconContainer-BC4HVzzK.js";import"./PdfViewerSearchBar-BSKOn4-q.js";import"./chevron-up-AOdU2TP1.js";import"./chevron-down-HJE4Bk-A.js";import"./cross-B9cEQ0YT.js";import"./PdfViewerSidebar-DR6rjfh0.js";import"./index-COKLl5_k.js";import"./index-DsgPUYZ8.js";import"./index-CmlqLPJk.js";import"./PdfViewerToolbar-CV2iHjqk.js";import"./Button-s6ph9E-u.js";import"./chevron-right-D5h646T1.js";import"./Input-BP2SPX2T.js";import"./search-DEVlZZxm.js";import"./spin-Iospq_wb.js";import"./error-P0w1sFZO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-81/c7492ef8f888910f68f5b04a21168420a4638fd9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
