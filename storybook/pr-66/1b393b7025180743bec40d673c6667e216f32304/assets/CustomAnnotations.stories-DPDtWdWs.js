import{j as n}from"./iframe-DVXjYepe.js";import{B as e}from"./BasePdfViewer-C4q4K14U.js";import"./preload-helper-DoQZ9wQO.js";import"./index-xEG3qOed.js";import"./BasePdfViewer.module.css-CObC6nRR.js";import"./PdfViewerAnnotationLayer-DtHWCoRj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be3KsedH.js";import"./PdfViewerOutlineSidebar-qbEj2Lds.js";import"./PdfViewerSidebarHeader-D3ZzNKQK.js";import"./useBaseUiId--5oKpwvu.js";import"./useControlled-urWeze7M.js";import"./CompositeRoot-2Gh4EtYu.js";import"./CompositeItem-Bmf0StTl.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./composite-D8RKaTKg.js";import"./svgIconContainer-BJPtXOwn.js";import"./PdfViewerSearchBar-WKt3SUdL.js";import"./chevron-up-ChqE3_Am.js";import"./chevron-down-Bzvk1BIc.js";import"./cross-B8UbpGAg.js";import"./PdfViewerSidebar-Dr4cEE77.js";import"./index-BOgvpjI5.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./PdfViewerToolbar-CYqWVmaz.js";import"./Button-CMf4Lntc.js";import"./chevron-right-7MODY3jV.js";import"./Input-BN6UqcCj.js";import"./search-B-9-6Ofx.js";import"./spin-HsvXL76h.js";import"./error-DfVU-Ijw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-66/1b393b7025180743bec40d673c6667e216f32304/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
