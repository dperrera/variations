import F, { createContext as kg, useState as ug, useMemo as Ig, useCallback as Ng, useContext as Rg, useEffect as Dg } from "react";
function Lg(g) {
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
var wg;
function Sg() {
  if (wg) return cg;
  wg = 1;
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
function Og() {
  return Bg || (Bg = 1, process.env.NODE_ENV !== "production" && function() {
    function g(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === j ? null : I.displayName || I.name || null;
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
          case l:
            return (I._context.displayName || "Context") + ".Consumer";
          case n:
            var c = I.render;
            return I = I.displayName, I || (I = c.displayName || c.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case a:
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
    function m(I) {
      return "" + I;
    }
    function p(I) {
      try {
        m(I);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var t = c.error, x = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return t.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), m(I);
      }
    }
    function W() {
    }
    function V() {
      if ($ === 0) {
        mg = console.log, Xg = console.info, og = console.warn, Gg = console.error, xg = console.group, Zg = console.groupCollapsed, yg = console.groupEnd;
        var I = {
          configurable: !0,
          enumerable: !0,
          value: W,
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
          log: L({}, I, { value: mg }),
          info: L({}, I, { value: Xg }),
          warn: L({}, I, { value: og }),
          error: L({}, I, { value: Gg }),
          group: L({}, I, { value: xg }),
          groupCollapsed: L({}, I, { value: Zg }),
          groupEnd: L({}, I, { value: yg })
        });
      }
      0 > $ && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(I) {
      if (ng === void 0)
        try {
          throw Error();
        } catch (t) {
          var c = t.stack.trim().match(/\n( *(at )?)/);
          ng = c && c[1] || "", Wg = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ng + I + Wg;
    }
    function B(I, c) {
      if (!I || rg) return "";
      var t = dg.get(I);
      if (t !== void 0) return t;
      rg = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var x = null;
      x = D.H, D.H = null, V();
      try {
        var v = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var k = function() {
                  throw Error();
                };
                if (Object.defineProperty(k.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(k, []);
                  } catch (H) {
                    var Ag = H;
                  }
                  Reflect.construct(I, [], k);
                } else {
                  try {
                    k.call();
                  } catch (H) {
                    Ag = H;
                  }
                  I.call(k.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (H) {
                  Ag = H;
                }
                (k = I()) && typeof k.catch == "function" && k.catch(function() {
                });
              }
            } catch (H) {
              if (H && Ag && typeof H.stack == "string")
                return [H.stack, Ag.stack];
            }
            return [null, null];
          }
        };
        v.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var h = Object.getOwnPropertyDescriptor(
          v.DetermineComponentFrameRoot,
          "name"
        );
        h && h.configurable && Object.defineProperty(
          v.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var i = v.DetermineComponentFrameRoot(), z = i[0], E = i[1];
        if (z && E) {
          var J = z.split(`
`), S = E.split(`
`);
          for (i = h = 0; h < J.length && !J[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          for (; i < S.length && !S[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          if (h === J.length || i === S.length)
            for (h = J.length - 1, i = S.length - 1; 1 <= h && 0 <= i && J[h] !== S[i]; )
              i--;
          for (; 1 <= h && 0 <= i; h--, i--)
            if (J[h] !== S[i]) {
              if (h !== 1 || i !== 1)
                do
                  if (h--, i--, 0 > i || J[h] !== S[i]) {
                    var gg = `
` + J[h].replace(
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
        rg = !1, D.H = x, N(), Error.prepareStackTrace = t;
      }
      return J = (J = I ? I.displayName || I.name : "") ? o(J) : "", typeof I == "function" && dg.set(I, J), J;
    }
    function Z(I) {
      if (I == null) return "";
      if (typeof I == "function") {
        var c = I.prototype;
        return B(
          I,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof I == "string") return o(I);
      switch (I) {
        case C:
          return o("Suspense");
        case A:
          return o("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case n:
            return I = B(I.render, !1), I;
          case a:
            return Z(I.type);
          case d:
            c = I._payload, I = I._init;
            try {
              return Z(I(c));
            } catch {
            }
        }
      return "";
    }
    function b() {
      var I = D.A;
      return I === null ? null : I.getOwner();
    }
    function X(I) {
      if (sg.call(I, "key")) {
        var c = Object.getOwnPropertyDescriptor(I, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function s(I, c) {
      function t() {
        hg || (hg = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: t,
        configurable: !0
      });
    }
    function r() {
      var I = g(this.type);
      return fg[I] || (fg[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function y(I, c, t, x, v, h) {
      return t = h.ref, I = {
        $$typeof: P,
        type: I,
        key: c,
        props: h,
        _owner: v
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: r
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
    function Y(I, c, t, x, v, h) {
      if (typeof I == "string" || typeof I == "function" || I === K || I === q || I === _ || I === C || I === A || I === f || typeof I == "object" && I !== null && (I.$$typeof === d || I.$$typeof === a || I.$$typeof === e || I.$$typeof === l || I.$$typeof === n || I.$$typeof === Fg || I.getModuleId !== void 0)) {
        var i = c.children;
        if (i !== void 0)
          if (x)
            if (ag(i)) {
              for (x = 0; x < i.length; x++)
                G(i[x], I);
              Object.freeze && Object.freeze(i);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else G(i, I);
      } else
        i = "", (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), I === null ? x = "null" : ag(I) ? x = "array" : I !== void 0 && I.$$typeof === P ? (x = "<" + (g(I.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : x = typeof I, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          x,
          i
        );
      if (sg.call(c, "key")) {
        i = g(I);
        var z = Object.keys(c).filter(function(J) {
          return J !== "key";
        });
        x = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", Yg[i + x] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          i,
          z,
          i
        ), Yg[i + x] = !0);
      }
      if (i = null, t !== void 0 && (p(t), i = "" + t), X(c) && (p(c.key), i = "" + c.key), "key" in c) {
        t = {};
        for (var E in c)
          E !== "key" && (t[E] = c[E]);
      } else t = c;
      return i && s(
        t,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), y(I, i, h, v, b(), t);
    }
    function G(I, c) {
      if (typeof I == "object" && I && I.$$typeof !== jg) {
        if (ag(I))
          for (var t = 0; t < I.length; t++) {
            var x = I[t];
            M(x) && O(x, c);
          }
        else if (M(I))
          I._store && (I._store.validated = 1);
        else if (I === null || typeof I != "object" ? t = null : (t = R && I[R] || I["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== I.entries && (t = t.call(I), t !== I))
          for (; !(I = t.next()).done; )
            M(I.value) && O(I.value, c);
      }
    }
    function M(I) {
      return typeof I == "object" && I !== null && I.$$typeof === P;
    }
    function O(I, c) {
      if (I._store && !I._store.validated && I.key == null && (I._store.validated = 1, c = T(c), !pg[c])) {
        pg[c] = !0;
        var t = "";
        I && I._owner != null && I._owner !== b() && (t = null, typeof I._owner.tag == "number" ? t = g(I._owner.type) : typeof I._owner.name == "string" && (t = I._owner.name), t = " It was passed a child from " + t + ".");
        var x = D.getCurrentStack;
        D.getCurrentStack = function() {
          var v = Z(I.type);
          return x && (v += x() || ""), v;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          t
        ), D.getCurrentStack = x;
      }
    }
    function T(I) {
      var c = "", t = b();
      return t && (t = g(t.type)) && (c = `

Check the render method of \`` + t + "`."), c || (I = g(I)) && (c = `

Check the top-level render call using <` + I + ">."), c;
    }
    var U = F, P = Symbol.for("react.transitional.element"), Cg = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), e = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), R = Symbol.iterator, j = Symbol.for("react.client.reference"), D = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sg = Object.prototype.hasOwnProperty, L = Object.assign, Fg = Symbol.for("react.client.reference"), ag = Array.isArray, $ = 0, mg, Xg, og, Gg, xg, Zg, yg;
    W.__reactDisabledLog = !0;
    var ng, Wg, rg = !1, dg = new (typeof WeakMap == "function" ? WeakMap : Map)(), jg = Symbol.for("react.client.reference"), hg, fg = {}, Yg = {}, pg = {};
    tg.Fragment = K, tg.jsxDEV = function(I, c, t, x, v, h) {
      return Y(I, c, t, x, v, h);
    };
  }()), tg;
}
var Vg;
function Tg() {
  return Vg || (Vg = 1, process.env.NODE_ENV === "production" ? eg.exports = Sg() : eg.exports = Og()), eg.exports;
}
var u = Tg();
const bg = kg(
  null
), zg = () => {
  const g = Rg(bg);
  if (!g)
    throw new Error("useVariations must be used within a VariationsProvider");
  return g;
};
function $g({ children: g }) {
  const [m, p] = ug(
    /* @__PURE__ */ new Map()
  ), [W, V] = ug(
    /* @__PURE__ */ new Map()
  ), N = Ig(() => {
    const b = m.get("root-variations");
    if (!b) return null;
    const X = (r, y) => {
      const Y = {
        id: r,
        group: y,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(W.entries()).forEach(([, G]) => {
        if (G.parentId === r) {
          const M = m.get(G.group);
          M && Y.children.set(
            G.group,
            X(M, G.group)
          );
        }
      }), Y;
    };
    return X(b, "root-variations");
  }, [m, W]), o = Ng(
    (b, X) => {
      p((s) => {
        const r = new Map(s);
        return r.set(b, X), b === "root-variations" ? Array.from(s.keys()).forEach((y) => {
          y !== "root-variations" && r.delete(y);
        }) : Array.from(W.entries()).find(
          ([Y]) => Y === X
        ) && Array.from(s.keys()).forEach((Y) => {
          const G = Array.from(W.entries()).find(
            ([, M]) => M.group === Y
          );
          G && G[1].parentId === X && r.delete(Y);
        }), r;
      });
    },
    [W]
  ), B = Ng(
    (b, X, s, r, y) => {
      V((Y) => {
        const G = Y.get(X);
        if ((G == null ? void 0 : G.group) === b && (G == null ? void 0 : G.label) === s && (G == null ? void 0 : G.groupLabel) === r && (G == null ? void 0 : G.parentId) === y)
          return Y;
        const M = new Map(Y);
        return M.set(X, { group: b, label: s, groupLabel: r, parentId: y }), M;
      });
    },
    []
  ), Z = Ig(
    () => ({
      activeIds: m,
      setActiveId: o,
      registerVariation: B,
      variations: W,
      activeTree: N
    }),
    [
      m,
      o,
      B,
      W,
      N
    ]
  );
  return /* @__PURE__ */ u.jsxDEV(bg.Provider, { value: Z, children: g }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 171,
    columnNumber: 5
  }, this);
}
function lg(g) {
  return g.toLowerCase().replace(/\s+/g, "-");
}
function Hg({
  group: g = "",
  label: m,
  id: p,
  groupLabel: W,
  parentId: V,
  children: N
}) {
  const o = Ig(() => p || lg(m), [p, m]), { activeIds: B, registerVariation: Z } = zg(), b = B.get(g) === o;
  return Dg(() => {
    if (!g) {
      console.error(
        `Variation Component Error: No group provided for variation "${m}"

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
   </Variations>`
      );
      return;
    }
    Z(g, o, m, W || g, V);
  }, [g, o, m, W, V, Z]), b ? /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: N }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this) : null;
}
const Eg = "root-variations";
function Qg(g) {
  return F.isValidElement(g) && g.type === Hg && typeof g.props.label == "string";
}
function Ug({
  isRoot: g = !1,
  label: m,
  children: p,
  parentId: W,
  group: V
}) {
  const N = Rg(bg);
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
  if (g && W)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const o = V || (g ? Eg : lg(m)), { activeIds: B, setActiveId: Z, variations: b } = N, X = Ig(() => {
    const r = /* @__PURE__ */ new Map();
    return Array.from(b.entries()).forEach(([y, Y]) => {
      const { group: G, label: M, groupLabel: O } = Y;
      r.has(G) || r.set(G, []), r.get(G).push([y, { label: M, groupLabel: O }]);
    }), r;
  }, [b]), s = Ig(() => F.Children.map(p, (r) => {
    if (F.isValidElement(r)) {
      if (r.type === Hg) {
        if (!Qg(r))
          throw new Error("Invalid Variation component");
        const y = r.props.id || lg(r.props.label);
        return F.cloneElement(r, {
          ...r.props,
          group: o,
          groupLabel: m,
          id: y,
          parentId: W
        });
      } else if (r.type === Ug) {
        const y = r, Y = B.get(o), G = lg(y.props.label);
        return F.cloneElement(y, {
          ...y.props,
          parentId: Y,
          group: G
        });
      }
    }
    return r;
  }), [p, o, m, B, W]);
  return Dg(() => {
    if (!B.has(o)) {
      const r = X.get(o);
      if (r && r.length > 0) {
        const [y] = r[0];
        Z(o, y);
      }
    }
  }, [o, X, B, Z]), /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: s }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
var Q = {}, Mg;
function Pg() {
  if (Mg) return Q;
  Mg = 1;
  var g = F;
  function m(l) {
    return l && typeof l == "object" && "default" in l ? l : { default: l };
  }
  var p = /* @__PURE__ */ m(g);
  function W(l, e) {
    for (var n = 0; n < e.length; n++) {
      var C = e[n];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(l, C.key, C);
    }
  }
  function V(l, e, n) {
    return W(l.prototype, e), l;
  }
  var N = typeof process < "u" && process.env && process.env.NODE_ENV === "production", o = function(l) {
    return Object.prototype.toString.call(l) === "[object String]";
  }, B = /* @__PURE__ */ function() {
    function l(n) {
      var C = n === void 0 ? {} : n, A = C.name, a = A === void 0 ? "stylesheet" : A, d = C.optimizeForSpeed, f = d === void 0 ? N : d;
      Z(o(a), "`name` must be a string"), this._name = a, this._deletedRulePlaceholder = "#" + a + "-deleted-rule____{}", Z(typeof f == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = f, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
      var R = typeof window < "u" && document.querySelector('meta[property="csp-nonce"]');
      this._nonce = R ? R.getAttribute("content") : null;
    }
    var e = l.prototype;
    return e.setOptimizeForSpeed = function(C) {
      Z(typeof C == "boolean", "`setOptimizeForSpeed` accepts a boolean"), Z(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = C, this.inject();
    }, e.isOptimizeForSpeed = function() {
      return this._optimizeForSpeed;
    }, e.inject = function() {
      var C = this;
      if (Z(!this._injected, "sheet already injected"), this._injected = !0, typeof window < "u" && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (N || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
        return;
      }
      this._serverSheet = {
        cssRules: [],
        insertRule: function(A, a) {
          return typeof a == "number" ? C._serverSheet.cssRules[a] = {
            cssText: A
          } : C._serverSheet.cssRules.push({
            cssText: A
          }), a;
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
      if (Z(o(C), "`insertRule` accepts only strings"), typeof window > "u")
        return typeof A != "number" && (A = this._serverSheet.cssRules.length), this._serverSheet.insertRule(C, A), this._rulesCount++;
      if (this._optimizeForSpeed) {
        var a = this.getSheet();
        typeof A != "number" && (A = a.cssRules.length);
        try {
          a.insertRule(C, A);
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
        var a = typeof window < "u" ? this.getSheet() : this._serverSheet;
        if (A.trim() || (A = this._deletedRulePlaceholder), !a.cssRules[C])
          return C;
        a.deleteRule(C);
        try {
          a.insertRule(A, C);
        } catch {
          N || console.warn(`StyleSheet: illegal rule: 

` + A + `

See https://stackoverflow.com/q/20007992 for more info`), a.insertRule(this._deletedRulePlaceholder, C);
        }
      } else {
        var d = this._tags[C];
        Z(d, "old rule at index `" + C + "` not found"), d.textContent = A;
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
        Z(A, "rule at index `" + C + "` not found"), A.parentNode.removeChild(A), this._tags[C] = null;
      }
    }, e.flush = function() {
      this._injected = !1, this._rulesCount = 0, typeof window < "u" ? (this._tags.forEach(function(C) {
        return C && C.parentNode.removeChild(C);
      }), this._tags = []) : this._serverSheet.cssRules = [];
    }, e.cssRules = function() {
      var C = this;
      return typeof window > "u" ? this._serverSheet.cssRules : this._tags.reduce(function(A, a) {
        return a ? A = A.concat(Array.prototype.map.call(C.getSheetForTag(a).cssRules, function(d) {
          return d.cssText === C._deletedRulePlaceholder ? null : d;
        })) : A.push(null), A;
      }, []);
    }, e.makeStyleTag = function(C, A, a) {
      A && Z(o(A), "makeStyleTag accepts only strings as second parameter");
      var d = document.createElement("style");
      this._nonce && d.setAttribute("nonce", this._nonce), d.type = "text/css", d.setAttribute("data-" + C, ""), A && d.appendChild(document.createTextNode(A));
      var f = document.head || document.getElementsByTagName("head")[0];
      return a ? f.insertBefore(d, a) : f.appendChild(d), d;
    }, V(l, [
      {
        key: "length",
        get: function() {
          return this._rulesCount;
        }
      }
    ]), l;
  }();
  function Z(l, e) {
    if (!l)
      throw new Error("StyleSheet: " + e + ".");
  }
  function b(l) {
    for (var e = 5381, n = l.length; n; )
      e = e * 33 ^ l.charCodeAt(--n);
    return e >>> 0;
  }
  var X = b, s = function(l) {
    return l.replace(/\/style/gi, "\\/style");
  }, r = {};
  function y(l, e) {
    if (!e)
      return "jsx-" + l;
    var n = String(e), C = l + n;
    return r[C] || (r[C] = "jsx-" + X(l + "-" + n)), r[C];
  }
  function Y(l, e) {
    var n = /__jsx-style-dynamic-selector/g;
    typeof window > "u" && (e = s(e));
    var C = l + e;
    return r[C] || (r[C] = e.replace(n, l)), r[C];
  }
  function G(l, e) {
    return e === void 0 && (e = {}), l.map(function(n) {
      var C = n[0], A = n[1];
      return /* @__PURE__ */ p.default.createElement("style", {
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
  var M = /* @__PURE__ */ function() {
    function l(n) {
      var C = n === void 0 ? {} : n, A = C.styleSheet, a = A === void 0 ? null : A, d = C.optimizeForSpeed, f = d === void 0 ? !1 : d;
      this._sheet = a || new B({
        name: "styled-jsx",
        optimizeForSpeed: f
      }), this._sheet.inject(), a && typeof f == "boolean" && (this._sheet.setOptimizeForSpeed(f), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
    }
    var e = l.prototype;
    return e.add = function(C) {
      var A = this;
      this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(C.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), typeof window < "u" && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(j, D) {
        return j[D] = 0, j;
      }, {}));
      var a = this.getIdAndRules(C), d = a.styleId, f = a.rules;
      if (d in this._instancesCounts) {
        this._instancesCounts[d] += 1;
        return;
      }
      var R = f.map(function(j) {
        return A._sheet.insertRule(j);
      }).filter(function(j) {
        return j !== -1;
      });
      this._indices[d] = R, this._instancesCounts[d] = 1;
    }, e.remove = function(C) {
      var A = this, a = this.getIdAndRules(C).styleId;
      if (O(a in this._instancesCounts, "styleId: `" + a + "` not found"), this._instancesCounts[a] -= 1, this._instancesCounts[a] < 1) {
        var d = this._fromServer && this._fromServer[a];
        d ? (d.parentNode.removeChild(d), delete this._fromServer[a]) : (this._indices[a].forEach(function(f) {
          return A._sheet.deleteRule(f);
        }), delete this._indices[a]), delete this._instancesCounts[a];
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
      }) : [], a = this._sheet.cssRules();
      return A.concat(Object.keys(this._indices).map(function(d) {
        return [
          d,
          C._indices[d].map(function(f) {
            return a[f].cssText;
          }).join(C._optimizeForSpeed ? "" : `
`)
        ];
      }).filter(function(d) {
        return !!d[1];
      }));
    }, e.styles = function(C) {
      return G(this.cssRules(), C);
    }, e.getIdAndRules = function(C) {
      var A = C.children, a = C.dynamic, d = C.id;
      if (a) {
        var f = y(d, a);
        return {
          styleId: f,
          rules: Array.isArray(A) ? A.map(function(R) {
            return Y(f, R);
          }) : [
            Y(f, A)
          ]
        };
      }
      return {
        styleId: y(d),
        rules: Array.isArray(A) ? A : [
          A
        ]
      };
    }, e.selectFromServer = function() {
      var C = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return C.reduce(function(A, a) {
        var d = a.id.slice(2);
        return A[d] = a, A;
      }, {});
    }, l;
  }();
  function O(l, e) {
    if (!l)
      throw new Error("StyleSheetRegistry: " + e + ".");
  }
  var T = /* @__PURE__ */ g.createContext(null);
  T.displayName = "StyleSheetContext";
  function U() {
    return new M();
  }
  function P(l) {
    var e = l.registry, n = l.children, C = g.useContext(T), A = g.useState(function() {
      return C || e || U();
    }), a = A[0];
    return /* @__PURE__ */ p.default.createElement(T.Provider, {
      value: a
    }, n);
  }
  function Cg() {
    return g.useContext(T);
  }
  var K = p.default.useInsertionEffect || p.default.useLayoutEffect, _ = typeof window < "u" ? U() : void 0;
  function q(l) {
    var e = _ || Cg();
    return e ? typeof window > "u" ? (e.add(l), null) : (K(function() {
      return e.add(l), function() {
        e.remove(l);
      };
    }, [
      l.id,
      String(l.dynamic)
    ]), null) : null;
  }
  return q.dynamic = function(l) {
    return l.map(function(e) {
      var n = e[0], C = e[1];
      return y(n, C);
    }).join(" ");
  }, Q.StyleRegistry = P, Q.createStyleRegistry = U, Q.style = q, Q.useStyleRegistry = Cg, Q;
}
var ig, Jg;
function Kg() {
  return Jg || (Jg = 1, ig = Pg().style), ig;
}
var _g = Kg();
const w = /* @__PURE__ */ Lg(_g), vg = ({
  group: g,
  variations: m,
  activeIds: p,
  setActiveId: W,
  isMinimized: V
}) => {
  var B, Z, b, X;
  const N = (Z = (B = m[0]) == null ? void 0 : B[1]) == null ? void 0 : Z.groupLabel, o = p.get(g);
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
        lineNumber: 28,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-3406677916 variations-selects", children: /* @__PURE__ */ u.jsxDEV(
      "select",
      {
        value: o || "",
        onChange: (s) => {
          W(g, s.target.value);
        },
        tabIndex: V ? -1 : 0,
        title: ((X = (b = m.find(([s]) => s === o)) == null ? void 0 : b[1]) == null ? void 0 : X.label) || "",
        className: "jsx-3406677916 variation-select",
        children: m.map(
          ([s, { label: r }]) => /* @__PURE__ */ u.jsxDEV(
            "option",
            {
              value: s,
              title: r,
              className: "jsx-3406677916",
              children: r
            },
            s,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 45,
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
        lineNumber: 35,
        columnNumber: 9
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ u.jsxDEV(w, { id: "3406677916", children: `.variation-group.jsx-3406677916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0 0 10px;gap:4px;overflow:hidden;}.variation-group.jsx-3406677916:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;}.variation-group.jsx-3406677916:hover{background:rgba(0,0,0,0.03);}.variation-title.jsx-3406677916{-webkit-flex:1;-ms-flex:1;flex:1;font-size:11px;font-weight:500;color:#888;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}.variations-selects.jsx-3406677916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;}.variation-select.jsx-3406677916{width:100px;-webkit-flex:1 0 50px;-ms-flex:1 0 50px;flex:1 0 50px;padding:4px 24px 4px 8px;font-size:11px;color:#111;background:transparent;cursor:pointer;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;background-size:8px auto;-webkit-transition:border-color 0.1s ease;transition:border-color 0.1s ease;}.variation-select.jsx-3406677916 option.jsx-3406677916{text-overflow:ellipsis;overflow:hidden;}.variation-select.jsx-3406677916:focus{background:rgba(0,0,0,1);color:#ffffff;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;background-size:8px auto;}@media (prefers-color-scheme:dark){.variation-group.jsx-3406677916:hover{background:rgba(255,255,255,0.05);}.variation-title.jsx-3406677916{color:#999;}.variation-select.jsx-3406677916{color:#fff;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23999999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");}.variation-select.jsx-3406677916 option.jsx-3406677916{background:rgb(28,28,30);color:#fff;}.variation-select.jsx-3406677916:focus{background-color:#ffffff;color:#111;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L4 6L7 3' stroke='%23111111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHd0IsQUFTaUIsQUFJQyxBQUl4QixBQVVNLEFBS0QsQUFxQlcsQUFLSyxBQVVXLEFBSTFCLEFBSUEsQUFLZ0IsQUFLRixXQWIzQixBQUl5UixDQTVDM1EsV0FxQkUsRUFLRixBQXVCRCxBQUtBLEdBekVmLEVBSmlDLEdBUWhCLENBbURmLEVBY0EsQUFLeVIsR0FqQzNSLEFBS3FSLFNBekNuUSxhQVJsQixHQVNhLEVBY2MsUUFqQ04sQUEyQlgsQ0FQZSxPQVF6QixTQU1pQixPQWJDLFFBY0wsUUFiUSxHQWNJLGdCQWJ6QixPQWNpQixHQXBDZSxZQXFDakIsYUFDRyw2REFDRSxrQkFDSyxXQXZDSixZQXdDQSxtQkFDSCxDQWtDaEIsZUFqQ3VSLFNBZ0IzUCxDQTRCNUIsMkJBM0JxQyxTQTFEbEIsbUJBQ1gsUUFDUSxDQXlEUyxlQXhEM0IsVUF5REEsb0xBbEI4Qiw0QkFDUyxxQ0FDWix5QkFDUyw0RUFDcEMiLCJmaWxlIjoiL1VzZXJzL2RwZXJyZXJhL1Byb2plY3RzL3ZhcmlhdGlvbnMvc3JjL1ZhcmlhdGlvbnNDb250cm9scy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmFyaWF0aW9uc1Bvc2l0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IHVzZVZhcmlhdGlvbnMgfSBmcm9tIFwiLi9WYXJpYXRpb25zUHJvdmlkZXJcIjtcblxuaW50ZXJmYWNlIFZhcmlhdGlvbnNDb250cm9sc1Byb3BzIHtcbiAgcG9zaXRpb24/OiBWYXJpYXRpb25zUG9zaXRpb247XG59XG5cbmNvbnN0IFZhcmlhdGlvbkdyb3VwID0gKHtcbiAgZ3JvdXAsXG4gIHZhcmlhdGlvbnMsXG4gIGFjdGl2ZUlkcyxcbiAgc2V0QWN0aXZlSWQsXG4gIGlzTWluaW1pemVkLFxufToge1xuICBncm91cDogc3RyaW5nO1xuICB2YXJpYXRpb25zOiBBcnJheTxbc3RyaW5nLCB7IGxhYmVsOiBzdHJpbmc7IGdyb3VwTGFiZWw6IHN0cmluZyB9XT47XG4gIGFjdGl2ZUlkczogTWFwPHN0cmluZywgc3RyaW5nPjtcbiAgc2V0QWN0aXZlSWQ6IChncm91cDogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBpc01pbmltaXplZDogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgZ3JvdXBMYWJlbCA9IHZhcmlhdGlvbnNbMF0/LlsxXT8uZ3JvdXBMYWJlbDtcbiAgY29uc3QgYWN0aXZlSWQgPSBhY3RpdmVJZHMuZ2V0KGdyb3VwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWdyb3VwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbi10aXRsZVwiXG4gICAgICAgIHRpdGxlPXtncm91cExhYmVsfVxuICAgICAgPlxuICAgICAgICB7Z3JvdXBMYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLXNlbGVjdHNcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHZhbHVlPXthY3RpdmVJZCB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlSWQoZ3JvdXAsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInZhcmlhdGlvbi1zZWxlY3RcIlxuICAgICAgICAgIHRhYkluZGV4PXtpc01pbmltaXplZCA/IC0xIDogMH1cbiAgICAgICAgICB0aXRsZT17dmFyaWF0aW9ucy5maW5kKChbaWRdKSA9PiBpZCA9PT0gYWN0aXZlSWQpPy5bMV0/LmxhYmVsIHx8IFwiXCJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dmFyaWF0aW9ucy5tYXAoKFtpZCwgeyBsYWJlbCB9XSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1zZWxlY3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBmbGV4OiAxIDAgNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMjRweCA0cHggOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSclMjM5OTk5OTknIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOHB4IGF1dG87XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb24tc2VsZWN0OmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnZhcmlhdGlvbi1ncm91cDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCBvcHRpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI4LCAyOCwgMzApO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSclMjMxMTExMTEnIHN0cm9rZS13aWR0aD0nMS41JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmFyaWF0aW9uc0NvbnRyb2xzKHtcbiAgcG9zaXRpb24gPSBcImJvdHRvbS1yaWdodFwiLFxufTogVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMpIHtcbiAgY29uc3QgW2lzTWluaW1pemVkLCBzZXRJc01pbmltaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgYWN0aXZlSWRzLCBzZXRBY3RpdmVJZCwgdmFyaWF0aW9ucyB9ID0gdXNlVmFyaWF0aW9ucygpO1xuXG4gIC8vIEdyb3VwIHZhcmlhdGlvbnMgYnkgZ3JvdXBcbiAgY29uc3QgdmFyaWF0aW9uR3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxcbiAgICAgIHN0cmluZyxcbiAgICAgIEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPlxuICAgID4oKTtcblxuICAgIEFycmF5LmZyb20odmFyaWF0aW9ucy5lbnRyaWVzKCkpLmZvckVhY2goKFtpZCwgdmFyaWF0aW9uXSkgPT4ge1xuICAgICAgY29uc3QgeyBncm91cCwgbGFiZWw6IHZhcmlhdGlvbkxhYmVsLCBncm91cExhYmVsIH0gPSB2YXJpYXRpb247XG4gICAgICBpZiAoIWdyb3Vwcy5oYXMoZ3JvdXApKSB7XG4gICAgICAgIGdyb3Vwcy5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwcy5nZXQoZ3JvdXApIS5wdXNoKFtpZCwgeyBsYWJlbDogdmFyaWF0aW9uTGFiZWwsIGdyb3VwTGFiZWwgfV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIFt2YXJpYXRpb25zXSk7XG5cbiAgLy8gUmVuZGVyIHZhcmlhdGlvbiBncm91cHMgYmFzZWQgb24gYWN0aXZlIElEc1xuICBjb25zdCByZW5kZXJWYXJpYXRpb25Hcm91cHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZEdyb3VwcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gRmlyc3QgYWRkIHJvb3QgdmFyaWF0aW9uc1xuICAgIGlmICh2YXJpYXRpb25Hcm91cHMuaGFzKFwicm9vdC12YXJpYXRpb25zXCIpKSB7XG4gICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChcInJvb3QtdmFyaWF0aW9uc1wiKSE7XG4gICAgICBncm91cHMucHVzaChcbiAgICAgICAgPFZhcmlhdGlvbkdyb3VwXG4gICAgICAgICAga2V5PVwicm9vdC12YXJpYXRpb25zXCJcbiAgICAgICAgICBncm91cD1cInJvb3QtdmFyaWF0aW9uc1wiXG4gICAgICAgICAgdmFyaWF0aW9ucz17dmFyaWF0aW9uc31cbiAgICAgICAgICBhY3RpdmVJZHM9e2FjdGl2ZUlkc31cbiAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgaXNNaW5pbWl6ZWQ9e2lzTWluaW1pemVkfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgIHByb2Nlc3NlZEdyb3Vwcy5hZGQoXCJyb290LXZhcmlhdGlvbnNcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlbiBhZGQgYWxsIG90aGVyIGdyb3VwcyB0aGF0IGhhdmUgYWN0aXZlIElEc1xuICAgIEFycmF5LmZyb20oYWN0aXZlSWRzLmVudHJpZXMoKSkuZm9yRWFjaCgoW2dyb3VwXSkgPT4ge1xuICAgICAgaWYgKCFwcm9jZXNzZWRHcm91cHMuaGFzKGdyb3VwKSAmJiB2YXJpYXRpb25Hcm91cHMuaGFzKGdyb3VwKSkge1xuICAgICAgICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uR3JvdXBzLmdldChncm91cCkhO1xuICAgICAgICBncm91cHMucHVzaChcbiAgICAgICAgICA8VmFyaWF0aW9uR3JvdXBcbiAgICAgICAgICAgIGtleT17Z3JvdXB9XG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICB2YXJpYXRpb25zPXt2YXJpYXRpb25zfVxuICAgICAgICAgICAgYWN0aXZlSWRzPXthY3RpdmVJZHN9XG4gICAgICAgICAgICBzZXRBY3RpdmVJZD17c2V0QWN0aXZlSWR9XG4gICAgICAgICAgICBpc01pbmltaXplZD17aXNNaW5pbWl6ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgcHJvY2Vzc2VkR3JvdXBzLmFkZChncm91cCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5LXRpdGxlXCI+Tm8gVmFyaWF0aW9ucyBGb3VuZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1lbXB0eS10ZXh0XCI+XG4gICAgICAgICAgICBBZGQgYSA8Y29kZT57YDxWYXJpYXRpb25zPmB9PC9jb2RlPiBjb21wb25lbnQhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1nZWlzdC1tb25vKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eS10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9O1xuXG4gIGNvbnN0IGFsbEdyb3VwcyA9IHJlbmRlclZhcmlhdGlvbkdyb3VwcygpO1xuXG4gIC8vIEFkZCBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUuY29kZSA9PT0gXCJLZXlWXCIgJiZcbiAgICAgICAgZS5hbHRLZXkgJiZcbiAgICAgICAgIWUuY3RybEtleSAmJlxuICAgICAgICAhZS5zaGlmdEtleSAmJlxuICAgICAgICAhZS5tZXRhS2V5XG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGFueSBkZWZhdWx0IGFsdCt2IGJlaGF2aW9yXG4gICAgICAgIHNldElzTWluaW1pemVkKChwcmV2KSA9PiAhcHJldik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtY29udHJvbHMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHZhcmlhdGlvbnMtY29udHJvbHMgJHtpc01pbmltaXplZCA/IFwibWluaW1pemVkXCIgOiBcIlwifWB9PlxuICAgICAgICB7aXNNaW5pbWl6ZWQgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1jaXJjbGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNaW5pbWl6ZWQoZmFsc2UpfVxuICAgICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gMCA6IC0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTM2IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NiAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiAxNy45MTJhMSAxIDAgMCAwIDAgMS40MTVsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTVsLTIuMzc3LTIuMzc2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgNC42NzRhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MzYgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc2IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI5NyAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRMNi4wODggOC45MTZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC45MTYgMTcuOTEyYTEgMSAwIDAgMCAwIDEuNDE1bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE1bC0yLjM3Ny0yLjM3NmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiA0LjY3NGExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICBWYXJpYXRpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01pbmltaXplZCh0cnVlKX1cbiAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNNaW5pbWl6ZWQgPyAtMSA6IDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1ncm91cHNcIj57YWxsR3JvdXBzfTwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJyaWdodDogMTZweDtcIlxuICAgICAgICAgICAgOiBwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKVxuICAgICAgICAgICAgPyBcImxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwibGVmdDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiYm90dG9tXCIpXG4gICAgICAgICAgICA/IFwiYm90dG9tOiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpXG4gICAgICAgICAgICA/IFwidG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcInRvcDogMTZweDtcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwicmlnaHRcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwibWlkZGxlXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwibGVmdFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3Bvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpICYmIHBvc2l0aW9uLmluY2x1ZGVzKFwidG9wXCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGUge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGU6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDJweCAwIDEwcHg7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgIH1cbiAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyLXRvZ2dsZTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDMwLCAxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNvbnRyb2xzLm1pbmltaXplZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWNpcmNsZTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAzMCwgMC45KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
function gI({
  position: g = "bottom-right"
}) {
  const [m, p] = ug(!1), { activeIds: W, setActiveId: V, variations: N } = zg(), o = F.useMemo(() => {
    const b = /* @__PURE__ */ new Map();
    return Array.from(N.entries()).forEach(([X, s]) => {
      const { group: r, label: y, groupLabel: Y } = s;
      b.has(r) || b.set(r, []), b.get(r).push([X, { label: y, groupLabel: Y }]);
    }), b;
  }, [N]), Z = (() => {
    const b = [], X = /* @__PURE__ */ new Set();
    if (o.has("root-variations")) {
      const s = o.get("root-variations");
      b.push(
        /* @__PURE__ */ u.jsxDEV(
          vg,
          {
            group: "root-variations",
            variations: s,
            activeIds: W,
            setActiveId: V,
            isMinimized: m
          },
          "root-variations",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 185,
            columnNumber: 9
          },
          this
        )
      ), X.add("root-variations");
    }
    return Array.from(W.entries()).forEach(([s]) => {
      if (!X.has(s) && o.has(s)) {
        const r = o.get(s);
        b.push(
          /* @__PURE__ */ u.jsxDEV(
            vg,
            {
              group: s,
              variations: r,
              activeIds: W,
              setActiveId: V,
              isMinimized: m
            },
            s,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 202,
              columnNumber: 11
            },
            this
          )
        ), X.add(s);
      }
    }), b.length === 0 ? /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty", children: [
      /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ u.jsxDEV("div", { className: "jsx-471313454 variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ u.jsxDEV("code", { className: "jsx-471313454", children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 220,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ u.jsxDEV(w, { id: "471313454", children: `.variations-empty.jsx-471313454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 16px;text-align:center;gap:4px;}.variations-empty-title.jsx-471313454{font-size:13px;font-weight:500;color:#666;}.variations-empty-text.jsx-471313454{font-size:11px;color:#999;}code.jsx-471313454{font-family:var(--font-geist-mono);font-size:11px;padding:1px 4px;background:rgba(0,0,0,0.03);border-radius:4px;}@media (prefers-color-scheme:dark){.variations-empty-title.jsx-471313454{color:#999;}.variations-empty-text.jsx-471313454{color:#666;}code.jsx-471313454{background:rgba(255,255,255,0.1);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZOc0IsQUFHNEIsQUFVRSxBQUtBLEFBSW9CLEFBUXRCLEFBR0EsQUFHeUIsV0FMdEMsQUFHQSxJQXBCZ0IsQUFLTCxXQUNiLEtBTGEsRUFzQlgsRUFkZSxPQVBqQixRQVFrQixnQkFDZSxRQXJCVCxvQkFzQkosa0JBQ3BCLHdDQXRCcUIsNkZBQ0ksbUdBQ0wsa0JBQ0Esa0JBQ1YsUUFDViIsImZpbGUiOiIvVXNlcnMvZHBlcnJlcmEvUHJvamVjdHMvdmFyaWF0aW9ucy9zcmMvVmFyaWF0aW9uc0NvbnRyb2xzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWYXJpYXRpb25zUG9zaXRpb24gfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlVmFyaWF0aW9ucyB9IGZyb20gXCIuL1ZhcmlhdGlvbnNQcm92aWRlclwiO1xuXG5pbnRlcmZhY2UgVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMge1xuICBwb3NpdGlvbj86IFZhcmlhdGlvbnNQb3NpdGlvbjtcbn1cblxuY29uc3QgVmFyaWF0aW9uR3JvdXAgPSAoe1xuICBncm91cCxcbiAgdmFyaWF0aW9ucyxcbiAgYWN0aXZlSWRzLFxuICBzZXRBY3RpdmVJZCxcbiAgaXNNaW5pbWl6ZWQsXG59OiB7XG4gIGdyb3VwOiBzdHJpbmc7XG4gIHZhcmlhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPjtcbiAgYWN0aXZlSWRzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXRBY3RpdmVJZDogKGdyb3VwOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzTWluaW1pemVkOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBncm91cExhYmVsID0gdmFyaWF0aW9uc1swXT8uWzFdPy5ncm91cExhYmVsO1xuICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZUlkcy5nZXQoZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tZ3JvdXBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXRpdGxlXCJcbiAgICAgICAgdGl0bGU9e2dyb3VwTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtncm91cExhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtc2VsZWN0c1wiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgdmFsdWU9e2FjdGl2ZUlkIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRBY3RpdmVJZChncm91cCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXNlbGVjdFwiXG4gICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gLTEgOiAwfVxuICAgICAgICAgIHRpdGxlPXt2YXJpYXRpb25zLmZpbmQoKFtpZF0pID0+IGlkID09PSBhY3RpdmVJZCk/LlsxXT8ubGFiZWwgfHwgXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YXJpYXRpb25zLm1hcCgoW2lkLCB7IGxhYmVsIH1dKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXA6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLXNlbGVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGZsZXg6IDEgMCA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAyNHB4IDRweCA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nJTIzOTk5OTk5JyBzdHJva2Utd2lkdGg9JzEuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdDpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzExMTExMScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWYXJpYXRpb25zQ29udHJvbHMoe1xuICBwb3NpdGlvbiA9IFwiYm90dG9tLXJpZ2h0XCIsXG59OiBWYXJpYXRpb25zQ29udHJvbHNQcm9wcykge1xuICBjb25zdCBbaXNNaW5pbWl6ZWQsIHNldElzTWluaW1pemVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBhY3RpdmVJZHMsIHNldEFjdGl2ZUlkLCB2YXJpYXRpb25zIH0gPSB1c2VWYXJpYXRpb25zKCk7XG5cbiAgLy8gR3JvdXAgdmFyaWF0aW9ucyBieSBncm91cFxuICBjb25zdCB2YXJpYXRpb25Hcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwPFxuICAgICAgc3RyaW5nLFxuICAgICAgQXJyYXk8W3N0cmluZywgeyBsYWJlbDogc3RyaW5nOyBncm91cExhYmVsOiBzdHJpbmcgfV0+XG4gICAgPigpO1xuXG4gICAgQXJyYXkuZnJvbSh2YXJpYXRpb25zLmVudHJpZXMoKSkuZm9yRWFjaCgoW2lkLCB2YXJpYXRpb25dKSA9PiB7XG4gICAgICBjb25zdCB7IGdyb3VwLCBsYWJlbDogdmFyaWF0aW9uTGFiZWwsIGdyb3VwTGFiZWwgfSA9IHZhcmlhdGlvbjtcbiAgICAgIGlmICghZ3JvdXBzLmhhcyhncm91cCkpIHtcbiAgICAgICAgZ3JvdXBzLnNldChncm91cCwgW10pO1xuICAgICAgfVxuICAgICAgZ3JvdXBzLmdldChncm91cCkhLnB1c2goW2lkLCB7IGxhYmVsOiB2YXJpYXRpb25MYWJlbCwgZ3JvdXBMYWJlbCB9XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfSwgW3ZhcmlhdGlvbnNdKTtcblxuICAvLyBSZW5kZXIgdmFyaWF0aW9uIGdyb3VwcyBiYXNlZCBvbiBhY3RpdmUgSURzXG4gIGNvbnN0IHJlbmRlclZhcmlhdGlvbkdyb3VwcyA9ICgpID0+IHtcbiAgICBjb25zdCBncm91cHM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkR3JvdXBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICAvLyBGaXJzdCBhZGQgcm9vdCB2YXJpYXRpb25zXG4gICAgaWYgKHZhcmlhdGlvbkdyb3Vwcy5oYXMoXCJyb290LXZhcmlhdGlvbnNcIikpIHtcbiAgICAgIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25Hcm91cHMuZ2V0KFwicm9vdC12YXJpYXRpb25zXCIpITtcbiAgICAgIGdyb3Vwcy5wdXNoKFxuICAgICAgICA8VmFyaWF0aW9uR3JvdXBcbiAgICAgICAgICBrZXk9XCJyb290LXZhcmlhdGlvbnNcIlxuICAgICAgICAgIGdyb3VwPVwicm9vdC12YXJpYXRpb25zXCJcbiAgICAgICAgICB2YXJpYXRpb25zPXt2YXJpYXRpb25zfVxuICAgICAgICAgIGFjdGl2ZUlkcz17YWN0aXZlSWRzfVxuICAgICAgICAgIHNldEFjdGl2ZUlkPXtzZXRBY3RpdmVJZH1cbiAgICAgICAgICBpc01pbmltaXplZD17aXNNaW5pbWl6ZWR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgcHJvY2Vzc2VkR3JvdXBzLmFkZChcInJvb3QtdmFyaWF0aW9uc1wiKTtcbiAgICB9XG5cbiAgICAvLyBUaGVuIGFkZCBhbGwgb3RoZXIgZ3JvdXBzIHRoYXQgaGF2ZSBhY3RpdmUgSURzXG4gICAgQXJyYXkuZnJvbShhY3RpdmVJZHMuZW50cmllcygpKS5mb3JFYWNoKChbZ3JvdXBdKSA9PiB7XG4gICAgICBpZiAoIXByb2Nlc3NlZEdyb3Vwcy5oYXMoZ3JvdXApICYmIHZhcmlhdGlvbkdyb3Vwcy5oYXMoZ3JvdXApKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25Hcm91cHMuZ2V0KGdyb3VwKSE7XG4gICAgICAgIGdyb3Vwcy5wdXNoKFxuICAgICAgICAgIDxWYXJpYXRpb25Hcm91cFxuICAgICAgICAgICAga2V5PXtncm91cH1cbiAgICAgICAgICAgIGdyb3VwPXtncm91cH1cbiAgICAgICAgICAgIHZhcmlhdGlvbnM9e3ZhcmlhdGlvbnN9XG4gICAgICAgICAgICBhY3RpdmVJZHM9e2FjdGl2ZUlkc31cbiAgICAgICAgICAgIHNldEFjdGl2ZUlkPXtzZXRBY3RpdmVJZH1cbiAgICAgICAgICAgIGlzTWluaW1pemVkPXtpc01pbmltaXplZH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBwcm9jZXNzZWRHcm91cHMuYWRkKGdyb3VwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtZW1wdHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtZW1wdHktdGl0bGVcIj5ObyBWYXJpYXRpb25zIEZvdW5kPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5LXRleHRcIj5cbiAgICAgICAgICAgIEFkZCBhIDxjb2RlPntgPFZhcmlhdGlvbnM+YH08L2NvZGU+IGNvbXBvbmVudCFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHktdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cHM7XG4gIH07XG5cbiAgY29uc3QgYWxsR3JvdXBzID0gcmVuZGVyVmFyaWF0aW9uR3JvdXBzKCk7XG5cbiAgLy8gQWRkIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5jb2RlID09PSBcIktleVZcIiAmJlxuICAgICAgICBlLmFsdEtleSAmJlxuICAgICAgICAhZS5jdHJsS2V5ICYmXG4gICAgICAgICFlLnNoaWZ0S2V5ICYmXG4gICAgICAgICFlLm1ldGFLZXlcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgYW55IGRlZmF1bHQgYWx0K3YgYmVoYXZpb3JcbiAgICAgICAgc2V0SXNNaW5pbWl6ZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1jb250cm9scy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmFyaWF0aW9ucy1jb250cm9scyAke2lzTWluaW1pemVkID8gXCJtaW5pbWl6ZWRcIiA6IFwiXCJ9YH0+XG4gICAgICAgIHtpc01pbmltaXplZCA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWNpcmNsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01pbmltaXplZChmYWxzZSl9XG4gICAgICAgICAgICB0YWJJbmRleD17aXNNaW5pbWl6ZWQgPyAwIDogLTF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MzYgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc2IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjk3IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNEw2LjA4OCA4LjkxNmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDE3LjkxMmExIDEgMCAwIDAgMCAxLjQxNWwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNWwtMi4zNzctMi4zNzZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiA0LjY3NGExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUzNiAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzYgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjk3IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNEw2LjA4OCA4LjkxNmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiAxNy45MTJhMSAxIDAgMCAwIDAgMS40MTVsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTVsLTIuMzc3LTIuMzc2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDQuNjc0YTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIFZhcmlhdGlvbnNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlci10b2dnbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWluaW1pemVkKHRydWUpfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc01pbmltaXplZCA/IC0xIDogMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWdyb3Vwc1wiPnthbGxHcm91cHN9PC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpXG4gICAgICAgICAgICA/IFwibGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJsZWZ0OiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJib3R0b206IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIilcbiAgICAgICAgICAgID8gXCJ0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwidG9wOiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJ0b3BcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgICAgICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMubWluaW1pemVkIHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpXG4gICAgICAgICAgICA/IFwibGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJsZWZ0OiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJib3R0b206IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIilcbiAgICAgICAgICAgID8gXCJ0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwidG9wOiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJ0b3BcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNpcmNsZSB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNpcmNsZTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAycHggMnB4IDAgMTBweDtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMTExO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9ucy1jb250cm9scyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMzAsIDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMubWluaW1pemVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyOCwgMjgsIDMwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDMwLCAwLjkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) : b;
  })();
  return F.useEffect(() => {
    const b = (X) => {
      X.code === "KeyV" && X.altKey && !X.ctrlKey && !X.shiftKey && !X.metaKey && (X.preventDefault(), p((s) => !s));
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, []), /* @__PURE__ */ u.jsxDEV("div", { className: w.dynamic([["1417769804", [
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
    /* @__PURE__ */ u.jsxDEV("div", { className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + ` variations-controls ${m ? "minimized" : ""}`, children: m ? /* @__PURE__ */ u.jsxDEV("button", { onClick: () => p(!1), tabIndex: m ? 0 : -1, className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-circle", children: /* @__PURE__ */ u.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]), children: [
      /* @__PURE__ */ u.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 423,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 424,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 425,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 426,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 422,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 421,
      columnNumber: 24
    }, this) : /* @__PURE__ */ u.jsxDEV(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxDEV("div", { className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header", children: [
        /* @__PURE__ */ u.jsxDEV("div", { className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header-title", children: [
          /* @__PURE__ */ u.jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "square", strokeLinejoin: "round", style: { marginRight: "6px", position: "relative" }, className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]), children: [
            /* @__PURE__ */ u.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 432,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 433,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 434,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ u.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) }, void 0, !1, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 431,
            columnNumber: 17
          }, this),
          "Variations"
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 430,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ u.jsxDEV("button", { onClick: () => p(!0), tabIndex: m ? -1 : 0, className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variations-header-toggle", children: "×" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 439,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 429,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ u.jsxDEV("div", { className: w.dynamic([["1417769804", [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""]]]) + " variation-groups", children: Z }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 444,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 428,
      columnNumber: 23
    }, this) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 420,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ u.jsxDEV(w, { id: "1417769804", dynamic: [g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : "", g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;", g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;", g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : "", g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : "", g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : "", g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""], children: `.variations-controls.__jsx-style-dynamic-selector{font-family:system-ui,-apple-system,sans-serif;position:fixed;${g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"} ${g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"} ${g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : ""} ${g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : ""} ${g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : ""} ${g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""} width:280px;height:auto;max-height:calc(100vh - 32px);z-index:100;background:rgba(255,255,255);border-radius:10px;overflow:auto;box-shadow:0 0 0 1px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.08);padding:0;}.variations-controls.minimized.__jsx-style-dynamic-selector{width:32px;height:32px;padding:0;border-radius:16px;background:white;${g.includes("right") ? "right: 16px;" : g.includes("center") ? "left: 50%; transform: translateX(-50%);" : "left: 16px;"} ${g.includes("bottom") ? "bottom: 16px;" : g.includes("middle") ? "top: 50%; transform: translateY(-50%);" : "top: 16px;"} ${g.includes("middle") && g.includes("right") ? "transform: translateY(-50%);" : ""} ${g.includes("middle") && g.includes("left") ? "transform: translateY(-50%);" : ""} ${g.includes("center") && g.includes("bottom") ? "transform: translateX(-50%);" : ""} ${g.includes("center") && g.includes("top") ? "transform: translateX(-50%);" : ""};}.variations-circle.__jsx-style-dynamic-selector{width:32px;height:32px;padding:0;border:none;background:none;color:#666;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.variations-circle.__jsx-style-dynamic-selector:focus{background:rgba(0,0,0,1);color:#ffffff;border-radius:4px;outline:none;}.variations-header.__jsx-style-dynamic-selector{background:rgba(255,255,255,0.6);position:-webkit-sticky;position:sticky;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2px 2px 0 10px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);}.variations-header-title.__jsx-style-dynamic-selector{font-family:system-ui,-apple-system,sans-serif;font-size:8px;text-transform:uppercase;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;line-height:12px;font-weight:700;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.variations-header-toggle.__jsx-style-dynamic-selector{background:none;border:none;color:#999;cursor:pointer;font-size:16px;line-height:0px;font-weight:500;padding:0;padding-bottom:2px;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:2px;border-top-right-radius:8px;}.variations-header-toggle.__jsx-style-dynamic-selector:hover{color:#111111;}.variations-header-toggle.__jsx-style-dynamic-selector:focus{background:#111111;color:#ffffff;outline:none;}.variation-groups.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2px;}@media (prefers-color-scheme:dark){.variations-controls.__jsx-style-dynamic-selector{background:rgba(28,28,30,1);box-shadow:0 0 0 1px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.4),0 2px 8px rgba(0,0,0,0.3);}.variations-controls.minimized.__jsx-style-dynamic-selector{background:rgb(28,28,30);}.variations-circle.__jsx-style-dynamic-selector{color:#fff;}.variations-circle.__jsx-style-dynamic-selector:focus{background:rgba(255,255,255,0.1);color:#ffffff;border-radius:4px;outline:none;}.variations-header.__jsx-style-dynamic-selector{background:rgba(28,28,30,0.9);}.variations-header-toggle.__jsx-style-dynamic-selector{color:#999;}.variations-header-toggle.__jsx-style-dynamic-selector:hover{color:#ffffff;}.variations-header-toggle.__jsx-style-dynamic-selector:focus{background:white;color:#111111;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcGVycmVyYS9Qcm9qZWN0cy92YXJpYXRpb25zL3NyYy9WYXJpYXRpb25zQ29udHJvbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlXa0IsQUFHNEQsQUFxQnRDLEFBY0EsQUFhaUIsQUFPUSxBQWFhLEFBWWpDLEFBa0JGLEFBR0ssQUFNTixBQU9vQixBQU1KLEFBSWhCLEFBSXlCLEFBT0gsQUFJdEIsQUFHRyxBQUdHLFdBM0hQLEFBY0EsQUF5RlosQUFlQSxHQXpDRixBQTRDRSxFQTlEWSxDQWlFSSxFQTVDRixJQS9FSixBQWNBLEVBWUksQUF3RWQsR0F2Q1csQUFrQ29ELEVBb0IvRCxDQVdBLEVBM0htQixBQWNQLEFBa0JJLEFBK0NILEFBMEJHLE1BL0VFLEFBaUNILE1BNUNDLENBaUVsQixDQXZHaUIsQUFvRUQsQUE2RE0sS0F6R0gsRUEyREYsR0FqQ0YsSUFYRixBQThCYyxDQTlEYixHQTJIRyxJQW5HbEIsQUFxRG1CLENBakNsQixFQVhpQixDQWdCVCxDQW1EZ0IsSUF3QnRCLENBMUVXLE1BNEJLLENBZk0sQ0E3QlQsR0FpQkEsV0E0QkgsVUFDUyxjQTZCbkIsS0E1QlcsV0FDQyxXQW1CQSxDQWxCQyxRQWhETSxHQWlCQSxBQWtEckIsMkJBdENtQixpQkFDRCxnQkFDTCxHQWtCUSxNQS9CVyxFQWNqQixVQTNDZixHQXZCYyxNQW1DVyxNQWxDTyw4QkFDbEIsWUFDbUIsT0FnRVosV0FpQkksV0FoRkosaUJBaURBLEVBaERMLEdBK0JoQixXQTdCaUUsc0NBNkRqRSxpQkFpQm9CLGtCQUNVLElBaENMLGlCQTlDYixNQStDZ0IsQ0FnQzVCLEdBOUVBLHdEQStDQSIsImZpbGUiOiIvVXNlcnMvZHBlcnJlcmEvUHJvamVjdHMvdmFyaWF0aW9ucy9zcmMvVmFyaWF0aW9uc0NvbnRyb2xzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWYXJpYXRpb25zUG9zaXRpb24gfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlVmFyaWF0aW9ucyB9IGZyb20gXCIuL1ZhcmlhdGlvbnNQcm92aWRlclwiO1xuXG5pbnRlcmZhY2UgVmFyaWF0aW9uc0NvbnRyb2xzUHJvcHMge1xuICBwb3NpdGlvbj86IFZhcmlhdGlvbnNQb3NpdGlvbjtcbn1cblxuY29uc3QgVmFyaWF0aW9uR3JvdXAgPSAoe1xuICBncm91cCxcbiAgdmFyaWF0aW9ucyxcbiAgYWN0aXZlSWRzLFxuICBzZXRBY3RpdmVJZCxcbiAgaXNNaW5pbWl6ZWQsXG59OiB7XG4gIGdyb3VwOiBzdHJpbmc7XG4gIHZhcmlhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHsgbGFiZWw6IHN0cmluZzsgZ3JvdXBMYWJlbDogc3RyaW5nIH1dPjtcbiAgYWN0aXZlSWRzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXRBY3RpdmVJZDogKGdyb3VwOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzTWluaW1pemVkOiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBncm91cExhYmVsID0gdmFyaWF0aW9uc1swXT8uWzFdPy5ncm91cExhYmVsO1xuICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZUlkcy5nZXQoZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tZ3JvdXBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXRpdGxlXCJcbiAgICAgICAgdGl0bGU9e2dyb3VwTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtncm91cExhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtc2VsZWN0c1wiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgdmFsdWU9e2FjdGl2ZUlkIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRBY3RpdmVJZChncm91cCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXNlbGVjdFwiXG4gICAgICAgICAgdGFiSW5kZXg9e2lzTWluaW1pemVkID8gLTEgOiAwfVxuICAgICAgICAgIHRpdGxlPXt2YXJpYXRpb25zLmZpbmQoKFtpZF0pID0+IGlkID09PSBhY3RpdmVJZCk/LlsxXT8ubGFiZWwgfHwgXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YXJpYXRpb25zLm1hcCgoW2lkLCB7IGxhYmVsIH1dKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbi1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC52YXJpYXRpb24tZ3JvdXA6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLXNlbGVjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGZsZXg6IDEgMCA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAyNHB4IDRweCA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzk5OTk5OScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbi1zZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xIDNMNCA2TDcgMycgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4cHggYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9uLWdyb3VwOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVTLUFTQ0lJLCUzQ3N2ZyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMSAzTDQgNkw3IDMnIHN0cm9rZT0nJTIzOTk5OTk5JyBzdHJva2Utd2lkdGg9JzEuNScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb24tc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjgsIDI4LCAzMCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9uLXNlbGVjdDpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0Nzdmcgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEgM0w0IDZMNyAzJyBzdHJva2U9JyUyMzExMTExMScgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWYXJpYXRpb25zQ29udHJvbHMoe1xuICBwb3NpdGlvbiA9IFwiYm90dG9tLXJpZ2h0XCIsXG59OiBWYXJpYXRpb25zQ29udHJvbHNQcm9wcykge1xuICBjb25zdCBbaXNNaW5pbWl6ZWQsIHNldElzTWluaW1pemVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBhY3RpdmVJZHMsIHNldEFjdGl2ZUlkLCB2YXJpYXRpb25zIH0gPSB1c2VWYXJpYXRpb25zKCk7XG5cbiAgLy8gR3JvdXAgdmFyaWF0aW9ucyBieSBncm91cFxuICBjb25zdCB2YXJpYXRpb25Hcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwPFxuICAgICAgc3RyaW5nLFxuICAgICAgQXJyYXk8W3N0cmluZywgeyBsYWJlbDogc3RyaW5nOyBncm91cExhYmVsOiBzdHJpbmcgfV0+XG4gICAgPigpO1xuXG4gICAgQXJyYXkuZnJvbSh2YXJpYXRpb25zLmVudHJpZXMoKSkuZm9yRWFjaCgoW2lkLCB2YXJpYXRpb25dKSA9PiB7XG4gICAgICBjb25zdCB7IGdyb3VwLCBsYWJlbDogdmFyaWF0aW9uTGFiZWwsIGdyb3VwTGFiZWwgfSA9IHZhcmlhdGlvbjtcbiAgICAgIGlmICghZ3JvdXBzLmhhcyhncm91cCkpIHtcbiAgICAgICAgZ3JvdXBzLnNldChncm91cCwgW10pO1xuICAgICAgfVxuICAgICAgZ3JvdXBzLmdldChncm91cCkhLnB1c2goW2lkLCB7IGxhYmVsOiB2YXJpYXRpb25MYWJlbCwgZ3JvdXBMYWJlbCB9XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfSwgW3ZhcmlhdGlvbnNdKTtcblxuICAvLyBSZW5kZXIgdmFyaWF0aW9uIGdyb3VwcyBiYXNlZCBvbiBhY3RpdmUgSURzXG4gIGNvbnN0IHJlbmRlclZhcmlhdGlvbkdyb3VwcyA9ICgpID0+IHtcbiAgICBjb25zdCBncm91cHM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkR3JvdXBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICAvLyBGaXJzdCBhZGQgcm9vdCB2YXJpYXRpb25zXG4gICAgaWYgKHZhcmlhdGlvbkdyb3Vwcy5oYXMoXCJyb290LXZhcmlhdGlvbnNcIikpIHtcbiAgICAgIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25Hcm91cHMuZ2V0KFwicm9vdC12YXJpYXRpb25zXCIpITtcbiAgICAgIGdyb3Vwcy5wdXNoKFxuICAgICAgICA8VmFyaWF0aW9uR3JvdXBcbiAgICAgICAgICBrZXk9XCJyb290LXZhcmlhdGlvbnNcIlxuICAgICAgICAgIGdyb3VwPVwicm9vdC12YXJpYXRpb25zXCJcbiAgICAgICAgICB2YXJpYXRpb25zPXt2YXJpYXRpb25zfVxuICAgICAgICAgIGFjdGl2ZUlkcz17YWN0aXZlSWRzfVxuICAgICAgICAgIHNldEFjdGl2ZUlkPXtzZXRBY3RpdmVJZH1cbiAgICAgICAgICBpc01pbmltaXplZD17aXNNaW5pbWl6ZWR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgcHJvY2Vzc2VkR3JvdXBzLmFkZChcInJvb3QtdmFyaWF0aW9uc1wiKTtcbiAgICB9XG5cbiAgICAvLyBUaGVuIGFkZCBhbGwgb3RoZXIgZ3JvdXBzIHRoYXQgaGF2ZSBhY3RpdmUgSURzXG4gICAgQXJyYXkuZnJvbShhY3RpdmVJZHMuZW50cmllcygpKS5mb3JFYWNoKChbZ3JvdXBdKSA9PiB7XG4gICAgICBpZiAoIXByb2Nlc3NlZEdyb3Vwcy5oYXMoZ3JvdXApICYmIHZhcmlhdGlvbkdyb3Vwcy5oYXMoZ3JvdXApKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25Hcm91cHMuZ2V0KGdyb3VwKSE7XG4gICAgICAgIGdyb3Vwcy5wdXNoKFxuICAgICAgICAgIDxWYXJpYXRpb25Hcm91cFxuICAgICAgICAgICAga2V5PXtncm91cH1cbiAgICAgICAgICAgIGdyb3VwPXtncm91cH1cbiAgICAgICAgICAgIHZhcmlhdGlvbnM9e3ZhcmlhdGlvbnN9XG4gICAgICAgICAgICBhY3RpdmVJZHM9e2FjdGl2ZUlkc31cbiAgICAgICAgICAgIHNldEFjdGl2ZUlkPXtzZXRBY3RpdmVJZH1cbiAgICAgICAgICAgIGlzTWluaW1pemVkPXtpc01pbmltaXplZH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBwcm9jZXNzZWRHcm91cHMuYWRkKGdyb3VwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtZW1wdHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtZW1wdHktdGl0bGVcIj5ObyBWYXJpYXRpb25zIEZvdW5kPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWVtcHR5LXRleHRcIj5cbiAgICAgICAgICAgIEFkZCBhIDxjb2RlPntgPFZhcmlhdGlvbnM+YH08L2NvZGU+IGNvbXBvbmVudCFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudmFyaWF0aW9ucy1lbXB0eSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgLnZhcmlhdGlvbnMtZW1wdHktdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC52YXJpYXRpb25zLWVtcHR5LXRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cHM7XG4gIH07XG5cbiAgY29uc3QgYWxsR3JvdXBzID0gcmVuZGVyVmFyaWF0aW9uR3JvdXBzKCk7XG5cbiAgLy8gQWRkIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5jb2RlID09PSBcIktleVZcIiAmJlxuICAgICAgICBlLmFsdEtleSAmJlxuICAgICAgICAhZS5jdHJsS2V5ICYmXG4gICAgICAgICFlLnNoaWZ0S2V5ICYmXG4gICAgICAgICFlLm1ldGFLZXlcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgYW55IGRlZmF1bHQgYWx0K3YgYmVoYXZpb3JcbiAgICAgICAgc2V0SXNNaW5pbWl6ZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1jb250cm9scy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmFyaWF0aW9ucy1jb250cm9scyAke2lzTWluaW1pemVkID8gXCJtaW5pbWl6ZWRcIiA6IFwiXCJ9YH0+XG4gICAgICAgIHtpc01pbmltaXplZCA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWNpcmNsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01pbmltaXplZChmYWxzZSl9XG4gICAgICAgICAgICB0YWJJbmRleD17aXNNaW5pbWl6ZWQgPyAwIDogLTF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MzYgMTEuMjkzYTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc2IDIuMzc3YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc3YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjk3IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNEw2LjA4OCA4LjkxNmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDE3LjkxMmExIDEgMCAwIDAgMCAxLjQxNWwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNWwtMi4zNzctMi4zNzZhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiA0LjY3NGExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3NmExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3NmExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9ucy1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUzNiAxMS4yOTNhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzYgMi4zNzdhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzdhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjk3IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNEw2LjA4OCA4LjkxNmExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04LjkxNiAxNy45MTJhMSAxIDAgMCAwIDAgMS40MTVsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTVsLTIuMzc3LTIuMzc2YTEgMSAwIDAgMC0xLjQxNCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguOTE2IDQuNjc0YTEgMSAwIDAgMCAwIDEuNDE0bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE0bC0yLjM3Ny0yLjM3N2ExIDEgMCAwIDAtMS40MTQgMHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIFZhcmlhdGlvbnNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2YXJpYXRpb25zLWhlYWRlci10b2dnbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWluaW1pemVkKHRydWUpfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc01pbmltaXplZCA/IC0xIDogMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWdyb3Vwc1wiPnthbGxHcm91cHN9PC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpXG4gICAgICAgICAgICA/IFwibGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJsZWZ0OiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJib3R0b206IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIilcbiAgICAgICAgICAgID8gXCJ0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwidG9wOiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJ0b3BcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgICAgICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMubWluaW1pemVkIHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInJpZ2h0OiAxNnB4O1wiXG4gICAgICAgICAgICA6IHBvc2l0aW9uLmluY2x1ZGVzKFwiY2VudGVyXCIpXG4gICAgICAgICAgICA/IFwibGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJsZWZ0OiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJib3R0b21cIilcbiAgICAgICAgICAgID8gXCJib3R0b206IDE2cHg7XCJcbiAgICAgICAgICAgIDogcG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIilcbiAgICAgICAgICAgID8gXCJ0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwidG9wOiAxNnB4O1wifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJyaWdodFwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJtaWRkbGVcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJsZWZ0XCIpXG4gICAgICAgICAgICA/IFwidHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1wiXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtwb3NpdGlvbi5pbmNsdWRlcyhcImNlbnRlclwiKSAmJiBwb3NpdGlvbi5pbmNsdWRlcyhcImJvdHRvbVwiKVxuICAgICAgICAgICAgPyBcInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcIlxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7cG9zaXRpb24uaW5jbHVkZXMoXCJjZW50ZXJcIikgJiYgcG9zaXRpb24uaW5jbHVkZXMoXCJ0b3BcIilcbiAgICAgICAgICAgID8gXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XCJcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNpcmNsZSB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWNpcmNsZTpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAycHggMnB4IDAgMTBweDtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgfVxuICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXItdG9nZ2xlOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExMTExO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudmFyaWF0aW9uLWdyb3VwcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAudmFyaWF0aW9ucy1jb250cm9scyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyOCwgMzAsIDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY29udHJvbHMubWluaW1pemVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyOCwgMjgsIDMwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1jaXJjbGUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhcmlhdGlvbnMtY2lyY2xlOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmFyaWF0aW9ucy1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjgsIDMwLCAwLjkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52YXJpYXRpb25zLWhlYWRlci10b2dnbGU6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */
/*@ sourceURL=/Users/dperrera/Projects/variations/src/VariationsControls.tsx */` }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 447,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 290,
    columnNumber: 5
  }, this);
}
export {
  Hg as Variation,
  Ug as Variations,
  gI as VariationsControls,
  $g as VariationsProvider
};
