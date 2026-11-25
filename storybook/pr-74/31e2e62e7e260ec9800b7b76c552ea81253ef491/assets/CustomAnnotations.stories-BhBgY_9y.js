import{j as n}from"./iframe-COTYg0i4.js";import{B as e}from"./BasePdfViewer-YjbleucY.js";import"./preload-helper-BfUBPZQv.js";import"./index-DEWKwQ6D.js";import"./BasePdfViewer.module.css-IZH5mnx8.js";import"./PdfViewerAnnotationLayer-DnKpAq9I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BM79nqW9.js";import"./PdfViewerOutlineSidebar-D8k41uGE.js";import"./PdfViewerSidebarHeader-JXBxUxXP.js";import"./useBaseUiId-B73nbOFb.js";import"./useControlled-BH9DAJiP.js";import"./CompositeRoot-2mcF1pFV.js";import"./CompositeItem-D4sOZv8D.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./composite-DLNSROKR.js";import"./svgIconContainer-DSLsCdLH.js";import"./PdfViewerSearchBar-ZUJdWvBd.js";import"./chevron-up-DmL2Ml8d.js";import"./chevron-down-DHzInOjp.js";import"./cross-pC4h9ZyI.js";import"./PdfViewerSidebar-Ys5trzIa.js";import"./index-BaMA_XVs.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./PdfViewerToolbar-ja5oxJT6.js";import"./Button-BBJ0BrTf.js";import"./chevron-right-DC5UOkyW.js";import"./Input-DNkGR0ru.js";import"./search-Di0PIeOa.js";import"./spin-DoRb3-Cb.js";import"./error-DlWRXjMl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-74/31e2e62e7e260ec9800b7b76c552ea81253ef491/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
