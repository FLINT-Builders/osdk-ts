import{j as t,g as n}from"./iframe-DM4xkxPz.js";import{A as r}from"./action-form-DbQBDsky.js";import"./preload-helper-DjYsY0e4.js";import"./DropdownField-DO3iEBks.js";import"./debounce-BTJweAvj.js";import"./useOsdkClient-tJuqjJBg.js";import"./index-CA3PhY9C.js";import"./Input-BtFpG8L-.js";import"./useBaseUiId-06FsOnRS.js";import"./useControlled-DWhJIBEC.js";import"./index-BaPxcL-U.js";import"./index-CKWQIFc6.js";import"./PopoverPopup-C2RXGzDC.js";import"./InternalBackdrop-atnimPNE.js";import"./composite-DPjRORK_.js";import"./index-HBJubKVl.js";import"./getDisabledMountTransitionStyles-cqxjXfXt.js";import"./ToolbarRootContext-DaxififC.js";import"./tick-VaEeN5iX.js";import"./svgIconContainer-DRHE02a1.js";import"./small-cross-DlPYjgwz.js";import"./search-ChvjyncO.js";import"./cross-BIpUExIv.js";import"./useValueChanged-BvA5FaKj.js";import"./getPseudoElementBounds-BzpbsaWw.js";import"./CompositeItem-D5I-ZnjA.js";import"./makeExternalStore-oSWvZmSa.js";import"./BaseForm-Ba9kFSeb.js";import"./ActionButton-DiqtwetY.js";import"./Button-D6sOWWJg.js";import"./SkeletonBar-CAreatfx.js";import"./Tooltip-CyL_Vgso.js";import"./info-sign-Bu0eGpcc.js";import"./chevron-up-o5g88JJ5.js";import"./chevron-down-2d4v9sYb.js";import"./useEventCallback-xkxPv1XK.js";import"./iconLoader-CaWJUXTF.js";import"./Switch-CLI4sRa8.js";import"./CompositeRoot-DvKGMHmv.js";import"./TimePicker-WJd10dr2.js";import"./CollapsiblePanel-PDqHktLP.js";import"./error-C2OR8u8c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DK0sAIWr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
