import{j as n}from"./iframe-SC996r8Q.js";import{B as e}from"./BasePdfViewer-CtFANKZZ.js";import"./preload-helper-4MonG5NX.js";import"./index-wDhWF-Jn.js";import"./BasePdfViewer.module.css-DjWkNOV-.js";import"./PdfViewerAnnotationLayer-B4TblL4p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CnztzM_2.js";import"./PdfViewerOutlineSidebar-Cqx_bKWU.js";import"./PdfViewerSidebarHeader-Vgbhvgzs.js";import"./useBaseUiId-BGvjsW3d.js";import"./useControlled-BSXRDWWj.js";import"./CompositeRoot-DPai_XzD.js";import"./CompositeItem-CYqhRUaL.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./composite-Gzk6HQ8U.js";import"./svgIconContainer-B-5c0m9a.js";import"./PdfViewerSearchBar-Bnocbnjt.js";import"./chevron-up-CKZuBF0G.js";import"./chevron-down-Bymbl15e.js";import"./cross-CSzOPxz_.js";import"./PdfViewerSidebar-bfLB-rOX.js";import"./index-lAH3DKJQ.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./PdfViewerToolbar-C6zAVMgh.js";import"./Button-4P3mfFZX.js";import"./chevron-right-BvSa08qk.js";import"./Input-CJVpnIyi.js";import"./search-DMkfs-8L.js";import"./spin-Cr6nj71E.js";import"./error-BsBvF-VX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-56/f75a021d0dc0c6d01c335985d46bbabad1e4d948/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
