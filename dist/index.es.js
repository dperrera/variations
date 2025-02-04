import O, { createContext as Ve, useContext as ae, useMemo as I, useState as B, useEffect as J, useCallback as Se } from "react";
var q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function $e() {
  if (Ae) return W;
  Ae = 1;
  var t = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function y(v, l, p) {
    var k = null;
    if (p !== void 0 && (k = "" + p), l.key !== void 0 && (k = "" + l.key), "key" in l) {
      p = {};
      for (var u in l)
        u !== "key" && (p[u] = l[u]);
    } else p = l;
    return l = p.ref, {
      $$typeof: t,
      type: v,
      key: k,
      ref: l !== void 0 ? l : null,
      props: p
    };
  }
  return W.Fragment = m, W.jsx = y, W.jsxs = y, W;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ze() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ie ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case H:
          return "Fragment";
        case R:
          return "Portal";
        case ce:
          return "Profiler";
        case le:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case de:
            return (e.displayName || "Context") + ".Provider";
          case ue:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case ee:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function y(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, g = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), m(e);
      }
    }
    function v() {
    }
    function l() {
      if (Y === 0) {
        ge = console.log, he = console.info, ve = console.warn, me = console.error, xe = console.group, we = console.groupCollapsed, be = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: v,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Y++;
    }
    function p() {
      if (Y--, Y === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: P({}, e, { value: ge }),
          info: P({}, e, { value: he }),
          warn: P({}, e, { value: ve }),
          error: P({}, e, { value: me }),
          group: P({}, e, { value: xe }),
          groupCollapsed: P({}, e, { value: we }),
          groupEnd: P({}, e, { value: be })
        });
      }
      0 > Y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function k(e) {
      if (re === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          re = r && r[1] || "", Ee = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + re + e + Ee;
    }
    function u(e, r) {
      if (!e || oe) return "";
      var o = ne.get(e);
      if (o !== void 0) return o;
      oe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var g = null;
      g = L.H, L.H = null, l();
      try {
        var S = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (N) {
                    var X = N;
                  }
                  Reflect.construct(e, [], M);
                } else {
                  try {
                    M.call();
                  } catch (N) {
                    X = N;
                  }
                  e.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  X = N;
                }
                (M = e()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (N) {
              if (N && X && typeof N.stack == "string")
                return [N.stack, X.stack];
            }
            return [null, null];
          }
        };
        S.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var E = Object.getOwnPropertyDescriptor(
          S.DetermineComponentFrameRoot,
          "name"
        );
        E && E.configurable && Object.defineProperty(
          S.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var c = S.DetermineComponentFrameRoot(), V = c[0], z = c[1];
        if (V && z) {
          var T = V.split(`
`), $ = z.split(`
`);
          for (c = E = 0; E < T.length && !T[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          for (; c < $.length && !$[c].includes(
            "DetermineComponentFrameRoot"
          ); )
            c++;
          if (E === T.length || c === $.length)
            for (E = T.length - 1, c = $.length - 1; 1 <= E && 0 <= c && T[E] !== $[c]; )
              c--;
          for (; 1 <= E && 0 <= c; E--, c--)
            if (T[E] !== $[c]) {
              if (E !== 1 || c !== 1)
                do
                  if (E--, c--, 0 > c || T[E] !== $[c]) {
                    var U = `
` + T[E].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, U), U;
                  }
                while (1 <= E && 0 <= c);
              break;
            }
        }
      } finally {
        oe = !1, L.H = g, p(), Error.prepareStackTrace = o;
      }
      return T = (T = e ? e.displayName || e.name : "") ? k(T) : "", typeof e == "function" && ne.set(e, T), T;
    }
    function x(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return u(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return k(e);
      switch (e) {
        case Z:
          return k("Suspense");
        case Q:
          return k("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            return e = u(e.render, !1), e;
          case D:
            return x(e.type);
          case ee:
            r = e._payload, e = e._init;
            try {
              return x(e(r));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function A(e) {
      if (pe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function C(e, r) {
      function o() {
        ke || (ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function _() {
      var e = t(this.type);
      return ye[e] || (ye[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, r, o, g, S, E) {
      return o = E.ref, e = {
        $$typeof: f,
        type: e,
        key: r,
        props: E,
        _owner: S
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function d(e, r, o, g, S, E) {
      if (typeof e == "string" || typeof e == "function" || e === H || e === ce || e === le || e === Z || e === Q || e === Oe || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === de || e.$$typeof === ue || e.$$typeof === K || e.$$typeof === Le || e.getModuleId !== void 0)) {
        var c = r.children;
        if (c !== void 0)
          if (g)
            if (te(c)) {
              for (g = 0; g < c.length; g++)
                a(c[g], e);
              Object.freeze && Object.freeze(c);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else a(c, e);
      } else
        c = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? g = "null" : te(e) ? g = "array" : e !== void 0 && e.$$typeof === f ? (g = "<" + (t(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          g,
          c
        );
      if (pe.call(r, "key")) {
        c = t(e);
        var V = Object.keys(r).filter(function(T) {
          return T !== "key";
        });
        g = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", je[c + g] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          c,
          V,
          c
        ), je[c + g] = !0);
      }
      if (c = null, o !== void 0 && (y(o), c = "" + o), A(r) && (y(r.key), c = "" + r.key), "key" in r) {
        o = {};
        for (var z in r)
          z !== "key" && (o[z] = r[z]);
      } else o = r;
      return c && C(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(e, c, E, S, j(), o);
    }
    function a(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Pe) {
        if (te(e))
          for (var o = 0; o < e.length; o++) {
            var g = e[o];
            i(g) && s(g, r);
          }
        else if (i(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = fe && e[fe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            i(e.value) && s(e.value, r);
      }
    }
    function i(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function s(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = h(r), !Ce[r])) {
        Ce[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== j() && (o = null, typeof e._owner.tag == "number" ? o = t(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var g = L.getCurrentStack;
        L.getCurrentStack = function() {
          var S = x(e.type);
          return g && (S += g() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), L.getCurrentStack = g;
      }
    }
    function h(e) {
      var r = "", o = j();
      return o && (o = t(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = t(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var w = O, f = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), de = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = Symbol.for("react.client.reference"), L = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, P = Object.assign, Le = Symbol.for("react.client.reference"), te = Array.isArray, Y = 0, ge, he, ve, me, xe, we, be;
    v.__reactDisabledLog = !0;
    var re, Ee, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Pe = Symbol.for("react.client.reference"), ke, ye = {}, je = {}, Ce = {};
    G.Fragment = H, G.jsx = function(e, r, o, g, S) {
      return d(e, r, o, !1, g, S);
    }, G.jsxs = function(e, r, o, g, S) {
      return d(e, r, o, !0, g, S);
    };
  }()), G;
}
var Re;
function Ye() {
  return Re || (Re = 1, process.env.NODE_ENV === "production" ? q.exports = $e() : q.exports = ze()), q.exports;
}
var n = Ye();
const ie = Ve(null), Ne = Ve(null);
function se() {
  const t = ae(ie);
  if (!t)
    throw new Error("useVariations must be used within a VariationsProvider");
  return t;
}
function Je() {
  const t = ae(Ne);
  if (!t)
    throw new Error("useVariationsState must be used within a VariationsProvider");
  return t;
}
function Xe(t) {
  const {
    activeIds: m,
    setActiveId: y,
    variations: v
  } = se(), l = m.get(t), p = I(() => Array.from(v.entries()).filter(([, u]) => u.group === t).map(([u, {
    label: x
  }]) => ({
    id: u,
    label: x
  })), [v, t]);
  return {
    /** The currently active variation */
    active: I(() => {
      if (!l) return null;
      const u = v.get(l);
      return u ? {
        id: l,
        label: u.label
      } : null;
    }, [l, v]),
    /** Set the active variation by ID */
    setActive: (u) => y(t, u),
    /** All available variations for this group */
    variations: p
  };
}
function qe({
  children: t,
  disableQueryString: m = !1,
  initialState: y
}) {
  const [v, l] = B(/* @__PURE__ */ new Map()), [p, k] = B(/* @__PURE__ */ new Map()), [u, x] = B(() => y);
  J(() => {
    if (m || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search), a = d.get("var");
    if (a)
      try {
        const s = a.split("_").map((h) => {
          const [w, f] = h.split(".");
          if (!w || !f) throw new Error("Invalid format");
          return [w, f];
        });
        l(new Map(s));
      } catch {
        l(/* @__PURE__ */ new Map());
      }
    const i = d.get("state");
    if (i)
      try {
        const s = JSON.parse(decodeURIComponent(i));
        x(s);
      } catch {
      }
  }, [m]), J(() => {
    if (m || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search), a = Array.from(v.entries());
    if (a.length === 0)
      d.delete("var");
    else {
      const h = a.map(([w, f]) => `${w}.${f}`).join("_");
      d.set("var", h);
    }
    u !== void 0 ? d.set("state", encodeURIComponent(JSON.stringify(u))) : d.delete("state");
    const i = d.toString(), s = i ? `${window.location.pathname}?${i}` : window.location.pathname;
    window.history.replaceState({}, "", s);
  }, [v, u, m]), J(() => {
    if (m || typeof window > "u") return;
    const d = () => {
      const a = new URLSearchParams(window.location.search), i = a.get("var");
      if (i)
        try {
          const h = i.split("_").map((w) => {
            const [f, R] = w.split(".");
            if (!f || !R) throw new Error("Invalid format");
            return [f, R];
          });
          l(new Map(h));
        } catch {
          l(/* @__PURE__ */ new Map());
        }
      else
        l(/* @__PURE__ */ new Map());
      const s = a.get("state");
      if (s)
        try {
          const h = JSON.parse(decodeURIComponent(s));
          x(h);
        } catch {
        }
    };
    return window.addEventListener("popstate", d), () => window.removeEventListener("popstate", d);
  }, [m]);
  const j = I(() => {
    const d = v.get("root");
    if (!d) return null;
    const a = (s, h) => {
      const w = {
        id: s,
        group: h,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(p.entries()).forEach(([, f]) => {
        if (f.parentId === s) {
          const R = v.get(f.group);
          R && w.children.set(f.group, a(R, f.group));
        }
      }), w;
    };
    return a(d, "root");
  }, [v, p]), A = Se((d, a) => {
    l((i) => {
      const s = new Map(i);
      return s.set(d, a), d === "root" ? Array.from(i.keys()).forEach((h) => {
        h !== "root" && s.delete(h);
      }) : Array.from(p.entries()).find(([w]) => w === a) && Array.from(i.keys()).forEach((w) => {
        const f = Array.from(p.entries()).find(([, R]) => R.group === w);
        f && f[1].parentId === a && s.delete(w);
      }), s;
    });
  }, [p]), C = Se((d, a, i, s, h) => {
    k((w) => {
      const f = w.get(a);
      if ((f == null ? void 0 : f.group) === d && (f == null ? void 0 : f.label) === i && (f == null ? void 0 : f.groupLabel) === s && (f == null ? void 0 : f.parentId) === h)
        return w;
      const R = new Map(w);
      return R.set(a, {
        group: d,
        label: i,
        groupLabel: s,
        parentId: h
      }), R;
    });
  }, []), _ = I(() => ({
    activeIds: v,
    setActiveId: A,
    registerVariation: C,
    variations: p,
    activeTree: j
  }), [v, A, C, p, j]), b = I(() => ({
    state: u,
    setState: (d) => {
      x(d);
    }
  }), [u]);
  return /* @__PURE__ */ n.jsx(ie.Provider, { value: _, children: /* @__PURE__ */ n.jsx(Ne.Provider, { value: b, children: t }) });
}
function F(t) {
  return t.toLowerCase().replace(/\s+/g, "-");
}
function Me({
  label: t,
  children: m,
  ...y
}) {
  const {
    group: v = "",
    id: l,
    groupLabel: p,
    parentId: k
  } = y, u = I(() => l || F(t), [l, t]), {
    activeIds: x,
    registerVariation: j
  } = se(), A = x.get(v) === u;
  return J(() => {
    if (!v) {
      console.error(`Variation Component Error: No group provided for variation "${t}"

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
   </Variations>`);
      return;
    }
    j(v, u, t, p || v, k);
  }, [v, u, t, p, k, j]), A ? /* @__PURE__ */ n.jsx(n.Fragment, { children: m }) : null;
}
const Ue = "root";
function We(t) {
  return O.isValidElement(t) && t.type === Me && typeof t.props.label == "string";
}
function Ge({
  isRoot: t = !1,
  label: m,
  children: y,
  ...v
}) {
  const {
    parentId: l,
    group: p
  } = v, k = ae(ie);
  if (!k)
    throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);
  if (t && l)
    throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);
  const u = p || (t ? Ue : F(m)), {
    activeIds: x,
    setActiveId: j,
    variations: A
  } = k, C = I(() => {
    const b = /* @__PURE__ */ new Map();
    return Array.from(A.entries()).forEach(([d, a]) => {
      const {
        group: i,
        label: s,
        groupLabel: h
      } = a;
      b.has(i) || b.set(i, []), b.get(i).push([d, {
        label: s,
        groupLabel: h
      }]);
    }), b;
  }, [A]), _ = I(() => O.Children.map(y, (b) => {
    if (O.isValidElement(b)) {
      if (b.type === Me) {
        if (!We(b))
          throw new Error("Invalid Variation component");
        const d = F(b.props.label);
        return O.cloneElement(b, {
          ...b.props,
          group: u,
          groupLabel: m,
          id: d,
          parentId: l
        });
      } else if (b.type === Ge) {
        const d = b, a = x.get(u), i = F(d.props.label);
        return O.cloneElement(d, {
          ...d.props,
          parentId: a,
          group: i
        });
      }
    }
    return b;
  }), [y, u, m, x, l]);
  return J(() => {
    if (!x.has(u)) {
      const b = C.get(u);
      if (b && b.length > 0) {
        const [d] = b[0];
        j(u, d);
      }
    }
  }, [u, C, x, j]), /* @__PURE__ */ n.jsx(n.Fragment, { children: _ });
}
const _e = ({
  group: t,
  variations: m,
  activeIds: y,
  setActiveId: v,
  isMinimized: l
}) => {
  var u, x, j, A;
  const p = (x = (u = m[0]) == null ? void 0 : u[1]) == null ? void 0 : x.groupLabel, k = y.get(t);
  return /* @__PURE__ */ n.jsxs("div", { className: "variation-group", children: [
    /* @__PURE__ */ n.jsx("div", { className: "variation-title", title: p, children: p }),
    /* @__PURE__ */ n.jsx("div", { className: "variations-selects", children: /* @__PURE__ */ n.jsx("select", { value: k || "", onChange: (C) => {
      v(t, C.target.value);
    }, className: "variation-select", tabIndex: l ? -1 : 0, title: ((A = (j = m.find(([C]) => C === k)) == null ? void 0 : j[1]) == null ? void 0 : A.label) || "", children: m.map(([C, {
      label: _
    }]) => /* @__PURE__ */ n.jsx("option", { value: C, title: _, children: _ }, C)) }) }),
    /* @__PURE__ */ n.jsx("style", { children: `
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
        ` })
  ] });
};
function Fe({
  position: t = "bottom-right",
  minimizedByDefault: m = !1,
  className: y,
  ...v
}) {
  const [l, p] = B(m), [k, u] = B(!1), {
    activeIds: x,
    setActiveId: j,
    variations: A
  } = se(), C = () => {
    const a = new URLSearchParams(window.location.search), i = Array.from(x.entries());
    if (i.length > 0) {
      const w = i.map(([f, R]) => `${f}.${R}`).join("_");
      a.set("var", w);
    } else
      a.delete("var");
    const s = a.toString(), h = window.location.href.split("?")[0] + (s ? `?${s}` : "");
    navigator.clipboard.writeText(h).then(() => {
      u(!0), setTimeout(() => u(!1), 2e3);
    });
  }, _ = O.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    return Array.from(A.entries()).forEach(([i, s]) => {
      const {
        group: h,
        label: w,
        groupLabel: f
      } = s;
      a.has(h) || a.set(h, []), a.get(h).push([i, {
        label: w,
        groupLabel: f
      }]);
    }), a;
  }, [A]), d = (() => {
    const a = [], i = /* @__PURE__ */ new Set();
    if (_.has("root")) {
      const s = _.get("root");
      a.push(/* @__PURE__ */ n.jsx(_e, { group: "root", variations: s, activeIds: x, setActiveId: j, isMinimized: l }, "root")), i.add("root");
    }
    return Array.from(x.entries()).forEach(([s]) => {
      if (!i.has(s) && _.has(s)) {
        const h = _.get(s);
        a.push(/* @__PURE__ */ n.jsx(_e, { group: s, variations: h, activeIds: x, setActiveId: j, isMinimized: l }, s)), i.add(s);
      }
    }), a.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: "variations-empty", children: [
      /* @__PURE__ */ n.jsx("div", { className: "variations-empty-title", children: "No Variations Found" }),
      /* @__PURE__ */ n.jsxs("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ n.jsx("code", { children: "<Variations>" }),
        " component!"
      ] }),
      /* @__PURE__ */ n.jsx("style", { children: `
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
            ` })
    ] }) : a;
  })();
  return O.useEffect(() => {
    const a = (i) => {
      i.code === "KeyV" && i.altKey && !i.ctrlKey && !i.shiftKey && !i.metaKey && (i.preventDefault(), p((s) => !s));
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, []), /* @__PURE__ */ n.jsxs("div", { className: `variations-controls-container ${y || ""}`, ...v, children: [
    /* @__PURE__ */ n.jsx("div", { className: `variations-controls ${l ? "minimized" : ""}`, children: l ? /* @__PURE__ */ n.jsx("button", { className: "variations-circle", onClick: () => p(!1), tabIndex: l ? 0 : -1, children: /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ n.jsx("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ n.jsx("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ n.jsx("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ n.jsx("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" })
    ] }) }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "variations-header", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "variations-header-title", children: [
          /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "square", strokeLinejoin: "round", style: {
            marginRight: "6px",
            position: "relative"
          }, children: [
            /* @__PURE__ */ n.jsx("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ n.jsx("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ n.jsx("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ n.jsx("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" })
          ] }),
          "Variations"
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "variations-header-actions", children: [
          /* @__PURE__ */ n.jsx("button", { className: "variations-header-button", onClick: C, title: "Copy link to clipboard", tabIndex: l ? -1 : 0, children: k ? /* @__PURE__ */ n.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n.jsx("path", { d: "M20 6L9 17L4 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ n.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ n.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ n.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ n.jsx("button", { className: "variations-header-toggle", onClick: () => p(!0), tabIndex: l ? -1 : 0, children: "×" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "variation-groups", children: d })
    ] }) }),
    /* @__PURE__ */ n.jsx("style", { children: `
          .variations-controls {
            font-family: system-ui, -apple-system, sans-serif;
            position: fixed;
            ${t.includes("right") ? "right: 16px;" : t.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"}
            ${t.includes("bottom") ? "bottom: 16px;" : t.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"}
            ${t.includes("middle") && t.includes("right") ? "transform: translateY(-50%);" : ""}
            ${t.includes("middle") && t.includes("left") ? "transform: translateY(-50%);" : ""}
            ${t.includes("center") && t.includes("bottom") ? "transform: translateX(-50%);" : ""}
            ${t.includes("center") && t.includes("top") ? "transform: translateX(-50%);" : ""}
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
            ${t.includes("right") ? "right: 16px;" : t.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"}
            ${t.includes("bottom") ? "bottom: 16px;" : t.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"}
            ${t.includes("middle") && t.includes("right") ? "transform: translateY(-50%);" : ""}
            ${t.includes("middle") && t.includes("left") ? "transform: translateY(-50%);" : ""}
            ${t.includes("center") && t.includes("bottom") ? "transform: translateX(-50%);" : ""}
            ${t.includes("center") && t.includes("top") ? "transform: translateX(-50%);" : ""}
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
        ` })
  ] });
}
export {
  Me as Variation,
  Ge as Variations,
  Fe as VariationsControls,
  qe as VariationsProvider,
  Xe as useVariation,
  se as useVariations,
  Je as useVariationsState
};
