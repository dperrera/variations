import H, { createContext as jg, useState as ug, useMemo as Ig, useCallback as pg, useContext as Rg, useEffect as Dg } from "react";
function kg(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var eg = { exports: {} }, cg = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ng;
function Sg() {
  if (Ng) return cg;
  Ng = 1;
  var g = Symbol.for("react.fragment");
  return cg.Fragment = g, cg.jsxDEV = void 0, cg;
}
var tg = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bg;
function Tg() {
  return Bg || (Bg = 1, process.env.NODE_ENV !== "production" && function() {
    function g(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === L ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case K:
          return "Fragment";
        case Cg:
          return "Portal";
        case q:
          return "Profiler";
        case _:
          return "StrictMode";
        case C:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case e:
            return (I.displayName || "Context") + ".Provider";
          case a:
            return (I._context.displayName || "Context") + ".Consumer";
          case r:
            var c = I.render;
            return I = I.displayName, I || (I = c.displayName || c.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case n:
            return c = I.displayName || null, c !== null ? c : g(I.type) || "Memo";
          case d:
            c = I._payload, I = I._init;
            try {
              return g(I(c));
            } catch {
            }
        }
      return null;
    }
    function Z(I) {
      return "" + I;
    }
    function W(I) {
      try {
        Z(I);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var t = c.error, o = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return t.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), Z(I);
      }
    }
    function x() {
    }
    function V() {
      if ($ === 0) {
        mg = console.log, Gg = console.info, Xg = console.warn, og = console.error, Zg = console.group, xg = console.groupCollapsed, yg = console.groupEnd;
        var I = {
          configurable: !0,
          enumerable: !0,
          value: x,
          writable: !0
        };
        Object.defineProperties(console, {
          info: I,
          log: I,
          warn: I,
          error: I,
          group: I,
          groupCollapsed: I,
          groupEnd: I
        });
      }
      $++;
    }
    function N() {
      if ($--, $ === 0) {
        var I = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: k({}, I, { value: mg }),
          info: k({}, I, { value: Gg }),
          warn: k({}, I, { value: Xg }),
          error: k({}, I, { value: og }),
          group: k({}, I, { value: Zg }),
          groupCollapsed: k({}, I, { value: xg }),
          groupEnd: k({}, I, { value: yg })
        });
      }
      0 > $ && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function X(I) {
      if (ng === void 0)
        try {
          throw Error();
        } catch (t) {
          var c = t.stack.trim().match(/\n( *(at )?)/);
          ng = c && c[1] || "", hg = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ng + I + hg;
    }
    function Y(I, c) {
      if (!I || rg) return "";
      var t = dg.get(I);
      if (t !== void 0) return t;
      rg = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var o = null;
      o = D.H, D.H = null, V();
      try {
        var J = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var j = function() {
                  throw Error();
                };
                if (Object.defineProperty(j.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(j, []);
                  } catch (F) {
                    var Ag = F;
                  }
                  Reflect.construct(I, [], j);
                } else {
                  try {
                    j.call();
                  } catch (F) {
                    Ag = F;
                  }
                  I.call(j.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (F) {
                  Ag = F;
                }
                (j = I()) && typeof j.catch == "function" && j.catch(function() {
                });
              }
            } catch (F) {
              if (F && Ag && typeof F.stack == "string")
                return [F.stack, Ag.stack];
            }
            return [null, null];
          }
        };
        J.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var h = Object.getOwnPropertyDescriptor(
          J.DetermineComponentFrameRoot,
          "name"
        );
        h && h.configurable && Object.defineProperty(
          J.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var i = J.DetermineComponentFrameRoot(), z = i[0], E = i[1];
        if (z && E) {
          var M = z.split(`
`), S = E.split(`
`);
          for (i = h = 0; h < M.length && !M[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          for (; i < S.length && !S[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          if (h === M.length || i === S.length)
            for (h = M.length - 1, i = S.length - 1; 1 <= h && 0 <= i && M[h] !== S[i]; )
              i--;
          for (; 1 <= h && 0 <= i; h--, i--)
            if (M[h] !== S[i]) {
              if (h !== 1 || i !== 1)
                do
                  if (h--, i--, 0 > i || M[h] !== S[i]) {
                    var gg = `
` + M[h].replace(
                      " at new ",
                      " at "
                    );
                    return I.displayName && gg.includes("<anonymous>") && (gg = gg.replace("<anonymous>", I.displayName)), typeof I == "function" && dg.set(I, gg), gg;
                  }
                while (1 <= h && 0 <= i);
              break;
            }
        }
      } finally {
        rg = !1, D.H = o, N(), Error.prepareStackTrace = t;
      }
      return M = (M = I ? I.displayName || I.name : "") ? X(M) : "", typeof I == "function" && dg.set(I, M), M;
    }
    function y(I) {
      if (I == null) return "";
      if (typeof I == "function") {
        var c = I.prototype;
        return Y(
          I,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof I == "string") return X(I);
      switch (I) {
        case C:
          return X("Suspense");
        case A:
          return X("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case r:
            return I = Y(I.render, !1), I;
          case n:
            return y(I.type);
          case d:
            c = I._payload, I = I._init;
            try {
              return y(I(c));
            } catch {
            }
        }
      return "";
    }
    function w() {
      var I = D.A;
      return I === null ? null : I.getOwner();
    }
    function m(I) {
      if (bg.call(I, "key")) {
        var c = Object.getOwnPropertyDescriptor(I, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function s(I, c) {
      function t() {
        Wg || (Wg = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: t,
        configurable: !0
      });
    }
    function l() {
      var I = g(this.type);
      return wg[I] || (wg[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function G(I, c, t, o, J, h) {
      return t = h.ref, I = {
        $$typeof: P,
        type: I,
        key: c,
        props: h,
        _owner: J
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(I, "ref", { enumerable: !1, value: null }), I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(I, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function p(I, c, t, o, J, h) {
      if (typeof I == "string" || typeof I == "function" || I === K || I === q || I === _ || I === C || I === A || I === f || typeof I == "object" && I !== null && (I.$$typeof === d || I.$$typeof === n || I.$$typeof === e || I.$$typeof === a || I.$$typeof === r || I.$$typeof === Hg || I.getModuleId !== void 0)) {
        var i = c.children;
        if (i !== void 0)
          if (o)
            if (ag(i)) {
              for (o = 0; o < i.length; o++)
                b(i[o], I);
              Object.freeze && Object.freeze(i);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else b(i, I);
      } else
        i = "", (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), I === null ? o = "null" : ag(I) ? o = "array" : I !== void 0 && I.$$typeof === P ? (o = "<" + (g(I.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : o = typeof I, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          o,
          i
        );
      if (bg.call(c, "key")) {
        i = g(I);
        var z = Object.keys(c).filter(function(M) {
          return M !== "key";
        });
        o = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", fg[i + o] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          i,
          z,
          i
        ), fg[i + o] = !0);
      }
      if (i = null, t !== void 0 && (W(t), i = "" + t), m(c) && (W(c.key), i = "" + c.key), "key" in c) {
        t = {};
        for (var E in c)
          E !== "key" && (t[E] = c[E]);
      } else t = c;
      return i && s(
        t,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), G(I, i, h, J, w(), t);
    }
    function b(I, c) {
      if (typeof I == "object" && I && I.$$typeof !== Lg) {
        if (ag(I))
          for (var t = 0; t < I.length; t++) {
            var o = I[t];
            v(o) && T(o, c);
          }
        else if (v(I))
          I._store && (I._store.validated = 1);
        else if (I === null || typeof I != "object" ? t = null : (t = R && I[R] || I["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== I.entries && (t = t.call(I), t !== I))
          for (; !(I = t.next()).done; )
            v(I.value) && T(I.value, c);
      }
    }
    function v(I) {
      return typeof I == "object" && I !== null && I.$$typeof === P;
    }
    function T(I, c) {
      if (I._store && !I._store.validated && I.key == null && (I._store.validated = 1, c = O(c), !Yg[c])) {
        Yg[c] = !0;
        var t = "";
        I && I._owner != null && I._owner !== w() && (t = null, typeof I._owner.tag == "number" ? t = g(I._owner.type) : typeof I._owner.name == "string" && (t = I._owner.name), t = " It was passed a child from " + t + ".");
        var o = D.getCurrentStack;
        D.getCurrentStack = function() {
          var J = y(I.type);
          return o && (J += o() || ""), J;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          t
        ), D.getCurrentStack = o;
      }
    }
    function O(I) {
      var c = "", t = w();
      return t && (t = g(t.type)) && (c = `

Check the render method of \`` + t + "`."), c || (I = g(I)) && (c = `

Check the top-level render call using <` + I + ">."), c;
    }
    var U = H, P = Symbol.for("react.transitional.element"), Cg = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), e = Symbol.for("react.context"), r = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), R = Symbol.iterator, L = Symbol.for("react.client.reference"), D = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bg = Object.prototype.hasOwnProperty, k = Object.assign, Hg = Symbol.for("react.client.reference"), ag = Array.isArray, $ = 0, mg, Gg, Xg, og, Zg, xg, yg;
    x.__reactDisabledLog = !0;
    var ng, hg, rg = !1, dg = new (typeof WeakMap == "function" ? WeakMap : Map)(), Lg = Symbol.for("react.client.reference"), Wg, wg = {}, fg = {}, Yg = {};
    tg.Fragment = K, tg.jsxDEV = function(I, c, t, o, J, h) {
      return p(I, c, t, o, J, h);
    };
  }()), tg;
}
var Vg;
function Og() {
  return Vg || (Vg = 1, process.env.NODE_ENV === "production" ? eg.exports = Sg() : eg.exports = Tg()), eg.exports;
}
var u = Og();
const sg = jg(
  null
), zg = () => {
  const g = Rg(sg);
  if (!g)
    throw new Error("useVariations must be used within a VariationsProvider");
  return g;
};
function $g({ children: g }) {
  const [Z, W] = ug(
    /* @__PURE__ */ new Map()
  ), [x, V] = ug(
    /* @__PURE__ */ new Map()
  ), N = Ig(() => {
    const w = Z.get("root-variations");
    if (!w) return null;
    const m = (l, G) => {
      const p = {
        id: l,
        group: G,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(x.entries()).forEach(([, b]) => {
        if (b.parentId === l) {
          const v = Z.get(b.group);
          v && p.children.set(
            b.group,
            m(v, b.group)
          );
        }
      }), p;
    };
    return m(w, "root-variations");
  }, [Z, x]), X = pg(
    (w, m) => {
      W((s) => {
        const l = new Map(s);
        return l.set(w, m), w === "root-variations" ? Array.from(s.keys()).forEach((G) => {
          G !== "root-variations" && l.delete(G);
        }) : Array.from(x.entries()).find(
          ([p]) => p === m
        ) && Array.from(s.keys()).forEach((p) => {
          const b = Array.from(x.entries()).find(
            ([, v]) => v.group === p
          );
          b && b[1].parentId === m && l.delete(p);
        }), l;
      });
    },
    [x]
  ), Y = pg(
    (w, m, s, l, G) => {
      V((p) => {
        const b = p.get(m);
        if ((b == null ? void 0 : b.group) === w && (b == null ? void 0 : b.label) === s && (b == null ? void 0 : b.groupLabel) === l && (b == null ? void 0 : b.parentId) === G)
          return p;
        const v = new Map(p);
        return v.set(m, { group: w, label: s, groupLabel: l, parentId: G }), v;
      });
    },
    []
  ), y = Ig(
    () => ({
      activeIds: Z,
      setActiveId: X,
      registerVariation: Y,
      variations: x,
      activeTree: N
    }),
    [
      Z,
      X,
      Y,
      x,
      N
    ]
  );
  return /* @__PURE__ */ u.jsxDEV(sg.Provider, { value: y, children: g }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 171,
    columnNumber: 5
  }, this);
}
function lg(g) {
  return g.toLowerCase().replace(/\s+/g, "-");
}
function Fg({
  group: g = "",
  label: Z,
  id: W,
  groupLabel: x,
  parentId: V,
  children: N
}) {
  const X = Ig(() => W || lg(Z), [W, Z]), { activeIds: Y, registerVariation: y } = zg(), w = Y.get(g) === X;
  return Dg(() => {
    if (!g) {
      console.error(
        `Variation Component Error: No group provided for variation "${Z}"

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variation component is not wrapped in a Variations component

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Make sure your Variation is wrapped in a Variations component:
   <Variations label="My Variations">
     <Variation label="${Z}">
       {children}
     </Variation>
   </Variations>`
      );
      return;
    }
    y(g, X, Z, x || g, V);
  }, [g, X, Z, x, V, y]), w ? /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: N }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this) : null;
}
const Eg = "root-variations";
function Qg(g) {
  return H.isValidElement(g) && g.type === Fg && typeof g.props.label == "string";
}
function Ug({
  isRoot: g = !1,
  label: Z,
  children: W,
  parentId: x,
  group: V
}) {
  const N = Rg(sg);
  if (!N)
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
  if (g && x)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const X = V || (g ? Eg : lg(Z)), { activeIds: Y, setActiveId: y, variations: w } = N, m = Ig(() => {
    const l = /* @__PURE__ */ new Map();
    return Array.from(w.entries()).forEach(([G, p]) => {
      const { group: b, label: v, groupLabel: T } = p;
      l.has(b) || l.set(b, []), l.get(b).push([G, { label: v, groupLabel: T }]);
    }), l;
  }, [w]), s = Ig(() => H.Children.map(W, (l) => {
    if (H.isValidElement(l)) {
      if (l.type === Fg) {
        if (!Qg(l))
          throw new Error("Invalid Variation component");
        const G = l.props.id || lg(l.props.label);
        return H.cloneElement(l, {
          ...l.props,
          group: X,
          groupLabel: Z,
          id: G,
          parentId: x
        });
      } else if (l.type === Ug) {
        const G = l, p = Y.get(X), b = lg(G.props.label);
        return H.cloneElement(G, {
          ...G.props,
          parentId: p,
          group: b
        });
      }
    }
    return l;
  }), [W, X, Z, Y, x]);
  return Dg(() => {
    if (!Y.has(X)) {
      const l = m.get(X);
      if (l && l.length > 0) {
        const [G] = l[0];
        y(X, G);
      }
    }
  }, [X, m, Y, y]), /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: s }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
var Q = {}, vg;
function Pg() {
  if (vg) return Q;
  vg = 1;
  var g = H;
  function Z(a) {
    return a && typeof a == "object" && "default" in a ? a : { default: a };
  }
  var W = /* @__PURE__ */ Z(g);
  function x(a, e) {
    for (var r = 0; r < e.length; r++) {
      var C = e[r];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(a, C.key, C);
    }
  }
  function V(a, e, r) {
    return x(a.prototype, e), a;
  }
  var N = typeof process < "u" && process.env && process.env.NODE_ENV === "production", X = function(a) {
    return Object.prototype.toString.call(a) === "[object String]";
  }, Y = /* @__PURE__ */ function() {
    function a(r) {
      var C = r === void 0 ? {} : r, A = C.name, n = A === void 0 ? "stylesheet" : A, d = C.optimizeForSpeed, f = d === void 0 ? N : d;
      y(X(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", y(typeof f == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = f, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
      var R = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
      this._nonce = R ? R.getAttribute("content") : null;
    }
    var e = a.prototype;
    return e.setOptimizeForSpeed = function(C) {
      y(typeof C == "boolean", "`setOptimizeForSpeed` accepts a boolean"), y(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = C, this.inject();
    }, e.isOptimizeForSpeed = function() {
      return this._optimizeForSpeed;
    }, e.inject = function() {
      var C = this;
      if (y(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (N || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
        return;
      }
      this._serverSheet = {
        cssRules: [],
        insertRule: function(A, n) {
          return typeof n == "number" ? C._serverSheet.cssRules[n] = {
            cssText: A
          } : C._serverSheet.cssRules.push({
            cssText: A
          }), n;
        },
        deleteRule: function(A) {
          C._serverSheet.cssRules[A] = null;
        }
      };
    }, e.getSheetForTag = function(C) {
      if (C.sheet)
        return C.sheet;
      for (var A = 0; A < document.styleSheets.length; A++)
        if (document.styleSheets[A].ownerNode === C)
          return document.styleSheets[A];
    }, e.getSheet = function() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }, e.insertRule = function(C, A) {
      if (y(X(C), "`insertRule` accepts only strings"), typeof window > "u")
        return typeof A != "number" && (A = this._serverSheet.cssRules.length), this._serverSheet.insertRule(C, A), this._rulesCount++;
      if (this._optimizeForSpeed) {
        var n = this.getSheet();
        typeof A != "number" && (A = n.cssRules.length);
        try {
          n.insertRule(C, A);
        } catch {
          return N || console.warn(`StyleSheet: illegal rule: 

` + C + `

See https://stackoverflow.com/q/20007992 for more info`), -1;
        }
      } else {
        var d = this._tags[A];
        this._tags.push(this.makeStyleTag(this._name, C, d));
      }
      return this._rulesCount++;
    }, e.replaceRule = function(C, A) {
      if (this._optimizeForSpeed || typeof window > "u") {
        var n = typeof window < "u" ? this.getSheet() : this._serverSheet;
        if (A.trim() || (A = this._deletedRulePlaceholder), !n.cssRules[C])
          return C;
        n.deleteRule(C);
        try {
          n.insertRule(A, C);
        } catch {
          N || console.warn(`StyleSheet: illegal rule: 

` + A + `

See https://stackoverflow.com/q/20007992 for more info`), n.insertRule(this._deletedRulePlaceholder, C);
        }
      } else {
        var d = this._tags[C];
        y(d, "old rule at index `" + C + "` not found"), d.textContent = A;
      }
      return C;
    }, e.deleteRule = function(C) {
      if (typeof window > "u") {
        this._serverSheet.deleteRule(C);
        return;
      }
      if (this._optimizeForSpeed)
        this.replaceRule(C, "");
      else {
        var A = this._tags[C];
        y(A, "rule at index `" + C + "` not found"), A.parentNode.removeChild(A), this._tags[C] = null;
      }
    }, e.flush = function() {
      this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(C) {
        return C && C.parentNode.removeChild(C);
      }), this._tags = []) : this._serverSheet.cssRules = [];
    }, e.cssRules = function() {
      var C = this;
      return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(A, n) {
        return n ? A = A.concat(Array.prototype.map.call(C.getSheetForTag(n).cssRules, function(d) {
          return d.cssText === C._deletedRulePlaceholder ? null : d;
        })) : A.push(null), A;
      }, []);
    }, e.makeStyleTag = function(C, A, n) {
      A && y(X(A), "makeStyleTag accepts only strings as second parameter");
      var d = document.createElement("style");
      this._nonce && d.setAttribute("nonce", this._nonce), d.type = "text/css", d.setAttribute("data-" + C, ""), A && d.appendChild(document.createTextNode(A));
      var f = document.head || document.getElementsByTagName("head")[0];
      return n ? f.insertBefore(d, n) : f.appendChild(d), d;
    }, V(a, [
      {
        key: "length",
        get: function() {
          return this._rulesCount;
        }
      }
    ]), a;
  }();
  function y(a, e) {
    if (!a)
      throw new Error("StyleSheet: " + e + ".");
  }
  function w(a) {
    for (var e = 5381, r = a.length; r; )
      e = e * 33 ^ a.charCodeAt(--r);
    return e >>> 0;
  }
  var m = w, s = function(a) {
    return a.replace(/\/style/gi, "\\/style");
  }, l = {};
  function G(a, e) {
    if (!e)
      return "jsx-" + a;
    var r = String(e), C = a + r;
    return l[C] || (l[C] = "jsx-" + m(a + "-" + r)), l[C];
  }
  function p(a, e) {
    var r = /__jsx-style-dynamic-selector/g;
    typeof window > "u" && (e = s(e));
    var C = a + e;
    return l[C] || (l[C] = e.replace(r, a)), l[C];
  }
  function b(a, e) {
    return e === void 0 && (e = {}), a.map(function(r) {
      var C = r[0], A = r[1];
      return /* @__PURE__ */ W.default.createElement("style", {
        id: "__" + C,
        // Avoid warnings upon render with a key
        key: "__" + C,
        nonce: e.nonce ? e.nonce : void 0,
        dangerouslySetInnerHTML: {
          __html: A
        }
      });
    });
  }
  var v = /* @__PURE__ */ function() {
    function a(r) {
      var C = r === void 0 ? {} : r, A = C.styleSheet, n = A === void 0 ? null : A, d = C.optimizeForSpeed, f = d === void 0 ? !1 : d;
      this._sheet = n || new Y({
        name: "styled-jsx",
        optimizeForSpeed: f
      }), this._sheet.inject(), n && typeof f == "boolean" && (this._sheet.setOptimizeForSpeed(f), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
    }
    var e = a.prototype;
    return e.add = function(C) {
      var A = this;
      this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(C.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(L, D) {
        return L[D] = 0, L;
      }, {}));
      var n = this.getIdAndRules(C), d = n.styleId, f = n.rules;
      if (d in this._instancesCounts) {
        this._instancesCounts[d] += 1;
        return;
      }
      var R = f.map(function(L) {
        return A._sheet.insertRule(L);
      }).filter(function(L) {
        return L !== -1;
      });
      this._indices[d] = R, this._instancesCounts[d] = 1;
    }, e.remove = function(C) {
      var A = this, n = this.getIdAndRules(C).styleId;
      if (T(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
        var d = this._fromServer && this._fromServer[n];
        d ? (d.parentNode.removeChild(d), delete this._fromServer[n]) : (this._indices[n].forEach(function(f) {
          return A._sheet.deleteRule(f);
        }), delete this._indices[n]), delete this._instancesCounts[n];
      }
    }, e.update = function(C, A) {
      this.add(A), this.remove(C);
    }, e.flush = function() {
      this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
    }, e.cssRules = function() {
      var C = this, A = this._fromServer ? Object.keys(this._fromServer).map(function(d) {
        return [
          d,
          C._fromServer[d]
        ];
      }) : [], n = this._sheet.cssRules();
      return A.concat(Object.keys(this._indices).map(function(d) {
        return [
          d,
          C._indices[d].map(function(f) {
            return n[f].cssText;
          }).join(C._optimizeForSpeed ? "" : `
`)
        ];
      }).filter(function(d) {
        return !!d[1];
      }));
    }, e.styles = function(C) {
      return b(this.cssRules(), C);
    }, e.getIdAndRules = function(C) {
      var A = C.children, n = C.dynamic, d = C.id;
      if (n) {
        var f = G(d, n);
        return {
          styleId: f,
          rules: Array.isArray(A) ? A.map(function(R) {
            return p(f, R);
          }) : [
            p(f, A)
          ]
        };
      }
      return {
        styleId: G(d),
        rules: Array.isArray(A) ? A : [
          A
        ]
      };
    }, e.selectFromServer = function() {
      var C = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return C.reduce(function(A, n) {
        var d = n.id.slice(2);
        return A[d] = n, A;
      }, {});
    }, a;
  }();
  function T(a, e) {
    if (!a)
      throw new Error("StyleSheetRegistry: " + e + ".");
  }
  var O = /* @__PURE__ */ g.createContext(null);
  O.displayName = "StyleSheetContext";
  function U() {
    return new v();
  }
  function P(a) {
    var e = a.registry, r = a.children, C = g.useContext(O), A = g.useState(function() {
      return C || e || U();
    }), n = A[0];
    return /* @__PURE__ */ W.default.createElement(O.Provider, {
      value: n
    }, r);
  }
  function Cg() {
    return g.useContext(O);
  }
  var K = W.default.useInsertionEffect || W.default.useLayoutEffect, _ = typeof window < "u" ? U() : void 0;
  function q(a) {
    var e = _ || Cg();
    return e ? typeof window > "u" ? (e.add(a), null) : (K(function() {
      return e.add(a), function() {
        e.remove(a);
      };
    }, [
      a.id,
      String(a.dynamic)
    ]), null) : null;
  }
  return q.dynamic = function(a) {
    return a.map(function(e) {
      var r = e[0], C = e[1];
      return G(r, C);
    }).join(" ");
  }, Q.StyleRegistry = P, Q.createStyleRegistry = U, Q.style = q, Q.useStyleRegistry = Cg, Q;
}
var ig, Mg;
function Kg() {
  return Mg || (Mg = 1, ig = Pg().style), ig;
}
var _g = Kg();
const B = /* @__PURE__ */ kg(_g), Jg = ({
  group: g,
  variations: Z,
  activeIds: W,
  setActiveId: x,
  isMinimized: V
}) => {
  var Y, y, w, m;
  const N = (y = (Y = Z[0]) == null ? void 0 : Y[1]) == null ? void 0 : y.groupLabel, X = W.get(g);
  return /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-3406677916 variation-group", children: [
    /* @__PURE__ */ u.jsxDEV(
      "div",
      {
        title: N,
        className: "jsx-3406677916 variation-title",
        children: N
      },
      void 0,
      !1,
      {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-3406677916 variations-selects", children: /* @__PURE__ */ u.jsxDEV(
      "select",
      {
        value: X || "",
        onChange: (s) => {
          x(g, s.target.value);
        },
        tabIndex: V ? -1 : 0,
        title: ((m = (w = Z.find(([s]) => s === X)) == null ? void 0 : w[1]) == null ? void 0 : m.label) || "",
        className: "jsx-3406677916 variation-select",
        children: Z.map(
          ([s, { label: l }]) => /* @__PURE__ */ u.jsxDEV(
            "option",
            {
              value: s,
              title: l,
              className: "jsx-3406677916",
              children: l
            },
            s,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 46,
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
        lineNumber: 36,
        columnNumber: 9
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ u.jsxDEV(B, { id: "3406677916", children: `.variation-group.jsx-3406677916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0 0 10px;gap:4px;overflow:hidden;}.variation-group.jsx-3406677916:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;}.variation-group.jsx-3406677916:hover{background:rgba(0,0,0,0.03);}.variation-title.jsx-3406677916{-webkit-flex:1;-ms-flex:1;flex:1;font-size:11px;font-weight:500;color:#888;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}.variations-selects.jsx-3406677916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;}.variation-select.jsx-3406677916{width:100px;-webkit-flex:1 0 50px;-ms-flex:1 0 50px;flex:1 0 50px;padding:4px 24px 4px 8px;font-size:11px;color:#111;background:transparent;cursor:pointer;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;background-size:8px auto;-webkit-transition:border-color 0.1s ease;transition:border-color 0.1s ease;}.variation-select.jsx-3406677916 option.jsx-3406677916{text-overflow:ellipsis;overflow:hidden;}.variation-select.jsx-3406677916:focus{background:rgba(0,0,0,1);color:#ffffff;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;background-size:8px auto;}@media (prefers-color-scheme:dark){.variation-group.jsx-3406677916:hover{background:rgba(255,255,255,0.05);}.variation-title.jsx-3406677916{color:#999;}.variation-select.jsx-3406677916{color:#fff;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");}.variation-select.jsx-3406677916 option.jsx-3406677916{background:rgb(28,28,30);color:#fff;}.variation-select.jsx-3406677916:focus{background-color:#ffffff;color:#111;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHd0IsQUFTaUIsQUFJQyxBQUl4QixBQVVNLEFBS0QsQUFxQlcsQUFLSyxBQVVXLEFBSTFCLEFBSUEsQUFLZ0IsQUFLRixXQWIzQixBQUl5UixDQTVDM1EsV0FxQkUsRUFLRixBQXVCRCxBQUtBLEdBekVmLEVBSmlDLEdBUWhCLENBbURmLEVBY0EsQUFLeVIsR0FqQzNSLEFBS3FSLFNBekNuUSxhQVJsQixHQVNhLEVBY2MsUUFqQ04sQUEyQlgsQ0FQZSxPQVF6QixTQU1pQixPQWJDLFFBY0wsUUFiUSxHQWNJLGdCQWJ6QixPQWNpQixHQXBDZSxZQXFDakIsYUFDRyw2REFDRSxrQkFDSyxXQXZDSixZQXdDQSxtQkFDSCxDQWtDaEIsZUFqQ3VSLFNBZ0IzUCxDQTRCNUIsMkJBM0JxQyxTQTFEbEIsbUJBQ1gsUUFDUSxDQXlEUyxlQXhEM0IsVUF5REEsb0xBbEI4Qiw0QkFDUyxxQ0FDWix5QkFDUyw0RUFDcEMiLCJmaWxlIjoiL1VzZXJzL2RwZXJyZXJhL1Byb2plY3RzL3ZhcmlhdGlvbnMvc3JjL1ZhcmlhdGlvbnNDb250cm9scy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmFyaWF0aW9uc1Bvc2l0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IHVzZVZhcmlhdGlvbnMgfSBmcm9tIFwiLi9WYXJpYXRpb25zUHJvdmlkZXJcIjtcblxuaW50ZXJmYWNlIFZhcmlhdGlvbnNDb250cm9sc1Byb3BzIHtcbiAgcG9zaXRpb24/OiBWYXJpYXRpb25zUG9zaXRpb247XG4gIG1pbmltaXplZEJ5RGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmNvbnN0IFZhcmlhdGlvbkdyb3VwID0gKHtcbiAgZ3JvdXAsXG4gIHZhcmlhdGlvbnMsXG4gIGFjdGl2ZUlkcyxcbiAgc2V0QWN0aXZlSWQsXG4gIGlzTWluaW1pemVkLFxufToge1xuICBncm91cDogc3RyaW5nO1xuICB2YXJpYXRpb25zOiBBcnJheTxbc3RyaW5nLCB7IGxhYmVsOiBzdHJpbmc7IGdyb3VwTGFiZWw6IHN0cmluZyB9XT47XG4gIGFjdGl2ZUlkczogTWFwPHN0cmluZywgc3RyaW5nPjtcbiAgc2V0QWN0aXZlSWQ6IChncm91cDogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBpc01pbmltaXplZDogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgZ3JvdXBMYWJlbCA9IHZhcmlhdGlvbnNbMF0/LlsxXT8uZ3JvdXBMYWJlbDtcbiAgY29uc3QgYWN0aXZlSWQgPSBhY3RpdmVJZHMuZ2V0KGdyb3VwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWdyb3VwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbi10aXRsZVwiXG4gICAgICAgIHRpdGxlPXtncm91cExhYmVsfVxuICAgICAgPlxuICAgICAgICB7Z3JvdXBMYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLXNlbGVjdHNcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHZhbHVlPXthY3RpdmVJZCB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlSWQoZ3JvdXAsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbi1zZWxlY3RcIlxuICAgICAgICAgIHRhYkluZGV4PXtpc01pbmltaXplZCA/IC0xIDogMH1cbiAgICAgICAgICB0aXRsZT17dmFyaWF0aW9ucy5maW5kKChbaWRdKSA9PiBpZCA9PT0gYWN0aXZlSWQpPy5bMV0/LmxhYmVsIHx8IFwiXCJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dmFyaWF0aW9ucy5tYXAoKFtpZCwgeyBsYWJlbCB9XSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1zZWxlY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBmbGV4OiAxIDAgNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMjRweCA0cHggOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSclMjM5OTk5OTknIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOHB4IGF1dG87XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb24tc2VsZWN0OmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnZhcmlhdGlvbi1ncm91cDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCBvcHRpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI4LCAyOCwgMzApO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSclMjMxMTExMTEnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmFyaWF0aW9uc0NvbnRyb2xzKHtcbiAgcG9zaXRpb24gPSBcImJvdHRvbS1yaWdodFwiLFxuICBtaW5pbWl6ZWRCeURlZmF1bHQgPSB0cnVlLFxufTogVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMpIHtcbiAgY29uc3QgW2lzTWluaW1pemVkLCBzZXRJc01pbmltaXplZF0gPSB1c2VTdGF0ZShtaW5pbWl6ZWRCeURlZmF1bHQpO1xuICBjb25zdCB7IGFjdGl2ZUlkcywgc2V0QWN0aXZlSWQsIHZhcmlhdGlvbnMgfSA9IHVzZVZhcmlhdGlvbnMoKTtcblxuICAvLyBHcm91cCB2YXJpYXRpb25zIGJ5IGdyb3VwXG4gIGNvbnN0IHZhcmlhdGlvbkdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8XG4gICAgICBzdHJpbmcsXG4gICAgICBBcnJheTxbc3RyaW5nLCB7IGxhYmVsOiBzdHJpbmc7IGdyb3VwTGFiZWw6IHN0cmluZyB9XT5cbiAgICA+KCk7XG5cbiAgICBBcnJheS5mcm9tKHZhcmlhdGlvbnMuZW50cmllcygpKS5mb3JFYWNoKChbaWQsIHZhcmlhdGlvbl0pID0+IHtcbiAgICAgIGNvbnN0IHsgZ3JvdXAsIGxhYmVsOiB2YXJpYXRpb25MYWJlbCwgZ3JvdXBMYWJlbCB9ID0gdmFyaWF0aW9uO1xuICAgICAgaWYgKCFncm91cHMuaGFzKGdyb3VwKSkge1xuICAgICAgICBncm91cHMuc2V0KGdyb3VwLCBbXSk7XG4gICAgICB9XG4gICAgICBncm91cHMuZ2V0KGdyb3VwKSEucHVzaChbaWQsIHsgbGFiZWw6IHZhcmlhdGlvbkxhYmVsLCBncm91cExhYmVsIH1dKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9LCBbdmFyaWF0aW9uc10pO1xuXG4gIC8vIFJlbmRlciB2YXJpYXRpb24gZ3JvdXBzIGJhc2VkIG9uIGFjdGl2ZSBJRHNcbiAgY29uc3QgcmVuZGVyVmFyaWF0aW9uR3JvdXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBbXTtcbiAgICBjb25zdCBwcm9jZXNzZWRHcm91cHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIEZpcnN0IGFkZCByb290IHZhcmlhdGlvbnNcbiAgICBpZiAodmFyaWF0aW9uR3JvdXBzLmhhcyhcInJvb3QtdmFyaWF0aW9uc1wiKSkge1xuICAgICAgY29uc3QgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbkdyb3Vwcy5nZXQoXCJyb290LXZhcmlhdGlvbnNcIikhO1xuICAgICAgZ3JvdXBzLnB1c2goXG4gICAgICAgIDxWYXJpYXRpb25Hcm91cFxuICAgICAgICAgIGtleT1cInJvb3QtdmFyaWF0aW9uc1wiXG4gICAgICAgICAgZ3JvdXA9XCJyb290LXZhcmlhdGlvbnNcIlxuICAgICAgICAgIHZhcmlhdGlvbnM9e3ZhcmlhdGlvbnN9XG4gICAgICAgICAgYWN0aXZlSWRzPXthY3RpdmVJZHN9XG4gICAgICAgICAgc2V0QWN0aXZlSWQ9e3NldEFjdGl2ZUlkfVxuICAgICAgICAgIGlzTWluaW1pemVkPXtpc01pbmltaXplZH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBwcm9jZXNzZWRHcm91cHMuYWRkKFwicm9vdC12YXJpYXRpb25zXCIpO1xuICAgIH1cblxuICAgIC8vIFRoZW4gYWRkIGFsbCBvdGhlciBncm91cHMgdGhhdCBoYXZlIGFjdGl2ZSBJRHNcbiAgICBBcnJheS5mcm9tKGFjdGl2ZUlkcy5lbnRyaWVzKCkpLmZvckVhY2goKFtncm91cF0pID0+IHtcbiAgICAgIGlmICghcHJvY2Vzc2VkR3JvdXBzLmhhcyhncm91cCkgJiYgdmFyaWF0aW9uR3JvdXBzLmhhcyhncm91cCkpIHtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbkdyb3Vwcy5nZXQoZ3JvdXApITtcbiAgICAgICAgZ3JvdXBzLnB1c2goXG4gICAgICAgICAgPFZhcmlhdGlvbkdyb3VwXG4gICAgICAgICAgICBrZXk9e2dyb3VwfVxuICAgICAgICAgICAgZ3JvdXA9e2dyb3VwfVxuICAgICAgICAgICAgdmFyaWF0aW9ucz17dmFyaWF0aW9uc31cbiAgICAgICAgICAgIGFjdGl2ZUlkcz17YWN0aXZlSWRzfVxuICAgICAgICAgICAgc2V0QWN0aXZlSWQ9e3NldEFjdGl2ZUlkfVxuICAgICAgICAgICAgaXNNaW5pbWl6ZWQ9e2lzTWluaW1pemVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIHByb2Nlc3NlZEdyb3Vwcy5hZGQoZ3JvdXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1lbXB0eVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1lbXB0eS10aXRsZVwiPk5vIFZhcmlhdGlvbnMgRm91bmQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtZW1wdHktdGV4dFwiPlxuICAgICAgICAgICAgQWRkIGEgPGNvZGU+e2A8VmFyaWF0aW9ucz5gfTwvY29kZT4gY29tcG9uZW50IVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHktdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHktdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHktdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfTtcblxuICBjb25zdCBhbGxHcm91cHMgPSByZW5kZXJWYXJpYXRpb25Hcm91cHMoKTtcblxuICAvLyBBZGQga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLmNvZGUgPT09IFwiS2V5VlwiICYmXG4gICAgICAgIGUuYWx0S2V5ICYmXG4gICAgICAgICFlLmN0cmxLZXkgJiZcbiAgICAgICAgIWUuc2hpZnRLZXkgJiZcbiAgICAgICAgIWUubWV0YUtleVxuICAgICAgKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBhbnkgZGVmYXVsdCBhbHQrdiBiZWhhdmlvclxuICAgICAgICBzZXRJc01pbmltaXplZCgocHJldikgPT4gIXByZXYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWNvbnRyb2xzLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B2YXJpYXRpb25zLWNvbnRyb2xzICR7aXNNaW5pbWl6ZWQgPyBcIm1pbmltaXplZFwiIDogXCJcIn1gfT5cbiAgICAgICAge2lzTWluaW1pemVkID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtY2lyY2xlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWluaW1pemVkKGZhbHNlKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXtpc01pbmltaXplZCA/IDAgOiAtMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUzNiAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzYgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yOTcgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0TDYuMDg4IDguOTE2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgMTcuOTEyYTEgMSAwIDAgMCAwIDEuNDE1bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE1bC0yLjM3Ny0yLjM3NmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDQuNjc0YTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTM2IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NiAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yOTcgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0TDYuMDg4IDguOTE2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDE3LjkxMmExIDEgMCAwIDAgMCAxLjQxNWwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNWwtMi4zNzctMi4zNzZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgNC42NzRhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgVmFyaWF0aW9uc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNaW5pbWl6ZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gLTEgOiAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tZ3JvdXBzXCI+e2FsbEdyb3Vwc308L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudmFyaWF0aW9ucy1jb250cm9scyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcInJpZ2h0XCIpXG4gICAgICAgICAgICA/IFwicmlnaHQ6IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIilcbiAgICAgICAgICAgID8gXCJsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcImxlZnQ6IDE2cHg7XCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcImJvdHRvbTogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKVxuICAgICAgICAgICAgPyBcInRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJ0b3A6IDE2cHg7XCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcInJpZ2h0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImxlZnRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcInRvcFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gICAgICAgICAgICAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jb250cm9scy5taW5pbWl6ZWQge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcInJpZ2h0XCIpXG4gICAgICAgICAgICA/IFwicmlnaHQ6IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIilcbiAgICAgICAgICAgID8gXCJsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcImxlZnQ6IDE2cHg7XCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcImJvdHRvbTogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKVxuICAgICAgICAgICAgPyBcInRvcDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJ0b3A6IDE2cHg7XCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcInJpZ2h0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcIm1pZGRsZVwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImxlZnRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcInRvcFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAycHggMCAxMHB4O1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXBzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAzMCwgMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1jb250cm9scy5taW5pbWl6ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI4LCAyOCwgMzApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNpcmNsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGU6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMzAsIDAuOSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, void 0);
};
function gI({
  position: g = "bottom-right",
  minimizedByDefault: Z = !0
}) {
  const [W, x] = ug(Z), { activeIds: V, setActiveId: N, variations: X } = zg(), Y = H.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    return Array.from(X.entries()).forEach(([s, l]) => {
      const { group: G, label: p, groupLabel: b } = l;
      m.has(G) || m.set(G, []), m.get(G).push([s, { label: p, groupLabel: b }]);
    }), m;
  }, [X]), w = (() => {
    const m = [], s = /* @__PURE__ */ new Set();
    if (Y.has("root-variations")) {
      const l = Y.get("root-variations");
      m.push(
        /* @__PURE__ */ u.jsxDEV(
          Jg,
          {
            group: "root-variations",
            variations: l,
            activeIds: V,
            setActiveId: N,
            isMinimized: W
          },
          "root-variations",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 187,
            columnNumber: 9
          },
          this
        )
      ), s.add("root-variations");
    }
    return Array.from(V.entries()).forEach(([l]) => {
      if (!s.has(l) && Y.has(l)) {
        const G = Y.get(l);
        m.push(
          /* @__PURE__ */ u.jsxDEV(
            Jg,
            {
              group: l,
              variations: G,
              activeIds: V,
              setActiveId: N,
              isMinimized: W
            },
            l,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 204,
              columnNumber: 11
            },
            this
          )
        ), s.add(l);
      }
    }), m.length === 0 ? /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty", children: [
      /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ u.jsxDEV("code", { className: "jsx-471313454", children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 222,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ u.jsxDEV(B, { id: "471313454", children: `.variations-empty.jsx-471313454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 16px;text-align:center;gap:4px;}.variations-empty-title.jsx-471313454{font-size:13px;font-weight:500;color:#666;}.variations-empty-text.jsx-471313454{font-size:11px;color:#999;}code.jsx-471313454{font-family:var(--font-geist-mono);font-size:11px;padding:1px 4px;background:rgba(0,0,0,0.03);border-radius:4px;}@media (prefers-color-scheme:dark){.variations-empty-title.jsx-471313454{color:#999;}.variations-empty-text.jsx-471313454{color:#666;}code.jsx-471313454{background:rgba(255,255,255,0.1);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStOc0IsQUFHNEIsQUFVRSxBQUtBLEFBSW9CLEFBUXRCLEFBR0EsQUFHeUIsV0FMdEMsQUFHQSxJQXBCZ0IsQUFLTCxXQUNiLEtBTGEsRUFzQlgsRUFkZSxPQVBqQixRQVFrQixnQkFDZSxRQXJCVCxvQkFzQkosa0JBQ3BCLHdDQXRCcUIsNkZBQ0ksbUdBQ0wsa0JBQ0Esa0JBQ1YsUUFDViIsImZpbGUiOiIvVXNlcnMvZHBlcnJlcmEvUHJvamVjdHMvdmFyaWF0aW9ucy9zcmMvVmFyaWF0aW9uc0NvbnRyb2xzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWYXJpYXRpb25zUG9zaXRpb24gfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlVmFyaWF0aW9ucyB9IGZyb20gXCIuL1ZhcmlhdGlvbnNQcm92aWRlclwiO1xuXG5pbnRlcmZhY2UgVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMge1xuICBwb3NpdGlvbj86IFZhcmlhdGlvbnNQb3NpdGlvbjtcbiAgbWluaW1pemVkQnlEZWZhdWx0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgVmFyaWF0aW9uR3JvdXAgPSAoe1xuICBncm91cCxcbiAgdmFyaWF0aW9ucyxcbiAgYWN0aXZlSWRzLFxuICBzZXRBY3RpdmVJZCxcbiAgaXNNaW5pbWl6ZWQsXG59OiB7XG4gIGdyb3VwOiBzdHJpbmc7XG4gIHZhcmlhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPjtcbiAgYWN0aXZlSWRzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXRBY3RpdmVJZDogKGdyb3VwOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzTWluaW1pemVkOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBncm91cExhYmVsID0gdmFyaWF0aW9uc1swXT8uWzFdPy5ncm91cExhYmVsO1xuICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZUlkcy5nZXQoZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tZ3JvdXBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXRpdGxlXCJcbiAgICAgICAgdGl0bGU9e2dyb3VwTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtncm91cExhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtc2VsZWN0c1wiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgdmFsdWU9e2FjdGl2ZUlkIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRBY3RpdmVJZChncm91cCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXNlbGVjdFwiXG4gICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gLTEgOiAwfVxuICAgICAgICAgIHRpdGxlPXt2YXJpYXRpb25zLmZpbmQoKFtpZF0pID0+IGlkID09PSBhY3RpdmVJZCk/LlsxXT8ubGFiZWwgfHwgXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YXJpYXRpb25zLm1hcCgoW2lkLCB7IGxhYmVsIH1dKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXA6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLXNlbGVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGZsZXg6IDEgMCA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAyNHB4IDRweCA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nJTIzOTk5OTk5JyBzdHJva2Utd2lkdGg9JzEuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdDpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzExMTExMScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWYXJpYXRpb25zQ29udHJvbHMoe1xuICBwb3NpdGlvbiA9IFwiYm90dG9tLXJpZ2h0XCIsXG4gIG1pbmltaXplZEJ5RGVmYXVsdCA9IHRydWUsXG59OiBWYXJpYXRpb25zQ29udHJvbHNQcm9wcykge1xuICBjb25zdCBbaXNNaW5pbWl6ZWQsIHNldElzTWluaW1pemVkXSA9IHVzZVN0YXRlKG1pbmltaXplZEJ5RGVmYXVsdCk7XG4gIGNvbnN0IHsgYWN0aXZlSWRzLCBzZXRBY3RpdmVJZCwgdmFyaWF0aW9ucyB9ID0gdXNlVmFyaWF0aW9ucygpO1xuXG4gIC8vIEdyb3VwIHZhcmlhdGlvbnMgYnkgZ3JvdXBcbiAgY29uc3QgdmFyaWF0aW9uR3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxcbiAgICAgIHN0cmluZyxcbiAgICAgIEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPlxuICAgID4oKTtcblxuICAgIEFycmF5LmZyb20odmFyaWF0aW9ucy5lbnRyaWVzKCkpLmZvckVhY2goKFtpZCwgdmFyaWF0aW9uXSkgPT4ge1xuICAgICAgY29uc3QgeyBncm91cCwgbGFiZWw6IHZhcmlhdGlvbkxhYmVsLCBncm91cExhYmVsIH0gPSB2YXJpYXRpb247XG4gICAgICBpZiAoIWdyb3Vwcy5oYXMoZ3JvdXApKSB7XG4gICAgICAgIGdyb3Vwcy5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwcy5nZXQoZ3JvdXApIS5wdXNoKFtpZCwgeyBsYWJlbDogdmFyaWF0aW9uTGFiZWwsIGdyb3VwTGFiZWwgfV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIFt2YXJpYXRpb25zXSk7XG5cbiAgLy8gUmVuZGVyIHZhcmlhdGlvbiBncm91cHMgYmFzZWQgb24gYWN0aXZlIElEc1xuICBjb25zdCByZW5kZXJWYXJpYXRpb25Hcm91cHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZEdyb3VwcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gRmlyc3QgYWRkIHJvb3QgdmFyaWF0aW9uc1xuICAgIGlmICh2YXJpYXRpb25Hcm91cHMuaGFzKFwicm9vdC12YXJpYXRpb25zXCIpKSB7XG4gICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChcInJvb3QtdmFyaWF0aW9uc1wiKSE7XG4gICAgICBncm91cHMucHVzaChcbiAgICAgICAgPFZhcmlhdGlvbkdyb3VwXG4gICAgICAgICAga2V5PVwicm9vdC12YXJpYXRpb25zXCJcbiAgICAgICAgICBncm91cD1cInJvb3QtdmFyaWF0aW9uc1wiXG4gICAgICAgICAgdmFyaWF0aW9ucz17dmFyaWF0aW9uc31cbiAgICAgICAgICBhY3RpdmVJZHM9e2FjdGl2ZUlkc31cbiAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgaXNNaW5pbWl6ZWQ9e2lzTWluaW1pemVkfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIHByb2Nlc3NlZEdyb3Vwcy5hZGQoXCJyb290LXZhcmlhdGlvbnNcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlbiBhZGQgYWxsIG90aGVyIGdyb3VwcyB0aGF0IGhhdmUgYWN0aXZlIElEc1xuICAgIEFycmF5LmZyb20oYWN0aXZlSWRzLmVudHJpZXMoKSkuZm9yRWFjaCgoW2dyb3VwXSkgPT4ge1xuICAgICAgaWYgKCFwcm9jZXNzZWRHcm91cHMuaGFzKGdyb3VwKSAmJiB2YXJpYXRpb25Hcm91cHMuaGFzKGdyb3VwKSkge1xuICAgICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChncm91cCkhO1xuICAgICAgICBncm91cHMucHVzaChcbiAgICAgICAgICA8VmFyaWF0aW9uR3JvdXBcbiAgICAgICAgICAgIGtleT17Z3JvdXB9XG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICB2YXJpYXRpb25zPXt2YXJpYXRpb25zfVxuICAgICAgICAgICAgYWN0aXZlSWRzPXthY3RpdmVJZHN9XG4gICAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgICBpc01pbmltaXplZD17aXNNaW5pbWl6ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgcHJvY2Vzc2VkR3JvdXBzLmFkZChncm91cCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5LXRpdGxlXCI+Tm8gVmFyaWF0aW9ucyBGb3VuZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1lbXB0eS10ZXh0XCI+XG4gICAgICAgICAgICBBZGQgYSA8Y29kZT57YDxWYXJpYXRpb25zPmB9PC9jb2RlPiBjb21wb25lbnQhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nZWlzdC1tb25vKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9O1xuXG4gIGNvbnN0IGFsbEdyb3VwcyA9IHJlbmRlclZhcmlhdGlvbkdyb3VwcygpO1xuXG4gIC8vIEFkZCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUuY29kZSA9PT0gXCJLZXlWXCIgJiZcbiAgICAgICAgZS5hbHRLZXkgJiZcbiAgICAgICAgIWUuY3RybEtleSAmJlxuICAgICAgICAhZS5zaGlmdEtleSAmJlxuICAgICAgICAhZS5tZXRhS2V5XG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGFueSBkZWZhdWx0IGFsdCt2IGJlaGF2aW9yXG4gICAgICAgIHNldElzTWluaW1pemVkKChwcmV2KSA9PiAhcHJldik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtY29udHJvbHMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHZhcmlhdGlvbnMtY29udHJvbHMgJHtpc01pbmltaXplZCA/IFwibWluaW1pemVkXCIgOiBcIlwifWB9PlxuICAgICAgICB7aXNNaW5pbWl6ZWQgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1jaXJjbGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNaW5pbWl6ZWQoZmFsc2UpfVxuICAgICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gMCA6IC0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTM2IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NiAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiAxNy45MTJhMSAxIDAgMCAwIDAgMS40MTVsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTVsLTIuMzc3LTIuMzc2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgNC42NzRhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MzYgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc2IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgMTcuOTEyYTEgMSAwIDAgMCAwIDEuNDE1bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE1bC0yLjM3Ny0yLjM3NmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiA0LjY3NGExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICBWYXJpYXRpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01pbmltaXplZCh0cnVlKX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNNaW5pbWl6ZWQgPyAtMSA6IDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1ncm91cHNcIj57YWxsR3JvdXBzfTwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGUge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGU6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDJweCAwIDEwcHg7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDMwLCAxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNpcmNsZTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAzMCwgMC45KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this) : m;
  })();
  return H.useEffect(() => {
    const m = (s) => {
      s.code === "KeyV" && s.altKey && !s.ctrlKey && !s.shiftKey && !s.metaKey && (s.preventDefault(), x((l) => !l));
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, []), /* @__PURE__ */ u.jsxDEV("div", { className: B.dynamic([["1417769804", [
    g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;",
    g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;",
    g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "",
    g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "",
    g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "",
    g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "",
    g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;",
    g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;",
    g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "",
    g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "",
    g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "",
    g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""
  ]]]) + " variations-controls-container", children: [
    /* @__PURE__ */ u.jsxDEV("div", { className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + ` variations-controls ${W ? "minimized" : ""}`, children: W ? /* @__PURE__ */ u.jsxDEV("button", { onClick: () => x(!1), tabIndex: W ? 0 : -1, className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-circle", children: /* @__PURE__ */ u.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]), children: [
      /* @__PURE__ */ u.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 425,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 426,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 427,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 428,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 424,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 423,
      columnNumber: 24
    }, this) : /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxDEV("div", { className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header", children: [
        /* @__PURE__ */ u.jsxDEV("div", { className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header-title", children: [
          /* @__PURE__ */ u.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "square", strokeLinejoin: "round", style: { marginRight: "6px", position: "relative" }, className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]), children: [
            /* @__PURE__ */ u.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 434,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 436,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 437,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 433,
            columnNumber: 17
          }, this),
          "Variations"
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 432,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ u.jsxDEV("button", { onClick: () => x(!0), tabIndex: W ? -1 : 0, className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header-toggle", children: "×" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 441,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 431,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ u.jsxDEV("div", { className: B.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variation-groups", children: w }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 446,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 430,
      columnNumber: 23
    }, this) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 422,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ u.jsxDEV(B, { id: "1417769804", dynamic: [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""], children: `.variations-controls.__jsx-style-dynamic-selector{font-family:system-ui,-apple-system,sans-serif;position:fixed;${g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"} ${g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"} ${g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : ""} ${g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : ""} ${g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : ""} ${g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""} width:280px;height:auto;max-height:calc(100vh - 32px);z-index:100;background:rgba(255,255,255);border-radius:10px;overflow:auto;box-shadow:0 0 0 1px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.08);padding:0;}.variations-controls.minimized.__jsx-style-dynamic-selector{width:32px;height:32px;padding:0;border-radius:16px;background:white;${g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"} ${g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"} ${g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : ""} ${g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : ""} ${g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : ""} ${g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""};}.variations-circle.__jsx-style-dynamic-selector{width:32px;height:32px;padding:0;border:none;background:none;color:#666;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.variations-circle.__jsx-style-dynamic-selector:focus{background:rgba(0,0,0,1);color:#ffffff;border-radius:4px;outline:none;}.variations-header.__jsx-style-dynamic-selector{background:rgba(255,255,255,0.6);position:-webkit-sticky;position:sticky;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2px 2px 0 10px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);}.variations-header-title.__jsx-style-dynamic-selector{font-family:system-ui,-apple-system,sans-serif;font-size:8px;text-transform:uppercase;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;line-height:12px;font-weight:700;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.variations-header-toggle.__jsx-style-dynamic-selector{background:none;border:none;color:#999;cursor:pointer;font-size:16px;line-height:0px;font-weight:500;padding:0;padding-bottom:2px;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:2px;border-top-right-radius:8px;}.variations-header-toggle.__jsx-style-dynamic-selector:hover{color:#111111;}.variations-header-toggle.__jsx-style-dynamic-selector:focus{background:#111111;color:#ffffff;outline:none;}.variation-groups.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2px;}@media (prefers-color-scheme:dark){.variations-controls.__jsx-style-dynamic-selector{background:rgba(28,28,30,1);box-shadow:0 0 0 1px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.4),0 2px 8px rgba(0,0,0,0.3);}.variations-controls.minimized.__jsx-style-dynamic-selector{background:rgb(28,28,30);}.variations-circle.__jsx-style-dynamic-selector{color:#fff;}.variations-circle.__jsx-style-dynamic-selector:focus{background:rgba(255,255,255,0.1);color:#ffffff;border-radius:4px;outline:none;}.variations-header.__jsx-style-dynamic-selector{background:rgba(28,28,30,0.9);}.variations-header-toggle.__jsx-style-dynamic-selector{color:#999;}.variations-header-toggle.__jsx-style-dynamic-selector:hover{color:#ffffff;}.variations-header-toggle.__jsx-style-dynamic-selector:focus{background:white;color:#111111;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Xa0IsQUFHNEQsQUFxQnRDLEFBY0EsQUFhaUIsQUFPUSxBQWFhLEFBWWpDLEFBa0JGLEFBR0ssQUFNTixBQU9vQixBQU1KLEFBSWhCLEFBSXlCLEFBT0gsQUFJdEIsQUFHRyxBQUdHLFdBM0hQLEFBY0EsQUF5RlosQUFlQSxHQXpDRixBQTRDRSxFQTlEWSxDQWlFSSxFQTVDRixJQS9FSixBQWNBLEVBWUksQUF3RWQsR0F2Q1csQUFrQ29ELEVBb0IvRCxDQVdBLEVBM0htQixBQWNQLEFBa0JJLEFBK0NILEFBMEJHLE1BL0VFLEFBaUNILE1BNUNDLENBaUVsQixDQXZHaUIsQUFvRUQsQUE2RE0sS0F6R0gsRUEyREYsR0FqQ0YsSUFYRixBQThCYyxDQTlEYixHQTJIRyxJQW5HbEIsQUFxRG1CLENBakNsQixFQVhpQixDQWdCVCxDQW1EZ0IsSUF3QnRCLENBMUVXLE1BNEJLLENBZk0sQ0E3QlQsR0FpQkEsV0E0QkgsVUFDUyxjQTZCbkIsS0E1QlcsV0FDQyxXQW1CQSxDQWxCQyxRQWhETSxHQWlCQSxBQWtEckIsMkJBdENtQixpQkFDRCxnQkFDTCxHQWtCUSxNQS9CVyxFQWNqQixVQTNDZixHQXZCYyxNQW1DVyxNQWxDTyw4QkFDbEIsWUFDbUIsT0FnRVosV0FpQkksV0FoRkosaUJBaURBLEVBaERMLEdBK0JoQixXQTdCaUUsc0NBNkRqRSxpQkFpQm9CLGtCQUNVLElBaENMLGlCQTlDYixNQStDZ0IsQ0FnQzVCLEdBOUVBLHdEQStDQSIsImZpbGUiOiIvVXNlcnMvZHBlcnJlcmEvUHJvamVjdHMvdmFyaWF0aW9ucy9zcmMvVmFyaWF0aW9uc0NvbnRyb2xzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWYXJpYXRpb25zUG9zaXRpb24gfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlVmFyaWF0aW9ucyB9IGZyb20gXCIuL1ZhcmlhdGlvbnNQcm92aWRlclwiO1xuXG5pbnRlcmZhY2UgVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMge1xuICBwb3NpdGlvbj86IFZhcmlhdGlvbnNQb3NpdGlvbjtcbiAgbWluaW1pemVkQnlEZWZhdWx0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgVmFyaWF0aW9uR3JvdXAgPSAoe1xuICBncm91cCxcbiAgdmFyaWF0aW9ucyxcbiAgYWN0aXZlSWRzLFxuICBzZXRBY3RpdmVJZCxcbiAgaXNNaW5pbWl6ZWQsXG59OiB7XG4gIGdyb3VwOiBzdHJpbmc7XG4gIHZhcmlhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPjtcbiAgYWN0aXZlSWRzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXRBY3RpdmVJZDogKGdyb3VwOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzTWluaW1pemVkOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBncm91cExhYmVsID0gdmFyaWF0aW9uc1swXT8uWzFdPy5ncm91cExhYmVsO1xuICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZUlkcy5nZXQoZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tZ3JvdXBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXRpdGxlXCJcbiAgICAgICAgdGl0bGU9e2dyb3VwTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtncm91cExhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtc2VsZWN0c1wiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgdmFsdWU9e2FjdGl2ZUlkIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRBY3RpdmVJZChncm91cCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXNlbGVjdFwiXG4gICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gLTEgOiAwfVxuICAgICAgICAgIHRpdGxlPXt2YXJpYXRpb25zLmZpbmQoKFtpZF0pID0+IGlkID09PSBhY3RpdmVJZCk/LlsxXT8ubGFiZWwgfHwgXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YXJpYXRpb25zLm1hcCgoW2lkLCB7IGxhYmVsIH1dKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXA6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLXNlbGVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGZsZXg6IDEgMCA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAyNHB4IDRweCA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nJTIzOTk5OTk5JyBzdHJva2Utd2lkdGg9JzEuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdDpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzExMTExMScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWYXJpYXRpb25zQ29udHJvbHMoe1xuICBwb3NpdGlvbiA9IFwiYm90dG9tLXJpZ2h0XCIsXG4gIG1pbmltaXplZEJ5RGVmYXVsdCA9IHRydWUsXG59OiBWYXJpYXRpb25zQ29udHJvbHNQcm9wcykge1xuICBjb25zdCBbaXNNaW5pbWl6ZWQsIHNldElzTWluaW1pemVkXSA9IHVzZVN0YXRlKG1pbmltaXplZEJ5RGVmYXVsdCk7XG4gIGNvbnN0IHsgYWN0aXZlSWRzLCBzZXRBY3RpdmVJZCwgdmFyaWF0aW9ucyB9ID0gdXNlVmFyaWF0aW9ucygpO1xuXG4gIC8vIEdyb3VwIHZhcmlhdGlvbnMgYnkgZ3JvdXBcbiAgY29uc3QgdmFyaWF0aW9uR3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxcbiAgICAgIHN0cmluZyxcbiAgICAgIEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPlxuICAgID4oKTtcblxuICAgIEFycmF5LmZyb20odmFyaWF0aW9ucy5lbnRyaWVzKCkpLmZvckVhY2goKFtpZCwgdmFyaWF0aW9uXSkgPT4ge1xuICAgICAgY29uc3QgeyBncm91cCwgbGFiZWw6IHZhcmlhdGlvbkxhYmVsLCBncm91cExhYmVsIH0gPSB2YXJpYXRpb247XG4gICAgICBpZiAoIWdyb3Vwcy5oYXMoZ3JvdXApKSB7XG4gICAgICAgIGdyb3Vwcy5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwcy5nZXQoZ3JvdXApIS5wdXNoKFtpZCwgeyBsYWJlbDogdmFyaWF0aW9uTGFiZWwsIGdyb3VwTGFiZWwgfV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIFt2YXJpYXRpb25zXSk7XG5cbiAgLy8gUmVuZGVyIHZhcmlhdGlvbiBncm91cHMgYmFzZWQgb24gYWN0aXZlIElEc1xuICBjb25zdCByZW5kZXJWYXJpYXRpb25Hcm91cHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZEdyb3VwcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gRmlyc3QgYWRkIHJvb3QgdmFyaWF0aW9uc1xuICAgIGlmICh2YXJpYXRpb25Hcm91cHMuaGFzKFwicm9vdC12YXJpYXRpb25zXCIpKSB7XG4gICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChcInJvb3QtdmFyaWF0aW9uc1wiKSE7XG4gICAgICBncm91cHMucHVzaChcbiAgICAgICAgPFZhcmlhdGlvbkdyb3VwXG4gICAgICAgICAga2V5PVwicm9vdC12YXJpYXRpb25zXCJcbiAgICAgICAgICBncm91cD1cInJvb3QtdmFyaWF0aW9uc1wiXG4gICAgICAgICAgdmFyaWF0aW9ucz17dmFyaWF0aW9uc31cbiAgICAgICAgICBhY3RpdmVJZHM9e2FjdGl2ZUlkc31cbiAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgaXNNaW5pbWl6ZWQ9e2lzTWluaW1pemVkfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIHByb2Nlc3NlZEdyb3Vwcy5hZGQoXCJyb290LXZhcmlhdGlvbnNcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlbiBhZGQgYWxsIG90aGVyIGdyb3VwcyB0aGF0IGhhdmUgYWN0aXZlIElEc1xuICAgIEFycmF5LmZyb20oYWN0aXZlSWRzLmVudHJpZXMoKSkuZm9yRWFjaCgoW2dyb3VwXSkgPT4ge1xuICAgICAgaWYgKCFwcm9jZXNzZWRHcm91cHMuaGFzKGdyb3VwKSAmJiB2YXJpYXRpb25Hcm91cHMuaGFzKGdyb3VwKSkge1xuICAgICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChncm91cCkhO1xuICAgICAgICBncm91cHMucHVzaChcbiAgICAgICAgICA8VmFyaWF0aW9uR3JvdXBcbiAgICAgICAgICAgIGtleT17Z3JvdXB9XG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICB2YXJpYXRpb25zPXt2YXJpYXRpb25zfVxuICAgICAgICAgICAgYWN0aXZlSWRzPXthY3RpdmVJZHN9XG4gICAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgICBpc01pbmltaXplZD17aXNNaW5pbWl6ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgcHJvY2Vzc2VkR3JvdXBzLmFkZChncm91cCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5LXRpdGxlXCI+Tm8gVmFyaWF0aW9ucyBGb3VuZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1lbXB0eS10ZXh0XCI+XG4gICAgICAgICAgICBBZGQgYSA8Y29kZT57YDxWYXJpYXRpb25zPmB9PC9jb2RlPiBjb21wb25lbnQhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nZWlzdC1tb25vKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9O1xuXG4gIGNvbnN0IGFsbEdyb3VwcyA9IHJlbmRlclZhcmlhdGlvbkdyb3VwcygpO1xuXG4gIC8vIEFkZCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUuY29kZSA9PT0gXCJLZXlWXCIgJiZcbiAgICAgICAgZS5hbHRLZXkgJiZcbiAgICAgICAgIWUuY3RybEtleSAmJlxuICAgICAgICAhZS5zaGlmdEtleSAmJlxuICAgICAgICAhZS5tZXRhS2V5XG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGFueSBkZWZhdWx0IGFsdCt2IGJlaGF2aW9yXG4gICAgICAgIHNldElzTWluaW1pemVkKChwcmV2KSA9PiAhcHJldik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtY29udHJvbHMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHZhcmlhdGlvbnMtY29udHJvbHMgJHtpc01pbmltaXplZCA/IFwibWluaW1pemVkXCIgOiBcIlwifWB9PlxuICAgICAgICB7aXNNaW5pbWl6ZWQgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1jaXJjbGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNaW5pbWl6ZWQoZmFsc2UpfVxuICAgICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gMCA6IC0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTM2IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NiAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiAxNy45MTJhMSAxIDAgMCAwIDAgMS40MTVsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTVsLTIuMzc3LTIuMzc2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgNC42NzRhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MzYgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc2IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgMTcuOTEyYTEgMSAwIDAgMCAwIDEuNDE1bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE1bC0yLjM3Ny0yLjM3NmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiA0LjY3NGExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICBWYXJpYXRpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01pbmltaXplZCh0cnVlKX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNNaW5pbWl6ZWQgPyAtMSA6IDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1ncm91cHNcIj57YWxsR3JvdXBzfTwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGUge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGU6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDJweCAwIDEwcHg7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDMwLCAxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNpcmNsZTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAzMCwgMC45KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 292,
    columnNumber: 5
  }, this);
}
export {
  Fg as Variation,
  Ug as Variations,
  gI as VariationsControls,
  $g as VariationsProvider
};
