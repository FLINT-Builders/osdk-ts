import{j as n}from"./iframe-DhvlIxBR.js";import{B as e}from"./BasePdfViewer-CSFDOVu6.js";import"./preload-helper-D751HZEW.js";import"./index-BUWZX9Fc.js";import"./BasePdfViewer.module.css-BEsElC9r.js";import"./PdfViewerAnnotationLayer-qxLLpaFu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1QDnRh2.js";import"./PdfViewerOutlineSidebar-DT_jX8Cb.js";import"./PdfViewerSidebarHeader-C1ujb3ul.js";import"./useBaseUiId-BHihEKOR.js";import"./useControlled-8xbCIwQq.js";import"./CompositeRoot-CuH4EY6f.js";import"./CompositeItem-feBepckq.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./composite-ChzFIgZg.js";import"./svgIconContainer-D7zjQbdd.js";import"./PdfViewerSearchBar-DUMcfcgr.js";import"./chevron-up-BssmTsyd.js";import"./chevron-down-Cl04GCmI.js";import"./cross-DZn8lU4z.js";import"./PdfViewerSidebar-B6Me8F25.js";import"./index-BJZEpaeF.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./PdfViewerToolbar-C6Ja67jX.js";import"./Button-CIdQiPdq.js";import"./chevron-right-BWgVdXrb.js";import"./Input-BFA2W1TJ.js";import"./search-CvBEwoSG.js";import"./spin-CkB1WIgH.js";import"./error-CuUFOnij.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-65/9c7f9ed539cc22ec022427ea0693b61775c66b3c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
