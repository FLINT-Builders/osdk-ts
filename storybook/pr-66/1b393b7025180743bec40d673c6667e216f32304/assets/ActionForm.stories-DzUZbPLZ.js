import{j as t,g as n}from"./iframe-DVXjYepe.js";import{A as r}from"./action-form-DeXwWdGK.js";import"./preload-helper-DoQZ9wQO.js";import"./DropdownField-v3RWXYr3.js";import"./debounce-BIK5BkHx.js";import"./useOsdkClient-BXsdu0M4.js";import"./index-xEG3qOed.js";import"./Input-BN6UqcCj.js";import"./useBaseUiId--5oKpwvu.js";import"./useControlled-urWeze7M.js";import"./index-B-prHHF3.js";import"./index-PkRP8yx_.js";import"./PopoverPopup-um6wJ3Q9.js";import"./InternalBackdrop-inXTS0yx.js";import"./composite-D8RKaTKg.js";import"./index-CSeYDT8l.js";import"./getDisabledMountTransitionStyles-C9YsekIJ.js";import"./ToolbarRootContext-DnS8Sx7B.js";import"./tick-DfRCIBAT.js";import"./svgIconContainer-BJPtXOwn.js";import"./small-cross-CXxGQkOn.js";import"./search-B-9-6Ofx.js";import"./cross-B8UbpGAg.js";import"./useValueChanged-DQdsowWS.js";import"./getPseudoElementBounds-DaAwz07x.js";import"./CompositeItem-Bmf0StTl.js";import"./makeExternalStore-BgZoDepZ.js";import"./BaseForm-FSNj5dDD.js";import"./ActionButton-FeoD3QJR.js";import"./Button-CMf4Lntc.js";import"./SkeletonBar-SOwc_Qrs.js";import"./Tooltip-CJ_e6i_k.js";import"./info-sign-BPbU4RZt.js";import"./chevron-up-ChqE3_Am.js";import"./chevron-down-Bzvk1BIc.js";import"./useEventCallback-DkAeY7hG.js";import"./iconLoader-BdFQQEou.js";import"./Switch-qYaMg5-A.js";import"./CompositeRoot-2Gh4EtYu.js";import"./TimePicker-Cg_Ovsl7.js";import"./CollapsiblePanel-BtSjatWQ.js";import"./error-DfVU-Ijw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DmcVbwBr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
