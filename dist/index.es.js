import S, { createContext as Le, useContext as Ne, useMemo as L, useState as J, useEffect as G, useCallback as Ce } from "react";
var X = { exports: {} }, U = {};
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
  if (Ae) return U;
  Ae = 1;
  var r = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function b(h, s, w) {
    var E = null;
    if (w !== void 0 && (E = "" + w), s.key !== void 0 && (E = "" + s.key), "key" in s) {
      w = {};
      for (var u in s)
        u !== "key" && (w[u] = s[u]);
    } else w = s;
    return s = w.ref, {
      $$typeof: r,
      type: h,
      key: E,
      ref: s !== void 0 ? s : null,
      props: w
    };
  }
  return U.Fragment = x, U.jsx = b, U.jsxs = b, U;
}
var W = {};
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
function Pe() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Me ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case H:
          return "Fragment";
        case F:
          return "Portal";
        case le:
          return "Profiler";
        case se:
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
          case ue:
            return (e.displayName || "Context") + ".Provider";
          case ce:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
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
    function b(e) {
      try {
        x(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), x(e);
      }
    }
    function h() {
    }
    function s() {
      if (z === 0) {
        pe = console.log, ge = console.info, he = console.warn, ve = console.error, me = console.group, xe = console.groupCollapsed, we = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: h,
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
      z++;
    }
    function w() {
      if (z--, z === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: O({}, e, { value: pe }),
          info: O({}, e, { value: ge }),
          warn: O({}, e, { value: he }),
          error: O({}, e, { value: ve }),
          group: O({}, e, { value: me }),
          groupCollapsed: O({}, e, { value: xe }),
          groupEnd: O({}, e, { value: we })
        });
      }
      0 > z && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function E(e) {
      if (te === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          te = t && t[1] || "", be = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + be;
    }
    function u(e, t) {
      if (!e || oe) return "";
      var o = ne.get(e);
      if (o !== void 0) return o;
      oe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = M.H, M.H = null, s();
      try {
        var C = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var N = function() {
                  throw Error();
                };
                if (Object.defineProperty(N.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(N, []);
                  } catch (R) {
                    var B = R;
                  }
                  Reflect.construct(e, [], N);
                } else {
                  try {
                    N.call();
                  } catch (R) {
                    B = R;
                  }
                  e.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (R) {
                  B = R;
                }
                (N = e()) && typeof N.catch == "function" && N.catch(function() {
                });
              }
            } catch (R) {
              if (R && B && typeof R.stack == "string")
                return [R.stack, B.stack];
            }
            return [null, null];
          }
        };
        C.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var y = Object.getOwnPropertyDescriptor(
          C.DetermineComponentFrameRoot,
          "name"
        );
        y && y.configurable && Object.defineProperty(
          C.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var l = C.DetermineComponentFrameRoot(), _ = l[0], $ = l[1];
        if (_ && $) {
          var A = _.split(`
`), I = $.split(`
`);
          for (l = y = 0; y < A.length && !A[y].includes(
            "DetermineComponentFrameRoot"
          ); )
            y++;
          for (; l < I.length && !I[l].includes(
            "DetermineComponentFrameRoot"
          ); )
            l++;
          if (y === A.length || l === I.length)
            for (y = A.length - 1, l = I.length - 1; 1 <= y && 0 <= l && A[y] !== I[l]; )
              l--;
          for (; 1 <= y && 0 <= l; y--, l--)
            if (A[y] !== I[l]) {
              if (y !== 1 || l !== 1)
                do
                  if (y--, l--, 0 > l || A[y] !== I[l]) {
                    var Y = `
` + A[y].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, Y), Y;
                  }
                while (1 <= y && 0 <= l);
              break;
            }
        }
      } finally {
        oe = !1, M.H = d, w(), Error.prepareStackTrace = o;
      }
      return A = (A = e ? e.displayName || e.name : "") ? E(A) : "", typeof e == "function" && ne.set(e, A), A;
    }
    function k(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return u(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return E(e);
      switch (e) {
        case Z:
          return E("Suspense");
        case Q:
          return E("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            return e = u(e.render, !1), e;
          case D:
            return k(e.type);
          case ee:
            t = e._payload, e = e._init;
            try {
              return k(e(t));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function g(e) {
      if (fe.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
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
    function v() {
      var e = r(this.type);
      return ke[e] || (ke[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function c(e, t, o, d, C, y) {
      return o = y.ref, e = {
        $$typeof: V,
        type: e,
        key: t,
        props: y,
        _owner: C
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
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
    function p(e, t, o, d, C, y) {
      if (typeof e == "string" || typeof e == "function" || e === H || e === le || e === se || e === Z || e === Q || e === Ve || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === ue || e.$$typeof === ce || e.$$typeof === K || e.$$typeof === Oe || e.getModuleId !== void 0)) {
        var l = t.children;
        if (l !== void 0)
          if (d)
            if (re(l)) {
              for (d = 0; d < l.length; d++)
                i(l[d], e);
              Object.freeze && Object.freeze(l);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else i(l, e);
      } else
        l = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? d = "null" : re(e) ? d = "array" : e !== void 0 && e.$$typeof === V ? (d = "<" + (r(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          d,
          l
        );
      if (fe.call(t, "key")) {
        l = r(e);
        var _ = Object.keys(t).filter(function(A) {
          return A !== "key";
        });
        d = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", ye[l + d] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          l,
          _,
          l
        ), ye[l + d] = !0);
      }
      if (l = null, o !== void 0 && (b(o), l = "" + o), g(t) && (b(t.key), l = "" + t.key), "key" in t) {
        o = {};
        for (var $ in t)
          $ !== "key" && (o[$] = t[$]);
      } else o = t;
      return l && f(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), c(e, l, y, C, j(), o);
    }
    function i(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Ie) {
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var d = e[o];
            n(d) && m(d, t);
          }
        else if (n(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = de && e[de] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            n(e.value) && m(e.value, t);
      }
    }
    function n(e) {
      return typeof e == "object" && e !== null && e.$$typeof === V;
    }
    function m(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = T(t), !je[t])) {
        je[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== j() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var d = M.getCurrentStack;
        M.getCurrentStack = function() {
          var C = k(e.type);
          return d && (C += d() || ""), C;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), M.getCurrentStack = d;
      }
    }
    function T(e) {
      var t = "", o = j();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var P = S, V = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), ue = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), de = Symbol.iterator, Me = Symbol.for("react.client.reference"), M = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = Object.prototype.hasOwnProperty, O = Object.assign, Oe = Symbol.for("react.client.reference"), re = Array.isArray, z = 0, pe, ge, he, ve, me, xe, we;
    h.__reactDisabledLog = !0;
    var te, be, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ie = Symbol.for("react.client.reference"), Ee, ke = {}, ye = {}, je = {};
    W.Fragment = H, W.jsx = function(e, t, o, d, C) {
      return p(e, t, o, !1, d, C);
    }, W.jsxs = function(e, t, o, d, C) {
      return p(e, t, o, !0, d, C);
    };
  }()), W;
}
var _e;
function ze() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? X.exports = $e() : X.exports = Pe()), X.exports;
}
var a = ze();
const ae = Le(null);
function ie() {
  const r = Ne(ae);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
}
function Be(r) {
  const {
    activeIds: x,
    setActiveId: b,
    variations: h
  } = ie(), s = x.get(r), w = L(() => Array.from(h.entries()).filter(([, u]) => u.group === r).map(([u, {
    label: k
  }]) => ({
    id: u,
    label: k
  })), [h, r]);
  return {
    /** The currently active variation */
    active: L(() => {
      if (!s) return null;
      const u = h.get(s);
      return u ? {
        id: s,
        label: u.label
      } : null;
    }, [s, h]),
    /** Set the active variation by ID */
    setActive: (u) => b(r, u),
    /** All available variations for this group */
    variations: w
  };
}
function Xe({
  children: r,
  disableQueryString: x = !1
}) {
  const [b, h] = J(/* @__PURE__ */ new Map()), [s, w] = J(/* @__PURE__ */ new Map());
  G(() => {
    if (x || typeof window > "u") return;
    const f = new URLSearchParams(window.location.search).get("var");
    if (f)
      try {
        const v = f.split("_").map((c) => {
          const [p, i] = c.split(".");
          if (!p || !i) throw new Error("Invalid format");
          return [p, i];
        });
        h(new Map(v));
      } catch {
        h(/* @__PURE__ */ new Map());
      }
  }, [x]), G(() => {
    if (x || typeof window > "u") return;
    const g = new URLSearchParams(window.location.search), f = Array.from(b.entries());
    if (f.length === 0)
      g.delete("var");
    else {
      const p = f.map(([i, n]) => `${i}.${n}`).join("_");
      g.set("var", p);
    }
    const v = g.toString(), c = v ? `${window.location.pathname}?${v}` : window.location.pathname;
    window.history.replaceState({}, "", c);
  }, [b, x]), G(() => {
    if (x || typeof window > "u") return;
    const g = () => {
      const v = new URLSearchParams(window.location.search).get("var");
      if (v)
        try {
          const c = v.split("_").map((p) => {
            const [i, n] = p.split(".");
            if (!i || !n) throw new Error("Invalid format");
            return [i, n];
          });
          h(new Map(c));
        } catch {
          h(/* @__PURE__ */ new Map());
        }
      else
        h(/* @__PURE__ */ new Map());
    };
    return window.addEventListener("popstate", g), () => window.removeEventListener("popstate", g);
  }, [x]);
  const E = L(() => {
    const g = b.get("root");
    if (!g) return null;
    const f = (c, p) => {
      const i = {
        id: c,
        group: p,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(s.entries()).forEach(([, n]) => {
        if (n.parentId === c) {
          const m = b.get(n.group);
          m && i.children.set(n.group, f(m, n.group));
        }
      }), i;
    };
    return f(g, "root");
  }, [b, s]), u = Ce((g, f) => {
    h((v) => {
      const c = new Map(v);
      return c.set(g, f), g === "root" ? Array.from(v.keys()).forEach((p) => {
        p !== "root" && c.delete(p);
      }) : Array.from(s.entries()).find(([i]) => i === f) && Array.from(v.keys()).forEach((i) => {
        const n = Array.from(s.entries()).find(([, m]) => m.group === i);
        n && n[1].parentId === f && c.delete(i);
      }), c;
    });
  }, [s]), k = Ce((g, f, v, c, p) => {
    w((i) => {
      const n = i.get(f);
      if ((n == null ? void 0 : n.group) === g && (n == null ? void 0 : n.label) === v && (n == null ? void 0 : n.groupLabel) === c && (n == null ? void 0 : n.parentId) === p)
        return i;
      const m = new Map(i);
      return m.set(f, {
        group: g,
        label: v,
        groupLabel: c,
        parentId: p
      }), m;
    });
  }, []), j = L(() => ({
    activeIds: b,
    setActiveId: u,
    registerVariation: k,
    variations: s,
    activeTree: E
  }), [b, u, k, s, E]);
  return /* @__PURE__ */ a.jsx(ae.Provider, { value: j, children: r });
}
function q(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Se({
  label: r,
  children: x,
  ...b
}) {
  const {
    group: h = "",
    id: s,
    groupLabel: w,
    parentId: E
  } = b, u = L(() => s || q(r), [s, r]), {
    activeIds: k,
    registerVariation: j
  } = ie(), g = k.get(h) === u;
  return G(() => {
    if (!h) {
      console.error(`Variation Component Error: No group provided for variation "${r}"

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
   </Variations>`);
      return;
    }
    j(h, u, r, w || h, E);
  }, [h, u, r, w, E, j]), g ? /* @__PURE__ */ a.jsx(a.Fragment, { children: x }) : null;
}
const Ye = "root";
function Ue(r) {
  return S.isValidElement(r) && r.type === Se && typeof r.props.label == "string";
}
function We({
  isRoot: r = !1,
  label: x,
  children: b,
  ...h
}) {
  const {
    parentId: s,
    group: w
  } = h, E = Ne(ae);
  if (!E)
    throw new Error(`Variations component error: No VariationsContext found.

This usually means one of two things:
1. You forgot to add "use client" at the top of your page component
2. The Variations component is not wrapped in a VariationsProvider

To fix this:
1. Add "use client" as the first line of your page component:
   "use client";
   export default function Page() { ... }

2. Or check that VariationsProvider exists in your app layout`);
  if (r && s)
    throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);
  const u = w || (r ? Ye : q(x)), {
    activeIds: k,
    setActiveId: j,
    variations: g
  } = E, f = L(() => {
    const c = /* @__PURE__ */ new Map();
    return Array.from(g.entries()).forEach(([p, i]) => {
      const {
        group: n,
        label: m,
        groupLabel: T
      } = i;
      c.has(n) || c.set(n, []), c.get(n).push([p, {
        label: m,
        groupLabel: T
      }]);
    }), c;
  }, [g]), v = L(() => S.Children.map(b, (c) => {
    if (S.isValidElement(c)) {
      if (c.type === Se) {
        if (!Ue(c))
          throw new Error("Invalid Variation component");
        const p = q(c.props.label);
        return S.cloneElement(c, {
          ...c.props,
          group: u,
          groupLabel: x,
          id: p,
          parentId: s
        });
      } else if (c.type === We) {
        const p = c, i = k.get(u), n = q(p.props.label);
        return S.cloneElement(p, {
          ...p.props,
          parentId: i,
          group: n
        });
      }
    }
    return c;
  }), [b, u, x, k, s]);
  return G(() => {
    if (!k.has(u)) {
      const c = f.get(u);
      if (c && c.length > 0) {
        const [p] = c[0];
        j(u, p);
      }
    }
  }, [u, f, k, j]), /* @__PURE__ */ a.jsx(a.Fragment, { children: v });
}
const Re = ({
  group: r,
  variations: x,
  activeIds: b,
  setActiveId: h,
  isMinimized: s
}) => {
  var u, k, j, g;
  const w = (k = (u = x[0]) == null ? void 0 : u[1]) == null ? void 0 : k.groupLabel, E = b.get(r);
  return /* @__PURE__ */ a.jsxs("div", { className: "variation-group", children: [
    /* @__PURE__ */ a.jsx("div", { className: "variation-title", title: w, children: w }),
    /* @__PURE__ */ a.jsx("div", { className: "variations-selects", children: /* @__PURE__ */ a.jsx("select", { value: E || "", onChange: (f) => {
      h(r, f.target.value);
    }, className: "variation-select", tabIndex: s ? -1 : 0, title: ((g = (j = x.find(([f]) => f === E)) == null ? void 0 : j[1]) == null ? void 0 : g.label) || "", children: x.map(([f, {
      label: v
    }]) => /* @__PURE__ */ a.jsx("option", { value: f, title: v, children: v }, f)) }) }),
    /* @__PURE__ */ a.jsx("style", { children: `
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
function qe({
  position: r = "bottom-right",
  minimizedByDefault: x = !1,
  className: b,
  ...h
}) {
  const [s, w] = J(x), [E, u] = J(!1), {
    activeIds: k,
    setActiveId: j,
    variations: g
  } = ie(), f = () => {
    const i = new URLSearchParams(window.location.search), n = Array.from(k.entries());
    if (n.length > 0) {
      const P = n.map(([V, F]) => `${V}.${F}`).join("_");
      i.set("var", P);
    } else
      i.delete("var");
    const m = i.toString(), T = window.location.href.split("?")[0] + (m ? `?${m}` : "");
    navigator.clipboard.writeText(T).then(() => {
      u(!0), setTimeout(() => u(!1), 2e3);
    });
  }, v = S.useMemo(() => {
    const i = /* @__PURE__ */ new Map();
    return Array.from(g.entries()).forEach(([n, m]) => {
      const {
        group: T,
        label: P,
        groupLabel: V
      } = m;
      i.has(T) || i.set(T, []), i.get(T).push([n, {
        label: P,
        groupLabel: V
      }]);
    }), i;
  }, [g]), p = (() => {
    const i = [], n = /* @__PURE__ */ new Set();
    if (v.has("root")) {
      const m = v.get("root");
      i.push(/* @__PURE__ */ a.jsx(Re, { group: "root", variations: m, activeIds: k, setActiveId: j, isMinimized: s }, "root")), n.add("root");
    }
    return Array.from(k.entries()).forEach(([m]) => {
      if (!n.has(m) && v.has(m)) {
        const T = v.get(m);
        i.push(/* @__PURE__ */ a.jsx(Re, { group: m, variations: T, activeIds: k, setActiveId: j, isMinimized: s }, m)), n.add(m);
      }
    }), i.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "variations-empty", children: [
      /* @__PURE__ */ a.jsx("div", { className: "variations-empty-title", children: "No Variations Found" }),
      /* @__PURE__ */ a.jsxs("div", { className: "variations-empty-text", children: [
        "Add a ",
        /* @__PURE__ */ a.jsx("code", { children: "<Variations>" }),
        " component!"
      ] }),
      /* @__PURE__ */ a.jsx("style", { children: `
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
    ] }) : i;
  })();
  return S.useEffect(() => {
    const i = (n) => {
      n.code === "KeyV" && n.altKey && !n.ctrlKey && !n.shiftKey && !n.metaKey && (n.preventDefault(), w((m) => !m));
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: `variations-controls-container ${b || ""}`, ...h, children: [
    /* @__PURE__ */ a.jsx("div", { className: `variations-controls ${s ? "minimized" : ""}`, children: s ? /* @__PURE__ */ a.jsx("button", { className: "variations-circle", onClick: () => w(!1), tabIndex: s ? 0 : -1, children: /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ a.jsx("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ a.jsx("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ a.jsx("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }),
      /* @__PURE__ */ a.jsx("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" })
    ] }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "variations-header", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "variations-header-title", children: [
          /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "square", strokeLinejoin: "round", style: {
            marginRight: "6px",
            position: "relative"
          }, children: [
            /* @__PURE__ */ a.jsx("path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ a.jsx("path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ a.jsx("path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }),
            /* @__PURE__ */ a.jsx("path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" })
          ] }),
          "Variations"
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "variations-header-actions", children: [
          /* @__PURE__ */ a.jsx("button", { className: "variations-header-button", onClick: f, title: "Copy link to clipboard", tabIndex: s ? -1 : 0, children: E ? /* @__PURE__ */ a.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx("path", { d: "M20 6L9 17L4 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ a.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ a.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { className: "variations-header-toggle", onClick: () => w(!0), tabIndex: s ? -1 : 0, children: "×" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "variation-groups", children: p })
    ] }) }),
    /* @__PURE__ */ a.jsx("style", { children: `
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
        ` })
  ] });
}
export {
  Se as Variation,
  We as Variations,
  qe as VariationsControls,
  Xe as VariationsProvider,
  Be as useVariation,
  ie as useVariations
};
