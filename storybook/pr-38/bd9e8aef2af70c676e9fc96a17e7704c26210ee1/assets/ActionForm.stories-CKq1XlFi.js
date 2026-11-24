import{j as t,g as n}from"./iframe-Ci4kbbjH.js";import{A as r}from"./action-form-D3ra_GvM.js";import"./preload-helper-DNzzp09Q.js";import"./DropdownField-DDcc5zir.js";import"./debounce-BxJnFfrY.js";import"./useOsdkClient-BuBxCDzw.js";import"./index-BzmIzG5f.js";import"./Input-DEpJNDRU.js";import"./useBaseUiId-yqmrIV5M.js";import"./useControlled-CyWOUz9h.js";import"./index-i7FuCejQ.js";import"./index-CvOJ90IA.js";import"./PopoverPopup-DkzyhZf2.js";import"./InternalBackdrop-BOeYS53O.js";import"./composite-CkTQf-5C.js";import"./index-D8Mu-PFN.js";import"./getDisabledMountTransitionStyles-DhKtaVzl.js";import"./ToolbarRootContext-rMCKHck4.js";import"./tick-Boowirwm.js";import"./svgIconContainer-DoVy9nda.js";import"./small-cross-CQm56ECa.js";import"./search-kOpaiDxH.js";import"./cross-Baj2Wcx8.js";import"./useValueChanged-DxNmdQBj.js";import"./getPseudoElementBounds-m0MFy2PT.js";import"./CompositeItem-Cku2i2Hz.js";import"./makeExternalStore-DM45UVPU.js";import"./BaseForm-TD5uK4TL.js";import"./ActionButton-Cw_Fc-zI.js";import"./Button-DGtRliq1.js";import"./SkeletonBar-B-AUQL2s.js";import"./Tooltip-RdLhjfP3.js";import"./info-sign-CxpyRQ2l.js";import"./chevron-up-C4WVLM1G.js";import"./chevron-down-HIxicj7V.js";import"./useEventCallback-BVSpbYHx.js";import"./iconLoader-f4N22qKb.js";import"./Switch-H4Sj8bBl.js";import"./CompositeRoot-BJiIjT8A.js";import"./TimePicker-BDMvtirs.js";import"./CollapsiblePanel-6Zz-7gJ1.js";import"./error-BDWAkWkg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5lZ7fCNU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
