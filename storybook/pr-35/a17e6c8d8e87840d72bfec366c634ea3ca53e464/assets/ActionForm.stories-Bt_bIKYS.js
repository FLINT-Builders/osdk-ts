import{j as t,g as n}from"./iframe-BD75_EF7.js";import{A as r}from"./action-form-Cb8cslhr.js";import"./preload-helper-C5GixA8k.js";import"./DropdownField-Bk2ZJyrJ.js";import"./debounce-pSE0AIDq.js";import"./useOsdkClient-c_BjiQFC.js";import"./index-Cls2haw5.js";import"./Input-Dmpn7F0W.js";import"./useBaseUiId-Se7wVqTf.js";import"./useControlled-Bb3Vr0M6.js";import"./index-ByZD_nBd.js";import"./index-CBX0wUiO.js";import"./PopoverPopup-C3w3Aozm.js";import"./InternalBackdrop-OFlNwMz7.js";import"./composite-yd7firDo.js";import"./index-5f1XfQ5f.js";import"./getDisabledMountTransitionStyles-DJ3nnjim.js";import"./ToolbarRootContext-Cdf6IKU0.js";import"./tick-G5s6pEHr.js";import"./svgIconContainer-Bxdyh2CW.js";import"./small-cross-D4uWwtpx.js";import"./search-Fzzl4G8z.js";import"./cross-sDHwt2tZ.js";import"./useValueChanged-BDuexEHu.js";import"./getPseudoElementBounds-BMxp26EN.js";import"./CompositeItem-DCmL7KX6.js";import"./makeExternalStore-C1ym4VUW.js";import"./BaseForm-MPo6h6BX.js";import"./ActionButton-CEyHVhsP.js";import"./Button-DDPidDHF.js";import"./SkeletonBar-DUDeQRgC.js";import"./Tooltip-DhVNQ1yF.js";import"./info-sign-C0_d4h-f.js";import"./chevron-up-C_K7Qq1o.js";import"./chevron-down-34AB4AXv.js";import"./useEventCallback-Vm032kvl.js";import"./iconLoader-C4jPZqYV.js";import"./Switch-C_ZdQnR6.js";import"./CompositeRoot-4TSizE1k.js";import"./TimePicker-Dgx1Lvu_.js";import"./CollapsiblePanel-BQzsjVFn.js";import"./error-BHpOgTkX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DR6keFLB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
