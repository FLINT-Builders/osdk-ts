import{j as n}from"./iframe-DSQ_OwRS.js";import{B as e}from"./BasePdfViewer-D58nxy_C.js";import"./preload-helper-CLqqVN7k.js";import"./index-B0q23UFt.js";import"./BasePdfViewer.module.css-BW1zoPHP.js";import"./PdfViewerAnnotationLayer-BCu-93Zw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dva3_Sgx.js";import"./PdfViewerOutlineSidebar-DTxMkOGA.js";import"./PdfViewerSidebarHeader-BbksBieq.js";import"./useBaseUiId-C6Wr8zKH.js";import"./useControlled-C2eTizRr.js";import"./CompositeRoot-MA4Aekb5.js";import"./CompositeItem-GcMwnNE0.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./composite-Dp3eVNnJ.js";import"./svgIconContainer-BcPAhmn-.js";import"./PdfViewerSearchBar-UboHRvKn.js";import"./chevron-up-B_f1sOSM.js";import"./chevron-down-Cro00f4s.js";import"./cross-BpS57vew.js";import"./PdfViewerSidebar-DF-fpmLD.js";import"./index-DXTnQeDh.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./PdfViewerToolbar-630ZPZRb.js";import"./Button-ChRZXQ3B.js";import"./chevron-right-N3bblzox.js";import"./Input-BzO2QOS7.js";import"./search-DlOSHXy8.js";import"./spin-Bp_PbUWv.js";import"./error-BA2QLyzo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-59/46bfe10916cd619bb6e67f7c228074f06b9f5dbb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
