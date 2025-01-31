import A, { createContext as De, useState as ee, useMemo as D, useCallback as Ee, useContext as ye, useEffect as Ce } from "react";
var z = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Me() {
  if (Ne) return Y;
  Ne = 1;
  var r = Symbol.for("react.fragment");
  return Y.Fragment = r, Y.jsxDEV = void 0, Y;
}
var $ = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Ie() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ue ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case G:
          return "Fragment";
        case _e:
          return "Portal";
        case oe:
          return "Profiler";
        case te:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ae:
            return (e.displayName || "Context") + ".Provider";
          case ne:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case q:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case J:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function h(e) {
      try {
        d(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), d(e);
      }
    }
    function v() {
    }
    function V() {
      if (S === 0) {
        le = console.log, ce = console.info, ue = console.warn, fe = console.error, de = console.group, me = console.groupCollapsed, pe = console.groupEnd;
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
      S++;
    }
    function E() {
      if (S--, S === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: _({}, e, { value: le }),
          info: _({}, e, { value: ce }),
          warn: _({}, e, { value: ue }),
          error: _({}, e, { value: fe }),
          group: _({}, e, { value: de }),
          groupCollapsed: _({}, e, { value: me }),
          groupEnd: _({}, e, { value: pe })
        });
      }
      0 > S && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function m(e) {
      if (H === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          H = t && t[1] || "", ve = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + H + e + ve;
    }
    function b(e, t) {
      if (!e || Z) return "";
      var o = Q.get(e);
      if (o !== void 0) return o;
      Z = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var u = null;
      u = T.H, T.H = null, V();
      try {
        var j = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var P = function() {
                  throw Error();
                };
                if (Object.defineProperty(P.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(P, []);
                  } catch (k) {
                    var I = k;
                  }
                  Reflect.construct(e, [], P);
                } else {
                  try {
                    P.call();
                  } catch (k) {
                    I = k;
                  }
                  e.call(P.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (k) {
                  I = k;
                }
                (P = e()) && typeof P.catch == "function" && P.catch(function() {
                });
              }
            } catch (k) {
              if (k && I && typeof k.stack == "string")
                return [k.stack, I.stack];
            }
            return [null, null];
          }
        };
        j.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          j.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          j.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var a = j.DetermineComponentFrameRoot(), C = a[0], U = a[1];
        if (C && U) {
          var w = C.split(`
`), R = U.split(`
`);
          for (a = p = 0; p < w.length && !w[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; a < R.length && !R[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          if (p === w.length || a === R.length)
            for (p = w.length - 1, a = R.length - 1; 1 <= p && 0 <= a && w[p] !== R[a]; )
              a--;
          for (; 1 <= p && 0 <= a; p--, a--)
            if (w[p] !== R[a]) {
              if (p !== 1 || a !== 1)
                do
                  if (p--, a--, 0 > a || w[p] !== R[a]) {
                    var O = `
` + w[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, O), O;
                  }
                while (1 <= p && 0 <= a);
              break;
            }
        }
      } finally {
        Z = !1, T.H = u, E(), Error.prepareStackTrace = o;
      }
      return w = (w = e ? e.displayName || e.name : "") ? m(w) : "", typeof e == "function" && Q.set(e, w), w;
    }
    function N(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return b(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return m(e);
      switch (e) {
        case X:
          return m("Suspense");
        case B:
          return m("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            return e = b(e.render, !1), e;
          case q:
            return N(e.type);
          case J:
            t = e._payload, e = e._init;
            try {
              return N(e(t));
            } catch {
            }
        }
      return "";
    }
    function g() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function c(e) {
      if (se.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, t) {
      function o() {
        ge || (ge = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function n() {
      var e = r(this.type);
      return be[e] || (be[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function f(e, t, o, u, j, p) {
      return o = p.ref, e = {
        $$typeof: W,
        type: e,
        key: t,
        props: p,
        _owner: j
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: n
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
    function x(e, t, o, u, j, p) {
      if (typeof e == "string" || typeof e == "function" || e === G || e === oe || e === te || e === X || e === B || e === Re || typeof e == "object" && e !== null && (e.$$typeof === J || e.$$typeof === q || e.$$typeof === ae || e.$$typeof === ne || e.$$typeof === K || e.$$typeof === Se || e.getModuleId !== void 0)) {
        var a = t.children;
        if (a !== void 0)
          if (u)
            if (F(a)) {
              for (u = 0; u < a.length; u++)
                l(a[u], e);
              Object.freeze && Object.freeze(a);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else l(a, e);
      } else
        a = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? u = "null" : F(e) ? u = "array" : e !== void 0 && e.$$typeof === W ? (u = "<" + (r(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          u,
          a
        );
      if (se.call(t, "key")) {
        a = r(e);
        var C = Object.keys(t).filter(function(w) {
          return w !== "key";
        });
        u = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", he[a + u] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          a,
          C,
          a
        ), he[a + u] = !0);
      }
      if (a = null, o !== void 0 && (h(o), a = "" + o), c(t) && (h(t.key), a = "" + t.key), "key" in t) {
        o = {};
        for (var U in t)
          U !== "key" && (o[U] = t[U]);
      } else o = t;
      return a && s(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), f(e, a, p, j, g(), o);
    }
    function l(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Oe) {
        if (F(e))
          for (var o = 0; o < e.length; o++) {
            var u = e[o];
            y(u) && M(u, t);
          }
        else if (y(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = ie && e[ie] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            y(e.value) && M(e.value, t);
      }
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === W;
    }
    function M(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = Ae(t), !xe[t])) {
        xe[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== g() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var u = T.getCurrentStack;
        T.getCurrentStack = function() {
          var j = N(e.type);
          return u && (j += u() || ""), j;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), T.getCurrentStack = u;
      }
    }
    function Ae(e) {
      var t = "", o = g();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var Te = A, W = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ue = Symbol.for("react.client.reference"), T = Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, _ = Object.assign, Se = Symbol.for("react.client.reference"), F = Array.isArray, S = 0, le, ce, ue, fe, de, me, pe;
    v.__reactDisabledLog = !0;
    var H, ve, Z = !1, Q = new (typeof WeakMap == "function" ? WeakMap : Map)(), Oe = Symbol.for("react.client.reference"), ge, be = {}, he = {}, xe = {};
    $.Fragment = G, $.jsxDEV = function(e, t, o, u, j, p) {
      return x(e, t, o, u, j, p);
    };
  }()), $;
}
var Ve;
function ze() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? z.exports = Me() : z.exports = Ie()), z.exports;
}
var i = ze();
const re = De(
  null
), ke = () => {
  const r = ye(re);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
};
function Ge({ children: r }) {
  const [d, h] = ee(
    /* @__PURE__ */ new Map()
  ), [v, V] = ee(
    /* @__PURE__ */ new Map()
  ), E = D(() => {
    const g = d.get("root-variations");
    if (!g) return null;
    const c = (n, f) => {
      const x = {
        id: n,
        group: f,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(v.entries()).forEach(([, l]) => {
        if (l.parentId === n) {
          const y = d.get(l.group);
          y && x.children.set(
            l.group,
            c(y, l.group)
          );
        }
      }), x;
    };
    return c(g, "root-variations");
  }, [d, v]), m = Ee(
    (g, c) => {
      h((s) => {
        const n = new Map(s);
        return n.set(g, c), g === "root-variations" ? Array.from(s.keys()).forEach((f) => {
          f !== "root-variations" && n.delete(f);
        }) : Array.from(v.entries()).find(
          ([x]) => x === c
        ) && Array.from(s.keys()).forEach((x) => {
          const l = Array.from(v.entries()).find(
            ([, y]) => y.group === x
          );
          l && l[1].parentId === c && n.delete(x);
        }), n;
      });
    },
    [v]
  ), b = Ee(
    (g, c, s, n, f) => {
      V((x) => {
        const l = x.get(c);
        if ((l == null ? void 0 : l.group) === g && (l == null ? void 0 : l.label) === s && (l == null ? void 0 : l.groupLabel) === n && (l == null ? void 0 : l.parentId) === f)
          return x;
        const y = new Map(x);
        return y.set(c, { group: g, label: s, groupLabel: n, parentId: f }), y;
      });
    },
    []
  ), N = D(
    () => ({
      activeIds: d,
      setActiveId: m,
      registerVariation: b,
      variations: v,
      activeTree: E
    }),
    [
      d,
      m,
      b,
      v,
      E
    ]
  );
  return /* @__PURE__ */ i.jsxDEV(re.Provider, { value: N, children: r }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsProvider.tsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}
function L(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Pe({
  group: r = "",
  label: d,
  id: h,
  groupLabel: v,
  parentId: V,
  children: E
}) {
  const m = D(() => h || L(d), [h, d]), { activeIds: b, registerVariation: N } = ke(), g = b.get(r) === m;
  return Ce(() => {
    if (!r) {
      console.error(
        `Variation Component Error: No group provided for variation "${d}"

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
   </Variations>`
      );
      return;
    }
    N(r, m, d, v || r, V);
  }, [r, m, d, v, V, N]), g ? /* @__PURE__ */ i.jsxDEV(i.Fragment, { children: E }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variation.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this) : null;
}
const Ye = "root-variations";
function $e(r) {
  return A.isValidElement(r) && r.type === Pe && typeof r.props.label == "string";
}
function Le({
  isRoot: r = !1,
  label: d,
  children: h,
  parentId: v,
  group: V
}) {
  const E = ye(re);
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
  if (r && v)
    throw new Error(
      `Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`
    );
  const m = V || (r ? Ye : L(d)), { activeIds: b, setActiveId: N, variations: g } = E, c = D(() => {
    const n = /* @__PURE__ */ new Map();
    return Array.from(g.entries()).forEach(([f, x]) => {
      const { group: l, label: y, groupLabel: M } = x;
      n.has(l) || n.set(l, []), n.get(l).push([f, { label: y, groupLabel: M }]);
    }), n;
  }, [g]), s = D(() => A.Children.map(h, (n) => {
    if (A.isValidElement(n)) {
      if (n.type === Pe) {
        if (!$e(n))
          throw new Error("Invalid Variation component");
        const f = n.props.id || L(n.props.label);
        return A.cloneElement(n, {
          ...n.props,
          group: m,
          groupLabel: d,
          id: f,
          parentId: v
        });
      } else if (n.type === Le) {
        const f = n, x = b.get(m), l = L(f.props.label);
        return A.cloneElement(f, {
          ...f.props,
          parentId: x,
          group: l
        });
      }
    }
    return n;
  }), [h, m, d, b, v]);
  return Ce(() => {
    if (!b.has(m)) {
      const n = c.get(m);
      if (n && n.length > 0) {
        const [f] = n[0];
        N(m, f);
      }
    }
  }, [m, c, b, N]), /* @__PURE__ */ i.jsxDEV(i.Fragment, { children: s }, void 0, !1, {
    fileName: "/Users/dperrera/Projects/variations/src/Variations.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
const je = ({
  group: r,
  variations: d,
  activeIds: h,
  setActiveId: v,
  isMinimized: V
}) => {
  var b, N, g, c;
  const E = (N = (b = d[0]) == null ? void 0 : b[1]) == null ? void 0 : N.groupLabel, m = h.get(r);
  return /* @__PURE__ */ i.jsxDEV("div", { className: "variation-group", children: [
    /* @__PURE__ */ i.jsxDEV(
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
        lineNumber: 29,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ i.jsxDEV("div", { className: "variations-selects", children: /* @__PURE__ */ i.jsxDEV(
      "select",
      {
        value: m || "",
        onChange: (s) => {
          v(r, s.target.value);
        },
        className: "variation-select",
        tabIndex: V ? -1 : 0,
        title: ((c = (g = d.find(([s]) => s === m)) == null ? void 0 : g[1]) == null ? void 0 : c.label) || "",
        children: d.map(
          ([s, { label: n }]) => /* @__PURE__ */ i.jsxDEV(
            "option",
            {
              value: s,
              title: n,
              children: n
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
    /* @__PURE__ */ i.jsxDEV("style", { children: `
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
      lineNumber: 56,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, void 0);
};
function Ke({
  position: r = "bottom-right",
  minimizedByDefault: d = !1
}) {
  const [h, v] = ee(d), { activeIds: V, setActiveId: E, variations: m } = ke(), b = A.useMemo(() => {
    const c = /* @__PURE__ */ new Map();
    return Array.from(m.entries()).forEach(([s, n]) => {
      const { group: f, label: x, groupLabel: l } = n;
      c.has(f) || c.set(f, []), c.get(f).push([s, { label: x, groupLabel: l }]);
    }), c;
  }, [m]), g = (() => {
    const c = [], s = /* @__PURE__ */ new Set();
    if (b.has("root-variations")) {
      const n = b.get("root-variations");
      c.push(
        /* @__PURE__ */ i.jsxDEV(
          je,
          {
            group: "root-variations",
            variations: n,
            activeIds: V,
            setActiveId: E,
            isMinimized: h
          },
          "root-variations",
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 189,
            columnNumber: 9
          },
          this
        )
      ), s.add("root-variations");
    }
    return Array.from(V.entries()).forEach(([n]) => {
      if (!s.has(n) && b.has(n)) {
        const f = b.get(n);
        c.push(
          /* @__PURE__ */ i.jsxDEV(
            je,
            {
              group: n,
              variations: f,
              activeIds: V,
              setActiveId: E,
              isMinimized: h
            },
            n,
            !1,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 206,
              columnNumber: 11
            },
            this
          )
        ), s.add(n);
      }
    }), c.length === 0 ? /* @__PURE__ */ i.jsxDEV("div", { className: "variations-empty", children: [
      /* @__PURE__ */ i.jsxDEV("div", { className: "variations-empty-title", children: "No Variations Found" }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ i.jsxDEV("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ i.jsxDEV("code", { children: "<Variations>" }, void 0, !1, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 224,
          columnNumber: 19
        }, this),
        " component!"
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ i.jsxDEV("style", { children: `
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
        lineNumber: 226,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this) : c;
  })();
  return A.useEffect(() => {
    const c = (s) => {
      s.code === "KeyV" && s.altKey && !s.ctrlKey && !s.shiftKey && !s.metaKey && (s.preventDefault(), v((n) => !n));
    };
    return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
  }, []), /* @__PURE__ */ i.jsxDEV("div", { className: "variations-controls-container", children: [
    /* @__PURE__ */ i.jsxDEV("div", { className: `variations-controls ${h ? "minimized" : ""}`, children: h ? /* @__PURE__ */ i.jsxDEV(
      "button",
      {
        className: "variations-circle",
        onClick: () => v(!1),
        tabIndex: h ? 0 : -1,
        children: /* @__PURE__ */ i.jsxDEV(
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
              /* @__PURE__ */ i.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 315,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ i.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 316,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ i.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 317,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ i.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                lineNumber: 318,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 304,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 299,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ i.jsxDEV(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxDEV("div", { className: "variations-header", children: [
        /* @__PURE__ */ i.jsxDEV("div", { className: "variations-header-title", children: [
          /* @__PURE__ */ i.jsxDEV(
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
                /* @__PURE__ */ i.jsxDEV("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 340,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ i.jsxDEV("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 341,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ i.jsxDEV("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 342,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ i.jsxDEV("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }, void 0, !1, {
                  fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
                  lineNumber: 343,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
              lineNumber: 325,
              columnNumber: 17
            },
            this
          ),
          "Variations"
        ] }, void 0, !0, {
          fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ i.jsxDEV(
          "button",
          {
            className: "variations-header-toggle",
            onClick: () => v(!0),
            tabIndex: h ? -1 : 0,
            children: "×"
          },
          void 0,
          !1,
          {
            fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
            lineNumber: 347,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 323,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ i.jsxDEV("div", { className: "variation-groups", children: g }, void 0, !1, {
        fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
        lineNumber: 356,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 322,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ i.jsxDEV("style", { children: `
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
      lineNumber: 360,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "/Users/dperrera/Projects/variations/src/VariationsControls.tsx",
    lineNumber: 296,
    columnNumber: 5
  }, this);
}
export {
  Pe as Variation,
  Le as Variations,
  Ke as VariationsControls,
  Ge as VariationsProvider
};
