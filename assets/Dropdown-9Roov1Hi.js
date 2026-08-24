import{$t as e,An as t,Dt as n,Ft as r,G as i,Jt as a,K as o,Nn as s,On as c,Xt as l,Zt as u,_t as d,bt as f,f as p,ht as m,kn as h,ln as g,lt as _,mt as v,nn as y,o as b,p as x,rn as S,rt as C,st as w,tt as T,ut as E,vn as D,vt as O,yt as k,zt as A}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{a as j,i as M,t as N}from"./Follower-MBfKw7XS.js";import{b as P,r as F,x as I}from"./Tag-BghOFA8u.js";import{a as L,d as ee,f as R,l as z,o as B}from"./src-Bra9AQj3.js";import{$ as te,H as ne,ct as re,et as V,ht as H,it as ie,nt as ae,tt as oe,wt as U,yt as se}from"./index-WDyaG4UX.js";function ce(e={},t){let n=c({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(I(`keydown`,document,a),I(`keyup`,document,o)),t!==void 0&&D(t,e=>{e?(I(`keydown`,document,a),I(`keyup`,document,o)):(P(`keydown`,document,a),P(`keyup`,document,o))})};return R()?(y(s),S(()=>{(t===void 0||t.value)&&(P(`keydown`,document,a),P(`keyup`,document,o))})):s(),h(n)}function le(e,n,r){if(!n)return e;let i=t(e.value),a=null;return D(e,e=>{a!==null&&window.clearTimeout(a),e===!0?r&&!r.value?i.value=!0:a=window.setTimeout(()=>{i.value=!0},n):i.value=!1}),i}function W(e){return t=>{t?e.value=t.$el:e.value=null}}var G=a({name:`ChevronRight`,render(){return l(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},l(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),ue={padding:`4px 0`,optionIconSizeSmall:`14px`,optionIconSizeMedium:`16px`,optionIconSizeLarge:`16px`,optionIconSizeHuge:`18px`,optionSuffixWidthSmall:`14px`,optionSuffixWidthMedium:`14px`,optionSuffixWidthLarge:`16px`,optionSuffixWidthHuge:`16px`,optionIconSuffixWidthSmall:`32px`,optionIconSuffixWidthMedium:`32px`,optionIconSuffixWidthLarge:`36px`,optionIconSuffixWidthHuge:`36px`,optionPrefixWidthSmall:`14px`,optionPrefixWidthMedium:`14px`,optionPrefixWidthLarge:`16px`,optionPrefixWidthHuge:`16px`,optionIconPrefixWidthSmall:`36px`,optionIconPrefixWidthMedium:`36px`,optionIconPrefixWidthLarge:`40px`,optionIconPrefixWidthHuge:`40px`};function de(e){let{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:i,popoverColor:a,invertedColor:o,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:p,heightLarge:m,heightHuge:h,textColor3:g,opacityDisabled:_}=e;return Object.assign(Object.assign({},ue),{optionHeightSmall:f,optionHeightMedium:p,optionHeightLarge:m,optionHeightHuge:h,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:i,optionColorActive:E(t,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:`#BBB`,optionTextColorHoverInverted:`#FFF`,optionTextColorActiveInverted:`#FFF`,optionTextColorChildActiveInverted:`#FFF`,colorInverted:o,dividerColorInverted:`#BBB`,suffixColorInverted:`#BBB`,prefixColorInverted:`#BBB`,optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:`#AAA`,optionOpacityDisabled:_})}var K=p({name:`Dropdown`,common:b,peers:{Popover:ae},self:de}),q=w(`n-dropdown-menu`),J=w(`n-dropdown`),Y=w(`n-dropdown-option`),X=a({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return l(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),fe=a({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=u(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=u(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=l(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),l(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},l(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},H(o.icon)),l(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):H(o.title??o[this.labelField])),l(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function pe(e){return e.type===`group`}function Q(e){return e.type===`divider`}function me(e){return e.type===`render`}var $=a({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let n=u(J),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:v,menuPropsRef:y}=n,b=u(Y,null),x=u(q),S=u(L),C=A(()=>e.tmNode.rawNode),w=A(()=>{let{value:t}=m;return Z(e.tmNode.rawNode,t)}),T=A(()=>{let{disabled:t}=e.tmNode;return t}),E=le(A(()=>{if(!w.value)return!1;let{key:t,disabled:n}=e.tmNode;if(n)return!1;let{value:s}=r,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l!==null&&u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,A(()=>i.value===null&&!c.value)),D=A(()=>!!b?.enteringSubmenuRef.value),O=t(!1);g(Y,{enteringSubmenuRef:O});function k(){O.value=!0}function j(){O.value=!1}function M(){let{parentKey:t,tmNode:n}=e;n.disabled||l.value&&(a.value=t,i.value=null,r.value=n.key)}function N(){let{tmNode:t}=e;t.disabled||l.value&&r.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:n}=t;n&&!U({target:n},`dropdownOption`)&&!U({target:n},`scrollbarRail`)&&(r.value=null)}function F(){let{value:t}=w,{tmNode:r}=e;l.value&&!t&&!r.disabled&&(n.doSelect(r.key,r.rawNode),n.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:y,popoverBody:S,animated:c,mergedShowSubmenu:A(()=>E.value&&!D.value),rawNode:C,hasSubmenu:w,pending:_(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:_(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r<t.length-1}),active:_(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r===t.length-1}),mergedDisabled:T,renderOption:h,nodeProps:v,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:j}},render(){let{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:u,renderOption:d,nodeProps:f,props:p,scrollable:m}=this,h=null;if(i){let e=this.menuProps?.call(this,r,r.children);h=l(_e,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let g={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=f?.(r),v=l(`div`,Object.assign({class:[`${a}-dropdown-option`,_?.class],"data-dropdown-option":!0},_),l(`div`,e(g,p),[l(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[u?u(r):H(r.icon)]),l(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(r):H(r[this.labelField]??r.title)),l(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(ne,null,{default:()=>l(G,null)}):null)]),this.hasSubmenu?l(j,null,{default:()=>[l(M,null,{default:()=>l(`div`,{class:`${a}-dropdown-offset-container`},l(N,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>l(`div`,{class:`${a}-dropdown-menu-wrapper`},t?l(n,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>h}):h)}))})]}):null);return d?d({node:v,option:r}):v}}),he=a({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:i}=e;return l(r,null,l(fe,{clsPrefix:n,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Q(r)?l(X,{clsPrefix:n,key:e.key}):e.isGroup?(C(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):l($,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),ge=a({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return l(`div`,t,[e?.()])}}),_e=a({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:n,childrenFieldRef:r}=u(J);g(q,{showIconRef:A(()=>{let t=n.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>t?t(e):e.icon);let{rawNode:n}=e;return t?t(n):n.icon})}),hasSubmenuRef:A(()=>{let{value:t}=r;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Z(e,t));let{rawNode:n}=e;return Z(n,t)})})});let i=t(null);return g(B,null),g(z,null),g(L,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:me(i)?l(ge,{tmNode:r,key:r.key}):Q(i)?l(X,{clsPrefix:t,key:r.key}):pe(i)?l(he,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):l($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return l(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?l(F,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?oe({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),ve=m(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ie(),m(`dropdown-option`,`
 position: relative;
 `,[v(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[v(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[v(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),k(`disabled`,[O(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[d(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),v(`&::before`,`background-color: var(--n-option-color-hover);`)]),O(`active`,`
 color: var(--n-option-text-color-active);
 `,[d(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),v(`&::before`,`background-color: var(--n-option-color-active);`)]),O(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[d(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),O(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),O(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[d(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[O(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),d(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[O(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),m(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),d(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),d(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[O(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),m(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),m(`dropdown-menu`,`pointer-events: all;`)]),m(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),m(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),m(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),v(`>`,[m(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),k(`scrollable`,`
 padding: var(--n-padding);
 `),O(`scrollable`,[d(`content`,`
 padding: var(--n-padding);
 `)])]),ye={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},be=Object.keys(V),xe=a({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},V),ye),x.props),setup(e){let n=t(!1),r=ee(s(e,`show`),n),a=A(()=>{let{keyField:t,childrenField:n}=e;return re(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),c=A(()=>a.value.treeNodes),l=t(null),u=t(null),d=t(null),p=A(()=>l.value??u.value??d.value??null),m=A(()=>a.value.getPath(p.value).keyPath),h=A(()=>a.value.getPath(e.value).keyPath),v=_(()=>e.keyboard&&r.value);ce({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:I},Escape:j}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:b,mergedComponentPropsRef:S}=o(e),C=A(()=>e.size||S?.value?.Dropdown?.size||`medium`),w=x(`Dropdown`,`-dropdown`,ve,K,e,y);g(J,{labelFieldRef:s(e,`labelField`),childrenFieldRef:s(e,`childrenField`),renderLabelRef:s(e,`renderLabel`),renderIconRef:s(e,`renderIcon`),hoverKeyRef:l,keyboardKeyRef:u,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:m,activeKeyPathRef:h,animatedRef:s(e,`animated`),mergedShowRef:r,nodePropsRef:s(e,`nodeProps`),renderOptionRef:s(e,`renderOption`),menuPropsRef:s(e,`menuProps`),doSelect:E,doUpdateShow:O}),D(r,t=>{!e.animated&&!t&&k()});function E(t,n){let{onSelect:r}=e;r&&T(r,t,n)}function O(t){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&T(r,t),i&&T(i,t),n.value=t}function k(){l.value=null,u.value=null,d.value=null}function j(){O(!1)}function M(){R(`left`)}function N(){R(`right`)}function P(){R(`up`)}function F(){R(`down`)}function I(){let e=L();e?.isLeaf&&r.value&&(E(e.key,e.rawNode),O(!1))}function L(){let{value:e}=a,{value:t}=p;return!e||t===null?null:e.getNode(t)??null}function R(e){let{value:t}=p,{value:{getFirstAvailableNode:n}}=a,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=L();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(l.value=null,u.value=r)}let z=A(()=>{let{inverted:t}=e,n=C.value,{common:{cubicBezierEaseInOut:r},self:i}=w.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[f(`optionIconSuffixWidth`,n)]:l,[f(`optionSuffixWidth`,n)]:u,[f(`optionIconPrefixWidth`,n)]:d,[f(`optionPrefixWidth`,n)]:p,[f(`fontSize`,n)]:m,[f(`optionHeight`,n)]:h,[f(`optionIconSize`,n)]:g}=i,_={"--n-bezier":r,"--n-font-size":m,"--n-padding":a,"--n-border-radius":s,"--n-option-height":h,"--n-option-prefix-width":p,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":g,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),B=b?i(`dropdown`,A(()=>`${C.value[0]}${e.inverted?`i`:``}`),z,e):void 0;return{mergedClsPrefix:y,mergedTheme:w,mergedSize:C,tmNodes:c,mergedShow:r,handleAfterLeave:()=>{e.animated&&k()},doUpdateShow:O,cssVars:b?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let t=(t,n,r,i,a)=>{var o;let{mergedClsPrefix:s,menuProps:c}=this;(o=this.onRender)==null||o.call(this);let u=c?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:W(n),class:[t,`${s}-dropdown`,`${s}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:s,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return l(_e,e(this.$attrs,d,u))},{mergedTheme:n}=this,r={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:t,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(te,Object.assign({},se(this.$props,be),r),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{W as i,K as n,G as r,xe as t};