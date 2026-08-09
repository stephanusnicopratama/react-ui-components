import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./Tag.component-DI3A8KbK.js";import{a,i as o,n as s,t as c}from"./Card.component-CGTNyLJC.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{l=e(n()),r(),a(),u={title:`Tag`,component:i,argTypes:{status:{options:[`success`,`failed`,`pending`],control:{type:`select`}}}},d=e=>l.createElement(i,e),f=d.bind({}),f.args={status:`pending`,children:`Pending`},p=d.bind({}),p.args={status:`success`,children:`Success`},m=d.bind({}),m.args={status:`failed`,children:`Failed`},h=d.bind({}),h.args={status:`pending`,children:`Pending`},g=()=>l.createElement(c,{type:`elevated`},l.createElement(o,null,`Deployment`,l.createElement(i,{status:`success`},`Succeeded`)),l.createElement(s,null,l.createElement(`div`,{style:{display:`flex`,gap:8,alignItems:`center`}},l.createElement(i,{status:`failed`},`Build failed`),l.createElement(i,{status:`pending`},`Waiting`)))),g.__docgenInfo={description:``,methods:[],displayName:`InsideCard`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Tag {...args} />`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Tag {...args} />`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Tag {...args} />`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Tag {...args} />`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Card type="elevated">
    <CardTitle>
      Deployment
      <Tag status="success">Succeeded</Tag>
    </CardTitle>
    <CardBody>
      <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <Tag status="failed">Build failed</Tag>
        <Tag status="pending">Waiting</Tag>
      </div>
    </CardBody>
  </Card>`,...g.parameters?.docs?.source}}},_=[`TagComponent`,`Success`,`Failed`,`Pending`,`InsideCard`]})))()}v();export{m as Failed,g as InsideCard,h as Pending,p as Success,f as TagComponent,_ as __namedExportsOrder,u as default};