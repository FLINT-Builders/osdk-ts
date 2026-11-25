import{j as n}from"./iframe-D2N6QAO4.js";import{B as e}from"./BasePdfViewer-kVm9ruzl.js";import"./preload-helper-C0G0Ely3.js";import"./index-C6mUO3LG.js";import"./BasePdfViewer.module.css-Dr0q5w3q.js";import"./PdfViewerAnnotationLayer-CMGxfCjn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8AuGxiw.js";import"./PdfViewerOutlineSidebar-Y3ibHnzM.js";import"./PdfViewerSidebarHeader-ChmWpPKF.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./useControlled-BXWTj0go.js";import"./CompositeRoot-BtQckVxC.js";import"./CompositeItem-DgrMig66.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./composite-Csdn23VF.js";import"./svgIconContainer-CNArd5Vw.js";import"./PdfViewerSearchBar-DY2fjbXm.js";import"./chevron-up-BrEHWZ8y.js";import"./chevron-down-BAjPYhxH.js";import"./cross-33P9gQ16.js";import"./PdfViewerSidebar-DwlGFKqT.js";import"./index-BaO-kZLo.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./PdfViewerToolbar-C31PrChJ.js";import"./Button-g15W-Nz5.js";import"./chevron-right-I5y9F_Up.js";import"./Input-DOJuMFjU.js";import"./search-C7B0jIv9.js";import"./spin-Dv8zs8UW.js";import"./error-DOYfumOT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-79/a155340a87b57269118a640d0acee0a96d1019f8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
