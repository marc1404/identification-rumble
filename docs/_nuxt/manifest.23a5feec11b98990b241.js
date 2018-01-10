!(function(e) {
    var n = window.webpackJsonp;
    window.webpackJsonp = function(r, a, c) {
        for (var u, i, f, s = 0, p = []; s < r.length; s++)
            (i = r[s]), t[i] && p.push(t[i][0]), (t[i] = 0);
        for (u in a)
            Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
        for (n && n(r, a, c); p.length; ) p.shift()();
        if (c) for (s = 0; s < c.length; s++) f = o((o.s = c[s]));
        return f;
    };
    var r = {},
        t = { 7: 0 };
    function o(n) {
        if (r[n]) return r[n].exports;
        var t = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    (o.e = function(e) {
        var n = t[e];
        if (0 === n)
            return new Promise(function(e) {
                e();
            });
        if (n) return n[2];
        var r = new Promise(function(r, o) {
            n = t[e] = [r, o];
        });
        n[2] = r;
        var a = document.getElementsByTagName("head")[0],
            c = document.createElement("script");
        (c.type = "text/javascript"),
            (c.charset = "utf-8"),
            (c.async = !0),
            (c.timeout = 12e4),
            o.nc && c.setAttribute("nonce", o.nc),
            (c.src =
                o.p +
                "" +
                ({
                    0: "pages/passports/_uuid",
                    1: "pages/passports/index",
                    2: "pages/index",
                    3: "pages/dilemmas",
                    4: "layouts/default",
                    5: "vendor",
                    6: "app"
                }[e] || e) +
                "." +
                {
                    0: "83cf801f4350fe62d6f7",
                    1: "e09468beaecb8a1363bc",
                    2: "9e36555ce06c728b2f49",
                    3: "206da6e8559909bc767a",
                    4: "33648aace6b47d3428a3",
                    5: "d7ba051f10adb6208d61",
                    6: "e6f5be9169d86c3f6f6d"
                }[e] +
                ".js");
        var u = setTimeout(i, 12e4);
        function i() {
            (c.onerror = c.onload = null), clearTimeout(u);
            var n = t[e];
            0 !== n &&
                (n && n[1](new Error("Loading chunk " + e + " failed.")),
                (t[e] = void 0));
        }
        return (c.onerror = c.onload = i), a.appendChild(c), r;
    }),
        (o.m = e),
        (o.c = r),
        (o.d = function(e, n, r) {
            o.o(e, n) ||
                Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                });
        }),
        (o.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return o.d(n, "a", n), n;
        }),
        (o.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (o.p = "/_nuxt/"),
        (o.oe = function(e) {
            throw (console.error(e), e);
        });
})([]);
