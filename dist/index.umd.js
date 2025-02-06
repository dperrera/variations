(function(T,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(T=typeof globalThis<"u"?globalThis:T||self,i(T.variations={},T.React))})(this,function(T,i){"use strict";var B={exports:{}},K={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Ae(){if(ue)return K;ue=1;var r=Symbol.for("react.fragment");return K.Fragment=r,K.jsxDEV=void 0,K}var X={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function Te(){return de||(de=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case d:return"Portal";case Y:return"Profiler";case M:return"StrictMode";case te:return"Suspense";case oe:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case H:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function b(e){return""+e}function S(e){try{b(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),b(e)}}function v(){}function f(){if(G===0){xe=console.log,Ne=console.info,we=console.warn,Ee=console.error,Ve=console.group,je=console.groupCollapsed,Ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}G++}function E(){if(G--,G===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:xe}),info:$({},e,{value:Ne}),warn:$({},e,{value:we}),error:$({},e,{value:Ee}),group:$({},e,{value:Ve}),groupCollapsed:$({},e,{value:je}),groupEnd:$({},e,{value:Ce})})}0>G&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function C(e){if(ie===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);ie=t&&t[1]||"",ye=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+ye}function c(e,t){if(!e||le)return"";var o=ce.get(e);if(o!==void 0)return o;le=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var m=null;m=L.H,L.H=null,f();try{var A={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(O){var Z=O}Reflect.construct(e,[],I)}else{try{I.call()}catch(O){Z=O}e.call(I.prototype)}}else{try{throw Error()}catch(O){Z=O}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(O){if(O&&Z&&typeof O.stack=="string")return[O.stack,Z.stack]}return[null,null]}};A.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var x=Object.getOwnPropertyDescriptor(A.DetermineComponentFrameRoot,"name");x&&x.configurable&&Object.defineProperty(A.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=A.DetermineComponentFrameRoot(),D=s[0],W=s[1];if(D&&W){var U=D.split(`
`),z=W.split(`
`);for(s=x=0;x<U.length&&!U[x].includes("DetermineComponentFrameRoot");)x++;for(;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;if(x===U.length||s===z.length)for(x=U.length-1,s=z.length-1;1<=x&&0<=s&&U[x]!==z[s];)s--;for(;1<=x&&0<=s;x--,s--)if(U[x]!==z[s]){if(x!==1||s!==1)do if(x--,s--,0>s||U[x]!==z[s]){var J=`
`+U[x].replace(" at new "," at ");return e.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",e.displayName)),typeof e=="function"&&ce.set(e,J),J}while(1<=x&&0<=s);break}}}finally{le=!1,L.H=m,E(),Error.prepareStackTrace=o}return U=(U=e?e.displayName||e.name:"")?C(U):"",typeof e=="function"&&ce.set(e,U),U}function N(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return c(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return C(e);switch(e){case te:return C("Suspense");case oe:return C("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case re:return e=c(e.render,!1),e;case ne:return N(e.type);case ae:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return""}function y(){var e=L.A;return e===null?null:e.getOwner()}function k(e){if(ge.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function P(e,t){function o(){ke||(ke=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function _(){var e=r(this.type);return Pe[e]||(Pe[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function w(e,t,o,m,A,x){return o=x.ref,e={$$typeof:a,type:e,key:t,props:x,_owner:A},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:_}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function l(e,t,o,m,A,x){if(typeof e=="string"||typeof e=="function"||e===j||e===Y||e===M||e===te||e===oe||e===$e||typeof e=="object"&&e!==null&&(e.$$typeof===ae||e.$$typeof===ne||e.$$typeof===H||e.$$typeof===R||e.$$typeof===re||e.$$typeof===Ye||e.getModuleId!==void 0)){var s=t.children;if(s!==void 0)if(m)if(se(s)){for(m=0;m<s.length;m++)h(s[m],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else h(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?m="null":se(e)?m="array":e!==void 0&&e.$$typeof===a?(m="<"+(r(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,s);if(ge.call(t,"key")){s=r(e);var D=Object.keys(t).filter(function(U){return U!=="key"});m=0<D.length?"{key: someKey, "+D.join(": ..., ")+": ...}":"{key: someKey}",Se[s+m]||(D=0<D.length?"{"+D.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,s,D,s),Se[s+m]=!0)}if(s=null,o!==void 0&&(S(o),s=""+o),k(t)&&(S(t.key),s=""+t.key),"key"in t){o={};for(var W in t)W!=="key"&&(o[W]=t[W])}else o=t;return s&&P(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),w(e,s,x,A,y(),o)}function h(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(se(e))for(var o=0;o<e.length;o++){var m=e[o];p(m)&&u(m,t)}else if(p(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=be&&e[be]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)p(e.value)&&u(e.value,t)}}function p(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function u(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=g(t),!Ue[t])){Ue[t]=!0;var o="";e&&e._owner!=null&&e._owner!==y()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var m=L.getCurrentStack;L.getCurrentStack=function(){var A=N(e.type);return m&&(A+=m()||""),A},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),L.getCurrentStack=m}}function g(e){var t="",o=y();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var V=i,a=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),H=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),be=Symbol.iterator,ze=Symbol.for("react.client.reference"),L=V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=Object.prototype.hasOwnProperty,$=Object.assign,Ye=Symbol.for("react.client.reference"),se=Array.isArray,G=0,xe,Ne,we,Ee,Ve,je,Ce;v.__reactDisabledLog=!0;var ie,ye,le=!1,ce=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),ke,Pe={},Se={},Ue={};X.Fragment=j,X.jsxDEV=function(e,t,o,m,A,x){return l(e,t,o,m,A,x)}}()),X}var fe;function _e(){return fe||(fe=1,process.env.NODE_ENV==="production"?B.exports=Ae():B.exports=Te()),B.exports}var n=_e();const Q=i.createContext(null),me=i.createContext(null);function q(){const r=i.useContext(Q);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function pe(){const r=i.useContext(me);if(!r)throw new Error("useVariationsState must be used within a VariationsProvider");return[r.state,r.setState]}function Me(r){const{activeIds:b,setActiveId:S,variations:v}=q(),f=b.get(r),E=i.useMemo(()=>Array.from(v.entries()).filter(([,c])=>c.group===r).map(([c,{label:N}])=>({id:c,label:N})),[v,r]);return{active:i.useMemo(()=>{if(!f)return null;const c=v.get(f);return c?{id:f,label:c.label}:null},[f,v]),setActive:c=>S(r,c),variations:E}}function De({children:r,disableQueryString:b=!1,initialState:S}){const[v,f]=i.useState(new Map),[E,C]=i.useState(new Map),[c,N]=i.useState(()=>S);i.useEffect(()=>{if(b||typeof window>"u")return;const l=new URLSearchParams(window.location.search),h=l.get("var");if(h)try{const u=h.split("_").map(g=>{const[V,a]=g.split(".");if(!V||!a)throw new Error("Invalid format");return[V,a]});f(new Map(u))}catch{f(new Map)}const p=l.get("s");if(p)try{const u=JSON.parse(atob(p));N(u)}catch{}},[b]),i.useEffect(()=>{if(b||typeof window>"u")return;const l=new URLSearchParams,h=Array.from(v.entries());if(h.length>0){const g=h.map(([V,a])=>`${V}.${a}`).join("_");l.set("var",g)}if(c!==void 0){const g=btoa(JSON.stringify(c));l.set("s",g)}const p=l.toString(),u=p?`${window.location.pathname}?${p}`:window.location.pathname;window.history.replaceState({},"",u)},[v,c,b]),i.useEffect(()=>{if(b||typeof window>"u")return;const l=()=>{const h=new URLSearchParams(window.location.search),p=h.get("var");if(p)try{const g=p.split("_").map(V=>{const[a,d]=V.split(".");if(!a||!d)throw new Error("Invalid format");return[a,d]});f(new Map(g))}catch{f(new Map)}else f(new Map);const u=h.get("s");if(u)try{const g=JSON.parse(atob(u));N(g)}catch{}};return window.addEventListener("popstate",l),()=>window.removeEventListener("popstate",l)},[b]);const y=i.useMemo(()=>{const l=v.get("root");if(!l)return null;const h=(u,g)=>{const V={id:u,group:g,children:new Map};return Array.from(E.entries()).forEach(([,a])=>{if(a.parentId===u){const d=v.get(a.group);d&&V.children.set(a.group,h(d,a.group))}}),V};return h(l,"root")},[v,E]),k=i.useCallback((l,h)=>{f(p=>{const u=new Map(p);return u.set(l,h),l==="root"?Array.from(p.keys()).forEach(g=>{g!=="root"&&u.delete(g)}):Array.from(E.entries()).find(([V])=>V===h)&&Array.from(p.keys()).forEach(V=>{const a=Array.from(E.entries()).find(([,d])=>d.group===V);a&&a[1].parentId===h&&u.delete(V)}),u})},[E]),P=i.useCallback((l,h,p,u,g)=>{C(V=>{const a=V.get(h);if((a==null?void 0:a.group)===l&&(a==null?void 0:a.label)===p&&(a==null?void 0:a.groupLabel)===u&&(a==null?void 0:a.parentId)===g)return V;const d=new Map(V);return d.set(h,{group:l,label:p,groupLabel:u,parentId:g}),d})},[]),_=i.useMemo(()=>({activeIds:v,setActiveId:k,registerVariation:P,variations:E,activeTree:y,disableQueryString:b}),[v,k,P,E,y,b]),w=i.useMemo(()=>({state:c,setState:l=>{N(l)}}),[c]);return n.jsxDEV(Q.Provider,{value:_,children:n.jsxDEV(me.Provider,{value:w,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:332,columnNumber:7},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:331,columnNumber:5},this)}function F(r){return r.toLowerCase().replace(/\s+/g,"-")}function ee({label:r,children:b,...S}){const{group:v="",id:f,groupLabel:E,parentId:C}=S,c=i.useMemo(()=>f||F(r),[f,r]),{activeIds:N,registerVariation:y}=q(),k=N.get(v)===c;return i.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${r}"

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variation component is not wrapped in a Variations component

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Make sure your Variation is wrapped in a Variations component:
   <Variations label="My Variations">
     <Variation label="${r}">
       {children}
     </Variation>
   </Variations>`);return}y(v,c,r,E||v,C)},[v,c,r,E,C,y]),k?n.jsxDEV(n.Fragment,{children:b},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Oe="root";function Ie(r){return i.isValidElement(r)&&r.type===ee&&typeof r.props.label=="string"}function ve({isRoot:r=!1,label:b,children:S,...v}){const{parentId:f,group:E}=v,C=i.useContext(Q);if(!C)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&f)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const c=E||(r?Oe:F(b)),{activeIds:N,setActiveId:y,variations:k}=C,P=i.useMemo(()=>{const w=new Map;return Array.from(k.entries()).forEach(([l,h])=>{const{group:p,label:u,groupLabel:g}=h;w.has(p)||w.set(p,[]),w.get(p).push([l,{label:u,groupLabel:g}])}),w},[k]),_=i.useMemo(()=>i.Children.map(S,w=>{if(i.isValidElement(w)){if(w.type===ee){if(!Ie(w))throw new Error("Invalid Variation component");const l=F(w.props.label);return i.cloneElement(w,{...w.props,group:c,groupLabel:b,id:l,parentId:f})}else if(w.type===ve){const l=w,h=N.get(c),p=F(l.props.label);return i.cloneElement(l,{...l.props,parentId:h,group:p})}}return w}),[S,c,b,N,f]);return i.useEffect(()=>{if(!N.has(c)){const w=P.get(c);if(w&&w.length>0){const[l]=w[0];y(c,l)}}},[c,P,N,y]),n.jsxDEV(n.Fragment,{children:_},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const he=({group:r,variations:b,activeIds:S,setActiveId:v,isMinimized:f})=>{var c,N,y,k;const E=(N=(c=b[0])==null?void 0:c[1])==null?void 0:N.groupLabel,C=S.get(r);return n.jsxDEV("div",{className:"variation-group",children:[n.jsxDEV("div",{className:"variation-title",title:E,children:E},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),n.jsxDEV("div",{className:"variations-selects",children:n.jsxDEV("select",{value:C||"",onChange:P=>{v(r,P.target.value)},className:"variation-select",tabIndex:f?-1:0,title:((k=(y=b.find(([P])=>P===C))==null?void 0:y[1])==null?void 0:k.label)||"",children:b.map(([P,{label:_}])=>n.jsxDEV("option",{value:P,title:_,children:_},P,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),n.jsxDEV("style",{children:`
          .variation-group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0 10px;
            gap: 4px;
            overflow: hidden;
          }
          .variation-group:last-child {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
          .variation-group:hover {
            background: rgba(0, 0, 0, 0.03);
          }

          .variation-title {
            flex: 1;
            font-size: 11px;
            font-weight: 500;
            color: #888;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }

          .variations-selects {
            display: flex;
            gap: 8px;
          }

          .variation-select {
            width: 100px;
            flex: 1 0 50px;
            padding: 4px 24px 4px 8px;
            font-size: 11px;
            color: #111;
            background: transparent;
            cursor: pointer;
            outline: none;
            appearance: none;
            border-radius: 4px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 8px auto;
            transition: border-color 0.1s ease;
          }

          .variation-select option {
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .variation-select:focus {
            background: rgba(0, 0, 0, 1);
            color: #ffffff;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 8px center;
            background-size: 8px auto;
          }

          @media (prefers-color-scheme: dark) {
            .variation-group:hover {
              background: rgba(255, 255, 255, 0.05);
            }

            .variation-title {
              color: #999;
            }

            .variation-select {
              color: #fff;
              background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            }

            .variation-select option {
              background: rgb(28, 28, 30);
              color: #fff;
            }

            .variation-select:focus {
              background-color: #ffffff;
              color: #111;
              background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            }
          }
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function Le({position:r="bottom-right",minimizedByDefault:b=!1,className:S,...v}){const[f,E]=i.useState(b),[C,c]=i.useState(!1),[N,y]=i.useState("variations"),{activeIds:k,setActiveId:P,variations:_,disableQueryString:w}=q(),[l,h]=pe(),p=()=>{const a=new URLSearchParams(window.location.search),d=Array.from(k.entries());if(d.length>0){const Y=d.map(([R,H])=>`${R}.${H}`).join("_");a.set("var",Y)}else a.delete("var");const j=a.toString(),M=window.location.href.split("?")[0]+(j?`?${j}`:"");navigator.clipboard.writeText(M).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},u=i.useMemo(()=>{const a=new Map;return Array.from(_.entries()).forEach(([d,j])=>{const{group:M,label:Y,groupLabel:R}=j;a.has(M)||a.set(M,[]),a.get(M).push([d,{label:Y,groupLabel:R}])}),a},[_]),V=(()=>{const a=[],d=new Set;if(u.has("root")){const j=u.get("root");a.push(n.jsxDEV(he,{group:"root",variations:j,activeIds:k,setActiveId:P,isMinimized:f},"root",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:218,columnNumber:9},this)),d.add("root")}return Array.from(k.entries()).forEach(([j])=>{if(!d.has(j)&&u.has(j)){const M=u.get(j);a.push(n.jsxDEV(he,{group:j,variations:M,activeIds:k,setActiveId:P,isMinimized:f},j,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:235,columnNumber:11},this)),d.add(j)}}),a.length===0?n.jsxDEV("div",{className:"variations-empty",children:[n.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:251,columnNumber:11},this),n.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",n.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:253,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:252,columnNumber:11},this),n.jsxDEV("style",{children:`
              .variations-empty {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px 16px;
                text-align: center;
                gap: 4px;
              }

              .variations-empty-title {
                font-size: 13px;
                font-weight: 500;
                color: #666;
              }
              .variations-empty-text {
                font-size: 11px;
                color: #999;
              }
              code {
                font-family: var(--font-geist-mono);
                font-size: 11px;
                padding: 1px 4px;
                background: rgba(0, 0, 0, 0.03);
                border-radius: 4px;
              }
              @media (prefers-color-scheme: dark) {
                .variations-empty-title {
                  color: #999;
                }
                .variations-empty-text {
                  color: #666;
                }
                code {
                  background: rgba(255, 255, 255, 0.1);
                }
              }
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:255,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:250,columnNumber:9},this):a})();return i.useEffect(()=>{const a=d=>{d.code==="KeyV"&&d.altKey&&!d.ctrlKey&&!d.shiftKey&&!d.metaKey&&(d.preventDefault(),E(j=>!j))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),n.jsxDEV("div",{className:`variations-controls-container ${S||""}`,...v,children:[n.jsxDEV("div",{className:`variations-controls ${f?"minimized":""}`,children:f?n.jsxDEV("button",{className:"variations-circle",onClick:()=>E(!1),tabIndex:f?0:-1,children:n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:15},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:348,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:349,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:350,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:336,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:331,columnNumber:9},this):n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{className:"variations-header",children:[n.jsxDEV("div",{className:"variations-header-title",children:[n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:372,columnNumber:19},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:373,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:374,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:375,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:357,columnNumber:17},this),n.jsxDEV("div",{className:"variations-tabs",children:[n.jsxDEV("button",{className:`variations-tab ${N==="variations"?"active":""}`,onClick:()=>y("variations"),children:"Variations"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:378,columnNumber:19},this),n.jsxDEV("button",{className:`variations-tab ${N==="state"?"active":""}`,onClick:()=>y("state"),children:"State"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:386,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:377,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:356,columnNumber:15},this),n.jsxDEV("div",{className:"variations-header-actions",children:[!w&&n.jsxDEV("button",{className:"variations-header-button",onClick:p,title:"Copy link to clipboard",tabIndex:f?-1:0,children:C?n.jsxDEV("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxDEV("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:412,columnNumber:25},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:405,columnNumber:17},this):n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M9 17H7A5 5 0 0 1 7 7h2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:432,columnNumber:25},this),n.jsxDEV("path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:433,columnNumber:25},this),n.jsxDEV("line",{x1:"8",x2:"16",y1:"12",y2:"12"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:434,columnNumber:25},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:421,columnNumber:17},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:398,columnNumber:15},this),n.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>E(!0),tabIndex:f?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:444,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:396,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:355,columnNumber:13},this),n.jsxDEV("div",{className:"variation-content",children:N==="variations"?n.jsxDEV("div",{className:"variation-groups",children:V},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:456,columnNumber:13},this):n.jsxDEV("div",{className:"variation-state",children:n.jsxDEV("div",{className:"state-editor",children:n.jsxDEV("textarea",{value:JSON.stringify(l,null,2),onChange:a=>{try{const d=JSON.parse(a.target.value);h(d)}catch{}},spellCheck:!1,className:"state-textarea"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:460,columnNumber:21},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:459,columnNumber:19},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:458,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:454,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:354,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:329,columnNumber:7},this),n.jsxDEV("style",{children:`
          .variations-controls {
            font-family: system-ui, -apple-system, sans-serif;
            position: fixed;
            ${r.includes("right")?"right: 16px;":r.includes("center")?"left: 50%; transform: translateX(-50%);":"left: 16px;"}
            ${r.includes("bottom")?"bottom: 16px;":r.includes("middle")?"top: 50%; transform: translateY(-50%);":"top: 16px;"}
            ${r.includes("middle")&&r.includes("right")?"transform: translateY(-50%);":""}
            ${r.includes("middle")&&r.includes("left")?"transform: translateY(-50%);":""}
            ${r.includes("center")&&r.includes("bottom")?"transform: translateX(-50%);":""}
            ${r.includes("center")&&r.includes("top")?"transform: translateX(-50%);":""}
            width: 280px;
            height: auto;
            max-height: calc(100vh - 32px);
            z-index: 100;
            background: rgba(255, 255, 255);
            border-radius: 10px;
            overflow: auto;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
              0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
            padding: 2px;
          }

          .variations-controls.minimized {
            width: 32px;
            height: 32px;
            padding: 0;
            border-radius: 16px;
            background: white;
            ${r.includes("right")?"right: 16px;":r.includes("center")?"left: 50%; transform: translateX(-50%);":"left: 16px;"}
            ${r.includes("bottom")?"bottom: 16px;":r.includes("middle")?"top: 50%; transform: translateY(-50%);":"top: 16px;"}
            ${r.includes("middle")&&r.includes("right")?"transform: translateY(-50%);":""}
            ${r.includes("middle")&&r.includes("left")?"transform: translateY(-50%);":""}
            ${r.includes("center")&&r.includes("bottom")?"transform: translateX(-50%);":""}
            ${r.includes("center")&&r.includes("top")?"transform: translateX(-50%);":""}
          }

          .variations-circle {
            width: 32px;
            height: 32px;
            padding: 0;
            border: none;
            background: none;
            color: #666;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .variations-circle:focus {
            background: rgba(0, 0, 0, 1);
            color: #ffffff;
            border-radius: 4px;
            outline: none;
          }

          .variations-header {
            background: rgba(255, 255, 255, 0.6);
            position: sticky;
            top: 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
            backdrop-filter: blur(4px);
          }

          .variations-header-title {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            line-height: 12px;
            color: #999;
            display: flex;
            align-items: center;
          }

          .variations-header-actions {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .variations-header-button {
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            transition: color 0.2s ease;
          }

          .variations-header-button:hover {
            color: #111111;
          }

          .variations-header-button:focus {
            background: #111111;
            color: #ffffff;
            outline: none;
          }

          .variations-header-toggle {
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            font-size: 16px;
            line-height: 0px;
            font-weight: 500;
            padding: 0;
            padding-bottom: 2px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            border-top-right-radius: 8px;
          }
          .variations-header-toggle:hover {
            color: #111111;
          }
          .variations-header-toggle:focus {
            background: #111111;
            color: #ffffff;
            outline: none;
          }

          .variations-tabs {
            display: flex;
            gap: 8px;
            margin-right: 4px;
          }

          .variations-tab {
            text-transform: uppercase;
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            font-size: 10px;
            font-weight: 500;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
          }
          .variations-tab:hover {
            color: #000;
          }
          .variations-tab:focus {
            border-bottom: 1px solid;
            outline: none;
          }
          .variations-tab.active {
            color: #000;
          }

          .variation-content {
            flex: 1;
            overflow: auto;
          }

          .variation-state {
            padding: 8px;
          }

          .state-editor {
            position: relative;
            display: flex;
            height: 100%;
            max-height: 100%;
          }

          .state-textarea {
            width: 100%;
            max-height: 80vh;
            min-height: 200px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            line-height: 1.4;
            padding: 8px;
            border: none;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.03);
            color: #111;
            resize: vertical;
          }

          .state-textarea:focus {
            outline: none;
            background: rgba(0, 0, 0, 0.05);
          }

          @media (prefers-color-scheme: dark) {
            .variations-controls {
              background: rgba(28, 28, 30, 1);
              box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
                0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
            }

            .variations-controls.minimized {
              background: rgb(28, 28, 30);
            }

            .variations-circle {
              color: #fff;
            }

            .variations-circle:focus {
              background: rgba(255, 255, 255, 0.1);
              color: #ffffff;
              border-radius: 4px;
              outline: none;
            }

            .variations-header {
              background: rgba(28, 28, 30, 0.9);
            }

            .variations-header-toggle {
              color: #999;
            }
            .variations-header-toggle:hover {
              color: #ffffff;
            }
            .variations-header-toggle:focus {
              background: white;
              color: #111111;
            }

            .variations-header-button {
              color: #999;
            }
            .variations-header-button:hover {
              color: #ffffff;
            }
            .variations-header-button:focus {
              background: white;
              color: #111111;
            }

            .variations-tabs {
              display: flex;
              gap: 8px;
              margin-right: 4px;
            }

            .variations-tab:hover {
              color: #fff;
            }
            .variations-tab:focus {
              border-bottom: 1px solid;
            }
            .variations-tab.active {
              border-bottom: 1px solid transparent;
              color: #fff;
            }
              

            .state-textarea {
              background: rgba(255, 255, 255, 0.05);
              color: #fff;
            }

            .state-textarea:focus {
              background: rgba(255, 255, 255, 0.1);
            }
          }
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:480,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:325,columnNumber:5},this)}T.Variation=ee,T.Variations=ve,T.VariationsControls=Le,T.VariationsProvider=De,T.useVariation=Me,T.useVariations=q,T.useVariationsState=pe,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
