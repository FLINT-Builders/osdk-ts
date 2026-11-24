import{j as t,g as n}from"./iframe-DSkRGESf.js";import{A as r}from"./action-form-DO9Roo56.js";import"./preload-helper-Du8a5MkV.js";import"./DropdownField-CwJ2N8FN.js";import"./debounce-DejaveeD.js";import"./useOsdkClient-ncq2w8Z8.js";import"./index-BNFB2Cjh.js";import"./Input-CDxPmZXG.js";import"./useBaseUiId-B4X2m0nz.js";import"./useControlled-DRRjE45d.js";import"./index-eLB5m-VM.js";import"./index-BogfGi5C.js";import"./PopoverPopup-MLe4RJY9.js";import"./InternalBackdrop-C-ExtsJs.js";import"./composite-CgZ_kExF.js";import"./index-wflXaNK9.js";import"./getDisabledMountTransitionStyles-CL2BXhxo.js";import"./ToolbarRootContext-BXHKua9s.js";import"./tick-CMvN_MpF.js";import"./svgIconContainer-CgBYdrzc.js";import"./small-cross-BosWx3lC.js";import"./search-D5ZgJhKz.js";import"./cross-HIAn8DML.js";import"./useValueChanged-CSNKFQVN.js";import"./getPseudoElementBounds-D_fpBJ2K.js";import"./CompositeItem-CLoyw74g.js";import"./makeExternalStore-DiqN5xTe.js";import"./BaseForm-BwT-AdXl.js";import"./ActionButton-IjiA5MzP.js";import"./Button-DxPyCFzS.js";import"./SkeletonBar-caUYM5Zj.js";import"./Tooltip-BnbMPUtw.js";import"./info-sign-DgZgYQqh.js";import"./chevron-up-Dx9X-1VS.js";import"./chevron-down-D93VaLA7.js";import"./useEventCallback-CbgSPNVN.js";import"./iconLoader-1BES5b3w.js";import"./Switch-xlFPlN24.js";import"./CompositeRoot-BxIjLCkX.js";import"./TimePicker-BnAVkWQQ.js";import"./CollapsiblePanel-CU1UF0zM.js";import"./error-DwrNHlKr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ca7Fya9M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
