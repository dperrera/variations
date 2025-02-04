(function(_,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(_=typeof globalThis<"u"?globalThis:_||self,u(_.variations={},_.React))})(this,function(_,u){"use strict";var G={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function _e(){if(ae)return R;ae=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function k(w,c,b){var y=null;if(b!==void 0&&(y=""+b),c.key!==void 0&&(y=""+c.key),"key"in c){b={};for(var m in c)m!=="key"&&(b[m]=c[m])}else b=c;return c=b.ref,{$$typeof:r,type:w,key:y,ref:c!==void 0?c:null,props:b}}return R.Fragment=x,R.jsx=k,R.jsxs=k,R}var z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Ne(){return ie||(ie=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case F:return"Portal";case fe:return"Profiler";case de:return"StrictMode";case Z:return"Suspense";case Q:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ge:return(e.displayName||"Context")+".Provider";case pe:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function x(e){return""+e}function k(e){try{x(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,d=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",d),x(e)}}function w(){}function c(){if(U===0){me=console.log,xe=console.info,we=console.warn,be=console.error,Ee=console.group,ke=console.groupCollapsed,ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:w,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}function b(){if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:me}),info:I({},e,{value:xe}),warn:I({},e,{value:we}),error:I({},e,{value:be}),group:I({},e,{value:Ee}),groupCollapsed:I({},e,{value:ke}),groupEnd:I({},e,{value:ye})})}0>U&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function y(e){if(te===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);te=t&&t[1]||"",je=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+je}function m(e,t){if(!e||oe)return"";var o=ne.get(e);if(o!==void 0)return o;oe=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var d=null;d=L.H,L.H=null,c();try{var T={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(V){var X=V}Reflect.construct(e,[],M)}else{try{M.call()}catch(V){X=V}e.call(M.prototype)}}else{try{throw Error()}catch(V){X=V}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(V){if(V&&X&&typeof V.stack=="string")return[V.stack,X.stack]}return[null,null]}};T.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var E=Object.getOwnPropertyDescriptor(T.DetermineComponentFrameRoot,"name");E&&E.configurable&&Object.defineProperty(T.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=T.DetermineComponentFrameRoot(),N=s[0],$=s[1];if(N&&$){var A=N.split(`
`),P=$.split(`
`);for(s=E=0;E<A.length&&!A[E].includes("DetermineComponentFrameRoot");)E++;for(;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;if(E===A.length||s===P.length)for(E=A.length-1,s=P.length-1;1<=E&&0<=s&&A[E]!==P[s];)s--;for(;1<=E&&0<=s;E--,s--)if(A[E]!==P[s]){if(E!==1||s!==1)do if(E--,s--,0>s||A[E]!==P[s]){var W=`
`+A[E].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),typeof e=="function"&&ne.set(e,W),W}while(1<=E&&0<=s);break}}}finally{oe=!1,L.H=d,b(),Error.prepareStackTrace=o}return A=(A=e?e.displayName||e.name:"")?y(A):"",typeof e=="function"&&ne.set(e,A),A}function j(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return m(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return y(e);switch(e){case Z:return y("Suspense");case Q:return y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case K:return e=m(e.render,!1),e;case D:return j(e.type);case ee:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return""}function C(){var e=L.A;return e===null?null:e.getOwner()}function g(e){if(ve.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function f(e,t){function o(){Ce||(Ce=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function h(){var e=r(this.type);return Te[e]||(Te[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function l(e,t,o,d,T,E){return o=E.ref,e={$$typeof:O,type:e,key:t,props:E,_owner:T},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:h}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function p(e,t,o,d,T,E){if(typeof e=="string"||typeof e=="function"||e===H||e===fe||e===de||e===Z||e===Q||e===Pe||typeof e=="object"&&e!==null&&(e.$$typeof===ee||e.$$typeof===D||e.$$typeof===ge||e.$$typeof===pe||e.$$typeof===K||e.$$typeof===Re||e.getModuleId!==void 0)){var s=t.children;if(s!==void 0)if(d)if(re(s)){for(d=0;d<s.length;d++)i(s[d],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else i(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?d="null":re(e)?d="array":e!==void 0&&e.$$typeof===O?(d="<"+(r(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):d=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",d,s);if(ve.call(t,"key")){s=r(e);var N=Object.keys(t).filter(function(A){return A!=="key"});d=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",Ae[s+d]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,d,s,N,s),Ae[s+d]=!0)}if(s=null,o!==void 0&&(k(o),s=""+o),g(t)&&(k(t.key),s=""+t.key),"key"in t){o={};for(var $ in t)$!=="key"&&(o[$]=t[$])}else o=t;return s&&f(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),l(e,s,E,T,C(),o)}function i(e,t){if(typeof e=="object"&&e&&e.$$typeof!==ze){if(re(e))for(var o=0;o<e.length;o++){var d=e[o];n(d)&&v(d,t)}else if(n(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=he&&e[he]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)n(e.value)&&v(e.value,t)}}function n(e){return typeof e=="object"&&e!==null&&e.$$typeof===O}function v(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=S(t),!Se[t])){Se[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var d=L.getCurrentStack;L.getCurrentStack=function(){var T=j(e.type);return d&&(T+=d()||""),T},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),L.getCurrentStack=d}}function S(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Y=u,O=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),he=Symbol.iterator,$e=Symbol.for("react.client.reference"),L=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=Object.prototype.hasOwnProperty,I=Object.assign,Re=Symbol.for("react.client.reference"),re=Array.isArray,U=0,me,xe,we,be,Ee,ke,ye;w.__reactDisabledLog=!0;var te,je,oe=!1,ne=new(typeof WeakMap=="function"?WeakMap:Map),ze=Symbol.for("react.client.reference"),Ce,Te={},Ae={},Se={};z.Fragment=H,z.jsx=function(e,t,o,d,T){return p(e,t,o,!1,d,T)},z.jsxs=function(e,t,o,d,T){return p(e,t,o,!0,d,T)}}()),z}var se;function Ve(){return se||(se=1,process.env.NODE_ENV==="production"?G.exports=_e():G.exports=Ne()),G.exports}var a=Ve();const q=u.createContext(null),le=()=>{const r=u.useContext(q);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Me({children:r,disableQueryString:x=!1}){const[k,w]=u.useState(new Map),[c,b]=u.useState(new Map);u.useEffect(()=>{if(x||typeof window>"u")return;const f=new URLSearchParams(window.location.search).get("var");if(f)try{const h=f.split("_").map(l=>{const[p,i]=l.split(".");if(!p||!i)throw new Error("Invalid format");return[p,i]});w(new Map(h))}catch{w(new Map)}},[x]),u.useEffect(()=>{if(x||typeof window>"u")return;const g=new URLSearchParams(window.location.search),f=Array.from(k.entries());if(f.length===0)g.delete("var");else{const p=f.map(([i,n])=>`${i}.${n}`).join("_");g.set("var",p)}const h=g.toString(),l=h?`${window.location.pathname}?${h}`:window.location.pathname;window.history.replaceState({},"",l)},[k,x]),u.useEffect(()=>{if(x||typeof window>"u")return;const g=()=>{const h=new URLSearchParams(window.location.search).get("var");if(h)try{const l=h.split("_").map(p=>{const[i,n]=p.split(".");if(!i||!n)throw new Error("Invalid format");return[i,n]});w(new Map(l))}catch{w(new Map)}else w(new Map)};return window.addEventListener("popstate",g),()=>window.removeEventListener("popstate",g)},[x]);const y=u.useMemo(()=>{const g=k.get("root");if(!g)return null;const f=(l,p)=>{const i={id:l,group:p,children:new Map};return Array.from(c.entries()).forEach(([,n])=>{if(n.parentId===l){const v=k.get(n.group);v&&i.children.set(n.group,f(v,n.group))}}),i};return f(g,"root")},[k,c]),m=u.useCallback((g,f)=>{w(h=>{const l=new Map(h);return l.set(g,f),g==="root"?Array.from(h.keys()).forEach(p=>{p!=="root"&&l.delete(p)}):Array.from(c.entries()).find(([i])=>i===f)&&Array.from(h.keys()).forEach(i=>{const n=Array.from(c.entries()).find(([,v])=>v.group===i);n&&n[1].parentId===f&&l.delete(i)}),l})},[c]),j=u.useCallback((g,f,h,l,p)=>{b(i=>{const n=i.get(f);if((n==null?void 0:n.group)===g&&(n==null?void 0:n.label)===h&&(n==null?void 0:n.groupLabel)===l&&(n==null?void 0:n.parentId)===p)return i;const v=new Map(i);return v.set(f,{group:g,label:h,groupLabel:l,parentId:p}),v})},[]),C=u.useMemo(()=>({activeIds:k,setActiveId:m,registerVariation:j,variations:c,activeTree:y}),[k,m,j,c,y]);return a.jsx(q.Provider,{value:C,children:r})}function B(r){return r.toLowerCase().replace(/\s+/g,"-")}function J({label:r,children:x,...k}){const{group:w="",id:c,groupLabel:b,parentId:y}=k,m=u.useMemo(()=>c||B(r),[c,r]),{activeIds:j,registerVariation:C}=le(),g=j.get(w)===m;return u.useEffect(()=>{if(!w){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(w,m,r,b||w,y)},[w,m,r,b,y,C]),g?a.jsx(a.Fragment,{children:x}):null}const Oe="root";function Le(r){return u.isValidElement(r)&&r.type===J&&typeof r.props.label=="string"}function ce({isRoot:r=!1,label:x,children:k,...w}){const{parentId:c,group:b}=w,y=u.useContext(q);if(!y)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&c)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const m=b||(r?Oe:B(x)),{activeIds:j,setActiveId:C,variations:g}=y,f=u.useMemo(()=>{const l=new Map;return Array.from(g.entries()).forEach(([p,i])=>{const{group:n,label:v,groupLabel:S}=i;l.has(n)||l.set(n,[]),l.get(n).push([p,{label:v,groupLabel:S}])}),l},[g]),h=u.useMemo(()=>u.Children.map(k,l=>{if(u.isValidElement(l)){if(l.type===J){if(!Le(l))throw new Error("Invalid Variation component");const p=B(l.props.label);return u.cloneElement(l,{...l.props,group:m,groupLabel:x,id:p,parentId:c})}else if(l.type===ce){const p=l,i=j.get(m),n=B(p.props.label);return u.cloneElement(p,{...p.props,parentId:i,group:n})}}return l}),[k,m,x,j,c]);return u.useEffect(()=>{if(!j.has(m)){const l=f.get(m);if(l&&l.length>0){const[p]=l[0];C(m,p)}}},[m,f,j,C]),a.jsx(a.Fragment,{children:h})}const ue=({group:r,variations:x,activeIds:k,setActiveId:w,isMinimized:c})=>{var m,j,C,g;const b=(j=(m=x[0])==null?void 0:m[1])==null?void 0:j.groupLabel,y=k.get(r);return a.jsxs("div",{className:"variation-group",children:[a.jsx("div",{className:"variation-title",title:b,children:b}),a.jsx("div",{className:"variations-selects",children:a.jsx("select",{value:y||"",onChange:f=>{w(r,f.target.value)},className:"variation-select",tabIndex:c?-1:0,title:((g=(C=x.find(([f])=>f===y))==null?void 0:C[1])==null?void 0:g.label)||"",children:x.map(([f,{label:h}])=>a.jsx("option",{value:f,title:h,children:h},f))})}),a.jsx("style",{children:`
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
        `})]})};function Ie({position:r="bottom-right",minimizedByDefault:x=!1,className:k,...w}){const[c,b]=u.useState(x),[y,m]=u.useState(!1),{activeIds:j,setActiveId:C,variations:g}=le(),f=()=>{const i=new URLSearchParams(window.location.search),n=Array.from(j.entries());if(n.length>0){const Y=n.map(([O,F])=>`${O}.${F}`).join("_");i.set("var",Y)}else i.delete("var");const v=i.toString(),S=window.location.href.split("?")[0]+(v?`?${v}`:"");navigator.clipboard.writeText(S).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)})},h=u.useMemo(()=>{const i=new Map;return Array.from(g.entries()).forEach(([n,v])=>{const{group:S,label:Y,groupLabel:O}=v;i.has(S)||i.set(S,[]),i.get(S).push([n,{label:Y,groupLabel:O}])}),i},[g]),p=(()=>{const i=[],n=new Set;if(h.has("root")){const v=h.get("root");i.push(a.jsx(ue,{group:"root",variations:v,activeIds:j,setActiveId:C,isMinimized:c},"root")),n.add("root")}return Array.from(j.entries()).forEach(([v])=>{if(!n.has(v)&&h.has(v)){const S=h.get(v);i.push(a.jsx(ue,{group:v,variations:S,activeIds:j,setActiveId:C,isMinimized:c},v)),n.add(v)}}),i.length===0?a.jsxs("div",{className:"variations-empty",children:[a.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),a.jsxs("div",{className:"variations-empty-text",children:["Add a ",a.jsx("code",{children:"<Variations>"})," component!"]}),a.jsx("style",{children:`
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
            `})]}):i})();return u.useEffect(()=>{const i=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),b(v=>!v))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),a.jsxs("div",{className:`variations-controls-container ${k||""}`,...w,children:[a.jsx("div",{className:`variations-controls ${c?"minimized":""}`,children:c?a.jsx("button",{className:"variations-circle",onClick:()=>b(!1),tabIndex:c?0:-1,children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"variations-header",children:[a.jsxs("div",{className:"variations-header-title",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),a.jsxs("div",{className:"variations-header-actions",children:[a.jsx("button",{className:"variations-header-button",onClick:f,title:"Copy link to clipboard",tabIndex:c?-1:0,children:y?a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsx("button",{className:"variations-header-toggle",onClick:()=>b(!0),tabIndex:c?-1:0,children:"×"})]})]}),a.jsx("div",{className:"variation-groups",children:p})]})}),a.jsx("style",{children:`
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
        `})]})}_.Variation=J,_.Variations=ce,_.VariationsControls=Ie,_.VariationsProvider=Me,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
