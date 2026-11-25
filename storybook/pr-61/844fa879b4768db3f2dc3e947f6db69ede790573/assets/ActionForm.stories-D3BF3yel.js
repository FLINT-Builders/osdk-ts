import{j as t,g as n}from"./iframe-NyHN5VRq.js";import{A as r}from"./action-form-DQ5Fdz0i.js";import"./preload-helper-V-uedkqD.js";import"./DropdownField-DDnDtQPw.js";import"./debounce-DTG0i2xp.js";import"./useOsdkClient-KQa4vScA.js";import"./index-BfjQx6Ly.js";import"./Input-CNTzIZ_0.js";import"./useBaseUiId-D2dSZ8xw.js";import"./useControlled-Dh_cMPIe.js";import"./index-BybQTFLl.js";import"./index-DT2LvdrW.js";import"./PopoverPopup-BXMQLUfh.js";import"./InternalBackdrop-D7Xp3E9p.js";import"./composite-dEyBM_w4.js";import"./index-B3mmWQ0F.js";import"./getDisabledMountTransitionStyles-BnTV1GCv.js";import"./ToolbarRootContext-BxJpsAr4.js";import"./tick-Dv-MwZz4.js";import"./svgIconContainer-D2-PKO04.js";import"./small-cross-B006-969.js";import"./search-5FdBAUHN.js";import"./cross-Dw9UKTtm.js";import"./useValueChanged-2qCvj704.js";import"./getPseudoElementBounds-liAYIzgN.js";import"./CompositeItem-D6OEWPs8.js";import"./makeExternalStore-DXy-cErB.js";import"./BaseForm-UN1guU4D.js";import"./ActionButton-B_hA--wV.js";import"./Button-Czn8jZsp.js";import"./SkeletonBar-GrYatSDE.js";import"./Tooltip-CKdMZe0K.js";import"./info-sign-BepLxflq.js";import"./chevron-up-Ckv21Z8s.js";import"./chevron-down-D5RxD_5a.js";import"./useEventCallback-DoOCRT8a.js";import"./iconLoader-8wb59uZj.js";import"./Switch-Dt2Mx2zj.js";import"./CompositeRoot-Dj0kOUZh.js";import"./TimePicker-DnhQBZUN.js";import"./CollapsiblePanel-DyupETYF.js";import"./error-CmvnS4M6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5n_JPyv4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
