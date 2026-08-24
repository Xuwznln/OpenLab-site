import{G as e,Jt as t,K as n,St as r,Xt as i,bt as a,dt as o,g as s,ht as c,mt as l,o as u,p as d,vt as f,xt as p,yt as m,zt as h}from"./_plugin-vue_export-helper-CRO0dx8O.js";var g={thPaddingSmall:`6px`,thPaddingMedium:`12px`,thPaddingLarge:`12px`,tdPaddingSmall:`6px`,tdPaddingMedium:`12px`,tdPaddingLarge:`12px`};function _(e){let{dividerColor:t,cardColor:n,modalColor:r,popoverColor:i,tableHeaderColor:a,tableColorStriped:s,textColor1:c,textColor2:l,borderRadius:u,fontWeightStrong:d,lineHeight:f,fontSizeSmall:p,fontSizeMedium:m,fontSizeLarge:h}=e;return Object.assign(Object.assign({},g),{fontSizeSmall:p,fontSizeMedium:m,fontSizeLarge:h,lineHeight:f,borderRadius:u,borderColor:o(n,t),borderColorModal:o(r,t),borderColorPopover:o(i,t),tdColor:n,tdColorModal:r,tdColorPopover:i,tdColorStriped:o(n,s),tdColorStripedModal:o(r,s),tdColorStripedPopover:o(i,s),thColor:o(n,a),thColorModal:o(r,a),thColorPopover:o(i,a),thTextColor:c,tdTextColor:l,thFontWeight:d})}var v={name:`Table`,common:u,self:_},y=l([c(`table`,`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[l(`th`,`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[l(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),l(`td`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[l(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),f(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[l(`tr`,[l(`&:last-child`,[l(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),f(`single-line`,[l(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),l(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),f(`single-column`,[l(`tr`,[l(`&:not(:last-child)`,[l(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),f(`striped`,[l(`tr:nth-of-type(even)`,[l(`td`,`background-color: var(--n-td-color-striped)`)])]),m(`bottom-bordered`,[l(`tr`,[l(`&:last-child`,[l(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),p(c(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[l(`th`,`
 background-color: var(--n-th-color-modal);
 `),l(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),r(c(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[l(`th`,`
 background-color: var(--n-th-color-popover);
 `),l(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),b=t({name:`Table`,props:Object.assign(Object.assign({},d.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o,mergedComponentPropsRef:c}=n(t),l=h(()=>t.size||c?.value?.Table?.size||`medium`),u=d(`Table`,`-table`,y,v,t,r),f=s(`Table`,o,r),p=h(()=>{let e=l.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:i,thColor:o,thColorModal:s,thColorPopover:c,thTextColor:d,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[a(`fontSize`,e)]:x,[a(`tdPadding`,e)]:S,[a(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=u.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":i,"--n-td-text-color":f,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":o,"--n-th-color-modal":s,"--n-th-color-popover":c,"--n-th-font-weight":m,"--n-th-text-color":d,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),m=i?e(`table`,h(()=>l.value[0]),p,t):void 0;return{rtlEnabled:f,mergedClsPrefix:r,cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),i(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{b as t};