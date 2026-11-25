import{j as t,g as n}from"./iframe-BuSw4B6O.js";import{A as r}from"./action-form-Ds8CPAuV.js";import"./preload-helper-lqh4ZshJ.js";import"./DropdownField-7MeYkNlB.js";import"./debounce-Bjcpa4D8.js";import"./useOsdkClient-CC-HmWmp.js";import"./index-D9SEgQNF.js";import"./Input-Ct08sj7B.js";import"./useBaseUiId-DViO3tgt.js";import"./useControlled-8U03TFMg.js";import"./index-BrhB6RIT.js";import"./index-DCww1LrD.js";import"./PopoverPopup-BlwV2f1d.js";import"./InternalBackdrop-CA7307o1.js";import"./composite-DAXoYC61.js";import"./index-7KpkRFDe.js";import"./getDisabledMountTransitionStyles-4Lq6Qrl-.js";import"./ToolbarRootContext-CjHMpr1j.js";import"./tick-DStEO9pf.js";import"./svgIconContainer-BZgPnQyZ.js";import"./small-cross-D6It-7yt.js";import"./search-DRWDcQXz.js";import"./cross-7xpX4Ge0.js";import"./useValueChanged-CObbYU8S.js";import"./getPseudoElementBounds-B5CjaZhn.js";import"./CompositeItem-0tc6F5lP.js";import"./makeExternalStore-2iAw82Qk.js";import"./BaseForm-Cpw4ghe-.js";import"./ActionButton-CbDgFm0H.js";import"./Button-DZw1-eKI.js";import"./SkeletonBar-Bjsc0Vlg.js";import"./Tooltip-D3zKUMKo.js";import"./info-sign-Dj7vXTOP.js";import"./chevron-up-Dz5DjGZ1.js";import"./chevron-down-Cbm7pBxW.js";import"./useEventCallback-BVVXZcvZ.js";import"./iconLoader-CDzY95bu.js";import"./Switch-CuTntzq7.js";import"./CompositeRoot-3LPr0OyZ.js";import"./TimePicker-B1_AzoW9.js";import"./CollapsiblePanel-OoIliCXc.js";import"./error-mcJBKPob.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DUOa1-5i.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
