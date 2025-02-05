(function(A,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],l):(A=typeof globalThis<"u"?globalThis:A||self,l(A.variations={},A.React))})(this,function(A,l){"use strict";var J={exports:{}},B={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function Ae(){if(ce)return B;ce=1;var r=Symbol.for("react.fragment");return B.Fragment=r,B.jsxDEV=void 0,B}var K={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Te(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case p:return"Portal";case Y:return"Profiler";case z:return"StrictMode";case re:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case he:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function E(e){return""+e}function P(e){try{E(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),E(e)}}function v(){}function f(){if(W===0){xe=console.log,Ne=console.info,we=console.warn,Ee=console.error,Ve=console.group,je=console.groupCollapsed,Ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}function V(){if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:xe}),info:L({},e,{value:Ne}),warn:L({},e,{value:we}),error:L({},e,{value:Ee}),group:L({},e,{value:Ve}),groupCollapsed:L({},e,{value:je}),groupEnd:L({},e,{value:Ce})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function j(e){if(se===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||"",ye=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+ye}function u(e,t){if(!e||ie)return"";var o=le.get(e);if(o!==void 0)return o;ie=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var m=null;m=I.H,I.H=null,f();try{var U={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(D){var H=D}Reflect.construct(e,[],O)}else{try{O.call()}catch(D){H=D}e.call(O.prototype)}}else{try{throw Error()}catch(D){H=D}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(D){if(D&&H&&typeof D.stack=="string")return[D.stack,H.stack]}return[null,null]}};U.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var x=Object.getOwnPropertyDescriptor(U.DetermineComponentFrameRoot,"name");x&&x.configurable&&Object.defineProperty(U.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=U.DetermineComponentFrameRoot(),M=s[0],R=s[1];if(M&&R){var S=M.split(`
`),$=R.split(`
`);for(s=x=0;x<S.length&&!S[x].includes("DetermineComponentFrameRoot");)x++;for(;s<$.length&&!$[s].includes("DetermineComponentFrameRoot");)s++;if(x===S.length||s===$.length)for(x=S.length-1,s=$.length-1;1<=x&&0<=s&&S[x]!==$[s];)s--;for(;1<=x&&0<=s;x--,s--)if(S[x]!==$[s]){if(x!==1||s!==1)do if(x--,s--,0>s||S[x]!==$[s]){var G=`
`+S[x].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),typeof e=="function"&&le.set(e,G),G}while(1<=x&&0<=s);break}}}finally{ie=!1,I.H=m,V(),Error.prepareStackTrace=o}return S=(S=e?e.displayName||e.name:"")?j(S):"",typeof e=="function"&&le.set(e,S),S}function N(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return u(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return j(e);switch(e){case re:return j("Suspense");case te:return j("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case ee:return e=u(e.render,!1),e;case oe:return N(e.type);case ne:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return""}function C(){var e=I.A;return e===null?null:e.getOwner()}function y(e){if(ge.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function k(e,t){function o(){ke||(ke=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function T(){var e=r(this.type);return Pe[e]||(Pe[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function w(e,t,o,m,U,x){return o=x.ref,e={$$typeof:a,type:e,key:t,props:x,_owner:U},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:T}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function c(e,t,o,m,U,x){if(typeof e=="string"||typeof e=="function"||e===_||e===Y||e===z||e===re||e===te||e===$e||typeof e=="object"&&e!==null&&(e.$$typeof===ne||e.$$typeof===oe||e.$$typeof===he||e.$$typeof===F||e.$$typeof===ee||e.$$typeof===Ye||e.getModuleId!==void 0)){var s=t.children;if(s!==void 0)if(m)if(ae(s)){for(m=0;m<s.length;m++)h(s[m],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else h(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?m="null":ae(e)?m="array":e!==void 0&&e.$$typeof===a?(m="<"+(r(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,s);if(ge.call(t,"key")){s=r(e);var M=Object.keys(t).filter(function(S){return S!=="key"});m=0<M.length?"{key: someKey, "+M.join(": ..., ")+": ...}":"{key: someKey}",Se[s+m]||(M=0<M.length?"{"+M.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,s,M,s),Se[s+m]=!0)}if(s=null,o!==void 0&&(P(o),s=""+o),y(t)&&(P(t.key),s=""+t.key),"key"in t){o={};for(var R in t)R!=="key"&&(o[R]=t[R])}else o=t;return s&&k(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),w(e,s,x,U,C(),o)}function h(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(ae(e))for(var o=0;o<e.length;o++){var m=e[o];d(m)&&b(m,t)}else if(d(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=be&&e[be]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)d(e.value)&&b(e.value,t)}}function d(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function b(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=g(t),!Ue[t])){Ue[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var m=I.getCurrentStack;I.getCurrentStack=function(){var U=N(e.type);return m&&(U+=m()||""),U},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),I.getCurrentStack=m}}function g(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var i=l,a=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),he=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),be=Symbol.iterator,ze=Symbol.for("react.client.reference"),I=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=Object.prototype.hasOwnProperty,L=Object.assign,Ye=Symbol.for("react.client.reference"),ae=Array.isArray,W=0,xe,Ne,we,Ee,Ve,je,Ce;v.__reactDisabledLog=!0;var se,ye,ie=!1,le=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),ke,Pe={},Se={},Ue={};K.Fragment=_,K.jsxDEV=function(e,t,o,m,U,x){return c(e,t,o,m,U,x)}}()),K}var de;function _e(){return de||(de=1,process.env.NODE_ENV==="production"?J.exports=Ae():J.exports=Te()),J.exports}var n=_e();const Z=l.createContext(null),fe=l.createContext(null);function X(){const r=l.useContext(Z);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function me(){const r=l.useContext(fe);if(!r)throw new Error("useVariationsState must be used within a VariationsProvider");return[r.state,r.setState]}function Me(r){const{activeIds:E,setActiveId:P,variations:v}=X(),f=E.get(r),V=l.useMemo(()=>Array.from(v.entries()).filter(([,u])=>u.group===r).map(([u,{label:N}])=>({id:u,label:N})),[v,r]);return{active:l.useMemo(()=>{if(!f)return null;const u=v.get(f);return u?{id:f,label:u.label}:null},[f,v]),setActive:u=>P(r,u),variations:V}}function De({children:r,disableQueryString:E=!1,initialState:P}){const[v,f]=l.useState(new Map),[V,j]=l.useState(new Map),[u,N]=l.useState(()=>P);l.useEffect(()=>{if(E||typeof window>"u")return;const c=new URLSearchParams(window.location.search),h=c.get("var");if(h)try{const b=h.split("_").map(g=>{const[i,a]=g.split(".");if(!i||!a)throw new Error("Invalid format");return[i,a]});f(new Map(b))}catch{f(new Map)}const d=c.get("s");if(d)try{const b=JSON.parse(atob(d));N(b)}catch{}},[E]),l.useEffect(()=>{if(E||typeof window>"u")return;const c=new URLSearchParams,h=Array.from(v.entries());if(h.length>0){const g=h.map(([i,a])=>`${i}.${a}`).join("_");c.set("var",g)}if(u!==void 0){const g=btoa(JSON.stringify(u));c.set("s",g)}const d=c.toString(),b=d?`${window.location.pathname}?${d}`:window.location.pathname;window.history.replaceState({},"",b)},[v,u,E]),l.useEffect(()=>{if(E||typeof window>"u")return;const c=()=>{const h=new URLSearchParams(window.location.search),d=h.get("var");if(d)try{const g=d.split("_").map(i=>{const[a,p]=i.split(".");if(!a||!p)throw new Error("Invalid format");return[a,p]});f(new Map(g))}catch{f(new Map)}else f(new Map);const b=h.get("s");if(b)try{const g=JSON.parse(atob(b));N(g)}catch{}};return window.addEventListener("popstate",c),()=>window.removeEventListener("popstate",c)},[E]);const C=l.useMemo(()=>{const c=v.get("root");if(!c)return null;const h=(b,g)=>{const i={id:b,group:g,children:new Map};return Array.from(V.entries()).forEach(([,a])=>{if(a.parentId===b){const p=v.get(a.group);p&&i.children.set(a.group,h(p,a.group))}}),i};return h(c,"root")},[v,V]),y=l.useCallback((c,h)=>{f(d=>{const b=new Map(d);return b.set(c,h),c==="root"?Array.from(d.keys()).forEach(g=>{g!=="root"&&b.delete(g)}):Array.from(V.entries()).find(([i])=>i===h)&&Array.from(d.keys()).forEach(i=>{const a=Array.from(V.entries()).find(([,p])=>p.group===i);a&&a[1].parentId===h&&b.delete(i)}),b})},[V]),k=l.useCallback((c,h,d,b,g)=>{j(i=>{const a=i.get(h);if((a==null?void 0:a.group)===c&&(a==null?void 0:a.label)===d&&(a==null?void 0:a.groupLabel)===b&&(a==null?void 0:a.parentId)===g)return i;const p=new Map(i);return p.set(h,{group:c,label:d,groupLabel:b,parentId:g}),p})},[]),T=l.useMemo(()=>({activeIds:v,setActiveId:y,registerVariation:k,variations:V,activeTree:C}),[v,y,k,V,C]),w=l.useMemo(()=>({state:u,setState:c=>{N(c)}}),[u]);return n.jsxDEV(Z.Provider,{value:T,children:n.jsxDEV(fe.Provider,{value:w,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:330,columnNumber:7},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:329,columnNumber:5},this)}function q(r){return r.toLowerCase().replace(/\s+/g,"-")}function Q({label:r,children:E,...P}){const{group:v="",id:f,groupLabel:V,parentId:j}=P,u=l.useMemo(()=>f||q(r),[f,r]),{activeIds:N,registerVariation:C}=X(),y=N.get(v)===u;return l.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(v,u,r,V||v,j)},[v,u,r,V,j,C]),y?n.jsxDEV(n.Fragment,{children:E},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Oe="root";function Ie(r){return l.isValidElement(r)&&r.type===Q&&typeof r.props.label=="string"}function pe({isRoot:r=!1,label:E,children:P,...v}){const{parentId:f,group:V}=v,j=l.useContext(Z);if(!j)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&f)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const u=V||(r?Oe:q(E)),{activeIds:N,setActiveId:C,variations:y}=j,k=l.useMemo(()=>{const w=new Map;return Array.from(y.entries()).forEach(([c,h])=>{const{group:d,label:b,groupLabel:g}=h;w.has(d)||w.set(d,[]),w.get(d).push([c,{label:b,groupLabel:g}])}),w},[y]),T=l.useMemo(()=>l.Children.map(P,w=>{if(l.isValidElement(w)){if(w.type===Q){if(!Ie(w))throw new Error("Invalid Variation component");const c=q(w.props.label);return l.cloneElement(w,{...w.props,group:u,groupLabel:E,id:c,parentId:f})}else if(w.type===pe){const c=w,h=N.get(u),d=q(c.props.label);return l.cloneElement(c,{...c.props,parentId:h,group:d})}}return w}),[P,u,E,N,f]);return l.useEffect(()=>{if(!N.has(u)){const w=k.get(u);if(w&&w.length>0){const[c]=w[0];C(u,c)}}},[u,k,N,C]),n.jsxDEV(n.Fragment,{children:T},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const ve=({group:r,variations:E,activeIds:P,setActiveId:v,isMinimized:f})=>{var u,N,C,y;const V=(N=(u=E[0])==null?void 0:u[1])==null?void 0:N.groupLabel,j=P.get(r);return n.jsxDEV("div",{className:"variation-group",children:[n.jsxDEV("div",{className:"variation-title",title:V,children:V},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),n.jsxDEV("div",{className:"variations-selects",children:n.jsxDEV("select",{value:j||"",onChange:k=>{v(r,k.target.value)},className:"variation-select",tabIndex:f?-1:0,title:((y=(C=E.find(([k])=>k===j))==null?void 0:C[1])==null?void 0:y.label)||"",children:E.map(([k,{label:T}])=>n.jsxDEV("option",{value:k,title:T,children:T},k,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function Le({position:r="bottom-right",minimizedByDefault:E=!1,className:P,...v}){const[f,V]=l.useState(E),[j,u]=l.useState(!1),[N,C]=l.useState("variations"),{activeIds:y,setActiveId:k,variations:T}=X(),[w,c]=me(),h=()=>{const i=new URLSearchParams(window.location.search),a=Array.from(y.entries());if(a.length>0){const z=a.map(([Y,F])=>`${Y}.${F}`).join("_");i.set("var",z)}else i.delete("var");const p=i.toString(),_=window.location.href.split("?")[0]+(p?`?${p}`:"");navigator.clipboard.writeText(_).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},d=l.useMemo(()=>{const i=new Map;return Array.from(T.entries()).forEach(([a,p])=>{const{group:_,label:z,groupLabel:Y}=p;i.has(_)||i.set(_,[]),i.get(_).push([a,{label:z,groupLabel:Y}])}),i},[T]),g=(()=>{const i=[],a=new Set;if(d.has("root")){const p=d.get("root");i.push(n.jsxDEV(ve,{group:"root",variations:p,activeIds:y,setActiveId:k,isMinimized:f},"root",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:217,columnNumber:9},this)),a.add("root")}return Array.from(y.entries()).forEach(([p])=>{if(!a.has(p)&&d.has(p)){const _=d.get(p);i.push(n.jsxDEV(ve,{group:p,variations:_,activeIds:y,setActiveId:k,isMinimized:f},p,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:234,columnNumber:11},this)),a.add(p)}}),i.length===0?n.jsxDEV("div",{className:"variations-empty",children:[n.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:250,columnNumber:11},this),n.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",n.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:252,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:251,columnNumber:11},this),n.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:254,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:249,columnNumber:9},this):i})();return l.useEffect(()=>{const i=a=>{a.code==="KeyV"&&a.altKey&&!a.ctrlKey&&!a.shiftKey&&!a.metaKey&&(a.preventDefault(),V(p=>!p))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),n.jsxDEV("div",{className:`variations-controls-container ${P||""}`,...v,children:[n.jsxDEV("div",{className:`variations-controls ${f?"minimized":""}`,children:f?n.jsxDEV("button",{className:"variations-circle",onClick:()=>V(!1),tabIndex:f?0:-1,children:n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:346,columnNumber:15},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:348,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:349,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:335,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:330,columnNumber:9},this):n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{className:"variations-header",children:[n.jsxDEV("div",{className:"variations-header-title",children:[n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:371,columnNumber:19},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:372,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:373,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:374,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:356,columnNumber:17},this),n.jsxDEV("div",{className:"variations-tabs",children:[n.jsxDEV("button",{className:`variations-tab ${N==="variations"?"active":""}`,onClick:()=>C("variations"),children:"Variations"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:377,columnNumber:19},this),n.jsxDEV("button",{className:`variations-tab ${N==="state"?"active":""}`,onClick:()=>C("state"),children:"State"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:385,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:376,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:355,columnNumber:15},this),n.jsxDEV("div",{className:"variations-header-actions",children:[n.jsxDEV("button",{className:"variations-header-button",onClick:h,title:"Copy link to clipboard",tabIndex:f?-1:0,children:j?n.jsxDEV("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxDEV("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:410,columnNumber:23},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:403,columnNumber:17},this):n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M9 17H7A5 5 0 0 1 7 7h2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:430,columnNumber:23},this),n.jsxDEV("path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:431,columnNumber:23},this),n.jsxDEV("line",{x1:"8",x2:"16",y1:"12",y2:"12"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:432,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:419,columnNumber:17},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:396,columnNumber:17},this),n.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>V(!0),tabIndex:f?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:441,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:395,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:354,columnNumber:13},this),n.jsxDEV("div",{className:"variation-content",children:N==="variations"?n.jsxDEV("div",{className:"variation-groups",children:g},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:453,columnNumber:13},this):n.jsxDEV("div",{className:"variation-state",children:n.jsxDEV("div",{className:"state-editor",children:n.jsxDEV("textarea",{value:JSON.stringify(w,null,2),onChange:i=>{try{const a=JSON.parse(i.target.value);c(a)}catch{}},spellCheck:!1,className:"state-textarea"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:457,columnNumber:21},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:456,columnNumber:19},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:455,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:451,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:353,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:328,columnNumber:7},this),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:477,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:5},this)}A.Variation=Q,A.Variations=pe,A.VariationsControls=Le,A.VariationsProvider=De,A.useVariation=Me,A.useVariations=X,A.useVariationsState=me,Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});
