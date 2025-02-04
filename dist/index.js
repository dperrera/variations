"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const v=require("react");var G={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Ne(){if(ye)return Y;ye=1;var r=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function E(h,s,b){var k=null;if(b!==void 0&&(k=""+b),s.key!==void 0&&(k=""+s.key),"key"in s){b={};for(var u in s)u!=="key"&&(b[u]=s[u])}else b=s;return s=b.ref,{$$typeof:r,type:h,key:k,ref:s!==void 0?s:null,props:b}}return Y.Fragment=w,Y.jsx=E,Y.jsxs=E,Y}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Me(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case q:return"Portal";case ie:return"Profiler";case ae:return"StrictMode";case H:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case le:return(e.displayName||"Context")+".Provider";case se:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function w(e){return""+e}function E(e){try{w(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,d=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",d),w(e)}}function h(){}function s(){if($===0){de=console.log,fe=console.info,pe=console.warn,ge=console.error,ve=console.group,he=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}function b(){if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:de}),info:O({},e,{value:fe}),warn:O({},e,{value:pe}),error:O({},e,{value:ge}),group:O({},e,{value:ve}),groupCollapsed:O({},e,{value:he}),groupEnd:O({},e,{value:me})})}0>$&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function k(e){if(ee===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);ee=t&&t[1]||"",xe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+xe}function u(e,t){if(!e||re)return"";var o=te.get(e);if(o!==void 0)return o;re=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var d=null;d=M.H,M.H=null,s();try{var A={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(V){var W=V}Reflect.construct(e,[],R)}else{try{R.call()}catch(V){W=V}e.call(R.prototype)}}else{try{throw Error()}catch(V){W=V}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(V){if(V&&W&&typeof V.stack=="string")return[V.stack,W.stack]}return[null,null]}};A.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var j=Object.getOwnPropertyDescriptor(A.DetermineComponentFrameRoot,"name");j&&j.configurable&&Object.defineProperty(A.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=A.DetermineComponentFrameRoot(),_=l[0],L=l[1];if(_&&L){var T=_.split(`
`),I=L.split(`
`);for(l=j=0;j<T.length&&!T[j].includes("DetermineComponentFrameRoot");)j++;for(;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;if(j===T.length||l===I.length)for(j=T.length-1,l=I.length-1;1<=j&&0<=l&&T[j]!==I[l];)l--;for(;1<=j&&0<=l;j--,l--)if(T[j]!==I[l]){if(j!==1||l!==1)do if(j--,l--,0>l||T[j]!==I[l]){var z=`
`+T[j].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,z),z}while(1<=j&&0<=l);break}}}finally{re=!1,M.H=d,b(),Error.prepareStackTrace=o}return T=(T=e?e.displayName||e.name:"")?k(T):"",typeof e=="function"&&te.set(e,T),T}function y(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return u(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return k(e);switch(e){case H:return k("Suspense");case K:return k("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case F:return e=u(e.render,!1),e;case Z:return y(e.type);case Q:t=e._payload,e=e._init;try{return y(e(t))}catch{}}return""}function C(){var e=M.A;return e===null?null:e.getOwner()}function g(e){if(ue.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function f(e,t){function o(){we||(we=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function m(){var e=r(this.type);return be[e]||(be[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function c(e,t,o,d,A,j){return o=j.ref,e={$$typeof:N,type:e,key:t,props:j,_owner:A},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:m}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function p(e,t,o,d,A,j){if(typeof e=="string"||typeof e=="function"||e===J||e===ie||e===ae||e===H||e===K||e===Se||typeof e=="object"&&e!==null&&(e.$$typeof===Q||e.$$typeof===Z||e.$$typeof===le||e.$$typeof===se||e.$$typeof===F||e.$$typeof===Ve||e.getModuleId!==void 0)){var l=t.children;if(l!==void 0)if(d)if(D(l)){for(d=0;d<l.length;d++)i(l[d],e);Object.freeze&&Object.freeze(l)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else i(l,e)}else l="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?d="null":D(e)?d="array":e!==void 0&&e.$$typeof===N?(d="<"+(r(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):d=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",d,l);if(ue.call(t,"key")){l=r(e);var _=Object.keys(t).filter(function(T){return T!=="key"});d=0<_.length?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}",Ee[l+d]||(_=0<_.length?"{"+_.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,d,l,_,l),Ee[l+d]=!0)}if(l=null,o!==void 0&&(E(o),l=""+o),g(t)&&(E(t.key),l=""+t.key),"key"in t){o={};for(var L in t)L!=="key"&&(o[L]=t[L])}else o=t;return l&&f(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),c(e,l,j,A,C(),o)}function i(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(D(e))for(var o=0;o<e.length;o++){var d=e[o];n(d)&&x(d,t)}else if(n(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ce&&e[ce]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)n(e.value)&&x(e.value,t)}}function n(e){return typeof e=="object"&&e!==null&&e.$$typeof===N}function x(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=S(t),!ke[t])){ke[t]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var d=M.getCurrentStack;M.getCurrentStack=function(){var A=y(e.type);return d&&(A+=d()||""),A},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),M.getCurrentStack=d}}function S(e){var t="",o=C();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var P=v,N=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),se=Symbol.for("react.consumer"),le=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),ce=Symbol.iterator,_e=Symbol.for("react.client.reference"),M=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,O=Object.assign,Ve=Symbol.for("react.client.reference"),D=Array.isArray,$=0,de,fe,pe,ge,ve,he,me;h.__reactDisabledLog=!0;var ee,xe,re=!1,te=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),we,be={},Ee={},ke={};U.Fragment=J,U.jsx=function(e,t,o,d,A){return p(e,t,o,!1,d,A)},U.jsxs=function(e,t,o,d,A){return p(e,t,o,!0,d,A)}}()),U}var Ce;function Oe(){return Ce||(Ce=1,process.env.NODE_ENV==="production"?G.exports=Ne():G.exports=Me()),G.exports}var a=Oe();const oe=v.createContext(null);function X(){const r=v.useContext(oe);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r}function Ie(r){const{activeIds:w,setActiveId:E,variations:h}=X(),s=w.get(r),b=v.useMemo(()=>Array.from(h.entries()).filter(([,u])=>u.group===r).map(([u,{label:y}])=>({id:u,label:y})),[h,r]);return{active:v.useMemo(()=>{if(!s)return null;const u=h.get(s);return u?{id:s,label:u.label}:null},[s,h]),setActive:u=>E(r,u),variations:b}}function Le({children:r,disableQueryString:w=!1}){const[E,h]=v.useState(new Map),[s,b]=v.useState(new Map);v.useEffect(()=>{if(w||typeof window>"u")return;const f=new URLSearchParams(window.location.search).get("var");if(f)try{const m=f.split("_").map(c=>{const[p,i]=c.split(".");if(!p||!i)throw new Error("Invalid format");return[p,i]});h(new Map(m))}catch{h(new Map)}},[w]),v.useEffect(()=>{if(w||typeof window>"u")return;const g=new URLSearchParams(window.location.search),f=Array.from(E.entries());if(f.length===0)g.delete("var");else{const p=f.map(([i,n])=>`${i}.${n}`).join("_");g.set("var",p)}const m=g.toString(),c=m?`${window.location.pathname}?${m}`:window.location.pathname;window.history.replaceState({},"",c)},[E,w]),v.useEffect(()=>{if(w||typeof window>"u")return;const g=()=>{const m=new URLSearchParams(window.location.search).get("var");if(m)try{const c=m.split("_").map(p=>{const[i,n]=p.split(".");if(!i||!n)throw new Error("Invalid format");return[i,n]});h(new Map(c))}catch{h(new Map)}else h(new Map)};return window.addEventListener("popstate",g),()=>window.removeEventListener("popstate",g)},[w]);const k=v.useMemo(()=>{const g=E.get("root");if(!g)return null;const f=(c,p)=>{const i={id:c,group:p,children:new Map};return Array.from(s.entries()).forEach(([,n])=>{if(n.parentId===c){const x=E.get(n.group);x&&i.children.set(n.group,f(x,n.group))}}),i};return f(g,"root")},[E,s]),u=v.useCallback((g,f)=>{h(m=>{const c=new Map(m);return c.set(g,f),g==="root"?Array.from(m.keys()).forEach(p=>{p!=="root"&&c.delete(p)}):Array.from(s.entries()).find(([i])=>i===f)&&Array.from(m.keys()).forEach(i=>{const n=Array.from(s.entries()).find(([,x])=>x.group===i);n&&n[1].parentId===f&&c.delete(i)}),c})},[s]),y=v.useCallback((g,f,m,c,p)=>{b(i=>{const n=i.get(f);if((n==null?void 0:n.group)===g&&(n==null?void 0:n.label)===m&&(n==null?void 0:n.groupLabel)===c&&(n==null?void 0:n.parentId)===p)return i;const x=new Map(i);return x.set(f,{group:g,label:m,groupLabel:c,parentId:p}),x})},[]),C=v.useMemo(()=>({activeIds:E,setActiveId:u,registerVariation:y,variations:s,activeTree:k}),[E,u,y,s,k]);return a.jsx(oe.Provider,{value:C,children:r})}function B(r){return r.toLowerCase().replace(/\s+/g,"-")}function ne({label:r,children:w,...E}){const{group:h="",id:s,groupLabel:b,parentId:k}=E,u=v.useMemo(()=>s||B(r),[s,r]),{activeIds:y,registerVariation:C}=X(),g=y.get(h)===u;return v.useEffect(()=>{if(!h){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}C(h,u,r,b||h,k)},[h,u,r,b,k,C]),g?a.jsx(a.Fragment,{children:w}):null}const Pe="root";function $e(r){return v.isValidElement(r)&&r.type===ne&&typeof r.props.label=="string"}function Te({isRoot:r=!1,label:w,children:E,...h}){const{parentId:s,group:b}=h,k=v.useContext(oe);if(!k)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&s)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const u=b||(r?Pe:B(w)),{activeIds:y,setActiveId:C,variations:g}=k,f=v.useMemo(()=>{const c=new Map;return Array.from(g.entries()).forEach(([p,i])=>{const{group:n,label:x,groupLabel:S}=i;c.has(n)||c.set(n,[]),c.get(n).push([p,{label:x,groupLabel:S}])}),c},[g]),m=v.useMemo(()=>v.Children.map(E,c=>{if(v.isValidElement(c)){if(c.type===ne){if(!$e(c))throw new Error("Invalid Variation component");const p=B(c.props.label);return v.cloneElement(c,{...c.props,group:u,groupLabel:w,id:p,parentId:s})}else if(c.type===Te){const p=c,i=y.get(u),n=B(p.props.label);return v.cloneElement(p,{...p.props,parentId:i,group:n})}}return c}),[E,u,w,y,s]);return v.useEffect(()=>{if(!y.has(u)){const c=f.get(u);if(c&&c.length>0){const[p]=c[0];C(u,p)}}},[u,f,y,C]),a.jsx(a.Fragment,{children:m})}const Ae=({group:r,variations:w,activeIds:E,setActiveId:h,isMinimized:s})=>{var u,y,C,g;const b=(y=(u=w[0])==null?void 0:u[1])==null?void 0:y.groupLabel,k=E.get(r);return a.jsxs("div",{className:"variation-group",children:[a.jsx("div",{className:"variation-title",title:b,children:b}),a.jsx("div",{className:"variations-selects",children:a.jsx("select",{value:k||"",onChange:f=>{h(r,f.target.value)},className:"variation-select",tabIndex:s?-1:0,title:((g=(C=w.find(([f])=>f===k))==null?void 0:C[1])==null?void 0:g.label)||"",children:w.map(([f,{label:m}])=>a.jsx("option",{value:f,title:m,children:m},f))})}),a.jsx("style",{children:`
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
        `})]})};function ze({position:r="bottom-right",minimizedByDefault:w=!1,className:E,...h}){const[s,b]=v.useState(w),[k,u]=v.useState(!1),{activeIds:y,setActiveId:C,variations:g}=X(),f=()=>{const i=new URLSearchParams(window.location.search),n=Array.from(y.entries());if(n.length>0){const P=n.map(([N,q])=>`${N}.${q}`).join("_");i.set("var",P)}else i.delete("var");const x=i.toString(),S=window.location.href.split("?")[0]+(x?`?${x}`:"");navigator.clipboard.writeText(S).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},m=v.useMemo(()=>{const i=new Map;return Array.from(g.entries()).forEach(([n,x])=>{const{group:S,label:P,groupLabel:N}=x;i.has(S)||i.set(S,[]),i.get(S).push([n,{label:P,groupLabel:N}])}),i},[g]),p=(()=>{const i=[],n=new Set;if(m.has("root")){const x=m.get("root");i.push(a.jsx(Ae,{group:"root",variations:x,activeIds:y,setActiveId:C,isMinimized:s},"root")),n.add("root")}return Array.from(y.entries()).forEach(([x])=>{if(!n.has(x)&&m.has(x)){const S=m.get(x);i.push(a.jsx(Ae,{group:x,variations:S,activeIds:y,setActiveId:C,isMinimized:s},x)),n.add(x)}}),i.length===0?a.jsxs("div",{className:"variations-empty",children:[a.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),a.jsxs("div",{className:"variations-empty-text",children:["Add a ",a.jsx("code",{children:"<Variations>"})," component!"]}),a.jsx("style",{children:`
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
            `})]}):i})();return v.useEffect(()=>{const i=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),b(x=>!x))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),a.jsxs("div",{className:`variations-controls-container ${E||""}`,...h,children:[a.jsx("div",{className:`variations-controls ${s?"minimized":""}`,children:s?a.jsx("button",{className:"variations-circle",onClick:()=>b(!1),tabIndex:s?0:-1,children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"variations-header",children:[a.jsxs("div",{className:"variations-header-title",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),a.jsxs("div",{className:"variations-header-actions",children:[a.jsx("button",{className:"variations-header-button",onClick:f,title:"Copy link to clipboard",tabIndex:s?-1:0,children:k?a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsx("button",{className:"variations-header-toggle",onClick:()=>b(!0),tabIndex:s?-1:0,children:"×"})]})]}),a.jsx("div",{className:"variation-groups",children:p})]})}),a.jsx("style",{children:`
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
        `})]})}exports.Variation=ne;exports.Variations=Te;exports.VariationsControls=ze;exports.VariationsProvider=Le;exports.useVariation=Ie;exports.useVariations=X;
