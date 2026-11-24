import{j as t,g as n}from"./iframe-Bf8iAqL7.js";import{A as r}from"./action-form-BHCFMuE0.js";import"./preload-helper-A1AS_NiL.js";import"./DropdownField-RxrVsgU9.js";import"./debounce-cgA55fD7.js";import"./useOsdkClient-Cvr99OkN.js";import"./index-Db0mdORg.js";import"./Input-3S863M3T.js";import"./useBaseUiId-C3S3f6WK.js";import"./useControlled-BxkhcEK2.js";import"./index-D8bWGRRC.js";import"./index-D7R_pUg0.js";import"./PopoverPopup-JpuFEWOE.js";import"./InternalBackdrop-BlMO4Ova.js";import"./composite-DIFH8mgU.js";import"./index-C0BMu-E0.js";import"./getDisabledMountTransitionStyles-BkOgHLaz.js";import"./ToolbarRootContext-B0mhzBfu.js";import"./tick-BLri3Pi1.js";import"./svgIconContainer-D52qXfX5.js";import"./small-cross-BmVVnuZH.js";import"./search-k-BDZpAM.js";import"./cross-DO1QLnzH.js";import"./useValueChanged-B4RhT_mT.js";import"./getPseudoElementBounds-BjiN3SJE.js";import"./CompositeItem-C29Fnmef.js";import"./makeExternalStore-BeW1g1b1.js";import"./BaseForm-BRBBXWxR.js";import"./ActionButton-CI5S3k3v.js";import"./Button-H641EagL.js";import"./SkeletonBar-C8ox7Pyn.js";import"./Tooltip-D1ph3_EU.js";import"./info-sign-BpfI2zrb.js";import"./chevron-up-BNce4YsG.js";import"./chevron-down-BF98-CIj.js";import"./useEventCallback-CVkQOs3D.js";import"./iconLoader-vkA2HKXO.js";import"./Switch-DaDgo0HG.js";import"./CompositeRoot-DaDVHwhw.js";import"./TimePicker-C13p5kx7.js";import"./CollapsiblePanel-BR9JLyXV.js";import"./error-DTUZUWgs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BNJYvdSI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
