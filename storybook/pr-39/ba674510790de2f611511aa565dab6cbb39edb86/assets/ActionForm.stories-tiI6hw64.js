import{j as t,g as n}from"./iframe-DXCJdDjk.js";import{A as r}from"./action-form-DjzkWOdF.js";import"./preload-helper-BCqQIOQj.js";import"./DropdownField-D3NdJ4rJ.js";import"./debounce-C2si1I5i.js";import"./useOsdkClient-Cp8dLbkr.js";import"./index-QhP10yDY.js";import"./Input-BTjVOb0y.js";import"./useBaseUiId-BVzNdyaI.js";import"./useControlled-BjYAliAA.js";import"./index-DBzdfvA2.js";import"./index-DYK3IbAw.js";import"./PopoverPopup-Dott-kRm.js";import"./InternalBackdrop-DiEb60oM.js";import"./composite-VErlwM2g.js";import"./index-fUnQH0Ng.js";import"./getDisabledMountTransitionStyles-Crvdet31.js";import"./ToolbarRootContext-BXXCNwbt.js";import"./tick-oJgzJDQ-.js";import"./svgIconContainer-PeTmNDz1.js";import"./small-cross-YgIpoi-c.js";import"./search-DRi_hMxi.js";import"./cross-QCx31p9d.js";import"./useValueChanged-CYU4OOoO.js";import"./getPseudoElementBounds-BdNIU5Gh.js";import"./CompositeItem-DleHBTVF.js";import"./makeExternalStore-BQt7qWsh.js";import"./BaseForm-CltKlpYx.js";import"./ActionButton-C4OP8Ud5.js";import"./Button-D_PTcbbI.js";import"./SkeletonBar-BvIRP9GG.js";import"./Tooltip-kA7Y0tfn.js";import"./info-sign-DWHsDluH.js";import"./chevron-up-BtF_984-.js";import"./chevron-down-Dukj-qIY.js";import"./useEventCallback-NMYaIxLD.js";import"./iconLoader-DWE53gOz.js";import"./Switch-BLwVu3j7.js";import"./CompositeRoot-DB1mqScF.js";import"./TimePicker-BkpyLKCs.js";import"./CollapsiblePanel-Dz0EiOlC.js";import"./error-DYQlLdEW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cl21Vd8T.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
