import{G as e,Jt as t,K as n,St as r,Xt as i,_t as a,bt as o,dt as s,ht as c,mt as l,o as u,p as d,vt as f,xt as p,yt as m,zt as h}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{n as g}from"./misc-DDs3MKLt.js";import{t as _}from"./use-compitable-CHveS5BE.js";import{bt as v,xt as y}from"./index-WDyaG4UX.js";function b(e,t=`default`,n=[]){let{children:r}=e;if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r[t];if(typeof e==`function`)return e()}return n}var x={thPaddingBorderedSmall:`8px 12px`,thPaddingBorderedMedium:`12px 16px`,thPaddingBorderedLarge:`16px 24px`,thPaddingSmall:`0`,thPaddingMedium:`0`,thPaddingLarge:`0`,tdPaddingBorderedSmall:`8px 12px`,tdPaddingBorderedMedium:`12px 16px`,tdPaddingBorderedLarge:`16px 24px`,tdPaddingSmall:`0 0 8px 0`,tdPaddingMedium:`0 0 12px 0`,tdPaddingLarge:`0 0 16px 0`};function S(e){let{tableHeaderColor:t,textColor2:n,textColor1:r,cardColor:i,modalColor:a,popoverColor:o,dividerColor:c,borderRadius:l,fontWeightStrong:u,lineHeight:d,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:m}=e;return Object.assign(Object.assign({},x),{lineHeight:d,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:m,titleTextColor:r,thColor:s(i,t),thColorModal:s(a,t),thColorPopover:s(o,t),thTextColor:r,thFontWeight:u,tdTextColor:n,tdColor:i,tdColorModal:a,tdColorPopover:o,borderColor:s(i,c),borderColorModal:s(a,c),borderColorPopover:s(o,c),borderRadius:l})}var C={name:`Descriptions`,common:u,self:S},w=l([c(`descriptions`,{fontSize:`var(--n-font-size)`},[c(`descriptions-separator`,`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),c(`descriptions-table-wrapper`,[c(`descriptions-table`,[c(`descriptions-table-row`,[c(`descriptions-table-header`,{padding:`var(--n-th-padding)`}),c(`descriptions-table-content`,{padding:`var(--n-td-padding)`})])])]),m(`bordered`,[c(`descriptions-table-wrapper`,[c(`descriptions-table`,[c(`descriptions-table-row`,[l(`&:last-child`,[c(`descriptions-table-content`,{paddingBottom:0})])])])])]),f(`left-label-placement`,[c(`descriptions-table-content`,[l(`> *`,{verticalAlign:`top`})])]),f(`left-label-align`,[l(`th`,{textAlign:`left`})]),f(`center-label-align`,[l(`th`,{textAlign:`center`})]),f(`right-label-align`,[l(`th`,{textAlign:`right`})]),f(`bordered`,[c(`descriptions-table-wrapper`,`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[c(`descriptions-table`,[c(`descriptions-table-row`,[l(`&:not(:last-child)`,[c(`descriptions-table-content`,{borderBottom:`1px solid var(--n-merged-border-color)`}),c(`descriptions-table-header`,{borderBottom:`1px solid var(--n-merged-border-color)`})]),c(`descriptions-table-header`,`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[l(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})]),c(`descriptions-table-content`,[l(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})])])])])]),c(`descriptions-header`,`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),c(`descriptions-table-wrapper`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c(`descriptions-table`,`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[c(`descriptions-table-row`,`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[c(`descriptions-table-header`,`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),c(`descriptions-table-content`,`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[a(`content`,`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),a(`label`,`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),p(c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),r(c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),T=`DESCRIPTION_ITEM_FLAG`;function E(e){return typeof e==`object`&&e&&!Array.isArray(e)?e.type&&e.type.DESCRIPTION_ITEM_FLAG:!1}var D=t({name:`Descriptions`,props:Object.assign(Object.assign({},d.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:`top`},labelAlign:{type:String,default:`left`},separator:{type:String,default:`:`},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=n(t),s=h(()=>t.size||a?.value?.Descriptions?.size||`medium`),c=d(`Descriptions`,`-descriptions`,w,C,t,r),l=h(()=>{let{bordered:e}=t,n=s.value,{common:{cubicBezierEaseInOut:r},self:{titleTextColor:i,thColor:a,thColorModal:l,thColorPopover:u,thTextColor:d,thFontWeight:f,tdTextColor:p,tdColor:m,tdColorModal:h,tdColorPopover:g,borderColor:_,borderColorModal:v,borderColorPopover:y,borderRadius:b,lineHeight:x,[o(`fontSize`,n)]:S,[o(e?`thPaddingBordered`:`thPadding`,n)]:C,[o(e?`tdPaddingBordered`:`tdPadding`,n)]:w}}=c.value;return{"--n-title-text-color":i,"--n-th-padding":C,"--n-td-padding":w,"--n-font-size":S,"--n-bezier":r,"--n-th-font-weight":f,"--n-line-height":x,"--n-th-text-color":d,"--n-td-text-color":p,"--n-th-color":a,"--n-th-color-modal":l,"--n-th-color-popover":u,"--n-td-color":m,"--n-td-color-modal":h,"--n-td-color-popover":g,"--n-border-radius":b,"--n-border-color":_,"--n-border-color-modal":v,"--n-border-color-popover":y}}),u=i?e(`descriptions`,h(()=>{let e=``,{bordered:n}=t;return n&&(e+=`a`),e+=s.value[0],e}),l,t):void 0;return{mergedClsPrefix:r,cssVars:i?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender,compitableColumn:_(t,[`columns`,`column`]),inlineThemeDisabled:i,mergedSize:s}},render(){let e=this.$slots.default,t=e?y(e()):[];t.length;let{contentClass:n,labelClass:r,compitableColumn:a,labelPlacement:o,labelAlign:s,mergedSize:c,bordered:l,title:u,cssVars:d,mergedClsPrefix:f,separator:p,onRender:m}=this;m?.();let h=t.filter(e=>E(e)),_=h.reduce((e,t,s)=>{let c=t.props||{},u=h.length-1===s,d=[`label`in c?c.label:b(t,`label`)],m=[b(t)],g=c.span||1,_=e.span;e.span+=g;let v=c.labelStyle||c[`label-style`]||this.labelStyle,y=c.contentStyle||c[`content-style`]||this.contentStyle;if(o===`left`)l?e.row.push(i(`th`,{class:[`${f}-descriptions-table-header`,r],colspan:1,style:v},d),i(`td`,{class:[`${f}-descriptions-table-content`,n],colspan:u?(a-_)*2+1:g*2-1,style:y},m)):e.row.push(i(`td`,{class:`${f}-descriptions-table-content`,colspan:u?(a-_)*2:g*2},i(`span`,{class:[`${f}-descriptions-table-content__label`,r],style:v},[...d,p&&i(`span`,{class:`${f}-descriptions-separator`},p)]),i(`span`,{class:[`${f}-descriptions-table-content__content`,n],style:y},m)));else{let t=u?(a-_)*2:g*2;e.row.push(i(`th`,{class:[`${f}-descriptions-table-header`,r],colspan:t,style:v},d)),e.secondRow.push(i(`td`,{class:[`${f}-descriptions-table-content`,n],colspan:t,style:y},m))}return(e.span>=a||u)&&(e.span=0,e.row.length&&(e.rows.push(e.row),e.row=[]),o!==`left`&&e.secondRow.length&&(e.rows.push(e.secondRow),e.secondRow=[])),e},{span:0,row:[],secondRow:[],rows:[]}).rows.map(e=>i(`tr`,{class:`${f}-descriptions-table-row`},e));return i(`div`,{style:d,class:[`${f}-descriptions`,this.themeClass,`${f}-descriptions--${o}-label-placement`,`${f}-descriptions--${s}-label-align`,`${f}-descriptions--${c}-size`,l&&`${f}-descriptions--bordered`]},u||this.$slots.header?i(`div`,{class:`${f}-descriptions-header`},u||v(this,`header`)):null,i(`div`,{class:`${f}-descriptions-table-wrapper`},i(`table`,{class:`${f}-descriptions-table`},i(`tbody`,null,o===`top`&&i(`tr`,{class:`${f}-descriptions-table-row`,style:{visibility:`collapse`}},g(a*2,i(`td`,null))),_))))}}),O={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},k=t({name:`DescriptionsItem`,[T]:!0,props:O,slots:Object,render(){return null}});export{D as n,k as t};