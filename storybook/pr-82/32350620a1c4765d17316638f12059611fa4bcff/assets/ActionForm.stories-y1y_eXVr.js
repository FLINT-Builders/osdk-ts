import{j as t,g as n}from"./iframe-DDeGahZQ.js";import{A as r}from"./action-form-BLX35GJf.js";import"./preload-helper-DtgmNnbI.js";import"./DropdownField-CtMobLbF.js";import"./debounce-1Ye5cs9J.js";import"./useOsdkClient-Da_ZExXm.js";import"./index-DmzUE8wO.js";import"./Input-CvWBm2e5.js";import"./useBaseUiId-Uk2yI-zs.js";import"./useControlled-DDjbaAaA.js";import"./index-Qn8k8FvG.js";import"./index-CY6cJAVJ.js";import"./PopoverPopup-Ce6kI-Gj.js";import"./InternalBackdrop-Cm6MUtgn.js";import"./composite-DuB4E-UY.js";import"./index-CG45M_Q5.js";import"./getDisabledMountTransitionStyles-CmGIaxiE.js";import"./ToolbarRootContext-BskRjAbe.js";import"./tick-2i2QjURW.js";import"./svgIconContainer-B2HbnTiE.js";import"./small-cross-Dh8kd4Rj.js";import"./search-C8c8T19Z.js";import"./cross-CI1lfvZf.js";import"./useValueChanged-CpeiEUnJ.js";import"./getPseudoElementBounds-oOnpUTl1.js";import"./CompositeItem-CzJNtMzg.js";import"./makeExternalStore-BTS0MLYS.js";import"./BaseForm-Davs3IDb.js";import"./ActionButton-B6GTvDM6.js";import"./Button-UHTxjv3g.js";import"./SkeletonBar-DUki0Hfs.js";import"./Tooltip-DAVQzJGV.js";import"./info-sign-CQTCTVrk.js";import"./chevron-up-BGhtc_wn.js";import"./chevron-down-pfh009HU.js";import"./useEventCallback-CbwAvO5m.js";import"./iconLoader-CFywq30a.js";import"./Switch-BUl575Tr.js";import"./CompositeRoot-4sUeKOQB.js";import"./TimePicker-CXaIKSoF.js";import"./CollapsiblePanel-jNUt8N7a.js";import"./error-CAQ2487J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-WPbxRBR5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
