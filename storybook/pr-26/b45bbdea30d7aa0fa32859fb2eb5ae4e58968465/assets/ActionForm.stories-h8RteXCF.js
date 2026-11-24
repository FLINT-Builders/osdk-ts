import{j as t,g as n}from"./iframe-9Qc56ENr.js";import{A as r}from"./action-form-CLddzRaG.js";import"./preload-helper-DyAcE4yv.js";import"./DropdownField-yTdkTLuM.js";import"./debounce-yYyDTVJY.js";import"./useOsdkClient-9Nrv4s3L.js";import"./index-OROGqtQ6.js";import"./Input-BNo-_u5D.js";import"./useBaseUiId-FwL7BYPy.js";import"./useControlled-B_qIqTVD.js";import"./index-DOYUnaPc.js";import"./index-Dh3h5MOX.js";import"./PopoverPopup-DCCXAG8S.js";import"./InternalBackdrop-CUc8C_zH.js";import"./composite-DhCF3AFw.js";import"./index-CJPP9-f3.js";import"./getDisabledMountTransitionStyles-BW75AxGn.js";import"./ToolbarRootContext-D8kcxxWi.js";import"./tick-ZseZQiB-.js";import"./svgIconContainer-8v5BjuYc.js";import"./small-cross-DTTV9D1S.js";import"./search-cLeveEh6.js";import"./cross-BiOFXjvO.js";import"./useValueChanged-MCZoLrLU.js";import"./getPseudoElementBounds-DOKmjR3u.js";import"./CompositeItem-BURGIqnl.js";import"./makeExternalStore-DqYHgnt1.js";import"./BaseForm-CtLI_0-Y.js";import"./ActionButton-DmbgcWXC.js";import"./Button-D4UJHZ4Q.js";import"./SkeletonBar-C702hny6.js";import"./Tooltip-CDE1Wq1X.js";import"./info-sign-BclzpLFS.js";import"./chevron-up-DU32ULko.js";import"./chevron-down-DTg_s13_.js";import"./useEventCallback-DIxqN6fJ.js";import"./iconLoader-DIax31BO.js";import"./Switch-Bem-pJNo.js";import"./CompositeRoot-B8gwICha.js";import"./TimePicker-B61rUNM9.js";import"./CollapsiblePanel-CFuv4DzY.js";import"./error-BiGuleu5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-HzozZnUd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
