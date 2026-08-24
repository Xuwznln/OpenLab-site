import{$ as e,An as t,G as n,Jt as r,K as i,Nn as a,St as o,W as s,Xt as c,Zt as l,_t as u,bt as d,d as f,g as p,ht as m,ln as h,lt as g,mt as _,o as v,p as y,st as b,tt as x,u as S,ut as C,vt as w,xt as T,zt as E}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{x as D}from"./Tag-BghOFA8u.js";import{t as O}from"./misc-DDs3MKLt.js";import{d as k}from"./src-Bra9AQj3.js";var A={sizeSmall:`14px`,sizeMedium:`16px`,sizeLarge:`18px`,labelPadding:`0 8px`,labelFontWeight:`400`};function j(e){let{baseColor:t,inputColorDisabled:n,cardColor:r,modalColor:i,popoverColor:a,textColorDisabled:o,borderColor:s,primaryColor:c,textColor2:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadiusSmall:p,lineHeight:m}=e;return Object.assign(Object.assign({},A),{labelLineHeight:m,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadius:p,color:t,colorChecked:c,colorDisabled:n,colorDisabledChecked:n,colorTableHeader:r,colorTableHeaderModal:i,colorTableHeaderPopover:a,checkMarkColor:t,checkMarkColorDisabled:o,checkMarkColorDisabledChecked:o,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${c}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${C(c,{alpha:.3})}`,textColor:l,textColorDisabled:o})}var M={name:`Checkbox`,common:v,self:j},N=b(`n-checkbox-group`),P=r({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){let{mergedClsPrefixRef:n}=i(e),r=s(e),{mergedSizeRef:o,mergedDisabledRef:c}=r,l=t(e.defaultValue),u=k(E(()=>e.value),l),d=E(()=>u.value?.length||0),f=E(()=>Array.isArray(u.value)?new Set(u.value):new Set);function p(t,n){let{nTriggerFormInput:i,nTriggerFormChange:a}=r,{onChange:o,"onUpdate:value":s,onUpdateValue:c}=e;if(Array.isArray(u.value)){let e=Array.from(u.value),r=e.findIndex(e=>e===n);t?~r||(e.push(n),c&&x(c,e,{actionType:`check`,value:n}),s&&x(s,e,{actionType:`check`,value:n}),i(),a(),l.value=e,o&&x(o,e)):~r&&(e.splice(r,1),c&&x(c,e,{actionType:`uncheck`,value:n}),s&&x(s,e,{actionType:`uncheck`,value:n}),o&&x(o,e),l.value=e,i(),a())}else t?(c&&x(c,[n],{actionType:`check`,value:n}),s&&x(s,[n],{actionType:`check`,value:n}),o&&x(o,[n]),l.value=[n],i(),a()):(c&&x(c,[],{actionType:`uncheck`,value:n}),s&&x(s,[],{actionType:`uncheck`,value:n}),o&&x(o,[]),l.value=[],i(),a())}return h(N,{checkedCountRef:d,maxRef:a(e,`max`),minRef:a(e,`min`),valueSetRef:f,disabledRef:c,mergedSizeRef:o,toggleCheckbox:p}),{mergedClsPrefix:n}},render(){return c(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}}),F=()=>c(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},c(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})),I=()=>c(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},c(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),L=_([m(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[w(`show-label`,`line-height: var(--n-label-line-height);`),_(`&:hover`,[m(`checkbox-box`,[u(`border`,`border: var(--n-border-checked);`)])]),_(`&:focus:not(:active)`,[m(`checkbox-box`,[u(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),w(`inside-table`,[m(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),w(`checked`,[m(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[m(`checkbox-icon`,[_(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),w(`indeterminate`,[m(`checkbox-box`,[m(`checkbox-icon`,[_(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),_(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),w(`checked, indeterminate`,[_(`&:focus:not(:active)`,[m(`checkbox-box`,[u(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),m(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[u(`border`,{border:`var(--n-border-checked)`})])]),w(`disabled`,{cursor:`not-allowed`},[w(`checked`,[m(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[u(`border`,{border:`var(--n-border-disabled-checked)`}),m(`checkbox-icon`,[_(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),m(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[u(`border`,`
 border: var(--n-border-disabled);
 `),m(`checkbox-icon`,[_(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),u(`label`,`
 color: var(--n-text-color-disabled);
 `)]),m(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),m(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[u(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),m(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[_(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),S({left:`1px`,top:`1px`})])]),u(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[_(`&:empty`,{display:`none`})])]),T(m(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),o(m(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),R=r({name:`Checkbox`,props:Object.assign(Object.assign({},y.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(e){let r=l(N,null),o=t(null),{mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:f,mergedComponentPropsRef:m}=i(e),h=t(e.defaultChecked),_=k(a(e,`checked`),h),v=g(()=>{if(r){let t=r.valueSetRef.value;return t&&e.value!==void 0?t.has(e.value):!1}else return _.value===e.checkedValue}),b=s(e,{mergedSize(t){let{size:n}=e;if(n!==void 0)return n;if(r){let{value:e}=r.mergedSizeRef;if(e!==void 0)return e}if(t){let{mergedSize:e}=t;if(e!==void 0)return e.value}return m?.value?.Checkbox?.size||`medium`},mergedDisabled(t){let{disabled:n}=e;if(n!==void 0)return n;if(r){if(r.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:t}=r;if(e!==void 0&&t.value>=e&&!v.value)return!0;let{minRef:{value:n}}=r;if(n!==void 0&&t.value<=n&&v.value)return!0}return t?t.disabled.value:!1}}),{mergedDisabledRef:S,mergedSizeRef:C}=b,w=y(`Checkbox`,`-checkbox`,L,M,e,c);function T(t){if(r&&e.value!==void 0)r.toggleCheckbox(!v.value,e.value);else{let{onChange:n,"onUpdate:checked":r,onUpdateChecked:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=b,s=v.value?e.uncheckedValue:e.checkedValue;r&&x(r,s,t),i&&x(i,s,t),n&&x(n,s,t),a(),o(),h.value=s}}function D(e){S.value||T(e)}function A(e){if(!S.value)switch(e.key){case` `:case`Enter`:T(e)}}function j(e){switch(e.key){case` `:e.preventDefault()}}let P={focus:()=>{var e;(e=o.value)==null||e.focus()},blur:()=>{var e;(e=o.value)==null||e.blur()}},F=p(`Checkbox`,f,c),I=E(()=>{let{value:e}=C,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:f,borderFocus:p,borderDisabled:m,borderChecked:h,boxShadowFocus:g,textColor:_,textColorDisabled:v,checkMarkColorDisabledChecked:y,colorDisabledChecked:b,borderDisabledChecked:x,labelPadding:S,labelLineHeight:T,labelFontWeight:E,[d(`fontSize`,e)]:D,[d(`size`,e)]:O}}=w.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":f,"--n-border-checked":h,"--n-border-focus":p,"--n-border-disabled":m,"--n-border-disabled-checked":x,"--n-box-shadow-focus":g,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":b,"--n-text-color":_,"--n-text-color-disabled":v,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":y,"--n-font-size":D,"--n-label-padding":S}}),R=u?n(`checkbox`,E(()=>C.value[0]),I,e):void 0;return Object.assign(b,P,{rtlEnabled:F,selfRef:o,mergedClsPrefix:c,mergedDisabled:S,renderedChecked:v,mergedTheme:w,labelId:O(),handleClick:D,handleKeyUp:A,handleKeyDown:j,cssVars:u?void 0:I,themeClass:R?.themeClass,onRender:R?.onRender})},render(){var t;let{$slots:n,renderedChecked:r,mergedDisabled:i,indeterminate:a,privateInsideTable:o,cssVars:s,labelId:l,label:u,mergedClsPrefix:d,focusable:p,handleKeyUp:m,handleKeyDown:h,handleClick:g}=this;(t=this.onRender)==null||t.call(this);let _=e(n.default,e=>u||e?c(`span`,{class:`${d}-checkbox__label`,id:l},u||e):null);return c(`div`,{ref:`selfRef`,class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,r&&`${d}-checkbox--checked`,i&&`${d}-checkbox--disabled`,a&&`${d}-checkbox--indeterminate`,o&&`${d}-checkbox--inside-table`,_&&`${d}-checkbox--show-label`],tabindex:i||!p?void 0:0,role:`checkbox`,"aria-checked":a?`mixed`:r,"aria-labelledby":l,style:s,onKeyup:m,onKeydown:h,onClick:g,onMousedown:()=>{D(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},c(`div`,{class:`${d}-checkbox-box-wrapper`},`\xA0`,c(`div`,{class:`${d}-checkbox-box`},c(f,null,{default:()=>this.indeterminate?c(`div`,{key:`indeterminate`,class:`${d}-checkbox-icon`},I()):c(`div`,{key:`check`,class:`${d}-checkbox-icon`},F())}),c(`div`,{class:`${d}-checkbox-box__border`}))),_)}});export{P as n,M as r,R as t};