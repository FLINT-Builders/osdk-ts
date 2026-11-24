import{j as t,g as n}from"./iframe-DzUHN8ca.js";import{A as r}from"./action-form-DWZfb7-_.js";import"./preload-helper--9RxGpgt.js";import"./DropdownField-v2O8kawS.js";import"./debounce-UzKpvpaD.js";import"./useOsdkClient-y4syjW26.js";import"./index-D6O_ioKN.js";import"./Input-miTMtrPD.js";import"./useBaseUiId-sxd6xo0y.js";import"./useControlled-C2MYeSWY.js";import"./index-BX2JU1xs.js";import"./index-ybBo5jTQ.js";import"./PopoverPopup-Dv9M1d_z.js";import"./InternalBackdrop-DkhciH2d.js";import"./composite-BXmDwDE8.js";import"./index-CTEKPH5s.js";import"./getDisabledMountTransitionStyles-aw8w9V1B.js";import"./ToolbarRootContext-Bvn8VjLR.js";import"./tick-6VSUfxzF.js";import"./svgIconContainer-PY62KixA.js";import"./small-cross-Du7Izp1r.js";import"./search-CykjRKOt.js";import"./cross-Ba2yr2aR.js";import"./useValueChanged-BW_6iowi.js";import"./getPseudoElementBounds-DGlfh4Q1.js";import"./CompositeItem-y4Pst_mH.js";import"./makeExternalStore-BysZSooj.js";import"./BaseForm-D3_103oB.js";import"./ActionButton-D40edvmP.js";import"./Button-C_9t5m1R.js";import"./SkeletonBar-DWrRSBfJ.js";import"./Tooltip-D32WVKHM.js";import"./info-sign-DE9UgHpx.js";import"./chevron-up-CJu0Igpx.js";import"./chevron-down-gUZOAhoK.js";import"./useEventCallback-DYoF4AP_.js";import"./iconLoader-CKk1F9uz.js";import"./Switch-CyUYIOyH.js";import"./CompositeRoot-CpOQ9BSI.js";import"./TimePicker-CM-Kw1wH.js";import"./CollapsiblePanel-CvKRyI0p.js";import"./error-BMVJPOE-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DpCE12mV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
