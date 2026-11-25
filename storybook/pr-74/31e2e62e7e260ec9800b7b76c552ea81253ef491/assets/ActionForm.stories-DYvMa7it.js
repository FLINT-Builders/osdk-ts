import{j as t,g as n}from"./iframe-COTYg0i4.js";import{A as r}from"./action-form-BSHlo1pU.js";import"./preload-helper-BfUBPZQv.js";import"./DropdownField-CbKzwlXJ.js";import"./debounce-CRgNZ5We.js";import"./useOsdkClient-Crr6_6H9.js";import"./index-DEWKwQ6D.js";import"./Input-DNkGR0ru.js";import"./useBaseUiId-B73nbOFb.js";import"./useControlled-BH9DAJiP.js";import"./index-CmDHWJEY.js";import"./index-6gJeIl7T.js";import"./PopoverPopup-liRqNt55.js";import"./InternalBackdrop-B63HsuZ1.js";import"./composite-DLNSROKR.js";import"./index-Pg3lOjt6.js";import"./getDisabledMountTransitionStyles-CoNaBqL_.js";import"./ToolbarRootContext-BQD_EwMC.js";import"./tick-C2nrRSUw.js";import"./svgIconContainer-DSLsCdLH.js";import"./small-cross-BeoxIJGH.js";import"./search-Di0PIeOa.js";import"./cross-pC4h9ZyI.js";import"./useValueChanged-WywSbPil.js";import"./getPseudoElementBounds-VlWfte-L.js";import"./CompositeItem-D4sOZv8D.js";import"./makeExternalStore-DrnQQ2FN.js";import"./BaseForm-1T3APK31.js";import"./ActionButton-CW1Oc_Lq.js";import"./Button-BBJ0BrTf.js";import"./SkeletonBar-BZj2rBym.js";import"./Tooltip-g0ERy23q.js";import"./info-sign-3cGdD6VX.js";import"./chevron-up-DmL2Ml8d.js";import"./chevron-down-DHzInOjp.js";import"./useEventCallback-CiBIzJgi.js";import"./iconLoader-DQiV8mE0.js";import"./Switch-DOwUNMVG.js";import"./CompositeRoot-2mcF1pFV.js";import"./TimePicker-Dq374kgR.js";import"./CollapsiblePanel-6UtNAlT1.js";import"./error-DlWRXjMl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-0S6rxLM8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
