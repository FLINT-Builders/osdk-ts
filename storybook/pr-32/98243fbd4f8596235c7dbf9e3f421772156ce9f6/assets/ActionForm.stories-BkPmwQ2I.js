import{j as t,g as n}from"./iframe-BrM52See.js";import{A as r}from"./action-form-D75eu1FX.js";import"./preload-helper-DPLtzYOe.js";import"./DropdownField-BjLRMnJ9.js";import"./debounce-I5NpiXWy.js";import"./useOsdkClient-CUbGPJm8.js";import"./index-H3qcjrO1.js";import"./Input-Ctwp83L6.js";import"./useBaseUiId-LwZBbKwi.js";import"./useControlled--LTXft-F.js";import"./index-DNE2a_D5.js";import"./index-UO7JcdS6.js";import"./PopoverPopup-Hoh-5uEa.js";import"./InternalBackdrop-B0v8ialf.js";import"./composite-BZFmOQck.js";import"./index-l8fykvfj.js";import"./getDisabledMountTransitionStyles-ZwWdEcJk.js";import"./ToolbarRootContext-CTgOKvR4.js";import"./tick-s7oDZI4G.js";import"./svgIconContainer-DWvq_kJI.js";import"./small-cross-mZTcJe0Y.js";import"./search-B5gd2r9J.js";import"./cross-BS83Kw7I.js";import"./useValueChanged-CaQ00tTB.js";import"./getPseudoElementBounds-DNWW4OHS.js";import"./CompositeItem-T9YLjj07.js";import"./makeExternalStore-ByUo-Oil.js";import"./BaseForm-CJbt-YWI.js";import"./ActionButton-Bjg5SHwB.js";import"./Button-Bor1IKlq.js";import"./SkeletonBar-CyZkMeKi.js";import"./Tooltip-Dmxc3XnT.js";import"./info-sign-fiSdCgP4.js";import"./chevron-up-BuIKXeGr.js";import"./chevron-down-IA-50EVq.js";import"./useEventCallback-BHcaXjux.js";import"./iconLoader-CTsR0YRM.js";import"./Switch-B3CscGCs.js";import"./CompositeRoot-uo8Fdut_.js";import"./TimePicker-cjHDYTBC.js";import"./CollapsiblePanel-DNThs05J.js";import"./error-DUN9wjL6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCPJGWBb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
