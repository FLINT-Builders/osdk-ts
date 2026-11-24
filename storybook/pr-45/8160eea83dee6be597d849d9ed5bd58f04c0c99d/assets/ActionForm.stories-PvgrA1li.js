import{j as t,g as n}from"./iframe-xhm5OChx.js";import{A as r}from"./action-form-fHfDfWuI.js";import"./preload-helper-BZJxKfIr.js";import"./DropdownField-PqL2lLdH.js";import"./debounce-BL8n_G_Q.js";import"./useOsdkClient-DsZIT7A4.js";import"./index-Ctr0pjQq.js";import"./Input-wfXCkxXX.js";import"./useBaseUiId-q04gmumk.js";import"./useControlled-CXKnX_iS.js";import"./index-EiydH3co.js";import"./index-DyMzNBSm.js";import"./PopoverPopup-2glF1cOR.js";import"./InternalBackdrop-i2Jv6yd1.js";import"./composite-BhQucQ6w.js";import"./index-DWPvyRFK.js";import"./getDisabledMountTransitionStyles-B85vDvpF.js";import"./ToolbarRootContext-CvTY2pRP.js";import"./tick-Bt601WgM.js";import"./svgIconContainer-CdfxSdaj.js";import"./small-cross-C74z8jlp.js";import"./search-Cq1dDtD0.js";import"./cross-C-3m77s9.js";import"./useValueChanged-CW8UuRxF.js";import"./getPseudoElementBounds-DSDAFN2S.js";import"./CompositeItem-CtXkcFLl.js";import"./makeExternalStore-Yu1AfO63.js";import"./BaseForm-DeqGZltD.js";import"./ActionButton-0NMO3aYn.js";import"./Button-Cx_zDl37.js";import"./SkeletonBar-mT-JS0Ox.js";import"./Tooltip-DByTNzzG.js";import"./info-sign-BggMw2Rz.js";import"./chevron-up-dxjC7vAP.js";import"./chevron-down-BsRYwsxE.js";import"./useEventCallback-DOJI8S3u.js";import"./iconLoader-Bfp9o3BE.js";import"./Switch-D0wiF_Un.js";import"./CompositeRoot-CUokxOWA.js";import"./TimePicker-ggAtBiTN.js";import"./CollapsiblePanel-BUNoQZyA.js";import"./error-QOz5QiuQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-nVSio52c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
