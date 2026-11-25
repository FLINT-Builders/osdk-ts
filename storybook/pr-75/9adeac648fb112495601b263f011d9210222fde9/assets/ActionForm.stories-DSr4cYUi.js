import{j as t,g as n}from"./iframe-B33FiDGM.js";import{A as r}from"./action-form-DVQYpof3.js";import"./preload-helper-Cg7VMV6C.js";import"./DropdownField-B_28b-Fe.js";import"./debounce-G8bS-CmE.js";import"./useOsdkClient-DzcQCh9h.js";import"./index-B5YN0Y56.js";import"./Input-BUa4RtbK.js";import"./useBaseUiId-DmUoOZel.js";import"./useControlled-DJSk-4eD.js";import"./index-CBrK29QB.js";import"./index-DlRrr2y0.js";import"./PopoverPopup-DJjNkjXn.js";import"./InternalBackdrop-Bc6Qn10Y.js";import"./composite-BOK6xXDF.js";import"./index-BkpulrI-.js";import"./getDisabledMountTransitionStyles-DXyRWdV6.js";import"./ToolbarRootContext-Cp_Dqaz8.js";import"./tick-CYGrOqhY.js";import"./svgIconContainer-ClieOgTu.js";import"./small-cross-C4rGQ9AX.js";import"./search-C5uprCHM.js";import"./cross-DM8-ytCZ.js";import"./useValueChanged-rm8GvKSd.js";import"./getPseudoElementBounds-Dz6sul8_.js";import"./CompositeItem-Bvfghm7d.js";import"./makeExternalStore-zxZeOhNi.js";import"./BaseForm-BRT41fJ9.js";import"./ActionButton-C1CptcBU.js";import"./Button-CyQdblJP.js";import"./SkeletonBar-CnLHYQNB.js";import"./Tooltip-DCvW2Y7A.js";import"./info-sign-BDUfhq_a.js";import"./chevron-up-aZT7OeK_.js";import"./chevron-down-Btg0m5Mr.js";import"./useEventCallback-CUqu6vM2.js";import"./iconLoader-DDkDSzO2.js";import"./Switch-BpGmaac5.js";import"./CompositeRoot-CXjATUbj.js";import"./TimePicker-D7NOMSti.js";import"./CollapsiblePanel-DtZcxswM.js";import"./error-DU6Loo59.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-8fzs58WB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
