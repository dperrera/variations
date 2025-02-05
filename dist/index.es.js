import I, { createContext as Re, useContext as le, useMemo as L, useState as G, useEffect as F, useCallback as Se } from "react";
var Z = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function $e() {
  if (Ne) return X;
  Ne = 1;
  var t = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
  function j(g, i, d) {
    var k = null;
    if (d !== void 0 && (k = "" + d), i.key !== void 0 && (k = "" + i.key), "key" in i) {
      d = {};
      for (var l in i)
        l !== "key" && (d[l] = i[l]);
    } else d = i;
    return i = d.ref, {
      $$typeof: t,
      type: g,
      key: k,
      ref: i !== void 0 ? i : null,
      props: d
    };
  }
  return X.Fragment = b, X.jsx = j, X.jsxs = j, X;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function ze() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ie ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case v:
          return "Portal";
        case U:
          return "Profiler";
        case Y:
          return "StrictMode";
        case ee:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case de:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case D:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case oe:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function j(e) {
      try {
        b(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), b(e);
      }
    }
    function g() {
    }
    function i() {
      if (J === 0) {
        ge = console.log, ve = console.info, he = console.warn, me = console.error, xe = console.group, be = console.groupCollapsed, we = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: g,
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
    function d() {
      if (J--, J === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, e, { value: ge }),
          info: $({}, e, { value: ve }),
          warn: $({}, e, { value: he }),
          error: $({}, e, { value: me }),
          group: $({}, e, { value: xe }),
          groupCollapsed: $({}, e, { value: be }),
          groupEnd: $({}, e, { value: we })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function k(e) {
      if (ae === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          ae = r && r[1] || "", Ee = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + ae + e + Ee;
    }
    function l(e, r) {
      if (!e || ie) return "";
      var o = se.get(e);
      if (o !== void 0) return o;
      ie = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var p = null;
      p = P.H, P.H = null, i();
      try {
        var A = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (M) {
                    var K = M;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (M) {
                    K = M;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (M) {
                  K = M;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (M) {
              if (M && K && typeof M.stack == "string")
                return [M.stack, K.stack];
            }
            return [null, null];
          }
        };
        A.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var y = Object.getOwnPropertyDescriptor(
          A.DetermineComponentFrameRoot,
          "name"
        );
        y && y.configurable && Object.defineProperty(
          A.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var s = A.DetermineComponentFrameRoot(), V = s[0], W = s[1];
        if (V && W) {
          var T = V.split(`
`), z = W.split(`
`);
          for (s = y = 0; y < T.length && !T[y].includes(
            "DetermineComponentFrameRoot"
          ); )
            y++;
          for (; s < z.length && !z[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (y === T.length || s === z.length)
            for (y = T.length - 1, s = z.length - 1; 1 <= y && 0 <= s && T[y] !== z[s]; )
              s--;
          for (; 1 <= y && 0 <= s; y--, s--)
            if (T[y] !== z[s]) {
              if (y !== 1 || s !== 1)
                do
                  if (y--, s--, 0 > s || T[y] !== z[s]) {
                    var B = `
` + T[y].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, B), B;
                  }
                while (1 <= y && 0 <= s);
              break;
            }
        }
      } finally {
        ie = !1, P.H = p, d(), Error.prepareStackTrace = o;
      }
      return T = (T = e ? e.displayName || e.name : "") ? k(T) : "", typeof e == "function" && se.set(e, T), T;
    }
    function w(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return l(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return k(e);
      switch (e) {
        case ee:
          return k("Suspense");
        case te:
          return k("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            return e = l(e.render, !1), e;
          case re:
            return w(e.type);
          case oe:
            r = e._payload, e = e._init;
            try {
              return w(e(r));
            } catch {
            }
        }
      return "";
    }
    function C() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function S(e) {
      if (pe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function N(e, r) {
      function o() {
        ye || (ye = !0, console.error(
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
      return ke[e] || (ke[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, o, p, A, y) {
      return o = y.ref, e = {
        $$typeof: a,
        type: e,
        key: r,
        props: y,
        _owner: A
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
    function u(e, r, o, p, A, y) {
      if (typeof e == "string" || typeof e == "function" || e === R || e === U || e === Y || e === ee || e === te || e === Oe || typeof e == "object" && e !== null && (e.$$typeof === oe || e.$$typeof === re || e.$$typeof === de || e.$$typeof === H || e.$$typeof === D || e.$$typeof === Le || e.getModuleId !== void 0)) {
        var s = r.children;
        if (s !== void 0)
          if (p)
            if (ne(s)) {
              for (p = 0; p < s.length; p++)
                h(s[p], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? p = "null" : ne(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (t(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          p,
          s
        );
      if (pe.call(r, "key")) {
        s = t(e);
        var V = Object.keys(r).filter(function(T) {
          return T !== "key";
        });
        p = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", je[s + p] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          s,
          V,
          s
        ), je[s + p] = !0);
      }
      if (s = null, o !== void 0 && (j(o), s = "" + o), S(r) && (j(r.key), s = "" + r.key), "key" in r) {
        o = {};
        for (var W in r)
          W !== "key" && (o[W] = r[W]);
      } else o = r;
      return s && N(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(e, s, y, A, C(), o);
    }
    function h(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Pe) {
        if (ne(e))
          for (var o = 0; o < e.length; o++) {
            var p = e[o];
            f(p) && m(p, r);
          }
        else if (f(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = fe && e[fe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            f(e.value) && m(e.value, r);
      }
    }
    function f(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function m(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = x(r), !Ce[r])) {
        Ce[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== C() && (o = null, typeof e._owner.tag == "number" ? o = t(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var p = P.getCurrentStack;
        P.getCurrentStack = function() {
          var A = w(e.type);
          return p && (A += p() || ""), A;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), P.getCurrentStack = p;
      }
    }
    function x(e) {
      var r = "", o = C();
      return o && (o = t(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = t(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var c = I, a = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), de = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = Symbol.for("react.client.reference"), P = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, $ = Object.assign, Le = Symbol.for("react.client.reference"), ne = Array.isArray, J = 0, ge, ve, he, me, xe, be, we;
    g.__reactDisabledLog = !0;
    var ae, Ee, ie = !1, se = new (typeof WeakMap == "function" ? WeakMap : Map)(), Pe = Symbol.for("react.client.reference"), ye, ke = {}, je = {}, Ce = {};
    q.Fragment = R, q.jsx = function(e, r, o, p, A) {
      return u(e, r, o, !1, p, A);
    }, q.jsxs = function(e, r, o, p, A) {
      return u(e, r, o, !0, p, A);
    };
  }()), q;
}
var Te;
function Ye() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? Z.exports = $e() : Z.exports = ze()), Z.exports;
}
var n = Ye();
const ce = Re(null), Ve = Re(null);
function ue() {
  const t = le(ce);
  if (!t)
    throw new Error("useVariations must be used within a VariationsProvider");
  return t;
}
function Ue() {
  const t = le(Ve);
  if (!t)
    throw new Error("useVariationsState must be used within a VariationsProvider");
  return [t.state, t.setState];
}
function Xe(t) {
  const {
    activeIds: b,
    setActiveId: j,
    variations: g
  } = ue(), i = b.get(t), d = L(() => Array.from(g.entries()).filter(([, l]) => l.group === t).map(([l, {
    label: w
  }]) => ({
    id: l,
    label: w
  })), [g, t]);
  return {
    /** The currently active variation */
    active: L(() => {
      if (!i) return null;
      const l = g.get(i);
      return l ? {
        id: i,
        label: l.label
      } : null;
    }, [i, g]),
    /** Set the active variation by ID */
    setActive: (l) => j(t, l),
    /** All available variations for this group */
    variations: d
  };
}
function qe({
  children: t,
  disableQueryString: b = !1,
  initialState: j
}) {
  const [g, i] = G(/* @__PURE__ */ new Map()), [d, k] = G(/* @__PURE__ */ new Map()), [l, w] = G(() => j);
  F(() => {
    if (b || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search), h = u.get("var");
    if (h)
      try {
        const m = h.split("_").map((x) => {
          const [c, a] = x.split(".");
          if (!c || !a) throw new Error("Invalid format");
          return [c, a];
        });
        i(new Map(m));
      } catch {
        i(/* @__PURE__ */ new Map());
      }
    const f = u.get("s");
    if (f)
      try {
        const m = JSON.parse(atob(f));
        w(m);
      } catch {
      }
  }, [b]), F(() => {
    if (b || typeof window > "u") return;
    const u = new URLSearchParams(), h = Array.from(g.entries());
    if (h.length > 0) {
      const x = h.map(([c, a]) => `${c}.${a}`).join("_");
      u.set("var", x);
    }
    if (l !== void 0) {
      const x = btoa(JSON.stringify(l));
      u.set("s", x);
    }
    const f = u.toString(), m = f ? `${window.location.pathname}?${f}` : window.location.pathname;
    window.history.replaceState({}, "", m);
  }, [g, l, b]), F(() => {
    if (b || typeof window > "u") return;
    const u = () => {
      const h = new URLSearchParams(window.location.search), f = h.get("var");
      if (f)
        try {
          const x = f.split("_").map((c) => {
            const [a, v] = c.split(".");
            if (!a || !v) throw new Error("Invalid format");
            return [a, v];
          });
          i(new Map(x));
        } catch {
          i(/* @__PURE__ */ new Map());
        }
      else
        i(/* @__PURE__ */ new Map());
      const m = h.get("s");
      if (m)
        try {
          const x = JSON.parse(atob(m));
          w(x);
        } catch {
        }
    };
    return window.addEventListener("popstate", u), () => window.removeEventListener("popstate", u);
  }, [b]);
  const C = L(() => {
    const u = g.get("root");
    if (!u) return null;
    const h = (m, x) => {
      const c = {
        id: m,
        group: x,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(d.entries()).forEach(([, a]) => {
        if (a.parentId === m) {
          const v = g.get(a.group);
          v && c.children.set(a.group, h(v, a.group));
        }
      }), c;
    };
    return h(u, "root");
  }, [g, d]), S = Se((u, h) => {
    i((f) => {
      const m = new Map(f);
      return m.set(u, h), u === "root" ? Array.from(f.keys()).forEach((x) => {
        x !== "root" && m.delete(x);
      }) : Array.from(d.entries()).find(([c]) => c === h) && Array.from(f.keys()).forEach((c) => {
        const a = Array.from(d.entries()).find(([, v]) => v.group === c);
        a && a[1].parentId === h && m.delete(c);
      }), m;
    });
  }, [d]), N = Se((u, h, f, m, x) => {
    k((c) => {
      const a = c.get(h);
      if ((a == null ? void 0 : a.group) === u && (a == null ? void 0 : a.label) === f && (a == null ? void 0 : a.groupLabel) === m && (a == null ? void 0 : a.parentId) === x)
        return c;
      const v = new Map(c);
      return v.set(h, {
        group: u,
        label: f,
        groupLabel: m,
        parentId: x
      }), v;
    });
  }, []), _ = L(() => ({
    activeIds: g,
    setActiveId: S,
    registerVariation: N,
    variations: d,
    activeTree: C
  }), [g, S, N, d, C]), E = L(() => ({
    state: l,
    setState: (u) => {
      w(u);
    }
  }), [l]);
  return /* @__PURE__ */ n.jsx(ce.Provider, { value: _, children: /* @__PURE__ */ n.jsx(Ve.Provider, { value: E, children: t }) });
}
function Q(t) {
  return t.toLowerCase().replace(/\s+/g, "-");
}
function Me({
  label: t,
  children: b,
  ...j
}) {
  const {
    group: g = "",
    id: i,
    groupLabel: d,
    parentId: k
  } = j, l = L(() => i || Q(t), [i, t]), {
    activeIds: w,
    registerVariation: C
  } = ue(), S = w.get(g) === l;
  return F(() => {
    if (!g) {
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
    C(g, l, t, d || g, k);
  }, [g, l, t, d, k, C]), S ? /* @__PURE__ */ n.jsx(n.Fragment, { children: b }) : null;
}
const We = "root";
function Ge(t) {
  return I.isValidElement(t) && t.type === Me && typeof t.props.label == "string";
}
function Je({
  isRoot: t = !1,
  label: b,
  children: j,
  ...g
}) {
  const {
    parentId: i,
    group: d
  } = g, k = le(ce);
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
  if (t && i)
    throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);
  const l = d || (t ? We : Q(b)), {
    activeIds: w,
    setActiveId: C,
    variations: S
  } = k, N = L(() => {
    const E = /* @__PURE__ */ new Map();
    return Array.from(S.entries()).forEach(([u, h]) => {
      const {
        group: f,
        label: m,
        groupLabel: x
      } = h;
      E.has(f) || E.set(f, []), E.get(f).push([u, {
        label: m,
        groupLabel: x
      }]);
    }), E;
  }, [S]), _ = L(() => I.Children.map(j, (E) => {
    if (I.isValidElement(E)) {
      if (E.type === Me) {
        if (!Ge(E))
          throw new Error("Invalid Variation component");
        const u = Q(E.props.label);
        return I.cloneElement(E, {
          ...E.props,
          group: l,
          groupLabel: b,
          id: u,
          parentId: i
        });
      } else if (E.type === Je) {
        const u = E, h = w.get(l), f = Q(u.props.label);
        return I.cloneElement(u, {
          ...u.props,
          parentId: h,
          group: f
        });
      }
    }
    return E;
  }), [j, l, b, w, i]);
  return F(() => {
    if (!w.has(l)) {
      const E = N.get(l);
      if (E && E.length > 0) {
        const [u] = E[0];
        C(l, u);
      }
    }
  }, [l, N, w, C]), /* @__PURE__ */ n.jsx(n.Fragment, { children: _ });
}
const _e = ({
  group: t,
  variations: b,
  activeIds: j,
  setActiveId: g,
  isMinimized: i
}) => {
  var l, w, C, S;
  const d = (w = (l = b[0]) == null ? void 0 : l[1]) == null ? void 0 : w.groupLabel, k = j.get(t);
  return /* @__PURE__ */ n.jsxs("div", { className: "variation-group", children: [
    /* @__PURE__ */ n.jsx("div", { className: "variation-title", title: d, children: d }),
    /* @__PURE__ */ n.jsx("div", { className: "variations-selects", children: /* @__PURE__ */ n.jsx("select", { value: k || "", onChange: (N) => {
      g(t, N.target.value);
    }, className: "variation-select", tabIndex: i ? -1 : 0, title: ((S = (C = b.find(([N]) => N === k)) == null ? void 0 : C[1]) == null ? void 0 : S.label) || "", children: b.map(([N, {
      label: _
    }]) => /* @__PURE__ */ n.jsx("option", { value: N, title: _, children: _ }, N)) }) }),
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
  minimizedByDefault: b = !1,
  className: j,
  ...g
}) {
  const [i, d] = G(b), [k, l] = G(!1), [w, C] = G("variations"), {
    activeIds: S,
    setActiveId: N,
    variations: _
  } = ue(), [E, u] = Ue(), h = () => {
    const c = new URLSearchParams(window.location.search), a = Array.from(S.entries());
    if (a.length > 0) {
      const Y = a.map(([U, H]) => `${U}.${H}`).join("_");
      c.set("var", Y);
    } else
      c.delete("var");
    const v = c.toString(), R = window.location.href.split("?")[0] + (v ? `?${v}` : "");
    navigator.clipboard.writeText(R).then(() => {
      l(!0), setTimeout(() => l(!1), 2e3);
    });
  }, f = I.useMemo(() => {
    const c = /* @__PURE__ */ new Map();
    return Array.from(_.entries()).forEach(([a, v]) => {
      const {
        group: R,
        label: Y,
        groupLabel: U
      } = v;
      c.has(R) || c.set(R, []), c.get(R).push([a, {
        label: Y,
        groupLabel: U
      }]);
    }), c;
  }, [_]), x = (() => {
    const c = [], a = /* @__PURE__ */ new Set();
    if (f.has("root")) {
      const v = f.get("root");
      c.push(/* @__PURE__ */ n.jsx(_e, { group: "root", variations: v, activeIds: S, setActiveId: N, isMinimized: i }, "root")), a.add("root");
    }
    return Array.from(S.entries()).forEach(([v]) => {
      if (!a.has(v) && f.has(v)) {
        const R = f.get(v);
        c.push(/* @__PURE__ */ n.jsx(_e, { group: v, variations: R, activeIds: S, setActiveId: N, isMinimized: i }, v)), a.add(v);
      }
    }), c.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: "variations-empty", children: [
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
    ] }) : c;
  })();
  return I.useEffect(() => {
    const c = (a) => {
      a.code === "KeyV" && a.altKey && !a.ctrlKey && !a.shiftKey && !a.metaKey && (a.preventDefault(), d((v) => !v));
    };
    return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
  }, []), /* @__PURE__ */ n.jsxs("div", { className: `variations-controls-container ${j || ""}`, ...g, children: [
    /* @__PURE__ */ n.jsx("div", { className: `variations-controls ${i ? "minimized" : ""}`, children: i ? /* @__PURE__ */ n.jsx("button", { className: "variations-circle", onClick: () => d(!1), tabIndex: i ? 0 : -1, children: /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
          /* @__PURE__ */ n.jsxs("div", { className: "variations-tabs", children: [
            /* @__PURE__ */ n.jsx("button", { className: `variations-tab ${w === "variations" ? "active" : ""}`, onClick: () => C("variations"), children: "Variations" }),
            /* @__PURE__ */ n.jsx("button", { className: `variations-tab ${w === "state" ? "active" : ""}`, onClick: () => C("state"), children: "State" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "variations-header-actions", children: [
          /* @__PURE__ */ n.jsx("button", { className: "variations-header-button", onClick: h, title: "Copy link to clipboard", tabIndex: i ? -1 : 0, children: k ? /* @__PURE__ */ n.jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n.jsx("path", { d: "M20 6L9 17L4 12", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ n.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ n.jsx("path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }),
            /* @__PURE__ */ n.jsx("path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }),
            /* @__PURE__ */ n.jsx("line", { x1: "8", x2: "16", y1: "12", y2: "12" })
          ] }) }),
          /* @__PURE__ */ n.jsx("button", { className: "variations-header-toggle", onClick: () => d(!0), tabIndex: i ? -1 : 0, children: "×" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "variation-content", children: w === "variations" ? /* @__PURE__ */ n.jsx("div", { className: "variation-groups", children: x }) : /* @__PURE__ */ n.jsx("div", { className: "variation-state", children: /* @__PURE__ */ n.jsx("div", { className: "state-editor", children: /* @__PURE__ */ n.jsx("textarea", { value: JSON.stringify(E, null, 2), onChange: (c) => {
        try {
          const a = JSON.parse(c.target.value);
          u(a);
        } catch {
        }
      }, spellCheck: !1, className: "state-textarea" }) }) }) })
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
            padding: 2px;
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
        ` })
  ] });
}
export {
  Me as Variation,
  Je as Variations,
  Fe as VariationsControls,
  qe as VariationsProvider,
  Xe as useVariation,
  ue as useVariations,
  Ue as useVariationsState
};
