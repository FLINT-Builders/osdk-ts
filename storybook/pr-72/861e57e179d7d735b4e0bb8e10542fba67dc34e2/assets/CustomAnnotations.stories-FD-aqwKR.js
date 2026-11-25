import{j as n}from"./iframe-NQpNXTjy.js";import{B as e}from"./BasePdfViewer-JiuLwIcA.js";import"./preload-helper-CxQobykS.js";import"./index-DPTMEED5.js";import"./BasePdfViewer.module.css-BgLFZYBx.js";import"./PdfViewerAnnotationLayer-DRaICNhL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8Y18E7h.js";import"./PdfViewerOutlineSidebar-DOqiv6YB.js";import"./PdfViewerSidebarHeader-WSkjml6D.js";import"./useBaseUiId-CA0Hx9BI.js";import"./useControlled-Dfym0E7J.js";import"./CompositeRoot-BdMisPTO.js";import"./CompositeItem-Dc0f6qB5.js";import"./ToolbarRootContext-ubvNXORe.js";import"./composite-CckoXbi1.js";import"./svgIconContainer-CuTwM0es.js";import"./PdfViewerSearchBar-C55F8r_L.js";import"./chevron-up-B7IQHaXU.js";import"./chevron-down-CpS1Uhst.js";import"./cross-BXjngWjd.js";import"./PdfViewerSidebar-TYJNrS5C.js";import"./index-DD2WCnOg.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./PdfViewerToolbar-Dlbc1W9D.js";import"./Button-BW-em3cF.js";import"./chevron-right-BOmfGKrC.js";import"./Input-8evEI4JC.js";import"./search-5LAMc9Yr.js";import"./spin-MZYPvdKa.js";import"./error-DtbT1aJ_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-72/861e57e179d7d735b4e0bb8e10542fba67dc34e2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
