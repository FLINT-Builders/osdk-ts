import{j as t,g as n}from"./iframe-DbWO1H6Q.js";import{A as r}from"./action-form-Cyhe6U7X.js";import"./preload-helper-BJFhMS3h.js";import"./DropdownField-Beb9lqY7.js";import"./debounce-BwGdN9pQ.js";import"./useOsdkClient-eSWHemU6.js";import"./index-8DlTsQ0i.js";import"./Input-DsJzclhr.js";import"./useBaseUiId-D72Xv_RL.js";import"./useControlled-Dvfgqsbh.js";import"./index-BF_XeX3N.js";import"./index-D_t6_h7n.js";import"./PopoverPopup-n8CSHUcF.js";import"./InternalBackdrop-Dvh_wZ0g.js";import"./composite-EggcNtT2.js";import"./index-Dh9Wtqsz.js";import"./getDisabledMountTransitionStyles-BZMRoe-H.js";import"./ToolbarRootContext-BAe250S1.js";import"./tick-B765rRXZ.js";import"./svgIconContainer-jTmyv8Oj.js";import"./small-cross-di1YPofV.js";import"./search-zgN6AfWU.js";import"./cross-BDoBIXl6.js";import"./useValueChanged-BV-Eaapg.js";import"./getPseudoElementBounds-CjiqI0zD.js";import"./CompositeItem-DXkoNi3p.js";import"./makeExternalStore-Ce1bwc1S.js";import"./BaseForm-CesDkXKY.js";import"./ActionButton-CF_WcN8f.js";import"./Button-AMxsa0l_.js";import"./SkeletonBar-Dp36ivGE.js";import"./Tooltip-z-ifkWQQ.js";import"./info-sign-D9GtHKYX.js";import"./chevron-up-DVR-Z4u3.js";import"./chevron-down-tGzF8KYs.js";import"./useEventCallback-IzVRxhrH.js";import"./iconLoader-BLNQIRdO.js";import"./Switch-IaXyuUr5.js";import"./CompositeRoot-BIbtdOWq.js";import"./TimePicker-BOi0_Msx.js";import"./CollapsiblePanel-D1EuzeA-.js";import"./error-7sAzP_x2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dlfz6qvi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
