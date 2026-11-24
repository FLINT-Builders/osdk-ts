import{j as t,g as n}from"./iframe-DGWnG-cP.js";import{A as r}from"./action-form-DISbDq55.js";import"./preload-helper-3cdipQWl.js";import"./DropdownField-nTKXuw1F.js";import"./debounce-BI_4kNch.js";import"./useOsdkClient-D8G8-hzC.js";import"./index-C0zbU9rL.js";import"./Input-DwaikOPa.js";import"./useBaseUiId-DVxcG4_I.js";import"./useControlled-BBmR2WL-.js";import"./index-C1aUcBCp.js";import"./index-DdIe7yLC.js";import"./PopoverPopup-B75UTycU.js";import"./InternalBackdrop-BJR0xs8j.js";import"./composite-B33N3UBB.js";import"./index-D_bbN_cd.js";import"./getDisabledMountTransitionStyles-CyXwlfcm.js";import"./ToolbarRootContext-CTwhmmzS.js";import"./tick-DVANyX1P.js";import"./svgIconContainer-B16Mzywl.js";import"./small-cross-DmdM27Kn.js";import"./search-UMxzoTWH.js";import"./cross-DlI64HlO.js";import"./useValueChanged-ChEZciPX.js";import"./getPseudoElementBounds-B9TtSSG4.js";import"./CompositeItem-dqVIeoy3.js";import"./makeExternalStore-WGQ2sL4W.js";import"./BaseForm-UJlTplz-.js";import"./ActionButton-WSvr-wI_.js";import"./Button-BcmhO12Y.js";import"./SkeletonBar-DvB39Rdm.js";import"./Tooltip-WUVYr8N6.js";import"./info-sign-mMOeEu9o.js";import"./chevron-up-CeZ3fwKx.js";import"./chevron-down-BFuZIkTt.js";import"./useEventCallback-CxJpG0mK.js";import"./iconLoader-CZqHBGVX.js";import"./Switch-BRQoOwRx.js";import"./CompositeRoot-CbdQ8BoQ.js";import"./TimePicker-Ba0GHagn.js";import"./CollapsiblePanel-CVt-m52O.js";import"./error-qdaiM9ZH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-UcMYR7XC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
