import{j as t,g as n}from"./iframe-KADiCVVG.js";import{A as r}from"./action-form-CXrOw5W7.js";import"./preload-helper-D58te3M_.js";import"./DropdownField-DkfBVsoR.js";import"./debounce-By9KAAPn.js";import"./useOsdkClient-D1mjkhYU.js";import"./index-CFNt4Hmh.js";import"./Input-Bp50UMCa.js";import"./useBaseUiId-DkJPSlIK.js";import"./useControlled-CuQRRHJE.js";import"./index-CrcqA8vK.js";import"./index-CTYcp5kB.js";import"./PopoverPopup-CANNT4MX.js";import"./InternalBackdrop-C6IlLqVC.js";import"./composite-SeDB-2XH.js";import"./index-CEqQ6QN7.js";import"./getDisabledMountTransitionStyles-DX6hxhRU.js";import"./ToolbarRootContext-uHdBl0yg.js";import"./tick-Dl42ovZM.js";import"./svgIconContainer-Dv3Hq4or.js";import"./small-cross-DK_a0kls.js";import"./search-Dgg_RVXN.js";import"./cross-Cxbp7dY8.js";import"./useValueChanged-D-ZC5TBA.js";import"./getPseudoElementBounds-fODdc8DP.js";import"./CompositeItem-DQEBOfk4.js";import"./makeExternalStore-DhWGArAF.js";import"./BaseForm-DNYZKczm.js";import"./ActionButton-B3RH8t1U.js";import"./Button-DWsj5IuF.js";import"./SkeletonBar-NKcCYLqD.js";import"./Tooltip-J-34mFdp.js";import"./info-sign-C7-54DiC.js";import"./chevron-up-DnVww3b6.js";import"./chevron-down-BTIEyZQH.js";import"./useEventCallback-QpCC-2EL.js";import"./iconLoader-Dij6jZkF.js";import"./Switch-DF7-KBZf.js";import"./CompositeRoot-CwY13Uvg.js";import"./TimePicker-iHeBWf1q.js";import"./CollapsiblePanel-DIHxo3eu.js";import"./error-DeZcuLi4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DJ3LBRiG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
