"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react");var B={exports:{}},K={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function _e(){if(Ve)return K;Ve=1;var r=Symbol.for("react.fragment");return K.Fragment=r,K.jsxDEV=void 0,K}var X={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Me(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case p:return"Portal";case $:return"Profiler";case L:return"StrictMode";case Z:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case le:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function E(e){return""+e}function P(e){try{E(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),E(e)}}function v(){}function f(){if(Y===0){de=console.log,fe=console.info,me=console.warn,pe=console.error,ve=console.group,he=console.groupCollapsed,be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}function V(){if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:de}),info:O({},e,{value:fe}),warn:O({},e,{value:me}),error:O({},e,{value:pe}),group:O({},e,{value:ve}),groupCollapsed:O({},e,{value:he}),groupEnd:O({},e,{value:be})})}0>Y&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function j(e){if(oe===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||"",ge=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+ge}function c(e,t){if(!e||ne)return"";var o=ae.get(e);if(o!==void 0)return o;ne=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var m=null;m=D.H,D.H=null,f();try{var U={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(_){var J=_}Reflect.construct(e,[],M)}else{try{M.call()}catch(_){J=_}e.call(M.prototype)}}else{try{throw Error()}catch(_){J=_}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(_){if(_&&J&&typeof _.stack=="string")return[_.stack,J.stack]}return[null,null]}};U.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var x=Object.getOwnPropertyDescriptor(U.DetermineComponentFrameRoot,"name");x&&x.configurable&&Object.defineProperty(U.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=U.DetermineComponentFrameRoot(),R=s[0],z=s[1];if(R&&z){var S=R.split(`
`),I=z.split(`
`);for(s=x=0;x<S.length&&!S[x].includes("DetermineComponentFrameRoot");)x++;for(;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;if(x===S.length||s===I.length)for(x=S.length-1,s=I.length-1;1<=x&&0<=s&&S[x]!==I[s];)s--;for(;1<=x&&0<=s;x--,s--)if(S[x]!==I[s]){if(x!==1||s!==1)do if(x--,s--,0>s||S[x]!==I[s]){var W=`
`+S[x].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,W),W}while(1<=x&&0<=s);break}}}finally{ne=!1,D.H=m,V(),Error.prepareStackTrace=o}return S=(S=e?e.displayName||e.name:"")?j(S):"",typeof e=="function"&&ae.set(e,S),S}function N(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return c(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return j(e);switch(e){case Z:return j("Suspense");case Q:return j("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case H:return e=c(e.render,!1),e;case ee:return N(e.type);case re:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return""}function C(){var e=D.A;return e===null?null:e.getOwner()}function y(e){if(ue.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function k(e,t){function o(){xe||(xe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function A(){var e=r(this.type);return Ne[e]||(Ne[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function w(e,t,o,m,U,x){return o=x.ref,e={$$typeof:a,type:e,key:t,props:x,_owner:U},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:A}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function l(e,t,o,m,U,x){if(typeof e=="string"||typeof e=="function"||e===T||e===$||e===L||e===Z||e===Q||e===Ue||typeof e=="object"&&e!==null&&(e.$$typeof===re||e.$$typeof===ee||e.$$typeof===le||e.$$typeof===G||e.$$typeof===H||e.$$typeof===Te||e.getModuleId!==void 0)){var s=t.children;if(s!==void 0)if(m)if(te(s)){for(m=0;m<s.length;m++)h(s[m],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else h(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?m="null":te(e)?m="array":e!==void 0&&e.$$typeof===a?(m="<"+(r(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,s);if(ue.call(t,"key")){s=r(e);var R=Object.keys(t).filter(function(S){return S!=="key"});m=0<R.length?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}",we[s+m]||(R=0<R.length?"{"+R.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,s,R,s),we[s+m]=!0)}if(s=null,o!==void 0&&(P(o),s=""+o),y(t)&&(P(t.key),s=""+t.key),"key"in t){o={};for(var z in t)z!=="key"&&(o[z]=t[z])}else o=t;return s&&k(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),w(e,s,x,U,C(),o)}function h(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(te(e))for(var o=0;o<e.length;o++){var m=e[o];d(m)&&b(m,t)}else if(d(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ce&&e[ce]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)d(e.value)&&b(e.value,t)}}function d(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function b(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=g(t),!Ee[t])){Ee[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var m=D.getCurrentStack;D.getCurrentStack=function(){var U=N(e.type);return m&&(U+=m()||""),U},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),D.getCurrentStack=m}}function g(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var i=u,a=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),le=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ce=Symbol.iterator,Ae=Symbol.for("react.client.reference"),D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,O=Object.assign,Te=Symbol.for("react.client.reference"),te=Array.isArray,Y=0,de,fe,me,pe,ve,he,be;v.__reactDisabledLog=!0;var oe,ge,ne=!1,ae=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),xe,Ne={},we={},Ee={};X.Fragment=T,X.jsxDEV=function(e,t,o,m,U,x){return l(e,t,o,m,U,x)}}()),X}var Ce;function De(){return Ce||(Ce=1,process.env.NODE_ENV==="production"?B.exports=_e():B.exports=Me()),B.exports}var n=De();const se=u.createContext(null),ke=u.createContext(null);function F(){const r=u.useContext(se);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function Pe(){const r=u.useContext(ke);if(!r)throw new Error("useVariationsState must be used within a VariationsProvider");return[r.state,r.setState]}function Oe(r){const{activeIds:E,setActiveId:P,variations:v}=F(),f=E.get(r),V=u.useMemo(()=>Array.from(v.entries()).filter(([,c])=>c.group===r).map(([c,{label:N}])=>({id:c,label:N})),[v,r]);return{active:u.useMemo(()=>{if(!f)return null;const c=v.get(f);return c?{id:f,label:c.label}:null},[f,v]),setActive:c=>P(r,c),variations:V}}function Ie({children:r,disableQueryString:E=!1,initialState:P}){const[v,f]=u.useState(new Map),[V,j]=u.useState(new Map),[c,N]=u.useState(()=>P);u.useEffect(()=>{if(E||typeof window>"u")return;const l=new URLSearchParams(window.location.search),h=l.get("var");if(h)try{const b=h.split("_").map(g=>{const[i,a]=g.split(".");if(!i||!a)throw new Error("Invalid format");return[i,a]});f(new Map(b))}catch{f(new Map)}const d=l.get("s");if(d)try{const b=JSON.parse(atob(d));N(b)}catch{}},[E]),u.useEffect(()=>{if(E||typeof window>"u")return;const l=new URLSearchParams,h=Array.from(v.entries());if(h.length>0){const g=h.map(([i,a])=>`${i}.${a}`).join("_");l.set("var",g)}if(c!==void 0){const g=btoa(JSON.stringify(c));l.set("s",g)}const d=l.toString(),b=d?`${window.location.pathname}?${d}`:window.location.pathname;window.history.replaceState({},"",b)},[v,c,E]),u.useEffect(()=>{if(E||typeof window>"u")return;const l=()=>{const h=new URLSearchParams(window.location.search),d=h.get("var");if(d)try{const g=d.split("_").map(i=>{const[a,p]=i.split(".");if(!a||!p)throw new Error("Invalid format");return[a,p]});f(new Map(g))}catch{f(new Map)}else f(new Map);const b=h.get("s");if(b)try{const g=JSON.parse(atob(b));N(g)}catch{}};return window.addEventListener("popstate",l),()=>window.removeEventListener("popstate",l)},[E]);const C=u.useMemo(()=>{const l=v.get("root");if(!l)return null;const h=(b,g)=>{const i={id:b,group:g,children:new Map};return Array.from(V.entries()).forEach(([,a])=>{if(a.parentId===b){const p=v.get(a.group);p&&i.children.set(a.group,h(p,a.group))}}),i};return h(l,"root")},[v,V]),y=u.useCallback((l,h)=>{f(d=>{const b=new Map(d);return b.set(l,h),l==="root"?Array.from(d.keys()).forEach(g=>{g!=="root"&&b.delete(g)}):Array.from(V.entries()).find(([i])=>i===h)&&Array.from(d.keys()).forEach(i=>{const a=Array.from(V.entries()).find(([,p])=>p.group===i);a&&a[1].parentId===h&&b.delete(i)}),b})},[V]),k=u.useCallback((l,h,d,b,g)=>{j(i=>{const a=i.get(h);if((a==null?void 0:a.group)===l&&(a==null?void 0:a.label)===d&&(a==null?void 0:a.groupLabel)===b&&(a==null?void 0:a.parentId)===g)return i;const p=new Map(i);return p.set(h,{group:l,label:d,groupLabel:b,parentId:g}),p})},[]),A=u.useMemo(()=>({activeIds:v,setActiveId:y,registerVariation:k,variations:V,activeTree:C}),[v,y,k,V,C]),w=u.useMemo(()=>({state:c,setState:l=>{N(l)}}),[c]);return n.jsxDEV(se.Provider,{value:A,children:n.jsxDEV(ke.Provider,{value:w,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:330,columnNumber:7},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:329,columnNumber:5},this)}function q(r){return r.toLowerCase().replace(/\s+/g,"-")}function ie({label:r,children:E,...P}){const{group:v="",id:f,groupLabel:V,parentId:j}=P,c=u.useMemo(()=>f||q(r),[f,r]),{activeIds:N,registerVariation:C}=F(),y=N.get(v)===c;return u.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(v,c,r,V||v,j)},[v,c,r,V,j,C]),y?n.jsxDEV(n.Fragment,{children:E},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Le="root";function $e(r){return u.isValidElement(r)&&r.type===ie&&typeof r.props.label=="string"}function Se({isRoot:r=!1,label:E,children:P,...v}){const{parentId:f,group:V}=v,j=u.useContext(se);if(!j)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&f)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const c=V||(r?Le:q(E)),{activeIds:N,setActiveId:C,variations:y}=j,k=u.useMemo(()=>{const w=new Map;return Array.from(y.entries()).forEach(([l,h])=>{const{group:d,label:b,groupLabel:g}=h;w.has(d)||w.set(d,[]),w.get(d).push([l,{label:b,groupLabel:g}])}),w},[y]),A=u.useMemo(()=>u.Children.map(P,w=>{if(u.isValidElement(w)){if(w.type===ie){if(!$e(w))throw new Error("Invalid Variation component");const l=q(w.props.label);return u.cloneElement(w,{...w.props,group:c,groupLabel:E,id:l,parentId:f})}else if(w.type===Se){const l=w,h=N.get(c),d=q(l.props.label);return u.cloneElement(l,{...l.props,parentId:h,group:d})}}return w}),[P,c,E,N,f]);return u.useEffect(()=>{if(!N.has(c)){const w=k.get(c);if(w&&w.length>0){const[l]=w[0];C(c,l)}}},[c,k,N,C]),n.jsxDEV(n.Fragment,{children:A},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const ye=({group:r,variations:E,activeIds:P,setActiveId:v,isMinimized:f})=>{var c,N,C,y;const V=(N=(c=E[0])==null?void 0:c[1])==null?void 0:N.groupLabel,j=P.get(r);return n.jsxDEV("div",{className:"variation-group",children:[n.jsxDEV("div",{className:"variation-title",title:V,children:V},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),n.jsxDEV("div",{className:"variations-selects",children:n.jsxDEV("select",{value:j||"",onChange:k=>{v(r,k.target.value)},className:"variation-select",tabIndex:f?-1:0,title:((y=(C=E.find(([k])=>k===j))==null?void 0:C[1])==null?void 0:y.label)||"",children:E.map(([k,{label:A}])=>n.jsxDEV("option",{value:k,title:A,children:A},k,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function ze({position:r="bottom-right",minimizedByDefault:E=!1,className:P,...v}){const[f,V]=u.useState(E),[j,c]=u.useState(!1),[N,C]=u.useState("variations"),{activeIds:y,setActiveId:k,variations:A}=F(),[w,l]=Pe(),h=()=>{const i=new URLSearchParams(window.location.search),a=Array.from(y.entries());if(a.length>0){const L=a.map(([$,G])=>`${$}.${G}`).join("_");i.set("var",L)}else i.delete("var");const p=i.toString(),T=window.location.href.split("?")[0]+(p?`?${p}`:"");navigator.clipboard.writeText(T).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})},d=u.useMemo(()=>{const i=new Map;return Array.from(A.entries()).forEach(([a,p])=>{const{group:T,label:L,groupLabel:$}=p;i.has(T)||i.set(T,[]),i.get(T).push([a,{label:L,groupLabel:$}])}),i},[A]),g=(()=>{const i=[],a=new Set;if(d.has("root")){const p=d.get("root");i.push(n.jsxDEV(ye,{group:"root",variations:p,activeIds:y,setActiveId:k,isMinimized:f},"root",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:217,columnNumber:9},this)),a.add("root")}return Array.from(y.entries()).forEach(([p])=>{if(!a.has(p)&&d.has(p)){const T=d.get(p);i.push(n.jsxDEV(ye,{group:p,variations:T,activeIds:y,setActiveId:k,isMinimized:f},p,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:234,columnNumber:11},this)),a.add(p)}}),i.length===0?n.jsxDEV("div",{className:"variations-empty",children:[n.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:250,columnNumber:11},this),n.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",n.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:252,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:251,columnNumber:11},this),n.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:254,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:249,columnNumber:9},this):i})();return u.useEffect(()=>{const i=a=>{a.code==="KeyV"&&a.altKey&&!a.ctrlKey&&!a.shiftKey&&!a.metaKey&&(a.preventDefault(),V(p=>!p))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),n.jsxDEV("div",{className:`variations-controls-container ${P||""}`,...v,children:[n.jsxDEV("div",{className:`variations-controls ${f?"minimized":""}`,children:f?n.jsxDEV("button",{className:"variations-circle",onClick:()=>V(!1),tabIndex:f?0:-1,children:n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:346,columnNumber:15},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:348,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:349,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:335,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:330,columnNumber:9},this):n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{className:"variations-header",children:[n.jsxDEV("div",{className:"variations-header-title",children:[n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:371,columnNumber:19},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:372,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:373,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:374,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:356,columnNumber:17},this),n.jsxDEV("div",{className:"variations-tabs",children:[n.jsxDEV("button",{className:`variations-tab ${N==="variations"?"active":""}`,onClick:()=>C("variations"),children:"Variations"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:377,columnNumber:19},this),n.jsxDEV("button",{className:`variations-tab ${N==="state"?"active":""}`,onClick:()=>C("state"),children:"State"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:385,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:376,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:355,columnNumber:15},this),n.jsxDEV("div",{className:"variations-header-actions",children:[n.jsxDEV("button",{className:"variations-header-button",onClick:h,title:"Copy link to clipboard",tabIndex:f?-1:0,children:j?n.jsxDEV("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxDEV("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:410,columnNumber:23},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:403,columnNumber:17},this):n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M9 17H7A5 5 0 0 1 7 7h2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:430,columnNumber:23},this),n.jsxDEV("path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:431,columnNumber:23},this),n.jsxDEV("line",{x1:"8",x2:"16",y1:"12",y2:"12"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:432,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:419,columnNumber:17},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:396,columnNumber:17},this),n.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>V(!0),tabIndex:f?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:441,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:395,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:354,columnNumber:13},this),n.jsxDEV("div",{className:"variation-content",children:N==="variations"?n.jsxDEV("div",{className:"variation-groups",children:g},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:453,columnNumber:13},this):n.jsxDEV("div",{className:"variation-state",children:n.jsxDEV("div",{className:"state-editor",children:n.jsxDEV("textarea",{value:JSON.stringify(w,null,2),onChange:i=>{try{const a=JSON.parse(i.target.value);l(a)}catch{}},spellCheck:!1,className:"state-textarea"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:457,columnNumber:21},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:456,columnNumber:19},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:455,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:451,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:353,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:328,columnNumber:7},this),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:477,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:5},this)}exports.Variation=ie;exports.Variations=Se;exports.VariationsControls=ze;exports.VariationsProvider=Ie;exports.useVariation=Oe;exports.useVariations=F;exports.useVariationsState=Pe;
