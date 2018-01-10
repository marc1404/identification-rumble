webpackJsonp([1], {
    "/Ied": function(e, t, r) {
        "use strict";
        var n = r("mvHQ"),
            a = r.n(n),
            s = r("BO1k"),
            o = r.n(s),
            u = r("Zrlr"),
            i = r.n(u),
            c = r("wxAW"),
            l = r.n(c),
            f = r("DtRx"),
            d = r.n(f),
            h = (function() {
                function e() {
                    i()(this, e), (this.passports = []);
                }
                return (
                    l()(e, [
                        {
                            key: "createPassport",
                            value: function(e) {
                                var t = {
                                    uuid: d()(),
                                    hasJewishAncestry: e,
                                    created: new Date()
                                };
                                this.passports.push(t), this.savePassports();
                            }
                        },
                        {
                            key: "getPassport",
                            value: function(e) {
                                var t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (
                                        var a, s = o()(this.passports);
                                        !(t = (a = s.next()).done);
                                        t = !0
                                    ) {
                                        var u = a.value;
                                        if (u.uuid === e) return u;
                                    }
                                } catch (e) {
                                    (r = !0), (n = e);
                                } finally {
                                    try {
                                        !t && s.return && s.return();
                                    } finally {
                                        if (r) throw n;
                                    }
                                }
                                return null;
                            }
                        },
                        {
                            key: "removePassport",
                            value: function(e) {
                                for (var t = 0; t < this.passports.length; t++)
                                    if (this.passports[t].uuid === e.uuid) {
                                        this.passports.splice(t, 1);
                                        break;
                                    }
                                this.savePassports();
                            }
                        },
                        {
                            key: "savePassports",
                            value: function() {
                                localStorage.setItem(
                                    "passports",
                                    a()(this.passports)
                                );
                            }
                        },
                        {
                            key: "loadPassports",
                            value: function() {
                                var e = localStorage.getItem("passports");
                                if (e) {
                                    this.passports = JSON.parse(e);
                                    var t = !0,
                                        r = !1,
                                        n = void 0;
                                    try {
                                        for (
                                            var a, s = o()(this.passports);
                                            !(t = (a = s.next()).done);
                                            t = !0
                                        ) {
                                            var u = a.value;
                                            u.created = new Date(u.created);
                                        }
                                    } catch (e) {
                                        (r = !0), (n = e);
                                    } finally {
                                        try {
                                            !t && s.return && s.return();
                                        } finally {
                                            if (r) throw n;
                                        }
                                    }
                                }
                            }
                        }
                    ]),
                    e
                );
            })();
        t.a = new h();
    },
    "/fGl": function(e, t, r) {
        "use strict";
        var n = r("/Ied"),
            a = r("vBvW"),
            s = r.n(a);
        t.a = {
            name: "Passports",
            head: function() {
                return { title: "Passports" };
            },
            data: function() {
                return { hasJewishAncestry: !1, passportService: n.a };
            },
            methods: {
                createPassport: function() {
                    n.a.createPassport(this.hasJewishAncestry);
                },
                removePassport: function(e) {
                    n.a.removePassport(e);
                },
                distanceInWordsToNow: function(e) {
                    return s()(e);
                }
            },
            mounted: function() {
                n.a.loadPassports();
            }
        };
    },
    "25hp": function(e, t, r) {
        var n = r("G7No");
        e.exports = function(e, t) {
            var r = n(e, t) / 1e3;
            return r > 0 ? Math.floor(r) : Math.ceil(r);
        };
    },
    "4I9D": function(e, t, r) {
        "use strict";
        var n = function() {
            var e = this,
                t = e.$createElement,
                r = e._self._c || t;
            return r("div", [
                r("section", [
                    r("h1", [e._v("Passports")]),
                    r("table", { staticClass: "table table-responsive" }, [
                        e._m(0),
                        r(
                            "tbody",
                            e._l(e.passportService.passports, function(t) {
                                return r("tr", { key: t.uuid }, [
                                    r(
                                        "td",
                                        [
                                            r(
                                                "nuxt-link",
                                                {
                                                    attrs: {
                                                        to: {
                                                            name:
                                                                "passports-uuid",
                                                            params: {
                                                                uuid: t.uuid
                                                            }
                                                        }
                                                    }
                                                },
                                                [
                                                    e._v(
                                                        "\n                        " +
                                                            e._s(t.uuid) +
                                                            "\n                    "
                                                    )
                                                ]
                                            )
                                        ],
                                        1
                                    ),
                                    r("td", [
                                        t.hasJewishAncestry
                                            ? r("span", [e._v("yes")])
                                            : r("span", [e._v("no")])
                                    ]),
                                    r("td", [
                                        r(
                                            "span",
                                            { attrs: { title: t.created } },
                                            [
                                                e._v(
                                                    "\n                        " +
                                                        e._s(
                                                            e.distanceInWordsToNow(
                                                                t.created
                                                            )
                                                        ) +
                                                        " ago\n                    "
                                                )
                                            ]
                                        )
                                    ]),
                                    r("td", { staticClass: "text-right" }, [
                                        r(
                                            "button",
                                            {
                                                staticClass:
                                                    "btn btn-link btn-sm text-danger",
                                                attrs: { type: "button" },
                                                on: {
                                                    click: function(r) {
                                                        e.removePassport(t);
                                                    }
                                                }
                                            },
                                            [
                                                e._v(
                                                    "\n                        Remove\n                    "
                                                )
                                            ]
                                        )
                                    ])
                                ]);
                            })
                        )
                    ])
                ]),
                r("section", [
                    r("h2", [e._v("Create Passport")]),
                    r(
                        "form",
                        {
                            on: {
                                submit: function(t) {
                                    t.preventDefault(), e.createPassport();
                                }
                            }
                        },
                        [
                            r("div", { staticClass: "form-check my-3" }, [
                                r("input", {
                                    directives: [
                                        {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.hasJewishAncestry,
                                            expression: "hasJewishAncestry"
                                        }
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: {
                                        id: "checkbox-jewish-ancestry",
                                        type: "checkbox"
                                    },
                                    domProps: {
                                        checked: Array.isArray(
                                            e.hasJewishAncestry
                                        )
                                            ? e._i(e.hasJewishAncestry, null) >
                                              -1
                                            : e.hasJewishAncestry
                                    },
                                    on: {
                                        change: function(t) {
                                            var r = e.hasJewishAncestry,
                                                n = t.target,
                                                a = !!n.checked;
                                            if (Array.isArray(r)) {
                                                var s = e._i(r, null);
                                                n.checked
                                                    ? s < 0 &&
                                                      (e.hasJewishAncestry = r.concat(
                                                          [null]
                                                      ))
                                                    : s > -1 &&
                                                      (e.hasJewishAncestry = r
                                                          .slice(0, s)
                                                          .concat(
                                                              r.slice(s + 1)
                                                          ));
                                            } else e.hasJewishAncestry = a;
                                        }
                                    }
                                }),
                                r(
                                    "label",
                                    {
                                        staticClass: "form-check-label",
                                        attrs: {
                                            for: "checkbox-jewish-ancestry"
                                        }
                                    },
                                    [
                                        e._v(
                                            "\n                    Jewish ancestry\n                "
                                        )
                                    ]
                                )
                            ]),
                            r(
                                "button",
                                {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "submit" }
                                },
                                [e._v("Create")]
                            )
                        ]
                    )
                ])
            ]);
        };
        n._withStripped = !0;
        var a = {
            render: n,
            staticRenderFns: [
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("thead", [
                        t("tr", [
                            t("th", [this._v("UUID")]),
                            t("th", [this._v("Jewish Ancestry")]),
                            t("th", [this._v("Created")]),
                            t("th")
                        ])
                    ]);
                }
            ]
        };
        t.a = a;
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date;
        };
    },
    BO1k: function(e, t, r) {
        e.exports = { default: r("fxRn"), __esModule: !0 };
    },
    DtRx: function(e, t, r) {
        var n = r("i4uy"),
            a = r("MAlW");
        e.exports = function(e, t, r) {
            var s = (t && r) || 0;
            "string" == typeof e &&
                ((t = "binary" == e ? new Array(16) : null), (e = null));
            var o = (e = e || {}).random || (e.rng || n)();
            if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
                for (var u = 0; u < 16; ++u) t[s + u] = o[u];
            return t || a(o);
        };
    },
    G7No: function(e, t, r) {
        var n = r("xA5w");
        e.exports = function(e, t) {
            var r = n(e),
                a = n(t);
            return r.getTime() - a.getTime();
        };
    },
    GI7G: function(e, t, r) {
        var n = r("xA5w"),
            a = r("orNa"),
            s = r("NKE6");
        e.exports = function(e, t) {
            var r = n(e),
                o = n(t),
                u = s(r, o),
                i = Math.abs(a(r, o));
            return r.setMonth(r.getMonth() - u * i), u * (i - (s(r, o) === -u));
        };
    },
    "L7/7": function(e, t, r) {
        var n = r("M/am");
        "string" == typeof n && (n = [[e.i, n, ""]]),
            n.locals && (e.exports = n.locals);
        r("rjj0")("2bdf5e98", n, !1);
    },
    "M/am": function(e, t, r) {
        (e.exports = r("FZ+f")(!1)).push([
            e.i,
            "table.table,table.table th,table.table thead,table.table th td{border-top:none}",
            ""
        ]);
    },
    MAlW: function(e, t) {
        for (var r = [], n = 0; n < 256; ++n)
            r[n] = (n + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var n = t || 0,
                a = r;
            return (
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]] +
                "-" +
                a[e[n++]] +
                a[e[n++]] +
                "-" +
                a[e[n++]] +
                a[e[n++]] +
                "-" +
                a[e[n++]] +
                a[e[n++]] +
                "-" +
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]] +
                a[e[n++]]
            );
        };
    },
    NKE6: function(e, t, r) {
        var n = r("xA5w");
        e.exports = function(e, t) {
            var r = n(e).getTime(),
                a = n(t).getTime();
            return r < a ? -1 : r > a ? 1 : 0;
        };
    },
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: { one: "1 second", other: "{{count}} seconds" },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: { one: "1 minute", other: "{{count}} minutes" },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: { one: "1 hour", other: "{{count}} hours" },
                xDays: { one: "1 day", other: "{{count}} days" },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: { one: "1 month", other: "{{count}} months" },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: { one: "1 year", other: "{{count}} years" },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, r, n) {
                    var a;
                    return (
                        (n = n || {}),
                        (a =
                            "string" == typeof e[t]
                                ? e[t]
                                : 1 === r
                                  ? e[t].one
                                  : e[t].other.replace("{{count}}", r)),
                        n.addSuffix
                            ? n.comparison > 0 ? "in " + a : a + " ago"
                            : a
                    );
                }
            };
        };
    },
    SJLv: function(e, t) {
        var r = [
            "M",
            "MM",
            "Q",
            "D",
            "DD",
            "DDD",
            "DDDD",
            "d",
            "E",
            "W",
            "WW",
            "YY",
            "YYYY",
            "GG",
            "GGGG",
            "H",
            "HH",
            "h",
            "hh",
            "m",
            "mm",
            "s",
            "ss",
            "S",
            "SS",
            "SSS",
            "Z",
            "ZZ",
            "X",
            "x"
        ];
        e.exports = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            var a = r
                .concat(t)
                .sort()
                .reverse();
            return new RegExp(
                "(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)",
                "g"
            );
        };
    },
    YRFD: function(e, t, r) {
        var n = r("xA5w");
        e.exports = function(e, t) {
            var r = n(e).getTime(),
                a = n(t).getTime();
            return r > a ? -1 : r < a ? 1 : 0;
        };
    },
    Zrlr: function(e, t, r) {
        "use strict";
        (t.__esModule = !0),
            (t.default = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            });
    },
    fxRn: function(e, t, r) {
        r("+tPU"), r("zQR9"), (e.exports = r("g8Ux"));
    },
    g8Ux: function(e, t, r) {
        var n = r("77Pl"),
            a = r("3fs2");
        e.exports = r("FeBl").getIterator = function(e) {
            var t = a(e);
            if ("function" != typeof t)
                throw TypeError(e + " is not iterable!");
            return n(t.call(e));
        };
    },
    i4uy: function(e, t, r) {
        (function(t) {
            var r,
                n = t.crypto || t.msCrypto;
            if (n && n.getRandomValues) {
                var a = new Uint8Array(16);
                r = function() {
                    return n.getRandomValues(a), a;
                };
            }
            if (!r) {
                var s = new Array(16);
                r = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                            (s[t] = (e >>> ((3 & t) << 3)) & 255);
                    return s;
                };
            }
            e.exports = r;
        }.call(t, r("DuR2")));
    },
    jQas: function(e, t, r) {
        var n = r("SJLv");
        e.exports = function() {
            var e = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                t = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                r = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                s = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                o = ["AM", "PM"],
                u = ["am", "pm"],
                i = ["a.m.", "p.m."],
                c = {
                    MMM: function(t) {
                        return e[t.getMonth()];
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()];
                    },
                    dd: function(e) {
                        return r[e.getDay()];
                    },
                    ddd: function(e) {
                        return a[e.getDay()];
                    },
                    dddd: function(e) {
                        return s[e.getDay()];
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0];
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? u[1] : u[0];
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? i[1] : i[0];
                    }
                };
            return (
                ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                    c[e + "o"] = function(t, r) {
                        return (function(e) {
                            var t = e % 100;
                            if (t > 20 || t < 10)
                                switch (t % 10) {
                                    case 1:
                                        return e + "st";
                                    case 2:
                                        return e + "nd";
                                    case 3:
                                        return e + "rd";
                                }
                            return e + "th";
                        })(r[e](t));
                    };
                }),
                { formatters: c, formattingTokensRegExp: n(c) }
            );
        };
    },
    mXYp: function(e, t, r) {
        var n = r("YRFD"),
            a = r("xA5w"),
            s = r("25hp"),
            o = r("GI7G"),
            u = r("uyaC"),
            i = 1440,
            c = 2520,
            l = 43200,
            f = 86400;
        e.exports = function(e, t, r) {
            var d = r || {},
                h = n(e, t),
                p = d.locale,
                v = u.distanceInWords.localize;
            p &&
                p.distanceInWords &&
                p.distanceInWords.localize &&
                (v = p.distanceInWords.localize);
            var y,
                m,
                x = { addSuffix: Boolean(d.addSuffix), comparison: h };
            h > 0 ? ((y = a(e)), (m = a(t))) : ((y = a(t)), (m = a(e)));
            var g,
                b = s(m, y),
                M = m.getTimezoneOffset() - y.getTimezoneOffset(),
                w = Math.round(b / 60) - M;
            if (w < 2)
                return d.includeSeconds
                    ? b < 5
                      ? v("lessThanXSeconds", 5, x)
                      : b < 10
                        ? v("lessThanXSeconds", 10, x)
                        : b < 20
                          ? v("lessThanXSeconds", 20, x)
                          : b < 40
                            ? v("halfAMinute", null, x)
                            : v(b < 60 ? "lessThanXMinutes" : "xMinutes", 1, x)
                    : 0 === w
                      ? v("lessThanXMinutes", 1, x)
                      : v("xMinutes", w, x);
            if (w < 45) return v("xMinutes", w, x);
            if (w < 90) return v("aboutXHours", 1, x);
            if (w < i) return v("aboutXHours", Math.round(w / 60), x);
            if (w < c) return v("xDays", 1, x);
            if (w < l) return v("xDays", Math.round(w / i), x);
            if (w < f) return v("aboutXMonths", (g = Math.round(w / l)), x);
            if ((g = o(m, y)) < 12) return v("xMonths", Math.round(w / l), x);
            var D = g % 12,
                A = Math.floor(g / 12);
            return D < 3
                ? v("aboutXYears", A, x)
                : D < 9 ? v("overXYears", A, x) : v("almostXYears", A + 1, x);
        };
    },
    nGa0: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r("/fGl"),
            a = r("4I9D"),
            s = !1;
        var o = function(e) {
                s || r("L7/7");
            },
            u = r("VU/8")(n.a, a.a, !1, o, null, null);
        (u.options.__file = "pages/passports/index.vue"),
            (t.default = u.exports);
    },
    orNa: function(e, t, r) {
        var n = r("xA5w");
        e.exports = function(e, t) {
            var r = n(e),
                a = n(t);
            return (
                12 * (r.getFullYear() - a.getFullYear()) +
                (r.getMonth() - a.getMonth())
            );
        };
    },
    uyaC: function(e, t, r) {
        var n = r("Ptqd"),
            a = r("jQas");
        e.exports = { distanceInWords: n(), format: a() };
    },
    vBvW: function(e, t, r) {
        var n = r("mXYp");
        e.exports = function(e, t) {
            return n(Date.now(), e, t);
        };
    },
    wxAW: function(e, t, r) {
        "use strict";
        t.__esModule = !0;
        var n,
            a = r("C4MV"),
            s = (n = a) && n.__esModule ? n : { default: n };
        t.default = (function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        (0, s.default)(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        })();
    },
    xA5w: function(e, t, r) {
        var n = r("607n"),
            a = 36e5,
            s = 6e4,
            o = 2,
            u = /[T ]/,
            i = /:/,
            c = /^(\d{2})$/,
            l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            f = /^(\d{4})/,
            d = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            h = /^-(\d{2})$/,
            p = /^-?(\d{3})$/,
            v = /^-?(\d{2})-?(\d{2})$/,
            y = /^-?W(\d{2})$/,
            m = /^-?W(\d{2})-?(\d{1})$/,
            x = /^(\d{2}([.,]\d*)?)$/,
            g = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            b = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            M = /([Z+-].*)$/,
            w = /^(Z)$/,
            D = /^([+-])(\d{2})$/,
            A = /^([+-])(\d{2}):?(\d{2})$/;
        function T(e, t, r) {
            (t = t || 0), (r = r || 0);
            var n = new Date(0);
            n.setUTCFullYear(e, 0, 4);
            var a = 7 * t + r + 1 - (n.getUTCDay() || 7);
            return n.setUTCDate(n.getUTCDate() + a), n;
        }
        e.exports = function(e, t) {
            if (n(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var r = (t || {}).additionalDigits;
            r = null == r ? o : Number(r);
            var S = (function(e) {
                    var t,
                        r = {},
                        n = e.split(u);
                    if (
                        (i.test(n[0])
                            ? ((r.date = null), (t = n[0]))
                            : ((r.date = n[0]), (t = n[1])),
                        t)
                    ) {
                        var a = M.exec(t);
                        a
                            ? ((r.time = t.replace(a[1], "")),
                              (r.timezone = a[1]))
                            : (r.time = t);
                    }
                    return r;
                })(e),
                _ = (function(e, t) {
                    var r,
                        n = l[t],
                        a = d[t];
                    if ((r = f.exec(e) || a.exec(e))) {
                        var s = r[1];
                        return {
                            year: parseInt(s, 10),
                            restDateString: e.slice(s.length)
                        };
                    }
                    if ((r = c.exec(e) || n.exec(e))) {
                        var o = r[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        };
                    }
                    return { year: null };
                })(S.date, r),
                I = _.year,
                P = (function(e, t) {
                    if (null === t) return null;
                    var r, n, a, s;
                    if (0 === e.length)
                        return (n = new Date(0)).setUTCFullYear(t), n;
                    if ((r = h.exec(e)))
                        return (
                            (n = new Date(0)),
                            (a = parseInt(r[1], 10) - 1),
                            n.setUTCFullYear(t, a),
                            n
                        );
                    if ((r = p.exec(e))) {
                        n = new Date(0);
                        var o = parseInt(r[1], 10);
                        return n.setUTCFullYear(t, 0, o), n;
                    }
                    if ((r = v.exec(e))) {
                        (n = new Date(0)), (a = parseInt(r[1], 10) - 1);
                        var u = parseInt(r[2], 10);
                        return n.setUTCFullYear(t, a, u), n;
                    }
                    if ((r = y.exec(e)))
                        return (s = parseInt(r[1], 10) - 1), T(t, s);
                    if ((r = m.exec(e))) {
                        s = parseInt(r[1], 10) - 1;
                        var i = parseInt(r[2], 10) - 1;
                        return T(t, s, i);
                    }
                    return null;
                })(_.restDateString, I);
            if (P) {
                var J,
                    k = P.getTime(),
                    Y = 0;
                return (
                    S.time &&
                        (Y = (function(e) {
                            var t, r, n;
                            if ((t = x.exec(e)))
                                return (
                                    ((r = parseFloat(t[1].replace(",", "."))) %
                                        24) *
                                    a
                                );
                            if ((t = g.exec(e)))
                                return (
                                    (r = parseInt(t[1], 10)),
                                    (n = parseFloat(t[2].replace(",", "."))),
                                    (r % 24) * a + n * s
                                );
                            if ((t = b.exec(e))) {
                                (r = parseInt(t[1], 10)),
                                    (n = parseInt(t[2], 10));
                                var o = parseFloat(t[3].replace(",", "."));
                                return (r % 24) * a + n * s + 1e3 * o;
                            }
                            return null;
                        })(S.time)),
                    S.timezone
                        ? ((C = S.timezone),
                          (J = (W = w.exec(C))
                              ? 0
                              : (W = D.exec(C))
                                ? ((X = 60 * parseInt(W[2], 10)),
                                  "+" === W[1] ? -X : X)
                                : (W = A.exec(C))
                                  ? ((X =
                                        60 * parseInt(W[2], 10) +
                                        parseInt(W[3], 10)),
                                    "+" === W[1] ? -X : X)
                                  : 0))
                        : ((J = new Date(k + Y).getTimezoneOffset()),
                          (J = new Date(k + Y + J * s).getTimezoneOffset())),
                    new Date(k + Y + J * s)
                );
            }
            var C, W, X;
            return new Date(e);
        };
    }
});
