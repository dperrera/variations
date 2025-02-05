"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("react");var F={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function Oe(){if(ke)return J;ke=1;var t=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(v,i,f){var j=null;if(f!==void 0&&(j=""+f),i.key!==void 0&&(j=""+i.key),"key"in i){f={};for(var l in i)l!=="key"&&(f[l]=i[l])}else f=i;return i=f.ref,{$$typeof:t,type:v,key:j,ref:i!==void 0?i:null,props:f}}return J.Fragment=w,J.jsx=C,J.jsxs=C,J}var B={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Ie(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case h:return"Portal";case Y:return"Profiler";case z:return"StrictMode";case Q:return"Suspense";case D:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case le:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case Z:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case te:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function w(e){return""+e}function C(e){try{w(e);var r=!1}catch{r=!0}if(r){r=console;var o=r.error,g=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",g),w(e)}}function v(){}function i(){if(W===0){de=console.log,fe=console.info,pe=console.warn,ge=console.error,ve=console.group,he=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}function f(){if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:de}),info:L({},e,{value:fe}),warn:L({},e,{value:pe}),error:L({},e,{value:ge}),group:L({},e,{value:ve}),groupCollapsed:L({},e,{value:he}),groupEnd:L({},e,{value:me})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function j(e){if(oe===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);oe=r&&r[1]||"",xe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+xe}function l(e,r){if(!e||ae)return"";var o=ne.get(e);if(o!==void 0)return o;ae=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var g=null;g=P.H,P.H=null,i();try{var A={DetermineComponentFrameRoot:function(){try{if(r){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(O){var q=O}Reflect.construct(e,[],I)}else{try{I.call()}catch(O){q=O}e.call(I.prototype)}}else{try{throw Error()}catch(O){q=O}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(O){if(O&&q&&typeof O.stack=="string")return[O.stack,q.stack]}return[null,null]}};A.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var k=Object.getOwnPropertyDescriptor(A.DetermineComponentFrameRoot,"name");k&&k.configurable&&Object.defineProperty(A.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=A.DetermineComponentFrameRoot(),M=s[0],U=s[1];if(M&&U){var T=M.split(`
`),$=U.split(`
`);for(s=k=0;k<T.length&&!T[k].includes("DetermineComponentFrameRoot");)k++;for(;s<$.length&&!$[s].includes("DetermineComponentFrameRoot");)s++;if(k===T.length||s===$.length)for(k=T.length-1,s=$.length-1;1<=k&&0<=s&&T[k]!==$[s];)s--;for(;1<=k&&0<=s;k--,s--)if(T[k]!==$[s]){if(k!==1||s!==1)do if(k--,s--,0>s||T[k]!==$[s]){var G=`
`+T[k].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),typeof e=="function"&&ne.set(e,G),G}while(1<=k&&0<=s);break}}}finally{ae=!1,P.H=g,f(),Error.prepareStackTrace=o}return T=(T=e?e.displayName||e.name:"")?j(T):"",typeof e=="function"&&ne.set(e,T),T}function E(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return l(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return j(e);switch(e){case Q:return j("Suspense");case D:return j("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Z:return e=l(e.render,!1),e;case ee:return E(e.type);case te:r=e._payload,e=e._init;try{return E(e(r))}catch{}}return""}function S(){var e=P.A;return e===null?null:e.getOwner()}function N(e){if(ue.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function V(e,r){function o(){be||(be=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function _(){var e=t(this.type);return we[e]||(we[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function y(e,r,o,g,A,k){return o=k.ref,e={$$typeof:n,type:e,key:r,props:k,_owner:A},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:_}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function u(e,r,o,g,A,k){if(typeof e=="string"||typeof e=="function"||e===R||e===Y||e===z||e===Q||e===D||e===Te||typeof e=="object"&&e!==null&&(e.$$typeof===te||e.$$typeof===ee||e.$$typeof===le||e.$$typeof===X||e.$$typeof===Z||e.$$typeof===Re||e.getModuleId!==void 0)){var s=r.children;if(s!==void 0)if(g)if(re(s)){for(g=0;g<s.length;g++)m(s[g],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else m(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?g="null":re(e)?g="array":e!==void 0&&e.$$typeof===n?(g="<"+(t(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,s);if(ue.call(r,"key")){s=t(e);var M=Object.keys(r).filter(function(T){return T!=="key"});g=0<M.length?"{key: someKey, "+M.join(": ..., ")+": ...}":"{key: someKey}",Ee[s+g]||(M=0<M.length?"{"+M.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,g,s,M,s),Ee[s+g]=!0)}if(s=null,o!==void 0&&(C(o),s=""+o),N(r)&&(C(r.key),s=""+r.key),"key"in r){o={};for(var U in r)U!=="key"&&(o[U]=r[U])}else o=r;return s&&V(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),y(e,s,k,A,S(),o)}function m(e,r){if(typeof e=="object"&&e&&e.$$typeof!==Me){if(re(e))for(var o=0;o<e.length;o++){var g=e[o];p(g)&&x(g,r)}else if(p(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ce&&e[ce]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)p(e.value)&&x(e.value,r)}}function p(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function x(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=b(r),!ye[r])){ye[r]=!0;var o="";e&&e._owner!=null&&e._owner!==S()&&(o=null,typeof e._owner.tag=="number"?o=t(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var g=P.getCurrentStack;P.getCurrentStack=function(){var A=E(e.type);return g&&(A+=g()||""),A},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,o),P.getCurrentStack=g}}function b(e){var r="",o=S();return o&&(o=t(o.type))&&(r=`

Check the render method of \``+o+"`."),r||(e=t(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var c=d,n=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),le=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),ce=Symbol.iterator,_e=Symbol.for("react.client.reference"),P=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,L=Object.assign,Re=Symbol.for("react.client.reference"),re=Array.isArray,W=0,de,fe,pe,ge,ve,he,me;v.__reactDisabledLog=!0;var oe,xe,ae=!1,ne=new(typeof WeakMap=="function"?WeakMap:Map),Me=Symbol.for("react.client.reference"),be,we={},Ee={},ye={};B.Fragment=R,B.jsx=function(e,r,o,g,A){return u(e,r,o,!1,g,A)},B.jsxs=function(e,r,o,g,A){return u(e,r,o,!0,g,A)}}()),B}var Ce;function Pe(){return Ce||(Ce=1,process.env.NODE_ENV==="production"?F.exports=Oe():F.exports=Ie()),F.exports}var a=Pe();const ie=d.createContext(null),Ne=d.createContext(null);function K(){const t=d.useContext(ie);if(!t)throw new Error("useVariations must be used within a VariationsProvider");return t}function Ve(){const t=d.useContext(Ne);if(!t)throw new Error("useVariationsState must be used within a VariationsProvider");return[t.state,t.setState]}function Le(t){const{activeIds:w,setActiveId:C,variations:v}=K(),i=w.get(t),f=d.useMemo(()=>Array.from(v.entries()).filter(([,l])=>l.group===t).map(([l,{label:E}])=>({id:l,label:E})),[v,t]);return{active:d.useMemo(()=>{if(!i)return null;const l=v.get(i);return l?{id:i,label:l.label}:null},[i,v]),setActive:l=>C(t,l),variations:f}}function $e({children:t,disableQueryString:w=!1,initialState:C}){const[v,i]=d.useState(new Map),[f,j]=d.useState(new Map),[l,E]=d.useState(()=>C);d.useEffect(()=>{if(w||typeof window>"u")return;const u=new URLSearchParams(window.location.search),m=u.get("var");if(m)try{const x=m.split("_").map(b=>{const[c,n]=b.split(".");if(!c||!n)throw new Error("Invalid format");return[c,n]});i(new Map(x))}catch{i(new Map)}const p=u.get("s");if(p)try{const x=JSON.parse(atob(p));E(x)}catch{}},[w]),d.useEffect(()=>{if(w||typeof window>"u")return;const u=new URLSearchParams,m=Array.from(v.entries());if(m.length>0){const b=m.map(([c,n])=>`${c}.${n}`).join("_");u.set("var",b)}if(l!==void 0){const b=btoa(JSON.stringify(l));u.set("s",b)}const p=u.toString(),x=p?`${window.location.pathname}?${p}`:window.location.pathname;window.history.replaceState({},"",x)},[v,l,w]),d.useEffect(()=>{if(w||typeof window>"u")return;const u=()=>{const m=new URLSearchParams(window.location.search),p=m.get("var");if(p)try{const b=p.split("_").map(c=>{const[n,h]=c.split(".");if(!n||!h)throw new Error("Invalid format");return[n,h]});i(new Map(b))}catch{i(new Map)}else i(new Map);const x=m.get("s");if(x)try{const b=JSON.parse(atob(x));E(b)}catch{}};return window.addEventListener("popstate",u),()=>window.removeEventListener("popstate",u)},[w]);const S=d.useMemo(()=>{const u=v.get("root");if(!u)return null;const m=(x,b)=>{const c={id:x,group:b,children:new Map};return Array.from(f.entries()).forEach(([,n])=>{if(n.parentId===x){const h=v.get(n.group);h&&c.children.set(n.group,m(h,n.group))}}),c};return m(u,"root")},[v,f]),N=d.useCallback((u,m)=>{i(p=>{const x=new Map(p);return x.set(u,m),u==="root"?Array.from(p.keys()).forEach(b=>{b!=="root"&&x.delete(b)}):Array.from(f.entries()).find(([c])=>c===m)&&Array.from(p.keys()).forEach(c=>{const n=Array.from(f.entries()).find(([,h])=>h.group===c);n&&n[1].parentId===m&&x.delete(c)}),x})},[f]),V=d.useCallback((u,m,p,x,b)=>{j(c=>{const n=c.get(m);if((n==null?void 0:n.group)===u&&(n==null?void 0:n.label)===p&&(n==null?void 0:n.groupLabel)===x&&(n==null?void 0:n.parentId)===b)return c;const h=new Map(c);return h.set(m,{group:u,label:p,groupLabel:x,parentId:b}),h})},[]),_=d.useMemo(()=>({activeIds:v,setActiveId:N,registerVariation:V,variations:f,activeTree:S}),[v,N,V,f,S]),y=d.useMemo(()=>({state:l,setState:u=>{E(u)}}),[l]);return a.jsx(ie.Provider,{value:_,children:a.jsx(Ne.Provider,{value:y,children:t})})}function H(t){return t.toLowerCase().replace(/\s+/g,"-")}function se({label:t,children:w,...C}){const{group:v="",id:i,groupLabel:f,parentId:j}=C,l=d.useMemo(()=>i||H(t),[i,t]),{activeIds:E,registerVariation:S}=K(),N=E.get(v)===l;return d.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${t}"

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
   </Variations>`);return}S(v,l,t,f||v,j)},[v,l,t,f,j,S]),N?a.jsx(a.Fragment,{children:w}):null}const ze="root";function Ye(t){return d.isValidElement(t)&&t.type===se&&typeof t.props.label=="string"}function Ae({isRoot:t=!1,label:w,children:C,...v}){const{parentId:i,group:f}=v,j=d.useContext(ie);if(!j)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(t&&i)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const l=f||(t?ze:H(w)),{activeIds:E,setActiveId:S,variations:N}=j,V=d.useMemo(()=>{const y=new Map;return Array.from(N.entries()).forEach(([u,m])=>{const{group:p,label:x,groupLabel:b}=m;y.has(p)||y.set(p,[]),y.get(p).push([u,{label:x,groupLabel:b}])}),y},[N]),_=d.useMemo(()=>d.Children.map(C,y=>{if(d.isValidElement(y)){if(y.type===se){if(!Ye(y))throw new Error("Invalid Variation component");const u=H(y.props.label);return d.cloneElement(y,{...y.props,group:l,groupLabel:w,id:u,parentId:i})}else if(y.type===Ae){const u=y,m=E.get(l),p=H(u.props.label);return d.cloneElement(u,{...u.props,parentId:m,group:p})}}return y}),[C,l,w,E,i]);return d.useEffect(()=>{if(!E.has(l)){const y=V.get(l);if(y&&y.length>0){const[u]=y[0];S(l,u)}}},[l,V,E,S]),a.jsx(a.Fragment,{children:_})}const Se=({group:t,variations:w,activeIds:C,setActiveId:v,isMinimized:i})=>{var l,E,S,N;const f=(E=(l=w[0])==null?void 0:l[1])==null?void 0:E.groupLabel,j=C.get(t);return a.jsxs("div",{className:"variation-group",children:[a.jsx("div",{className:"variation-title",title:f,children:f}),a.jsx("div",{className:"variations-selects",children:a.jsx("select",{value:j||"",onChange:V=>{v(t,V.target.value)},className:"variation-select",tabIndex:i?-1:0,title:((N=(S=w.find(([V])=>V===j))==null?void 0:S[1])==null?void 0:N.label)||"",children:w.map(([V,{label:_}])=>a.jsx("option",{value:V,title:_,children:_},V))})}),a.jsx("style",{children:`
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
        `})]})};function Ue({position:t="bottom-right",minimizedByDefault:w=!1,className:C,...v}){const[i,f]=d.useState(w),[j,l]=d.useState(!1),[E,S]=d.useState("variations"),{activeIds:N,setActiveId:V,variations:_}=K(),[y,u]=Ve(),m=()=>{const c=new URLSearchParams(window.location.search),n=Array.from(N.entries());if(n.length>0){const z=n.map(([Y,X])=>`${Y}.${X}`).join("_");c.set("var",z)}else c.delete("var");const h=c.toString(),R=window.location.href.split("?")[0]+(h?`?${h}`:"");navigator.clipboard.writeText(R).then(()=>{l(!0),setTimeout(()=>l(!1),2e3)})},p=d.useMemo(()=>{const c=new Map;return Array.from(_.entries()).forEach(([n,h])=>{const{group:R,label:z,groupLabel:Y}=h;c.has(R)||c.set(R,[]),c.get(R).push([n,{label:z,groupLabel:Y}])}),c},[_]),b=(()=>{const c=[],n=new Set;if(p.has("root")){const h=p.get("root");c.push(a.jsx(Se,{group:"root",variations:h,activeIds:N,setActiveId:V,isMinimized:i},"root")),n.add("root")}return Array.from(N.entries()).forEach(([h])=>{if(!n.has(h)&&p.has(h)){const R=p.get(h);c.push(a.jsx(Se,{group:h,variations:R,activeIds:N,setActiveId:V,isMinimized:i},h)),n.add(h)}}),c.length===0?a.jsxs("div",{className:"variations-empty",children:[a.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),a.jsxs("div",{className:"variations-empty-text",children:["Add a ",a.jsx("code",{children:"<Variations>"})," component!"]}),a.jsx("style",{children:`
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
            `})]}):c})();return d.useEffect(()=>{const c=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),f(h=>!h))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),a.jsxs("div",{className:`variations-controls-container ${C||""}`,...v,children:[a.jsx("div",{className:`variations-controls ${i?"minimized":""}`,children:i?a.jsx("button",{className:"variations-circle",onClick:()=>f(!1),tabIndex:i?0:-1,children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"variations-header",children:[a.jsxs("div",{className:"variations-header-title",children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[a.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),a.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),a.jsxs("div",{className:"variations-tabs",children:[a.jsx("button",{className:`variations-tab ${E==="variations"?"active":""}`,onClick:()=>S("variations"),children:"Variations"}),a.jsx("button",{className:`variations-tab ${E==="state"?"active":""}`,onClick:()=>S("state"),children:"State"})]})]}),a.jsxs("div",{className:"variations-header-actions",children:[a.jsx("button",{className:"variations-header-button",onClick:m,title:"Copy link to clipboard",tabIndex:i?-1:0,children:j?a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}):a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}),a.jsx("path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}),a.jsx("line",{x1:"8",x2:"16",y1:"12",y2:"12"})]})}),a.jsx("button",{className:"variations-header-toggle",onClick:()=>f(!0),tabIndex:i?-1:0,children:"×"})]})]}),a.jsx("div",{className:"variation-content",children:E==="variations"?a.jsx("div",{className:"variation-groups",children:b}):a.jsx("div",{className:"variation-state",children:a.jsx("div",{className:"state-editor",children:a.jsx("textarea",{value:JSON.stringify(y,null,2),onChange:c=>{try{const n=JSON.parse(c.target.value);u(n)}catch{}},spellCheck:!1,className:"state-textarea"})})})})]})}),a.jsx("style",{children:`
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
            padding: 2px;
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
        `})]})}exports.Variation=se;exports.Variations=Ae;exports.VariationsControls=Ue;exports.VariationsProvider=$e;exports.useVariation=Le;exports.useVariations=K;exports.useVariationsState=Ve;
