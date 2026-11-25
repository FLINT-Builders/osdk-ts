import{j as t,g as n}from"./iframe-C18Efs5F.js";import{A as r}from"./action-form-C4I8L26A.js";import"./preload-helper-syT6W8iC.js";import"./DropdownField-DwQ4_zC_.js";import"./debounce-BBaPqMcK.js";import"./useOsdkClient-CBIB33XW.js";import"./index-BiAToM_x.js";import"./Input-CU8PLyZJ.js";import"./useBaseUiId-CH-RqI0L.js";import"./useControlled-DX15Gk8S.js";import"./index-MJOAOM5u.js";import"./index-Bf7Y9tWm.js";import"./PopoverPopup-D-mHvT1H.js";import"./InternalBackdrop-DfISNAb-.js";import"./composite-DGxpdZBR.js";import"./index-BDD6V94w.js";import"./getDisabledMountTransitionStyles-CxLtBXi2.js";import"./ToolbarRootContext-BtDS6Lf9.js";import"./tick-rK0_sMUG.js";import"./svgIconContainer-aD2IgP3d.js";import"./small-cross-C0nyK2gy.js";import"./search-CkIpSze3.js";import"./cross-BKCn1P0Q.js";import"./useValueChanged-BxaoofY_.js";import"./getPseudoElementBounds-B5_wrGbO.js";import"./CompositeItem-BfnoZmPC.js";import"./makeExternalStore-6HXO66jA.js";import"./BaseForm-D7TPQjAW.js";import"./ActionButton-qW0Ez94V.js";import"./Button-C1f49fJS.js";import"./SkeletonBar-bmSFgVV9.js";import"./Tooltip-Bwivcl2f.js";import"./info-sign-Bfpv0ypW.js";import"./chevron-up-CB1d-oq9.js";import"./chevron-down-B5XN77pz.js";import"./useEventCallback-DIC_b8VN.js";import"./iconLoader-DqSXFMpw.js";import"./Switch-D8EYwBaV.js";import"./CompositeRoot-DPTpW5Jz.js";import"./TimePicker-CK3q35Aq.js";import"./CollapsiblePanel-DblJ8HD2.js";import"./error-BbYA8FVM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D2m3J2jO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
