import{j as n}from"./iframe-DUf0ZM0m.js";import{B as e}from"./BasePdfViewer-yw55y2zK.js";import"./preload-helper-KlMKjl9V.js";import"./index-DhPIhyt4.js";import"./BasePdfViewer.module.css-BfMEYkfT.js";import"./PdfViewerAnnotationLayer-DWaTttQe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2obAOJMA.js";import"./PdfViewerOutlineSidebar-D2VtBzpE.js";import"./PdfViewerSidebarHeader-UeEa4M6w.js";import"./useBaseUiId-CCdSaAp3.js";import"./useControlled-D9pcZLhn.js";import"./CompositeRoot-CZZ219Vr.js";import"./CompositeItem-B9hM72ZM.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./composite-Ca3Atwol.js";import"./svgIconContainer-DIQ4r6yH.js";import"./PdfViewerSearchBar-BpS8fqWO.js";import"./chevron-up-CNKZo9h0.js";import"./chevron-down-BElmyRaO.js";import"./cross-CSu9pd0U.js";import"./PdfViewerSidebar-DbJvqGKp.js";import"./index-C9tEn2VI.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./PdfViewerToolbar-jkQJXmWB.js";import"./Button-27JXw8gN.js";import"./chevron-right-dTy-D5bE.js";import"./Input-D5jZGu61.js";import"./search-BTSIL3B5.js";import"./spin-CCR0XPvT.js";import"./error-wj1vfq65.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-36/8a1e371899b70f0aab4b45fb564a9acf3966924e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
