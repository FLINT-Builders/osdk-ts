import{j as t,g as n}from"./iframe-NQpNXTjy.js";import{A as r}from"./action-form-CbeosKT-.js";import"./preload-helper-CxQobykS.js";import"./DropdownField-CzOL9fzI.js";import"./debounce-D0cuI_rP.js";import"./useOsdkClient-CD2MlnJ0.js";import"./index-DPTMEED5.js";import"./Input-8evEI4JC.js";import"./useBaseUiId-CA0Hx9BI.js";import"./useControlled-Dfym0E7J.js";import"./index-KJTn3svq.js";import"./index-DFjVijpc.js";import"./PopoverPopup-Bbh9gvxv.js";import"./InternalBackdrop-6ARUn0ZZ.js";import"./composite-CckoXbi1.js";import"./index-BFl4Kuhx.js";import"./getDisabledMountTransitionStyles-Ceat6ftx.js";import"./ToolbarRootContext-ubvNXORe.js";import"./tick-Cgl4xEea.js";import"./svgIconContainer-CuTwM0es.js";import"./small-cross-B3yU2vZR.js";import"./search-5LAMc9Yr.js";import"./cross-BXjngWjd.js";import"./useValueChanged-CMvtaO4q.js";import"./getPseudoElementBounds-DzeDuzLQ.js";import"./CompositeItem-Dc0f6qB5.js";import"./makeExternalStore-C9iKzFcW.js";import"./BaseForm-Btrh2YxY.js";import"./ActionButton-zJRNa7Ux.js";import"./Button-BW-em3cF.js";import"./SkeletonBar-DV2B4sl1.js";import"./Tooltip-BB-3PmXh.js";import"./info-sign-DZsWWEuP.js";import"./chevron-up-B7IQHaXU.js";import"./chevron-down-CpS1Uhst.js";import"./useEventCallback-CFM9jrEt.js";import"./iconLoader-jP5KqSuc.js";import"./Switch-tAssXRfB.js";import"./CompositeRoot-BdMisPTO.js";import"./TimePicker-BlKnIP7P.js";import"./CollapsiblePanel-BxFWJsn2.js";import"./error-DtbT1aJ_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BrRP7bk2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
