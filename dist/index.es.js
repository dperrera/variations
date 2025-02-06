import M, { createContext as Ae, useContext as ce, useMemo as O, useState as G, useEffect as K, useCallback as ye } from "react";
var F = { exports: {} }, H = {};
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
  if (ke) return H;
  ke = 1;
  var r = Symbol.for("react.fragment");
  return H.Fragment = r, H.jsxDEV = void 0, H;
}
var Z = {};
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
        case V:
          return "Fragment";
        case u:
          return "Portal";
        case z:
          return "Profiler";
        case T:
          return "StrictMode";
        case re:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case ne:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function h(e) {
      return "" + e;
    }
    function P(e) {
      try {
        h(e);
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
        ), h(e);
      }
    }
    function p() {
    }
    function d() {
      if (J === 0) {
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
      J++;
    }
    function w() {
      if (J--, J === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: L({}, e, { value: pe }),
          info: L({}, e, { value: ve }),
          warn: L({}, e, { value: he }),
          error: L({}, e, { value: be }),
          group: L({}, e, { value: ge }),
          groupCollapsed: L({}, e, { value: xe }),
          groupEnd: L({}, e, { value: Ne })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function j(e) {
      if (se === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          se = t && t[1] || "", we = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + se + e + we;
    }
    function l(e, t) {
      if (!e || ie) return "";
      var o = le.get(e);
      if (o !== void 0) return o;
      ie = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var f = null;
      f = I.H, I.H = null, d();
      try {
        var U = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var D = function() {
                  throw Error();
                };
                if (Object.defineProperty(D.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(D, []);
                  } catch (_) {
                    var q = _;
                  }
                  Reflect.construct(e, [], D);
                } else {
                  try {
                    D.call();
                  } catch (_) {
                    q = _;
                  }
                  e.call(D.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (_) {
                  q = _;
                }
                (D = e()) && typeof D.catch == "function" && D.catch(function() {
                });
              }
            } catch (_) {
              if (_ && q && typeof _.stack == "string")
                return [_.stack, q.stack];
            }
            return [null, null];
          }
        };
        U.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var g = Object.getOwnPropertyDescriptor(
          U.DetermineComponentFrameRoot,
          "name"
        );
        g && g.configurable && Object.defineProperty(
          U.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var s = U.DetermineComponentFrameRoot(), R = s[0], W = s[1];
        if (R && W) {
          var S = R.split(`
`), $ = W.split(`
`);
          for (s = g = 0; g < S.length && !S[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; s < $.length && !$[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (g === S.length || s === $.length)
            for (g = S.length - 1, s = $.length - 1; 1 <= g && 0 <= s && S[g] !== $[s]; )
              s--;
          for (; 1 <= g && 0 <= s; g--, s--)
            if (S[g] !== $[s]) {
              if (g !== 1 || s !== 1)
                do
                  if (g--, s--, 0 > s || S[g] !== $[s]) {
                    var B = `
` + S[g].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, B), B;
                  }
                while (1 <= g && 0 <= s);
              break;
            }
        }
      } finally {
        ie = !1, I.H = f, w(), Error.prepareStackTrace = o;
      }
      return S = (S = e ? e.displayName || e.name : "") ? j(S) : "", typeof e == "function" && le.set(e, S), S;
    }
    function x(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return l(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return j(e);
      switch (e) {
        case re:
          return j("Suspense");
        case te:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            return e = l(e.render, !1), e;
          case oe:
            return x(e.type);
          case ne:
            t = e._payload, e = e._init;
            try {
              return x(e(t));
            } catch {
            }
        }
      return "";
    }
    function C() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function y(e) {
      if (me.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, t) {
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
    function N(e, t, o, f, U, g) {
      return o = g.ref, e = {
        $$typeof: a,
        type: e,
        key: t,
        props: g,
        _owner: U
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
    function i(e, t, o, f, U, g) {
      if (typeof e == "string" || typeof e == "function" || e === V || e === z || e === T || e === re || e === te || e === _e || typeof e == "object" && e !== null && (e.$$typeof === ne || e.$$typeof === oe || e.$$typeof === X || e.$$typeof === Y || e.$$typeof === ee || e.$$typeof === Me || e.getModuleId !== void 0)) {
        var s = t.children;
        if (s !== void 0)
          if (f)
            if (ae(s)) {
              for (f = 0; f < s.length; f++)
                v(s[f], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else v(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? f = "null" : ae(e) ? f = "array" : e !== void 0 && e.$$typeof === a ? (f = "<" + (r(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          f,
          s
        );
      if (me.call(t, "key")) {
        s = r(e);
        var R = Object.keys(t).filter(function(S) {
          return S !== "key";
        });
        f = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", je[s + f] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          s,
          R,
          s
        ), je[s + f] = !0);
      }
      if (s = null, o !== void 0 && (P(o), s = "" + o), y(t) && (P(t.key), s = "" + t.key), "key" in t) {
        o = {};
        for (var W in t)
          W !== "key" && (o[W] = t[W]);
      } else o = t;
      return s && k(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(e, s, g, U, C(), o);
    }
    function v(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (ae(e))
          for (var o = 0; o < e.length; o++) {
            var f = e[o];
            m(f) && c(f, t);
          }
        else if (m(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = fe && e[fe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            m(e.value) && c(e.value, t);
      }
    }
    function m(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function c(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = b(t), !Ce[t])) {
        Ce[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== C() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var f = I.getCurrentStack;
        I.getCurrentStack = function() {
          var U = x(e.type);
          return f && (U += f() || ""), U;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), I.getCurrentStack = f;
      }
    }
    function b(e) {
      var t = "", o = C();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var E = M, a = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), X = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), fe = Symbol.iterator, De = Symbol.for("react.client.reference"), I = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = Object.prototype.hasOwnProperty, L = Object.assign, Me = Symbol.for("react.client.reference"), ae = Array.isArray, J = 0, pe, ve, he, be, ge, xe, Ne;
    p.__reactDisabledLog = !0;
    var se, we, ie = !1, le = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), Ee, Ve = {}, je = {}, Ce = {};
    Z.Fragment = V, Z.jsxDEV = function(e, t, o, f, U, g) {
      return i(e, t, o, f, U, g);
    };
  }()), Z;
}
var Se;
function $e() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? F.exports = Ie() : F.exports = Le()), F.exports;
}
var n = $e();
const ue = Ae(null), Te = Ae(null);
function de() {
  const r = ce(ue);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
}
function ze() {
  const r = ce(Te);
  if (!r)
    throw new Error(
      "useVariationsState must be used within a VariationsProvider"
    );
  return [r.state, r.setState];
}
function Be(r) {
  const { activeIds: h, setActiveId: P, variations: p } = de(), d = h.get(r), w = O(() => Array.from(p.entries()).filter(([, l]) => l.group === r).map(([l, { label: x }]) => ({
    id: l,
    label: x
  })), [p, r]);
  return {
    /** The currently active variation */
    active: O(() => {
      if (!d) return null;
      const l = p.get(d);
      return l ? { id: d, label: l.label } : null;
    }, [d, p]),
    /** Set the active variation by ID */
    setActive: (l) => P(r, l),
    /** All available variations for this group */
    variations: w
  };
}
function Ke({
  children: r,
  disableQueryString: h = !1,
  initialState: P
}) {
  const [p, d] = G(
    /* @__PURE__ */ new Map()
  ), [w, j] = G(
    /* @__PURE__ */ new Map()
  ), [l, x] = G(
    () => P
  );
  K(() => {
    if (h || typeof window > "u") return;
    const i = new URLSearchParams(window.location.search), v = i.get("var");
    if (v)
      try {
        const c = v.split("_").map((b) => {
          const [E, a] = b.split(".");
          if (!E || !a) throw new Error("Invalid format");
          return [E, a];
        });
        d(new Map(c));
      } catch {
        d(/* @__PURE__ */ new Map());
      }
    const m = i.get("s");
    if (m)
      try {
        const c = JSON.parse(atob(m));
        x(c);
      } catch {
      }
  }, [h]), K(() => {
    if (h || typeof window > "u") return;
    const i = new URLSearchParams(), v = Array.from(p.entries());
    if (v.length > 0) {
      const b = v.map(([E, a]) => `${E}.${a}`).join("_");
      i.set("var", b);
    }
    if (l !== void 0) {
      const b = btoa(JSON.stringify(l));
      i.set("s", b);
    }
    const m = i.toString(), c = m ? `${window.location.pathname}?${m}` : window.location.pathname;
    window.history.replaceState({}, "", c);
  }, [p, l, h]), K(() => {
    if (h || typeof window > "u") return;
    const i = () => {
      const v = new URLSearchParams(window.location.search), m = v.get("var");
      if (m)
        try {
          const b = m.split("_").map((E) => {
            const [a, u] = E.split(".");
            if (!a || !u) throw new Error("Invalid format");
            return [a, u];
          });
          d(new Map(b));
        } catch {
          d(/* @__PURE__ */ new Map());
        }
      else
        d(/* @__PURE__ */ new Map());
      const c = v.get("s");
      if (c)
        try {
          const b = JSON.parse(atob(c));
          x(b);
        } catch {
        }
    };
    return window.addEventListener("popstate", i), () => window.removeEventListener("popstate", i);
  }, [h]);
  const C = O(() => {
    const i = p.get("root");
    if (!i) return null;
    const v = (c, b) => {
      const E = {
        id: c,
        group: b,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(w.entries()).forEach(([, a]) => {
        if (a.parentId === c) {
          const u = p.get(a.group);
          u && E.children.set(
            a.group,
            v(u, a.group)
          );
        }
      }), E;
    };
    return v(i, "root");
  }, [p, w]), y = ye(
    (i, v) => {
      d((m) => {
        const c = new Map(m);
        return c.set(i, v), i === "root" ? Array.from(m.keys()).forEach((b) => {
          b !== "root" && c.delete(b);
        }) : Array.from(w.entries()).find(
          ([E]) => E === v
        ) && Array.from(m.keys()).forEach((E) => {
          const a = Array.from(w.entries()).find(
            ([, u]) => u.group === E
          );
          a && a[1].parentId === v && c.delete(E);
        }), c;
      });
    },
    [w]
  ), k = ye(
    (i, v, m, c, b) => {
      j((E) => {
        const a = E.get(v);
        if ((a == null ? void 0 : a.group) === i && (a == null ? void 0 : a.label) === m && (a == null ? void 0 : a.groupLabel) === c && (a == null ? void 0 : a.parentId) === b)
          return E;
        const u = new Map(E);
        return u.set(v, { group: i, label: m, groupLabel: c, parentId: b }), u;
      });
    },
    []
  ), A = O(
    () => ({
      activeIds: p,
      setActiveId: y,
      registerVariation: k,
      variations: w,
      activeTree: C,
      disableQueryString: h
    }),
    [
      p,
      y,
      k,
      w,
      C,
      h
    ]
  ), N = O(
    () => ({
      state: l,
      setState: (i) => {
        x(i);
      }
    }),
    [l]
  );
  return /* @__PURE__ */ n.jsxDEV(ue.Provider, { value: A, children: /* @__PURE__ */ n.jsxDEV(Te.Provider, { value: N, children: r }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 332,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 331,
    columnNumber: 5
  }, this);
}
function Q(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Re({
  label: r,
  children: h,
  ...P
}) {
  const { group: p = "", id: d, groupLabel: w, parentId: j } = P, l = O(() => d || Q(r), [d, r]), { activeIds: x, registerVariation: C } = de(), y = x.get(p) === l;
  return K(() => {
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
    C(p, l, r, w || p, j);
  }, [p, l, r, w, j, C]), y ? /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: h }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this) : null;
}
const Ye = "root";
function We(r) {
  return M.isValidElement(r) && r.type === Re && typeof r.props.label == "string";
}
function Ge({
  isRoot: r = !1,
  label: h,
  children: P,
  ...p
}) {
  const { parentId: d, group: w } = p, j = ce(ue);
  if (!j)
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
  const l = w || (r ? Ye : Q(h)), { activeIds: x, setActiveId: C, variations: y } = j, k = O(() => {
    const N = /* @__PURE__ */ new Map();
    return Array.from(y.entries()).forEach(([i, v]) => {
      const { group: m, label: c, groupLabel: b } = v;
      N.has(m) || N.set(m, []), N.get(m).push([i, { label: c, groupLabel: b }]);
    }), N;
  }, [y]), A = O(() => M.Children.map(P, (N) => {
    if (M.isValidElement(N)) {
      if (N.type === Re) {
        if (!We(N))
          throw new Error("Invalid Variation component");
        const i = Q(N.props.label);
        return M.cloneElement(N, {
          ...N.props,
          group: l,
          groupLabel: h,
          id: i,
          parentId: d
        });
      } else if (N.type === Ge) {
        const i = N, v = x.get(l), m = Q(i.props.label);
        return M.cloneElement(i, {
          ...i.props,
          parentId: v,
          group: m
        });
      }
    }
    return N;
  }), [P, l, h, x, d]);
  return K(() => {
    if (!x.has(l)) {
      const N = k.get(l);
      if (N && N.length > 0) {
        const [i] = N[0];
        C(l, i);
      }
    }
  }, [l, k, x, C]), /* @__PURE__ */ n.jsxDEV(n.Fragment, { children: A }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
const Ue = ({
  group: r,
  variations: h,
  activeIds: P,
  setActiveId: p,
  isMinimized: d
}) => {
  var l, x, C, y;
  const w = (x = (l = h[0]) == null ? void 0 : l[1]) == null ? void 0 : x.groupLabel, j = P.get(r);
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
        value: j || "",
        onChange: (k) => {
          p(r, k.target.value);
        },
        className: "variation-select",
        tabIndex: d ? -1 : 0,
        title: ((y = (C = h.find(([k]) => k === j)) == null ? void 0 : C[1]) == null ? void 0 : y.label) || "",
        children: h.map(
          ([k, { label: A }]) => /* @__PURE__ */ n.jsxDEV(
            "option",
            {
              value: k,
              title: A,
              children: A
            },
            k,
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
  minimizedByDefault: h = !1,
  className: P,
  ...p
}) {
  const [d, w] = G(h), [j, l] = G(!1), [x, C] = G(
    "variations"
  ), { activeIds: y, setActiveId: k, variations: A, disableQueryString: N } = de(), [i, v] = ze(), m = () => {
    const a = new URLSearchParams(window.location.search), u = Array.from(y.entries());
    if (u.length > 0) {
      const z = u.map(([Y, X]) => `${Y}.${X}`).join("_");
      a.set("var", z);
    } else
      a.delete("var");
    const V = a.toString(), T = window.location.href.split("?")[0] + (V ? `?${V}` : "");
    navigator.clipboard.writeText(T).then(() => {
      l(!0), setTimeout(() => l(!1), 2e3);
    });
  }, c = M.useMemo(() => {
    const a = /* @__PURE__ */ new Map();
    return Array.from(A.entries()).forEach(([u, V]) => {
      const { group: T, label: z, groupLabel: Y } = V;
      a.has(T) || a.set(T, []), a.get(T).push([u, { label: z, groupLabel: Y }]);
    }), a;
  }, [A]), E = (() => {
    const a = [], u = /* @__PURE__ */ new Set();
    if (c.has("root")) {
      const V = c.get("root");
      a.push(
        /* @__PURE__ */ n.jsxDEV(
          Ue,
          {
            group: "root",
            variations: V,
            activeIds: y,
            setActiveId: k,
            isMinimized: d
          },
          "root",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 218,
            columnNumber: 9
          },
          this
        )
      ), u.add("root");
    }
    return Array.from(y.entries()).forEach(([V]) => {
      if (!u.has(V) && c.has(V)) {
        const T = c.get(V);
        a.push(
          /* @__PURE__ */ n.jsxDEV(
            Ue,
            {
              group: V,
              variations: T,
              activeIds: y,
              setActiveId: k,
              isMinimized: d
            },
            V,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 235,
              columnNumber: 11
            },
            this
          )
        ), u.add(V);
      }
    }), a.length === 0 ? /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty", children: [
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ n.jsxDEV("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ n.jsxDEV("code", { children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 253,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 252,
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
        lineNumber: 255,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 250,
      columnNumber: 9
    }, this) : a;
  })();
  return M.useEffect(() => {
    const a = (u) => {
      u.code === "KeyV" && u.altKey && !u.ctrlKey && !u.shiftKey && !u.metaKey && (u.preventDefault(), w((V) => !V));
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, []), /* @__PURE__ */ n.jsxDEV(
    "div",
    {
      className: `variations-controls-container ${P || ""}`,
      ...p,
      children: [
        /* @__PURE__ */ n.jsxDEV("div", { className: `variations-controls ${d ? "minimized" : ""}`, children: d ? /* @__PURE__ */ n.jsxDEV(
          "button",
          {
            className: "variations-circle",
            onClick: () => w(!1),
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
                    lineNumber: 347,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 348,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 349,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 350,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 336,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 331,
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
                      lineNumber: 372,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 373,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 374,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ n.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 375,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 357,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ n.jsxDEV("div", { className: "variations-tabs", children: [
                /* @__PURE__ */ n.jsxDEV(
                  "button",
                  {
                    className: `variations-tab ${x === "variations" ? "active" : ""}`,
                    onClick: () => C("variations"),
                    children: "Variations"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 378,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ n.jsxDEV(
                  "button",
                  {
                    className: `variations-tab ${x === "state" ? "active" : ""}`,
                    onClick: () => C("state"),
                    children: "State"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 386,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 377,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 356,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ n.jsxDEV("div", { className: "variations-header-actions", children: [
              !N && /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-button",
                  onClick: m,
                  title: "Copy link to clipboard",
                  tabIndex: d ? -1 : 0,
                  children: j ? /* @__PURE__ */ n.jsxDEV(
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
                          lineNumber: 412,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 405,
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
                          lineNumber: 432,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ n.jsxDEV("path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }, void 0, !1, {
                          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                          lineNumber: 433,
                          columnNumber: 25
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
                            lineNumber: 434,
                            columnNumber: 25
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 421,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 398,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ n.jsxDEV(
                "button",
                {
                  className: "variations-header-toggle",
                  onClick: () => w(!0),
                  tabIndex: d ? -1 : 0,
                  children: "×"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 444,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 396,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 355,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ n.jsxDEV("div", { className: "variation-content", children: x === "variations" ? /* @__PURE__ */ n.jsxDEV("div", { className: "variation-groups", children: E }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 456,
            columnNumber: 13
          }, this) : /* @__PURE__ */ n.jsxDEV("div", { className: "variation-state", children: /* @__PURE__ */ n.jsxDEV("div", { className: "state-editor", children: /* @__PURE__ */ n.jsxDEV(
            "textarea",
            {
              value: JSON.stringify(i, null, 2),
              onChange: (a) => {
                try {
                  const u = JSON.parse(a.target.value);
                  v(u);
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
              lineNumber: 460,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 459,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 458,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 454,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 354,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 329,
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
          lineNumber: 480,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 325,
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
  de as useVariations,
  ze as useVariationsState
};
