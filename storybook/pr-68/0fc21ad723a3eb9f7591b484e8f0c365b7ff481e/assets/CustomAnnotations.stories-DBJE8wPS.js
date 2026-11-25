import{j as n}from"./iframe-C18Efs5F.js";import{B as e}from"./BasePdfViewer-CoD91eV2.js";import"./preload-helper-syT6W8iC.js";import"./index-BiAToM_x.js";import"./BasePdfViewer.module.css-DlIElMF6.js";import"./PdfViewerAnnotationLayer-BAvFZ470.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PdYGrKmE.js";import"./PdfViewerOutlineSidebar-O_1_AlB3.js";import"./PdfViewerSidebarHeader-Cs5mvqGG.js";import"./useBaseUiId-CH-RqI0L.js";import"./useControlled-DX15Gk8S.js";import"./CompositeRoot-DPTpW5Jz.js";import"./CompositeItem-BfnoZmPC.js";import"./ToolbarRootContext-BtDS6Lf9.js";import"./composite-DGxpdZBR.js";import"./svgIconContainer-aD2IgP3d.js";import"./PdfViewerSearchBar-CDXKldAh.js";import"./chevron-up-CB1d-oq9.js";import"./chevron-down-B5XN77pz.js";import"./cross-BKCn1P0Q.js";import"./PdfViewerSidebar-DQeKFhq7.js";import"./index-eBUb3cd0.js";import"./index-MJOAOM5u.js";import"./index-Bf7Y9tWm.js";import"./PdfViewerToolbar-CV8ZGWvG.js";import"./Button-C1f49fJS.js";import"./chevron-right-cUtFaNkv.js";import"./Input-CU8PLyZJ.js";import"./search-CkIpSze3.js";import"./spin-DZ_jzcAQ.js";import"./error-BbYA8FVM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-68/0fc21ad723a3eb9f7591b484e8f0c365b7ff481e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
