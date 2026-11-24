import{j as n}from"./iframe-DbWO1H6Q.js";import{B as e}from"./BasePdfViewer-CDoSwCSD.js";import"./preload-helper-BJFhMS3h.js";import"./index-8DlTsQ0i.js";import"./BasePdfViewer.module.css-BuRP6EN-.js";import"./PdfViewerAnnotationLayer-CSAjFjwR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcaUlf7N.js";import"./PdfViewerOutlineSidebar-BgCA1pBB.js";import"./PdfViewerSidebarHeader-C_ukKRqy.js";import"./useBaseUiId-D72Xv_RL.js";import"./useControlled-Dvfgqsbh.js";import"./CompositeRoot-BIbtdOWq.js";import"./CompositeItem-DXkoNi3p.js";import"./ToolbarRootContext-BAe250S1.js";import"./composite-EggcNtT2.js";import"./svgIconContainer-jTmyv8Oj.js";import"./PdfViewerSearchBar-BWpuRA3h.js";import"./chevron-up-DVR-Z4u3.js";import"./chevron-down-tGzF8KYs.js";import"./cross-BDoBIXl6.js";import"./PdfViewerSidebar-8xe7IDsk.js";import"./index-BHrDqoFX.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./PdfViewerToolbar-BdHuWlKp.js";import"./Button-AMxsa0l_.js";import"./chevron-right-Dr3V1djH.js";import"./Input-DsJzclhr.js";import"./search-zgN6AfWU.js";import"./spin-DZ1eeqXE.js";import"./error-7sAzP_x2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-46/596a426ee8b8304e76f69841f2599b79887a19d6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
