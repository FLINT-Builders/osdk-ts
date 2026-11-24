import{j as t,g as n}from"./iframe-Cfy1VfwI.js";import{A as r}from"./action-form-DVjOWIXt.js";import"./preload-helper-D7hEGIHW.js";import"./DropdownField-BycB_EL4.js";import"./debounce-FHf42ThN.js";import"./useOsdkClient-BcTcp2zs.js";import"./index-D9qChlkT.js";import"./Input-DeAzpHTT.js";import"./useBaseUiId-Bl3BCz40.js";import"./useControlled-Bb34JJQm.js";import"./index-DZ378v9M.js";import"./index-BbYdLvn0.js";import"./PopoverPopup-Zy0TwZWf.js";import"./InternalBackdrop-DJybReYS.js";import"./composite-DcidvM5B.js";import"./index-CK2Vk24k.js";import"./getDisabledMountTransitionStyles-BcyKzADO.js";import"./ToolbarRootContext-BGtapBDY.js";import"./tick-Dk0AG9pV.js";import"./svgIconContainer-DIZS-ng4.js";import"./small-cross-CbTS0UJl.js";import"./search-m5EKgstc.js";import"./cross-DCuCUk-Y.js";import"./useValueChanged-D8jzwMFp.js";import"./getPseudoElementBounds-CR_thFgC.js";import"./CompositeItem-BJZgOdXE.js";import"./makeExternalStore-DUu0ElVX.js";import"./BaseForm-fYCEkEqL.js";import"./ActionButton-BE3V6UYF.js";import"./Button-NH8o7MdQ.js";import"./SkeletonBar-BuAHtDLm.js";import"./Tooltip-Ny6lMCIs.js";import"./info-sign-YHNoyLZS.js";import"./chevron-up-7_M09YGF.js";import"./chevron-down-LTPIgxFV.js";import"./useEventCallback-dqu5-SHz.js";import"./iconLoader-CayJ1HVq.js";import"./Switch-D82KiuZQ.js";import"./CompositeRoot-kxqMthyS.js";import"./TimePicker-FoCgPAyh.js";import"./CollapsiblePanel-D9bDfrrQ.js";import"./error-CmqKN1z-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-COKuhu-t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
