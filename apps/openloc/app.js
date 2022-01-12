! function(e, t) {
    "function" == typeof define && define.amd ? define(["b"], function(r) {
        return e.returnExportsGlobal = t()
    }) : "object" == typeof module && module.exports ? module.exports = t(require("b")) : e.OpenLocationCode = t()
}(this, function() {
    var e = {};
    e.CODE_PRECISION_NORMAL = 10, e.CODE_PRECISION_EXTRA = 11;
    var t = "23456789CFGHJMPQRVWX",
        r = t.length,
        n = [20, 1, .05, .0025, 125e-6],
        o = (e.getAlphabet = function() {
            return t
        }, e.isValid = function(e) {
            if (!e || "string" != typeof e) return !1;
            if (-1 == e.indexOf("+")) return !1;
            if (e.indexOf("+") != e.lastIndexOf("+")) return !1;
            if (1 == e.length) return !1;
            if (e.indexOf("+") > 8 || e.indexOf("+") % 2 == 1) return !1;
            if (e.indexOf("0") > -1) {
                if (0 == e.indexOf("0")) return !1;
                var r = e.match(new RegExp("(0+)", "g"));
                if (r.length > 1 || r[0].length % 2 == 1 || r[0].length > 6) return !1;
                if ("+" != e.charAt(e.length - 1)) return !1
            }
            if (e.length - e.indexOf("+") - 1 == 1) return !1;
            for (var n = 0, o = (e = e.replace(new RegExp("\\++"), "").replace(new RegExp("0+"), "")).length; n < o; n++) {
                var i = e.charAt(n).toUpperCase();
                if ("+" != i && -1 == t.indexOf(i)) return !1
            }
            return !0
        }),
        i = e.isShort = function(e) {
            return !!o(e) && (e.indexOf("+") >= 0 && e.indexOf("+") < 8)
        },
        a = e.isFull = function(e) {
            return !!o(e) && (!i(e) && (!(t.indexOf(e.charAt(0).toUpperCase()) * r >= 180) && !(e.length > 1 && t.indexOf(e.charAt(1).toUpperCase()) * r >= 360)))
        },
        u = e.encode = function(t, r, n) {
            if (t = Number(t), r = Number(r), n = void 0 === n ? e.CODE_PRECISION_NORMAL : Number(n), isNaN(t) || isNaN(r) || isNaN(n)) throw "ValueError: Parameters are not numbers";
            if (n < 2 || n < 10 && n % 2 == 1) throw "IllegalArgumentException: Invalid Open Location Code length";
            t = l(t), r = h(r), 90 == t && (t -= d(n));
            var o = s(t, r, Math.min(n, 10));
            return n > 10 && (o += c(t, r, n - 10)), o
        },
        f = e.decode = function(e) {
            if (!a(e)) throw "IllegalArgumentException: Passed Open Location Code is not a valid full code: " + e;
            e = (e = (e = e.replace("+", "")).replace(new RegExp("0+"), "")).toUpperCase();
            var t = g(e.substring(0, 10));
            if (e.length <= 10) return t;
            var r = C(e.substring(10));
            return x(t.latitudeLo + r.latitudeLo, t.longitudeLo + r.longitudeLo, t.latitudeLo + r.latitudeHi, t.longitudeLo + r.longitudeHi, t.codeLength + r.codeLength)
        },
        l = (e.recoverNearest = function(e, t, r) {
            if (!i(e)) {
                if (a(e)) return e;
                throw "ValueError: Passed short code is not valid: " + e
            }
            if (t = Number(t), r = Number(r), isNaN(t) || isNaN(r)) throw "ValueError: Reference position are not numbers";
            t = l(t), r = h(r);
            var n = 8 - (e = e.toUpperCase()).indexOf("+"),
                o = Math.pow(20, 2 - n / 2),
                d = o / 2,
                s = f(u(t, r).substr(0, n) + e);
            return t + d < s.latitudeCenter && s.latitudeCenter - o >= -90 ? s.latitudeCenter -= o : t - d > s.latitudeCenter && s.latitudeCenter + o <= 90 && (s.latitudeCenter += o), r + d < s.longitudeCenter ? s.longitudeCenter -= o : r - d > s.longitudeCenter && (s.longitudeCenter += o), u(s.latitudeCenter, s.longitudeCenter, s.codeLength)
        }, e.shorten = function(e, t, r) {
            if (!a(e)) throw "ValueError: Passed code is not valid and full: " + e;
            if (-1 != e.indexOf("0")) throw "ValueError: Cannot shorten padded codes: " + e;
            var e = e.toUpperCase(),
                o = f(e);
            if (o.codeLength < 6) throw "ValueError: Code length must be at least 6";
            if (t = Number(t), r = Number(r), isNaN(t) || isNaN(r)) throw "ValueError: Reference position are not numbers";
            t = l(t), r = h(r);
            for (var i = Math.max(Math.abs(o.latitudeCenter - t), Math.abs(o.longitudeCenter - r)), u = n.length - 2; u >= 1; u--)
                if (i < .3 * n[u]) return e.substring(2 * (u + 1));
            return e
        }, function(e) {
            return Math.min(90, Math.max(-90, e))
        }),
        d = function(e) {
            return e <= 10 ? Math.pow(20, Math.floor(e / -2 + 2)) : Math.pow(20, -3) / Math.pow(5, e - 10)
        },
        h = function(e) {
            for (; e < -180;) e += 360;
            for (; e >= 180;) e -= 360;
            return e
        },
        s = function(e, r, o) {
            for (var i = "", a = e + 90, u = r + 180, f = 0; f < o;) {
                var l = n[Math.floor(f / 2)],
                    d = Math.floor(a / l);
                a -= d * l, i += t.charAt(d), f += 1, u -= (d = Math.floor(u / l)) * l, i += t.charAt(d), 8 == (f += 1) && f < o && (i += "+")
            }
            return i.length < 8 && (i += Array(8 - i.length + 1).join("0")), 8 == i.length && (i += "+"), i
        },
        c = function(e, r, n) {
            var o = "",
                i = 125e-6,
                a = 125e-6;
            e += 90, r += 180;
            for (var u = (e %= 1) % i, f = (r %= 1) % a, l = 0; l < n; l++) {
                var d = Math.floor(u / (i / 5)),
                    h = Math.floor(f / (a / 4));
                u -= d * (i /= 5), f -= h * (a /= 4), o += t.charAt(4 * d + h)
            }
            return o
        },
        g = function(e) {
            var t = p(e, 0),
                r = p(e, 1);
            return new x(t[0] - 90, r[0] - 180, t[1] - 90, r[1] - 180, e.length)
        },
        p = function(e, r) {
            for (var o = 0, i = 0; 2 * o + r < e.length;) i += t.indexOf(e.charAt(2 * o + r)) * n[o], o += 1;
            return [i, i + n[o - 1]]
        },
        C = function(e) {
            for (var r = 0, n = 0, o = 125e-6, i = 125e-6, a = 0; a < e.length;) {
                var u = t.indexOf(e.charAt(a));
                r += Math.floor(u / 4) * (o /= 5), n += u % 4 * (i /= 4), a += 1
            }
            return x(r, n, r + o, n + i, e.length)
        },
        x = e.CodeArea = function(t, r, n, o, i) {
            return new e.CodeArea.fn.init(t, r, n, o, i)
        };
    return x.fn = x.prototype = {
        init: function(e, t, r, n, o) {
            this.latitudeLo = e, this.longitudeLo = t, this.latitudeHi = r, this.longitudeHi = n, this.codeLength = o, this.latitudeCenter = Math.min(e + (r - e) / 2, 90), this.longitudeCenter = Math.min(t + (n - t) / 2, 180)
        }
    }, x.fn.init.prototype = x.fn, e
});

Bangle.setGPSPower(1);
var fix;
Bangle.removeAllListeners();
Bangle.on('GPS', function(f) {
    fix = f;
    g.clear();
    g.setFontAlign(0, 0);
    if (!f.fix) {
        g.setFont("6x8", 3);
        g.drawString("Waiting for", 120, 70);
        g.drawString("GPS Fix", 120, 110);
        g.setFont("6x8", 2);
        g.drawString(f.satellites + " satellites", 120, 170);
    } else {
        g.setFont("6x8", 5);
        var code = OpenLocationCode.encode(fix.lat, fix.lon);
        var mid = code.length / 2;
        g.drawString(code.substr(0, mid), 120, 100);
        g.drawString(code.substr(mid), 120, 140);
    }
});