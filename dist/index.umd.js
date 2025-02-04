(function(N,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],d):(N=typeof globalThis<"u"?globalThis:N||self,d(N.variations={},N.React))})(this,function(N,d){"use strict";var B={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function _e(){if(ie)return Y;ie=1;var t=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function j(m,l,g){var k=null;if(g!==void 0&&(k=""+g),l.key!==void 0&&(k=""+l.key),"key"in l){g={};for(var u in l)u!=="key"&&(g[u]=l[u])}else g=l;return l=g.ref,{$$typeof:t,type:m,key:k,ref:l!==void 0?l:null,props:g}}return Y.Fragment=x,Y.jsx=j,Y.jsxs=j,Y}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ne(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case _:return"Portal";case pe:return"Profiler";case fe:return"StrictMode";case Q:return"Suspense";case D:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case he:return(e.displayName||"Context")+".Provider";case ge:return(e._context.displayName||"Context")+".Consumer";case Z:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case te:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function x(e){return""+e}function j(e){try{x(e);var r=!1}catch{r=!0}if(r){r=console;var o=r.error,h=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",h),x(e)}}function m(){}function l(){if(W===0){xe=console.log,we=console.info,be=console.warn,Ee=console.error,ye=console.group,ke=console.groupCollapsed,je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:m,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}function g(){if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:xe}),info:$({},e,{value:we}),warn:$({},e,{value:be}),error:$({},e,{value:Ee}),group:$({},e,{value:ye}),groupCollapsed:$({},e,{value:ke}),groupEnd:$({},e,{value:je})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function k(e){if(oe===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);oe=r&&r[1]||"",Ce=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+Ce}function u(e,r){if(!e||ne)return"";var o=ae.get(e);if(o!==void 0)return o;ne=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var h=null;h=P.H,P.H=null,l();try{var V={DetermineComponentFrameRoot:function(){try{if(r){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(I){var q=I}Reflect.construct(e,[],L)}else{try{L.call()}catch(I){q=I}e.call(L.prototype)}}else{try{throw Error()}catch(I){q=I}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(I){if(I&&q&&typeof I.stack=="string")return[I.stack,q.stack]}return[null,null]}};V.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var y=Object.getOwnPropertyDescriptor(V.DetermineComponentFrameRoot,"name");y&&y.configurable&&Object.defineProperty(V.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=V.DetermineComponentFrameRoot(),O=c[0],z=c[1];if(O&&z){var A=O.split(`
`),R=z.split(`
`);for(c=y=0;y<A.length&&!A[y].includes("DetermineComponentFrameRoot");)y++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(y===A.length||c===R.length)for(y=A.length-1,c=R.length-1;1<=y&&0<=c&&A[y]!==R[c];)c--;for(;1<=y&&0<=c;y--,c--)if(A[y]!==R[c]){if(y!==1||c!==1)do if(y--,c--,0>c||A[y]!==R[c]){var G=`
`+A[y].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,G),G}while(1<=y&&0<=c);break}}}finally{ne=!1,P.H=h,g(),Error.prepareStackTrace=o}return A=(A=e?e.displayName||e.name:"")?k(A):"",typeof e=="function"&&ae.set(e,A),A}function w(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return u(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return k(e);switch(e){case Q:return k("Suspense");case D:return k("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Z:return e=u(e.render,!1),e;case ee:return w(e.type);case te:r=e._payload,e=e._init;try{return w(e(r))}catch{}}return""}function C(){var e=P.A;return e===null?null:e.getOwner()}function T(e){if(me.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function S(e,r){function o(){Se||(Se=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function M(){var e=t(this.type);return Ve[e]||(Ve[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function E(e,r,o,h,V,y){return o=y.ref,e={$$typeof:p,type:e,key:r,props:y,_owner:V},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:M}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function f(e,r,o,h,V,y){if(typeof e=="string"||typeof e=="function"||e===K||e===pe||e===fe||e===Q||e===D||e===ze||typeof e=="object"&&e!==null&&(e.$$typeof===te||e.$$typeof===ee||e.$$typeof===he||e.$$typeof===ge||e.$$typeof===Z||e.$$typeof===Ue||e.getModuleId!==void 0)){var c=r.children;if(c!==void 0)if(h)if(re(c)){for(h=0;h<c.length;h++)a(c[h],e);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else a(c,e)}else c="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?h="null":re(e)?h="array":e!==void 0&&e.$$typeof===p?(h="<"+(t(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,c);if(me.call(r,"key")){c=t(e);var O=Object.keys(r).filter(function(A){return A!=="key"});h=0<O.length?"{key: someKey, "+O.join(": ..., ")+": ...}":"{key: someKey}",Te[c+h]||(O=0<O.length?"{"+O.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,h,c,O,c),Te[c+h]=!0)}if(c=null,o!==void 0&&(j(o),c=""+o),T(r)&&(j(r.key),c=""+r.key),"key"in r){o={};for(var z in r)z!=="key"&&(o[z]=r[z])}else o=r;return c&&S(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),E(e,c,y,V,C(),o)}function a(e,r){if(typeof e=="object"&&e&&e.$$typeof!==We){if(re(e))for(var o=0;o<e.length;o++){var h=e[o];i(h)&&s(h,r)}else if(i(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ve&&e[ve]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)i(e.value)&&s(e.value,r)}}function i(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function s(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=v(r),!Ae[r])){Ae[r]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=t(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var h=P.getCurrentStack;P.getCurrentStack=function(){var V=w(e.type);return h&&(V+=h()||""),V},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,o),P.getCurrentStack=h}}function v(e){var r="",o=C();return o&&(o=t(o.type))&&(r=`

Check the render method of \``+o+"`."),r||(e=t(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var b=d,p=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),ge=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ve=Symbol.iterator,Ye=Symbol.for("react.client.reference"),P=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=Object.prototype.hasOwnProperty,$=Object.assign,Ue=Symbol.for("react.client.reference"),re=Array.isArray,W=0,xe,we,be,Ee,ye,ke,je;m.__reactDisabledLog=!0;var oe,Ce,ne=!1,ae=new(typeof WeakMap=="function"?WeakMap:Map),We=Symbol.for("react.client.reference"),Se,Ve={},Te={},Ae={};U.Fragment=K,U.jsx=function(e,r,o,h,V){return f(e,r,o,!1,h,V)},U.jsxs=function(e,r,o,h,V){return f(e,r,o,!0,h,V)}}()),U}var le;function Me(){return le||(le=1,process.env.NODE_ENV==="production"?B.exports=_e():B.exports=Ne()),B.exports}var n=Me();const F=d.createContext(null),ce=d.createContext(null);function J(){const t=d.useContext(F);if(!t)throw new Error("useVariations must be used within a VariationsProvider");return t}function Oe(){const t=d.useContext(ce);if(!t)throw new Error("useVariationsState must be used within a VariationsProvider");return t}function Ie(t){const{activeIds:x,setActiveId:j,variations:m}=J(),l=x.get(t),g=d.useMemo(()=>Array.from(m.entries()).filter(([,u])=>u.group===t).map(([u,{label:w}])=>({id:u,label:w})),[m,t]);return{active:d.useMemo(()=>{if(!l)return null;const u=m.get(l);return u?{id:l,label:u.label}:null},[l,m]),setActive:u=>j(t,u),variations:g}}function Le({children:t,disableQueryString:x=!1,initialState:j}){const[m,l]=d.useState(new Map),[g,k]=d.useState(new Map),[u,w]=d.useState(()=>j);d.useEffect(()=>{if(x||typeof window>"u")return;const f=new URLSearchParams(window.location.search),a=f.get("var");if(a)try{const s=a.split("_").map(v=>{const[b,p]=v.split(".");if(!b||!p)throw new Error("Invalid format");return[b,p]});l(new Map(s))}catch{l(new Map)}const i=f.get("state");if(i)try{const s=JSON.parse(decodeURIComponent(i));w(s)}catch{}},[x]),d.useEffect(()=>{if(x||typeof window>"u")return;const f=new URLSearchParams(window.location.search),a=Array.from(m.entries());if(a.length===0)f.delete("var");else{const v=a.map(([b,p])=>`${b}.${p}`).join("_");f.set("var",v)}u!==void 0?f.set("state",encodeURIComponent(JSON.stringify(u))):f.delete("state");const i=f.toString(),s=i?`${window.location.pathname}?${i}`:window.location.pathname;window.history.replaceState({},"",s)},[m,u,x]),d.useEffect(()=>{if(x||typeof window>"u")return;const f=()=>{const a=new URLSearchParams(window.location.search),i=a.get("var");if(i)try{const v=i.split("_").map(b=>{const[p,_]=b.split(".");if(!p||!_)throw new Error("Invalid format");return[p,_]});l(new Map(v))}catch{l(new Map)}else l(new Map);const s=a.get("state");if(s)try{const v=JSON.parse(decodeURIComponent(s));w(v)}catch{}};return window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[x]);const C=d.useMemo(()=>{const f=m.get("root");if(!f)return null;const a=(s,v)=>{const b={id:s,group:v,children:new Map};return Array.from(g.entries()).forEach(([,p])=>{if(p.parentId===s){const _=m.get(p.group);_&&b.children.set(p.group,a(_,p.group))}}),b};return a(f,"root")},[m,g]),T=d.useCallback((f,a)=>{l(i=>{const s=new Map(i);return s.set(f,a),f==="root"?Array.from(i.keys()).forEach(v=>{v!=="root"&&s.delete(v)}):Array.from(g.entries()).find(([b])=>b===a)&&Array.from(i.keys()).forEach(b=>{const p=Array.from(g.entries()).find(([,_])=>_.group===b);p&&p[1].parentId===a&&s.delete(b)}),s})},[g]),S=d.useCallback((f,a,i,s,v)=>{k(b=>{const p=b.get(a);if((p==null?void 0:p.group)===f&&(p==null?void 0:p.label)===i&&(p==null?void 0:p.groupLabel)===s&&(p==null?void 0:p.parentId)===v)return b;const _=new Map(b);return _.set(a,{group:f,label:i,groupLabel:s,parentId:v}),_})},[]),M=d.useMemo(()=>({activeIds:m,setActiveId:T,registerVariation:S,variations:g,activeTree:C}),[m,T,S,g,C]),E=d.useMemo(()=>({state:u,setState:f=>{w(f)}}),[u]);return n.jsx(F.Provider,{value:M,children:n.jsx(ce.Provider,{value:E,children:t})})}function X(t){return t.toLowerCase().replace(/\s+/g,"-")}function H({label:t,children:x,...j}){const{group:m="",id:l,groupLabel:g,parentId:k}=j,u=d.useMemo(()=>l||X(t),[l,t]),{activeIds:w,registerVariation:C}=J(),T=w.get(m)===u;return d.useEffect(()=>{if(!m){console.error(`Variation Component Error: No group provided for variation "${t}"

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variation component is not wrapped in a Variations component

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Make sure your Variation is wrapped in a Variations component:
   <Variations label="My Variations">
     <Variation label="${t}">
       {children}
     </Variation>
   </Variations>`);return}C(m,u,t,g||m,k)},[m,u,t,g,k,C]),T?n.jsx(n.Fragment,{children:x}):null}const Pe="root";function $e(t){return d.isValidElement(t)&&t.type===H&&typeof t.props.label=="string"}function ue({isRoot:t=!1,label:x,children:j,...m}){const{parentId:l,group:g}=m,k=d.useContext(F);if(!k)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(t&&l)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const u=g||(t?Pe:X(x)),{activeIds:w,setActiveId:C,variations:T}=k,S=d.useMemo(()=>{const E=new Map;return Array.from(T.entries()).forEach(([f,a])=>{const{group:i,label:s,groupLabel:v}=a;E.has(i)||E.set(i,[]),E.get(i).push([f,{label:s,groupLabel:v}])}),E},[T]),M=d.useMemo(()=>d.Children.map(j,E=>{if(d.isValidElement(E)){if(E.type===H){if(!$e(E))throw new Error("Invalid Variation component");const f=X(E.props.label);return d.cloneElement(E,{...E.props,group:u,groupLabel:x,id:f,parentId:l})}else if(E.type===ue){const f=E,a=w.get(u),i=X(f.props.label);return d.cloneElement(f,{...f.props,parentId:a,group:i})}}return E}),[j,u,x,w,l]);return d.useEffect(()=>{if(!w.has(u)){const E=S.get(u);if(E&&E.length>0){const[f]=E[0];C(u,f)}}},[u,S,w,C]),n.jsx(n.Fragment,{children:M})}const de=({group:t,variations:x,activeIds:j,setActiveId:m,isMinimized:l})=>{var u,w,C,T;const g=(w=(u=x[0])==null?void 0:u[1])==null?void 0:w.groupLabel,k=j.get(t);return n.jsxs("div",{className:"variation-group",children:[n.jsx("div",{className:"variation-title",title:g,children:g}),n.jsx("div",{className:"variations-selects",children:n.jsx("select",{value:k||"",onChange:S=>{m(t,S.target.value)},className:"variation-select",tabIndex:l?-1:0,title:((T=(C=x.find(([S])=>S===k))==null?void 0:C[1])==null?void 0:T.label)||"",children:x.map(([S,{label:M}])=>n.jsx("option",{value:S,title:M,children:M},S))})}),n.jsx("style",{children:`
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
        `})]})};function Re({position:t="bottom-right",minimizedByDefault:x=!1,className:j,...m}){const[l,g]=d.useState(x),[k,u]=d.useState(!1),{activeIds:w,setActiveId:C,variations:T}=J(),S=()=>{const a=new URLSearchParams(window.location.search),i=Array.from(w.entries());if(i.length>0){const b=i.map(([p,_])=>`${p}.${_}`).join("_");a.set("var",b)}else a.delete("var");const s=a.toString(),v=window.location.href.split("?")[0]+(s?`?${s}`:"");navigator.clipboard.writeText(v).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},M=d.useMemo(()=>{const a=new Map;return Array.from(T.entries()).forEach(([i,s])=>{const{group:v,label:b,groupLabel:p}=s;a.has(v)||a.set(v,[]),a.get(v).push([i,{label:b,groupLabel:p}])}),a},[T]),f=(()=>{const a=[],i=new Set;if(M.has("root")){const s=M.get("root");a.push(n.jsx(de,{group:"root",variations:s,activeIds:w,setActiveId:C,isMinimized:l},"root")),i.add("root")}return Array.from(w.entries()).forEach(([s])=>{if(!i.has(s)&&M.has(s)){const v=M.get(s);a.push(n.jsx(de,{group:s,variations:v,activeIds:w,setActiveId:C,isMinimized:l},s)),i.add(s)}}),a.length===0?n.jsxs("div",{className:"variations-empty",children:[n.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),n.jsxs("div",{className:"variations-empty-text",children:["Add a ",n.jsx("code",{children:"<Variations>"})," component!"]}),n.jsx("style",{children:`
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
            `})]}):a})();return d.useEffect(()=>{const a=i=>{i.code==="KeyV"&&i.altKey&&!i.ctrlKey&&!i.shiftKey&&!i.metaKey&&(i.preventDefault(),g(s=>!s))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),n.jsxs("div",{className:`variations-controls-container ${j||""}`,...m,children:[n.jsx("div",{className:`variations-controls ${l?"minimized":""}`,children:l?n.jsx("button",{className:"variations-circle",onClick:()=>g(!1),tabIndex:l?0:-1,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"variations-header",children:[n.jsxs("div",{className:"variations-header-title",children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),n.jsxs("div",{className:"variations-header-actions",children:[n.jsx("button",{className:"variations-header-button",onClick:S,title:"Copy link to clipboard",tabIndex:l?-1:0,children:k?n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),n.jsx("button",{className:"variations-header-toggle",onClick:()=>g(!0),tabIndex:l?-1:0,children:"×"})]})]}),n.jsx("div",{className:"variation-groups",children:f})]})}),n.jsx("style",{children:`
          .variations-controls {
            font-family: system-ui, -apple-system, sans-serif;
            position: fixed;
            ${t.includes("right")?"right: 16px;":t.includes("center")?"left: 50%; transform: translateX(-50%);":"left: 16px;"}
            ${t.includes("bottom")?"bottom: 16px;":t.includes("middle")?"top: 50%; transform: translateY(-50%);":"top: 16px;"}
            ${t.includes("middle")&&t.includes("right")?"transform: translateY(-50%);":""}
            ${t.includes("middle")&&t.includes("left")?"transform: translateY(-50%);":""}
            ${t.includes("center")&&t.includes("bottom")?"transform: translateX(-50%);":""}
            ${t.includes("center")&&t.includes("top")?"transform: translateX(-50%);":""}
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
            ${t.includes("right")?"right: 16px;":t.includes("center")?"left: 50%; transform: translateX(-50%);":"left: 16px;"}
            ${t.includes("bottom")?"bottom: 16px;":t.includes("middle")?"top: 50%; transform: translateY(-50%);":"top: 16px;"}
            ${t.includes("middle")&&t.includes("right")?"transform: translateY(-50%);":""}
            ${t.includes("middle")&&t.includes("left")?"transform: translateY(-50%);":""}
            ${t.includes("center")&&t.includes("bottom")?"transform: translateX(-50%);":""}
            ${t.includes("center")&&t.includes("top")?"transform: translateX(-50%);":""}
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
        `})]})}N.Variation=H,N.Variations=ue,N.VariationsControls=Re,N.VariationsProvider=Le,N.useVariation=Ie,N.useVariations=J,N.useVariationsState=Oe,Object.defineProperty(N,Symbol.toStringTag,{value:"Module"})});
