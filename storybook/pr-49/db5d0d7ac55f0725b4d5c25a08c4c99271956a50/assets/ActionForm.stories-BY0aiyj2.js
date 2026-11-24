import{j as t,g as n}from"./iframe-ClewFmdb.js";import{A as r}from"./action-form-DSvRiPCl.js";import"./preload-helper-C7O4zYJs.js";import"./DropdownField-DJ_QrvtP.js";import"./debounce-DRq1cdjb.js";import"./useOsdkClient-CvCsWpzO.js";import"./index-euIemqPw.js";import"./Input-eZMgRwLi.js";import"./useBaseUiId-CM0luRv8.js";import"./useControlled-8bbLsKqv.js";import"./index-B8IHJiae.js";import"./index-BvqWW8OB.js";import"./PopoverPopup-BRgxxAdh.js";import"./InternalBackdrop-DwZ14DHU.js";import"./composite-C-wFuse1.js";import"./index-DIwsgw5y.js";import"./getDisabledMountTransitionStyles-vZzLMj6x.js";import"./ToolbarRootContext-DXJZgoaJ.js";import"./tick-BrTAlGhW.js";import"./svgIconContainer-6Af8qoOE.js";import"./small-cross-uC2CoRN_.js";import"./search-D0xA_Pz7.js";import"./cross-C3it1rM0.js";import"./useValueChanged-BuF2EKQm.js";import"./getPseudoElementBounds-Bp53_Y_k.js";import"./CompositeItem-LzMD5IlK.js";import"./makeExternalStore-B6ZLCKG0.js";import"./BaseForm-DwVU3tn7.js";import"./ActionButton-C4_8y7RX.js";import"./Button-Br0QmuY1.js";import"./SkeletonBar-FwwEYK9L.js";import"./Tooltip-Dhf32NVV.js";import"./info-sign-DNJ1-QrG.js";import"./chevron-up-CgqgaZbw.js";import"./chevron-down-CN3rbJYx.js";import"./useEventCallback-Dm_-ERSx.js";import"./iconLoader-CpqNZ-XM.js";import"./Switch-wHG8E1pg.js";import"./CompositeRoot-CM77FXSy.js";import"./TimePicker-Bvh7_53L.js";import"./CollapsiblePanel-IjgMvAVk.js";import"./error-BpCPRxU6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMwTLP5k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
