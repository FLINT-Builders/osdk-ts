import{j as t,g as n}from"./iframe-AucoVF3S.js";import{A as r}from"./action-form-B_uKNHN8.js";import"./preload-helper-C9ibelWf.js";import"./DropdownField-Bbed1NBQ.js";import"./debounce-CFR0ltnl.js";import"./useOsdkClient-D4rgIYhL.js";import"./index-BCzMg9g9.js";import"./Input-BiAZvzzV.js";import"./useBaseUiId-8trwhzTr.js";import"./useControlled-CzfSKEfy.js";import"./index-Dc3VuUCH.js";import"./index-B0_Fhi9g.js";import"./PopoverPopup-BX3JA3C9.js";import"./InternalBackdrop-H6g9AIjw.js";import"./composite-DSdmvgK1.js";import"./index-1RXFbTsx.js";import"./getDisabledMountTransitionStyles-higzgc3K.js";import"./ToolbarRootContext-NfnHQdWi.js";import"./tick-BVqGDNac.js";import"./svgIconContainer-61R_Lu5T.js";import"./small-cross-BfH9_XDO.js";import"./search-DPzEqCxj.js";import"./cross-CXJnoTqk.js";import"./useValueChanged-Cp3v6jl-.js";import"./getPseudoElementBounds-DA-UNPJk.js";import"./CompositeItem-DOrX4W-o.js";import"./makeExternalStore-DKsNeQJB.js";import"./BaseForm-BvrOfKVy.js";import"./ActionButton-COPO59vI.js";import"./Button-Dz4p_z9s.js";import"./SkeletonBar-BZh-fM1u.js";import"./Tooltip-BZUDpMvt.js";import"./info-sign-CnuFoimb.js";import"./chevron-up-D6K4qSXx.js";import"./chevron-down-gqlYPD2T.js";import"./useEventCallback-BIW5Bdvm.js";import"./iconLoader-lB2kQMEq.js";import"./Switch-DVAu2oX9.js";import"./CompositeRoot-Do99u0Jf.js";import"./TimePicker-D111OMyS.js";import"./CollapsiblePanel-dZxZKyMJ.js";import"./error-SdAehXSj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-g1UKMxg9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
