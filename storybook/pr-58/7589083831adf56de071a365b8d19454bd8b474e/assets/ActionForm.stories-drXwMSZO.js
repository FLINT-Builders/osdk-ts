import{j as t,g as n}from"./iframe-D3-3nK7q.js";import{A as r}from"./action-form-CI9pLDl3.js";import"./preload-helper-BElTUCt9.js";import"./DropdownField-CIyitf5P.js";import"./debounce-CvskZtP5.js";import"./useOsdkClient-CkMOlfJx.js";import"./index-CGTNyrvF.js";import"./Input-DujYPLSI.js";import"./useBaseUiId-BfpIc49G.js";import"./useControlled-DjBtz4s1.js";import"./index-BuNH2rO3.js";import"./index-C3yTrjgV.js";import"./PopoverPopup-CI-Szge2.js";import"./InternalBackdrop-D1EZm1AQ.js";import"./composite-D0w8ui7I.js";import"./index-C4_vrnPE.js";import"./getDisabledMountTransitionStyles-VRYpsqgo.js";import"./ToolbarRootContext-DQWI9XbP.js";import"./tick-CkByZXDz.js";import"./svgIconContainer-Dmn3JYop.js";import"./small-cross-CI8b4jpP.js";import"./search-DdBNOuKg.js";import"./cross-NOSp3crr.js";import"./useValueChanged-D0XFuiDP.js";import"./getPseudoElementBounds-CsMk40JZ.js";import"./CompositeItem-Areoylt-.js";import"./makeExternalStore-Dirg-OTC.js";import"./BaseForm-DY39_W2b.js";import"./ActionButton-C1fl511w.js";import"./Button-_NTWHkbN.js";import"./SkeletonBar-Dxus3qqZ.js";import"./Tooltip-CYjmQQLe.js";import"./info-sign-TjHLIuvW.js";import"./chevron-up-EwiTS5MD.js";import"./chevron-down-B7WxA5SS.js";import"./useEventCallback-Cbb79cWA.js";import"./iconLoader-7gO8xr4I.js";import"./Switch-D_AT0mHp.js";import"./CompositeRoot-Csr6Nu1y.js";import"./TimePicker-CeQf5Ciw.js";import"./CollapsiblePanel-Dnk44RSY.js";import"./error-oDVaVcOP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DQqeF1TA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
