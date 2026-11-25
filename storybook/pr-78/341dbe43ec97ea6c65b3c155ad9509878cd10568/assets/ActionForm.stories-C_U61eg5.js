import{j as t,g as n}from"./iframe-6Z8QeqqP.js";import{A as r}from"./action-form-DWggqHT5.js";import"./preload-helper-y0D87bsA.js";import"./DropdownField-Ue-qV6y1.js";import"./debounce-Doh9hDTV.js";import"./useOsdkClient-HylTLrl8.js";import"./index-HkxEzDx6.js";import"./Input-DaVTG5o1.js";import"./useBaseUiId-Dmz3cJQe.js";import"./useControlled-Bx6RLClW.js";import"./index-Cv62lSJR.js";import"./index-BXTFSlIa.js";import"./PopoverPopup-kC84IpyX.js";import"./InternalBackdrop-4jpidxXn.js";import"./composite-DbAi9sOR.js";import"./index-iLFhFJRI.js";import"./getDisabledMountTransitionStyles-6bxwWprB.js";import"./ToolbarRootContext-CYEi_KjS.js";import"./tick-D9u7tIy2.js";import"./svgIconContainer-8--RoJPk.js";import"./small-cross-B-wOlo0v.js";import"./search-CvqEaj-y.js";import"./cross-MCgjL0SO.js";import"./useValueChanged-17CWfsm_.js";import"./getPseudoElementBounds-CXK9C3Gp.js";import"./CompositeItem-Rkv-cvXn.js";import"./makeExternalStore-CBiKzjzF.js";import"./BaseForm-BqoF340H.js";import"./ActionButton-BROaqCpF.js";import"./Button-CwPVz1_L.js";import"./SkeletonBar-DSdvgAJi.js";import"./Tooltip-CzZyPcm7.js";import"./info-sign-B6cAq_VP.js";import"./chevron-up-C7yCS-9H.js";import"./chevron-down-C4hWEHAB.js";import"./useEventCallback-gCzDUKPv.js";import"./iconLoader-D1POyIxW.js";import"./Switch-BHQ6rBkA.js";import"./CompositeRoot-BO1o2wsI.js";import"./TimePicker-Dm_k76OL.js";import"./CollapsiblePanel-CBemhgM_.js";import"./error-DBQvGp4O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CL7caFuf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
