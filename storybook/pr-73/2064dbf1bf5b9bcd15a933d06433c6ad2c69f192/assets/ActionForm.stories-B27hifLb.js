import{j as t,g as n}from"./iframe-B8aqmfIp.js";import{A as r}from"./action-form-DYM22pu8.js";import"./preload-helper-BobhKb97.js";import"./DropdownField-BW4-2DGd.js";import"./debounce-CV6t4kI7.js";import"./useOsdkClient-W6a7pgjt.js";import"./index-CCmxkdzs.js";import"./Input-CgHBa2SL.js";import"./useBaseUiId-CHkfiAje.js";import"./useControlled-l0oFblvc.js";import"./index-DKejFzow.js";import"./index-BSGZXMXF.js";import"./PopoverPopup-DU-xFQkp.js";import"./InternalBackdrop-BaQEyxva.js";import"./composite-1RtIqJwV.js";import"./index-BdH5xGxi.js";import"./getDisabledMountTransitionStyles-VoFjrkuY.js";import"./ToolbarRootContext-DSbkosxV.js";import"./tick-C64PnUJ8.js";import"./svgIconContainer-FLeE6-vR.js";import"./small-cross-DfPj-GvA.js";import"./search-Bqpxl0Af.js";import"./cross-DRKTQkbP.js";import"./useValueChanged-CbLTECGR.js";import"./getPseudoElementBounds-FKAYaJ1n.js";import"./CompositeItem-n7lnxb-_.js";import"./makeExternalStore-DGiu_EM6.js";import"./BaseForm-Db1cN2wc.js";import"./ActionButton-DCobCyrf.js";import"./Button-DdUUuDX9.js";import"./SkeletonBar-7eOqRXW8.js";import"./Tooltip-DXOq14Zl.js";import"./info-sign-DCYpJlsm.js";import"./chevron-up-Bij9WhX-.js";import"./chevron-down-BVT6rcNJ.js";import"./useEventCallback-CZb3TsYF.js";import"./iconLoader-CH_TxFIv.js";import"./Switch-BrbEKg4L.js";import"./CompositeRoot-CaPCD8lM.js";import"./TimePicker-B-h4dpa_.js";import"./CollapsiblePanel-DTTY03tg.js";import"./error-DApsL9NG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C411Tmmb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
