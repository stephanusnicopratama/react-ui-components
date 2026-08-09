import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./react-dom-BzEl8usk.js";import{n as i,t as a}from"./Button.component-DuJSvYlz.js";import{n as o,t as s}from"./classNames-GJKvnRQ-.js";var c,l;function u(){return(u=t((()=>{c=`_toast_7ncvo_1`,l={"toast-container":`_toast-container_7ncvo_1`,"toast-container__top-right":`_toast-container__top-right_7ncvo_12`,"toast-container__top-left":`_toast-container__top-left_7ncvo_18`,"toast-container__top-center":`_toast-container__top-center_7ncvo_24`,"toast-container__bottom-right":`_toast-container__bottom-right_7ncvo_31`,"toast-container__bottom-left":`_toast-container__bottom-left_7ncvo_38`,"toast-container__bottom-center":`_toast-container__bottom-center_7ncvo_45`,toast:c,"toast-slide-in":`_toast-slide-in_7ncvo_1`,"toast__type--success":`_toast__type--success_7ncvo_67`,"toast__type--error":`_toast__type--error_7ncvo_71`,"toast__type--info":`_toast__type--info_7ncvo_75`,"toast__type--warning":`_toast__type--warning_7ncvo_79`,"toast-icon":`_toast-icon_7ncvo_83`,"toast-content":`_toast-content_7ncvo_112`,"toast-title":`_toast-title_7ncvo_117`,"toast-description":`_toast-description_7ncvo_123`,"toast-close":`_toast-close_7ncvo_130`}})))()}var d,f,p,m;function h(){return(h=t((()=>{d=e(n()),u(),o(),f=e(r()),p={success:`✓`,error:`✕`,info:`ℹ`,warning:`!`},m=({open:e,onClose:t,title:n,description:r,type:i=`info`,duration:a=3e3,position:o=`top-right`,className:c})=>((0,d.useEffect)(()=>{if(!e||a<=0)return;let n=setTimeout(t,a);return()=>clearTimeout(n)},[e,a,t]),e?f.createPortal(d.createElement(`div`,{role:`alert`,className:s(l[`toast-container`],l[`toast-container__${o}`])},d.createElement(`div`,{className:s(l.toast,l[`toast__type--${i}`],c)},d.createElement(`span`,{className:l[`toast-icon`]},p[i]),d.createElement(`div`,{className:l[`toast-content`]},n&&d.createElement(`div`,{className:l[`toast-title`]},n),r&&d.createElement(`div`,{className:l[`toast-description`]},r)),d.createElement(`button`,{type:`button`,className:l[`toast-close`],onClick:t,"aria-label":`Close notification`},`×`))),document.body):null)})))()}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{g=e(n()),h(),i(),_={title:`Toast`,component:m,argTypes:{type:{options:[`success`,`error`,`info`,`warning`],control:{type:`select`}},position:{options:[`top-right`,`top-left`,`top-center`,`bottom-right`,`bottom-left`,`bottom-center`],control:{type:`select`}},duration:{control:{type:`number`}}}},v=e=>{let[t,n]=(0,g.useState)(!1);return g.createElement(g.Fragment,null,g.createElement(a,{onClick:()=>n(!0)},`Show Toast`),g.createElement(m,{...e,open:t,onClose:()=>n(!1),key:String(t)}))},y=v.bind({}),y.args={type:`info`,title:`Info`,description:`This is an informational message.`},b=v.bind({}),b.args={type:`success`,title:`Success`,description:`Your changes have been saved.`},x=v.bind({}),x.args={type:`error`,title:`Error`,description:`Something went wrong. Please try again.`},S=v.bind({}),S.args={type:`warning`,title:`Warning`,description:`Your session is about to expire.`},C=v.bind({}),C.args={type:`success`,title:`Saved`,description:`Document saved to the cloud.`,position:`bottom-left`},w=v.bind({}),w.args={type:`warning`,title:`Storage almost full`,description:`You are using 95% of your storage quota. Upgrade your plan or delete unused files to free up space before new uploads start failing.`},T=v.bind({}),T.args={type:`info`,title:`Persistent`,description:`This toast stays until dismissed.`,duration:0},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast {...args} open={open} onClose={() => setOpen(false)} key={String(open)} />
    </>;
}`,...T.parameters?.docs?.source}}},E=[`ToastComponent`,`Success`,`Error`,`Warning`,`BottomLeft`,`LongDescription`,`NoAutoClose`]})))()}D();export{C as BottomLeft,x as Error,w as LongDescription,T as NoAutoClose,b as Success,y as ToastComponent,S as Warning,E as __namedExportsOrder,_ as default};