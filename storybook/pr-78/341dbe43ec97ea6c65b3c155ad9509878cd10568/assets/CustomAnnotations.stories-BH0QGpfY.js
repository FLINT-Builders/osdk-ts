import{j as n}from"./iframe-6Z8QeqqP.js";import{B as e}from"./BasePdfViewer-GHFCS9To.js";import"./preload-helper-y0D87bsA.js";import"./index-HkxEzDx6.js";import"./BasePdfViewer.module.css-Cj6yOhTu.js";import"./PdfViewerAnnotationLayer-BlJNTWdO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aX44R5PL.js";import"./PdfViewerOutlineSidebar-BqNdMifA.js";import"./PdfViewerSidebarHeader-DS85E9BP.js";import"./useBaseUiId-Dmz3cJQe.js";import"./useControlled-Bx6RLClW.js";import"./CompositeRoot-BO1o2wsI.js";import"./CompositeItem-Rkv-cvXn.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./composite-DbAi9sOR.js";import"./svgIconContainer-8--RoJPk.js";import"./PdfViewerSearchBar-DaMBZE1m.js";import"./chevron-up-C7yCS-9H.js";import"./chevron-down-C4hWEHAB.js";import"./cross-MCgjL0SO.js";import"./PdfViewerSidebar-ClvfeBzj.js";import"./index-Ds85d0HR.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./PdfViewerToolbar-C5gMvDXS.js";import"./Button-CwPVz1_L.js";import"./chevron-right-TcoIHU5d.js";import"./Input-DaVTG5o1.js";import"./search-CvqEaj-y.js";import"./spin-CD2ILwBM.js";import"./error-DBQvGp4O.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-78/341dbe43ec97ea6c65b3c155ad9509878cd10568/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
