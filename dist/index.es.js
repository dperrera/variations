import D, { createContext as Ae, useContext as le, useMemo as M, useState as W, useEffect as B, useCallback as ye } from "react";
var q = { exports: {} }, F = {};
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
  if (ke) return F;
  ke = 1;
  var r = Symbol.for("react.fragment");
  return F.Fragment = r, F.jsxDEV = void 0, F;
}
var H = {};
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
        case A:
          return "Fragment";
        case m:
          return "Portal";
        case z:
          return "Profiler";
        case $:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case de:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case oe:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function w(e) {
      return "" + e;
    }
    function k(e) {
      try {
        w(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), w(e);
      }
    }
    function p() {
    }
    function d() {
      if (G === 0) {
        pe = console.log, ve = console.info, he = console.warn, be = console.error, ge = console.group, xe = console.groupCollapsed, Ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: p,
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
      G++;
    }
    function E() {
      if (G--, G === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: I({}, e, { value: pe }),
          info: I({}, e, { value: ve }),
          warn: I({}, e, { value: he }),
          error: I({}, e, { value: be }),
          group: I({}, e, { value: ge }),
          groupCollapsed: I({}, e, { value: xe }),
          groupEnd: I({}, e, { value: Ne })
        });
      }
      0 > G && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function V(e) {
      if (ae === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          ae = t && t[1] || "", we = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ae + e + we;
    }
    function c(e, t) {
      if (!e || se) return "";
      var o = ie.get(e);
      if (o !== void 0) return o;
      se = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var f = null;
      f = O.H, O.H = null, d();
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
                  } catch (R) {
                    var X = R;
                  }
                  Reflect.construct(e, [], _);
                } else {
                  try {
                    _.call();
                  } catch (R) {
                    X = R;
                  }
                  e.call(_.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (R) {
                  X = R;
                }
                (_ = e()) && typeof _.catch == "function" && _.catch(function() {
                });
              }
            } catch (R) {
              if (R && X && typeof R.stack == "string")
                return [R.stack, X.stack];
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
        var s = S.DetermineComponentFrameRoot(), T = s[0], Y = s[1];
        if (T && Y) {
          var P = T.split(`
`), L = Y.split(`
`);
          for (s = g = 0; g < P.length && !P[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; s < L.length && !L[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (g === P.length || s === L.length)
            for (g = P.length - 1, s = L.length - 1; 1 <= g && 0 <= s && P[g] !== L[s]; )
              s--;
          for (; 1 <= g && 0 <= s; g--, s--)
            if (P[g] !== L[s]) {
              if (g !== 1 || s !== 1)
                do
                  if (g--, s--, 0 > s || P[g] !== L[s]) {
                    var J = `
` + P[g].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, J), J;
                  }
                while (1 <= g && 0 <= s);
              break;
            }
        }
      } finally {
        se = !1, O.H = f, E(), Error.prepareStackTrace = o;
      }
      return P = (P = e ? e.displayName || e.name : "") ? V(P) : "", typeof e == "function" && ie.set(e, P), P;
    }
    function x(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return c(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return V(e);
      switch (e) {
        case ee:
          return V("Suspense");
        case re:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return e = c(e.render, !1), e;
          case te:
            return x(e.type);
          case oe:
            t = e._payload, e = e._init;
            try {
              return x(e(t));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function C(e) {
      if (me.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, t) {
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
    function U() {
      var e = r(this.type);
      return Ve[e] || (Ve[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, t, o, f, S, g) {
      return o = g.ref, e = {
        $$typeof: a,
        type: e,
        key: t,
        props: g,
        _owner: S
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: U
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
    function l(e, t, o, f, S, g) {
      if (typeof e == "string" || typeof e == "function" || e === A || e === z || e === $ || e === ee || e === re || e === _e || typeof e == "object" && e !== null && (e.$$typeof === oe || e.$$typeof === te || e.$$typeof === de || e.$$typeof === K || e.$$typeof === Q || e.$$typeof === Me || e.getModuleId !== void 0)) {
        var s = t.children;
        if (s !== void 0)
          if (f)
            if (ne(s)) {
              for (f = 0; f < s.length; f++)
                v(s[f], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else v(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? f = "null" : ne(e) ? f = "array" : e !== void 0 && e.$$typeof === a ? (f = "<" + (r(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          f,
          s
        );
      if (me.call(t, "key")) {
        s = r(e);
        var T = Object.keys(t).filter(function(P) {
          return P !== "key";
        });
        f = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", je[s + f] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          s,
          T,
          s
        ), je[s + f] = !0);
      }
      if (s = null, o !== void 0 && (k(o), s = "" + o), C(t) && (k(t.key), s = "" + t.key), "key" in t) {
        o = {};
        for (var Y in t)
          Y !== "key" && (o[Y] = t[Y]);
      } else o = t;
      return s && y(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, s, g, S, j(), o);
    }
    function v(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (ne(e))
          for (var o = 0; o < e.length; o++) {
            var f = e[o];
            u(f) && h(f, t);
          }
        else if (u(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = fe && e[fe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            u(e.value) && h(e.value, t);
      }
    }
    function u(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function h(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = b(t), !Ce[t])) {
        Ce[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== j() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var f = O.getCurrentStack;
        O.getCurrentStack = function() {
          var S = x(e.type);
          return f && (S += f() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), O.getCurrentStack = f;
      }
    }
    function b(e) {
      var t = "", o = j();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var i = D, a = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), de = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), fe = Symbol.iterator, De = Symbol.for("react.client.reference"), O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, I = Object.assign, Me = Symbol.for("react.client.reference"), ne = Array.isArray, G = 0, pe, ve, he, be, ge, xe, Ne;
    p.__reactDisabledLog = !0;
    var ae, we, se = !1, ie = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), Ee, Ve = {}, je = {}, Ce = {};
    H.Fragment = A, H.jsxDEV = function(e, t, o, f, S, g) {
      return l(e, t, o, f, S, g);
    };
  }()), H;
}
var Se;
function $e() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? q.exports = Ie() : q.exports = Le()), q.exports;
}
var n = $e();
const ce = Ae(null), Te = Ae(null);
function ue() {
  const r = le(ce);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
}
function ze() {
  const r = le(Te);
  if (!r)
    throw new Error(
      "useVariationsState must be used within a VariationsProvider"
    );
  return [r.state, r.setState];
}
function Be(r) {
  const { activeIds: w, setActiveId: k, variations: p } = ue(), d = w.get(r), E = M(() => Array.from(p.entries()).filter(([, c]) => c.group === r).map(([c, { label: x }]) => ({
    id: c,
    label: x
  })), [p, r]);
  return {
    /** The currently active variation */
    active: M(() => {
      if (!d) return null;
      const c = p.get(d);
      return c ? { id: d, label: c.label } : null;
    }, [d, p]),
    /** Set the active variation by ID */
    setActive: (c) => k(r, c),
    /** All available variations for this group */
    variations: E
  };
}
function Ke({
  children: r,
  disableQueryString: w = !1,
  initialState: k
}) {
  const [p, d] = W(
    /* @__PURE__ */ new Map()
  ), [E, V] = W(
    /* @__PURE__ */ new Map()
  ), [c, x] = W(
    () => k
  );
  B(() => {
    if (w || typeof window > "u") return;
    const l = new URLSearchParams(window.location.search), v = l.get("var");
    if (v)
      try {
        const h = v.split("_").map((b) => {
          const [i, a] = b.split(".");
          if (!i || !a) throw new Error("Invalid format");
          return [i, a];
        });
        d(new Map(h));
      } catch {
        d(/* @__PURE__ */ new Map());
      }
    const u = l.get("s");
    if (u)
      try {
        const h = JSON.parse(atob(u));
        x(h);
      } catch {
      }
  }, [w]), B(() => {
    if (w || typeof window > "u") return;
    const l = new URLSearchParams(), v = Array.from(p.entries());
    if (v.length > 0) {
      const b = v.map(([i, a]) => `${i}.${a}`).join("_");
      l.set("var", b);
    }
    if (c !== void 0) {
      const b = btoa(JSON.stringify(c));
      l.set("s", b);
    }
    const u = l.toString(), h = u ? `${window.location.pathname}?${u}` : window.location.pathname;
    window.history.replaceState({}, "", h);
  }, [p, c, w]), B(() => {
    if (w || typeof window > "u") return;
    const l = () => {
      const v = new URLSearchParams(window.location.search), u = v.get("var");
      if (u)
        try {
          const b = u.split("_").map((i) => {
            const [a, m] = i.split(".");
            if (!a || !m) throw new Error("Invalid format");
            return [a, m];
          });
          d(new Map(b));
        } catch {
          d(/* @__PURE__ */ new Map());
        }
      else
        d(/* @__PURE__ */ new Map());
      const h = v.get("s");
      if (h)
        try {
          const b = JSON.parse(atob(h));
          x(b);
        } catch {
        }
    };
    return window.addEventListener("popstate", l), () => window.removeEventListener("popstate", l);
  }, [w]);
  const j = M(() => {
    const l = p.get("root");
    if (!l) return null;
    const v = (h, b) => {
      const i = {
        id: h,
        group: b,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(E.entries()).forEach(([, a]) => {
        if (a.parentId === h) {
          const m = p.get(a.group);
          m && i.children.set(
            a.group,
            v(m, a.group)
          );
        }
      }), i;
    };
    return v(l, "root");
  }, [p, E]), C = ye(
    (l, v) => {
      d((u) => {
        const h = new Map(u);
        return h.set(l, v), l === "root" ? Array.from(u.keys()).forEach((b) => {
          b !== "root" && h.delete(b);
        }) : Array.from(E.entries()).find(
          ([i]) => i === v
        ) && Array.from(u.keys()).forEach((i) => {
          const a = Array.from(E.entries()).find(
            ([, m]) => m.group === i
          );
          a && a[1].parentId === v && h.delete(i);
        }), h;
      });
    },
    [E]
  ), y = ye(
    (l, v, u, h, b) => {
      V((i) => {
        const a = i.get(v);
        if ((a == null ? void 0 : a.group) === l && (a == null ? void 0 : a.label) === u && (a == null ? void 0 : a.groupLabel) === h && (a == null ? void 0 : a.parentId) === b)
          return i;
        const m = new Map(i);
        return m.set(v, { group: l, label: u, groupLabel: h, parentId: b }), m;
      });
    },
    []
  ), U = M(
    () => ({
      activeIds: p,
      setActiveId: C,
      registerVariation: y,
      variations: E,
      activeTree: j
    }),
    [
      p,
      C,
      y,
      E,
      j
    ]
  ), N = M(
    () => ({
      state: c,
      setState: (l) => {
        x(l);
      }
    }),
    [c]
  );
  return /* @__PURE__ */ n.jsxDEV(ce.Provider, { value: U, children: /* @__PURE__ */ n.jsxDEV(Te.Provider, { value: N, children: r }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 330,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 329,
    columnNumber: 5
  }, this);
}
function Z(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Re({
  label: r,
  children: w,
  ...k
}) {
  const { group: p = "", id: d, groupLabel: E, parentId: V } = k, c = M(() => d || Z(r), [d, r]), { activeIds: x, registerVariation: j } = ue(), C = x.get(p) === c;
  return B(() => {
    if (!p) {
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
    j(p, c, r, E || p, V);
  }, [p, c, r, E, V, j]), C ? /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: w }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this) : null;
}
const Ye = "root";
function We(r) {
  return D.isValidElement(r) && r.type === Re && typeof r.props.label == "string";
}
function Ge({
  isRoot: r = !1,
  label: w,
  children: k,
  ...p
}) {
  const { parentId: d, group: E } = p, V = le(ce);
  if (!V)
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
  if (r && d)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const c = E || (r ? Ye : Z(w)), { activeIds: x, setActiveId: j, variations: C } = V, y = M(() => {
    const N = /* @__PURE__ */ new Map();
    return Array.from(C.entries()).forEach(([l, v]) => {
      const { group: u, label: h, groupLabel: b } = v;
      N.has(u) || N.set(u, []), N.get(u).push([l, { label: h, groupLabel: b }]);
    }), N;
  }, [C]), U = M(() => D.Children.map(k, (N) => {
    if (D.isValidElement(N)) {
      if (N.type === Re) {
        if (!We(N))
          throw new Error("Invalid Variation component");
        const l = Z(N.props.label);
        return D.cloneElement(N, {
          ...N.props,
          group: c,
          groupLabel: w,
          id: l,
          parentId: d
        });
      } else if (N.type === Ge) {
        const l = N, v = x.get(c), u = Z(l.props.label);
        return D.cloneElement(l, {
          ...l.props,
          parentId: v,
          group: u
        });
      }
    }
    return N;
  }), [k, c, w, x, d]);
  return B(() => {
    if (!x.has(c)) {
      const N = y.get(c);
      if (N && N.length > 0) {
        const [l] = N[0];
        j(c, l);
      }
    }
  }, [c, y, x, j]), /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: U }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
const Ue = ({
  group: r,
  variations: w,
  activeIds: k,
  setActiveId: p,
  isMinimized: d
}) => {
  var c, x, j, C;
  const E = (x = (c = w[0]) == null ? void 0 : c[1]) == null ? void 0 : x.groupLabel, V = k.get(r);
  return /* @__PURE__ */ n.jsxDEV("div", { className: "variation-group", children: [
    /* @__PURE__ */ n.jsxDEV(
      "div",
      {
        className: "variation-title",
        title: E,
        children: E
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
        value: V || "",
        onChange: (y) => {
          p(r, y.target.value);
        },
        className: "variation-select",
        tabIndex: d ? -1 : 0,
        title: ((C = (j = w.find(([y]) => y === V)) == null ? void 0 : j[1]) == null ? void 0 : C.label) || "",
        children: w.map(
          ([y, { label: U }]) => /* @__PURE__ */ n.jsxDEV(
            "option",
            {
              value: y,
              title: U,
              children: U
            },
            y,
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
  minimizedByDefault: w = !1,
  className: k,
  ...p
}) {
  const [d, E] = W(w), [V, c] = W(!1), [x, j] = W(
    "variations"
  ), { activeIds: C, setActiveId: y, variations: U } = ue(), [N, l] = ze(), v = () => {
    const i = new URLSearchParams(window.location.search), a = Array.from(C.entries());
    if (a.length > 0) {
      const $ = a.map(([z, K]) => `${z}.${K}`).join("_");
      i.set("var", $);
    } else
      i.delete("var");
    const m = i.toString(), A = window.location.href.split("?")[0] + (m ? `?${m}` : "");
    navigator.clipboard.writeText(A).then(() => {
      c(!0), setTimeout(() => c(!1), 2e3);
    });
  }, u = D.useMemo(() => {
    const i = /* @__PURE__ */ new Map();
    return Array.from(U.entries()).forEach(([a, m]) => {
      const { group: A, label: $, groupLabel: z } = m;
      i.has(A) || i.set(A, []), i.get(A).push([a, { label: $, groupLabel: z }]);
    }), i;
  }, [U]), b = (() => {
    const i = [], a = /* @__PURE__ */ new Set();
    if (u.has("root")) {
      const m = u.get("root");
      i.push(
        /* @__PURE__ */ n.jsxDEV(
          Ue,
          {
            group: "root",
            variations: m,
            activeIds: C,
            setActiveId: y,
            isMinimized: d
          },
          "root",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 217,
            columnNumber: 9
          },
          this
        )
      ), a.add("root");
    }
    return Array.from(C.entries()).forEach(([m]) => {
      if (!a.has(m) && u.has(m)) {
        const A = u.get(m);
        i.push(
          /* @__PURE__ */ n.jsxDEV(
            Ue,
            {
              group: m,
              variations: A,
              activeIds: C,
              setActiveId: y,
              isMinimized: d
            },
            m,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 234,
              columnNumber: 11
            },
            this
          )
        ), a.add(m);
      }
    }), i.length === 0 ? /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty", children: [
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ n.jsxDEV("code", { children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 252,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 251,
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
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this) : i;
  })();
  return D.useEffect(() => {
    const i = (a) => {
      a.code === "KeyV" && a.altKey && !a.ctrlKey && !a.shiftKey && !a.metaKey && (a.preventDefault(), E((m) => !m));
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, []), /* @__PURE__ */ n.jsxDEV(
    "div",
    {
      className: `variations-controls-container ${k || ""}`,
      ...p,
      children: [
        /* @__PURE__ */ n.jsxDEV("div", { className: `variations-controls ${d ? "minimized" : ""}`, children: d ? /* @__PURE__ */ n.jsxDEV(
          "button",
          {
            className: "variations-circle",
            onClick: () => E(!1),
            tabIndex: d ? 0 : -1,
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
                    lineNumber: 346,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 347,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 348,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 349,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 335,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 330,
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
                      lineNumber: 371,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 372,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 373,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 374,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 356,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ n.jsxDEV("div", { className: "variations-tabs", children: [
                /* @__PURE__ */ n.jsxDEV(
                  "button",
                  {
                    className: `variations-tab ${x === "variations" ? "active" : ""}`,
                    onClick: () => j("variations"),
                    children: "Variations"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 377,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ n.jsxDEV(
                  "button",
                  {
                    className: `variations-tab ${x === "state" ? "active" : ""}`,
                    onClick: () => j("state"),
                    children: "State"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 385,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 376,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 355,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ n.jsxDEV("div", { className: "variations-header-actions", children: [
              /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-button",
                  onClick: v,
                  title: "Copy link to clipboard",
                  tabIndex: d ? -1 : 0,
                  children: V ? /* @__PURE__ */ n.jsxDEV(
                    "svg",
                    {
                      width: "10",
                      height: "10",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ n.jsxDEV(
                        "path",
                        {
                          d: "M20 6L9 17L4 12",
                          stroke: "currentColor",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                          lineNumber: 410,
                          columnNumber: 23
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 403,
                      columnNumber: 17
                    },
                    this
                  ) : /* @__PURE__ */ n.jsxDEV(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        /* @__PURE__ */ n.jsxDEV("path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }, void 0, !1, {
                          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                          lineNumber: 430,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ n.jsxDEV("path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }, void 0, !1, {
                          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                          lineNumber: 431,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ n.jsxDEV(
                          "line",
                          {
                            x1: "8",
                            x2: "16",
                            y1: "12",
                            y2: "12"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                            lineNumber: 432,
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
                      lineNumber: 419,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 396,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-toggle",
                  onClick: () => E(!0),
                  tabIndex: d ? -1 : 0,
                  children: "×"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 441,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 395,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 354,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ n.jsxDEV("div", { className: "variation-content", children: x === "variations" ? /* @__PURE__ */ n.jsxDEV("div", { className: "variation-groups", children: b }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 453,
            columnNumber: 13
          }, this) : /* @__PURE__ */ n.jsxDEV("div", { className: "variation-state", children: /* @__PURE__ */ n.jsxDEV("div", { className: "state-editor", children: /* @__PURE__ */ n.jsxDEV(
            "textarea",
            {
              value: JSON.stringify(N, null, 2),
              onChange: (i) => {
                try {
                  const a = JSON.parse(i.target.value);
                  l(a);
                } catch {
                }
              },
              spellCheck: !1,
              className: "state-textarea"
            },
            void 0,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 457,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 456,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 455,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 451,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 353,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 328,
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
            padding: 2px;
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
        ` }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 477,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 324,
      columnNumber: 5
    },
    this
  );
}
export {
  Re as Variation,
  Ge as Variations,
  Xe as VariationsControls,
  Ke as VariationsProvider,
  Be as useVariation,
  ue as useVariations,
  ze as useVariationsState
};
