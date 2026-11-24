import{j as t,g as n}from"./iframe-BidCv6LV.js";import{A as r}from"./action-form-JYJtWzrc.js";import"./preload-helper-BBvVXsFn.js";import"./DropdownField-BUNetrXn.js";import"./debounce-qZI5pjM5.js";import"./useOsdkClient-WoDqiidY.js";import"./index-D_xbPbxF.js";import"./Input-J58txkes.js";import"./useBaseUiId-CQmafZWA.js";import"./useControlled-BQp7ePj5.js";import"./index-DdFBJ6Hh.js";import"./index-ClJ31HK1.js";import"./PopoverPopup-B2aM6x7h.js";import"./InternalBackdrop-DObkkMkv.js";import"./composite-DQsyuPSU.js";import"./index-BhZS4a31.js";import"./getDisabledMountTransitionStyles-B7f6fBGw.js";import"./ToolbarRootContext-DxOeY7F6.js";import"./tick-CdWDJea5.js";import"./svgIconContainer-nuda1Slf.js";import"./small-cross-DW2DHUmB.js";import"./search-Dw6H1JFW.js";import"./cross-CCgwUKs5.js";import"./useValueChanged-BaKIasuJ.js";import"./getPseudoElementBounds-B2Ni9bqk.js";import"./CompositeItem-BDSq8mI7.js";import"./makeExternalStore-mkujOin6.js";import"./BaseForm-DrKu8dXM.js";import"./ActionButton-D74vQdpd.js";import"./Button-COF8krnH.js";import"./SkeletonBar-CWAvpKGo.js";import"./Tooltip-D9gJLDaZ.js";import"./info-sign-BVttWlbw.js";import"./chevron-up-C347BKUI.js";import"./chevron-down-BWg13NGV.js";import"./useEventCallback-Baep12rq.js";import"./iconLoader-CjtZD8Cn.js";import"./Switch-DdmsehfE.js";import"./CompositeRoot-CgZsOIHX.js";import"./TimePicker-CMBD4a2k.js";import"./CollapsiblePanel-CRUTvRPJ.js";import"./error-CX48AH-F.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CGezrU5C.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
