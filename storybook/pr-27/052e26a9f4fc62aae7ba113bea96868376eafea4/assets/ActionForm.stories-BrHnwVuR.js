import{j as t,g as n}from"./iframe-Bh45DKn3.js";import{A as r}from"./action-form-yP6qNcft.js";import"./preload-helper-LJhXTPCv.js";import"./DropdownField-Bdykv7F3.js";import"./debounce-Coqd0i8P.js";import"./useOsdkClient-DkRSeke5.js";import"./index-BazZquql.js";import"./Input-iUZFI1La.js";import"./useBaseUiId-BfSMp68R.js";import"./useControlled-BrBmyOo2.js";import"./index-BSd5iftC.js";import"./index-CDLdpsSb.js";import"./PopoverPopup-mOdIo3-Q.js";import"./InternalBackdrop-DIwYAmQX.js";import"./composite-DWucITgI.js";import"./index-rTGldpxn.js";import"./getDisabledMountTransitionStyles-IkmlIA3z.js";import"./ToolbarRootContext-BUoifa8H.js";import"./tick-Civ6UOpK.js";import"./svgIconContainer-BfPBlfHC.js";import"./small-cross-D2rBK4H_.js";import"./search-Brd7oyMK.js";import"./cross-RpPg89dZ.js";import"./useValueChanged--KdOJzwF.js";import"./getPseudoElementBounds-JVlUWG3W.js";import"./CompositeItem-uwTTFrvD.js";import"./makeExternalStore-WafiyNY8.js";import"./BaseForm-sCafYZFL.js";import"./ActionButton-MfZdPyWj.js";import"./Button-Dy9bad7W.js";import"./SkeletonBar-Byf20GVv.js";import"./Tooltip-D8h_Xk4s.js";import"./info-sign-CcsLLel4.js";import"./chevron-up-kx1OzGhS.js";import"./chevron-down-BP-IXn8o.js";import"./useEventCallback-BjCmEzcn.js";import"./iconLoader-OrwhPZ5R.js";import"./Switch-lX7ODs3E.js";import"./CompositeRoot-BLP1vOgl.js";import"./TimePicker-qq6Sutvp.js";import"./CollapsiblePanel-CIXeu-cF.js";import"./error-BuY4OKaU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1D0C0Hkk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
