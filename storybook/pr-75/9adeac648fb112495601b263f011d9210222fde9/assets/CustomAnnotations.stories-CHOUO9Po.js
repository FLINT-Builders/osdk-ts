import{j as n}from"./iframe-B33FiDGM.js";import{B as e}from"./BasePdfViewer-PL6UWqQi.js";import"./preload-helper-Cg7VMV6C.js";import"./index-B5YN0Y56.js";import"./BasePdfViewer.module.css-DB0vCJ84.js";import"./PdfViewerAnnotationLayer-B2K1Pmb7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CkWGPfLl.js";import"./PdfViewerOutlineSidebar-DUU2odgx.js";import"./PdfViewerSidebarHeader-C4pCPznV.js";import"./useBaseUiId-DmUoOZel.js";import"./useControlled-DJSk-4eD.js";import"./CompositeRoot-CXjATUbj.js";import"./CompositeItem-Bvfghm7d.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./composite-BOK6xXDF.js";import"./svgIconContainer-ClieOgTu.js";import"./PdfViewerSearchBar-Dw1_3Nq4.js";import"./chevron-up-aZT7OeK_.js";import"./chevron-down-Btg0m5Mr.js";import"./cross-DM8-ytCZ.js";import"./PdfViewerSidebar-Dzt7TnKE.js";import"./index-DNAzx9pt.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./PdfViewerToolbar-Bu8aFNne.js";import"./Button-CyQdblJP.js";import"./chevron-right-9cBFpSvA.js";import"./Input-BUa4RtbK.js";import"./search-C5uprCHM.js";import"./spin-MFUySxMM.js";import"./error-DU6Loo59.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-75/9adeac648fb112495601b263f011d9210222fde9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
