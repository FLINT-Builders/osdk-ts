import{j as n}from"./iframe-NyHN5VRq.js";import{B as e}from"./BasePdfViewer-B35bLgyT.js";import"./preload-helper-V-uedkqD.js";import"./index-BfjQx6Ly.js";import"./BasePdfViewer.module.css-BvQHtGg3.js";import"./PdfViewerAnnotationLayer-DZr5DVeS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlE7UGsa.js";import"./PdfViewerOutlineSidebar-DpEOYvc4.js";import"./PdfViewerSidebarHeader-BhII8W4a.js";import"./useBaseUiId-D2dSZ8xw.js";import"./useControlled-Dh_cMPIe.js";import"./CompositeRoot-Dj0kOUZh.js";import"./CompositeItem-D6OEWPs8.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./composite-dEyBM_w4.js";import"./svgIconContainer-D2-PKO04.js";import"./PdfViewerSearchBar-Bbwhv5KR.js";import"./chevron-up-Ckv21Z8s.js";import"./chevron-down-D5RxD_5a.js";import"./cross-Dw9UKTtm.js";import"./PdfViewerSidebar-kCHtcLoZ.js";import"./index-Cf28HvbY.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./PdfViewerToolbar-bRbyl-rP.js";import"./Button-Czn8jZsp.js";import"./chevron-right-BkkLxexJ.js";import"./Input-CNTzIZ_0.js";import"./search-5FdBAUHN.js";import"./spin-CRg8N3XW.js";import"./error-CmvnS4M6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-61/844fa879b4768db3f2dc3e947f6db69ede790573/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
