import{j as t,g as n}from"./iframe-CSBSqJV-.js";import{A as r}from"./action-form-CSsZLw4k.js";import"./preload-helper-y6YPEm4u.js";import"./DropdownField-BIxLro4D.js";import"./debounce-gyo9KVfh.js";import"./useOsdkClient-0i4-BUE5.js";import"./index-BJfVWZd-.js";import"./Input-B47Y97Of.js";import"./useBaseUiId-Bc5TgsQW.js";import"./useControlled-Bac_91v3.js";import"./index-BrPOVTIE.js";import"./index-DxVLJ-Sl.js";import"./PopoverPopup-BFehPzV1.js";import"./InternalBackdrop-Beq1X7xS.js";import"./composite-jPJKKGn2.js";import"./index-LUSaJ2vo.js";import"./getDisabledMountTransitionStyles-BniS6qDk.js";import"./ToolbarRootContext-DEZkowdo.js";import"./tick-WiW2BOLj.js";import"./svgIconContainer-CLK7EnDK.js";import"./small-cross-CSds0n2Q.js";import"./search-DvlP61aE.js";import"./cross-B6WlAhq-.js";import"./useValueChanged-D2mv37rP.js";import"./getPseudoElementBounds-DhrtV-tW.js";import"./CompositeItem-Cevizy2o.js";import"./makeExternalStore-BuktQzqG.js";import"./BaseForm-XVTyeoNB.js";import"./ActionButton-cyr4kPxp.js";import"./Button-Dh9tN-kh.js";import"./SkeletonBar-DUkAKkre.js";import"./Tooltip-Bo7GAIpf.js";import"./info-sign-C1uMHTHe.js";import"./chevron-up-D8M8WnFY.js";import"./chevron-down-C4EMQsdy.js";import"./useEventCallback-DKSmEp2D.js";import"./iconLoader-CqwqSmrQ.js";import"./Switch-D_a3rUuo.js";import"./CompositeRoot-hq88bvC5.js";import"./TimePicker-YdD4QWel.js";import"./CollapsiblePanel-CFBpR34G.js";import"./error-CRSueJec.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-CwHZa2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
