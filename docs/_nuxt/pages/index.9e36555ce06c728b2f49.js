webpackJsonp([2], {
    "+ptz": function(e, t, n) {
        "use strict";
        var a = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "row" }, [
                n("div", { staticClass: "col-12 col-lg-8" }, [
                    n("h1", [e._v("Camera")]),
                    n(
                        "div",
                        { staticClass: "mb-3" },
                        e._l(e.cameras, function(t) {
                            return n(
                                "div",
                                { key: t.id, staticClass: "form-check" },
                                [
                                    n("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.selectedCamera,
                                                expression: "selectedCamera"
                                            }
                                        ],
                                        staticClass: "form-check-input",
                                        attrs: {
                                            id: t.id,
                                            type: "radio",
                                            name: "exampleRadios"
                                        },
                                        domProps: {
                                            value: t,
                                            checked: e._q(e.selectedCamera, t)
                                        },
                                        on: {
                                            change: function(n) {
                                                e.selectedCamera = t;
                                            }
                                        }
                                    }),
                                    n(
                                        "label",
                                        {
                                            staticClass: "form-check-label",
                                            attrs: { for: t.id }
                                        },
                                        [
                                            e._v(
                                                "\n                    " +
                                                    e._s(t.name) +
                                                    "\n                "
                                            )
                                        ]
                                    )
                                ]
                            );
                        })
                    ),
                    n("video", { ref: "video" })
                ]),
                n("div", { staticClass: "col-12 col-lg-4" }, [
                    n("h1", [e._v("Scans")]),
                    n(
                        "ul",
                        e._l(e.scans, function(t) {
                            return n("li", [e._v(e._s(t))]);
                        })
                    )
                ])
            ]);
        };
        a._withStripped = !0;
        var s = { render: a, staticRenderFns: [] };
        t.a = s;
    },
    "/TYz": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n("Tikd"),
            s = n("+ptz"),
            r = n("VU/8")(a.a, s.a, !1, null, null, null);
        (r.options.__file = "pages/index.vue"), (t.default = r.exports);
    },
    Tikd: function(e, t, n) {
        "use strict";
        var a = n("Xxa5"),
            s = n.n(a),
            r = n("exGp"),
            c = n.n(r),
            i = n("//Fk"),
            o = n.n(i);
        t.a = {
            name: "Home",
            head: function() {
                return { title: "Home" };
            },
            data: function() {
                return { selectedCamera: null, scans: [], cameras: [] };
            },
            methods: {
                getInstascan: function() {
                    return new o.a(function(e) {
                        var t = setInterval(function() {
                            var n = window.Instascan;
                            n && (clearInterval(t), e(n));
                        }, 1);
                    });
                }
            },
            mounted: (function() {
                var e = c()(
                    s.a.mark(function e() {
                        var t,
                            n,
                            a,
                            r,
                            c = this;
                        return s.a.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                this.getInstascan()
                                            );
                                        case 2:
                                            return (
                                                (t = e.sent),
                                                (n = t.Scanner),
                                                (a = t.Camera),
                                                (r = this.$refs.video),
                                                (this.scanner = new n({
                                                    video: r
                                                })),
                                                this.scanner.addListener(
                                                    "scan",
                                                    function(e) {
                                                        c.scans.push(e);
                                                    }
                                                ),
                                                (e.next = 10),
                                                a.getCameras()
                                            );
                                        case 10:
                                            this.cameras = e.sent;
                                        case 11:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
                );
                return function() {
                    return e.apply(this, arguments);
                };
            })(),
            beforeDestroy: function() {
                this.scanner.stop().catch(function(e) {
                    return console.error(e);
                }),
                    (this.scanner = null);
            },
            watch: {
                selectedCamera: (function() {
                    var e = c()(
                        s.a.mark(function e(t) {
                            return s.a.wrap(
                                function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    this.scanner.stop()
                                                );
                                            case 2:
                                                t && this.scanner.start(t);
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    );
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()
            }
        };
    }
});
