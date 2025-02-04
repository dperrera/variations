"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("react");var I={exports:{}},$={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function _e(){if(we)return $;we=1;var r=Symbol.for("react.fragment");return $.Fragment=r,$.jsxDEV=void 0,$}var L={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Se(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ke:return"Portal";case oe:return"Profiler";case te:return"StrictMode";case X:return"Suspense";case B:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ae:return(e.displayName||"Context")+".Provider";case ne:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function b(e){return""+e}function E(e){try{b(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,f=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f),b(e)}}function x(){}function v(){if(M===0){le=console.log,ce=console.info,ue=console.warn,de=console.error,fe=console.group,me=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:x,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}function j(){if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:_({},e,{value:le}),info:_({},e,{value:ce}),warn:_({},e,{value:ue}),error:_({},e,{value:de}),group:_({},e,{value:fe}),groupCollapsed:_({},e,{value:me}),groupEnd:_({},e,{value:pe})})}0>M&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function w(e){if(H===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",ve=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+ve}function h(e,t){if(!e||Z)return"";var o=Q.get(e);if(o!==void 0)return o;Z=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var f=null;f=R.H,R.H=null,v();try{var k={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(A){var D=A}Reflect.construct(e,[],T)}else{try{T.call()}catch(A){D=A}e.call(T.prototype)}}else{try{throw Error()}catch(A){D=A}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(A){if(A&&D&&typeof A.stack=="string")return[A.stack,D.stack]}return[null,null]}};k.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(k.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(k.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=k.DetermineComponentFrameRoot(),P=a[0],U=a[1];if(P&&U){var y=P.split(`
`),S=U.split(`
`);for(a=g=0;g<y.length&&!y[g].includes("DetermineComponentFrameRoot");)g++;for(;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;if(g===y.length||a===S.length)for(g=y.length-1,a=S.length-1;1<=g&&0<=a&&y[g]!==S[a];)a--;for(;1<=g&&0<=a;g--,a--)if(y[g]!==S[a]){if(g!==1||a!==1)do if(g--,a--,0>a||y[g]!==S[a]){var O=`
`+y[g].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&Q.set(e,O),O}while(1<=g&&0<=a);break}}}finally{Z=!1,R.H=f,j(),Error.prepareStackTrace=o}return y=(y=e?e.displayName||e.name:"")?w(y):"",typeof e=="function"&&Q.set(e,y),y}function N(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return h(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return w(e);switch(e){case X:return w("Suspense");case B:return w("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case K:return e=h(e.render,!1),e;case q:return N(e.type);case J:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return""}function V(){var e=R.A;return e===null?null:e.getOwner()}function m(e){if(se.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function u(e,t){function o(){ge||(ge=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function l(){var e=r(this.type);return he[e]||(he[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function n(e,t,o,f,k,g){return o=g.ref,e={$$typeof:G,type:e,key:t,props:g,_owner:k},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:l}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function i(e,t,o,f,k,g){if(typeof e=="string"||typeof e=="function"||e===W||e===oe||e===te||e===X||e===B||e===Pe||typeof e=="object"&&e!==null&&(e.$$typeof===J||e.$$typeof===q||e.$$typeof===ae||e.$$typeof===ne||e.$$typeof===K||e.$$typeof===Te||e.getModuleId!==void 0)){var a=t.children;if(a!==void 0)if(f)if(F(a)){for(f=0;f<a.length;f++)d(a[f],e);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else d(a,e)}else a="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?f="null":F(e)?f="array":e!==void 0&&e.$$typeof===G?(f="<"+(r(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a);if(se.call(t,"key")){a=r(e);var P=Object.keys(t).filter(function(y){return y!=="key"});f=0<P.length?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}",be[a+f]||(P=0<P.length?"{"+P.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f,a,P,a),be[a+f]=!0)}if(a=null,o!==void 0&&(E(o),a=""+o),m(t)&&(E(t.key),a=""+t.key),"key"in t){o={};for(var U in t)U!=="key"&&(o[U]=t[U])}else o=t;return a&&u(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),n(e,a,g,k,V(),o)}function d(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Re){if(F(e))for(var o=0;o<e.length;o++){var f=e[o];c(f)&&C(f,t)}else if(c(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ie&&e[ie]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)c(e.value)&&C(e.value,t)}}function c(e){return typeof e=="object"&&e!==null&&e.$$typeof===G}function C(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=Y(t),!xe[t])){xe[t]=!0;var o="";e&&e._owner!=null&&e._owner!==V()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var f=R.getCurrentStack;R.getCurrentStack=function(){var k=N(e.type);return f&&(k+=f()||""),k},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),R.getCurrentStack=f}}function Y(e){var t="",o=V();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Ce=p,G=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),ie=Symbol.iterator,Ae=Symbol.for("react.client.reference"),R=Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=Object.prototype.hasOwnProperty,_=Object.assign,Te=Symbol.for("react.client.reference"),F=Array.isArray,M=0,le,ce,ue,de,fe,me,pe;x.__reactDisabledLog=!0;var H,ve,Z=!1,Q=new(typeof WeakMap=="function"?WeakMap:Map),Re=Symbol.for("react.client.reference"),ge,he={},be={},xe={};L.Fragment=W,L.jsxDEV=function(e,t,o,f,k,g){return i(e,t,o,f,k,g)}}()),L}var Ne;function Ue(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?I.exports=_e():I.exports=Se()),I.exports}var s=Ue();const ee=p.createContext(null),je=()=>{const r=p.useContext(ee);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Me({children:r,disableQueryString:b=!1}){const[E,x]=p.useState(new Map),[v,j]=p.useState(new Map);p.useEffect(()=>{if(b||typeof window>"u")return;const u=new URLSearchParams(window.location.search).get("var");if(u)try{const l=u.split("_").map(n=>{const[i,d]=n.split(".");if(!i||!d)throw new Error("Invalid format");return[i,d]});x(new Map(l))}catch{x(new Map)}},[b]),p.useEffect(()=>{if(b||typeof window>"u")return;const m=new URLSearchParams(window.location.search),u=Array.from(E.entries());if(u.length===0)m.delete("var");else{const i=u.map(([d,c])=>`${d}.${c}`).join("_");m.set("var",i)}const l=m.toString(),n=l?`${window.location.pathname}?${l}`:window.location.pathname;window.history.replaceState({},"",n)},[E,b]),p.useEffect(()=>{if(b||typeof window>"u")return;const m=()=>{const l=new URLSearchParams(window.location.search).get("var");if(l)try{x(new Map(JSON.parse(l)))}catch{x(new Map)}else x(new Map)};return window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[b]);const w=p.useMemo(()=>{const m=E.get("root-variations");if(!m)return null;const u=(n,i)=>{const d={id:n,group:i,children:new Map};return Array.from(v.entries()).forEach(([,c])=>{if(c.parentId===n){const C=E.get(c.group);C&&d.children.set(c.group,u(C,c.group))}}),d};return u(m,"root-variations")},[E,v]),h=p.useCallback((m,u)=>{x(l=>{const n=new Map(l);return n.set(m,u),m==="root-variations"?Array.from(l.keys()).forEach(i=>{i!=="root-variations"&&n.delete(i)}):Array.from(v.entries()).find(([d])=>d===u)&&Array.from(l.keys()).forEach(d=>{const c=Array.from(v.entries()).find(([,C])=>C.group===d);c&&c[1].parentId===u&&n.delete(d)}),n})},[v]),N=p.useCallback((m,u,l,n,i)=>{j(d=>{const c=d.get(u);if((c==null?void 0:c.group)===m&&(c==null?void 0:c.label)===l&&(c==null?void 0:c.groupLabel)===n&&(c==null?void 0:c.parentId)===i)return d;const C=new Map(d);return C.set(u,{group:m,label:l,groupLabel:n,parentId:i}),C})},[]),V=p.useMemo(()=>({activeIds:E,setActiveId:h,registerVariation:N,variations:v,activeTree:w}),[E,h,N,v,w]);return s.jsxDEV(ee.Provider,{value:V,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:212,columnNumber:5},this)}function z(r){return r.toLowerCase().replace(/\s+/g,"-")}function re({label:r,children:b,...E}){const{group:x="",id:v,groupLabel:j,parentId:w}=E,h=p.useMemo(()=>v||z(r),[v,r]),{activeIds:N,registerVariation:V}=je(),m=N.get(x)===h;return p.useEffect(()=>{if(!x){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}V(x,h,r,j||x,w)},[x,h,r,j,w,V]),m?s.jsxDEV(s.Fragment,{children:b},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const Oe="root-variations";function De(r){return p.isValidElement(r)&&r.type===re&&typeof r.props.label=="string"}function ye({isRoot:r=!1,label:b,children:E,...x}){const{parentId:v,group:j}=x,w=p.useContext(ee);if(!w)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&v)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const h=j||(r?Oe:z(b)),{activeIds:N,setActiveId:V,variations:m}=w,u=p.useMemo(()=>{const n=new Map;return Array.from(m.entries()).forEach(([i,d])=>{const{group:c,label:C,groupLabel:Y}=d;n.has(c)||n.set(c,[]),n.get(c).push([i,{label:C,groupLabel:Y}])}),n},[m]),l=p.useMemo(()=>p.Children.map(E,n=>{if(p.isValidElement(n)){if(n.type===re){if(!De(n))throw new Error("Invalid Variation component");const i=z(n.props.label);return p.cloneElement(n,{...n.props,group:h,groupLabel:b,id:i,parentId:v})}else if(n.type===ye){const i=n,d=N.get(h),c=z(i.props.label);return p.cloneElement(i,{...i.props,parentId:d,group:c})}}return n}),[E,h,b,N,v]);return p.useEffect(()=>{if(!N.has(h)){const n=u.get(h);if(n&&n.length>0){const[i]=n[0];V(h,i)}}},[h,u,N,V]),s.jsxDEV(s.Fragment,{children:l},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const Ve=({group:r,variations:b,activeIds:E,setActiveId:x,isMinimized:v})=>{var h,N,V,m;const j=(N=(h=b[0])==null?void 0:h[1])==null?void 0:N.groupLabel,w=E.get(r);return s.jsxDEV("div",{className:"variation-group",children:[s.jsxDEV("div",{className:"variation-title",title:j,children:j},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),s.jsxDEV("div",{className:"variations-selects",children:s.jsxDEV("select",{value:w||"",onChange:u=>{x(r,u.target.value)},className:"variation-select",tabIndex:v?-1:0,title:((m=(V=b.find(([u])=>u===w))==null?void 0:V[1])==null?void 0:m.label)||"",children:b.map(([u,{label:l}])=>s.jsxDEV("option",{value:u,title:l,children:l},u,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),s.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function Ie({position:r="bottom-right",minimizedByDefault:b=!1,className:E,...x}){const[v,j]=p.useState(b),{activeIds:w,setActiveId:h,variations:N}=je(),V=p.useMemo(()=>{const l=new Map;return Array.from(N.entries()).forEach(([n,i])=>{const{group:d,label:c,groupLabel:C}=i;l.has(d)||l.set(d,[]),l.get(d).push([n,{label:c,groupLabel:C}])}),l},[N]),u=(()=>{const l=[],n=new Set;if(V.has("root-variations")){const i=V.get("root-variations");l.push(s.jsxDEV(Ve,{group:"root-variations",variations:i,activeIds:w,setActiveId:h,isMinimized:v},"root-variations",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:190,columnNumber:9},this)),n.add("root-variations")}return Array.from(w.entries()).forEach(([i])=>{if(!n.has(i)&&V.has(i)){const d=V.get(i);l.push(s.jsxDEV(Ve,{group:i,variations:d,activeIds:w,setActiveId:h,isMinimized:v},i,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:207,columnNumber:11},this)),n.add(i)}}),l.length===0?s.jsxDEV("div",{className:"variations-empty",children:[s.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:223,columnNumber:11},this),s.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",s.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:225,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:224,columnNumber:11},this),s.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:227,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:222,columnNumber:9},this):l})();return p.useEffect(()=>{const l=n=>{n.code==="KeyV"&&n.altKey&&!n.ctrlKey&&!n.shiftKey&&!n.metaKey&&(n.preventDefault(),j(i=>!i))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),s.jsxDEV("div",{className:`variations-controls-container ${E||""}`,...x,children:[s.jsxDEV("div",{className:`variations-controls ${v?"minimized":""}`,children:v?s.jsxDEV("button",{className:"variations-circle",onClick:()=>j(!1),tabIndex:v?0:-1,children:s.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:319,columnNumber:15},this),s.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:320,columnNumber:15},this),s.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:321,columnNumber:15},this),s.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:322,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:308,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:303,columnNumber:9},this):s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{className:"variations-header",children:[s.jsxDEV("div",{className:"variations-header-title",children:[s.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[s.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:344,columnNumber:19},this),s.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:345,columnNumber:19},this),s.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:346,columnNumber:19},this),s.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:329,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:328,columnNumber:15},this),s.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>j(!0),tabIndex:v?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:351,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:327,columnNumber:13},this),s.jsxDEV("div",{className:"variation-groups",children:u},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:360,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:326,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:301,columnNumber:7},this),s.jsxDEV("style",{children:`
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
          }
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:364,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:297,columnNumber:5},this)}exports.Variation=re;exports.Variations=ye;exports.VariationsControls=Ie;exports.VariationsProvider=Me;
