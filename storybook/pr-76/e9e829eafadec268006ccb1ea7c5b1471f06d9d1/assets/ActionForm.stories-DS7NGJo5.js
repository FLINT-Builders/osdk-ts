import{j as t,g as n}from"./iframe-rKl8dl72.js";import{A as r}from"./action-form-D3W766zo.js";import"./preload-helper--BImneDc.js";import"./DropdownField-i4PyW7Yk.js";import"./debounce-hqGPRRGb.js";import"./useOsdkClient-1eh8dYaj.js";import"./index-DPEXUCgg.js";import"./Input-CJ84JYl8.js";import"./useBaseUiId-BMGLO8NS.js";import"./useControlled-CmATnzdQ.js";import"./index-DpFuo4DP.js";import"./index-BBcQQgxN.js";import"./PopoverPopup-BF7KHn70.js";import"./InternalBackdrop-BLFJ3wvQ.js";import"./composite-DHl1pO1N.js";import"./index-DF5p8sUY.js";import"./getDisabledMountTransitionStyles-DpfNJcDT.js";import"./ToolbarRootContext-BnYd3iMy.js";import"./tick-RGW3NTLE.js";import"./svgIconContainer-_-NrNaam.js";import"./small-cross-BoqwdjyD.js";import"./search-jvK2oU2l.js";import"./cross-a0o186aD.js";import"./useValueChanged-CEfl-o9u.js";import"./getPseudoElementBounds-zc0WMmOl.js";import"./CompositeItem-CkfIEwxY.js";import"./makeExternalStore-DsJbcG05.js";import"./BaseForm-BOE12mcf.js";import"./ActionButton-DoscJM3L.js";import"./Button-CxkErfOv.js";import"./SkeletonBar-DPocxRng.js";import"./Tooltip-lR7hYztD.js";import"./info-sign-CZMy-rjt.js";import"./chevron-up-ChcYb3av.js";import"./chevron-down-BNJHEUQl.js";import"./useEventCallback-CFBK0YJz.js";import"./iconLoader-fi5sYJkz.js";import"./Switch-DOxoJqjV.js";import"./CompositeRoot-Cn5EYLtt.js";import"./TimePicker-BDuhb3dM.js";import"./CollapsiblePanel-DlSFFH-3.js";import"./error-Cgom9DOc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CO0kjJn7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
