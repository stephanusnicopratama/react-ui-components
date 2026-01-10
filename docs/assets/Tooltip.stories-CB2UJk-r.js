import{r as x,R as t}from"./iframe-c19WGzGw.js";import{c as d}from"./classNames-Ci91NLh9.js";import"./preload-helper-PPVm8Dsz.js";const f="_tooltip_1q7o2_1",l={"tooltip-wrapper":"_tooltip-wrapper_1q7o2_1",tooltip:f,"tooltip-fade-in":"_tooltip-fade-in_1q7o2_1","tooltip__position--top":"_tooltip__position--top_1q7o2_25","tooltip__position--bottom":"_tooltip__position--bottom_1q7o2_38","tooltip__position--left":"_tooltip__position--left_1q7o2_51","tooltip__position--right":"_tooltip__position--right_1q7o2_64"},o=({children:a,content:m,position:g="top",className:u})=>{const[_,c]=x.useState(!1);return t.createElement("div",{className:d(l["tooltip-wrapper"],u),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1)},a,_&&t.createElement("div",{className:d(l.tooltip,l[`tooltip__position--${g}`]),role:"tooltip"},m))};o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Tooltip",component:o,argTypes:{position:{options:["top","bottom","left","right"],control:{type:"select"}}}},r=a=>t.createElement(o,{...a}),e=r.bind({});e.args={content:"This is a tooltip",children:t.createElement("button",{style:{padding:"8px 16px"}},"Hover me")};const i=r.bind({});i.args={content:"Tooltip on bottom",position:"bottom",children:t.createElement("button",{style:{padding:"8px 16px"}},"Hover me")};const n=r.bind({});n.args={content:"Tooltip on left",position:"left",children:t.createElement("button",{style:{padding:"8px 16px"}},"Hover me")};const p=r.bind({});p.args={content:"Tooltip on right",position:"right",children:t.createElement("button",{style:{padding:"8px 16px"}},"Hover me")};const s=()=>t.createElement("div",{style:{display:"flex",gap:"100px",padding:"100px",flexWrap:"wrap"}},t.createElement(o,{content:"Top tooltip",position:"top"},t.createElement("button",{style:{padding:"8px 16px"}},"Top")),t.createElement(o,{content:"Bottom tooltip",position:"bottom"},t.createElement("button",{style:{padding:"8px 16px"}},"Bottom")),t.createElement(o,{content:"Left tooltip",position:"left"},t.createElement("button",{style:{padding:"8px 16px"}},"Left")),t.createElement(o,{content:"Right tooltip",position:"right"},t.createElement("button",{style:{padding:"8px 16px"}},"Right")));s.__docgenInfo={description:"",methods:[],displayName:"AllPositions"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} />",...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "100px",
  padding: "100px",
  flexWrap: "wrap"
}}>
    <Tooltip content="Top tooltip" position="top">
      <button style={{
      padding: "8px 16px"
    }}>Top</button>
    </Tooltip>
    <Tooltip content="Bottom tooltip" position="bottom">
      <button style={{
      padding: "8px 16px"
    }}>Bottom</button>
    </Tooltip>
    <Tooltip content="Left tooltip" position="left">
      <button style={{
      padding: "8px 16px"
    }}>Left</button>
    </Tooltip>
    <Tooltip content="Right tooltip" position="right">
      <button style={{
      padding: "8px 16px"
    }}>Right</button>
    </Tooltip>
  </div>`,...s.parameters?.docs?.source}}};const E=["TooltipComponent","Bottom","Left","Right","AllPositions"];export{s as AllPositions,i as Bottom,n as Left,p as Right,e as TooltipComponent,E as __namedExportsOrder,h as default};
