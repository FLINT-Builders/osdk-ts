import{j as t,g as n}from"./iframe-DTT6nz7o.js";import{A as r}from"./action-form-C-nDmVy4.js";import"./preload-helper-B1xGfzPI.js";import"./DropdownField-BhgIN6ih.js";import"./debounce-DxKPhidQ.js";import"./useOsdkClient-DvmPcDA4.js";import"./index-CTxHEiTU.js";import"./Input-DUSBBA6M.js";import"./useBaseUiId-eE74TdDR.js";import"./useControlled-nQOh3ft9.js";import"./index-BODeJg8i.js";import"./index-3PUqt7I7.js";import"./PopoverPopup-B7rrkVjJ.js";import"./InternalBackdrop-CzODpXWQ.js";import"./composite-Cb2l-Kwg.js";import"./index-C79qnBzb.js";import"./getDisabledMountTransitionStyles-Bvaoj8VB.js";import"./ToolbarRootContext-R9wWdNWr.js";import"./tick-CPW7UZx4.js";import"./svgIconContainer-CgqmpPt6.js";import"./small-cross-GWNLyjvR.js";import"./search-pmwVSsC3.js";import"./cross-BgvHTgXn.js";import"./useValueChanged-Cmi0P8zg.js";import"./getPseudoElementBounds-DSrPRsVI.js";import"./CompositeItem-Wk4nNvBM.js";import"./makeExternalStore-S1Q9iP-N.js";import"./BaseForm-BoboktqS.js";import"./ActionButton-DCl1Vnp4.js";import"./Button-CQ5X8faA.js";import"./SkeletonBar-BqNZZo2k.js";import"./Tooltip-BcSgBIwr.js";import"./info-sign-Dt9g6Yry.js";import"./chevron-up-JjuR9-oT.js";import"./chevron-down-C4sokJMh.js";import"./useEventCallback-D3wxufVs.js";import"./iconLoader-CE-IxgHn.js";import"./Switch-D0dBD3FI.js";import"./CompositeRoot-B4HFpd9W.js";import"./TimePicker-B6jTFlpM.js";import"./CollapsiblePanel-DaCbRpGf.js";import"./error-DTxCn2-C.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pvC18r39.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
