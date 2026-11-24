import{j as n}from"./iframe-Ci8jv4db.js";import{B as e}from"./BasePdfViewer-w2n2C1Ej.js";import"./preload-helper-BijYl_hj.js";import"./index-Cb4PYHc_.js";import"./BasePdfViewer.module.css-C1p1KzkQ.js";import"./PdfViewerAnnotationLayer-D2eZW-fD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLMQLcxT.js";import"./PdfViewerOutlineSidebar-B_Kv6pVc.js";import"./PdfViewerSidebarHeader-DkfAUdIn.js";import"./useBaseUiId-Dty0keys.js";import"./useControlled-AQzCfptX.js";import"./CompositeRoot-XUmcYAzj.js";import"./CompositeItem-pAC9-vMM.js";import"./ToolbarRootContext-BBg552Fz.js";import"./composite-dn8KtEdo.js";import"./svgIconContainer-Y9M5A49t.js";import"./PdfViewerSearchBar-DtZOU9Ti.js";import"./chevron-up-Daqk8-71.js";import"./chevron-down-Cogx4pq7.js";import"./cross-DUbcKgzt.js";import"./PdfViewerSidebar-Cmowur7J.js";import"./index-DBQv4m84.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./PdfViewerToolbar-up-ZzKxE.js";import"./Button-DXyPvcOa.js";import"./chevron-right-DvrzFAw_.js";import"./Input-Ctv6ca3A.js";import"./search-D0vckm_H.js";import"./spin-hLfDBB1-.js";import"./error-BVKGD7Ps.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-44/8310d1344b26eac6bed5347d2c13aeb8c8261b13/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
