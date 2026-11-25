import{j as n}from"./iframe-BuSw4B6O.js";import{B as e}from"./BasePdfViewer-DtyTFqS1.js";import"./preload-helper-lqh4ZshJ.js";import"./index-D9SEgQNF.js";import"./BasePdfViewer.module.css-CagTZU7g.js";import"./PdfViewerAnnotationLayer-CYwCGo8b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZ5p4YKE.js";import"./PdfViewerOutlineSidebar-PbANv_wL.js";import"./PdfViewerSidebarHeader-DMMJaguH.js";import"./useBaseUiId-DViO3tgt.js";import"./useControlled-8U03TFMg.js";import"./CompositeRoot-3LPr0OyZ.js";import"./CompositeItem-0tc6F5lP.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./composite-DAXoYC61.js";import"./svgIconContainer-BZgPnQyZ.js";import"./PdfViewerSearchBar-D_qbfkKq.js";import"./chevron-up-Dz5DjGZ1.js";import"./chevron-down-Cbm7pBxW.js";import"./cross-7xpX4Ge0.js";import"./PdfViewerSidebar-CCIOHtpQ.js";import"./index-DzxxLWoo.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./PdfViewerToolbar-CqB-Bmot.js";import"./Button-DZw1-eKI.js";import"./chevron-right-l9w87v6g.js";import"./Input-Ct08sj7B.js";import"./search-DRWDcQXz.js";import"./spin-DA7JA1wn.js";import"./error-mcJBKPob.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-60/254295cc39f053af44c861fe9ebb68e026fdbebe/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
