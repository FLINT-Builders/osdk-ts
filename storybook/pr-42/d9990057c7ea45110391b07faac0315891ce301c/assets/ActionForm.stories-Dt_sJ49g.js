import{j as t,g as n}from"./iframe-C-2fM64A.js";import{A as r}from"./action-form-xCZtvY_t.js";import"./preload-helper-5l20kbgh.js";import"./DropdownField-CrZRfkaF.js";import"./debounce-Cqmr5QPm.js";import"./useOsdkClient-Bq_YKUUv.js";import"./index-Dyfx2zPa.js";import"./Input-Dlx-frSm.js";import"./useBaseUiId-CTryWo_g.js";import"./useControlled-BF8LnBHR.js";import"./index-BdbAVji3.js";import"./index-BbVHPZNY.js";import"./PopoverPopup-ZZdakFoe.js";import"./InternalBackdrop-UxmxiKm7.js";import"./composite-DwmZEnpk.js";import"./index-D8oWn7w6.js";import"./getDisabledMountTransitionStyles-CxaJ42JS.js";import"./ToolbarRootContext-BnUbB36R.js";import"./tick-B4a_6SHF.js";import"./svgIconContainer-C9IKjxfB.js";import"./small-cross-BklgATg6.js";import"./search-CLHFOlZI.js";import"./cross-CgNS1GgR.js";import"./useValueChanged-CHlXRDud.js";import"./getPseudoElementBounds-CqzFYEIN.js";import"./CompositeItem-CUIe3tWP.js";import"./makeExternalStore-C-9kweRw.js";import"./BaseForm-D363Z7nX.js";import"./ActionButton-487khAzZ.js";import"./Button-De1R0ypn.js";import"./SkeletonBar-DU5JM7iL.js";import"./Tooltip-CbS0pN8T.js";import"./info-sign-Cs32lP2s.js";import"./chevron-up-Be5sFlZr.js";import"./chevron-down-BIEm0AX1.js";import"./useEventCallback-BPmnomYn.js";import"./iconLoader-Dakw_9pC.js";import"./Switch-CshU1sqU.js";import"./CompositeRoot-DZ2My_Dy.js";import"./TimePicker-Deowcun3.js";import"./CollapsiblePanel-DyD1UVL_.js";import"./error-DCBUh_j7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-HX80CHoP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
