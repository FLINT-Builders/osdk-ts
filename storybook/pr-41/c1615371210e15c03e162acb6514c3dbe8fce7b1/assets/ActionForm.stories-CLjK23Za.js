import{j as t,g as n}from"./iframe-Bp1PfZ7l.js";import{A as r}from"./action-form-BLGF1TAZ.js";import"./preload-helper-BYGb1pKj.js";import"./DropdownField-DSF1PkvW.js";import"./debounce-D9UeryKI.js";import"./useOsdkClient-BzwwsB1i.js";import"./index-DadzeF-d.js";import"./Input-B12oUm4E.js";import"./useBaseUiId-XqSzBNHS.js";import"./useControlled-C8ihAa2k.js";import"./index-CfnQXIOW.js";import"./index-ClbYxjX9.js";import"./PopoverPopup-Cg3oU8gt.js";import"./InternalBackdrop-DFmByEwF.js";import"./composite-DLzwtS5G.js";import"./index-DLVfdXgo.js";import"./getDisabledMountTransitionStyles-CqLHy__b.js";import"./ToolbarRootContext-DqEF0Ae4.js";import"./tick-O_f_a0G5.js";import"./svgIconContainer-OMPXv01U.js";import"./small-cross-C8-5dUWe.js";import"./search-BsLkibR5.js";import"./cross-DFx0C0Nt.js";import"./useValueChanged-okYo1yvb.js";import"./getPseudoElementBounds-Mutkij03.js";import"./CompositeItem-CblUCnkP.js";import"./makeExternalStore-B5XHk3Oq.js";import"./BaseForm-D3UXdTC3.js";import"./ActionButton-qLC49eRN.js";import"./Button-Bt-2SXbx.js";import"./SkeletonBar-Cm22PUkZ.js";import"./Tooltip-CLl9UtD5.js";import"./info-sign-B0JoUBGB.js";import"./chevron-up-CxkBKpuj.js";import"./chevron-down-BV-xsSzp.js";import"./useEventCallback-BN9hpBvA.js";import"./iconLoader-BFjMFfjJ.js";import"./Switch-hKOZNdcs.js";import"./CompositeRoot-Dhhl8j5D.js";import"./TimePicker-BJcxx4hS.js";import"./CollapsiblePanel-B-j7ee1F.js";import"./error-CO92q5PK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXXjNZYb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
