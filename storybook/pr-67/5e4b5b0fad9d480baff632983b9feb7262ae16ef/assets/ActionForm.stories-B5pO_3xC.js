import{j as t,g as n}from"./iframe-BzttuLup.js";import{A as r}from"./action-form-CsLTYSWF.js";import"./preload-helper-DEinGEya.js";import"./DropdownField--AwpHRkt.js";import"./debounce-DlVBfSqq.js";import"./useOsdkClient-BgCetPCz.js";import"./index-7CJFn-ex.js";import"./Input-BumRROcl.js";import"./useBaseUiId-C_qs9mR7.js";import"./useControlled-DvTO4Lqf.js";import"./index-Bl0gC1qS.js";import"./index-BaPMBM1N.js";import"./PopoverPopup-Dx6YNas4.js";import"./InternalBackdrop-PyFDeOLi.js";import"./composite-CYx1_fMl.js";import"./index-DTD6QywL.js";import"./getDisabledMountTransitionStyles-BMOazWhO.js";import"./ToolbarRootContext-BqSKtOXH.js";import"./tick-DOtLTALy.js";import"./svgIconContainer-BicyMjFC.js";import"./small-cross-CXStxdm6.js";import"./search-Dt2zfbsw.js";import"./cross-4RHnOViN.js";import"./useValueChanged-BFZjFvxq.js";import"./getPseudoElementBounds-Cn4AgsTS.js";import"./CompositeItem-E8-A5SU4.js";import"./makeExternalStore-DAGqxfwp.js";import"./BaseForm-DqVAHXes.js";import"./ActionButton-DXY5W19F.js";import"./Button-B0wCjsGN.js";import"./SkeletonBar-B9sLOoZd.js";import"./Tooltip-BTYfzcBb.js";import"./info-sign-CkvYNJrW.js";import"./chevron-up-hQRFXICB.js";import"./chevron-down-_FTLKkTP.js";import"./useEventCallback-B08CG3mJ.js";import"./iconLoader-DA8GtxD_.js";import"./Switch-BWyjJ8vo.js";import"./CompositeRoot-DTByr4D7.js";import"./TimePicker-C8nWC-Uc.js";import"./CollapsiblePanel-B08RbuOL.js";import"./error-CLZJuCl2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dfc2rN4I.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
