import{G as e,Jt as t,K as n,Xt as r,bt as i,ht as a,mt as o,o as s,p as c,vt as l,wt as u,zt as d}from"./_plugin-vue_export-helper-CRO0dx8O.js";import{c as f}from"./Tag-BghOFA8u.js";import{St as p,dt as m,ft as h,lt as g,ut as _}from"./index-WDyaG4UX.js";function v(e){let{infoColor:t,successColor:n,warningColor:r,errorColor:i,textColor2:a,progressRailColor:o,fontSize:s,fontWeight:c}=e;return{fontSize:s,fontSizeCircle:`28px`,fontWeightCircle:c,railColor:o,railHeight:`8px`,iconSizeCircle:`36px`,iconSizeLine:`18px`,iconColor:t,iconColorInfo:t,iconColorSuccess:n,iconColorWarning:r,iconColorError:i,textColorCircle:a,textColorLineInner:`rgb(255, 255, 255)`,textColorLineOuter:a,fillColor:t,fillColorInfo:t,fillColorSuccess:n,fillColorWarning:r,fillColorError:i,lineBgProcessing:`linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)`}}var y={name:`Progress`,common:s,self:v},b={success:r(_,null),error:r(h,null),warning:r(g,null),info:r(m,null)},x=t({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=d(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${u(JSON.stringify(n))}`:t});function i(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let a=()=>{let t=typeof e.fillColor==`object`,i=t?e.fillColor.stops[0]:``,a=t?e.fillColor.stops[1]:``;return t&&r(`defs`,null,r(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},r(`stop`,{offset:`0%`,"stop-color":i}),r(`stop`,{offset:`100%`,"stop-color":a})))};return()=>{let{fillColor:n,railColor:o,strokeWidth:s,offsetDegree:c,status:l,percentage:u,showIndicator:d,indicatorTextColor:p,unit:m,gapOffsetDegree:h,clsPrefix:g}=e,{pathString:_,pathStyle:v}=i(100,0,o,`rail`),{pathString:y,pathStyle:x}=i(u,c,n,`fill`),S=100+s;return r(`div`,{class:`${g}-progress-content`,role:`none`},r(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},r(`div`,{class:`${g}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},r(`svg`,{viewBox:`0 0 ${S} ${S}`},a(),r(`g`,null,r(`path`,{class:`${g}-progress-graph-circle-rail`,d:_,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:v})),r(`g`,null,r(`path`,{class:[`${g}-progress-graph-circle-fill`,u===0&&`${g}-progress-graph-circle-fill--empty`],d:y,"stroke-width":s,"stroke-linecap":`round`,fill:`none`,style:x}))))),d?r(`div`,null,t.default?r(`div`,{class:`${g}-progress-custom-content`,role:`none`},t.default()):l==="default"?r(`div`,{class:`${g}-progress-text`,style:{color:p},role:`none`},r(`span`,{class:`${g}-progress-text__percentage`},u),r(`span`,{class:`${g}-progress-text__unit`},m)):r(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},r(f,{clsPrefix:g},{default:()=>b[l]}))):null)}}}),S={success:r(_,null),error:r(h,null),warning:r(g,null),info:r(m,null)},C=t({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){let n=d(()=>p(e.height)),i=d(()=>typeof e.fillColor==`object`?`linear-gradient(to right, ${e.fillColor?.stops[0]} , ${e.fillColor?.stops[1]})`:e.fillColor),a=d(()=>e.railBorderRadius===void 0?e.height===void 0?``:p(e.height,{c:.5}):p(e.railBorderRadius)),o=d(()=>e.fillBorderRadius===void 0?e.railBorderRadius===void 0?e.height===void 0?``:p(e.height,{c:.5}):p(e.railBorderRadius):p(e.fillBorderRadius));return()=>{let{indicatorPlacement:s,railColor:c,railStyle:l,percentage:u,unit:d,indicatorTextColor:p,status:m,showIndicator:h,processing:g,clsPrefix:_}=e;return r(`div`,{class:`${_}-progress-content`,role:`none`},r(`div`,{class:`${_}-progress-graph`,"aria-hidden":!0},r(`div`,{class:[`${_}-progress-graph-line`,{[`${_}-progress-graph-line--indicator-${s}`]:!0}]},r(`div`,{class:`${_}-progress-graph-line-rail`,style:[{backgroundColor:c,height:n.value,borderRadius:a.value},l]},r(`div`,{class:[`${_}-progress-graph-line-fill`,g&&`${_}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:i.value,height:n.value,lineHeight:n.value,borderRadius:o.value}},s===`inside`?r(`div`,{class:`${_}-progress-graph-line-indicator`,style:{color:p}},t.default?t.default():`${u}${d}`):null)))),h&&s===`outside`?r(`div`,null,t.default?r(`div`,{class:`${_}-progress-custom-content`,style:{color:p},role:`none`},t.default()):m==="default"?r(`div`,{role:`none`,class:`${_}-progress-icon ${_}-progress-icon--as-text`,style:{color:p}},u,d):r(`div`,{class:`${_}-progress-icon`,"aria-hidden":!0},r(f,{clsPrefix:_},{default:()=>S[m]}))):null)}}});function w(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var T=t({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=d(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),i=(t,n)=>{let i=e.fillColor[n],a=typeof i==`object`?i.stops[0]:``,o=typeof i==`object`?i.stops[1]:``;return typeof e.fillColor[n]==`object`&&r(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},r(`stop`,{offset:`0%`,"stop-color":a}),r(`stop`,{offset:`100%`,"stop-color":o}))};return()=>{let{viewBoxWidth:a,strokeWidth:o,circleGap:s,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return r(`div`,{class:`${p}-progress-content`,role:`none`},r(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},r(`div`,{class:`${p}-progress-graph-circle`},r(`svg`,{viewBox:`0 0 ${a} ${a}`},r(`defs`,null,f.map((e,t)=>i(e,t))),f.map((e,t)=>r(`g`,{key:t},r(`path`,{class:`${p}-progress-graph-circle-rail`,d:w(a/2-o/2*(1+2*t)-s*t,o,a),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[t]},d[t]]}),r(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:w(a/2-o/2*(1+2*t)-s*t,o,a),"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof l[t]==`object`?`url(#gradient-${t})`:l[t]}})))))),c&&t.default?r(`div`,null,r(`div`,{class:`${p}-progress-text`},t.default())):null)}}}),E=o([a(`progress`,{display:`inline-block`},[a(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),l(`line`,`
 width: 100%;
 display: block;
 `,[a(`progress-content`,`
 display: flex;
 align-items: center;
 `,[a(`progress-graph`,{flex:1})]),a(`progress-custom-content`,{marginLeft:`14px`}),a(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[l(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),l(`circle, dashboard`,{width:`120px`},[a(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),a(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),l(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[a(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),a(`progress-content`,{position:`relative`}),a(`progress-graph`,{position:`relative`},[a(`progress-graph-circle`,[o(`svg`,{verticalAlign:`bottom`}),a(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[l(`empty`,{opacity:0})]),a(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),a(`progress-graph-line`,[l(`indicator-inside`,[a(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[a(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),a(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),l(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[a(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),a(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[a(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[l(`processing`,[o(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),o(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),D=t({name:`Progress`,props:Object.assign(Object.assign({},c.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(t){let r=d(()=>t.indicatorPlacement||t.indicatorPosition),a=d(()=>{if(t.gapDegree||t.gapDegree===0)return t.gapDegree;if(t.type===`dashboard`)return 75}),{mergedClsPrefixRef:o,inlineThemeDisabled:s}=n(t),l=c(`Progress`,`-progress`,E,y,t,o),u=d(()=>{let{status:e}=t,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:a,railColor:o,railHeight:s,iconSizeCircle:c,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[i(`iconColor`,e)]:g,[i(`fillColor`,e)]:_}}=l.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":a,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":c,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":o,"--n-rail-height":s,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),f=s?e(`progress`,d(()=>t.status[0]),u,t):void 0;return{mergedClsPrefix:o,mergedIndicatorPlacement:r,gapDeg:a,cssVars:s?void 0:u,themeClass:f?.themeClass,onRender:f?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:i,status:a,railColor:o,railStyle:s,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:y,gapDeg:b,gapOffsetDegree:S,themeClass:w,$slots:E,onRender:D}=this;return D?.(),r(`div`,{class:[w,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${a}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?r(x,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:b===void 0?e===`dashboard`?75:0:b,gapOffsetDegree:S,unit:p},E):e===`line`?r(C,{clsPrefix:y,status:a,showIndicator:i,indicatorTextColor:n,railColor:o,fillColor:c,railStyle:s,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},E):e===`multiple-circle`?r(T,{clsPrefix:y,strokeWidth:d,railColor:o,fillColor:c,railStyle:s,viewBoxWidth:u,percentage:l,showIndicator:i,circleGap:v},E):null)}});export{D as t};