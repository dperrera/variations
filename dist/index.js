"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("react");var G={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function Ve(){if(ke)return Y;ke=1;var r=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function k(w,c,b){var y=null;if(b!==void 0&&(y=""+b),c.key!==void 0&&(y=""+c.key),"key"in c){b={};for(var v in c)v!=="key"&&(b[v]=c[v])}else b=c;return c=b.ref,{$$typeof:r,type:w,key:y,ref:c!==void 0?c:null,props:b}}return Y.Fragment=x,Y.jsx=k,Y.jsxs=k,Y}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Me(){return ye||(ye=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case X:return"Portal";case ae:return"Profiler";case ne:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case se:return(e.displayName||"Context")+".Provider";case ie:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function x(e){return""+e}function k(e){try{x(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),x(e)}}function w(){}function c(){if($===0){ue=console.log,de=console.info,fe=console.warn,pe=console.error,ge=console.group,he=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:w,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}function b(){if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:ue}),info:O({},e,{value:de}),warn:O({},e,{value:fe}),error:O({},e,{value:pe}),group:O({},e,{value:ge}),groupCollapsed:O({},e,{value:he}),groupEnd:O({},e,{value:ve})})}0>$&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function y(e){if(D===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||"",me=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+D+e+me}function v(e,t){if(!e||ee)return"";var o=re.get(e);if(o!==void 0)return o;ee=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var u=null;u=M.H,M.H=null,c();try{var T={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(R){var W=R}Reflect.construct(e,[],N)}else{try{N.call()}catch(R){W=R}e.call(N.prototype)}}else{try{throw Error()}catch(R){W=R}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(R){if(R&&W&&typeof R.stack=="string")return[R.stack,W.stack]}return[null,null]}};T.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var E=Object.getOwnPropertyDescriptor(T.DetermineComponentFrameRoot,"name");E&&E.configurable&&Object.defineProperty(T.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=T.DetermineComponentFrameRoot(),_=s[0],I=s[1];if(_&&I){var A=_.split(`
`),L=I.split(`
`);for(s=E=0;E<A.length&&!A[E].includes("DetermineComponentFrameRoot");)E++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(E===A.length||s===L.length)for(E=A.length-1,s=L.length-1;1<=E&&0<=s&&A[E]!==L[s];)s--;for(;1<=E&&0<=s;E--,s--)if(A[E]!==L[s]){if(E!==1||s!==1)do if(E--,s--,0>s||A[E]!==L[s]){var z=`
`+A[E].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),typeof e=="function"&&re.set(e,z),z}while(1<=E&&0<=s);break}}}finally{ee=!1,M.H=u,b(),Error.prepareStackTrace=o}return A=(A=e?e.displayName||e.name:"")?y(A):"",typeof e=="function"&&re.set(e,A),A}function j(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return v(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return y(e);switch(e){case F:return y("Suspense");case H:return y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case J:return e=v(e.render,!1),e;case K:return j(e.type);case Z:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return""}function C(){var e=M.A;return e===null?null:e.getOwner()}function p(e){if(ce.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function d(e,t){function o(){xe||(xe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function g(){var e=r(this.type);return we[e]||(we[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function l(e,t,o,u,T,E){return o=E.ref,e={$$typeof:V,type:e,key:t,props:E,_owner:T},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:g}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function f(e,t,o,u,T,E){if(typeof e=="string"||typeof e=="function"||e===q||e===ae||e===ne||e===F||e===H||e===Se||typeof e=="object"&&e!==null&&(e.$$typeof===Z||e.$$typeof===K||e.$$typeof===se||e.$$typeof===ie||e.$$typeof===J||e.$$typeof===Re||e.getModuleId!==void 0)){var s=t.children;if(s!==void 0)if(u)if(Q(s)){for(u=0;u<s.length;u++)i(s[u],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else i(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?u="null":Q(e)?u="array":e!==void 0&&e.$$typeof===V?(u="<"+(r(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,s);if(ce.call(t,"key")){s=r(e);var _=Object.keys(t).filter(function(A){return A!=="key"});u=0<_.length?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}",be[s+u]||(_=0<_.length?"{"+_.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,u,s,_,s),be[s+u]=!0)}if(s=null,o!==void 0&&(k(o),s=""+o),p(t)&&(k(t.key),s=""+t.key),"key"in t){o={};for(var I in t)I!=="key"&&(o[I]=t[I])}else o=t;return s&&d(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),l(e,s,E,T,C(),o)}function i(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Ne){if(Q(e))for(var o=0;o<e.length;o++){var u=e[o];n(u)&&h(u,t)}else if(n(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=le&&e[le]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)n(e.value)&&h(e.value,t)}}function n(e){return typeof e=="object"&&e!==null&&e.$$typeof===V}function h(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=S(t),!Ee[t])){Ee[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var u=M.getCurrentStack;M.getCurrentStack=function(){var T=j(e.type);return u&&(T+=u()||""),T},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),M.getCurrentStack=u}}function S(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var P=m,V=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),se=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),le=Symbol.iterator,_e=Symbol.for("react.client.reference"),M=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=Object.prototype.hasOwnProperty,O=Object.assign,Re=Symbol.for("react.client.reference"),Q=Array.isArray,$=0,ue,de,fe,pe,ge,he,ve;w.__reactDisabledLog=!0;var D,me,ee=!1,re=new(typeof WeakMap=="function"?WeakMap:Map),Ne=Symbol.for("react.client.reference"),xe,we={},be={},Ee={};U.Fragment=q,U.jsx=function(e,t,o,u,T){return f(e,t,o,!1,u,T)},U.jsxs=function(e,t,o,u,T){return f(e,t,o,!0,u,T)}}()),U}var je;function Oe(){return je||(je=1,process.env.NODE_ENV==="production"?G.exports=Ve():G.exports=Me()),G.exports}var a=Oe();const te=m.createContext(null),Te=()=>{const r=m.useContext(te);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Le({children:r,disableQueryString:x=!1}){const[k,w]=m.useState(new Map),[c,b]=m.useState(new Map);m.useEffect(()=>{if(x||typeof window>"u")return;const d=new URLSearchParams(window.location.search).get("var");if(d)try{const g=d.split("_").map(l=>{const[f,i]=l.split(".");if(!f||!i)throw new Error("Invalid format");return[f,i]});w(new Map(g))}catch{w(new Map)}},[x]),m.useEffect(()=>{if(x||typeof window>"u")return;const p=new URLSearchParams(window.location.search),d=Array.from(k.entries());if(d.length===0)p.delete("var");else{const f=d.map(([i,n])=>`${i}.${n}`).join("_");p.set("var",f)}const g=p.toString(),l=g?`${window.location.pathname}?${g}`:window.location.pathname;window.history.replaceState({},"",l)},[k,x]),m.useEffect(()=>{if(x||typeof window>"u")return;const p=()=>{const g=new URLSearchParams(window.location.search).get("var");if(g)try{const l=g.split("_").map(f=>{const[i,n]=f.split(".");if(!i||!n)throw new Error("Invalid format");return[i,n]});w(new Map(l))}catch{w(new Map)}else w(new Map)};return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[x]);const y=m.useMemo(()=>{const p=k.get("root");if(!p)return null;const d=(l,f)=>{const i={id:l,group:f,children:new Map};return Array.from(c.entries()).forEach(([,n])=>{if(n.parentId===l){const h=k.get(n.group);h&&i.children.set(n.group,d(h,n.group))}}),i};return d(p,"root")},[k,c]),v=m.useCallback((p,d)=>{w(g=>{const l=new Map(g);return l.set(p,d),p==="root"?Array.from(g.keys()).forEach(f=>{f!=="root"&&l.delete(f)}):Array.from(c.entries()).find(([i])=>i===d)&&Array.from(g.keys()).forEach(i=>{const n=Array.from(c.entries()).find(([,h])=>h.group===i);n&&n[1].parentId===d&&l.delete(i)}),l})},[c]),j=m.useCallback((p,d,g,l,f)=>{b(i=>{const n=i.get(d);if((n==null?void 0:n.group)===p&&(n==null?void 0:n.label)===g&&(n==null?void 0:n.groupLabel)===l&&(n==null?void 0:n.parentId)===f)return i;const h=new Map(i);return h.set(d,{group:p,label:g,groupLabel:l,parentId:f}),h})},[]),C=m.useMemo(()=>({activeIds:k,setActiveId:v,registerVariation:j,variations:c,activeTree:y}),[k,v,j,c,y]);return a.jsx(te.Provider,{value:C,children:r})}function B(r){return r.toLowerCase().replace(/\s+/g,"-")}function oe({label:r,children:x,...k}){const{group:w="",id:c,groupLabel:b,parentId:y}=k,v=m.useMemo(()=>c||B(r),[c,r]),{activeIds:j,registerVariation:C}=Te(),p=j.get(w)===v;return m.useEffect(()=>{if(!w){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(w,v,r,b||w,y)},[w,v,r,b,y,C]),p?a.jsx(a.Fragment,{children:x}):null}const Ie="root";function Pe(r){return m.isValidElement(r)&&r.type===oe&&typeof r.props.label=="string"}function Ae({isRoot:r=!1,label:x,children:k,...w}){const{parentId:c,group:b}=w,y=m.useContext(te);if(!y)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&c)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const v=b||(r?Ie:B(x)),{activeIds:j,setActiveId:C,variations:p}=y,d=m.useMemo(()=>{const l=new Map;return Array.from(p.entries()).forEach(([f,i])=>{const{group:n,label:h,groupLabel:S}=i;l.has(n)||l.set(n,[]),l.get(n).push([f,{label:h,groupLabel:S}])}),l},[p]),g=m.useMemo(()=>m.Children.map(k,l=>{if(m.isValidElement(l)){if(l.type===oe){if(!Pe(l))throw new Error("Invalid Variation component");const f=B(l.props.label);return m.cloneElement(l,{...l.props,group:v,groupLabel:x,id:f,parentId:c})}else if(l.type===Ae){const f=l,i=j.get(v),n=B(f.props.label);return m.cloneElement(f,{...f.props,parentId:i,group:n})}}return l}),[k,v,x,j,c]);return m.useEffect(()=>{if(!j.has(v)){const l=d.get(v);if(l&&l.length>0){const[f]=l[0];C(v,f)}}},[v,d,j,C]),a.jsx(a.Fragment,{children:g})}const Ce=({group:r,variations:x,activeIds:k,setActiveId:w,isMinimized:c})=>{var v,j,C,p;const b=(j=(v=x[0])==null?void 0:v[1])==null?void 0:j.groupLabel,y=k.get(r);return a.jsxs("div",{className:"variation-group",children:[a.jsx("div",{className:"variation-title",title:b,children:b}),a.jsx("div",{className:"variations-selects",children:a.jsx("select",{value:y||"",onChange:d=>{w(r,d.target.value)},className:"variation-select",tabIndex:c?-1:0,title:((p=(C=x.find(([d])=>d===y))==null?void 0:C[1])==null?void 0:p.label)||"",children:x.map(([d,{label:g}])=>a.jsx("option",{value:d,title:g,children:g},d))})}),a.jsx("style",{children:`
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
        `})]})};function $e({position:r="bottom-right",minimizedByDefault:x=!1,className:k,...w}){const[c,b]=m.useState(x),[y,v]=m.useState(!1),{activeIds:j,setActiveId:C,variations:p}=Te(),d=()=>{const i=new URLSearchParams(window.location.search),n=Array.from(j.entries());if(n.length>0){const P=n.map(([V,X])=>`${V}.${X}`).join("_");i.set("var",P)}else i.delete("var");const h=i.toString(),S=window.location.href.split("?")[0]+(h?`?${h}`:"");navigator.clipboard.writeText(S).then(()=>{v(!0),setTimeout(()=>v(!1),2e3)})},g=m.useMemo(()=>{const i=new Map;return Array.from(p.entries()).forEach(([n,h])=>{const{group:S,label:P,groupLabel:V}=h;i.has(S)||i.set(S,[]),i.get(S).push([n,{label:P,groupLabel:V}])}),i},[p]),f=(()=>{const i=[],n=new Set;if(g.has("root")){const h=g.get("root");i.push(a.jsx(Ce,{group:"root",variations:h,activeIds:j,setActiveId:C,isMinimized:c},"root")),n.add("root")}return Array.from(j.entries()).forEach(([h])=>{if(!n.has(h)&&g.has(h)){const S=g.get(h);i.push(a.jsx(Ce,{group:h,variations:S,activeIds:j,setActiveId:C,isMinimized:c},h)),n.add(h)}}),i.length===0?a.jsxs("div",{className:"variations-empty",children:[a.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),a.jsxs("div",{className:"variations-empty-text",children:["Add a ",a.jsx("code",{children:"<Variations>"})," component!"]}),a.jsx("style",{children:`
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
            `})]}):i})();return m.useEffect(()=>{const i=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),b(h=>!h))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),a.jsxs("div",{className:`variations-controls-container ${k||""}`,...w,children:[a.jsx("div",{className:`variations-controls ${c?"minimized":""}`,children:c?a.jsx("button",{className:"variations-circle",onClick:()=>b(!1),tabIndex:c?0:-1,children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"variations-header",children:[a.jsxs("div",{className:"variations-header-title",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),a.jsxs("div",{className:"variations-header-actions",children:[a.jsx("button",{className:"variations-header-button",onClick:d,title:"Copy link to clipboard",tabIndex:c?-1:0,children:y?a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsx("button",{className:"variations-header-toggle",onClick:()=>b(!0),tabIndex:c?-1:0,children:"×"})]})]}),a.jsx("div",{className:"variation-groups",children:f})]})}),a.jsx("style",{children:`
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
        `})]})}exports.Variation=oe;exports.Variations=Ae;exports.VariationsControls=$e;exports.VariationsProvider=Le;
