import{j as n}from"./iframe-ClewFmdb.js";import{B as e}from"./BasePdfViewer-CYWs6t8U.js";import"./preload-helper-C7O4zYJs.js";import"./index-euIemqPw.js";import"./BasePdfViewer.module.css-DrolRzDf.js";import"./PdfViewerAnnotationLayer-kq7ERavb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-w5bDwvUD.js";import"./PdfViewerOutlineSidebar-NkNGGBgw.js";import"./PdfViewerSidebarHeader-8v92o0M5.js";import"./useBaseUiId-CM0luRv8.js";import"./useControlled-8bbLsKqv.js";import"./CompositeRoot-CM77FXSy.js";import"./CompositeItem-LzMD5IlK.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./composite-C-wFuse1.js";import"./svgIconContainer-6Af8qoOE.js";import"./PdfViewerSearchBar-CmXtY6-N.js";import"./chevron-up-CgqgaZbw.js";import"./chevron-down-CN3rbJYx.js";import"./cross-C3it1rM0.js";import"./PdfViewerSidebar-Dg3FNVaQ.js";import"./index-wZBaNT0h.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./PdfViewerToolbar-CKDAtcI5.js";import"./Button-Br0QmuY1.js";import"./chevron-right-BbcA7tNE.js";import"./Input-eZMgRwLi.js";import"./search-D0xA_Pz7.js";import"./spin-BrxFvO6Q.js";import"./error-BpCPRxU6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-49/db5d0d7ac55f0725b4d5c25a08c4c99271956a50/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
