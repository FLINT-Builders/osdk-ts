import{j as t,g as n}from"./iframe-DUf0ZM0m.js";import{A as r}from"./action-form-CZDqzCAu.js";import"./preload-helper-KlMKjl9V.js";import"./DropdownField-DAuhKtCc.js";import"./debounce-D4eo-Ale.js";import"./useOsdkClient-CnVn3iVU.js";import"./index-DhPIhyt4.js";import"./Input-D5jZGu61.js";import"./useBaseUiId-CCdSaAp3.js";import"./useControlled-D9pcZLhn.js";import"./index-DcG1zB2N.js";import"./index-L2G6ZGB5.js";import"./PopoverPopup-DSjEA-Cg.js";import"./InternalBackdrop-BpRU2U_8.js";import"./composite-Ca3Atwol.js";import"./index-C0yU06Q6.js";import"./getDisabledMountTransitionStyles-DxcTI9oz.js";import"./ToolbarRootContext-DI5DE6WF.js";import"./tick-Cf9GU9iy.js";import"./svgIconContainer-DIQ4r6yH.js";import"./small-cross-DPoZyTDD.js";import"./search-BTSIL3B5.js";import"./cross-CSu9pd0U.js";import"./useValueChanged-z0aioFdT.js";import"./getPseudoElementBounds-Cgd5KJAZ.js";import"./CompositeItem-B9hM72ZM.js";import"./makeExternalStore-CiGKFh7B.js";import"./BaseForm-C_jaFpiY.js";import"./ActionButton-COPug63M.js";import"./Button-27JXw8gN.js";import"./SkeletonBar-COiOlbH0.js";import"./Tooltip-XJCpwDJu.js";import"./info-sign-DuDcHutT.js";import"./chevron-up-CNKZo9h0.js";import"./chevron-down-BElmyRaO.js";import"./useEventCallback-BgsfaB3Y.js";import"./iconLoader-CAxtcKQx.js";import"./Switch-B1xxnBUW.js";import"./CompositeRoot-CZZ219Vr.js";import"./TimePicker-HWColUhd.js";import"./CollapsiblePanel-mRxE6gsX.js";import"./error-wj1vfq65.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DuLTXoUD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
