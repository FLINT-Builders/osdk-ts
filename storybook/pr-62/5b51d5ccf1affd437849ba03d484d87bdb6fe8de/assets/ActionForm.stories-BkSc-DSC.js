import{j as t,g as n}from"./iframe-Bpe98Dj4.js";import{A as r}from"./action-form-j2YCSgAZ.js";import"./preload-helper-Bt7Pwj0U.js";import"./DropdownField-DkUTWihP.js";import"./debounce-CHjm_yWr.js";import"./useOsdkClient-BRImiEXq.js";import"./index-Jn5RtXdC.js";import"./Input-5kFdRd8C.js";import"./useBaseUiId-CJdlvVPQ.js";import"./useControlled-D2vfPoU0.js";import"./index-mKhMpHzy.js";import"./index-DCm6-91n.js";import"./PopoverPopup-BT66tNSv.js";import"./InternalBackdrop-C00MZUgD.js";import"./composite-BEI44NiL.js";import"./index-DbJfw5Jw.js";import"./getDisabledMountTransitionStyles-B4PbYPUw.js";import"./ToolbarRootContext-B7sQOt43.js";import"./tick-CYKDx9Yh.js";import"./svgIconContainer-Ck5E8Ycl.js";import"./small-cross-BQ5BxFpj.js";import"./search-DczXofvN.js";import"./cross-B4LWD9WI.js";import"./useValueChanged-CWbrPk1H.js";import"./getPseudoElementBounds-B1-hZC8t.js";import"./CompositeItem-Cb_CEEPz.js";import"./makeExternalStore-hK8JV_UH.js";import"./BaseForm-CrUNvkz5.js";import"./ActionButton-BO6R8BaB.js";import"./Button-CKCuh_PT.js";import"./SkeletonBar-Dio7HcWx.js";import"./Tooltip-C0c48BL6.js";import"./info-sign-Ch6eRZQd.js";import"./chevron-up-1EqwUT07.js";import"./chevron-down-B2AZuAlJ.js";import"./useEventCallback-jPkrsSwe.js";import"./iconLoader-wc-hmcWz.js";import"./Switch-DsG29bku.js";import"./CompositeRoot-DOZXrzeJ.js";import"./TimePicker-BAZLp6IC.js";import"./CollapsiblePanel-CZ_2QIXb.js";import"./error-xXUB5Jtg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-c2fg5j0X.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
