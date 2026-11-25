import{j as t,g as n}from"./iframe-D2N6QAO4.js";import{A as r}from"./action-form-MtWlPO2j.js";import"./preload-helper-C0G0Ely3.js";import"./DropdownField-dwtwvXXB.js";import"./debounce-BkOPavrs.js";import"./useOsdkClient-BdxxenZf.js";import"./index-C6mUO3LG.js";import"./Input-DOJuMFjU.js";import"./useBaseUiId-Q0-zn9Sg.js";import"./useControlled-BXWTj0go.js";import"./index-t9rKP-QV.js";import"./index-C_NyXatN.js";import"./PopoverPopup-BhVSGBKw.js";import"./InternalBackdrop-BC53QrF9.js";import"./composite-Csdn23VF.js";import"./index-BuEE91VM.js";import"./getDisabledMountTransitionStyles-BB_Hcyjk.js";import"./ToolbarRootContext-Bq_hDyDO.js";import"./tick-BYuKeJ0M.js";import"./svgIconContainer-CNArd5Vw.js";import"./small-cross-D3BxVY3q.js";import"./search-C7B0jIv9.js";import"./cross-33P9gQ16.js";import"./useValueChanged-D2aWPQQV.js";import"./getPseudoElementBounds-Dunwefln.js";import"./CompositeItem-DgrMig66.js";import"./makeExternalStore-B1G3DsJO.js";import"./BaseForm-F8x6flD0.js";import"./ActionButton-DdZRctiY.js";import"./Button-g15W-Nz5.js";import"./SkeletonBar-DfIaa6sS.js";import"./Tooltip-XE7UgRlK.js";import"./info-sign-4xt-Ps2n.js";import"./chevron-up-BrEHWZ8y.js";import"./chevron-down-BAjPYhxH.js";import"./useEventCallback-SR7xrDYW.js";import"./iconLoader-B9rWPdVv.js";import"./Switch-DdQox5R3.js";import"./CompositeRoot-BtQckVxC.js";import"./TimePicker-DscqAbJN.js";import"./CollapsiblePanel-BVQv8eQV.js";import"./error-DOYfumOT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-gaJzJVhq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
