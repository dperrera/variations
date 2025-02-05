(function(_,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(_=typeof globalThis<"u"?globalThis:_||self,u(_.variations={},_.React))})(this,function(_,u){"use strict";var q={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function _e(){if(ce)return G;ce=1;var t=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(v,i,f){var j=null;if(f!==void 0&&(j=""+f),i.key!==void 0&&(j=""+i.key),"key"in i){f={};for(var l in i)l!=="key"&&(f[l]=i[l])}else f=i;return i=f.ref,{$$typeof:t,type:v,key:j,ref:i!==void 0?i:null,props:f}}return G.Fragment=w,G.jsx=C,G.jsxs=C,G}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Me(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case h:return"Portal";case U:return"Profiler";case R:return"StrictMode";case te:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case he:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case ee:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case ne:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function w(e){return""+e}function C(e){try{w(e);var r=!1}catch{r=!0}if(r){r=console;var o=r.error,g=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",g),w(e)}}function v(){}function i(){if(B===0){be=console.log,we=console.info,Ee=console.warn,ye=console.error,ke=console.group,je=console.groupCollapsed,Ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}function f(){if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:be}),info:z({},e,{value:we}),warn:z({},e,{value:Ee}),error:z({},e,{value:ye}),group:z({},e,{value:ke}),groupCollapsed:z({},e,{value:je}),groupEnd:z({},e,{value:Ce})})}0>B&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function j(e){if(ie===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ie=r&&r[1]||"",Se=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+Se}function l(e,r){if(!e||se)return"";var o=le.get(e);if(o!==void 0)return o;se=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var g=null;g=$.H,$.H=null,i();try{var V={DetermineComponentFrameRoot:function(){try{if(r){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(P){var Z=P}Reflect.construct(e,[],L)}else{try{L.call()}catch(P){Z=P}e.call(L.prototype)}}else{try{throw Error()}catch(P){Z=P}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(P){if(P&&Z&&typeof P.stack=="string")return[P.stack,Z.stack]}return[null,null]}};V.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var k=Object.getOwnPropertyDescriptor(V.DetermineComponentFrameRoot,"name");k&&k.configurable&&Object.defineProperty(V.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=V.DetermineComponentFrameRoot(),I=s[0],W=s[1];if(I&&W){var A=I.split(`
`),Y=W.split(`
`);for(s=k=0;k<A.length&&!A[k].includes("DetermineComponentFrameRoot");)k++;for(;s<Y.length&&!Y[s].includes("DetermineComponentFrameRoot");)s++;if(k===A.length||s===Y.length)for(k=A.length-1,s=Y.length-1;1<=k&&0<=s&&A[k]!==Y[s];)s--;for(;1<=k&&0<=s;k--,s--)if(A[k]!==Y[s]){if(k!==1||s!==1)do if(k--,s--,0>s||A[k]!==Y[s]){var X=`
`+A[k].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),typeof e=="function"&&le.set(e,X),X}while(1<=k&&0<=s);break}}}finally{se=!1,$.H=g,f(),Error.prepareStackTrace=o}return A=(A=e?e.displayName||e.name:"")?j(A):"",typeof e=="function"&&le.set(e,A),A}function E(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return l(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return j(e);switch(e){case te:return j("Suspense");case re:return j("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case ee:return e=l(e.render,!1),e;case oe:return E(e.type);case ne:r=e._payload,e=e._init;try{return E(e(r))}catch{}}return""}function S(){var e=$.A;return e===null?null:e.getOwner()}function N(e){if(xe.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function T(e,r){function o(){Ne||(Ne=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function M(){var e=t(this.type);return Te[e]||(Te[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function y(e,r,o,g,V,k){return o=k.ref,e={$$typeof:a,type:e,key:r,props:k,_owner:V},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:M}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,r,o,g,V,k){if(typeof e=="string"||typeof e=="function"||e===O||e===U||e===R||e===te||e===re||e===Ye||typeof e=="object"&&e!==null&&(e.$$typeof===ne||e.$$typeof===oe||e.$$typeof===he||e.$$typeof===K||e.$$typeof===ee||e.$$typeof===Ue||e.getModuleId!==void 0)){var s=r.children;if(s!==void 0)if(g)if(ae(s)){for(g=0;g<s.length;g++)m(s[g],e);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else m(s,e)}else s="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?g="null":ae(e)?g="array":e!==void 0&&e.$$typeof===a?(g="<"+(t(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,s);if(xe.call(r,"key")){s=t(e);var I=Object.keys(r).filter(function(A){return A!=="key"});g=0<I.length?"{key: someKey, "+I.join(": ..., ")+": ...}":"{key: someKey}",Ve[s+g]||(I=0<I.length?"{"+I.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,g,s,I,s),Ve[s+g]=!0)}if(s=null,o!==void 0&&(C(o),s=""+o),N(r)&&(C(r.key),s=""+r.key),"key"in r){o={};for(var W in r)W!=="key"&&(o[W]=r[W])}else o=r;return s&&T(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),y(e,s,k,V,S(),o)}function m(e,r){if(typeof e=="object"&&e&&e.$$typeof!==We){if(ae(e))for(var o=0;o<e.length;o++){var g=e[o];p(g)&&x(g,r)}else if(p(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=me&&e[me]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)p(e.value)&&x(e.value,r)}}function p(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function x(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=b(r),!Ae[r])){Ae[r]=!0;var o="";e&&e._owner!=null&&e._owner!==S()&&(o=null,typeof e._owner.tag=="number"?o=t(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var g=$.getCurrentStack;$.getCurrentStack=function(){var V=E(e.type);return g&&(V+=g()||""),V},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,o),$.getCurrentStack=g}}function b(e){var r="",o=S();return o&&(o=t(o.type))&&(r=`

Check the render method of \``+o+"`."),r||(e=t(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var c=u,a=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),he=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),me=Symbol.iterator,Re=Symbol.for("react.client.reference"),$=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe=Object.prototype.hasOwnProperty,z=Object.assign,Ue=Symbol.for("react.client.reference"),ae=Array.isArray,B=0,be,we,Ee,ye,ke,je,Ce;v.__reactDisabledLog=!0;var ie,Se,se=!1,le=new(typeof WeakMap=="function"?WeakMap:Map),We=Symbol.for("react.client.reference"),Ne,Te={},Ve={},Ae={};J.Fragment=O,J.jsx=function(e,r,o,g,V){return d(e,r,o,!1,g,V)},J.jsxs=function(e,r,o,g,V){return d(e,r,o,!0,g,V)}}()),J}var de;function Oe(){return de||(de=1,process.env.NODE_ENV==="production"?q.exports=_e():q.exports=Me()),q.exports}var n=Oe();const Q=u.createContext(null),fe=u.createContext(null);function F(){const t=u.useContext(Q);if(!t)throw new Error("useVariations must be used within a VariationsProvider");return t}function pe(){const t=u.useContext(fe);if(!t)throw new Error("useVariationsState must be used within a VariationsProvider");return[t.state,t.setState]}function Ie(t){const{activeIds:w,setActiveId:C,variations:v}=F(),i=w.get(t),f=u.useMemo(()=>Array.from(v.entries()).filter(([,l])=>l.group===t).map(([l,{label:E}])=>({id:l,label:E})),[v,t]);return{active:u.useMemo(()=>{if(!i)return null;const l=v.get(i);return l?{id:i,label:l.label}:null},[i,v]),setActive:l=>C(t,l),variations:f}}function Pe({children:t,disableQueryString:w=!1,initialState:C}){const[v,i]=u.useState(new Map),[f,j]=u.useState(new Map),[l,E]=u.useState(()=>C);u.useEffect(()=>{if(w||typeof window>"u")return;const d=new URLSearchParams(window.location.search),m=d.get("var");if(m)try{const x=m.split("_").map(b=>{const[c,a]=b.split(".");if(!c||!a)throw new Error("Invalid format");return[c,a]});i(new Map(x))}catch{i(new Map)}const p=d.get("s");if(p)try{const x=JSON.parse(atob(p));E(x)}catch{}},[w]),u.useEffect(()=>{if(w||typeof window>"u")return;const d=new URLSearchParams,m=Array.from(v.entries());if(m.length>0){const b=m.map(([c,a])=>`${c}.${a}`).join("_");d.set("var",b)}if(l!==void 0){const b=btoa(JSON.stringify(l));d.set("s",b)}const p=d.toString(),x=p?`${window.location.pathname}?${p}`:window.location.pathname;window.history.replaceState({},"",x)},[v,l,w]),u.useEffect(()=>{if(w||typeof window>"u")return;const d=()=>{const m=new URLSearchParams(window.location.search),p=m.get("var");if(p)try{const b=p.split("_").map(c=>{const[a,h]=c.split(".");if(!a||!h)throw new Error("Invalid format");return[a,h]});i(new Map(b))}catch{i(new Map)}else i(new Map);const x=m.get("s");if(x)try{const b=JSON.parse(atob(x));E(b)}catch{}};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[w]);const S=u.useMemo(()=>{const d=v.get("root");if(!d)return null;const m=(x,b)=>{const c={id:x,group:b,children:new Map};return Array.from(f.entries()).forEach(([,a])=>{if(a.parentId===x){const h=v.get(a.group);h&&c.children.set(a.group,m(h,a.group))}}),c};return m(d,"root")},[v,f]),N=u.useCallback((d,m)=>{i(p=>{const x=new Map(p);return x.set(d,m),d==="root"?Array.from(p.keys()).forEach(b=>{b!=="root"&&x.delete(b)}):Array.from(f.entries()).find(([c])=>c===m)&&Array.from(p.keys()).forEach(c=>{const a=Array.from(f.entries()).find(([,h])=>h.group===c);a&&a[1].parentId===m&&x.delete(c)}),x})},[f]),T=u.useCallback((d,m,p,x,b)=>{j(c=>{const a=c.get(m);if((a==null?void 0:a.group)===d&&(a==null?void 0:a.label)===p&&(a==null?void 0:a.groupLabel)===x&&(a==null?void 0:a.parentId)===b)return c;const h=new Map(c);return h.set(m,{group:d,label:p,groupLabel:x,parentId:b}),h})},[]),M=u.useMemo(()=>({activeIds:v,setActiveId:N,registerVariation:T,variations:f,activeTree:S}),[v,N,T,f,S]),y=u.useMemo(()=>({state:l,setState:d=>{E(d)}}),[l]);return n.jsx(Q.Provider,{value:M,children:n.jsx(fe.Provider,{value:y,children:t})})}function H(t){return t.toLowerCase().replace(/\s+/g,"-")}function D({label:t,children:w,...C}){const{group:v="",id:i,groupLabel:f,parentId:j}=C,l=u.useMemo(()=>i||H(t),[i,t]),{activeIds:E,registerVariation:S}=F(),N=E.get(v)===l;return u.useEffect(()=>{if(!v){console.error(`Variation Component Error: No group provided for variation "${t}"

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
   </Variations>`);return}S(v,l,t,f||v,j)},[v,l,t,f,j,S]),N?n.jsx(n.Fragment,{children:w}):null}const Le="root";function $e(t){return u.isValidElement(t)&&t.type===D&&typeof t.props.label=="string"}function ge({isRoot:t=!1,label:w,children:C,...v}){const{parentId:i,group:f}=v,j=u.useContext(Q);if(!j)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(t&&i)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const l=f||(t?Le:H(w)),{activeIds:E,setActiveId:S,variations:N}=j,T=u.useMemo(()=>{const y=new Map;return Array.from(N.entries()).forEach(([d,m])=>{const{group:p,label:x,groupLabel:b}=m;y.has(p)||y.set(p,[]),y.get(p).push([d,{label:x,groupLabel:b}])}),y},[N]),M=u.useMemo(()=>u.Children.map(C,y=>{if(u.isValidElement(y)){if(y.type===D){if(!$e(y))throw new Error("Invalid Variation component");const d=H(y.props.label);return u.cloneElement(y,{...y.props,group:l,groupLabel:w,id:d,parentId:i})}else if(y.type===ge){const d=y,m=E.get(l),p=H(d.props.label);return u.cloneElement(d,{...d.props,parentId:m,group:p})}}return y}),[C,l,w,E,i]);return u.useEffect(()=>{if(!E.has(l)){const y=T.get(l);if(y&&y.length>0){const[d]=y[0];S(l,d)}}},[l,T,E,S]),n.jsx(n.Fragment,{children:M})}const ve=({group:t,variations:w,activeIds:C,setActiveId:v,isMinimized:i})=>{var l,E,S,N;const f=(E=(l=w[0])==null?void 0:l[1])==null?void 0:E.groupLabel,j=C.get(t);return n.jsxs("div",{className:"variation-group",children:[n.jsx("div",{className:"variation-title",title:f,children:f}),n.jsx("div",{className:"variations-selects",children:n.jsx("select",{value:j||"",onChange:T=>{v(t,T.target.value)},className:"variation-select",tabIndex:i?-1:0,title:((N=(S=w.find(([T])=>T===j))==null?void 0:S[1])==null?void 0:N.label)||"",children:w.map(([T,{label:M}])=>n.jsx("option",{value:T,title:M,children:M},T))})}),n.jsx("style",{children:`
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
        `})]})};function ze({position:t="bottom-right",minimizedByDefault:w=!1,className:C,...v}){const[i,f]=u.useState(w),[j,l]=u.useState(!1),[E,S]=u.useState("variations"),{activeIds:N,setActiveId:T,variations:M}=F(),[y,d]=pe(),m=()=>{const c=new URLSearchParams(window.location.search),a=Array.from(N.entries());if(a.length>0){const R=a.map(([U,K])=>`${U}.${K}`).join("_");c.set("var",R)}else c.delete("var");const h=c.toString(),O=window.location.href.split("?")[0]+(h?`?${h}`:"");navigator.clipboard.writeText(O).then(()=>{l(!0),setTimeout(()=>l(!1),2e3)})},p=u.useMemo(()=>{const c=new Map;return Array.from(M.entries()).forEach(([a,h])=>{const{group:O,label:R,groupLabel:U}=h;c.has(O)||c.set(O,[]),c.get(O).push([a,{label:R,groupLabel:U}])}),c},[M]),b=(()=>{const c=[],a=new Set;if(p.has("root")){const h=p.get("root");c.push(n.jsx(ve,{group:"root",variations:h,activeIds:N,setActiveId:T,isMinimized:i},"root")),a.add("root")}return Array.from(N.entries()).forEach(([h])=>{if(!a.has(h)&&p.has(h)){const O=p.get(h);c.push(n.jsx(ve,{group:h,variations:O,activeIds:N,setActiveId:T,isMinimized:i},h)),a.add(h)}}),c.length===0?n.jsxs("div",{className:"variations-empty",children:[n.jsx("div",{className:"variations-empty-title",children:"No Variations Found"}),n.jsxs("div",{className:"variations-empty-text",children:["Add a ",n.jsx("code",{children:"<Variations>"})," component!"]}),n.jsx("style",{children:`
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
            `})]}):c})();return u.useEffect(()=>{const c=a=>{a.code==="KeyV"&&a.altKey&&!a.ctrlKey&&!a.shiftKey&&!a.metaKey&&(a.preventDefault(),f(h=>!h))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),n.jsxs("div",{className:`variations-controls-container ${C||""}`,...v,children:[n.jsx("div",{className:`variations-controls ${i?"minimized":""}`,children:i?n.jsx("button",{className:"variations-circle",onClick:()=>f(!1),tabIndex:i?0:-1,children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]})}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"variations-header",children:[n.jsxs("div",{className:"variations-header-title",children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[n.jsx("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}),n.jsx("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"})]}),n.jsxs("div",{className:"variations-tabs",children:[n.jsx("button",{className:`variations-tab ${E==="variations"?"active":""}`,onClick:()=>S("variations"),children:"Variations"}),n.jsx("button",{className:`variations-tab ${E==="state"?"active":""}`,onClick:()=>S("state"),children:"State"})]})]}),n.jsxs("div",{className:"variations-header-actions",children:[n.jsx("button",{className:"variations-header-button",onClick:m,title:"Copy link to clipboard",tabIndex:i?-1:0,children:j?n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}):n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}),n.jsx("path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}),n.jsx("line",{x1:"8",x2:"16",y1:"12",y2:"12"})]})}),n.jsx("button",{className:"variations-header-toggle",onClick:()=>f(!0),tabIndex:i?-1:0,children:"×"})]})]}),n.jsx("div",{className:"variation-content",children:E==="variations"?n.jsx("div",{className:"variation-groups",children:b}):n.jsx("div",{className:"variation-state",children:n.jsx("div",{className:"state-editor",children:n.jsx("textarea",{value:JSON.stringify(y,null,2),onChange:c=>{try{const a=JSON.parse(c.target.value);d(a)}catch{}},spellCheck:!1,className:"state-textarea"})})})})]})}),n.jsx("style",{children:`
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
        `})]})}_.Variation=D,_.Variations=ge,_.VariationsControls=ze,_.VariationsProvider=Pe,_.useVariation=Ie,_.useVariations=F,_.useVariationsState=pe,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
