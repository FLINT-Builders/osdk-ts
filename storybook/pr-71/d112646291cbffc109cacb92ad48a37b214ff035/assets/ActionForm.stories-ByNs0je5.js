import{j as t,g as n}from"./iframe-DchqE16O.js";import{A as r}from"./action-form-bkd9hS8C.js";import"./preload-helper-CruhVp8d.js";import"./DropdownField-BeWNTIQ_.js";import"./debounce-D_wvzfMc.js";import"./useOsdkClient-BBdDY5jb.js";import"./index-C9pVGgAF.js";import"./Input-DZYpZIAm.js";import"./useBaseUiId-DavIhVcf.js";import"./useControlled-CSem3ovp.js";import"./index-BpsEnsaS.js";import"./index-BxxxCHhN.js";import"./PopoverPopup-Dp1eQXG2.js";import"./InternalBackdrop-LybRFn-n.js";import"./composite-C-jL-lwP.js";import"./index-BoEySXuY.js";import"./getDisabledMountTransitionStyles-BBnhTzgD.js";import"./ToolbarRootContext-DDdd4xaD.js";import"./tick-BBgvL453.js";import"./svgIconContainer-o0BLlK91.js";import"./small-cross-8E9tPeRL.js";import"./search-BePaI44o.js";import"./cross-pv8yLqK0.js";import"./useValueChanged-CoQERUSb.js";import"./getPseudoElementBounds-AEkTlzBM.js";import"./CompositeItem-B0Rg-Lxm.js";import"./makeExternalStore-DOPJ0IZk.js";import"./BaseForm-UWRhn8tj.js";import"./ActionButton-BJMvEM6L.js";import"./Button-DG5zH7tS.js";import"./SkeletonBar-DukQAzpM.js";import"./Tooltip-DX6d1ahi.js";import"./info-sign-DSHztVM8.js";import"./chevron-up-C61hOPNq.js";import"./chevron-down-C-JwTnNq.js";import"./useEventCallback-D9yoUN4j.js";import"./iconLoader-DWOejeMQ.js";import"./Switch-Cp0BpGMX.js";import"./CompositeRoot-CLpdVBfX.js";import"./TimePicker-CWgyYbcH.js";import"./CollapsiblePanel-BdSEsD6W.js";import"./error-BZzNTwNw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8g_jVC8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
