import{j as t,g as n}from"./iframe-C6x_-cCw.js";import{A as r}from"./action-form-CS5EYhiz.js";import"./preload-helper-C5M_clDJ.js";import"./DropdownField-BUFMPHNJ.js";import"./debounce-BdodUMZs.js";import"./useOsdkClient-D1P3vg8H.js";import"./index-DG092T-D.js";import"./Input-wynBa1uS.js";import"./useBaseUiId-UYgWBkOi.js";import"./useControlled-DzDgqIkH.js";import"./index-hI-Jf30A.js";import"./index-C-0Da6r-.js";import"./PopoverPopup--Wx5Qz1n.js";import"./InternalBackdrop-BWEfKABb.js";import"./composite-BSZVTMPL.js";import"./index-DhALpsH2.js";import"./getDisabledMountTransitionStyles-DPQ1PlPt.js";import"./ToolbarRootContext-DBEn4rvT.js";import"./tick-jJZnrm3J.js";import"./svgIconContainer-Bkyrnuc-.js";import"./small-cross-BSf0QNWN.js";import"./search-DNxvrUDH.js";import"./cross-l0aAmTW5.js";import"./useValueChanged-D9fSnI04.js";import"./getPseudoElementBounds-B-iH7G1J.js";import"./CompositeItem-DKoeFQh8.js";import"./makeExternalStore-DVp6XbDL.js";import"./BaseForm-dpb1iQGW.js";import"./ActionButton-DhU9U98Q.js";import"./Button-BKdv7kuC.js";import"./SkeletonBar-BoDD1_vM.js";import"./Tooltip-g_XfUcJD.js";import"./info-sign-CVY3a-XN.js";import"./chevron-up-B1IsUn2J.js";import"./chevron-down-BDM7mpPh.js";import"./useEventCallback-Bfoj9m8E.js";import"./iconLoader-BM6rGIQP.js";import"./Switch-jiuIM9kp.js";import"./CompositeRoot-Dk-xtveW.js";import"./TimePicker-Gzt1Jx6I.js";import"./CollapsiblePanel-xqDVzon_.js";import"./error-owN_za9g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-FojMXCRT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
