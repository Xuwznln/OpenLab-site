import{$ as e,$t as t,An as n,Ft as r,G as i,H as a,Jt as o,K as s,L as c,Nn as l,Ot as u,Rt as d,Xt as f,Zt as p,_t as m,at as h,bt as g,en as _,ht as v,jt as y,ln as b,mt as x,nt as S,o as C,on as ee,p as w,st as T,tt as E,vn as D,vt as O,xn as k,yn as te,yt as A,zt as j}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{l as ne,n as M,r as re}from"./Follower-MBfKw7XS.js";import{S as ie,c as ae,f as N,o as P,v as F,w as I}from"./Tag-BghOFA8u.js";import{d as oe}from"./src-Bra9AQj3.js";import{t as se}from"./use-compitable-CHveS5BE.js";import{t as L}from"./Add-L-XQkJDz.js";import{gt as R,ht as z,xt as B}from"./index-WDyaG4UX.js";var ce=M(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[M(`&::-webkit-scrollbar`,{width:0,height:0})]),le=o({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=n(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let r=h();return ce.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:re,ssr:r}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return f(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),ue=/\s/;function V(e){for(var t=e.length;t--&&ue.test(e.charAt(t)););return t}var H=/^\s+/;function de(e){return e&&e.slice(0,V(e)+1).replace(H,``)}var U=NaN,fe=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,G=/^0o[0-7]+$/i,K=parseInt;function q(e){if(typeof e==`number`)return e;if(N(e))return U;if(c(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=c(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=de(e);var n=W.test(e);return n||G.test(e)?K(e.slice(2),n?2:8):fe.test(e)?U:+e}var J=function(){return a.Date.now()},pe=`Expected a function`,me=Math.max,Y=Math.min;function he(e,t,n){var r,i,a,o,s,l,u=0,d=!1,f=!1,p=!0;if(typeof e!=`function`)throw TypeError(pe);t=q(t)||0,c(n)&&(d=!!n.leading,f=`maxWait`in n,a=f?me(q(n.maxWait)||0,t):a,p=`trailing`in n?!!n.trailing:p);function m(t){var n=r,a=i;return r=i=void 0,u=t,o=e.apply(a,n),o}function h(e){return u=e,s=setTimeout(v,t),d?m(e):o}function g(e){var n=e-l,r=e-u,i=t-n;return f?Y(i,a-r):i}function _(e){var n=e-l,r=e-u;return l===void 0||n>=t||n<0||f&&r>=a}function v(){var e=J();if(_(e))return y(e);s=setTimeout(v,g(e))}function y(e){return s=void 0,p&&r?m(e):(r=i=void 0,o)}function b(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function x(){return s===void 0?o:y(J())}function S(){var e=J(),n=_(e);if(r=arguments,i=this,l=e,n){if(s===void 0)return h(l);if(f)return clearTimeout(s),s=setTimeout(v,t),m(l)}return s===void 0&&(s=setTimeout(v,t)),o}return S.cancel=b,S.flush=x,S}var ge=`Expected a function`;function _e(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ge);return c(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),he(e,t,{leading:r,maxWait:t,trailing:i})}var X={tabFontSizeSmall:`14px`,tabFontSizeMedium:`14px`,tabFontSizeLarge:`16px`,tabGapSmallLine:`36px`,tabGapMediumLine:`36px`,tabGapLargeLine:`36px`,tabGapSmallLineVertical:`8px`,tabGapMediumLineVertical:`8px`,tabGapLargeLineVertical:`8px`,tabPaddingSmallLine:`6px 0`,tabPaddingMediumLine:`10px 0`,tabPaddingLargeLine:`14px 0`,tabPaddingVerticalSmallLine:`6px 12px`,tabPaddingVerticalMediumLine:`8px 16px`,tabPaddingVerticalLargeLine:`10px 20px`,tabGapSmallBar:`36px`,tabGapMediumBar:`36px`,tabGapLargeBar:`36px`,tabGapSmallBarVertical:`8px`,tabGapMediumBarVertical:`8px`,tabGapLargeBarVertical:`8px`,tabPaddingSmallBar:`4px 0`,tabPaddingMediumBar:`6px 0`,tabPaddingLargeBar:`10px 0`,tabPaddingVerticalSmallBar:`6px 12px`,tabPaddingVerticalMediumBar:`8px 16px`,tabPaddingVerticalLargeBar:`10px 20px`,tabGapSmallCard:`4px`,tabGapMediumCard:`4px`,tabGapLargeCard:`4px`,tabGapSmallCardVertical:`4px`,tabGapMediumCardVertical:`4px`,tabGapLargeCardVertical:`4px`,tabPaddingSmallCard:`8px 16px`,tabPaddingMediumCard:`10px 20px`,tabPaddingLargeCard:`12px 24px`,tabPaddingSmallSegment:`4px 0`,tabPaddingMediumSegment:`6px 0`,tabPaddingLargeSegment:`8px 0`,tabPaddingVerticalLargeSegment:`0 8px`,tabPaddingVerticalSmallCard:`8px 12px`,tabPaddingVerticalMediumCard:`10px 16px`,tabPaddingVerticalLargeCard:`12px 20px`,tabPaddingVerticalSmallSegment:`0 4px`,tabPaddingVerticalMediumSegment:`0 6px`,tabGapSmallSegment:`0`,tabGapMediumSegment:`0`,tabGapLargeSegment:`0`,tabGapSmallSegmentVertical:`0`,tabGapMediumSegmentVertical:`0`,tabGapLargeSegmentVertical:`0`,panePaddingSmall:`8px 0 0 0`,panePaddingMedium:`12px 0 0 0`,panePaddingLarge:`16px 0 0 0`,closeSize:`18px`,closeIconSize:`14px`};function ve(e){let{textColor2:t,primaryColor:n,textColorDisabled:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,tabColor:l,baseColor:u,dividerColor:d,fontWeight:f,textColor1:p,borderRadius:m,fontSize:h,fontWeightStrong:g}=e;return Object.assign(Object.assign({},X),{colorSegment:l,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:r,barColor:n,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,closeBorderRadius:m,tabColor:l,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:m,paneTextColor:t,fontWeightStrong:g})}var ye={name:`Tabs`,common:C,self:ve},Z=T(`n-tabs`),Q={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},be=o({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Q,slots:Object,setup(e){let t=p(Z,null);return t||S(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return f(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),$=o({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},R(Q,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:m,handleClose:h}=p(Z);return{trigger:d,mergedClosable:j(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:n,name:i,disabled:a,label:o,tab:s,value:c,mergedClosable:l,trigger:u,$slots:{default:d}}=this,p=o??s;return f(`div`,{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?f(`div`,{class:`${n}-tabs-tab-pad`}):null,f(`div`,Object.assign({key:i,"data-name":i,"data-disabled":a?!0:void 0},t({class:[`${n}-tabs-tab`,c===i&&`${n}-tabs-tab--active`,a&&`${n}-tabs-tab--disabled`,l&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),f(`span`,{class:`${n}-tabs-tab__label`},e?f(r,null,f(`div`,{class:`${n}-tabs-tab__height-placeholder`},`\xA0`),f(ae,{clsPrefix:n},{default:()=>f(L,null)})):d?d():typeof p==`object`?p:z(p??i)),l&&this.type===`card`?f(P,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:a}):null))}}),xe=v(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[O(`segment-type`,[v(`tabs-rail`,[x(`&.transition-disabled`,[v(`tabs-capsule`,`
 transition: none;
 `)])])]),O(`top`,[v(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),O(`left`,[v(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),O(`left, right`,`
 flex-direction: row;
 `,[v(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),v(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),O(`right`,`
 flex-direction: row-reverse;
 `,[v(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),v(`tabs-bar`,`
 left: 0;
 `)]),O(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[v(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),v(`tabs-bar`,`
 top: 0;
 `)]),v(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),v(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[O(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),x(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),O(`flex`,[v(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[v(`tabs-wrapper`,`
 width: 100%;
 `,[v(`tabs-tab`,`
 margin-right: 0;
 `)])])]),v(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[m(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),m(`prefix`,`padding-right: 16px;`),m(`suffix`,`padding-left: 16px;`)]),O(`top, bottom`,[x(`>`,[v(`tabs-nav`,[v(`tabs-nav-scroll-wrapper`,[x(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),x(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),O(`shadow-start`,[x(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[x(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),O(`left, right`,[v(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),x(`>`,[v(`tabs-nav`,[v(`tabs-nav-scroll-wrapper`,[x(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),x(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),O(`shadow-start`,[x(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),O(`shadow-end`,[x(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),v(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[v(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[x(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),x(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),v(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),v(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),v(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),v(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[O(`disabled`,{cursor:`not-allowed`}),m(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),m(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),v(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x(`&.transition-disabled`,`
 transition: none;
 `),O(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),v(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),v(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[x(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),x(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),x(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),x(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),x(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),v(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),O(`line-type, bar-type`,[v(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[x(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),O(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),O(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),v(`tabs-nav`,[O(`line-type`,[O(`top`,[m(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v(`tabs-bar`,`
 bottom: -1px;
 `)]),O(`left`,[m(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),v(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),v(`tabs-bar`,`
 right: -1px;
 `)]),O(`right`,[m(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),v(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),v(`tabs-bar`,`
 left: -1px;
 `)]),O(`bottom`,[m(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),v(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),v(`tabs-bar`,`
 top: -1px;
 `)]),m(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),v(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),v(`tabs-bar`,`
 border-radius: 0;
 `)]),O(`card-type`,[m(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),v(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),v(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),v(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[O(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[m(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),A(`disabled`,[x(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),O(`closable`,`padding-right: 8px;`),O(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),O(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),O(`left, right`,`
 flex-direction: column; 
 `,[m(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),v(`tabs-wrapper`,`
 flex-direction: column;
 `),v(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[v(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),O(`top`,[O(`card-type`,[v(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),m(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-bottom: 1px solid #0000;
 `)]),v(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),O(`left`,[O(`card-type`,[v(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),m(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),v(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-right: 1px solid #0000;
 `)]),v(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),v(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),O(`right`,[O(`card-type`,[v(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),m(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),v(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-left: 1px solid #0000;
 `)]),v(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),v(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),O(`bottom`,[O(`card-type`,[v(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),m(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),v(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[O(`active`,`
 border-top: 1px solid #0000;
 `)]),v(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),v(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Se=_e,Ce=o({name:`Tabs`,props:Object.assign(Object.assign({},w.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedComponentPropsRef:o}=s(e),c=w(`Tabs`,`-tabs`,xe,ye,e,r),u=n(null),d=n(null),f=n(null),p=n(null),m=n(null),h=n(null),v=n(!0),y=n(!0),x=se(e,[`labelSize`,`size`]),S=j(()=>x.value?x.value:o?.value?.Tabs?.size||`medium`),C=se(e,[`activeName`,`value`]),T=n(C.value??e.defaultValue??(t.default?B(t.default())[0]?.props?.name:null)),O=oe(C,T),k={id:0},A=j(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});D(O,()=>{k.id=0,P(),F()});function M(){let{value:e}=O;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function re(t){if(e.type===`card`)return;let{value:n}=d;if(!n)return;let i=n.style.opacity===`0`;if(t){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(N([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(N([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function ae(){if(e.type===`card`)return;let{value:t}=d;t&&(t.style.opacity=`0`)}function N(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function P(){if(e.type===`card`)return;let t=M();t?re(t):ae()}function F(){let e=m.value?.$el;if(!e)return;let t=M();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let L=n(null),R=0,z=null;function ce(e){let t=L.value;if(t){R=e.getBoundingClientRect().height;let n=`${R}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};z?(r(),z(),z=null):z=r}}function le(e){let t=L.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(R,n)}px`};z?(z(),z=null,r()):z=r}}function ue(){let t=L.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let V={value:[]},H=n(`next`);function de(e){let t=O.value,n=`next`;for(let r of V.value){if(r===t)break;if(r===e){n=`prev`;break}}H.value=n,U(e)}function U(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&E(n,t),r&&E(r,t),i&&E(i,t),T.value=t}function fe(t){let{onClose:n}=e;n&&E(n,t)}let W=!0;function G(){let{value:e}=d;if(!e)return;W||=!1;let t=`transition-disabled`;e.classList.add(t),P(),e.classList.remove(t)}let K=n(null);function q({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=M();n&&K.value&&(K.value.style.width=`${n.offsetWidth}px`,K.value.style.height=`${n.offsetHeight}px`,K.value.style.transform=`translateX(${n.offsetLeft-ie(getComputedStyle(t).paddingLeft)}px)`,e&&K.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}D([O],()=>{e.type===`segment`&&_(()=>{q({transitionDisabled:!1})})}),ee(()=>{e.type===`segment`&&q({transitionDisabled:!0})});let J=0;function pe(t){if(t.contentRect.width===0&&t.contentRect.height===0||J===t.contentRect.width)return;J=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(W||e.justifyContent?.startsWith(`space`))&&G(),n!==`segment`){let{placement:t}=e;X((t===`top`||t===`bottom`?m.value?.$el:h.value)||null)}}let me=Se(pe,64);D([()=>e.justifyContent,()=>e.size],()=>{_(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&G()})});let Y=n(!1);function he(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!Y.value)s===`top`||s===`bottom`?a<r&&(Y.value=!0):o<i&&(Y.value=!0);else{let{value:e}=p;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(Y.value=!1):o-i>e.$el.offsetHeight&&(Y.value=!1)}X(m.value?.$el||null)}let ge=Se(he,64);function _e(){let{onAdd:t}=e;t&&t(),_(()=>{let e=M(),{value:t}=m;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function X(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;v.value=e<=0,y.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;v.value=e<=0,y.value=e+r>=n}}let ve=Se(e=>{X(e.target)},64);b(Z,{triggerRef:l(e,`trigger`),tabStyleRef:l(e,`tabStyle`),tabClassRef:l(e,`tabClass`),addTabStyleRef:l(e,`addTabStyle`),addTabClassRef:l(e,`addTabClass`),paneClassRef:l(e,`paneClass`),paneStyleRef:l(e,`paneStyle`),mergedClsPrefixRef:r,typeRef:l(e,`type`),closableRef:l(e,`closable`),valueRef:O,tabChangeIdRef:k,onBeforeLeaveRef:l(e,`onBeforeLeave`),activateTab:de,handleClose:fe,handleAdd:_e}),ne(()=>{P(),F()}),te(()=>{let{value:e}=f;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;v.value?e.classList.remove(n):e.classList.add(n),y.value?e.classList.remove(i):e.classList.add(i)});let Q={syncBarPosition:()=>{P()}},be=()=>{q({transitionDisabled:!0})},$=j(()=>{let{value:t}=S,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:_,tabColorSegment:v,closeSize:y,closeIconSize:b,closeColorHover:x,closeColorPressed:C,closeBorderRadius:ee,[g(`panePadding`,t)]:w,[g(`tabPadding`,r)]:T,[g(`tabPaddingVertical`,r)]:E,[g(`tabGap`,r)]:D,[g(`tabGap`,`${r}Vertical`)]:O,[g(`tabTextColor`,n)]:k,[g(`tabTextColorActive`,n)]:te,[g(`tabTextColorHover`,n)]:A,[g(`tabTextColorDisabled`,n)]:j,[g(`tabFontSize`,t)]:ne},common:{cubicBezierEaseInOut:M}}=c.value;return{"--n-bezier":M,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":ne,"--n-tab-text-color":k,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":y,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":C,"--n-close-border-radius":ee,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":I(w,`left`),"--n-pane-padding-right":I(w,`right`),"--n-pane-padding-top":I(w,`top`),"--n-pane-padding-bottom":I(w,`bottom`),"--n-font-weight-strong":_,"--n-tab-color-segment":v}}),Ce=a?i(`tabs`,j(()=>`${S.value[0]}${e.type[0]}`),$,e):void 0;return Object.assign({mergedClsPrefix:r,mergedValue:O,renderedNames:new Set,segmentCapsuleElRef:K,tabsPaneWrapperRef:L,tabsElRef:u,barElRef:d,addTabInstRef:p,xScrollInstRef:m,scrollWrapperElRef:f,addTabFixed:Y,tabWrapperStyle:A,handleNavResize:me,mergedSize:S,handleScroll:ve,handleTabsResize:ge,cssVars:a?void 0:$,themeClass:Ce?.themeClass,animationDirection:H,renderNameListRef:V,yScrollElRef:h,handleSegmentResize:be,onAnimationBeforeLeave:ce,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:Ce?.onRender},Q)},render(){let{mergedClsPrefix:t,type:n,placement:r,addTabFixed:i,addable:a,mergedSize:o,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:p,suffix:m}}=this;c?.();let h=d?B(d()).filter(e=>e.type.__TAB_PANE__===!0):[],g=d?B(d()).filter(e=>e.type.__TAB__===!0):[],_=!g.length,v=n===`card`,y=n===`segment`,b=!v&&!y&&this.justifyContent;s.value=[];let x=()=>{let e=f(`div`,{style:this.tabWrapperStyle,class:`${t}-tabs-wrapper`},b?null:f(`div`,{class:`${t}-tabs-scroll-padding`,style:r===`top`||r===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),_?h.map((e,t)=>(s.value.push(e.props.name),De(f($,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!b||b===`center`||b===`start`||b===`end`)}),e.children?{default:e.children.tab}:void 0)))):g.map((e,t)=>(s.value.push(e.props.name),De(t!==0&&!b?Ee(e):e))),!i&&a&&v?Te(a,(_?h.length:g.length)!==0):null,b?null:f(`div`,{class:`${t}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return f(`div`,{ref:`tabsElRef`,class:`${t}-tabs-nav-scroll-content`},v&&a?f(F,{onResize:this.handleTabsResize},{default:()=>e}):e,v?f(`div`,{class:`${t}-tabs-pad`}):null,v?null:f(`div`,{ref:`barElRef`,class:`${t}-tabs-bar`}))},S=y?`top`:r;return f(`div`,{class:[`${t}-tabs`,this.themeClass,`${t}-tabs--${n}-type`,`${t}-tabs--${o}-size`,b&&`${t}-tabs--flex`,`${t}-tabs--${S}`],style:this.cssVars},f(`div`,{class:[`${t}-tabs-nav--${n}-type`,`${t}-tabs-nav--${S}`,`${t}-tabs-nav`]},e(p,e=>e&&f(`div`,{class:`${t}-tabs-nav__prefix`},e)),y?f(F,{onResize:this.handleSegmentResize},{default:()=>f(`div`,{class:`${t}-tabs-rail`,ref:`tabsElRef`},f(`div`,{class:`${t}-tabs-capsule`,ref:`segmentCapsuleElRef`},f(`div`,{class:`${t}-tabs-wrapper`},f(`div`,{class:`${t}-tabs-tab`}))),_?h.map((e,t)=>(s.value.push(e.props.name),f($,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):g.map((e,t)=>(s.value.push(e.props.name),t===0?e:Ee(e))))}):f(F,{onResize:this.handleNavResize},{default:()=>f(`div`,{class:`${t}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?f(le,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):f(`div`,{class:`${t}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),i&&a&&v?Te(a,!0):null,e(m,e=>e&&f(`div`,{class:`${t}-tabs-nav__suffix`},e))),_&&(this.animated&&(S===`top`||S===`bottom`)?f(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${t}-tabs-pane-wrapper`,l]},we(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(h,this.mergedValue,this.renderedNames)))}});function we(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?k(e,[[y,c]]):e)}}),o?f(u,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Te(e,t){return f($,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ee(e){let t=d(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function De(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{be as n,Ce as t};