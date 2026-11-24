import{j as n}from"./iframe-BD75_EF7.js";import{B as e}from"./BasePdfViewer-Cg03OgtR.js";import"./preload-helper-C5GixA8k.js";import"./index-Cls2haw5.js";import"./BasePdfViewer.module.css-D1UevZNM.js";import"./PdfViewerAnnotationLayer-CVkeoUmL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzxXho7I.js";import"./PdfViewerOutlineSidebar-CUT2g5yx.js";import"./PdfViewerSidebarHeader-BcpkAf8h.js";import"./useBaseUiId-Se7wVqTf.js";import"./useControlled-Bb3Vr0M6.js";import"./CompositeRoot-4TSizE1k.js";import"./CompositeItem-DCmL7KX6.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./composite-yd7firDo.js";import"./svgIconContainer-Bxdyh2CW.js";import"./PdfViewerSearchBar-C2Cf7fV9.js";import"./chevron-up-C_K7Qq1o.js";import"./chevron-down-34AB4AXv.js";import"./cross-sDHwt2tZ.js";import"./PdfViewerSidebar-CyXn18VN.js";import"./index-BnVPpix6.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./PdfViewerToolbar-CxulkUHa.js";import"./Button-DDPidDHF.js";import"./chevron-right-CEc8jjcp.js";import"./Input-Dmpn7F0W.js";import"./search-Fzzl4G8z.js";import"./spin-CwP0KP5S.js";import"./error-BHpOgTkX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-35/a17e6c8d8e87840d72bfec366c634ea3ca53e464/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
