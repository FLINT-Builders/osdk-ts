import{j as t,g as n}from"./iframe-OFDiPCrG.js";import{A as r}from"./action-form-DhU5_yUf.js";import"./preload-helper-DUjfNDkl.js";import"./DropdownField-BnKkKUrN.js";import"./debounce-ComwDjtY.js";import"./useOsdkClient-DCpLRsuK.js";import"./index-BeuOzgqu.js";import"./Input-DDs2WsUf.js";import"./useBaseUiId-BFA8n74e.js";import"./useControlled-DB7vMkHQ.js";import"./index-ChxXQ8Qm.js";import"./index-CTGDkzFH.js";import"./PopoverPopup-DBszHbY8.js";import"./InternalBackdrop-DbDjPHet.js";import"./composite-PM-R8SRV.js";import"./index-DkR0Sm-A.js";import"./getDisabledMountTransitionStyles-C6EZ30T_.js";import"./ToolbarRootContext-D75ZpSWh.js";import"./tick-DpIF400T.js";import"./svgIconContainer-DhDKsT9z.js";import"./small-cross-CzS85_Ss.js";import"./search-rykp5p6r.js";import"./cross-jB5PN8IY.js";import"./useValueChanged-O-f8K84Z.js";import"./getPseudoElementBounds-Bv073C_P.js";import"./CompositeItem-BEOwPENe.js";import"./makeExternalStore-CFPNQ_aD.js";import"./BaseForm-BN85r1M7.js";import"./ActionButton-Dafw0kRv.js";import"./Button-C0oJYbtE.js";import"./SkeletonBar-YHngoHZJ.js";import"./Tooltip-Dy2MALoM.js";import"./info-sign-B34hi90y.js";import"./chevron-up-Cs6JllkH.js";import"./chevron-down-BlpQBexS.js";import"./useEventCallback-u5zfbyPP.js";import"./iconLoader-C-6xMF-i.js";import"./Switch-CxwOEk_f.js";import"./CompositeRoot-BTGQ1jw9.js";import"./TimePicker-DujqXTYw.js";import"./CollapsiblePanel-iJsKp1Sk.js";import"./error-BuvCTlk4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BSB8rkK5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
