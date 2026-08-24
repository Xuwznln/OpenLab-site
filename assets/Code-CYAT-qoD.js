import{An as e,G as t,J as n,Jt as r,K as i,Nn as a,Xt as o,Zt as s,_t as c,ht as l,mt as u,o as d,on as f,p,vn as m,vt as h,zt as g}from"./_plugin-vue_export-helper-CRO0dx8O.js";function _(e,t){let r=s(n,null);return g(()=>e.hljs||r?.mergedHljsRef.value)}function v(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var y={name:`Code`,common:d,self:v},b=u([l(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[h(`show-line-numbers`,`
 display: flex;
 `),c(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),h(`word-wrap`,[u(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),u(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),u(`[class^=hljs]`,`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{let t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),x=r({name:`Code`,props:Object.assign(Object.assign({},p.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(n,{slots:r}){let{internalNoHighlight:o}=n,{mergedClsPrefixRef:s,inlineThemeDisabled:c}=i(),l=e(null),u=o?{value:void 0}:_(n),d=(e,t,n)=>{let{value:r}=u;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},h=g(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),v=()=>{if(r.default)return;let{value:e}=l;if(!e)return;let{language:t}=n,i=n.uri?window.decodeURIComponent(n.code):n.code;if(t){let r=d(t,i,n.trim);if(r!==null){if(n.inline)e.innerHTML=r;else{let t=e.querySelector(`.__code__`);t&&e.removeChild(t);let n=document.createElement(`pre`);n.className=`__code__`,n.innerHTML=r,e.appendChild(n)}return}}if(n.inline){e.textContent=i;return}let a=e.querySelector(`.__code__`);if(a)a.textContent=i;else{let t=document.createElement(`pre`);t.className=`__code__`,t.textContent=i,e.innerHTML=``,e.appendChild(t)}};f(v),m(a(n,`language`),v),m(a(n,`code`),v),o||m(u,v);let x=p(`Code`,`-code`,b,y,n,s),S=g(()=>{let{common:{cubicBezierEaseInOut:e,fontFamilyMono:t},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":u,"hue-4":d,"hue-5":f,"hue-5-2":p,"hue-6":m,"hue-6-2":h}}=x.value,{internalFontSize:g}=n;return{"--n-font-size":g?`${g}px`:i,"--n-font-family":t,"--n-font-weight-strong":a,"--n-bezier":e,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":u,"--n-hue-4":d,"--n-hue-5":f,"--n-hue-5-2":p,"--n-hue-6":m,"--n-hue-6-2":h,"--n-line-number-text-color":o}}),C=c?t(`code`,g(()=>`${n.internalFontSize||`a`}`),S,n):void 0;return{mergedClsPrefix:s,codeRef:l,mergedShowLineNumbers:h,lineNumbers:g(()=>{let e=1,t=[],r=!1;for(let i of n.code)i===`
`?(r=!0,t.push(e++)):r=!1;return r||t.push(e++),t.join(`
`)}),cssVars:c?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender}},render(){var e;let{mergedClsPrefix:t,wordWrap:n,mergedShowLineNumbers:r,onRender:i}=this;return i?.(),o(`code`,{class:[`${t}-code`,this.themeClass,n&&`${t}-code--word-wrap`,r&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},r?o(`pre`,{class:`${t}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}});export{x as t};