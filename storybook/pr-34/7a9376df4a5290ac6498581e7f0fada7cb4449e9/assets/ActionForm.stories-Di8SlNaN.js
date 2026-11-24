import{j as t,g as n}from"./iframe-CblSHN44.js";import{A as r}from"./action-form-BOrU8lbh.js";import"./preload-helper-NGhizEuB.js";import"./DropdownField-BX_lVSWT.js";import"./debounce-DScc-am-.js";import"./useOsdkClient-DvNhOVDU.js";import"./index-BQ7zJ7he.js";import"./Input-DBybejkY.js";import"./useBaseUiId-B2pTi154.js";import"./useControlled-Bg0Zzn-2.js";import"./index-nFyu5IEu.js";import"./index-DsYQidVS.js";import"./PopoverPopup-BOyF1dvC.js";import"./InternalBackdrop-CdBXMVDV.js";import"./composite-DJG-zPIc.js";import"./index-BTICbwFi.js";import"./getDisabledMountTransitionStyles-7TLN3kNJ.js";import"./ToolbarRootContext-BH_wnNfB.js";import"./tick-DWIXpsmv.js";import"./svgIconContainer-CF_MW71M.js";import"./small-cross-Bf8RpEZ1.js";import"./search-CXloA44P.js";import"./cross-BUglgpN5.js";import"./useValueChanged-qSo-FEmP.js";import"./getPseudoElementBounds-DjDH-yid.js";import"./CompositeItem-DuOAdpQK.js";import"./makeExternalStore-DbO86LPP.js";import"./BaseForm-BNe77_ep.js";import"./ActionButton-B_RqefyB.js";import"./Button-Wy_PutQU.js";import"./SkeletonBar-tik-rx_X.js";import"./Tooltip-Bd9UBwBY.js";import"./info-sign-CxB0QTrM.js";import"./chevron-up-BOusGa9A.js";import"./chevron-down-BysZ9GN-.js";import"./useEventCallback-Gp2djsqb.js";import"./iconLoader-Cen1_cUj.js";import"./Switch-BUoMvS-I.js";import"./CompositeRoot-CUhI4t_B.js";import"./TimePicker-BBTH2_j2.js";import"./CollapsiblePanel-V6VhVNxj.js";import"./error-DuPAr2Go.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRV0LY7d.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
