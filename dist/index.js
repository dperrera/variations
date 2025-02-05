"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react");var Y={exports:{}},W={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function _e(){if(Ve)return W;Ve=1;var r=Symbol.for("react.fragment");return W.Fragment=r,W.jsxDEV=void 0,W}var G={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Re(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case S:return"Portal";case se:return"Profiler";case ae:return"StrictMode";case q:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case le:return(e.displayName||"Context")+".Provider";case ie:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function w(e){return""+e}function C(e){try{w(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,v=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",v),w(e)}}function h(){}function p(){if(L===0){de=console.log,fe=console.info,me=console.warn,pe=console.error,ve=console.group,he=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}function N(){if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:de}),info:D({},e,{value:fe}),warn:D({},e,{value:me}),error:D({},e,{value:pe}),group:D({},e,{value:ve}),groupCollapsed:D({},e,{value:he}),groupEnd:D({},e,{value:ge})})}0>L&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function V(e){if(ee===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);ee=t&&t[1]||"",be=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+be}function d(e,t){if(!e||re)return"";var o=te.get(e);if(o!==void 0)return o;re=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var v=null;v=M.H,M.H=null,p();try{var A={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(_){var z=_}Reflect.construct(e,[],R)}else{try{R.call()}catch(_){z=_}e.call(R.prototype)}}else{try{throw Error()}catch(_){z=_}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(_){if(_&&z&&typeof _.stack=="string")return[_.stack,z.stack]}return[null,null]}};A.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(A.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(A.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=A.DetermineComponentFrameRoot(),U=l[0],I=l[1];if(U&&I){var P=U.split(`
`),O=I.split(`
`);for(l=b=0;b<P.length&&!P[b].includes("DetermineComponentFrameRoot");)b++;for(;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;if(b===P.length||l===O.length)for(b=P.length-1,l=O.length-1;1<=b&&0<=l&&P[b]!==O[l];)l--;for(;1<=b&&0<=l;b--,l--)if(P[b]!==O[l]){if(b!==1||l!==1)do if(b--,l--,0>l||P[b]!==O[l]){var $=`
`+P[b].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,$),$}while(1<=b&&0<=l);break}}}finally{re=!1,M.H=v,N(),Error.prepareStackTrace=o}return P=(P=e?e.displayName||e.name:"")?V(P):"",typeof e=="function"&&te.set(e,P),P}function g(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return d(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return V(e);switch(e){case q:return V("Suspense");case F:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case X:return e=d(e.render,!1),e;case H:return g(e.type);case Z:t=e._payload,e=e._init;try{return g(e(t))}catch{}}return""}function j(){var e=M.A;return e===null?null:e.getOwner()}function k(e){if(ue.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function y(e,t){function o(){xe||(xe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function T(){var e=r(this.type);return we[e]||(we[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function E(e,t,o,v,A,b){return o=b.ref,e={$$typeof:u,type:e,key:t,props:b,_owner:A},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:T}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function c(e,t,o,v,A,b){if(typeof e=="string"||typeof e=="function"||e===K||e===se||e===ae||e===q||e===F||e===Se||typeof e=="object"&&e!==null&&(e.$$typeof===Z||e.$$typeof===H||e.$$typeof===le||e.$$typeof===ie||e.$$typeof===X||e.$$typeof===Te||e.getModuleId!==void 0)){var l=t.children;if(l!==void 0)if(v)if(Q(l)){for(v=0;v<l.length;v++)a(l[v],e);Object.freeze&&Object.freeze(l)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else a(l,e)}else l="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?v="null":Q(e)?v="array":e!==void 0&&e.$$typeof===u?(v="<"+(r(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,l);if(ue.call(t,"key")){l=r(e);var U=Object.keys(t).filter(function(P){return P!=="key"});v=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",Ne[l+v]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,v,l,U,l),Ne[l+v]=!0)}if(l=null,o!==void 0&&(C(o),l=""+o),k(t)&&(C(t.key),l=""+t.key),"key"in t){o={};for(var I in t)I!=="key"&&(o[I]=t[I])}else o=t;return l&&y(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),E(e,l,b,A,j(),o)}function a(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Ue){if(Q(e))for(var o=0;o<e.length;o++){var v=e[o];s(v)&&i(v,t)}else if(s(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ce&&e[ce]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)s(e.value)&&i(e.value,t)}}function s(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function i(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=m(t),!Ee[t])){Ee[t]=!0;var o="";e&&e._owner!=null&&e._owner!==j()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var v=M.getCurrentStack;M.getCurrentStack=function(){var A=g(e.type);return v&&(A+=v()||""),A},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),M.getCurrentStack=v}}function m(e){var t="",o=j();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var x=f,u=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),le=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),ce=Symbol.iterator,Ae=Symbol.for("react.client.reference"),M=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,D=Object.assign,Te=Symbol.for("react.client.reference"),Q=Array.isArray,L=0,de,fe,me,pe,ve,he,ge;h.__reactDisabledLog=!0;var ee,be,re=!1,te=new(typeof WeakMap=="function"?WeakMap:Map),Ue=Symbol.for("react.client.reference"),xe,we={},Ne={},Ee={};G.Fragment=K,G.jsxDEV=function(e,t,o,v,A,b){return c(e,t,o,v,A,b)}}()),G}var ye;function Me(){return ye||(ye=1,process.env.NODE_ENV==="production"?Y.exports=_e():Y.exports=Re()),Y.exports}var n=Me();const oe=f.createContext(null),ke=f.createContext(null);function J(){const r=f.useContext(oe);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function De(){const r=f.useContext(ke);if(!r)throw new Error("useVariationsState must be used within a VariationsProvider");return[r.state,r.setState]}function Oe(r){const{activeIds:w,setActiveId:C,variations:h}=J(),p=w.get(r),N=f.useMemo(()=>Array.from(h.entries()).filter(([,d])=>d.group===r).map(([d,{label:g}])=>({id:d,label:g})),[h,r]);return{active:f.useMemo(()=>{if(!p)return null;const d=h.get(p);return d?{id:p,label:d.label}:null},[p,h]),setActive:d=>C(r,d),variations:N}}function Ie({children:r,disableQueryString:w=!1,initialState:C}){const[h,p]=f.useState(new Map),[N,V]=f.useState(new Map),[d,g]=f.useState(()=>C);f.useEffect(()=>{if(w||typeof window>"u")return;const c=new URLSearchParams(window.location.search),a=c.get("var");if(a)try{const i=a.split("_").map(m=>{const[x,u]=m.split(".");if(!x||!u)throw new Error("Invalid format");return[x,u]});p(new Map(i))}catch{p(new Map)}const s=c.get("s");if(s)try{const i=JSON.parse(atob(s));g(i)}catch{}},[w]),f.useEffect(()=>{if(w||typeof window>"u")return;const c=new URLSearchParams,a=Array.from(h.entries());if(a.length>0){const m=a.map(([x,u])=>`${x}.${u}`).join("_");c.set("var",m)}if(d!==void 0){const m=btoa(JSON.stringify(d));c.set("s",m)}const s=c.toString(),i=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState({},"",i)},[h,d,w]),f.useEffect(()=>{if(w||typeof window>"u")return;const c=()=>{const a=new URLSearchParams(window.location.search),s=a.get("var");if(s)try{const m=s.split("_").map(x=>{const[u,S]=x.split(".");if(!u||!S)throw new Error("Invalid format");return[u,S]});p(new Map(m))}catch{p(new Map)}else p(new Map);const i=a.get("s");if(i)try{const m=JSON.parse(atob(i));g(m)}catch{}};return window.addEventListener("popstate",c),()=>window.removeEventListener("popstate",c)},[w]);const j=f.useMemo(()=>{const c=h.get("root");if(!c)return null;const a=(i,m)=>{const x={id:i,group:m,children:new Map};return Array.from(N.entries()).forEach(([,u])=>{if(u.parentId===i){const S=h.get(u.group);S&&x.children.set(u.group,a(S,u.group))}}),x};return a(c,"root")},[h,N]),k=f.useCallback((c,a)=>{p(s=>{const i=new Map(s);return i.set(c,a),c==="root"?Array.from(s.keys()).forEach(m=>{m!=="root"&&i.delete(m)}):Array.from(N.entries()).find(([x])=>x===a)&&Array.from(s.keys()).forEach(x=>{const u=Array.from(N.entries()).find(([,S])=>S.group===x);u&&u[1].parentId===a&&i.delete(x)}),i})},[N]),y=f.useCallback((c,a,s,i,m)=>{V(x=>{const u=x.get(a);if((u==null?void 0:u.group)===c&&(u==null?void 0:u.label)===s&&(u==null?void 0:u.groupLabel)===i&&(u==null?void 0:u.parentId)===m)return x;const S=new Map(x);return S.set(a,{group:c,label:s,groupLabel:i,parentId:m}),S})},[]),T=f.useMemo(()=>({activeIds:h,setActiveId:k,registerVariation:y,variations:N,activeTree:j}),[h,k,y,N,j]),E=f.useMemo(()=>({state:d,setState:c=>{g(c)}}),[d]);return n.jsxDEV(oe.Provider,{value:T,children:n.jsxDEV(ke.Provider,{value:E,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:330,columnNumber:7},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:329,columnNumber:5},this)}function B(r){return r.toLowerCase().replace(/\s+/g,"-")}function ne({label:r,children:w,...C}){const{group:h="",id:p,groupLabel:N,parentId:V}=C,d=f.useMemo(()=>p||B(r),[p,r]),{activeIds:g,registerVariation:j}=J(),k=g.get(h)===d;return f.useEffect(()=>{if(!h){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}j(h,d,r,N||h,V)},[h,d,r,N,V,j]),k?n.jsxDEV(n.Fragment,{children:w},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Le="root";function $e(r){return f.isValidElement(r)&&r.type===ne&&typeof r.props.label=="string"}function Pe({isRoot:r=!1,label:w,children:C,...h}){const{parentId:p,group:N}=h,V=f.useContext(oe);if(!V)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&p)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const d=N||(r?Le:B(w)),{activeIds:g,setActiveId:j,variations:k}=V,y=f.useMemo(()=>{const E=new Map;return Array.from(k.entries()).forEach(([c,a])=>{const{group:s,label:i,groupLabel:m}=a;E.has(s)||E.set(s,[]),E.get(s).push([c,{label:i,groupLabel:m}])}),E},[k]),T=f.useMemo(()=>f.Children.map(C,E=>{if(f.isValidElement(E)){if(E.type===ne){if(!$e(E))throw new Error("Invalid Variation component");const c=B(E.props.label);return f.cloneElement(E,{...E.props,group:d,groupLabel:w,id:c,parentId:p})}else if(E.type===Pe){const c=E,a=g.get(d),s=B(c.props.label);return f.cloneElement(c,{...c.props,parentId:a,group:s})}}return E}),[C,d,w,g,p]);return f.useEffect(()=>{if(!g.has(d)){const E=y.get(d);if(E&&E.length>0){const[c]=E[0];j(d,c)}}},[d,y,g,j]),n.jsxDEV(n.Fragment,{children:T},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const Ce=({group:r,variations:w,activeIds:C,setActiveId:h,isMinimized:p})=>{var d,g,j,k;const N=(g=(d=w[0])==null?void 0:d[1])==null?void 0:g.groupLabel,V=C.get(r);return n.jsxDEV("div",{className:"variation-group",children:[n.jsxDEV("div",{className:"variation-title",title:N,children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),n.jsxDEV("div",{className:"variations-selects",children:n.jsxDEV("select",{value:V||"",onChange:y=>{h(r,y.target.value)},className:"variation-select",tabIndex:p?-1:0,title:((k=(j=w.find(([y])=>y===V))==null?void 0:j[1])==null?void 0:k.label)||"",children:w.map(([y,{label:T}])=>n.jsxDEV("option",{value:y,title:T,children:T},y,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function ze({position:r="bottom-right",minimizedByDefault:w=!1,className:C,...h}){const[p,N]=f.useState(w),[V,d]=f.useState(!1),{activeIds:g,setActiveId:j,variations:k}=J(),y=()=>{const a=new URLSearchParams(window.location.search),s=Array.from(g.entries());if(s.length>0){const x=s.map(([u,S])=>`${u}.${S}`).join("_");a.set("var",x)}else a.delete("var");const i=a.toString(),m=window.location.href.split("?")[0]+(i?`?${i}`:"");navigator.clipboard.writeText(m).then(()=>{d(!0),setTimeout(()=>d(!1),2e3)})},T=f.useMemo(()=>{const a=new Map;return Array.from(k.entries()).forEach(([s,i])=>{const{group:m,label:x,groupLabel:u}=i;a.has(m)||a.set(m,[]),a.get(m).push([s,{label:x,groupLabel:u}])}),a},[k]),c=(()=>{const a=[],s=new Set;if(T.has("root")){const i=T.get("root");a.push(n.jsxDEV(Ce,{group:"root",variations:i,activeIds:g,setActiveId:j,isMinimized:p},"root",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:213,columnNumber:9},this)),s.add("root")}return Array.from(g.entries()).forEach(([i])=>{if(!s.has(i)&&T.has(i)){const m=T.get(i);a.push(n.jsxDEV(Ce,{group:i,variations:m,activeIds:g,setActiveId:j,isMinimized:p},i,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:230,columnNumber:11},this)),s.add(i)}}),a.length===0?n.jsxDEV("div",{className:"variations-empty",children:[n.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:246,columnNumber:11},this),n.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",n.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:248,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:247,columnNumber:11},this),n.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:250,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:245,columnNumber:9},this):a})();return f.useEffect(()=>{const a=s=>{s.code==="KeyV"&&s.altKey&&!s.ctrlKey&&!s.shiftKey&&!s.metaKey&&(s.preventDefault(),N(i=>!i))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),n.jsxDEV("div",{className:`variations-controls-container ${C||""}`,...h,children:[n.jsxDEV("div",{className:`variations-controls ${p?"minimized":""}`,children:p?n.jsxDEV("button",{className:"variations-circle",onClick:()=>N(!1),tabIndex:p?0:-1,children:n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:342,columnNumber:15},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:343,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:344,columnNumber:15},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:345,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:331,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:326,columnNumber:9},this):n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{className:"variations-header",children:[n.jsxDEV("div",{className:"variations-header-title",children:[n.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:367,columnNumber:19},this),n.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:368,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:369,columnNumber:19},this),n.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:370,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:352,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:351,columnNumber:15},this),n.jsxDEV("div",{className:"variations-header-actions",children:[n.jsxDEV("button",{className:"variations-header-button",onClick:y,title:"Copy link to clipboard",tabIndex:p?-1:0,children:V?n.jsxDEV("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsxDEV("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:389,columnNumber:23},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:382,columnNumber:17},this):n.jsxDEV("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxDEV("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:405,columnNumber:23},this),n.jsxDEV("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:412,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:398,columnNumber:17},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:375,columnNumber:17},this),n.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>N(!0),tabIndex:p?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:422,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:374,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:350,columnNumber:13},this),n.jsxDEV("div",{className:"variation-groups",children:c},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:432,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:349,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:7},this),n.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:436,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:320,columnNumber:5},this)}exports.Variation=ne;exports.Variations=Pe;exports.VariationsControls=ze;exports.VariationsProvider=Ie;exports.useVariation=Oe;exports.useVariations=J;exports.useVariationsState=De;
