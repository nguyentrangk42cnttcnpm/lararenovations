(this["webpackJsonpant-design-admin"] = this["webpackJsonpant-design-admin"] || []).push([
    [0], {
        220: function(e) {
            e.exports = JSON.parse('{"a":"/"}')
        },
        231: function(e, a, t) {
            e.exports = t(448)
        },
        272: function(e, a) {},
        373: function(e, a, t) {},
        444: function(e, a, t) {},
        448: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                r = t.n(n),
                c = t(98),
                o = t.n(c),
                l = t(41),
                i = t(21),
                m = t(147),
                s = t.n(m),
                u = t(224),
                p = t(225),
                E = t(213),
                d = t.n(E),
                f = t(214),
                h = t.n(f),
                N = t(97),
                b = t.n(N),
                v = t(215),
                w = t.n(v),
                y = t(74),
                g = ["component", "path", "indexRoute", "title"],
                O = function(e, a, t) {
                    return d()({
                        app: e,
                        models: function() {
                            return a
                        },
                        component: t
                    })
                };
            window.dva_router_pathMap = {};
            var R = function(e, a) {
                    var t = a(e),
                        n = t.component,
                        c = t.path,
                        o = t.indexRoute,
                        i = t.title,
                        m = Object(p.a)(t, g);
                    c && "/" !== c && (window.dva_router_pathMap[c] = Object(u.a)({
                        path: c,
                        title: i
                    }, m), m.childRoutes && m.childRoutes.length && m.childRoutes.forEach((function(e) {
                        window.dva_router_pathMap[e.key] && (window.dva_router_pathMap[e.key].parentPath = c)
                    })));
                    var s = b()({
                        key: c || w.a.randomStr(4),
                        render: function(e) {
                            return r.a.createElement(h.a, {
                                title: y.a.htmlTitle ? y.a.htmlTitle.replace(/{.*}/gi, i) : i
                            }, r.a.createElement(n, Object.assign({
                                routerData: m
                            }, e)))
                        }
                    }, c && {
                        path: c
                    });
                    return o ? [r.a.createElement(l.Redirect, {
                        key: "".concat(c, "_redirect"),
                        exact: !0,
                        from: c,
                        to: o
                    }), r.a.createElement(l.Route, s)] : r.a.createElement(l.Route, s)
                },
                x = t(87),
                j = t(88),
                _ = t(96),
                k = t(95),
                S = t(451),
                A = (t(373), t(452)),
                M = t(453),
                P = t(454),
                T = t(455),
                C = t(221),
                I = t(456),
                L = t(457),
                D = t(458),
                J = t(459),
                F = S.a.Content,
                V = function(e) {
                    Object(_.a)(t, e);
                    var a = Object(k.a)(t);

                    function t() {
                        return Object(x.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(j.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(F, {
                                className: "component-footerfrontend"
                            }, r.a.createElement("div", {
                                className: "div-footer"
                            }, r.a.createElement("div", {
                                className: "div-footer-child"
                            }, r.a.createElement(A.a, null, r.a.createElement(M.a, {
                                xl: 8,
                                lg: 12,
                                md: 24,
                                xs: 24,
                                className: "col-contact"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "contact"
                            }, "Contact"), r.a.createElement("div", {
                                className: "form-contact"
                            }, r.a.createElement(P.a, {
                                name: "basic",
                                initialValues: {
                                    remember: !0
                                },
                                layout: "vertical"
                            }, r.a.createElement(P.a.Item, {
                                label: "E-mail :",
                                name: "Email"
                            }, r.a.createElement(T.a, {
                                placeholder: "Enter your E-mail",
                                className: "input-email input-form"
                            })), r.a.createElement(P.a.Item, {
                                label: "Subscribe :",
                                name: "subscribe",
                                className: "form-subscribe"
                            }, r.a.createElement(T.a.TextArea, {
                                placeholder: "Enter you Message",
                                autoSize: {
                                    minRows: 6,
                                    maxRows: 6
                                },
                                className: "input-email textArea-sub"
                            })), r.a.createElement(P.a.Item, null, r.a.createElement(C.a, {
                                type: "primary",
                                shape: "round",
                                className: "btn-contact"
                            }, "SEND")))))), r.a.createElement(M.a, {
                                xl: 8,
                                lg: 12,
                                md: 24,
                                xs: 24
                            }, r.a.createElement("p", {
                                className: "lara"
                            }, " LARA RENOVATION HOME"), r.a.createElement("div", {
                                className: "div-lara"
                            }, r.a.createElement(A.a, null, r.a.createElement(M.a, null, r.a.createElement("p", {
                                className: "font18"
                            }, "Address : "), r.a.createElement("p", {
                                className: "font18 row-email"
                            }, "Email : "), r.a.createElement("p", {
                                className: "font18 row-email"
                            }, "Phone : ")), r.a.createElement(M.a, {
                                className: "col-naca"
                            }, r.a.createElement("p", {
                                className: "font18"
                            }, "nacache chala ca"), r.a.createElement("p", {
                                className: "font18 row-email"
                            }, "shift@gmail.com"), r.a.createElement("p", {
                                className: "font18 row-email p-phone"
                            }, "+84 12345678"))), r.a.createElement("p", {
                                className: "font18 row-follow"
                            }, "Follow Us :"), r.a.createElement(A.a, {
                                className: "row-icon"
                            }, r.a.createElement(I.a, {
                                className: "icon-footer icon-fb"
                            }), r.a.createElement(L.a, {
                                className: "icon-footer icon-tw"
                            }), r.a.createElement(D.a, {
                                className: "icon-footer icon-in"
                            }), r.a.createElement(J.a, {
                                className: "icon-ytb"
                            })))), r.a.createElement(M.a, {
                                xl: 8,
                                lg: 24,
                                md: 24,
                                xs: 24,
                                className: "col-map"
                            }, r.a.createElement("img", {
                                src: "images/frontend/map.png",
                                alt: "Lara"
                            }))))))
                        }
                    }]), t
                }(r.a.Component);
            V.defaultProps = {
                className: "component-footerfrontend"
            };
            var W, q = V,
                z = S.a.Content,
                B = S.a.Footer,
                H = Object(c.connect)()(W = function(e) {
                    Object(_.a)(t, e);
                    var a = Object(k.a)(t);

                    function t() {
                        return Object(x.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(j.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                a = e.routerData,
                                t = (e.collapsed, a.childRoutes);
                            return r.a.createElement(S.a, null, r.a.createElement(S.a, {
                                className: "full-layout"
                            }, r.a.createElement(z, null, r.a.createElement(l.Switch, null, t)), r.a.createElement(B, null, r.a.createElement(q, null))))
                        }
                    }]), t
                }(r.a.PureComponent)) || W,
                U = "/",
                $ = function(e) {
                    return {
                        path: U,
                        title: "Lara Renovations",
                        component: O(e, [], (function() {
                            return Promise.all([t.e(3), t.e(4)]).then(t.bind(null, 498))
                        }))
                    }
                },
                G = function(e) {
                    return R(e, $)
                },
                K = function(e) {
                    return [{
                        path: "/",
                        title: "Lara Renovations",
                        component: H,
                        childRoutes: [G(e)]
                    }]
                },
                Q = function(e) {
                    return function(e, a) {
                        return r.a.createElement(l.Switch, null, a(e).map((function(a) {
                            return R(e, (function() {
                                return a
                            }))
                        })))
                    }(e, K)
                },
                X = (t(444), t(445), t(220));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Y = o()({
                history: Object(i.a)({
                    basename: X.a
                })
            });
            s.a.config(y.a.request), Y.router((function(e) {
                var a = e.history,
                    t = e.app;
                return r.a.createElement(l.Router, {
                    history: a
                }, Q(t))
            })), Y.start("#root");
            a.default = {
                app: Y,
                store: Y._store,
                dispatch: Y._store.dispatch
            };
            "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        },
        74: function(e, a, t) {
            "use strict";
            a.a = {
                htmlTitle: "PdTeam - {title}",
                router: {}
            }
        }
    },
    [
        [231, 1, 2]
    ]
]);
//# sourceMappingURL=main.4b64ab19.chunk.js.map