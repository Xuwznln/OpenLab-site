import{$ as e,An as t,G as n,Jt as r,K as i,Nn as a,W as o,X as s,Xt as c,_t as l,bt as u,d,ht as f,mt as p,o as m,p as h,s as g,tt as _,u as v,ut as y,vt as b,yt as x,zt as S}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{S as C,T as w}from"./Tag-BghOFA8u.js";import{d as T}from"./src-Bra9AQj3.js";var E={buttonHeightSmall:`14px`,buttonHeightMedium:`18px`,buttonHeightLarge:`22px`,buttonWidthSmall:`14px`,buttonWidthMedium:`18px`,buttonWidthLarge:`22px`,buttonWidthPressedSmall:`20px`,buttonWidthPressedMedium:`24px`,buttonWidthPressedLarge:`28px`,railHeightSmall:`18px`,railHeightMedium:`22px`,railHeightLarge:`26px`,railWidthSmall:`32px`,railWidthMedium:`40px`,railWidthLarge:`48px`};function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},E),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${y(t,{alpha:.2})}`})}var O={name:`Switch`,common:m,self:D},k=f(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[l(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),l(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),l(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),f(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[v({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),l(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),l(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),l(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p(`&:focus`,[l(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),b(`round`,[l(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[l(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),x(`disabled`,[x(`icon`,[b(`rubber-band`,[b(`pressed`,[l(`rail`,[l(`button`,`max-width: var(--n-button-width-pressed);`)])]),l(`rail`,[p(`&:active`,[l(`button`,`max-width: var(--n-button-width-pressed);`)])]),b(`active`,[b(`pressed`,[l(`rail`,[l(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),l(`rail`,[p(`&:active`,[l(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),b(`active`,[l(`rail`,[l(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),l(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[l(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[v()]),l(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),b(`active`,[l(`rail`,`background-color: var(--n-rail-color-active);`)]),b(`loading`,[l(`rail`,`
 cursor: wait;
 `)]),b(`disabled`,[l(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},h.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=r({name:`Switch`,props:A,slots:Object,setup(e){j===void 0&&(j=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:r,inlineThemeDisabled:s,mergedComponentPropsRef:c}=i(e),l=h(`Switch`,`-switch`,k,O,e,r),d=o(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:c?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:f,mergedDisabledRef:p}=d,m=t(e.defaultValue),g=T(a(e,`value`),m),v=S(()=>g.value===e.checkedValue),y=t(!1),b=t(!1),x=S(()=>{let{railStyle:t}=e;if(t)return t({focused:b.value,checked:v.value})});function E(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=d;n&&_(n,t),i&&_(i,t),r&&_(r,t),m.value=t,a(),o()}function D(){let{nTriggerFormFocus:e}=d;e()}function A(){let{nTriggerFormBlur:e}=d;e()}function M(){e.loading||p.value||(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue))}function N(){b.value=!0,D()}function P(){b.value=!1,A(),y.value=!1}function F(t){e.loading||p.value||t.key===` `&&(g.value===e.checkedValue?E(e.uncheckedValue):E(e.checkedValue),y.value=!1)}function I(t){e.loading||p.value||t.key===` `&&(t.preventDefault(),y.value=!0)}let L=S(()=>{let{value:e}=f,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:s,textColor:c,iconColor:d,[u(`buttonHeight`,e)]:p,[u(`buttonWidth`,e)]:m,[u(`buttonWidthPressed`,e)]:h,[u(`railHeight`,e)]:g,[u(`railWidth`,e)]:_,[u(`railBorderRadius`,e)]:v,[u(`buttonBorderRadius`,e)]:y},common:{cubicBezierEaseInOut:b}}=l.value,x,S,T;return j?(x=`calc((${g} - ${p}) / 2)`,S=`max(${g}, ${p})`,T=`max(${_}, calc(${_} + ${p} - ${g}))`):(x=w((C(g)-C(p))/2),S=w(Math.max(C(g),C(p))),T=C(g)>C(p)?_:w(C(_)+C(p)-C(g))),{"--n-bezier":b,"--n-button-border-radius":y,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":m,"--n-button-width-pressed":h,"--n-button-height":p,"--n-height":S,"--n-offset":x,"--n-opacity-disabled":t,"--n-rail-border-radius":v,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":g,"--n-rail-width":_,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":s,"--n-text-color":c,"--n-icon-color":d}}),R=s?n(`switch`,S(()=>f.value[0]),L,e):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:x,pressed:y,mergedClsPrefix:r,mergedValue:g,checked:v,mergedDisabled:p,cssVars:s?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:t,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:l,unchecked:u,icon:f,"checked-icon":p,"unchecked-icon":m}=o,h=!(s(f)&&s(p)&&s(m));return c(`div`,{role:`switch`,"aria-checked":r,class:[`${t}-switch`,this.themeClass,h&&`${t}-switch--icon`,r&&`${t}-switch--active`,n&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c(`div`,{class:`${t}-switch__rail`,"aria-hidden":`true`,style:i},e(l,n=>e(u,e=>n||e?c(`div`,{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},c(`div`,{class:`${t}-switch__rail-placeholder`},c(`div`,{class:`${t}-switch__button-placeholder`}),n),c(`div`,{class:`${t}-switch__rail-placeholder`},c(`div`,{class:`${t}-switch__button-placeholder`}),e)):null)),c(`div`,{class:`${t}-switch__button`},e(f,n=>e(p,r=>e(m,e=>c(d,null,{default:()=>this.loading?c(g,Object.assign({key:`loading`,clsPrefix:t,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?c(`div`,{class:`${t}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(e||n)?c(`div`,{class:`${t}-switch__button-icon`,key:e?`unchecked-icon`:`icon`},e||n):null})))),e(l,e=>e&&c(`div`,{key:`checked`,class:`${t}-switch__checked`},e)),e(u,e=>e&&c(`div`,{key:`unchecked`,class:`${t}-switch__unchecked`},e)))))}});export{M as t};