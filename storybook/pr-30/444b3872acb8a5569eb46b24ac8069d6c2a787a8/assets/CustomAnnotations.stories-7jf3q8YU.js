import{j as n}from"./iframe-DTT6nz7o.js";import{B as e}from"./BasePdfViewer-viUZJFQK.js";import"./preload-helper-B1xGfzPI.js";import"./index-CTxHEiTU.js";import"./BasePdfViewer.module.css-DNrb_Nw2.js";import"./PdfViewerAnnotationLayer-CsXR_VRM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU3QmSZ3.js";import"./PdfViewerOutlineSidebar-DshRmllm.js";import"./PdfViewerSidebarHeader-BDx8HiSs.js";import"./useBaseUiId-eE74TdDR.js";import"./useControlled-nQOh3ft9.js";import"./CompositeRoot-B4HFpd9W.js";import"./CompositeItem-Wk4nNvBM.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./composite-Cb2l-Kwg.js";import"./svgIconContainer-CgqmpPt6.js";import"./PdfViewerSearchBar-Cz_jhgPD.js";import"./chevron-up-JjuR9-oT.js";import"./chevron-down-C4sokJMh.js";import"./cross-BgvHTgXn.js";import"./PdfViewerSidebar-BJ0n6CRL.js";import"./index-BU5fSJ65.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./PdfViewerToolbar-DfU-Orc7.js";import"./Button-CQ5X8faA.js";import"./chevron-right-Dre0YvD_.js";import"./Input-DUSBBA6M.js";import"./search-pmwVSsC3.js";import"./spin-u_Gd6uE5.js";import"./error-DTxCn2-C.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-30/444b3872acb8a5569eb46b24ac8069d6c2a787a8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
