import{j as n}from"./iframe-DDeGahZQ.js";import{B as e}from"./BasePdfViewer-Dmo4NMnG.js";import"./preload-helper-DtgmNnbI.js";import"./index-DmzUE8wO.js";import"./BasePdfViewer.module.css-B960dpcs.js";import"./PdfViewerAnnotationLayer-D8TTT2ME.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwN6l1wB.js";import"./PdfViewerOutlineSidebar-CS2g4gMm.js";import"./PdfViewerSidebarHeader-D6JhENs6.js";import"./useBaseUiId-Uk2yI-zs.js";import"./useControlled-DDjbaAaA.js";import"./CompositeRoot-4sUeKOQB.js";import"./CompositeItem-CzJNtMzg.js";import"./ToolbarRootContext-BskRjAbe.js";import"./composite-DuB4E-UY.js";import"./svgIconContainer-B2HbnTiE.js";import"./PdfViewerSearchBar-6Zg8hiBC.js";import"./chevron-up-BGhtc_wn.js";import"./chevron-down-pfh009HU.js";import"./cross-CI1lfvZf.js";import"./PdfViewerSidebar-4tKqMPBD.js";import"./index-DYAYOGTV.js";import"./index-Qn8k8FvG.js";import"./index-CY6cJAVJ.js";import"./PdfViewerToolbar-CU7rt7Uu.js";import"./Button-UHTxjv3g.js";import"./chevron-right-Tyqx-etd.js";import"./Input-CvWBm2e5.js";import"./search-C8c8T19Z.js";import"./spin-r13NKNZl.js";import"./error-CAQ2487J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-82/32350620a1c4765d17316638f12059611fa4bcff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
