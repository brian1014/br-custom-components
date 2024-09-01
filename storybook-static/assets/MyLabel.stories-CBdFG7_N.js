import{j as v}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";function f({label:l,size:g="normal",allCaps:x=!1,color:L,fontColor:h}){return v.jsx("span",{className:`${g} ${L} label`,style:{color:h},children:x?l.toUpperCase():l})}f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal'| 'h1'| 'h2'| 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Customize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label Color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font Color"}}};const T={title:"UI/labels/MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label",size:"h1"}},a={args:{label:"All Caps",size:"normal",allCaps:!0}},r={args:{label:"Seconday Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",fontColor:"#5517ac"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    size: 'h1'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Seconday Label',
    color: 'text-secondary'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,C,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#5517ac'
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,q as __namedExportsOrder,T as default};
