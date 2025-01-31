(function(k,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(k=typeof globalThis<"u"?globalThis:k||self,f(k.variations={},k.React))})(this,function(k,f){"use strict";var R={exports:{}},I={};/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function Ce(){if(te)return I;te=1;var r=Symbol.for("react.fragment");return I.Fragment=r,I.jsxDEV=void 0,I}var z={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function ke(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){function r(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Oe:return"Portal";case ue:return"Profiler";case le:return"StrictMode";case q:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case fe:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:r(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return r(e(t))}catch{}}return null}function m(e){return""+e}function x(e){try{m(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,c=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",c),m(e)}}function g(){}function j(){if(O===0){pe=console.log,ve=console.info,ge=console.warn,be=console.error,he=console.group,xe=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:g,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}O++}function N(){if(O--,O===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},e,{value:pe}),info:S({},e,{value:ve}),warn:S({},e,{value:ge}),error:S({},e,{value:be}),group:S({},e,{value:he}),groupCollapsed:S({},e,{value:xe}),groupEnd:S({},e,{value:Ee})})}0>O&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function p(e){if(Q===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||"",Ne=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Q+e+Ne}function h(e,t){if(!e||ee)return"";var o=re.get(e);if(o!==void 0)return o;ee=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var c=null;c=_.H,_.H=null,j();try{var y={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(T){var L=T}Reflect.construct(e,[],A)}else{try{A.call()}catch(T){L=T}e.call(A.prototype)}}else{try{throw Error()}catch(T){L=T}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(T){if(T&&L&&typeof T.stack=="string")return[T.stack,L.stack]}return[null,null]}};y.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(y.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(y.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=y.DetermineComponentFrameRoot(),P=a[0],M=a[1];if(P&&M){var V=P.split(`
`),U=M.split(`
`);for(a=v=0;v<V.length&&!V[v].includes("DetermineComponentFrameRoot");)v++;for(;a<U.length&&!U[a].includes("DetermineComponentFrameRoot");)a++;if(v===V.length||a===U.length)for(v=V.length-1,a=U.length-1;1<=v&&0<=a&&V[v]!==U[a];)a--;for(;1<=v&&0<=a;v--,a--)if(V[v]!==U[a]){if(v!==1||a!==1)do if(v--,a--,0>a||V[v]!==U[a]){var D=`
`+V[v].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&re.set(e,D),D}while(1<=v&&0<=a);break}}}finally{ee=!1,_.H=c,N(),Error.prepareStackTrace=o}return V=(V=e?e.displayName||e.name:"")?p(V):"",typeof e=="function"&&re.set(e,V),V}function w(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return h(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return p(e);switch(e){case q:return p("Suspense");case J:return p("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case B:return e=h(e.render,!1),e;case F:return w(e.type);case H:t=e._payload,e=e._init;try{return w(e(t))}catch{}}return""}function b(){var e=_.A;return e===null?null:e.getOwner()}function u(e){if(me.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function s(e,t){function o(){we||(we=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function n(){var e=r(this.type);return Ve[e]||(Ve[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function d(e,t,o,c,y,v){return o=v.ref,e={$$typeof:K,type:e,key:t,props:v,_owner:y},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:n}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function E(e,t,o,c,y,v){if(typeof e=="string"||typeof e=="function"||e===X||e===ue||e===le||e===q||e===J||e===De||typeof e=="object"&&e!==null&&(e.$$typeof===H||e.$$typeof===F||e.$$typeof===fe||e.$$typeof===ce||e.$$typeof===B||e.$$typeof===Ie||e.getModuleId!==void 0)){var a=t.children;if(a!==void 0)if(c)if(Z(a)){for(c=0;c<a.length;c++)l(a[c],e);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else l(a,e)}else a="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?c="null":Z(e)?c="array":e!==void 0&&e.$$typeof===K?(c="<"+(r(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,a);if(me.call(t,"key")){a=r(e);var P=Object.keys(t).filter(function(V){return V!=="key"});c=0<P.length?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}",je[a+c]||(P=0<P.length?"{"+P.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,c,a,P,a),je[a+c]=!0)}if(a=null,o!==void 0&&(x(o),a=""+o),u(t)&&(x(t.key),a=""+t.key),"key"in t){o={};for(var M in t)M!=="key"&&(o[M]=t[M])}else o=t;return a&&s(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),d(e,a,v,y,b(),o)}function l(e,t){if(typeof e=="object"&&e&&e.$$typeof!==ze){if(Z(e))for(var o=0;o<e.length;o++){var c=e[o];C(c)&&$(c,t)}else if(C(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=de&&e[de]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)C(e.value)&&$(e.value,t)}}function C(e){return typeof e=="object"&&e!==null&&e.$$typeof===K}function $(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=Ue(t),!ye[t])){ye[t]=!0;var o="";e&&e._owner!=null&&e._owner!==b()&&(o=null,typeof e._owner.tag=="number"?o=r(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var c=_.getCurrentStack;_.getCurrentStack=function(){var y=w(e.type);return c&&(y+=c()||""),y},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),_.getCurrentStack=c}}function Ue(e){var t="",o=b();return o&&(o=r(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=r(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Me=f,K=Symbol.for("react.transitional.element"),Oe=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),de=Symbol.iterator,Re=Symbol.for("react.client.reference"),_=Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=Object.prototype.hasOwnProperty,S=Object.assign,Ie=Symbol.for("react.client.reference"),Z=Array.isArray,O=0,pe,ve,ge,be,he,xe,Ee;g.__reactDisabledLog=!0;var Q,Ne,ee=!1,re=new(typeof WeakMap=="function"?WeakMap:Map),ze=Symbol.for("react.client.reference"),we,Ve={},je={},ye={};z.Fragment=X,z.jsxDEV=function(e,t,o,c,y,v){return E(e,t,o,c,y,v)}}()),z}var ne;function Pe(){return ne||(ne=1,process.env.NODE_ENV==="production"?R.exports=Ce():R.exports=ke()),R.exports}var i=Pe();const W=f.createContext(null),ae=()=>{const r=f.useContext(W);if(!r)throw new Error("useVariations must be used within a VariationsProvider");return r};function Te({children:r}){const[m,x]=f.useState(new Map),[g,j]=f.useState(new Map),N=f.useMemo(()=>{const b=m.get("root-variations");if(!b)return null;const u=(n,d)=>{const E={id:n,group:d,children:new Map};return Array.from(g.entries()).forEach(([,l])=>{if(l.parentId===n){const C=m.get(l.group);C&&E.children.set(l.group,u(C,l.group))}}),E};return u(b,"root-variations")},[m,g]),p=f.useCallback((b,u)=>{x(s=>{const n=new Map(s);return n.set(b,u),b==="root-variations"?Array.from(s.keys()).forEach(d=>{d!=="root-variations"&&n.delete(d)}):Array.from(g.entries()).find(([E])=>E===u)&&Array.from(s.keys()).forEach(E=>{const l=Array.from(g.entries()).find(([,C])=>C.group===E);l&&l[1].parentId===u&&n.delete(E)}),n})},[g]),h=f.useCallback((b,u,s,n,d)=>{j(E=>{const l=E.get(u);if((l==null?void 0:l.group)===b&&(l==null?void 0:l.label)===s&&(l==null?void 0:l.groupLabel)===n&&(l==null?void 0:l.parentId)===d)return E;const C=new Map(E);return C.set(u,{group:b,label:s,groupLabel:n,parentId:d}),C})},[]),w=f.useMemo(()=>({activeIds:m,setActiveId:p,registerVariation:h,variations:g,activeTree:N}),[m,p,h,g,N]);return i.jsxDEV(W.Provider,{value:w,children:r},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",lineNumber:146,columnNumber:5},this)}function Y(r){return r.toLowerCase().replace(/\s+/g,"-")}function G({group:r="",label:m,id:x,groupLabel:g,parentId:j,children:N}){const p=f.useMemo(()=>x||Y(m),[x,m]),{activeIds:h,registerVariation:w}=ae(),b=h.get(r)===p;return f.useEffect(()=>{if(!r){console.error(`Variation Component Error: No group provided for variation "${m}"

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variation component is not wrapped in a Variations component

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Make sure your Variation is wrapped in a Variations component:
   <Variations label="My Variations">
     <Variation label="${m}">
       {children}
     </Variation>
   </Variations>`);return}w(r,p,m,g||r,j)},[r,p,m,g,j,w]),b?i.jsxDEV(i.Fragment,{children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variation.tsx",lineNumber:44,columnNumber:10},this):null}const Ae="root-variations";function _e(r){return f.isValidElement(r)&&r.type===G&&typeof r.props.label=="string"}function ie({isRoot:r=!1,label:m,children:x,parentId:g,group:j}){const N=f.useContext(W);if(!N)throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);if(r&&g)throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);const p=j||(r?Ae:Y(m)),{activeIds:h,setActiveId:w,variations:b}=N,u=f.useMemo(()=>{const n=new Map;return Array.from(b.entries()).forEach(([d,E])=>{const{group:l,label:C,groupLabel:$}=E;n.has(l)||n.set(l,[]),n.get(l).push([d,{label:C,groupLabel:$}])}),n},[b]),s=f.useMemo(()=>f.Children.map(x,n=>{if(f.isValidElement(n)){if(n.type===G){if(!_e(n))throw new Error("Invalid Variation component");const d=n.props.id||Y(n.props.label);return f.cloneElement(n,{...n.props,group:p,groupLabel:m,id:d,parentId:g})}else if(n.type===ie){const d=n,E=h.get(p),l=Y(d.props.label);return f.cloneElement(d,{...d.props,parentId:E,group:l})}}return n}),[x,p,m,h,g]);return f.useEffect(()=>{if(!h.has(p)){const n=u.get(p);if(n&&n.length>0){const[d]=n[0];w(p,d)}}},[p,u,h,w]),i.jsxDEV(i.Fragment,{children:s},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/Variations.tsx",lineNumber:122,columnNumber:10},this)}const se=({group:r,variations:m,activeIds:x,setActiveId:g,isMinimized:j})=>{var h,w,b,u;const N=(w=(h=m[0])==null?void 0:h[1])==null?void 0:w.groupLabel,p=x.get(r);return i.jsxDEV("div",{className:"variation-group",children:[i.jsxDEV("div",{className:"variation-title",title:N,children:N},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:29,columnNumber:7},void 0),i.jsxDEV("div",{className:"variations-selects",children:i.jsxDEV("select",{value:p||"",onChange:s=>{g(r,s.target.value)},className:"variation-select",tabIndex:j?-1:0,title:((u=(b=m.find(([s])=>s===p))==null?void 0:b[1])==null?void 0:u.label)||"",children:m.map(([s,{label:n}])=>i.jsxDEV("option",{value:s,title:n,children:n},s,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:46,columnNumber:11},void 0))},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:36,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:35,columnNumber:7},void 0),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:56,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:28,columnNumber:5},void 0)};function Se({position:r="bottom-right",minimizedByDefault:m=!1}){const[x,g]=f.useState(m),{activeIds:j,setActiveId:N,variations:p}=ae(),h=f.useMemo(()=>{const u=new Map;return Array.from(p.entries()).forEach(([s,n])=>{const{group:d,label:E,groupLabel:l}=n;u.has(d)||u.set(d,[]),u.get(d).push([s,{label:E,groupLabel:l}])}),u},[p]),b=(()=>{const u=[],s=new Set;if(h.has("root-variations")){const n=h.get("root-variations");u.push(i.jsxDEV(se,{group:"root-variations",variations:n,activeIds:j,setActiveId:N,isMinimized:x},"root-variations",!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:189,columnNumber:9},this)),s.add("root-variations")}return Array.from(j.entries()).forEach(([n])=>{if(!s.has(n)&&h.has(n)){const d=h.get(n);u.push(i.jsxDEV(se,{group:n,variations:d,activeIds:j,setActiveId:N,isMinimized:x},n,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:206,columnNumber:11},this)),s.add(n)}}),u.length===0?i.jsxDEV("div",{className:"variations-empty",children:[i.jsxDEV("div",{className:"variations-empty-title",children:"No Variations Found"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:222,columnNumber:11},this),i.jsxDEV("div",{className:"variations-empty-text",children:["Add a ",i.jsxDEV("code",{children:"<Variations>"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:224,columnNumber:19},this)," component!"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:223,columnNumber:11},this),i.jsxDEV("style",{children:`
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
            `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:226,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:221,columnNumber:9},this):u})();return f.useEffect(()=>{const u=s=>{s.code==="KeyV"&&s.altKey&&!s.ctrlKey&&!s.shiftKey&&!s.metaKey&&(s.preventDefault(),g(n=>!n))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[]),i.jsxDEV("div",{className:"variations-controls-container",children:[i.jsxDEV("div",{className:`variations-controls ${x?"minimized":""}`,children:x?i.jsxDEV("button",{className:"variations-circle",onClick:()=>g(!1),tabIndex:x?0:-1,children:i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:315,columnNumber:15},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:316,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:317,columnNumber:15},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:318,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:304,columnNumber:13},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:299,columnNumber:9},this):i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{className:"variations-header",children:[i.jsxDEV("div",{className:"variations-header-title",children:[i.jsxDEV("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"round",style:{marginRight:"6px",position:"relative"},children:[i.jsxDEV("path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:340,columnNumber:19},this),i.jsxDEV("path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:341,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:342,columnNumber:19},this),i.jsxDEV("path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:343,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:325,columnNumber:17},this),"Variations"]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:324,columnNumber:15},this),i.jsxDEV("button",{className:"variations-header-toggle",onClick:()=>g(!0),tabIndex:x?-1:0,children:"×"},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:347,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:323,columnNumber:13},this),i.jsxDEV("div",{className:"variation-groups",children:b},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:356,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:322,columnNumber:9},this)},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:297,columnNumber:7},this),i.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:360,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/dperrera/Projects/variations/src/VariationsControls.tsx",lineNumber:296,columnNumber:5},this)}k.Variation=G,k.Variations=ie,k.VariationsControls=Se,k.VariationsProvider=Te,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
