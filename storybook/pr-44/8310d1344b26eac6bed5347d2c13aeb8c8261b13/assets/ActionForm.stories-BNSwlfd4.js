import{j as t,g as n}from"./iframe-Ci8jv4db.js";import{A as r}from"./action-form-CqKL7cUq.js";import"./preload-helper-BijYl_hj.js";import"./DropdownField-DODhTvNS.js";import"./debounce-Q2FLO271.js";import"./useOsdkClient-CY0rgXDT.js";import"./index-Cb4PYHc_.js";import"./Input-Ctv6ca3A.js";import"./useBaseUiId-Dty0keys.js";import"./useControlled-AQzCfptX.js";import"./index--wTs4Tvo.js";import"./index-B3qX2IiO.js";import"./PopoverPopup-DX5l843X.js";import"./InternalBackdrop-DNudlJn1.js";import"./composite-dn8KtEdo.js";import"./index-DbJfPldr.js";import"./getDisabledMountTransitionStyles-C3sdXLul.js";import"./ToolbarRootContext-BBg552Fz.js";import"./tick-kwWHIM-G.js";import"./svgIconContainer-Y9M5A49t.js";import"./small-cross-CzYmJZ8j.js";import"./search-D0vckm_H.js";import"./cross-DUbcKgzt.js";import"./useValueChanged-Bjs7PV0z.js";import"./getPseudoElementBounds-hHPF40eR.js";import"./CompositeItem-pAC9-vMM.js";import"./makeExternalStore-MN51YzUq.js";import"./BaseForm-B7xK7mtx.js";import"./ActionButton-CpnY3Zoi.js";import"./Button-DXyPvcOa.js";import"./SkeletonBar-C9OdSW8N.js";import"./Tooltip-CPVVmqYN.js";import"./info-sign-JwNPQjEG.js";import"./chevron-up-Daqk8-71.js";import"./chevron-down-Cogx4pq7.js";import"./useEventCallback-BoVAQff_.js";import"./iconLoader-CcOOHCQv.js";import"./Switch-DD69coTZ.js";import"./CompositeRoot-XUmcYAzj.js";import"./TimePicker-CfZqro3a.js";import"./CollapsiblePanel-BZkK1yay.js";import"./error-BVKGD7Ps.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BOl2WiFX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
