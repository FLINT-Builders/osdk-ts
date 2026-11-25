import{j as t,g as n}from"./iframe-SC996r8Q.js";import{A as r}from"./action-form-TYyph4fD.js";import"./preload-helper-4MonG5NX.js";import"./DropdownField-C60HSoXi.js";import"./debounce-DtZn3Jt8.js";import"./useOsdkClient-D5cV3NWU.js";import"./index-wDhWF-Jn.js";import"./Input-CJVpnIyi.js";import"./useBaseUiId-BGvjsW3d.js";import"./useControlled-BSXRDWWj.js";import"./index-DDj-V0A5.js";import"./index-BdHTDN0i.js";import"./PopoverPopup-CehfZg5Y.js";import"./InternalBackdrop-DNC5MyZD.js";import"./composite-Gzk6HQ8U.js";import"./index-85g-pXui.js";import"./getDisabledMountTransitionStyles-spVW-j4h.js";import"./ToolbarRootContext-C5XSlJDX.js";import"./tick-DYksh_VF.js";import"./svgIconContainer-B-5c0m9a.js";import"./small-cross-HUX1_LBw.js";import"./search-DMkfs-8L.js";import"./cross-CSzOPxz_.js";import"./useValueChanged-CCo4wtuS.js";import"./getPseudoElementBounds-a71QRY78.js";import"./CompositeItem-CYqhRUaL.js";import"./makeExternalStore-CnxIOnyb.js";import"./BaseForm-C71oiKVt.js";import"./ActionButton-ByIO7PT5.js";import"./Button-4P3mfFZX.js";import"./SkeletonBar-pBY25qw4.js";import"./Tooltip-C5K7kdO5.js";import"./info-sign-D8P250xv.js";import"./chevron-up-CKZuBF0G.js";import"./chevron-down-Bymbl15e.js";import"./useEventCallback-CgwfU7lc.js";import"./iconLoader-BpL3Cu8t.js";import"./Switch-CDnM99S0.js";import"./CompositeRoot-DPai_XzD.js";import"./TimePicker-DhPa8hOf.js";import"./CollapsiblePanel-p7nu56Bn.js";import"./error-BsBvF-VX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dlvqw_Pf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
