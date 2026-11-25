import{j as t,g as n}from"./iframe-DSQ_OwRS.js";import{A as r}from"./action-form-CQ3CqToT.js";import"./preload-helper-CLqqVN7k.js";import"./DropdownField-B3YeiUlT.js";import"./debounce-BhztiTp3.js";import"./useOsdkClient-C-vOeiVW.js";import"./index-B0q23UFt.js";import"./Input-BzO2QOS7.js";import"./useBaseUiId-C6Wr8zKH.js";import"./useControlled-C2eTizRr.js";import"./index-B43ytWfc.js";import"./index-DhBLi3JI.js";import"./PopoverPopup-2vcuvUQ8.js";import"./InternalBackdrop-DRNACM8M.js";import"./composite-Dp3eVNnJ.js";import"./index-7A6i3Ro6.js";import"./getDisabledMountTransitionStyles-DEdqAy31.js";import"./ToolbarRootContext-DUfuKa3p.js";import"./tick-B_ML4ack.js";import"./svgIconContainer-BcPAhmn-.js";import"./small-cross-DxTQPK98.js";import"./search-DlOSHXy8.js";import"./cross-BpS57vew.js";import"./useValueChanged-BbBFOoz_.js";import"./getPseudoElementBounds-1CB_OMbt.js";import"./CompositeItem-GcMwnNE0.js";import"./makeExternalStore-CjWUDfwP.js";import"./BaseForm-Dak2Fw4k.js";import"./ActionButton-CL0gqC-W.js";import"./Button-ChRZXQ3B.js";import"./SkeletonBar-5O6gfTS2.js";import"./Tooltip-80MHgkyW.js";import"./info-sign-DrHXgTyU.js";import"./chevron-up-B_f1sOSM.js";import"./chevron-down-Cro00f4s.js";import"./useEventCallback-BBYu6w4b.js";import"./iconLoader-BhNxQjHX.js";import"./Switch-DZiwfC8T.js";import"./CompositeRoot-MA4Aekb5.js";import"./TimePicker-S8eiWTk3.js";import"./CollapsiblePanel-C00H4WLv.js";import"./error-BA2QLyzo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCENCPrl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
