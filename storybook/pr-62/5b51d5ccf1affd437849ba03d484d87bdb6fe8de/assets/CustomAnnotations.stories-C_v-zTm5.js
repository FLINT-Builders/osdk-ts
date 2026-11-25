import{j as n}from"./iframe-Bpe98Dj4.js";import{B as e}from"./BasePdfViewer-2p7dr0Ca.js";import"./preload-helper-Bt7Pwj0U.js";import"./index-Jn5RtXdC.js";import"./BasePdfViewer.module.css-6iR4BC9A.js";import"./PdfViewerAnnotationLayer-DcC8lX-a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BX8R5tDW.js";import"./PdfViewerOutlineSidebar-IUYM6FDr.js";import"./PdfViewerSidebarHeader-CdKhw4y4.js";import"./useBaseUiId-CJdlvVPQ.js";import"./useControlled-D2vfPoU0.js";import"./CompositeRoot-DOZXrzeJ.js";import"./CompositeItem-Cb_CEEPz.js";import"./ToolbarRootContext-B7sQOt43.js";import"./composite-BEI44NiL.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./PdfViewerSearchBar-BPwmh9P8.js";import"./chevron-up-1EqwUT07.js";import"./chevron-down-B2AZuAlJ.js";import"./cross-B4LWD9WI.js";import"./PdfViewerSidebar--LpNBJDA.js";import"./index-qE8U94CR.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./PdfViewerToolbar-B7nhGlIr.js";import"./Button-CKCuh_PT.js";import"./chevron-right-BQP4AtQd.js";import"./Input-5kFdRd8C.js";import"./search-DczXofvN.js";import"./spin-sPBmBTAQ.js";import"./error-xXUB5Jtg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-62/5b51d5ccf1affd437849ba03d484d87bdb6fe8de/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
