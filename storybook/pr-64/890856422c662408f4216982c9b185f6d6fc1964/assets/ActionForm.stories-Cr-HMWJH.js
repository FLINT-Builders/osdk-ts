import{j as t,g as n}from"./iframe-CXJvlF9f.js";import{A as r}from"./action-form-C6RGmnC5.js";import"./preload-helper-D4wndH43.js";import"./DropdownField-C_cDwqJ_.js";import"./debounce-V9eN7pLv.js";import"./useOsdkClient-C_VqVBcI.js";import"./index-DbRhx2FS.js";import"./Input-Bsqv1_ng.js";import"./useBaseUiId-CS56QWvK.js";import"./useControlled-Cpt07hfE.js";import"./index-DM43jlY4.js";import"./index-9vIUuPta.js";import"./PopoverPopup-BaZKNv6D.js";import"./InternalBackdrop-CqtSiTpM.js";import"./composite-BN9qtXxc.js";import"./index-Dp2pLEF1.js";import"./getDisabledMountTransitionStyles-CgmP4-RG.js";import"./ToolbarRootContext-CYby2zsu.js";import"./tick-CbWMloSO.js";import"./svgIconContainer-JnMWnddt.js";import"./small-cross-DMWa4kPj.js";import"./search-B7r0qDmR.js";import"./cross-smvXwA6k.js";import"./useValueChanged-Byd_0DcO.js";import"./getPseudoElementBounds-CgYpcBOV.js";import"./CompositeItem-CThXZzFK.js";import"./makeExternalStore-BjpJhFKl.js";import"./BaseForm-kgmpHl_h.js";import"./ActionButton-CsFrYYGI.js";import"./Button-CsdSAMDu.js";import"./SkeletonBar-C1x9OOkX.js";import"./Tooltip-O-viL_pu.js";import"./info-sign-BqKuQbXZ.js";import"./chevron-up-qxyzUUZl.js";import"./chevron-down-xbAc8Fo2.js";import"./useEventCallback-B_1Z_QCH.js";import"./iconLoader-BLK3hTf5.js";import"./Switch-BN7ul8am.js";import"./CompositeRoot-OuuCSZnm.js";import"./TimePicker-hkBUZXel.js";import"./CollapsiblePanel-CkEuIXiI.js";import"./error-D6bGjg1T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6MxL57R.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
