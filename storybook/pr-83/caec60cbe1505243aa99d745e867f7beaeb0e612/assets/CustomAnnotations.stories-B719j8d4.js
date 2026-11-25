import{j as n}from"./iframe-C6x_-cCw.js";import{B as e}from"./BasePdfViewer-MAEK9diE.js";import"./preload-helper-C5M_clDJ.js";import"./index-DG092T-D.js";import"./BasePdfViewer.module.css-vE4hgW89.js";import"./PdfViewerAnnotationLayer-Blz6waIy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNFzG7DT.js";import"./PdfViewerOutlineSidebar-BRQ08YwF.js";import"./PdfViewerSidebarHeader-DnqVvnad.js";import"./useBaseUiId-UYgWBkOi.js";import"./useControlled-DzDgqIkH.js";import"./CompositeRoot-Dk-xtveW.js";import"./CompositeItem-DKoeFQh8.js";import"./ToolbarRootContext-DBEn4rvT.js";import"./composite-BSZVTMPL.js";import"./svgIconContainer-Bkyrnuc-.js";import"./PdfViewerSearchBar-BuLx7s28.js";import"./chevron-up-B1IsUn2J.js";import"./chevron-down-BDM7mpPh.js";import"./cross-l0aAmTW5.js";import"./PdfViewerSidebar-BPguCvRM.js";import"./index-BmgKiP-K.js";import"./index-hI-Jf30A.js";import"./index-C-0Da6r-.js";import"./PdfViewerToolbar-CwlHJJHj.js";import"./Button-BKdv7kuC.js";import"./chevron-right-CEDB-r0F.js";import"./Input-wynBa1uS.js";import"./search-DNxvrUDH.js";import"./spin-qr0NPuB6.js";import"./error-owN_za9g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-83/caec60cbe1505243aa99d745e867f7beaeb0e612/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
