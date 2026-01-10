import{R as e}from"./iframe-c19WGzGw.js";import{R as p}from"./index-Drv5cfSF.js";import{B as d}from"./Button.component-C_6pMEwZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lu8wLwSs.js";import"./classNames-Ci91NLh9.js";const i="_modal_agxsw_1",t={modal:i,"modal-header":"_modal-header_agxsw_15","modal-body":"_modal-body_agxsw_36","modal-footer":"_modal-footer_agxsw_41","modal-backdrop":"_modal-backdrop_agxsw_63"},r=({children:o})=>e.createElement("div",{className:t["modal-header"]},o),s=({children:o})=>e.createElement("div",{className:t["modal-body"]},o),c=({children:o})=>e.createElement("div",{className:t["modal-footer"]},o),m=({children:o,open:l})=>l?p.createPortal(e.createElement(e.Fragment,null,e.createElement("div",{className:t["modal-backdrop"]}),e.createElement("div",{className:t.modal},o)),document.body):null;r.__docgenInfo={description:"",methods:[],displayName:"ModalTitle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const E={title:"Modal",component:m,argTypes:{open:{control:{type:"boolean"}}}},u=o=>{const[l,n]=e.useState(!1);return e.createElement(e.Fragment,null,e.createElement(d,{onClick:()=>n(!0)},"Open Modal"),e.createElement(m,{...o,open:o.open||l},e.createElement(r,null,"Title"),e.createElement(s,null,"Body"),e.createElement(c,null,e.createElement(d,{onClick:()=>n(!1)},"Close"))))},a=u.bind({});a.args={children:"Hello world!"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} open={args.open || isOpen}>
        <ModalTitle>Title</ModalTitle>
        <ModalBody>Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...a.parameters?.docs?.source}}};const N=["ModalComponent"];export{a as ModalComponent,N as __namedExportsOrder,E as default};
