(function(T,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],c):(T=typeof globalThis<"u"?globalThis:T||self,c(T.variations={},T.React))})(this,function(T,c){"use strict";var R={exports:{}},W={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Ae(){if(ie)return W;ie=1;var r=Symbol.for("react.fragment");return W.Fragment=r,W.jsxDEV=void 0,W}var G={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Te(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case S:return"Portal";case me:return"Profiler";case fe:return"StrictMode";case Z:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ve:return(e.displayName||"Context")+".Provider";case pe:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function w(e){return""+e}function C(e){try{w(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,v=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",v),w(e)}}function h(){}function p(){if(z===0){be=console.log,xe=console.info,we=console.warn,Ne=console.error,Ee=console.group,Ve=console.groupCollapsed,je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}z++}function N(){if(z--,z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:be}),info:I({},e,{value:xe}),warn:I({},e,{value:we}),error:I({},e,{value:Ne}),group:I({},e,{value:Ee}),groupCollapsed:I({},e,{value:Ve}),groupEnd:I({},e,{value:je})})}0>z&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function V(e){if(oe===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||"",ye=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+ye}function f(e,t){if(!e||ne)return"";var o=ae.get(e);if(o!==void 0)return o;ne=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var v=null;v=O.H,O.H=null,p();try{var A={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var K=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){K=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){K=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&K&&typeof M.stack=="string")return[M.stack,K.stack]}return[null,null]}};A.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(A.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(A.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=A.DetermineComponentFrameRoot(),_=l[0],$=l[1];if(_&&$){var P=_.split(`
`),L=$.split(`
`);for(l=b=0;b<P.length&&!P[b].includes("DetermineComponentFrameRoot");)b++;for(;l<L.length&&!L[l].includes("DetermineComponentFrameRoot");)l++;if(b===P.length||l===L.length)for(b=P.length-1,l=L.length-1;1<=b&&0<=l&&P[b]!==L[l];)l--;for(;1<=b&&0<=l;b--,l--)if(P[b]!==L[l]){if(b!==1||l!==1)do if(b--,l--,0>l||P[b]!==L[l]){var Y=`
`+P[b].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,Y),Y}while(1<=b&&0<=l);break}}}finally{ne=!1,O.H=v,N(),Error.prepareStackTrace=o}return P=(P=e?e.displayName||e.name:"")?V(P):"",typeof e=="function"&&ae.set(e,P),P}function g(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return f(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return V(e);switch(e){case Z:return V("Suspense");case Q:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case H:return e=f(e.render,!1),e;case ee:return g(e.type);case re:t=e._payload,e=e._init;try{return g(e(t))}catch{}}return""}function j(){var e=O.A;return e===null?null:e.getOwner()}function k(e){if(ge.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function y(e,t){function o(){Ce||(Ce=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function U(){var e=r(this.type);return ke[e]||(ke[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function E(e,t,o,v,A,b){return o=b.ref,e={$$typeof:d,type:e,key:t,props:b,_owner:A},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:U}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function u(e,t,o,v,A,b){if(typeof e=="string"||typeof e=="function"||e===F||e===me||e===fe||e===Z||e===Q||e===$e||typeof e=="object"&&e!==null&&(e.$$typeof===re||e.$$typeof===ee||e.$$typeof===ve||e.$$typeof===pe||e.$$typeof===H||e.$$typeof===Ye||e.getModuleId!==void 0)){var l=t.children;if(l!==void 0)if(v)if(te(l)){for(v=0;v<l.length;v++)a(l[v],e);Object.freeze&&Object.freeze(l)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else a(l,e)}else l="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?v="null":te(e)?v="array":e!==void 0&&e.$$typeof===d?(v="<"+(r(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,l);if(ge.call(t,"key")){l=r(e);var _=Object.keys(t).filter(function(P){return P!=="key"});v=0<_.length?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}",Pe[l+v]||(_=0<_.length?"{"+_.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,v,l,_,l),Pe[l+v]=!0)}if(l=null,o!==void 0&&(C(o),l=""+o),k(t)&&(C(t.key),l=""+t.key),"key"in t){o={};for(var $ in t)$!=="key"&&(o[$]=t[$])}else o=t;return l&&y(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),E(e,l,b,A,j(),o)}function a(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(te(e))for(var o=0;o<e.length;o++){var v=e[o];i(v)&&s(v,t)}else if(i(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=he&&e[he]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)i(e.value)&&s(e.value,t)}}function i(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function s(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=m(t),!Se[t])){Se[t]=!0;var o="";e&&e._owner!=null&&e._owner!==j()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var v=O.getCurrentStack;O.getCurrentStack=function(){var A=g(e.type);return v&&(A+=v()||""),A},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),O.getCurrentStack=v}}function m(e){var t="",o=j();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var x=c,d=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ve=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),he=Symbol.iterator,ze=Symbol.for("react.client.reference"),O=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=Object.prototype.hasOwnProperty,I=Object.assign,Ye=Symbol.for("react.client.reference"),te=Array.isArray,z=0,be,xe,we,Ne,Ee,Ve,je;h.__reactDisabledLog=!0;var oe,ye,ne=!1,ae=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),Ce,ke={},Pe={},Se={};G.Fragment=F,G.jsxDEV=function(e,t,o,v,A,b){return u(e,t,o,v,A,b)}}()),G}var le;function Ue(){return le||(le=1,process.env.NODE_ENV==="production"?R.exports=Ae():R.exports=Te()),R.exports}var n=Ue();const X=c.createContext(null),ce=c.createContext(null);function B(){const r=c.useContext(X);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function _e(){const r=c.useContext(ce);if(!r)throw new Error("useVariationsState must be used within a VariationsProvider");return[r.state,r.setState]}function Me(r){const{activeIds:w,setActiveId:C,variations:h}=B(),p=w.get(r),N=c.useMemo(()=>Array.from(h.entries()).filter(([,f])=>f.group===r).map(([f,{label:g}])=>({id:f,label:g})),[h,r]);return{active:c.useMemo(()=>{if(!p)return null;const f=h.get(p);return f?{id:p,label:f.label}:null},[p,h]),setActive:f=>C(r,f),variations:N}}function De({children:r,disableQueryString:w=!1,initialState:C}){const[h,p]=c.useState(new Map),[N,V]=c.useState(new Map),[f,g]=c.useState(()=>C);c.useEffect(()=>{if(w||typeof window>"u")return;const u=new URLSearchParams(window.location.search),a=u.get("var");if(a)try{const s=a.split("_").map(m=>{const[x,d]=m.split(".");if(!x||!d)throw new Error("Invalid format");return[x,d]});p(new Map(s))}catch{p(new Map)}const i=u.get("s");if(i)try{const s=JSON.parse(atob(i));g(s)}catch{}},[w]),c.useEffect(()=>{if(w||typeof window>"u")return;const u=new URLSearchParams,a=Array.from(h.entries());if(a.length>0){const m=a.map(([x,d])=>`${x}.${d}`).join("_");u.set("var",m)}if(f!==void 0){const m=btoa(JSON.stringify(f));u.set("s",m)}const i=u.toString(),s=i?`${window.location.pathname}?${i}`:window.location.pathname;window.history.replaceState({},"",s)},[h,f,w]),c.useEffect(()=>{if(w||typeof window>"u")return;const u=()=>{const a=new URLSearchParams(window.location.search),i=a.get("var");if(i)try{const m=i.split("_").map(x=>{const[d,S]=x.split(".");if(!d||!S)throw new Error("Invalid format");return[d,S]});p(new Map(m))}catch{p(new Map)}else p(new Map);const s=a.get("s");if(s)try{const m=JSON.parse(atob(s));g(m)}catch{}};return window.addEventListener("popstate",u),()=>window.removeEventListener("popstate",u)},[w]);const j=c.useMemo(()=>{const u=h.get("root");if(!u)return null;const a=(s,m)=>{const x={id:s,group:m,children:new Map};return Array.from(N.entries()).forEach(([,d])=>{if(d.parentId===s){const S=h.get(d.group);S&&x.children.set(d.group,a(S,d.group))}}),x};return a(u,"root")},[h,N]),k=c.useCallback((u,a)=>{p(i=>{const s=new Map(i);return s.set(u,a),u==="root"?Array.from(i.keys()).forEach(m=>{m!=="root"&&s.delete(m)}):Array.from(N.entries()).find(([x])=>x===a)&&Array.from(i.keys()).forEach(x=>{const d=Array.from(N.entries()).find(([,S])=>S.group===x);d&&d[1].parentId===a&&s.delete(x)}),s})},[N]),y=c.useCallback((u,a,i,s,m)=>{V(x=>{const d=x.get(a);if((d==null?void 0:d.group)===u&&(d==null?void 0:d.label)===i&&(d==null?void 0:d.groupLabel)===s&&(d==null?void 0:d.parentId)===m)return x;const S=new Map(x);return S.set(a,{group:u,label:i,groupLabel:s,parentId:m}),S})},[]),U=c.useMemo(()=>({activeIds:h,setActiveId:k,registerVariation:y,variations:N,activeTree:j}),[h,k,y,N,j]),E=c.useMemo(()=>({state:f,setState:u=>{g(u)}}),[f]);return n.jsxDEV(X.Provider,{value:U,children:n.jsxDEV(ce.Provider,{value:E,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:330,columnNumber:7},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:329,columnNumber:5},this)}function J(r){return r.toLowerCase().replace(/\s+/g,"-")}function q({label:r,children:w,...C}){const{group:h="",id:p,groupLabel:N,parentId:V}=C,f=c.useMemo(()=>p||J(r),[p,r]),{activeIds:g,registerVariation:j}=B(),k=g.get(h)===f;return c.useEffect(()=>{if(!h){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}j(h,f,r,N||h,V)},[h,f,r,N,V,j]),k?n.jsxDEV(n.Fragment,{children:w},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Oe="root";function Ie(r){return c.isValidElement(r)&&r.type===q&&typeof r.props.label=="string"}function ue({isRoot:r=!1,label:w,children:C,...h}){const{parentId:p,group:N}=h,V=c.useContext(X);if(!V)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&p)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const f=N||(r?Oe:J(w)),{activeIds:g,setActiveId:j,variations:k}=V,y=c.useMemo(()=>{const E=new Map;return Array.from(k.entries()).forEach(([u,a])=>{const{group:i,label:s,groupLabel:m}=a;E.has(i)||E.set(i,[]),E.get(i).push([u,{label:s,groupLabel:m}])}),E},[k]),U=c.useMemo(()=>c.Children.map(C,E=>{if(c.isValidElement(E)){if(E.type===q){if(!Ie(E))throw new Error("Invalid Variation component");const u=J(E.props.label);return c.cloneElement(E,{...E.props,group:f,groupLabel:w,id:u,parentId:p})}else if(E.type===ue){const u=E,a=g.get(f),i=J(u.props.label);return c.cloneElement(u,{...u.props,parentId:a,group:i})}}return E}),[C,f,w,g,p]);return c.useEffect(()=>{if(!g.has(f)){const E=y.get(f);if(E&&E.length>0){const[u]=E[0];j(f,u)}}},[f,y,g,j]),n.jsxDEV(n.Fragment,{children:U},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const de=({group:r,variations:w,activeIds:C,setActiveId:h,isMinimized:p})=>{var f,g,j,k;const N=(g=(f=w[0])==null?void 0:f[1])==null?void 0:g.groupLabel,V=C.get(r);return n.jsxDEV("div",{className:"variation-group",children:[n.jsxDEV("div",{className:"variation-title",title:N,children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),n.jsxDEV("div",{className:"variations-selects",children:n.jsxDEV("select",{value:V||"",onChange:y=>{h(r,y.target.value)},className:"variation-select",tabIndex:p?-1:0,title:((k=(j=w.find(([y])=>y===V))==null?void 0:j[1])==null?void 0:k.label)||"",children:w.map(([y,{label:U}])=>n.jsxDEV("option",{value:y,title:U,children:U},y,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function Le({position:r="bottom-right",minimizedByDefault:w=!1,className:C,...h}){const[p,N]=c.useState(w),[V,f]=c.useState(!1),{activeIds:g,setActiveId:j,variations:k}=B(),y=()=>{const a=new URLSearchParams(window.location.search),i=Array.from(g.entries());if(i.length>0){const x=i.map(([d,S])=>`${d}.${S}`).join("_");a.set("var",x)}else a.delete("var");const s=a.toString(),m=window.location.href.split("?")[0]+(s?`?${s}`:"");navigator.clipboard.writeText(m).then(()=>{f(!0),setTimeout(()=>f(!1),2e3)})},U=c.useMemo(()=>{const a=new Map;return Array.from(k.entries()).forEach(([i,s])=>{const{group:m,label:x,groupLabel:d}=s;a.has(m)||a.set(m,[]),a.get(m).push([i,{label:x,groupLabel:d}])}),a},[k]),u=(()=>{const a=[],i=new Set;if(U.has("root")){const s=U.get("root");a.push(n.jsxDEV(de,{group:"root",variations:s,activeIds:g,setActiveId:j,isMinimized:p},"root",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:213,columnNumber:9},this)),i.add("root")}return Array.from(g.entries()).forEach(([s])=>{if(!i.has(s)&&U.has(s)){const m=U.get(s);a.push(n.jsxDEV(de,{group:s,variations:m,activeIds:g,setActiveId:j,isMinimized:p},s,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:230,columnNumber:11},this)),i.add(s)}}),a.length===0?n.jsxDEV("div",{className:"variations-empty",children:[n.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:246,columnNumber:11},this),n.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",n.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:248,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:247,columnNumber:11},this),n.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:250,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:245,columnNumber:9},this):a})();return c.useEffect(()=>{const a=i=>{i.code==="KeyV"&&i.altKey&&!i.ctrlKey&&!i.shiftKey&&!i.metaKey&&(i.preventDefault(),N(s=>!s))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),n.jsxDEV("div",{className:`variations-controls-container ${C||""}`,...h,children:[n.jsxDEV("div",{className:`variations-controls ${p?"minimized":""}`,children:p?n.jsxDEV("button",{className:"variations-circle",onClick:()=>N(!1),tabIndex:p?0:-1,children:n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:342,columnNumber:15},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:343,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:344,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:345,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:331,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:326,columnNumber:9},this):n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{className:"variations-header",children:[n.jsxDEV("div",{className:"variations-header-title",children:[n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:367,columnNumber:19},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:368,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:369,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:370,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:352,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:351,columnNumber:15},this),n.jsxDEV("div",{className:"variations-header-actions",children:[n.jsxDEV("button",{className:"variations-header-button",onClick:y,title:"Copy link to clipboard",tabIndex:p?-1:0,children:V?n.jsxDEV("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxDEV("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:389,columnNumber:23},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:382,columnNumber:17},this):n.jsxDEV("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxDEV("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:405,columnNumber:23},this),n.jsxDEV("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:412,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:398,columnNumber:17},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:375,columnNumber:17},this),n.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>N(!0),tabIndex:p?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:422,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:374,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:350,columnNumber:13},this),n.jsxDEV("div",{className:"variation-groups",children:u},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:432,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:349,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:7},this),n.jsxDEV("style",{children:`
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
            padding: 0;
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
            padding: 2px 2px 0 10px;
            backdrop-filter: blur(4px);
          }

          .variations-header-title {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            line-height: 12px;
            font-weight: 700;
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

          .variation-groups {
            display: flex;
            flex-direction: column;
            padding: 2px;
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
          }
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:436,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:320,columnNumber:5},this)}T.Variation=q,T.Variations=ue,T.VariationsControls=Le,T.VariationsProvider=De,T.useVariation=Me,T.useVariations=B,T.useVariationsState=_e,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
