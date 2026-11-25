import{j as n}from"./iframe-BimQ5I7B.js";import{B as e}from"./BasePdfViewer-C9zNeyNn.js";import"./preload-helper-DVgp4Odj.js";import"./index-Bterpizd.js";import"./BasePdfViewer.module.css-CX2aBhaJ.js";import"./PdfViewerAnnotationLayer-CKQQMyqZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeLrRa4i.js";import"./PdfViewerOutlineSidebar-OxhfYwQE.js";import"./PdfViewerSidebarHeader-BF2udWn5.js";import"./useBaseUiId-C8madkWI.js";import"./useControlled-BZPlZ-l4.js";import"./CompositeRoot-d575uYhY.js";import"./CompositeItem-CKdP0lvj.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./composite-CFQYUg6D.js";import"./svgIconContainer-B7sYR9CH.js";import"./PdfViewerSearchBar-D0sevriG.js";import"./chevron-up-D88hSPpg.js";import"./chevron-down-BSMcI5Uh.js";import"./cross-B1ycp5D_.js";import"./PdfViewerSidebar-Snb27eeC.js";import"./index-Drk-T-LH.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./PdfViewerToolbar-Cg3azeyA.js";import"./Button-BDC1u4I1.js";import"./chevron-right-BLdCnZqq.js";import"./Input-BgCDGlWE.js";import"./search-2ZJHkAe4.js";import"./spin-Cip8oUnA.js";import"./error-Cm6SmQec.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-77/c02d9dde1726c8531197e00e1208c01bde0c3495/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
