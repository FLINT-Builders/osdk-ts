import{j as t,g as n}from"./iframe-CP9a7nUw.js";import{A as r}from"./action-form-DeVkq0J3.js";import"./preload-helper-CEsPI4dA.js";import"./DropdownField-B-yjH5_t.js";import"./debounce-CN_ZmUe7.js";import"./useOsdkClient-HDPiO6O7.js";import"./index-DniCSj7w.js";import"./Input-CWaAUNjQ.js";import"./useBaseUiId-DiSl6omO.js";import"./useControlled-CuJAn8pg.js";import"./index-iwc-nvij.js";import"./index-DmfmdOfN.js";import"./PopoverPopup-DmK1cLX2.js";import"./InternalBackdrop-INOUWv7w.js";import"./composite-glykujGt.js";import"./index--1cLqxis.js";import"./getDisabledMountTransitionStyles-wj6lRVON.js";import"./ToolbarRootContext-UMchbOHm.js";import"./tick-X1olulBP.js";import"./svgIconContainer-2VLDNHQf.js";import"./small-cross-Cn3FY_V8.js";import"./search-XcYtnEQZ.js";import"./cross-CzNskJpg.js";import"./useValueChanged-rrXn3TDR.js";import"./getPseudoElementBounds-DA4wJ9CI.js";import"./CompositeItem-CqeBUtGk.js";import"./makeExternalStore-BVCeMHz1.js";import"./BaseForm-DPg2lhc5.js";import"./ActionButton-xfKsHh_O.js";import"./Button-CmgLZAkm.js";import"./SkeletonBar-N9YLL7wQ.js";import"./Tooltip-BHR2-9_G.js";import"./info-sign-CRWD_L-7.js";import"./chevron-up-CPCCmFza.js";import"./chevron-down-BeMypg5x.js";import"./useEventCallback-ChYCugrs.js";import"./iconLoader-gdDm-6OD.js";import"./Switch-vDjkV_3p.js";import"./CompositeRoot--EiGvR1F.js";import"./TimePicker-ptgbjSCR.js";import"./CollapsiblePanel-CCQUbxVQ.js";import"./error-XoDyt_r9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tcURfXmI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
