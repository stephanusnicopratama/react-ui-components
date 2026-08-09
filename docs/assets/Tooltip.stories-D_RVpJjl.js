import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./classNames-GJKvnRQ-.js";var a,o;function s(){return(s=t((()=>{a=`_tooltip_1q7o2_1`,o={"tooltip-wrapper":`_tooltip-wrapper_1q7o2_1`,tooltip:a,"tooltip-fade-in":`_tooltip-fade-in_1q7o2_1`,"tooltip__position--top":`_tooltip__position--top_1q7o2_25`,"tooltip__position--bottom":`_tooltip__position--bottom_1q7o2_38`,"tooltip__position--left":`_tooltip__position--left_1q7o2_51`,"tooltip__position--right":`_tooltip__position--right_1q7o2_64`}})))()}var c,l;function u(){return(u=t((()=>{c=e(n()),s(),r(),l=({children:e,content:t,position:n=`top`,className:r})=>{let[a,s]=(0,c.useState)(!1);return c.createElement(`div`,{className:i(o[`tooltip-wrapper`],r),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},e,a&&c.createElement(`div`,{className:i(o.tooltip,o[`tooltip__position--${n}`]),role:`tooltip`},t))},l.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},content:{required:!0,tsType:{name:`string`},description:``},position:{required:!1,tsType:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"top"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var d,f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{d=e(n()),u(),f={title:`Tooltip`,component:l,argTypes:{position:{options:[`top`,`bottom`,`left`,`right`],control:{type:`select`}}}},p=e=>d.createElement(l,e),m=p.bind({}),m.args={content:`This is a tooltip`,children:d.createElement(`button`,{style:{padding:`8px 16px`}},`Hover me`)},h=p.bind({}),h.args={content:`Tooltip on bottom`,position:`bottom`,children:d.createElement(`button`,{style:{padding:`8px 16px`}},`Hover me`)},g=p.bind({}),g.args={content:`Tooltip on left`,position:`left`,children:d.createElement(`button`,{style:{padding:`8px 16px`}},`Hover me`)},_=p.bind({}),_.args={content:`Tooltip on right`,position:`right`,children:d.createElement(`button`,{style:{padding:`8px 16px`}},`Hover me`)},v=()=>d.createElement(`div`,{style:{display:`flex`,gap:`100px`,padding:`100px`,flexWrap:`wrap`}},d.createElement(l,{content:`Top tooltip`,position:`top`},d.createElement(`button`,{style:{padding:`8px 16px`}},`Top`)),d.createElement(l,{content:`Bottom tooltip`,position:`bottom`},d.createElement(`button`,{style:{padding:`8px 16px`}},`Bottom`)),d.createElement(l,{content:`Left tooltip`,position:`left`},d.createElement(`button`,{style:{padding:`8px 16px`}},`Left`)),d.createElement(l,{content:`Right tooltip`,position:`right`},d.createElement(`button`,{style:{padding:`8px 16px`}},`Right`))),v.__docgenInfo={description:``,methods:[],displayName:`AllPositions`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Tooltip {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Tooltip {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Tooltip {...args} />`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Tooltip {...args} />`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...v.parameters?.docs?.source}}},y=[`TooltipComponent`,`Bottom`,`Left`,`Right`,`AllPositions`]})))()}b();export{v as AllPositions,h as Bottom,g as Left,_ as Right,m as TooltipComponent,y as __namedExportsOrder,f as default};