import{j as n}from"./iframe-D4nn_Ti-.js";import{B as e}from"./BasePdfViewer-De5PfVfK.js";import"./preload-helper-Ce3BUon1.js";import"./index-ng3tbe9P.js";import"./BasePdfViewer.module.css-Blf0sFBV.js";import"./PdfViewerAnnotationLayer-Ca7G4ERv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IDyqnIqV.js";import"./PdfViewerOutlineSidebar-K2A-PT_j.js";import"./PdfViewerSidebarHeader-CcvCqzkF.js";import"./useBaseUiId-CzdAPKcM.js";import"./useControlled-C9uWc1JH.js";import"./CompositeRoot-Ccy26ic0.js";import"./CompositeItem-C2VQoVHh.js";import"./ToolbarRootContext-BeHAyrdi.js";import"./composite-DYx0o4xU.js";import"./svgIconContainer-DHuWaZTY.js";import"./PdfViewerSearchBar-BWB_51uG.js";import"./chevron-up-ovqeMCkM.js";import"./chevron-down-CHYkUqFt.js";import"./cross-Ru3cb-0v.js";import"./PdfViewerSidebar-DQjXnVUM.js";import"./index-Kx6fu-in.js";import"./index-CAS93zYH.js";import"./index-2u3EkiNe.js";import"./PdfViewerToolbar-BezMxd5z.js";import"./Button-ClRUUN4D.js";import"./chevron-right-BIKtjT4Q.js";import"./Input-BS3oHtWW.js";import"./search-Bp5Pu1gz.js";import"./spin-CpUkHYN2.js";import"./error-BpjJAz0p.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-63/cdb2f697d09d998a06ecc52ebbd733f0bd0d573f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
