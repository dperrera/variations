"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react");var B={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Me(){if(ye)return U;ye=1;var t=Symbol.for("react.transitional.element"),x=Symbol.for("react.fragment");function j(m,l,g){var y=null;if(g!==void 0&&(y=""+g),l.key!==void 0&&(y=""+l.key),"key"in l){g={};for(var u in l)u!=="key"&&(g[u]=l[u])}else g=l;return l=g.ref,{$$typeof:t,type:m,key:y,ref:l!==void 0?l:null,props:g}}return U.Fragment=x,U.jsx=j,U.jsxs=j,U}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Oe(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case R:return"Portal";case ie:return"Profiler";case ae:return"StrictMode";case H:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case le:return(e.displayName||"Context")+".Provider";case se:return(e._context.displayName||"Context")+".Consumer";case F:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case Q:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function x(e){return""+e}function j(e){try{x(e);var r=!1}catch{r=!0}if(r){r=console;var o=r.error,h=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",h),x(e)}}function m(){}function l(){if(z===0){de=console.log,fe=console.info,pe=console.warn,ge=console.error,he=console.group,ve=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:m,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}z++}function g(){if(z--,z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:de}),info:L({},e,{value:fe}),warn:L({},e,{value:pe}),error:L({},e,{value:ge}),group:L({},e,{value:he}),groupCollapsed:L({},e,{value:ve}),groupEnd:L({},e,{value:me})})}0>z&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function y(e){if(ee===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ee=r&&r[1]||"",xe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+xe}function u(e,r){if(!e||te)return"";var o=re.get(e);if(o!==void 0)return o;te=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var h=null;h=I.H,I.H=null,l();try{var V={DetermineComponentFrameRoot:function(){try{if(r){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(M){var G=M}Reflect.construct(e,[],O)}else{try{O.call()}catch(M){G=M}e.call(O.prototype)}}else{try{throw Error()}catch(M){G=M}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(M){if(M&&G&&typeof M.stack=="string")return[M.stack,G.stack]}return[null,null]}};V.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var k=Object.getOwnPropertyDescriptor(V.DetermineComponentFrameRoot,"name");k&&k.configurable&&Object.defineProperty(V.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=V.DetermineComponentFrameRoot(),N=c[0],$=c[1];if(N&&$){var T=N.split(`
`),P=$.split(`
`);for(c=k=0;k<T.length&&!T[k].includes("DetermineComponentFrameRoot");)k++;for(;c<P.length&&!P[c].includes("DetermineComponentFrameRoot");)c++;if(k===T.length||c===P.length)for(k=T.length-1,c=P.length-1;1<=k&&0<=c&&T[k]!==P[c];)c--;for(;1<=k&&0<=c;k--,c--)if(T[k]!==P[c]){if(k!==1||c!==1)do if(k--,c--,0>c||T[k]!==P[c]){var Y=`
`+T[k].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),typeof e=="function"&&re.set(e,Y),Y}while(1<=k&&0<=c);break}}}finally{te=!1,I.H=h,g(),Error.prepareStackTrace=o}return T=(T=e?e.displayName||e.name:"")?y(T):"",typeof e=="function"&&re.set(e,T),T}function w(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return u(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return y(e);switch(e){case H:return y("Suspense");case K:return y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case F:return e=u(e.render,!1),e;case Z:return w(e.type);case Q:r=e._payload,e=e._init;try{return w(e(r))}catch{}}return""}function C(){var e=I.A;return e===null?null:e.getOwner()}function A(e){if(ue.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function S(e,r){function o(){we||(we=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function _(){var e=t(this.type);return be[e]||(be[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function E(e,r,o,h,V,k){return o=k.ref,e={$$typeof:f,type:e,key:r,props:k,_owner:V},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:_}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,r,o,h,V,k){if(typeof e=="string"||typeof e=="function"||e===q||e===ie||e===ae||e===H||e===K||e===Te||typeof e=="object"&&e!==null&&(e.$$typeof===Q||e.$$typeof===Z||e.$$typeof===le||e.$$typeof===se||e.$$typeof===F||e.$$typeof===_e||e.getModuleId!==void 0)){var c=r.children;if(c!==void 0)if(h)if(D(c)){for(h=0;h<c.length;h++)a(c[h],e);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else a(c,e)}else c="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?h="null":D(e)?h="array":e!==void 0&&e.$$typeof===f?(h="<"+(t(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,c);if(ue.call(r,"key")){c=t(e);var N=Object.keys(r).filter(function(T){return T!=="key"});h=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",Ee[c+h]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,h,c,N,c),Ee[c+h]=!0)}if(c=null,o!==void 0&&(j(o),c=""+o),A(r)&&(j(r.key),c=""+r.key),"key"in r){o={};for(var $ in r)$!=="key"&&(o[$]=r[$])}else o=r;return c&&S(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),E(e,c,k,V,C(),o)}function a(e,r){if(typeof e=="object"&&e&&e.$$typeof!==Ne){if(D(e))for(var o=0;o<e.length;o++){var h=e[o];i(h)&&s(h,r)}else if(i(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ce&&e[ce]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)i(e.value)&&s(e.value,r)}}function i(e){return typeof e=="object"&&e!==null&&e.$$typeof===f}function s(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=v(r),!ke[r])){ke[r]=!0;var o="";e&&e._owner!=null&&e._owner!==C()&&(o=null,typeof e._owner.tag=="number"?o=t(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var h=I.getCurrentStack;I.getCurrentStack=function(){var V=w(e.type);return h&&(V+=h()||""),V},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,o),I.getCurrentStack=h}}function v(e){var r="",o=C();return o&&(o=t(o.type))&&(r=`

Check the render method of \``+o+"`."),r||(e=t(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var b=p,f=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),se=Symbol.for("react.consumer"),le=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),ce=Symbol.iterator,Re=Symbol.for("react.client.reference"),I=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,L=Object.assign,_e=Symbol.for("react.client.reference"),D=Array.isArray,z=0,de,fe,pe,ge,he,ve,me;m.__reactDisabledLog=!0;var ee,xe,te=!1,re=new(typeof WeakMap=="function"?WeakMap:Map),Ne=Symbol.for("react.client.reference"),we,be={},Ee={},ke={};W.Fragment=q,W.jsx=function(e,r,o,h,V){return d(e,r,o,!1,h,V)},W.jsxs=function(e,r,o,h,V){return d(e,r,o,!0,h,V)}}()),W}var Ce;function Ie(){return Ce||(Ce=1,process.env.NODE_ENV==="production"?B.exports=Me():B.exports=Oe()),B.exports}var n=Ie();const oe=p.createContext(null),Ve=p.createContext(null);function X(){const t=p.useContext(oe);if(!t)throw new Error("useVariations must be used within a VariationsProvider");return t}function Le(){const t=p.useContext(Ve);if(!t)throw new Error("useVariationsState must be used within a VariationsProvider");return t}function Pe(t){const{activeIds:x,setActiveId:j,variations:m}=X(),l=x.get(t),g=p.useMemo(()=>Array.from(m.entries()).filter(([,u])=>u.group===t).map(([u,{label:w}])=>({id:u,label:w})),[m,t]);return{active:p.useMemo(()=>{if(!l)return null;const u=m.get(l);return u?{id:l,label:u.label}:null},[l,m]),setActive:u=>j(t,u),variations:g}}function $e({children:t,disableQueryString:x=!1,initialState:j}){const[m,l]=p.useState(new Map),[g,y]=p.useState(new Map),[u,w]=p.useState(()=>j);p.useEffect(()=>{if(x||typeof window>"u")return;const d=new URLSearchParams(window.location.search),a=d.get("var");if(a)try{const s=a.split("_").map(v=>{const[b,f]=v.split(".");if(!b||!f)throw new Error("Invalid format");return[b,f]});l(new Map(s))}catch{l(new Map)}const i=d.get("state");if(i)try{const s=JSON.parse(decodeURIComponent(i));w(s)}catch{}},[x]),p.useEffect(()=>{if(x||typeof window>"u")return;const d=new URLSearchParams(window.location.search),a=Array.from(m.entries());if(a.length===0)d.delete("var");else{const v=a.map(([b,f])=>`${b}.${f}`).join("_");d.set("var",v)}u!==void 0?d.set("state",encodeURIComponent(JSON.stringify(u))):d.delete("state");const i=d.toString(),s=i?`${window.location.pathname}?${i}`:window.location.pathname;window.history.replaceState({},"",s)},[m,u,x]),p.useEffect(()=>{if(x||typeof window>"u")return;const d=()=>{const a=new URLSearchParams(window.location.search),i=a.get("var");if(i)try{const v=i.split("_").map(b=>{const[f,R]=b.split(".");if(!f||!R)throw new Error("Invalid format");return[f,R]});l(new Map(v))}catch{l(new Map)}else l(new Map);const s=a.get("state");if(s)try{const v=JSON.parse(decodeURIComponent(s));w(v)}catch{}};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[x]);const C=p.useMemo(()=>{const d=m.get("root");if(!d)return null;const a=(s,v)=>{const b={id:s,group:v,children:new Map};return Array.from(g.entries()).forEach(([,f])=>{if(f.parentId===s){const R=m.get(f.group);R&&b.children.set(f.group,a(R,f.group))}}),b};return a(d,"root")},[m,g]),A=p.useCallback((d,a)=>{l(i=>{const s=new Map(i);return s.set(d,a),d==="root"?Array.from(i.keys()).forEach(v=>{v!=="root"&&s.delete(v)}):Array.from(g.entries()).find(([b])=>b===a)&&Array.from(i.keys()).forEach(b=>{const f=Array.from(g.entries()).find(([,R])=>R.group===b);f&&f[1].parentId===a&&s.delete(b)}),s})},[g]),S=p.useCallback((d,a,i,s,v)=>{y(b=>{const f=b.get(a);if((f==null?void 0:f.group)===d&&(f==null?void 0:f.label)===i&&(f==null?void 0:f.groupLabel)===s&&(f==null?void 0:f.parentId)===v)return b;const R=new Map(b);return R.set(a,{group:d,label:i,groupLabel:s,parentId:v}),R})},[]),_=p.useMemo(()=>({activeIds:m,setActiveId:A,registerVariation:S,variations:g,activeTree:C}),[m,A,S,g,C]),E=p.useMemo(()=>({state:u,setState:d=>{w(d)}}),[u]);return n.jsx(oe.Provider,{value:_,children:n.jsx(Ve.Provider,{value:E,children:t})})}function J(t){return t.toLowerCase().replace(/\s+/g,"-")}function ne({label:t,children:x,...j}){const{group:m="",id:l,groupLabel:g,parentId:y}=j,u=p.useMemo(()=>l||J(t),[l,t]),{activeIds:w,registerVariation:C}=X(),A=w.get(m)===u;return p.useEffect(()=>{if(!m){console.error(`Variation Component Error: No group provided for variation "${t}"

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
   </Variations>`);return}C(m,u,t,g||m,y)},[m,u,t,g,y,C]),A?n.jsx(n.Fragment,{children:x}):null}const ze="root";function Ye(t){return p.isValidElement(t)&&t.type===ne&&typeof t.props.label=="string"}function Ae({isRoot:t=!1,label:x,children:j,...m}){const{parentId:l,group:g}=m,y=p.useContext(oe);if(!y)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(t&&l)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const u=g||(t?ze:J(x)),{activeIds:w,setActiveId:C,variations:A}=y,S=p.useMemo(()=>{const E=new Map;return Array.from(A.entries()).forEach(([d,a])=>{const{group:i,label:s,groupLabel:v}=a;E.has(i)||E.set(i,[]),E.get(i).push([d,{label:s,groupLabel:v}])}),E},[A]),_=p.useMemo(()=>p.Children.map(j,E=>{if(p.isValidElement(E)){if(E.type===ne){if(!Ye(E))throw new Error("Invalid Variation component");const d=J(E.props.label);return p.cloneElement(E,{...E.props,group:u,groupLabel:x,id:d,parentId:l})}else if(E.type===Ae){const d=E,a=w.get(u),i=J(d.props.label);return p.cloneElement(d,{...d.props,parentId:a,group:i})}}return E}),[j,u,x,w,l]);return p.useEffect(()=>{if(!w.has(u)){const E=S.get(u);if(E&&E.length>0){const[d]=E[0];C(u,d)}}},[u,S,w,C]),n.jsx(n.Fragment,{children:_})}const Se=({group:t,variations:x,activeIds:j,setActiveId:m,isMinimized:l})=>{var u,w,C,A;const g=(w=(u=x[0])==null?void 0:u[1])==null?void 0:w.groupLabel,y=j.get(t);return n.jsxs("div",{className:"variation-group",children:[n.jsx("div",{className:"variation-title",title:g,children:g}),n.jsx("div",{className:"variations-selects",children:n.jsx("select",{value:y||"",onChange:S=>{m(t,S.target.value)},className:"variation-select",tabIndex:l?-1:0,title:((A=(C=x.find(([S])=>S===y))==null?void 0:C[1])==null?void 0:A.label)||"",children:x.map(([S,{label:_}])=>n.jsx("option",{value:S,title:_,children:_},S))})}),n.jsx("style",{children:`
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
        `})]})};function Ue({position:t="bottom-right",minimizedByDefault:x=!1,className:j,...m}){const[l,g]=p.useState(x),[y,u]=p.useState(!1),{activeIds:w,setActiveId:C,variations:A}=X(),S=()=>{const a=new URLSearchParams(window.location.search),i=Array.from(w.entries());if(i.length>0){const b=i.map(([f,R])=>`${f}.${R}`).join("_");a.set("var",b)}else a.delete("var");const s=a.toString(),v=window.location.href.split("?")[0]+(s?`?${s}`:"");navigator.clipboard.writeText(v).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},_=p.useMemo(()=>{const a=new Map;return Array.from(A.entries()).forEach(([i,s])=>{const{group:v,label:b,groupLabel:f}=s;a.has(v)||a.set(v,[]),a.get(v).push([i,{label:b,groupLabel:f}])}),a},[A]),d=(()=>{const a=[],i=new Set;if(_.has("root")){const s=_.get("root");a.push(n.jsx(Se,{group:"root",variations:s,activeIds:w,setActiveId:C,isMinimized:l},"root")),i.add("root")}return Array.from(w.entries()).forEach(([s])=>{if(!i.has(s)&&_.has(s)){const v=_.get(s);a.push(n.jsx(Se,{group:s,variations:v,activeIds:w,setActiveId:C,isMinimized:l},s)),i.add(s)}}),a.length===0?n.jsxs("div",{className:"variations-empty",children:[n.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),n.jsxs("div",{className:"variations-empty-text",children:["Add a ",n.jsx("code",{children:"<Variations>"})," component!"]}),n.jsx("style",{children:`
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
            `})]}):a})();return p.useEffect(()=>{const a=i=>{i.code==="KeyV"&&i.altKey&&!i.ctrlKey&&!i.shiftKey&&!i.metaKey&&(i.preventDefault(),g(s=>!s))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),n.jsxs("div",{className:`variations-controls-container ${j||""}`,...m,children:[n.jsx("div",{className:`variations-controls ${l?"minimized":""}`,children:l?n.jsx("button",{className:"variations-circle",onClick:()=>g(!1),tabIndex:l?0:-1,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"variations-header",children:[n.jsxs("div",{className:"variations-header-title",children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),"Variations"]}),n.jsxs("div",{className:"variations-header-actions",children:[n.jsx("button",{className:"variations-header-button",onClick:S,title:"Copy link to clipboard",tabIndex:l?-1:0,children:y?n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),n.jsx("button",{className:"variations-header-toggle",onClick:()=>g(!0),tabIndex:l?-1:0,children:"×"})]})]}),n.jsx("div",{className:"variation-groups",children:d})]})}),n.jsx("style",{children:`
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
        `})]})}exports.Variation=ne;exports.Variations=Ae;exports.VariationsControls=Ue;exports.VariationsProvider=$e;exports.useVariation=Pe;exports.useVariations=X;exports.useVariationsState=Le;
