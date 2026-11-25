import{j as t,g as n}from"./iframe-BimQ5I7B.js";import{A as r}from"./action-form-ClV3h6Wd.js";import"./preload-helper-DVgp4Odj.js";import"./DropdownField-vEf4IKfs.js";import"./debounce-Dr3bOVOf.js";import"./useOsdkClient-B6IDuaBu.js";import"./index-Bterpizd.js";import"./Input-BgCDGlWE.js";import"./useBaseUiId-C8madkWI.js";import"./useControlled-BZPlZ-l4.js";import"./index-C3QHAf1t.js";import"./index-CZtGa7hT.js";import"./PopoverPopup-CqVwxtDC.js";import"./InternalBackdrop-CX3KLEvW.js";import"./composite-CFQYUg6D.js";import"./index-8RuBob7j.js";import"./getDisabledMountTransitionStyles-DrpCBbHi.js";import"./ToolbarRootContext-BlGMvUYP.js";import"./tick-B97f0SKP.js";import"./svgIconContainer-B7sYR9CH.js";import"./small-cross-FAi29SOY.js";import"./search-2ZJHkAe4.js";import"./cross-B1ycp5D_.js";import"./useValueChanged-DYoiWqYd.js";import"./getPseudoElementBounds-BKz8oGoA.js";import"./CompositeItem-CKdP0lvj.js";import"./makeExternalStore-BMJZ0gXh.js";import"./BaseForm-COUZ79An.js";import"./ActionButton-ButrV8bA.js";import"./Button-BDC1u4I1.js";import"./SkeletonBar-Bt_B5dG6.js";import"./Tooltip-CYgKzjZV.js";import"./info-sign-PlGYVBdq.js";import"./chevron-up-D88hSPpg.js";import"./chevron-down-BSMcI5Uh.js";import"./useEventCallback-p4N8Eyn2.js";import"./iconLoader-Ch0ge00-.js";import"./Switch-61tseP11.js";import"./CompositeRoot-d575uYhY.js";import"./TimePicker-CggdnID4.js";import"./CollapsiblePanel-CpyR6Z1C.js";import"./error-Cm6SmQec.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3LiHDOi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
