import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./react-dom-BzEl8usk.js";import{n as i,t as a}from"./Button.component-DuJSvYlz.js";var o,s;function c(){return(c=t((()=>{o=`_modal_gyfqy_1`,s={modal:o,"modal-header":`_modal-header_gyfqy_26`,"modal-title":`_modal-title_gyfqy_35`,"modal-close":`_modal-close_gyfqy_40`,"modal-body":`_modal-body_gyfqy_47`,"modal-footer":`_modal-footer_gyfqy_52`,"modal-button":`_modal-button_gyfqy_60`,"modal-backdrop":`_modal-backdrop_gyfqy_74`}})))()}var l,u,d,f,p,m;function h(){return(h=t((()=>{l=e(n()),c(),u=e(r()),d=({children:e})=>l.createElement(`div`,{className:s[`modal-header`]},e),f=({children:e})=>l.createElement(`div`,{className:s[`modal-body`]},e),p=({children:e})=>l.createElement(`div`,{className:s[`modal-footer`]},e),m=({children:e,open:t,onClose:n,closeOnBackdropClick:r=!0,closeOnEscapeKey:i=!0,closeOnOutsideClick:a=!1,onBackdropClick:o,onEscapeKey:c,onOutsideClick:d,backdropClassName:f,backdropStyle:p,modalClassName:m,modalStyle:h,zIndex:g})=>{let _=(0,l.useCallback)(e=>{o?.(e),r&&n?.()},[r,n,o]),v=(0,l.useCallback)(e=>{let t=document.querySelector(`.${s.modal}`);t&&!t.contains(e.target)&&(d?.(e),a&&n?.())},[a,n,d]),y=(0,l.useCallback)(e=>{e.key===`Escape`&&(c?.(e),i&&n?.())},[i,n,c]);return(0,l.useEffect)(()=>{if(t)return document.addEventListener(`mousedown`,v),document.addEventListener(`keydown`,y),()=>{document.removeEventListener(`mousedown`,v),document.removeEventListener(`keydown`,y)}},[t,v,y]),(0,l.useEffect)(()=>(t?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[t]),t?u.createPortal(l.createElement(l.Fragment,null,l.createElement(`div`,{className:`${s[`modal-backdrop`]} ${f||``}`,style:{...p,...g==null?{}:{zIndex:g-1}},onClick:_}),l.createElement(`div`,{className:`${s.modal} ${m||``}`,style:{...h,...g==null?{}:{zIndex:g}},role:`dialog`,"aria-modal":`true`},e)),document.body):null},d.__docgenInfo={description:``,methods:[],displayName:`ModalTitle`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`ModalBody`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`ModalFooter`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var g,_,v,y,b,x,S;function C(){return(C=t((()=>{g=e(n()),h(),i(),_={title:`Modal`,component:m,argTypes:{open:{control:{type:`boolean`}},closeOnBackdropClick:{control:{type:`boolean`}},closeOnOutsideClick:{control:{type:`boolean`}},closeOnEscapeKey:{control:{type:`boolean`}}}},v=e=>{let[t,n]=g.useState(!1);return g.createElement(g.Fragment,null,g.createElement(a,{onClick:()=>n(!0)},`Open Modal`),g.createElement(m,{...e,open:e.open||t,onClose:()=>n(!1)},g.createElement(d,null,e.title||`Title`),g.createElement(f,null,`Click outside or press Escape to close.`),g.createElement(p,null,g.createElement(a,{onClick:()=>n(!1)},`Close`))))},y=v.bind({}),y.args={title:`Default Modal`,closeOnBackdropClick:!0,closeOnEscapeKey:!0,closeOnOutsideClick:!1},b=v.bind({}),b.args={title:`Outside Click Close`,closeOnBackdropClick:!0,closeOnEscapeKey:!0,closeOnOutsideClick:!0},x=v.bind({}),x.args={title:`No Auto Close`,closeOnBackdropClick:!1,closeOnEscapeKey:!1,closeOnOutsideClick:!1},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} open={args.open || isOpen} onClose={() => setIsOpen(false)}>
        <ModalTitle>{args.title || 'Title'}</ModalTitle>
        <ModalBody>Click outside or press Escape to close.</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} open={args.open || isOpen} onClose={() => setIsOpen(false)}>
        <ModalTitle>{args.title || 'Title'}</ModalTitle>
        <ModalBody>Click outside or press Escape to close.</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} open={args.open || isOpen} onClose={() => setIsOpen(false)}>
        <ModalTitle>{args.title || 'Title'}</ModalTitle>
        <ModalBody>Click outside or press Escape to close.</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CloseOnOutsideClick`,`NoClose`]})))()}C();export{b as CloseOnOutsideClick,y as Default,x as NoClose,S as __namedExportsOrder,_ as default};