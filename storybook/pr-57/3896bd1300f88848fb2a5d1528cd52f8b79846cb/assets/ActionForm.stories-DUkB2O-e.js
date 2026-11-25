import{j as t,g as n}from"./iframe-DowOz9LG.js";import{A as r}from"./action-form-ga2wCPCI.js";import"./preload-helper-DLch6InM.js";import"./DropdownField-P6sq-h2_.js";import"./debounce-8B2PZIEg.js";import"./useOsdkClient-D0xHO4NP.js";import"./index-D3uCKFRQ.js";import"./Input-EdSRgRoE.js";import"./useBaseUiId-DLP_J0js.js";import"./useControlled-LhJY_NAc.js";import"./index-DtOEkHOk.js";import"./index-CcmjFzlA.js";import"./PopoverPopup-Bh5tu-Zh.js";import"./InternalBackdrop-DWjSsQXw.js";import"./composite-BqSVn4pm.js";import"./index-C6QSp11H.js";import"./getDisabledMountTransitionStyles-QmcvFDJq.js";import"./ToolbarRootContext-tzl66m83.js";import"./tick-rTdqC_yK.js";import"./svgIconContainer-CjMFf37k.js";import"./small-cross-CBbvwGg2.js";import"./search-Dq7gXSV-.js";import"./cross-XY9bNztf.js";import"./useValueChanged-DmWHkYMC.js";import"./getPseudoElementBounds-D1yJG2tC.js";import"./CompositeItem-qaontuDZ.js";import"./makeExternalStore-whfuUtu3.js";import"./BaseForm-D20PKMMu.js";import"./ActionButton-BC7KqzhK.js";import"./Button-BsxP5OVh.js";import"./SkeletonBar-Lecq5ISR.js";import"./Tooltip-Bzrc7BTQ.js";import"./info-sign-Bhl5ClQE.js";import"./chevron-up-Rtqu8gIR.js";import"./chevron-down-p34WEL5t.js";import"./useEventCallback-DZWgYqJ2.js";import"./iconLoader-aDdtl5HC.js";import"./Switch-BlPWEXig.js";import"./CompositeRoot-DUYivhM4.js";import"./TimePicker-jNFQkuy3.js";import"./CollapsiblePanel-B3nL6cUm.js";import"./error-CvT_Kc0h.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CwlXQjw2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
