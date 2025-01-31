"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("react");var I={exports:{}},z={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function Re(){if(xe)return z;xe=1;var r=Symbol.for("react.fragment");return z.Fragment=r,z.jsxDEV=void 0,z}var Y={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Se(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ke:return"Portal";case te:return"Profiler";case re:return"StrictMode";case K:return"Suspense";case X:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ne:return(e.displayName||"Context")+".Provider";case oe:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function d(e){return""+e}function x(e){try{d(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),d(e)}}function v(){}function j(){if(U===0){se=console.log,le=console.info,ce=console.warn,ue=console.error,fe=console.group,de=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:v,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}function N(){if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:_({},e,{value:se}),info:_({},e,{value:le}),warn:_({},e,{value:ce}),error:_({},e,{value:ue}),group:_({},e,{value:fe}),groupCollapsed:_({},e,{value:de}),groupEnd:_({},e,{value:me})})}0>U&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function m(e){if(F===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||"",pe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+pe}function h(e,t){if(!e||H)return"";var o=Z.get(e);if(o!==void 0)return o;H=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var u=null;u=A.H,A.H=null,j();try{var y={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(P){var D=P}Reflect.construct(e,[],T)}else{try{T.call()}catch(P){D=P}e.call(T.prototype)}}else{try{throw Error()}catch(P){D=P}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(P){if(P&&D&&typeof P.stack=="string")return[P.stack,D.stack]}return[null,null]}};y.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(y.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(y.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=y.DetermineComponentFrameRoot(),k=a[0],S=a[1];if(k&&S){var V=k.split(`
`),R=S.split(`
`);for(a=p=0;p<V.length&&!V[p].includes("DetermineComponentFrameRoot");)p++;for(;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;if(p===V.length||a===R.length)for(p=V.length-1,a=R.length-1;1<=p&&0<=a&&V[p]!==R[a];)a--;for(;1<=p&&0<=a;p--,a--)if(V[p]!==R[a]){if(p!==1||a!==1)do if(p--,a--,0>a||V[p]!==R[a]){var M=`
`+V[p].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),typeof e=="function"&&Z.set(e,M),M}while(1<=p&&0<=a);break}}}finally{H=!1,A.H=u,N(),Error.prepareStackTrace=o}return V=(V=e?e.displayName||e.name:"")?m(V):"",typeof e=="function"&&Z.set(e,V),V}function w(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return h(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return m(e);switch(e){case K:return m("Suspense");case X:return m("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case G:return e=h(e.render,!1),e;case B:return w(e.type);case q:t=e._payload,e=e._init;try{return w(e(t))}catch{}}return""}function b(){var e=A.A;return e===null?null:e.getOwner()}function c(e){if(ie.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function s(e,t){function o(){ve||(ve=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function n(){var e=r(this.type);return ge[e]||(ge[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function f(e,t,o,u,y,p){return o=p.ref,e={$$typeof:L,type:e,key:t,props:p,_owner:y},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:n}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function E(e,t,o,u,y,p){if(typeof e=="string"||typeof e=="function"||e===W||e===te||e===re||e===K||e===X||e===Pe||typeof e=="object"&&e!==null&&(e.$$typeof===q||e.$$typeof===B||e.$$typeof===ne||e.$$typeof===oe||e.$$typeof===G||e.$$typeof===Ae||e.getModuleId!==void 0)){var a=t.children;if(a!==void 0)if(u)if(J(a)){for(u=0;u<a.length;u++)l(a[u],e);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else l(a,e)}else a="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?u="null":J(e)?u="array":e!==void 0&&e.$$typeof===L?(u="<"+(r(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a);if(ie.call(t,"key")){a=r(e);var k=Object.keys(t).filter(function(V){return V!=="key"});u=0<k.length?"{key: someKey, "+k.join(": ..., ")+": ...}":"{key: someKey}",be[a+u]||(k=0<k.length?"{"+k.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,u,a,k,a),be[a+u]=!0)}if(a=null,o!==void 0&&(x(o),a=""+o),c(t)&&(x(t.key),a=""+t.key),"key"in t){o={};for(var S in t)S!=="key"&&(o[S]=t[S])}else o=t;return a&&s(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),f(e,a,p,y,b(),o)}function l(e,t){if(typeof e=="object"&&e&&e.$$typeof!==_e){if(J(e))for(var o=0;o<e.length;o++){var u=e[o];C(u)&&O(u,t)}else if(C(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ae&&e[ae]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)C(e.value)&&O(e.value,t)}}function C(e){return typeof e=="object"&&e!==null&&e.$$typeof===L}function O(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=ye(t),!he[t])){he[t]=!0;var o="";e&&e._owner!=null&&e._owner!==b()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var u=A.getCurrentStack;A.getCurrentStack=function(){var y=w(e.type);return u&&(y+=u()||""),y},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),A.getCurrentStack=u}}function ye(e){var t="",o=b();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Ce=g,L=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),ae=Symbol.iterator,Te=Symbol.for("react.client.reference"),A=Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=Object.prototype.hasOwnProperty,_=Object.assign,Ae=Symbol.for("react.client.reference"),J=Array.isArray,U=0,se,le,ce,ue,fe,de,me;v.__reactDisabledLog=!0;var F,pe,H=!1,Z=new(typeof WeakMap=="function"?WeakMap:Map),_e=Symbol.for("react.client.reference"),ve,ge={},be={},he={};Y.Fragment=W,Y.jsxDEV=function(e,t,o,u,y,p){return E(e,t,o,u,y,p)}}()),Y}var Ne;function Ue(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?I.exports=Re():I.exports=Se()),I.exports}var i=Ue();const Q=g.createContext(null),Ve=()=>{const r=g.useContext(Q);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Me({children:r}){const[d,x]=g.useState(new Map),[v,j]=g.useState(new Map),N=g.useMemo(()=>{const b=d.get("root-variations");if(!b)return null;const c=(n,f)=>{const E={id:n,group:f,children:new Map};return Array.from(v.entries()).forEach(([,l])=>{if(l.parentId===n){const C=d.get(l.group);C&&E.children.set(l.group,c(C,l.group))}}),E};return c(b,"root-variations")},[d,v]),m=g.useCallback((b,c)=>{x(s=>{const n=new Map(s);return n.set(b,c),b==="root-variations"?Array.from(s.keys()).forEach(f=>{f!=="root-variations"&&n.delete(f)}):Array.from(v.entries()).find(([E])=>E===c)&&Array.from(s.keys()).forEach(E=>{const l=Array.from(v.entries()).find(([,C])=>C.group===E);l&&l[1].parentId===c&&n.delete(E)}),n})},[v]),h=g.useCallback((b,c,s,n,f)=>{j(E=>{const l=E.get(c);if((l==null?void 0:l.group)===b&&(l==null?void 0:l.label)===s&&(l==null?void 0:l.groupLabel)===n&&(l==null?void 0:l.parentId)===f)return E;const C=new Map(E);return C.set(c,{group:b,label:s,groupLabel:n,parentId:f}),C})},[]),w=g.useMemo(()=>({activeIds:d,setActiveId:m,registerVariation:h,variations:v,activeTree:N}),[d,m,h,v,N]);return i.jsxDEV(Q.Provider,{value:w,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:146,columnNumber:5},this)}function $(r){return r.toLowerCase().replace(/\s+/g,"-")}function ee({group:r="",label:d,id:x,groupLabel:v,parentId:j,children:N}){const m=g.useMemo(()=>x||$(d),[x,d]),{activeIds:h,registerVariation:w}=Ve(),b=h.get(r)===m;return g.useEffect(()=>{if(!r){console.error(`Variation Component Error: No group provided for variation "${d}"

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variation component is not wrapped in a Variations component

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Make sure your Variation is wrapped in a Variations component:
   <Variations label="My Variations">
     <Variation label="${d}">
       {children}
     </Variation>
   </Variations>`);return}w(r,m,d,v||r,j)},[r,m,d,v,j,w]),b?i.jsxDEV(i.Fragment,{children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:44,columnNumber:10},this):null}const Oe="root-variations";function De(r){return g.isValidElement(r)&&r.type===ee&&typeof r.props.label=="string"}function je({isRoot:r=!1,label:d,children:x,parentId:v,group:j}){const N=g.useContext(Q);if(!N)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&v)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const m=j||(r?Oe:$(d)),{activeIds:h,setActiveId:w,variations:b}=N,c=g.useMemo(()=>{const n=new Map;return Array.from(b.entries()).forEach(([f,E])=>{const{group:l,label:C,groupLabel:O}=E;n.has(l)||n.set(l,[]),n.get(l).push([f,{label:C,groupLabel:O}])}),n},[b]),s=g.useMemo(()=>g.Children.map(x,n=>{if(g.isValidElement(n)){if(n.type===ee){if(!De(n))throw new Error("Invalid Variation component");const f=n.props.id||$(n.props.label);return g.cloneElement(n,{...n.props,group:m,groupLabel:d,id:f,parentId:v})}else if(n.type===je){const f=n,E=h.get(m),l=$(f.props.label);return g.cloneElement(f,{...f.props,parentId:E,group:l})}}return n}),[x,m,d,h,v]);return g.useEffect(()=>{if(!h.has(m)){const n=c.get(m);if(n&&n.length>0){const[f]=n[0];w(m,f)}}},[m,c,h,w]),i.jsxDEV(i.Fragment,{children:s},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:122,columnNumber:10},this)}const we=({group:r,variations:d,activeIds:x,setActiveId:v,isMinimized:j})=>{var h,w,b,c;const N=(w=(h=d[0])==null?void 0:h[1])==null?void 0:w.groupLabel,m=x.get(r);return i.jsxDEV("div",{className:"variation-group",children:[i.jsxDEV("div",{className:"variation-title",title:N,children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:29,columnNumber:7},void 0),i.jsxDEV("div",{className:"variations-selects",children:i.jsxDEV("select",{value:m||"",onChange:s=>{v(r,s.target.value)},className:"variation-select",tabIndex:j?-1:0,title:((c=(b=d.find(([s])=>s===m))==null?void 0:b[1])==null?void 0:c.label)||"",children:d.map(([s,{label:n}])=>i.jsxDEV("option",{value:s,title:n,children:n},s,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:46,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:36,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:35,columnNumber:7},void 0),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:56,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:28,columnNumber:5},void 0)};function Ie({position:r="bottom-right",minimizedByDefault:d=!1}){const[x,v]=g.useState(d),{activeIds:j,setActiveId:N,variations:m}=Ve(),h=g.useMemo(()=>{const c=new Map;return Array.from(m.entries()).forEach(([s,n])=>{const{group:f,label:E,groupLabel:l}=n;c.has(f)||c.set(f,[]),c.get(f).push([s,{label:E,groupLabel:l}])}),c},[m]),b=(()=>{const c=[],s=new Set;if(h.has("root-variations")){const n=h.get("root-variations");c.push(i.jsxDEV(we,{group:"root-variations",variations:n,activeIds:j,setActiveId:N,isMinimized:x},"root-variations",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:189,columnNumber:9},this)),s.add("root-variations")}return Array.from(j.entries()).forEach(([n])=>{if(!s.has(n)&&h.has(n)){const f=h.get(n);c.push(i.jsxDEV(we,{group:n,variations:f,activeIds:j,setActiveId:N,isMinimized:x},n,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:206,columnNumber:11},this)),s.add(n)}}),c.length===0?i.jsxDEV("div",{className:"variations-empty",children:[i.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:222,columnNumber:11},this),i.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",i.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:224,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:223,columnNumber:11},this),i.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:226,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:221,columnNumber:9},this):c})();return g.useEffect(()=>{const c=s=>{s.code==="KeyV"&&s.altKey&&!s.ctrlKey&&!s.shiftKey&&!s.metaKey&&(s.preventDefault(),v(n=>!n))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),i.jsxDEV("div",{className:"variations-controls-container",children:[i.jsxDEV("div",{className:`variations-controls ${x?"minimized":""}`,children:x?i.jsxDEV("button",{className:"variations-circle",onClick:()=>v(!1),tabIndex:x?0:-1,children:i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:315,columnNumber:15},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:316,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:317,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:318,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:304,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:299,columnNumber:9},this):i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{className:"variations-header",children:[i.jsxDEV("div",{className:"variations-header-title",children:[i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:340,columnNumber:19},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:341,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:342,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:343,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:325,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:15},this),i.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>v(!0),tabIndex:x?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:323,columnNumber:13},this),i.jsxDEV("div",{className:"variation-groups",children:b},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:356,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:322,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:297,columnNumber:7},this),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:360,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:296,columnNumber:5},this)}exports.Variation=ee;exports.Variations=je;exports.VariationsControls=Ie;exports.VariationsProvider=Me;
