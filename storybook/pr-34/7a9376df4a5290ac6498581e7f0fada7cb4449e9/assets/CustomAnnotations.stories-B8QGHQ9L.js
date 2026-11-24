import{j as n}from"./iframe-CblSHN44.js";import{B as e}from"./BasePdfViewer-Ci-ZkbtC.js";import"./preload-helper-NGhizEuB.js";import"./index-BQ7zJ7he.js";import"./BasePdfViewer.module.css-C2Dux78V.js";import"./PdfViewerAnnotationLayer-CLHWntb-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKGyUoqq.js";import"./PdfViewerOutlineSidebar-CDTrG077.js";import"./PdfViewerSidebarHeader-CX3J3ZK2.js";import"./useBaseUiId-B2pTi154.js";import"./useControlled-Bg0Zzn-2.js";import"./CompositeRoot-CUhI4t_B.js";import"./CompositeItem-DuOAdpQK.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./composite-DJG-zPIc.js";import"./svgIconContainer-CF_MW71M.js";import"./PdfViewerSearchBar-FzYmPeBN.js";import"./chevron-up-BOusGa9A.js";import"./chevron-down-BysZ9GN-.js";import"./cross-BUglgpN5.js";import"./PdfViewerSidebar-DWu3ZkYm.js";import"./index-CBgrw70i.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./PdfViewerToolbar-B5Pk0-Z8.js";import"./Button-Wy_PutQU.js";import"./chevron-right-DnTaGYAh.js";import"./Input-DBybejkY.js";import"./search-CXloA44P.js";import"./spin-D8C-nEcg.js";import"./error-DuPAr2Go.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-34/7a9376df4a5290ac6498581e7f0fada7cb4449e9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
