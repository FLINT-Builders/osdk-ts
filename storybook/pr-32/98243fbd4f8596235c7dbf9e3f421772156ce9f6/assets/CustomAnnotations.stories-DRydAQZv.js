import{j as n}from"./iframe-BrM52See.js";import{B as e}from"./BasePdfViewer-r-c4jXg-.js";import"./preload-helper-DPLtzYOe.js";import"./index-H3qcjrO1.js";import"./BasePdfViewer.module.css-BnnMDRCw.js";import"./PdfViewerAnnotationLayer-DpeGWQsm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYVJB-fK.js";import"./PdfViewerOutlineSidebar-c3aQ0FKR.js";import"./PdfViewerSidebarHeader-De3LK0_c.js";import"./useBaseUiId-LwZBbKwi.js";import"./useControlled--LTXft-F.js";import"./CompositeRoot-uo8Fdut_.js";import"./CompositeItem-T9YLjj07.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./composite-BZFmOQck.js";import"./svgIconContainer-DWvq_kJI.js";import"./PdfViewerSearchBar-DPl5QOpO.js";import"./chevron-up-BuIKXeGr.js";import"./chevron-down-IA-50EVq.js";import"./cross-BS83Kw7I.js";import"./PdfViewerSidebar-Cb6SckEv.js";import"./index-CHWvcJrG.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./PdfViewerToolbar-D5tWTIIV.js";import"./Button-Bor1IKlq.js";import"./chevron-right-C4zV0nyI.js";import"./Input-Ctwp83L6.js";import"./search-B5gd2r9J.js";import"./spin-CPMPS1nP.js";import"./error-DUN9wjL6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-32/98243fbd4f8596235c7dbf9e3f421772156ce9f6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
