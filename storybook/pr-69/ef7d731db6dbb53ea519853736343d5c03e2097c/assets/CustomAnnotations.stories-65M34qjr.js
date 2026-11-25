import{j as n}from"./iframe-CEEl8rhe.js";import{B as e}from"./BasePdfViewer-DTQVJPbf.js";import"./preload-helper-BNeS4N_d.js";import"./index-D3BMxXWO.js";import"./BasePdfViewer.module.css-Hr_tnlzW.js";import"./PdfViewerAnnotationLayer-XTVvPBqy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHEl369E.js";import"./PdfViewerOutlineSidebar-DHXv2pB5.js";import"./PdfViewerSidebarHeader-CRexzgKL.js";import"./useBaseUiId-Bj988QM0.js";import"./useControlled-B70mnLby.js";import"./CompositeRoot-BheFnEJQ.js";import"./CompositeItem-DsOLQMlS.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./composite-DpkIpZoZ.js";import"./svgIconContainer-BoK1M0P8.js";import"./PdfViewerSearchBar-Bllfm1ym.js";import"./chevron-up-n42ngsWX.js";import"./chevron-down-BGwNr8cZ.js";import"./cross-CC3rT2Cs.js";import"./PdfViewerSidebar-DSHsYv3k.js";import"./index-BCtfyswk.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./PdfViewerToolbar-C_qacoJT.js";import"./Button-YcHEvqMa.js";import"./chevron-right-CF-SiPa7.js";import"./Input-BDwKsEY1.js";import"./search-BpfeUnuY.js";import"./spin-JeEWUhTh.js";import"./error-nlz9dA9p.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-69/ef7d731db6dbb53ea519853736343d5c03e2097c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
