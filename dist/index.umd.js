(function(S,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],d):(S=typeof globalThis<"u"?globalThis:S||self,d(S.variations={},S.React))})(this,function(S,d){"use strict";var G={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function _e(){if(ie)return R;ie=1;var r=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function E(v,s,b){var k=null;if(b!==void 0&&(k=""+b),s.key!==void 0&&(k=""+s.key),"key"in s){b={};for(var u in s)u!=="key"&&(b[u]=s[u])}else b=s;return s=b.ref,{$$typeof:r,type:v,key:k,ref:s!==void 0?s:null,props:b}}return R.Fragment=w,R.jsx=E,R.jsxs=E,R}var z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ve(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case H:return"Portal";case fe:return"Profiler";case de:return"StrictMode";case Q:return"Suspense";case D:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ge:return(e.displayName||"Context")+".Provider";case pe:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function w(e){return""+e}function E(e){try{w(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,f=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f),w(e)}}function v(){}function s(){if(U===0){me=console.log,xe=console.info,we=console.warn,be=console.error,Ee=console.group,ke=console.groupCollapsed,ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}function b(){if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:me}),info:L({},e,{value:xe}),warn:L({},e,{value:we}),error:L({},e,{value:be}),group:L({},e,{value:Ee}),groupCollapsed:L({},e,{value:ke}),groupEnd:L({},e,{value:ye})})}0>U&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function k(e){if(oe===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||"",je=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+je}function u(e,t){if(!e||ne)return"";var o=ae.get(e);if(o!==void 0)return o;ne=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var f=null;f=I.H,I.H=null,s();try{var T={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var q=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){q=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){q=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&q&&typeof N.stack=="string")return[N.stack,q.stack]}return[null,null]}};T.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var j=Object.getOwnPropertyDescriptor(T.DetermineComponentFrameRoot,"name");j&&j.configurable&&Object.defineProperty(T.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=T.DetermineComponentFrameRoot(),V=l[0],$=l[1];if(V&&$){var A=V.split(`
`),P=$.split(`
`);for(l=j=0;j<A.length&&!A[j].includes("DetermineComponentFrameRoot");)j++;for(;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;if(j===A.length||l===P.length)for(j=A.length-1,l=P.length-1;1<=j&&0<=l&&A[j]!==P[l];)l--;for(;1<=j&&0<=l;j--,l--)if(A[j]!==P[l]){if(j!==1||l!==1)do if(j--,l--,0>l||A[j]!==P[l]){var W=`
`+A[j].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,W),W}while(1<=j&&0<=l);break}}}finally{ne=!1,I.H=f,b(),Error.prepareStackTrace=o}return A=(A=e?e.displayName||e.name:"")?k(A):"",typeof e=="function"&&ae.set(e,A),A}function y(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return u(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return k(e);switch(e){case Q:return k("Suspense");case D:return k("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Z:return e=u(e.render,!1),e;case ee:return y(e.type);case re:t=e._payload,e=e._init;try{return y(e(t))}catch{}}return""}function C(){var e=I.A;return e===null?null:e.getOwner()}function h(e){if(ve.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function p(e,t){function o(){Ce||(Ce=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function m(){var e=r(this.type);return Te[e]||(Te[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function c(e,t,o,f,T,j){return o=j.ref,e={$$typeof:O,type:e,key:t,props:j,_owner:T},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:m}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function g(e,t,o,f,T,j){if(typeof e=="string"||typeof e=="function"||e===K||e===fe||e===de||e===Q||e===D||e===$e||typeof e=="object"&&e!==null&&(e.$$typeof===re||e.$$typeof===ee||e.$$typeof===ge||e.$$typeof===pe||e.$$typeof===Z||e.$$typeof===ze||e.getModuleId!==void 0)){var l=t.children;if(l!==void 0)if(f)if(te(l)){for(f=0;f<l.length;f++)i(l[f],e);Object.freeze&&Object.freeze(l)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else i(l,e)}else l="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?f="null":te(e)?f="array":e!==void 0&&e.$$typeof===O?(f="<"+(r(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,l);if(ve.call(t,"key")){l=r(e);var V=Object.keys(t).filter(function(A){return A!=="key"});f=0<V.length?"{key: someKey, "+V.join(": ..., ")+": ...}":"{key: someKey}",Ae[l+f]||(V=0<V.length?"{"+V.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f,l,V,l),Ae[l+f]=!0)}if(l=null,o!==void 0&&(E(o),l=""+o),h(t)&&(E(t.key),l=""+t.key),"key"in t){o={};for(var $ in t)$!=="key"&&(o[$]=t[$])}else o=t;return l&&p(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),c(e,l,j,T,C(),o)}function i(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Ye){if(te(e))for(var o=0;o<e.length;o++){var f=e[o];n(f)&&x(f,t)}else if(n(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=he&&e[he]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)n(e.value)&&x(e.value,t)}}function n(e){return typeof e=="object"&&e!==null&&e.$$typeof===O}function x(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=_(t),!Se[t])){Se[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var f=I.getCurrentStack;I.getCurrentStack=function(){var T=y(e.type);return f&&(T+=f()||""),T},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),I.getCurrentStack=f}}function _(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Y=d,O=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),he=Symbol.iterator,Re=Symbol.for("react.client.reference"),I=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=Object.prototype.hasOwnProperty,L=Object.assign,ze=Symbol.for("react.client.reference"),te=Array.isArray,U=0,me,xe,we,be,Ee,ke,ye;v.__reactDisabledLog=!0;var oe,je,ne=!1,ae=new(typeof WeakMap=="function"?WeakMap:Map),Ye=Symbol.for("react.client.reference"),Ce,Te={},Ae={},Se={};z.Fragment=K,z.jsx=function(e,t,o,f,T){return g(e,t,o,!1,f,T)},z.jsxs=function(e,t,o,f,T){return g(e,t,o,!0,f,T)}}()),z}var le;function Ne(){return le||(le=1,process.env.NODE_ENV==="production"?G.exports=_e():G.exports=Ve()),G.exports}var a=Ne();const J=d.createContext(null);function B(){const r=d.useContext(J);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function Me(r){const{activeIds:w,setActiveId:E,variations:v}=B(),s=w.get(r),b=d.useMemo(()=>Array.from(v.entries()).filter(([,u])=>u.group===r).map(([u,{label:y}])=>({id:u,label:y})),[v,r]);return{active:d.useMemo(()=>{if(!s)return null;const u=v.get(s);return u?{id:s,label:u.label}:null},[s,v]),setActive:u=>E(r,u),variations:b}}function Oe({children:r,disableQueryString:w=!1}){const[E,v]=d.useState(new Map),[s,b]=d.useState(new Map);d.useEffect(()=>{if(w||typeof window>"u")return;const p=new URLSearchParams(window.location.search).get("var");if(p)try{const m=p.split("_").map(c=>{const[g,i]=c.split(".");if(!g||!i)throw new Error("Invalid format");return[g,i]});v(new Map(m))}catch{v(new Map)}},[w]),d.useEffect(()=>{if(w||typeof window>"u")return;const h=new URLSearchParams(window.location.search),p=Array.from(E.entries());if(p.length===0)h.delete("var");else{const g=p.map(([i,n])=>`${i}.${n}`).join("_");h.set("var",g)}const m=h.toString(),c=m?`${window.location.pathname}?${m}`:window.location.pathname;window.history.replaceState({},"",c)},[E,w]),d.useEffect(()=>{if(w||typeof window>"u")return;const h=()=>{const m=new URLSearchParams(window.location.search).get("var");if(m)try{const c=m.split("_").map(g=>{const[i,n]=g.split(".");if(!i||!n)throw new Error("Invalid format");return[i,n]});v(new Map(c))}catch{v(new Map)}else v(new Map)};return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[w]);const k=d.useMemo(()=>{const h=E.get("root");if(!h)return null;const p=(c,g)=>{const i={id:c,group:g,children:new Map};return Array.from(s.entries()).forEach(([,n])=>{if(n.parentId===c){const x=E.get(n.group);x&&i.children.set(n.group,p(x,n.group))}}),i};return p(h,"root")},[E,s]),u=d.useCallback((h,p)=>{v(m=>{const c=new Map(m);return c.set(h,p),h==="root"?Array.from(m.keys()).forEach(g=>{g!=="root"&&c.delete(g)}):Array.from(s.entries()).find(([i])=>i===p)&&Array.from(m.keys()).forEach(i=>{const n=Array.from(s.entries()).find(([,x])=>x.group===i);n&&n[1].parentId===p&&c.delete(i)}),c})},[s]),y=d.useCallback((h,p,m,c,g)=>{b(i=>{const n=i.get(p);if((n==null?void 0:n.group)===h&&(n==null?void 0:n.label)===m&&(n==null?void 0:n.groupLabel)===c&&(n==null?void 0:n.parentId)===g)return i;const x=new Map(i);return x.set(p,{group:h,label:m,groupLabel:c,parentId:g}),x})},[]),C=d.useMemo(()=>({activeIds:E,setActiveId:u,registerVariation:y,variations:s,activeTree:k}),[E,u,y,s,k]);return a.jsx(J.Provider,{value:C,children:r})}function X(r){return r.toLowerCase().replace(/\s+/g,"-")}function F({label:r,children:w,...E}){const{group:v="",id:s,groupLabel:b,parentId:k}=E,u=d.useMemo(()=>s||X(r),[s,r]),{activeIds:y,registerVariation:C}=B(),h=y.get(v)===u;return d.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(v,u,r,b||v,k)},[v,u,r,b,k,C]),h?a.jsx(a.Fragment,{children:w}):null}const Ie="root";function Le(r){return d.isValidElement(r)&&r.type===F&&typeof r.props.label=="string"}function ce({isRoot:r=!1,label:w,children:E,...v}){const{parentId:s,group:b}=v,k=d.useContext(J);if(!k)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&s)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const u=b||(r?Ie:X(w)),{activeIds:y,setActiveId:C,variations:h}=k,p=d.useMemo(()=>{const c=new Map;return Array.from(h.entries()).forEach(([g,i])=>{const{group:n,label:x,groupLabel:_}=i;c.has(n)||c.set(n,[]),c.get(n).push([g,{label:x,groupLabel:_}])}),c},[h]),m=d.useMemo(()=>d.Children.map(E,c=>{if(d.isValidElement(c)){if(c.type===F){if(!Le(c))throw new Error("Invalid Variation component");const g=X(c.props.label);return d.cloneElement(c,{...c.props,group:u,groupLabel:w,id:g,parentId:s})}else if(c.type===ce){const g=c,i=y.get(u),n=X(g.props.label);return d.cloneElement(g,{...g.props,parentId:i,group:n})}}return c}),[E,u,w,y,s]);return d.useEffect(()=>{if(!y.has(u)){const c=p.get(u);if(c&&c.length>0){const[g]=c[0];C(u,g)}}},[u,p,y,C]),a.jsx(a.Fragment,{children:m})}const ue=({group:r,variations:w,activeIds:E,setActiveId:v,isMinimized:s})=>{var u,y,C,h;const b=(y=(u=w[0])==null?void 0:u[1])==null?void 0:y.groupLabel,k=E.get(r);return a.jsxs("div",{className:"variation-group",children:[a.jsx("div",{className:"variation-title",title:b,children:b}),a.jsx("div",{className:"variations-selects",children:a.jsx("select",{value:k||"",onChange:p=>{v(r,p.target.value)},className:"variation-select",tabIndex:s?-1:0,title:((h=(C=w.find(([p])=>p===k))==null?void 0:C[1])==null?void 0:h.label)||"",children:w.map(([p,{label:m}])=>a.jsx("option",{value:p,title:m,children:m},p))})}),a.jsx("style",{children:`
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
        `})]})};function Pe({position:r="bottom-right",minimizedByDefault:w=!1,className:E,...v}){const[s,b]=d.useState(w),[k,u]=d.useState(!1),{activeIds:y,setActiveId:C,variations:h}=B(),p=()=>{const i=new URLSearchParams(window.location.search),n=Array.from(y.entries());if(n.length>0){const Y=n.map(([O,H])=>`${O}.${H}`).join("_");i.set("var",Y)}else i.delete("var");const x=i.toString(),_=window.location.href.split("?")[0]+(x?`?${x}`:"");navigator.clipboard.writeText(_).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},m=d.useMemo(()=>{const i=new Map;return Array.from(h.entries()).forEach(([n,x])=>{const{group:_,label:Y,groupLabel:O}=x;i.has(_)||i.set(_,[]),i.get(_).push([n,{label:Y,groupLabel:O}])}),i},[h]),g=(()=>{const i=[],n=new Set;if(m.has("root")){const x=m.get("root");i.push(a.jsx(ue,{group:"root",variations:x,activeIds:y,setActiveId:C,isMinimized:s},"root")),n.add("root")}return Array.from(y.entries()).forEach(([x])=>{if(!n.has(x)&&m.has(x)){const _=m.get(x);i.push(a.jsx(ue,{group:x,variations:_,activeIds:y,setActiveId:C,isMinimized:s},x)),n.add(x)}}),i.length===0?a.jsxs("div",{className:"variations-empty",children:[a.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),a.jsxs("div",{className:"variations-empty-text",children:["Add a ",a.jsx("code",{children:"<Variations>"})," component!"]}),a.jsx("style",{children:`
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
            `})]}):i})();return d.useEffect(()=>{const i=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),b(x=>!x))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),a.jsxs("div",{className:`variations-controls-container ${E||""}`,...v,children:[a.jsx("div",{className:`variations-controls ${s?"minimized":""}`,children:s?a.jsx("button",{className:"variations-circle",onClick:()=>b(!1),tabIndex:s?0:-1,children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"variations-header",children:[a.jsxs("div",{className:"variations-header-title",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),a.jsxs("div",{className:"variations-header-actions",children:[a.jsx("button",{className:"variations-header-button",onClick:p,title:"Copy link to clipboard",tabIndex:s?-1:0,children:k?a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsx("button",{className:"variations-header-toggle",onClick:()=>b(!0),tabIndex:s?-1:0,children:"×"})]})]}),a.jsx("div",{className:"variation-groups",children:g})]})}),a.jsx("style",{children:`
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
        `})]})}S.Variation=F,S.Variations=ce,S.VariationsControls=Pe,S.VariationsProvider=Oe,S.useVariation=Me,S.useVariations=B,Object.defineProperty(S,Symbol.toStringTag,{value:"Module"})});
