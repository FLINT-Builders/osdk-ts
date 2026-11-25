import{j as t,g as n}from"./iframe-D4nn_Ti-.js";import{A as r}from"./action-form-DbHhvlif.js";import"./preload-helper-Ce3BUon1.js";import"./DropdownField-Cw3pM5Se.js";import"./debounce-M4p3mf0R.js";import"./useOsdkClient-D4eIr_PA.js";import"./index-ng3tbe9P.js";import"./Input-BS3oHtWW.js";import"./useBaseUiId-CzdAPKcM.js";import"./useControlled-C9uWc1JH.js";import"./index-CAS93zYH.js";import"./index-2u3EkiNe.js";import"./PopoverPopup-DDAnQOO5.js";import"./InternalBackdrop-BmMwY1G8.js";import"./composite-DYx0o4xU.js";import"./index-B-q1-RGO.js";import"./getDisabledMountTransitionStyles-t9u9WVJm.js";import"./ToolbarRootContext-BeHAyrdi.js";import"./tick-BFeHnwNZ.js";import"./svgIconContainer-DHuWaZTY.js";import"./small-cross-C5fgYdja.js";import"./search-Bp5Pu1gz.js";import"./cross-Ru3cb-0v.js";import"./useValueChanged-CAq7ZKSq.js";import"./getPseudoElementBounds-Bxn--1AT.js";import"./CompositeItem-C2VQoVHh.js";import"./makeExternalStore-BCGLTkZK.js";import"./BaseForm-6SxiBpPK.js";import"./ActionButton-DJtGz9fC.js";import"./Button-ClRUUN4D.js";import"./SkeletonBar-DSusNGP9.js";import"./Tooltip-B-SB3nD8.js";import"./info-sign-BwIj-tC2.js";import"./chevron-up-ovqeMCkM.js";import"./chevron-down-CHYkUqFt.js";import"./useEventCallback-DfL7Xwj3.js";import"./iconLoader-Y7_21byc.js";import"./Switch-DOgYoGe1.js";import"./CompositeRoot-Ccy26ic0.js";import"./TimePicker-CMuNlp5r.js";import"./CollapsiblePanel-C0-syFXf.js";import"./error-BpjJAz0p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSFskl9_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
