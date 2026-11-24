import{j as n}from"./iframe-AucoVF3S.js";import{B as e}from"./BasePdfViewer-DpFkl31U.js";import"./preload-helper-C9ibelWf.js";import"./index-BCzMg9g9.js";import"./BasePdfViewer.module.css-Cb-0_3Bt.js";import"./PdfViewerAnnotationLayer-BmaMMHb6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiFS7dCZ.js";import"./PdfViewerOutlineSidebar-BMcUj5XU.js";import"./PdfViewerSidebarHeader-DXLANabK.js";import"./useBaseUiId-8trwhzTr.js";import"./useControlled-CzfSKEfy.js";import"./CompositeRoot-Do99u0Jf.js";import"./CompositeItem-DOrX4W-o.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./composite-DSdmvgK1.js";import"./svgIconContainer-61R_Lu5T.js";import"./PdfViewerSearchBar-CAEg6cEQ.js";import"./chevron-up-D6K4qSXx.js";import"./chevron-down-gqlYPD2T.js";import"./cross-CXJnoTqk.js";import"./PdfViewerSidebar-CDhqGFgz.js";import"./index-BLHxMhxy.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./PdfViewerToolbar-BGMJhxJo.js";import"./Button-Dz4p_z9s.js";import"./chevron-right-FaHrVhQ_.js";import"./Input-BiAZvzzV.js";import"./search-DPzEqCxj.js";import"./spin-CmNMAbTa.js";import"./error-SdAehXSj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-47/ec2ec377d382ff6be9b24993f18eabc7debb0f23/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
