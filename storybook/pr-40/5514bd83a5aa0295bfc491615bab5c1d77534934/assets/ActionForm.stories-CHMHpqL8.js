import{j as t,g as n}from"./iframe-BYlTxwz3.js";import{A as r}from"./action-form-B2_vcc1q.js";import"./preload-helper-Dkt_E4uP.js";import"./DropdownField-D7WS7Sjf.js";import"./debounce-C0op11OR.js";import"./useOsdkClient-Cu-1fp9t.js";import"./index-Cx2xXvCr.js";import"./Input-D3288P-o.js";import"./useBaseUiId-CHVkZxqH.js";import"./useControlled-2dwLF0eF.js";import"./index-BLjbxIz_.js";import"./index-BCCUn5eT.js";import"./PopoverPopup-BlhfYCCJ.js";import"./InternalBackdrop-BnI_3_S0.js";import"./composite-Oihes5Z3.js";import"./index-B-CUWwrE.js";import"./getDisabledMountTransitionStyles-BV5FL582.js";import"./ToolbarRootContext-oJ3Dqb0I.js";import"./tick--pYF85S_.js";import"./svgIconContainer-CCHa_D4L.js";import"./small-cross-aeJJ7SSq.js";import"./search-CfzUYg2F.js";import"./cross-C7CDDNJi.js";import"./useValueChanged-vNkrsn5_.js";import"./getPseudoElementBounds-DoGGqUvJ.js";import"./CompositeItem-Bu4ubHAW.js";import"./makeExternalStore-DAxSMl-f.js";import"./BaseForm-BU7VmQwZ.js";import"./ActionButton-C_0V6gM3.js";import"./Button-Dplh-cKa.js";import"./SkeletonBar-Csj_wsFv.js";import"./Tooltip-Cj8Rzvni.js";import"./info-sign-Bxt4Ke9B.js";import"./chevron-up-D9f0wOvg.js";import"./chevron-down-DLOLLqcE.js";import"./useEventCallback-6aIfP3km.js";import"./iconLoader-Cyt3Tb1e.js";import"./Switch-DLe60ygm.js";import"./CompositeRoot-B1IL3-ty.js";import"./TimePicker-D3o7G-sv.js";import"./CollapsiblePanel-yPU4El-7.js";import"./error-Ox3QZuhk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C0BX98Nf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
