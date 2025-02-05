import R, { createContext as Ue, useContext as ae, useMemo as D, useState as Y, useEffect as W, useCallback as Ce } from "react";
var B = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Ie() {
  if (ke) return J;
  ke = 1;
  var r = Symbol.for("react.fragment");
  return J.Fragment = r, J.jsxDEV = void 0, J;
}
var K = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Le() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === De ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case q:
          return "Fragment";
        case P:
          return "Portal";
        case ce:
          return "Profiler";
        case le:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
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
          case F:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case ee:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function x(e) {
      return "" + e;
    }
    function y(e) {
      try {
        x(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), x(e);
      }
    }
    function v() {
    }
    function m() {
      if ($ === 0) {
        pe = console.log, ve = console.info, he = console.warn, ge = console.error, be = console.group, xe = console.groupCollapsed, we = console.groupEnd;
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
      $++;
    }
    function w() {
      if ($--, $ === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: O({}, e, { value: pe }),
          info: O({}, e, { value: ve }),
          warn: O({}, e, { value: he }),
          error: O({}, e, { value: ge }),
          group: O({}, e, { value: be }),
          groupCollapsed: O({}, e, { value: xe }),
          groupEnd: O({}, e, { value: we })
        });
      }
      0 > $ && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function E(e) {
      if (te === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          te = t && t[1] || "", Ne = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + Ne;
    }
    function d(e, t) {
      if (!e || oe) return "";
      var o = ne.get(e);
      if (o !== void 0) return o;
      oe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var p = null;
      p = M.H, M.H = null, m();
      try {
        var S = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var _ = function() {
                  throw Error();
                };
                if (Object.defineProperty(_.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(_, []);
                  } catch (T) {
                    var G = T;
                  }
                  Reflect.construct(e, [], _);
                } else {
                  try {
                    _.call();
                  } catch (T) {
                    G = T;
                  }
                  e.call(_.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (T) {
                  G = T;
                }
                (_ = e()) && typeof _.catch == "function" && _.catch(function() {
                });
              }
            } catch (T) {
              if (T && G && typeof T.stack == "string")
                return [T.stack, G.stack];
            }
            return [null, null];
          }
        };
        S.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var g = Object.getOwnPropertyDescriptor(
          S.DetermineComponentFrameRoot,
          "name"
        );
        g && g.configurable && Object.defineProperty(
          S.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var l = S.DetermineComponentFrameRoot(), U = l[0], L = l[1];
        if (U && L) {
          var k = U.split(`
`), I = L.split(`
`);
          for (l = g = 0; g < k.length && !k[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; l < I.length && !I[l].includes(
            "DetermineComponentFrameRoot"
          ); )
            l++;
          if (g === k.length || l === I.length)
            for (g = k.length - 1, l = I.length - 1; 1 <= g && 0 <= l && k[g] !== I[l]; )
              l--;
          for (; 1 <= g && 0 <= l; g--, l--)
            if (k[g] !== I[l]) {
              if (g !== 1 || l !== 1)
                do
                  if (g--, l--, 0 > l || k[g] !== I[l]) {
                    var z = `
` + k[g].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, z), z;
                  }
                while (1 <= g && 0 <= l);
              break;
            }
        }
      } finally {
        oe = !1, M.H = p, w(), Error.prepareStackTrace = o;
      }
      return k = (k = e ? e.displayName || e.name : "") ? E(k) : "", typeof e == "function" && ne.set(e, k), k;
    }
    function h(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return d(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return E(e);
      switch (e) {
        case H:
          return E("Suspense");
        case Z:
          return E("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            return e = d(e.render, !1), e;
          case Q:
            return h(e.type);
          case ee:
            t = e._payload, e = e._init;
            try {
              return h(e(t));
            } catch {
            }
        }
      return "";
    }
    function V() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function C(e) {
      if (me.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function j(e, t) {
      function o() {
        Ee || (Ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function A() {
      var e = r(this.type);
      return Ve[e] || (Ve[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, t, o, p, S, g) {
      return o = g.ref, e = {
        $$typeof: u,
        type: e,
        key: t,
        props: g,
        _owner: S
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: A
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
    function c(e, t, o, p, S, g) {
      if (typeof e == "string" || typeof e == "function" || e === q || e === ce || e === le || e === H || e === Z || e === Re || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === Q || e.$$typeof === de || e.$$typeof === ue || e.$$typeof === F || e.$$typeof === Me || e.getModuleId !== void 0)) {
        var l = t.children;
        if (l !== void 0)
          if (p)
            if (re(l)) {
              for (p = 0; p < l.length; p++)
                a(l[p], e);
              Object.freeze && Object.freeze(l);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else a(l, e);
      } else
        l = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? p = "null" : re(e) ? p = "array" : e !== void 0 && e.$$typeof === u ? (p = "<" + (r(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          p,
          l
        );
      if (me.call(t, "key")) {
        l = r(e);
        var U = Object.keys(t).filter(function(k) {
          return k !== "key";
        });
        p = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", je[l + p] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          l,
          U,
          l
        ), je[l + p] = !0);
      }
      if (l = null, o !== void 0 && (y(o), l = "" + o), C(t) && (y(t.key), l = "" + t.key), "key" in t) {
        o = {};
        for (var L in t)
          L !== "key" && (o[L] = t[L]);
      } else o = t;
      return l && j(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, l, g, S, V(), o);
    }
    function a(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var p = e[o];
            i(p) && s(p, t);
          }
        else if (i(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = fe && e[fe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            i(e.value) && s(e.value, t);
      }
    }
    function i(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function s(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = f(t), !ye[t])) {
        ye[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== V() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var p = M.getCurrentStack;
        M.getCurrentStack = function() {
          var S = h(e.type);
          return p && (S += p() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), M.getCurrentStack = p;
      }
    }
    function f(e) {
      var t = "", o = V();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var b = R, u = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), de = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), fe = Symbol.iterator, De = Symbol.for("react.client.reference"), M = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, O = Object.assign, Me = Symbol.for("react.client.reference"), re = Array.isArray, $ = 0, pe, ve, he, ge, be, xe, we;
    v.__reactDisabledLog = !0;
    var te, Ne, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), Ee, Ve = {}, je = {}, ye = {};
    K.Fragment = q, K.jsxDEV = function(e, t, o, p, S, g) {
      return c(e, t, o, p, S, g);
    };
  }()), K;
}
var Se;
function $e() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? B.exports = Ie() : B.exports = Le()), B.exports;
}
var n = $e();
const ie = Ue(null), Te = Ue(null);
function se() {
  const r = ae(ie);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
}
function Be() {
  const r = ae(Te);
  if (!r)
    throw new Error(
      "useVariationsState must be used within a VariationsProvider"
    );
  return [r.state, r.setState];
}
function Je(r) {
  const { activeIds: x, setActiveId: y, variations: v } = se(), m = x.get(r), w = D(() => Array.from(v.entries()).filter(([, d]) => d.group === r).map(([d, { label: h }]) => ({
    id: d,
    label: h
  })), [v, r]);
  return {
    /** The currently active variation */
    active: D(() => {
      if (!m) return null;
      const d = v.get(m);
      return d ? { id: m, label: d.label } : null;
    }, [m, v]),
    /** Set the active variation by ID */
    setActive: (d) => y(r, d),
    /** All available variations for this group */
    variations: w
  };
}
function Ke({
  children: r,
  disableQueryString: x = !1,
  initialState: y
}) {
  const [v, m] = Y(
    /* @__PURE__ */ new Map()
  ), [w, E] = Y(
    /* @__PURE__ */ new Map()
  ), [d, h] = Y(
    () => y
  );
  W(() => {
    if (x || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search), a = c.get("var");
    if (a)
      try {
        const s = a.split("_").map((f) => {
          const [b, u] = f.split(".");
          if (!b || !u) throw new Error("Invalid format");
          return [b, u];
        });
        m(new Map(s));
      } catch {
        m(/* @__PURE__ */ new Map());
      }
    const i = c.get("s");
    if (i)
      try {
        const s = JSON.parse(atob(i));
        h(s);
      } catch {
      }
  }, [x]), W(() => {
    if (x || typeof window > "u") return;
    const c = new URLSearchParams(), a = Array.from(v.entries());
    if (a.length > 0) {
      const f = a.map(([b, u]) => `${b}.${u}`).join("_");
      c.set("var", f);
    }
    if (d !== void 0) {
      const f = btoa(JSON.stringify(d));
      c.set("s", f);
    }
    const i = c.toString(), s = i ? `${window.location.pathname}?${i}` : window.location.pathname;
    window.history.replaceState({}, "", s);
  }, [v, d, x]), W(() => {
    if (x || typeof window > "u") return;
    const c = () => {
      const a = new URLSearchParams(window.location.search), i = a.get("var");
      if (i)
        try {
          const f = i.split("_").map((b) => {
            const [u, P] = b.split(".");
            if (!u || !P) throw new Error("Invalid format");
            return [u, P];
          });
          m(new Map(f));
        } catch {
          m(/* @__PURE__ */ new Map());
        }
      else
        m(/* @__PURE__ */ new Map());
      const s = a.get("s");
      if (s)
        try {
          const f = JSON.parse(atob(s));
          h(f);
        } catch {
        }
    };
    return window.addEventListener("popstate", c), () => window.removeEventListener("popstate", c);
  }, [x]);
  const V = D(() => {
    const c = v.get("root");
    if (!c) return null;
    const a = (s, f) => {
      const b = {
        id: s,
        group: f,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(w.entries()).forEach(([, u]) => {
        if (u.parentId === s) {
          const P = v.get(u.group);
          P && b.children.set(
            u.group,
            a(P, u.group)
          );
        }
      }), b;
    };
    return a(c, "root");
  }, [v, w]), C = Ce(
    (c, a) => {
      m((i) => {
        const s = new Map(i);
        return s.set(c, a), c === "root" ? Array.from(i.keys()).forEach((f) => {
          f !== "root" && s.delete(f);
        }) : Array.from(w.entries()).find(
          ([b]) => b === a
        ) && Array.from(i.keys()).forEach((b) => {
          const u = Array.from(w.entries()).find(
            ([, P]) => P.group === b
          );
          u && u[1].parentId === a && s.delete(b);
        }), s;
      });
    },
    [w]
  ), j = Ce(
    (c, a, i, s, f) => {
      E((b) => {
        const u = b.get(a);
        if ((u == null ? void 0 : u.group) === c && (u == null ? void 0 : u.label) === i && (u == null ? void 0 : u.groupLabel) === s && (u == null ? void 0 : u.parentId) === f)
          return b;
        const P = new Map(b);
        return P.set(a, { group: c, label: i, groupLabel: s, parentId: f }), P;
      });
    },
    []
  ), A = D(
    () => ({
      activeIds: v,
      setActiveId: C,
      registerVariation: j,
      variations: w,
      activeTree: V
    }),
    [
      v,
      C,
      j,
      w,
      V
    ]
  ), N = D(
    () => ({
      state: d,
      setState: (c) => {
        h(c);
      }
    }),
    [d]
  );
  return /* @__PURE__ */ n.jsxDEV(ie.Provider, { value: A, children: /* @__PURE__ */ n.jsxDEV(Te.Provider, { value: N, children: r }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 330,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 329,
    columnNumber: 5
  }, this);
}
function X(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function _e({
  label: r,
  children: x,
  ...y
}) {
  const { group: v = "", id: m, groupLabel: w, parentId: E } = y, d = D(() => m || X(r), [m, r]), { activeIds: h, registerVariation: V } = se(), C = h.get(v) === d;
  return W(() => {
    if (!v) {
      console.error(
        `Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`
      );
      return;
    }
    V(v, d, r, w || v, E);
  }, [v, d, r, w, E, V]), C ? /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: x }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this) : null;
}
const ze = "root";
function Ye(r) {
  return R.isValidElement(r) && r.type === _e && typeof r.props.label == "string";
}
function We({
  isRoot: r = !1,
  label: x,
  children: y,
  ...v
}) {
  const { parentId: m, group: w } = v, E = ae(ie);
  if (!E)
    throw new Error(
      `Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`
    );
  if (r && m)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const d = w || (r ? ze : X(x)), { activeIds: h, setActiveId: V, variations: C } = E, j = D(() => {
    const N = /* @__PURE__ */ new Map();
    return Array.from(C.entries()).forEach(([c, a]) => {
      const { group: i, label: s, groupLabel: f } = a;
      N.has(i) || N.set(i, []), N.get(i).push([c, { label: s, groupLabel: f }]);
    }), N;
  }, [C]), A = D(() => R.Children.map(y, (N) => {
    if (R.isValidElement(N)) {
      if (N.type === _e) {
        if (!Ye(N))
          throw new Error("Invalid Variation component");
        const c = X(N.props.label);
        return R.cloneElement(N, {
          ...N.props,
          group: d,
          groupLabel: x,
          id: c,
          parentId: m
        });
      } else if (N.type === We) {
        const c = N, a = h.get(d), i = X(c.props.label);
        return R.cloneElement(c, {
          ...c.props,
          parentId: a,
          group: i
        });
      }
    }
    return N;
  }), [y, d, x, h, m]);
  return W(() => {
    if (!h.has(d)) {
      const N = j.get(d);
      if (N && N.length > 0) {
        const [c] = N[0];
        V(d, c);
      }
    }
  }, [d, j, h, V]), /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: A }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
const Ae = ({
  group: r,
  variations: x,
  activeIds: y,
  setActiveId: v,
  isMinimized: m
}) => {
  var d, h, V, C;
  const w = (h = (d = x[0]) == null ? void 0 : d[1]) == null ? void 0 : h.groupLabel, E = y.get(r);
  return /* @__PURE__ */ n.jsxDEV("div", { className: "variation-group", children: [
    /* @__PURE__ */ n.jsxDEV(
      "div",
      {
        className: "variation-title",
        title: w,
        children: w
      },
      void 0,
      !1,
      {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ n.jsxDEV("div", { className: "variations-selects", children: /* @__PURE__ */ n.jsxDEV(
      "select",
      {
        value: E || "",
        onChange: (j) => {
          v(r, j.target.value);
        },
        className: "variation-select",
        tabIndex: m ? -1 : 0,
        title: ((C = (V = x.find(([j]) => j === E)) == null ? void 0 : V[1]) == null ? void 0 : C.label) || "",
        children: x.map(
          ([j, { label: A }]) => /* @__PURE__ */ n.jsxDEV(
            "option",
            {
              value: j,
              title: A,
              children: A
            },
            j,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 41,
              columnNumber: 11
            },
            void 0
          )
        )
      },
      void 0,
      !1,
      {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ n.jsxDEV("style", { children: `
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
        ` }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, void 0);
};
function Xe({
  position: r = "bottom-right",
  minimizedByDefault: x = !1,
  className: y,
  ...v
}) {
  const [m, w] = Y(x), [E, d] = Y(!1), { activeIds: h, setActiveId: V, variations: C } = se(), j = () => {
    const a = new URLSearchParams(window.location.search), i = Array.from(h.entries());
    if (i.length > 0) {
      const b = i.map(([u, P]) => `${u}.${P}`).join("_");
      a.set("var", b);
    } else
      a.delete("var");
    const s = a.toString(), f = window.location.href.split("?")[0] + (s ? `?${s}` : "");
    navigator.clipboard.writeText(f).then(() => {
      d(!0), setTimeout(() => d(!1), 2e3);
    });
  }, A = R.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    return Array.from(C.entries()).forEach(([i, s]) => {
      const { group: f, label: b, groupLabel: u } = s;
      a.has(f) || a.set(f, []), a.get(f).push([i, { label: b, groupLabel: u }]);
    }), a;
  }, [C]), c = (() => {
    const a = [], i = /* @__PURE__ */ new Set();
    if (A.has("root")) {
      const s = A.get("root");
      a.push(
        /* @__PURE__ */ n.jsxDEV(
          Ae,
          {
            group: "root",
            variations: s,
            activeIds: h,
            setActiveId: V,
            isMinimized: m
          },
          "root",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 213,
            columnNumber: 9
          },
          this
        )
      ), i.add("root");
    }
    return Array.from(h.entries()).forEach(([s]) => {
      if (!i.has(s) && A.has(s)) {
        const f = A.get(s);
        a.push(
          /* @__PURE__ */ n.jsxDEV(
            Ae,
            {
              group: s,
              variations: f,
              activeIds: h,
              setActiveId: V,
              isMinimized: m
            },
            s,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 230,
              columnNumber: 11
            },
            this
          )
        ), i.add(s);
      }
    }), a.length === 0 ? /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty", children: [
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 246,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ n.jsxDEV("code", { children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 248,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ n.jsxDEV("style", { children: `
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
            ` }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 245,
      columnNumber: 9
    }, this) : a;
  })();
  return R.useEffect(() => {
    const a = (i) => {
      i.code === "KeyV" && i.altKey && !i.ctrlKey && !i.shiftKey && !i.metaKey && (i.preventDefault(), w((s) => !s));
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, []), /* @__PURE__ */ n.jsxDEV(
    "div",
    {
      className: `variations-controls-container ${y || ""}`,
      ...v,
      children: [
        /* @__PURE__ */ n.jsxDEV("div", { className: `variations-controls ${m ? "minimized" : ""}`, children: m ? /* @__PURE__ */ n.jsxDEV(
          "button",
          {
            className: "variations-circle",
            onClick: () => w(!1),
            tabIndex: m ? 0 : -1,
            children: /* @__PURE__ */ n.jsxDEV(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 342,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 343,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 344,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 345,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 331,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 326,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: [
          /* @__PURE__ */ n.jsxDEV("div", { className: "variations-header", children: [
            /* @__PURE__ */ n.jsxDEV("div", { className: "variations-header-title", children: [
              /* @__PURE__ */ n.jsxDEV(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "1",
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  style: {
                    marginRight: "6px",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 367,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 368,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 369,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 370,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 352,
                  columnNumber: 17
                },
                this
              ),
              "Variations"
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 351,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ n.jsxDEV("div", { className: "variations-header-actions", children: [
              /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-button",
                  onClick: j,
                  title: "Copy link to clipboard",
                  tabIndex: m ? -1 : 0,
                  children: E ? /* @__PURE__ */ n.jsxDEV(
                    "svg",
                    {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ n.jsxDEV(
                        "path",
                        {
                          d: "M20 6L9 17L4 12",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                          lineNumber: 389,
                          columnNumber: 23
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 382,
                      columnNumber: 17
                    },
                    this
                  ) : /* @__PURE__ */ n.jsxDEV(
                    "svg",
                    {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ n.jsxDEV(
                          "path",
                          {
                            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                            lineNumber: 405,
                            columnNumber: 23
                          },
                          this
                        ),
                        /* @__PURE__ */ n.jsxDEV(
                          "path",
                          {
                            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                            lineNumber: 412,
                            columnNumber: 23
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 398,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 375,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-toggle",
                  onClick: () => w(!0),
                  tabIndex: m ? -1 : 0,
                  children: "×"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 422,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 374,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 350,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ n.jsxDEV("div", { className: "variation-groups", children: c }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 432,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 349,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 324,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ n.jsxDEV("style", { children: `
          .variations-controls {
            font-family: system-ui, -apple-system, sans-serif;
            position: fixed;
            ${r.includes("right") ? "right: 16px;" : r.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"}
            ${r.includes("bottom") ? "bottom: 16px;" : r.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"}
            ${r.includes("middle") && r.includes("right") ? "transform: translateY(-50%);" : ""}
            ${r.includes("middle") && r.includes("left") ? "transform: translateY(-50%);" : ""}
            ${r.includes("center") && r.includes("bottom") ? "transform: translateX(-50%);" : ""}
            ${r.includes("center") && r.includes("top") ? "transform: translateX(-50%);" : ""}
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
            ${r.includes("right") ? "right: 16px;" : r.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"}
            ${r.includes("bottom") ? "bottom: 16px;" : r.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"}
            ${r.includes("middle") && r.includes("right") ? "transform: translateY(-50%);" : ""}
            ${r.includes("middle") && r.includes("left") ? "transform: translateY(-50%);" : ""}
            ${r.includes("center") && r.includes("bottom") ? "transform: translateX(-50%);" : ""}
            ${r.includes("center") && r.includes("top") ? "transform: translateX(-50%);" : ""}
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
        ` }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 436,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 320,
      columnNumber: 5
    },
    this
  );
}
export {
  _e as Variation,
  We as Variations,
  Xe as VariationsControls,
  Ke as VariationsProvider,
  Je as useVariation,
  se as useVariations,
  Be as useVariationsState
};
