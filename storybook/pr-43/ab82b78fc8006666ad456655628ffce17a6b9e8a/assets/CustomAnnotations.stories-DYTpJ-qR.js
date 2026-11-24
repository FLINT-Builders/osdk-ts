import{j as n}from"./iframe-Cfy1VfwI.js";import{B as e}from"./BasePdfViewer-BSlQIhFr.js";import"./preload-helper-D7hEGIHW.js";import"./index-D9qChlkT.js";import"./BasePdfViewer.module.css-BGqJtOXQ.js";import"./PdfViewerAnnotationLayer-CB7OpGzM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxpMoncQ.js";import"./PdfViewerOutlineSidebar-8cyBl_pG.js";import"./PdfViewerSidebarHeader-RcQpSVsA.js";import"./useBaseUiId-Bl3BCz40.js";import"./useControlled-Bb34JJQm.js";import"./CompositeRoot-kxqMthyS.js";import"./CompositeItem-BJZgOdXE.js";import"./ToolbarRootContext-BGtapBDY.js";import"./composite-DcidvM5B.js";import"./svgIconContainer-DIZS-ng4.js";import"./PdfViewerSearchBar-DNLoAf5N.js";import"./chevron-up-7_M09YGF.js";import"./chevron-down-LTPIgxFV.js";import"./cross-DCuCUk-Y.js";import"./PdfViewerSidebar-_7juP3hm.js";import"./index-Bx8gvAM_.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./PdfViewerToolbar-BVyep6mU.js";import"./Button-NH8o7MdQ.js";import"./chevron-right-C2LnPP9Y.js";import"./Input-DeAzpHTT.js";import"./search-m5EKgstc.js";import"./spin-BFVe0SM-.js";import"./error-CmqKN1z-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-43/ab82b78fc8006666ad456655628ffce17a6b9e8a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
