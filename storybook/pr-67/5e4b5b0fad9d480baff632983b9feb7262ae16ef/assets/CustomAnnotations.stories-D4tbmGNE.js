import{j as n}from"./iframe-BzttuLup.js";import{B as e}from"./BasePdfViewer-1c7jGNl1.js";import"./preload-helper-DEinGEya.js";import"./index-7CJFn-ex.js";import"./BasePdfViewer.module.css-CZo5RwkA.js";import"./PdfViewerAnnotationLayer-nBosNvaO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_uZo-ji.js";import"./PdfViewerOutlineSidebar-Byw9LTDH.js";import"./PdfViewerSidebarHeader-14rlFSTC.js";import"./useBaseUiId-C_qs9mR7.js";import"./useControlled-DvTO4Lqf.js";import"./CompositeRoot-DTByr4D7.js";import"./CompositeItem-E8-A5SU4.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./composite-CYx1_fMl.js";import"./svgIconContainer-BicyMjFC.js";import"./PdfViewerSearchBar-CJT-HNo7.js";import"./chevron-up-hQRFXICB.js";import"./chevron-down-_FTLKkTP.js";import"./cross-4RHnOViN.js";import"./PdfViewerSidebar-Cp3peGRo.js";import"./index-Dint05uq.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./PdfViewerToolbar-Vot6a9Vw.js";import"./Button-B0wCjsGN.js";import"./chevron-right-Cm7dHnzK.js";import"./Input-BumRROcl.js";import"./search-Dt2zfbsw.js";import"./spin-qrt8w3_s.js";import"./error-CLZJuCl2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-67/5e4b5b0fad9d480baff632983b9feb7262ae16ef/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
