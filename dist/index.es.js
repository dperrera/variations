import S, { createContext as Ie, useState as J, useEffect as W, useMemo as G, useCallback as je, useContext as Re } from "react";
var X = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function $e() {
  if (Ce) return Y;
  Ce = 1;
  var r = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function E(x, c, w) {
    var k = null;
    if (w !== void 0 && (k = "" + w), c.key !== void 0 && (k = "" + c.key), "key" in c) {
      w = {};
      for (var v in c)
        v !== "key" && (w[v] = c[v]);
    } else w = c;
    return c = w.ref, {
      $$typeof: r,
      type: x,
      key: k,
      ref: c !== void 0 ? c : null,
      props: w
    };
  }
  return Y.Fragment = m, Y.jsx = E, Y.jsxs = E, Y;
}
var U = {};
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
        case se:
          return "Profiler";
        case ie:
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
          case ce:
            return (e.displayName || "Context") + ".Provider";
          case le:
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
    function m(e) {
      return "" + e;
    }
    function E(e) {
      try {
        m(e);
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
        ), m(e);
      }
    }
    function x() {
    }
    function c() {
      if (P === 0) {
        fe = console.log, pe = console.info, ge = console.warn, he = console.error, ve = console.group, me = console.groupCollapsed, xe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: x,
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
      P++;
    }
    function w() {
      if (P--, P === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: O({}, e, { value: fe }),
          info: O({}, e, { value: pe }),
          warn: O({}, e, { value: ge }),
          error: O({}, e, { value: he }),
          group: O({}, e, { value: ve }),
          groupCollapsed: O({}, e, { value: me }),
          groupEnd: O({}, e, { value: xe })
        });
      }
      0 > P && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function k(e) {
      if (te === void 0)
        try {
          throw Error();
        } catch (o) {
          var t = o.stack.trim().match(/\n( *(at )?)/);
          te = t && t[1] || "", we = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + we;
    }
    function v(e, t) {
      if (!e || oe) return "";
      var o = ne.get(e);
      if (o !== void 0) return o;
      oe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var u = null;
      u = M.H, M.H = null, c();
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
        var b = Object.getOwnPropertyDescriptor(
          C.DetermineComponentFrameRoot,
          "name"
        );
        b && b.configurable && Object.defineProperty(
          C.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var s = C.DetermineComponentFrameRoot(), _ = s[0], I = s[1];
        if (_ && I) {
          var T = _.split(`
`), L = I.split(`
`);
          for (s = b = 0; b < T.length && !T[b].includes(
            "DetermineComponentFrameRoot"
          ); )
            b++;
          for (; s < L.length && !L[s].includes(
            "DetermineComponentFrameRoot"
          ); )
            s++;
          if (b === T.length || s === L.length)
            for (b = T.length - 1, s = L.length - 1; 1 <= b && 0 <= s && T[b] !== L[s]; )
              s--;
          for (; 1 <= b && 0 <= s; b--, s--)
            if (T[b] !== L[s]) {
              if (b !== 1 || s !== 1)
                do
                  if (b--, s--, 0 > s || T[b] !== L[s]) {
                    var z = `
` + T[b].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, z), z;
                  }
                while (1 <= b && 0 <= s);
              break;
            }
        }
      } finally {
        oe = !1, M.H = u, w(), Error.prepareStackTrace = o;
      }
      return T = (T = e ? e.displayName || e.name : "") ? k(T) : "", typeof e == "function" && ne.set(e, T), T;
    }
    function y(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return v(
          e,
          !(!t || !t.isReactComponent)
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
            return e = v(e.render, !1), e;
          case D:
            return y(e.type);
          case ee:
            t = e._payload, e = e._init;
            try {
              return y(e(t));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function p(e) {
      if (de.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, t) {
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
    function g() {
      var e = r(this.type);
      return Ee[e] || (Ee[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function l(e, t, o, u, C, b) {
      return o = b.ref, e = {
        $$typeof: V,
        type: e,
        key: t,
        props: b,
        _owner: C
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
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
    function f(e, t, o, u, C, b) {
      if (typeof e == "string" || typeof e == "function" || e === H || e === se || e === ie || e === Z || e === Q || e === Ve || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === D || e.$$typeof === ce || e.$$typeof === le || e.$$typeof === K || e.$$typeof === Oe || e.getModuleId !== void 0)) {
        var s = t.children;
        if (s !== void 0)
          if (u)
            if (re(s)) {
              for (u = 0; u < s.length; u++)
                i(s[u], e);
              Object.freeze && Object.freeze(s);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else i(s, e);
      } else
        s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? u = "null" : re(e) ? u = "array" : e !== void 0 && e.$$typeof === V ? (u = "<" + (r(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          u,
          s
        );
      if (de.call(t, "key")) {
        s = r(e);
        var _ = Object.keys(t).filter(function(T) {
          return T !== "key";
        });
        u = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", ke[s + u] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          s,
          _,
          s
        ), ke[s + u] = !0);
      }
      if (s = null, o !== void 0 && (E(o), s = "" + o), p(t) && (E(t.key), s = "" + t.key), "key" in t) {
        o = {};
        for (var I in t)
          I !== "key" && (o[I] = t[I]);
      } else o = t;
      return s && d(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), l(e, s, b, C, j(), o);
    }
    function i(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Le) {
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var u = e[o];
            n(u) && h(u, t);
          }
        else if (n(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = ue && e[ue] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            n(e.value) && h(e.value, t);
      }
    }
    function n(e) {
      return typeof e == "object" && e !== null && e.$$typeof === V;
    }
    function h(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = A(t), !ye[t])) {
        ye[t] = !0;
        var o = "";
        e && e._owner != null && e._owner !== j() && (o = null, typeof e._owner.tag == "number" ? o = r(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var u = M.getCurrentStack;
        M.getCurrentStack = function() {
          var C = y(e.type);
          return u && (C += u() || ""), C;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          o
        ), M.getCurrentStack = u;
      }
    }
    function A(e) {
      var t = "", o = j();
      return o && (o = r(o.type)) && (t = `

Check the render method of \`` + o + "`."), t || (e = r(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var $ = S, V = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), le = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), ue = Symbol.iterator, Me = Symbol.for("react.client.reference"), M = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, O = Object.assign, Oe = Symbol.for("react.client.reference"), re = Array.isArray, P = 0, fe, pe, ge, he, ve, me, xe;
    x.__reactDisabledLog = !0;
    var te, we, oe = !1, ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), Le = Symbol.for("react.client.reference"), be, Ee = {}, ke = {}, ye = {};
    U.Fragment = H, U.jsx = function(e, t, o, u, C) {
      return f(e, t, o, !1, u, C);
    }, U.jsxs = function(e, t, o, u, C) {
      return f(e, t, o, !0, u, C);
    };
  }()), U;
}
var Ae;
function ze() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? X.exports = $e() : X.exports = Pe()), X.exports;
}
var a = ze();
const ae = Ie(null), Ne = () => {
  const r = Re(ae);
  if (!r)
    throw new Error("useVariations must be used within a VariationsProvider");
  return r;
};
function Be({
  children: r,
  disableQueryString: m = !1
}) {
  const [E, x] = J(/* @__PURE__ */ new Map()), [c, w] = J(/* @__PURE__ */ new Map());
  W(() => {
    if (m || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search).get("var");
    if (d)
      try {
        const g = d.split("_").map((l) => {
          const [f, i] = l.split(".");
          if (!f || !i) throw new Error("Invalid format");
          return [f, i];
        });
        x(new Map(g));
      } catch {
        x(/* @__PURE__ */ new Map());
      }
  }, [m]), W(() => {
    if (m || typeof window > "u") return;
    const p = new URLSearchParams(window.location.search), d = Array.from(E.entries());
    if (d.length === 0)
      p.delete("var");
    else {
      const f = d.map(([i, n]) => `${i}.${n}`).join("_");
      p.set("var", f);
    }
    const g = p.toString(), l = g ? `${window.location.pathname}?${g}` : window.location.pathname;
    window.history.replaceState({}, "", l);
  }, [E, m]), W(() => {
    if (m || typeof window > "u") return;
    const p = () => {
      const g = new URLSearchParams(window.location.search).get("var");
      if (g)
        try {
          const l = g.split("_").map((f) => {
            const [i, n] = f.split(".");
            if (!i || !n) throw new Error("Invalid format");
            return [i, n];
          });
          x(new Map(l));
        } catch {
          x(/* @__PURE__ */ new Map());
        }
      else
        x(/* @__PURE__ */ new Map());
    };
    return window.addEventListener("popstate", p), () => window.removeEventListener("popstate", p);
  }, [m]);
  const k = G(() => {
    const p = E.get("root");
    if (!p) return null;
    const d = (l, f) => {
      const i = {
        id: l,
        group: f,
        children: /* @__PURE__ */ new Map()
      };
      return Array.from(c.entries()).forEach(([, n]) => {
        if (n.parentId === l) {
          const h = E.get(n.group);
          h && i.children.set(n.group, d(h, n.group));
        }
      }), i;
    };
    return d(p, "root");
  }, [E, c]), v = je((p, d) => {
    x((g) => {
      const l = new Map(g);
      return l.set(p, d), p === "root" ? Array.from(g.keys()).forEach((f) => {
        f !== "root" && l.delete(f);
      }) : Array.from(c.entries()).find(([i]) => i === d) && Array.from(g.keys()).forEach((i) => {
        const n = Array.from(c.entries()).find(([, h]) => h.group === i);
        n && n[1].parentId === d && l.delete(i);
      }), l;
    });
  }, [c]), y = je((p, d, g, l, f) => {
    w((i) => {
      const n = i.get(d);
      if ((n == null ? void 0 : n.group) === p && (n == null ? void 0 : n.label) === g && (n == null ? void 0 : n.groupLabel) === l && (n == null ? void 0 : n.parentId) === f)
        return i;
      const h = new Map(i);
      return h.set(d, {
        group: p,
        label: g,
        groupLabel: l,
        parentId: f
      }), h;
    });
  }, []), j = G(() => ({
    activeIds: E,
    setActiveId: v,
    registerVariation: y,
    variations: c,
    activeTree: k
  }), [E, v, y, c, k]);
  return /* @__PURE__ */ a.jsx(ae.Provider, { value: j, children: r });
}
function q(r) {
  return r.toLowerCase().replace(/\s+/g, "-");
}
function Se({
  label: r,
  children: m,
  ...E
}) {
  const {
    group: x = "",
    id: c,
    groupLabel: w,
    parentId: k
  } = E, v = G(() => c || q(r), [c, r]), {
    activeIds: y,
    registerVariation: j
  } = Ne(), p = y.get(x) === v;
  return W(() => {
    if (!x) {
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
    j(x, v, r, w || x, k);
  }, [x, v, r, w, k, j]), p ? /* @__PURE__ */ a.jsx(a.Fragment, { children: m }) : null;
}
const Ye = "root";
function Ue(r) {
  return S.isValidElement(r) && r.type === Se && typeof r.props.label == "string";
}
function We({
  isRoot: r = !1,
  label: m,
  children: E,
  ...x
}) {
  const {
    parentId: c,
    group: w
  } = x, k = Re(ae);
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
  if (r && c)
    throw new Error(`Variations component error: Cannot use isRoot in a nested Variations component.

The isRoot prop can only be used on the top-level Variations component.
Remove the isRoot prop from any nested Variations components.`);
  const v = w || (r ? Ye : q(m)), {
    activeIds: y,
    setActiveId: j,
    variations: p
  } = k, d = G(() => {
    const l = /* @__PURE__ */ new Map();
    return Array.from(p.entries()).forEach(([f, i]) => {
      const {
        group: n,
        label: h,
        groupLabel: A
      } = i;
      l.has(n) || l.set(n, []), l.get(n).push([f, {
        label: h,
        groupLabel: A
      }]);
    }), l;
  }, [p]), g = G(() => S.Children.map(E, (l) => {
    if (S.isValidElement(l)) {
      if (l.type === Se) {
        if (!Ue(l))
          throw new Error("Invalid Variation component");
        const f = q(l.props.label);
        return S.cloneElement(l, {
          ...l.props,
          group: v,
          groupLabel: m,
          id: f,
          parentId: c
        });
      } else if (l.type === We) {
        const f = l, i = y.get(v), n = q(f.props.label);
        return S.cloneElement(f, {
          ...f.props,
          parentId: i,
          group: n
        });
      }
    }
    return l;
  }), [E, v, m, y, c]);
  return W(() => {
    if (!y.has(v)) {
      const l = d.get(v);
      if (l && l.length > 0) {
        const [f] = l[0];
        j(v, f);
      }
    }
  }, [v, d, y, j]), /* @__PURE__ */ a.jsx(a.Fragment, { children: g });
}
const _e = ({
  group: r,
  variations: m,
  activeIds: E,
  setActiveId: x,
  isMinimized: c
}) => {
  var v, y, j, p;
  const w = (y = (v = m[0]) == null ? void 0 : v[1]) == null ? void 0 : y.groupLabel, k = E.get(r);
  return /* @__PURE__ */ a.jsxs("div", { className: "variation-group", children: [
    /* @__PURE__ */ a.jsx("div", { className: "variation-title", title: w, children: w }),
    /* @__PURE__ */ a.jsx("div", { className: "variations-selects", children: /* @__PURE__ */ a.jsx("select", { value: k || "", onChange: (d) => {
      x(r, d.target.value);
    }, className: "variation-select", tabIndex: c ? -1 : 0, title: ((p = (j = m.find(([d]) => d === k)) == null ? void 0 : j[1]) == null ? void 0 : p.label) || "", children: m.map(([d, {
      label: g
    }]) => /* @__PURE__ */ a.jsx("option", { value: d, title: g, children: g }, d)) }) }),
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
function Xe({
  position: r = "bottom-right",
  minimizedByDefault: m = !1,
  className: E,
  ...x
}) {
  const [c, w] = J(m), [k, v] = J(!1), {
    activeIds: y,
    setActiveId: j,
    variations: p
  } = Ne(), d = () => {
    const i = new URLSearchParams(window.location.search), n = Array.from(y.entries());
    if (n.length > 0) {
      const $ = n.map(([V, F]) => `${V}.${F}`).join("_");
      i.set("var", $);
    } else
      i.delete("var");
    const h = i.toString(), A = window.location.href.split("?")[0] + (h ? `?${h}` : "");
    navigator.clipboard.writeText(A).then(() => {
      v(!0), setTimeout(() => v(!1), 2e3);
    });
  }, g = S.useMemo(() => {
    const i = /* @__PURE__ */ new Map();
    return Array.from(p.entries()).forEach(([n, h]) => {
      const {
        group: A,
        label: $,
        groupLabel: V
      } = h;
      i.has(A) || i.set(A, []), i.get(A).push([n, {
        label: $,
        groupLabel: V
      }]);
    }), i;
  }, [p]), f = (() => {
    const i = [], n = /* @__PURE__ */ new Set();
    if (g.has("root")) {
      const h = g.get("root");
      i.push(/* @__PURE__ */ a.jsx(_e, { group: "root", variations: h, activeIds: y, setActiveId: j, isMinimized: c }, "root")), n.add("root");
    }
    return Array.from(y.entries()).forEach(([h]) => {
      if (!n.has(h) && g.has(h)) {
        const A = g.get(h);
        i.push(/* @__PURE__ */ a.jsx(_e, { group: h, variations: A, activeIds: y, setActiveId: j, isMinimized: c }, h)), n.add(h);
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
      n.code === "KeyV" && n.altKey && !n.ctrlKey && !n.shiftKey && !n.metaKey && (n.preventDefault(), w((h) => !h));
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: `variations-controls-container ${E || ""}`, ...x, children: [
    /* @__PURE__ */ a.jsx("div", { className: `variations-controls ${c ? "minimized" : ""}`, children: c ? /* @__PURE__ */ a.jsx("button", { className: "variations-circle", onClick: () => w(!1), tabIndex: c ? 0 : -1, children: /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
          /* @__PURE__ */ a.jsx("button", { className: "variations-header-button", onClick: d, title: "Copy link to clipboard", tabIndex: c ? -1 : 0, children: k ? /* @__PURE__ */ a.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx("path", { d: "M20 6L9 17L4 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ a.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ a.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ a.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ a.jsx("button", { className: "variations-header-toggle", onClick: () => w(!0), tabIndex: c ? -1 : 0, children: "×" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "variation-groups", children: f })
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
  Xe as VariationsControls,
  Be as VariationsProvider
};
