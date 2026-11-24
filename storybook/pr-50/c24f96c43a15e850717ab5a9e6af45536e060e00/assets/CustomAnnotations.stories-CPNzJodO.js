import{j as n}from"./iframe-DGWnG-cP.js";import{B as e}from"./BasePdfViewer-C3MJaxvT.js";import"./preload-helper-3cdipQWl.js";import"./index-C0zbU9rL.js";import"./BasePdfViewer.module.css-DKrwvPFX.js";import"./PdfViewerAnnotationLayer-BfFJQ2MP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiPcMg7g.js";import"./PdfViewerOutlineSidebar-Dw3ToZNS.js";import"./PdfViewerSidebarHeader-C0EeQbS-.js";import"./useBaseUiId-DVxcG4_I.js";import"./useControlled-BBmR2WL-.js";import"./CompositeRoot-CbdQ8BoQ.js";import"./CompositeItem-dqVIeoy3.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./composite-B33N3UBB.js";import"./svgIconContainer-B16Mzywl.js";import"./PdfViewerSearchBar-mXXDpy5W.js";import"./chevron-up-CeZ3fwKx.js";import"./chevron-down-BFuZIkTt.js";import"./cross-DlI64HlO.js";import"./PdfViewerSidebar-CQqEKRE9.js";import"./index-CrcNgxS8.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./PdfViewerToolbar-AZb6ZzMB.js";import"./Button-BcmhO12Y.js";import"./chevron-right-CsK0urMv.js";import"./Input-DwaikOPa.js";import"./search-UMxzoTWH.js";import"./spin-Cwe7KqtK.js";import"./error-qdaiM9ZH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-50/c24f96c43a15e850717ab5a9e6af45536e060e00/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
