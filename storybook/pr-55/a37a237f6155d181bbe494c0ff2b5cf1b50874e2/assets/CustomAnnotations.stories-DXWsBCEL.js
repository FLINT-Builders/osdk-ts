import{j as n}from"./iframe-BQ-KHcHE.js";import{B as e}from"./BasePdfViewer-D-K5LqR9.js";import"./preload-helper-D_u3--ud.js";import"./index-Bi4ii54G.js";import"./BasePdfViewer.module.css-WQrqgobT.js";import"./PdfViewerAnnotationLayer-BHHQbTZm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eVNDsNOT.js";import"./PdfViewerOutlineSidebar-BzdhhDg3.js";import"./PdfViewerSidebarHeader-BDlYhfth.js";import"./useBaseUiId-Da1a09f-.js";import"./useControlled-D0CpkFUO.js";import"./CompositeRoot-BdKUlpTZ.js";import"./CompositeItem-BvMYLyDt.js";import"./ToolbarRootContext-GvDSdibe.js";import"./composite-pFx5Riq1.js";import"./svgIconContainer-BkJqfnsZ.js";import"./PdfViewerSearchBar-CUvlJ7vB.js";import"./chevron-up-DKTNmGm0.js";import"./chevron-down-Bo4eEeQA.js";import"./cross-CTORp-eO.js";import"./PdfViewerSidebar-VvYWopni.js";import"./index-Dd2QToo9.js";import"./index-9EejlPKp.js";import"./index-eHVziK00.js";import"./PdfViewerToolbar-CucHzy5b.js";import"./Button-CWYPsBwI.js";import"./chevron-right-DEjpXX8T.js";import"./Input-DzeLPEOm.js";import"./search-D2FdgE19.js";import"./spin-D1tJp32W.js";import"./error-Bd9iDu5J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-55/a37a237f6155d181bbe494c0ff2b5cf1b50874e2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
