(this["webpackJsonpant-design-admin"] = this["webpackJsonpant-design-admin"] || []).push([
    [4], {
        471: function(e, a) {},
        493: function(e, a, t) {},
        498: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, "default", (function() {
                return B
            }));
            var m = t(87),
                l = t(88),
                s = t(96),
                c = t(95),
                n = t(0),
                r = t.n(n),
                i = t(98),
                o = t(41),
                u = t(496),
                E = t(451),
                d = t(495),
                p = t(497),
                N = t(452),
                v = t(453),
                b = t(221),
                g = t(454),
                x = t(455),
                f = (t(468), t(479)),
                h = t.n(f),
                L = (t(492), t(4)),
                w = t.n(L),
                A = t(74),
                I = function(e) {
                    Object(s.a)(t, e);
                    var a = Object(c.a)(t);

                    function t() {
                        var e;
                        Object(m.a)(this, t);
                        for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                        return (e = a.call.apply(a, [this].concat(s))).notice = A.a.notice, e
                    }
                    return Object(l.a)(t, [{
                        key: "history",
                        get: function() {
                            return this.context.router.history
                        }
                    }]), t
                }(r.a.Component);
            I.contextTypes = {
                router: w.a.object
            };
            var M, k = I,
                T = t(499),
                O = t(456),
                C = t(457),
                S = t(458),
                y = t(500),
                R = t(226),
                D = (t(493), u.a.SubMenu, E.a.Content),
                q = (d.a.TabPane, {
                    xxl: {
                        breakpoint: {
                            max: 4e3,
                            min: 1435
                        },
                        items: 3.3
                    },
                    xl: {
                        breakpoint: {
                            max: 1435,
                            min: 1352
                        },
                        items: 3.1
                    },
                    xl1: {
                        breakpoint: {
                            max: 1352,
                            min: 1310
                        },
                        items: 3
                    },
                    lg: {
                        breakpoint: {
                            max: 1310,
                            min: 1192
                        },
                        items: 2.7
                    },
                    md: {
                        breakpoint: {
                            max: 1192,
                            min: 1110
                        },
                        items: 2.5
                    },
                    sm: {
                        breakpoint: {
                            max: 1110,
                            min: 966
                        },
                        items: 2.3
                    },
                    sm1: {
                        breakpoint: {
                            max: 966,
                            min: 890
                        },
                        items: 2.1
                    },
                    xs: {
                        breakpoint: {
                            max: 890,
                            min: 840
                        },
                        items: 2
                    },
                    xs1: {
                        breakpoint: {
                            max: 840,
                            min: 768
                        },
                        items: 1.7
                    },
                    xs2: {
                        breakpoint: {
                            max: 768,
                            min: 677
                        },
                        items: 2.1
                    },
                    xs3: {
                        breakpoint: {
                            max: 676,
                            min: 646
                        },
                        items: 2
                    },
                    xs4: {
                        breakpoint: {
                            max: 646,
                            min: 556
                        },
                        items: 1.7
                    },
                    xs5: {
                        breakpoint: {
                            max: 556,
                            min: 497
                        },
                        items: 1.5
                    },
                    xs6: {
                        breakpoint: {
                            max: 497,
                            min: 0
                        },
                        items: 1.2
                    },
                    xs7: {
                        breakpoint: {
                            max: 401,
                            min: 373
                        },
                        items: 1.1
                    },
                    xs8: {
                        breakpoint: {
                            max: 373,
                            min: 0
                        },
                        items: 1
                    }
                }),
                B = Object(i.connect)()(M = function(e) {
                    Object(s.a)(t, e);
                    var a = Object(c.a)(t);

                    function t() {
                        var e;
                        Object(m.a)(this, t);
                        for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                        return (e = a.call.apply(a, [this].concat(s))).state = {
                            collapsed: !1,
                            width: "100%"
                        }, e.toggleCollapsed = function() {
                            e.setState({
                                collapsed: !e.state.collapsed
                            })
                        }, e.handleClick = function(a) {
                            console.log("click ", a), e.setState({
                                current: a.key
                            })
                        }, e
                    }
                    return Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(E.a, {
                                className: "full-layout page home-page"
                            }, r.a.createElement(D, null, r.a.createElement("div", {
                                className: "div-first"
                            }, r.a.createElement("div", null, r.a.createElement(p.a, {
                                className: "menu-affix"
                            }, r.a.createElement(N.a, {
                                className: "row-menu"
                            }, r.a.createElement(v.a, {
                                xxl: 11,
                                xl: 8,
                                lg: 5,
                                md: 24,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-logo"
                            }, r.a.createElement("img", {
                                src: "images/frontend/logo.png",
                                alt: "Lara"
                            }))), r.a.createElement(v.a, {
                                xxl: 8,
                                xl: 11,
                                lg: 13,
                                md: 24,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-menu-mobile"
                            }, r.a.createElement("div", {
                                className: "div-menu-bar"
                            }, r.a.createElement("div", {
                                className: "div-menu-btn"
                            }, r.a.createElement(b.a, {
                                type: "primary",
                                className: "btn-primary",
                                onClick: this.toggleCollapsed
                            }, r.a.createElement(T.a))), r.a.createElement("div", {
                                className: "div-logo-mobile"
                            }, r.a.createElement("img", {
                                src: "images/frontend/logo.png",
                                alt: "Lara"
                            }))), r.a.createElement(u.a, {
                                onClick: this.handleClick,
                                mode: "inline",
                                className: this.state.collapsed ? "menu-inline-active" : "menu-inline"
                            }, r.a.createElement(u.a.Item, {
                                key: "home"
                            }, r.a.createElement(o.Link, {
                                to: "#home"
                            }, "Home")), r.a.createElement(u.a.Item, {
                                key: "about"
                            }, r.a.createElement(o.Link, {
                                to: "#about"
                            }, "About")), r.a.createElement(u.a.Item, {
                                key: "service"
                            }, r.a.createElement(o.Link, {
                                to: "#service"
                            }, "Service")), r.a.createElement(u.a.Item, {
                                key: "review"
                            }, r.a.createElement(o.Link, {
                                to: "#review"
                            }, "Review")))), r.a.createElement("div", {
                                className: "div-menu"
                            }, r.a.createElement(u.a, {
                                onClick: this.handleClick,
                                mode: "horizontal"
                            }, r.a.createElement(u.a.Item, {
                                key: "home"
                            }, r.a.createElement(o.Link, {
                                to: "#home"
                            }, "Home")), r.a.createElement(u.a.Item, {
                                key: "about"
                            }, r.a.createElement(o.Link, {
                                to: "#about"
                            }, "About")), r.a.createElement(u.a.Item, {
                                key: "service"
                            }, r.a.createElement(o.Link, {
                                to: "#service"
                            }, "Service")), r.a.createElement(u.a.Item, {
                                key: "review"
                            }, r.a.createElement(o.Link, {
                                to: "#review"
                            }, "Review"))))), r.a.createElement(v.a, {
                                xl: 5,
                                lg: 6,
                                md: 24
                            }, r.a.createElement("div", {
                                className: "div-phone"
                            }, r.a.createElement(N.a, null, r.a.createElement("img", {
                                src: "images/frontend/calling.svg",
                                alt: "Lara"
                            }), r.a.createElement("a", {
                                href: "tel:+8490 999 888"
                            }, r.a.createElement("p", null, " 090 999 888"))))))), r.a.createElement("div", {
                                className: "div-first-content"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                xl: 14,
                                xs: 24,
                                className: "div-first-content-col-first"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-what"
                            }, "WHAT WE CAN DO ?"), r.a.createElement("p", {
                                className: "mb-0 p-welcome"
                            }, "WELCOME TO "), r.a.createElement("p", {
                                className: "mb-0 p-lara"
                            }, "LARA RENOVATION HOME "), r.a.createElement("p", {
                                className: "mb-0 p-we"
                            }, "We always make the best resolution..."), r.a.createElement(N.a, {
                                className: "row-get"
                            }, r.a.createElement(b.a, {
                                shape: "round",
                                className: "btn-get"
                            }, "GET STARTED"), r.a.createElement("img", {
                                src: "images/frontend/view-list.svg",
                                alt: "Lara"
                            }), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View our Project")))), r.a.createElement(v.a, {
                                xl: 10,
                                xs: 24,
                                className: "div-first-content-col-second"
                            }, r.a.createElement("div", {
                                className: "div-form-get"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-get-your"
                            }, "GET YOUR FREE ESTIMATE"), r.a.createElement(g.a, {
                                name: "basic",
                                initialValues: {
                                    remember: !0
                                },
                                layout: "vertical",
                                className: "form-get"
                            }, r.a.createElement(g.a.Item, {
                                name: "name"
                            }, r.a.createElement(x.a, {
                                placeholder: "Your Name *",
                                className: "input-your-name input-get input-your"
                            })), r.a.createElement(g.a.Item, {
                                name: "email",
                                className: ""
                            }, r.a.createElement(x.a, {
                                placeholder: "Your Email *",
                                className: "input-get input-your"
                            })), r.a.createElement(g.a.Item, {
                                name: "phone"
                            }, r.a.createElement(x.a, {
                                placeholder: "Your Phone *",
                                className: "input-get input-your"
                            })), r.a.createElement(g.a.Item, {
                                name: "message"
                            }, r.a.createElement(x.a.TextArea, {
                                placeholder: "Message ",
                                autoSize: {
                                    minRows: 4,
                                    maxRows: 4
                                },
                                className: "input-get textArea-mess"
                            })), r.a.createElement(g.a.Item, {
                                className: "item-btn-sub"
                            }, r.a.createElement(b.a, {
                                shape: "round",
                                className: "btn-sub"
                            }, "SUBMIT NOW"))))))))), r.a.createElement("div", {
                                className: "div-second"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                className: "col-second-first",
                                lg: 12,
                                xs: 24
                            }, r.a.createElement("img", {
                                src: "images/frontend/sparks.png",
                                alt: "Lara"
                            })), r.a.createElement(v.a, {
                                className: "col-second-second",
                                lg: 12,
                                xs: 24
                            }, r.a.createElement("p", {
                                className: "mb-0 p-welcome"
                            }, "WELCOME TO"), r.a.createElement("p", {
                                className: "mb-0 p-lara"
                            }, "LARA COMPANY"), r.a.createElement("div", {
                                className: "div-hr"
                            }, r.a.createElement("hr", {
                                className: "hr-lara"
                            })), r.a.createElement("div", {
                                className: "div-p-first"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Nulla vehicula malesuada nisi eu rutrum."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Maecenas purus diam, lobortis at velit eget, ultricies posuere augue."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Nullam nec lectus a augue dictum euismod ut sed ex."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Integer pretium arcu neq ue, vitae mollis massa consequat eu"), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "In eget dolor luctus, varius dui fringilla, lobortis odio."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Cras molestie nunc pretium, dictum lorem vel, vulputate mi."), r.a.createElement("p", {
                                className: "mb-0 p-text p-text-second"
                            }, "Etiam ac ligula bibendum, luctus diam sit amet, rutrum ipsum.")), r.a.createElement("div", {
                                className: "div-p-second"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales."), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Fusce feugiat dapibus facilisis"), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Sed interdum mauris sed vulputate fringilla."), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Sed purus dui, tempus tempor velit vel,"), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "feugiat eleifend nulla.")), r.a.createElement("div", {
                                className: "div-p-second"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Donec nec purus luctus, fermentum libero vitae, accumsan leo."), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Etiam eu lacus et tortor molestie aliquam."), r.a.createElement("p", {
                                className: "mb-0 p-text"
                            }, "Integer feugiat metus a tellus accumsan aliquet."))))), r.a.createElement("div", {
                                className: "div-third"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-our-title"
                            }, "OUR RENOVATION SERVICES"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-title"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.")), r.a.createElement("div", {
                                className: "div-third-second"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-5.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BATHROOM"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-1.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "KITCHEN"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-3.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BEDROOM"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-4.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "LIVING/FAMILY ROOM"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-5.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "GARAGE"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-7.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "HOME REMODELLING & COMPLETE RENOVATION "), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail"))), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-8.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "ENGINEERING"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View Detail")))))), r.a.createElement("div", {
                                className: "div-fourth"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                className: "col-fourth-first",
                                xl: 14,
                                xs: 24
                            }, r.a.createElement("p", {
                                className: "mb-0 p-amazing"
                            }, "AMAZING FEATURES"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-fourth"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula malesuada nisi eu rutrum. Maecenas purus diam, lobortis at velit eget, ultricies posuere augue. Nullam nec lectus a augue dictum euismod ut sed ex. Integer pretium arcu neque, vitae mollis massa consequat eu. In eget dolor luctus, varius dui fringilla, lobortis odio."), r.a.createElement(N.a, {
                                className: "row-second"
                            }, r.a.createElement(N.a, null, r.a.createElement("div", {
                                className: "div-hr-first"
                            }), r.a.createElement("div", {
                                className: "div-hr-second"
                            }), r.a.createElement("div", {
                                className: "div-hr-third"
                            }), r.a.createElement("div", {
                                className: "div-hr-fourth"
                            })), r.a.createElement("div", {
                                className: "div-building"
                            }, r.a.createElement("img", {
                                src: "images/frontend/building.svg",
                                alt: "Lara"
                            }), r.a.createElement("p", {
                                className: "mb-0 p-bui"
                            }, "BUILDING")), r.a.createElement("div", {
                                className: "div-building"
                            }, r.a.createElement("img", {
                                src: "images/frontend/renovation.svg",
                                alt: "Lara"
                            }), r.a.createElement("p", {
                                className: "mb-0 p-bui"
                            }, "RENOVATION")), r.a.createElement("div", {
                                className: "div-building"
                            }, r.a.createElement("img", {
                                src: "images/frontend/interior.svg",
                                alt: "Lara"
                            }), r.a.createElement("p", {
                                className: "mb-0 p-bui"
                            }, "INTERIOR")))), r.a.createElement(v.a, {
                                className: "col-fourth-second",
                                xl: 10,
                                xs: 24
                            }, r.a.createElement("img", {
                                src: "images/frontend/div4.png",
                                alt: "Lara"
                            })))), r.a.createElement(N.a, {
                                className: "div-fifth"
                            }, r.a.createElement(v.a, {
                                lg: 8,
                                xs: 24
                            }, r.a.createElement(N.a, {
                                className: "row-1000"
                            }, r.a.createElement(v.a, null, r.a.createElement("img", {
                                src: "images/frontend/pr.svg",
                                alt: "Lara"
                            })), r.a.createElement(v.a, null, r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "1000"), r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "PROJECTS COMPLETE")))), r.a.createElement(v.a, {
                                lg: 8,
                                xs: 24
                            }, r.a.createElement(N.a, {
                                className: "row-1000"
                            }, r.a.createElement(v.a, null, r.a.createElement("img", {
                                src: "images/frontend/ha.svg",
                                alt: "Lara"
                            })), r.a.createElement(v.a, null, r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "1000"), r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "HAPPY CUSTORMERS")))), r.a.createElement(v.a, {
                                lg: 8,
                                xs: 24
                            }, r.a.createElement(N.a, {
                                className: "row-1000"
                            }, r.a.createElement(v.a, null, r.a.createElement("img", {
                                src: "images/frontend/ye.svg",
                                alt: "Lara"
                            })), r.a.createElement(v.a, null, r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "30"), r.a.createElement("p", {
                                className: "mb-0 p-100"
                            }, "YEARS OF EXPERIENCED"))))), r.a.createElement("div", {
                                className: "div-sixth"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-our-title"
                            }, "WHY CHOOSE US"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-title"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.")), r.a.createElement("div", {
                                className: "div-sixth-second"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                xxl: 8,
                                xl: 9,
                                xs: 24,
                                className: "col-first-sixth"
                            }, r.a.createElement("img", {
                                src: "images/frontend/person.png",
                                alt: "Lara"
                            })), r.a.createElement(v.a, {
                                xxl: 16,
                                xl: 15,
                                xs: 24,
                                className: "col-second-sixth"
                            }, r.a.createElement(N.a, {
                                className: "col-second-sixth-row"
                            }, r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Quality Work")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info")))), r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Engineering")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info")))), r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Automate System")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info")))), r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Best Quality")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info")))), r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Experienced Team")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info")))), r.a.createElement(v.a, {
                                sm: 8,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "col-qu"
                            }, r.a.createElement("div", {
                                className: "div-qua"
                            }, r.a.createElement("div", {
                                className: "div-qu"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Safety")), r.a.createElement("div", {
                                className: "div-pr"
                            }, r.a.createElement("p", {
                                className: "mb-0"
                            }, "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate."))), r.a.createElement("p", {
                                className: "mb-0 p-more"
                            }, r.a.createElement("a", null, "More info"))))))))), r.a.createElement("div", {
                                className: "div-seventh"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-our-title"
                            }, "OUR CREATIVE TEAM"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-title"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.")), r.a.createElement("div", {
                                className: "div-third-second"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                xl: 6,
                                sm: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/bee.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "Mr Bee"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Engineering"), r.a.createElement(N.a, {
                                className: "row-icon"
                            }, r.a.createElement(O.a, {
                                className: "icon-footer icon-fb"
                            }), r.a.createElement(C.a, {
                                className: "icon-footer icon-tw"
                            }), r.a.createElement(S.a, {
                                className: "icon-footer icon-in"
                            }), r.a.createElement(y.a, {
                                className: "icon-footer icon-in"
                            }))))), r.a.createElement(v.a, {
                                xl: 6,
                                sm: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/bee.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "Mr Bee"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Engineering"), r.a.createElement(N.a, {
                                className: "row-icon"
                            }, r.a.createElement(O.a, {
                                className: "icon-footer icon-fb"
                            }), r.a.createElement(C.a, {
                                className: "icon-footer icon-tw"
                            }), r.a.createElement(S.a, {
                                className: "icon-footer icon-in"
                            }), r.a.createElement(y.a, {
                                className: "icon-footer icon-in"
                            }))))), r.a.createElement(v.a, {
                                xl: 6,
                                sm: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/bee.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "Mr Bee"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Engineering"), r.a.createElement(N.a, {
                                className: "row-icon"
                            }, r.a.createElement(O.a, {
                                className: "icon-footer icon-fb"
                            }), r.a.createElement(C.a, {
                                className: "icon-footer icon-tw"
                            }), r.a.createElement(S.a, {
                                className: "icon-footer icon-in"
                            }), r.a.createElement(y.a, {
                                className: "icon-footer icon-in"
                            }))))), r.a.createElement(v.a, {
                                xl: 6,
                                sm: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/bee.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "Mr Bee"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Engineering"), r.a.createElement(N.a, {
                                className: "row-icon"
                            }, r.a.createElement(O.a, {
                                className: "icon-footer icon-fb"
                            }), r.a.createElement(C.a, {
                                className: "icon-footer icon-tw"
                            }), r.a.createElement(S.a, {
                                className: "icon-footer icon-in"
                            }), r.a.createElement(y.a, {
                                className: "icon-footer icon-in"
                            }))))))), r.a.createElement(N.a, {
                                className: "row-search"
                            }, r.a.createElement(R.a, {
                                className: "icon-search"
                            }), " ", r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, r.a.createElement("a", null, "View all Member")))), r.a.createElement("div", {
                                className: "div-eighth"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-our-title"
                            }, "RECENT PROJECTS"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-title"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.")), r.a.createElement("div", {
                                className: "div-third-second"
                            }, r.a.createElement(N.a, null, r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT Lorem ipsum dolor sit amet,"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail")), r.a.createElement(v.a, {
                                xxl: 6,
                                lg: 8,
                                md: 12,
                                xs: 24
                            }, r.a.createElement("div", {
                                className: "div-col"
                            }, r.a.createElement("img", {
                                src: "images/frontend/our-6.png",
                                alt: "Lara"
                            }), r.a.createElement("div", {
                                className: "div-bath"
                            }, r.a.createElement("p", {
                                className: "mb-0 p-bathroom"
                            }, "BASEMENT"), r.a.createElement("p", {
                                className: "mb-0 p-content"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a."))), r.a.createElement("p", {
                                className: "mb-0 p-view"
                            }, "View Detail"))))), r.a.createElement("div", {
                                className: "div-nineth"
                            }, r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-our-title"
                            }, "TESTIMONIAL"), r.a.createElement("p", {
                                className: "mb-0 p-lorem-title"
                            }, "Clients send feedback for us")), r.a.createElement("div", {
                                className: "div-third-second"
                            }, r.a.createElement(h.a, {
                                swipeable: !1,
                                draggable: !1,
                                showDots: !0,
                                ssr: !0,
                                infinite: !0,
                                deviceType: this.props.deviceType,
                                dotListClass: "custom-dot-list-style",
                                responsive: q,
                                className: "div-carousel"
                            }, r.a.createElement("div", {
                                className: "div-carousel-item"
                            }, r.a.createElement(N.a, null, r.a.createElement("img", {
                                src: "images/frontend/user.png",
                                alt: "Lara"
                            }), r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-al"
                            }, "ALIBABA XEKUTARA"), r.a.createElement("p", {
                                className: "mb-0 p-ma"
                            }, "Manage Dota2 Club"))), r.a.createElement("p", {
                                className: "mb-0 p-lor"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.")), r.a.createElement("div", {
                                className: "div-carousel-item"
                            }, r.a.createElement(N.a, null, r.a.createElement("img", {
                                src: "images/frontend/user.png",
                                alt: "Lara"
                            }), r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-al"
                            }, "ALIBABA XEKUTARA"), r.a.createElement("p", {
                                className: "mb-0 p-ma"
                            }, "Manage Dota2 Club"))), r.a.createElement("p", {
                                className: "mb-0 p-lor"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.")), r.a.createElement("div", {
                                className: "div-carousel-item"
                            }, r.a.createElement(N.a, null, r.a.createElement("img", {
                                src: "images/frontend/user.png",
                                alt: "Lara"
                            }), r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-al"
                            }, "ALIBABA XEKUTARA"), r.a.createElement("p", {
                                className: "mb-0 p-ma"
                            }, "Manage Dota2 Club"))), r.a.createElement("p", {
                                className: "mb-0 p-lor"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.")), r.a.createElement("div", {
                                className: "div-carousel-item"
                            }, r.a.createElement(N.a, null, r.a.createElement("img", {
                                src: "images/frontend/user.png",
                                alt: "Lara"
                            }), r.a.createElement("div", null, r.a.createElement("p", {
                                className: "mb-0 p-al"
                            }, "ALIBABA XEKUTARA"), r.a.createElement("p", {
                                className: "mb-0 p-ma"
                            }, "Manage Dota2 Club"))), r.a.createElement("p", {
                                className: "mb-0 p-lor"
                            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.")))))))
                        }
                    }]), t
                }(k)) || M
        }
    }
]);
//# sourceMappingURL=4.e705cc63.chunk.js.map