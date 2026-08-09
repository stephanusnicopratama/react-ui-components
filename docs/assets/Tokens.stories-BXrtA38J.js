import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";var r,i,a,o,s,c,l;function u(){return(u=t((()=>{r=e(n()),i={title:`Design Tokens/Colors`},a=[{name:`primary`,value:`#0085ad`},{name:`primary-hover`,value:`#0ed1ff`},{name:`primary-active`,value:`#0085ad`},{name:`secondary`,value:`#475569`},{name:`secondary-hover`,value:`#334155`},{name:`secondary-active`,value:`#1e293b`},{name:`accent`,value:`#0ed1ff`},{name:`text-primary`,value:`#333`},{name:`text-secondary`,value:`#6b7280`},{name:`text-disabled`,value:`#9ca3af`,isText:!0},{name:`text-color-brand`,value:`#0085ad`},{name:`background-default`,value:`#fff`,isText:!0},{name:`background-subtle`,value:`#f9fafb`,isText:!0},{name:`background-disabled`,value:`#f3f4f6`,isText:!0},{name:`background-active`,value:`#e8ecf0`,isText:!0},{name:`background-inverse`,value:`#1f2937`},{name:`border-default`,value:`#d1d5db`,isText:!0},{name:`border-divider`,value:`#e5e7eb`,isText:!0},{name:`border-hover`,value:`#9ca3af`},{name:`success`,value:`#22c55e`},{name:`warning`,value:`#f59e0b`},{name:`error`,value:`#ef4444`},{name:`info`,value:`#3b82f6`},{name:`disabled`,value:`#9d9d9d`},{name:`tooltip-bg`,value:`#1f2937`}],o=(e,t)=>({width:96,height:56,borderRadius:8,background:e,border:`1px solid ${t?`#d1d5db`:`rgba(0,0,0,0.1)`}`}),s=()=>r.createElement(`div`,{style:{display:`grid`,gap:12}},a.map(e=>r.createElement(`div`,{key:e.name,style:{display:`flex`,alignItems:`center`,gap:12}},r.createElement(`div`,{style:o(e.value,e.isText)}),r.createElement(`div`,null,r.createElement(`div`,{style:{fontWeight:600,fontSize:14}},`--`,e.name),r.createElement(`div`,{style:{fontSize:13,color:`#6b7280`}},e.value))))),c=s.bind({}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "grid",
  gap: 12
}}>
    {TOKENS.map(token => <div key={token.name} style={{
    display: "flex",
    alignItems: "center",
    gap: 12
  }}>
        <div style={swatchStyle(token.value, token.isText)} />
        <div>
          <div style={{
        fontWeight: 600,
        fontSize: 14
      }}>--{token.name}</div>
          <div style={{
        fontSize: 13,
        color: "#6b7280"
      }}>{token.value}</div>
        </div>
      </div>)}
  </div>`,...c.parameters?.docs?.source}}},l=[`ColorPalette`]})))()}u();export{c as ColorPalette,l as __namedExportsOrder,i as default};