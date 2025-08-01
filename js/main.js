/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
    }
    n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    n.d(r, i, function(e) {
                        return t[e]
                    }
                        .bind(null, i));
            return r
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
            ;
            return n.d(e, "a", e),
                e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 100)
}([function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}
    , function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }
    , function(t, e, n) {
        "use strict";
        var r = n(16);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
        var i = r(n(31));
        e.IX2BrowserSupport = i;
        var o = r(n(85));
        e.IX2Easings = o;
        var a = r(n(86));
        e.IX2EasingUtils = a;
        var u = r(n(87));
        e.IX2EngineActionTypes = u;
        var c = r(n(88));
        e.IX2EngineEventTypes = c;
        var s = r(n(48));
        e.IX2EngineItemTypes = s;
        var f = r(n(49));
        e.IX2EngineConstants = f;
        var l = r(n(186));
        e.IX2ElementsReducer = l;
        var d = r(n(89));
        e.IX2VanillaPlugins = d;
        var p = r(n(188));
        e.IX2VanillaUtils = p
    }
    , function(t, e, n) {
        var r = n(67)
            , i = "object" == typeof self && self && self.Object === Object && self
            , o = r || i || Function("return this")();
        t.exports = o
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = {}
            , i = {}
            , o = []
            , a = window.Webflow || []
            , u = window.jQuery
            , c = u(window)
            , s = u(document)
            , f = u.isFunction
            , l = r._ = n(102)
            , d = r.tram = n(54) && u.tram
            , p = !1
            , v = !1;
        function h(t) {
            r.env() && (f(t.design) && c.on("__wf_design", t.design),
            f(t.preview) && c.on("__wf_preview", t.preview)),
            f(t.destroy) && c.on("__wf_destroy", t.destroy),
            t.ready && f(t.ready) && function(t) {
                if (p)
                    return void t.ready();
                if (l.contains(o, t.ready))
                    return;
                o.push(t.ready)
            }(t)
        }
        function E(t) {
            f(t.design) && c.off("__wf_design", t.design),
            f(t.preview) && c.off("__wf_preview", t.preview),
            f(t.destroy) && c.off("__wf_destroy", t.destroy),
            t.ready && f(t.ready) && function(t) {
                o = l.filter(o, function(e) {
                    return e !== t.ready
                })
            }(t)
        }
        d.config.hideBackface = !1,
            d.config.keepInherited = !0,
            r.define = function(t, e, n) {
                i[t] && E(i[t]);
                var r = i[t] = e(u, l, n) || {};
                return h(r),
                    r
            }
            ,
            r.require = function(t) {
                return i[t]
            }
            ,
            r.push = function(t) {
                p ? f(t) && t() : a.push(t)
            }
            ,
            r.env = function(t) {
                var e = window.__wf_design
                    , n = void 0 !== e;
                return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
            }
        ;
        var _, g = navigator.userAgent.toLowerCase(), y = r.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch, I = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10), m = r.env.ios = /(ipod|iphone|ipad)/.test(g);
        r.env.safari = /safari/.test(g) && !I && !m,
        y && s.on("touchstart mousedown", function(t) {
            _ = t.target
        }),
            r.validClick = y ? function(t) {
                    return t === _ || u.contains(t, _)
                }
                : function() {
                    return !0
                }
        ;
        var T, O = "resize.webflow orientationchange.webflow load.webflow";
        function S(t, e) {
            var n = []
                , r = {};
            return r.up = l.throttle(function(t) {
                l.each(n, function(e) {
                    e(t)
                })
            }),
            t && e && t.on(e, r.up),
                r.on = function(t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t))
                }
                ,
                r.off = function(t) {
                    n = arguments.length ? l.filter(n, function(e) {
                        return e !== t
                    }) : []
                }
                ,
                r
        }
        function A(t) {
            f(t) && t()
        }
        function b() {
            T && (T.reject(),
                c.off("load", T.resolve)),
                T = new u.Deferred,
                c.on("load", T.resolve)
        }
        r.resize = S(c, O),
            r.scroll = S(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"),
            r.redraw = S(),
            r.location = function(t) {
                window.location = t
            }
            ,
        r.env() && (r.location = function() {}
        ),
            r.ready = function() {
                p = !0,
                    v ? (v = !1,
                        l.each(i, h)) : l.each(o, A),
                    l.each(a, A),
                    r.resize.up()
            }
            ,
            r.load = function(t) {
                T.then(t)
            }
            ,
            r.destroy = function(t) {
                t = t || {},
                    v = !0,
                    c.triggerHandler("__wf_destroy"),
                null != t.domready && (p = t.domready),
                    l.each(i, E),
                    r.resize.off(),
                    r.scroll.off(),
                    r.redraw.off(),
                    o = [],
                    a = [],
                "pending" === T.state() && b()
            }
            ,
            u(r.ready),
            b(),
            t.exports = window.Webflow = r
    }
    , function(t, e, n) {
        var r = n(120)
            , i = n(174)
            , o = n(45)
            , a = n(1)
            , u = n(181);
        t.exports = function(t) {
            return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
        }
    }
    , function(t, e, n) {
        var r = n(132)
            , i = n(137);
        t.exports = function(t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }
    , function(t, e, n) {
        var r = n(11)
            , i = n(133)
            , o = n(134)
            , a = "[object Null]"
            , u = "[object Undefined]"
            , c = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
        }
    }
    , function(t, e, n) {
        var r = n(66)
            , i = n(39);
        t.exports = function(t) {
            return null != t && i(t.length) && !r(t)
        }
    }
    , function(t, e, n) {
        var r = n(3).Symbol;
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(25)
            , i = 1 / 0;
        t.exports = function(t) {
            if ("string" == typeof t || r(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
        ;
        e.clone = c,
            e.addLast = l,
            e.addFirst = d,
            e.removeLast = p,
            e.removeFirst = v,
            e.insert = h,
            e.removeAt = E,
            e.replaceAt = _,
            e.getIn = g,
            e.set = y,
            e.setIn = I,
            e.update = m,
            e.updateIn = T,
            e.merge = O,
            e.mergeDeep = S,
            e.mergeIn = A,
            e.omit = b,
            e.addDefaults = R;
        /*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t)
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t))
                return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i]
            }
            return n
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++)
                d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var E = a(h);
                    if (E.length)
                        for (var _ = 0; _ <= E.length; _++) {
                            var g = E[_];
                            if (!t || void 0 === r[g]) {
                                var y = h[g];
                                e && f(r[g]) && f(y) && (y = s(t, e, r[g], y)),
                                void 0 !== y && y !== r[g] && (u || (u = !0,
                                    r = c(r)),
                                    r[g] = y)
                            }
                        }
                }
            }
            return r
        }
        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e)
        }
        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e])
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t)
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t
        }
        function v(t) {
            return t.length ? t.slice(1) : t
        }
        function h(t, e, n) {
            return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
        }
        function E(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
        }
        function _(t, e, n) {
            if (t[e] === n)
                return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++)
                i[o] = t[o];
            return i[e] = n,
                i
        }
        function g(t, e) {
            if (!Array.isArray(e) && o(i),
            null != t) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0))
                        return n
                }
                return n
            }
        }
        function y(t, e, n) {
            var r = null == t ? "number" == typeof e ? [] : {} : t;
            if (r[e] === n)
                return r;
            var i = c(r);
            return i[e] = n,
                i
        }
        function I(t, e, n) {
            return e.length ? function t(e, n, r, i) {
                var o = void 0
                    , a = n[i];
                o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
                return y(e, a, o)
            }(t, e, n, 0) : n
        }
        function m(t, e, n) {
            return y(t, e, n(null == t ? void 0 : t[e]))
        }
        function T(t, e, n) {
            return I(t, e, n(g(t, e)))
        }
        function O(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
        }
        function S(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
        }
        function A(t, e, n, r, i, o, a) {
            var u = g(t, e);
            null == u && (u = {});
            for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++)
                f[l - 7] = arguments[l];
            return I(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
        }
        function b(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break
                }
            if (!r)
                return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f])
            }
            return o
        }
        function R(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
        }
        var w = {
            clone: c,
            addLast: l,
            addFirst: d,
            removeLast: p,
            removeFirst: v,
            insert: h,
            removeAt: E,
            replaceAt: _,
            getIn: g,
            set: y,
            setIn: I,
            update: m,
            updateIn: T,
            merge: O,
            mergeDeep: S,
            mergeIn: A,
            omit: b,
            addDefaults: R
        };
        e.default = w
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
    }
    , function(t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
            )(t)
        }
        function r(e) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
                    return n(t)
                }
                : t.exports = r = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                }
                ,
                r(e)
        }
        t.exports = r
    }
    , function(t, e) {
        t.exports = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                    }
            return e.default = t,
                e
        }
    }
    , function(t, e, n) {
        var r = n(122)
            , i = n(123)
            , o = n(124)
            , a = n(125)
            , u = n(126);
        function c(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r,
            c.prototype.delete = i,
            c.prototype.get = o,
            c.prototype.has = a,
            c.prototype.set = u,
            t.exports = c
    }
    , function(t, e, n) {
        var r = n(32);
        t.exports = function(t, e) {
            for (var n = t.length; n--; )
                if (r(t[n][0], e))
                    return n;
            return -1
        }
    }
    , function(t, e, n) {
        var r = n(7)(Object, "create");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(146);
        t.exports = function(t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
    }
    , function(t, e, n) {
        var r = n(74)
            , i = n(40)
            , o = n(10);
        t.exports = function(t) {
            return o(t) ? r(t) : i(t)
        }
    }
    , function(t, e, n) {
        var r = n(164)
            , i = n(8)
            , o = Object.prototype
            , a = o.hasOwnProperty
            , u = o.propertyIsEnumerable
            , c = r(function() {
                return arguments
            }()) ? r : function(t) {
                return i(t) && a.call(t, "callee") && !u.call(t, "callee")
            }
        ;
        t.exports = c
    }
    , function(t, e, n) {
        var r = n(43);
        t.exports = function(t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i
        }
    }
    , function(t, e, n) {
        var r = n(1)
            , i = n(44)
            , o = n(175)
            , a = n(80);
        t.exports = function(t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t))
        }
    }
    , function(t, e, n) {
        var r = n(9)
            , i = n(8)
            , o = "[object Symbol]";
        t.exports = function(t) {
            return "symbol" == typeof t || i(t) && r(t) == o
        }
    }
    , function(t, e, n) {
        var r = n(14);
        t.exports = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                    , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                    i.forEach(function(e) {
                        r(t, e, n[e])
                    })
            }
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = window.jQuery
            , i = {}
            , o = []
            , a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0,
                    r(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null,
                    r(e).triggerHandler(i.types.OUTRO))
            }
        };
        i.triggers = {},
            i.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            },
            i.init = function() {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1])
                }
                o = [],
                    r.extend(i.triggers, a)
            }
            ,
            i.async = function() {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
                            o.push([e, n])
                        }
                    )
                }
            }
            ,
            i.async(),
            t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function() {
                return o
            }),
            n.d(e, "default", function() {
                return a
            });
        var r = n(57)
            , i = n(115)
            , o = {
            INIT: "@@redux/INIT"
        };
        function a(t, e, n) {
            var u;
            if ("function" == typeof e && void 0 === n && (n = e,
                e = void 0),
            void 0 !== n) {
                if ("function" != typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e)
            }
            if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
            var c = t
                , s = e
                , f = []
                , l = f
                , d = !1;
            function p() {
                l === f && (l = f.slice())
            }
            function v() {
                return s
            }
            function h(t) {
                if ("function" != typeof t)
                    throw new Error("Expected listener to be a function.");
                var e = !0;
                return p(),
                    l.push(t),
                    function() {
                        if (e) {
                            e = !1,
                                p();
                            var n = l.indexOf(t);
                            l.splice(n, 1)
                        }
                    }
            }
            function E(t) {
                if (!Object(r.default)(t))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === t.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    d = !0,
                        s = c(s, t)
                } finally {
                    d = !1
                }
                for (var e = f = l, n = 0; n < e.length; n++)
                    e[n]();
                return t
            }
            return E({
                type: o.INIT
            }),
                (u = {
                    dispatch: E,
                    subscribe: h,
                    getState: v,
                    replaceReducer: function(t) {
                        if ("function" != typeof t)
                            throw new Error("Expected the nextReducer to be a function.");
                        c = t,
                            E({
                                type: o.INIT
                            })
                    }
                })[i.default] = function() {
                    var t, e = h;
                    return (t = {
                        subscribe: function(t) {
                            if ("object" != typeof t)
                                throw new TypeError("Expected the observer to be an object.");
                            function n() {
                                t.next && t.next(v())
                            }
                            return n(),
                                {
                                    unsubscribe: e(n)
                                }
                        }
                    })[i.default] = function() {
                        return this
                    }
                        ,
                        t
                }
                ,
                u
        }
    }
    , function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            if (0 === e.length)
                return function(t) {
                    return t
                }
                    ;
            if (1 === e.length)
                return e[0];
            var r = e[e.length - 1]
                , i = e.slice(0, -1);
            return function() {
                return i.reduceRight(function(t, e) {
                    return e(t)
                }, r.apply(void 0, arguments))
            }
        }
        n.r(e),
            n.d(e, "default", function() {
                return r
            })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
        var i = r(n(63))
            , o = "undefined" != typeof window;
        e.IS_BROWSER_ENV = o;
        var a = function(t, e) {
            return o ? t() : e
        };
        e.withBrowser = a;
        var u = a(function() {
            return (0,
                i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
                return t in Element.prototype
            })
        });
        e.ELEMENT_MATCHES = u;
        var c = a(function() {
            var t = document.createElement("i")
                , e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (t.style.display = i,
                    t.style.display === i)
                        return i
                }
                return ""
            } catch (t) {
                return ""
            }
        }, "flex");
        e.FLEX_PREFIXED = c;
        var s = a(function() {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i])
                        return i
                }
            return "transform"
        }, "transform");
        e.TRANSFORM_PREFIXED = s;
        var f = s.split("transform")[0]
            , l = f ? f + "TransformStyle" : "transformStyle";
        e.TRANSFORM_STYLE_PREFIXED = l
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e
        }
    }
    , function(t, e, n) {
        var r = n(7)(n(3), "Map");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(138)
            , i = n(145)
            , o = n(147)
            , a = n(148)
            , u = n(149);
        function c(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r,
            c.prototype.delete = i,
            c.prototype.get = o,
            c.prototype.has = a,
            c.prototype.set = u,
            t.exports = c
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; )
                t[i + n] = e[n];
            return t
        }
    }
    , function(t, e, n) {
        (function(t) {
                var r = n(3)
                    , i = n(165)
                    , o = e && !e.nodeType && e
                    , a = o && "object" == typeof t && t && !t.nodeType && t
                    , u = a && a.exports === o ? r.Buffer : void 0
                    , c = (u ? u.isBuffer : void 0) || i;
                t.exports = c
            }
        ).call(this, n(75)(t))
    }
    , function(t, e) {
        var n = 9007199254740991
            , r = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t, e) {
            var i = typeof t;
            return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }
    , function(t, e, n) {
        var r = n(166)
            , i = n(167)
            , o = n(168)
            , a = o && o.isTypedArray
            , u = a ? i(a) : r;
        t.exports = u
    }
    , function(t, e) {
        var n = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
        }
    }
    , function(t, e, n) {
        var r = n(41)
            , i = n(169)
            , o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t))
                return i(t);
            var e = [];
            for (var n in Object(t))
                o.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
    }
    , function(t, e) {
        var n = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || n)
        }
    }
    , function(t, e, n) {
        var r = n(170)
            , i = n(33)
            , o = n(171)
            , a = n(172)
            , u = n(77)
            , c = n(9)
            , s = n(68)
            , f = s(r)
            , l = s(i)
            , d = s(o)
            , p = s(a)
            , v = s(u)
            , h = c;
        (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
                var e = c(t)
                    , n = "[object Object]" == e ? t.constructor : void 0
                    , r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]"
                    }
                return e
            }
        ),
            t.exports = h
    }
    , function(t, e, n) {
        var r = n(24)
            , i = n(12);
        t.exports = function(t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
                t = t[i(e[n++])];
            return n && n == o ? t : void 0
        }
    }
    , function(t, e, n) {
        var r = n(1)
            , i = n(25)
            , o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
            , a = /^\w*$/;
        t.exports = function(t, e) {
            if (r(t))
                return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return t
        }
    }
    , function(t, e, n) {
        var r = n(184);
        t.exports = function(t) {
            var e = r(t)
                , n = e % 1;
            return e == e ? n ? e - n : e : 0
        }
    }
    , function(t, e, n) {
        var r = n(4)
            , i = n(25)
            , o = NaN
            , a = /^\s+|\s+$/g
            , u = /^[-+]0x[0-9a-f]+$/i
            , c = /^0b[01]+$/i
            , s = /^0o[0-7]+$/i
            , f = parseInt;
        t.exports = function(t) {
            if ("number" == typeof t)
                return t;
            if (i(t))
                return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.PLUGIN_LOTTIE = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
        e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
        e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
        e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
        e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
        e.STYLE_OPACITY = "STYLE_OPACITY";
        e.STYLE_SIZE = "STYLE_SIZE";
        e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
        e.STYLE_FILTER = "STYLE_FILTER";
        e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
        e.STYLE_BORDER = "STYLE_BORDER";
        e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
        e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
        e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
        e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
        e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
        e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
        e.GENERAL_LOOP = "GENERAL_LOOP";
        e.OBJECT_VALUE = "OBJECT_VALUE";
        e.FADE_EFFECT = "FADE_EFFECT";
        e.SLIDE_EFFECT = "SLIDE_EFFECT";
        e.BLUR_EFFECT = "BLUR_EFFECT";
        e.GROW_EFFECT = "GROW_EFFECT";
        e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
        e.SHRINK_EFFECT = "SHRINK_EFFECT";
        e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
        e.SPIN_EFFECT = "SPIN_EFFECT";
        e.FLY_EFFECT = "FLY_EFFECT";
        e.POP_EFFECT = "POP_EFFECT";
        e.FLIP_EFFECT = "FLIP_EFFECT";
        e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
        e.PULSE_EFFECT = "PULSE_EFFECT";
        e.DROP_EFFECT = "DROP_EFFECT";
        e.BLINK_EFFECT = "BLINK_EFFECT";
        e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
        e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
        e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
        e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
        e.JELLO_EFFECT = "JELLO_EFFECT";
        e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE"
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
        e.IX2_ID_DELIMITER = "|";
        e.WF_PAGE = "data-wf-page";
        e.W_MOD_JS = "w-mod-js";
        e.W_MOD_IX = "w-mod-ix";
        e.BOUNDARY_SELECTOR = ".w-dyn-item";
        e.CONFIG_X_VALUE = "xValue";
        e.CONFIG_Y_VALUE = "yValue";
        e.CONFIG_Z_VALUE = "zValue";
        e.CONFIG_VALUE = "value";
        e.CONFIG_X_UNIT = "xUnit";
        e.CONFIG_Y_UNIT = "yUnit";
        e.CONFIG_Z_UNIT = "zUnit";
        e.CONFIG_UNIT = "unit";
        e.TRANSFORM = "transform";
        e.TRANSLATE_X = "translateX";
        e.TRANSLATE_Y = "translateY";
        e.TRANSLATE_Z = "translateZ";
        e.TRANSLATE_3D = "translate3d";
        e.SCALE_X = "scaleX";
        e.SCALE_Y = "scaleY";
        e.SCALE_Z = "scaleZ";
        e.SCALE_3D = "scale3d";
        e.ROTATE_X = "rotateX";
        e.ROTATE_Y = "rotateY";
        e.ROTATE_Z = "rotateZ";
        e.SKEW = "skew";
        e.SKEW_X = "skewX";
        e.SKEW_Y = "skewY";
        e.OPACITY = "opacity";
        e.FILTER = "filter";
        e.WIDTH = "width";
        e.HEIGHT = "height";
        e.BACKGROUND_COLOR = "backgroundColor";
        e.BACKGROUND = "background";
        e.BORDER_COLOR = "borderColor";
        e.COLOR = "color";
        e.DISPLAY = "display";
        e.FLEX = "flex";
        e.WILL_CHANGE = "willChange";
        e.AUTO = "AUTO";
        e.COMMA_DELIMITER = ",";
        e.COLON_DELIMITER = ":";
        e.BAR_DELIMITER = "|";
        e.CHILDREN = "CHILDREN";
        e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        e.SIBLINGS = "SIBLINGS";
        e.PARENT = "PARENT";
        e.PRESERVE_3D = "preserve-3d";
        e.HTML_ELEMENT = "HTML_ELEMENT";
        e.PLAIN_OBJECT = "PLAIN_OBJECT";
        e.ABSTRACT_NODE = "ABSTRACT_NODE";
        e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
        e.RENDER_GENERAL = "RENDER_GENERAL";
        e.RENDER_STYLE = "RENDER_STYLE";
        e.RENDER_PLUGIN = "RENDER_PLUGIN"
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
        var i = r(n(26))
            , o = n(2)
            , a = o.IX2EngineActionTypes
            , u = a.IX2_RAW_DATA_IMPORTED
            , c = a.IX2_SESSION_INITIALIZED
            , s = a.IX2_SESSION_STARTED
            , f = a.IX2_SESSION_STOPPED
            , l = a.IX2_PREVIEW_REQUESTED
            , d = a.IX2_PLAYBACK_REQUESTED
            , p = a.IX2_STOP_REQUESTED
            , v = a.IX2_CLEAR_REQUESTED
            , h = a.IX2_EVENT_LISTENER_ADDED
            , E = a.IX2_TEST_FRAME_RENDERED
            , _ = a.IX2_EVENT_STATE_CHANGED
            , g = a.IX2_ANIMATION_FRAME_CHANGED
            , y = a.IX2_PARAMETER_CHANGED
            , I = a.IX2_INSTANCE_ADDED
            , m = a.IX2_INSTANCE_STARTED
            , T = a.IX2_INSTANCE_REMOVED
            , O = a.IX2_ELEMENT_STATE_CHANGED
            , S = a.IX2_ACTION_LIST_PLAYBACK_CHANGED
            , A = a.IX2_VIEWPORT_WIDTH_CHANGED
            , b = a.IX2_MEDIA_QUERIES_DEFINED
            , R = o.IX2EngineItemTypes.GENERAL_START_ACTION
            , w = o.IX2VanillaUtils.reifyState;
        e.rawDataImported = function(t) {
            return {
                type: u,
                payload: (0,
                    i.default)({}, w(t))
            }
        }
        ;
        e.sessionInitialized = function(t) {
            var e = t.hasBoundaryNodes;
            return {
                type: c,
                payload: {
                    hasBoundaryNodes: e
                }
            }
        }
        ;
        e.sessionStarted = function() {
            return {
                type: s,
                payload: {}
            }
        }
        ;
        e.sessionStopped = function() {
            return {
                type: f,
                payload: {}
            }
        }
        ;
        e.previewRequested = function(t) {
            var e = t.rawData;
            return {
                type: l,
                payload: {
                    rawData: e
                }
            }
        }
        ;
        e.playbackRequested = function(t) {
            var e = t.actionTypeId
                , n = void 0 === e ? R : e
                , r = t.actionListId
                , i = t.actionItemId
                , o = t.eventId
                , a = t.allowEvents
                , u = t.immediate
                , c = t.testManual
                , s = t.verbose
                , f = t.rawData;
            return {
                type: d,
                payload: {
                    actionTypeId: n,
                    actionListId: r,
                    actionItemId: i,
                    testManual: c,
                    eventId: o,
                    allowEvents: a,
                    immediate: u,
                    verbose: s,
                    rawData: f
                }
            }
        }
        ;
        e.stopRequested = function(t) {
            return {
                type: p,
                payload: {
                    actionListId: t
                }
            }
        }
        ;
        e.clearRequested = function() {
            return {
                type: v,
                payload: {}
            }
        }
        ;
        e.eventListenerAdded = function(t, e) {
            return {
                type: h,
                payload: {
                    target: t,
                    listenerParams: e
                }
            }
        }
        ;
        e.testFrameRendered = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return {
                type: E,
                payload: {
                    step: t
                }
            }
        }
        ;
        e.eventStateChanged = function(t, e) {
            return {
                type: _,
                payload: {
                    stateKey: t,
                    newState: e
                }
            }
        }
        ;
        e.animationFrameChanged = function(t, e) {
            return {
                type: g,
                payload: {
                    now: t,
                    parameters: e
                }
            }
        }
        ;
        e.parameterChanged = function(t, e) {
            return {
                type: y,
                payload: {
                    key: t,
                    value: e
                }
            }
        }
        ;
        e.instanceAdded = function(t) {
            return {
                type: I,
                payload: (0,
                    i.default)({}, t)
            }
        }
        ;
        e.instanceStarted = function(t, e) {
            return {
                type: m,
                payload: {
                    instanceId: t,
                    time: e
                }
            }
        }
        ;
        e.instanceRemoved = function(t) {
            return {
                type: T,
                payload: {
                    instanceId: t
                }
            }
        }
        ;
        e.elementStateChanged = function(t, e, n, r) {
            return {
                type: O,
                payload: {
                    elementId: t,
                    actionTypeId: e,
                    current: n,
                    actionItem: r
                }
            }
        }
        ;
        e.actionListPlaybackChanged = function(t) {
            var e = t.actionListId
                , n = t.isPlaying;
            return {
                type: S,
                payload: {
                    actionListId: e,
                    isPlaying: n
                }
            }
        }
        ;
        e.viewportWidthChanged = function(t) {
            var e = t.width
                , n = t.mediaQueries;
            return {
                type: A,
                payload: {
                    width: e,
                    mediaQueries: n
                }
            }
        }
        ;
        e.mediaQueriesDefined = function() {
            return {
                type: b,
                payload: {}
            }
        }
    }
    , function(t, e, n) {
        var r = n(97)
            , i = n(52);
        function o(t, e) {
            this.__wrapped__ = t,
                this.__actions__ = [],
                this.__chain__ = !!e,
                this.__index__ = 0,
                this.__values__ = void 0
        }
        o.prototype = r(i.prototype),
            o.prototype.constructor = o,
            t.exports = o
    }
    , function(t, e) {
        t.exports = function() {}
    }
    , function(t, e, n) {
        var r = n(97)
            , i = n(52)
            , o = 4294967295;
        function a(t) {
            this.__wrapped__ = t,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = o,
                this.__views__ = []
        }
        a.prototype = r(i.prototype),
            a.prototype.constructor = a,
            t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)(n(15));
        window.tram = function(t) {
            function e(t, e) {
                return (new j.Bare).init(t, e)
            }
            function n(t) {
                return t.replace(/[A-Z]/g, function(t) {
                    return "-" + t.toLowerCase()
                })
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [e >> 16 & 255, e >> 8 & 255, 255 & e]
            }
            function o(t, e, n) {
                return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
            }
            function a() {}
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n)
            }
            function c(t, e, n) {
                if (void 0 !== e && (n = e),
                void 0 === t)
                    return n;
                var r = n;
                return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)),
                0 > r && (r = 0),
                    r == r ? r : n
            }
            function s(t) {
                W.debug && window && window.console.warn(t)
            }
            var f = function(t, e, n) {
                function i(t) {
                    return "object" == (0,
                        r.default)(t)
                }
                function o(t) {
                    return "function" == typeof t
                }
                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments),
                            t
                    }
                    function f() {}
                    c === n && (c = u,
                        u = Object),
                        s.Bare = f;
                    var l, d = a[t] = u[t], p = f[t] = s[t] = new a;
                    return p.constructor = s,
                        s.mixin = function(e) {
                            return f[t] = s[t] = r(s, e)[t],
                                s
                        }
                        ,
                        s.open = function(t) {
                            if (l = {},
                                o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t),
                                i(l))
                                for (var n in l)
                                    e.call(l, n) && (p[n] = l[n]);
                            return o(p.init) || (p.init = u),
                                s
                        }
                        ,
                        s.open(c)
                }
            }("prototype", {}.hasOwnProperty)
                , l = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t
                        , o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }
                ],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t
                        , o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }
                ],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t
                        , o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }
                ],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t
                        , o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }
                ],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158),
                    n * (t /= r) * t * ((i + 1) * t - i) + e
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158),
                    n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158),
                        (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }
                ]
            }
                , d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
                , p = document
                , v = window
                , h = "bkwld-tram"
                , E = /[\-\.0-9]/g
                , _ = /[A-Z]/
                , g = "number"
                , y = /^(rgb|#)/
                , I = /(em|cm|mm|in|pt|pc|px)$/
                , m = /(em|cm|mm|in|pt|pc|px|%)$/
                , T = /(deg|rad|turn)$/
                , O = "unitless"
                , S = /(all|none) 0s ease 0s/
                , A = /^(width|height)$/
                , b = " "
                , R = p.createElement("a")
                , w = ["Webkit", "Moz", "O", "ms"]
                , L = ["-webkit-", "-moz-", "-o-", "-ms-"]
                , N = function(t) {
                if (t in R.style)
                    return {
                        dom: t,
                        css: t
                    };
                var e, n, r = "", i = t.split("-");
                for (e = 0; e < i.length; e++)
                    r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < w.length; e++)
                    if ((n = w[e] + r)in R.style)
                        return {
                            dom: n,
                            css: L[e] + t
                        }
            }
                , C = e.support = {
                bind: Function.prototype.bind,
                transform: N("transform"),
                transition: N("transition"),
                backface: N("backface-visibility"),
                timing: N("transition-timing-function")
            };
            if (C.transition) {
                var x = C.timing.dom;
                if (R.style[x] = l["ease-in-back"][0],
                    !R.style[x])
                    for (var D in d)
                        l[D][0] = d[D]
            }
            var P = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && C.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }()
                , M = e.now = function() {
                var t = v.performance
                    , e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }()
                , F = f(function(e) {
                function i(t, e) {
                    var n = function(t) {
                        for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                            var i = t[e];
                            i && r.push(i)
                        }
                        return r
                    }(("" + t).split(b))
                        , r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i)
                        return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0]
                            , a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare),
                            a.init(this.$el, n, i, e),
                            a
                    }
                }
                function o(t, e, n) {
                    if (t) {
                        var o = (0,
                            r.default)(t);
                        if (e || (this.timer && this.timer.destroy(),
                            this.queue = [],
                            this.active = !1),
                        "number" == o && e)
                            return this.timer = new B({
                                duration: t,
                                context: this,
                                complete: a
                            }),
                                void (this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o)
                            return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span),
                                    t.stop(),
                                    t.animate(e)
                            }, function(t) {
                                "wait"in t && (s = c(t.wait, 0))
                            }),
                                d.call(this),
                            s > 0 && (this.timer = new B({
                                duration: s,
                                context: this
                            }),
                                this.active = !0,
                            e && (this.timer.complete = a));
                            var v = this
                                , h = !1
                                , E = {};
                            P(function() {
                                p.call(v, t, function(t) {
                                    t.active && (h = !0,
                                        E[t.name] = t.nextStyle)
                                }),
                                h && v.$el.css(E)
                            })
                        }
                    }
                }
                function a() {
                    if (this.timer && this.timer.destroy(),
                        this.active = !1,
                        this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }
                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1,
                        "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0,
                            r.default)(t) && null != t ? t : this.props,
                        p.call(this, e, v),
                        d.call(this)
                }
                function f() {
                    u.call(this),
                        this.el.style.display = "none"
                }
                function l() {
                    this.el.offsetHeight
                }
                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream),
                        this.props)
                        (e = this.props[t]).active && n.push(e.string);
                    n = n.join(","),
                    this.style !== n && (this.style = n,
                        this.el.style[C.transition.dom] = n)
                }
                function p(t, e, r) {
                    var o, a, u, c, s = e !== v, f = {};
                    for (o in t)
                        u = t[o],
                            o in q ? (f.transform || (f.transform = {}),
                                f.transform[o] = u) : (_.test(o) && (o = n(o)),
                                o in Q ? f[o] = u : (c || (c = {}),
                                    c[o] = u));
                    for (o in f) {
                        if (u = f[o],
                            !(a = this.props[o])) {
                            if (!s)
                                continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }
                function v(t) {
                    t.stop()
                }
                function E(t, e) {
                    t.set(e)
                }
                function g(t) {
                    this.$el.css(t)
                }
                function y(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++)
                                t.apply(this.children[n], e);
                            return this
                        }
                            .call(this, n, arguments) : (this.el && n.apply(this, arguments),
                            this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e),
                        this.el = this.$el[0],
                        this.props = {},
                        this.queue = [],
                        this.style = "",
                        this.active = !1,
                    W.keepInherited && !W.fallback) {
                        var n = z(this.el, "transition");
                        n && !S.test(n) && (this.upstream = n)
                    }
                    C.backface && W.hideBackface && Y(this.el, C.backface.css, "hidden")
                }
                    ,
                    y("add", i),
                    y("start", o),
                    y("wait", function(t) {
                        t = c(t, 0),
                            this.active ? this.queue.push({
                                options: t
                            }) : (this.timer = new B({
                                duration: t,
                                context: this,
                                complete: a
                            }),
                                this.active = !0)
                    }),
                    y("then", function(t) {
                        return this.active ? (this.queue.push({
                            options: t,
                            args: arguments
                        }),
                            void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                    }),
                    y("next", a),
                    y("stop", u),
                    y("set", function(t) {
                        u.call(this, t),
                            p.call(this, t, E, g)
                    }),
                    y("show", function(t) {
                        "string" != typeof t && (t = "block"),
                            this.el.style.display = t
                    }),
                    y("hide", f),
                    y("redraw", l),
                    y("destroy", function() {
                        u.call(this),
                            t.removeData(this.el, h),
                            this.$el = this.el = null
                    })
            })
                , j = f(F, function(e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new F.Bare);
                    return r.el || r.init(e),
                        n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length)
                        return this;
                    if (1 === i.length)
                        return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }),
                        this.children = o,
                        this
                }
            })
                , G = f(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t),
                        e
                }
                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500
                    , a = "ease"
                    , u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t,
                        this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]),
                    K[o] && (o = K[o]),
                        this.name = o,
                        this.type = n[1],
                        this.duration = c(e[1], this.duration, i),
                        this.ease = function(t, e, n) {
                            return void 0 !== e && (n = e),
                                t in l ? t : n
                        }(e[2], this.ease, a),
                        this.delay = c(e[3], this.delay, u),
                        this.span = this.duration + this.delay,
                        this.active = !1,
                        this.nextStyle = null,
                        this.auto = A.test(this.name),
                        this.unit = r.unit || this.unit || W.defaultUnit,
                        this.angle = r.angle || this.angle || W.defaultAngle,
                        W.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                            this.string = this.name + b + this.duration + "ms" + ("ease" != this.ease ? b + l[this.ease][0] : "") + (this.delay ? b + this.delay + "ms" : ""))
                }
                    ,
                    t.set = function(t) {
                        t = this.convert(t, this.type),
                            this.update(t),
                            this.redraw()
                    }
                    ,
                    t.transition = function(t) {
                        this.active = !0,
                            t = this.convert(t, this.type),
                        this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()),
                            this.redraw()),
                        "auto" == t && (t = e.call(this))),
                            this.nextStyle = t
                    }
                    ,
                    t.fallback = function(t) {
                        var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                        t = this.convert(t, this.type),
                        this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)),
                        "auto" == t && (t = e.call(this))),
                            this.tween = new k({
                                from: n,
                                to: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                    }
                    ,
                    t.get = function() {
                        return z(this.el, this.name)
                    }
                    ,
                    t.update = function(t) {
                        Y(this.el, this.name, t)
                    }
                    ,
                    t.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1,
                            this.nextStyle = null,
                            Y(this.el, this.name, this.get()));
                        var t = this.tween;
                        t && t.context && t.destroy()
                    }
                    ,
                    t.convert = function(t, e) {
                        if ("auto" == t && this.auto)
                            return t;
                        var i, o = "number" == typeof t, a = "string" == typeof t;
                        switch (e) {
                            case g:
                                if (o)
                                    return t;
                                if (a && "" === t.replace(E, ""))
                                    return +t;
                                i = "number(unitless)";
                                break;
                            case y:
                                if (a) {
                                    if ("" === t && this.original)
                                        return this.original;
                                    if (e.test(t))
                                        return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                                }
                                i = "hex or rgb string";
                                break;
                            case I:
                                if (o)
                                    return t + this.unit;
                                if (a && e.test(t))
                                    return t;
                                i = "number(px) or string(unit)";
                                break;
                            case m:
                                if (o)
                                    return t + this.unit;
                                if (a && e.test(t))
                                    return t;
                                i = "number(px) or string(unit or %)";
                                break;
                            case T:
                                if (o)
                                    return t + this.angle;
                                if (a && e.test(t))
                                    return t;
                                i = "number(deg) or string(angle)";
                                break;
                            case O:
                                if (o)
                                    return t;
                                if (a && m.test(t))
                                    return t;
                                i = "number(unitless) or string(unit or %)"
                        }
                        return function(t, e) {
                            s("Type warning: Expected: [" + t + "] Got: [" + (0,
                                r.default)(e) + "] " + e)
                        }(i, t),
                            t
                    }
                    ,
                    t.redraw = function() {
                        this.el.offsetHeight
                    }
            })
                , X = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), y))
                }
            })
                , V = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments),
                        this.animate = this.fallback
                }
                    ,
                    t.get = function() {
                        return this.$el[this.name]()
                    }
                    ,
                    t.update = function(t) {
                        this.$el[this.name](t)
                    }
            })
                , U = f(G, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t)
                        i = (o = q[n])[0],
                            r = o[1] || n,
                            a = this.convert(t[n], i),
                            e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments),
                    this.current || (this.current = {},
                    q.perspective && W.perspective && (this.current.perspective = W.perspective,
                        Y(this.el, this.name, this.style(this.current)),
                        this.redraw()))
                }
                    ,
                    t.set = function(t) {
                        n.call(this, t, function(t, e) {
                            this.current[t] = e
                        }),
                            Y(this.el, this.name, this.style(this.current)),
                            this.redraw()
                    }
                    ,
                    t.transition = function(t) {
                        var e = this.values(t);
                        this.tween = new H({
                            current: this.current,
                            values: e,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var n, r = {};
                        for (n in this.current)
                            r[n] = n in e ? e[n] : this.current[n];
                        this.active = !0,
                            this.nextStyle = this.style(r)
                    }
                    ,
                    t.fallback = function(t) {
                        var e = this.values(t);
                        this.tween = new H({
                            current: this.current,
                            values: e,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }
                    ,
                    t.update = function() {
                        Y(this.el, this.name, this.style(this.current))
                    }
                    ,
                    t.style = function(t) {
                        var e, n = "";
                        for (e in t)
                            n += e + "(" + t[e] + ") ";
                        return n
                    }
                    ,
                    t.values = function(t) {
                        var e, r = {};
                        return n.call(this, t, function(t, n, i) {
                            r[t] = n,
                            void 0 === this.current[t] && (e = 0,
                            ~t.indexOf("scale") && (e = 1),
                                this.current[t] = this.convert(e, i))
                        }),
                            r
                    }
            })
                , k = f(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n),
                                 e = M(),
                                 t = i; t--; )
                            (r = c[t]) && r.render(e)
                }
                var r = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0,
                        this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]),
                    "function" != typeof e && (e = r.ease),
                        this.ease = e,
                        this.update = t.update || a,
                        this.complete = t.complete || a,
                        this.context = t.context || this,
                        this.name = t.name;
                    var n = t.from
                        , i = t.to;
                    void 0 === n && (n = r.from),
                    void 0 === i && (i = r.to),
                        this.unit = t.unit || "",
                        "number" == typeof n && "number" == typeof i ? (this.begin = n,
                            this.change = i - n) : this.format(i, n),
                        this.value = this.begin + this.unit,
                        this.start = M(),
                    !1 !== t.autoplay && this.play()
                }
                    ,
                    e.play = function() {
                        var t;
                        this.active || (this.start || (this.start = M()),
                            this.active = !0,
                            t = this,
                        1 === c.push(t) && P(n))
                    }
                    ,
                    e.stop = function() {
                        var e, n, r;
                        this.active && (this.active = !1,
                            e = this,
                        (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1),
                            c.length = r,
                        n.length && (c = c.concat(n))))
                    }
                    ,
                    e.render = function(t) {
                        var e, n = t - this.start;
                        if (this.delay) {
                            if (n <= this.delay)
                                return;
                            n -= this.delay
                        }
                        if (n < this.duration) {
                            var r = this.ease(n, 0, 1, this.duration);
                            return e = this.startRGB ? function(t, e, n) {
                                return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                            }(this.startRGB, this.endRGB, r) : function(t) {
                                return Math.round(t * s) / s
                            }(this.begin + r * this.change),
                                this.value = e + this.unit,
                                void this.update.call(this.context, this.value)
                        }
                        e = this.endHex || this.begin + this.change,
                            this.value = e + this.unit,
                            this.update.call(this.context, this.value),
                            this.complete.call(this.context),
                            this.destroy()
                    }
                    ,
                    e.format = function(t, e) {
                        if (e += "",
                        "#" == (t += "").charAt(0))
                            return this.startRGB = i(e),
                                this.endRGB = i(t),
                                this.endHex = t,
                                this.begin = 0,
                                void (this.change = 1);
                        if (!this.unit) {
                            var n = e.replace(E, "");
                            n !== t.replace(E, "") && u("tween", e, t),
                                this.unit = n
                        }
                        e = parseFloat(e),
                            t = parseFloat(t),
                            this.begin = this.value = e,
                            this.change = t - e
                    }
                    ,
                    e.destroy = function() {
                        this.stop(),
                            this.context = null,
                            this.ease = this.update = this.complete = a
                    }
                ;
                var c = []
                    , s = 1e3
            })
                , B = f(k, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0,
                        this.complete = t.complete || a,
                        this.context = t.context,
                        this.play()
                }
                    ,
                    t.render = function(t) {
                        t - this.start < this.duration || (this.complete.call(this.context),
                            this.destroy())
                    }
            })
                , H = f(k, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context,
                        this.update = t.update,
                        this.tweens = [],
                        this.current = t.current,
                        t.values)
                        n = t.values[e],
                        this.current[e] !== n && this.tweens.push(new k({
                            name: e,
                            from: this.current[e],
                            to: n,
                            duration: t.duration,
                            delay: t.delay,
                            ease: t.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                    ,
                    t.render = function(t) {
                        var e, n, r = !1;
                        for (e = this.tweens.length; e--; )
                            (n = this.tweens[e]).context && (n.render(t),
                                this.current[n.name] = n.value,
                                r = !0);
                        return r ? void (this.update && this.update.call(this.context)) : this.destroy()
                    }
                    ,
                    t.destroy = function() {
                        if (e.destroy.call(this),
                            this.tweens) {
                            var t;
                            for (t = this.tweens.length; t--; )
                                this.tweens[t].destroy();
                            this.tweens = null,
                                this.current = null
                        }
                    }
            })
                , W = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
            e.fallback = function(t) {
                if (!C.transition)
                    return W.fallback = !0;
                W.agentTests.push("(" + t + ")");
                var e = new RegExp(W.agentTests.join("|"),"i");
                W.fallback = e.test(navigator.userAgent)
            }
                ,
                e.fallback("6.0.[2-5] Safari"),
                e.tween = function(t) {
                    return new k(t)
                }
                ,
                e.delay = function(t, e, n) {
                    return new B({
                        complete: e,
                        duration: t,
                        context: n
                    })
                }
                ,
                t.fn.tram = function(t) {
                    return e.call(null, this, t)
                }
            ;
            var Y = t.style
                , z = t.css
                , K = {
                transform: C.transform && C.transform.css
            }
                , Q = {
                color: [X, y],
                background: [X, y, "background-color"],
                "outline-color": [X, y],
                "border-color": [X, y],
                "border-top-color": [X, y],
                "border-right-color": [X, y],
                "border-bottom-color": [X, y],
                "border-left-color": [X, y],
                "border-width": [G, I],
                "border-top-width": [G, I],
                "border-right-width": [G, I],
                "border-bottom-width": [G, I],
                "border-left-width": [G, I],
                "border-spacing": [G, I],
                "letter-spacing": [G, I],
                margin: [G, I],
                "margin-top": [G, I],
                "margin-right": [G, I],
                "margin-bottom": [G, I],
                "margin-left": [G, I],
                padding: [G, I],
                "padding-top": [G, I],
                "padding-right": [G, I],
                "padding-bottom": [G, I],
                "padding-left": [G, I],
                "outline-width": [G, I],
                opacity: [G, g],
                top: [G, m],
                right: [G, m],
                bottom: [G, m],
                left: [G, m],
                "font-size": [G, m],
                "text-indent": [G, m],
                "word-spacing": [G, m],
                width: [G, m],
                "min-width": [G, m],
                "max-width": [G, m],
                height: [G, m],
                "min-height": [G, m],
                "max-height": [G, m],
                "line-height": [G, O],
                "scroll-top": [V, g, "scrollTop"],
                "scroll-left": [V, g, "scrollLeft"]
            }
                , q = {};
            C.transform && (Q.transform = [U],
                q = {
                    x: [m, "translateX"],
                    y: [m, "translateY"],
                    rotate: [T],
                    rotateX: [T],
                    rotateY: [T],
                    scale: [g],
                    scaleX: [g],
                    scaleY: [g],
                    skew: [T],
                    skewX: [T],
                    skewY: [T]
                }),
            C.transform && C.backface && (q.z = [m, "translateZ"],
                q.rotateZ = [T],
                q.scaleZ = [g],
                q.perspective = [I]);
            var $ = /ms/
                , Z = /s|\./;
            return t.tram = e
        }(window.jQuery)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(27);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null),
                t.dispatchEvent(n)
        }
        var o = window.jQuery
            , a = {}
            , u = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e),
                    i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e),
                    i(e, "COMPONENT_INACTIVE")
            }
        };
        a.triggers = {},
            a.types = {
                INTRO: "w-ix-intro.w-ix",
                OUTRO: "w-ix-outro.w-ix"
            },
            o.extend(a.triggers, u),
            t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(28);
        n.d(e, "createStore", function() {
            return r.default
        });
        var i = n(59);
        n.d(e, "combineReducers", function() {
            return i.default
        });
        var o = n(61);
        n.d(e, "bindActionCreators", function() {
            return o.default
        });
        var a = n(62);
        n.d(e, "applyMiddleware", function() {
            return a.default
        });
        var u = n(30);
        n.d(e, "compose", function() {
            return u.default
        });
        n(60)
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(107)
            , i = n(112)
            , o = n(114)
            , a = "[object Object]"
            , u = Function.prototype
            , c = Object.prototype
            , s = u.toString
            , f = c.hasOwnProperty
            , l = s.call(Object);
        e.default = function(t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a)
                return !1;
            var e = Object(i.default)(t);
            if (null === e)
                return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(108).default.Symbol;
        e.default = r
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function() {
                return o
            });
        var r = n(28);
        n(57),
            n(60);
        function i(t, e) {
            var n = e && e.type;
            return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0,
                "function" == typeof t[a] && (n[a] = t[a])
            }
            var u, c = Object.keys(n);
            try {
                !function(t) {
                    Object.keys(t).forEach(function(e) {
                        var n = t[e];
                        if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        }))
                            throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                        if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        }))
                            throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                    })
                }(n)
            } catch (t) {
                u = t
            }
            return function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
                    , e = arguments[1];
                if (u)
                    throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a]
                        , f = n[s]
                        , l = t[s]
                        , d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p)
                    }
                    o[s] = d,
                        r = r || d !== l
                }
                return r ? o : t
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t)
            } catch (t) {}
        }
        n.r(e),
            n.d(e, "default", function() {
                return r
            })
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }
        function i(t, e) {
            if ("function" == typeof t)
                return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o]
                    , u = t[a];
                "function" == typeof u && (i[a] = r(u, e))
            }
            return i
        }
        n.r(e),
            n.d(e, "default", function() {
                return i
            })
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function() {
                return o
            });
        var r = n(30)
            , i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
        ;
        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return function(t) {
                return function(n, o, a) {
                    var u, c = t(n, o, a), s = c.dispatch, f = {
                        getState: c.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                    return u = e.map(function(t) {
                        return t(f)
                    }),
                        s = r.default.apply(void 0, u)(c.dispatch),
                        i({}, c, {
                            dispatch: s
                        })
                }
            }
        }
    }
    , function(t, e, n) {
        var r = n(64)(n(183));
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(6)
            , i = n(10)
            , o = n(21);
        t.exports = function(t) {
            return function(e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    e = o(e),
                        n = function(t) {
                            return c(u[t], t, u)
                        }
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0
            }
        }
    }
    , function(t, e, n) {
        var r = n(17)
            , i = n(127)
            , o = n(128)
            , a = n(129)
            , u = n(130)
            , c = n(131);
        function s(t) {
            var e = this.__data__ = new r(t);
            this.size = e.size
        }
        s.prototype.clear = i,
            s.prototype.delete = o,
            s.prototype.get = a,
            s.prototype.has = u,
            s.prototype.set = c,
            t.exports = s
    }
    , function(t, e, n) {
        var r = n(9)
            , i = n(4)
            , o = "[object AsyncFunction]"
            , a = "[object Function]"
            , u = "[object GeneratorFunction]"
            , c = "[object Proxy]";
        t.exports = function(t) {
            if (!i(t))
                return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c
        }
    }
    , function(t, e, n) {
        (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n
            }
        ).call(this, n(29))
    }
    , function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return n.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    }
    , function(t, e, n) {
        var r = n(150)
            , i = n(8);
        t.exports = function t(e, n, o, a, u) {
            return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
        }
    }
    , function(t, e, n) {
        var r = n(151)
            , i = n(154)
            , o = n(155)
            , a = 1
            , u = 2;
        t.exports = function(t, e, n, c, s, f) {
            var l = n & a
                , d = t.length
                , p = e.length;
            if (d != p && !(l && p > d))
                return !1;
            var v = f.get(t);
            if (v && f.get(e))
                return v == e;
            var h = -1
                , E = !0
                , _ = n & u ? new r : void 0;
            for (f.set(t, e),
                     f.set(e, t); ++h < d; ) {
                var g = t[h]
                    , y = e[h];
                if (c)
                    var I = l ? c(y, g, h, e, t, f) : c(g, y, h, t, e, f);
                if (void 0 !== I) {
                    if (I)
                        continue;
                    E = !1;
                    break
                }
                if (_) {
                    if (!i(e, function(t, e) {
                        if (!o(_, e) && (g === t || s(g, t, n, c, f)))
                            return _.push(e)
                    })) {
                        E = !1;
                        break
                    }
                } else if (g !== y && !s(g, y, n, c, f)) {
                    E = !1;
                    break
                }
            }
            return f.delete(t),
                f.delete(e),
                E
        }
    }
    , function(t, e, n) {
        var r = n(35)
            , i = n(1);
        t.exports = function(t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t))
        }
    }
    , function(t, e, n) {
        var r = n(162)
            , i = n(73)
            , o = Object.prototype.propertyIsEnumerable
            , a = Object.getOwnPropertySymbols
            , u = a ? function(t) {
                return null == t ? [] : (t = Object(t),
                    r(a(t), function(e) {
                        return o.call(t, e)
                    }))
            }
            : i;
        t.exports = u
    }
    , function(t, e) {
        t.exports = function() {
            return []
        }
    }
    , function(t, e, n) {
        var r = n(163)
            , i = n(22)
            , o = n(1)
            , a = n(36)
            , u = n(37)
            , c = n(38)
            , s = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            var n = o(t)
                , f = !n && i(t)
                , l = !n && !f && a(t)
                , d = !n && !f && !l && c(t)
                , p = n || f || l || d
                , v = p ? r(t.length, String) : []
                , h = v.length;
            for (var E in t)
                !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
            return v
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}
                ,
                t.paths = [],
            t.children || (t.children = []),
                Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }),
                Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }),
                t.webpackPolyfill = 1),
                t
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return t(e(n))
            }
        }
    }
    , function(t, e, n) {
        var r = n(7)(n(3), "WeakMap");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t) {
            return t == t && !r(t)
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return function(n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n))
            }
        }
    }
    , function(t, e, n) {
        var r = n(81);
        t.exports = function(t) {
            return null == t ? "" : r(t)
        }
    }
    , function(t, e, n) {
        var r = n(11)
            , i = n(82)
            , o = n(1)
            , a = n(25)
            , u = 1 / 0
            , c = r ? r.prototype : void 0
            , s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e)
                return e;
            if (o(e))
                return i(e, t) + "";
            if (a(e))
                return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
                i[n] = e(t[n], n, t);
            return i
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (e(t[o], o, t))
                    return o;
            return -1
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.inQuad = function(t) {
                return Math.pow(t, 2)
            }
            ,
            e.outQuad = function(t) {
                return -(Math.pow(t - 1, 2) - 1)
            }
            ,
            e.inOutQuad = function(t) {
                if ((t /= .5) < 1)
                    return .5 * Math.pow(t, 2);
                return -.5 * ((t -= 2) * t - 2)
            }
            ,
            e.inCubic = function(t) {
                return Math.pow(t, 3)
            }
            ,
            e.outCubic = function(t) {
                return Math.pow(t - 1, 3) + 1
            }
            ,
            e.inOutCubic = function(t) {
                if ((t /= .5) < 1)
                    return .5 * Math.pow(t, 3);
                return .5 * (Math.pow(t - 2, 3) + 2)
            }
            ,
            e.inQuart = function(t) {
                return Math.pow(t, 4)
            }
            ,
            e.outQuart = function(t) {
                return -(Math.pow(t - 1, 4) - 1)
            }
            ,
            e.inOutQuart = function(t) {
                if ((t /= .5) < 1)
                    return .5 * Math.pow(t, 4);
                return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
            }
            ,
            e.inQuint = function(t) {
                return Math.pow(t, 5)
            }
            ,
            e.outQuint = function(t) {
                return Math.pow(t - 1, 5) + 1
            }
            ,
            e.inOutQuint = function(t) {
                if ((t /= .5) < 1)
                    return .5 * Math.pow(t, 5);
                return .5 * (Math.pow(t - 2, 5) + 2)
            }
            ,
            e.inSine = function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            }
            ,
            e.outSine = function(t) {
                return Math.sin(t * (Math.PI / 2))
            }
            ,
            e.inOutSine = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }
            ,
            e.inExpo = function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            }
            ,
            e.outExpo = function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }
            ,
            e.inOutExpo = function(t) {
                if (0 === t)
                    return 0;
                if (1 === t)
                    return 1;
                if ((t /= .5) < 1)
                    return .5 * Math.pow(2, 10 * (t - 1));
                return .5 * (2 - Math.pow(2, -10 * --t))
            }
            ,
            e.inCirc = function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }
            ,
            e.outCirc = function(t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            }
            ,
            e.inOutCirc = function(t) {
                if ((t /= .5) < 1)
                    return -.5 * (Math.sqrt(1 - t * t) - 1);
                return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
            ,
            e.outBounce = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }
            ,
            e.inBack = function(t) {
                return t * t * ((o + 1) * t - o)
            }
            ,
            e.outBack = function(t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1
            }
            ,
            e.inOutBack = function(t) {
                var e = o;
                if ((t /= .5) < 1)
                    return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
                return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            }
            ,
            e.inElastic = function(t) {
                var e = o
                    , n = 0
                    , r = 1;
                if (0 === t)
                    return 0;
                if (1 === t)
                    return 1;
                n || (n = .3);
                r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
                return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
            }
            ,
            e.outElastic = function(t) {
                var e = o
                    , n = 0
                    , r = 1;
                if (0 === t)
                    return 0;
                if (1 === t)
                    return 1;
                n || (n = .3);
                r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
                return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
            }
            ,
            e.inOutElastic = function(t) {
                var e = o
                    , n = 0
                    , r = 1;
                if (0 === t)
                    return 0;
                if (2 == (t /= .5))
                    return 1;
                n || (n = .3 * 1.5);
                r < 1 ? (r = 1,
                    e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
                if (t < 1)
                    return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
                return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
            }
            ,
            e.swingFromTo = function(t) {
                var e = o;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            }
            ,
            e.swingFrom = function(t) {
                return t * t * ((o + 1) * t - o)
            }
            ,
            e.swingTo = function(t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1
            }
            ,
            e.bounce = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }
            ,
            e.bouncePast = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }
            ,
            e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
        var i = r(n(185))
            , o = 1.70158
            , a = (0,
            i.default)(.25, .1, .25, 1);
        e.ease = a;
        var u = (0,
            i.default)(.42, 0, 1, 1);
        e.easeIn = u;
        var c = (0,
            i.default)(0, 0, .58, 1);
        e.easeOut = c;
        var s = (0,
            i.default)(.42, 0, .58, 1);
        e.easeInOut = s
    }
    , function(t, e, n) {
        "use strict";
        var r = n(16);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.optimizeFloat = o,
            e.applyEasing = function(t, e) {
                if (0 === e)
                    return 0;
                if (1 === e)
                    return 1;
                return o(e > 0 && t && i[t] ? i[t](e) : e)
            }
        ;
        var i = r(n(85));
        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
                , r = Math.pow(n, e)
                , i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
        e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
        e.MOUSE_CLICK = "MOUSE_CLICK";
        e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
        e.MOUSE_DOWN = "MOUSE_DOWN";
        e.MOUSE_UP = "MOUSE_UP";
        e.MOUSE_OVER = "MOUSE_OVER";
        e.MOUSE_OUT = "MOUSE_OUT";
        e.MOUSE_MOVE = "MOUSE_MOVE";
        e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
        e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
        e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
        e.TAB_ACTIVE = "TAB_ACTIVE";
        e.TAB_INACTIVE = "TAB_INACTIVE";
        e.NAVBAR_OPEN = "NAVBAR_OPEN";
        e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
        e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
        e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
        e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
        e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
        e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
        e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
        e.PAGE_START = "PAGE_START";
        e.PAGE_FINISH = "PAGE_FINISH";
        e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
        e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
        e.PAGE_SCROLL = "PAGE_SCROLL";
        e.ELEMENT = "ELEMENT";
        e.VIEWPORT = "VIEWPORT";
        e.PAGE = "PAGE";
        e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
        e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE"
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)(n(14));
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.isPluginType = function(t) {
                return t === o.PLUGIN_LOTTIE
            }
            ,
            e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginConfig = void 0;
        var i = n(187)
            , o = n(48)
            , a = n(31)
            , u = (0,
            r.default)({}, o.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
        var c = function(t) {
            return function(e) {
                if (!a.IS_BROWSER_ENV)
                    return function() {
                        return null
                    }
                        ;
                var n = u[e];
                if (!n)
                    throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r)
                    throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        }
            , s = c("getConfig");
        e.getPluginConfig = s;
        var f = c("getOrigin");
        e.getPluginOrigin = f;
        var l = c("getDestination");
        e.getPluginDestination = l;
        var d = c("createInstance");
        e.createPluginInstance = d;
        var p = c("render");
        e.renderPlugin = p;
        var v = c("clear");
        e.clearPlugin = v
    }
    , function(t, e, n) {
        var r = n(91)
            , i = n(194)(r);
        t.exports = i
    }
    , function(t, e, n) {
        var r = n(192)
            , i = n(21);
        t.exports = function(t, e) {
            return t && r(t, e, i)
        }
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r, i = n(198), o = (r = i) && r.__esModule ? r : {
            default: r
        };
        e.default = o.default
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)(n(203))
            , i = n(16)
            , o = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.observeRequests = function(t) {
                G({
                    store: t,
                    select: function(t) {
                        var e = t.ixRequest;
                        return e.preview
                    },
                    onChange: it
                }),
                    G({
                        store: t,
                        select: function(t) {
                            var e = t.ixRequest;
                            return e.playback
                        },
                        onChange: ut
                    }),
                    G({
                        store: t,
                        select: function(t) {
                            var e = t.ixRequest;
                            return e.stop
                        },
                        onChange: ct
                    }),
                    G({
                        store: t,
                        select: function(t) {
                            var e = t.ixRequest;
                            return e.clear
                        },
                        onChange: st
                    })
            }
            ,
            e.startEngine = ft,
            e.stopEngine = lt,
            e.stopAllActionGroups = yt,
            e.stopActionGroup = It,
            e.startActionGroup = mt;
        var a = o(n(26))
            , u = o(n(207))
            , c = o(n(63))
            , s = o(n(23))
            , f = o(n(209))
            , l = o(n(215))
            , d = o(n(227))
            , p = o(n(228))
            , v = o(n(229))
            , h = o(n(232))
            , E = o(n(233))
            , _ = o(n(92))
            , g = n(2)
            , y = n(50)
            , I = i(n(236))
            , m = o(n(237))
            , T = g.IX2EngineEventTypes
            , O = T.MOUSE_CLICK
            , S = T.MOUSE_SECOND_CLICK
            , A = g.IX2EngineConstants
            , b = A.COLON_DELIMITER
            , R = A.BOUNDARY_SELECTOR
            , w = A.HTML_ELEMENT
            , L = A.RENDER_GENERAL
            , N = A.W_MOD_IX
            , C = g.IX2EngineItemTypes
            , x = C.GENERAL_START_ACTION
            , D = C.GENERAL_CONTINUOUS_ACTION
            , P = g.IX2VanillaUtils
            , M = P.getAffectedElements
            , F = P.getElementId
            , j = P.getDestinationValues
            , G = P.observeStore
            , X = P.getInstanceId
            , V = P.renderHTMLElement
            , U = P.clearAllStyles
            , k = P.getMaxDurationItemIndex
            , B = P.getComputedStyle
            , H = P.getInstanceOrigin
            , W = P.reduceListToGroup
            , Y = P.shouldNamespaceEventParameter
            , z = P.getNamespacedParameterId
            , K = P.shouldAllowMediaQuery
            , Q = P.cleanupHTMLElement
            , q = P.stringifyTarget
            , $ = P.mediaQueriesEqual
            , Z = g.IX2VanillaPlugins
            , J = Z.isPluginType
            , tt = Z.createPluginInstance
            , et = navigator.userAgent
            , nt = et.match(/iPad/i) || et.match(/iPhone/)
            , rt = 12;
        function it(t, e) {
            ft({
                store: e,
                rawData: t.rawData,
                allowEvents: !0
            }),
                ot()
        }
        function ot() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function at(t) {
            return t && (0,
                h.default)(t, "_EFFECT")
        }
        function ut(t, e) {
            var n = t.actionTypeId
                , r = t.actionListId
                , i = t.actionItemId
                , o = t.eventId
                , a = t.allowEvents
                , u = t.immediate
                , c = t.testManual
                , s = t.verbose
                , f = void 0 === s || s
                , l = t.rawData;
            if (r && i && l && u && (l = W({
                actionListId: r,
                actionItemId: i,
                rawData: l
            })),
                ft({
                    store: e,
                    rawData: l,
                    allowEvents: a,
                    testManual: c
                }),
            r && n === x || at(n)) {
                It({
                    store: e,
                    actionListId: r
                }),
                    gt({
                        store: e,
                        actionListId: r,
                        eventId: o
                    });
                var d = mt({
                    store: e,
                    eventId: o,
                    actionListId: r,
                    immediate: u,
                    verbose: f
                });
                f && d && e.dispatch((0,
                    y.actionListPlaybackChanged)({
                    actionListId: r,
                    isPlaying: !u
                }))
            }
        }
        function ct(t, e) {
            var n = t.actionListId;
            n ? It({
                store: e,
                actionListId: n
            }) : yt({
                store: e
            }),
                lt(e)
        }
        function st(t, e) {
            lt(e),
                U({
                    store: e,
                    elementApi: I
                })
        }
        function ft(t) {
            var e, n = t.store, i = t.rawData, o = t.allowEvents, a = t.testManual, u = n.getState().ixSession;
            i && n.dispatch((0,
                y.rawDataImported)(i)),
            u.active || (n.dispatch((0,
                y.sessionInitialized)({
                hasBoundaryNodes: Boolean(document.querySelector(R))
            })),
            o && (function(t) {
                var e = t.getState().ixData.eventTypeMap;
                vt(t),
                    (0,
                        v.default)(e, function(e, n) {
                        var i = m.default[n];
                        i ? function(t) {
                            var e = t.logic
                                , n = t.store
                                , i = t.events;
                            !function(t) {
                                if (nt) {
                                    var e = {}
                                        , n = "";
                                    for (var r in t) {
                                        var i = t[r]
                                            , o = i.eventTypeId
                                            , a = i.target
                                            , u = I.getQuerySelector(a);
                                        e[u] || o !== O && o !== S || (e[u] = !0,
                                            n += u + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (n) {
                                        var c = document.createElement("style");
                                        c.textContent = n,
                                            document.body.appendChild(c)
                                    }
                                }
                            }(i);
                            var o = e.types
                                , a = e.handler
                                , u = n.getState().ixData
                                , l = u.actionLists
                                , d = ht(i, _t);
                            if ((0,
                                f.default)(d)) {
                                (0,
                                    v.default)(d, function(t, e) {
                                    var o = i[e]
                                        , a = o.action
                                        , f = o.id
                                        , d = o.mediaQueries
                                        , p = void 0 === d ? u.mediaQueryKeys : d
                                        , v = a.config.actionListId;
                                    if ($(p, u.mediaQueryKeys) || n.dispatch((0,
                                        y.mediaQueriesDefined)()),
                                    a.actionTypeId === D) {
                                        var h = Array.isArray(o.config) ? o.config : [o.config];
                                        h.forEach(function(e) {
                                            var i = e.continuousParameterGroupId
                                                , o = (0,
                                                s.default)(l, "".concat(v, ".continuousParameterGroups"), [])
                                                , a = (0,
                                                c.default)(o, function(t) {
                                                var e = t.id;
                                                return e === i
                                            })
                                                , u = (e.smoothing || 0) / 100
                                                , d = (e.restingState || 0) / 100;
                                            a && t.forEach(function(t, i) {
                                                var o = f + b + i;
                                                !function(t) {
                                                    var e = t.store
                                                        , n = t.eventStateKey
                                                        , i = t.eventTarget
                                                        , o = t.eventId
                                                        , a = t.eventConfig
                                                        , u = t.actionListId
                                                        , c = t.parameterGroup
                                                        , f = t.smoothing
                                                        , l = t.restingValue
                                                        , d = e.getState()
                                                        , p = d.ixData
                                                        , v = d.ixSession
                                                        , h = p.events[o]
                                                        , E = h.eventTypeId
                                                        , _ = {}
                                                        , g = {}
                                                        , y = []
                                                        , m = c.continuousActionGroups
                                                        , T = c.id;
                                                    Y(E, a) && (T = z(n, T));
                                                    var O = v.hasBoundaryNodes && i ? I.getClosestElement(i, R) : null;
                                                    m.forEach(function(t) {
                                                        var e = t.keyframe
                                                            , n = t.actionItems;
                                                        n.forEach(function(t) {
                                                            var n = t.actionTypeId
                                                                , o = t.config.target;
                                                            if (o) {
                                                                var a = o.boundaryMode ? O : null
                                                                    , u = q(o) + b + n;
                                                                if (g[u] = function() {
                                                                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, o = (0,
                                                                        r.default)(e);
                                                                    return o.some(function(e, r) {
                                                                        return e.keyframe === n && (t = r,
                                                                            !0)
                                                                    }),
                                                                    null == t && (t = o.length,
                                                                        o.push({
                                                                            keyframe: n,
                                                                            actionItems: []
                                                                        })),
                                                                        o[t].actionItems.push(i),
                                                                        o
                                                                }(g[u], e, t),
                                                                    !_[u]) {
                                                                    _[u] = !0;
                                                                    var c = t.config;
                                                                    M({
                                                                        config: c,
                                                                        event: h,
                                                                        eventTarget: i,
                                                                        elementRoot: a,
                                                                        elementApi: I
                                                                    }).forEach(function(t) {
                                                                        y.push({
                                                                            element: t,
                                                                            key: u
                                                                        })
                                                                    })
                                                                }
                                                            }
                                                        })
                                                    }),
                                                        y.forEach(function(t) {
                                                            var n = t.element
                                                                , r = t.key
                                                                , i = g[r]
                                                                , a = (0,
                                                                s.default)(i, "[0].actionItems[0]", {})
                                                                , c = a.actionTypeId
                                                                , d = J(c) ? tt(c)(n, a) : null
                                                                , p = j({
                                                                element: n,
                                                                actionItem: a,
                                                                elementApi: I
                                                            }, d);
                                                            Tt({
                                                                store: e,
                                                                element: n,
                                                                eventId: o,
                                                                actionListId: u,
                                                                actionItem: a,
                                                                destination: p,
                                                                continuous: !0,
                                                                parameterId: T,
                                                                actionGroups: i,
                                                                smoothing: f,
                                                                restingValue: l,
                                                                pluginInstance: d
                                                            })
                                                        })
                                                }({
                                                    store: n,
                                                    eventStateKey: o,
                                                    eventTarget: t,
                                                    eventId: f,
                                                    eventConfig: e,
                                                    actionListId: v,
                                                    parameterGroup: a,
                                                    smoothing: u,
                                                    restingValue: d
                                                })
                                            })
                                        })
                                    }
                                    (a.actionTypeId === x || at(a.actionTypeId)) && gt({
                                        store: n,
                                        actionListId: v,
                                        eventId: f
                                    })
                                });
                                var p = function(t) {
                                    var e = n.getState()
                                        , r = e.ixSession;
                                    Et(d, function(e, o, c) {
                                        var s = i[o]
                                            , f = r.eventState[c]
                                            , l = s.action
                                            , d = s.mediaQueries
                                            , p = void 0 === d ? u.mediaQueryKeys : d;
                                        if (K(p, r.mediaQueryKey)) {
                                            var v = function() {
                                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                                    , i = a({
                                                    store: n,
                                                    element: e,
                                                    event: s,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: c
                                                }, f);
                                                (0,
                                                    _.default)(i, f) || n.dispatch((0,
                                                    y.eventStateChanged)(c, i))
                                            };
                                            if (l.actionTypeId === D) {
                                                var h = Array.isArray(s.config) ? s.config : [s.config];
                                                h.forEach(v)
                                            } else
                                                v()
                                        }
                                    })
                                }
                                    , h = (0,
                                    E.default)(p, rt)
                                    , g = function(t) {
                                    var e = t.target
                                        , r = void 0 === e ? document : e
                                        , i = t.types
                                        , o = t.throttle;
                                    i.split(" ").filter(Boolean).forEach(function(t) {
                                        var e = o ? h : p;
                                        r.addEventListener(t, e),
                                            n.dispatch((0,
                                                y.eventListenerAdded)(r, [t, e]))
                                    })
                                };
                                Array.isArray(o) ? o.forEach(g) : "string" == typeof o && g(e)
                            }
                        }({
                            logic: i,
                            store: t,
                            events: e
                        }) : console.warn("IX2 event type not configured: ".concat(n))
                    }),
                t.getState().ixSession.eventListeners.length && function(t) {
                    var e = function() {
                        vt(t)
                    };
                    pt.forEach(function(n) {
                        window.addEventListener(n, e),
                            t.dispatch((0,
                                y.eventListenerAdded)(window, [n, e]))
                    }),
                        e()
                }(t)
            }(n),
            -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)),
            n.getState().ixSession.hasDefinedMediaQueries && function(t) {
                G({
                    store: t,
                    select: function(t) {
                        return t.ixSession.mediaQueryKey
                    },
                    onChange: function() {
                        lt(t),
                            U({
                                store: t,
                                elementApi: I
                            }),
                            ft({
                                store: t,
                                allowEvents: !0
                            }),
                            ot()
                    }
                })
            }(n)),
                n.dispatch((0,
                    y.sessionStarted)()),
                function(t, e) {
                    !function n(r) {
                        var i = t.getState()
                            , o = i.ixSession
                            , a = i.ixParameters;
                        o.active && (t.dispatch((0,
                            y.animationFrameChanged)(r, a)),
                            e ? function(t, e) {
                                var n = G({
                                    store: t,
                                    select: function(t) {
                                        return t.ixSession.tick
                                    },
                                    onChange: function(t) {
                                        e(t),
                                            n()
                                    }
                                })
                            }(t, n) : requestAnimationFrame(n))
                    }(window.performance.now())
                }(n, a))
        }
        function lt(t) {
            var e = t.getState().ixSession;
            e.active && (e.eventListeners.forEach(dt),
                t.dispatch((0,
                    y.sessionStopped)()))
        }
        function dt(t) {
            var e = t.target
                , n = t.listenerParams;
            e.removeEventListener.apply(e, n)
        }
        var pt = ["resize", "orientationchange"];
        function vt(t) {
            var e = t.getState()
                , n = e.ixSession
                , r = e.ixData
                , i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch((0,
                    y.viewportWidthChanged)({
                    width: i,
                    mediaQueries: o
                }))
            }
        }
        var ht = function(t, e) {
            return (0,
                l.default)((0,
                p.default)(t, e), d.default)
        }
            , Et = function(t, e) {
            (0,
                v.default)(t, function(t, n) {
                t.forEach(function(t, r) {
                    e(t, n, n + b + r)
                })
            })
        }
            , _t = function(t) {
            var e = {
                target: t.target
            };
            return M({
                config: e,
                elementApi: I
            })
        };
        function gt(t) {
            var e = t.store
                , n = t.actionListId
                , r = t.eventId
                , i = e.getState()
                , o = i.ixData
                , a = i.ixSession
                , u = o.actionLists
                , c = o.events[r]
                , f = u[n];
            if (f && f.useFirstGroupAsInitialState) {
                var l = (0,
                    s.default)(f, "actionItemGroups[0].actionItems", [])
                    , d = (0,
                    s.default)(c, "mediaQueries", o.mediaQueryKeys);
                if (!K(d, a.mediaQueryKey))
                    return;
                l.forEach(function(t) {
                    var i = t.config
                        , o = t.actionTypeId
                        , a = M({
                        config: i,
                        event: c,
                        elementApi: I
                    })
                        , u = J(o);
                    a.forEach(function(i) {
                        var a = u ? tt(o)(i, t) : null;
                        Tt({
                            destination: j({
                                element: i,
                                actionItem: t,
                                elementApi: I
                            }, a),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: r,
                            actionItem: t,
                            actionListId: n,
                            pluginInstance: a
                        })
                    })
                })
            }
        }
        function yt(t) {
            var e = t.store
                , n = e.getState().ixInstances;
            (0,
                v.default)(n, function(t) {
                if (!t.continuous) {
                    var n = t.actionListId
                        , r = t.verbose;
                    Ot(t, e),
                    r && e.dispatch((0,
                        y.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            })
        }
        function It(t) {
            var e = t.store
                , n = t.eventId
                , r = t.eventTarget
                , i = t.eventStateKey
                , o = t.actionListId
                , a = e.getState()
                , u = a.ixInstances
                , c = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, R) : null;
            (0,
                v.default)(u, function(t) {
                var r = (0,
                    s.default)(t, "actionItem.config.target.boundaryMode")
                    , a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (c && r && !I.elementContains(c, t.element))
                        return;
                    Ot(t, e),
                    t.verbose && e.dispatch((0,
                        y.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            })
        }
        function mt(t) {
            var e = t.store
                , n = t.eventId
                , r = t.eventTarget
                , i = t.eventStateKey
                , o = t.actionListId
                , a = t.groupIndex
                , u = void 0 === a ? 0 : a
                , c = t.immediate
                , f = t.verbose
                , l = e.getState()
                , d = l.ixData
                , p = l.ixSession
                , v = d.events[n] || {}
                , h = v.mediaQueries
                , E = void 0 === h ? d.mediaQueryKeys : h
                , _ = (0,
                s.default)(d, "actionLists.".concat(o), {})
                , g = _.actionItemGroups
                , y = _.useFirstGroupAsInitialState;
            u >= g.length && (0,
                s.default)(v, "config.loop") && (u = 0),
            0 === u && y && u++;
            var m = (0 === u || 1 === u && y) && at(v.action && v.action.actionTypeId) ? v.config.delay : void 0
                , T = (0,
                s.default)(g, [u, "actionItems"], []);
            if (!T.length)
                return !1;
            if (!K(E, p.mediaQueryKey))
                return !1;
            var O = p.hasBoundaryNodes && r ? I.getClosestElement(r, R) : null
                , S = k(T)
                , A = !1;
            return T.forEach(function(t, a) {
                var s = t.config
                    , l = t.actionTypeId
                    , d = J(l)
                    , p = s.target;
                if (p) {
                    var h = p.boundaryMode ? O : null;
                    M({
                        config: s,
                        event: v,
                        eventTarget: r,
                        elementRoot: h,
                        elementApi: I
                    }).forEach(function(s, p) {
                        var v = d ? tt(l)(s, t) : null;
                        A = !0;
                        var h = S === a && 0 === p
                            , E = B({
                            element: s,
                            actionItem: t
                        })
                            , _ = j({
                            element: s,
                            actionItem: t,
                            elementApi: I
                        }, v);
                        Tt({
                            store: e,
                            element: s,
                            actionItem: t,
                            eventId: n,
                            eventTarget: r,
                            eventStateKey: i,
                            actionListId: o,
                            groupIndex: u,
                            isCarrier: h,
                            computedStyle: E,
                            destination: _,
                            immediate: c,
                            verbose: f,
                            pluginInstance: v,
                            instanceDelay: m
                        })
                    })
                }
            }),
                A
        }
        function Tt(t) {
            var e = t.store
                , n = t.computedStyle
                , r = (0,
                u.default)(t, ["store", "computedStyle"])
                , i = !r.continuous
                , o = r.element
                , c = r.actionItem
                , s = r.immediate
                , f = r.pluginInstance
                , l = X()
                , d = e.getState()
                , p = d.ixElements
                , v = d.ixSession
                , h = F(p, o)
                , E = (p[h] || {}).refState
                , _ = I.getRefType(o)
                , g = H(o, E, n, c, I, f);
            e.dispatch((0,
                y.instanceAdded)((0,
                a.default)({
                instanceId: l,
                elementId: h,
                origin: g,
                refType: _
            }, r))),
                St(document.body, "ix2-animation-started", l),
                s ? function(t, e) {
                    var n = t.getState().ixParameters;
                    t.dispatch((0,
                        y.instanceStarted)(e, 0)),
                        t.dispatch((0,
                            y.animationFrameChanged)(performance.now(), n)),
                        At(t.getState().ixInstances[e], t)
                }(e, l) : (G({
                    store: e,
                    select: function(t) {
                        return t.ixInstances[l]
                    },
                    onChange: At
                }),
                i && e.dispatch((0,
                    y.instanceStarted)(l, v.tick)))
        }
        function Ot(t, e) {
            St(document.body, "ix2-animation-stopping", {
                instanceId: t.id,
                state: e.getState()
            });
            var n = t.elementId
                , r = t.actionItem
                , i = e.getState().ixElements[n] || {}
                , o = i.ref;
            i.refType === w && Q(o, r, I),
                e.dispatch((0,
                    y.instanceRemoved)(t.id))
        }
        function St(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n),
                t.dispatchEvent(r)
        }
        function At(t, e) {
            var n = t.active
                , r = t.continuous
                , i = t.complete
                , o = t.elementId
                , a = t.actionItem
                , u = t.actionTypeId
                , c = t.renderType
                , s = t.current
                , f = t.groupIndex
                , l = t.eventId
                , d = t.eventTarget
                , p = t.eventStateKey
                , v = t.actionListId
                , h = t.isCarrier
                , E = t.styleProp
                , _ = t.verbose
                , g = t.pluginInstance
                , m = e.getState()
                , T = m.ixData
                , O = m.ixSession
                , S = (T.events[l] || {}).mediaQueries
                , A = void 0 === S ? T.mediaQueryKeys : S;
            if (K(A, O.mediaQueryKey) && (r || n || i)) {
                if (s || c === L && i) {
                    e.dispatch((0,
                        y.elementStateChanged)(o, u, s, a));
                    var b = e.getState().ixElements[o] || {}
                        , R = b.ref
                        , N = b.refType
                        , C = b.refState
                        , x = C && C[u];
                    switch (N) {
                        case w:
                            V(R, C, x, l, a, E, I, c, g)
                    }
                }
                if (i) {
                    if (h) {
                        var D = mt({
                            store: e,
                            eventId: l,
                            eventTarget: d,
                            eventStateKey: p,
                            actionListId: v,
                            groupIndex: f + 1,
                            verbose: _
                        });
                        _ && !D && e.dispatch((0,
                            y.actionListPlaybackChanged)({
                            actionListId: v,
                            isPlaying: !1
                        }))
                    }
                    Ot(t, e)
                }
            }
        }
    }
    , function(t, e, n) {
        var r = n(95);
        t.exports = function(t, e, n) {
            "__proto__" == e && r ? r(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        }
    }
    , function(t, e, n) {
        var r = n(7)
            , i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}),
                    t
            } catch (t) {}
        }();
        t.exports = i
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            return t == t && (void 0 !== n && (t = t <= n ? t : n),
            void 0 !== e && (t = t >= e ? t : e)),
                t
        }
    }
    , function(t, e, n) {
        var r = n(4)
            , i = Object.create
            , o = function() {
            function t() {}
            return function(e) {
                if (!r(e))
                    return {};
                if (i)
                    return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0,
                    n
            }
        }();
        t.exports = o
    }
    , function(t, e, n) {
        var r = n(250)
            , i = n(251)
            , o = r ? function(t) {
                return r.get(t)
            }
            : i;
        t.exports = o
    }
    , function(t, e, n) {
        var r = n(252)
            , i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--; ) {
                var a = n[o]
                    , u = a.func;
                if (null == u || u == t)
                    return a.name
            }
            return e
        }
    }
    , function(t, e, n) {
        n(101),
            n(103),
            n(27),
            n(104),
            n(55),
            n(105),
            n(258),
            n(259),
            n(260),
            t.exports = n(261)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5);
        r.define("brand", t.exports = function(t) {
                var e, n = {}, i = document, o = t("html"), a = t("body"), u = ".w-webflow-badge", c = window.location, s = /PhantomJS/i.test(navigator.userAgent), f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function l() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "")
                }
                function d() {
                    var t = a.children(u)
                        , n = t.length && t.get(0) === e
                        , i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(),
                    i || a.append(e))
                }
                return n.ready = function() {
                    var n, r, a, u = o.attr("data-wf-status"), p = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
                    u && !s && (e = e,
                        d(),
                        setTimeout(d, 500),
                        t(i).off(f, l).on(f, l))
                }
                    ,
                    n
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        var r = window.$
            , i = n(54) && r.tram;
        /*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
        t.exports = function() {
            var t = {
                VERSION: "1.6.0-Webflow"
            }
                , e = {}
                , n = Array.prototype
                , r = Object.prototype
                , o = Function.prototype
                , a = (n.push,
                n.slice)
                , u = (n.concat,
                r.toString,
                r.hasOwnProperty)
                , c = n.forEach
                , s = n.map
                , f = (n.reduce,
                n.reduceRight,
                n.filter)
                , l = (n.every,
                n.some)
                , d = n.indexOf
                , p = (n.lastIndexOf,
                Array.isArray,
                Object.keys)
                , v = (o.bind,
                    t.each = t.forEach = function(n, r, i) {
                        if (null == n)
                            return n;
                        if (c && n.forEach === c)
                            n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++)
                                if (r.call(i, n[o], o, n) === e)
                                    return
                        } else {
                            var u = t.keys(n);
                            for (o = 0,
                                     a = u.length; o < a; o++)
                                if (r.call(i, n[u[o]], u[o], n) === e)
                                    return
                        }
                        return n
                    }
            );
            t.map = t.collect = function(t, e, n) {
                var r = [];
                return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
                    r.push(e.call(n, t, i, o))
                }),
                    r)
            }
                ,
                t.find = t.detect = function(t, e, n) {
                    var r;
                    return h(t, function(t, i, o) {
                        if (e.call(n, t, i, o))
                            return r = t,
                                !0
                    }),
                        r
                }
                ,
                t.filter = t.select = function(t, e, n) {
                    var r = [];
                    return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) {
                        e.call(n, t, i, o) && r.push(t)
                    }),
                        r)
                }
            ;
            var h = t.some = t.any = function(n, r, i) {
                    r || (r = t.identity);
                    var o = !1;
                    return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) {
                        if (o || (o = r.call(i, t, n, a)))
                            return e
                    }),
                        !!o)
                }
            ;
            t.contains = t.include = function(t, e) {
                return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
                    return t === e
                }))
            }
                ,
                t.delay = function(t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function() {
                        return t.apply(null, n)
                    }, e)
                }
                ,
                t.defer = function(e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
                }
                ,
                t.throttle = function(t) {
                    var e, n, r;
                    return function() {
                        e || (e = !0,
                            n = arguments,
                            r = this,
                            i.frame(function() {
                                e = !1,
                                    t.apply(r, n)
                            }))
                    }
                }
                ,
                t.debounce = function(e, n, r) {
                    var i, o, a, u, c, s = function s() {
                        var f = t.now() - u;
                        f < n ? i = setTimeout(s, n - f) : (i = null,
                        r || (c = e.apply(a, o),
                            a = o = null))
                    };
                    return function() {
                        a = this,
                            o = arguments,
                            u = t.now();
                        var f = r && !i;
                        return i || (i = setTimeout(s, n)),
                        f && (c = e.apply(a, o),
                            a = o = null),
                            c
                    }
                }
                ,
                t.defaults = function(e) {
                    if (!t.isObject(e))
                        return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i)
                            void 0 === e[o] && (e[o] = i[o])
                    }
                    return e
                }
                ,
                t.keys = function(e) {
                    if (!t.isObject(e))
                        return [];
                    if (p)
                        return p(e);
                    var n = [];
                    for (var r in e)
                        t.has(e, r) && n.push(r);
                    return n
                }
                ,
                t.has = function(t, e) {
                    return u.call(t, e)
                }
                ,
                t.isObject = function(t) {
                    return t === Object(t)
                }
                ,
                t.now = Date.now || function() {
                    return (new Date).getTime()
                }
                ,
                t.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
            var E = /(.)^/
                , _ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
                , g = /\\|'|\r|\n|\u2028|\u2029/g
                , y = function(t) {
                return "\\" + _[t]
            };
            return t.template = function(e, n, r) {
                !n && r && (n = r),
                    n = t.defaults({}, n, t.templateSettings);
                var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g")
                    , o = 0
                    , a = "__p+='";
                e.replace(i, function(t, n, r, i, u) {
                    return a += e.slice(o, u).replace(g, y),
                        o = u + t.length,
                        n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"),
                        t
                }),
                    a += "';\n",
                n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                    a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    var u = new Function(n.variable || "obj","_",a)
                } catch (t) {
                    throw t.source = a,
                        t
                }
                var c = function(e) {
                    return u.call(this, e, t)
                }
                    , s = n.variable || "obj";
                return c.source = "function(" + s + "){\n" + a + "}",
                    c
            }
                ,
                t
        }()
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5);
        r.define("edit", t.exports = function(t, e, n) {
                if (n = n || {},
                (r.env("test") || r.env("frame")) && !n.fixture)
                    return {
                        exit: 1
                    };
                var i, o = t(window), a = t(document.documentElement), u = document.location, c = "hashchange", s = n.load || function() {
                    i = !0,
                        window.WebflowEditor = !0,
                        o.off(c, l),
                        function(t) {
                            var e = window.document.createElement("iframe");
                            e.src = "https://webflow.com/site/third-party-cookie-check.html",
                                e.style.display = "none",
                                e.sandbox = "allow-scripts allow-same-origin";
                            var n = function n(r) {
                                "WF_third_party_cookies_unsupported" === r.data ? (_(e, n),
                                    t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n),
                                    t(!0))
                            };
                            e.onerror = function() {
                                _(e, n),
                                    t(!1)
                            }
                                ,
                                window.addEventListener("message", n, !1),
                                window.document.body.appendChild(e)
                        }(function(e) {
                            t.ajax({
                                url: E("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: a.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: d(e)
                            })
                        })
                }
                    , f = !1;
                try {
                    f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (t) {}
                function l() {
                    i || /\?edit/.test(u.hash) && s()
                }
                function d(t) {
                    return function(e) {
                        e ? (e.thirdPartyCookiesSupported = t,
                            p(h(e.bugReporterScriptPath), function() {
                                p(h(e.scriptPath), function() {
                                    window.WebflowEditor(e)
                                })
                            })) : console.error("Could not load editor data")
                    }
                }
                function p(e, n) {
                    t.ajax({
                        type: "GET",
                        url: e,
                        dataType: "script",
                        cache: !0
                    }).then(n, v)
                }
                function v(t, e, n) {
                    throw console.error("Could not load editor script: " + e),
                        n
                }
                function h(t) {
                    return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t)
                }
                function E(t) {
                    return t.replace(/([^:])\/\//g, "$1/")
                }
                function _(t, e) {
                    window.removeEventListener("message", e, !1),
                        t.remove()
                }
                return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c),
                    {}
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5)
            , i = n(27);
        r.define("ix", t.exports = function(t, e) {
                var n, o, a = {}, u = t(window), c = ".w-ix", s = t.tram, f = r.env, l = f(), d = f.chrome && f.chrome < 35, p = "none 0s ease 0s", v = t(), h = {}, E = [], _ = [], g = [], y = 1, I = {
                    tabs: ".w-tab-link, .w-tab-pane",
                    dropdown: ".w-dropdown",
                    slider: ".w-slide",
                    navbar: ".w-nav"
                };
                function m(t) {
                    t && (h = {},
                        e.each(t, function(t) {
                            h[t.slug] = t.value
                        }),
                        T())
                }
                function T() {
                    !function() {
                        var e = t("[data-ix]");
                        if (!e.length)
                            return;
                        e.each(A),
                            e.each(O),
                        E.length && (r.scroll.on(b),
                            setTimeout(b, 1));
                        _.length && r.load(R);
                        g.length && setTimeout(w, y)
                    }(),
                        i.init(),
                        r.redraw.up()
                }
                function O(n, o) {
                    var u = t(o)
                        , s = u.attr("data-ix")
                        , f = h[s];
                    if (f) {
                        var d = f.triggers;
                        d && (a.style(u, f.style),
                            e.each(d, function(t) {
                                var e = {}
                                    , n = t.type
                                    , o = t.stepsB && t.stepsB.length;
                                function a() {
                                    L(t, u, {
                                        group: "A"
                                    })
                                }
                                function s() {
                                    L(t, u, {
                                        group: "B"
                                    })
                                }
                                if ("load" !== n) {
                                    if ("click" === n)
                                        return u.on("click" + c, function(n) {
                                            r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(),
                                                L(t, u, {
                                                    group: e.clicked ? "B" : "A"
                                                }),
                                            o && (e.clicked = !e.clicked))
                                        }),
                                            void (v = v.add(u));
                                    if ("hover" === n)
                                        return u.on("mouseenter" + c, a),
                                            u.on("mouseleave" + c, s),
                                            void (v = v.add(u));
                                    if ("scroll" !== n) {
                                        var f = I[n];
                                        if (f) {
                                            var d = u.closest(f);
                                            return d.on(i.types.INTRO, a).on(i.types.OUTRO, s),
                                                void (v = v.add(d))
                                        }
                                    } else
                                        E.push({
                                            el: u,
                                            trigger: t,
                                            state: {
                                                active: !1
                                            },
                                            offsetTop: S(t.offsetTop),
                                            offsetBot: S(t.offsetBot)
                                        })
                                } else
                                    t.preload && !l ? _.push(a) : g.push(a)
                            }))
                    }
                }
                function S(t) {
                    if (!t)
                        return 0;
                    t = String(t);
                    var e = parseInt(t, 10);
                    return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999),
                        e)
                }
                function A(e, n) {
                    t(n).off(c)
                }
                function b() {
                    for (var t = u.scrollTop(), e = u.height(), n = E.length, r = 0; r < n; r++) {
                        var i = E[r]
                            , o = i.el
                            , a = i.trigger
                            , c = a.stepsB && a.stepsB.length
                            , s = i.state
                            , f = o.offset().top
                            , l = o.outerHeight()
                            , d = i.offsetTop
                            , p = i.offsetBot;
                        d < 1 && d > 0 && (d *= e),
                        p < 1 && p > 0 && (p *= e);
                        var v = f + l - d >= t && f + p <= t + e;
                        v !== s.active && ((!1 !== v || c) && (s.active = v,
                            L(a, o, {
                                group: v ? "A" : "B"
                            })))
                    }
                }
                function R() {
                    for (var t = _.length, e = 0; e < t; e++)
                        _[e]()
                }
                function w() {
                    for (var t = g.length, e = 0; e < t; e++)
                        g[e]()
                }
                function L(e, r, i, o) {
                    var a = (i = i || {}).done
                        , u = e.preserve3d;
                    if (!n || i.force) {
                        var c = i.group || "A"
                            , f = e["loop" + c]
                            , p = e["steps" + c];
                        if (p && p.length) {
                            if (p.length < 2 && (f = !1),
                                !o) {
                                var v = e.selector;
                                v && (r = e.descend ? r.find(v) : e.siblings ? r.siblings(v) : t(v),
                                l && r.attr("data-ix-affect", 1)),
                                d && r.addClass("w-ix-emptyfix"),
                                u && r.css("transform-style", "preserve-3d")
                            }
                            for (var h = s(r), E = {
                                omit3d: !u
                            }, _ = 0; _ < p.length; _++)
                                N(h, p[_], E);
                            E.start ? h.then(g) : g()
                        }
                    }
                    function g() {
                        if (f)
                            return L(e, r, i, !0);
                        "auto" === E.width && h.set({
                            width: "auto"
                        }),
                        "auto" === E.height && h.set({
                            height: "auto"
                        }),
                        a && a()
                    }
                }
                function N(t, e, n) {
                    var i = "add"
                        , o = "start";
                    n.start && (i = o = "then");
                    var a = e.transition;
                    if (a) {
                        a = a.split(",");
                        for (var u = 0; u < a.length; u++) {
                            var c = a[u];
                            t[i](c)
                        }
                    }
                    var s = C(e, n) || {};
                    if (null != s.width && (n.width = s.width),
                    null != s.height && (n.height = s.height),
                    null == a) {
                        n.start ? t.then(function() {
                            var e = this.queue;
                            this.set(s),
                            s.display && (t.redraw(),
                                r.redraw.up()),
                                this.queue = e,
                                this.next()
                        }) : (t.set(s),
                        s.display && (t.redraw(),
                            r.redraw.up()));
                        var f = s.wait;
                        null != f && (t.wait(f),
                            n.start = !0)
                    } else {
                        if (s.display) {
                            var l = s.display;
                            delete s.display,
                                n.start ? t.then(function() {
                                    var t = this.queue;
                                    this.set({
                                        display: l
                                    }).redraw(),
                                        r.redraw.up(),
                                        this.queue = t,
                                        this.next()
                                }) : (t.set({
                                    display: l
                                }).redraw(),
                                    r.redraw.up())
                        }
                        t[o](s),
                            n.start = !0
                    }
                }
                function C(t, e) {
                    var n = e && e.omit3d
                        , r = {}
                        , i = !1;
                    for (var o in t)
                        "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o],
                            i = !0);
                    return i ? r : null
                }
                return a.init = function(t) {
                    setTimeout(function() {
                        m(t)
                    }, 1)
                }
                    ,
                    a.preview = function() {
                        n = !1,
                            y = 100,
                            setTimeout(function() {
                                m(window.__wf_ix)
                            }, 1)
                    }
                    ,
                    a.design = function() {
                        n = !0,
                            a.destroy()
                    }
                    ,
                    a.destroy = function() {
                        o = !0,
                            v.each(A),
                            r.scroll.off(b),
                            i.async(),
                            E = [],
                            _ = [],
                            g = []
                    }
                    ,
                    a.ready = function() {
                        if (l)
                            return f("design") ? a.design() : a.preview();
                        h && o && (o = !1,
                            T())
                    }
                    ,
                    a.run = L,
                    a.style = l ? function(e, n) {
                            var r = s(e);
                            if (t.isEmptyObject(n))
                                return;
                            e.css("transition", "");
                            var i = e.css("transition");
                            i === p && (i = r.upstream = null);
                            r.upstream = p,
                                r.set(C(n)),
                                r.upstream = i
                        }
                        : function(t, e) {
                            s(t).set(C(e))
                        }
                    ,
                    a
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5)
            , i = n(106);
        i.setEnv(r.env),
            r.define("ix2", t.exports = function() {
                    return i
                }
            )
    }
    , function(t, e, n) {
        "use strict";
        var r = n(16)
            , i = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.setEnv = function(t) {
                t() && (0,
                    u.observeRequests)(s)
            }
            ,
            e.init = function(t) {
                f(),
                    (0,
                        u.startEngine)({
                        store: s,
                        rawData: t,
                        allowEvents: !0
                    })
            }
            ,
            e.destroy = f,
            e.actions = e.store = void 0;
        var o = n(56)
            , a = i(n(118))
            , u = n(93)
            , c = r(n(50));
        e.actions = c;
        var s = (0,
            o.createStore)(a.default);
        function f() {
            (0,
                u.stopEngine)(s)
        }
        e.store = s
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(58)
            , i = n(110)
            , o = n(111)
            , a = "[object Null]"
            , u = "[object Undefined]"
            , c = r.default ? r.default.toStringTag : void 0;
        e.default = function(t) {
            return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(109)
            , i = "object" == typeof self && self && self.Object === Object && self
            , o = r.default || i || Function("return this")();
        e.default = o
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n
            }
                .call(this, n(29))
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(58)
            , i = Object.prototype
            , o = i.hasOwnProperty
            , a = i.toString
            , u = r.default ? r.default.toStringTag : void 0;
        e.default = function(t) {
            var e = o.call(t, u)
                , n = t[u];
            try {
                t[u] = void 0;
                var r = !0
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? t[u] = n : delete t[u]),
                i
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function(t) {
            return r.call(t)
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(113)
            , i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = function(t) {
                return null != t && "object" == typeof t
            }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
            function(t, r) {
                var i, o = n(117);
                i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
                var a = Object(o.default)(i);
                e.default = a
            }
                .call(this, n(29), n(116)(t))
    }
    , function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }),
                    Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }),
                    e.webpackPolyfill = 1
            }
            return e
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e, n = t.Symbol;
            return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"),
                n.observable = e) : e = "@@observable",
                e
        }
        n.r(e),
            n.d(e, "default", function() {
                return r
            })
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var r = n(56)
            , i = n(119)
            , o = n(199)
            , a = n(200)
            , u = n(2)
            , c = n(201)
            , s = n(202)
            , f = u.IX2ElementsReducer.ixElements
            , l = (0,
            r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
        e.default = l
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ixData = void 0;
        var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({})
                , e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t
            }
        }
    }
    , function(t, e, n) {
        var r = n(121)
            , i = n(173)
            , o = n(79);
        t.exports = function(t) {
            var e = i(t);
            return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
                return n === t || r(n, t, e)
            }
        }
    }
    , function(t, e, n) {
        var r = n(65)
            , i = n(69)
            , o = 1
            , a = 2;
        t.exports = function(t, e, n, u) {
            var c = n.length
                , s = c
                , f = !u;
            if (null == t)
                return !s;
            for (t = Object(t); c--; ) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0]in t))
                    return !1
            }
            for (; ++c < s; ) {
                var d = (l = n[c])[0]
                    , p = t[d]
                    , v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t))
                        return !1
                } else {
                    var h = new r;
                    if (u)
                        var E = u(p, v, d, t, e, h);
                    if (!(void 0 === E ? i(v, p, o | a, u, h) : E))
                        return !1
                }
            }
            return !0
        }
    }
    , function(t, e) {
        t.exports = function() {
            this.__data__ = [],
                this.size = 0
        }
    }
    , function(t, e, n) {
        var r = n(18)
            , i = Array.prototype.splice;
        t.exports = function(t) {
            var e = this.__data__
                , n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1),
                --this.size,
                0))
        }
    }
    , function(t, e, n) {
        var r = n(18);
        t.exports = function(t) {
            var e = this.__data__
                , n = r(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
    }
    , function(t, e, n) {
        var r = n(18);
        t.exports = function(t) {
            return r(this.__data__, t) > -1
        }
    }
    , function(t, e, n) {
        var r = n(18);
        t.exports = function(t, e) {
            var n = this.__data__
                , i = r(n, t);
            return i < 0 ? (++this.size,
                n.push([t, e])) : n[i][1] = e,
                this
        }
    }
    , function(t, e, n) {
        var r = n(17);
        t.exports = function() {
            this.__data__ = new r,
                this.size = 0
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = this.__data__
                , n = e.delete(t);
            return this.size = e.size,
                n
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return this.__data__.get(t)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t)
        }
    }
    , function(t, e, n) {
        var r = n(17)
            , i = n(33)
            , o = n(34)
            , a = 200;
        t.exports = function(t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1)
                    return u.push([t, e]),
                        this.size = ++n.size,
                        this;
                n = this.__data__ = new o(u)
            }
            return n.set(t, e),
                this.size = n.size,
                this
        }
    }
    , function(t, e, n) {
        var r = n(66)
            , i = n(135)
            , o = n(4)
            , a = n(68)
            , u = /^\[object .+?Constructor\]$/
            , c = Function.prototype
            , s = Object.prototype
            , f = c.toString
            , l = s.hasOwnProperty
            , d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
        }
    }
    , function(t, e, n) {
        var r = n(11)
            , i = Object.prototype
            , o = i.hasOwnProperty
            , a = i.toString
            , u = r ? r.toStringTag : void 0;
        t.exports = function(t) {
            var e = o.call(t, u)
                , n = t[u];
            try {
                t[u] = void 0;
                var r = !0
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? t[u] = n : delete t[u]),
                i
        }
    }
    , function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t) {
            return n.call(t)
        }
    }
    , function(t, e, n) {
        var r, i = n(136), o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function(t) {
            return !!o && o in t
        }
    }
    , function(t, e, n) {
        var r = n(3)["__core-js_shared__"];
        t.exports = r
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return null == t ? void 0 : t[e]
        }
    }
    , function(t, e, n) {
        var r = n(139)
            , i = n(17)
            , o = n(33);
        t.exports = function() {
            this.size = 0,
                this.__data__ = {
                    hash: new r,
                    map: new (o || i),
                    string: new r
                }
        }
    }
    , function(t, e, n) {
        var r = n(140)
            , i = n(141)
            , o = n(142)
            , a = n(143)
            , u = n(144);
        function c(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        c.prototype.clear = r,
            c.prototype.delete = i,
            c.prototype.get = o,
            c.prototype.has = a,
            c.prototype.set = u,
            t.exports = c
    }
    , function(t, e, n) {
        var r = n(19);
        t.exports = function() {
            this.__data__ = r ? r(null) : {},
                this.size = 0
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
                e
        }
    }
    , function(t, e, n) {
        var r = n(19)
            , i = "__lodash_hash_undefined__"
            , o = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n
            }
            return o.call(e, t) ? e[t] : void 0
        }
    }
    , function(t, e, n) {
        var r = n(19)
            , i = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t)
        }
    }
    , function(t, e, n) {
        var r = n(19)
            , i = "__lodash_hash_undefined__";
        t.exports = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
                n[t] = r && void 0 === e ? i : e,
                this
        }
    }
    , function(t, e, n) {
        var r = n(20);
        t.exports = function(t) {
            var e = r(this, t).delete(t);
            return this.size -= e ? 1 : 0,
                e
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
    }
    , function(t, e, n) {
        var r = n(20);
        t.exports = function(t) {
            return r(this, t).get(t)
        }
    }
    , function(t, e, n) {
        var r = n(20);
        t.exports = function(t) {
            return r(this, t).has(t)
        }
    }
    , function(t, e, n) {
        var r = n(20);
        t.exports = function(t, e) {
            var n = r(this, t)
                , i = n.size;
            return n.set(t, e),
                this.size += n.size == i ? 0 : 1,
                this
        }
    }
    , function(t, e, n) {
        var r = n(65)
            , i = n(70)
            , o = n(156)
            , a = n(160)
            , u = n(42)
            , c = n(1)
            , s = n(36)
            , f = n(38)
            , l = 1
            , d = "[object Arguments]"
            , p = "[object Array]"
            , v = "[object Object]"
            , h = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, E, _, g) {
            var y = c(t)
                , I = c(e)
                , m = y ? p : u(t)
                , T = I ? p : u(e)
                , O = (m = m == d ? v : m) == v
                , S = (T = T == d ? v : T) == v
                , A = m == T;
            if (A && s(t)) {
                if (!s(e))
                    return !1;
                y = !0,
                    O = !1
            }
            if (A && !O)
                return g || (g = new r),
                    y || f(t) ? i(t, e, n, E, _, g) : o(t, e, m, n, E, _, g);
            if (!(n & l)) {
                var b = O && h.call(t, "__wrapped__")
                    , R = S && h.call(e, "__wrapped__");
                if (b || R) {
                    var w = b ? t.value() : t
                        , L = R ? e.value() : e;
                    return g || (g = new r),
                        _(w, L, n, E, g)
                }
            }
            return !!A && (g || (g = new r),
                a(t, e, n, E, _, g))
        }
    }
    , function(t, e, n) {
        var r = n(34)
            , i = n(152)
            , o = n(153);
        function a(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.__data__ = new r; ++e < n; )
                this.add(t[e])
        }
        a.prototype.add = a.prototype.push = i,
            a.prototype.has = o,
            t.exports = a
    }
    , function(t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function(t) {
            return this.__data__.set(t, n),
                this
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return this.__data__.has(t)
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t))
                    return !0;
            return !1
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return t.has(e)
        }
    }
    , function(t, e, n) {
        var r = n(11)
            , i = n(157)
            , o = n(32)
            , a = n(70)
            , u = n(158)
            , c = n(159)
            , s = 1
            , f = 2
            , l = "[object Boolean]"
            , d = "[object Date]"
            , p = "[object Error]"
            , v = "[object Map]"
            , h = "[object Number]"
            , E = "[object RegExp]"
            , _ = "[object Set]"
            , g = "[object String]"
            , y = "[object Symbol]"
            , I = "[object ArrayBuffer]"
            , m = "[object DataView]"
            , T = r ? r.prototype : void 0
            , O = T ? T.valueOf : void 0;
        t.exports = function(t, e, n, r, T, S, A) {
            switch (n) {
                case m:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    t = t.buffer,
                        e = e.buffer;
                case I:
                    return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));
                case l:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case E:
                case g:
                    return t == e + "";
                case v:
                    var b = u;
                case _:
                    var R = r & s;
                    if (b || (b = c),
                    t.size != e.size && !R)
                        return !1;
                    var w = A.get(t);
                    if (w)
                        return w == e;
                    r |= f,
                        A.set(t, e);
                    var L = a(b(t), b(e), r, T, S, A);
                    return A.delete(t),
                        L;
                case y:
                    if (O)
                        return O.call(t) == O.call(e)
            }
            return !1
        }
    }
    , function(t, e, n) {
        var r = n(3).Uint8Array;
        t.exports = r
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach(function(t, r) {
                n[++e] = [r, t]
            }),
                n
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach(function(t) {
                n[++e] = t
            }),
                n
        }
    }
    , function(t, e, n) {
        var r = n(161)
            , i = 1
            , o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n, a, u, c) {
            var s = n & i
                , f = r(t)
                , l = f.length;
            if (l != r(e).length && !s)
                return !1;
            for (var d = l; d--; ) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p)))
                    return !1
            }
            var v = c.get(t);
            if (v && c.get(e))
                return v == e;
            var h = !0;
            c.set(t, e),
                c.set(e, t);
            for (var E = s; ++d < l; ) {
                var _ = t[p = f[d]]
                    , g = e[p];
                if (a)
                    var y = s ? a(g, _, p, e, t, c) : a(_, g, p, t, e, c);
                if (!(void 0 === y ? _ === g || u(_, g, n, a, c) : y)) {
                    h = !1;
                    break
                }
                E || (E = "constructor" == p)
            }
            if (h && !E) {
                var I = t.constructor
                    , m = e.constructor;
                I != m && "constructor"in t && "constructor"in e && !("function" == typeof I && I instanceof I && "function" == typeof m && m instanceof m) && (h = !1)
            }
            return c.delete(t),
                c.delete(e),
                h
        }
    }
    , function(t, e, n) {
        var r = n(71)
            , i = n(72)
            , o = n(21);
        t.exports = function(t) {
            return r(t, o, i)
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a)
            }
            return o
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = Array(t); ++n < t; )
                r[n] = e(n);
            return r
        }
    }
    , function(t, e, n) {
        var r = n(9)
            , i = n(8)
            , o = "[object Arguments]";
        t.exports = function(t) {
            return i(t) && r(t) == o
        }
    }
    , function(t, e) {
        t.exports = function() {
            return !1
        }
    }
    , function(t, e, n) {
        var r = n(9)
            , i = n(39)
            , o = n(8)
            , a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0,
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1,
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
    }
    , function(t, e) {
        t.exports = function(t) {
            return function(e) {
                return t(e)
            }
        }
    }
    , function(t, e, n) {
        (function(t) {
                var r = n(67)
                    , i = e && !e.nodeType && e
                    , o = i && "object" == typeof t && t && !t.nodeType && t
                    , a = o && o.exports === i && r.process
                    , u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
                t.exports = u
            }
        ).call(this, n(75)(t))
    }
    , function(t, e, n) {
        var r = n(76)(Object.keys, Object);
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(7)(n(3), "DataView");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(7)(n(3), "Promise");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(7)(n(3), "Set");
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(78)
            , i = n(21);
        t.exports = function(t) {
            for (var e = i(t), n = e.length; n--; ) {
                var o = e[n]
                    , a = t[o];
                e[n] = [o, a, r(a)]
            }
            return e
        }
    }
    , function(t, e, n) {
        var r = n(69)
            , i = n(23)
            , o = n(178)
            , a = n(44)
            , u = n(78)
            , c = n(79)
            , s = n(12)
            , f = 1
            , l = 2;
        t.exports = function(t, e) {
            return a(t) && u(e) ? c(s(t), e) : function(n) {
                var a = i(n, t);
                return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
            }
        }
    }
    , function(t, e, n) {
        var r = n(176)
            , i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
            , o = /\\(\\)?/g
            , a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""),
                t.replace(i, function(t, n, r, i) {
                    e.push(r ? i.replace(o, "$1") : n || t)
                }),
                e
        });
        t.exports = a
    }
    , function(t, e, n) {
        var r = n(177)
            , i = 500;
        t.exports = function(t) {
            var e = r(t, function(t) {
                return n.size === i && n.clear(),
                    t
            })
                , n = e.cache;
            return e
        }
    }
    , function(t, e, n) {
        var r = n(34)
            , i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e)
                throw new TypeError(i);
            var n = function() {
                var r = arguments
                    , i = e ? e.apply(this, r) : r[0]
                    , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a) || o,
                    a
            };
            return n.cache = new (o.Cache || r),
                n
        }
        o.Cache = r,
            t.exports = o
    }
    , function(t, e, n) {
        var r = n(179)
            , i = n(180);
        t.exports = function(t, e) {
            return null != t && i(t, e, r)
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return null != t && e in Object(t)
        }
    }
    , function(t, e, n) {
        var r = n(24)
            , i = n(22)
            , o = n(1)
            , a = n(37)
            , u = n(39)
            , c = n(12);
        t.exports = function(t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d)))
                    break;
                t = t[d]
            }
            return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
        }
    }
    , function(t, e, n) {
        var r = n(83)
            , i = n(182)
            , o = n(44)
            , a = n(12);
        t.exports = function(t) {
            return o(t) ? r(a(t)) : i(t)
        }
    }
    , function(t, e, n) {
        var r = n(43);
        t.exports = function(t) {
            return function(e) {
                return r(e, t)
            }
        }
    }
    , function(t, e, n) {
        var r = n(84)
            , i = n(6)
            , o = n(46)
            , a = Math.max;
        t.exports = function(t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u)
                return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)),
                r(t, i(e, 3), c)
        }
    }
    , function(t, e, n) {
        var r = n(47)
            , i = 1 / 0
            , o = 1.7976931348623157e308;
        t.exports = function(t) {
            return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
        }
    }
    , function(t, e) {
        var n = 4
            , r = .001
            , i = 1e-7
            , o = 10
            , a = 11
            , u = 1 / (a - 1)
            , c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t
        }
        function f(t, e) {
            return 3 * e - 6 * t
        }
        function l(t) {
            return 3 * t
        }
        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
        }
        t.exports = function(t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f)
                for (var v = 0; v < a; ++v)
                    l[v] = d(v * u, t, s);
            function h(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f)
                    c += u;
                var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u
                    , E = p(h, t, s);
                return E >= r ? function(t, e, r, i) {
                    for (var o = 0; o < n; ++o) {
                        var a = p(e, r, i);
                        if (0 === a)
                            return e;
                        e -= (d(e, r, i) - t) / a
                    }
                    return e
                }(e, h, t, s) : 0 === E ? h : function(t, e, n, r, a) {
                    var u, c, s = 0;
                    do {
                        (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                    } while (Math.abs(u) > i && ++s < o);
                    return c
                }(e, c, c + u, t, s)
            }
            return function(n) {
                return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.createElementState = c,
            e.mergeActionState = s,
            e.ixElements = void 0;
        var r = n(13)
            , i = n(49)
            , o = n(87)
            , a = {}
            , u = "refState";
        function c(t, e, n, o, a) {
            var u = n === i.PLAIN_OBJECT ? (0,
                r.getIn)(a, ["config", "target", "objectId"]) : null;
            return (0,
                r.mergeIn)(t, [o], {
                id: o,
                ref: e,
                refId: u,
                refType: n
            })
        }
        function s(t, e, n, i, o) {
            var a = function(t) {
                var e = t.config;
                return f.reduce(function(t, n) {
                    var r = n[0]
                        , i = n[1]
                        , o = e[r]
                        , a = e[i];
                    return null != o && null != a && (t[i] = a),
                        t
                }, {})
            }(o)
                , c = [e, u, n];
            return (0,
                r.mergeIn)(t, c, i, a)
        }
        e.ixElements = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
                , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case o.IX2_SESSION_STOPPED:
                    return a;
                case o.IX2_INSTANCE_ADDED:
                    var n = e.payload
                        , i = n.elementId
                        , u = n.element
                        , f = n.origin
                        , l = n.actionItem
                        , d = n.refType
                        , p = l.actionTypeId
                        , v = t;
                    return (0,
                        r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, l)),
                        s(v, i, p, f, l);
                case o.IX2_ELEMENT_STATE_CHANGED:
                    var h = e.payload;
                    return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
                default:
                    return t
            }
        }
        ;
        var f = [[i.CONFIG_X_VALUE, i.CONFIG_X_UNIT], [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT], [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT], [i.CONFIG_VALUE, i.CONFIG_UNIT]]
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginConfig = void 0;
        e.getPluginConfig = function(t) {
            return t.value
        }
        ;
        e.getPluginOrigin = function(t) {
            return t || {
                value: 0
            }
        }
        ;
        e.getPluginDestination = function(t) {
            return {
                value: t.value
            }
        }
        ;
        e.createPluginInstance = function(t) {
            var e = window.Webflow.require("lottie").createInstance(t);
            return e.pause(),
                e.setSubframe(!0),
                e
        }
        ;
        e.renderPlugin = function(t, e, n) {
            if (t) {
                var r = e[n.actionTypeId].value / 100;
                t.setCurrentRawFrameValue(t.totalFrames * r)
            }
        }
        ;
        e.clearPlugin = function(t) {
            window.Webflow.require("lottie").createInstance(t).stop()
        }
    }
    , function(t, e, n) {
        "use strict";
        var r, i, o, a = n(0), u = a(n(15)), c = a(n(14)), s = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.getInstanceId = function() {
                return "i" + b++
            }
            ,
            e.getElementId = function(t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e)
                        return r.id
                }
                return "e" + R++
            }
            ,
            e.reifyState = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , e = t.events
                    , n = t.actionLists
                    , r = t.site
                    , i = (0,
                    l.default)(e, function(t, e) {
                    var n = e.eventTypeId;
                    return t[n] || (t[n] = {}),
                        t[n][e.id] = e,
                        t
                }, {})
                    , o = r && r.mediaQueries
                    , a = [];
                o ? a = o.map(function(t) {
                    return t.key
                }) : (o = [],
                    console.warn("IX2 missing mediaQueries in site data"));
                return {
                    ixData: {
                        events: e,
                        actionLists: n,
                        eventTypeMap: i,
                        mediaQueries: o,
                        mediaQueryKeys: a
                    }
                }
            }
            ,
            e.observeStore = function(t) {
                var e = t.store
                    , n = t.select
                    , r = t.onChange
                    , i = t.comparator
                    , o = void 0 === i ? w : i
                    , a = e.getState
                    , u = (0,
                    e.subscribe)(function() {
                    var t = n(a());
                    if (null == t)
                        return void u();
                    o(t, c) || r(c = t, e)
                })
                    , c = n(a());
                return u
            }
            ,
            e.getAffectedElements = N,
            e.getComputedStyle = function(t) {
                var e = t.element
                    , n = t.actionItem;
                if (!m.IS_BROWSER_ENV)
                    return {};
                switch (n.actionTypeId) {
                    case I.STYLE_SIZE:
                    case I.STYLE_BACKGROUND_COLOR:
                    case I.STYLE_BORDER:
                    case I.STYLE_TEXT_COLOR:
                    case I.GENERAL_DISPLAY:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            ,
            e.getInstanceOrigin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    , r = arguments.length > 3 ? arguments[3] : void 0
                    , i = (arguments.length > 4 ? arguments[4] : void 0).getStyle
                    , o = r.actionTypeId
                    , a = r.config;
                if ((0,
                    _.isPluginType)(o))
                    return (0,
                        _.getPluginOrigin)(o)(e[o]);
                switch (o) {
                    case I.TRANSFORM_MOVE:
                    case I.TRANSFORM_SCALE:
                    case I.TRANSFORM_ROTATE:
                    case I.TRANSFORM_SKEW:
                        return e[o] || M[o];
                    case I.STYLE_FILTER:
                        return x(e[o], r.config.filters);
                    case I.STYLE_OPACITY:
                        return {
                            value: (0,
                                f.default)(parseFloat(i(t, g.OPACITY)), 1)
                        };
                    case I.STYLE_SIZE:
                        var u, c, s = i(t, g.WIDTH), l = i(t, g.HEIGHT);
                        return u = a.widthUnit === g.AUTO ? C.test(s) ? parseFloat(s) : parseFloat(n.width) : (0,
                            f.default)(parseFloat(s), parseFloat(n.width)),
                            c = a.heightUnit === g.AUTO ? C.test(l) ? parseFloat(l) : parseFloat(n.height) : (0,
                                f.default)(parseFloat(l), parseFloat(n.height)),
                            {
                                widthValue: u,
                                heightValue: c
                            };
                    case I.STYLE_BACKGROUND_COLOR:
                    case I.STYLE_BORDER:
                    case I.STYLE_TEXT_COLOR:
                        return function(t) {
                            var e = t.element
                                , n = t.actionTypeId
                                , r = t.computedStyle
                                , i = t.getStyle
                                , o = O[n]
                                , a = i(e, o)
                                , u = X.test(a) ? a : r[o]
                                , c = function(t, e) {
                                var n = t.exec(e);
                                return n ? n[1] : ""
                            }(V, u).split(g.COMMA_DELIMITER);
                            return {
                                rValue: (0,
                                    f.default)(parseInt(c[0], 10), 255),
                                gValue: (0,
                                    f.default)(parseInt(c[1], 10), 255),
                                bValue: (0,
                                    f.default)(parseInt(c[2], 10), 255),
                                aValue: (0,
                                    f.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: t,
                            actionTypeId: o,
                            computedStyle: n,
                            getStyle: i
                        });
                    case I.GENERAL_DISPLAY:
                        return {
                            value: (0,
                                f.default)(i(t, g.DISPLAY), n.display)
                        };
                    case I.OBJECT_VALUE:
                        return e[o] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            ,
            e.getDestinationValues = function(t) {
                var e = t.element
                    , n = t.actionItem
                    , r = t.elementApi
                    , i = n.actionTypeId;
                if ((0,
                    _.isPluginType)(i))
                    return (0,
                        _.getPluginDestination)(i)(n.config);
                switch (i) {
                    case I.TRANSFORM_MOVE:
                    case I.TRANSFORM_SCALE:
                    case I.TRANSFORM_ROTATE:
                    case I.TRANSFORM_SKEW:
                        var o = n.config
                            , a = o.xValue
                            , u = o.yValue
                            , c = o.zValue;
                        return {
                            xValue: a,
                            yValue: u,
                            zValue: c
                        };
                    case I.STYLE_SIZE:
                        var s = r.getStyle
                            , f = r.setStyle
                            , l = r.getProperty
                            , d = n.config
                            , p = d.widthUnit
                            , v = d.heightUnit
                            , h = n.config
                            , E = h.widthValue
                            , y = h.heightValue;
                        if (!m.IS_BROWSER_ENV)
                            return {
                                widthValue: E,
                                heightValue: y
                            };
                        if (p === g.AUTO) {
                            var T = s(e, g.WIDTH);
                            f(e, g.WIDTH, ""),
                                E = l(e, "offsetWidth"),
                                f(e, g.WIDTH, T)
                        }
                        if (v === g.AUTO) {
                            var O = s(e, g.HEIGHT);
                            f(e, g.HEIGHT, ""),
                                y = l(e, "offsetHeight"),
                                f(e, g.HEIGHT, O)
                        }
                        return {
                            widthValue: E,
                            heightValue: y
                        };
                    case I.STYLE_BACKGROUND_COLOR:
                    case I.STYLE_BORDER:
                    case I.STYLE_TEXT_COLOR:
                        var S = n.config
                            , A = S.rValue
                            , b = S.gValue
                            , R = S.bValue
                            , w = S.aValue;
                        return {
                            rValue: A,
                            gValue: b,
                            bValue: R,
                            aValue: w
                        };
                    case I.STYLE_FILTER:
                        return n.config.filters.reduce(D, {});
                    default:
                        var L = n.config.value;
                        return {
                            value: L
                        }
                }
            }
            ,
            e.getRenderType = P,
            e.getStyleProp = function(t, e) {
                return t === g.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null
            }
            ,
            e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case g.RENDER_TRANSFORM:
                        return function(t, e, n, r, i) {
                            var o = G.map(function(t) {
                                var n = M[t]
                                    , r = e[t] || {}
                                    , i = r.xValue
                                    , o = void 0 === i ? n.xValue : i
                                    , a = r.yValue
                                    , u = void 0 === a ? n.yValue : a
                                    , c = r.zValue
                                    , s = void 0 === c ? n.zValue : c
                                    , f = r.xUnit
                                    , l = void 0 === f ? "" : f
                                    , d = r.yUnit
                                    , p = void 0 === d ? "" : d
                                    , v = r.zUnit
                                    , h = void 0 === v ? "" : v;
                                switch (t) {
                                    case I.TRANSFORM_MOVE:
                                        return "".concat(g.TRANSLATE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                    case I.TRANSFORM_SCALE:
                                        return "".concat(g.SCALE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                    case I.TRANSFORM_ROTATE:
                                        return "".concat(g.ROTATE_X, "(").concat(o).concat(l, ") ").concat(g.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(g.ROTATE_Z, "(").concat(s).concat(h, ")");
                                    case I.TRANSFORM_SKEW:
                                        return "".concat(g.SKEW, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                    default:
                                        return ""
                                }
                            }).join(" ")
                                , a = i.setStyle;
                            U(t, m.TRANSFORM_PREFIXED, i),
                                a(t, m.TRANSFORM_PREFIXED, o),
                                u = r,
                                c = n,
                                s = u.actionTypeId,
                                f = c.xValue,
                                l = c.yValue,
                                d = c.zValue,
                            (s === I.TRANSFORM_MOVE && void 0 !== d || s === I.TRANSFORM_SCALE && void 0 !== d || s === I.TRANSFORM_ROTATE && (void 0 !== f || void 0 !== l)) && a(t, m.TRANSFORM_STYLE_PREFIXED, g.PRESERVE_3D);
                            var u, c, s, f, l, d
                        }(t, e, n, i, a);
                    case g.RENDER_STYLE:
                        return function(t, e, n, r, i, o) {
                            var a = o.setStyle
                                , u = r.actionTypeId
                                , c = r.config;
                            switch (u) {
                                case I.STYLE_SIZE:
                                    var s = r.config
                                        , f = s.widthUnit
                                        , d = void 0 === f ? "" : f
                                        , p = s.heightUnit
                                        , v = void 0 === p ? "" : p
                                        , h = n.widthValue
                                        , E = n.heightValue;
                                    void 0 !== h && (d === g.AUTO && (d = "px"),
                                        U(t, g.WIDTH, o),
                                        a(t, g.WIDTH, h + d)),
                                    void 0 !== E && (v === g.AUTO && (v = "px"),
                                        U(t, g.HEIGHT, o),
                                        a(t, g.HEIGHT, E + v));
                                    break;
                                case I.STYLE_FILTER:
                                    !function(t, e, n, r) {
                                        var i = (0,
                                            l.default)(e, function(t, e, r) {
                                            return "".concat(t, " ").concat(r, "(").concat(e).concat(j(r, n), ")")
                                        }, "")
                                            , o = r.setStyle;
                                        U(t, g.FILTER, r),
                                            o(t, g.FILTER, i)
                                    }(t, n, c, o);
                                    break;
                                case I.STYLE_BACKGROUND_COLOR:
                                case I.STYLE_BORDER:
                                case I.STYLE_TEXT_COLOR:
                                    var _ = O[u]
                                        , y = Math.round(n.rValue)
                                        , m = Math.round(n.gValue)
                                        , T = Math.round(n.bValue)
                                        , S = n.aValue;
                                    U(t, _, o),
                                        a(t, _, S >= 1 ? "rgb(".concat(y, ",").concat(m, ",").concat(T, ")") : "rgba(".concat(y, ",").concat(m, ",").concat(T, ",").concat(S, ")"));
                                    break;
                                default:
                                    var A = c.unit
                                        , b = void 0 === A ? "" : A;
                                    U(t, i, o),
                                        a(t, i, n.value + b)
                            }
                        }(t, 0, n, i, o, a);
                    case g.RENDER_GENERAL:
                        return function(t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case I.GENERAL_DISPLAY:
                                    var i = e.config.value;
                                    return void (i === g.FLEX && m.IS_BROWSER_ENV ? r(t, g.DISPLAY, m.FLEX_PREFIXED) : r(t, g.DISPLAY, i))
                            }
                        }(t, i, a);
                    case g.RENDER_PLUGIN:
                        var s = i.actionTypeId;
                        if ((0,
                            _.isPluginType)(s))
                            return (0,
                                _.renderPlugin)(s)(c, e, i)
                }
            }
            ,
            e.clearAllStyles = function(t) {
                var e = t.store
                    , n = t.elementApi
                    , r = e.getState().ixData
                    , i = r.events
                    , o = void 0 === i ? {} : i
                    , a = r.actionLists
                    , u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function(t) {
                    var e = o[t]
                        , r = e.action.config
                        , i = r.actionListId
                        , a = u[i];
                    a && B({
                        actionList: a,
                        event: e,
                        elementApi: n
                    })
                }),
                    Object.keys(u).forEach(function(t) {
                        B({
                            actionList: u[t],
                            elementApi: n
                        })
                    })
            }
            ,
            e.cleanupHTMLElement = function(t, e, n) {
                var r = n.setStyle
                    , i = n.getStyle
                    , o = e.actionTypeId;
                if (o === I.STYLE_SIZE) {
                    var a = e.config;
                    a.widthUnit === g.AUTO && r(t, g.WIDTH, ""),
                    a.heightUnit === g.AUTO && r(t, g.HEIGHT, "")
                }
                i(t, g.WILL_CHANGE) && W({
                    effect: k,
                    actionTypeId: o,
                    elementApi: n
                })(t)
            }
            ,
            e.getMaxDurationItemIndex = z,
            e.getActionListProgress = function(t, e) {
                var n = t.actionItemGroups
                    , r = t.useFirstGroupAsInitialState
                    , i = e.actionItem
                    , o = e.verboseTimeElapsed
                    , a = void 0 === o ? 0 : o
                    , u = 0
                    , c = 0;
                return n.forEach(function(t, e) {
                    if (!r || 0 !== e) {
                        var n = t.actionItems
                            , o = n[z(n)]
                            , s = o.config
                            , f = o.actionTypeId;
                        i.id === o.id && (c = u + a);
                        var l = P(f) === g.RENDER_GENERAL ? 0 : s.duration;
                        u += s.delay + l
                    }
                }),
                    u > 0 ? (0,
                        E.optimizeFloat)(c / u) : 0
            }
            ,
            e.reduceListToGroup = function(t) {
                var e = t.actionListId
                    , n = t.actionItemId
                    , r = t.rawData
                    , i = r.actionLists[e]
                    , o = i.actionItemGroups
                    , a = i.continuousParameterGroups
                    , u = []
                    , s = function(t) {
                    return u.push((0,
                        v.mergeIn)(t, ["config"], {
                        delay: 0,
                        duration: 0
                    })),
                    t.id === n
                };
                return o && o.some(function(t) {
                    return t.actionItems.some(s)
                }),
                a && a.some(function(t) {
                    return t.continuousActionGroups.some(function(t) {
                        return t.actionItems.some(s)
                    })
                }),
                    (0,
                        v.setIn)(r, ["actionLists"], (0,
                        c.default)({}, e, {
                        id: e,
                        actionItemGroups: [{
                            actionItems: u
                        }]
                    }))
            }
            ,
            e.shouldNamespaceEventParameter = function(t, e) {
                var n = e.basedOn;
                return t === y.SCROLLING_IN_VIEW && (n === y.ELEMENT || null == n) || t === y.MOUSE_MOVE && n === y.ELEMENT
            }
            ,
            e.getNamespacedParameterId = function(t, e) {
                return t + g.COLON_DELIMITER + e
            }
            ,
            e.shouldAllowMediaQuery = function(t, e) {
                if (null == e)
                    return !0;
                return -1 !== t.indexOf(e)
            }
            ,
            e.mediaQueriesEqual = function(t, e) {
                return (0,
                    h.default)(t && t.sort(), e && e.sort())
            }
            ,
            e.stringifyTarget = function(t) {
                if ("string" == typeof t)
                    return t;
                var e = t.id
                    , n = void 0 === e ? "" : e
                    , r = t.selector
                    , i = void 0 === r ? "" : r
                    , o = t.useEventTarget
                    , a = void 0 === o ? "" : o;
                return n + g.BAR_DELIMITER + i + g.BAR_DELIMITER + a
            }
            ,
            e.getItemConfigByKey = void 0;
        var f = s(n(189))
            , l = s(n(190))
            , d = s(n(196))
            , p = s(n(23))
            , v = n(13)
            , h = s(n(92))
            , E = n(86)
            , _ = n(89)
            , g = n(49)
            , y = n(88)
            , I = n(48)
            , m = n(31)
            , T = function(t) {
            return t.trim()
        }
            , O = Object.freeze((r = {},
            (0,
                c.default)(r, I.STYLE_BACKGROUND_COLOR, g.BACKGROUND_COLOR),
            (0,
                c.default)(r, I.STYLE_BORDER, g.BORDER_COLOR),
            (0,
                c.default)(r, I.STYLE_TEXT_COLOR, g.COLOR),
            r))
            , S = Object.freeze((i = {},
            (0,
                c.default)(i, m.TRANSFORM_PREFIXED, g.TRANSFORM),
            (0,
                c.default)(i, g.BACKGROUND_COLOR, g.BACKGROUND),
            (0,
                c.default)(i, g.OPACITY, g.OPACITY),
            (0,
                c.default)(i, g.FILTER, g.FILTER),
            (0,
                c.default)(i, g.WIDTH, g.WIDTH),
            (0,
                c.default)(i, g.HEIGHT, g.HEIGHT),
            i))
            , A = {}
            , b = 1;
        var R = 1;
        var w = function(t, e) {
            return t === e
        };
        function L(t) {
            var e = (0,
                u.default)(t);
            return "string" === e ? {
                id: t
            } : null != t && "object" === e ? {
                id: t.id,
                objectId: t.objectId,
                selector: t.selector,
                selectorGuids: t.selectorGuids,
                appliesTo: t.appliesTo,
                useEventTarget: t.useEventTarget
            } : {}
        }
        function N(t) {
            var e = t.config
                , n = t.event
                , r = t.eventTarget
                , i = t.elementRoot
                , o = t.elementApi;
            if (!o)
                throw new Error("IX2 missing elementApi");
            var a = o.getValidDocument
                , u = o.getQuerySelector
                , c = o.queryDocument
                , s = o.getChildElements
                , f = o.getSiblingElements
                , l = o.matchSelector
                , d = o.elementContains
                , v = o.isSiblingNode
                , h = e.target;
            if (!h)
                return [];
            var E = L(h)
                , _ = E.id
                , I = E.objectId
                , T = E.selector
                , O = E.selectorGuids
                , S = E.appliesTo
                , b = E.useEventTarget;
            if (I)
                return [A[I] || (A[I] = {})];
            if (S === y.PAGE) {
                var R = a(_);
                return R ? [R] : []
            }
            var w, N, C, x = (0,
                p.default)(n, "action.config.affectedElements", {})[_ || T] || {}, D = Boolean(x.id || x.selector), P = n && u(L(n.target));
            if (D ? (w = x.limitAffectedElements,
                N = P,
                C = u(x)) : N = C = u({
                id: _,
                selector: T,
                selectorGuids: O
            }),
            n && b) {
                var M = r && (C || !0 === b) ? [r] : c(P);
                if (C) {
                    if (b === g.PARENT)
                        return c(C).filter(function(t) {
                            return M.some(function(e) {
                                return d(t, e)
                            })
                        });
                    if (b === g.CHILDREN)
                        return c(C).filter(function(t) {
                            return M.some(function(e) {
                                return d(e, t)
                            })
                        });
                    if (b === g.SIBLINGS)
                        return c(C).filter(function(t) {
                            return M.some(function(e) {
                                return v(e, t)
                            })
                        })
                }
                return M
            }
            return null == N || null == C ? [] : m.IS_BROWSER_ENV && i ? c(C).filter(function(t) {
                return i.contains(t)
            }) : w === g.CHILDREN ? c(N, C) : w === g.IMMEDIATE_CHILDREN ? s(c(N)).filter(l(C)) : w === g.SIBLINGS ? f(c(N)).filter(l(C)) : c(C)
        }
        var C = /px/
            , x = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = F[e.type]),
                    t
            }, t || {})
        };
        var D = function(t, e) {
            return e && (t[e.type] = e.value || 0),
                t
        };
        function P(t) {
            return /^TRANSFORM_/.test(t) ? g.RENDER_TRANSFORM : /^STYLE_/.test(t) ? g.RENDER_STYLE : /^GENERAL_/.test(t) ? g.RENDER_GENERAL : /^PLUGIN_/.test(t) ? g.RENDER_PLUGIN : void 0
        }
        e.getItemConfigByKey = function(t, e, n) {
            if ((0,
                _.isPluginType)(t))
                return (0,
                    _.getPluginConfig)(t)(n, e);
            switch (t) {
                case I.STYLE_FILTER:
                    var r = (0,
                        d.default)(n.filters, function(t) {
                        return t.type === e
                    });
                    return r ? r.value : 0;
                default:
                    return n[e]
            }
        }
        ;
        var M = (o = {},
            (0,
                c.default)(o, I.TRANSFORM_MOVE, Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            })),
            (0,
                c.default)(o, I.TRANSFORM_SCALE, Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            })),
            (0,
                c.default)(o, I.TRANSFORM_ROTATE, Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            })),
            (0,
                c.default)(o, I.TRANSFORM_SKEW, Object.freeze({
                xValue: 0,
                yValue: 0
            })),
            o)
            , F = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
            , j = function(t, e) {
            var n = (0,
                d.default)(e.filters, function(e) {
                return e.type === t
            });
            if (n && n.unit)
                return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }
            , G = Object.keys(M);
        var X = /^rgb/
            , V = RegExp("rgba?".concat("\\(([^)]+)\\)"));
        function U(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = S[e];
                if (r) {
                    var i = n.getStyle
                        , o = n.setStyle
                        , a = i(t, g.WILL_CHANGE);
                    if (a) {
                        var u = a.split(g.COMMA_DELIMITER).map(T);
                        -1 === u.indexOf(r) && o(t, g.WILL_CHANGE, u.concat(r).join(g.COMMA_DELIMITER))
                    } else
                        o(t, g.WILL_CHANGE, r)
                }
            }
        }
        function k(t, e, n) {
            if (m.IS_BROWSER_ENV) {
                var r = S[e];
                if (r) {
                    var i = n.getStyle
                        , o = n.setStyle
                        , a = i(t, g.WILL_CHANGE);
                    a && -1 !== a.indexOf(r) && o(t, g.WILL_CHANGE, a.split(g.COMMA_DELIMITER).map(T).filter(function(t) {
                        return t !== r
                    }).join(g.COMMA_DELIMITER))
                }
            }
        }
        function B(t) {
            var e = t.actionList
                , n = void 0 === e ? {} : e
                , r = t.event
                , i = t.elementApi
                , o = n.actionItemGroups
                , a = n.continuousParameterGroups;
            o && o.forEach(function(t) {
                H({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            }),
            a && a.forEach(function(t) {
                t.continuousActionGroups.forEach(function(t) {
                    H({
                        actionGroup: t,
                        event: r,
                        elementApi: i
                    })
                })
            })
        }
        function H(t) {
            var e = t.actionGroup
                , n = t.event
                , r = t.elementApi;
            e.actionItems.forEach(function(t) {
                var e, i = t.actionTypeId, o = t.config;
                e = (0,
                    _.isPluginType)(i) ? (0,
                    _.clearPlugin)(i) : W({
                    effect: Y,
                    actionTypeId: i,
                    elementApi: r
                }),
                    N({
                        config: o,
                        event: n,
                        elementApi: r
                    }).forEach(e)
            })
        }
        var W = function(t) {
            var e = t.effect
                , n = t.actionTypeId
                , r = t.elementApi;
            return function(t) {
                switch (n) {
                    case I.TRANSFORM_MOVE:
                    case I.TRANSFORM_SCALE:
                    case I.TRANSFORM_ROTATE:
                    case I.TRANSFORM_SKEW:
                        e(t, m.TRANSFORM_PREFIXED, r);
                        break;
                    case I.STYLE_FILTER:
                        e(t, g.FILTER, r);
                        break;
                    case I.STYLE_OPACITY:
                        e(t, g.OPACITY, r);
                        break;
                    case I.STYLE_SIZE:
                        e(t, g.WIDTH, r),
                            e(t, g.HEIGHT, r);
                        break;
                    case I.STYLE_BACKGROUND_COLOR:
                    case I.STYLE_BORDER:
                    case I.STYLE_TEXT_COLOR:
                        e(t, O[n], r);
                        break;
                    case I.GENERAL_DISPLAY:
                        e(t, g.DISPLAY, r)
                }
            }
        };
        function Y(t, e, n) {
            var r = n.setStyle;
            k(t, e, n),
                r(t, e, ""),
            e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "")
        }
        function z(t) {
            var e = 0
                , n = 0;
            return t.forEach(function(t, r) {
                var i = t.config
                    , o = i.delay + i.duration;
                o >= e && (e = o,
                    n = r)
            }),
                n
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return null == t || t != t ? e : t
        }
    }
    , function(t, e, n) {
        var r = n(191)
            , i = n(90)
            , o = n(6)
            , a = n(195)
            , u = n(1);
        t.exports = function(t, e, n) {
            var c = u(t) ? r : a
                , s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i)
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n, r) {
            var i = -1
                , o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; )
                n = e(n, t[i], i, t);
            return n
        }
    }
    , function(t, e, n) {
        var r = n(193)();
        t.exports = r
    }
    , function(t, e) {
        t.exports = function(t) {
            return function(e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o))
                        break
                }
                return e
            }
        }
    }
    , function(t, e, n) {
        var r = n(10);
        t.exports = function(t, e) {
            return function(n, i) {
                if (null == n)
                    return n;
                if (!r(n))
                    return t(n, i);
                for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u); )
                    ;
                return n
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n, r, i) {
            return i(t, function(t, i, o) {
                n = r ? (r = !1,
                    t) : e(n, t, i, o)
            }),
                n
        }
    }
    , function(t, e, n) {
        var r = n(64)(n(197));
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(84)
            , i = n(6)
            , o = n(46)
            , a = Math.max
            , u = Math.min;
        t.exports = function(t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c)
                return -1;
            var s = c - 1;
            return void 0 !== n && (s = o(n),
                s = n < 0 ? a(c + s, 0) : u(s, c - 1)),
                r(t, i(e, 3), s, !0)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
        }
        t.exports = function(t, e) {
            if (i(t, e))
                return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e)
                return !1;
            var n = Object.keys(t)
                , o = Object.keys(e);
            if (n.length !== o.length)
                return !1;
            for (var a = 0; a < n.length; a++)
                if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]]))
                    return !1;
            return !0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r, i = n(0)(n(14)), o = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ixRequest = void 0;
        var a = o(n(26))
            , u = n(2)
            , c = n(13)
            , s = u.IX2EngineActionTypes
            , f = s.IX2_PREVIEW_REQUESTED
            , l = s.IX2_PLAYBACK_REQUESTED
            , d = s.IX2_STOP_REQUESTED
            , p = s.IX2_CLEAR_REQUESTED
            , v = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
            , h = Object.create(null, (r = {},
            (0,
                i.default)(r, f, {
                value: "preview"
            }),
            (0,
                i.default)(r, l, {
                value: "playback"
            }),
            (0,
                i.default)(r, d, {
                value: "stop"
            }),
            (0,
                i.default)(r, p, {
                value: "clear"
            }),
            r));
        e.ixRequest = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v
                , e = arguments.length > 1 ? arguments[1] : void 0;
            if (e.type in h) {
                var n = [h[e.type]];
                return (0,
                    c.setIn)(t, [n], (0,
                    a.default)({}, e.payload))
            }
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ixSession = void 0;
        var r = n(2)
            , i = n(13)
            , o = r.IX2EngineActionTypes
            , a = o.IX2_SESSION_INITIALIZED
            , u = o.IX2_SESSION_STARTED
            , c = o.IX2_TEST_FRAME_RENDERED
            , s = o.IX2_SESSION_STOPPED
            , f = o.IX2_EVENT_LISTENER_ADDED
            , l = o.IX2_EVENT_STATE_CHANGED
            , d = o.IX2_ANIMATION_FRAME_CHANGED
            , p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED
            , v = o.IX2_VIEWPORT_WIDTH_CHANGED
            , h = o.IX2_MEDIA_QUERIES_DEFINED
            , E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1
        };
        e.ixSession = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E
                , e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    var n = e.payload.hasBoundaryNodes;
                    return (0,
                        i.set)(t, "hasBoundaryNodes", n);
                case u:
                    return (0,
                        i.set)(t, "active", !0);
                case c:
                    var r = e.payload.step
                        , o = void 0 === r ? 20 : r;
                    return (0,
                        i.set)(t, "tick", t.tick + o);
                case s:
                    return E;
                case d:
                    var _ = e.payload.now;
                    return (0,
                        i.set)(t, "tick", _);
                case f:
                    var g = (0,
                        i.addLast)(t.eventListeners, e.payload);
                    return (0,
                        i.set)(t, "eventListeners", g);
                case l:
                    var y = e.payload
                        , I = y.stateKey
                        , m = y.newState;
                    return (0,
                        i.setIn)(t, ["eventState", I], m);
                case p:
                    var T = e.payload
                        , O = T.actionListId
                        , S = T.isPlaying;
                    return (0,
                        i.setIn)(t, ["playbackState", O], S);
                case v:
                    for (var A = e.payload, b = A.width, R = A.mediaQueries, w = R.length, L = null, N = 0; N < w; N++) {
                        var C = R[N]
                            , x = C.key
                            , D = C.min
                            , P = C.max;
                        if (b >= D && b <= P) {
                            L = x;
                            break
                        }
                    }
                    return (0,
                        i.merge)(t, {
                        viewportWidth: b,
                        mediaQueryKey: L
                    });
                case h:
                    return (0,
                        i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ixInstances = void 0;
        var r = n(2)
            , i = n(13)
            , o = r.IX2EngineActionTypes
            , a = o.IX2_RAW_DATA_IMPORTED
            , u = o.IX2_SESSION_STOPPED
            , c = o.IX2_INSTANCE_ADDED
            , s = o.IX2_INSTANCE_STARTED
            , f = o.IX2_INSTANCE_REMOVED
            , l = o.IX2_ANIMATION_FRAME_CHANGED
            , d = r.IX2EasingUtils
            , p = d.optimizeFloat
            , v = d.applyEasing
            , h = r.IX2EngineConstants.RENDER_GENERAL
            , E = r.IX2VanillaUtils
            , _ = E.getItemConfigByKey
            , g = E.getRenderType
            , y = E.getStyleProp
            , I = function(t, e) {
            var n = t.position
                , r = t.parameterId
                , o = t.actionGroups
                , a = t.destinationKeys
                , u = t.smoothing
                , c = t.restingValue
                , s = t.actionTypeId
                , f = e.payload.parameters
                , l = Math.max(1 - u, .01)
                , d = f[r];
            null == d && (l = 1,
                d = c);
            var h, E, g, y, I = Math.max(d, 0) || 0, m = p(I - n), T = p(n + m * l), O = 100 * T;
            if (T === n && t.current)
                return t;
            for (var S = 0, A = o.length; S < A; S++) {
                var b = o[S]
                    , R = b.keyframe
                    , w = b.actionItems;
                if (0 === S && (h = w[0]),
                O >= R) {
                    h = w[0];
                    var L = o[S + 1]
                        , N = L && O !== R;
                    E = N ? L.actionItems[0] : null,
                    N && (g = R / 100,
                        y = (L.keyframe - R) / 100)
                }
            }
            var C = {};
            if (h && !E)
                for (var x = 0, D = a.length; x < D; x++) {
                    var P = a[x];
                    C[P] = _(s, P, h.config)
                }
            else if (h && E)
                for (var M = (T - g) / y, F = h.config.easing, j = v(F, M), G = 0, X = a.length; G < X; G++) {
                    var V = a[G]
                        , U = _(s, V, h.config)
                        , k = (_(s, V, E.config) - U) * j + U;
                    C[V] = k
                }
            return (0,
                i.merge)(t, {
                position: T,
                current: C
            })
        }
            , m = function(t, e) {
            var n = t
                , r = n.active
                , o = n.origin
                , a = n.start
                , u = n.immediate
                , c = n.renderType
                , s = n.verbose
                , f = n.actionItem
                , l = n.destination
                , d = n.destinationKeys
                , E = n.instanceDelay
                , _ = f.config.easing
                , g = f.config
                , y = g.duration
                , I = g.delay;
            I = null != E ? E : I,
                c === h ? y = 0 : u && (y = I = 0);
            var m = e.payload.now;
            if (r && o) {
                var T = m - (a + I);
                if (s) {
                    var O = m - a
                        , S = y + I
                        , A = p(Math.min(Math.max(0, O / S), 1));
                    t = (0,
                        i.set)(t, "verboseTimeElapsed", S * A)
                }
                if (T < 0)
                    return t;
                var b = p(Math.min(Math.max(0, T / y), 1))
                    , R = v(_, b)
                    , w = {}
                    , L = null;
                return d.length && (L = d.reduce(function(t, e) {
                    var n = l[e]
                        , r = parseFloat(o[e]) || 0
                        , i = (parseFloat(n) - r) * R + r;
                    return t[e] = i,
                        t
                }, {})),
                    w.current = L,
                    w.position = b,
                1 === b && (w.active = !1,
                    w.complete = !0),
                    (0,
                        i.merge)(t, w)
            }
            return t
        };
        e.ixInstances = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({})
                , e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    return e.payload.ixInstances || Object.freeze({});
                case u:
                    return Object.freeze({});
                case c:
                    var n = e.payload
                        , r = n.instanceId
                        , o = n.elementId
                        , d = n.actionItem
                        , p = n.eventId
                        , v = n.eventTarget
                        , h = n.eventStateKey
                        , E = n.actionListId
                        , _ = n.groupIndex
                        , T = n.isCarrier
                        , O = n.origin
                        , S = n.destination
                        , A = n.immediate
                        , b = n.verbose
                        , R = n.continuous
                        , w = n.parameterId
                        , L = n.actionGroups
                        , N = n.smoothing
                        , C = n.restingValue
                        , x = n.pluginInstance
                        , D = n.instanceDelay
                        , P = d.actionTypeId
                        , M = g(P)
                        , F = y(M, P)
                        , j = Object.keys(S).filter(function(t) {
                        return null != S[t]
                    });
                    return (0,
                        i.set)(t, r, {
                        id: r,
                        elementId: o,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: O,
                        destination: S,
                        destinationKeys: j,
                        immediate: A,
                        verbose: b,
                        current: null,
                        actionItem: d,
                        actionTypeId: P,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: E,
                        groupIndex: _,
                        renderType: M,
                        isCarrier: T,
                        styleProp: F,
                        continuous: R,
                        parameterId: w,
                        actionGroups: L,
                        smoothing: N,
                        restingValue: C,
                        pluginInstance: x,
                        instanceDelay: D
                    });
                case s:
                    var G = e.payload
                        , X = G.instanceId
                        , V = G.time;
                    return (0,
                        i.mergeIn)(t, [X], {
                        active: !0,
                        complete: !1,
                        start: V
                    });
                case f:
                    var U = e.payload.instanceId;
                    if (!t[U])
                        return t;
                    for (var k = {}, B = Object.keys(t), H = B.length, W = 0; W < H; W++) {
                        var Y = B[W];
                        Y !== U && (k[Y] = t[Y])
                    }
                    return k;
                case l:
                    for (var z = t, K = Object.keys(t), Q = K.length, q = 0; q < Q; q++) {
                        var $ = K[q]
                            , Z = t[$]
                            , J = Z.continuous ? I : m;
                        z = (0,
                            i.set)(z, $, J(Z, e))
                    }
                    return z;
                default:
                    return t
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ixParameters = void 0;
        var r = n(2).IX2EngineActionTypes
            , i = r.IX2_RAW_DATA_IMPORTED
            , o = r.IX2_SESSION_STOPPED
            , a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload
                        , r = n.key
                        , u = n.value;
                    return t[r] = u,
                        t;
                default:
                    return t
            }
        }
    }
    , function(t, e, n) {
        var r = n(204)
            , i = n(205)
            , o = n(206);
        t.exports = function(t) {
            return r(t) || i(t) || o()
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }
    }
    , function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }
    , function(t, e, n) {
        var r = n(208);
        t.exports = function(t, e) {
            if (null == t)
                return {};
            var n, i, o = r(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (i = 0; i < a.length; i++)
                    n = a[i],
                    e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
            }
            return o
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (null == t)
                return {};
            var n, r, i = {}, o = Object.keys(t);
            for (r = 0; r < o.length; r++)
                n = o[r],
                e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i
        }
    }
    , function(t, e, n) {
        var r = n(40)
            , i = n(42)
            , o = n(10)
            , a = n(210)
            , u = n(211)
            , c = "[object Map]"
            , s = "[object Set]";
        t.exports = function(t) {
            if (null == t)
                return 0;
            if (o(t))
                return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length
        }
    }
    , function(t, e, n) {
        var r = n(9)
            , i = n(1)
            , o = n(8)
            , a = "[object String]";
        t.exports = function(t) {
            return "string" == typeof t || !i(t) && o(t) && r(t) == a
        }
    }
    , function(t, e, n) {
        var r = n(212)
            , i = n(213)
            , o = n(214);
        t.exports = function(t) {
            return i(t) ? o(t) : r(t)
        }
    }
    , function(t, e, n) {
        var r = n(83)("length");
        t.exports = r
    }
    , function(t, e) {
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function(t) {
            return n.test(t)
        }
    }
    , function(t, e) {
        var n = "[\\ud800-\\udfff]"
            , r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
            , i = "\\ud83c[\\udffb-\\udfff]"
            , o = "[^\\ud800-\\udfff]"
            , a = "(?:\\ud83c[\\udde6-\\uddff]){2}"
            , u = "[\\ud800-\\udbff][\\udc00-\\udfff]"
            , c = "(?:" + r + "|" + i + ")" + "?"
            , s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*")
            , f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")"
            , l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function(t) {
            for (var e = l.lastIndex = 0; l.test(t); )
                ++e;
            return e
        }
    }
    , function(t, e, n) {
        var r = n(6)
            , i = n(216)
            , o = n(217);
        t.exports = function(t, e) {
            return o(t, i(r(e)))
        }
    }
    , function(t, e) {
        var n = "Expected a function";
        t.exports = function(t) {
            if ("function" != typeof t)
                throw new TypeError(n);
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2])
                }
                return !t.apply(this, e)
            }
        }
    }
    , function(t, e, n) {
        var r = n(82)
            , i = n(6)
            , o = n(218)
            , a = n(221);
        t.exports = function(t, e) {
            if (null == t)
                return {};
            var n = r(a(t), function(t) {
                return [t]
            });
            return e = i(e),
                o(t, n, function(t, n) {
                    return e(t, n[0])
                })
        }
    }
    , function(t, e, n) {
        var r = n(43)
            , i = n(219)
            , o = n(24);
        t.exports = function(t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u; ) {
                var s = e[a]
                    , f = r(t, s);
                n(f, s) && i(c, o(s, t), f)
            }
            return c
        }
    }
    , function(t, e, n) {
        var r = n(220)
            , i = n(24)
            , o = n(37)
            , a = n(4)
            , u = n(12);
        t.exports = function(t, e, n, c) {
            if (!a(t))
                return t;
            for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f; ) {
                var p = u(e[s])
                    , v = n;
                if (s != l) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
                }
                r(d, p, v),
                    d = d[p]
            }
            return t
        }
    }
    , function(t, e, n) {
        var r = n(94)
            , i = n(32)
            , o = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) {
            var a = t[e];
            o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
        }
    }
    , function(t, e, n) {
        var r = n(71)
            , i = n(222)
            , o = n(224);
        t.exports = function(t) {
            return r(t, o, i)
        }
    }
    , function(t, e, n) {
        var r = n(35)
            , i = n(223)
            , o = n(72)
            , a = n(73)
            , u = Object.getOwnPropertySymbols ? function(t) {
                for (var e = []; t; )
                    r(e, o(t)),
                        t = i(t);
                return e
            }
            : a;
        t.exports = u
    }
    , function(t, e, n) {
        var r = n(76)(Object.getPrototypeOf, Object);
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(74)
            , i = n(225)
            , o = n(10);
        t.exports = function(t) {
            return o(t) ? r(t, !0) : i(t)
        }
    }
    , function(t, e, n) {
        var r = n(4)
            , i = n(41)
            , o = n(226)
            , a = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (!r(t))
                return o(t);
            var e = i(t)
                , n = [];
            for (var u in t)
                ("constructor" != u || !e && a.call(t, u)) && n.push(u);
            return n
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = [];
            if (null != t)
                for (var n in Object(t))
                    e.push(n);
            return e
        }
    }
    , function(t, e, n) {
        var r = n(40)
            , i = n(42)
            , o = n(22)
            , a = n(1)
            , u = n(10)
            , c = n(36)
            , s = n(41)
            , f = n(38)
            , l = "[object Map]"
            , d = "[object Set]"
            , p = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (null == t)
                return !0;
            if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t)))
                return !t.length;
            var e = i(t);
            if (e == l || e == d)
                return !t.size;
            if (s(t))
                return !r(t).length;
            for (var n in t)
                if (p.call(t, n))
                    return !1;
            return !0
        }
    }
    , function(t, e, n) {
        var r = n(94)
            , i = n(91)
            , o = n(6);
        t.exports = function(t, e) {
            var n = {};
            return e = o(e, 3),
                i(t, function(t, i, o) {
                    r(n, i, e(t, i, o))
                }),
                n
        }
    }
    , function(t, e, n) {
        var r = n(230)
            , i = n(90)
            , o = n(231)
            , a = n(1);
        t.exports = function(t, e) {
            return (a(t) ? r : i)(t, o(e))
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); )
                ;
            return t
        }
    }
    , function(t, e, n) {
        var r = n(45);
        t.exports = function(t) {
            return "function" == typeof t ? t : r
        }
    }
    , function(t, e, n) {
        var r = n(96)
            , i = n(81)
            , o = n(46)
            , a = n(80);
        t.exports = function(t, e, n) {
            t = a(t),
                e = i(e);
            var u = t.length
                , c = n = void 0 === n ? u : r(o(n), 0, u);
            return (n -= e.length) >= 0 && t.slice(n, c) == e
        }
    }
    , function(t, e, n) {
        var r = n(234)
            , i = n(4)
            , o = "Expected a function";
        t.exports = function(t, e, n) {
            var a = !0
                , u = !0;
            if ("function" != typeof t)
                throw new TypeError(o);
            return i(n) && (a = "leading"in n ? !!n.leading : a,
                u = "trailing"in n ? !!n.trailing : u),
                r(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: u
                })
        }
    }
    , function(t, e, n) {
        var r = n(4)
            , i = n(235)
            , o = n(47)
            , a = "Expected a function"
            , u = Math.max
            , c = Math.min;
        t.exports = function(t, e, n) {
            var s, f, l, d, p, v, h = 0, E = !1, _ = !1, g = !0;
            if ("function" != typeof t)
                throw new TypeError(a);
            function y(e) {
                var n = s
                    , r = f;
                return s = f = void 0,
                    h = e,
                    d = t.apply(r, n)
            }
            function I(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || _ && t - h >= l
            }
            function m() {
                var t = i();
                if (I(t))
                    return T(t);
                p = setTimeout(m, function(t) {
                    var n = e - (t - v);
                    return _ ? c(n, l - (t - h)) : n
                }(t))
            }
            function T(t) {
                return p = void 0,
                    g && s ? y(t) : (s = f = void 0,
                        d)
            }
            function O() {
                var t = i()
                    , n = I(t);
                if (s = arguments,
                    f = this,
                    v = t,
                    n) {
                    if (void 0 === p)
                        return function(t) {
                            return h = t,
                                p = setTimeout(m, e),
                                E ? y(t) : d
                        }(v);
                    if (_)
                        return p = setTimeout(m, e),
                            y(v)
                }
                return void 0 === p && (p = setTimeout(m, e)),
                    d
            }
            return e = o(e) || 0,
            r(n) && (E = !!n.leading,
                l = (_ = "maxWait"in n) ? u(o(n.maxWait) || 0, e) : l,
                g = "trailing"in n ? !!n.trailing : g),
                O.cancel = function() {
                    void 0 !== p && clearTimeout(p),
                        h = 0,
                        s = v = f = p = void 0
                }
                ,
                O.flush = function() {
                    return void 0 === p ? d : T(i())
                }
                ,
                O
        }
    }
    , function(t, e, n) {
        var r = n(3);
        t.exports = function() {
            return r.Date.now()
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)(n(15));
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.setStyle = function(t, e, n) {
                t.style[e] = n
            }
            ,
            e.getStyle = function(t, e) {
                return t.style[e]
            }
            ,
            e.getProperty = function(t, e) {
                return t[e]
            }
            ,
            e.matchSelector = function(t) {
                return function(e) {
                    return e[o](t)
                }
            }
            ,
            e.getQuerySelector = function(t) {
                var e = t.id
                    , n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(u)) {
                        var i = e.split(u)
                            , o = i[0];
                        if (r = i[1],
                        o !== document.documentElement.getAttribute(f))
                            return null
                    }
                    return '[data-w-id^="'.concat(r, '"]')
                }
                return n
            }
            ,
            e.getValidDocument = function(t) {
                if (null == t || t === document.documentElement.getAttribute(f))
                    return document;
                return null
            }
            ,
            e.queryDocument = function(t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
            }
            ,
            e.elementContains = function(t, e) {
                return t.contains(e)
            }
            ,
            e.isSiblingNode = function(t, e) {
                return t !== e && t.parentNode === e.parentNode
            }
            ,
            e.getChildElements = function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n].children
                        , o = i.length;
                    if (o)
                        for (var a = 0; a < o; a++)
                            e.push(i[a])
                }
                return e
            }
            ,
            e.getSiblingElements = function() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a; )
                            -1 === t.indexOf(a) && e.push(a),
                                a = a.nextElementSibling
                    }
                }
                return e
            }
            ,
            e.getRefType = function(t) {
                if (null != t && "object" == (0,
                    r.default)(t))
                    return t instanceof Element ? c : s;
                return null
            }
            ,
            e.getClosestElement = void 0;
        var i = n(2)
            , o = i.IX2BrowserSupport.ELEMENT_MATCHES
            , a = i.IX2EngineConstants
            , u = a.IX2_ID_DELIMITER
            , c = a.HTML_ELEMENT
            , s = a.PLAIN_OBJECT
            , f = a.WF_PAGE;
        var l = Element.prototype.closest ? function(t, e) {
                    return document.documentElement.contains(t) ? t.closest(e) : null
                }
                : function(t, e) {
                    if (!document.documentElement.contains(t))
                        return null;
                    var n = t;
                    do {
                        if (n[o] && n[o](e))
                            return n;
                        n = n.parentNode
                    } while (null != n);
                    return null
                }
        ;
        e.getClosestElement = l
    }
    , function(t, e, n) {
        "use strict";
        var r, i = n(0), o = i(n(14)), a = i(n(15)), u = n(0);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var c, s, f, l = u(n(26)), d = u(n(238)), p = u(n(23)), v = u(n(257)), h = n(93), E = n(50), _ = n(2), g = _.IX2EngineEventTypes, y = g.MOUSE_CLICK, I = g.MOUSE_SECOND_CLICK, m = g.MOUSE_DOWN, T = g.MOUSE_UP, O = g.MOUSE_OVER, S = g.MOUSE_OUT, A = g.DROPDOWN_CLOSE, b = g.DROPDOWN_OPEN, R = g.SLIDER_ACTIVE, w = g.SLIDER_INACTIVE, L = g.TAB_ACTIVE, N = g.TAB_INACTIVE, C = g.NAVBAR_CLOSE, x = g.NAVBAR_OPEN, D = g.MOUSE_MOVE, P = g.PAGE_SCROLL_DOWN, M = g.SCROLL_INTO_VIEW, F = g.COMPONENT_ACTIVE, j = g.COMPONENT_INACTIVE, G = g.SCROLL_OUT_OF_VIEW, X = g.PAGE_SCROLL_UP, V = g.SCROLLING_IN_VIEW, U = g.PAGE_FINISH, k = g.ECOMMERCE_CART_CLOSE, B = g.ECOMMERCE_CART_OPEN, H = g.PAGE_START, W = g.PAGE_SCROLL, Y = g.ELEMENT, z = g.VIEWPORT, K = g.PAGE, Q = _.IX2EngineConstants.COLON_DELIMITER, q = _.IX2VanillaUtils.getNamespacedParameterId, $ = function(t) {
            return function(e) {
                return !("object" !== (0,
                    a.default)(e) || !t(e)) || e
            }
        }, Z = $(function(t) {
            return t.element === t.nativeEvent.target
        }), J = $(function(t) {
            var e = t.element
                , n = t.nativeEvent;
            return e.contains(n.target)
        }), tt = (0,
            d.default)([Z, J]), et = function(t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !ct[n.eventTypeId])
                    return n
            }
            return null
        }, nt = function(t, e) {
            var n = t.store
                , r = t.event
                , i = t.element
                , o = t.eventStateKey
                , a = r.action
                , u = r.id
                , c = a.config
                , s = c.actionListId
                , f = c.autoStopEventId
                , l = et(n, f);
            return l && (0,
                h.stopActionGroup)({
                store: n,
                eventId: f,
                eventTarget: i,
                eventStateKey: f + Q + o.split(Q)[1],
                actionListId: (0,
                    p.default)(l, "action.config.actionListId")
            }),
                (0,
                    h.stopActionGroup)({
                    store: n,
                    eventId: u,
                    eventTarget: i,
                    eventStateKey: o,
                    actionListId: s
                }),
                (0,
                    h.startActionGroup)({
                    store: n,
                    eventId: u,
                    eventTarget: i,
                    eventStateKey: o,
                    actionListId: s
                }),
                e
        }, rt = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        }, it = {
            handler: rt(tt, nt)
        }, ot = (0,
            l.default)({}, it, {
            types: [F, j].join(" ")
        }), at = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], ut = {
            types: [{
                target: document,
                types: "scroll wheel",
                throttle: !0
            }]
        }, ct = {
            PAGE_START: H,
            PAGE_FINISH: U
        }, st = (c = void 0 !== window.pageXOffset,
                s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body,
                function() {
                    return {
                        scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                        scrollTop: c ? window.pageYOffset : s.scrollTop,
                        stiffScrollTop: (0,
                            v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                        scrollWidth: s.scrollWidth,
                        scrollHeight: s.scrollHeight,
                        clientWidth: s.clientWidth,
                        clientHeight: s.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight
                    }
                }
        ), ft = function(t) {
            var e = t.element
                , n = t.nativeEvent
                , r = n.type
                , i = n.target
                , o = n.relatedTarget
                , a = e.contains(i);
            if ("mouseover" === r && a)
                return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        }, lt = function(t) {
            var e, n, r = t.element, i = t.event.config, o = st(), a = o.clientWidth, u = o.clientHeight, c = i.scrollOffsetValue, s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(),
                n = {
                    left: 0,
                    top: s,
                    right: a,
                    bottom: u - s
                },
                !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        }, dt = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type
                    , i = -1 !== [F, j].indexOf(r) ? r === F : n.isActive
                    , o = (0,
                    l.default)({}, n, {
                    isActive: i
                });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        }, pt = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: ft(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        }, vt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , r = st()
                    , i = r.stiffScrollTop
                    , o = r.scrollHeight
                    , a = r.innerHeight
                    , u = e.event
                    , c = u.config
                    , s = u.eventTypeId
                    , f = c.scrollOffsetValue
                    , d = "PX" === c.scrollOffsetUnit
                    , p = o - a
                    , v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v)
                    return n;
                var h, E, _ = (d ? f : a * (f || 0) / 100) / p, g = 0;
                n && (h = v > n.percentTop,
                    g = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === P ? v >= g + _ : v <= g - _
                    , I = (0,
                    l.default)({}, n, {
                    percentTop: v,
                    inBounds: y,
                    anchorTop: g,
                    scrollingDown: h
                });
                return n && y && (E || I.inBounds !== n.inBounds) && t(e, I) || I
            }
        }, ht = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    clickCount: 0
                }
                    , r = {
                    clickCount: n.clickCount % 2 + 1
                };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        }, Et = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0,
                l.default)({}, ot, {
                handler: rt(t ? tt : Z, dt(function(t, e) {
                    return e.isActive ? it.handler(t, e) : e
                }))
            })
        }, _t = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0,
                l.default)({}, ot, {
                handler: rt(t ? tt : Z, dt(function(t, e) {
                    return e.isActive ? e : it.handler(t, e)
                }))
            })
        }, gt = (0,
            l.default)({}, ut, {
            handler: (f = function(t, e) {
                    var n = e.elementVisible
                        , r = t.event;
                    return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === M === n ? (nt(t),
                        (0,
                            l.default)({}, e, {
                            triggered: !0
                        })) : e
                }
                    ,
                    function(t, e) {
                        var n = (0,
                            l.default)({}, e, {
                            elementVisible: lt(t)
                        });
                        return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
                    }
            )
        }), yt = (r = {},
            (0,
                o.default)(r, R, Et()),
            (0,
                o.default)(r, w, _t()),
            (0,
                o.default)(r, b, Et()),
            (0,
                o.default)(r, A, _t()),
            (0,
                o.default)(r, x, Et(!1)),
            (0,
                o.default)(r, C, _t(!1)),
            (0,
                o.default)(r, L, Et()),
            (0,
                o.default)(r, N, _t()),
            (0,
                o.default)(r, B, {
                types: "ecommerce-cart-open",
                handler: rt(tt, nt)
            }),
            (0,
                o.default)(r, k, {
                types: "ecommerce-cart-close",
                handler: rt(tt, nt)
            }),
            (0,
                o.default)(r, y, {
                types: "click",
                handler: rt(tt, ht(function(t, e) {
                    var n, r, i, o = e.clickCount;
                    r = (n = t).store,
                        i = n.event.action.config.autoStopEventId,
                        Boolean(et(r, i)) ? 1 === o && nt(t) : nt(t)
                }))
            }),
            (0,
                o.default)(r, I, {
                types: "click",
                handler: rt(tt, ht(function(t, e) {
                    2 === e.clickCount && nt(t)
                }))
            }),
            (0,
                o.default)(r, m, (0,
                l.default)({}, it, {
                types: "mousedown"
            })),
            (0,
                o.default)(r, T, (0,
                l.default)({}, it, {
                types: "mouseup"
            })),
            (0,
                o.default)(r, O, {
                types: "mouseover mouseout",
                handler: rt(tt, pt(function(t, e) {
                    e.elementHovered && nt(t)
                }))
            }),
            (0,
                o.default)(r, S, {
                types: "mouseover mouseout",
                handler: rt(tt, pt(function(t, e) {
                    e.elementHovered || nt(t)
                }))
            }),
            (0,
                o.default)(r, D, {
                types: "mousemove mouseout scroll",
                handler: function(t) {
                    var e = t.store
                        , n = t.element
                        , r = t.eventConfig
                        , i = t.nativeEvent
                        , o = t.eventStateKey
                        , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }
                        , u = r.basedOn
                        , c = r.selectedAxis
                        , s = r.continuousParameterGroupId
                        , f = r.reverse
                        , l = r.restingState
                        , d = void 0 === l ? 0 : l
                        , p = i.clientX
                        , v = void 0 === p ? a.clientX : p
                        , h = i.clientY
                        , _ = void 0 === h ? a.clientY : h
                        , g = i.pageX
                        , y = void 0 === g ? a.pageX : g
                        , I = i.pageY
                        , m = void 0 === I ? a.pageY : I
                        , T = "X_AXIS" === c
                        , O = "mouseout" === i.type
                        , S = d / 100
                        , A = s
                        , b = !1;
                    switch (u) {
                        case z:
                            S = T ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                            break;
                        case K:
                            var R = st()
                                , w = R.scrollLeft
                                , L = R.scrollTop
                                , N = R.scrollWidth
                                , C = R.scrollHeight;
                            S = T ? Math.min(w + y, N) / N : Math.min(L + m, C) / C;
                            break;
                        case Y:
                        default:
                            A = q(o, s);
                            var x = 0 === i.type.indexOf("mouse");
                            if (x && !0 !== tt({
                                element: n,
                                nativeEvent: i
                            }))
                                break;
                            var D = n.getBoundingClientRect()
                                , P = D.left
                                , M = D.top
                                , F = D.width
                                , j = D.height;
                            if (!x && !function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: _
                            }, D))
                                break;
                            b = !0,
                                S = T ? (v - P) / F : (_ - M) / j
                    }
                    return O && (S > .95 || S < .05) && (S = Math.round(S)),
                    (u !== Y || b || b !== a.elementHovered) && (S = f ? 1 - S : S,
                        e.dispatch((0,
                            E.parameterChanged)(A, S))),
                        {
                            elementHovered: b,
                            clientX: v,
                            clientY: _,
                            pageX: y,
                            pageY: m
                        }
                }
            }),
            (0,
                o.default)(r, W, {
                types: at,
                handler: function(t) {
                    var e = t.store
                        , n = t.eventConfig
                        , r = n.continuousParameterGroupId
                        , i = n.reverse
                        , o = st()
                        , a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                    a = i ? 1 - a : a,
                        e.dispatch((0,
                            E.parameterChanged)(r, a))
                }
            }),
            (0,
                o.default)(r, V, {
                types: at,
                handler: function(t) {
                    var e = t.element
                        , n = t.store
                        , r = t.eventConfig
                        , i = t.eventStateKey
                        , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    }
                        , a = st()
                        , u = a.scrollLeft
                        , c = a.scrollTop
                        , s = a.scrollWidth
                        , f = a.scrollHeight
                        , l = a.clientHeight
                        , d = r.basedOn
                        , p = r.selectedAxis
                        , v = r.continuousParameterGroupId
                        , h = r.startsEntering
                        , _ = r.startsExiting
                        , g = r.addEndOffset
                        , y = r.addStartOffset
                        , I = r.addOffsetValue
                        , m = void 0 === I ? 0 : I
                        , T = r.endOffsetValue
                        , O = void 0 === T ? 0 : T;
                    if (d === z) {
                        var S = "X_AXIS" === p ? u / s : c / f;
                        return S !== o.scrollPercent && n.dispatch((0,
                            E.parameterChanged)(v, S)),
                            {
                                scrollPercent: S
                            }
                    }
                    var A = q(i, v)
                        , b = e.getBoundingClientRect()
                        , R = (y ? m : 0) / 100
                        , w = (g ? O : 0) / 100;
                    R = h ? R : 1 - R,
                        w = _ ? w : 1 - w;
                    var L = b.top + Math.min(b.height * R, l)
                        , N = b.top + b.height * w - L
                        , C = Math.min(l + N, f)
                        , x = Math.min(Math.max(0, l - L), C) / C;
                    return x !== o.scrollPercent && n.dispatch((0,
                        E.parameterChanged)(A, x)),
                        {
                            scrollPercent: x
                        }
                }
            }),
            (0,
                o.default)(r, M, gt),
            (0,
                o.default)(r, G, gt),
            (0,
                o.default)(r, P, (0,
                l.default)({}, ut, {
                handler: vt(function(t, e) {
                    e.scrollingDown && nt(t)
                })
            })),
            (0,
                o.default)(r, X, (0,
                l.default)({}, ut, {
                handler: vt(function(t, e) {
                    e.scrollingDown || nt(t)
                })
            })),
            (0,
                o.default)(r, U, {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: rt(Z, function(t) {
                    return function(e, n) {
                        var r = {
                            finished: "complete" === document.readyState
                        };
                        return !r.finished || n && n.finshed || t(e),
                            r
                    }
                }(nt))
            }),
            (0,
                o.default)(r, H, {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: rt(Z, function(t) {
                    return function(e, n) {
                        return n || t(e),
                            {
                                started: !0
                            }
                    }
                }(nt))
            }),
            r);
        e.default = yt
    }
    , function(t, e, n) {
        var r = n(239)();
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(51)
            , i = n(240)
            , o = n(98)
            , a = n(99)
            , u = n(1)
            , c = n(253)
            , s = "Expected a function"
            , f = 8
            , l = 32
            , d = 128
            , p = 256;
        t.exports = function(t) {
            return i(function(e) {
                var n = e.length
                    , i = n
                    , v = r.prototype.thru;
                for (t && e.reverse(); i--; ) {
                    var h = e[i];
                    if ("function" != typeof h)
                        throw new TypeError(s);
                    if (v && !E && "wrapper" == a(h))
                        var E = new r([],!0)
                }
                for (i = E ? i : n; ++i < n; ) {
                    h = e[i];
                    var _ = a(h)
                        , g = "wrapper" == _ ? o(h) : void 0;
                    E = g && c(g[0]) && g[1] == (d | f | l | p) && !g[4].length && 1 == g[9] ? E[a(g[0])].apply(E, g[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
                }
                return function() {
                    var t = arguments
                        , r = t[0];
                    if (E && 1 == t.length && u(r))
                        return E.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                        o = e[i].call(this, o);
                    return o
                }
            })
        }
    }
    , function(t, e, n) {
        var r = n(241)
            , i = n(244)
            , o = n(246);
        t.exports = function(t) {
            return o(i(t, void 0, r), t + "")
        }
    }
    , function(t, e, n) {
        var r = n(242);
        t.exports = function(t) {
            return null != t && t.length ? r(t, 1) : []
        }
    }
    , function(t, e, n) {
        var r = n(35)
            , i = n(243);
        t.exports = function t(e, n, o, a, u) {
            var c = -1
                , s = e.length;
            for (o || (o = i),
                 u || (u = []); ++c < s; ) {
                var f = e[c];
                n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
            }
            return u
        }
    }
    , function(t, e, n) {
        var r = n(11)
            , i = n(22)
            , o = n(1)
            , a = r ? r.isConcatSpreadable : void 0;
        t.exports = function(t) {
            return o(t) || i(t) || !!(a && t && t[a])
        }
    }
    , function(t, e, n) {
        var r = n(245)
            , i = Math.max;
        t.exports = function(t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u; )
                        c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; )
                        s[a] = o[a];
                    return s[e] = n(c),
                        r(t, this, s)
                }
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }
    }
    , function(t, e, n) {
        var r = n(247)
            , i = n(249)(r);
        t.exports = i
    }
    , function(t, e, n) {
        var r = n(248)
            , i = n(95)
            , o = n(45)
            , a = i ? function(t, e) {
                return i(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                })
            }
            : o;
        t.exports = a
    }
    , function(t, e) {
        t.exports = function(t) {
            return function() {
                return t
            }
        }
    }
    , function(t, e) {
        var n = 800
            , r = 16
            , i = Date.now;
        t.exports = function(t) {
            var e = 0
                , o = 0;
            return function() {
                var a = i()
                    , u = r - (a - o);
                if (o = a,
                u > 0) {
                    if (++e >= n)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(void 0, arguments)
            }
        }
    }
    , function(t, e, n) {
        var r = n(77)
            , i = r && new r;
        t.exports = i
    }
    , function(t, e) {
        t.exports = function() {}
    }
    , function(t, e) {
        t.exports = {}
    }
    , function(t, e, n) {
        var r = n(53)
            , i = n(98)
            , o = n(99)
            , a = n(254);
        t.exports = function(t) {
            var e = o(t)
                , n = a[e];
            if ("function" != typeof n || !(e in r.prototype))
                return !1;
            if (t === n)
                return !0;
            var u = i(n);
            return !!u && t === u[0]
        }
    }
    , function(t, e, n) {
        var r = n(53)
            , i = n(51)
            , o = n(52)
            , a = n(1)
            , u = n(8)
            , c = n(255)
            , s = Object.prototype.hasOwnProperty;
        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i)
                    return t;
                if (s.call(t, "__wrapped__"))
                    return c(t)
            }
            return new i(t)
        }
        f.prototype = o.prototype,
            f.prototype.constructor = f,
            t.exports = f
    }
    , function(t, e, n) {
        var r = n(53)
            , i = n(51)
            , o = n(256);
        t.exports = function(t) {
            if (t instanceof r)
                return t.clone();
            var e = new i(t.__wrapped__,t.__chain__);
            return e.__actions__ = o(t.__actions__),
                e.__index__ = t.__index__,
                e.__values__ = t.__values__,
                e
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var n = -1
                , r = t.length;
            for (e || (e = Array(r)); ++n < r; )
                e[n] = t[n];
            return e
        }
    }
    , function(t, e, n) {
        var r = n(96)
            , i = n(47);
        t.exports = function(t, e, n) {
            return void 0 === n && (n = e,
                e = void 0),
            void 0 !== n && (n = (n = i(n)) == n ? n : 0),
            void 0 !== e && (e = (e = i(e)) == e ? e : 0),
                r(i(t), e, n)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5);
        r.define("links", t.exports = function(t, e) {
                var n, i, o, a = {}, u = t(window), c = r.env(), s = window.location, f = document.createElement("a"), l = "w--current", d = /index\.(html|php)$/, p = /\/$/;
                function v(e) {
                    var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
                    if (f.href = r,
                        !(r.indexOf(":") >= 0)) {
                        var a = t(e);
                        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash))
                                return;
                            var u = t(f.hash);
                            u.length && i.push({
                                link: a,
                                sec: u,
                                active: !1
                            })
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                            E(a, l, c)
                        }
                    }
                }
                function h() {
                    var t = u.scrollTop()
                        , n = u.height();
                    e.each(i, function(e) {
                        var r = e.link
                            , i = e.sec
                            , o = i.offset().top
                            , a = i.outerHeight()
                            , u = .5 * n
                            , c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && (e.active = c,
                            E(r, l, c))
                    })
                }
                function E(t, e, n) {
                    var r = t.hasClass(e);
                    n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
                }
                return a.ready = a.design = a.preview = function() {
                    n = c && r.env("design"),
                        o = r.env("slug") || s.pathname || "",
                        r.scroll.off(h),
                        i = [];
                    for (var t = document.links, e = 0; e < t.length; ++e)
                        v(t[e]);
                    i.length && (r.scroll.on(h),
                        h())
                }
                    ,
                    a
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5);
        r.define("scroll", t.exports = function(t) {
                var e = t(document)
                    , n = window
                    , i = n.location
                    , o = function() {
                    try {
                        return Boolean(n.frameElement)
                    } catch (t) {
                        return !0
                    }
                }() ? null : n.history
                    , a = /^[a-zA-Z0-9][\w:.-]*$/;
                return {
                    ready: function() {
                        var u = i.href.split("#")[0];
                        e.on("click", "a", function(e) {
                            if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
                                if ("#" !== this.getAttribute("href")) {
                                    var c = this.href.split("#")
                                        , s = c[0] === u ? c[1] : null;
                                    s && function(e, u) {
                                        if (a.test(e)) {
                                            var c = t("#" + e);
                                            if (c.length) {
                                                if (u && (u.preventDefault(),
                                                    u.stopPropagation()),
                                                i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol)) {
                                                    var s = o.state && o.state.hash;
                                                    s !== e && o.pushState({
                                                        hash: e
                                                    }, "", "#" + e)
                                                }
                                                var f = r.env("editor") ? ".w-editor-body" : "body"
                                                    , l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])")
                                                    , d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                                                n.setTimeout(function() {
                                                    !function(e, r) {
                                                        var i = t(n).scrollTop()
                                                            , o = e.offset().top - r;
                                                        if ("mid" === e.data("scroll")) {
                                                            var a = t(n).height() - r
                                                                , u = e.outerHeight();
                                                            u < a && (o -= Math.round((a - u) / 2))
                                                        }
                                                        var c = 1;
                                                        t("body").add(e).each(function() {
                                                            var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                            !isNaN(e) && (0 === e || e > 0) && (c = e)
                                                        }),
                                                        Date.now || (Date.now = function() {
                                                                return (new Date).getTime()
                                                            }
                                                        );
                                                        var s = Date.now()
                                                            , f = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function(t) {
                                                            n.setTimeout(t, 15)
                                                        }
                                                            , l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
                                                        !function t() {
                                                            var e = Date.now() - s;
                                                            n.scroll(0, function(t, e, n, r) {
                                                                return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                                                var i
                                                            }(i, o, e, l)),
                                                            e <= l && f(t)
                                                        }()
                                                    }(c, d)
                                                }, u ? 0 : 300)
                                            }
                                        }
                                    }(s, e)
                                } else
                                    e.preventDefault()
                        })
                    }
                }
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        n(5).define("touch", t.exports = function(t) {
                var e = {}
                    , n = !document.addEventListener
                    , r = window.getSelection;
                function i(t) {
                    var e, n, i, a = !1, u = !1, c = !1, s = Math.min(Math.round(.04 * window.innerWidth), 40);
                    function f(t) {
                        var r = t.touches;
                        r && r.length > 1 || (a = !0,
                            u = !1,
                            r ? (c = !0,
                                e = r[0].clientX,
                                n = r[0].clientY) : (e = t.clientX,
                                n = t.clientY),
                            i = e)
                    }
                    function l(t) {
                        if (a) {
                            if (c && "mousemove" === t.type)
                                return t.preventDefault(),
                                    void t.stopPropagation();
                            var f = t.touches
                                , l = f ? f[0].clientX : t.clientX
                                , d = f ? f[0].clientY : t.clientY
                                , v = l - i;
                            i = l,
                            Math.abs(v) > s && r && "" === String(r()) && (o("swipe", t, {
                                direction: v > 0 ? "right" : "left"
                            }),
                                p()),
                            (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0)
                        }
                    }
                    function d(t) {
                        if (a) {
                            if (a = !1,
                            c && "mouseup" === t.type)
                                return t.preventDefault(),
                                    t.stopPropagation(),
                                    void (c = !1);
                            u || o("tap", t)
                        }
                    }
                    function p() {
                        a = !1
                    }
                    t.addEventListener("touchstart", f, !1),
                        t.addEventListener("touchmove", l, !1),
                        t.addEventListener("touchend", d, !1),
                        t.addEventListener("touchcancel", p, !1),
                        t.addEventListener("mousedown", f, !1),
                        t.addEventListener("mousemove", l, !1),
                        t.addEventListener("mouseup", d, !1),
                        t.addEventListener("mouseout", p, !1),
                        this.destroy = function() {
                            t.removeEventListener("touchstart", f, !1),
                                t.removeEventListener("touchmove", l, !1),
                                t.removeEventListener("touchend", d, !1),
                                t.removeEventListener("touchcancel", p, !1),
                                t.removeEventListener("mousedown", f, !1),
                                t.removeEventListener("mousemove", l, !1),
                                t.removeEventListener("mouseup", d, !1),
                                t.removeEventListener("mouseout", p, !1),
                                t = null
                        }
                }
                function o(e, n, r) {
                    var i = t.Event(e, {
                        originalEvent: n
                    });
                    t(n.target).trigger(i, r)
                }
                return n && (t.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }),
                    e.init = function(e) {
                        return n ? null : (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
                    }
                    ,
                    e.instance = e.init(document),
                    e
            }
        )
    }
    , function(t, e, n) {
        "use strict";
        var r = n(5)
            , i = n(55);
        r.define("navbar", t.exports = function(t, e) {
                var n, o, a, u, c = {}, s = t.tram, f = t(window), l = t(document), d = r.env(), p = '<div class="w-nav-overlay" data-wf-ignore />', v = ".w-nav", h = "w--open", E = "w--nav-menu-open", _ = "w--nav-link-open", g = i.triggers, y = t();
                function I() {
                    r.resize.off(m)
                }
                function m() {
                    o.each(w)
                }
                function T(n, i) {
                    var o = t(i)
                        , c = t.data(i, v);
                    c || (c = t.data(i, v, {
                        open: !1,
                        el: o,
                        config: {}
                    })),
                        c.menu = o.find(".w-nav-menu"),
                        c.links = c.menu.find(".w-nav-link"),
                        c.dropdowns = c.menu.find(".w-dropdown"),
                        c.button = o.find(".w-nav-button"),
                        c.container = o.find(".w-container"),
                        c.outside = function(e) {
                            e.outside && l.off("tap" + v, e.outside);
                            return function(n) {
                                var r = t(n.target);
                                u && r.closest(".w-editor-bem-EditorOverlay").length || R(e, r)
                            }
                        }(c),
                        c.el.off(v),
                        c.button.off(v),
                        c.menu.off(v),
                        A(c),
                        a ? (S(c),
                            c.el.on("setting" + v, function(t) {
                                return function(n, r) {
                                    r = r || {};
                                    var i = f.width();
                                    A(t),
                                    !0 === r.open && N(t, !0),
                                    !1 === r.open && x(t, !0),
                                    t.open && e.defer(function() {
                                        i !== f.width() && b(t)
                                    })
                                }
                            }(c))) : (!function(e) {
                            if (e.overlay)
                                return;
                            e.overlay = t(p).appendTo(e.el),
                                e.parent = e.menu.parent(),
                                x(e, !0)
                        }(c),
                            c.button.on("tap" + v, function(t) {
                                return e.debounce(function() {
                                    t.open ? x(t) : N(t)
                                })
                            }(c)),
                            c.menu.on("click" + v, "a", function(e) {
                                return function(n) {
                                    var i = t(this)
                                        , o = i.attr("href");
                                    r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && x(e) : n.preventDefault()
                                }
                            }(c))),
                        w(n, i)
                }
                function O(e, n) {
                    var r = t.data(n, v);
                    r && (S(r),
                        t.removeData(n, v))
                }
                function S(t) {
                    t.overlay && (x(t, !0),
                        t.overlay.remove(),
                        t.overlay = null)
                }
                function A(t) {
                    var n = {}
                        , r = t.config || {}
                        , i = n.animation = t.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(i),
                        n.animDirect = /left$/.test(i) ? -1 : 1,
                    r.animation !== i && t.open && e.defer(b, t),
                        n.easing = t.el.attr("data-easing") || "ease",
                        n.easing2 = t.el.attr("data-easing2") || "ease";
                    var o = t.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400,
                        n.docHeight = t.el.attr("data-doc-height"),
                        t.config = n
                }
                function b(t) {
                    t.open && (x(t, !0),
                        N(t, !0))
                }
                c.ready = c.design = c.preview = function() {
                    if (a = d && r.env("design"),
                        u = r.env("editor"),
                        n = t(document.body),
                        !(o = l.find(v)).length)
                        return;
                    o.each(T),
                        I(),
                        r.resize.on(m)
                }
                    ,
                    c.destroy = function() {
                        y = t(),
                            I(),
                        o && o.length && o.each(O)
                    }
                ;
                var R = e.debounce(function(t, e) {
                    if (t.open) {
                        var n = e.closest(".w-nav-menu");
                        t.menu.is(n) || x(t)
                    }
                });
                function w(e, n) {
                    var r = t.data(n, v)
                        , i = r.collapsed = "none" !== r.button.css("display");
                    if (!r.open || i || a || x(r, !0),
                        r.container.length) {
                        var o = function(e) {
                            var n = e.container.css(L);
                            "none" === n && (n = "");
                            return function(e, r) {
                                (r = t(r)).css(L, ""),
                                "none" === r.css(L) && r.css(L, n)
                            }
                        }(r);
                        r.links.each(o),
                            r.dropdowns.each(o)
                    }
                    r.open && C(r)
                }
                var L = "max-width";
                function N(t, e) {
                    if (!t.open) {
                        t.open = !0,
                            t.menu.addClass(E),
                            t.links.addClass(_),
                            t.button.addClass(h);
                        var n = t.config;
                        "none" !== n.animation && s.support.transform || (e = !0);
                        var i = C(t)
                            , o = t.menu.outerHeight(!0)
                            , u = t.menu.outerWidth(!0)
                            , c = t.el.height()
                            , f = t.el[0];
                        if (w(0, f),
                            g.intro(0, f),
                            r.redraw.up(),
                        a || l.on("tap" + v, t.outside),
                            !e) {
                            var d = "transform " + n.duration + "ms " + n.easing;
                            if (t.overlay && (y = t.menu.prev(),
                                t.overlay.show().append(t.menu)),
                                n.animOver)
                                return s(t.menu).add(d).set({
                                    x: n.animDirect * u,
                                    height: i
                                }).start({
                                    x: 0
                                }),
                                    void (t.overlay && t.overlay.width(u));
                            var p = c + o;
                            s(t.menu).add(d).set({
                                y: -p
                            }).start({
                                y: 0
                            })
                        }
                    }
                }
                function C(t) {
                    var e = t.config
                        , r = e.docHeight ? l.height() : n.height();
                    return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.height()),
                    t.overlay && t.overlay.height(r),
                        r
                }
                function x(t, e) {
                    if (t.open) {
                        t.open = !1,
                            t.button.removeClass(h);
                        var n = t.config;
                        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (e = !0),
                            g.outro(0, t.el[0]),
                            l.off("tap" + v, t.outside),
                            e)
                            return s(t.menu).stop(),
                                void c();
                        var r = "transform " + n.duration + "ms " + n.easing2
                            , i = t.menu.outerHeight(!0)
                            , o = t.menu.outerWidth(!0)
                            , a = t.el.height();
                        if (n.animOver)
                            s(t.menu).add(r).start({
                                x: o * n.animDirect
                            }).then(c);
                        else {
                            var u = a + i;
                            s(t.menu).add(r).start({
                                y: -u
                            }).then(c)
                        }
                    }
                    function c() {
                        t.menu.height(""),
                            s(t.menu).set({
                                x: 0,
                                y: 0
                            }),
                            t.menu.removeClass(E),
                            t.links.removeClass(_),
                        t.overlay && t.overlay.children().length && (y.length ? t.menu.insertAfter(y) : t.menu.prependTo(t.parent),
                            t.overlay.attr("style", "").hide()),
                            t.el.triggerHandler("w-close")
                    }
                }
                return c
            }
        )
    }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "link-arrow",
    "name": "Link Arrow",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "fade-up-1",
    "name": "Fade Up 1",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "60px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "0%",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 900ms ease 0, opacity 600ms ease 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-up-2",
    "name": "Fade Up 2",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "60px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "0%",
            "stepsA": [{
                "wait": "200ms"
            }, {
                "opacity": 1,
                "transition": "transform 900ms ease 0, opacity 600ms ease 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "fade-up-3",
    "name": "Fade Up 3",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "60px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "0%",
            "stepsA": [{
                "wait": "400ms"
            }, {
                "opacity": 1,
                "transition": "transform 900ms ease 0, opacity 600ms ease 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "team-member-color-card",
    "name": "Team Member Color Card",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".team-member-color-photo",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 300ms ease 0",
                "x": "40px",
                "y": "-40px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 300ms ease 0",
                "x": "40px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "hover",
            "stepsA": [{
                "transition": "transform 300ms ease 0",
                "x": "-20px",
                "y": "20px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 300ms ease 0",
                "x": "-20px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "load",
            "selector": ".team-member-color-photo",
            "preserve3d": true,
            "stepsA": [{
                "x": "40px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "stepsA": [{
                "x": "-20px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a2984456f1dc42b4|c3badac1-a5f7-0226-0849-d8adf44cb28a"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1559328022006
        },
        "e-2": {
            "id": "e-2",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a2984456f1dc42b4|c3badac1-a5f7-0226-0849-d8adf44cb28a"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1559328022006
        },
        "e-17": {
            "id": "e-17",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|edeb5d7a-0b33-218b-a349-81b260335b49"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561575278977
        },
        "e-23": {
            "id": "e-23",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|bd0d3a68-ba8f-e865-19a3-98ae94460ed7"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561577071251
        },
        "e-25": {
            "id": "e-25",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|1559ddb2-6311-dac7-412f-dd7dcd6339fa"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561578023919
        },
        "e-27": {
            "id": "e-27",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|1559ddb2-6311-dac7-412f-dd7dcd6339fc"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561578023919
        },
        "e-29": {
            "id": "e-29",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|1559ddb2-6311-dac7-412f-dd7dcd6339fd"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561578023919
        },
        "e-33": {
            "id": "e-33",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
            },
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534095609870
        },
        "e-48": {
            "id": "e-48",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|bd0d3a68-ba8f-e865-19a3-98ae94460ed7"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561580849648
        },
        "e-50": {
            "id": "e-50",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|1559ddb2-6311-dac7-412f-dd7dcd6339fa"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561580849648
        },
        "e-52": {
            "id": "e-52",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|1559ddb2-6311-dac7-412f-dd7dcd6339fc"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561580849648
        },
        "e-54": {
            "id": "e-54",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|1559ddb2-6311-dac7-412f-dd7dcd6339fd"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561580849648
        },
        "e-58": {
            "id": "e-58",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
            },
            "config": [{
                "continuousParameterGroupId": "a-7-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1561580849648
        },
        "e-61": {
            "id": "e-61",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|aff9d9c9-0aa9-de07-68b9-2f121bda0578"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663070189
        },
        "e-63": {
            "id": "e-63",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|aff9d9c9-0aa9-de07-68b9-2f121bda0579"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663070189
        },
        "e-65": {
            "id": "e-65",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|aff9d9c9-0aa9-de07-68b9-2f121bda0580"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663070189
        },
        "e-66": {
            "id": "e-66",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|aff9d9c9-0aa9-de07-68b9-2f121bda0580"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663070189
        },
        "e-67": {
            "id": "e-67",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|b707bce8-f570-c10c-1cba-6903e8c83026"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663117020
        },
        "e-68": {
            "id": "e-68",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|b707bce8-f570-c10c-1cba-6903e8c83026"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663117020
        },
        "e-69": {
            "id": "e-69",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|6402d4dc-e848-5342-6b22-c592667d0629"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663304491
        },
        "e-71": {
            "id": "e-71",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|46806692-4dc0-36d1-9fea-7c7b697ec69b"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663638452
        },
        "e-73": {
            "id": "e-73",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|46806692-4dc0-36d1-9fea-7c7b697ec69c"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663638452
        },
        "e-77": {
            "id": "e-77",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|46806692-4dc0-36d1-9fea-7c7b697ec6b0"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663638452
        },
        "e-78": {
            "id": "e-78",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|46806692-4dc0-36d1-9fea-7c7b697ec6b0"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663638452
        },
        "e-79": {
            "id": "e-79",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|46806692-4dc0-36d1-9fea-7c7b697ec6b4"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561663638452
        },
        "e-85": {
            "id": "e-85",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|20b85066-c028-4755-0639-79de1e98925e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561737395915
        },
        "e-86": {
            "id": "e-86",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|20b85066-c028-4755-0639-79de1e98925e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561737395915
        },
        "e-87": {
            "id": "e-87",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|20b85066-c028-4755-0639-79de1e989262"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561737395915
        },
        "e-88": {
            "id": "e-88",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|20b85066-c028-4755-0639-79de1e989262"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561737395915
        },
        "e-89": {
            "id": "e-89",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|8c6a3aa3-2fa8-fcdf-e98d-a788536f7cd8"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1561737549431
        },
        "e-91": {
            "id": "e-91",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3"
            },
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1561739613772
        },
        "e-92": {
            "id": "e-92",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af"
            },
            "config": [{
                "continuousParameterGroupId": "a-10-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1561740150469
        },
        "e-93": {
            "id": "e-93",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1562356553256
        },
        "e-95": {
            "id": "e-95",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|ba160b3d-7f5d-8dd8-b505-29c0366b0b7e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1562950939281
        },
        "e-96": {
            "id": "e-96",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|ba160b3d-7f5d-8dd8-b505-29c0366b0b7e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1562950939281
        },
        "e-97": {
            "id": "e-97",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|25ff7893-a32f-41c7-95e8-304f175cf5d9"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563282856621
        },
        "e-98": {
            "id": "e-98",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|25ff7893-a32f-41c7-95e8-304f175cf5d9"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563282856622
        },
        "e-99": {
            "id": "e-99",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|b001fb7c-83ab-3064-b045-23b0c5a0d08f"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286203080
        },
        "e-100": {
            "id": "e-100",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|b001fb7c-83ab-3064-b045-23b0c5a0d08f"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286203082
        },
        "e-101": {
            "id": "e-101",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|55cd2836-5762-6f3d-f6f9-4ea51f576b00"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286374713
        },
        "e-102": {
            "id": "e-102",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|55cd2836-5762-6f3d-f6f9-4ea51f576b00"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286374714
        },
        "e-103": {
            "id": "e-103",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|10953975-2122-7bb8-509e-ecda581d1c45"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286393524
        },
        "e-104": {
            "id": "e-104",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|10953975-2122-7bb8-509e-ecda581d1c45"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286393526
        },
        "e-105": {
            "id": "e-105",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|c1af87f2-f4a5-fd7c-fd4f-d17f48c457c7"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286411414
        },
        "e-106": {
            "id": "e-106",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|c1af87f2-f4a5-fd7c-fd4f-d17f48c457c7"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286411416
        },
        "e-107": {
            "id": "e-107",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|f345f837-6e24-8ca9-2409-1232ddfb0f74"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286424614
        },
        "e-108": {
            "id": "e-108",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|f345f837-6e24-8ca9-2409-1232ddfb0f74"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563286424615
        },
        "e-109": {
            "id": "e-109",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-member-photo",
                "originalId": "5d2f4589a298443cebdc42af|b001fb7c-83ab-3064-b045-23b0c5a0d08f",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563292024120
        },
        "e-111": {
            "id": "e-111",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298443cebdc42af|213f647a-c8a1-fad5-1ecb-a6d2c3420e33"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563372529499
        },
        "e-113": {
            "id": "e-113",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|5119b6c4-38d4-c3d2-35cf-5cff76ee6077"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563378968817
        },
        "e-115": {
            "id": "e-115",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d64a"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-116": {
            "id": "e-116",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d64a"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-117": {
            "id": "e-117",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d653"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-118": {
            "id": "e-118",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d653"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-119": {
            "id": "e-119",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d65c"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-120": {
            "id": "e-120",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d65c"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-121": {
            "id": "e-121",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d665"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-122": {
            "id": "e-122",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d665"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-123": {
            "id": "e-123",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d66e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-124": {
            "id": "e-124",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d66e"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-125": {
            "id": "e-125",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d677"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        },
        "e-126": {
            "id": "e-126",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5d2f4589a298446822dc42b3|29c1e063-6423-70e6-450b-62e1ea67d677"
            },
            "config": {
                "loop": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1563379009457
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Button Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-square",
                            "selectorGuids": ["e5f0656e-01b6-2042-1043-f699a193831e"]
                        },
                        "widthValue": 3,
                        "heightValue": 3,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-square",
                            "selectorGuids": ["e5f0656e-01b6-2042-1043-f699a193831e"]
                        },
                        "widthValue": 100,
                        "heightValue": 1,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1559240328706,
            "useFirstGroupAsInitialState": false
        },
        "a-2": {
            "id": "a-2",
            "title": "Button Hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inSine",
                        "duration": 200,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-square",
                            "selectorGuids": ["e5f0656e-01b6-2042-1043-f699a193831e"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inSine",
                        "duration": 100,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-square",
                            "selectorGuids": ["e5f0656e-01b6-2042-1043-f699a193831e"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO"
                    }
                }]
            }],
            "createdOn": 1559240606044,
            "useFirstGroupAsInitialState": false
        },
        "a-5": {
            "id": "a-5",
            "title": "Fade-in Reusable",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "5b27d1186a347d0ff3981ae0|ca2ae43e-4aa9-82c7-d1be-9d9bca47770e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "5b27d1186a347d0ff3981ae0|ca2ae43e-4aa9-82c7-d1be-9d9bca47770e"
                        },
                        "yValue": 60,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5b27d1186a347d0ff3981ae0|ca2ae43e-4aa9-82c7-d1be-9d9bca47770e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5b27d1186a347d0ff3981ae0|ca2ae43e-4aa9-82c7-d1be-9d9bca47770e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1515004948218,
            "useFirstGroupAsInitialState": true
        },
        "a-6": {
            "id": "a-6",
            "title": "rotate-image",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
                            },
                            "zValue": 180,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1534095613845
        },
        "a-7": {
            "id": "a-7",
            "title": "rotate-image 2",
            "continuousParameterGroups": [{
                "id": "a-7-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|ddd67ef0-8e9e-539d-4d15-90b5f8a1c01e"
                            },
                            "zValue": 180,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1534095613845
        },
        "a-8": {
            "id": "a-8",
            "title": "Cream  Nav Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "heightValue": 300,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-8",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "rValue": 244,
                            "gValue": 228,
                            "bValue": 222,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-8-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3d"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-8-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e4a"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-8-n-3",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "heightValue": 120,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3d"
                            },
                            "xValue": 0.4,
                            "yValue": 0.4,
                            "locked": true
                        }
                    }, {
                        "id": "a-8-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e4a"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-8-n-9",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "3a5b0d9b",
                            "target": {
                                "id": "5d2f4589a298446822dc42b3|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "rValue": 244,
                            "gValue": 228,
                            "bValue": 222,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1561739621788
        },
        "a-10": {
            "id": "a-10",
            "title": "Dark Nav Scroll Animation 2",
            "continuousParameterGroups": [{
                "id": "a-10-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-10-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "heightValue": 100,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }, {
                        "id": "a-10-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 0
                        }
                    }, {
                        "id": "a-10-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                            },
                            "xValue": 0.4,
                            "yValue": 0.4,
                            "locked": true
                        }
                    }, {
                        "id": "a-10-n-12",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e4a"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|cbfe2ce1-1878-fe06-f49c-8fca84452e3d"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".nav-menu",
                                "selectorGuids": ["406d4364-9579-a30c-65cb-9e267b67f81f"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-10-n-3",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "heightValue": 100,
                            "widthUnit": "PX",
                            "heightUnit": "PX"
                        }
                    }, {
                        "id": "a-10-n-5",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3b"
                            },
                            "rValue": 22,
                            "gValue": 22,
                            "bValue": 22,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-10-n-7",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                            },
                            "xValue": 0.4,
                            "yValue": 0.4,
                            "locked": true
                        }
                    }, {
                        "id": "a-10-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e4a"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|cbfe2ce1-1878-fe06-f49c-8fca84452e3d"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-10-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".nav-menu",
                                "selectorGuids": ["406d4364-9579-a30c-65cb-9e267b67f81f"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1561740409902
        },
        "a-11": {
            "id": "a-11",
            "title": "Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|1520a37f-7600-e6e4-54d1-37bfe9ea5c05"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|5fb01fde-8280-f16b-670a-575f399c16f2"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7120cb52-82e2-6f82-c556-5ce58dae8644"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|1c4efa33-1205-3778-0b86-8678a9665198"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|a5edbfe4-a20e-0523-8dd8-268714390ab9"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|0234df8c-2ef6-c7cb-6d63-0124a47b79e9"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-14",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|6776a482-65b1-fc46-099a-334028ad2f82"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                        },
                        "xValue": 1.5,
                        "yValue": 1.5,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["406d4364-9579-a30c-65cb-9e267b67f81f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".curl.left",
                            "selectorGuids": ["8af2e936-4637-067a-90a2-da5f363932e3", "3e8906a7-97c0-a6d9-44a5-043eff310084"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".curl.right",
                            "selectorGuids": ["8af2e936-4637-067a-90a2-da5f363932e3", "fee6b394-f48c-7b1e-ff91-e33a96e8fba5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-content-center",
                            "selectorGuids": ["869d1a67-d593-d7b8-0418-6124ba708a23"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-26",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-content-center",
                            "selectorGuids": ["869d1a67-d593-d7b8-0418-6124ba708a23"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-22",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|b1a7418f-300c-9fc8-7c13-5176700d9e47"
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "VH"
                    }
                }, {
                    "id": "a-11-n-32",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|b02f2bec-9b0e-a685-6761-bfc0f134e3fb"
                        }
                    }
                }, {
                    "id": "a-11-n-33",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|cbfe2ce1-1878-fe06-f49c-8fca84452e3d"
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|5fb01fde-8280-f16b-670a-575f399c16f2"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-15",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|6776a482-65b1-fc46-099a-334028ad2f82"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|a5edbfe4-a20e-0523-8dd8-268714390ab9"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|1c4efa33-1205-3778-0b86-8678a9665198"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|1520a37f-7600-e6e4-54d1-37bfe9ea5c05"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7120cb52-82e2-6f82-c556-5ce58dae8644"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1200,
                        "easing": "ease",
                        "duration": 400,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|0234df8c-2ef6-c7cb-6d63-0124a47b79e9"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-23",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|b1a7418f-300c-9fc8-7c13-5176700d9e47"
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "VH"
                    }
                }, {
                    "id": "a-11-n-24",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 400,
                        "easing": "easeOut",
                        "duration": 300,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                        },
                        "xValue": 0.4,
                        "yValue": 0.4,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "easeOut",
                        "duration": 300,
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|7e185542-5e80-813f-faba-47493ddb7e3e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-menu",
                            "selectorGuids": ["406d4364-9579-a30c-65cb-9e267b67f81f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".curl.left",
                            "selectorGuids": ["8af2e936-4637-067a-90a2-da5f363932e3", "3e8906a7-97c0-a6d9-44a5-043eff310084"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".curl.right",
                            "selectorGuids": ["8af2e936-4637-067a-90a2-da5f363932e3", "fee6b394-f48c-7b1e-ff91-e33a96e8fba5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-content-center",
                            "selectorGuids": ["869d1a67-d593-d7b8-0418-6124ba708a23"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-28",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-content-center",
                            "selectorGuids": ["869d1a67-d593-d7b8-0418-6124ba708a23"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-34",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 600,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "id": "5d2f4589a298443cebdc42af|cbfe2ce1-1878-fe06-f49c-8fca84452e3d"
                        }
                    }
                }]
            }],
            "createdOn": 1562356601777,
            "useFirstGroupAsInitialState": true
        },
        "a-12": {
            "id": "a-12",
            "title": "Team Photo Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image-hover",
                            "selectorGuids": ["6ed9942d-a3e6-5e31-5ca0-ac36755ee84a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image-hover",
                            "selectorGuids": ["6ed9942d-a3e6-5e31-5ca0-ac36755ee84a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1563282864880,
            "useFirstGroupAsInitialState": true
        },
        "a-13": {
            "id": "a-13",
            "title": "Team Photo Animation Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image-hover",
                            "selectorGuids": ["6ed9942d-a3e6-5e31-5ca0-ac36755ee84a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-image-hover",
                            "selectorGuids": ["6ed9942d-a3e6-5e31-5ca0-ac36755ee84a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-text",
                            "selectorGuids": ["4c6c4484-7cdb-888b-21d1-c0456eab93f5"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1563285837990,
            "useFirstGroupAsInitialState": false
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});

// Custom scripts

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        document.getElementById('services').classList.toggle('active', entry.isIntersecting);
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById('services'));
