import{j as t,g as n}from"./iframe-CEEl8rhe.js";import{A as r}from"./action-form-B_hfxjyG.js";import"./preload-helper-BNeS4N_d.js";import"./DropdownField-Ba7JB-vZ.js";import"./debounce-CHYKXz2Y.js";import"./useOsdkClient-_z2zV0V9.js";import"./index-D3BMxXWO.js";import"./Input-BDwKsEY1.js";import"./useBaseUiId-Bj988QM0.js";import"./useControlled-B70mnLby.js";import"./index-D1x2Dusf.js";import"./index-BdPeJ8BH.js";import"./PopoverPopup-T8H6T0aO.js";import"./InternalBackdrop-BmSff-mp.js";import"./composite-DpkIpZoZ.js";import"./index-D_PVV5Fd.js";import"./getDisabledMountTransitionStyles-xN5v6pd8.js";import"./ToolbarRootContext-Da9n_jcS.js";import"./tick-CRV1-A87.js";import"./svgIconContainer-BoK1M0P8.js";import"./small-cross-BwPiA_ZV.js";import"./search-BpfeUnuY.js";import"./cross-CC3rT2Cs.js";import"./useValueChanged-C-fNJX81.js";import"./getPseudoElementBounds-Qyou3wPJ.js";import"./CompositeItem-DsOLQMlS.js";import"./makeExternalStore-hwf9V02L.js";import"./BaseForm-CLtDGB9C.js";import"./ActionButton-jLAD1Qmw.js";import"./Button-YcHEvqMa.js";import"./SkeletonBar-p0RmfKN_.js";import"./Tooltip-Bwai2e_Y.js";import"./info-sign-DJe6CK7s.js";import"./chevron-up-n42ngsWX.js";import"./chevron-down-BGwNr8cZ.js";import"./useEventCallback-C5vlArFZ.js";import"./iconLoader-B6UtGYG6.js";import"./Switch-Dj_ETrco.js";import"./CompositeRoot-BheFnEJQ.js";import"./TimePicker-DoIXtrNS.js";import"./CollapsiblePanel-C1Fn1_Kr.js";import"./error-nlz9dA9p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DLFNJZK7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
