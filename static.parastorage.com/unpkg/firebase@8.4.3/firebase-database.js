!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t(
        (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase
      );
})(this, function (Ru) {
  "use strict";
  try {
    !function () {
      function e(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var t = e(Ru),
        r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, a, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(r, i);
          }
          o((u = u.apply(e, a || [])).next());
        });
      }
      function o(n, r) {
        var i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          e = { next: t(0), throw: t(1), return: t(2) };
        return (
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (a =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((a = o.return) && a.call(o), 0)
                          : o.next) &&
                      !(a = a.call(o, t[1])).done)
                  )
                    return a;
                  switch (((o = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = t);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(t);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = r.call(n, s);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  i = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return {
                value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                done: !e,
              };
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function a(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
          e[i] = t[n];
        return e;
      }
      function s(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          i < 128
            ? (t[n++] = i)
            : (i < 2048
                ? (t[n++] = (i >> 6) | 192)
                : (55296 == (64512 & i) &&
                  r + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(r + 1))
                    ? ((i =
                        65536 +
                        ((1023 & i) << 10) +
                        (1023 & e.charCodeAt(++r))),
                      (t[n++] = (i >> 18) | 240),
                      (t[n++] = ((i >> 12) & 63) | 128))
                    : (t[n++] = (i >> 12) | 224),
                  (t[n++] = ((i >> 6) & 63) | 128)),
              (t[n++] = (63 & i) | 128));
        }
        return t;
      }
      function u(e) {
        try {
          return c.decodeString(e, !0);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      }
      var h = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: "${JSCORE_VERSION}",
        },
        g = function (e, t) {
          if (!e) throw m(t);
        },
        m = function (e) {
          return new Error(
            "Firebase Database (" +
              h.SDK_VERSION +
              ") INTERNAL ASSERT FAILED: " +
              e
          );
        },
        c = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray: function (e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            for (
              var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                i = 0;
              i < e.length;
              i += 3
            ) {
              var o = e[i],
                a = i + 1 < e.length,
                s = a ? e[i + 1] : 0,
                u = i + 2 < e.length,
                l = u ? e[i + 2] : 0,
                h = o >> 2,
                o = ((3 & o) << 4) | (s >> 4),
                s = ((15 & s) << 2) | (l >> 6),
                l = 63 & l;
              u || ((l = 64), a || (s = 64)), r.push(n[h], n[o], n[s], n[l]);
            }
            return r.join("");
          },
          encodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(s(e), t);
          },
          decodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  for (var t = [], n = 0, r = 0; n < e.length; ) {
                    var i,
                      o,
                      a,
                      s = e[n++];
                    s < 128
                      ? (t[r++] = String.fromCharCode(s))
                      : 191 < s && s < 224
                      ? ((o = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((31 & s) << 6) | (63 & o)
                        )))
                      : 239 < s && s < 365
                      ? ((i =
                          (((7 & s) << 18) |
                            ((63 & (o = e[n++])) << 12) |
                            ((63 & (a = e[n++])) << 6) |
                            (63 & e[n++])) -
                          65536),
                        (t[r++] = String.fromCharCode(55296 + (i >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & i))))
                      : ((o = e[n++]),
                        (a = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((15 & s) << 12) | ((63 & o) << 6) | (63 & a)
                        )));
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray: function (e, t) {
            this.init_();
            for (
              var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                i = 0;
              i < e.length;

            ) {
              var o = n[e.charAt(i++)],
                a = i < e.length ? n[e.charAt(i)] : 0,
                s = ++i < e.length ? n[e.charAt(i)] : 64,
                u = ++i < e.length ? n[e.charAt(i)] : 64;
              if ((++i, null == o || null == a || null == s || null == u))
                throw Error();
              o = (o << 2) | (a >> 4);
              r.push(o),
                64 !== s &&
                  ((a = ((a << 4) & 240) | (s >> 2)),
                  r.push(a),
                  64 !== u && ((u = ((s << 6) & 192) | u), r.push(u)));
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e) >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        };
      function d(e) {
        return (function e(t, n) {
          if (!(n instanceof Object)) return n;
          switch (n.constructor) {
            case Date:
              var r = n;
              return new Date(r.getTime());
            case Object:
              void 0 === t && (t = {});
              break;
            case Array:
              t = [];
              break;
            default:
              return n;
          }
          for (var i in n)
            n.hasOwnProperty(i) && p(i) && (t[i] = e(t[i], n[i]));
          return t;
        })(void 0, e);
      }
      function p(e) {
        return "__proto__" !== e;
      }
      var f =
        ((v.prototype.wrapCallback = function (n) {
          var r = this;
          return function (e, t) {
            e ? r.reject(e) : r.resolve(t),
              "function" == typeof n &&
                (r.promise.catch(function () {}),
                1 === n.length ? n(e) : n(e, t));
          };
        }),
        v);
      function v() {
        var n = this;
        (this.reject = function () {}),
          (this.resolve = function () {}),
          (this.promise = new Promise(function (e, t) {
            (n.resolve = e), (n.reject = t);
          }));
      }
      function w() {
        return (
          "undefined" != typeof window &&
          (window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
            "undefined" != typeof navigator &&
              "string" == typeof navigator.userAgent
              ? navigator.userAgent
              : ""
          )
        );
      }
      function C() {
        return !0 === h.NODE_ADMIN;
      }
      var b,
        E = "FirebaseError",
        S = (n(I, (b = Error)), I);
      function I(e, t, n) {
        t = b.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = n),
          (t.name = E),
          Object.setPrototypeOf(t, I.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, T.prototype.create),
          t
        );
      }
      var T =
        ((P.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r,
            i = t[0] || {},
            o = this.service + "/" + e,
            e = this.errors[e],
            e = e
              ? ((r = i),
                e.replace(N, function (e, t) {
                  var n = r[t];
                  return null != n ? String(n) : "<" + t + "?>";
                }))
              : "Error",
            e = this.serviceName + ": " + e + " (" + o + ").";
          return new S(o, e, i);
        }),
        P);
      function P(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var N = /\{\$([^}]+)}/g;
      function x(e) {
        return JSON.parse(e);
      }
      function R(e) {
        return JSON.stringify(e);
      }
      function k(e) {
        var t = {},
          n = {},
          r = {},
          i = "";
        try {
          var o = e.split("."),
            t = x(u(o[0]) || ""),
            n = x(u(o[1]) || ""),
            i = o[2],
            r = n.d || {};
          delete n.d;
        } catch (e) {}
        return { header: t, claims: n, data: r, signature: i };
      }
      function O(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function D(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }
      function A(e) {
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function L(e, t, n) {
        var r,
          i = {};
        for (r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            (i[r] = t.call(n, e[r], r, e));
        return i;
      }
      function M(e) {
        for (var n = [], t = 0, r = Object.entries(e); t < r.length; t++) {
          var i = r[t];
          !(function (t, e) {
            Array.isArray(e)
              ? e.forEach(function (e) {
                  n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
                })
              : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
          })(i[0], i[1]);
        }
        return n.length ? "&" + n.join("&") : "";
      }
      var F =
        ((q.prototype.reset = function () {
          (this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0);
        }),
        (q.prototype.compress_ = function (e, t) {
          t = t || 0;
          var n = this.W_;
          if ("string" == typeof e)
            for (var r = 0; r < 16; r++)
              (n[r] =
                (e.charCodeAt(t) << 24) |
                (e.charCodeAt(t + 1) << 16) |
                (e.charCodeAt(t + 2) << 8) |
                e.charCodeAt(t + 3)),
                (t += 4);
          else
            for (r = 0; r < 16; r++)
              (n[r] =
                (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
                (t += 4);
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
            n[r] = 4294967295 & ((i << 1) | (i >>> 31));
          }
          for (
            var o,
              a = this.chain_[0],
              s = this.chain_[1],
              u = this.chain_[2],
              l = this.chain_[3],
              h = this.chain_[4],
              r = 0;
            r < 80;
            r++
          )
            var c =
                r < 40
                  ? r < 20
                    ? ((o = l ^ (s & (u ^ l))), 1518500249)
                    : ((o = s ^ u ^ l), 1859775393)
                  : r < 60
                  ? ((o = (s & u) | (l & (s | u))), 2400959708)
                  : ((o = s ^ u ^ l), 3395469782),
              i = (((a << 5) | (a >>> 27)) + o + h + c + n[r]) & 4294967295,
              h = l,
              l = u,
              u = 4294967295 & ((s << 30) | (s >>> 2)),
              s = a,
              a = i;
          (this.chain_[0] = (this.chain_[0] + a) & 4294967295),
            (this.chain_[1] = (this.chain_[1] + s) & 4294967295),
            (this.chain_[2] = (this.chain_[2] + u) & 4294967295),
            (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
            (this.chain_[4] = (this.chain_[4] + h) & 4294967295);
        }),
        (q.prototype.update = function (e, t) {
          if (null != e) {
            for (
              var n = (t = void 0 === t ? e.length : t) - this.blockSize,
                r = 0,
                i = this.buf_,
                o = this.inbuf_;
              r < t;

            ) {
              if (0 === o)
                for (; r <= n; ) this.compress_(e, r), (r += this.blockSize);
              if ("string" == typeof e) {
                for (; r < t; )
                  if (((i[o] = e.charCodeAt(r)), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
              } else
                for (; r < t; )
                  if (((i[o] = e[r]), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
            }
            (this.inbuf_ = o), (this.total_ += t);
          }
        }),
        (q.prototype.digest = function () {
          var e = [],
            t = 8 * this.total_;
          this.inbuf_ < 56
            ? this.update(this.pad_, 56 - this.inbuf_)
            : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; 56 <= n; n--)
            (this.buf_[n] = 255 & t), (t /= 256);
          this.compress_(this.buf_);
          for (var r = 0, n = 0; n < 5; n++)
            for (var i = 24; 0 <= i; i -= 8)
              (e[r] = (this.chain_[n] >> i) & 255), ++r;
          return e;
        }),
        q);
      function q() {
        (this.chain_ = []),
          (this.buf_ = []),
          (this.W_ = []),
          (this.pad_ = []),
          (this.inbuf_ = 0),
          (this.total_ = 0),
          (this.blockSize = 64),
          (this.pad_[0] = 128);
        for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
        this.reset();
      }
      function W(e, t, n, r) {
        var i;
        if (
          (r < t
            ? (i = "at least " + t)
            : n < r && (i = 0 === n ? "none" : "no more than " + n),
          i)
        )
          throw new Error(
            e +
              " failed: Was called with " +
              r +
              (1 === r ? " argument." : " arguments.") +
              " Expects " +
              i +
              "."
          );
      }
      function j(e, t) {
        return e + " failed: " + t + " argument ";
      }
      function U(e, t, n, r) {
        if ((!r || n) && "function" != typeof n)
          throw new Error(j(e, t) + "must be a valid function.");
      }
      function B(e, t, n, r) {
        if ((!r || n) && ("object" != typeof n || null === n))
          throw new Error(j(e, t) + "must be a valid context object.");
      }
      function H(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? t++
            : r < 2048
            ? (t += 2)
            : 55296 <= r && r <= 56319
            ? ((t += 4), n++)
            : (t += 3);
        }
        return t;
      }
      function V(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var z =
        ((Q.prototype.setInstantiationMode = function (e) {
          return (this.instantiationMode = e), this;
        }),
        (Q.prototype.setMultipleInstances = function (e) {
          return (this.multipleInstances = e), this;
        }),
        (Q.prototype.setServiceProps = function (e) {
          return (this.serviceProps = e), this;
        }),
        (Q.prototype.setInstanceCreatedCallback = function (e) {
          return (this.onInstanceCreated = e), this;
        }),
        Q);
      function Q(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      var Y = "[DEFAULT]",
        K =
          ((G.prototype.get = function (e) {
            void 0 === e && (e = Y);
            var t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
              var n = new f();
              if (
                (this.instancesDeferred.set(t, n),
                this.isInitialized(t) || this.shouldAutoInitialize())
              )
                try {
                  var r = this.getOrInitializeService({
                    instanceIdentifier: t,
                  });
                  r && n.resolve(r);
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise;
          }),
          (G.prototype.getImmediate = function (e) {
            var t = l({ identifier: Y, optional: !1 }, e),
              e = t.identifier,
              t = t.optional,
              n = this.normalizeInstanceIdentifier(e);
            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
              if (t) return null;
              throw Error("Service " + this.name + " is not available");
            }
            try {
              return this.getOrInitializeService({ instanceIdentifier: n });
            } catch (e) {
              if (t) return null;
              throw e;
            }
          }),
          (G.prototype.getComponent = function () {
            return this.component;
          }),
          (G.prototype.setComponent = function (e) {
            var t, n;
            if (e.name !== this.name)
              throw Error(
                "Mismatching Component " +
                  e.name +
                  " for Provider " +
                  this.name +
                  "."
              );
            if (this.component)
              throw Error(
                "Component for " + this.name + " has already been provided"
              );
            if (((this.component = e), this.shouldAutoInitialize())) {
              if ("EAGER" === e.instantiationMode)
                try {
                  this.getOrInitializeService({ instanceIdentifier: Y });
                } catch (e) {}
              try {
                for (
                  var r = _(this.instancesDeferred.entries()), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var o = y(i.value, 2),
                    a = o[0],
                    s = o[1],
                    u = this.normalizeInstanceIdentifier(a);
                  try {
                    var l = this.getOrInitializeService({
                      instanceIdentifier: u,
                    });
                    s.resolve(l);
                  } catch (e) {}
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }
          }),
          (G.prototype.clearInstance = function (e) {
            void 0 === e && (e = Y),
              this.instancesDeferred.delete(e),
              this.instances.delete(e);
          }),
          (G.prototype.delete = function () {
            return i(this, void 0, void 0, function () {
              var t;
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Array.from(this.instances.values())),
                      [
                        4,
                        Promise.all(
                          a(
                            a(
                              [],
                              y(
                                t
                                  .filter(function (e) {
                                    return "INTERNAL" in e;
                                  })
                                  .map(function (e) {
                                    return e.INTERNAL.delete();
                                  })
                              )
                            ),
                            y(
                              t
                                .filter(function (e) {
                                  return "_delete" in e;
                                })
                                .map(function (e) {
                                  return e._delete();
                                })
                            )
                          )
                        ),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (G.prototype.isComponentSet = function () {
            return null != this.component;
          }),
          (G.prototype.isInitialized = function (e) {
            return void 0 === e && (e = Y), this.instances.has(e);
          }),
          (G.prototype.initialize = function (e) {
            var t,
              n,
              r = (e = void 0 === e ? {} : e).instanceIdentifier,
              r = void 0 === r ? Y : r,
              e = e.options,
              e = void 0 === e ? {} : e,
              i = this.normalizeInstanceIdentifier(r);
            if (this.isInitialized(i))
              throw Error(
                this.name + "(" + i + ") has already been initialized"
              );
            if (!this.isComponentSet())
              throw Error(
                "Component " + this.name + " has not been registered yet"
              );
            var o = this.getOrInitializeService({
              instanceIdentifier: i,
              options: e,
            });
            try {
              for (
                var a = _(this.instancesDeferred.entries()), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var u = y(s.value, 2),
                  l = u[0],
                  u = u[1];
                i === this.normalizeInstanceIdentifier(l) && u.resolve(o);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            return o;
          }),
          (G.prototype.getOrInitializeService = function (e) {
            var t = e.instanceIdentifier,
              n = e.options,
              e = void 0 === n ? {} : n,
              r = this.instances.get(t);
            if (
              !r &&
              this.component &&
              ((r = this.component.instanceFactory(this.container, {
                instanceIdentifier: (n = t) === Y ? void 0 : n,
                options: e,
              })),
              this.instances.set(t, r),
              this.component.onInstanceCreated)
            )
              try {
                this.component.onInstanceCreated(this.container, t, r);
              } catch (e) {}
            return r || null;
          }),
          (G.prototype.normalizeInstanceIdentifier = function (e) {
            return !this.component || this.component.multipleInstances ? e : Y;
          }),
          (G.prototype.shouldAutoInitialize = function () {
            return (
              !!this.component &&
              "EXPLICIT" !== this.component.instantiationMode
            );
          }),
          G);
      function G(e, t) {
        (this.name = e),
          (this.container = t),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map());
      }
      var $,
        J =
          ((X.prototype.addComponent = function (e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet())
              throw new Error(
                "Component " +
                  e.name +
                  " has already been registered with " +
                  this.name
              );
            t.setComponent(e);
          }),
          (X.prototype.addOrOverwriteComponent = function (e) {
            this.getProvider(e.name).isComponentSet() &&
              this.providers.delete(e.name),
              this.addComponent(e);
          }),
          (X.prototype.getProvider = function (e) {
            if (this.providers.has(e)) return this.providers.get(e);
            var t = new K(e, this);
            return this.providers.set(e, t), t;
          }),
          (X.prototype.getProviders = function () {
            return Array.from(this.providers.values());
          }),
          X);
      function X(e) {
        (this.name = e), (this.providers = new Map());
      }
      ((mt = $ = $ || {})[(mt.DEBUG = 0)] = "DEBUG"),
        (mt[(mt.VERBOSE = 1)] = "VERBOSE"),
        (mt[(mt.INFO = 2)] = "INFO"),
        (mt[(mt.WARN = 3)] = "WARN"),
        (mt[(mt.ERROR = 4)] = "ERROR"),
        (mt[(mt.SILENT = 5)] = "SILENT");
      function Z(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
            o = ne[t];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                t +
                ")"
            );
          console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n));
        }
      }
      var ee = {
          debug: $.DEBUG,
          verbose: $.VERBOSE,
          info: $.INFO,
          warn: $.WARN,
          error: $.ERROR,
          silent: $.SILENT,
        },
        te = $.INFO,
        ne =
          (((Ct = {})[$.DEBUG] = "log"),
          (Ct[$.VERBOSE] = "log"),
          (Ct[$.INFO] = "info"),
          (Ct[$.WARN] = "warn"),
          (Ct[$.ERROR] = "error"),
          Ct),
        re =
          (Object.defineProperty(ie.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (e) {
              if (!(e in $))
                throw new TypeError(
                  'Invalid value "' + e + '" assigned to `logLevel`'
                );
              this._logLevel = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ie.prototype.setLogLevel = function (e) {
            this._logLevel = "string" == typeof e ? ee[e] : e;
          }),
          Object.defineProperty(ie.prototype, "logHandler", {
            get: function () {
              return this._logHandler;
            },
            set: function (e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(ie.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (e) {
              this._userLogHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ie.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.DEBUG], e)),
              this._logHandler.apply(this, a([this, $.DEBUG], e));
          }),
          (ie.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.VERBOSE], e)),
              this._logHandler.apply(this, a([this, $.VERBOSE], e));
          }),
          (ie.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.INFO], e)),
              this._logHandler.apply(this, a([this, $.INFO], e));
          }),
          (ie.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.WARN], e)),
              this._logHandler.apply(this, a([this, $.WARN], e));
          }),
          (ie.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.ERROR], e)),
              this._logHandler.apply(this, a([this, $.ERROR], e));
          }),
          ie);
      function ie(e) {
        (this.name = e),
          (this._logLevel = te),
          (this._logHandler = Z),
          (this._userLogHandler = null);
      }
      var oe =
        ((ae.prototype.set = function (e, t) {
          null == t
            ? this.domStorage_.removeItem(this.prefixedName_(e))
            : this.domStorage_.setItem(this.prefixedName_(e), R(t));
        }),
        (ae.prototype.get = function (e) {
          e = this.domStorage_.getItem(this.prefixedName_(e));
          return null == e ? null : x(e);
        }),
        (ae.prototype.remove = function (e) {
          this.domStorage_.removeItem(this.prefixedName_(e));
        }),
        (ae.prototype.prefixedName_ = function (e) {
          return this.prefix_ + e;
        }),
        (ae.prototype.toString = function () {
          return this.domStorage_.toString();
        }),
        ae);
      function ae(e) {
        (this.domStorage_ = e), (this.prefix_ = "firebase:");
      }
      var se =
        ((ue.prototype.set = function (e, t) {
          null == t ? delete this.cache_[e] : (this.cache_[e] = t);
        }),
        (ue.prototype.get = function (e) {
          return O(this.cache_, e) ? this.cache_[e] : null;
        }),
        (ue.prototype.remove = function (e) {
          delete this.cache_[e];
        }),
        ue);
      function ue() {
        (this.cache_ = {}), (this.isInMemoryStorage = !0);
      }
      function le(e) {
        var t = (function (e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var i,
              o = e.charCodeAt(r);
            55296 <= o &&
              o <= 56319 &&
              ((i = o - 55296),
              g(++r < e.length, "Surrogate pair missing trail surrogate."),
              (o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320))),
              o < 128
                ? (t[n++] = o)
                : (o < 2048
                    ? (t[n++] = (o >> 6) | 192)
                    : (o < 65536
                        ? (t[n++] = (o >> 12) | 224)
                        : ((t[n++] = (o >> 18) | 240),
                          (t[n++] = ((o >> 12) & 63) | 128)),
                      (t[n++] = ((o >> 6) & 63) | 128)),
                  (t[n++] = (63 & o) | 128));
          }
          return t;
        })(e);
        return (e = new F()).update(t), (e = e.digest()), c.encodeByteArray(e);
      }
      function he() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = "FIREBASE INTERNAL ERROR: " + Ce.apply(void 0, a([], y(e)));
        me.error(n);
      }
      function ce(e) {
        return (
          "number" == typeof e &&
          (e != e ||
            e === Number.POSITIVE_INFINITY ||
            e === Number.NEGATIVE_INFINITY)
        );
      }
      function de(e, t) {
        return e === t ? 0 : e < t ? -1 : 1;
      }
      function pe(e, t) {
        if (t && e in t) return t[e];
        throw new Error("Missing required key (" + e + ") in object: " + R(t));
      }
      function fe(e, t) {
        var n = e.length;
        if (n <= t) return [e];
        for (var r = [], i = 0; i < n; i += t)
          n < i + t ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
        return r;
      }
      var _e,
        ye = function (e) {
          try {
            if ("undefined" != typeof window && void 0 !== window[e]) {
              var t = window[e];
              return (
                t.setItem("firebase:sentinel", "cache"),
                t.removeItem("firebase:sentinel"),
                new oe(t)
              );
            }
          } catch (e) {}
          return new se();
        },
        ve = ye("localStorage"),
        ge = ye("sessionStorage"),
        me = new re("@firebase/database"),
        we =
          ((_e = 1),
          function () {
            return _e++;
          }),
        Ce = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          for (var n = "", r = 0; r < e.length; r++) {
            var i = e[r];
            Array.isArray(i) ||
            (i && "object" == typeof i && "number" == typeof i.length)
              ? (n += Ce.apply(null, i))
              : (n += "object" == typeof i ? R(i) : i),
              (n += " ");
          }
          return n;
        },
        be = null,
        Ee = !0,
        Se = function (e, t) {
          g(
            !t || !0 === e || !1 === e,
            "Can't turn on custom loggers persistently."
          ),
            !0 === e
              ? ((me.logLevel = $.VERBOSE),
                (be = me.log.bind(me)),
                t && ge.set("logging_enabled", !0))
              : "function" == typeof e
              ? (be = e)
              : ((be = null), ge.remove("logging_enabled"));
        },
        Ie = function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          !0 === Ee &&
            ((Ee = !1),
            null === be && !0 === ge.get("logging_enabled") && Se(!0)),
            be && ((e = Ce.apply(null, t)), be(e));
        },
        Te = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            Ie.apply(void 0, a([n], y(e)));
          };
        },
        Pe = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE FATAL ERROR: " + Ce.apply(void 0, a([], y(e)));
          throw (me.error(n), new Error(n));
        },
        Ne = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE WARNING: " + Ce.apply(void 0, a([], y(e)));
          me.warn(n);
        },
        xe = "[MIN_NAME]",
        Re = "[MAX_NAME]",
        ke = function (e, t) {
          if (e === t) return 0;
          if (e === xe || t === Re) return -1;
          if (t === xe || e === Re) return 1;
          var n = We(e),
            r = We(t);
          return null !== n
            ? null !== r
              ? n - r == 0
                ? e.length - t.length
                : n - r
              : -1
            : null === r && e < t
            ? -1
            : 1;
        },
        Oe = function (e) {
          if ("object" != typeof e || null === e) return R(e);
          var t,
            n = [];
          for (t in e) n.push(t);
          n.sort();
          for (var r = "{", i = 0; i < n.length; i++)
            0 !== i && (r += ","),
              (r += R(n[i])),
              (r += ":"),
              (r += Oe(e[n[i]]));
          return (r += "}");
        };
      function De(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
      }
      function Ae(e) {
        var t, n, r, i;
        g(!ce(e), "Invalid JSON number"),
          0 === e
            ? (t = 1 / e == -1 / (r = n = 0) ? 1 : 0)
            : ((t = e < 0),
              (r =
                (e = Math.abs(e)) >= Math.pow(2, -1022)
                  ? ((n =
                      (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) +
                      1023),
                    Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52)))
                  : ((n = 0), Math.round(e / Math.pow(2, -1074)))));
        for (var o = [], a = 52; a; --a)
          o.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
        for (a = 11; a; --a) o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
        o.push(t ? 1 : 0), o.reverse();
        var s = o.join(""),
          u = "";
        for (a = 0; a < 64; a += 8) {
          var l = parseInt(s.substr(a, 8), 2).toString(16);
          u += l = 1 === l.length ? "0" + l : l;
        }
        return u.toLowerCase();
      }
      function Le(e, t) {
        return (
          "object" == typeof (t = setTimeout(e, t)) && t.unref && t.unref(), t
        );
      }
      var Me = new RegExp("^-?(0*)\\d{1,10}$"),
        Fe = -2147483648,
        qe = 2147483647,
        We = function (e) {
          if (Me.test(e)) {
            e = Number(e);
            if (Fe <= e && e <= qe) return e;
          }
          return null;
        },
        je = function (e) {
          try {
            e();
          } catch (t) {
            setTimeout(function () {
              var e = t.stack || "";
              throw (Ne("Exception was thrown by user callback.", e), t);
            }, Math.floor(0));
          }
        },
        Ue =
          ((Be.prototype.getToken = function (e) {
            return this.auth_
              ? this.auth_.getToken(e).catch(function (e) {
                  return e && "auth/token-not-initialized" === e.code
                    ? (Ie(
                        "Got auth/token-not-initialized error.  Treating as null token."
                      ),
                      null)
                    : Promise.reject(e);
                })
              : Promise.resolve(null);
          }),
          (Be.prototype.addTokenChangeListener = function (t) {
            this.auth_
              ? this.auth_.addAuthTokenListener(t)
              : (setTimeout(function () {
                  return t(null);
                }, 0),
                this.authProvider_.get().then(function (e) {
                  return e.addAuthTokenListener(t);
                }));
          }),
          (Be.prototype.removeTokenChangeListener = function (t) {
            this.authProvider_.get().then(function (e) {
              return e.removeAuthTokenListener(t);
            });
          }),
          (Be.prototype.notifyForInvalidToken = function () {
            var e =
              'Provided authentication credentials for the app named "' +
              this.appName_ +
              '" are invalid. This usually indicates your app was not initialized correctly. ';
            "credential" in this.firebaseOptions_
              ? (e +=
                  'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
              : "serviceAccount" in this.firebaseOptions_
              ? (e +=
                  'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
              : (e +=
                  'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
              Ne(e);
          }),
          Be);
      function Be(e, t, n) {
        var r = this;
        (this.appName_ = e),
          (this.firebaseOptions_ = t),
          (this.authProvider_ = n),
          (this.auth_ = null),
          (this.auth_ = n.getImmediate({ optional: !0 })),
          this.auth_ ||
            n.get().then(function (e) {
              return (r.auth_ = e);
            });
      }
      var He =
        ((Ve.prototype.getToken = function (e) {
          return Promise.resolve({ accessToken: Ve.EMULATOR_AUTH_TOKEN });
        }),
        (Ve.prototype.addTokenChangeListener = function (e) {
          e(Ve.EMULATOR_AUTH_TOKEN);
        }),
        (Ve.prototype.removeTokenChangeListener = function (e) {}),
        (Ve.prototype.notifyForInvalidToken = function () {}),
        (Ve.EMULATOR_AUTH_TOKEN = "owner"),
        Ve);
      function Ve() {}
      var ze =
          /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
        Qe = "websocket",
        Ye = "long_polling",
        Ke =
          ((Ge.prototype.isCacheableHost = function () {
            return "s-" === this.internalHost.substr(0, 2);
          }),
          (Ge.prototype.isCustomHost = function () {
            return (
              "firebaseio.com" !== this._domain &&
              "firebaseio-demo.com" !== this._domain
            );
          }),
          Object.defineProperty(Ge.prototype, "host", {
            get: function () {
              return this._host;
            },
            set: function (e) {
              e !== this.internalHost &&
                ((this.internalHost = e),
                this.isCacheableHost() &&
                  ve.set("host:" + this._host, this.internalHost));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Ge.prototype.toString = function () {
            var e = this.toURLString();
            return (
              this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
            );
          }),
          (Ge.prototype.toURLString = function () {
            var e = this.secure ? "https://" : "http://",
              t = this.includeNamespaceInQueryParams
                ? "?ns=" + this.namespace
                : "";
            return e + this.host + "/" + t;
          }),
          Ge);
      function Ge(e, t, n, r, i, o, a) {
        void 0 === i && (i = !1),
          void 0 === o && (o = ""),
          void 0 === a && (a = !1),
          (this.secure = t),
          (this.namespace = n),
          (this.webSocketOnly = r),
          (this.nodeAdmin = i),
          (this.persistenceKey = o),
          (this.includeNamespaceInQueryParams = a),
          (this._host = e.toLowerCase()),
          (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
          (this.internalHost = ve.get("host:" + e) || this._host);
      }
      function $e(e, t, n) {
        var r;
        if (
          (g("string" == typeof t, "typeof type must == string"),
          g("object" == typeof n, "typeof params must == object"),
          t === Qe)
        )
          r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
        else {
          if (t !== Ye) throw new Error("Unknown connection type: " + t);
          r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
        }
        ((t = e).host !== t.internalHost ||
          t.isCustomHost() ||
          t.includeNamespaceInQueryParams) &&
          (n.ns = e.namespace);
        var i = [];
        return (
          De(n, function (e, t) {
            i.push(e + "=" + t);
          }),
          r + i.join("&")
        );
      }
      var Je =
        ((Xe.prototype.incrementCounter = function (e, t) {
          void 0 === t && (t = 1),
            O(this.counters_, e) || (this.counters_[e] = 0),
            (this.counters_[e] += t);
        }),
        (Xe.prototype.get = function () {
          return d(this.counters_);
        }),
        Xe);
      function Xe() {
        this.counters_ = {};
      }
      var Ze = {},
        et = {};
      function tt(e) {
        e = e.toString();
        return Ze[e] || (Ze[e] = new Je()), Ze[e];
      }
      var nt =
        ((rt.prototype.closeAfter = function (e, t) {
          (this.closeAfterResponse = e),
            (this.onClose = t),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null));
        }),
        (rt.prototype.handleResponse = function (e, t) {
          var n = this;
          this.pendingResponses[e] = t;
          for (var r = this; this.pendingResponses[this.currentResponseNum]; )
            if (
              "break" ===
              (function () {
                var t = r.pendingResponses[r.currentResponseNum];
                delete r.pendingResponses[r.currentResponseNum];
                for (var e = 0; e < t.length; ++e)
                  !(function (e) {
                    t[e] &&
                      je(function () {
                        n.onMessage_(t[e]);
                      });
                  })(e);
                if (r.currentResponseNum === r.closeAfterResponse)
                  return (
                    r.onClose && (r.onClose(), (r.onClose = null)), "break"
                  );
                r.currentResponseNum++;
              })()
            )
              break;
        }),
        rt);
      function rt(e) {
        (this.onMessage_ = e),
          (this.pendingResponses = []),
          (this.currentResponseNum = 0),
          (this.closeAfterResponse = -1),
          (this.onClose = null);
      }
      var it = "pLPCommand",
        ot = "pRTLPCB",
        at =
          ((st.prototype.open = function (e, t) {
            var n,
              r,
              i,
              a = this;
            (this.curSegmentNum = 0),
              (this.onDisconnect_ = t),
              (this.myPacketOrderer = new nt(e)),
              (this.isClosed_ = !1),
              (this.connectTimeoutTimer_ = setTimeout(function () {
                a.log_("Timed out trying to connect."),
                  a.onClosed_(),
                  (a.connectTimeoutTimer_ = null);
              }, Math.floor(3e4))),
              (n = function () {
                var e;
                a.isClosed_ ||
                  ((a.scriptTagHolder = new ut(
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 5),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                      n[3], n[4];
                      if ((a.incrementIncomingBytes_(e), a.scriptTagHolder))
                        if (
                          (a.connectTimeoutTimer_ &&
                            (clearTimeout(a.connectTimeoutTimer_),
                            (a.connectTimeoutTimer_ = null)),
                          (a.everConnected_ = !0),
                          "start" === r)
                        )
                          (a.id = i), (a.password = o);
                        else {
                          if ("close" !== r)
                            throw new Error(
                              "Unrecognized command received: " + r
                            );
                          i
                            ? ((a.scriptTagHolder.sendNewPolls = !1),
                              a.myPacketOrderer.closeAfter(i, function () {
                                a.onClosed_();
                              }))
                            : a.onClosed_();
                        }
                    },
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 2),
                        r = n[0],
                        n = n[1];
                      a.incrementIncomingBytes_(e),
                        a.myPacketOrderer.handleResponse(r, n);
                    },
                    function () {
                      a.onClosed_();
                    },
                    a.urlFn
                  )),
                  ((e = { start: "t" }).ser = Math.floor(1e8 * Math.random())),
                  a.scriptTagHolder.uniqueCallbackIdentifier &&
                    (e.cb = a.scriptTagHolder.uniqueCallbackIdentifier),
                  (e.v = "5"),
                  a.transportSessionId && (e.s = a.transportSessionId),
                  a.lastSessionId && (e.ls = a.lastSessionId),
                  a.applicationId && (e.p = a.applicationId),
                  "undefined" != typeof location &&
                    location.hostname &&
                    ze.test(location.hostname) &&
                    (e.r = "f"),
                  (e = a.urlFn(e)),
                  a.log_("Connecting via long-poll to " + e),
                  a.scriptTagHolder.addTag(e, function () {}));
              }),
              "complete" === document.readyState
                ? n()
                : ((r = !1),
                  (i = function () {
                    document.body
                      ? r || ((r = !0), n())
                      : setTimeout(i, Math.floor(10));
                  }),
                  document.addEventListener
                    ? (document.addEventListener("DOMContentLoaded", i, !1),
                      window.addEventListener("load", i, !1))
                    : document.attachEvent &&
                      (document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && i();
                      }),
                      window.attachEvent("onload", i)));
          }),
          (st.prototype.start = function () {
            this.scriptTagHolder.startLongPoll(this.id, this.password),
              this.addDisconnectPingFrame(this.id, this.password);
          }),
          (st.forceAllow = function () {
            st.forceAllow_ = !0;
          }),
          (st.forceDisallow = function () {
            st.forceDisallow_ = !0;
          }),
          (st.isAvailable = function () {
            return (
              !!st.forceAllow_ ||
              !(
                st.forceDisallow_ ||
                "undefined" == typeof document ||
                null == document.createElement ||
                ("object" == typeof window &&
                  window.chrome &&
                  window.chrome.extension &&
                  !/^chrome/.test(window.location.href)) ||
                ("object" == typeof Windows && "object" == typeof Windows.UI)
              )
            );
          }),
          (st.prototype.markConnectionHealthy = function () {}),
          (st.prototype.shutdown_ = function () {
            (this.isClosed_ = !0),
              this.scriptTagHolder &&
                (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
              this.myDisconnFrame &&
                (document.body.removeChild(this.myDisconnFrame),
                (this.myDisconnFrame = null)),
              this.connectTimeoutTimer_ &&
                (clearTimeout(this.connectTimeoutTimer_),
                (this.connectTimeoutTimer_ = null));
          }),
          (st.prototype.onClosed_ = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is closing itself"),
              this.shutdown_(),
              this.onDisconnect_ &&
                (this.onDisconnect_(this.everConnected_),
                (this.onDisconnect_ = null)));
          }),
          (st.prototype.close = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is being closed."), this.shutdown_());
          }),
          (st.prototype.send = function (e) {
            e = R(e);
            (this.bytesSent += e.length),
              this.stats_.incrementCounter("bytes_sent", e.length);
            for (
              var e = (function (e) {
                  e = s(e);
                  return c.encodeByteArray(e, !0);
                })(e),
                t = fe(e, 1840),
                n = 0;
              n < t.length;
              n++
            )
              this.scriptTagHolder.enqueueSegment(
                this.curSegmentNum,
                t.length,
                t[n]
              ),
                this.curSegmentNum++;
          }),
          (st.prototype.addDisconnectPingFrame = function (e, t) {
            this.myDisconnFrame = document.createElement("iframe");
            var n = { dframe: "t" };
            (n.id = e),
              (n.pw = t),
              (this.myDisconnFrame.src = this.urlFn(n)),
              (this.myDisconnFrame.style.display = "none"),
              document.body.appendChild(this.myDisconnFrame);
          }),
          (st.prototype.incrementIncomingBytes_ = function (e) {
            e = R(e).length;
            (this.bytesReceived += e),
              this.stats_.incrementCounter("bytes_received", e);
          }),
          st);
      function st(e, t, n, r, i) {
        (this.connId = e),
          (this.repoInfo = t),
          (this.applicationId = n),
          (this.transportSessionId = r),
          (this.lastSessionId = i),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.everConnected_ = !1),
          (this.log_ = Te(e)),
          (this.stats_ = tt(t)),
          (this.urlFn = function (e) {
            return $e(t, Ye, e);
          });
      }
      var ut =
        ((lt.createIFrame_ = function () {
          var t = document.createElement("iframe");
          if (((t.style.display = "none"), !document.body))
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          document.body.appendChild(t);
          try {
            t.contentWindow.document || Ie("No IE domain setting required");
          } catch (e) {
            var n = document.domain;
            t.src =
              "javascript:void((function(){document.open();document.domain='" +
              n +
              "';document.close();})())";
          }
          return (
            t.contentDocument
              ? (t.doc = t.contentDocument)
              : t.contentWindow
              ? (t.doc = t.contentWindow.document)
              : t.document && (t.doc = t.document),
            t
          );
        }),
        (lt.prototype.close = function () {
          var e = this;
          (this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.innerHTML = ""),
              setTimeout(function () {
                null !== e.myIFrame &&
                  (document.body.removeChild(e.myIFrame), (e.myIFrame = null));
              }, Math.floor(0)));
          var t = this.onDisconnect;
          t && ((this.onDisconnect = null), t());
        }),
        (lt.prototype.startLongPoll = function (e, t) {
          for (
            this.myID = e, this.myPW = t, this.alive = !0;
            this.newRequest_();

          );
        }),
        (lt.prototype.newRequest_ = function () {
          if (
            this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.size <
              (0 < this.pendingSegs.length ? 2 : 1)
          ) {
            this.currentSerial++;
            var e = {};
            (e.id = this.myID),
              (e.pw = this.myPW),
              (e.ser = this.currentSerial);
            for (
              var e = this.urlFn(e), t = "", n = 0;
              0 < this.pendingSegs.length;

            ) {
              if (!(this.pendingSegs[0].d.length + 30 + t.length <= 1870))
                break;
              var r = this.pendingSegs.shift(),
                t =
                  t +
                  "&seg" +
                  n +
                  "=" +
                  r.seg +
                  "&ts" +
                  n +
                  "=" +
                  r.ts +
                  "&d" +
                  n +
                  "=" +
                  r.d;
              n++;
            }
            return (e += t), this.addLongPollTag_(e, this.currentSerial), !0;
          }
          return !1;
        }),
        (lt.prototype.enqueueSegment = function (e, t, n) {
          this.pendingSegs.push({ seg: e, ts: t, d: n }),
            this.alive && this.newRequest_();
        }),
        (lt.prototype.addLongPollTag_ = function (e, t) {
          var n = this;
          this.outstandingRequests.add(t);
          function r() {
            n.outstandingRequests.delete(t), n.newRequest_();
          }
          var i = setTimeout(r, Math.floor(25e3));
          this.addTag(e, function () {
            clearTimeout(i), r();
          });
        }),
        (lt.prototype.addTag = function (e, n) {
          var r = this;
          setTimeout(function () {
            try {
              if (!r.sendNewPolls) return;
              var t = r.myIFrame.doc.createElement("script");
              (t.type = "text/javascript"),
                (t.async = !0),
                (t.src = e),
                (t.onload = t.onreadystatechange =
                  function () {
                    var e = t.readyState;
                    (e && "loaded" !== e && "complete" !== e) ||
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      n());
                  }),
                (t.onerror = function () {
                  Ie("Long-poll script failed to load: " + e),
                    (r.sendNewPolls = !1),
                    r.close();
                }),
                r.myIFrame.doc.body.appendChild(t);
            } catch (e) {}
          }, Math.floor(1));
        }),
        lt);
      function lt(e, t, n, r) {
        (this.onDisconnect = n),
          (this.urlFn = r),
          (this.outstandingRequests = new Set()),
          (this.pendingSegs = []),
          (this.currentSerial = Math.floor(1e8 * Math.random())),
          (this.sendNewPolls = !0),
          (this.uniqueCallbackIdentifier = we()),
          (window[it + this.uniqueCallbackIdentifier] = e),
          (window[ot + this.uniqueCallbackIdentifier] = t),
          (this.myIFrame = lt.createIFrame_());
        var t = "",
          i =
            "<html><body>" +
            (t =
              this.myIFrame.src &&
              "javascript:" ===
                this.myIFrame.src.substr(0, "javascript:".length)
                ? '<script>document.domain="' + document.domain + '";</script>'
                : t) +
            "</body></html>";
        try {
          this.myIFrame.doc.open(),
            this.myIFrame.doc.write(i),
            this.myIFrame.doc.close();
        } catch (e) {
          Ie("frame writing exception"), e.stack && Ie(e.stack), Ie(e);
        }
      }
      var ht = "";
      function ct(e) {
        ht = e;
      }
      var dt = null;
      "undefined" != typeof MozWebSocket
        ? (dt = MozWebSocket)
        : "undefined" != typeof WebSocket && (dt = WebSocket);
      var pt =
        ((ft.connectionURL_ = function (e, t, n) {
          var r = { v: "5" };
          return (
            "undefined" != typeof location &&
              location.hostname &&
              ze.test(location.hostname) &&
              (r.r = "f"),
            t && (r.s = t),
            n && (r.ls = n),
            $e(e, Qe, r)
          );
        }),
        (ft.prototype.open = function (t, e) {
          var n,
            r = this;
          (this.onDisconnect = e),
            (this.onMessage = t),
            this.log_("Websocket connecting to " + this.connURL),
            (this.everConnected_ = !1),
            ve.set("previous_websocket_failure", !0);
          try {
            C() ||
              ((n = {
                headers: { "X-Firebase-GMPID": this.applicationId || "" },
              }),
              (this.mySock = new dt(this.connURL, [], n)));
          } catch (e) {
            this.log_("Error instantiating WebSocket.");
            t = e.message || e.data;
            return t && this.log_(t), void this.onClosed_();
          }
          (this.mySock.onopen = function () {
            r.log_("Websocket connected."), (r.everConnected_ = !0);
          }),
            (this.mySock.onclose = function () {
              r.log_("Websocket connection was disconnected."),
                (r.mySock = null),
                r.onClosed_();
            }),
            (this.mySock.onmessage = function (e) {
              r.handleIncomingFrame(e);
            }),
            (this.mySock.onerror = function (e) {
              r.log_("WebSocket error.  Closing connection.");
              e = e.message || e.data;
              e && r.log_(e), r.onClosed_();
            });
        }),
        (ft.prototype.start = function () {}),
        (ft.forceDisallow = function () {
          ft.forceDisallow_ = !0;
        }),
        (ft.isAvailable = function () {
          var e,
            t = !1;
          return (
            "undefined" != typeof navigator &&
              navigator.userAgent &&
              (e = navigator.userAgent.match(
                /Android ([0-9]{0,}\.[0-9]{0,})/
              )) &&
              1 < e.length &&
              parseFloat(e[1]) < 4.4 &&
              (t = !0),
            !t && null !== dt && !ft.forceDisallow_
          );
        }),
        (ft.previouslyFailed = function () {
          return (
            ve.isInMemoryStorage || !0 === ve.get("previous_websocket_failure")
          );
        }),
        (ft.prototype.markConnectionHealthy = function () {
          ve.remove("previous_websocket_failure");
        }),
        (ft.prototype.appendFrame_ = function (e) {
          this.frames.push(e),
            this.frames.length === this.totalFrames &&
              ((e = this.frames.join("")),
              (this.frames = null),
              (e = x(e)),
              this.onMessage(e));
        }),
        (ft.prototype.handleNewFrameCount_ = function (e) {
          (this.totalFrames = e), (this.frames = []);
        }),
        (ft.prototype.extractFrameCount_ = function (e) {
          if (
            (g(null === this.frames, "We already have a frame buffer"),
            e.length <= 6)
          ) {
            var t = Number(e);
            if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
          }
          return this.handleNewFrameCount_(1), e;
        }),
        (ft.prototype.handleIncomingFrame = function (e) {
          null !== this.mySock &&
            ((e = e.data),
            (this.bytesReceived += e.length),
            this.stats_.incrementCounter("bytes_received", e.length),
            this.resetKeepAlive(),
            null !== this.frames
              ? this.appendFrame_(e)
              : null !== (e = this.extractFrameCount_(e)) &&
                this.appendFrame_(e));
        }),
        (ft.prototype.send = function (e) {
          this.resetKeepAlive();
          e = R(e);
          (this.bytesSent += e.length),
            this.stats_.incrementCounter("bytes_sent", e.length);
          var t = fe(e, 16384);
          1 < t.length && this.sendString_(String(t.length));
          for (var n = 0; n < t.length; n++) this.sendString_(t[n]);
        }),
        (ft.prototype.shutdown_ = function () {
          (this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null));
        }),
        (ft.prototype.onClosed_ = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is closing itself"),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)));
        }),
        (ft.prototype.close = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is being closed"), this.shutdown_());
        }),
        (ft.prototype.resetKeepAlive = function () {
          var e = this;
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(function () {
              e.mySock && e.sendString_("0"), e.resetKeepAlive();
            }, Math.floor(45e3)));
        }),
        (ft.prototype.sendString_ = function (e) {
          try {
            this.mySock.send(e);
          } catch (e) {
            this.log_(
              "Exception thrown from WebSocket.send():",
              e.message || e.data,
              "Closing connection."
            ),
              setTimeout(this.onClosed_.bind(this), 0);
          }
        }),
        (ft.responsesRequiredToBeHealthy = 2),
        (ft.healthyTimeout = 3e4),
        ft);
      function ft(e, t, n, r, i) {
        (this.connId = e),
          (this.applicationId = n),
          (this.keepaliveTimer = null),
          (this.frames = null),
          (this.totalFrames = 0),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.log_ = Te(this.connId)),
          (this.stats_ = tt(t)),
          (this.connURL = ft.connectionURL_(t, r, i)),
          (this.nodeAdmin = t.nodeAdmin);
      }
      var _t =
        (Object.defineProperty(yt, "ALL_TRANSPORTS", {
          get: function () {
            return [at, pt];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (yt.prototype.initTransports_ = function (e) {
          var t,
            n,
            r = pt && pt.isAvailable(),
            i = r && !pt.previouslyFailed();
          if (
            (e.webSocketOnly &&
              (r ||
                Ne(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (i = !0)),
            i)
          )
            this.transports_ = [pt];
          else {
            var o = (this.transports_ = []);
            try {
              for (
                var a = _(yt.ALL_TRANSPORTS), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var u = s.value;
                u && u.isAvailable() && o.push(u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }),
        (yt.prototype.initialTransport = function () {
          if (0 < this.transports_.length) return this.transports_[0];
          throw new Error("No transports available");
        }),
        (yt.prototype.upgradeTransport = function () {
          return 1 < this.transports_.length ? this.transports_[1] : null;
        }),
        yt);
      function yt(e) {
        this.initTransports_(e);
      }
      var vt =
        ((gt.prototype.start_ = function () {
          var e = this,
            t = this.transportManager_.initialTransport();
          (this.conn_ = new t(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            void 0,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
          (this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(function () {
              e.conn_ && e.conn_.open(n, r);
            }, Math.floor(0));
          t = t.healthyTimeout || 0;
          0 < t &&
            (this.healthyTimeout_ = Le(function () {
              (e.healthyTimeout_ = null),
                e.isHealthy_ ||
                  (e.conn_ && 102400 < e.conn_.bytesReceived
                    ? (e.log_(
                        "Connection exceeded healthy timeout but has received " +
                          e.conn_.bytesReceived +
                          " bytes.  Marking connection healthy."
                      ),
                      (e.isHealthy_ = !0),
                      e.conn_.markConnectionHealthy())
                    : e.conn_ && 10240 < e.conn_.bytesSent
                    ? e.log_(
                        "Connection exceeded healthy timeout but has sent " +
                          e.conn_.bytesSent +
                          " bytes.  Leaving connection alive."
                      )
                    : (e.log_("Closing unhealthy connection after timeout."),
                      e.close()));
            }, Math.floor(t)));
        }),
        (gt.prototype.nextTransportId_ = function () {
          return "c:" + this.id + ":" + this.connectionCount++;
        }),
        (gt.prototype.disconnReceiver_ = function (t) {
          var n = this;
          return function (e) {
            t === n.conn_
              ? n.onConnectionLost_(e)
              : t === n.secondaryConn_
              ? (n.log_("Secondary connection lost."),
                n.onSecondaryConnectionLost_())
              : n.log_("closing an old connection");
          };
        }),
        (gt.prototype.connReceiver_ = function (t) {
          var n = this;
          return function (e) {
            2 !== n.state_ &&
              (t === n.rx_
                ? n.onPrimaryMessageReceived_(e)
                : t === n.secondaryConn_
                ? n.onSecondaryMessageReceived_(e)
                : n.log_("message on old connection"));
          };
        }),
        (gt.prototype.sendRequest = function (e) {
          e = { t: "d", d: e };
          this.sendData_(e);
        }),
        (gt.prototype.tryCleanupConnection = function () {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              "cleaning up and promoting a connection: " +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null));
        }),
        (gt.prototype.onSecondaryControl_ = function (e) {
          "t" in e &&
            ("a" === (e = e.t)
              ? this.upgradeIfSecondaryHealthy_()
              : "r" === e
              ? (this.log_("Got a reset on secondary, closing it"),
                this.secondaryConn_.close(),
                (this.tx_ !== this.secondaryConn_ &&
                  this.rx_ !== this.secondaryConn_) ||
                  this.close())
              : "o" === e &&
                (this.log_("got pong on secondary."),
                this.secondaryResponsesRequired_--,
                this.upgradeIfSecondaryHealthy_()));
        }),
        (gt.prototype.onSecondaryMessageReceived_ = function (e) {
          var t = pe("t", e),
            e = pe("d", e);
          if ("c" === t) this.onSecondaryControl_(e);
          else {
            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
            this.pendingDataMessages.push(e);
          }
        }),
        (gt.prototype.upgradeIfSecondaryHealthy_ = function () {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_("Secondary connection is healthy."),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_("sending ping on secondary."),
              this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
        }),
        (gt.prototype.proceedWithUpgrade_ = function () {
          this.secondaryConn_.start(),
            this.log_("sending client ack on secondary"),
            this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
            this.log_("Ending transmission on primary"),
            this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection();
        }),
        (gt.prototype.onPrimaryMessageReceived_ = function (e) {
          var t = pe("t", e),
            e = pe("d", e);
          "c" === t ? this.onControl_(e) : "d" === t && this.onDataMessage_(e);
        }),
        (gt.prototype.onDataMessage_ = function (e) {
          this.onPrimaryResponse_(), this.onMessage_(e);
        }),
        (gt.prototype.onPrimaryResponse_ = function () {
          this.isHealthy_ ||
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_("Primary connection is healthy."),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()));
        }),
        (gt.prototype.onControl_ = function (e) {
          var t = pe("t", e);
          if ("d" in e) {
            e = e.d;
            if ("h" === t) this.onHandshake_(e);
            else if ("n" === t) {
              this.log_("recvd end transmission on primary"),
                (this.rx_ = this.secondaryConn_);
              for (var n = 0; n < this.pendingDataMessages.length; ++n)
                this.onDataMessage_(this.pendingDataMessages[n]);
              (this.pendingDataMessages = []), this.tryCleanupConnection();
            } else
              "s" === t
                ? this.onConnectionShutdown_(e)
                : "r" === t
                ? this.onReset_(e)
                : "e" === t
                ? he("Server Error: " + e)
                : "o" === t
                ? (this.log_("got pong on primary."),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : he("Unknown control packet command: " + t);
          }
        }),
        (gt.prototype.onHandshake_ = function (e) {
          var t = e.ts,
            n = e.v,
            r = e.h;
          (this.sessionId = e.s),
            (this.repoInfo_.host = r),
            0 === this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, t),
              "5" !== n && Ne("Protocol version mismatch detected"),
              this.tryStartUpgrade_());
        }),
        (gt.prototype.tryStartUpgrade_ = function () {
          var e = this.transportManager_.upgradeTransport();
          e && this.startUpgrade_(e);
        }),
        (gt.prototype.startUpgrade_ = function (e) {
          var t = this;
          (this.secondaryConn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.secondaryConn_),
            e = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(n, e),
            Le(function () {
              t.secondaryConn_ &&
                (t.log_("Timed out trying to upgrade."),
                t.secondaryConn_.close());
            }, Math.floor(6e4));
        }),
        (gt.prototype.onReset_ = function (e) {
          this.log_("Reset packet received.  New host: " + e),
            (this.repoInfo_.host = e),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_());
        }),
        (gt.prototype.onConnectionEstablished_ = function (e, t) {
          var n = this;
          this.log_("Realtime connection established."),
            (this.conn_ = e),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_("Primary connection is healthy."),
                (this.isHealthy_ = !0))
              : Le(function () {
                  n.sendPingOnPrimaryIfNecessary_();
                }, Math.floor(5e3));
        }),
        (gt.prototype.sendPingOnPrimaryIfNecessary_ = function () {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_("sending ping on primary."),
            this.sendData_({ t: "c", d: { t: "p", d: {} } }));
        }),
        (gt.prototype.onSecondaryConnectionLost_ = function () {
          var e = this.secondaryConn_;
          (this.secondaryConn_ = null),
            (this.tx_ !== e && this.rx_ !== e) || this.close();
        }),
        (gt.prototype.onConnectionLost_ = function (e) {
          (this.conn_ = null),
            e || 0 !== this.state_
              ? 1 === this.state_ && this.log_("Realtime connection lost.")
              : (this.log_("Realtime connection failed."),
                this.repoInfo_.isCacheableHost() &&
                  (ve.remove("host:" + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close();
        }),
        (gt.prototype.onConnectionShutdown_ = function (e) {
          this.log_("Connection shutdown command received. Shutting down..."),
            this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close();
        }),
        (gt.prototype.sendData_ = function (e) {
          if (1 !== this.state_) throw "Connection is not connected";
          this.tx_.send(e);
        }),
        (gt.prototype.close = function () {
          2 !== this.state_ &&
            (this.log_("Closing realtime connection."),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)));
        }),
        (gt.prototype.closeConnections_ = function () {
          this.log_("Shutting down all connections"),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null));
        }),
        gt);
      function gt(e, t, n, r, i, o, a, s) {
        (this.id = e),
          (this.repoInfo_ = t),
          (this.applicationId_ = n),
          (this.onMessage_ = r),
          (this.onReady_ = i),
          (this.onDisconnect_ = o),
          (this.onKill_ = a),
          (this.lastSessionId = s),
          (this.connectionCount = 0),
          (this.pendingDataMessages = []),
          (this.state_ = 0),
          (this.log_ = Te("c:" + this.id + ":")),
          (this.transportManager_ = new _t(t)),
          this.log_("Connection created"),
          this.start_();
      }
      var mt =
        ((wt.prototype.put = function (e, t, n, r) {}),
        (wt.prototype.merge = function (e, t, n, r) {}),
        (wt.prototype.refreshAuthToken = function (e) {}),
        (wt.prototype.onDisconnectPut = function (e, t, n) {}),
        (wt.prototype.onDisconnectMerge = function (e, t, n) {}),
        (wt.prototype.onDisconnectCancel = function (e, t) {}),
        (wt.prototype.reportStats = function (e) {}),
        wt);
      function wt() {}
      var Ct =
        ((bt.prototype.trigger = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if (Array.isArray(this.listeners_[e]))
            for (var r = a([], y(this.listeners_[e])), i = 0; i < r.length; i++)
              r[i].callback.apply(r[i].context, t);
        }),
        (bt.prototype.on = function (e, t, n) {
          this.validateEventType_(e),
            (this.listeners_[e] = this.listeners_[e] || []),
            this.listeners_[e].push({ callback: t, context: n });
          e = this.getInitialEvent(e);
          e && t.apply(n, e);
        }),
        (bt.prototype.off = function (e, t, n) {
          this.validateEventType_(e);
          for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
            if (r[i].callback === t && (!n || n === r[i].context))
              return void r.splice(i, 1);
        }),
        (bt.prototype.validateEventType_ = function (t) {
          g(
            this.allowedEvents_.find(function (e) {
              return e === t;
            }),
            "Unknown event: " + t
          );
        }),
        bt);
      function bt(e) {
        (this.allowedEvents_ = e),
          (this.listeners_ = {}),
          g(Array.isArray(e) && 0 < e.length, "Requires a non-empty array");
      }
      var Et,
        St =
          (n(It, (Et = Ct)),
          (It.getInstance = function () {
            return new It();
          }),
          (It.prototype.getInitialEvent = function (e) {
            return (
              g("online" === e, "Unknown event type: " + e), [this.online_]
            );
          }),
          (It.prototype.currentlyOnline = function () {
            return this.online_;
          }),
          It);
      function It() {
        var e = Et.call(this, ["online"]) || this;
        return (
          (e.online_ = !0),
          "undefined" == typeof window ||
            void 0 === window.addEventListener ||
            w() ||
            (window.addEventListener(
              "online",
              function () {
                e.online_ || ((e.online_ = !0), e.trigger("online", !0));
              },
              !1
            ),
            window.addEventListener(
              "offline",
              function () {
                e.online_ && ((e.online_ = !1), e.trigger("online", !1));
              },
              !1
            )),
          e
        );
      }
      var Tt = 32,
        Pt = 768,
        Nt =
          ((xt.prototype.toString = function () {
            for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++)
              "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
            return e || "/";
          }),
          xt);
      function xt(e, t) {
        if (void 0 === t) {
          this.pieces_ = e.split("/");
          for (var n = 0, r = 0; r < this.pieces_.length; r++)
            0 < this.pieces_[r].length &&
              ((this.pieces_[n] = this.pieces_[r]), n++);
          (this.pieces_.length = n), (this.pieceNum_ = 0);
        } else (this.pieces_ = e), (this.pieceNum_ = t);
      }
      function Rt() {
        return new Nt("");
      }
      function kt(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
      }
      function Ot(e) {
        return e.pieces_.length - e.pieceNum_;
      }
      function Dt(e) {
        var t = e.pieceNum_;
        return t < e.pieces_.length && t++, new Nt(e.pieces_, t);
      }
      function At(e) {
        return e.pieceNum_ < e.pieces_.length
          ? e.pieces_[e.pieces_.length - 1]
          : null;
      }
      function Lt(e, t) {
        return void 0 === t && (t = 0), e.pieces_.slice(e.pieceNum_ + t);
      }
      function Mt(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;
        for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++)
          t.push(e.pieces_[n]);
        return new Nt(t, 0);
      }
      function Ft(e, t) {
        for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++)
          n.push(e.pieces_[r]);
        if (t instanceof Nt)
          for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
        else
          for (var i = t.split("/"), r = 0; r < i.length; r++)
            0 < i[r].length && n.push(i[r]);
        return new Nt(n, 0);
      }
      function qt(e) {
        return e.pieceNum_ >= e.pieces_.length;
      }
      function Wt(e, t) {
        var n = kt(e),
          r = kt(t);
        if (null === n) return t;
        if (n === r) return Wt(Dt(e), Dt(t));
        throw new Error(
          "INTERNAL ERROR: innerPath (" +
            t +
            ") is not within outerPath (" +
            e +
            ")"
        );
      }
      function jt(e, t) {
        for (
          var n = Lt(e, 0), r = Lt(t, 0), i = 0;
          i < n.length && i < r.length;
          i++
        ) {
          var o = ke(n[i], r[i]);
          if (0 !== o) return o;
        }
        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
      }
      function Ut(e, t) {
        if (Ot(e) !== Ot(t)) return !1;
        for (
          var n = e.pieceNum_, r = t.pieceNum_;
          n <= e.pieces_.length;
          n++, r++
        )
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
        return !0;
      }
      function Bt(e, t) {
        var n = e.pieceNum_,
          r = t.pieceNum_;
        if (Ot(e) > Ot(t)) return !1;
        for (; n < e.pieces_.length; ) {
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
          ++n, ++r;
        }
        return !0;
      }
      var Ht = function (e, t) {
        (this.errorPrefix_ = t),
          (this.parts_ = Lt(e, 0)),
          (this.byteLength_ = Math.max(1, this.parts_.length));
        for (var n = 0; n < this.parts_.length; n++)
          this.byteLength_ += H(this.parts_[n]);
        Vt(this);
      };
      function Vt(e) {
        if (e.byteLength_ > Pt)
          throw new Error(
            e.errorPrefix_ +
              "has a key path longer than " +
              Pt +
              " bytes (" +
              e.byteLength_ +
              ")."
          );
        if (e.parts_.length > Tt)
          throw new Error(
            e.errorPrefix_ +
              "path specified exceeds the maximum depth that can be written (" +
              Tt +
              ") or object contains a cycle " +
              zt(e)
          );
      }
      function zt(e) {
        return 0 === e.parts_.length
          ? ""
          : "in property '" + e.parts_.join(".") + "'";
      }
      var Qt,
        Yt =
          (n(Kt, (Qt = Ct)),
          (Kt.getInstance = function () {
            return new Kt();
          }),
          (Kt.prototype.getInitialEvent = function (e) {
            return (
              g("visible" === e, "Unknown event type: " + e), [this.visible_]
            );
          }),
          Kt);
      function Kt() {
        var t,
          e,
          n = Qt.call(this, ["visible"]) || this;
        return (
          "undefined" != typeof document &&
            void 0 !== document.addEventListener &&
            (void 0 !== document.hidden
              ? ((e = "visibilitychange"), (t = "hidden"))
              : void 0 !== document.mozHidden
              ? ((e = "mozvisibilitychange"), (t = "mozHidden"))
              : void 0 !== document.msHidden
              ? ((e = "msvisibilitychange"), (t = "msHidden"))
              : void 0 !== document.webkitHidden &&
                ((e = "webkitvisibilitychange"), (t = "webkitHidden"))),
          (n.visible_ = !0),
          e &&
            document.addEventListener(
              e,
              function () {
                var e = !document[t];
                e !== n.visible_ && ((n.visible_ = e), n.trigger("visible", e));
              },
              !1
            ),
          n
        );
      }
      var Gt,
        $t = 1e3,
        Jt = 3e5,
        Xt =
          (n(Zt, (Gt = mt)),
          (Zt.prototype.sendRequest = function (e, t, n) {
            var r = ++this.requestNumber_,
              t = { r: r, a: e, b: t };
            this.log_(R(t)),
              g(
                this.connected_,
                "sendRequest call when we're not connected not allowed."
              ),
              this.realtime_.sendRequest(t),
              n && (this.requestCBHash_[r] = n);
          }),
          (Zt.prototype.get = function (e) {
            var n = this,
              r = new f(),
              i = { p: e._path.toString(), q: e._queryObject },
              t = {
                action: "g",
                request: i,
                onComplete: function (e) {
                  var t = e.d;
                  "ok" === e.s
                    ? (n.onDataUpdate_(i.p, t, !1, null), r.resolve(t))
                    : r.reject(t);
                },
              };
            this.outstandingGets_.push(t), this.outstandingGetCount_++;
            var o = this.outstandingGets_.length - 1;
            return (
              this.connected_ ||
                setTimeout(function () {
                  var e = n.outstandingGets_[o];
                  void 0 !== e &&
                    t === e &&
                    (delete n.outstandingGets_[o],
                    n.outstandingGetCount_--,
                    0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                    n.log_("get " + o + " timed out on connection"),
                    r.reject(new Error("Client is offline.")));
                }, 3e3),
              this.connected_ && this.sendGet_(o),
              r.promise
            );
          }),
          (Zt.prototype.listen = function (e, t, n, r) {
            var i = e._queryIdentifier,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + i),
              this.listens.has(o) || this.listens.set(o, new Map()),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "listen() called for non-default but complete query"
              ),
              g(
                !this.listens.get(o).has(i),
                "listen() called twice for same path/queryId."
              );
            n = { onComplete: r, hashFn: t, query: e, tag: n };
            this.listens.get(o).set(i, n),
              this.connected_ && this.sendListen_(n);
          }),
          (Zt.prototype.sendGet_ = function (t) {
            var n = this,
              r = this.outstandingGets_[t];
            this.sendRequest("g", r.request, function (e) {
              delete n.outstandingGets_[t],
                n.outstandingGetCount_--,
                0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                r.onComplete && r.onComplete(e);
            });
          }),
          (Zt.prototype.sendListen_ = function (r) {
            var i = this,
              o = r.query,
              a = o._path.toString(),
              s = o._queryIdentifier;
            this.log_("Listen on " + a + " for " + s);
            var e = { p: a };
            r.tag && ((e.q = o._queryObject), (e.t = r.tag)),
              (e.h = r.hashFn()),
              this.sendRequest("q", e, function (e) {
                var t = e.d,
                  n = e.s;
                Zt.warnOnListenWarnings_(t, o),
                  (i.listens.get(a) && i.listens.get(a).get(s)) === r &&
                    (i.log_("listen response", e),
                    "ok" !== n && i.removeListen_(a, s),
                    r.onComplete && r.onComplete(n, t));
              });
          }),
          (Zt.warnOnListenWarnings_ = function (e, t) {
            e &&
              "object" == typeof e &&
              O(e, "w") &&
              ((e = D(e, "w")),
              Array.isArray(e) &&
                ~e.indexOf("no_index") &&
                ((e =
                  '".indexOn": "' + t._queryParams.getIndex().toString() + '"'),
                (t = t._path.toString()),
                Ne(
                  "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                    e +
                    " at " +
                    t +
                    " to your security rules for better performance."
                )));
          }),
          (Zt.prototype.refreshAuthToken = function (e) {
            (this.authToken_ = e),
              this.log_("Auth token refreshed"),
              this.authToken_
                ? this.tryAuth()
                : this.connected_ &&
                  this.sendRequest("unauth", {}, function () {}),
              this.reduceReconnectDelayIfAdminCredential_(e);
          }),
          (Zt.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
            ((e && 40 === e.length) ||
              (function (e) {
                e = k(e).claims;
                return "object" == typeof e && !0 === e.admin;
              })(e)) &&
              (this.log_(
                "Admin auth credential detected.  Reducing max reconnect time."
              ),
              (this.maxReconnectDelay_ = 3e4));
          }),
          (Zt.prototype.tryAuth = function () {
            var n,
              e,
              t,
              r = this;
            this.connected_ &&
              this.authToken_ &&
              ((e = (function (e) {
                e = k(e).claims;
                return !!e && "object" == typeof e && e.hasOwnProperty("iat");
              })((n = this.authToken_))
                ? "auth"
                : "gauth"),
              (t = { cred: n }),
              null === this.authOverride_
                ? (t.noauth = !0)
                : "object" == typeof this.authOverride_ &&
                  (t.authvar = this.authOverride_),
              this.sendRequest(e, t, function (e) {
                var t = e.s,
                  e = e.d || "error";
                r.authToken_ === n &&
                  ("ok" === t
                    ? (r.invalidAuthTokenCount_ = 0)
                    : r.onAuthRevoked_(t, e));
              }));
          }),
          (Zt.prototype.unlisten = function (e, t) {
            var n = e._path.toString(),
              r = e._queryIdentifier;
            this.log_("Unlisten called for " + n + " " + r),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "unlisten() called for non-default but complete query"
              ),
              this.removeListen_(n, r) &&
                this.connected_ &&
                this.sendUnlisten_(n, r, e._queryObject, t);
          }),
          (Zt.prototype.sendUnlisten_ = function (e, t, n, r) {
            this.log_("Unlisten on " + e + " for " + t);
            e = { p: e };
            r && ((e.q = n), (e.t = r)), this.sendRequest("n", e);
          }),
          (Zt.prototype.onDisconnectPut = function (e, t, n) {
            this.connected_
              ? this.sendOnDisconnect_("o", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "o",
                  data: t,
                  onComplete: n,
                });
          }),
          (Zt.prototype.onDisconnectMerge = function (e, t, n) {
            this.connected_
              ? this.sendOnDisconnect_("om", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "om",
                  data: t,
                  onComplete: n,
                });
          }),
          (Zt.prototype.onDisconnectCancel = function (e, t) {
            this.connected_
              ? this.sendOnDisconnect_("oc", e, null, t)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "oc",
                  data: null,
                  onComplete: t,
                });
          }),
          (Zt.prototype.sendOnDisconnect_ = function (e, t, n, r) {
            n = { p: t, d: n };
            this.log_("onDisconnect " + e, n),
              this.sendRequest(e, n, function (e) {
                r &&
                  setTimeout(function () {
                    r(e.s, e.d);
                  }, Math.floor(0));
              });
          }),
          (Zt.prototype.put = function (e, t, n, r) {
            this.putInternal("p", e, t, n, r);
          }),
          (Zt.prototype.merge = function (e, t, n, r) {
            this.putInternal("m", e, t, n, r);
          }),
          (Zt.prototype.putInternal = function (e, t, n, r, i) {
            n = { p: t, d: n };
            void 0 !== i && (n.h = i),
              this.outstandingPuts_.push({
                action: e,
                request: n,
                onComplete: r,
              }),
              this.outstandingPutCount_++;
            r = this.outstandingPuts_.length - 1;
            this.connected_
              ? this.sendPut_(r)
              : this.log_("Buffering put: " + t);
          }),
          (Zt.prototype.sendPut_ = function (t) {
            var n = this,
              r = this.outstandingPuts_[t].action,
              e = this.outstandingPuts_[t].request,
              i = this.outstandingPuts_[t].onComplete;
            (this.outstandingPuts_[t].queued = this.connected_),
              this.sendRequest(r, e, function (e) {
                n.log_(r + " response", e),
                  delete n.outstandingPuts_[t],
                  n.outstandingPutCount_--,
                  0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []),
                  i && i(e.s, e.d);
              });
          }),
          (Zt.prototype.reportStats = function (e) {
            var t = this;
            this.connected_ &&
              ((e = { c: e }),
              this.log_("reportStats", e),
              this.sendRequest("s", e, function (e) {
                "ok" !== e.s &&
                  ((e = e.d),
                  t.log_("reportStats", "Error sending stats: " + e));
              }));
          }),
          (Zt.prototype.onDataMessage_ = function (e) {
            if ("r" in e) {
              this.log_("from server: " + R(e));
              var t = e.r,
                n = this.requestCBHash_[t];
              n && (delete this.requestCBHash_[t], n(e.b));
            } else {
              if ("error" in e)
                throw "A server-side error has occurred: " + e.error;
              "a" in e && this.onDataPush_(e.a, e.b);
            }
          }),
          (Zt.prototype.onDataPush_ = function (e, t) {
            this.log_("handleServerMessage", e, t),
              "d" === e
                ? this.onDataUpdate_(t.p, t.d, !1, t.t)
                : "m" === e
                ? this.onDataUpdate_(t.p, t.d, !0, t.t)
                : "c" === e
                ? this.onListenRevoked_(t.p, t.q)
                : "ac" === e
                ? this.onAuthRevoked_(t.s, t.d)
                : "sd" === e
                ? this.onSecurityDebugPacket_(t)
                : he(
                    "Unrecognized action received from server: " +
                      R(e) +
                      "\nAre you using the latest client?"
                  );
          }),
          (Zt.prototype.onReady_ = function (e, t) {
            this.log_("connection ready"),
              (this.connected_ = !0),
              (this.lastConnectionEstablishedTime_ = new Date().getTime()),
              this.handleTimestamp_(e),
              (this.lastSessionId = t),
              this.firstConnection_ && this.sendConnectStats_(),
              this.restoreState_(),
              (this.firstConnection_ = !1),
              this.onConnectStatus_(!0);
          }),
          (Zt.prototype.scheduleConnect_ = function (e) {
            var t = this;
            g(
              !this.realtime_,
              "Scheduling a connect when we're already connected/ing?"
            ),
              this.establishConnectionTimer_ &&
                clearTimeout(this.establishConnectionTimer_),
              (this.establishConnectionTimer_ = setTimeout(function () {
                (t.establishConnectionTimer_ = null), t.establishConnection_();
              }, Math.floor(e)));
          }),
          (Zt.prototype.onVisible_ = function (e) {
            e &&
              !this.visible_ &&
              this.reconnectDelay_ === this.maxReconnectDelay_ &&
              (this.log_("Window became visible.  Reducing delay."),
              (this.reconnectDelay_ = $t),
              this.realtime_ || this.scheduleConnect_(0)),
              (this.visible_ = e);
          }),
          (Zt.prototype.onOnline_ = function (e) {
            e
              ? (this.log_("Browser went online."),
                (this.reconnectDelay_ = $t),
                this.realtime_ || this.scheduleConnect_(0))
              : (this.log_("Browser went offline.  Killing connection."),
                this.realtime_ && this.realtime_.close());
          }),
          (Zt.prototype.onRealtimeDisconnect_ = function () {
            var e;
            this.log_("data client disconnected"),
              (this.connected_ = !1),
              (this.realtime_ = null),
              this.cancelSentTransactions_(),
              (this.requestCBHash_ = {}),
              this.shouldReconnect_() &&
                (this.visible_
                  ? this.lastConnectionEstablishedTime_ &&
                    (3e4 <
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ &&
                      (this.reconnectDelay_ = $t),
                    (this.lastConnectionEstablishedTime_ = null))
                  : (this.log_("Window isn't visible.  Delaying reconnect."),
                    (this.reconnectDelay_ = this.maxReconnectDelay_),
                    (this.lastConnectionAttemptTime_ = new Date().getTime())),
                (e = new Date().getTime() - this.lastConnectionAttemptTime_),
                (e = Math.max(0, this.reconnectDelay_ - e)),
                (e = Math.random() * e),
                this.log_("Trying to reconnect in " + e + "ms"),
                this.scheduleConnect_(e),
                (this.reconnectDelay_ = Math.min(
                  this.maxReconnectDelay_,
                  1.3 * this.reconnectDelay_
                ))),
              this.onConnectStatus_(!1);
          }),
          (Zt.prototype.establishConnection_ = function () {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              e,
              l = this;
            this.shouldReconnect_() &&
              (this.log_("Making a connection attempt"),
              (this.lastConnectionAttemptTime_ = new Date().getTime()),
              (this.lastConnectionEstablishedTime_ = null),
              (t = this.onDataMessage_.bind(this)),
              (n = this.onReady_.bind(this)),
              (r = this.onRealtimeDisconnect_.bind(this)),
              (i = this.id + ":" + Zt.nextConnectionId_++),
              (o = this.lastSessionId),
              (a = !1),
              (s = null),
              (u = function () {
                s ? s.close() : ((a = !0), r());
              }),
              (this.realtime_ = {
                close: u,
                sendRequest: function (e) {
                  g(
                    s,
                    "sendRequest call when we're not connected not allowed."
                  ),
                    s.sendRequest(e);
                },
              }),
              (e = this.forceTokenRefresh_),
              (this.forceTokenRefresh_ = !1),
              this.authTokenProvider_
                .getToken(e)
                .then(function (e) {
                  a
                    ? Ie("getToken() completed but was canceled")
                    : (Ie("getToken() completed. Creating connection."),
                      (l.authToken_ = e && e.accessToken),
                      (s = new vt(
                        i,
                        l.repoInfo_,
                        l.applicationId_,
                        t,
                        n,
                        r,
                        function (e) {
                          Ne(e + " (" + l.repoInfo_.toString() + ")"),
                            l.interrupt("server_kill");
                        },
                        o
                      )));
                })
                .then(null, function (e) {
                  l.log_("Failed to get token: " + e),
                    a || (l.repoInfo_.nodeAdmin && Ne(e), u());
                }));
          }),
          (Zt.prototype.interrupt = function (e) {
            Ie("Interrupting connection for reason: " + e),
              (this.interruptReasons_[e] = !0),
              this.realtime_
                ? this.realtime_.close()
                : (this.establishConnectionTimer_ &&
                    (clearTimeout(this.establishConnectionTimer_),
                    (this.establishConnectionTimer_ = null)),
                  this.connected_ && this.onRealtimeDisconnect_());
          }),
          (Zt.prototype.resume = function (e) {
            Ie("Resuming connection for reason: " + e),
              delete this.interruptReasons_[e],
              A(this.interruptReasons_) &&
                ((this.reconnectDelay_ = $t),
                this.realtime_ || this.scheduleConnect_(0));
          }),
          (Zt.prototype.handleTimestamp_ = function (e) {
            e -= new Date().getTime();
            this.onServerInfoUpdate_({ serverTimeOffset: e });
          }),
          (Zt.prototype.cancelSentTransactions_ = function () {
            for (var e = 0; e < this.outstandingPuts_.length; e++) {
              var t = this.outstandingPuts_[e];
              t &&
                "h" in t.request &&
                t.queued &&
                (t.onComplete && t.onComplete("disconnect"),
                delete this.outstandingPuts_[e],
                this.outstandingPutCount_--);
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
          }),
          (Zt.prototype.onListenRevoked_ = function (e, t) {
            (t = t
              ? t
                  .map(function (e) {
                    return Oe(e);
                  })
                  .join("$")
              : "default"),
              (t = this.removeListen_(e, t));
            t && t.onComplete && t.onComplete("permission_denied");
          }),
          (Zt.prototype.removeListen_ = function (e, t) {
            var n,
              r = new Nt(e).toString();
            return (
              this.listens.has(r)
                ? ((n = (e = this.listens.get(r)).get(t)),
                  e.delete(t),
                  0 === e.size && this.listens.delete(r))
                : (n = void 0),
              n
            );
          }),
          (Zt.prototype.onAuthRevoked_ = function (e, t) {
            Ie("Auth token revoked: " + e + "/" + t),
              (this.authToken_ = null),
              (this.forceTokenRefresh_ = !0),
              this.realtime_.close(),
              ("invalid_token" !== e && "permission_denied" !== e) ||
                (this.invalidAuthTokenCount_++,
                3 <= this.invalidAuthTokenCount_ &&
                  ((this.reconnectDelay_ = 3e4),
                  this.authTokenProvider_.notifyForInvalidToken()));
          }),
          (Zt.prototype.onSecurityDebugPacket_ = function (e) {
            this.securityDebugCallback_
              ? this.securityDebugCallback_(e)
              : "msg" in e &&
                console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
          }),
          (Zt.prototype.restoreState_ = function () {
            var t, e, n, r;
            this.tryAuth();
            try {
              for (
                var i = _(this.listens.values()), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var a = o.value;
                try {
                  for (
                    var s = ((n = void 0), _(a.values())), u = s.next();
                    !u.done;
                    u = s.next()
                  ) {
                    var l = u.value;
                    this.sendListen_(l);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = s.return) && r.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = i.return) && e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
            for (var h = 0; h < this.outstandingPuts_.length; h++)
              this.outstandingPuts_[h] && this.sendPut_(h);
            for (; this.onDisconnectRequestQueue_.length; ) {
              var c = this.onDisconnectRequestQueue_.shift();
              this.sendOnDisconnect_(
                c.action,
                c.pathString,
                c.data,
                c.onComplete
              );
            }
            for (h = 0; h < this.outstandingGets_.length; h++)
              this.outstandingGets_[h] && this.sendGet_(h);
          }),
          (Zt.prototype.sendConnectStats_ = function () {
            var e = {};
            (e["sdk.js." + ht.replace(/\./g, "-")] = 1),
              w()
                ? (e["framework.cordova"] = 1)
                : "object" == typeof navigator &&
                  "ReactNative" === navigator.product &&
                  (e["framework.reactnative"] = 1),
              this.reportStats(e);
          }),
          (Zt.prototype.shouldReconnect_ = function () {
            var e = St.getInstance().currentlyOnline();
            return A(this.interruptReasons_) && e;
          }),
          (Zt.nextPersistentConnectionId_ = 0),
          (Zt.nextConnectionId_ = 0),
          Zt);
      function Zt(e, t, n, r, i, o, a) {
        var s = Gt.call(this) || this;
        if (
          ((s.repoInfo_ = e),
          (s.applicationId_ = t),
          (s.onDataUpdate_ = n),
          (s.onConnectStatus_ = r),
          (s.onServerInfoUpdate_ = i),
          (s.authTokenProvider_ = o),
          (s.authOverride_ = a),
          (s.id = Zt.nextPersistentConnectionId_++),
          (s.log_ = Te("p:" + s.id + ":")),
          (s.interruptReasons_ = {}),
          (s.listens = new Map()),
          (s.outstandingPuts_ = []),
          (s.outstandingGets_ = []),
          (s.outstandingPutCount_ = 0),
          (s.outstandingGetCount_ = 0),
          (s.onDisconnectRequestQueue_ = []),
          (s.connected_ = !1),
          (s.reconnectDelay_ = $t),
          (s.maxReconnectDelay_ = Jt),
          (s.securityDebugCallback_ = null),
          (s.lastSessionId = null),
          (s.establishConnectionTimer_ = null),
          (s.visible_ = !1),
          (s.requestCBHash_ = {}),
          (s.requestNumber_ = 0),
          (s.realtime_ = null),
          (s.authToken_ = null),
          (s.forceTokenRefresh_ = !1),
          (s.invalidAuthTokenCount_ = 0),
          (s.firstConnection_ = !0),
          (s.lastConnectionAttemptTime_ = null),
          (s.lastConnectionEstablishedTime_ = null),
          a && !C())
        )
          throw new Error(
            "Auth override specified in options, but not supported on non Node.js platforms"
          );
        return (
          s.scheduleConnect_(0),
          Yt.getInstance().on("visible", s.onVisible_, s),
          -1 === e.host.indexOf("fblocal") &&
            St.getInstance().on("online", s.onOnline_, s),
          s
        );
      }
      var en =
        ((tn.Wrap = function (e, t) {
          return new tn(e, t);
        }),
        tn);
      function tn(e, t) {
        (this.name = e), (this.node = t);
      }
      var nn,
        ye =
          ((rn.prototype.getCompare = function () {
            return this.compare.bind(this);
          }),
          (rn.prototype.indexedValueChanged = function (e, t) {
            (e = new en(xe, e)), (t = new en(xe, t));
            return 0 !== this.compare(e, t);
          }),
          (rn.prototype.minPost = function () {
            return en.MIN;
          }),
          rn);
      function rn() {}
      var on,
        re =
          (n(an, (on = ye)),
          Object.defineProperty(an, "__EMPTY_NODE", {
            get: function () {
              return nn;
            },
            set: function (e) {
              nn = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (an.prototype.compare = function (e, t) {
            return ke(e.name, t.name);
          }),
          (an.prototype.isDefinedOn = function (e) {
            throw m("KeyIndex.isDefinedOn not expected to be called.");
          }),
          (an.prototype.indexedValueChanged = function (e, t) {
            return !1;
          }),
          (an.prototype.minPost = function () {
            return en.MIN;
          }),
          (an.prototype.maxPost = function () {
            return new en(Re, nn);
          }),
          (an.prototype.makePost = function (e, t) {
            return (
              g(
                "string" == typeof e,
                "KeyIndex indexValue must always be a string."
              ),
              new en(e, nn)
            );
          }),
          (an.prototype.toString = function () {
            return ".key";
          }),
          an);
      function an() {
        return (null !== on && on.apply(this, arguments)) || this;
      }
      var sn = new re(),
        un =
          ((ln.prototype.getNext = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_.pop(),
              t = this.resultGenerator_
                ? this.resultGenerator_(e.key, e.value)
                : { key: e.key, value: e.value };
            if (this.isReverse_)
              for (e = e.left; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.right);
            else
              for (e = e.right; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.left);
            return t;
          }),
          (ln.prototype.hasNext = function () {
            return 0 < this.nodeStack_.length;
          }),
          (ln.prototype.peek = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_
              ? this.resultGenerator_(e.key, e.value)
              : { key: e.key, value: e.value };
          }),
          ln);
      function ln(e, t, n, r, i) {
        void 0 === i && (i = null),
          (this.isReverse_ = r),
          (this.resultGenerator_ = i),
          (this.nodeStack_ = []);
        for (var o = 1; !e.isEmpty(); )
          if (((o = t ? n(e.key, t) : 1), r && (o *= -1), o < 0))
            e = this.isReverse_ ? e.left : e.right;
          else {
            if (0 === o) {
              this.nodeStack_.push(e);
              break;
            }
            this.nodeStack_.push(e), (e = this.isReverse_ ? e.right : e.left);
          }
      }
      var hn =
        ((cn.prototype.copy = function (e, t, n, r, i) {
          return new cn(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != n ? n : this.color,
            null != r ? r : this.left,
            null != i ? i : this.right
          );
        }),
        (cn.prototype.count = function () {
          return this.left.count() + 1 + this.right.count();
        }),
        (cn.prototype.isEmpty = function () {
          return !1;
        }),
        (cn.prototype.inorderTraversal = function (e) {
          return (
            this.left.inorderTraversal(e) ||
            !!e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }),
        (cn.prototype.reverseTraversal = function (e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }),
        (cn.prototype.min_ = function () {
          return this.left.isEmpty() ? this : this.left.min_();
        }),
        (cn.prototype.minKey = function () {
          return this.min_().key;
        }),
        (cn.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (cn.prototype.insert = function (e, t, n) {
          var r = this,
            i = n(e, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(e, t, n), null)
              : 0 === i
              ? r.copy(null, t, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(e, t, n)
                )).fixUp_();
        }),
        (cn.prototype.removeMin_ = function () {
          if (this.left.isEmpty()) return fn.EMPTY_NODE;
          var e = this;
          return (e = (e =
            !e.left.isRed_() && !e.left.left.isRed_()
              ? e.moveRedLeft_()
              : e).copy(null, null, null, e.left.removeMin_(), null)).fixUp_();
        }),
        (cn.prototype.remove = function (e, t) {
          var n,
            r = this;
          if (t(e, r.key) < 0)
            r = (r = !(
              r.left.isEmpty() ||
              r.left.isRed_() ||
              r.left.left.isRed_()
            )
              ? r.moveRedLeft_()
              : r).copy(null, null, null, r.left.remove(e, t), null);
          else {
            if (
              0 ===
              t(
                e,
                (r = !(
                  (r = r.left.isRed_()
                    ? r.rotateRight_()
                    : r).right.isEmpty() ||
                  r.right.isRed_() ||
                  r.right.left.isRed_()
                )
                  ? r.moveRedRight_()
                  : r).key
              )
            ) {
              if (r.right.isEmpty()) return fn.EMPTY_NODE;
              (n = r.right.min_()),
                (r = r.copy(n.key, n.value, null, null, r.right.removeMin_()));
            }
            r = r.copy(null, null, null, null, r.right.remove(e, t));
          }
          return r.fixUp_();
        }),
        (cn.prototype.isRed_ = function () {
          return this.color;
        }),
        (cn.prototype.fixUp_ = function () {
          var e = this;
          return (e =
            (e =
              (e =
                e.right.isRed_() && !e.left.isRed_()
                  ? e.rotateLeft_()
                  : e).left.isRed_() && e.left.left.isRed_()
                ? e.rotateRight_()
                : e).left.isRed_() && e.right.isRed_()
              ? e.colorFlip_()
              : e);
        }),
        (cn.prototype.moveRedLeft_ = function () {
          var e = this.colorFlip_();
          return (e = e.right.left.isRed_()
            ? (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()
            : e);
        }),
        (cn.prototype.moveRedRight_ = function () {
          var e = this.colorFlip_();
          return (e = e.left.left.isRed_()
            ? (e = e.rotateRight_()).colorFlip_()
            : e);
        }),
        (cn.prototype.rotateLeft_ = function () {
          var e = this.copy(null, null, cn.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }),
        (cn.prototype.rotateRight_ = function () {
          var e = this.copy(null, null, cn.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }),
        (cn.prototype.colorFlip_ = function () {
          var e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }),
        (cn.prototype.checkMaxDepth_ = function () {
          var e = this.check_();
          return Math.pow(2, e) <= this.count() + 1;
        }),
        (cn.prototype.check_ = function () {
          if (this.isRed_() && this.left.isRed_())
            throw new Error(
              "Red node has red child(" + this.key + "," + this.value + ")"
            );
          if (this.right.isRed_())
            throw new Error(
              "Right child of (" + this.key + "," + this.value + ") is red"
            );
          var e = this.left.check_();
          if (e !== this.right.check_()) throw new Error("Black depths differ");
          return e + (this.isRed_() ? 0 : 1);
        }),
        (cn.RED = !0),
        (cn.BLACK = !1),
        cn);
      function cn(e, t, n, r, i) {
        (this.key = e),
          (this.value = t),
          (this.color = null != n ? n : cn.RED),
          (this.left = null != r ? r : fn.EMPTY_NODE),
          (this.right = null != i ? i : fn.EMPTY_NODE);
      }
      (dn.prototype.copy = function (e, t, n, r, i) {
        return this;
      }),
        (dn.prototype.insert = function (e, t, n) {
          return new hn(e, t, null);
        }),
        (dn.prototype.remove = function (e, t) {
          return this;
        }),
        (dn.prototype.count = function () {
          return 0;
        }),
        (dn.prototype.isEmpty = function () {
          return !0;
        }),
        (dn.prototype.inorderTraversal = function (e) {
          return !1;
        }),
        (dn.prototype.reverseTraversal = function (e) {
          return !1;
        }),
        (dn.prototype.minKey = function () {
          return null;
        }),
        (dn.prototype.maxKey = function () {
          return null;
        }),
        (dn.prototype.check_ = function () {
          return 0;
        }),
        (dn.prototype.isRed_ = function () {
          return !1;
        }),
        (Ct = dn);
      function dn() {}
      var pn,
        fn =
          ((_n.prototype.insert = function (e, t) {
            return new _n(
              this.comparator_,
              this.root_
                .insert(e, t, this.comparator_)
                .copy(null, null, hn.BLACK, null, null)
            );
          }),
          (_n.prototype.remove = function (e) {
            return new _n(
              this.comparator_,
              this.root_
                .remove(e, this.comparator_)
                .copy(null, null, hn.BLACK, null, null)
            );
          }),
          (_n.prototype.get = function (e) {
            for (var t, n = this.root_; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) return n.value;
              t < 0 ? (n = n.left) : 0 < t && (n = n.right);
            }
            return null;
          }),
          (_n.prototype.getPredecessorKey = function (e) {
            for (var t, n = this.root_, r = null; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) {
                if (n.left.isEmpty()) return r ? r.key : null;
                for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                return n.key;
              }
              t < 0 ? (n = n.left) : 0 < t && (n = (r = n).right);
            }
            throw new Error(
              "Attempted to find predecessor key for a nonexistent key.  What gives?"
            );
          }),
          (_n.prototype.isEmpty = function () {
            return this.root_.isEmpty();
          }),
          (_n.prototype.count = function () {
            return this.root_.count();
          }),
          (_n.prototype.minKey = function () {
            return this.root_.minKey();
          }),
          (_n.prototype.maxKey = function () {
            return this.root_.maxKey();
          }),
          (_n.prototype.inorderTraversal = function (e) {
            return this.root_.inorderTraversal(e);
          }),
          (_n.prototype.reverseTraversal = function (e) {
            return this.root_.reverseTraversal(e);
          }),
          (_n.prototype.getIterator = function (e) {
            return new un(this.root_, null, this.comparator_, !1, e);
          }),
          (_n.prototype.getIteratorFrom = function (e, t) {
            return new un(this.root_, e, this.comparator_, !1, t);
          }),
          (_n.prototype.getReverseIteratorFrom = function (e, t) {
            return new un(this.root_, e, this.comparator_, !0, t);
          }),
          (_n.prototype.getReverseIterator = function (e) {
            return new un(this.root_, null, this.comparator_, !0, e);
          }),
          (_n.EMPTY_NODE = new Ct()),
          _n);
      function _n(e, t) {
        void 0 === t && (t = _n.EMPTY_NODE),
          (this.comparator_ = e),
          (this.root_ = t);
      }
      function yn(e, t) {
        return ke(e.name, t.name);
      }
      function vn(e, t) {
        return ke(e, t);
      }
      function gn(e) {
        return "number" == typeof e ? "number:" + Ae(e) : "string:" + e;
      }
      var mn,
        wn,
        Cn,
        bn,
        En = function (e) {
          var t;
          e.isLeafNode()
            ? ((t = e.val()),
              g(
                "string" == typeof t ||
                  "number" == typeof t ||
                  ("object" == typeof t && O(t, ".sv")),
                "Priority must be a string or number."
              ))
            : g(e === pn || e.isEmpty(), "priority of unexpected type."),
            g(
              e === pn || e.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
        },
        Sn =
          (Object.defineProperty(In, "__childrenNodeConstructor", {
            get: function () {
              return mn;
            },
            set: function (e) {
              mn = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (In.prototype.isLeafNode = function () {
            return !0;
          }),
          (In.prototype.getPriority = function () {
            return this.priorityNode_;
          }),
          (In.prototype.updatePriority = function (e) {
            return new In(this.value_, e);
          }),
          (In.prototype.getImmediateChild = function (e) {
            return ".priority" === e
              ? this.priorityNode_
              : In.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (In.prototype.getChild = function (e) {
            return qt(e)
              ? this
              : ".priority" === kt(e)
              ? this.priorityNode_
              : In.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (In.prototype.hasChild = function () {
            return !1;
          }),
          (In.prototype.getPredecessorChildName = function (e, t) {
            return null;
          }),
          (In.prototype.updateImmediateChild = function (e, t) {
            return ".priority" === e
              ? this.updatePriority(t)
              : t.isEmpty() && ".priority" !== e
              ? this
              : In.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                  e,
                  t
                ).updatePriority(this.priorityNode_);
          }),
          (In.prototype.updateChild = function (e, t) {
            var n = kt(e);
            return null === n
              ? t
              : t.isEmpty() && ".priority" !== n
              ? this
              : (g(
                  ".priority" !== n || 1 === Ot(e),
                  ".priority must be the last token in a path"
                ),
                this.updateImmediateChild(
                  n,
                  In.__childrenNodeConstructor.EMPTY_NODE.updateChild(Dt(e), t)
                ));
          }),
          (In.prototype.isEmpty = function () {
            return !1;
          }),
          (In.prototype.numChildren = function () {
            return 0;
          }),
          (In.prototype.forEachChild = function (e, t) {
            return !1;
          }),
          (In.prototype.val = function (e) {
            return e && !this.getPriority().isEmpty()
              ? {
                  ".value": this.getValue(),
                  ".priority": this.getPriority().val(),
                }
              : this.getValue();
          }),
          (In.prototype.hash = function () {
            var e, t;
            return (
              null === this.lazyHash_ &&
                ((e = ""),
                this.priorityNode_.isEmpty() ||
                  (e += "priority:" + gn(this.priorityNode_.val()) + ":"),
                (e += (t = typeof this.value_) + ":"),
                (e += "number" == t ? Ae(this.value_) : this.value_),
                (this.lazyHash_ = le(e))),
              this.lazyHash_
            );
          }),
          (In.prototype.getValue = function () {
            return this.value_;
          }),
          (In.prototype.compareTo = function (e) {
            return e === In.__childrenNodeConstructor.EMPTY_NODE
              ? 1
              : e instanceof In.__childrenNodeConstructor
              ? -1
              : (g(e.isLeafNode(), "Unknown node type"),
                this.compareToLeafNode_(e));
          }),
          (In.prototype.compareToLeafNode_ = function (e) {
            var t = typeof e.value_,
              n = typeof this.value_,
              r = In.VALUE_TYPE_ORDER.indexOf(t),
              i = In.VALUE_TYPE_ORDER.indexOf(n);
            return (
              g(0 <= r, "Unknown leaf type: " + t),
              g(0 <= i, "Unknown leaf type: " + n),
              r === i
                ? "object" == n
                  ? 0
                  : this.value_ < e.value_
                  ? -1
                  : this.value_ === e.value_
                  ? 0
                  : 1
                : i - r
            );
          }),
          (In.prototype.withIndex = function () {
            return this;
          }),
          (In.prototype.isIndexed = function () {
            return !0;
          }),
          (In.prototype.equals = function (e) {
            return (
              e === this ||
              (!!e.isLeafNode() &&
                this.value_ === e.value_ &&
                this.priorityNode_.equals(e.priorityNode_))
            );
          }),
          (In.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"]),
          In);
      function In(e, t) {
        void 0 === t && (t = In.__childrenNodeConstructor.EMPTY_NODE),
          (this.value_ = e),
          (this.priorityNode_ = t),
          (this.lazyHash_ = null),
          g(
            void 0 !== this.value_ && null !== this.value_,
            "LeafNode shouldn't be created with null/undefined value."
          ),
          En(this.priorityNode_);
      }
      function Tn() {
        return (null !== bn && bn.apply(this, arguments)) || this;
      }
      var Pn = new (n(Tn, (bn = ye)),
        (Tn.prototype.compare = function (e, t) {
          var n = e.node.getPriority(),
            r = t.node.getPriority(),
            r = n.compareTo(r);
          return 0 === r ? ke(e.name, t.name) : r;
        }),
        (Tn.prototype.isDefinedOn = function (e) {
          return !e.getPriority().isEmpty();
        }),
        (Tn.prototype.indexedValueChanged = function (e, t) {
          return !e.getPriority().equals(t.getPriority());
        }),
        (Tn.prototype.minPost = function () {
          return en.MIN;
        }),
        (Tn.prototype.maxPost = function () {
          return new en(Re, new Sn("[PRIORITY-POST]", Cn));
        }),
        (Tn.prototype.makePost = function (e, t) {
          e = wn(e);
          return new en(t, new Sn("[PRIORITY-POST]", e));
        }),
        (Tn.prototype.toString = function () {
          return ".priority";
        }),
        Tn)(),
        Nn = Math.log(2),
        xn =
          ((Rn.prototype.nextBitIsOne = function () {
            var e = !(this.bits_ & (1 << this.current_));
            return this.current_--, e;
          }),
          Rn);
      function Rn(e) {
        var t;
        (this.count = ((t = e + 1), parseInt(Math.log(t) / Nn, 10))),
          (this.current_ = this.count - 1);
        var n,
          r = ((n = this.count), parseInt(Array(n + 1).join("1"), 2));
        this.bits_ = (e + 1) & r;
      }
      var kn,
        On,
        Dn = function (l, e, h, t) {
          l.sort(e);
          var c = function (e, t) {
              var n = t - e;
              if (0 == n) return null;
              if (1 == n)
                return (
                  (r = l[e]),
                  (i = h ? h(r) : r),
                  new hn(i, r.node, hn.BLACK, null, null)
                );
              var n = parseInt(n / 2, 10) + e,
                e = c(e, n),
                t = c(n + 1, t),
                r = l[n],
                i = h ? h(r) : r;
              return new hn(i, r.node, hn.BLACK, e, t);
            },
            n = (function (e) {
              for (
                var t = null,
                  n = null,
                  i = l.length,
                  r = function (e, t) {
                    var n = i - e,
                      r = i;
                    i -= e;
                    (e = c(1 + n, r)), (r = l[n]), (n = h ? h(r) : r);
                    o(new hn(n, r.node, t, null, e));
                  },
                  o = function (e) {
                    t = t ? (t.left = e) : (n = e);
                  },
                  a = 0;
                a < e.count;
                ++a
              ) {
                var s = e.nextBitIsOne(),
                  u = Math.pow(2, e.count - (a + 1));
                s ? r(u, hn.BLACK) : (r(u, hn.BLACK), r(u, hn.RED));
              }
              return n;
            })(new xn(l.length));
          return new fn(t || e, n);
        },
        An = {},
        Ln =
          (Object.defineProperty(Mn, "Default", {
            get: function () {
              return (
                g(Pn, "ChildrenNode.ts has not been loaded"),
                (kn = kn || new Mn({ ".priority": An }, { ".priority": Pn }))
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Mn.prototype.get = function (e) {
            var t = D(this.indexes_, e);
            if (!t) throw new Error("No index defined for " + e);
            return t instanceof fn ? t : null;
          }),
          (Mn.prototype.hasIndex = function (e) {
            return O(this.indexSet_, e.toString());
          }),
          (Mn.prototype.addIndex = function (e, t) {
            g(
              e !== sn,
              "KeyIndex always exists and isn't meant to be added to the IndexMap."
            );
            for (
              var n = [], r = !1, i = t.getIterator(en.Wrap), o = i.getNext();
              o;

            )
              (r = r || e.isDefinedOn(o.node)), n.push(o), (o = i.getNext());
            var a = r ? Dn(n, e.getCompare()) : An,
              s = e.toString(),
              u = l({}, this.indexSet_);
            u[s] = e;
            t = l({}, this.indexes_);
            return (t[s] = a), new Mn(t, u);
          }),
          (Mn.prototype.addToIndexes = function (a, s) {
            var u = this;
            return new Mn(
              L(this.indexes_, function (e, t) {
                var n = D(u.indexSet_, t);
                if ((g(n, "Missing index implementation for " + t), e === An)) {
                  if (n.isDefinedOn(a.node)) {
                    for (
                      var r = [], i = s.getIterator(en.Wrap), o = i.getNext();
                      o;

                    )
                      o.name !== a.name && r.push(o), (o = i.getNext());
                    return r.push(a), Dn(r, n.getCompare());
                  }
                  return An;
                }
                n = s.get(a.name);
                return (e = n ? e.remove(new en(a.name, n)) : e).insert(
                  a,
                  a.node
                );
              }),
              this.indexSet_
            );
          }),
          (Mn.prototype.removeFromIndexes = function (n, r) {
            return new Mn(
              L(this.indexes_, function (e) {
                if (e === An) return e;
                var t = r.get(n.name);
                return t ? e.remove(new en(n.name, t)) : e;
              }),
              this.indexSet_
            );
          }),
          Mn);
      function Mn(e, t) {
        (this.indexes_ = e), (this.indexSet_ = t);
      }
      var Fn,
        qn =
          (Object.defineProperty(Wn, "EMPTY_NODE", {
            get: function () {
              return (On = On || new Wn(new fn(vn), null, Ln.Default));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Wn.prototype.isLeafNode = function () {
            return !1;
          }),
          (Wn.prototype.getPriority = function () {
            return this.priorityNode_ || On;
          }),
          (Wn.prototype.updatePriority = function (e) {
            return this.children_.isEmpty()
              ? this
              : new Wn(this.children_, e, this.indexMap_);
          }),
          (Wn.prototype.getImmediateChild = function (e) {
            if (".priority" === e) return this.getPriority();
            e = this.children_.get(e);
            return null === e ? On : e;
          }),
          (Wn.prototype.getChild = function (e) {
            var t = kt(e);
            return null === t
              ? this
              : this.getImmediateChild(t).getChild(Dt(e));
          }),
          (Wn.prototype.hasChild = function (e) {
            return null !== this.children_.get(e);
          }),
          (Wn.prototype.updateImmediateChild = function (e, t) {
            if (
              (g(t, "We should always be passing snapshot nodes"),
              ".priority" === e)
            )
              return this.updatePriority(t);
            var n = new en(e, t),
              r = void 0,
              i = void 0,
              i = t.isEmpty()
                ? ((r = this.children_.remove(e)),
                  this.indexMap_.removeFromIndexes(n, this.children_))
                : ((r = this.children_.insert(e, t)),
                  this.indexMap_.addToIndexes(n, this.children_)),
              n = r.isEmpty() ? On : this.priorityNode_;
            return new Wn(r, n, i);
          }),
          (Wn.prototype.updateChild = function (e, t) {
            var n = kt(e);
            if (null === n) return t;
            g(
              ".priority" !== kt(e) || 1 === Ot(e),
              ".priority must be the last token in a path"
            );
            t = this.getImmediateChild(n).updateChild(Dt(e), t);
            return this.updateImmediateChild(n, t);
          }),
          (Wn.prototype.isEmpty = function () {
            return this.children_.isEmpty();
          }),
          (Wn.prototype.numChildren = function () {
            return this.children_.count();
          }),
          (Wn.prototype.val = function (n) {
            if (this.isEmpty()) return null;
            var r = {},
              i = 0,
              o = 0,
              a = !0;
            if (
              (this.forEachChild(Pn, function (e, t) {
                (r[e] = t.val(n)),
                  i++,
                  a && Wn.INTEGER_REGEXP_.test(e)
                    ? (o = Math.max(o, Number(e)))
                    : (a = !1);
              }),
              !n && a && o < 2 * i)
            ) {
              var e,
                t = [];
              for (e in r) t[e] = r[e];
              return t;
            }
            return (
              n &&
                !this.getPriority().isEmpty() &&
                (r[".priority"] = this.getPriority().val()),
              r
            );
          }),
          (Wn.prototype.hash = function () {
            var n;
            return (
              null === this.lazyHash_ &&
                ((n = ""),
                this.getPriority().isEmpty() ||
                  (n += "priority:" + gn(this.getPriority().val()) + ":"),
                this.forEachChild(Pn, function (e, t) {
                  t = t.hash();
                  "" !== t && (n += ":" + e + ":" + t);
                }),
                (this.lazyHash_ = "" === n ? "" : le(n))),
              this.lazyHash_
            );
          }),
          (Wn.prototype.getPredecessorChildName = function (e, t, n) {
            n = this.resolveIndex_(n);
            if (n) {
              t = n.getPredecessorKey(new en(e, t));
              return t ? t.name : null;
            }
            return this.children_.getPredecessorKey(e);
          }),
          (Wn.prototype.getFirstChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.minKey();
              return e && e.name;
            }
            return this.children_.minKey();
          }),
          (Wn.prototype.getFirstChild = function (e) {
            e = this.getFirstChildName(e);
            return e ? new en(e, this.children_.get(e)) : null;
          }),
          (Wn.prototype.getLastChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.maxKey();
              return e && e.name;
            }
            return this.children_.maxKey();
          }),
          (Wn.prototype.getLastChild = function (e) {
            e = this.getLastChildName(e);
            return e ? new en(e, this.children_.get(e)) : null;
          }),
          (Wn.prototype.forEachChild = function (e, t) {
            e = this.resolveIndex_(e);
            return e
              ? e.inorderTraversal(function (e) {
                  return t(e.name, e.node);
                })
              : this.children_.inorderTraversal(t);
          }),
          (Wn.prototype.getIterator = function (e) {
            return this.getIteratorFrom(e.minPost(), e);
          }),
          (Wn.prototype.getIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getIteratorFrom(e.name, en.Wrap),
                i = r.peek();
              null != i && t.compare(i, e) < 0;

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Wn.prototype.getReverseIterator = function (e) {
            return this.getReverseIteratorFrom(e.maxPost(), e);
          }),
          (Wn.prototype.getReverseIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getReverseIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getReverseIteratorFrom(e.name, en.Wrap),
                i = r.peek();
              null != i && 0 < t.compare(i, e);

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Wn.prototype.compareTo = function (e) {
            return this.isEmpty()
              ? e.isEmpty()
                ? 0
                : -1
              : e.isLeafNode() || e.isEmpty()
              ? 1
              : e === Un
              ? -1
              : 0;
          }),
          (Wn.prototype.withIndex = function (e) {
            if (e === sn || this.indexMap_.hasIndex(e)) return this;
            e = this.indexMap_.addIndex(e, this.children_);
            return new Wn(this.children_, this.priorityNode_, e);
          }),
          (Wn.prototype.isIndexed = function (e) {
            return e === sn || this.indexMap_.hasIndex(e);
          }),
          (Wn.prototype.equals = function (e) {
            if (e === this) return !0;
            if (e.isLeafNode()) return !1;
            if (this.getPriority().equals(e.getPriority())) {
              if (this.children_.count() !== e.children_.count()) return !1;
              for (
                var t = this.getIterator(Pn),
                  n = e.getIterator(Pn),
                  r = t.getNext(),
                  i = n.getNext();
                r && i;

              ) {
                if (r.name !== i.name || !r.node.equals(i.node)) return !1;
                (r = t.getNext()), (i = n.getNext());
              }
              return null === r && null === i;
            }
            return !1;
          }),
          (Wn.prototype.resolveIndex_ = function (e) {
            return e === sn ? null : this.indexMap_.get(e.toString());
          }),
          (Wn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
          Wn);
      function Wn(e, t, n) {
        (this.children_ = e),
          (this.priorityNode_ = t),
          (this.indexMap_ = n),
          (this.lazyHash_ = null),
          this.priorityNode_ && En(this.priorityNode_),
          this.children_.isEmpty() &&
            g(
              !this.priorityNode_ || this.priorityNode_.isEmpty(),
              "An empty node cannot have a priority"
            );
      }
      function jn() {
        return Fn.call(this, new fn(vn), qn.EMPTY_NODE, Ln.Default) || this;
      }
      var Un = new (n(jn, (Fn = qn)),
      (jn.prototype.compareTo = function (e) {
        return e === this ? 0 : 1;
      }),
      (jn.prototype.equals = function (e) {
        return e === this;
      }),
      (jn.prototype.getPriority = function () {
        return this;
      }),
      (jn.prototype.getImmediateChild = function (e) {
        return qn.EMPTY_NODE;
      }),
      (jn.prototype.isEmpty = function () {
        return !1;
      }),
      jn)();
      Object.defineProperties(en, {
        MIN: { value: new en(xe, qn.EMPTY_NODE) },
        MAX: { value: new en(Re, Un) },
      }),
        (re.__EMPTY_NODE = qn.EMPTY_NODE),
        (Sn.__childrenNodeConstructor = qn),
        (pn = Un),
        (Cn = Un);
      var Bn = !0;
      function Hn(n, e) {
        if ((void 0 === e && (e = null), null === n)) return qn.EMPTY_NODE;
        if (
          ("object" == typeof n && ".priority" in n && (e = n[".priority"]),
          g(
            null === e ||
              "string" == typeof e ||
              "number" == typeof e ||
              ("object" == typeof e && ".sv" in e),
            "Invalid priority type found: " + typeof e
          ),
          "object" == typeof n &&
            ".value" in n &&
            null !== n[".value"] &&
            (n = n[".value"]),
          "object" != typeof n || ".sv" in n)
        )
          return new Sn(n, Hn(e));
        if (n instanceof Array || !Bn) {
          var r = qn.EMPTY_NODE;
          return (
            De(n, function (e, t) {
              O(n, e) &&
                "." !== e.substring(0, 1) &&
                ((!(t = Hn(t)).isLeafNode() && t.isEmpty()) ||
                  (r = r.updateImmediateChild(e, t)));
            }),
            r.updatePriority(Hn(e))
          );
        }
        var i = [],
          o = !1;
        if (
          (De(n, function (e, t) {
            "." !== e.substring(0, 1) &&
              ((t = Hn(t)).isEmpty() ||
                ((o = o || !t.getPriority().isEmpty()), i.push(new en(e, t))));
          }),
          0 === i.length)
        )
          return qn.EMPTY_NODE;
        var t = Dn(
          i,
          yn,
          function (e) {
            return e.name;
          },
          vn
        );
        if (o) {
          var a = Dn(i, Pn.getCompare());
          return new qn(
            t,
            Hn(e),
            new Ln({ ".priority": a }, { ".priority": Pn })
          );
        }
        return new qn(t, Hn(e), Ln.Default);
      }
      wn = Hn;
      var Vn,
        zn,
        Qn =
          (n(Yn, (Vn = ye)),
          (Yn.prototype.extractChild = function (e) {
            return e.getChild(this.indexPath_);
          }),
          (Yn.prototype.isDefinedOn = function (e) {
            return !e.getChild(this.indexPath_).isEmpty();
          }),
          (Yn.prototype.compare = function (e, t) {
            var n = this.extractChild(e.node),
              r = this.extractChild(t.node),
              r = n.compareTo(r);
            return 0 === r ? ke(e.name, t.name) : r;
          }),
          (Yn.prototype.makePost = function (e, t) {
            (e = Hn(e)), (e = qn.EMPTY_NODE.updateChild(this.indexPath_, e));
            return new en(t, e);
          }),
          (Yn.prototype.maxPost = function () {
            var e = qn.EMPTY_NODE.updateChild(this.indexPath_, Un);
            return new en(Re, e);
          }),
          (Yn.prototype.toString = function () {
            return Lt(this.indexPath_, 0).join("/");
          }),
          Yn);
      function Yn(e) {
        var t = Vn.call(this) || this;
        return (
          (t.indexPath_ = e),
          g(
            !qt(e) && ".priority" !== kt(e),
            "Can't create PathIndex with empty path or .priority key"
          ),
          t
        );
      }
      function Kn() {
        return (null !== zn && zn.apply(this, arguments)) || this;
      }
      function Gn(e) {
        if (e === "" + qe) return "-";
        var t = We(e);
        if (null != t) return "" + (t + 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        if (n.length < 786) return n.push("-"), n.join("");
        for (var i = n.length - 1; 0 <= i && "z" === n[i]; ) i--;
        return -1 === i
          ? Re
          : ((t = n[i]),
            (t = er.charAt(er.indexOf(t) + 1)),
            (n[i] = t),
            n.slice(0, i + 1).join(""));
      }
      function $n(e) {
        if (e === "" + Fe) return xe;
        var t = We(e);
        if (null != t) return "" + (t - 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        return "-" === n[n.length - 1]
          ? 1 === n.length
            ? "" + qe
            : (delete n[n.length - 1], n.join(""))
          : ((n[n.length - 1] = er.charAt(er.indexOf(n[n.length - 1]) - 1)),
            n.join("") + "z".repeat(786 - n.length));
      }
      var Jn,
        Xn,
        Zn = new (n(Kn, (zn = ye)),
        (Kn.prototype.compare = function (e, t) {
          var n = e.node.compareTo(t.node);
          return 0 === n ? ke(e.name, t.name) : n;
        }),
        (Kn.prototype.isDefinedOn = function (e) {
          return !0;
        }),
        (Kn.prototype.indexedValueChanged = function (e, t) {
          return !e.equals(t);
        }),
        (Kn.prototype.minPost = function () {
          return en.MIN;
        }),
        (Kn.prototype.maxPost = function () {
          return en.MAX;
        }),
        (Kn.prototype.makePost = function (e, t) {
          e = Hn(e);
          return new en(t, e);
        }),
        (Kn.prototype.toString = function () {
          return ".value";
        }),
        Kn)(),
        er = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
        tr =
          ((Jn = 0),
          (Xn = []),
          function (e) {
            var t = e === Jn;
            Jn = e;
            for (var n = new Array(8), r = 7; 0 <= r; r--)
              (n[r] = er.charAt(e % 64)), (e = Math.floor(e / 64));
            g(0 === e, "Cannot push at time == 0");
            var i = n.join("");
            if (t) {
              for (r = 11; 0 <= r && 63 === Xn[r]; r--) Xn[r] = 0;
              Xn[r]++;
            } else
              for (r = 0; r < 12; r++) Xn[r] = Math.floor(64 * Math.random());
            for (r = 0; r < 12; r++) i += er.charAt(Xn[r]);
            return g(20 === i.length, "nextPushId: Length should be 20."), i;
          });
      function nr(e) {
        return { type: "value", snapshotNode: e };
      }
      function rr(e, t) {
        return { type: "child_added", snapshotNode: t, childName: e };
      }
      function ir(e, t) {
        return { type: "child_removed", snapshotNode: t, childName: e };
      }
      function or(e, t, n) {
        return {
          type: "child_changed",
          snapshotNode: t,
          childName: e,
          oldSnap: n,
        };
      }
      var ar =
        ((sr.prototype.updateChild = function (e, t, n, r, i, o) {
          g(
            e.isIndexed(this.index_),
            "A node must be indexed if only a child is updated"
          );
          var a = e.getImmediateChild(t);
          return a.getChild(r).equals(n.getChild(r)) &&
            a.isEmpty() === n.isEmpty()
            ? e
            : (null != o &&
                (n.isEmpty()
                  ? e.hasChild(t)
                    ? o.trackChildChange(ir(t, a))
                    : g(
                        e.isLeafNode(),
                        "A child remove without an old child only makes sense on a leaf node"
                      )
                  : a.isEmpty()
                  ? o.trackChildChange(rr(t, n))
                  : o.trackChildChange(or(t, n, a))),
              e.isLeafNode() && n.isEmpty()
                ? e
                : e.updateImmediateChild(t, n).withIndex(this.index_));
        }),
        (sr.prototype.updateFullNode = function (r, n, i) {
          return (
            null != i &&
              (r.isLeafNode() ||
                r.forEachChild(Pn, function (e, t) {
                  n.hasChild(e) || i.trackChildChange(ir(e, t));
                }),
              n.isLeafNode() ||
                n.forEachChild(Pn, function (e, t) {
                  var n;
                  r.hasChild(e)
                    ? (n = r.getImmediateChild(e)).equals(t) ||
                      i.trackChildChange(or(e, t, n))
                    : i.trackChildChange(rr(e, t));
                })),
            n.withIndex(this.index_)
          );
        }),
        (sr.prototype.updatePriority = function (e, t) {
          return e.isEmpty() ? qn.EMPTY_NODE : e.updatePriority(t);
        }),
        (sr.prototype.filtersNodes = function () {
          return !1;
        }),
        (sr.prototype.getIndexedFilter = function () {
          return this;
        }),
        (sr.prototype.getIndex = function () {
          return this.index_;
        }),
        sr);
      function sr(e) {
        this.index_ = e;
      }
      var ur =
        ((lr.prototype.getStartPost = function () {
          return this.startPost_;
        }),
        (lr.prototype.getEndPost = function () {
          return this.endPost_;
        }),
        (lr.prototype.matches = function (e) {
          return (
            this.index_.compare(this.getStartPost(), e) <= 0 &&
            this.index_.compare(e, this.getEndPost()) <= 0
          );
        }),
        (lr.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.matches(new en(t, n)) || (n = qn.EMPTY_NODE),
            this.indexedFilter_.updateChild(e, t, n, r, i, o)
          );
        }),
        (lr.prototype.updateFullNode = function (e, t, n) {
          t.isLeafNode() && (t = qn.EMPTY_NODE);
          var r = (r = t.withIndex(this.index_)).updatePriority(qn.EMPTY_NODE),
            i = this;
          return (
            t.forEachChild(Pn, function (e, t) {
              i.matches(new en(e, t)) ||
                (r = r.updateImmediateChild(e, qn.EMPTY_NODE));
            }),
            this.indexedFilter_.updateFullNode(e, r, n)
          );
        }),
        (lr.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (lr.prototype.filtersNodes = function () {
          return !0;
        }),
        (lr.prototype.getIndexedFilter = function () {
          return this.indexedFilter_;
        }),
        (lr.prototype.getIndex = function () {
          return this.index_;
        }),
        (lr.getStartPost_ = function (e) {
          if (e.hasStart()) {
            var t = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), t);
          }
          return e.getIndex().minPost();
        }),
        (lr.getEndPost_ = function (e) {
          if (e.hasEnd()) {
            var t = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), t);
          }
          return e.getIndex().maxPost();
        }),
        lr);
      function lr(e) {
        (this.indexedFilter_ = new ar(e.getIndex())),
          (this.index_ = e.getIndex()),
          (this.startPost_ = lr.getStartPost_(e)),
          (this.endPost_ = lr.getEndPost_(e));
      }
      var hr =
        ((cr.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.rangedFilter_.matches(new en(t, n)) || (n = qn.EMPTY_NODE),
            e.getImmediateChild(t).equals(n)
              ? e
              : e.numChildren() < this.limit_
              ? this.rangedFilter_
                  .getIndexedFilter()
                  .updateChild(e, t, n, r, i, o)
              : this.fullLimitUpdateChild_(e, t, n, i, o)
          );
        }),
        (cr.prototype.updateFullNode = function (e, t, n) {
          if (t.isLeafNode() || t.isEmpty())
            r = qn.EMPTY_NODE.withIndex(this.index_);
          else if (
            2 * this.limit_ < t.numChildren() &&
            t.isIndexed(this.index_)
          ) {
            var r = qn.EMPTY_NODE.withIndex(this.index_),
              i = void 0;
            i = this.reverse_
              ? t.getReverseIteratorFrom(
                  this.rangedFilter_.getEndPost(),
                  this.index_
                )
              : t.getIteratorFrom(
                  this.rangedFilter_.getStartPost(),
                  this.index_
                );
            for (var o = 0; i.hasNext() && o < this.limit_; ) {
              var a = i.getNext();
              if (
                !(this.reverse_
                  ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <=
                    0
                  : this.index_.compare(a, this.rangedFilter_.getEndPost()) <=
                    0)
              )
                break;
              (r = r.updateImmediateChild(a.name, a.node)), o++;
            }
          } else {
            r = (r = t.withIndex(this.index_)).updatePriority(qn.EMPTY_NODE);
            var s,
              u = void 0,
              l = void 0,
              h = void 0,
              i = void 0;
            h = this.reverse_
              ? ((i = r.getReverseIterator(this.index_)),
                (u = this.rangedFilter_.getEndPost()),
                (l = this.rangedFilter_.getStartPost()),
                (s = this.index_.getCompare()),
                function (e, t) {
                  return s(t, e);
                })
              : ((i = r.getIterator(this.index_)),
                (u = this.rangedFilter_.getStartPost()),
                (l = this.rangedFilter_.getEndPost()),
                this.index_.getCompare());
            for (var o = 0, c = !1; i.hasNext(); ) {
              a = i.getNext();
              (c = !c && h(u, a) <= 0 ? !0 : c) &&
              o < this.limit_ &&
              h(a, l) <= 0
                ? o++
                : (r = r.updateImmediateChild(a.name, qn.EMPTY_NODE));
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
        }),
        (cr.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (cr.prototype.filtersNodes = function () {
          return !0;
        }),
        (cr.prototype.getIndexedFilter = function () {
          return this.rangedFilter_.getIndexedFilter();
        }),
        (cr.prototype.getIndex = function () {
          return this.index_;
        }),
        (cr.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
          var o, a;
          a = this.reverse_
            ? ((o = this.index_.getCompare()),
              function (e, t) {
                return o(t, e);
              })
            : this.index_.getCompare();
          var s = e;
          g(s.numChildren() === this.limit_, "");
          var u = new en(t, n),
            l = this.reverse_
              ? s.getFirstChild(this.index_)
              : s.getLastChild(this.index_),
            h = this.rangedFilter_.matches(u);
          if (s.hasChild(t)) {
            for (
              var c = s.getImmediateChild(t),
                d = r.getChildAfterChild(this.index_, l, this.reverse_);
              null != d && (d.name === t || s.hasChild(d.name));

            )
              d = r.getChildAfterChild(this.index_, d, this.reverse_);
            var p = null == d ? 1 : a(d, u);
            if (h && !n.isEmpty() && 0 <= p)
              return (
                null != i && i.trackChildChange(or(t, n, c)),
                s.updateImmediateChild(t, n)
              );
            null != i && i.trackChildChange(ir(t, c));
            c = s.updateImmediateChild(t, qn.EMPTY_NODE);
            return null != d && this.rangedFilter_.matches(d)
              ? (null != i && i.trackChildChange(rr(d.name, d.node)),
                c.updateImmediateChild(d.name, d.node))
              : c;
          }
          return !n.isEmpty() && h && 0 <= a(l, u)
            ? (null != i &&
                (i.trackChildChange(ir(l.name, l.node)),
                i.trackChildChange(rr(t, n))),
              s
                .updateImmediateChild(t, n)
                .updateImmediateChild(l.name, qn.EMPTY_NODE))
            : e;
        }),
        cr);
      function cr(e) {
        (this.rangedFilter_ = new ur(e)),
          (this.index_ = e.getIndex()),
          (this.limit_ = e.getLimit()),
          (this.reverse_ = !e.isViewFromLeft());
      }
      var dr =
        ((pr.prototype.hasStart = function () {
          return this.startSet_;
        }),
        (pr.prototype.hasStartAfter = function () {
          return this.startAfterSet_;
        }),
        (pr.prototype.hasEndBefore = function () {
          return this.endBeforeSet_;
        }),
        (pr.prototype.isViewFromLeft = function () {
          return "" === this.viewFrom_
            ? this.startSet_
            : "l" === this.viewFrom_;
        }),
        (pr.prototype.getIndexStartValue = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.indexStartValue_
          );
        }),
        (pr.prototype.getIndexStartName = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.startNameSet_ ? this.indexStartName_ : xe
          );
        }),
        (pr.prototype.hasEnd = function () {
          return this.endSet_;
        }),
        (pr.prototype.getIndexEndValue = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.indexEndValue_
          );
        }),
        (pr.prototype.getIndexEndName = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.endNameSet_ ? this.indexEndName_ : Re
          );
        }),
        (pr.prototype.hasLimit = function () {
          return this.limitSet_;
        }),
        (pr.prototype.hasAnchoredLimit = function () {
          return this.limitSet_ && "" !== this.viewFrom_;
        }),
        (pr.prototype.getLimit = function () {
          return (
            g(this.limitSet_, "Only valid if limit has been set"), this.limit_
          );
        }),
        (pr.prototype.getIndex = function () {
          return this.index_;
        }),
        (pr.prototype.loadsAllData = function () {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }),
        (pr.prototype.isDefault = function () {
          return this.loadsAllData() && this.index_ === Pn;
        }),
        (pr.prototype.copy = function () {
          var e = new pr();
          return (
            (e.limitSet_ = this.limitSet_),
            (e.limit_ = this.limit_),
            (e.startSet_ = this.startSet_),
            (e.indexStartValue_ = this.indexStartValue_),
            (e.startNameSet_ = this.startNameSet_),
            (e.indexStartName_ = this.indexStartName_),
            (e.endSet_ = this.endSet_),
            (e.indexEndValue_ = this.indexEndValue_),
            (e.endNameSet_ = this.endNameSet_),
            (e.indexEndName_ = this.indexEndName_),
            (e.index_ = this.index_),
            (e.viewFrom_ = this.viewFrom_),
            e
          );
        }),
        pr);
      function pr() {
        (this.limitSet_ = !1),
          (this.startSet_ = !1),
          (this.startNameSet_ = !1),
          (this.startAfterSet_ = !1),
          (this.endSet_ = !1),
          (this.endNameSet_ = !1),
          (this.endBeforeSet_ = !1),
          (this.limit_ = 0),
          (this.viewFrom_ = ""),
          (this.indexStartValue_ = null),
          (this.indexStartName_ = ""),
          (this.indexEndValue_ = null),
          (this.indexEndName_ = ""),
          (this.index_ = Pn);
      }
      function fr(e, t, n) {
        e = e.copy();
        return (
          (e.startSet_ = !0),
          void 0 === t && (t = null),
          (e.indexStartValue_ = t),
          null != n
            ? ((e.startNameSet_ = !0), (e.indexStartName_ = n))
            : ((e.startNameSet_ = !1), (e.indexStartName_ = "")),
          e
        );
      }
      function _r(e, t, n) {
        e = e.copy();
        return (
          (e.endSet_ = !0),
          void 0 === t && (t = null),
          (e.indexEndValue_ = t),
          void 0 !== n
            ? ((e.endNameSet_ = !0), (e.indexEndName_ = n))
            : ((e.endNameSet_ = !1), (e.indexEndName_ = "")),
          e
        );
      }
      function yr(e, t) {
        e = e.copy();
        return (e.index_ = t), e;
      }
      function vr(e) {
        var t,
          n = {};
        return (
          e.isDefault() ||
            ((t =
              e.index_ === Pn
                ? "$priority"
                : e.index_ === Zn
                ? "$value"
                : e.index_ === sn
                ? "$key"
                : (g(e.index_ instanceof Qn, "Unrecognized index type!"),
                  e.index_.toString())),
            (n.orderBy = R(t)),
            e.startSet_ &&
              ((n.startAt = R(e.indexStartValue_)),
              e.startNameSet_ && (n.startAt += "," + R(e.indexStartName_))),
            e.endSet_ &&
              ((n.endAt = R(e.indexEndValue_)),
              e.endNameSet_ && (n.endAt += "," + R(e.indexEndName_))),
            e.limitSet_ &&
              (e.isViewFromLeft()
                ? (n.limitToFirst = e.limit_)
                : (n.limitToLast = e.limit_))),
          n
        );
      }
      function gr(e) {
        var t,
          n = {};
        return (
          e.startSet_ &&
            ((n.sp = e.indexStartValue_),
            e.startNameSet_ && (n.sn = e.indexStartName_)),
          e.endSet_ &&
            ((n.ep = e.indexEndValue_),
            e.endNameSet_ && (n.en = e.indexEndName_)),
          e.limitSet_ &&
            ((n.l = e.limit_),
            "" === (t = e.viewFrom_) && (t = e.isViewFromLeft() ? "l" : "r"),
            (n.vf = t)),
          e.index_ !== Pn && (n.i = e.index_.toString()),
          n
        );
      }
      var mr,
        wr =
          (n(Cr, (mr = mt)),
          (Cr.prototype.reportStats = function (e) {
            throw new Error("Method not implemented.");
          }),
          (Cr.getListenId_ = function (e, t) {
            return void 0 !== t
              ? "tag$" + t
              : (g(
                  e._queryParams.isDefault(),
                  "should have a tag if it's not a default query."
                ),
                e._path.toString());
          }),
          (Cr.prototype.listen = function (e, t, n, r) {
            var i = this,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + e._queryIdentifier);
            var a = Cr.getListenId_(e, n),
              s = {};
            this.listens_[a] = s;
            e = vr(e._queryParams);
            this.restRequest_(o + ".json", e, function (e, t) {
              null === (e = 404 === e ? (t = null) : e) &&
                i.onDataUpdate_(o, t, !1, n),
                D(i.listens_, a) === s &&
                  r(
                    e
                      ? 401 === e
                        ? "permission_denied"
                        : "rest_error:" + e
                      : "ok",
                    null
                  );
            });
          }),
          (Cr.prototype.unlisten = function (e, t) {
            t = Cr.getListenId_(e, t);
            delete this.listens_[t];
          }),
          (Cr.prototype.get = function (e) {
            var n = this,
              t = vr(e._queryParams),
              r = e._path.toString(),
              i = new f();
            return (
              this.restRequest_(r + ".json", t, function (e, t) {
                null === (e = 404 === e ? (t = null) : e)
                  ? (n.onDataUpdate_(r, t, !1, null), i.resolve(t))
                  : i.reject(new Error(t));
              }),
              i.promise
            );
          }),
          (Cr.prototype.refreshAuthToken = function (e) {}),
          (Cr.prototype.restRequest_ = function (r, i, o) {
            var a = this;
            ((i = void 0 === i ? {} : i).format = "export"),
              this.authTokenProvider_.getToken(!1).then(function (e) {
                e = e && e.accessToken;
                e && (i.auth = e);
                var t =
                  (a.repoInfo_.secure ? "https://" : "http://") +
                  a.repoInfo_.host +
                  r +
                  "?ns=" +
                  a.repoInfo_.namespace +
                  M(i);
                a.log_("Sending REST request for " + t);
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (o && 4 === n.readyState) {
                    a.log_(
                      "REST Response for " + t + " received. status:",
                      n.status,
                      "response:",
                      n.responseText
                    );
                    var e = null;
                    if (200 <= n.status && n.status < 300) {
                      try {
                        e = x(n.responseText);
                      } catch (e) {
                        Ne(
                          "Failed to parse JSON response for " +
                            t +
                            ": " +
                            n.responseText
                        );
                      }
                      o(null, e);
                    } else
                      401 !== n.status &&
                        404 !== n.status &&
                        Ne(
                          "Got unsuccessful REST response for " +
                            t +
                            " Status: " +
                            n.status
                        ),
                        o(n.status);
                    o = null;
                  }
                }),
                  n.open("GET", t, !0),
                  n.send();
              });
          }),
          Cr);
      function Cr(e, t, n) {
        var r = mr.call(this) || this;
        return (
          (r.repoInfo_ = e),
          (r.onDataUpdate_ = t),
          (r.authTokenProvider_ = n),
          (r.log_ = Te("p:rest:")),
          (r.listens_ = {}),
          r
        );
      }
      var br =
        ((Er.prototype.getNode = function (e) {
          return this.rootNode_.getChild(e);
        }),
        (Er.prototype.updateSnapshot = function (e, t) {
          this.rootNode_ = this.rootNode_.updateChild(e, t);
        }),
        Er);
      function Er() {
        this.rootNode_ = qn.EMPTY_NODE;
      }
      function Sr() {
        return { value: null, children: new Map() };
      }
      function Ir(e, t, n) {
        var r;
        qt(t)
          ? ((e.value = n), e.children.clear())
          : null !== e.value
          ? (e.value = e.value.updateChild(t, n))
          : ((r = kt(t)),
            e.children.has(r) || e.children.set(r, Sr()),
            Ir(e.children.get(r), (t = Dt(t)), n));
      }
      function Tr(e, n, r) {
        var i;
        null !== e.value
          ? r(n, e.value)
          : ((i = function (e, t) {
              Tr(t, new Nt(n.toString() + "/" + e), r);
            }),
            e.children.forEach(function (e, t) {
              i(t, e);
            }));
      }
      var Pr =
        ((Nr.prototype.get = function () {
          var e = this.collection_.get(),
            n = l({}, e);
          return (
            this.last_ &&
              De(this.last_, function (e, t) {
                n[e] = n[e] - t;
              }),
            (this.last_ = e),
            n
          );
        }),
        Nr);
      function Nr(e) {
        (this.collection_ = e), (this.last_ = null);
      }
      var xr,
        Rr =
          ((kr.prototype.reportStats_ = function () {
            var n = this,
              e = this.statsListener_.get(),
              r = {},
              i = !1;
            De(e, function (e, t) {
              0 < t && O(n.statsToReport_, e) && ((r[e] = t), (i = !0));
            }),
              i && this.server_.reportStats(r),
              Le(
                this.reportStats_.bind(this),
                Math.floor(2 * Math.random() * 3e5)
              );
          }),
          kr);
      function kr(e, t) {
        (this.server_ = t),
          (this.statsToReport_ = {}),
          (this.statsListener_ = new Pr(e));
        e = 1e4 + 2e4 * Math.random();
        Le(this.reportStats_.bind(this), Math.floor(e));
      }
      function Or() {
        return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
      }
      function Dr() {
        return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
      }
      function Ar(e) {
        return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
      }
      ((mt = xr = xr || {})[(mt.OVERWRITE = 0)] = "OVERWRITE"),
        (mt[(mt.MERGE = 1)] = "MERGE"),
        (mt[(mt.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
        (mt[(mt.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
      var Lr =
        ((Mr.prototype.operationForChild = function (e) {
          if (qt(this.path)) {
            if (null != this.affectedTree.value)
              return (
                g(
                  this.affectedTree.children.isEmpty(),
                  "affectedTree should not have overlapping affected paths."
                ),
                this
              );
            var t = this.affectedTree.subtree(new Nt(e));
            return new Mr(Rt(), t, this.revert);
          }
          return (
            g(
              kt(this.path) === e,
              "operationForChild called for unrelated child."
            ),
            new Mr(Dt(this.path), this.affectedTree, this.revert)
          );
        }),
        Mr);
      function Mr(e, t, n) {
        (this.path = e),
          (this.affectedTree = t),
          (this.revert = n),
          (this.type = xr.ACK_USER_WRITE),
          (this.source = Or());
      }
      var Fr =
        ((qr.prototype.operationForChild = function (e) {
          return qt(this.path)
            ? new qr(this.source, Rt())
            : new qr(this.source, Dt(this.path));
        }),
        qr);
      function qr(e, t) {
        (this.source = e), (this.path = t), (this.type = xr.LISTEN_COMPLETE);
      }
      var Wr =
        ((jr.prototype.operationForChild = function (e) {
          return qt(this.path)
            ? new jr(this.source, Rt(), this.snap.getImmediateChild(e))
            : new jr(this.source, Dt(this.path), this.snap);
        }),
        jr);
      function jr(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.snap = n),
          (this.type = xr.OVERWRITE);
      }
      var Ur =
        ((Br.prototype.operationForChild = function (e) {
          if (qt(this.path)) {
            var t = this.children.subtree(new Nt(e));
            return t.isEmpty()
              ? null
              : t.value
              ? new Wr(this.source, Rt(), t.value)
              : new Br(this.source, Rt(), t);
          }
          return (
            g(
              kt(this.path) === e,
              "Can't get a merge for a child not on the path of the operation"
            ),
            new Br(this.source, Dt(this.path), this.children)
          );
        }),
        (Br.prototype.toString = function () {
          return (
            "Operation(" +
            this.path +
            ": " +
            this.source.toString() +
            " merge: " +
            this.children.toString() +
            ")"
          );
        }),
        Br);
      function Br(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.children = n),
          (this.type = xr.MERGE);
      }
      var Hr =
        ((Vr.prototype.isFullyInitialized = function () {
          return this.fullyInitialized_;
        }),
        (Vr.prototype.isFiltered = function () {
          return this.filtered_;
        }),
        (Vr.prototype.isCompleteForPath = function (e) {
          if (qt(e)) return this.isFullyInitialized() && !this.filtered_;
          e = kt(e);
          return this.isCompleteForChild(e);
        }),
        (Vr.prototype.isCompleteForChild = function (e) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(e)
          );
        }),
        (Vr.prototype.getNode = function () {
          return this.node_;
        }),
        Vr);
      function Vr(e, t, n) {
        (this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = n);
      }
      var zr,
        Qr = function (e) {
          (this.query_ = e),
            (this.index_ = this.query_._queryParams.getIndex());
        };
      function Yr(n, e, t, r) {
        var i = [],
          o = [];
        return (
          e.forEach(function (e) {
            var t;
            "child_changed" === e.type &&
              n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) &&
              o.push(
                ((t = e.childName),
                {
                  type: "child_moved",
                  snapshotNode: e.snapshotNode,
                  childName: t,
                })
              );
          }),
          Kr(n, i, "child_removed", e, r, t),
          Kr(n, i, "child_added", e, r, t),
          Kr(n, i, "child_moved", o, r, t),
          Kr(n, i, "child_changed", e, r, t),
          Kr(n, i, "value", e, r, t),
          i
        );
      }
      function Kr(o, a, t, e, s, u) {
        e = e.filter(function (e) {
          return e.type === t;
        });
        e.sort(function (e, t) {
          return (function (e, t, n) {
            if (null == t.childName || null == n.childName)
              throw m("Should only compare child_ events.");
            (t = new en(t.childName, t.snapshotNode)),
              (n = new en(n.childName, n.snapshotNode));
            return e.index_.compare(t, n);
          })(o, e, t);
        }),
          e.forEach(function (t) {
            var e,
              n,
              r,
              i =
                ((e = o),
                (r = u),
                "value" === (n = t).type ||
                  "child_removed" === n.type ||
                  (n.prevName = r.getPredecessorChildName(
                    n.childName,
                    n.snapshotNode,
                    e.index_
                  )),
                n);
            s.forEach(function (e) {
              e.respondsTo(t.type) && a.push(e.createEvent(i, o.query_));
            });
          });
      }
      function Gr(e, t) {
        return { eventCache: e, serverCache: t };
      }
      function $r(e, t, n, r) {
        return Gr(new Hr(t, n, r), e.serverCache);
      }
      function Jr(e, t, n, r) {
        return Gr(e.eventCache, new Hr(t, n, r));
      }
      function Xr(e) {
        return e.eventCache.isFullyInitialized()
          ? e.eventCache.getNode()
          : null;
      }
      function Zr(e) {
        return e.serverCache.isFullyInitialized()
          ? e.serverCache.getNode()
          : null;
      }
      var ei =
        ((ti.fromObject = function (e) {
          var n = new ti(null);
          return (
            De(e, function (e, t) {
              n = n.set(new Nt(e), t);
            }),
            n
          );
        }),
        (ti.prototype.isEmpty = function () {
          return null === this.value && this.children.isEmpty();
        }),
        (ti.prototype.findRootMostMatchingPathAndValue = function (e, t) {
          if (null != this.value && t(this.value))
            return { path: Rt(), value: this.value };
          if (qt(e)) return null;
          var n = kt(e),
            r = this.children.get(n);
          if (null === r) return null;
          t = r.findRootMostMatchingPathAndValue(Dt(e), t);
          return null == t
            ? null
            : { path: Ft(new Nt(n), t.path), value: t.value };
        }),
        (ti.prototype.findRootMostValueAndPath = function (e) {
          return this.findRootMostMatchingPathAndValue(e, function () {
            return !0;
          });
        }),
        (ti.prototype.subtree = function (e) {
          if (qt(e)) return this;
          var t = kt(e),
            t = this.children.get(t);
          return null !== t ? t.subtree(Dt(e)) : new ti(null);
        }),
        (ti.prototype.set = function (e, t) {
          if (qt(e)) return new ti(t, this.children);
          var n = kt(e),
            t = (this.children.get(n) || new ti(null)).set(Dt(e), t),
            t = this.children.insert(n, t);
          return new ti(this.value, t);
        }),
        (ti.prototype.remove = function (e) {
          if (qt(e))
            return this.children.isEmpty()
              ? new ti(null)
              : new ti(null, this.children);
          var t = kt(e),
            n = this.children.get(t);
          if (n) {
            (n = n.remove(Dt(e))),
              (e = void 0),
              (e = n.isEmpty()
                ? this.children.remove(t)
                : this.children.insert(t, n));
            return null === this.value && e.isEmpty()
              ? new ti(null)
              : new ti(this.value, e);
          }
          return this;
        }),
        (ti.prototype.get = function (e) {
          if (qt(e)) return this.value;
          var t = kt(e),
            t = this.children.get(t);
          return t ? t.get(Dt(e)) : null;
        }),
        (ti.prototype.setTree = function (e, t) {
          if (qt(e)) return t;
          var n = kt(e),
            e = (this.children.get(n) || new ti(null)).setTree(Dt(e), t),
            t = void 0,
            t = e.isEmpty()
              ? this.children.remove(n)
              : this.children.insert(n, e);
          return new ti(this.value, t);
        }),
        (ti.prototype.fold = function (e) {
          return this.fold_(Rt(), e);
        }),
        (ti.prototype.fold_ = function (n, r) {
          var i = {};
          return (
            this.children.inorderTraversal(function (e, t) {
              i[e] = t.fold_(Ft(n, e), r);
            }),
            r(n, this.value, i)
          );
        }),
        (ti.prototype.findOnPath = function (e, t) {
          return this.findOnPath_(e, Rt(), t);
        }),
        (ti.prototype.findOnPath_ = function (e, t, n) {
          var r = !!this.value && n(t, this.value);
          if (r) return r;
          if (qt(e)) return null;
          var i = kt(e),
            r = this.children.get(i);
          return r ? r.findOnPath_(Dt(e), Ft(t, i), n) : null;
        }),
        (ti.prototype.foreachOnPath = function (e, t) {
          return this.foreachOnPath_(e, Rt(), t);
        }),
        (ti.prototype.foreachOnPath_ = function (e, t, n) {
          if (qt(e)) return this;
          this.value && n(t, this.value);
          var r = kt(e),
            i = this.children.get(r);
          return i ? i.foreachOnPath_(Dt(e), Ft(t, r), n) : new ti(null);
        }),
        (ti.prototype.foreach = function (e) {
          this.foreach_(Rt(), e);
        }),
        (ti.prototype.foreach_ = function (n, r) {
          this.children.inorderTraversal(function (e, t) {
            t.foreach_(Ft(n, e), r);
          }),
            this.value && r(n, this.value);
        }),
        (ti.prototype.foreachChild = function (n) {
          this.children.inorderTraversal(function (e, t) {
            t.value && n(e, t.value);
          });
        }),
        ti);
      function ti(e, t) {
        void 0 === t && (t = zr = zr || new fn(de)),
          (this.value = e),
          (this.children = t);
      }
      var ni =
        ((ri.empty = function () {
          return new ri(new ei(null));
        }),
        ri);
      function ri(e) {
        this.writeTree_ = e;
      }
      function ii(e, t, n) {
        if (qt(t)) return new ni(new ei(n));
        var r = e.writeTree_.findRootMostValueAndPath(t);
        if (null != r) {
          var i = r.path,
            o = r.value,
            r = Wt(i, t),
            o = o.updateChild(r, n);
          return new ni(e.writeTree_.set(i, o));
        }
        (n = new ei(n)), (n = e.writeTree_.setTree(t, n));
        return new ni(n);
      }
      function oi(e, n, t) {
        var r = e;
        return (
          De(t, function (e, t) {
            r = ii(r, Ft(n, e), t);
          }),
          r
        );
      }
      function ai(e, t) {
        if (qt(t)) return ni.empty();
        t = e.writeTree_.setTree(t, new ei(null));
        return new ni(t);
      }
      function si(e, t) {
        return null != ui(e, t);
      }
      function ui(e, t) {
        var n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n
          ? e.writeTree_.get(n.path).getChild(Wt(n.path, t))
          : null;
      }
      function li(e) {
        var n = [],
          t = e.writeTree_.value;
        return (
          null != t
            ? t.isLeafNode() ||
              t.forEachChild(Pn, function (e, t) {
                n.push(new en(e, t));
              })
            : e.writeTree_.children.inorderTraversal(function (e, t) {
                null != t.value && n.push(new en(e, t.value));
              }),
          n
        );
      }
      function hi(e, t) {
        if (qt(t)) return e;
        var n = ui(e, t);
        return new ni(null != n ? new ei(n) : e.writeTree_.subtree(t));
      }
      function ci(e) {
        return e.writeTree_.isEmpty();
      }
      function di(e, t) {
        return (function n(r, e, i) {
          {
            if (null != e.value) return i.updateChild(r, e.value);
            var o = null;
            return (
              e.children.inorderTraversal(function (e, t) {
                ".priority" === e
                  ? (g(
                      null !== t.value,
                      "Priority writes must always be leaf nodes"
                    ),
                    (o = t.value))
                  : (i = n(Ft(r, e), t, i));
              }),
              (i =
                !i.getChild(r).isEmpty() && null !== o
                  ? i.updateChild(Ft(r, ".priority"), o)
                  : i)
            );
          }
        })(Rt(), e.writeTree_, t);
      }
      function pi(e, t) {
        return Ii(t, e);
      }
      function fi(t, n) {
        var e = t.allWrites.findIndex(function (e) {
          return e.writeId === n;
        });
        g(0 <= e, "removeWrite called with nonexistent writeId.");
        var r = t.allWrites[e];
        t.allWrites.splice(e, 1);
        for (
          var i, o = r.visible, a = !1, s = t.allWrites.length - 1;
          o && 0 <= s;

        ) {
          var u = t.allWrites[s];
          u.visible &&
            (e <= s &&
            (function (e, t) {
              {
                if (e.snap) return Bt(e.path, t);
                for (var n in e.children)
                  if (e.children.hasOwnProperty(n) && Bt(Ft(e.path, n), t))
                    return !0;
                return !1;
              }
            })(u, r.path)
              ? (o = !1)
              : Bt(r.path, u.path) && (a = !0)),
            s--;
        }
        return (
          !!o &&
          (a
            ? (((i = t).visibleWrites = yi(i.allWrites, _i, Rt())),
              0 < i.allWrites.length
                ? (i.lastWriteId = i.allWrites[i.allWrites.length - 1].writeId)
                : (i.lastWriteId = -1))
            : r.snap
            ? (t.visibleWrites = ai(t.visibleWrites, r.path))
            : De(r.children, function (e) {
                t.visibleWrites = ai(t.visibleWrites, Ft(r.path, e));
              }),
          !0)
        );
      }
      function _i(e) {
        return e.visible;
      }
      function yi(e, t, n) {
        for (var r = ni.empty(), i = 0; i < e.length; ++i) {
          var o = e[i];
          if (t(o)) {
            var a = o.path,
              s = void 0;
            if (o.snap)
              Bt(n, a)
                ? (r = ii(r, (s = Wt(n, a)), o.snap))
                : Bt(a, n) &&
                  ((s = Wt(a, n)), (r = ii(r, Rt(), o.snap.getChild(s))));
            else {
              if (!o.children)
                throw m("WriteRecord should have .snap or .children");
              Bt(n, a)
                ? (r = oi(r, (s = Wt(n, a)), o.children))
                : Bt(a, n) &&
                  (qt((s = Wt(a, n)))
                    ? (r = oi(r, Rt(), o.children))
                    : (o = D(o.children, kt(s))) &&
                      ((s = o.getChild(Dt(s))), (r = ii(r, Rt(), s))));
            }
          }
        }
        return r;
      }
      function vi(e, t, n, r, i) {
        if (r || i) {
          var o = hi(e.visibleWrites, t);
          if (!i && ci(o)) return n;
          if (i || null != n || si(o, Rt()))
            return di(
              yi(
                e.allWrites,
                function (e) {
                  return (
                    (e.visible || i) &&
                    (!r || !~r.indexOf(e.writeId)) &&
                    (Bt(e.path, t) || Bt(t, e.path))
                  );
                },
                t
              ),
              n || qn.EMPTY_NODE
            );
          return null;
        }
        o = ui(e.visibleWrites, t);
        if (null != o) return o;
        e = hi(e.visibleWrites, t);
        return ci(e)
          ? n
          : null != n || si(e, Rt())
          ? di(e, n || qn.EMPTY_NODE)
          : null;
      }
      function gi(e, t, n, r) {
        return vi(e.writeTree, e.treePath, t, n, r);
      }
      function mi(e, t) {
        return (function (e, t, n) {
          var r = qn.EMPTY_NODE,
            i = ui(e.visibleWrites, t);
          if (i)
            return (
              i.isLeafNode() ||
                i.forEachChild(Pn, function (e, t) {
                  r = r.updateImmediateChild(e, t);
                }),
              r
            );
          if (n) {
            var o = hi(e.visibleWrites, t);
            return (
              n.forEachChild(Pn, function (e, t) {
                t = di(hi(o, new Nt(e)), t);
                r = r.updateImmediateChild(e, t);
              }),
              li(o).forEach(function (e) {
                r = r.updateImmediateChild(e.name, e.node);
              }),
              r
            );
          }
          return (
            li(hi(e.visibleWrites, t)).forEach(function (e) {
              r = r.updateImmediateChild(e.name, e.node);
            }),
            r
          );
        })(e.writeTree, e.treePath, t);
      }
      function wi(e, t, n, r) {
        return (
          (i = e.writeTree),
          (e = e.treePath),
          (t = t),
          (r = r),
          g(
            n || r,
            "Either existingEventSnap or existingServerSnap must exist"
          ),
          (e = Ft(e, t)),
          si(i.visibleWrites, e)
            ? null
            : ci((e = hi(i.visibleWrites, e)))
            ? r.getChild(t)
            : di(e, r.getChild(t))
        );
        var i;
      }
      function Ci(e, t) {
        return (
          (n = e.writeTree), (t = Ft(e.treePath, t)), ui(n.visibleWrites, t)
        );
        var n;
      }
      function bi(e, t, n, r, i, o) {
        return (function (e, t, n, r, i, o, a) {
          var s,
            e = hi(e.visibleWrites, t);
          if (null != (t = ui(e, Rt()))) s = t;
          else {
            if (null == n) return [];
            s = di(e, n);
          }
          if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];
          for (
            var u = [],
              l = a.getCompare(),
              h = o ? s.getReverseIteratorFrom(r, a) : s.getIteratorFrom(r, a),
              c = h.getNext();
            c && u.length < i;

          )
            0 !== l(c, r) && u.push(c), (c = h.getNext());
          return u;
        })(e.writeTree, e.treePath, t, n, r, i, o);
      }
      function Ei(e, t, n) {
        return (
          (r = e.writeTree),
          (i = e.treePath),
          (e = n),
          (t = Ft(i, (n = t))),
          null != (i = ui(r.visibleWrites, t))
            ? i
            : e.isCompleteForChild(n)
            ? di(hi(r.visibleWrites, t), e.getNode().getImmediateChild(n))
            : null
        );
        var r, i;
      }
      function Si(e, t) {
        return Ii(Ft(e.treePath, t), e.writeTree);
      }
      function Ii(e, t) {
        return { treePath: e, writeTree: t };
      }
      var Ti =
        ((Pi.prototype.trackChildChange = function (e) {
          var t = e.type,
            n = e.childName;
          g(
            "child_added" === t ||
              "child_changed" === t ||
              "child_removed" === t,
            "Only child changes supported for tracking"
          ),
            g(
              ".priority" !== n,
              "Only non-priority child changes can be tracked."
            );
          var r = this.changeMap.get(n);
          if (r) {
            var i = r.type;
            if ("child_added" === t && "child_removed" === i)
              this.changeMap.set(n, or(n, e.snapshotNode, r.snapshotNode));
            else if ("child_removed" === t && "child_added" === i)
              this.changeMap.delete(n);
            else if ("child_removed" === t && "child_changed" === i)
              this.changeMap.set(n, ir(n, r.oldSnap));
            else if ("child_changed" === t && "child_added" === i)
              this.changeMap.set(n, rr(n, e.snapshotNode));
            else {
              if ("child_changed" !== t || "child_changed" !== i)
                throw m(
                  "Illegal combination of changes: " +
                    e +
                    " occurred after " +
                    r
                );
              this.changeMap.set(n, or(n, e.snapshotNode, r.oldSnap));
            }
          } else this.changeMap.set(n, e);
        }),
        (Pi.prototype.getChanges = function () {
          return Array.from(this.changeMap.values());
        }),
        Pi);
      function Pi() {
        this.changeMap = new Map();
      }
      function Ni() {}
      var xi = new ((Ni.prototype.getCompleteChild = function (e) {
          return null;
        }),
        (Ni.prototype.getChildAfterChild = function (e, t, n) {
          return null;
        }),
        Ni)(),
        Ri =
          ((ki.prototype.getCompleteChild = function (e) {
            var t = this.viewCache_.eventCache;
            if (t.isCompleteForChild(e))
              return t.getNode().getImmediateChild(e);
            t =
              null != this.optCompleteServerCache_
                ? new Hr(this.optCompleteServerCache_, !0, !1)
                : this.viewCache_.serverCache;
            return Ei(this.writes_, e, t);
          }),
          (ki.prototype.getChildAfterChild = function (e, t, n) {
            var r =
                null != this.optCompleteServerCache_
                  ? this.optCompleteServerCache_
                  : Zr(this.viewCache_),
              e = bi(this.writes_, r, t, 1, n, e);
            return 0 === e.length ? null : e[0];
          }),
          ki);
      function ki(e, t, n) {
        void 0 === n && (n = null),
          (this.writes_ = e),
          (this.viewCache_ = t),
          (this.optCompleteServerCache_ = n);
      }
      function Oi(e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          h,
          c,
          d,
          p = new Ti();
        if (n.type === xr.OVERWRITE)
          var f = n,
            _ = f.source.fromUser
              ? Li(e, t, f.path, f.snap, r, i, p)
              : (g(f.source.fromServer, "Unknown source."),
                (o =
                  f.source.tagged ||
                  (t.serverCache.isFiltered() && !qt(f.path))),
                Ai(e, t, f.path, f.snap, r, i, o, p));
        else if (n.type === xr.MERGE) {
          var y = n;
          _ = y.source.fromUser
            ? ((a = e),
              (s = t),
              (u = y.path),
              (f = y.children),
              (l = r),
              (h = i),
              (c = p),
              (d = s),
              f.foreach(function (e, t) {
                e = Ft(u, e);
                Mi(s, kt(e)) && (d = Li(a, d, e, t, l, h, c));
              }),
              f.foreach(function (e, t) {
                e = Ft(u, e);
                Mi(s, kt(e)) || (d = Li(a, d, e, t, l, h, c));
              }),
              d)
            : (g(y.source.fromServer, "Unknown source."),
              (o = y.source.tagged || t.serverCache.isFiltered()),
              qi(e, t, y.path, y.children, r, i, o, p));
        } else if (n.type === xr.ACK_USER_WRITE) {
          var v = n;
          _ = v.revert
            ? (function (e, t, n, r, i, o) {
                var a;
                {
                  if (null != Ci(r, n)) return t;
                  var s,
                    u,
                    l = new Ri(r, t, i),
                    h = t.eventCache.getNode(),
                    i = void 0;
                  return (
                    qt(n) || ".priority" === kt(n)
                      ? ((u = void 0),
                        (u = t.serverCache.isFullyInitialized()
                          ? gi(r, Zr(t))
                          : ((s = t.serverCache.getNode()),
                            g(
                              s instanceof qn,
                              "serverChildren would be complete if leaf node"
                            ),
                            mi(r, s))),
                        (i = e.filter.updateFullNode(h, u, o)))
                      : ((s = kt(n)),
                        null == (u = Ei(r, s, t.serverCache)) &&
                          t.serverCache.isCompleteForChild(s) &&
                          (u = h.getImmediateChild(s)),
                        (i =
                          null != u
                            ? e.filter.updateChild(h, s, u, Dt(n), l, o)
                            : t.eventCache.getNode().hasChild(s)
                            ? e.filter.updateChild(
                                h,
                                s,
                                qn.EMPTY_NODE,
                                Dt(n),
                                l,
                                o
                              )
                            : h).isEmpty() &&
                          t.serverCache.isFullyInitialized() &&
                          (a = gi(r, Zr(t))).isLeafNode() &&
                          (i = e.filter.updateFullNode(i, a, o))),
                    (a =
                      t.serverCache.isFullyInitialized() ||
                      null != Ci(r, Rt())),
                    $r(t, i, a, e.filter.filtersNodes())
                  );
                }
              })(e, t, v.path, r, i, p)
            : (function (e, t, r, n, i, o, a) {
                if (null != Ci(i, r)) return t;
                var s = t.serverCache.isFiltered(),
                  u = t.serverCache;
                {
                  if (null != n.value) {
                    if (
                      (qt(r) && u.isFullyInitialized()) ||
                      u.isCompleteForPath(r)
                    )
                      return Ai(e, t, r, u.getNode().getChild(r), i, o, s, a);
                    if (qt(r)) {
                      var l = new ei(null);
                      return (
                        u.getNode().forEachChild(sn, function (e, t) {
                          l = l.set(new Nt(e), t);
                        }),
                        qi(e, t, r, l, i, o, s, a)
                      );
                    }
                    return t;
                  }
                  var h = new ei(null);
                  return (
                    n.foreach(function (e, t) {
                      var n = Ft(r, e);
                      u.isCompleteForPath(n) &&
                        (h = h.set(e, u.getNode().getChild(n)));
                    }),
                    qi(e, t, r, h, i, o, s, a)
                  );
                }
              })(e, t, v.path, v.affectedTree, r, i, p);
        } else {
          if (n.type !== xr.LISTEN_COMPLETE)
            throw m("Unknown operation type: " + n.type);
          (o = e),
            (v = t),
            (i = n.path),
            (e = r),
            (n = p),
            (r = v.serverCache),
            (r = Jr(
              v,
              r.getNode(),
              r.isFullyInitialized() || qt(i),
              r.isFiltered()
            )),
            (_ = Di(o, r, i, e, xi, n));
        }
        p = p.getChanges();
        return (
          (function (e, t, n) {
            var r = t.eventCache;
            {
              var i, o;
              r.isFullyInitialized() &&
                ((i = r.getNode().isLeafNode() || r.getNode().isEmpty()),
                (o = Xr(e)),
                (0 < n.length ||
                  !e.eventCache.isFullyInitialized() ||
                  (i && !r.getNode().equals(o)) ||
                  !r.getNode().getPriority().equals(o.getPriority())) &&
                  n.push(nr(Xr(t))));
            }
          })(t, _, p),
          { viewCache: _, changes: p }
        );
      }
      function Di(e, t, n, r, i, o) {
        var a = t.eventCache;
        if (null != Ci(r, n)) return t;
        var s,
          u,
          l,
          h,
          c = void 0,
          d = void 0;
        return (
          (c = qt(n)
            ? (g(
                t.serverCache.isFullyInitialized(),
                "If change path is empty, we must have complete server data"
              ),
              t.serverCache.isFiltered()
                ? ((s = mi(r, (s = Zr(t)) instanceof qn ? s : qn.EMPTY_NODE)),
                  e.filter.updateFullNode(t.eventCache.getNode(), s, o))
                : ((u = gi(r, Zr(t))),
                  e.filter.updateFullNode(t.eventCache.getNode(), u, o)))
            : ".priority" === (u = kt(n))
            ? (g(
                1 === Ot(n),
                "Can't have a priority with additional path components"
              ),
              null !=
              (h = wi(r, n, (l = a.getNode()), (d = t.serverCache.getNode())))
                ? e.filter.updatePriority(l, h)
                : a.getNode())
            : ((l = Dt(n)),
              (h = void 0),
              null !=
              (h = a.isCompleteForChild(u)
                ? ((d = t.serverCache.getNode()),
                  null != (d = wi(r, n, a.getNode(), d))
                    ? a.getNode().getImmediateChild(u).updateChild(l, d)
                    : a.getNode().getImmediateChild(u))
                : Ei(r, u, t.serverCache))
                ? e.filter.updateChild(a.getNode(), u, h, l, i, o)
                : a.getNode())),
          $r(t, c, a.isFullyInitialized() || qt(n), e.filter.filtersNodes())
        );
      }
      function Ai(e, t, n, r, i, o, a, s) {
        var u = t.serverCache,
          l = a ? e.filter : e.filter.getIndexedFilter();
        if (qt(n)) c = l.updateFullNode(u.getNode(), r, null);
        else if (l.filtersNodes() && !u.isFiltered())
          var h = u.getNode().updateChild(n, r),
            c = l.updateFullNode(u.getNode(), h, null);
        else {
          a = kt(n);
          if (!u.isCompleteForPath(n) && 1 < Ot(n)) return t;
          (h = Dt(n)), (r = u.getNode().getImmediateChild(a).updateChild(h, r));
          c =
            ".priority" === a
              ? l.updatePriority(u.getNode(), r)
              : l.updateChild(u.getNode(), a, r, h, xi, null);
        }
        l = Jr(t, c, u.isFullyInitialized() || qt(n), l.filtersNodes());
        return Di(e, l, n, i, new Ri(i, l, o), s);
      }
      function Li(e, t, n, r, i, o, a) {
        var s,
          u,
          l = t.eventCache,
          h = new Ri(i, t, o);
        return qt(n)
          ? ((u = e.filter.updateFullNode(t.eventCache.getNode(), r, a)),
            $r(t, u, !0, e.filter.filtersNodes()))
          : ".priority" === (s = kt(n))
          ? ((u = e.filter.updatePriority(t.eventCache.getNode(), r)),
            $r(t, u, l.isFullyInitialized(), l.isFiltered()))
          : ((i = Dt(n)),
            (o = l.getNode().getImmediateChild(s)),
            (u = void 0),
            (u = qt(i)
              ? r
              : null != (n = h.getCompleteChild(s))
              ? ".priority" === At(i) && n.getChild(Mt(i)).isEmpty()
                ? n
                : n.updateChild(i, r)
              : qn.EMPTY_NODE),
            o.equals(u)
              ? t
              : $r(
                  t,
                  e.filter.updateChild(l.getNode(), s, u, i, h, a),
                  l.isFullyInitialized(),
                  e.filter.filtersNodes()
                ));
      }
      function Mi(e, t) {
        return e.eventCache.isCompleteForChild(t);
      }
      function Fi(e, n, t) {
        return (
          t.foreach(function (e, t) {
            n = n.updateChild(e, t);
          }),
          n
        );
      }
      function qi(r, i, e, t, o, a, s, u) {
        if (
          i.serverCache.getNode().isEmpty() &&
          !i.serverCache.isFullyInitialized()
        )
          return i;
        var l = i,
          t = qt(e) ? t : new ei(null).setTree(e, t),
          h = i.serverCache.getNode();
        return (
          t.children.inorderTraversal(function (e, t) {
            h.hasChild(e) &&
              ((t = Fi(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = Ai(r, l, new Nt(e), t, o, a, s, u)));
          }),
          t.children.inorderTraversal(function (e, t) {
            var n = !i.serverCache.isCompleteForChild(e) && void 0 === t.value;
            h.hasChild(e) ||
              n ||
              ((t = Fi(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = Ai(r, l, new Nt(e), t, o, a, s, u)));
          }),
          l
        );
      }
      var Wi,
        ji =
          (Object.defineProperty(Ui.prototype, "query", {
            get: function () {
              return this.query_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Ui);
      function Ui(e, t) {
        (this.query_ = e), (this.eventRegistrations_ = []);
        var n = this.query_._queryParams,
          r = new ar(n.getIndex()),
          i = (o = n).loadsAllData()
            ? new ar(o.getIndex())
            : new (o.hasLimit() ? hr : ur)(o);
        this.processor_ = { filter: i };
        var e = t.serverCache,
          n = t.eventCache,
          o = r.updateFullNode(qn.EMPTY_NODE, e.getNode(), null),
          t = i.updateFullNode(qn.EMPTY_NODE, n.getNode(), null),
          r = new Hr(o, e.isFullyInitialized(), r.filtersNodes()),
          i = new Hr(t, n.isFullyInitialized(), i.filtersNodes());
        (this.viewCache_ = Gr(i, r)),
          (this.eventGenerator_ = new Qr(this.query_));
      }
      function Bi(e) {
        return 0 === e.eventRegistrations_.length;
      }
      function Hi(e, t, n) {
        var r,
          i = [];
        if (
          (n &&
            (g(null == t, "A cancel should cancel all event registrations."),
            (r = e.query._path),
            e.eventRegistrations_.forEach(function (e) {
              e = e.createCancelEvent(n, r);
              e && i.push(e);
            })),
          t)
        ) {
          for (var o = [], a = 0; a < e.eventRegistrations_.length; ++a) {
            var s = e.eventRegistrations_[a];
            if (s.matches(t)) {
              if (t.hasAnyCallback()) {
                o = o.concat(e.eventRegistrations_.slice(a + 1));
                break;
              }
            } else o.push(s);
          }
          e.eventRegistrations_ = o;
        } else e.eventRegistrations_ = [];
        return i;
      }
      function Vi(e, t, n, r) {
        t.type === xr.MERGE &&
          null !== t.source.queryId &&
          (g(
            Zr(e.viewCache_),
            "We should always have a full cache before handling merges"
          ),
          g(
            Xr(e.viewCache_),
            "Missing event cache, even though we have a server cache"
          ));
        var i = e.viewCache_,
          t = Oi(e.processor_, i, t, n, r);
        return (
          (n = e.processor_),
          (r = t.viewCache),
          g(
            r.eventCache.getNode().isIndexed(n.filter.getIndex()),
            "Event snap not indexed"
          ),
          g(
            r.serverCache.getNode().isIndexed(n.filter.getIndex()),
            "Server snap not indexed"
          ),
          g(
            t.viewCache.serverCache.isFullyInitialized() ||
              !i.serverCache.isFullyInitialized(),
            "Once a server snap is complete, it should never go back"
          ),
          (e.viewCache_ = t.viewCache),
          zi(e, t.changes, t.viewCache.eventCache.getNode(), null)
        );
      }
      function zi(e, t, n, r) {
        r = r ? [r] : e.eventRegistrations_;
        return Yr(e.eventGenerator_, t, n, r);
      }
      var Qi,
        Yi = function () {
          this.views = new Map();
        };
      function Ki(e, t, n, r) {
        var i,
          o,
          a = t.source.queryId;
        if (null !== a) {
          var s = e.views.get(a);
          return (
            g(null != s, "SyncTree gave us an op for an invalid query."),
            Vi(s, t, n, r)
          );
        }
        var u = [];
        try {
          for (var l = _(e.views.values()), h = l.next(); !h.done; h = l.next())
            (s = h.value), (u = u.concat(Vi(s, t, n, r)));
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            h && !h.done && (o = l.return) && o.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        return u;
      }
      function Gi(e, t, n, r, i) {
        var o = t._queryIdentifier,
          e = e.views.get(o);
        if (e) return e;
        (o = gi(n, i ? r : null)),
          (e = !1),
          (e = !!o || ((o = r instanceof qn ? mi(n, r) : qn.EMPTY_NODE), !1)),
          (i = Gr(new Hr(o, e, !1), new Hr(r, i, !1)));
        return new ji(t, i);
      }
      function $i(e, t, n, r, i, o) {
        var a,
          o = Gi(e, t, r, i, o);
        return (
          e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o),
          (t = n),
          o.eventRegistrations_.push(t),
          (t = n),
          (o = (n = o).viewCache_.eventCache),
          (a = []),
          o.getNode().isLeafNode() ||
            o.getNode().forEachChild(Pn, function (e, t) {
              a.push(rr(e, t));
            }),
          o.isFullyInitialized() && a.push(nr(o.getNode())),
          zi(n, a, o.getNode(), t)
        );
      }
      function Ji(e, t, n, r) {
        var i,
          o,
          a = t._queryIdentifier,
          s = [],
          u = [],
          l = no(e);
        if ("default" === a)
          try {
            for (
              var h = _(e.views.entries()), c = h.next();
              !c.done;
              c = h.next()
            ) {
              var d = y(c.value, 2),
                p = d[0],
                f = d[1],
                u = u.concat(Hi(f, n, r));
              Bi(f) &&
                (e.views.delete(p),
                f.query._queryParams.loadsAllData() || s.push(f.query));
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              c && !c.done && (o = h.return) && o.call(h);
            } finally {
              if (i) throw i.error;
            }
          }
        else
          (f = e.views.get(a)) &&
            ((u = u.concat(Hi(f, n, r))),
            Bi(f) &&
              (e.views.delete(a),
              f.query._queryParams.loadsAllData() || s.push(f.query)));
        return (
          l &&
            !no(e) &&
            s.push(
              (g(Wi, "Reference.ts has not been loaded"),
              new Wi(t._repo, t._path))
            ),
          { removed: s, events: u }
        );
      }
      function Xi(e) {
        var t,
          n,
          r = [];
        try {
          for (
            var i = _(e.views.values()), o = i.next();
            !o.done;
            o = i.next()
          ) {
            var a = o.value;
            a.query._queryParams.loadsAllData() || r.push(a);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }
      function Zi(e, t) {
        var n,
          r,
          i,
          o,
          a = null;
        try {
          for (var s = _(e.views.values()), u = s.next(); !u.done; u = s.next())
            var l = u.value,
              a =
                a ||
                ((i = t),
                (o = void 0),
                (o = Zr((l = l).viewCache_)) &&
                (l.query._queryParams.loadsAllData() ||
                  (!qt(i) && !o.getImmediateChild(kt(i)).isEmpty()))
                  ? o.getChild(i)
                  : null);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      }
      function eo(e, t) {
        if (t._queryParams.loadsAllData()) return ro(e);
        t = t._queryIdentifier;
        return e.views.get(t);
      }
      function to(e, t) {
        return null != eo(e, t);
      }
      function no(e) {
        return null != ro(e);
      }
      function ro(e) {
        var t, n;
        try {
          for (
            var r = _(e.views.values()), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = i.value;
            if (o.query._queryParams.loadsAllData()) return o;
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return null;
      }
      var io = 1,
        oo = function (e) {
          (this.listenProvider_ = e),
            (this.syncPointTree_ = new ei(null)),
            (this.pendingWriteTree_ = {
              visibleWrites: ni.empty(),
              allWrites: [],
              lastWriteId: -1,
            }),
            (this.tagToQueryMap = new Map()),
            (this.queryToTagMap = new Map());
        };
      function ao(e, t, n, r, i) {
        var o, a, s, u;
        return (
          (o = e.pendingWriteTree_),
          (a = t),
          (s = n),
          (u = i),
          g(
            (r = r) > o.lastWriteId,
            "Stacking an older write on top of newer ones"
          ),
          void 0 === u && (u = !0),
          o.allWrites.push({ path: a, snap: s, writeId: r, visible: u }),
          u && (o.visibleWrites = ii(o.visibleWrites, a, s)),
          (o.lastWriteId = r),
          i ? _o(e, new Wr(Or(), t, n)) : []
        );
      }
      function so(e, t, n, r) {
        var i, o, a;
        (i = e.pendingWriteTree_),
          (o = t),
          (a = n),
          g(
            (r = r) > i.lastWriteId,
            "Stacking an older merge on top of newer ones"
          ),
          i.allWrites.push({ path: o, children: a, writeId: r, visible: !0 }),
          (i.visibleWrites = oi(i.visibleWrites, o, a)),
          (i.lastWriteId = r);
        n = ei.fromObject(n);
        return _o(e, new Ur(Or(), t, n));
      }
      function uo(e, t, n) {
        void 0 === n && (n = !1);
        var r = (function (e, t) {
          for (var n = 0; n < e.allWrites.length; n++) {
            var r = e.allWrites[n];
            if (r.writeId === t) return r;
          }
          return null;
        })(e.pendingWriteTree_, t);
        if (fi(e.pendingWriteTree_, t)) {
          var i = new ei(null);
          return (
            null != r.snap
              ? (i = i.set(Rt(), !0))
              : De(r.children, function (e) {
                  i = i.set(new Nt(e), !0);
                }),
            _o(e, new Lr(r.path, i, n))
          );
        }
        return [];
      }
      function lo(e, t, n) {
        return _o(e, new Wr(Dr(), t, n));
      }
      function ho(n, e, t, r) {
        var i = e._path,
          o = n.syncPointTree_.get(i),
          a = [];
        if (o && ("default" === e._queryIdentifier || to(o, e))) {
          var s = Ji(o, e, t, r);
          0 === o.views.size && (n.syncPointTree_ = n.syncPointTree_.remove(i));
          (t = s.removed),
            (a = s.events),
            (o =
              -1 !==
              t.findIndex(function (e) {
                return e._queryParams.loadsAllData();
              })),
            (s = n.syncPointTree_.findOnPath(i, function (e, t) {
              return no(t);
            }));
          if (o && !s) {
            i = n.syncPointTree_.subtree(i);
            if (!i.isEmpty())
              for (
                var u = i.fold(function (e, t, n) {
                    if (t && no(t)) return [ro(t)];
                    var r = [];
                    return (
                      t && (r = Xi(t)),
                      De(n, function (e, t) {
                        r = r.concat(t);
                      }),
                      r
                    );
                  }),
                  l = 0;
                l < u.length;
                ++l
              ) {
                var h = u[l],
                  c = h.query,
                  h = vo(n, h);
                n.listenProvider_.startListening(
                  Eo(c),
                  go(n, c),
                  h.hashFn,
                  h.onComplete
                );
              }
          }
          !s &&
            0 < t.length &&
            !r &&
            (o
              ? n.listenProvider_.stopListening(Eo(e), null)
              : t.forEach(function (e) {
                  var t = n.queryToTagMap.get(mo(e));
                  n.listenProvider_.stopListening(Eo(e), t);
                })),
            (function (e, t) {
              for (var n = 0; n < t.length; ++n) {
                var r,
                  i = t[n];
                i._queryParams.loadsAllData() ||
                  ((r = mo(i)),
                  (i = e.queryToTagMap.get(r)),
                  e.queryToTagMap.delete(r),
                  e.tagToQueryMap.delete(i));
              }
            })(n, t);
        }
        return a;
      }
      function co(e, t, n) {
        var r = t._path,
          i = null,
          o = !1;
        e.syncPointTree_.foreachOnPath(r, function (e, t) {
          e = Wt(e, r);
          (i = i || Zi(t, e)), (o = o || no(t));
        });
        var a = e.syncPointTree_.get(r);
        a
          ? ((o = o || no(a)), (i = i || Zi(a, Rt())))
          : ((a = new Yi()), (e.syncPointTree_ = e.syncPointTree_.set(r, a))),
          null != i
            ? (h = !0)
            : ((h = !1),
              (i = qn.EMPTY_NODE),
              e.syncPointTree_.subtree(r).foreachChild(function (e, t) {
                t = Zi(t, Rt());
                t && (i = i.updateImmediateChild(e, t));
              }));
        var s,
          u,
          l = to(a, t);
        l ||
          t._queryParams.loadsAllData() ||
          ((s = mo(t)),
          g(!e.queryToTagMap.has(s), "View does not exist, but we have a tag"),
          (u = io++),
          e.queryToTagMap.set(s, u),
          e.tagToQueryMap.set(u, s));
        var h = $i(a, t, n, pi(e.pendingWriteTree_, r), i, h);
        return (
          l ||
            o ||
            ((a = eo(a, t)),
            (h = h.concat(
              (function (e, t, n) {
                var r = t._path,
                  i = go(e, t),
                  n = vo(e, n),
                  n = e.listenProvider_.startListening(
                    Eo(t),
                    i,
                    n.hashFn,
                    n.onComplete
                  ),
                  r = e.syncPointTree_.subtree(r);
                if (i)
                  g(
                    !no(r.value),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var o = r.fold(function (e, t, n) {
                        if (!qt(e) && t && no(t)) return [ro(t).query];
                        var r = [];
                        return (
                          t &&
                            (r = r.concat(
                              Xi(t).map(function (e) {
                                return e.query;
                              })
                            )),
                          De(n, function (e, t) {
                            r = r.concat(t);
                          }),
                          r
                        );
                      }),
                      a = 0;
                    a < o.length;
                    ++a
                  ) {
                    var s = o[a];
                    e.listenProvider_.stopListening(Eo(s), go(e, s));
                  }
                return n;
              })(e, t, a)
            ))),
          h
        );
      }
      function po(e, n, t) {
        var r = e.pendingWriteTree_,
          e = e.syncPointTree_.findOnPath(n, function (e, t) {
            e = Zi(t, Wt(e, n));
            if (e) return e;
          });
        return vi(r, n, e, t, !0);
      }
      function fo(e, t) {
        var n = t._path,
          r = null;
        e.syncPointTree_.foreachOnPath(n, function (e, t) {
          e = Wt(e, n);
          r = r || Zi(t, e);
        });
        var i = e.syncPointTree_.get(n);
        i
          ? (r = r || Zi(i, Rt()))
          : ((i = new Yi()), (e.syncPointTree_ = e.syncPointTree_.set(n, i)));
        var o = null != r,
          a = o ? new Hr(r, !0, !1) : null,
          o = Gi(
            i,
            t,
            pi(e.pendingWriteTree_, t._path),
            o ? a.getNode() : qn.EMPTY_NODE,
            o
          );
        return Xr(o.viewCache_);
      }
      function _o(e, t) {
        return (function e(t, n, r, i) {
          {
            if (qt(t.path)) return yo(t, n, r, i);
            var o = n.get(Rt());
            null == r && null != o && (r = Zi(o, Rt()));
            var a = [],
              s = kt(t.path),
              u = t.operationForChild(s),
              l = n.children.get(s);
            return (
              l &&
                u &&
                ((n = r ? r.getImmediateChild(s) : null),
                (s = Si(i, s)),
                (a = a.concat(e(u, l, n, s)))),
              (a = o ? a.concat(Ki(o, t, i, r)) : a)
            );
          }
        })(t, e.syncPointTree_, null, pi(e.pendingWriteTree_, Rt()));
      }
      function yo(i, e, o, a) {
        var t = e.get(Rt());
        null == o && null != t && (o = Zi(t, Rt()));
        var s = [];
        return (
          e.children.inorderTraversal(function (e, t) {
            var n = o ? o.getImmediateChild(e) : null,
              r = Si(a, e),
              e = i.operationForChild(e);
            e && (s = s.concat(yo(e, t, n, r)));
          }),
          (s = t ? s.concat(Ki(t, i, a, o)) : s)
        );
      }
      function vo(r, e) {
        var i = e.query,
          o = go(r, i);
        return {
          hashFn: function () {
            return (e.viewCache_.serverCache.getNode() || qn.EMPTY_NODE).hash();
          },
          onComplete: function (e) {
            if ("ok" === e)
              return o
                ? (function (e, t, n) {
                    var r = wo(e, n);
                    if (r) {
                      (n = Co(r)),
                        (r = n.path),
                        (n = n.queryId),
                        (t = Wt(r, t));
                      return bo(e, r, new Fr(Ar(n), t));
                    }
                    return [];
                  })(r, i._path, o)
                : ((t = r), (n = i._path), _o(t, new Fr(Dr(), n)));
            var t,
              n,
              n =
                ((n = "Unknown Error"),
                "too_big" === (e = e)
                  ? (n =
                      "The data requested exceeds the maximum size that can be accessed with a single request.")
                  : "permission_denied" === e
                  ? (n =
                      "Client doesn't have permission to access the desired data.")
                  : "unavailable" === e && (n = "The service is unavailable"),
                ((n = new Error(
                  e + " at " + i._path.toString() + ": " + n
                )).code = e.toUpperCase()),
                n);
            return ho(r, i, null, n);
          },
        };
      }
      function go(e, t) {
        t = mo(t);
        return e.queryToTagMap.get(t);
      }
      function mo(e) {
        return e._path.toString() + "$" + e._queryIdentifier;
      }
      function wo(e, t) {
        return e.tagToQueryMap.get(t);
      }
      function Co(e) {
        var t = e.indexOf("$");
        return (
          g(-1 !== t && t < e.length - 1, "Bad queryKey."),
          { queryId: e.substr(t + 1), path: new Nt(e.substr(0, t)) }
        );
      }
      function bo(e, t, n) {
        var r = e.syncPointTree_.get(t);
        return (
          g(r, "Missing sync point for query tag that we're tracking"),
          Ki(r, n, pi(e.pendingWriteTree_, t), null)
        );
      }
      function Eo(e) {
        return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
          ? (g(Qi, "Reference.ts has not been loaded"),
            new Qi(e._repo, e._path))
          : e;
      }
      var So =
        ((Io.prototype.getImmediateChild = function (e) {
          return new Io(this.node_.getImmediateChild(e));
        }),
        (Io.prototype.node = function () {
          return this.node_;
        }),
        Io);
      function Io(e) {
        this.node_ = e;
      }
      var To =
        ((Po.prototype.getImmediateChild = function (e) {
          e = Ft(this.path_, e);
          return new Po(this.syncTree_, e);
        }),
        (Po.prototype.node = function () {
          return po(this.syncTree_, this.path_);
        }),
        Po);
      function Po(e, t) {
        (this.syncTree_ = e), (this.path_ = t);
      }
      var No = function (e) {
          return (
            ((e = e || {}).timestamp = e.timestamp || new Date().getTime()), e
          );
        },
        xo = function (e, t, n) {
          return e && "object" == typeof e
            ? (g(".sv" in e, "Unexpected leaf node or priority contents"),
              "string" == typeof e[".sv"]
                ? Ro(e[".sv"], t, n)
                : "object" == typeof e[".sv"]
                ? ko(e[".sv"], t)
                : void g(
                    !1,
                    "Unexpected server value: " + JSON.stringify(e, null, 2)
                  ))
            : e;
        },
        Ro = function (e, t, n) {
          if ("timestamp" === e) return n.timestamp;
          g(!1, "Unexpected server value: " + e);
        },
        ko = function (e, t, n) {
          e.hasOwnProperty("increment") ||
            g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
          e = e.increment;
          "number" != typeof e && g(!1, "Unexpected increment value: " + e);
          t = t.node();
          if (
            (g(null != t, "Expected ChildrenNode.EMPTY_NODE for nulls"),
            !t.isLeafNode())
          )
            return e;
          t = t.getValue();
          return "number" != typeof t ? e : t + e;
        },
        Oo = function (e, t, n, r) {
          return Ao(t, new To(n, e), r);
        },
        Do = function (e, t, n) {
          return Ao(e, new So(t), n);
        };
      function Ao(e, r, i) {
        var t = e.getPriority().val(),
          n = xo(t, r.getImmediateChild(".priority"), i);
        if (e.isLeafNode()) {
          var o = e,
            t = xo(o.getValue(), r, i);
          return t !== o.getValue() || n !== o.getPriority().val()
            ? new Sn(t, Hn(n))
            : e;
        }
        var e = e,
          a = e;
        return (
          n !== e.getPriority().val() && (a = a.updatePriority(new Sn(n))),
          e.forEachChild(Pn, function (e, t) {
            var n = Ao(t, r.getImmediateChild(e), i);
            n !== t && (a = a.updateImmediateChild(e, n));
          }),
          a
        );
      }
      var Lo = function (e, t, n) {
        void 0 === e && (e = ""),
          void 0 === t && (t = null),
          void 0 === n && (n = { children: {}, childCount: 0 }),
          (this.name = e),
          (this.parent = t),
          (this.node = n);
      };
      function Mo(e, t) {
        for (
          var n = t instanceof Nt ? t : new Nt(t), r = e, i = kt(n);
          null !== i;

        )
          var o = D(r.node.children, i) || { children: {}, childCount: 0 },
            r = new Lo(i, r, o),
            i = kt((n = Dt(n)));
        return r;
      }
      function Fo(e) {
        return e.node.value;
      }
      function qo(e, t) {
        (e.node.value = t), Bo(e);
      }
      function Wo(e) {
        return 0 < e.node.childCount;
      }
      function jo(n, r) {
        De(n.node.children, function (e, t) {
          r(new Lo(e, n, t));
        });
      }
      function Uo(e) {
        return new Nt(null === e.parent ? e.name : Uo(e.parent) + "/" + e.name);
      }
      function Bo(e) {
        var t, n, r, i;
        null !== e.parent &&
          ((t = e.parent),
          (n = e.name),
          (i = (function (e) {
            return void 0 === Fo(e) && !Wo(e);
          })((r = e))),
          (e = O(t.node.children, n)),
          i && e
            ? (delete t.node.children[n], t.node.childCount--, Bo(t))
            : i ||
              e ||
              ((t.node.children[n] = r.node), t.node.childCount++, Bo(t)));
      }
      function Ho(e) {
        return "string" == typeof e && 0 !== e.length && !Ko.test(e);
      }
      function Vo(e) {
        return "string" == typeof e && 0 !== e.length && !Go.test(e);
      }
      function zo(e, t, n, r) {
        if (!r || void 0 !== t) {
          var i = j(e, "values");
          if (!t || "object" != typeof t || Array.isArray(t))
            throw new Error(
              i + " must be an object containing the children to replace."
            );
          var o = [];
          De(t, function (e, t) {
            e = new Nt(e);
            if ((Zo(i, t, Ft(n, e)), ".priority" === At(e) && !Jo(t)))
              throw new Error(
                i +
                  "contains an invalid value for '" +
                  e.toString() +
                  "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
              );
            o.push(e);
          }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++)
                for (var r, i = Lt((r = t[n])), o = 0; o < i.length; o++)
                  if ((".priority" !== i[o] || o !== i.length - 1) && !Ho(i[o]))
                    throw new Error(
                      e +
                        "contains an invalid key (" +
                        i[o] +
                        ") in path " +
                        r.toString() +
                        '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
              t.sort(jt);
              var a = null;
              for (n = 0; n < t.length; n++) {
                if (((r = t[n]), null !== a && Bt(a, r)))
                  throw new Error(
                    e +
                      "contains a path " +
                      a.toString() +
                      " that is ancestor of another path " +
                      r.toString()
                  );
                a = r;
              }
            })(i, o);
        }
      }
      function Qo(e, t, n) {
        if (!n || void 0 !== t) {
          if (ce(t))
            throw new Error(
              j(e, "priority") +
                "is " +
                t.toString() +
                ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
          if (!Jo(t))
            throw new Error(
              j(e, "priority") +
                "must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
        }
      }
      function Yo(e, t, n, r) {
        if (!((r && void 0 === n) || Ho(n)))
          throw new Error(
            j(e, t) +
              'was an invalid key = "' +
              n +
              '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
          );
      }
      var Ko = /[\[\].#$\/\u0000-\u001F\u007F]/,
        Go = /[\[\].#$\u0000-\u001F\u007F]/,
        $o = 10485760,
        Jo = function (e) {
          return (
            null === e ||
            "string" == typeof e ||
            ("number" == typeof e && !ce(e)) ||
            (e && "object" == typeof e && O(e, ".sv"))
          );
        },
        Xo = function (e, t, n, r) {
          (r && void 0 === t) || Zo(j(e, "value"), t, n);
        },
        Zo = function (r, e, t) {
          var i = t instanceof Nt ? new Ht(t, r) : t;
          if (void 0 === e) throw new Error(r + "contains undefined " + zt(i));
          if ("function" == typeof e)
            throw new Error(
              r +
                "contains a function " +
                zt(i) +
                " with contents = " +
                e.toString()
            );
          if (ce(e))
            throw new Error(r + "contains " + e.toString() + " " + zt(i));
          if ("string" == typeof e && e.length > $o / 3 && H(e) > $o)
            throw new Error(
              r +
                "contains a string greater than " +
                $o +
                " utf8 bytes " +
                zt(i) +
                " ('" +
                e.substring(0, 50) +
                "...')"
            );
          if (e && "object" == typeof e) {
            var o = !1,
              a = !1;
            if (
              (De(e, function (e, t) {
                if (".value" === e) o = !0;
                else if (".priority" !== e && ".sv" !== e && ((a = !0), !Ho(e)))
                  throw new Error(
                    r +
                      " contains an invalid key (" +
                      e +
                      ") " +
                      zt(i) +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
                var n;
                (n = e),
                  0 < (e = i).parts_.length && (e.byteLength_ += 1),
                  e.parts_.push(n),
                  (e.byteLength_ += H(n)),
                  Vt(e),
                  Zo(r, t, i),
                  (t = (e = i).parts_.pop()),
                  (e.byteLength_ -= H(t)),
                  0 < e.parts_.length && --e.byteLength_;
              }),
              o && a)
            )
              throw new Error(
                r +
                  ' contains ".value" child ' +
                  zt(i) +
                  " in addition to actual children."
              );
          }
        },
        ea = function (e, t, n, r) {
          if (!((r && void 0 === n) || Vo(n)))
            throw new Error(
              j(e, t) +
                'was an invalid path = "' +
                n +
                '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
            );
        },
        ta = function (e, t, n, r) {
          (n = n && n.replace(/^\/*\.info(\/|$)/, "/")), ea(e, t, n, r);
        },
        na = function (e, t) {
          if (".info" === kt(t))
            throw new Error(e + " failed = Can't modify data under /.info/");
        },
        ra = function (e, t) {
          var n = t.path.toString();
          if (
            "string" != typeof t.repoInfo.host ||
            0 === t.repoInfo.host.length ||
            (!Ho(t.repoInfo.namespace) &&
              "localhost" !== t.repoInfo.host.split(":")[0]) ||
            (0 !== n.length &&
              ((n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/")), !Vo(n)))
          )
            throw new Error(
              j(e, "url") +
                'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
            );
        },
        ia = function () {
          (this.eventLists_ = []), (this.recursionDepth_ = 0);
        };
      function oa(e, t) {
        for (var n = null, r = 0; r < t.length; r++) {
          var i = t[r],
            o = i.getPath();
          null === n || Ut(o, n.path) || (e.eventLists_.push(n), (n = null)),
            (n = null === n ? { events: [], path: o } : n).events.push(i);
        }
        n && e.eventLists_.push(n);
      }
      function aa(e, t, n) {
        oa(e, n),
          ua(e, function (e) {
            return Ut(e, t);
          });
      }
      function sa(e, t, n) {
        oa(e, n),
          ua(e, function (e) {
            return Bt(e, t) || Bt(t, e);
          });
      }
      function ua(e, t) {
        e.recursionDepth_++;
        for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
          var i = e.eventLists_[r];
          i &&
            (t(i.path)
              ? ((function (e) {
                  for (var t = 0; t < e.events.length; t++) {
                    var n,
                      r = e.events[t];
                    null !== r &&
                      ((e.events[t] = null),
                      (n = r.getEventRunner()),
                      be && Ie("event: " + r.toString()),
                      je(n));
                  }
                })(e.eventLists_[r]),
                (e.eventLists_[r] = null))
              : (n = !1));
        }
        n && (e.eventLists_ = []), e.recursionDepth_--;
      }
      var la = "repo_interrupt",
        ha = 25,
        ca =
          ((da.prototype.toString = function () {
            return (
              (this.repoInfo_.secure ? "https://" : "http://") +
              this.repoInfo_.host
            );
          }),
          da);
      function da(e, t, n) {
        (this.repoInfo_ = e),
          (this.forceRestClient_ = t),
          (this.authTokenProvider_ = n),
          (this.dataUpdateCount = 0),
          (this.statsListener_ = null),
          (this.eventQueue_ = new ia()),
          (this.nextWriteId_ = 1),
          (this.interceptServerDataCallback_ = null),
          (this.onDisconnect_ = Sr()),
          (this.transactionQueueTree_ = new Lo()),
          (this.persistentConnection_ = null),
          (this.key = this.repoInfo_.toURLString());
      }
      function pa(a, e, t) {
        if (
          ((a.stats_ = tt(a.repoInfo_)),
          a.forceRestClient_ ||
            0 <=
              (
                ("object" == typeof window &&
                  window.navigator &&
                  window.navigator.userAgent) ||
                ""
              ).search(
                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
              ))
        )
          (a.server_ = new wr(
            a.repoInfo_,
            function (e, t, n, r) {
              ya(a, e, t, n, r);
            },
            a.authTokenProvider_
          )),
            setTimeout(function () {
              return va(a, !0);
            }, 0);
        else {
          if (null != t) {
            if ("object" != typeof t)
              throw new Error(
                "Only objects are supported for option databaseAuthVariableOverride"
              );
            try {
              R(t);
            } catch (e) {
              throw new Error("Invalid authOverride provided: " + e);
            }
          }
          (a.persistentConnection_ = new Xt(
            a.repoInfo_,
            e,
            function (e, t, n, r) {
              ya(a, e, t, n, r);
            },
            function (e) {
              va(a, e);
            },
            function (e) {
              var n;
              (n = a),
                De(e, function (e, t) {
                  ga(n, e, t);
                });
            },
            a.authTokenProvider_,
            t
          )),
            (a.server_ = a.persistentConnection_);
        }
        var n;
        a.authTokenProvider_.addTokenChangeListener(function (e) {
          a.server_.refreshAuthToken(e);
        }),
          (a.statsReporter_ =
            ((n = a.repoInfo_),
            (e = function () {
              return new Rr(a.stats_, a.server_);
            }),
            (n = n.toString()),
            et[n] || (et[n] = e()),
            et[n])),
          (a.infoData_ = new br()),
          (a.infoSyncTree_ = new oo({
            startListening: function (e, t, n, r) {
              var i = [],
                o = a.infoData_.getNode(e._path);
              return (
                o.isEmpty() ||
                  ((i = lo(a.infoSyncTree_, e._path, o)),
                  setTimeout(function () {
                    r("ok");
                  }, 0)),
                i
              );
            },
            stopListening: function () {},
          })),
          ga(a, "connected", !1),
          (a.serverSyncTree_ = new oo({
            startListening: function (n, e, t, r) {
              return (
                a.server_.listen(n, t, e, function (e, t) {
                  t = r(e, t);
                  sa(a.eventQueue_, n._path, t);
                }),
                []
              );
            },
            stopListening: function (e, t) {
              a.server_.unlisten(e, t);
            },
          }));
      }
      function fa(e) {
        e = e.infoData_.getNode(new Nt(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + e;
      }
      function _a(e) {
        return No({ timestamp: fa(e) });
      }
      function ya(e, t, n, r, i) {
        e.dataUpdateCount++;
        var o = new Nt(t);
        n = e.interceptServerDataCallback_
          ? e.interceptServerDataCallback_(t, n)
          : n;
        var a,
          s,
          u,
          l = [],
          h = o;
        0 <
          (l = i
            ? r
              ? ((a = L(n, function (e) {
                  return Hn(e);
                })),
                (function (e, t, n, r) {
                  var i = wo(e, r);
                  if (i) {
                    (r = Co(i)),
                      (i = r.path),
                      (r = r.queryId),
                      (t = Wt(i, t)),
                      (n = ei.fromObject(n));
                    return bo(e, i, new Ur(Ar(r), t, n));
                  }
                  return [];
                })(e.serverSyncTree_, o, a, i))
              : ((t = Hn(n)),
                (a = e.serverSyncTree_),
                (s = o),
                (u = t),
                null == (i = wo(a, (t = i)))
                  ? []
                  : ((t = Co(i)),
                    (i = t.path),
                    (t = t.queryId),
                    (s = Wt(i, s)),
                    bo(a, i, new Wr(Ar(t), s, u))))
            : r
            ? ((s = L(n, function (e) {
                return Hn(e);
              })),
              (u = e.serverSyncTree_),
              (r = o),
              (s = s),
              (s = ei.fromObject(s)),
              _o(u, new Ur(Dr(), r, s)))
            : ((n = Hn(n)), lo(e.serverSyncTree_, o, n))).length &&
          (h = xa(e, o)),
          sa(e.eventQueue_, h, l);
      }
      function va(e, t) {
        ga(e, "connected", t),
          !1 === t &&
            (function (n) {
              Ia(n, "onDisconnectEvents");
              var r = _a(n),
                i = Sr();
              Tr(n.onDisconnect_, Rt(), function (e, t) {
                t = Oo(e, t, n.serverSyncTree_, r);
                Ir(i, e, t);
              });
              var o = [];
              Tr(i, Rt(), function (e, t) {
                o = o.concat(lo(n.serverSyncTree_, e, t));
                e = Da(n, e);
                xa(n, e);
              }),
                (n.onDisconnect_ = Sr()),
                sa(n.eventQueue_, Rt(), o);
            })(e);
      }
      function ga(e, t, n) {
        (t = new Nt("/.info/" + t)), (n = Hn(n));
        e.infoData_.updateSnapshot(t, n);
        n = lo(e.infoSyncTree_, t, n);
        sa(e.eventQueue_, t, n);
      }
      function ma(e) {
        return e.nextWriteId_++;
      }
      function wa(r, i, e, t, o) {
        Ia(r, "set", { path: i.toString(), value: e, priority: t });
        var n = _a(r),
          e = Hn(e, t),
          t = po(r.serverSyncTree_, i),
          n = Do(e, t, n),
          a = ma(r),
          n = ao(r.serverSyncTree_, i, n, a, !0);
        oa(r.eventQueue_, n),
          r.server_.put(i.toString(), e.val(!0), function (e, t) {
            var n = "ok" === e;
            n || Ne("set at " + i + " failed: " + e);
            n = uo(r.serverSyncTree_, a, !n);
            sa(r.eventQueue_, i, n), Ta(0, o, e, t);
          });
        e = Da(r, i);
        xa(r, e), sa(r.eventQueue_, e, []);
      }
      function Ca(n, r, i) {
        n.server_.onDisconnectCancel(r.toString(), function (e, t) {
          "ok" === e &&
            !(function e(n, t) {
              if (qt(t)) return (n.value = null), n.children.clear(), !0;
              if (null !== n.value) {
                if (n.value.isLeafNode()) return !1;
                var r = n.value;
                return (
                  (n.value = null),
                  r.forEachChild(Pn, function (e, t) {
                    Ir(n, new Nt(e), t);
                  }),
                  e(n, t)
                );
              }
              if (0 < n.children.size)
                return (
                  (r = kt(t)),
                  (t = Dt(t)),
                  n.children.has(r) &&
                    e(n.children.get(r), t) &&
                    n.children.delete(r),
                  0 === n.children.size
                );
              return !0;
            })(n.onDisconnect_, r),
            Ta(0, i, e, t);
        });
      }
      function ba(n, r, e, i) {
        var o = Hn(e);
        n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
          "ok" === e && Ir(n.onDisconnect_, r, o), Ta(0, i, e, t);
        });
      }
      function Ea(e, t, n) {
        n =
          ".info" === kt(t._path)
            ? ho(e.infoSyncTree_, t, n)
            : ho(e.serverSyncTree_, t, n);
        aa(e.eventQueue_, t._path, n);
      }
      function Sa(e) {
        e.persistentConnection_ && e.persistentConnection_.interrupt(la);
      }
      function Ia(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = "";
        e.persistentConnection_ && (r = e.persistentConnection_.id + ":"),
          Ie.apply(void 0, a([r], y(t)));
      }
      function Ta(e, n, r, i) {
        n &&
          je(function () {
            var e, t;
            "ok" === r
              ? n(null)
              : ((t = e = (r || "error").toUpperCase()),
                i && (t += ": " + i),
                ((t = new Error(t)).code = e),
                n(t));
          });
      }
      function Pa(e, t, n) {
        return po(e.serverSyncTree_, t, n) || qn.EMPTY_NODE;
      }
      function Na(t, e) {
        var n;
        (e = void 0 === e ? t.transactionQueueTree_ : e) || Oa(t, e),
          Fo(e)
            ? ((n = ka(t, e)),
              g(0 < n.length, "Sending zero length transaction queue"),
              n.every(function (e) {
                return 0 === e.status;
              }) &&
                (function (i, o, a) {
                  for (
                    var e = a.map(function (e) {
                        return e.currentWriteId;
                      }),
                      t = Pa(i, o, e),
                      n = t,
                      e = t.hash(),
                      r = 0;
                    r < a.length;
                    r++
                  ) {
                    var s = a[r];
                    g(
                      0 === s.status,
                      "tryToSendTransactionQueue_: items in queue should all be run."
                    ),
                      (s.status = 1),
                      s.retryCount++;
                    var u = Wt(o, s.path);
                    n = n.updateChild(u, s.currentOutputSnapshotRaw);
                  }
                  var t = n.val(!0),
                    l = o;
                  i.server_.put(
                    l.toString(),
                    t,
                    function (e) {
                      Ia(i, "transaction put response", {
                        path: l.toString(),
                        status: e,
                      });
                      var t = [];
                      if ("ok" === e) {
                        for (var n = [], r = 0; r < a.length; r++)
                          !(function (e) {
                            (a[e].status = 2),
                              (t = t.concat(
                                uo(i.serverSyncTree_, a[e].currentWriteId)
                              )),
                              a[e].onComplete &&
                                n.push(function () {
                                  return a[e].onComplete(
                                    null,
                                    !0,
                                    a[e].currentOutputSnapshotResolved
                                  );
                                }),
                              a[e].unwatcher();
                          })(r);
                        Oa(i, Mo(i.transactionQueueTree_, o)),
                          Na(i, i.transactionQueueTree_),
                          sa(i.eventQueue_, o, t);
                        for (r = 0; r < n.length; r++) je(n[r]);
                      } else {
                        if ("datastale" === e)
                          for (r = 0; r < a.length; r++)
                            3 === a[r].status
                              ? (a[r].status = 4)
                              : (a[r].status = 0);
                        else {
                          Ne(
                            "transaction at " + l.toString() + " failed: " + e
                          );
                          for (r = 0; r < a.length; r++)
                            (a[r].status = 4), (a[r].abortReason = e);
                        }
                        xa(i, o);
                      }
                    },
                    e
                  );
                })(t, Uo(e), n))
            : Wo(e) &&
              jo(e, function (e) {
                Na(t, e);
              });
      }
      function xa(e, t) {
        var n = Ra(e, t),
          t = Uo(n);
        return (
          (function (u, l, h) {
            if (0 === l.length) return;
            for (
              var c = [],
                d = [],
                p = l
                  .filter(function (e) {
                    return 0 === e.status;
                  })
                  .map(function (e) {
                    return e.currentWriteId;
                  }),
                e = 0;
              e < l.length;
              e++
            )
              !(function (e) {
                var t,
                  n,
                  r,
                  i,
                  o = l[e],
                  a = Wt(h, o.path),
                  s = !1;
                g(
                  null !== a,
                  "rerunTransactionsUnderNode_: relativePath should not be null."
                ),
                  4 === o.status
                    ? ((s = !0),
                      (t = o.abortReason),
                      (d = d.concat(
                        uo(u.serverSyncTree_, o.currentWriteId, !0)
                      )))
                    : 0 === o.status &&
                      (d =
                        o.retryCount >= ha
                          ? ((s = !0),
                            (t = "maxretry"),
                            d.concat(
                              uo(u.serverSyncTree_, o.currentWriteId, !0)
                            ))
                          : ((n = Pa(u, o.path, p)),
                            (o.currentInputSnapshot = n),
                            void 0 !== (i = l[e].update(n.val()))
                              ? (Zo(
                                  "transaction failed: Data returned ",
                                  i,
                                  o.path
                                ),
                                (r = Hn(i)),
                                ("object" == typeof i &&
                                  null != i &&
                                  O(i, ".priority")) ||
                                  (r = r.updatePriority(n.getPriority())),
                                (a = o.currentWriteId),
                                (i = _a(u)),
                                (i = Do(r, n, i)),
                                (o.currentOutputSnapshotRaw = r),
                                (o.currentOutputSnapshotResolved = i),
                                (o.currentWriteId = ma(u)),
                                p.splice(p.indexOf(a), 1),
                                (d = d.concat(
                                  ao(
                                    u.serverSyncTree_,
                                    o.path,
                                    i,
                                    o.currentWriteId,
                                    o.applyLocally
                                  )
                                )).concat(uo(u.serverSyncTree_, a, !0)))
                              : ((s = !0),
                                (t = "nodata"),
                                d.concat(
                                  uo(u.serverSyncTree_, o.currentWriteId, !0)
                                )))),
                  sa(u.eventQueue_, h, d),
                  (d = []),
                  s &&
                    ((l[e].status = 2),
                    (s = l[e].unwatcher),
                    setTimeout(s, Math.floor(0)),
                    l[e].onComplete &&
                      ("nodata" === t
                        ? c.push(function () {
                            return l[e].onComplete(
                              null,
                              !1,
                              l[e].currentInputSnapshot
                            );
                          })
                        : c.push(function () {
                            return l[e].onComplete(new Error(t), !1, null);
                          })));
              })(e);
            Oa(u, u.transactionQueueTree_);
            for (e = 0; e < c.length; e++) je(c[e]);
            Na(u, u.transactionQueueTree_);
          })(e, ka(e, n), t),
          t
        );
      }
      function Ra(e, t) {
        for (
          var n = e.transactionQueueTree_, r = kt(t);
          null !== r && void 0 === Fo(n);

        )
          (n = Mo(n, r)), (r = kt((t = Dt(t))));
        return n;
      }
      function ka(e, t) {
        var n = [];
        return (
          (function t(n, e, r) {
            var i = Fo(e);
            if (i) for (var o = 0; o < i.length; o++) r.push(i[o]);
            jo(e, function (e) {
              t(n, e, r);
            });
          })(e, t, n),
          n.sort(function (e, t) {
            return e.order - t.order;
          }),
          n
        );
      }
      function Oa(t, e) {
        var n = Fo(e);
        if (n) {
          for (var r = 0, i = 0; i < n.length; i++)
            2 !== n[i].status && ((n[r] = n[i]), r++);
          (n.length = r), qo(e, 0 < n.length ? n : void 0);
        }
        jo(e, function (e) {
          Oa(t, e);
        });
      }
      function Da(t, e) {
        var n = Uo(Ra(t, e)),
          e = Mo(t.transactionQueueTree_, e);
        return (
          (function (e, t, n) {
            for (var r = n ? e : e.parent; null !== r; ) {
              if (t(r)) return;
              r = r.parent;
            }
          })(e, function (e) {
            Aa(t, e);
          }),
          Aa(t, e),
          (function t(e, n, r, i) {
            r && !i && n(e),
              jo(e, function (e) {
                t(e, n, !0, i);
              }),
              r && i && n(e);
          })(e, function (e) {
            Aa(t, e);
          }),
          n
        );
      }
      function Aa(e, t) {
        var n = Fo(t);
        if (n) {
          for (var r = [], i = [], o = -1, a = 0; a < n.length; a++)
            3 === n[a].status ||
              (1 === n[a].status
                ? (g(
                    o === a - 1,
                    "All SENT items should be at beginning of queue."
                  ),
                  (n[(o = a)].status = 3),
                  (n[a].abortReason = "set"))
                : (g(
                    0 === n[a].status,
                    "Unexpected transaction status in abort"
                  ),
                  n[a].unwatcher(),
                  (i = i.concat(
                    uo(e.serverSyncTree_, n[a].currentWriteId, !0)
                  )),
                  n[a].onComplete &&
                    r.push(
                      n[a].onComplete.bind(null, new Error("set"), !1, null)
                    )));
          -1 === o ? qo(t, void 0) : (n.length = o + 1),
            sa(e.eventQueue_, Uo(t), i);
          for (a = 0; a < r.length; a++) je(r[a]);
        }
      }
      var La = function (e, t) {
          var n = Ma(e),
            r = n.namespace;
          "firebase.com" === n.domain &&
            Pe(
              n.host +
                " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
            ),
            (r && "undefined" !== r) ||
              "localhost" === n.domain ||
              Pe(
                "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
              ),
            n.secure ||
              ("undefined" != typeof window &&
                window.location &&
                window.location.protocol &&
                -1 !== window.location.protocol.indexOf("https:") &&
                Ne(
                  "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                ));
          e = "ws" === n.scheme || "wss" === n.scheme;
          return {
            repoInfo: new Ke(n.host, n.secure, r, t, e, "", r !== n.subdomain),
            path: new Nt(n.pathString),
          };
        },
        Ma = function (e) {
          var t,
            n,
            r,
            i = "",
            o = "",
            a = "",
            s = "",
            u = "",
            l = !0,
            h = "https",
            c = 443;
          return (
            "string" == typeof e &&
              (0 <= (r = e.indexOf("//")) &&
                ((h = e.substring(0, r - 1)), (e = e.substring(r + 2))),
              -1 === (t = e.indexOf("/")) && (t = e.length),
              -1 === (n = e.indexOf("?")) && (n = e.length),
              (i = e.substring(0, Math.min(t, n))),
              t < n &&
                (s = (function (e) {
                  for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                    if (0 < n[r].length) {
                      var i = n[r];
                      try {
                        i = decodeURIComponent(i.replace(/\+/g, " "));
                      } catch (e) {}
                      t += "/" + i;
                    }
                  return t;
                })(e.substring(t, n))),
              (n = (function (e) {
                var t,
                  n,
                  r = {};
                "?" === e.charAt(0) && (e = e.substring(1));
                try {
                  for (
                    var i = _(e.split("&")), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a,
                      s = o.value;
                    0 !== s.length &&
                      (2 === (a = s.split("=")).length
                        ? (r[decodeURIComponent(a[0])] = decodeURIComponent(
                            a[1]
                          ))
                        : Ne(
                            "Invalid query segment '" +
                              s +
                              "' in query '" +
                              e +
                              "'"
                          ));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r;
              })(e.substring(Math.min(e.length, n)))),
              0 <= (r = i.indexOf(":"))
                ? ((l = "https" === h || "wss" === h),
                  (c = parseInt(i.substring(r + 1), 10)))
                : (r = i.length),
              "localhost" === (r = i.slice(0, r)).toLowerCase()
                ? (o = "localhost")
                : r.split(".").length <= 2
                ? (o = r)
                : ((r = i.indexOf(".")),
                  (a = i.substring(0, r).toLowerCase()),
                  (o = i.substring(r + 1)),
                  (u = a)),
              "ns" in n && (u = n.ns)),
            {
              host: i,
              port: c,
              domain: o,
              subdomain: a,
              secure: l,
              scheme: h,
              pathString: s,
              namespace: u,
            }
          );
        },
        Fa =
          ((qa.prototype.getPath = function () {
            var e = this.snapshot.ref;
            return ("value" === this.eventType ? e : e.parent)._path;
          }),
          (qa.prototype.getEventType = function () {
            return this.eventType;
          }),
          (qa.prototype.getEventRunner = function () {
            return this.eventRegistration.getEventRunner(this);
          }),
          (qa.prototype.toString = function () {
            return (
              this.getPath().toString() +
              ":" +
              this.eventType +
              ":" +
              R(this.snapshot.exportVal())
            );
          }),
          qa);
      function qa(e, t, n, r) {
        (this.eventType = e),
          (this.eventRegistration = t),
          (this.snapshot = n),
          (this.prevName = r);
      }
      var Wa =
        ((ja.prototype.getPath = function () {
          return this.path;
        }),
        (ja.prototype.getEventType = function () {
          return "cancel";
        }),
        (ja.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        }),
        (ja.prototype.toString = function () {
          return this.path.toString() + ":cancel";
        }),
        ja);
      function ja(e, t, n) {
        (this.eventRegistration = e), (this.error = t), (this.path = n);
      }
      var Ua =
        ((Ba.prototype.onValue = function (e, t) {
          this.snapshotCallback.call(null, e, t);
        }),
        (Ba.prototype.onCancel = function (e) {
          return (
            g(
              this.hasCancelCallback,
              "Raising a cancel event on a listener with no cancel callback"
            ),
            this.cancelCallback.call(null, e)
          );
        }),
        Object.defineProperty(Ba.prototype, "hasCancelCallback", {
          get: function () {
            return !!this.cancelCallback;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Ba.prototype.matches = function (e) {
          return (
            this.snapshotCallback === e.snapshotCallback ||
            (this.snapshotCallback.userCallback ===
              e.snapshotCallback.userCallback &&
              this.snapshotCallback.context === e.snapshotCallback.context)
          );
        }),
        Ba);
      function Ba(e, t) {
        (this.snapshotCallback = e), (this.cancelCallback = t);
      }
      var Ha =
        ((Va.prototype.cancel = function () {
          var e = new f();
          return (
            Ca(
              this._repo,
              this._path,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (Va.prototype.remove = function () {
          na("OnDisconnect.remove", this._path);
          var e = new f();
          return (
            ba(
              this._repo,
              this._path,
              null,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (Va.prototype.set = function (e) {
          na("OnDisconnect.set", this._path),
            Xo("OnDisconnect.set", e, this._path, !1);
          var t = new f();
          return (
            ba(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        (Va.prototype.setWithPriority = function (e, t) {
          na("OnDisconnect.setWithPriority", this._path),
            Xo("OnDisconnect.setWithPriority", e, this._path, !1),
            Qo("OnDisconnect.setWithPriority", t, !1);
          var n,
            r,
            i,
            o,
            a = new f();
          return (
            (n = this._repo),
            (r = this._path),
            (e = e),
            (t = t),
            (i = a.wrapCallback(function () {})),
            (o = Hn(e, t)),
            n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
              "ok" === e && Ir(n.onDisconnect_, r, o), Ta(0, i, e, t);
            }),
            a.promise
          );
        }),
        (Va.prototype.update = function (e) {
          na("OnDisconnect.update", this._path),
            zo("OnDisconnect.update", e, this._path, !1);
          var t = new f();
          return (
            (function (n, r, i, o) {
              if (A(i))
                return (
                  Ie(
                    "onDisconnect().update() called with empty data.  Don't do anything."
                  ),
                  Ta(0, o, "ok", void 0)
                );
              n.server_.onDisconnectMerge(r.toString(), i, function (e, t) {
                "ok" === e &&
                  De(i, function (e, t) {
                    t = Hn(t);
                    Ir(n.onDisconnect_, Ft(r, e), t);
                  }),
                  Ta(0, o, e, t);
              });
            })(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        Va);
      function Va(e, t) {
        (this._repo = e), (this._path = t);
      }
      var za =
        (Object.defineProperty(Qa.prototype, "key", {
          get: function () {
            return qt(this._path) ? null : At(this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qa.prototype, "ref", {
          get: function () {
            return new Ja(this._repo, this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qa.prototype, "_queryIdentifier", {
          get: function () {
            var e = gr(this._queryParams),
              e = Oe(e);
            return "{}" === e ? "default" : e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(Qa.prototype, "_queryObject", {
          get: function () {
            return gr(this._queryParams);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Qa.prototype.isEqual = function (e) {
          if (!((e = V(e)) instanceof Qa)) return !1;
          var t = this._repo === e._repo,
            n = Ut(this._path, e._path),
            e = this._queryIdentifier === e._queryIdentifier;
          return t && n && e;
        }),
        (Qa.prototype.toJSON = function () {
          return this.toString();
        }),
        (Qa.prototype.toString = function () {
          return (
            this._repo.toString() +
            (function (e) {
              for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++)
                "" !== e.pieces_[n] &&
                  (t += "/" + encodeURIComponent(String(e.pieces_[n])));
              return t || "/";
            })(this._path)
          );
        }),
        Qa);
      function Qa(e, t, n, r) {
        (this._repo = e),
          (this._path = t),
          (this._queryParams = n),
          (this._orderByCalled = r);
      }
      function Ya(e, t) {
        if (!0 === e._orderByCalled)
          throw new Error(t + ": You can't combine multiple orderBy calls.");
      }
      function Ka(e) {
        var t = null,
          n = null;
        if (
          (e.hasStart() && (t = e.getIndexStartValue()),
          e.hasEnd() && (n = e.getIndexEndValue()),
          e.getIndex() === sn)
        ) {
          var r =
              "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
            i =
              "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
          if (e.hasStart()) {
            if (e.getIndexStartName() !== xe) throw new Error(r);
            if ("string" != typeof t) throw new Error(i);
          }
          if (e.hasEnd()) {
            if (e.getIndexEndName() !== Re) throw new Error(r);
            if ("string" != typeof n) throw new Error(i);
          }
        } else if (e.getIndex() === Pn) {
          if ((null != t && !Jo(t)) || (null != n && !Jo(n)))
            throw new Error(
              "Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
            );
        } else if (
          (g(
            e.getIndex() instanceof Qn || e.getIndex() === Zn,
            "unknown index type."
          ),
          (null != t && "object" == typeof t) ||
            (null != n && "object" == typeof n))
        )
          throw new Error(
            "Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
          );
      }
      function Ga(e) {
        if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit())
          throw new Error(
            "Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
          );
      }
      var $a,
        Ja =
          (n(Xa, ($a = za)),
          Object.defineProperty(Xa.prototype, "parent", {
            get: function () {
              var e = Mt(this._path);
              return null === e ? null : new Xa(this._repo, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Xa.prototype, "root", {
            get: function () {
              for (var e = this; null !== e.parent; ) e = e.parent;
              return e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Xa);
      function Xa(e, t) {
        return $a.call(this, e, t, new dr(), !1) || this;
      }
      var Za =
        (Object.defineProperty(es.prototype, "priority", {
          get: function () {
            return this._node.getPriority().val();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(es.prototype, "key", {
          get: function () {
            return this.ref.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(es.prototype, "size", {
          get: function () {
            return this._node.numChildren();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (es.prototype.child = function (e) {
          var t = new Nt(e),
            e = rs(this.ref, e);
          return new es(this._node.getChild(t), e, Pn);
        }),
        (es.prototype.exists = function () {
          return !this._node.isEmpty();
        }),
        (es.prototype.exportVal = function () {
          return this._node.val(!0);
        }),
        (es.prototype.forEach = function (n) {
          var r = this;
          return (
            !this._node.isLeafNode() &&
            !!this._node.forEachChild(this._index, function (e, t) {
              return n(new es(t, rs(r.ref, e), Pn));
            })
          );
        }),
        (es.prototype.hasChild = function (e) {
          e = new Nt(e);
          return !this._node.getChild(e).isEmpty();
        }),
        (es.prototype.hasChildren = function () {
          return !this._node.isLeafNode() && !this._node.isEmpty();
        }),
        (es.prototype.toJSON = function () {
          return this.exportVal();
        }),
        (es.prototype.val = function () {
          return this._node.val();
        }),
        es);
      function es(e, t, n) {
        (this._node = e), (this.ref = t), (this._index = n);
      }
      function ts(e, t) {
        return (
          (e = V(e))._checkNotDeleted("ref"),
          void 0 !== t ? rs(e._root, t) : e._root
        );
      }
      function ns(e, t) {
        (e = V(e))._checkNotDeleted("refFromURL");
        var n = La(t, e._repo.repoInfo_.nodeAdmin);
        ra("refFromURL", n);
        t = n.repoInfo;
        return (
          e._repo.repoInfo_.isCustomHost() ||
            t.host === e._repo.repoInfo_.host ||
            Pe(
              "refFromURL: Host name does not match the current database: (found " +
                t.host +
                " but expected " +
                e._repo.repoInfo_.host +
                ")"
            ),
          ts(e, n.path.toString())
        );
      }
      function rs(e, t) {
        return (
          (null === kt((e = V(e))._path) ? ta : ea)("child", "path", t, !1),
          new Ja(e._repo, Ft(e._path, t))
        );
      }
      function is(e, t) {
        (e = V(e)), na("set", e._path), Xo("set", t, e._path, !1);
        var n = new f();
        return (
          wa(
            e._repo,
            e._path,
            t,
            null,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function os(e, t) {
        zo("update", t, e._path, !1);
        var n = new f();
        return (
          (function (i, o, e, a) {
            Ia(i, "update", { path: o.toString(), value: e });
            var s,
              t,
              n = !0,
              r = _a(i),
              u = {};
            De(e, function (e, t) {
              (n = !1), (u[e] = Oo(Ft(o, e), Hn(t), i.serverSyncTree_, r));
            }),
              n
                ? (Ie("update() called with empty data.  Don't do anything."),
                  Ta(0, a, "ok", void 0))
                : ((s = ma(i)),
                  (t = so(i.serverSyncTree_, o, u, s)),
                  oa(i.eventQueue_, t),
                  i.server_.merge(o.toString(), e, function (e, t) {
                    var n = "ok" === e;
                    n || Ne("update at " + o + " failed: " + e);
                    var r = uo(i.serverSyncTree_, s, !n),
                      n = 0 < r.length ? xa(i, o) : o;
                    sa(i.eventQueue_, n, r), Ta(0, a, e, t);
                  }),
                  De(e, function (e) {
                    e = Da(i, Ft(o, e));
                    xa(i, e);
                  }),
                  sa(i.eventQueue_, o, []));
          })(
            e._repo,
            e._path,
            t,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function as(t) {
        return (
          (t = V(t)),
          (n = t._repo),
          (r = t),
          (null != (e = fo(n.serverSyncTree_, r))
            ? Promise.resolve(e)
            : n.server_.get(r).then(
                function (e) {
                  var t = Hn(e),
                    e = lo(n.serverSyncTree_, r._path, t);
                  return aa(n.eventQueue_, r._path, e), Promise.resolve(t);
                },
                function (e) {
                  return (
                    Ia(n, "get for query " + R(r) + " failed: " + e),
                    Promise.reject(new Error(e))
                  );
                }
              )
          ).then(function (e) {
            return new Za(
              e,
              new Ja(t._repo, t._path),
              t._queryParams.getIndex()
            );
          })
        );
        var n, r, e;
      }
      var ss =
        ((us.prototype.respondsTo = function (e) {
          return "value" === e;
        }),
        (us.prototype.createEvent = function (e, t) {
          var n = t._queryParams.getIndex();
          return new Fa(
            "value",
            this,
            new Za(e.snapshotNode, new Ja(t._repo, t._path), n)
          );
        }),
        (us.prototype.getEventRunner = function (e) {
          var t = this;
          return "cancel" === e.getEventType()
            ? function () {
                return t.callbackContext.onCancel(e.error);
              }
            : function () {
                return t.callbackContext.onValue(e.snapshot, null);
              };
        }),
        (us.prototype.createCancelEvent = function (e, t) {
          return this.callbackContext.hasCancelCallback
            ? new Wa(this, e, t)
            : null;
        }),
        (us.prototype.matches = function (e) {
          return (
            e instanceof us &&
            (!e.callbackContext ||
              !this.callbackContext ||
              e.callbackContext.matches(this.callbackContext))
          );
        }),
        (us.prototype.hasAnyCallback = function () {
          return null !== this.callbackContext;
        }),
        us);
      function us(e) {
        this.callbackContext = e;
      }
      var ls =
        ((hs.prototype.respondsTo = function (e) {
          e =
            "children_removed" ===
            (e = "children_added" === e ? "child_added" : e)
              ? "child_removed"
              : e;
          return this.eventType === e;
        }),
        (hs.prototype.createCancelEvent = function (e, t) {
          return this.callbackContext.hasCancelCallback
            ? new Wa(this, e, t)
            : null;
        }),
        (hs.prototype.createEvent = function (e, t) {
          g(null != e.childName, "Child events should have a childName.");
          var n = rs(new Ja(t._repo, t._path), e.childName),
            t = t._queryParams.getIndex();
          return new Fa(e.type, this, new Za(e.snapshotNode, n, t), e.prevName);
        }),
        (hs.prototype.getEventRunner = function (e) {
          var t = this;
          return "cancel" === e.getEventType()
            ? function () {
                return t.callbackContext.onCancel(e.error);
              }
            : function () {
                return t.callbackContext.onValue(e.snapshot, e.prevName);
              };
        }),
        (hs.prototype.matches = function (e) {
          return (
            e instanceof hs &&
            this.eventType === e.eventType &&
            (!this.callbackContext ||
              !e.callbackContext ||
              this.callbackContext.matches(e.callbackContext))
          );
        }),
        (hs.prototype.hasAnyCallback = function () {
          return !!this.callbackContext;
        }),
        hs);
      function hs(e, t) {
        (this.eventType = e), (this.callbackContext = t);
      }
      function cs(n, e, t, r, i) {
        var o;
        "object" == typeof r && ((a = void 0), (i = r)),
          "function" == typeof r && (a = r),
          i &&
            i.onlyOnce &&
            (((i = function (e, t) {
              o(e, t), Ea(n._repo, n, s);
            }).userCallback = (o = t).userCallback),
            (i.context = t.context),
            (t = i));
        var a,
          t = new Ua(t, a || void 0),
          s = "value" === e ? new ss(t) : new ls(e, t);
        return (
          (a = n._repo),
          (e = s),
          (e =
            ".info" === kt((t = n)._path)
              ? co(a.infoSyncTree_, t, e)
              : co(a.serverSyncTree_, t, e)),
          aa(a.eventQueue_, t._path, e),
          function () {
            return Ea(n._repo, n, s);
          }
        );
      }
      function ds(e, t, n, r) {
        return cs(e, "value", t, n, r);
      }
      function ps(e, t, n, r) {
        return cs(e, "child_added", t, n, r);
      }
      function fs(e, t, n, r) {
        return cs(e, "child_changed", t, n, r);
      }
      function _s(e, t, n, r) {
        return cs(e, "child_moved", t, n, r);
      }
      function ys(e, t, n, r) {
        return cs(e, "child_removed", t, n, r);
      }
      function vs(e, t, n) {
        var r = null,
          n = n ? new Ua(n) : null;
        "value" === t ? (r = new ss(n)) : t && (r = new ls(t, n)),
          Ea(e._repo, e, r);
      }
      var gs,
        mt = function () {},
        ms =
          (n(ws, (gs = mt)),
          (ws.prototype._apply = function (e) {
            Xo("endAt", this._value, e._path, !0);
            var t = _r(e._queryParams, this._value, this._key);
            if ((Ga(t), Ka(t), e._queryParams.hasEnd()))
              throw new Error(
                "endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new za(e._repo, e._path, t, e._orderByCalled);
          }),
          ws);
      function ws(e, t) {
        var n = gs.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Cs,
        bs =
          (n(Es, (Cs = mt)),
          (Es.prototype._apply = function (e) {
            Xo("endBefore", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === sn
                    ? _r(t, (n = "string" == typeof n ? $n(n) : n), r)
                    : _r(t, n, null == r ? xe : $n(r))).endBeforeSet_ = !0),
                r);
            if ((Ga(r), Ka(r), e._queryParams.hasEnd()))
              throw new Error(
                "endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new za(e._repo, e._path, r, e._orderByCalled);
          }),
          Es);
      function Es(e, t) {
        var n = Cs.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Ss,
        Is =
          (n(Ts, (Ss = mt)),
          (Ts.prototype._apply = function (e) {
            Xo("startAt", this._value, e._path, !0);
            var t = fr(e._queryParams, this._value, this._key);
            if ((Ga(t), Ka(t), e._queryParams.hasStart()))
              throw new Error(
                "startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
              );
            return new za(e._repo, e._path, t, e._orderByCalled);
          }),
          Ts);
      function Ts(e, t) {
        var n = Ss.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Ps,
        Ns =
          (n(xs, (Ps = mt)),
          (xs.prototype._apply = function (e) {
            Xo("startAfter", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === sn
                    ? fr(t, (n = "string" == typeof n ? Gn(n) : n), r)
                    : fr(t, n, null == r ? Re : Gn(r))).startAfterSet_ = !0),
                r);
            if ((Ga(r), Ka(r), e._queryParams.hasStart()))
              throw new Error(
                "startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
              );
            return new za(e._repo, e._path, r, e._orderByCalled);
          }),
          xs);
      function xs(e, t) {
        var n = Ps.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Rs,
        ks =
          (n(Os, (Rs = mt)),
          (Os.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new za(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "l"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          Os);
      function Os(e) {
        var t = Rs.call(this) || this;
        return (t._limit = e), t;
      }
      var Ds,
        As =
          (n(Ls, (Ds = mt)),
          (Ls.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new za(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "r"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          Ls);
      function Ls(e) {
        var t = Ds.call(this) || this;
        return (t._limit = e), t;
      }
      var Ms,
        Fs =
          (n(qs, (Ms = mt)),
          (qs.prototype._apply = function (e) {
            Ya(e, "orderByChild");
            var t = new Nt(this._path);
            if (qt(t))
              throw new Error(
                "orderByChild: cannot pass in empty path. Use orderByValue() instead."
              );
            (t = new Qn(t)), (t = yr(e._queryParams, t));
            return Ka(t), new za(e._repo, e._path, t, !0);
          }),
          qs);
      function qs(e) {
        var t = Ms.call(this) || this;
        return (t._path = e), t;
      }
      var Ws,
        js =
          (n(Us, (Ws = mt)),
          (Us.prototype._apply = function (e) {
            Ya(e, "orderByKey");
            var t = yr(e._queryParams, sn);
            return Ka(t), new za(e._repo, e._path, t, !0);
          }),
          Us);
      function Us() {
        return (null !== Ws && Ws.apply(this, arguments)) || this;
      }
      var Bs,
        Hs =
          (n(Vs, (Bs = mt)),
          (Vs.prototype._apply = function (e) {
            Ya(e, "orderByPriority");
            var t = yr(e._queryParams, Pn);
            return Ka(t), new za(e._repo, e._path, t, !0);
          }),
          Vs);
      function Vs() {
        return (null !== Bs && Bs.apply(this, arguments)) || this;
      }
      var zs,
        Qs =
          (n(Ys, (zs = mt)),
          (Ys.prototype._apply = function (e) {
            Ya(e, "orderByValue");
            var t = yr(e._queryParams, Zn);
            return Ka(t), new za(e._repo, e._path, t, !0);
          }),
          Ys);
      function Ys() {
        return (null !== zs && zs.apply(this, arguments)) || this;
      }
      var Ks,
        Gs,
        $s,
        Js =
          (n(Xs, (Ks = mt)),
          (Xs.prototype._apply = function (e) {
            if (
              (Xo("equalTo", this._value, e._path, !1),
              e._queryParams.hasStart())
            )
              throw new Error(
                "equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
              );
            if (e._queryParams.hasEnd())
              throw new Error(
                "equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
              );
            return new ms(this._value, this._key)._apply(
              new Is(this._value, this._key)._apply(e)
            );
          }),
          Xs);
      function Xs(e, t) {
        var n = Ks.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      function Zs(e) {
        for (var t, n, r = [], i = 1; i < arguments.length; i++)
          r[i - 1] = arguments[i];
        var o = V(e);
        try {
          for (var a = _(r), s = a.next(); !s.done; s = a.next())
            o = s.value._apply(o);
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      (Gs = Ja),
        g(!Wi, "__referenceConstructor has already been defined"),
        (Wi = Gs),
        ($s = Ja),
        g(!Qi, "__referenceConstructor has already been defined"),
        (Qi = $s);
      var eu = "FIREBASE_DATABASE_EMULATOR_HOST",
        tu = {},
        nu = !1;
      function ru(e, t, n, r) {
        var i = n || e.options.databaseURL;
        void 0 === i &&
          (e.options.projectId ||
            Pe(
              "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
            ),
          Ie("Using default host for project ", e.options.projectId),
          (i = e.options.projectId + "-default-rtdb.firebaseio.com"));
        var o,
          a = La(i, r),
          s = a.repoInfo,
          n = void 0;
        (n = "undefined" != typeof process ? process.env[eu] : n)
          ? ((o = !0),
            (i = "http://" + n + "?ns=" + s.namespace),
            (s = (a = La(i, r)).repoInfo))
          : (o = !a.repoInfo.secure);
        t = r && o ? new He() : new Ue(e.name, e.options, t);
        ra("Invalid Firebase Database URL", a),
          qt(a.path) ||
            Pe(
              "Database URL must point to the root of a Firebase Database (not including a child path)."
            );
        t = (function (e, t, n) {
          var r = tu[t.name];
          r || ((r = {}), (tu[t.name] = r));
          t = r[e.toURLString()];
          t &&
            Pe(
              "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
            );
          return (t = new ca(e, nu, n)), (r[e.toURLString()] = t);
        })(s, e, t);
        return new iu(t, e);
      }
      var iu =
        (Object.defineProperty(ou.prototype, "_repo", {
          get: function () {
            return (
              this._instanceStarted ||
                (pa(
                  this._repoInternal,
                  this.app.options.appId,
                  this.app.options.databaseAuthVariableOverride
                ),
                (this._instanceStarted = !0)),
              this._repoInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ou.prototype, "_root", {
          get: function () {
            return (
              this._rootInternal ||
                (this._rootInternal = new Ja(this._repo, Rt())),
              this._rootInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ou.prototype._delete = function () {
          var e, t, n;
          return (
            this._checkNotDeleted("delete"),
            (e = this._repo),
            (t = this.app.name),
            ((n = tu[t]) && n[e.key] === e) ||
              Pe(
                "Database " +
                  t +
                  "(" +
                  e.repoInfo_ +
                  ") has already been deleted."
              ),
            Sa(e),
            delete n[e.key],
            (this._repoInternal = null),
            (this._rootInternal = null),
            Promise.resolve()
          );
        }),
        (ou.prototype._checkNotDeleted = function (e) {
          null === this._rootInternal &&
            Pe("Cannot call " + e + " on a deleted database.");
        }),
        ou);
      function ou(e, t) {
        (this._repoInternal = e),
          (this.app = t),
          (this.type = "database"),
          (this._instanceStarted = !1);
      }
      function au(e, t, n) {
        (e = V(e))._checkNotDeleted("useEmulator"),
          e._instanceStarted &&
            Pe(
              "Cannot call useEmulator() after instance has already been initialized."
            ),
          (e = e._repoInternal),
          (t = t),
          (n = n),
          (e.repoInfo_ = new Ke(
            t + ":" + n,
            !1,
            e.repoInfo_.namespace,
            e.repoInfo_.webSocketOnly,
            e.repoInfo_.nodeAdmin,
            e.repoInfo_.persistenceKey,
            e.repoInfo_.includeNamespaceInQueryParams
          )),
          e.repoInfo_.nodeAdmin && (e.authTokenProvider_ = new He());
      }
      function su(e) {
        (e = V(e))._checkNotDeleted("goOnline"),
          (e = e._repo).persistentConnection_ &&
            e.persistentConnection_.resume(la);
      }
      function uu(e, t) {
        Se(e, t);
      }
      var lu = { ".sv": "timestamp" };
      var hu =
        ((cu.prototype.toJSON = function () {
          return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON(),
          };
        }),
        cu);
      function cu(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      function du(i, e, t) {
        if (
          ((i = V(i)),
          na("Reference.transaction", i._path),
          ".length" === i.key || ".keys" === i.key)
        )
          throw (
            "Reference.transaction failed: " + i.key + " is a read-only object."
          );
        var t =
            null === (n = null == t ? void 0 : t.applyLocally) ||
            void 0 === n ||
            n,
          o = new f(),
          n = ds(i, function () {});
        return (
          (function (e, t, n, r, i, o) {
            Ia(e, "transaction on " + t);
            var a = {
                path: t,
                update: n,
                onComplete: r,
                status: null,
                order: we(),
                applyLocally: o,
                retryCount: 0,
                unwatcher: i,
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              n = Pa(e, t, void 0);
            (a.currentInputSnapshot = n),
              void 0 === (r = a.update(n.val()))
                ? (a.unwatcher(),
                  (a.currentOutputSnapshotRaw = null),
                  (a.currentOutputSnapshotResolved = null),
                  a.onComplete &&
                    a.onComplete(null, !1, a.currentInputSnapshot))
                : (Zo("transaction failed: Data returned ", r, a.path),
                  (a.status = 0),
                  (i = Fo((o = Mo(e.transactionQueueTree_, t))) || []).push(a),
                  qo(o, i),
                  (o = void 0),
                  "object" == typeof r && null !== r && O(r, ".priority")
                    ? ((o = D(r, ".priority")),
                      g(
                        Jo(o),
                        "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                      ))
                    : (o = (po(e.serverSyncTree_, t) || qn.EMPTY_NODE)
                        .getPriority()
                        .val()),
                  (i = _a(e)),
                  (o = Hn(r, o)),
                  (i = Do(o, n, i)),
                  (a.currentOutputSnapshotRaw = o),
                  (a.currentOutputSnapshotResolved = i),
                  (a.currentWriteId = ma(e)),
                  (a = ao(
                    e.serverSyncTree_,
                    t,
                    i,
                    a.currentWriteId,
                    a.applyLocally
                  )),
                  sa(e.eventQueue_, t, a),
                  Na(e, e.transactionQueueTree_));
          })(
            i._repo,
            i._path,
            e,
            function (e, t, n) {
              var r;
              e
                ? o.reject(e)
                : ((r = new Za(n, new Ja(i._repo, i._path), Pn)),
                  o.resolve(new hu(t, r)));
            },
            n,
            t
          ),
          o.promise
        );
      }
      var pu =
        ((fu.prototype.cancel = function (t) {
          W("OnDisconnect.cancel", 0, 1, arguments.length),
            U("OnDisconnect.cancel", "onComplete", t, !0);
          var e = this._delegate.cancel();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (fu.prototype.remove = function (t) {
          W("OnDisconnect.remove", 0, 1, arguments.length),
            U("OnDisconnect.remove", "onComplete", t, !0);
          var e = this._delegate.remove();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (fu.prototype.set = function (e, t) {
          W("OnDisconnect.set", 1, 2, arguments.length),
            U("OnDisconnect.set", "onComplete", t, !0);
          e = this._delegate.set(e);
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (fu.prototype.setWithPriority = function (e, t, n) {
          W("OnDisconnect.setWithPriority", 2, 3, arguments.length),
            U("OnDisconnect.setWithPriority", "onComplete", n, !0);
          t = this._delegate.setWithPriority(e, t);
          return (
            n &&
              t.then(
                function () {
                  return n(null);
                },
                function (e) {
                  return n(e);
                }
              ),
            t
          );
        }),
        (fu.prototype.update = function (e, t) {
          if (
            (W("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e))
          ) {
            for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
            (e = n),
              Ne(
                "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
              );
          }
          U("OnDisconnect.update", "onComplete", t, !0);
          var i = this._delegate.update(e);
          return (
            t &&
              i.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            i
          );
        }),
        fu);
      function fu(e) {
        this._delegate = e;
      }
      var _u =
        ((yu.prototype.toJSON = function () {
          return (
            W("TransactionResult.toJSON", 0, 1, arguments.length),
            { committed: this.committed, snapshot: this.snapshot.toJSON() }
          );
        }),
        yu);
      function yu(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      var vu =
        ((gu.prototype.val = function () {
          return (
            W("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
          );
        }),
        (gu.prototype.exportVal = function () {
          return (
            W("DataSnapshot.exportVal", 0, 0, arguments.length),
            this._delegate.exportVal()
          );
        }),
        (gu.prototype.toJSON = function () {
          return (
            W("DataSnapshot.toJSON", 0, 1, arguments.length),
            this._delegate.toJSON()
          );
        }),
        (gu.prototype.exists = function () {
          return (
            W("DataSnapshot.exists", 0, 0, arguments.length),
            this._delegate.exists()
          );
        }),
        (gu.prototype.child = function (e) {
          return (
            W("DataSnapshot.child", 0, 1, arguments.length),
            (e = String(e)),
            ea("DataSnapshot.child", "path", e, !1),
            new gu(this._database, this._delegate.child(e))
          );
        }),
        (gu.prototype.hasChild = function (e) {
          return (
            W("DataSnapshot.hasChild", 1, 1, arguments.length),
            ea("DataSnapshot.hasChild", "path", e, !1),
            this._delegate.hasChild(e)
          );
        }),
        (gu.prototype.getPriority = function () {
          return (
            W("DataSnapshot.getPriority", 0, 0, arguments.length),
            this._delegate.priority
          );
        }),
        (gu.prototype.forEach = function (t) {
          var n = this;
          return (
            W("DataSnapshot.forEach", 1, 1, arguments.length),
            U("DataSnapshot.forEach", "action", t, !1),
            this._delegate.forEach(function (e) {
              return t(new gu(n._database, e));
            })
          );
        }),
        (gu.prototype.hasChildren = function () {
          return (
            W("DataSnapshot.hasChildren", 0, 0, arguments.length),
            this._delegate.hasChildren()
          );
        }),
        Object.defineProperty(gu.prototype, "key", {
          get: function () {
            return this._delegate.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (gu.prototype.numChildren = function () {
          return (
            W("DataSnapshot.numChildren", 0, 0, arguments.length),
            this._delegate.size
          );
        }),
        (gu.prototype.getRef = function () {
          return (
            W("DataSnapshot.ref", 0, 0, arguments.length),
            new bu(this._database, this._delegate.ref)
          );
        }),
        Object.defineProperty(gu.prototype, "ref", {
          get: function () {
            return this.getRef();
          },
          enumerable: !1,
          configurable: !0,
        }),
        gu);
      function gu(e, t) {
        (this._database = e), (this._delegate = t);
      }
      var mu =
        ((wu.prototype.on = function (e, n, t, r) {
          var i = this;
          W("Query.on", 2, 4, arguments.length),
            U("Query.on", "callback", n, !1);
          function o(e, t) {
            n.call(a.context, new vu(i.database, e), t);
          }
          var a = wu.getCancelAndContextArgs_("Query.on", t, r);
          (o.userCallback = n), (o.context = a.context);
          var s =
            null === (r = a.cancel) || void 0 === r
              ? void 0
              : r.bind(a.context);
          switch (e) {
            case "value":
              return ds(this._delegate, o, s), n;
            case "child_added":
              return ps(this._delegate, o, s), n;
            case "child_removed":
              return ys(this._delegate, o, s), n;
            case "child_changed":
              return fs(this._delegate, o, s), n;
            case "child_moved":
              return _s(this._delegate, o, s), n;
            default:
              throw new Error(
                j("Query.on", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
        }),
        (wu.prototype.off = function (e, t, n) {
          var r;
          W("Query.off", 0, 3, arguments.length),
            (function (e, t, n) {
              if (!n || void 0 !== t)
                switch (t) {
                  case "value":
                  case "child_added":
                  case "child_removed":
                  case "child_changed":
                  case "child_moved":
                    break;
                  default:
                    throw new Error(
                      j(e, "eventType") +
                        'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                    );
                }
            })("Query.off", e, !0),
            U("Query.off", "callback", t, !0),
            B("Query.off", "context", n, !0),
            t
              ? (((r = function () {}).userCallback = t),
                (r.context = n),
                vs(this._delegate, e, r))
              : vs(this._delegate, e);
        }),
        (wu.prototype.get = function () {
          var t = this;
          return as(this._delegate).then(function (e) {
            return new vu(t.database, e);
          });
        }),
        (wu.prototype.once = function (e, n, t, r) {
          var i = this;
          W("Query.once", 1, 4, arguments.length),
            U("Query.once", "callback", n, !0);
          function o(e, t) {
            (e = new vu(i.database, e)),
              n && n.call(a.context, e, t),
              s.resolve(e);
          }
          var a = wu.getCancelAndContextArgs_("Query.on", t, r),
            s = new f();
          (o.userCallback = n), (o.context = a.context);
          function u(e) {
            a.cancel && a.cancel.call(a.context, e), s.reject(e);
          }
          switch (e) {
            case "value":
              ds(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_added":
              ps(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_removed":
              ys(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_changed":
              fs(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_moved":
              _s(this._delegate, o, u, { onlyOnce: !0 });
              break;
            default:
              throw new Error(
                j("Query.once", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
          return s.promise;
        }),
        (wu.prototype.limitToFirst = function (e) {
          return (
            W("Query.limitToFirst", 1, 1, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToFirst: First argument must be a positive integer."
                    );
                  return new ks(e);
                })(e)
              )
            )
          );
        }),
        (wu.prototype.limitToLast = function (e) {
          return (
            W("Query.limitToLast", 1, 1, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToLast: First argument must be a positive integer."
                    );
                  return new As(e);
                })(e)
              )
            )
          );
        }),
        (wu.prototype.orderByChild = function (e) {
          return (
            W("Query.orderByChild", 1, 1, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                (function (e) {
                  if ("$key" === e)
                    throw new Error(
                      'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
                    );
                  if ("$priority" === e)
                    throw new Error(
                      'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
                    );
                  if ("$value" === e)
                    throw new Error(
                      'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
                    );
                  return ea("orderByChild", "path", e, !1), new Fs(e);
                })(e)
              )
            )
          );
        }),
        (wu.prototype.orderByKey = function () {
          return (
            W("Query.orderByKey", 0, 0, arguments.length),
            new wu(this.database, Zs(this._delegate, new js()))
          );
        }),
        (wu.prototype.orderByPriority = function () {
          return (
            W("Query.orderByPriority", 0, 0, arguments.length),
            new wu(this.database, Zs(this._delegate, new Hs()))
          );
        }),
        (wu.prototype.orderByValue = function () {
          return (
            W("Query.orderByValue", 0, 0, arguments.length),
            new wu(this.database, Zs(this._delegate, new Qs()))
          );
        }),
        (wu.prototype.startAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            W("Query.startAt", 0, 2, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                (void 0 === (e = e) && (e = null),
                Yo("startAt", "key", (t = t), !0),
                new Is(e, t))
              )
            )
          );
        }),
        (wu.prototype.startAfter = function (e, t) {
          return (
            void 0 === e && (e = null),
            W("Query.startAfter", 0, 2, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                ((e = e), Yo("startAfter", "key", (t = t), !0), new Ns(e, t))
              )
            )
          );
        }),
        (wu.prototype.endAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            W("Query.endAt", 0, 2, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                ((e = e), Yo("endAt", "key", (t = t), !0), new ms(e, t))
              )
            )
          );
        }),
        (wu.prototype.endBefore = function (e, t) {
          return (
            void 0 === e && (e = null),
            W("Query.endBefore", 0, 2, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                ((e = e), Yo("endBefore", "key", (t = t), !0), new bs(e, t))
              )
            )
          );
        }),
        (wu.prototype.equalTo = function (e, t) {
          return (
            W("Query.equalTo", 1, 2, arguments.length),
            new wu(
              this.database,
              Zs(
                this._delegate,
                ((e = e), Yo("equalTo", "key", (t = t), !0), new Js(e, t))
              )
            )
          );
        }),
        (wu.prototype.toString = function () {
          return (
            W("Query.toString", 0, 0, arguments.length),
            this._delegate.toString()
          );
        }),
        (wu.prototype.toJSON = function () {
          return (
            W("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
          );
        }),
        (wu.prototype.isEqual = function (e) {
          if ((W("Query.isEqual", 1, 1, arguments.length), e instanceof wu))
            return this._delegate.isEqual(e._delegate);
          throw new Error(
            "Query.isEqual failed: First argument must be an instance of firebase.database.Query."
          );
        }),
        (wu.getCancelAndContextArgs_ = function (e, t, n) {
          var r = { cancel: void 0, context: void 0 };
          if (t && n)
            (r.cancel = t),
              U(e, "cancel", r.cancel, !0),
              (r.context = n),
              B(e, "context", r.context, !0);
          else if (t)
            if ("object" == typeof t && null !== t) r.context = t;
            else {
              if ("function" != typeof t)
                throw new Error(
                  j(e, "cancelOrContext") +
                    " must either be a cancel callback or a context object."
                );
              r.cancel = t;
            }
          return r;
        }),
        Object.defineProperty(wu.prototype, "ref", {
          get: function () {
            return new bu(
              this.database,
              new Ja(this._delegate._repo, this._delegate._path)
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        wu);
      function wu(e, t) {
        (this.database = e), (this._delegate = t);
      }
      var Cu,
        bu =
          (n(Eu, (Cu = mu)),
          (Eu.prototype.getKey = function () {
            return (
              W("Reference.key", 0, 0, arguments.length), this._delegate.key
            );
          }),
          (Eu.prototype.child = function (e) {
            return (
              W("Reference.child", 1, 1, arguments.length),
              "number" == typeof e && (e = String(e)),
              new Eu(this.database, rs(this._delegate, e))
            );
          }),
          (Eu.prototype.getParent = function () {
            W("Reference.parent", 0, 0, arguments.length);
            var e = this._delegate.parent;
            return e ? new Eu(this.database, e) : null;
          }),
          (Eu.prototype.getRoot = function () {
            return (
              W("Reference.root", 0, 0, arguments.length),
              new Eu(this.database, this._delegate.root)
            );
          }),
          (Eu.prototype.set = function (e, t) {
            W("Reference.set", 1, 2, arguments.length),
              U("Reference.set", "onComplete", t, !0);
            e = is(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Eu.prototype.update = function (e, t) {
            if (
              (W("Reference.update", 1, 2, arguments.length), Array.isArray(e))
            ) {
              for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
              (e = n),
                Ne(
                  "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                );
            }
            na("Reference.update", this._delegate._path),
              U("Reference.update", "onComplete", t, !0);
            var i = os(this._delegate, e);
            return (
              t &&
                i.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              i
            );
          }),
          (Eu.prototype.setWithPriority = function (e, t, n) {
            W("Reference.setWithPriority", 2, 3, arguments.length),
              U("Reference.setWithPriority", "onComplete", n, !0);
            t = (function (e, t, n) {
              if (
                (na("setWithPriority", e._path),
                Xo("setWithPriority", t, e._path, !1),
                Qo("setWithPriority", n, !1),
                ".length" === e.key || ".keys" === e.key)
              )
                throw (
                  "setWithPriority failed: " + e.key + " is a read-only object."
                );
              var r = new f();
              return (
                wa(
                  e._repo,
                  e._path,
                  t,
                  n,
                  r.wrapCallback(function () {})
                ),
                r.promise
              );
            })(this._delegate, e, t);
            return (
              n &&
                t.then(
                  function () {
                    return n(null);
                  },
                  function (e) {
                    return n(e);
                  }
                ),
              t
            );
          }),
          (Eu.prototype.remove = function (t) {
            W("Reference.remove", 0, 1, arguments.length),
              U("Reference.remove", "onComplete", t, !0);
            var e,
              e = ((e = this._delegate), na("remove", e._path), is(e, null));
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Eu.prototype.transaction = function (e, t, n) {
            var r = this;
            W("Reference.transaction", 1, 3, arguments.length),
              U("Reference.transaction", "transactionUpdate", e, !1),
              U("Reference.transaction", "onComplete", t, !0),
              (function (e, t, n, r) {
                if ((!r || void 0 !== n) && "boolean" != typeof n)
                  throw new Error(j(e, t) + "must be a boolean.");
              })("Reference.transaction", "applyLocally", n, !0);
            n = du(this._delegate, e, { applyLocally: n }).then(function (e) {
              return new _u(e.committed, new vu(r.database, e.snapshot));
            });
            return (
              t &&
                n.then(
                  function (e) {
                    return t(null, e.committed, e.snapshot);
                  },
                  function (e) {
                    return t(e, !1, null);
                  }
                ),
              n
            );
          }),
          (Eu.prototype.setPriority = function (e, t) {
            W("Reference.setPriority", 1, 2, arguments.length),
              U("Reference.setPriority", "onComplete", t, !0);
            e = (function (e, t) {
              (e = V(e)), na("setPriority", e._path), Qo("setPriority", t, !1);
              var n = new f();
              return (
                wa(
                  e._repo,
                  Ft(e._path, ".priority"),
                  t,
                  null,
                  n.wrapCallback(function () {})
                ),
                n.promise
              );
            })(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Eu.prototype.push = function (e, t) {
            var n = this;
            W("Reference.push", 0, 2, arguments.length),
              U("Reference.push", "onComplete", t, !0);
            var r = (function (e, t) {
                (e = V(e)), na("push", e._path), Xo("push", t, e._path, !0);
                var n = fa(e._repo),
                  r = tr(n),
                  n = rs(e, r),
                  i = rs(e, r),
                  t =
                    null != t
                      ? is(i, t).then(function () {
                          return i;
                        })
                      : Promise.resolve(i);
                return (
                  (n.then = t.then.bind(t)),
                  (n.catch = t.then.bind(t, void 0)),
                  n
                );
              })(this._delegate, e),
              e = r.then(function (e) {
                return new Eu(n.database, e);
              });
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              );
            r = new Eu(this.database, r);
            return (
              (r.then = e.then.bind(e)), (r.catch = e.catch.bind(e, void 0)), r
            );
          }),
          (Eu.prototype.onDisconnect = function () {
            return (
              na("Reference.onDisconnect", this._delegate._path),
              new pu(new Ha(this._delegate._repo, this._delegate._path))
            );
          }),
          Object.defineProperty(Eu.prototype, "key", {
            get: function () {
              return this.getKey();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Eu.prototype, "parent", {
            get: function () {
              return this.getParent();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Eu.prototype, "root", {
            get: function () {
              return this.getRoot();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Eu);
      function Eu(e, t) {
        var n =
          Cu.call(this, e, new za(t._repo, t._path, new dr(), !1)) || this;
        return (n.database = e), (n._delegate = t), n;
      }
      var Su =
        ((Iu.prototype.useEmulator = function (e, t) {
          au(this._delegate, e, t);
        }),
        (Iu.prototype.ref = function (e) {
          if ((W("database.ref", 0, 1, arguments.length), e instanceof bu)) {
            var t = ns(this._delegate, e.toString());
            return new bu(this, t);
          }
          t = ts(this._delegate, e);
          return new bu(this, t);
        }),
        (Iu.prototype.refFromURL = function (e) {
          W("database.refFromURL", 1, 1, arguments.length);
          e = ns(this._delegate, e);
          return new bu(this, e);
        }),
        (Iu.prototype.goOffline = function () {
          var e;
          W("database.goOffline", 0, 0, arguments.length),
            (e = V((e = this._delegate)))._checkNotDeleted("goOffline"),
            Sa(e._repo);
        }),
        (Iu.prototype.goOnline = function () {
          return (
            W("database.goOnline", 0, 0, arguments.length), su(this._delegate)
          );
        }),
        (Iu.ServerValue = {
          TIMESTAMP: lu,
          increment: function (e) {
            return { ".sv": { increment: e } };
          },
        }),
        Iu);
      function Iu(e, t) {
        var n = this;
        (this._delegate = e),
          (this.app = t),
          (this.INTERNAL = {
            delete: function () {
              return n._delegate._delete();
            },
          });
      }
      var Tu = Object.freeze({
          __proto__: null,
          forceLongPolling: function () {
            pt.forceDisallow(), at.forceAllow();
          },
          forceWebSockets: function () {
            at.forceDisallow();
          },
          isWebSocketsAvailable: function () {
            return pt.isAvailable();
          },
          setSecurityDebugCallback: function (e, t) {
            e._delegate._repo.persistentConnection_.securityDebugCallback_ = t;
          },
          stats: function (e, t) {
            var i;
            (e = e._delegate._repo),
              void 0 === (t = t) && (t = !1),
              "undefined" != typeof console &&
                ((e = t
                  ? (e.statsListener_ || (e.statsListener_ = new Pr(e.stats_)),
                    e.statsListener_.get())
                  : e.stats_.get()),
                (i = Object.keys(e).reduce(function (e, t) {
                  return Math.max(t.length, e);
                }, 0)),
                De(e, function (e, t) {
                  for (var n = e, r = e.length; r < i + 2; r++) n += " ";
                  console.log(n + t);
                }));
          },
          statsIncrementCounter: function (e, t) {
            (e = e._delegate._repo),
              (t = t),
              e.stats_.incrementCounter(t),
              (e = e.statsReporter_),
              (t = t),
              (e.statsToReport_[t] = !0);
          },
          dataUpdateCount: function (e) {
            return e._delegate._repo.dataUpdateCount;
          },
          interceptServerData: function (e, t) {
            (e = e._delegate._repo),
              (t = t),
              (e.interceptServerDataCallback_ = t);
          },
          initStandalone: function (e) {
            var t = e.app,
              n = e.url,
              r = e.version,
              i = e.customAuthImpl,
              o = e.namespace,
              e = void 0 !== (e = e.nodeAdmin) && e;
            return (
              ct(r),
              (r = new K(
                "auth-internal",
                new J("database-standalone")
              )).setComponent(
                new z(
                  "auth-internal",
                  function () {
                    return i;
                  },
                  "PRIVATE"
                )
              ),
              { instance: new Su(ru(t, r, n, e), t), namespace: o }
            );
          },
        }),
        mt = Xt;
      (Xt.prototype.simpleListen = function (e, t) {
        this.sendRequest("q", { p: e }, t);
      }),
        (Xt.prototype.echo = function (e, t) {
          this.sendRequest("echo", { d: e }, t);
        });
      var Pu,
        Nu = Object.freeze({
          __proto__: null,
          DataConnection: mt,
          RealTimeConnection: vt,
          hijackHash: function (i) {
            var o = Xt.prototype.put;
            return (
              (Xt.prototype.put = function (e, t, n, r) {
                void 0 !== r && (r = i()), o.call(this, e, t, n, r);
              }),
              function () {
                Xt.prototype.put = o;
              }
            );
          },
          ConnectionTarget: Ke,
          queryIdentifier: function (e) {
            return e._delegate._queryIdentifier;
          },
          forceRestClient: function (e) {
            nu = e;
          },
        }),
        xu = Su.ServerValue;
      ct((Pu = t.default).SDK_VERSION),
        Pu.INTERNAL.registerComponent(
          new z(
            "database",
            function (e, t) {
              var n = t.instanceIdentifier,
                t = e.getProvider("app").getImmediate(),
                e = e.getProvider("auth-internal");
              return new Su(ru(t, e, n), t);
            },
            "PUBLIC"
          )
            .setServiceProps({
              Reference: bu,
              Query: mu,
              Database: Su,
              DataSnapshot: vu,
              enableLogging: uu,
              INTERNAL: Tu,
              ServerValue: xu,
              TEST_ACCESS: Nu,
            })
            .setMultipleInstances(!0)
        ),
        Pu.registerVersion("@firebase/database", "0.9.12");
    }.apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-database.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-database.js.map
