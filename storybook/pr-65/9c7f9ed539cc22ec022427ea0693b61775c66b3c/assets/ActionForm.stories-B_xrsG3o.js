import{j as t,g as n}from"./iframe-DhvlIxBR.js";import{A as r}from"./action-form-07BVRHt4.js";import"./preload-helper-D751HZEW.js";import"./DropdownField-DGdaq3wW.js";import"./debounce-H8a6NtlN.js";import"./useOsdkClient-Dk6VWjvC.js";import"./index-BUWZX9Fc.js";import"./Input-BFA2W1TJ.js";import"./useBaseUiId-BHihEKOR.js";import"./useControlled-8xbCIwQq.js";import"./index-BnlSGZlJ.js";import"./index-COR-zPbg.js";import"./PopoverPopup-BwA2nu12.js";import"./InternalBackdrop-dLkigMoq.js";import"./composite-ChzFIgZg.js";import"./index-BCPA7iDP.js";import"./getDisabledMountTransitionStyles-BdnwsIyN.js";import"./ToolbarRootContext-DXmLeJwT.js";import"./tick-peuNDpsM.js";import"./svgIconContainer-D7zjQbdd.js";import"./small-cross-Cee8oMTc.js";import"./search-CvBEwoSG.js";import"./cross-DZn8lU4z.js";import"./useValueChanged-BTfADdZZ.js";import"./getPseudoElementBounds-uPAwbLXV.js";import"./CompositeItem-feBepckq.js";import"./makeExternalStore-s_GWGbTj.js";import"./BaseForm-llBTA2fs.js";import"./ActionButton-NnowqCGc.js";import"./Button-CIdQiPdq.js";import"./SkeletonBar-DzkLjRbm.js";import"./Tooltip-BcLf233N.js";import"./info-sign-BVKz-yBT.js";import"./chevron-up-BssmTsyd.js";import"./chevron-down-Cl04GCmI.js";import"./useEventCallback-1TV48a-R.js";import"./iconLoader-DCoeZXXX.js";import"./Switch-BKqbLpex.js";import"./CompositeRoot-CuH4EY6f.js";import"./TimePicker-DPqfOWeJ.js";import"./CollapsiblePanel-CHRzUX6p.js";import"./error-CuUFOnij.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNcx6if6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
