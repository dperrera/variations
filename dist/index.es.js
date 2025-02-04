import T, { createContext as Oe, useState as te, useEffect as D, useMemo as I, useCallback as Ne, useContext as ke } from "react";
var L = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function De() {
  if (Ve) return z;
  Ve = 1;
  var r = Symbol.for("react.fragment");
  return z.Fragment = r, z.jsxDEV = void 0, z;
}
var Y = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Ie() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ue ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case X:
          return "Fragment";
        case Re:
          return "Portal";
        case ae:
          return "Profiler";
        case ne:
          return "StrictMode";
        case J:
          return "Suspense";
        case q:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case se:
            return (e.displayName || "Context") + ".Provider";
          case ie:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case H:
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
    function w(e) {
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
    function b() {
    }
    function p() {
      if (M === 0) {
        ue = console.log, de = console.info, fe = console.warn, me = console.error, pe = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: b,
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
      M++;
    }
    function V() {
      if (M--, M === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: _({}, e, { value: ue }),
          info: _({}, e, { value: de }),
          warn: _({}, e, { value: fe }),
          error: _({}, e, { value: me }),
          group: _({}, e, { value: pe }),
          groupCollapsed: _({}, e, { value: ve }),
          groupEnd: _({}, e, { value: ge })
        });
      }
      0 > M && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function x(e) {
      if (Q === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          Q = t && t[1] || "", he = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Q + e + he;
    }
    function g(e, t) {
      if (!e || ee) return "";
      var o = re.get(e);
      if (o !== void 0) return o;
      ee = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var f = null;
      f = R.H, R.H = null, p();
      try {
        var C = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var A = function() {
                  throw Error();
                };
                if (Object.defineProperty(A.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(A, []);
                  } catch (P) {
                    var $ = P;
                  }
                  Reflect.construct(e, [], A);
                } else {
                  try {
                    A.call();
                  } catch (P) {
                    $ = P;
                  }
                  e.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (P) {
                  $ = P;
                }
                (A = e()) && typeof A.catch == "function" && A.catch(function() {
                });
              }
            } catch (P) {
              if (P && $ && typeof P.stack == "string")
                return [P.stack, $.stack];
            }
            return [null, null];
          }
        };
        C.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var v = Object.getOwnPropertyDescriptor(
          C.DetermineComponentFrameRoot,
          "name"
        );
        v && v.configurable && Object.defineProperty(
          C.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var a = C.DetermineComponentFrameRoot(), k = a[0], S = a[1];
        if (k && S) {
          var j = k.split(`
`), U = S.split(`
`);
          for (a = v = 0; v < j.length && !j[v].includes(
            "DetermineComponentFrameRoot"
          ); )
            v++;
          for (; a < U.length && !U[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          if (v === j.length || a === U.length)
            for (v = j.length - 1, a = U.length - 1; 1 <= v && 0 <= a && j[v] !== U[a]; )
              a--;
          for (; 1 <= v && 0 <= a; v--, a--)
            if (j[v] !== U[a]) {
              if (v !== 1 || a !== 1)
                do
                  if (v--, a--, 0 > a || j[v] !== U[a]) {
                    var O = `
` + j[v].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, O), O;
                  }
                while (1 <= v && 0 <= a);
              break;
            }
        }
      } finally {
        ee = !1, R.H = f, V(), Error.prepareStackTrace = o;
      }
      return j = (j = e ? e.displayName || e.name : "") ? x(j) : "", typeof e == "function" && re.set(e, j), j;
    }
    function E(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return g(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return x(e);
      switch (e) {
        case J:
          return x("Suspense");
        case q:
          return x("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            return e = g(e.render, !1), e;
          case F:
            return E(e.type);
          case H:
            t = e._payload, e = e._init;
            try {
              return E(e(t));
            } catch {
            }
        }
      return "";
    }
    function N() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function m(e) {
      if (ce.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, t) {
      function o() {
        be || (be = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function l() {
      var e = r(this.type);
      return xe[e] || (xe[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function n(e, t, o, f, C, v) {
      return o = v.ref, e = {
        $$typeof: K,
        type: e,
        key: t,
        props: v,
        _owner: C
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: l
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
    function i(e, t, o, f, C, v) {
      if (typeof e == "string" || typeof e == "function" || e === X || e === ae || e === ne || e === J || e === q || e === _e || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === F || e.$$typeof === se || e.$$typeof === ie || e.$$typeof === B || e.$$typeof === Se || e.getModuleId !== void 0)) {
        var a = t.children;
        if (a !== void 0)
          if (f)
            if (Z(a)) {
              for (f = 0; f < a.length; f++)
                d(a[f], e);
              Object.freeze && Object.freeze(a);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else d(a, e);
      } else
        a = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? f = "null" : Z(e) ? f = "array" : e !== void 0 && e.$$typeof === K ? (f = "<" + (r(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          f,
          a
        );
      if (ce.call(t, "key")) {
        a = r(e);
        var k = Object.keys(t).filter(function(j) {
          return j !== "key";
        });
        f = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", we[a + f] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          a,
          k,
          a
        ), we[a + f] = !0);
      }
      if (a = null, o !== void 0 && (w(o), a = "" + o), m(t) && (w(t.key), a = "" + t.key), "key" in t) {
        o = {};
        for (var S in t)
          S !== "key" && (o[S] = t[S]);
      } else o = t;
      return a && u(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), n(e, a, v, C, N(), o);
    }
    function d(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Me) {
        if (Z(e))
          for (var o = 0; o < e.length; o++) {
            var f = e[o];
            c(f) && y(f, t);
          }
        else if (c(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = le && e[le] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            c(e.value) && y(e.value, t);
      }
    }
    function c(e) {
      return typeof e == "object" && e !== null && e.$$typeof === K;
    }
    function y(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = W(t), !Ee[t])) {
        Ee[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== N() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var f = R.getCurrentStack;
        R.getCurrentStack = function() {
          var C = E(e.type);
          return f && (C += f() || ""), C;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), R.getCurrentStack = f;
      }
    }
    function W(e) {
      var t = "", o = N();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var Te = T, K = Symbol.for("react.transitional.element"), Re = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), se = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), le = Symbol.iterator, Ue = Symbol.for("react.client.reference"), R = Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, _ = Object.assign, Se = Symbol.for("react.client.reference"), Z = Array.isArray, M = 0, ue, de, fe, me, pe, ve, ge;
    b.__reactDisabledLog = !0;
    var Q, he, ee = !1, re = new (typeof WeakMap == "function" ? WeakMap : Map)(), Me = Symbol.for("react.client.reference"), be, xe = {}, we = {}, Ee = {};
    Y.Fragment = X, Y.jsxDEV = function(e, t, o, f, C, v) {
      return i(e, t, o, f, C, v);
    };
  }()), Y;
}
var ye;
function $e() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? L.exports = De() : L.exports = Ie()), L.exports;
}
var s = $e();
const oe = Oe(
  null
), Pe = () => {
  const r = ke(oe);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
};
function We({
  children: r,
  disableQueryString: h = !1
}) {
  const [w, b] = te(
    /* @__PURE__ */ new Map()
  ), [p, V] = te(
    /* @__PURE__ */ new Map()
  );
  D(() => {
    if (h || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search).get("var");
    if (u)
      try {
        const l = u.split("_").map((n) => {
          const [i, d] = n.split(".");
          if (!i || !d) throw new Error("Invalid format");
          return [i, d];
        });
        b(new Map(l));
      } catch {
        b(/* @__PURE__ */ new Map());
      }
  }, [h]), D(() => {
    if (h || typeof window > "u") return;
    const m = new URLSearchParams(window.location.search), u = Array.from(w.entries());
    if (u.length === 0)
      m.delete("var");
    else {
      const i = u.map(([d, c]) => `${d}.${c}`).join("_");
      m.set("var", i);
    }
    const l = m.toString(), n = l ? `${window.location.pathname}?${l}` : window.location.pathname;
    window.history.replaceState({}, "", n);
  }, [w, h]), D(() => {
    if (h || typeof window > "u") return;
    const m = () => {
      const l = new URLSearchParams(window.location.search).get("var");
      if (l)
        try {
          b(new Map(JSON.parse(l)));
        } catch {
          b(/* @__PURE__ */ new Map());
        }
      else
        b(/* @__PURE__ */ new Map());
    };
    return window.addEventListener("popstate", m), () => window.removeEventListener("popstate", m);
  }, [h]);
  const x = I(() => {
    const m = w.get("root-variations");
    if (!m) return null;
    const u = (n, i) => {
      const d = {
        id: n,
        group: i,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(p.entries()).forEach(([, c]) => {
        if (c.parentId === n) {
          const y = w.get(c.group);
          y && d.children.set(
            c.group,
            u(y, c.group)
          );
        }
      }), d;
    };
    return u(m, "root-variations");
  }, [w, p]), g = Ne(
    (m, u) => {
      b((l) => {
        const n = new Map(l);
        return n.set(m, u), m === "root-variations" ? Array.from(l.keys()).forEach((i) => {
          i !== "root-variations" && n.delete(i);
        }) : Array.from(p.entries()).find(
          ([d]) => d === u
        ) && Array.from(l.keys()).forEach((d) => {
          const c = Array.from(p.entries()).find(
            ([, y]) => y.group === d
          );
          c && c[1].parentId === u && n.delete(d);
        }), n;
      });
    },
    [p]
  ), E = Ne(
    (m, u, l, n, i) => {
      V((d) => {
        const c = d.get(u);
        if ((c == null ? void 0 : c.group) === m && (c == null ? void 0 : c.label) === l && (c == null ? void 0 : c.groupLabel) === n && (c == null ? void 0 : c.parentId) === i)
          return d;
        const y = new Map(d);
        return y.set(u, { group: m, label: l, groupLabel: n, parentId: i }), y;
      });
    },
    []
  ), N = I(
    () => ({
      activeIds: w,
      setActiveId: g,
      registerVariation: E,
      variations: p,
      activeTree: x
    }),
    [
      w,
      g,
      E,
      p,
      x
    ]
  );
  return /* @__PURE__ */ s.jsxDEV(oe.Provider, { value: N, children: r }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 212,
    columnNumber: 5
  }, this);
}
function G(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Ae({
  label: r,
  children: h,
  ...w
}) {
  const { group: b = "", id: p, groupLabel: V, parentId: x } = w, g = I(() => p || G(r), [p, r]), { activeIds: E, registerVariation: N } = Pe(), m = E.get(b) === g;
  return D(() => {
    if (!b) {
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
    N(b, g, r, V || b, x);
  }, [b, g, r, V, x, N]), m ? /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: h }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this) : null;
}
const Le = "root-variations";
function ze(r) {
  return T.isValidElement(r) && r.type === Ae && typeof r.props.label == "string";
}
function Ye({
  isRoot: r = !1,
  label: h,
  children: w,
  ...b
}) {
  const { parentId: p, group: V } = b, x = ke(oe);
  if (!x)
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
  if (r && p)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const g = V || (r ? Le : G(h)), { activeIds: E, setActiveId: N, variations: m } = x, u = I(() => {
    const n = /* @__PURE__ */ new Map();
    return Array.from(m.entries()).forEach(([i, d]) => {
      const { group: c, label: y, groupLabel: W } = d;
      n.has(c) || n.set(c, []), n.get(c).push([i, { label: y, groupLabel: W }]);
    }), n;
  }, [m]), l = I(() => T.Children.map(w, (n) => {
    if (T.isValidElement(n)) {
      if (n.type === Ae) {
        if (!ze(n))
          throw new Error("Invalid Variation component");
        const i = G(n.props.label);
        return T.cloneElement(n, {
          ...n.props,
          group: g,
          groupLabel: h,
          id: i,
          parentId: p
        });
      } else if (n.type === Ye) {
        const i = n, d = E.get(g), c = G(i.props.label);
        return T.cloneElement(i, {
          ...i.props,
          parentId: d,
          group: c
        });
      }
    }
    return n;
  }), [w, g, h, E, p]);
  return D(() => {
    if (!E.has(g)) {
      const n = u.get(g);
      if (n && n.length > 0) {
        const [i] = n[0];
        N(g, i);
      }
    }
  }, [g, u, E, N]), /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: l }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
const Ce = ({
  group: r,
  variations: h,
  activeIds: w,
  setActiveId: b,
  isMinimized: p
}) => {
  var g, E, N, m;
  const V = (E = (g = h[0]) == null ? void 0 : g[1]) == null ? void 0 : E.groupLabel, x = w.get(r);
  return /* @__PURE__ */ s.jsxDEV("div", { className: "variation-group", children: [
    /* @__PURE__ */ s.jsxDEV(
      "div",
      {
        className: "variation-title",
        title: V,
        children: V
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
    /* @__PURE__ */ s.jsxDEV("div", { className: "variations-selects", children: /* @__PURE__ */ s.jsxDEV(
      "select",
      {
        value: x || "",
        onChange: (u) => {
          b(r, u.target.value);
        },
        className: "variation-select",
        tabIndex: p ? -1 : 0,
        title: ((m = (N = h.find(([u]) => u === x)) == null ? void 0 : N[1]) == null ? void 0 : m.label) || "",
        children: h.map(
          ([u, { label: l }]) => /* @__PURE__ */ s.jsxDEV(
            "option",
            {
              value: u,
              title: l,
              children: l
            },
            u,
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
    /* @__PURE__ */ s.jsxDEV("style", { children: `
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
function Ke({
  position: r = "bottom-right",
  minimizedByDefault: h = !1,
  className: w,
  ...b
}) {
  const [p, V] = te(h), { activeIds: x, setActiveId: g, variations: E } = Pe(), N = T.useMemo(() => {
    const l = /* @__PURE__ */ new Map();
    return Array.from(E.entries()).forEach(([n, i]) => {
      const { group: d, label: c, groupLabel: y } = i;
      l.has(d) || l.set(d, []), l.get(d).push([n, { label: c, groupLabel: y }]);
    }), l;
  }, [E]), u = (() => {
    const l = [], n = /* @__PURE__ */ new Set();
    if (N.has("root-variations")) {
      const i = N.get("root-variations");
      l.push(
        /* @__PURE__ */ s.jsxDEV(
          Ce,
          {
            group: "root-variations",
            variations: i,
            activeIds: x,
            setActiveId: g,
            isMinimized: p
          },
          "root-variations",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 190,
            columnNumber: 9
          },
          this
        )
      ), n.add("root-variations");
    }
    return Array.from(x.entries()).forEach(([i]) => {
      if (!n.has(i) && N.has(i)) {
        const d = N.get(i);
        l.push(
          /* @__PURE__ */ s.jsxDEV(
            Ce,
            {
              group: i,
              variations: d,
              activeIds: x,
              setActiveId: g,
              isMinimized: p
            },
            i,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 207,
              columnNumber: 11
            },
            this
          )
        ), n.add(i);
      }
    }), l.length === 0 ? /* @__PURE__ */ s.jsxDEV("div", { className: "variations-empty", children: [
      /* @__PURE__ */ s.jsxDEV("div", { className: "variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ s.jsxDEV("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ s.jsxDEV("code", { children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 225,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ s.jsxDEV("style", { children: `
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
        lineNumber: 227,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 222,
      columnNumber: 9
    }, this) : l;
  })();
  return T.useEffect(() => {
    const l = (n) => {
      n.code === "KeyV" && n.altKey && !n.ctrlKey && !n.shiftKey && !n.metaKey && (n.preventDefault(), V((i) => !i));
    };
    return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
  }, []), /* @__PURE__ */ s.jsxDEV(
    "div",
    {
      className: `variations-controls-container ${w || ""}`,
      ...b,
      children: [
        /* @__PURE__ */ s.jsxDEV("div", { className: `variations-controls ${p ? "minimized" : ""}`, children: p ? /* @__PURE__ */ s.jsxDEV(
          "button",
          {
            className: "variations-circle",
            onClick: () => V(!1),
            tabIndex: p ? 0 : -1,
            children: /* @__PURE__ */ s.jsxDEV(
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
                  /* @__PURE__ */ s.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 319,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ s.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 320,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ s.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 321,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ s.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                    lineNumber: 322,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 308,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 303,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ s.jsxDEV(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxDEV("div", { className: "variations-header", children: [
            /* @__PURE__ */ s.jsxDEV("div", { className: "variations-header-title", children: [
              /* @__PURE__ */ s.jsxDEV(
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
                    /* @__PURE__ */ s.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 344,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ s.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 345,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ s.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 346,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ s.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                      lineNumber: 347,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 329,
                  columnNumber: 17
                },
                this
              ),
              "Variations"
            ] }, void 0, !0, {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 328,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ s.jsxDEV(
              "button",
              {
                className: "variations-header-toggle",
                onClick: () => V(!0),
                tabIndex: p ? -1 : 0,
                children: "×"
              },
              void 0,
              !1,
              {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 351,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 327,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ s.jsxDEV("div", { className: "variation-groups", children: u }, void 0, !1, {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 360,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 326,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 301,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ s.jsxDEV("style", { children: `
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
        ` }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 364,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 297,
      columnNumber: 5
    },
    this
  );
}
export {
  Ae as Variation,
  Ye as Variations,
  Ke as VariationsControls,
  We as VariationsProvider
};
