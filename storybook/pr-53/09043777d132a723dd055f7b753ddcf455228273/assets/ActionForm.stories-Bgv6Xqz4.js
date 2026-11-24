import{j as t,g as n}from"./iframe-C4244Bm_.js";import{A as r}from"./action-form-CcwC1KVz.js";import"./preload-helper-Ci98jyni.js";import"./DropdownField-BLtmL1tB.js";import"./debounce-C-dm4-uQ.js";import"./useOsdkClient-B6lLUCBK.js";import"./index-ClH59eky.js";import"./Input-DLoAGHyA.js";import"./useBaseUiId-X9XCdkpw.js";import"./useControlled-zrsS7sbr.js";import"./index-BpgYcUgO.js";import"./index-DJtcVNuw.js";import"./PopoverPopup-Bw-hztAp.js";import"./InternalBackdrop-BgtvNRvm.js";import"./composite-Ckn5xSHc.js";import"./index-Bi8RWIrI.js";import"./getDisabledMountTransitionStyles-CCxWABNx.js";import"./ToolbarRootContext-xDNhPuvX.js";import"./tick-D4xU7MKe.js";import"./svgIconContainer-C9qKBg5g.js";import"./small-cross-BKLGSFz1.js";import"./search-CyQQCVme.js";import"./cross-Ndayjde5.js";import"./useValueChanged-CnEeirqz.js";import"./getPseudoElementBounds-Cpfu0jjM.js";import"./CompositeItem-BHbjzdkB.js";import"./makeExternalStore-D1LNnd-p.js";import"./BaseForm-cGg76WGA.js";import"./ActionButton-DERxyeDa.js";import"./Button-DdPOxW32.js";import"./SkeletonBar-1wmzXisw.js";import"./Tooltip-Btlg-yIO.js";import"./info-sign-CecCtpat.js";import"./chevron-up-DfctdlzO.js";import"./chevron-down-BL39hyz4.js";import"./useEventCallback-DjDRvhxl.js";import"./iconLoader-CfkJKKHM.js";import"./Switch-DPjObgRC.js";import"./CompositeRoot-COgzZcLT.js";import"./TimePicker-CfkKUqHW.js";import"./CollapsiblePanel-B8EFIibH.js";import"./error-_egmS3m2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-GAx3Og7v.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
