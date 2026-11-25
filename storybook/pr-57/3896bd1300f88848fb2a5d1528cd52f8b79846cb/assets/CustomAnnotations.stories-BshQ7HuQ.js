import{j as n}from"./iframe-DowOz9LG.js";import{B as e}from"./BasePdfViewer-Y6LI7xHd.js";import"./preload-helper-DLch6InM.js";import"./index-D3uCKFRQ.js";import"./BasePdfViewer.module.css-CWD95pu1.js";import"./PdfViewerAnnotationLayer-CXyPknIs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CG27D1Fg.js";import"./PdfViewerOutlineSidebar-BGuzDTuj.js";import"./PdfViewerSidebarHeader-NGzFHsG9.js";import"./useBaseUiId-DLP_J0js.js";import"./useControlled-LhJY_NAc.js";import"./CompositeRoot-DUYivhM4.js";import"./CompositeItem-qaontuDZ.js";import"./ToolbarRootContext-tzl66m83.js";import"./composite-BqSVn4pm.js";import"./svgIconContainer-CjMFf37k.js";import"./PdfViewerSearchBar-CxK9_EXP.js";import"./chevron-up-Rtqu8gIR.js";import"./chevron-down-p34WEL5t.js";import"./cross-XY9bNztf.js";import"./PdfViewerSidebar-DKDrIj8s.js";import"./index-UMBJij_W.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./PdfViewerToolbar-CoMmbm5m.js";import"./Button-BsxP5OVh.js";import"./chevron-right-BugptRbT.js";import"./Input-EdSRgRoE.js";import"./search-Dq7gXSV-.js";import"./spin-CHa9OX3a.js";import"./error-CvT_Kc0h.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-57/3896bd1300f88848fb2a5d1528cd52f8b79846cb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
