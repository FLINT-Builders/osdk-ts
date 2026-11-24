import{j as t,g as n}from"./iframe-Dv8One7V.js";import{A as r}from"./action-form-CD09BWTW.js";import"./preload-helper-BBoDOBGQ.js";import"./DropdownField-Cq5lnh0S.js";import"./debounce-BRUGc1K3.js";import"./useOsdkClient-DoPqkbEf.js";import"./index-BWSDrnLY.js";import"./Input-CVOjTeyF.js";import"./useBaseUiId-CGmk-t13.js";import"./useControlled-Xs-DgsXw.js";import"./index-Ctu1Wao6.js";import"./index-D03dI7Zm.js";import"./PopoverPopup-CwVc1ewd.js";import"./InternalBackdrop-DCePJn6p.js";import"./composite-lgOQMlQp.js";import"./index-DcQ5HyEs.js";import"./getDisabledMountTransitionStyles-BkcjIdFx.js";import"./ToolbarRootContext-puaQBB4T.js";import"./tick-CoFklBfZ.js";import"./svgIconContainer-frnooqcF.js";import"./small-cross-BWiwWK5R.js";import"./search-DIkoxWAI.js";import"./cross-DtsB4Pth.js";import"./useValueChanged-CugKpIVt.js";import"./getPseudoElementBounds-ShrpqpOE.js";import"./CompositeItem-DnhodDvF.js";import"./makeExternalStore-BdR9BUh7.js";import"./BaseForm-B4_--HVE.js";import"./ActionButton-CNvW2NgU.js";import"./Button-BvCCqPbi.js";import"./SkeletonBar-fAb0c0T8.js";import"./Tooltip-hfd-RkvL.js";import"./info-sign-CLIx1JIl.js";import"./chevron-up-DP_i6R8n.js";import"./chevron-down-BxGUpntZ.js";import"./useEventCallback-6cjXoQ8Y.js";import"./iconLoader-DRG56ibU.js";import"./Switch-CAG8W8dV.js";import"./CompositeRoot-urMWMX1d.js";import"./TimePicker-CPh_QG1v.js";import"./CollapsiblePanel-RlfeAOIs.js";import"./error-DLGPeg_I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CktMaht-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
