import{j as n}from"./iframe-Ci4kbbjH.js";import{B as e}from"./BasePdfViewer-Cc_1XSop.js";import"./preload-helper-DNzzp09Q.js";import"./index-BzmIzG5f.js";import"./BasePdfViewer.module.css-GobZWzE0.js";import"./PdfViewerAnnotationLayer-GhcVI9J6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0Tq-koj.js";import"./PdfViewerOutlineSidebar-y-4uzI5Y.js";import"./PdfViewerSidebarHeader-BDom5esP.js";import"./useBaseUiId-yqmrIV5M.js";import"./useControlled-CyWOUz9h.js";import"./CompositeRoot-BJiIjT8A.js";import"./CompositeItem-Cku2i2Hz.js";import"./ToolbarRootContext-rMCKHck4.js";import"./composite-CkTQf-5C.js";import"./svgIconContainer-DoVy9nda.js";import"./PdfViewerSearchBar-oUK-ehdI.js";import"./chevron-up-C4WVLM1G.js";import"./chevron-down-HIxicj7V.js";import"./cross-Baj2Wcx8.js";import"./PdfViewerSidebar-CxsV8t_G.js";import"./index-DHl6CAnB.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./PdfViewerToolbar-DfY9kStu.js";import"./Button-DGtRliq1.js";import"./chevron-right-DKOHsBIJ.js";import"./Input-DEpJNDRU.js";import"./search-kOpaiDxH.js";import"./spin-BMZh_y8g.js";import"./error-BDWAkWkg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-38/bd9e8aef2af70c676e9fc96a17e7704c26210ee1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
