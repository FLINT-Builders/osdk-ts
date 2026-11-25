import{j as t,g as n}from"./iframe-noPC7Lrb.js";import{A as r}from"./action-form-DqnxeIkZ.js";import"./preload-helper-Cv3u2ZXJ.js";import"./DropdownField-DE00aYFp.js";import"./debounce-Dox6g36G.js";import"./useOsdkClient-CwTcc72O.js";import"./index-CRR0rEAm.js";import"./Input-BP2SPX2T.js";import"./useBaseUiId-CoV6fGPK.js";import"./useControlled-C-YKkMIr.js";import"./index-DsgPUYZ8.js";import"./index-CmlqLPJk.js";import"./PopoverPopup-ZtlUJYph.js";import"./InternalBackdrop-BtdcLV1x.js";import"./composite-DfMavTxP.js";import"./index-b3Gbynch.js";import"./getDisabledMountTransitionStyles-NQwUYsn_.js";import"./ToolbarRootContext-Bdg1UlUu.js";import"./tick-BNpJfYgA.js";import"./svgIconContainer-BC4HVzzK.js";import"./small-cross-uW76wDhg.js";import"./search-DEVlZZxm.js";import"./cross-B9cEQ0YT.js";import"./useValueChanged-BXxDSm6S.js";import"./getPseudoElementBounds-CA_wbbMb.js";import"./CompositeItem-D_EklmEL.js";import"./makeExternalStore-BIBA_2Dm.js";import"./BaseForm-B9OcAuVU.js";import"./ActionButton-CFNFQXUC.js";import"./Button-s6ph9E-u.js";import"./SkeletonBar-XdXpCukV.js";import"./Tooltip-Cq2b8j00.js";import"./info-sign-Bpl3OOdU.js";import"./chevron-up-AOdU2TP1.js";import"./chevron-down-HJE4Bk-A.js";import"./useEventCallback-jasGEfud.js";import"./iconLoader-C5LTNAK3.js";import"./Switch-Dr8oL3jf.js";import"./CompositeRoot-Lsq7g8jM.js";import"./TimePicker-D7kbjauJ.js";import"./CollapsiblePanel-BO1AEOsB.js";import"./error-P0w1sFZO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-8bSzfY7q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
