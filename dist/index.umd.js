(function(P,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(P=typeof globalThis<"u"?globalThis:P||self,u(P.variations={},P.React))})(this,function(P,u){"use strict";var R={exports:{}},$={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function ke(){if(ne)return $;ne=1;var r=Symbol.for("react.fragment");return $.Fragment=r,$.jsxDEV=void 0,$}var L={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Pe(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Oe:return"Portal";case ue:return"Profiler";case ce:return"StrictMode";case J:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case de:return(e.displayName||"Context")+".Provider";case fe:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function b(e){return""+e}function E(e){try{b(e);var t=!1}catch{t=!0}if(t){t=console;var n=t.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),b(e)}}function x(){}function v(){if(D===0){ve=console.log,ge=console.info,he=console.warn,be=console.error,xe=console.group,we=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:x,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}function j(){if(D--,D===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:U({},e,{value:ve}),info:U({},e,{value:ge}),warn:U({},e,{value:he}),error:U({},e,{value:be}),group:U({},e,{value:xe}),groupCollapsed:U({},e,{value:we}),groupEnd:U({},e,{value:Ee})})}0>D&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function w(e){if(ee===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ee=t&&t[1]||"",Ne=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+Ne}function h(e,t){if(!e||re)return"";var n=te.get(e);if(n!==void 0)return n;re=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var m=null;m=S.H,S.H=null,v();try{var k={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(A){var Y=A}Reflect.construct(e,[],_)}else{try{_.call()}catch(A){Y=A}e.call(_.prototype)}}else{try{throw Error()}catch(A){Y=A}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(A){if(A&&Y&&typeof A.stack=="string")return[A.stack,Y.stack]}return[null,null]}};k.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(k.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(k.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=k.DetermineComponentFrameRoot(),T=a[0],O=a[1];if(T&&O){var y=T.split(`
`),M=O.split(`
`);for(a=g=0;g<y.length&&!y[g].includes("DetermineComponentFrameRoot");)g++;for(;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;if(g===y.length||a===M.length)for(g=y.length-1,a=M.length-1;1<=g&&0<=a&&y[g]!==M[a];)a--;for(;1<=g&&0<=a;g--,a--)if(y[g]!==M[a]){if(g!==1||a!==1)do if(g--,a--,0>a||y[g]!==M[a]){var I=`
`+y[g].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,I),I}while(1<=g&&0<=a);break}}}finally{re=!1,S.H=m,j(),Error.prepareStackTrace=n}return y=(y=e?e.displayName||e.name:"")?w(y):"",typeof e=="function"&&te.set(e,y),y}function N(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return h(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return w(e);switch(e){case J:return w("Suspense");case F:return w("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case q:return e=h(e.render,!1),e;case H:return N(e.type);case Z:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return""}function V(){var e=S.A;return e===null?null:e.getOwner()}function p(e){if(pe.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function f(e,t){function n(){Ve||(Ve=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function l(){var e=r(this.type);return je[e]||(je[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function o(e,t,n,m,k,g){return n=g.ref,e={$$typeof:X,type:e,key:t,props:g,_owner:k},(n!==void 0?n:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:l}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function s(e,t,n,m,k,g){if(typeof e=="string"||typeof e=="function"||e===B||e===ue||e===ce||e===J||e===F||e===De||typeof e=="object"&&e!==null&&(e.$$typeof===Z||e.$$typeof===H||e.$$typeof===de||e.$$typeof===fe||e.$$typeof===q||e.$$typeof===Re||e.getModuleId!==void 0)){var a=t.children;if(a!==void 0)if(m)if(Q(a)){for(m=0;m<a.length;m++)d(a[m],e);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else d(a,e)}else a="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?m="null":Q(e)?m="array":e!==void 0&&e.$$typeof===X?(m="<"+(r(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,a);if(pe.call(t,"key")){a=r(e);var T=Object.keys(t).filter(function(y){return y!=="key"});m=0<T.length?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}",ye[a+m]||(T=0<T.length?"{"+T.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,a,T,a),ye[a+m]=!0)}if(a=null,n!==void 0&&(E(n),a=""+n),p(t)&&(E(t.key),a=""+t.key),"key"in t){n={};for(var O in t)O!=="key"&&(n[O]=t[O])}else n=t;return a&&f(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),o(e,a,g,k,V(),n)}function d(e,t){if(typeof e=="object"&&e&&e.$$typeof!==$e){if(Q(e))for(var n=0;n<e.length;n++){var m=e[n];c(m)&&C(m,t)}else if(c(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?n=null:(n=me&&e[me]||e["@@iterator"],n=typeof n=="function"?n:null),typeof n=="function"&&n!==e.entries&&(n=n.call(e),n!==e))for(;!(e=n.next()).done;)c(e.value)&&C(e.value,t)}}function c(e){return typeof e=="object"&&e!==null&&e.$$typeof===X}function C(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=K(t),!Ce[t])){Ce[t]=!0;var n="";e&&e._owner!=null&&e._owner!==V()&&(n=null,typeof e._owner.tag=="number"?n=r(e._owner.type):typeof e._owner.name=="string"&&(n=e._owner.name),n=" It was passed a child from "+n+".");var m=S.getCurrentStack;S.getCurrentStack=function(){var k=N(e.type);return m&&(k+=m()||""),k},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,n),S.getCurrentStack=m}}function K(e){var t="",n=V();return n&&(n=r(n.type))&&(t=`

Check the render method of \``+n+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Me=u,X=Symbol.for("react.transitional.element"),Oe=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),fe=Symbol.for("react.consumer"),de=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),me=Symbol.iterator,Ie=Symbol.for("react.client.reference"),S=Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=Object.prototype.hasOwnProperty,U=Object.assign,Re=Symbol.for("react.client.reference"),Q=Array.isArray,D=0,ve,ge,he,be,xe,we,Ee;x.__reactDisabledLog=!0;var ee,Ne,re=!1,te=new(typeof WeakMap=="function"?WeakMap:Map),$e=Symbol.for("react.client.reference"),Ve,je={},ye={},Ce={};L.Fragment=B,L.jsxDEV=function(e,t,n,m,k,g){return s(e,t,n,m,k,g)}}()),L}var ae;function Te(){return ae||(ae=1,process.env.NODE_ENV==="production"?R.exports=ke():R.exports=Pe()),R.exports}var i=Te();const G=u.createContext(null),ie=()=>{const r=u.useContext(G);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Ae({children:r,disableQueryString:b=!1}){const[E,x]=u.useState(new Map),[v,j]=u.useState(new Map);u.useEffect(()=>{if(b||typeof window>"u")return;const f=new URLSearchParams(window.location.search).get("var");if(f)try{const l=f.split("_").map(o=>{const[s,d]=o.split(".");if(!s||!d)throw new Error("Invalid format");return[s,d]});x(new Map(l))}catch{x(new Map)}},[b]),u.useEffect(()=>{if(b||typeof window>"u")return;const p=new URLSearchParams(window.location.search),f=Array.from(E.entries());if(f.length===0)p.delete("var");else{const s=f.map(([d,c])=>`${d}.${c}`).join("_");p.set("var",s)}const l=p.toString(),o=l?`${window.location.pathname}?${l}`:window.location.pathname;window.history.replaceState({},"",o)},[E,b]),u.useEffect(()=>{if(b||typeof window>"u")return;const p=()=>{const l=new URLSearchParams(window.location.search).get("var");if(l)try{x(new Map(JSON.parse(l)))}catch{x(new Map)}else x(new Map)};return window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[b]);const w=u.useMemo(()=>{const p=E.get("root-variations");if(!p)return null;const f=(o,s)=>{const d={id:o,group:s,children:new Map};return Array.from(v.entries()).forEach(([,c])=>{if(c.parentId===o){const C=E.get(c.group);C&&d.children.set(c.group,f(C,c.group))}}),d};return f(p,"root-variations")},[E,v]),h=u.useCallback((p,f)=>{x(l=>{const o=new Map(l);return o.set(p,f),p==="root-variations"?Array.from(l.keys()).forEach(s=>{s!=="root-variations"&&o.delete(s)}):Array.from(v.entries()).find(([d])=>d===f)&&Array.from(l.keys()).forEach(d=>{const c=Array.from(v.entries()).find(([,C])=>C.group===d);c&&c[1].parentId===f&&o.delete(d)}),o})},[v]),N=u.useCallback((p,f,l,o,s)=>{j(d=>{const c=d.get(f);if((c==null?void 0:c.group)===p&&(c==null?void 0:c.label)===l&&(c==null?void 0:c.groupLabel)===o&&(c==null?void 0:c.parentId)===s)return d;const C=new Map(d);return C.set(f,{group:p,label:l,groupLabel:o,parentId:s}),C})},[]),V=u.useMemo(()=>({activeIds:E,setActiveId:h,registerVariation:N,variations:v,activeTree:w}),[E,h,N,v,w]);return i.jsxDEV(G.Provider,{value:V,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:212,columnNumber:5},this)}function z(r){return r.toLowerCase().replace(/\s+/g,"-")}function W({label:r,children:b,...E}){const{group:x="",id:v,groupLabel:j,parentId:w}=E,h=u.useMemo(()=>v||z(r),[v,r]),{activeIds:N,registerVariation:V}=ie(),p=N.get(x)===h;return u.useEffect(()=>{if(!x){console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);return}V(x,h,r,j||x,w)},[x,h,r,j,w,V]),p?i.jsxDEV(i.Fragment,{children:b},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:47,columnNumber:10},this):null}const _e="root-variations";function Se(r){return u.isValidElement(r)&&r.type===W&&typeof r.props.label=="string"}function se({isRoot:r=!1,label:b,children:E,...x}){const{parentId:v,group:j}=x,w=u.useContext(G);if(!w)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&v)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const h=j||(r?_e:z(b)),{activeIds:N,setActiveId:V,variations:p}=w,f=u.useMemo(()=>{const o=new Map;return Array.from(p.entries()).forEach(([s,d])=>{const{group:c,label:C,groupLabel:K}=d;o.has(c)||o.set(c,[]),o.get(c).push([s,{label:C,groupLabel:K}])}),o},[p]),l=u.useMemo(()=>u.Children.map(E,o=>{if(u.isValidElement(o)){if(o.type===W){if(!Se(o))throw new Error("Invalid Variation component");const s=z(o.props.label);return u.cloneElement(o,{...o.props,group:h,groupLabel:b,id:s,parentId:v})}else if(o.type===se){const s=o,d=N.get(h),c=z(s.props.label);return u.cloneElement(s,{...s.props,parentId:d,group:c})}}return o}),[E,h,b,N,v]);return u.useEffect(()=>{if(!N.has(h)){const o=f.get(h);if(o&&o.length>0){const[s]=o[0];V(h,s)}}},[h,f,N,V]),i.jsxDEV(i.Fragment,{children:l},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:133,columnNumber:10},this)}const le=({group:r,variations:b,activeIds:E,setActiveId:x,isMinimized:v})=>{var h,N,V,p;const j=(N=(h=b[0])==null?void 0:h[1])==null?void 0:N.groupLabel,w=E.get(r);return i.jsxDEV("div",{className:"variation-group",children:[i.jsxDEV("div",{className:"variation-title",title:j,children:j},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:24,columnNumber:7},void 0),i.jsxDEV("div",{className:"variations-selects",children:i.jsxDEV("select",{value:w||"",onChange:f=>{x(r,f.target.value)},className:"variation-select",tabIndex:v?-1:0,title:((p=(V=b.find(([f])=>f===w))==null?void 0:V[1])==null?void 0:p.label)||"",children:b.map(([f,{label:l}])=>i.jsxDEV("option",{value:f,title:l,children:l},f,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:41,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:30,columnNumber:7},void 0),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:51,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:23,columnNumber:5},void 0)};function Ue({position:r="bottom-right",minimizedByDefault:b=!1,className:E,...x}){const[v,j]=u.useState(b),{activeIds:w,setActiveId:h,variations:N}=ie(),V=u.useMemo(()=>{const l=new Map;return Array.from(N.entries()).forEach(([o,s])=>{const{group:d,label:c,groupLabel:C}=s;l.has(d)||l.set(d,[]),l.get(d).push([o,{label:c,groupLabel:C}])}),l},[N]),f=(()=>{const l=[],o=new Set;if(V.has("root-variations")){const s=V.get("root-variations");l.push(i.jsxDEV(le,{group:"root-variations",variations:s,activeIds:w,setActiveId:h,isMinimized:v},"root-variations",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:190,columnNumber:9},this)),o.add("root-variations")}return Array.from(w.entries()).forEach(([s])=>{if(!o.has(s)&&V.has(s)){const d=V.get(s);l.push(i.jsxDEV(le,{group:s,variations:d,activeIds:w,setActiveId:h,isMinimized:v},s,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:207,columnNumber:11},this)),o.add(s)}}),l.length===0?i.jsxDEV("div",{className:"variations-empty",children:[i.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:223,columnNumber:11},this),i.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",i.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:225,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:224,columnNumber:11},this),i.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:227,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:222,columnNumber:9},this):l})();return u.useEffect(()=>{const l=o=>{o.code==="KeyV"&&o.altKey&&!o.ctrlKey&&!o.shiftKey&&!o.metaKey&&(o.preventDefault(),j(s=>!s))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),i.jsxDEV("div",{className:`variations-controls-container ${E||""}`,...x,children:[i.jsxDEV("div",{className:`variations-controls ${v?"minimized":""}`,children:v?i.jsxDEV("button",{className:"variations-circle",onClick:()=>j(!1),tabIndex:v?0:-1,children:i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:319,columnNumber:15},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:320,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:321,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:322,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:308,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:303,columnNumber:9},this):i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{className:"variations-header",children:[i.jsxDEV("div",{className:"variations-header-title",children:[i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:344,columnNumber:19},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:345,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:346,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:329,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:328,columnNumber:15},this),i.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>j(!0),tabIndex:v?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:351,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:327,columnNumber:13},this),i.jsxDEV("div",{className:"variation-groups",children:f},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:360,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:326,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:301,columnNumber:7},this),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:364,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:297,columnNumber:5},this)}P.Variation=W,P.Variations=se,P.VariationsControls=Ue,P.VariationsProvider=Ae,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
