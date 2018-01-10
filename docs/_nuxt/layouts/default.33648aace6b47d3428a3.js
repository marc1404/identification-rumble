webpackJsonp([4], {
    DLCH: function(t, s, a) {
        "use strict";
        var i = function() {
            var t = this.$createElement,
                s = this._self._c || t;
            return s("div", { staticClass: "container-fluid py-3" }, [
                this._m(0),
                s("hr"),
                s("div", { staticClass: "row" }, [
                    s("div", { staticClass: "col-12 col-md-4 col-lg-2" }, [
                        s(
                            "nav",
                            { staticClass: "nav nav-pills flex-column" },
                            [
                                s(
                                    "nuxt-link",
                                    {
                                        staticClass: "nav-item nav-link",
                                        attrs: { to: "/", exact: "" }
                                    },
                                    [this._v("Home")]
                                ),
                                s(
                                    "nuxt-link",
                                    {
                                        staticClass: "nav-item nav-link",
                                        attrs: { to: "/dilemmas" }
                                    },
                                    [this._v("Dilemmas")]
                                ),
                                s(
                                    "nuxt-link",
                                    {
                                        staticClass: "nav-item nav-link",
                                        attrs: { to: "/passports" }
                                    },
                                    [this._v("Passports")]
                                ),
                                s(
                                    "nuxt-link",
                                    {
                                        staticClass: "nav-item nav-link",
                                        attrs: { to: "/evaluation" }
                                    },
                                    [this._v("Evaluation")]
                                )
                            ],
                            1
                        )
                    ]),
                    s(
                        "div",
                        { staticClass: "col-12 col-md-8 col-lg-10" },
                        [s("nuxt")],
                        1
                    )
                ])
            ]);
        };
        i._withStripped = !0;
        var l = {
            render: i,
            staticRenderFns: [
                function() {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("h1", [
                        this._v("\n        Identification Rumble\n        "),
                        s("small", { staticClass: "text-muted" }, [
                            this._v("Verzetsmuseum Amsterdam")
                        ])
                    ]);
                }
            ]
        };
        s.a = l;
    },
    Ma2J: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", { value: !0 });
        var i = a("DLCH"),
            l = a("VU/8")(null, i.a, !1, null, null, null);
        (l.options.__file = "layouts/default.vue"), (s.default = l.exports);
    }
});
