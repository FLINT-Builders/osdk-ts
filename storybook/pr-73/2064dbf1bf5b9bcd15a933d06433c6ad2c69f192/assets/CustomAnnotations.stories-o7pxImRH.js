import{j as n}from"./iframe-B8aqmfIp.js";import{B as e}from"./BasePdfViewer-Cx3XI7o7.js";import"./preload-helper-BobhKb97.js";import"./index-CCmxkdzs.js";import"./BasePdfViewer.module.css-DPLC8Ipi.js";import"./PdfViewerAnnotationLayer-J55K09K6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfhrtCrW.js";import"./PdfViewerOutlineSidebar-B2PTNVJ8.js";import"./PdfViewerSidebarHeader-DJ2v-FvB.js";import"./useBaseUiId-CHkfiAje.js";import"./useControlled-l0oFblvc.js";import"./CompositeRoot-CaPCD8lM.js";import"./CompositeItem-n7lnxb-_.js";import"./ToolbarRootContext-DSbkosxV.js";import"./composite-1RtIqJwV.js";import"./svgIconContainer-FLeE6-vR.js";import"./PdfViewerSearchBar-Dra_2QyV.js";import"./chevron-up-Bij9WhX-.js";import"./chevron-down-BVT6rcNJ.js";import"./cross-DRKTQkbP.js";import"./PdfViewerSidebar-PJ3tOhuJ.js";import"./index-Cywz4iSb.js";import"./index-DKejFzow.js";import"./index-BSGZXMXF.js";import"./PdfViewerToolbar-B29SeKaZ.js";import"./Button-DdUUuDX9.js";import"./chevron-right-S9mlitk3.js";import"./Input-CgHBa2SL.js";import"./search-Bqpxl0Af.js";import"./spin-MfDNNiOq.js";import"./error-DApsL9NG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-73/2064dbf1bf5b9bcd15a933d06433c6ad2c69f192/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
