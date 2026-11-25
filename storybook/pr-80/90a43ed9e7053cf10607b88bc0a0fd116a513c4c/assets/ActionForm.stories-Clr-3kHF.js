import{j as t,g as n}from"./iframe-evcKlg9V.js";import{A as r}from"./action-form-C_uiHXSP.js";import"./preload-helper-WHPhz6sD.js";import"./DropdownField-BhbpYF1Z.js";import"./debounce-DziosmGC.js";import"./useOsdkClient-BFKEpEYK.js";import"./index-BHwj9ia0.js";import"./Input-iRDe1k4_.js";import"./useBaseUiId-DdAriUni.js";import"./useControlled-DXtgTA3C.js";import"./index-fwET-1_r.js";import"./index-Cyl-_-yn.js";import"./PopoverPopup-CUAmX7eQ.js";import"./InternalBackdrop-BBabxNjC.js";import"./composite-BltyBfwn.js";import"./index-O4DHWyqo.js";import"./getDisabledMountTransitionStyles-BwnYd9Fi.js";import"./ToolbarRootContext-RfiWxa4c.js";import"./tick-aNfHfk5E.js";import"./svgIconContainer-DOh5rP9T.js";import"./small-cross-B30QXwxO.js";import"./search-DhcR5bm1.js";import"./cross-BbmJFYQF.js";import"./useValueChanged-DTq6En14.js";import"./getPseudoElementBounds-BzQUzGR6.js";import"./CompositeItem-Cm5MVItV.js";import"./makeExternalStore-DSan-vOh.js";import"./BaseForm-D8G11Zti.js";import"./ActionButton-lCE-fGOM.js";import"./Button-Bz5serEd.js";import"./SkeletonBar-BdyajZcd.js";import"./Tooltip-DfpJpJwe.js";import"./info-sign-CqhGjRm5.js";import"./chevron-up-DHFaubhs.js";import"./chevron-down-BvJqIX5i.js";import"./useEventCallback-_R1SuQ--.js";import"./iconLoader-CTyK-vkR.js";import"./Switch-DyD3ffaV.js";import"./CompositeRoot-CqGAOBl-.js";import"./TimePicker-Bt4LN75h.js";import"./CollapsiblePanel-DJfTc0NL.js";import"./error-BDn6-GLZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BriAHFRe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
