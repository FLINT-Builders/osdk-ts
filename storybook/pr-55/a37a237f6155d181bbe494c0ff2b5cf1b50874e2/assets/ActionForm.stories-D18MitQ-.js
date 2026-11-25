import{j as t,g as n}from"./iframe-BQ-KHcHE.js";import{A as r}from"./action-form-DKjNV7pj.js";import"./preload-helper-D_u3--ud.js";import"./DropdownField-DnnSL_kI.js";import"./debounce-aoiaDW2x.js";import"./useOsdkClient-QySWZGED.js";import"./index-Bi4ii54G.js";import"./Input-DzeLPEOm.js";import"./useBaseUiId-Da1a09f-.js";import"./useControlled-D0CpkFUO.js";import"./index-9EejlPKp.js";import"./index-eHVziK00.js";import"./PopoverPopup-DRD2vKLI.js";import"./InternalBackdrop-BeLoEUss.js";import"./composite-pFx5Riq1.js";import"./index-c3QE1mje.js";import"./getDisabledMountTransitionStyles-CJE6Zpnj.js";import"./ToolbarRootContext-GvDSdibe.js";import"./tick-qNWElNJO.js";import"./svgIconContainer-BkJqfnsZ.js";import"./small-cross-BEdJA5Lo.js";import"./search-D2FdgE19.js";import"./cross-CTORp-eO.js";import"./useValueChanged-BzLrFWOP.js";import"./getPseudoElementBounds-dMzXYP3e.js";import"./CompositeItem-BvMYLyDt.js";import"./makeExternalStore-wa371Aji.js";import"./BaseForm-BJzfoxTA.js";import"./ActionButton-DVp_A1sh.js";import"./Button-CWYPsBwI.js";import"./SkeletonBar-Comqxq8o.js";import"./Tooltip-pNyVdFzA.js";import"./info-sign-BNPO0Y2O.js";import"./chevron-up-DKTNmGm0.js";import"./chevron-down-Bo4eEeQA.js";import"./useEventCallback-CwAUxMau.js";import"./iconLoader-CyHwaEWn.js";import"./Switch-8afvcwgW.js";import"./CompositeRoot-BdKUlpTZ.js";import"./TimePicker-34B5vH7I.js";import"./CollapsiblePanel-kLnFiWuY.js";import"./error-Bd9iDu5J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DcXC33Yd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
