/*! For license information please see main.a786d221.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, i, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = l);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var N = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var j,
          R = Object.assign;
        function D(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  l = a.length - 1,
                  o = i.length - 1;
                1 <= l && 0 <= o && a[l] !== i[o];

              )
                o--;
              for (; 1 <= l && 0 <= o; l--, o--)
                if (a[l] !== i[o]) {
                  if (1 !== l || 1 !== o)
                    do {
                      if ((l--, 0 > --o || a[l] !== i[o])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= o);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function U(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = U(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = U(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          K(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ie(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          xe = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
        }
        function Pe() {
          if (xe) {
            var e = xe,
              t = Ee;
            if (((Ee = xe = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Oe() {}
        var ze = !1;
        function Le(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return _e(e, t, n);
          } finally {
            (ze = !1), (null !== xe || null !== Ee) && (Oe(), Pe());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ne = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Ne = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Ne = !1;
          }
        function Ie(e, t, n, r, a, i, l, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Re = null,
          De = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (je = !0), (Re = e);
            },
          };
        function He(e, t, n, r, a, i, l, o, s) {
          (je = !1), (Re = null), Ie.apply(Be, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ve(e) !== e) throw Error(i(188));
        }
        function Ue(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return We(a), e;
                    if (l === r) return We(a), t;
                    l = l.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = l);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = l), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = l), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var o = l & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (i &= l) && (r = dt(i));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          xt,
          Et,
          Ct,
          Tt = !1,
          Pt = [],
          _t = null,
          Ot = null,
          zt = null,
          Lt = new Map(),
          Mt = new Map(),
          Nt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== _t && Dt(_t) && (_t = null),
            null !== Ot && Dt(Ot) && (Ot = null),
            null !== zt && Dt(zt) && (zt = null),
            Lt.forEach(Ft),
            Mt.forEach(Ft);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Vt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Pt.length) {
            Ht(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Ht(_t, e),
              null !== Ot && Ht(Ot, e),
              null !== zt && Ht(zt, e),
              Lt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Nt.length;
            n++
          )
            (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn; )
            Rt(n), null === n.blockedOn && Nt.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Ut(e, t, n, r) {
          var a = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = i);
          }
        }
        function Gt(e, t, n, r) {
          var a = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a) Wr(e, t, r, qt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = jt(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = jt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (zt = jt(zt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, jt(Lt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Mt.set(i, jt(Mt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && St(i),
                  null === (i = Yt(e, t, n, r)) && Wr(e, t, r, qt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Yt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = Se(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = R({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = R({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(R({}, pn, { dataTransfer: 0 })),
          vn = an(R({}, dn, { relatedTarget: 0 })),
          gn = an(
            R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(R({}, un, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          xn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = xn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Tn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Tn),
          _n = an(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          zn = an(
            R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(Ln),
          Nn = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var jn = c && "TextEvent" in window && !In,
          Rn = c && (!An || (In && 8 < In && 11 >= In)),
          Dn = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Un(e, t, n, r) {
          Te(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function qn(e) {
          Dr(e, 0);
        }
        function Yn(e) {
          if (Q(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Kn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (Qn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Qn)) {
            var t = [];
            Un(t, Qn, e, Se(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Qn);
        }
        function ir(e, t) {
          if ("click" === e) return Yn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== q(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          xr = {},
          Er = {};
        function Cr(e) {
          if (xr[e]) return xr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (xr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Tr = Cr("animationend"),
          Pr = Cr("animationiteration"),
          _r = Cr("animationstart"),
          Or = Cr("transitionend"),
          zr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          zr.set(e, t), s(t, [e]);
        }
        for (var Nr = 0; Nr < Lr.length; Nr++) {
          var Ar = Lr[Nr];
          Mr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        Mr(Tr, "onAnimationEnd"),
          Mr(Pr, "onAnimationIteration"),
          Mr(_r, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, o, s, u) {
              if ((He.apply(this, arguments), je)) {
                if (!je) throw Error(i(198));
                var c = Re;
                (je = !1), (Re = null), De || ((De = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var o = r[l],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Rr(a, o, u), (i = s);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (o = r[l]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, o, u), (i = s);
                }
            }
          }
          if (De) throw ((e = Fe), (De = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Br("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Ut;
              break;
            case 4:
              a = Gt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ne ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== o; ) {
                  if (null === (l = ya(o))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = i = l;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              a = Se(n),
              l = [];
            e: {
              var o = zr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Pn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = On;
                    break;
                  case Tr:
                  case Pr:
                  case _r:
                    s = gn;
                    break;
                  case Or:
                    s = zn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = _n;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Me(h, f)) &&
                        c.push(Ur(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  l.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = _n),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(l, o, s, c, !1),
                  null !== u && null !== d && qr(l, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var v = Xn;
              else if (Wn(o))
                if (Kn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Un(l, v, n, a)
                  : (g && g(e, o, r),
                    "focusout" === e &&
                      (g = o._wrapperState) &&
                      g.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Jt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Vn = !0))),
                0 < (g = Gr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!An && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Kt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(l, t);
          });
        }
        function Ur(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Me(e, n)) && r.unshift(Ur(e, i, a)),
              null != (i = Me(e, t)) && r.push(Ur(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var i = t._reactName, l = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Me(n, i)) && l.unshift(Ur(n, s, o))
                : a || (null != (s = Me(n, i)) && l.push(Ur(n, s, o)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var ka = [],
          xa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
        }
        function Ta(e, t) {
          xa++, (ka[xa] = e.current), (e.current = t);
        }
        var Pa = {},
          _a = Ea(Pa),
          Oa = Ea(!1),
          za = Pa;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Na() {
          Ca(Oa), Ca(_a);
        }
        function Aa(e, t, n) {
          if (_a.current !== Pa) throw Error(i(168));
          Ta(_a, t), Ta(Oa, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, $(e) || "Unknown", a));
          return R({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (za = _a.current),
            Ta(_a, e),
            Ta(Oa, Oa.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ia(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(_a),
              Ta(_a, e))
            : Ca(Oa),
            Ta(Oa, n);
        }
        var Da = null,
          Fa = !1,
          Ba = !1;
        function Ha(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Va() {
          if (!Ba && null !== Da) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Fa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Qe(Ze, Va), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var $a = [],
          Wa = 0,
          Ua = null,
          Ga = 0,
          Qa = [],
          qa = 0,
          Ya = null,
          Xa = 1,
          Ka = "";
        function Ja(e, t) {
          ($a[Wa++] = Ga), ($a[Wa++] = Ua), (Ua = e), (Ga = t);
        }
        function Za(e, t, n) {
          (Qa[qa++] = Xa), (Qa[qa++] = Ka), (Qa[qa++] = Ya), (Ya = e);
          var r = Xa;
          e = Ka;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - lt(t) + a;
          if (30 < i) {
            var l = a - (a % 5);
            (i = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Xa = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ka = i + e);
          } else (Xa = (1 << i) | (n << a) | r), (Ka = e);
        }
        function ei(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Ua; )
            (Ua = $a[--Wa]), ($a[Wa] = null), (Ga = $a[--Wa]), ($a[Wa] = null);
          for (; e === Ya; )
            (Ya = Qa[--qa]),
              (Qa[qa] = null),
              (Ka = Qa[--qa]),
              (Qa[qa] = null),
              (Xa = Qa[--qa]),
              (Qa[qa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function li(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function oi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!oi(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && oi(e, t)
                  ? li(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (fi(), Error(i(418)));
            for (; t; ) li(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = w.ReactCurrentBatchConfig;
        function vi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = Ea(null),
          yi = null,
          bi = null,
          wi = null;
        function Si() {
          wi = bi = yi = null;
        }
        function ki(e) {
          var t = gi.current;
          Ca(gi), (e._currentValue = t);
        }
        function xi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (yi = e),
            (wi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (wi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Ti = null;
        function Pi(e) {
          null === Ti ? (Ti = [e]) : Ti.push(e);
        }
        function _i(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pi(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oi(e, r)
          );
        }
        function Oi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var zi = !1;
        function Li(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ni(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ai(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _s))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oi(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pi(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oi(e, n)
          );
        }
        function Ii(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function ji(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = l) : (i = i.next = l), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ri(e, t, n, r) {
          var a = e.updateQueue;
          zi = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === l ? (i = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, o = i; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = R({}, d, f);
                      break e;
                    case 2:
                      zi = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (js |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Di(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function Bi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ni(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ai(e, i, a)) && (nu(t, e, a, r), Ii(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ni(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ai(e, i, a)) && (nu(t, e, a, r), Ii(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ni(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ai(e, a, r)) && (nu(t, e, r, n), Ii(t, e, r));
          },
        };
        function Vi(e, t, n, r, a, i, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function $i(e, t, n) {
          var r = !1,
            a = Pa,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = Ma(t) ? za : _a.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Pa)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Hi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hi.enqueueReplaceState(t, t.state, null);
        }
        function Ui(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fi), Li(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = Ma(t) ? za : _a.current), (a.context = La(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Bi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Hi.enqueueReplaceState(a, a.state, null),
              Ri(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Gi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fi && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function qi(e) {
          return (0, e._init)(e._payload);
        }
        function Yi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Nu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === x
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === M &&
                    qi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Gi(e, t, n)), (r.return = e), r)
              : (((r = Au(n.type, n.key, n.props, null, e.mode, r)).ref = Gi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ru("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = Gi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case M:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              Qi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case M:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
              Qi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Qi(t, r);
            }
            return null;
          }
          function m(a, i, o, s) {
            for (
              var u = null, c = null, d = i, m = (i = 0), v = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, o[m], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = l(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === o.length) return n(a, d), ai && Ja(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((i = l(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ai && Ja(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (v = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (i = l(v, i, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, m),
              u
            );
          }
          function v(a, o, s, u) {
            var c = I(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var d = (c = null), m = o, v = (o = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (o = l(b, o, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), ai && Ja(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = l(y, o, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ai && Ja(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = s.next())
              null !== (y = h(m, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (o = l(y, o, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, v),
              c
            );
          }
          return function e(r, i, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === x &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case S:
                  e: {
                    for (var u = l.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, l.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === M &&
                            qi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, l.props)).ref = Gi(r, c, l)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === x
                      ? (((i = Iu(l.props.children, r.mode, s, l.key)).return =
                          r),
                        (r = i))
                      : (((s = Au(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          s
                        )).ref = Gi(r, i, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case k:
                  e: {
                    for (c = l.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === l.containerInfo &&
                          i.stateNode.implementation === l.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, l.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Du(l, r.mode, s)).return = r), (r = i);
                  }
                  return o(r);
                case M:
                  return e(r, i, (c = l._init)(l._payload), s);
              }
              if (te(l)) return m(r, i, l, s);
              if (I(l)) return v(r, i, l, s);
              Qi(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, l)).return = r), (r = i))
                  : (n(r, i), ((i = Ru(l, r.mode, s)).return = r), (r = i)),
                o(r))
              : n(r, i);
          };
        }
        var Xi = Yi(!0),
          Ki = Yi(!1),
          Ji = {},
          Zi = Ea(Ji),
          el = Ea(Ji),
          tl = Ea(Ji);
        function nl(e) {
          if (e === Ji) throw Error(i(174));
          return e;
        }
        function rl(e, t) {
          switch ((Ta(tl, t), Ta(el, e), Ta(Zi, Ji), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Zi), Ta(Zi, t);
        }
        function al() {
          Ca(Zi), Ca(el), Ca(tl);
        }
        function il(e) {
          nl(tl.current);
          var t = nl(Zi.current),
            n = se(t, e.type);
          t !== n && (Ta(el, e), Ta(Zi, n));
        }
        function ll(e) {
          el.current === e && (Ca(Zi), Ca(el));
        }
        var ol = Ea(0);
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ul = [];
        function cl() {
          for (var e = 0; e < ul.length; e++)
            ul[e]._workInProgressVersionPrimary = null;
          ul.length = 0;
        }
        var dl = w.ReactCurrentDispatcher,
          fl = w.ReactCurrentBatchConfig,
          pl = 0,
          hl = null,
          ml = null,
          vl = null,
          gl = !1,
          yl = !1,
          bl = 0,
          wl = 0;
        function Sl() {
          throw Error(i(321));
        }
        function kl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function xl(e, t, n, r, a, l) {
          if (
            ((pl = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? lo : oo),
            (e = n(r, a)),
            yl)
          ) {
            l = 0;
            do {
              if (((yl = !1), (bl = 0), 25 <= l)) throw Error(i(301));
              (l += 1),
                (vl = ml = null),
                (t.updateQueue = null),
                (dl.current = so),
                (e = n(r, a));
            } while (yl);
          }
          if (
            ((dl.current = io),
            (t = null !== ml && null !== ml.next),
            (pl = 0),
            (vl = ml = hl = null),
            (gl = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function El() {
          var e = 0 !== bl;
          return (bl = 0), e;
        }
        function Cl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vl ? (hl.memoizedState = vl = e) : (vl = vl.next = e), vl
          );
        }
        function Tl() {
          if (null === ml) {
            var e = hl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ml.next;
          var t = null === vl ? hl.memoizedState : vl.next;
          if (null !== t) (vl = t), (ml = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ml = e).memoizedState,
              baseState: ml.baseState,
              baseQueue: ml.baseQueue,
              queue: ml.queue,
              next: null,
            }),
              null === vl ? (hl.memoizedState = vl = e) : (vl = vl.next = e);
          }
          return vl;
        }
        function Pl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _l(e) {
          var t = Tl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ml,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var o = a.next;
              (a.next = l.next), (l.next = o);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((pl & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (hl.lanes |= d),
                  (js |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (wo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (hl.lanes |= l), (js |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ol(e) {
          var t = Tl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (l = e(l, o.action)), (o = o.next);
            } while (o !== a);
            or(l, t.memoizedState) || (wo = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function zl() {}
        function Ll(e, t) {
          var n = hl,
            r = Tl(),
            a = t(),
            l = !or(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            $l(Al.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== vl && 1 & vl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Dl(9, Nl.bind(null, n, r, a, t), void 0, null),
              null === Os)
            )
              throw Error(i(349));
            0 !== (30 & pl) || Ml(n, t, a);
          }
          return a;
        }
        function Ml(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Nl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Il(t) && jl(e);
        }
        function Al(e, t, n) {
          return n(function () {
            Il(t) && jl(e);
          });
        }
        function Il(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function jl(e) {
          var t = Oi(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Rl(e) {
          var t = Cl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, hl, e)),
            [t.memoizedState, e]
          );
        }
        function Dl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fl() {
          return Tl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var a = Cl();
          (hl.flags |= e),
            (a.memoizedState = Dl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hl(e, t, n, r) {
          var a = Tl();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ml) {
            var l = ml.memoizedState;
            if (((i = l.destroy), null !== r && kl(r, l.deps)))
              return void (a.memoizedState = Dl(t, n, i, r));
          }
          (hl.flags |= e), (a.memoizedState = Dl(1 | t, n, i, r));
        }
        function Vl(e, t) {
          return Bl(8390656, 8, e, t);
        }
        function $l(e, t) {
          return Hl(2048, 8, e, t);
        }
        function Wl(e, t) {
          return Hl(4, 2, e, t);
        }
        function Ul(e, t) {
          return Hl(4, 4, e, t);
        }
        function Gl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hl(4, 4, Gl.bind(null, t, e), n)
          );
        }
        function ql() {}
        function Yl(e, t) {
          var n = Tl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var n = Tl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Kl(e, t, n) {
          return 0 === (21 & pl)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (hl.lanes |= n), (js |= n), (e.baseState = !0)),
              t);
        }
        function Jl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fl.transition;
          fl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fl.transition = r);
          }
        }
        function Zl() {
          return Tl().memoizedState;
        }
        function eo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = _i(e, t, n, r))) {
            nu(n, e, r, eu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  o = i(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, l))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Pi(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = _i(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === hl || (null !== t && t === hl);
        }
        function ro(e, t) {
          yl = gl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var io = {
            readContext: Ci,
            useCallback: Sl,
            useContext: Sl,
            useEffect: Sl,
            useImperativeHandle: Sl,
            useInsertionEffect: Sl,
            useLayoutEffect: Sl,
            useMemo: Sl,
            useReducer: Sl,
            useRef: Sl,
            useState: Sl,
            useDebugValue: Sl,
            useDeferredValue: Sl,
            useTransition: Sl,
            useMutableSource: Sl,
            useSyncExternalStore: Sl,
            useId: Sl,
            unstable_isNewReconciler: !1,
          },
          lo = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (Cl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Vl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bl(4194308, 4, Gl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Cl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Cl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Cl().memoizedState = e);
            },
            useState: Rl,
            useDebugValue: ql,
            useDeferredValue: function (e) {
              return (Cl().memoizedState = e);
            },
            useTransition: function () {
              var e = Rl(!1),
                t = e[0];
              return (
                (e = Jl.bind(null, e[1])), (Cl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hl,
                a = Cl();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(i(349));
                0 !== (30 & pl) || Ml(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Vl(Al.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Dl(9, Nl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Cl(),
                t = Os.identifierPrefix;
              if (ai) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - lt(Xa) - 1))).toString(32) + n)),
                  0 < (n = bl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Ci,
            useCallback: Yl,
            useContext: Ci,
            useEffect: $l,
            useImperativeHandle: Ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ul,
            useMemo: Xl,
            useReducer: _l,
            useRef: Fl,
            useState: function () {
              return _l(Pl);
            },
            useDebugValue: ql,
            useDeferredValue: function (e) {
              return Kl(Tl(), ml.memoizedState, e);
            },
            useTransition: function () {
              return [_l(Pl)[0], Tl().memoizedState];
            },
            useMutableSource: zl,
            useSyncExternalStore: Ll,
            useId: Zl,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Ci,
            useCallback: Yl,
            useContext: Ci,
            useEffect: $l,
            useImperativeHandle: Ql,
            useInsertionEffect: Wl,
            useLayoutEffect: Ul,
            useMemo: Xl,
            useReducer: Ol,
            useRef: Fl,
            useState: function () {
              return Ol(Pl);
            },
            useDebugValue: ql,
            useDeferredValue: function (e) {
              var t = Tl();
              return null === ml
                ? (t.memoizedState = e)
                : Kl(t, ml.memoizedState, e);
            },
            useTransition: function () {
              return [Ol(Pl)[0], Tl().memoizedState];
            },
            useMutableSource: zl,
            useSyncExternalStore: Ll,
            useId: Zl,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function ho(e, t, n) {
          ((n = Ni(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Us = r)), fo(0, t);
            }),
            n
          );
        }
        function mo(e, t, n) {
          (n = Ni(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function go(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ni(-1, 1)).tag = 2), Ai(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = w.ReactCurrentOwner,
          wo = !1;
        function So(e, t, n, r) {
          t.child = null === e ? Ki(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function ko(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, a),
            (r = xl(e, t, n, r, i, a)),
            (n = El()),
            null === e || wo
              ? (ai && n && ei(t), (t.flags |= 1), So(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function xo(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Mu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Au(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Eo(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var l = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(l, r) &&
              e.ref === t.ref
            )
              return Wo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Nu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Eo(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((wo = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wo(e, t, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return Po(e, t, n, r, a);
        }
        function Co(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Ns, Ms),
                (Ms |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Ns, Ms),
                  (Ms |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ta(Ns, Ms),
                (Ms |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Ns, Ms),
              (Ms |= r);
          return So(e, t, a, n), t.child;
        }
        function To(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Po(e, t, n, r, a) {
          var i = Ma(n) ? za : _a.current;
          return (
            (i = La(t, i)),
            Ei(t, a),
            (n = xl(e, t, n, r, i, a)),
            (r = El()),
            null === e || wo
              ? (ai && r && ei(t), (t.flags |= 1), So(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function _o(e, t, n, r, a) {
          if (Ma(n)) {
            var i = !0;
            ja(t);
          } else i = !1;
          if ((Ei(t, a), null === t.stateNode))
            $o(e, t), $i(t, n, r), Ui(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              o = t.memoizedProps;
            l.props = o;
            var s = l.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ci(u))
              : (u = La(t, (u = Ma(n) ? za : _a.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Wi(t, l, r, u)),
              (zi = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ri(t, r, l, a),
              (s = t.memoizedState),
              o !== r || f !== s || Oa.current || zi
                ? ("function" === typeof c &&
                    (Bi(t, n, c, r), (s = t.memoizedState)),
                  (o = zi || Vi(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = o))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Mi(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : vi(t.type, o)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ci(s))
                : (s = La(t, (s = Ma(n) ? za : _a.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Wi(t, l, r, s)),
              (zi = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ri(t, r, l, a);
            var h = t.memoizedState;
            o !== d || f !== h || Oa.current || zi
              ? ("function" === typeof p &&
                  (Bi(t, n, p, r), (h = t.memoizedState)),
                (u = zi || Vi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = s),
                (r = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Oo(e, t, n, r, i, a);
        }
        function Oo(e, t, n, r, a, i) {
          To(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ra(t, n, !1), Wo(e, t, i);
          (r = t.stateNode), (bo.current = t);
          var o =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, o, i)))
              : So(e, t, o, i),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function zo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Aa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Aa(0, t.context, !1),
            rl(e, t.containerInfo);
        }
        function Lo(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), So(e, t, n, r), t.child;
        }
        var Mo,
          No,
          Ao,
          Io = { dehydrated: null, treeContext: null, retryLane: 0 };
        function jo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ro(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ol.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ta(ol, 1 & l),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = ju(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = jo(n)),
                      (t.memoizedState = Io),
                      e)
                    : Do(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fo(e, t, o, (r = co(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = ju(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Iu(l, a, o, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, o),
                    (t.child.memoizedState = jo(o)),
                    (t.memoizedState = Io),
                    l);
              if (0 === (1 & t.mode)) return Fo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fo(e, t, o, (r = co((l = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                if (null !== (r = Os)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Oi(e, a), nu(r, e, a, -1));
                }
                return mu(), Fo(e, t, o, (r = co(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Qa[qa++] = Xa),
                    (Qa[qa++] = Ka),
                    (Qa[qa++] = Ya),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Ya = t)),
                  ((t = Do(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (l = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Nu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (o = Nu(r, o))
                : ((o = Iu(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? jo(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Io),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Nu(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Do(e, t) {
          return (
            ((t = ju(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fo(e, t, n, r) {
          return (
            null !== r && hi(r),
            Xi(t, e.child, null, n),
            ((e = Do(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xi(e.return, t, n);
        }
        function Ho(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Vo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((So(e, t, r.children, n), 0 !== (2 & (r = ol.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(ol, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ho(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ho(t, !0, n, null, i);
                break;
              case "together":
                Ho(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $o(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (js |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Nu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Nu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Uo(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Go(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qo(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Go(t), null;
            case 1:
            case 17:
              return Ma(t.type) && Na(), Go(t), null;
            case 3:
              return (
                (r = t.stateNode),
                al(),
                Ca(Oa),
                Ca(_a),
                cl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (lu(ii), (ii = null)))),
                Go(t),
                null
              );
            case 5:
              ll(t);
              var a = nl(tl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                No(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Go(t), null;
                }
                if (((e = nl(Zi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) Fr(Ir[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      X(r, l), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Fr("invalid", r);
                  }
                  for (var s in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      G(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Mo(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ir.length; a++) Fr(Ir[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (l in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (o.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Fr("scroll", e)
                              : null != c && b(e, l, c, s));
                      }
                    switch (n) {
                      case "input":
                        G(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        G(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Go(t), null;
            case 6:
              if (e && null != t.stateNode) Ao(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = nl(tl.current)), nl(Zi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Go(t), null;
            case 13:
              if (
                (Ca(ol),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), pi(), (t.flags |= 98560), (l = !1);
                else if (((l = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(i(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(i(317));
                    l[fa] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Go(t), (l = !1);
                } else null !== ii && (lu(ii), (ii = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ol.current)
                        ? 0 === As && (As = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Go(t),
                  null);
            case 4:
              return (
                al(), null === e && Vr(t.stateNode.containerInfo), Go(t), null
              );
            case 10:
              return ki(t.type._context), Go(t), null;
            case 19:
              if ((Ca(ol), null === (l = t.memoizedState))) return Go(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) Uo(l, !1);
                else {
                  if (0 !== As || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = sl(e))) {
                        for (
                          t.flags |= 128,
                            Uo(l, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(ol, (1 & ol.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ke() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Uo(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Uo(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return Go(t), null;
                  } else
                    2 * Ke() - l.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Uo(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                    (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = ol.current),
                  Ta(ol, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Go(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ms) &&
                    (Go(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Go(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function qo(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && Na(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                al(),
                Ca(Oa),
                Ca(_a),
                cl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ll(t), null;
            case 13:
              if (
                (Ca(ol),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ol), null;
            case 4:
              return al(), null;
            case 10:
              return ki(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Mo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (No = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), nl(Zi.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (l = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          s[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ao = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yo = !1,
          Xo = !1,
          Ko = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function Zo(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && es(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Xo || Zo(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    l = i.destroy;
                  (i = i.tag),
                    void 0 !== l &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      es(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Xo &&
                (Zo(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Eu(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xo = (r = Xo) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Xo = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ko()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(i(160));
                ps(l, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (v) {
                  Eu(e, e.return, v);
                }
                try {
                  ns(5, e, e.return);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && Zo(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                gs(e),
                512 & r && null !== n && Zo(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === l.type &&
                      null != l.name &&
                      K(a, l),
                      be(s, o);
                    var c = be(s, l);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, l);
                        break;
                      case "textarea":
                        ie(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (v) {
                    Eu(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Ke())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xo = (c = Xo) || d), ms(t, e), (Xo = c))
                  : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (f = Jo = d; null !== Jo; ) {
                      switch (((h = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zo(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Eu(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zo(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jo = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, os(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (o) {
              Eu(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              i = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yo;
              if (!l) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Xo;
                o = Yo;
                var u = Xo;
                if (((Yo = l), (Xo = s) && !u))
                  for (Jo = a; null !== Jo; )
                    (s = (l = Jo).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = l), (Jo = s))
                        : ks(a);
                for (; null !== i; ) (Jo = i), bs(i, t, n), (i = i.sibling);
                (Jo = a), (Yo = o), (Xo = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Jo = i))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Di(t, l, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Di(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xo || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, l, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var xs,
          Es = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Ts = w.ReactCurrentOwner,
          Ps = w.ReactCurrentBatchConfig,
          _s = 0,
          Os = null,
          zs = null,
          Ls = 0,
          Ms = 0,
          Ns = Ea(0),
          As = 0,
          Is = null,
          js = 0,
          Rs = 0,
          Ds = 0,
          Fs = null,
          Bs = null,
          Hs = 0,
          Vs = 1 / 0,
          $s = null,
          Ws = !1,
          Us = null,
          Gs = null,
          Qs = !1,
          qs = null,
          Ys = 0,
          Xs = 0,
          Ks = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & _s) ? Ke() : -1 !== Js ? Js : (Js = Ke());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _s) && 0 !== Ls
            ? Ls & -Ls
            : null !== mi.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Ks = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & _s) && e === Os) ||
              (e === Os && (0 === (2 & _s) && (Rs |= n), 4 === As && ou(e, Ls)),
              ru(e, r),
              1 === n &&
                0 === _s &&
                0 === (1 & t.mode) &&
                ((Vs = Ke() + 500), Fa && Va()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var l = 31 - lt(i),
                o = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[l] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (i &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ha(e);
                  })(su.bind(null, e))
                : Ha(su.bind(null, e)),
                la(function () {
                  0 === (6 & _s) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & _s))) throw Error(i(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = _s;
            _s |= 2;
            var l = hu();
            for (
              (Os === e && Ls === t) ||
              (($s = null), (Vs = Ke() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Si(),
              (Cs.current = l),
              (_s = a),
              null !== zs ? (t = 0) : ((Os = null), (Ls = 0), (t = As));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Is), fu(e, 0), ou(e, r), ru(e, Ke()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(i(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = iu(e, l))),
                  1 === t))
              )
                throw ((n = Is), fu(e, 0), ou(e, r), ru(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Su(e, Bs, $s);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, $s), t);
                    break;
                  }
                  Su(e, Bs, $s);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - lt(r);
                    (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, $s), r);
                    break;
                  }
                  Su(e, Bs, $s);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Ke()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Bs), (Bs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function ou(e, t) {
          for (
            t &= ~Ds,
              t &= ~Rs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & _s)) throw Error(i(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ke()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Is), fu(e, 0), ou(e, t), ru(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Bs, $s),
            ru(e, Ke()),
            null
          );
        }
        function uu(e, t) {
          var n = _s;
          _s |= 1;
          try {
            return e(t);
          } finally {
            0 === (_s = n) && ((Vs = Ke() + 500), Fa && Va());
          }
        }
        function cu(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & _s) && ku();
          var t = _s;
          _s |= 1;
          var n = Ps.transition,
            r = bt;
          try {
            if (((Ps.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ps.transition = n), 0 === (6 & (_s = t)) && Va();
          }
        }
        function du() {
          (Ms = Ns.current), Ca(Ns);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zs))
            for (n = zs.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Na();
                  break;
                case 3:
                  al(), Ca(Oa), Ca(_a), cl();
                  break;
                case 5:
                  ll(r);
                  break;
                case 4:
                  al();
                  break;
                case 13:
                case 19:
                  Ca(ol);
                  break;
                case 10:
                  ki(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (zs = e = Nu(e.current, null)),
            (Ls = Ms = t),
            (As = 0),
            (Is = null),
            (Ds = Rs = js = 0),
            (Bs = Fs = null),
            null !== Ti)
          ) {
            for (t = 0; t < Ti.length; t++)
              if (null !== (r = (n = Ti[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var l = i.next;
                  (i.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Ti = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = zs;
            try {
              if ((Si(), (dl.current = io), gl)) {
                for (var r = hl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gl = !1;
              }
              if (
                ((pl = 0),
                (vl = ml = hl = null),
                (yl = !1),
                (bl = 0),
                (Ts.current = null),
                null === n || null === n.return)
              ) {
                (As = 1), (Is = t), (zs = null);
                break;
              }
              e: {
                var l = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = go(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      yo(h, o, s, 0, t),
                      1 & h.mode && vo(l, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vo(l, c, t), mu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = go(o);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yo(g, o, s, 0, t),
                      hi(uo(u, s));
                    break e;
                  }
                }
                (l = u = uo(u, s)),
                  4 !== As && (As = 2),
                  null === Fs ? (Fs = [l]) : Fs.push(l),
                  (l = o);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        ji(l, ho(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          ji(l, mo(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              wu(n);
            } catch (w) {
              (t = w), zs === n && null !== n && (zs = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = io), null === e ? io : e;
        }
        function mu() {
          (0 !== As && 3 !== As && 2 !== As) || (As = 4),
            null === Os ||
              (0 === (268435455 & js) && 0 === (268435455 & Rs)) ||
              ou(Os, Ls);
        }
        function vu(e, t) {
          var n = _s;
          _s |= 2;
          var r = hu();
          for ((Os === e && Ls === t) || (($s = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Si(), (_s = n), (Cs.current = r), null !== zs))
            throw Error(i(261));
          return (Os = null), (Ls = 0), As;
        }
        function gu() {
          for (; null !== zs; ) bu(zs);
        }
        function yu() {
          for (; null !== zs && !Ye(); ) bu(zs);
        }
        function bu(e) {
          var t = xs(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (zs = t),
            (Ts.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qo(n, t, Ms))) return void (zs = n);
            } else {
              if (null !== (n = qo(n, t)))
                return (n.flags &= 32767), void (zs = n);
              if (null === e) return (As = 6), void (zs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (zs = t);
            zs = t = e;
          } while (null !== t);
          0 === As && (As = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            a = Ps.transition;
          try {
            (Ps.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== qs);
                if (0 !== (6 & _s)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, l),
                  e === Os && ((zs = Os = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Ps.transition), (Ps.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = _s;
                  (_s |= 4),
                    (Ts.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === l && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vi(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (S) {
                              Eu(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (_s = s),
                    (bt = o),
                    (Ps.transition = l);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (qs = e), (Ys = a)),
                  0 === (l = e.pendingLanes) && (Gs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Ws) throw ((Ws = !1), (e = Us), (Us = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && ku(),
                  0 !== (1 & (l = e.pendingLanes))
                    ? e === Ks
                      ? Xs++
                      : ((Xs = 0), (Ks = e))
                    : (Xs = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Ps.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== qs) {
            var e = wt(Ys),
              t = Ps.transition,
              n = bt;
            try {
              if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === qs))
                var r = !1;
              else {
                if (((e = qs), (qs = null), (Ys = 0), 0 !== (6 & _s)))
                  throw Error(i(331));
                var a = _s;
                for (_s |= 4, Jo = e.current; null !== Jo; ) {
                  var l = Jo,
                    o = l.child;
                  if (0 !== (16 & Jo.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jo = c; null !== Jo; ) {
                          var d = Jo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jo = f);
                          else
                            for (; null !== Jo; ) {
                              var p = (d = Jo).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jo = p);
                                break;
                              }
                              Jo = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jo = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== o)
                    (o.return = l), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (l = Jo).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Jo = y);
                        break e;
                      }
                      Jo = l.return;
                    }
                }
                var b = e.current;
                for (Jo = b; null !== Jo; ) {
                  var w = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Jo = w);
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 !== (2048 & (s = Jo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Eu(s, s.return, k);
                        }
                      if (s === o) {
                        Jo = null;
                        break e;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), (Jo = S);
                        break e;
                      }
                      Jo = s.return;
                    }
                }
                if (
                  ((_s = a),
                  Va(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ps.transition = t);
            }
          }
          return !1;
        }
        function xu(e, t, n) {
          (e = Ai(e, (t = ho(0, (t = uo(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) xu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Ai(t, (e = mo(t, (e = uo(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Ls & n) === n &&
              (4 === As ||
              (3 === As && (130023424 & Ls) === Ls && 500 > Ke() - Hs)
                ? fu(e, 0)
                : (Ds |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Oi(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Ou(e, t) {
          return Qe(e, t);
        }
        function zu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new zu(e, t, n, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Nu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Au(e, t, n, r, a, l) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Mu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case x:
                return Iu(n.children, a, l, t);
              case E:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Lu(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Lu(13, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case z:
                return (
                  ((e = Lu(19, n, t, a)).elementType = z), (e.lanes = l), e
                );
              case N:
                return ju(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      o = 10;
                      break e;
                    case P:
                      o = 9;
                      break e;
                    case _:
                      o = 11;
                      break e;
                    case L:
                      o = 14;
                      break e;
                    case M:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function ju(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = N),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ru(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, i, l, o, s) {
          return (
            (e = new Fu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Li(i),
            e
          );
        }
        function Hu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Vu(e) {
          if (!e) return Pa;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ma(n)) return Ia(e, n, t);
          }
          return t;
        }
        function $u(e, t, n, r, a, i, l, o, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, i, 0, o, s)).context = Vu(null)),
            (n = e.current),
            ((i = Ni((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ai(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            i = eu(),
            l = tu(a);
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ni(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ai(a, t, l)) && (nu(e, a, l, i), Ii(e, a, l)),
            l
          );
        }
        function Uu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Gu(e, t), (e = e.alternate) && Gu(e, t);
        }
        xs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) wo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zo(t), pi();
                        break;
                      case 5:
                        il(t);
                        break;
                      case 1:
                        Ma(t.type) && ja(t);
                        break;
                      case 4:
                        rl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(gi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(ol, 1 & ol.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ro(e, t, n)
                            : (Ta(ol, 1 & ol.current),
                              null !== (e = Wo(e, t, n)) ? e.sibling : null);
                        Ta(ol, 1 & ol.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(ol, ol.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Co(e, t, n);
                    }
                    return Wo(e, t, n);
                  })(e, t, n)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Ga, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $o(e, t), (e = t.pendingProps);
              var a = La(t, _a.current);
              Ei(t, n), (a = xl(null, t, r, e, a, n));
              var l = El();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((l = !0), ja(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Li(t),
                    (a.updater = Hi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ui(t, r, e, n),
                    (t = Oo(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ai && l && ei(t),
                    So(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($o(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Po(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _o(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ko(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xo(null, t, r, vi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Po(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _o(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 3:
              e: {
                if ((zo(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Mi(e, t),
                  Ri(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Lo(e, t, r, n, (a = uo(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Lo(e, t, r, n, (a = uo(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ki(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Wo(e, t, n);
                    break e;
                  }
                  So(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                il(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                To(e, t),
                So(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Ro(e, t, n);
            case 4:
              return (
                rl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : So(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ko(e, t, r, (a = t.elementType === r ? a : vi(r, a)), n)
              );
            case 7:
              return So(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return So(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value),
                  Ta(gi, r._currentValue),
                  (r._currentValue = o),
                  null !== l)
                )
                  if (or(l.value, o)) {
                    if (l.children === a.children && !Oa.current) {
                      t = Wo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        o = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = Ni(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              xi(l.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag)
                        o = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (o = l.return)) throw Error(i(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          xi(o, n, t),
                          (o = l.sibling);
                      } else o = l.child;
                      if (null !== o) o.return = l;
                      else
                        for (o = l; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (l = o.sibling)) {
                            (l.return = o.return), (o = l);
                            break;
                          }
                          o = o.return;
                        }
                      l = o;
                    }
                So(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                So(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vi((r = t.type), t.pendingProps)),
                xo(e, t, r, (a = vi(r.type, a)), n)
              );
            case 15:
              return Eo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vi(r, a)),
                $o(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), ja(t)) : (e = !1),
                Ei(t, n),
                $i(t, r, a),
                Ui(t, r, a, n),
                Oo(null, t, r, !0, e, n)
              );
            case 19:
              return Vo(e, t, n);
            case 22:
              return Co(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var l = i;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Uu(l);
                o.call(e);
              };
            }
            Wu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Uu(l);
                    i.call(e);
                  };
                }
                var l = $u(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Uu(s);
                  o.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Uu(l);
        }
        (Xu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Wu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Nt.length && 0 !== t && t < Nt[n].priority;
                n++
              );
              Nt.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ke()),
                    0 === (6 & _s) && ((Vs = Ke() + 500), Va()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Oi(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Oi(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Oi(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(i(90));
                      Q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = uu),
          (Oe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Te, Pe, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ue(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(i(200));
            return Hu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ue(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              o = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = $u(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: o.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          x = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            l = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: o,
            props: i,
            _owner: x.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, i, l) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === i ? "." + _(s, 0) : i),
              S(l)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  O(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (T(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + _((o = e[u]), u);
              s += O(o, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += O((o = o.value), t, a, (c = i + _(o, u++)), l);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          N = { transition: null },
          A = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: N,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              l = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (o = x.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > i(s, n))
                u < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), N(k);
            else {
              var t = r(c);
              null !== t && A(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(T), (T = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !O()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var o = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && A(S, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          E = !1,
          C = null,
          T = -1,
          P = 5,
          _ = -1;
        function O() {
          return !(t.unstable_now() - _ < P);
        }
        function z() {
          if (null !== C) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? x() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            M = L.port2;
          (L.port1.onmessage = z),
            (x = function () {
              M.postMessage(null);
            });
        } else
          x = function () {
            g(z, 0);
          };
        function N(e) {
          (C = e), E || ((E = !0), x());
        }
        function A(e, n) {
          T = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), N(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (o = i + o),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(T), (T = -1)) : (v = !0), A(S, i - l)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), N(k))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var o = 2 & a && r;
          "object" == typeof o && !~e.indexOf(o);
          o = t(o)
        )
          Object.getOwnPropertyNames(o).forEach(function (e) {
            l[e] = function () {
              return r[e];
            };
          });
        return (
          (l.default = function () {
            return r;
          }),
          n.d(i, l),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".1ed0c42c.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "portfolio:";
      n.l = function (r, a, i, l) {
        if (e[r]) e[r].push(a);
        else {
          var o, s;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((s = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            n.nc && o.setAttribute("nonce", n.nc),
            o.setAttribute("data-webpack", t + i),
            (o.src = r)),
            (e[r] = [a]);
          var f = function (t, n) {
              (o.onerror = o.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                o.parentNode && o.parentNode.removeChild(o),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = f.bind(null, o.onerror)),
            (o.onload = f.bind(null, o.onload)),
            s && document.head.appendChild(o);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = i));
            var l = n.p + n.u(t),
              o = new Error();
            n.l(
              l,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    l = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + l + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = i),
                    (o.request = l),
                    a[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            i,
            l = r[0],
            o = r[1],
            s = r[2],
            u = 0;
          if (
            l.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in o) n.o(o, a) && (n.m[a] = o[a]);
            if (s) s(n);
          }
          for (t && t(r); u < l.length; u++)
            (i = l[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkportfolio = self.webpackChunkportfolio || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e = n(791),
        t = n.t(e, 2),
        r = n(250);
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      var i = function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        },
        l =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = i(function (e) {
          return (
            l.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        s = o;
      var u = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        c = Math.abs,
        d = String.fromCharCode,
        f = Object.assign;
      function p(e) {
        return e.trim();
      }
      function h(e, t, n) {
        return e.replace(t, n);
      }
      function m(e, t) {
        return e.indexOf(t);
      }
      function v(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function g(e, t, n) {
        return e.slice(t, n);
      }
      function y(e) {
        return e.length;
      }
      function b(e) {
        return e.length;
      }
      function w(e, t) {
        return t.push(e), e;
      }
      var S = 1,
        k = 1,
        x = 0,
        E = 0,
        C = 0,
        T = "";
      function P(e, t, n, r, a, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: i,
          line: S,
          column: k,
          length: l,
          return: "",
        };
      }
      function _(e, t) {
        return f(
          P("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function O() {
        return (C = E > 0 ? v(T, --E) : 0), k--, 10 === C && ((k = 1), S--), C;
      }
      function z() {
        return (C = E < x ? v(T, E++) : 0), k++, 10 === C && ((k = 1), S++), C;
      }
      function L() {
        return v(T, E);
      }
      function M() {
        return E;
      }
      function N(e, t) {
        return g(T, e, t);
      }
      function A(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function I(e) {
        return (S = k = 1), (x = y((T = e))), (E = 0), [];
      }
      function j(e) {
        return (T = ""), e;
      }
      function R(e) {
        return p(N(E - 1, B(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function D(e) {
        for (; (C = L()) && C < 33; ) z();
        return A(e) > 2 || A(C) > 3 ? "" : " ";
      }
      function F(e, t) {
        for (
          ;
          --t &&
          z() &&
          !(C < 48 || C > 102 || (C > 57 && C < 65) || (C > 70 && C < 97));

        );
        return N(e, M() + (t < 6 && 32 == L() && 32 == z()));
      }
      function B(e) {
        for (; z(); )
          switch (C) {
            case e:
              return E;
            case 34:
            case 39:
              34 !== e && 39 !== e && B(C);
              break;
            case 40:
              41 === e && B(e);
              break;
            case 92:
              z();
          }
        return E;
      }
      function H(e, t) {
        for (; z() && e + C !== 57 && (e + C !== 84 || 47 !== L()); );
        return "/*" + N(t, E - 1) + "*" + d(47 === e ? e : z());
      }
      function V(e) {
        for (; !A(L()); ) z();
        return N(e, E);
      }
      var $ = "-ms-",
        W = "-moz-",
        U = "-webkit-",
        G = "comm",
        Q = "rule",
        q = "decl",
        Y = "@keyframes";
      function X(e, t) {
        for (var n = "", r = b(e), a = 0; a < r; a++)
          n += t(e[a], a, e, t) || "";
        return n;
      }
      function K(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case q:
            return (e.return = e.return || e.value);
          case G:
            return "";
          case Y:
            return (e.return = e.value + "{" + X(e.children, r) + "}");
          case Q:
            e.value = e.props.join(",");
        }
        return y((n = X(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function J(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ v(e, 0)) << 2) ^ v(e, 1)) << 2) ^ v(e, 2)) <<
                2) ^
              v(e, 3)
            );
          })(e, t)
        ) {
          case 5103:
            return U + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return U + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return U + e + W + e + $ + e + e;
          case 6828:
          case 4268:
            return U + e + $ + e + e;
          case 6165:
            return U + e + $ + "flex-" + e + e;
          case 5187:
            return (
              U +
              e +
              h(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              e
            );
          case 5443:
            return U + e + $ + "flex-item-" + h(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              U +
              e +
              $ +
              "flex-line-pack" +
              h(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return U + e + $ + h(e, "shrink", "negative") + e;
          case 5292:
            return U + e + $ + h(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              U +
              "box-" +
              h(e, "-grow", "") +
              U +
              e +
              $ +
              h(e, "grow", "positive") +
              e
            );
          case 4554:
            return U + h(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return (
              h(
                h(h(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return h(e, /(image-set\([^]*)/, U + "$1$`$1");
          case 4968:
            return (
              h(
                h(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              U +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return h(e, /(.+)-inline(.+)/, U + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (y(e) - 1 - t > 6)
              switch (v(e, t + 1)) {
                case 109:
                  if (45 !== v(e, t + 4)) break;
                case 102:
                  return (
                    h(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1" +
                        W +
                        (108 == v(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~m(e, "stretch")
                    ? J(h(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== v(e, t + 1)) break;
          case 6444:
            switch (v(e, y(e) - 3 - (~m(e, "!important") && 10))) {
              case 107:
                return h(e, ":", ":" + U) + e;
              case 101:
                return (
                  h(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      U +
                      (45 === v(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      U +
                      "$2$3$1" +
                      $ +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (v(e, t + 11)) {
              case 114:
                return U + e + $ + h(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return U + e + $ + h(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return U + e + $ + h(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return U + e + $ + e + e;
        }
        return e;
      }
      function Z(e) {
        return j(ee("", null, null, null, [""], (e = I(e)), 0, [0], e));
      }
      function ee(e, t, n, r, a, i, l, o, s) {
        for (
          var u = 0,
            c = 0,
            f = l,
            p = 0,
            v = 0,
            g = 0,
            b = 1,
            S = 1,
            k = 1,
            x = 0,
            E = "",
            C = a,
            T = i,
            P = r,
            _ = E;
          S;

        )
          switch (((g = x), (x = z()))) {
            case 40:
              if (108 != g && 58 == _.charCodeAt(f - 1)) {
                -1 != m((_ += h(R(x), "&", "&\f")), "&\f") && (k = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              _ += R(x);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              _ += D(g);
              break;
            case 92:
              _ += F(M() - 1, 7);
              continue;
            case 47:
              switch (L()) {
                case 42:
                case 47:
                  w(ne(H(z(), M()), t, n), s);
                  break;
                default:
                  _ += "/";
              }
              break;
            case 123 * b:
              o[u++] = y(_) * k;
            case 125 * b:
            case 59:
            case 0:
              switch (x) {
                case 0:
                case 125:
                  S = 0;
                case 59 + c:
                  v > 0 &&
                    y(_) - f &&
                    w(
                      v > 32
                        ? re(_ + ";", r, n, f - 1)
                        : re(h(_, " ", "") + ";", r, n, f - 2),
                      s
                    );
                  break;
                case 59:
                  _ += ";";
                default:
                  if (
                    (w(
                      (P = te(_, t, n, u, c, a, o, E, (C = []), (T = []), f)),
                      i
                    ),
                    123 === x)
                  )
                    if (0 === c) ee(_, t, P, P, C, i, f, o, T);
                    else
                      switch (p) {
                        case 100:
                        case 109:
                        case 115:
                          ee(
                            e,
                            P,
                            P,
                            r &&
                              w(te(e, P, P, 0, 0, a, o, E, a, (C = []), f), T),
                            a,
                            T,
                            f,
                            o,
                            r ? C : T
                          );
                          break;
                        default:
                          ee(_, P, P, P, [""], T, 0, o, T);
                      }
              }
              (u = c = v = 0), (b = k = 1), (E = _ = ""), (f = l);
              break;
            case 58:
              (f = 1 + y(_)), (v = g);
            default:
              if (b < 1)
                if (123 == x) --b;
                else if (125 == x && 0 == b++ && 125 == O()) continue;
              switch (((_ += d(x)), x * b)) {
                case 38:
                  k = c > 0 ? 1 : ((_ += "\f"), -1);
                  break;
                case 44:
                  (o[u++] = (y(_) - 1) * k), (k = 1);
                  break;
                case 64:
                  45 === L() && (_ += R(z())),
                    (p = L()),
                    (c = f = y((E = _ += V(M())))),
                    x++;
                  break;
                case 45:
                  45 === g && 2 == y(_) && (b = 0);
              }
          }
        return i;
      }
      function te(e, t, n, r, a, i, l, o, s, u, d) {
        for (
          var f = a - 1, m = 0 === a ? i : [""], v = b(m), y = 0, w = 0, S = 0;
          y < r;
          ++y
        )
          for (
            var k = 0, x = g(e, f + 1, (f = c((w = l[y])))), E = e;
            k < v;
            ++k
          )
            (E = p(w > 0 ? m[k] + " " + x : h(x, /&\f/g, m[k]))) &&
              (s[S++] = E);
        return P(e, t, n, 0 === a ? Q : o, s, u, d);
      }
      function ne(e, t, n) {
        return P(e, t, n, G, d(C), g(e, 2, -2), 0);
      }
      function re(e, t, n, r) {
        return P(e, t, n, q, g(e, 0, r), g(e, r + 1, -1), r);
      }
      var ae = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = L()), 38 === r && 12 === a && (t[n] = 1), !A(a);

          )
            z();
          return N(e, E);
        },
        ie = function (e, t) {
          return j(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (A(r)) {
                  case 0:
                    38 === r && 12 === L() && (t[n] = 1),
                      (e[n] += ae(E - 1, t, n));
                    break;
                  case 2:
                    e[n] += R(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (e[++n] = 58 === L() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += d(r);
                }
              } while ((r = z()));
              return e;
            })(I(e), t)
          );
        },
        le = new WeakMap(),
        oe = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || le.get(n)) &&
              !r
            ) {
              le.set(e, !0);
              for (
                var a = [], i = ie(t, a), l = n.props, o = 0, s = 0;
                o < i.length;
                o++
              )
                for (var u = 0; u < l.length; u++, s++)
                  e.props[s] = a[o]
                    ? i[o].replace(/&\f/g, l[u])
                    : l[u] + " " + i[o];
            }
          }
        },
        se = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        ue = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case q:
                  e.return = J(e.value, e.length);
                  break;
                case Y:
                  return X([_(e, { value: h(e.value, "@", "@" + U) })], r);
                case Q:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return X(
                            [
                              _(e, {
                                props: [h(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return X(
                            [
                              _(e, {
                                props: [
                                  h(t, /:(plac\w+)/, ":-webkit-input-$1"),
                                ],
                              }),
                              _(e, { props: [h(t, /:(plac\w+)/, ":-moz-$1")] }),
                              _(e, {
                                props: [h(t, /:(plac\w+)/, $ + "input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        ce = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r = e.stylisPlugins || ue;
          var a,
            i,
            l = {},
            o = [];
          (a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  l[t[n]] = !0;
                o.push(e);
              }
            );
          var s,
            c,
            d = [
              K,
              ((c = function (e) {
                s.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && c(e));
              }),
            ],
            f = (function (e) {
              var t = b(e);
              return function (n, r, a, i) {
                for (var l = "", o = 0; o < t; o++) l += e[o](n, r, a, i) || "";
                return l;
              };
            })([oe, se].concat(r, d));
          i = function (e, t, n, r) {
            (s = n),
              (function (e) {
                X(Z(e), f);
              })(e ? e + "{" + t.styles + "}" : t.styles),
              r && (p.inserted[t.name] = !0);
          };
          var p = {
            key: t,
            sheet: new u({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: l,
            registered: {},
            insert: i,
          };
          return p.sheet.hydrate(o), p;
        };
      var de = function (e) {
          for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (a) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        },
        fe = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        pe = /[A-Z]|^ms/g,
        he = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        me = function (e) {
          return 45 === e.charCodeAt(1);
        },
        ve = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        ge = i(function (e) {
          return me(e) ? e : e.replace(pe, "-$&").toLowerCase();
        }),
        ye = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(he, function (e, t, n) {
                  return (we = { name: t, styles: n, next: we }), t;
                });
          }
          return 1 === fe[e] || me(e) || "number" !== typeof t || 0 === t
            ? t
            : t + "px";
        };
      function be(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (we = { name: n.name, styles: n.styles, next: we }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (we = { name: r.name, styles: r.styles, next: we }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var a = 0; a < n.length; a++) r += be(e, t, n[a]) + ";";
              else
                for (var i in n) {
                  var l = n[i];
                  if ("object" !== typeof l)
                    null != t && void 0 !== t[l]
                      ? (r += i + "{" + t[l] + "}")
                      : ve(l) && (r += ge(i) + ":" + ye(i, l) + ";");
                  else if (
                    !Array.isArray(l) ||
                    "string" !== typeof l[0] ||
                    (null != t && void 0 !== t[l[0]])
                  ) {
                    var o = be(e, t, l);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        r += ge(i) + ":" + o + ";";
                        break;
                      default:
                        r += i + "{" + o + "}";
                    }
                  } else
                    for (var s = 0; s < l.length; s++)
                      ve(l[s]) && (r += ge(i) + ":" + ye(i, l[s]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var a = we,
                i = n(e);
              return (we = a), be(e, t, i);
            }
        }
        if (null == t) return n;
        var l = t[n];
        return void 0 !== l ? l : n;
      }
      var we,
        Se = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var ke = function (e, t, n) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            a = "";
          we = void 0;
          var i = e[0];
          null == i || void 0 === i.raw
            ? ((r = !1), (a += be(n, t, i)))
            : (a += i[0]);
          for (var l = 1; l < e.length; l++)
            (a += be(n, t, e[l])), r && (a += i[l]);
          Se.lastIndex = 0;
          for (var o, s = ""; null !== (o = Se.exec(a)); ) s += "-" + o[1];
          return { name: de(a) + s, styles: a, next: we };
        },
        xe = (0, e.createContext)(
          "undefined" !== typeof HTMLElement ? ce({ key: "css" }) : null
        );
      xe.Provider;
      var Ee = function (t) {
          return (0, e.forwardRef)(function (n, r) {
            var a = (0, e.useContext)(xe);
            return t(n, a, r);
          });
        },
        Ce = (0, e.createContext)({});
      t.useInsertionEffect && t.useInsertionEffect;
      function Te(e, t, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
          }),
          r
        );
      }
      var Pe = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        _e = s,
        Oe = function (e) {
          return "theme" !== e;
        },
        ze = function (e) {
          return "string" === typeof e && e.charCodeAt(0) > 96 ? _e : Oe;
        },
        Le = function (e, t, n) {
          var r;
          if (t) {
            var a = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && a
                ? function (t) {
                    return e.__emotion_forwardProp(t) && a(t);
                  }
                : a;
          }
          return (
            "function" !== typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        Me = t.useInsertionEffect
          ? t.useInsertionEffect
          : function (e) {
              e();
            };
      var Ne = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          Pe(t, n, r);
          var a;
          (a = function () {
            return (function (e, t, n) {
              Pe(e, t, n);
              var r = e.key + "-" + t.name;
              if (void 0 === e.inserted[t.name]) {
                var a = t;
                do {
                  e.insert(t === a ? "." + r : "", a, e.sheet, !0),
                    (a = a.next);
                } while (void 0 !== a);
              }
            })(t, n, r);
          }),
            Me(a);
          return null;
        },
        Ae = function t(n, r) {
          var i,
            l,
            o = n.__emotion_real === n,
            s = (o && n.__emotion_base) || n;
          void 0 !== r && ((i = r.label), (l = r.target));
          var u = Le(n, r, o),
            c = u || ze(s),
            d = !c("as");
          return function () {
            var f = arguments,
              p =
                o && void 0 !== n.__emotion_styles
                  ? n.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== i && p.push("label:" + i + ";"),
              null == f[0] || void 0 === f[0].raw)
            )
              p.push.apply(p, f);
            else {
              0, p.push(f[0][0]);
              for (var h = f.length, m = 1; m < h; m++) p.push(f[m], f[0][m]);
            }
            var v = Ee(function (t, n, r) {
              var a = (d && t.as) || s,
                i = "",
                o = [],
                f = t;
              if (null == t.theme) {
                for (var h in ((f = {}), t)) f[h] = t[h];
                f.theme = (0, e.useContext)(Ce);
              }
              "string" === typeof t.className
                ? (i = Te(n.registered, o, t.className))
                : null != t.className && (i = t.className + " ");
              var m = ke(p.concat(o), n.registered, f);
              (i += n.key + "-" + m.name), void 0 !== l && (i += " " + l);
              var v = d && void 0 === u ? ze(a) : c,
                g = {};
              for (var y in t) (d && "as" === y) || (v(y) && (g[y] = t[y]));
              return (
                (g.className = i),
                (g.ref = r),
                (0, e.createElement)(
                  e.Fragment,
                  null,
                  (0, e.createElement)(Ne, {
                    cache: n,
                    serialized: m,
                    isStringTag: "string" === typeof a,
                  }),
                  (0, e.createElement)(a, g)
                )
              );
            });
            return (
              (v.displayName =
                void 0 !== i
                  ? i
                  : "Styled(" +
                    ("string" === typeof s
                      ? s
                      : s.displayName || s.name || "Component") +
                    ")"),
              (v.defaultProps = n.defaultProps),
              (v.__emotion_real = v),
              (v.__emotion_base = s),
              (v.__emotion_styles = p),
              (v.__emotion_forwardProp = u),
              Object.defineProperty(v, "toString", {
                value: function () {
                  return "." + l;
                },
              }),
              (v.withComponent = function (e, n) {
                return t(
                  e,
                  a({}, r, n, { shouldForwardProp: Le(v, n, !0) })
                ).apply(void 0, p);
              }),
              v
            );
          };
        },
        Ie = Ae.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        Ie[e] = Ie(e);
      });
      var je = Ie,
        Re = je.div(function () {
          return [
            {
              textAlign: "justify",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              fontWeight: "300",
              paddingTop: "0.5rem",
              "@media (min-width: 768px)": {
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            },
          ];
        }),
        De = je.div(function () {
          return [
            {
              margin: "4rem",
              padding: "1rem",
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              "--tw-shadow":
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
              borderWidth: "1px",
              "--tw-border-opacity": "1",
              borderColor: "rgba(249, 250, 251, var(--tw-border-opacity))",
              "@media (min-width: 768px)": { padding: "4rem" },
            },
          ];
        }),
        Fe = je.div(function () {
          return [{ display: "flex", justifyContent: "center" }];
        }),
        Be = je.div(function () {
          return [
            {
              transitionProperty:
                "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "300ms",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              borderRadius: "0.5rem",
              "--tw-bg-opacity": "1",
              backgroundColor: "rgba(96, 165, 250, var(--tw-bg-opacity))",
              textAlign: "center",
              fontSize: "0.75rem",
              lineHeight: "1rem",
              fontWeight: "600",
              "--tw-shadow":
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
              ":hover": {
                "--tw-scale-x": "1.1",
                "--tw-scale-y": "1.1",
                transform: "var(--tw-transform)",
              },
              "@media (min-width: 768px)": {
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              },
            },
          ];
        }),
        He = je.div(function () {
          return [
            {
              fontSize: "1.5rem",
              lineHeight: "2rem",
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "1rem",
              "@media (min-width: 768px)": {
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                marginBottom: "2rem",
              },
            },
          ];
        }),
        Ve = je.span(function () {
          return [
            {
              fontWeight: "600",
              textAlign: "justify",
              fontSize: "0.75rem",
              lineHeight: "1rem",
              "@media (min-width: 768px)": {
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              },
            },
          ];
        }),
        $e = je.span(function () {
          return [
            {
              fontWeight: "300",
              textAlign: "justify",
              fontSize: "0.75rem",
              lineHeight: "1rem",
              "@media (min-width: 768px)": {
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              },
            },
          ];
        }),
        We = je.div(function () {
          return [
            {
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              textAlign: "center",
              paddingTop: "3rem",
              justifyContent: "center",
              fontWeight: "700",
              "@media (min-width: 768px)": {
                fontSize: "3rem",
                lineHeight: "1",
              },
            },
          ];
        }),
        Ue = je.a(function () {
          return [{ marginLeft: "3rem", marginRight: "3rem" }];
        }),
        Ge = je.img(function () {
          return [
            {
              transitionProperty:
                "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "300ms",
              borderRadius: "9999px",
              ":hover": {
                "--tw-scale-x": "1.05",
                "--tw-scale-y": "1.05",
                transform: "var(--tw-transform)",
              },
              marginTop: "auto",
              marginBottom: "auto",
              "@media (min-width: 768px)": { maxHeight: "18rem" },
            },
          ];
        }),
        Qe = je.div(function () {
          return [
            {
              maxWidth: "24rem",
              marginLeft: "auto",
              marginRight: "auto",
              "@media (min-width: 768px)": {
                maxWidth: "32rem",
                marginLeft: "4rem",
                marginRight: "4rem",
              },
            },
          ];
        }),
        qe = je.div(function () {
          return [
            {
              display: "grid",
              "@media (min-width: 1024px)": {
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              },
            },
          ];
        }),
        Ye = je.div(function () {
          return [
            {
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "0.75rem",
              "--tw-text-opacity": "1",
              color: "rgba(255, 255, 255, var(--tw-text-opacity))",
              "@media (min-width: 768px)": { gap: "2rem" },
            },
          ];
        }),
        Xe = je.div(function () {
          return [
            {
              fontSize: "0.75rem",
              lineHeight: "1rem",
              textAlign: "right",
              padding: "1rem",
              "@media (min-width: 768px)": {
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "700",
              },
            },
          ];
        }),
        Ke = n(184),
        Je = function () {
          return (0, Ke.jsx)(We, { children: "Matt Pietryka" });
        },
        Ze = n.p + "static/media/profilePicture.92c0823dd21c991ce741.png",
        et =
          "My name is Mateusz Pietryka, I am 29 years old and I am a 3rd year Computer Science Student. I am very interested in Front-end Design and Development.",
        tt =
          "I have discovered my passion for programming not long before Covid-19 pandemic started and I decided to pursue this as my career. After a short research about the available courses, I have applied to London Metropolitan Unviersity via clearing and started my course within 2 months.",
        nt =
          "As the time passes, I feel like I have made the best decision of my life. Studying Computer Science taught me much more than just programming languages, it taught me critical thinking, problem solving and that I can achieve anything if I try hard enough.",
        rt = function () {
          return (0, Ke.jsx)(De, {
            children: (0, Ke.jsxs)(qe, {
              children: [
                (0, Ke.jsx)(Fe, { children: (0, Ke.jsx)(Ge, { src: Ze }) }),
                (0, Ke.jsxs)(Qe, {
                  children: [
                    (0, Ke.jsx)(He, { children: "About me" }),
                    (0, Ke.jsx)(Re, { children: et }),
                    (0, Ke.jsx)(Re, { children: tt }),
                    (0, Ke.jsx)(Re, { children: nt }),
                  ],
                }),
              ],
            }),
          });
        },
        at = function () {
          return (0, Ke.jsxs)(De, {
            children: [
              (0, Ke.jsx)(He, { children: "Technologies I'm familiar with" }),
              (0, Ke.jsxs)(Ye, {
                children: [
                  (0, Ke.jsx)(Be, { children: "HTML5" }),
                  (0, Ke.jsx)(Be, { children: "CSS3" }),
                  (0, Ke.jsx)(Be, { children: "Tailwind CSS" }),
                  (0, Ke.jsx)(Be, { children: "BootStrap" }),
                  (0, Ke.jsx)(Be, { children: "Java" }),
                  (0, Ke.jsx)(Be, { children: "SQL" }),
                ],
              }),
            ],
          });
        },
        it = "London Metropolitan University BSc (Hons) Computer Science ",
        lt = "(2020 - Present)",
        ot = function () {
          return (0, Ke.jsxs)(De, {
            children: [
              (0, Ke.jsx)(He, { children: "Relevant Education" }),
              (0, Ke.jsx)(Fe, {
                children: (0, Ke.jsx)("ul", {
                  children: (0, Ke.jsxs)("li", {
                    children: [
                      (0, Ke.jsx)(Ve, { children: it }),
                      (0, Ke.jsx)($e, { children: lt }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        st = "Clipics - Front-end Develope",
        ut =
          "I was in charge of designing and developing a modern, responsive user interface for Clipics webapp. I have achieved that using Tailwind CSS and Tailwind Elements. Working on this project taught me how to develop the sites that translate well between different screen sizes and the importance of it.",
        ct = " (June 2020 - Present) - ",
        dt = function () {
          return (0, Ke.jsxs)(De, {
            children: [
              (0, Ke.jsx)(He, { children: "Relevant Experience" }),
              (0, Ke.jsx)(Fe, {
                children: (0, Ke.jsx)("ul", {
                  children: (0, Ke.jsxs)("li", {
                    children: [
                      (0, Ke.jsx)(Ve, { children: st }),
                      (0, Ke.jsx)($e, { children: ct }),
                      (0, Ke.jsx)($e, { children: ut }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        ft = function () {
          return (0, Ke.jsxs)(Ke.Fragment, {
            children: [
              (0, Ke.jsxs)(Fe, {
                children: [
                  (0, Ke.jsx)(Ue, {
                    href: "https://www.linkedin.com/in/mateusz-pietryka-4a7288239",
                    children: (0, Ke.jsx)("img", {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABG0lEQVRIie3Wv0oDQRDH8U+CEQRB0MbO1iKNlWIvGMSH8BF8DktfwNJ3sAuClZW1TRIEwUYbxX9nc8HLsujmcheU5AfL7c7Nzndmud095ppFHWCArKLWRycF3K8QOmy9ENKIgLOU7EpohNVMmPCISzzXkk5BxSV6wkZu38K78ss9FvgqeNebFvgF27n9EJ/TAmf4wN0EwCh4ISGRk/y5iGPc4yy3tbGJU9xiHUfYTakwVJjpcBss5+Prgu8OVoL5TVxE4lQKHmotGO/9Bk7Zxz+pgS4ecF6w35QJNk7F7YLfq+9vphWJM6JJK14t9FtYyvtvMViV4PCsj539tYBLa/bAf/o+rkUx8KAGTj/FqaPa/64e9issYq5/oi/QpMALecAO5wAAAABJRU5ErkJggg==",
                      alt: "linkedin",
                    }),
                  }),
                  (0, Ke.jsx)(Ue, {
                    href: "https://github.com/mpietryka",
                    children: (0, Ke.jsx)("img", {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB0ElEQVRIie3WPWtUQRTG8V8SMEE7C41JDBK1tVZBIgo2QhJBrW0sFNQirZXfQiW+oJUQMJhgI/gJbKy0E7QLRFzBl5i4Fvdec507921XUuWByzJzz3P+58zO7Cw72iYNtIidxCzO4xAm0vlP+IBlLOHj/ypuHHexgW7Ns4lnaWF9aQ5fGwDDp4OZXqG3JB20hea7v9kWOtcnNA9v3PmE4vIexzEs1IAW0riTubkOxpqAY8mHg9WYxj4MpZ+n0/lMI4H/fh10Unz3HmlScU5HA/+GreMHBgPDbNpFqP0twaPBeCjNXaqXit0utoRmWgryrFQFv4+AT/QIPhXkeVcV3ImAh6sMFdoT5OnkX4bfcTjWB3gkGP+zd0LQaiTBdI/g0BfL/Vcrikv9RrH6Ou3G2yDPiyrDfATcxSsNf30k5/V1JMd8lekg1kvg3/AAlzAV+KZwGY/wPeJdx4G6ip/kDFfwPFLAucBzBj9KCu7icR2U5OJfSw2r2IunaeLPuF3iu1MC/aJBt5ku2roWrzb0HI5AN3GhKTTTdfyW/Kc6q35nD0ag19pCM81IljefsEpZzJoeOg01hnv41QD8Ew8Vb6e+NIob2FXyfkDzs76j7dMfXTjhKzmestYAAAAASUVORK5CYII=",
                      alt: "logo",
                    }),
                  }),
                ],
              }),
              (0, Ke.jsx)(Xe, { children: "Created by Mateusz Pietryka" }),
            ],
          });
        };
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ht(e, t) {
        if (e) {
          if ("string" === typeof e) return pt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? pt(e, t)
              : void 0
          );
        }
      }
      function mt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                l = !0,
                o = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  l = !0
                );
              } catch (s) {
                (o = !0), (a = s);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          ht(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function vt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function gt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return pt(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ht(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function yt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function bt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function wt(e, t, n) {
        return (
          t && bt(e.prototype, t),
          n && bt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function St(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function kt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : St(t[n]) &&
              St(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              kt(e[n], t[n]);
        });
      }
      var xt = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function Et() {
        var e = "undefined" !== typeof document ? document : {};
        return kt(e, xt), e;
      }
      var Ct = {
        document: xt,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function Tt() {
        var e = "undefined" !== typeof window ? window : {};
        return kt(e, Ct), e;
      }
      function Pt(e) {
        return (
          (Pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Pt(e)
        );
      }
      function _t(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ot(e, t) {
        if (t && ("object" === Pt(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return _t(e);
      }
      function zt(e, t) {
        return (
          (zt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          zt(e, t)
        );
      }
      function Lt(e) {
        return (
          (Lt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Lt(e)
        );
      }
      function Mt() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Nt(e, t, n) {
        return (
          (Nt = Mt()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && zt(a, n.prototype), a;
              }),
          Nt.apply(null, arguments)
        );
      }
      function At(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (At = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Nt(e, arguments, Lt(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              zt(r, e)
            );
          }),
          At(e)
        );
      }
      var It = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && zt(e, t);
        })(n, e);
        var t = (function (e) {
          var t = Mt();
          return function () {
            var n,
              r = Lt(e);
            if (t) {
              var a = Lt(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Ot(this, n);
          };
        })(n);
        function n(e) {
          var r;
          return (
            yt(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })(_t((r = t.call.apply(t, [this].concat(gt(e || [])))))),
            Ot(r)
          );
        }
        return wt(n);
      })(At(Array));
      function jt() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, gt(jt(e))) : t.push(e);
          }),
          t
        );
      }
      function Rt(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Dt(e, t) {
        var n = Tt(),
          r = Et(),
          a = [];
        if (!t && e instanceof It) return e;
        if (!e) return new It(a);
        if ("string" === typeof e) {
          var i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var l = "div";
            0 === i.indexOf("<li") && (l = "ul"),
              0 === i.indexOf("<tr") && (l = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (l = "tr"),
              0 === i.indexOf("<tbody") && (l = "table"),
              0 === i.indexOf("<option") && (l = "select");
            var o = r.createElement(l);
            o.innerHTML = i;
            for (var s = 0; s < o.childNodes.length; s += 1)
              a.push(o.childNodes[s]);
          } else
            a = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), a = 0;
                a < r.length;
                a += 1
              )
                n.push(r[a]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof It) return e;
          a = e;
        }
        return new It(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(a)
        );
      }
      Dt.fn = It.prototype;
      var Ft = "resize scroll".split(" ");
      function Bt(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var a = 0; a < this.length; a += 1)
              Ft.indexOf(e) < 0 &&
                (e in this[a] ? this[a][e]() : Dt(this[a]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      Bt("click"),
        Bt("blur"),
        Bt("focus"),
        Bt("focusin"),
        Bt("focusout"),
        Bt("keyup"),
        Bt("keydown"),
        Bt("keypress"),
        Bt("submit"),
        Bt("change"),
        Bt("mousedown"),
        Bt("mousemove"),
        Bt("mouseup"),
        Bt("mouseenter"),
        Bt("mouseleave"),
        Bt("mouseout"),
        Bt("mouseover"),
        Bt("touchstart"),
        Bt("touchend"),
        Bt("touchmove"),
        Bt("resize"),
        Bt("scroll");
      var Ht = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jt(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, gt(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jt(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, gt(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jt(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            Rt(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jt(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), Dt(t).is(a)))
                i.apply(t, n);
              else
                for (var r = Dt(t).parents(), l = 0; l < r.length; l += 1)
                  Dt(r[l]).is(a) && i.apply(r[l], n);
            }
          }
          function s(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: o,
                  }),
                  f.addEventListener(p, o, l);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var h = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                  f.dom7Listeners[h].push({ listener: i, proxyListener: s }),
                  f.addEventListener(h, s, l);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var o = r.split(" "), s = 0; s < o.length; s += 1)
            for (var u = o[s], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!a && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var h = f[p];
                  (i && h.listener === i) ||
                  (i &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === i)
                    ? (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1))
                    : i ||
                      (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = Tt(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = n[0].split(" "), i = n[1], l = 0; l < a.length; l += 1)
            for (var o = a[l], s = 0; s < this.length; s += 1) {
              var u = this[s];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(o, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = Tt();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = Tt(),
              t = Et(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              i = n.clientTop || a.clientTop || 0,
              l = n.clientLeft || a.clientLeft || 0,
              o = n === e ? e.scrollY : n.scrollTop,
              s = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + o - i, left: r.left + s - l };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = Tt();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var a in e) this[n].style[a] = e[a];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = Tt(),
            a = Et(),
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = Dt(e), n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          if (e === a) return i === a;
          if (e === r) return i === r;
          if (e.nodeType || e instanceof It) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return Dt([]);
          if (e < 0) {
            var n = t + e;
            return Dt(n < 0 ? [] : [this[n]]);
          }
          return Dt([this[e]]);
        },
        append: function () {
          for (var e, t = Et(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild; )
                  this[r].appendChild(a.firstChild);
              } else if (e instanceof It)
                for (var i = 0; i < e.length; i += 1) this[r].appendChild(e[i]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = Et();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var a = r.createElement("div");
              for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof It)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Dt(this[0].nextElementSibling).is(e)
                ? Dt([this[0].nextElementSibling])
                : Dt([])
              : this[0].nextElementSibling
              ? Dt([this[0].nextElementSibling])
              : Dt([])
            : Dt([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Dt([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? Dt(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Dt(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && Dt(t.previousElementSibling).is(e)
                ? Dt([t.previousElementSibling])
                : Dt([])
              : t.previousElementSibling
              ? Dt([t.previousElementSibling])
              : Dt([]);
          }
          return Dt([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Dt([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? Dt(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Dt(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Dt(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Dt(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? Dt(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return Dt(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? Dt([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return Dt(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, a = 0; a < r.length; a += 1)
              (e && !Dt(r[a]).is(e)) || t.push(r[a]);
          return Dt(t);
        },
        filter: function (e) {
          return Dt(Rt(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Ht).forEach(function (e) {
        Object.defineProperty(Dt.fn, e, { value: Ht[e], writable: !0 });
      });
      var Vt,
        $t,
        Wt,
        Ut = Dt;
      function Gt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Qt(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function qt() {
        return Date.now();
      }
      function Yt(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          a,
          i = Tt(),
          l = (function (e) {
            var t,
              n = Tt();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = l.transform || l.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (a =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function Xt(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Kt(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function Jt() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !Kt(r))
            for (
              var a = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                i = 0,
                l = a.length;
              i < l;
              i += 1
            ) {
              var o = a[i],
                s = Object.getOwnPropertyDescriptor(r, o);
              void 0 !== s &&
                s.enumerable &&
                (Xt(e[o]) && Xt(r[o])
                  ? r[o].__swiper__
                    ? (e[o] = r[o])
                    : Jt(e[o], r[o])
                  : !Xt(e[o]) && Xt(r[o])
                  ? ((e[o] = {}),
                    r[o].__swiper__ ? (e[o] = r[o]) : Jt(e[o], r[o]))
                  : (e[o] = r[o]));
            }
        }
        return e;
      }
      function Zt(e, t, n) {
        e.style.setProperty(t, n);
      }
      function en(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          a = e.side,
          i = Tt(),
          l = -n.translate,
          o = null,
          s = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(n.cssModeFrameID);
        var u = r > l ? "next" : "prev",
          c = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === o && (o = t);
          var u = Math.max(Math.min((t - o) / s, 1), 0),
            d = 0.5 - Math.cos(u * Math.PI) / 2,
            f = l + d * (r - l);
          if ((c(f, r) && (f = r), n.wrapperEl.scrollTo(Gt({}, a, f)), c(f, r)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(Gt({}, a, f));
              }),
              void i.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = i.requestAnimationFrame(e);
        })();
      }
      function tn() {
        return (
          Vt ||
            (Vt = (function () {
              var e = Tt(),
                t = Et();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Vt
        );
      }
      function nn(e) {
        return (
          void 0 === e && (e = {}),
          $t ||
            ($t = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = tn(),
                r = Tt(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = r.screen.width,
                s = r.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = i.match(/(iPad).*OS\s([\d_]+)/),
                d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a,
                h = "MacIntel" === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(o, "x").concat(s)) >= 0 &&
                  ((c = i.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                u && !p && ((l.os = "android"), (l.android = !0)),
                (c || f || d) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          $t
        );
      }
      function rn() {
        return (
          Wt ||
            (Wt = (function () {
              var e = Tt();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Wt
        );
      }
      var an = {
        on: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          var a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++)
              i[l] = arguments[l];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny: function (e, t) {
          var n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, a) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if (!r.eventsListeners) return r;
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((e = i[0]), (t = i.slice(1, i.length)), (n = r))
            : ((e = i[0].events), (t = i[0].data), (n = i[0].context || r)),
            t.unshift(n);
          var o = Array.isArray(e) ? e : e.split(" ");
          return (
            o.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(gt(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var ln = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            a = e.$wrapperEl,
            i = e.size,
            l = e.rtlTranslate,
            o = e.wrongRTL,
            s = e.virtual && r.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            c = a.children(".".concat(e.params.slideClass)),
            d = s ? e.virtual.slides.length : c.length,
            f = [],
            p = [],
            h = [],
            m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          var v = r.slidesOffsetAfter;
          "function" === typeof v && (v = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            y = e.slidesGrid.length,
            b = r.spaceBetween,
            w = -m,
            S = 0,
            k = 0;
          if ("undefined" !== typeof i) {
            "string" === typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * i),
              (e.virtualSize = -b),
              l
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (Zt(e.wrapperEl, "--swiper-centered-offset-before", ""),
                Zt(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var x,
              E = r.grid && r.grid.rows > 1 && e.grid;
            E && e.grid.initSlides(d);
            for (
              var C =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  Object.keys(r.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof r.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                T = 0;
              T < d;
              T += 1
            ) {
              x = 0;
              var P = c.eq(T);
              if (
                (E && e.grid.updateSlide(T, P, d, t),
                "none" !== P.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  C && (c[T].style[t("width")] = "");
                  var _ = getComputedStyle(P[0]),
                    O = P[0].style.transform,
                    z = P[0].style.webkitTransform;
                  if (
                    (O && (P[0].style.transform = "none"),
                    z && (P[0].style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    x = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                  else {
                    var L = n(_, "width"),
                      M = n(_, "padding-left"),
                      N = n(_, "padding-right"),
                      A = n(_, "margin-left"),
                      I = n(_, "margin-right"),
                      j = _.getPropertyValue("box-sizing");
                    if (j && "border-box" === j) x = L + A + I;
                    else {
                      var R = P[0],
                        D = R.clientWidth;
                      x = L + M + N + A + I + (R.offsetWidth - D);
                    }
                  }
                  O && (P[0].style.transform = O),
                    z && (P[0].style.webkitTransform = z),
                    r.roundLengths && (x = Math.floor(x));
                } else
                  (x = (i - (r.slidesPerView - 1) * b) / r.slidesPerView),
                    r.roundLengths && (x = Math.floor(x)),
                    c[T] && (c[T].style[t("width")] = "".concat(x, "px"));
                c[T] && (c[T].swiperSlideSize = x),
                  h.push(x),
                  r.centeredSlides
                    ? ((w = w + x / 2 + S / 2 + b),
                      0 === S && 0 !== T && (w = w - i / 2 - b),
                      0 === T && (w = w - i / 2 - b),
                      Math.abs(w) < 0.001 && (w = 0),
                      r.roundLengths && (w = Math.floor(w)),
                      k % r.slidesPerGroup === 0 && f.push(w),
                      p.push(w))
                    : (r.roundLengths && (w = Math.floor(w)),
                      (k - Math.min(e.params.slidesPerGroupSkip, k)) %
                        e.params.slidesPerGroup ===
                        0 && f.push(w),
                      p.push(w),
                      (w = w + x + b)),
                  (e.virtualSize += x + b),
                  (S = x),
                  (k += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + v),
              l &&
                o &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
              r.setWrapperSize &&
                a.css(
                  Gt(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
              E && e.grid.updateWrapperSize(x, f, t),
              !r.centeredSlides)
            ) {
              for (var F = [], B = 0; B < f.length; B += 1) {
                var H = f[B];
                r.roundLengths && (H = Math.floor(H)),
                  f[B] <= e.virtualSize - i && F.push(H);
              }
              (f = F),
                Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) >
                  1 && f.push(e.virtualSize - i);
            }
            if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
              var V = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !r.cssMode || t !== c.length - 1;
              }).css(Gt({}, V, "".concat(b, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var $ = 0;
              h.forEach(function (e) {
                $ += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var W = ($ -= r.spaceBetween) - i;
              f = f.map(function (e) {
                return e < 0 ? -m : e > W ? W + v : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var U = 0;
              if (
                (h.forEach(function (e) {
                  U += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (U -= r.spaceBetween) < i)
              ) {
                var G = (i - U) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - G;
                }),
                  p.forEach(function (e, t) {
                    p[t] = e + G;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: h,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              Zt(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-f[0], "px")
              ),
                Zt(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var Q = -e.snapGrid[0],
                q = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Q;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + q;
                }));
            }
            if (
              (d !== u && e.emit("slidesLengthChange"),
              f.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              p.length !== y && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset(),
              !s && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
            ) {
              var Y = "".concat(r.containerModifierClass, "backface-hidden"),
                X = e.$el.hasClass(Y);
              d <= r.maxBackfaceHiddenSlides
                ? X || e.$el.addClass(Y)
                : X && e.$el.removeClass(Y);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            a = n.virtual && n.params.virtual.enabled,
            i = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var l = function (e) {
            return a
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              (n.visibleSlides || Ut([])).each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var o = n.activeIndex + t;
                if (o > n.slides.length && !a) break;
                r.push(l(o));
              }
          else r.push(l(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var s = r[t].offsetHeight;
              i = s > i ? s : i;
            }
          (i || 0 === i) && n.$wrapperEl.css("height", "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            a = t.rtlTranslate,
            i = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var l = -e;
            a && (l = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < r.length; o += 1) {
              var s = r[o],
                u = s.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                  (l + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                d =
                  (l - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                f = -(l - u),
                p = f + t.slidesSizesGrid[o];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(s),
                t.visibleSlidesIndexes.push(o),
                r.eq(o).addClass(n.slideVisibleClass)),
                (s.progress = a ? -c : c),
                (s.originalProgress = a ? -d : d);
            }
            t.visibleSlides = Ut(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            a = t.maxTranslate() - t.minTranslate(),
            i = t.progress,
            l = t.isBeginning,
            o = t.isEnd,
            s = l,
            u = o;
          0 === a
            ? ((i = 0), (l = !0), (o = !0))
            : ((l = (i = (e - t.minTranslate()) / a) <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: l, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !s && t.emit("reachBeginning toEdge"),
            o && !u && t.emit("reachEnd toEdge"),
            ((s && !l) || (u && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            a = t.$wrapperEl,
            i = t.activeIndex,
            l = t.realIndex,
            o = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = o
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(i, '"]')
                )
              : n.eq(i)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var s = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === s.length && (s = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (s.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            a = n.slidesGrid,
            i = n.snapGrid,
            l = n.params,
            o = n.activeIndex,
            s = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
              "undefined" !== typeof a[d + 1]
                ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2
                  ? (c = d)
                  : r >= a[d] && r < a[d + 1] && (c = d + 1)
                : r >= a[d] && (c = d);
            l.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(r) >= 0) t = i.indexOf(r);
          else {
            var f = Math.min(l.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / l.slidesPerGroup);
          }
          if ((t >= i.length && (t = i.length - 1), c !== o)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: o,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              s !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            a = Ut(e).closest(".".concat(r.slideClass))[0],
            i = !1;
          if (a)
            for (var l = 0; l < n.slides.length; l += 1)
              if (n.slides[l] === a) {
                (i = !0), (t = l);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  Ut(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var on = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            a = t.translate,
            i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var l = Yt(i[0], e);
          return r && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            a = n.params,
            i = n.$wrapperEl,
            l = n.wrapperEl,
            o = n.progress,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            a.cssMode
              ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                i.transform(
                  "translate3d("
                    .concat(s, "px, ")
                    .concat(u, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== o &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          var i = this,
            l = i.params,
            o = i.wrapperEl;
          if (i.animating && l.preventInteractionOnTransition) return !1;
          var s,
            u = i.minTranslate(),
            c = i.maxTranslate();
          if (
            ((s = r && e > u ? u : r && e < c ? c : e),
            i.updateProgress(s),
            l.cssMode)
          ) {
            var d = i.isHorizontal();
            if (0 === t) o[d ? "scrollLeft" : "scrollTop"] = -s;
            else {
              var f;
              if (!i.support.smoothScroll)
                return (
                  en({
                    swiper: i,
                    targetPosition: -s,
                    side: d ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo(
                (Gt((f = {}), d ? "left" : "top", -s),
                Gt(f, "behavior", "smooth"),
                f)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(s),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionStart")),
                i.animating ||
                  ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                    (i.onTranslateToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        n && i.emit("transitionEnd"));
                    }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function sn(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          a = e.step,
          i = t.activeIndex,
          l = t.previousIndex,
          o = r;
        if (
          (o || (o = i > l ? "next" : i < l ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && i !== l)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === o
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var un = {
        slideTo: function (e, t, n, r, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var l = this,
            o = e;
          o < 0 && (o = 0);
          var s = l.params,
            u = l.snapGrid,
            c = l.slidesGrid,
            d = l.previousIndex,
            f = l.activeIndex,
            p = l.rtlTranslate,
            h = l.wrapperEl,
            m = l.enabled;
          if (
            (l.animating && s.preventInteractionOnTransition) ||
            (!m && !r && !a)
          )
            return !1;
          var v = Math.min(l.params.slidesPerGroupSkip, o),
            g = v + Math.floor((o - v) / l.params.slidesPerGroup);
          g >= u.length && (g = u.length - 1),
            (f || s.initialSlide || 0) === (d || 0) &&
              n &&
              l.emit("beforeSlideChangeStart");
          var y,
            b = -u[g];
          if ((l.updateProgress(b), s.normalizeSlideIndex))
            for (var w = 0; w < c.length; w += 1) {
              var S = -Math.floor(100 * b),
                k = Math.floor(100 * c[w]),
                x = Math.floor(100 * c[w + 1]);
              "undefined" !== typeof c[w + 1]
                ? S >= k && S < x - (x - k) / 2
                  ? (o = w)
                  : S >= k && S < x && (o = w + 1)
                : S >= k && (o = w);
            }
          if (l.initialized && o !== f) {
            if (!l.allowSlideNext && b < l.translate && b < l.minTranslate())
              return !1;
            if (
              !l.allowSlidePrev &&
              b > l.translate &&
              b > l.maxTranslate() &&
              (f || 0) !== o
            )
              return !1;
          }
          if (
            ((y = o > f ? "next" : o < f ? "prev" : "reset"),
            (p && -b === l.translate) || (!p && b === l.translate))
          )
            return (
              l.updateActiveIndex(o),
              s.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== s.effect && l.setTranslate(b),
              "reset" !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
              !1
            );
          if (s.cssMode) {
            var E = l.isHorizontal(),
              C = p ? b : -b;
            if (0 === t) {
              var T = l.virtual && l.params.virtual.enabled;
              T &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                (h[E ? "scrollLeft" : "scrollTop"] = C),
                T &&
                  requestAnimationFrame(function () {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._swiperImmediateVirtual = !1);
                  });
            } else {
              var P;
              if (!l.support.smoothScroll)
                return (
                  en({
                    swiper: l,
                    targetPosition: C,
                    side: E ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo(
                (Gt((P = {}), E ? "left" : "top", C),
                Gt(P, "behavior", "smooth"),
                P)
              );
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(b),
            l.updateActiveIndex(o),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, r),
            l.transitionStart(n, y),
            0 === t
              ? l.transitionEnd(n, y)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, y));
                  }),
                l.$wrapperEl[0].addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = a;
          }
          var i = this,
            l = e;
          return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.animating,
            i = r.enabled,
            l = r.params;
          if (!i) return r;
          var o = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o;
          if (l.loop) {
            if (a && l.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            i = r.animating,
            l = r.snapGrid,
            o = r.slidesGrid,
            s = r.rtlTranslate;
          if (!r.enabled) return r;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(s ? r.translate : -r.translate),
            f = l.map(function (e) {
              return u(e);
            }),
            p = l[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            a.cssMode &&
            (l.forEach(function (e, t) {
              d >= e && (c = t);
            }),
            "undefined" !== typeof c && (p = l[c > 0 ? c - 1 : c]));
          var h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = o.indexOf(p)) < 0 && (h = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && r.isBeginning)
          ) {
            var m =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(m, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var a = this,
            i = a.activeIndex,
            l = Math.min(a.params.slidesPerGroupSkip, i),
            o = l + Math.floor((i - l) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[o]) {
            var u = a.snapGrid[o];
            s - u > (a.snapGrid[o + 1] - u) * r &&
              (i += a.params.slidesPerGroup);
          } else {
            var c = a.snapGrid[o - 1];
            s - c <= (a.snapGrid[o] - c) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)),
            (i = Math.min(i, a.slidesGrid.length - 1)),
            a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            a =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            i = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              Ut(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? i < t.loopedSlides - a / 2 ||
                  i > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    Qt(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i)
                : i > t.slides.length - a
                ? (t.loopFix(),
                  (i = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  Qt(function () {
                    t.slideTo(i);
                  }))
                : t.slideTo(i);
          } else t.slideTo(i);
        },
      };
      var cn = {
        loopCreate: function () {
          var e = this,
            t = Et(),
            n = e.params,
            r = e.$wrapperEl,
            a = r.children().length > 0 ? Ut(r.children()[0].parentNode) : r;
          a.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var l = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (l !== n.slidesPerGroup) {
              for (var o = 0; o < l; o += 1) {
                var s = Ut(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                a.append(s);
              }
              i = a.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > i.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = i.length);
          var u = [],
            c = [];
          i.each(function (e, t) {
            Ut(e).attr("data-swiper-slide-index", t);
          });
          for (var d = 0; d < e.loopedSlides; d += 1) {
            var f = d - Math.floor(d / i.length) * i.length;
            c.push(i.eq(f)[0]), u.unshift(i.eq(i.length - f - 1)[0]);
          }
          for (var p = 0; p < c.length; p += 1)
            a.append(Ut(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var h = u.length - 1; h >= 0; h -= 1)
            a.prepend(Ut(u[h].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            l = e.allowSlideNext,
            o = e.snapGrid,
            s = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -o[n] - e.getTranslate();
          if (n < a)
            (t = r.length - 3 * a + n),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          else if (n >= r.length - a) {
            (t = -r.length + n + a),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = l), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function dn(e) {
        var t = this,
          n = Et(),
          r = Tt(),
          a = t.touchEventsData,
          i = t.params,
          l = t.touches;
        if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
          !t.animating && i.cssMode && i.loop && t.loopFix();
          var o = e;
          o.originalEvent && (o = o.originalEvent);
          var s = Ut(o.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              s.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === o.type),
            (a.isTouchEvent || !("which" in o) || 3 !== o.which) &&
              !(!a.isTouchEvent && "button" in o && o.button > 0) &&
              (!a.isTouched || !a.isMoved))
          ) {
            !!i.noSwipingClass &&
              "" !== i.noSwipingClass &&
              o.target &&
              o.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (s = Ut(e.path[0]));
            var u = i.noSwipingSelector
                ? i.noSwipingSelector
                : ".".concat(i.noSwipingClass),
              c = !(!o.target || !o.target.shadowRoot);
            if (
              i.noSwiping &&
              (c
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(n) {
                        if (!n || n === Et() || n === Tt()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        var r = n.closest(e);
                        return r || n.getRootNode
                          ? r || t(n.getRootNode().host)
                          : null;
                      })(t)
                    );
                  })(u, s[0])
                : s.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || s.closest(i.swipeHandler)[0]) {
              (l.currentX =
                "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                (l.currentY =
                  "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
              var d = l.currentX,
                f = l.currentY,
                p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (p && (d <= h || d >= r.innerWidth - h)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (l.startX = d),
                (l.startY = f),
                (a.touchStartTime = qt()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                i.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var m = !0;
                s.is(a.focusableElements) &&
                  ((m = !1), "SELECT" === s[0].nodeName && (a.isTouched = !1)),
                  n.activeElement &&
                    Ut(n.activeElement).is(a.focusableElements) &&
                    n.activeElement !== s[0] &&
                    n.activeElement.blur();
                var v = m && t.allowTouchMove && i.touchStartPreventDefault;
                (!i.touchStartForcePreventDefault && !v) ||
                  s[0].isContentEditable ||
                  o.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !i.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", o);
            }
          }
        }
      }
      function fn(e) {
        var t = Et(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          i = n.touches,
          l = n.rtlTranslate;
        if (n.enabled) {
          var o = e;
          if ((o.originalEvent && (o = o.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === o.type) {
              var s =
                  "touchmove" === o.type &&
                  o.targetTouches &&
                  (o.targetTouches[0] || o.changedTouches[0]),
                u = "touchmove" === o.type ? s.pageX : o.pageX,
                c = "touchmove" === o.type ? s.pageY : o.pageY;
              if (o.preventedByNestedSwiper)
                return (i.startX = u), void (i.startY = c);
              if (!n.allowTouchMove)
                return (
                  Ut(o.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(i, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                    (r.touchStartTime = qt()))
                  )
                );
              if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                  if (
                    (c < i.startY && n.translate <= n.maxTranslate()) ||
                    (c > i.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < i.startX && n.translate <= n.maxTranslate()) ||
                  (u > i.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                o.target === t.activeElement &&
                Ut(o.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1))
              ) {
                (i.currentX = u), (i.currentY = c);
                var d = i.currentX - i.startX,
                  f = i.currentY - i.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && i.currentY === i.startY) ||
                    (n.isVertical() && i.currentX === i.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", o),
                    "undefined" === typeof r.startMoving &&
                      ((i.currentX === i.startX && i.currentY === i.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !a.cssMode && o.cancelable && o.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        o.stopPropagation(),
                      r.isMoved ||
                        (a.loop && !a.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", o)),
                      n.emit("sliderMove", o),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? d : f;
                    (i.diff = h),
                      (h *= a.touchRatio),
                      l && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var m = !0,
                      v = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (v = 0),
                      h > 0 && r.currentTranslate > n.minTranslate()
                        ? ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                v
                              )))
                        : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                v
                              ))),
                      m && (o.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (i.startX = i.currentX),
                          (i.startY = i.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (i.diff = n.isHorizontal()
                            ? i.currentX - i.startX
                            : i.currentY - i.startY)
                        );
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
                        a.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        a.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
        }
      }
      function pn(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          l = t.slidesGrid;
        if (t.enabled) {
          var o = e;
          if (
            (o.originalEvent && (o = o.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", o),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var s,
            u = qt(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = o.path || (o.composedPath && o.composedPath());
            t.updateClickedSlide((d && d[0]) || o.target),
              t.emit("tap click", o),
              c < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", o);
          }
          if (
            ((n.lastClickTime = qt()),
            Qt(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (s = r.followFinger
              ? i
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: s });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], h = 0;
                h < l.length;
                h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof l[h + m]
                  ? s >= l[h] &&
                    s < l[h + m] &&
                    ((f = h), (p = l[h + m] - l[h]))
                  : s >= l[h] &&
                    ((f = h), (p = l[l.length - 1] - l[l.length - 2]));
              }
              var v = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (v = 0));
              var y = (s - l[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? v : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                    (y > 1 - r.longSwipesRatio
                      ? t.slideTo(f + b)
                      : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (o.target === t.navigation.nextEl ||
                  o.target === t.navigation.prevEl)
                  ? o.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== v ? v : f + b),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function hn() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = r),
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
        }
      }
      function mn(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function vn() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var gn = !1;
      function yn() {}
      var bn = function (e, t) {
        var n = Et(),
          r = e.params,
          a = e.touchEvents,
          i = e.el,
          l = e.wrapperEl,
          o = e.device,
          s = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (s.touch) {
          var f = !(
            "touchstart" !== a.start ||
            !s.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          i[c](a.start, e.onTouchStart, f),
            i[c](
              a.move,
              e.onTouchMove,
              s.passiveListener ? { passive: !1, capture: u } : u
            ),
            i[c](a.end, e.onTouchEnd, f),
            a.cancel && i[c](a.cancel, e.onTouchEnd, f);
        } else
          i[c](a.start, e.onTouchStart, !1),
            n[c](a.move, e.onTouchMove, u),
            n[c](a.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          i[c]("click", e.onClick, !0),
          r.cssMode && l[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                hn,
                !0
              )
            : e[d]("observerUpdate", hn, !0);
      };
      var wn = {
          attachEvents: function () {
            var e = this,
              t = Et(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = dn.bind(e)),
              (e.onTouchMove = fn.bind(e)),
              (e.onTouchEnd = pn.bind(e)),
              n.cssMode && (e.onScroll = vn.bind(e)),
              (e.onClick = mn.bind(e)),
              r.touch &&
                !gn &&
                (t.addEventListener("touchstart", yn), (gn = !0)),
              bn(e, "on");
          },
          detachEvents: function () {
            bn(this, "off");
          },
        },
        Sn = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var kn = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            a = void 0 === r ? 0 : r,
            i = e.params,
            l = e.$el,
            o = i.breakpoints;
          if (o && (!o || 0 !== Object.keys(o).length)) {
            var s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (s && e.currentBreakpoint !== s) {
              var u = (s in o ? o[s] : void 0) || e.originalParams,
                c = Sn(e, i),
                d = Sn(e, u),
                f = i.enabled;
              c && !d
                ? (l.removeClass(
                    ""
                      .concat(i.containerModifierClass, "grid ")
                      .concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (l.addClass("".concat(i.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === i.grid.fill)) &&
                    l.addClass(
                      "".concat(i.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach(function (t) {
                  var n = i[t] && i[t].enabled,
                    r = u[t] && u[t].enabled;
                  n && !r && e[t].disable(), !n && r && e[t].enable();
                });
              var p = u.direction && u.direction !== i.direction,
                h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), Jt(e.params, u);
              var m = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !m ? e.disable() : !f && m && e.enable(),
                (e.currentBreakpoint = s),
                e.emit("_beforeBreakpoint", u),
                h &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              a = Tt(),
              i = "window" === t ? a.innerHeight : n.clientHeight,
              l = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: i * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var o = 0; o < l.length; o += 1) {
              var s = l[o],
                u = s.point,
                c = s.value;
              "window" === t
                ? a.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var xn = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            a = e.$el,
            i = e.device,
            l = e.support,
            o = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !l.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, gt(o)),
            a.addClass(gt(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var En = {
        loadImage: function (e, t, n, r, a, i) {
          var l,
            o = Tt();
          function s() {
            i && i();
          }
          Ut(e).parent("picture")[0] || (e.complete && a)
            ? s()
            : t
            ? (((l = new o.Image()).onload = s),
              (l.onerror = s),
              r && (l.sizes = r),
              n && (l.srcset = n),
              t && (l.src = t))
            : s();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            "undefined" !== typeof e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      };
      var Cn = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Tn(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in a
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Jt(t, n))
                : Jt(t, n))
            : Jt(t, n);
        };
      }
      var Pn = {
          eventsEmitter: an,
          update: ln,
          translate: on,
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                sn({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  sn({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: un,
          loop: cn,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: wn,
          breakpoints: kn,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var a = e.slides.length - 1,
                  i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: xn,
          images: En,
        },
        _n = {},
        On = (function () {
          function e() {
            var t, n;
            yt(this, e);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            if (
              (1 === a.length &&
              a[0].constructor &&
              "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (n = a[0])
                : ((t = a[0]), (n = a[1])),
              n || (n = {}),
              (n = Jt({}, n)),
              t && !n.el && (n.el = t),
              n.el && Ut(n.el).length > 1)
            ) {
              var l = [];
              return (
                Ut(n.el).each(function (t) {
                  var r = Jt({}, n, { el: t });
                  l.push(new e(r));
                }),
                l
              );
            }
            var o,
              s = this;
            ((s.__swiper__ = !0),
            (s.support = tn()),
            (s.device = nn({ userAgent: n.userAgent })),
            (s.browser = rn()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = gt(s.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (o = s.modules).push.apply(o, gt(n.modules));
            var u = {};
            s.modules.forEach(function (e) {
              e({
                swiper: s,
                extendParams: Tn(n, u),
                on: s.on.bind(s),
                once: s.once.bind(s),
                off: s.off.bind(s),
                emit: s.emit.bind(s),
              });
            });
            var c = Jt({}, Cn, u);
            return (
              (s.params = Jt({}, c, _n, n)),
              (s.originalParams = Jt({}, s.params)),
              (s.passedParams = Jt({}, n)),
              s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach(function (e) {
                  s.on(e, s.params.on[e]);
                }),
              s.params && s.params.onAny && s.onAny(s.params.onAny),
              (s.$ = Ut),
              Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: Ut(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (s.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (s.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    s.support.touch || !s.params.simulateTouch
                      ? s.touchEventsTouch
                      : s.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: s.params.focusableElements,
                  lastClickTime: qt(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.emit("_swiper"),
              s.params.init && s.init(),
              s
            );
          }
          return (
            wt(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      a = (n.maxTranslate() - r) * e + r;
                    n.translateTo(a, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return t.destroyed
                      ? ""
                      : e.className
                          .split(" ")
                          .filter(function (e) {
                            return (
                              0 === e.indexOf("swiper-slide") ||
                              0 === e.indexOf(t.params.slideClass)
                            );
                          })
                          .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      a = n.slides,
                      i = n.slidesGrid,
                      l = n.slidesSizesGrid,
                      o = n.size,
                      s = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = a[s].swiperSlideSize, f = s + 1;
                        f < a.length;
                        f += 1
                      )
                        a[f] &&
                          !c &&
                          ((u += 1),
                          (d += a[f].swiperSlideSize) > o && (c = !0));
                      for (var p = s - 1; p >= 0; p -= 1)
                        a[p] &&
                          !c &&
                          ((u += 1),
                          (d += a[p].swiperSlideSize) > o && (c = !0));
                    } else if ("current" === e)
                      for (var h = s + 1; h < a.length; h += 1) {
                        (t ? i[h] + l[h] - i[s] < o : i[h] - i[s] < o) &&
                          (u += 1);
                      }
                    else
                      for (var m = s - 1; m >= 0; m -= 1) {
                        i[s] - i[m] < o && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "changeLanguageDirection",
                  value: function (e) {
                    var t = this;
                    (t.rtl && "rtl" === e) ||
                      (!t.rtl && "ltr" === e) ||
                      ((t.rtl = "rtl" === e),
                      (t.rtlTranslate =
                        "horizontal" === t.params.direction && t.rtl),
                      t.rtl
                        ? (t.$el.addClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "rtl"))
                        : (t.$el.removeClass(
                            "".concat(t.params.containerModifierClass, "rtl")
                          ),
                          (t.el.dir = "ltr")),
                      t.update());
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = Ut(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      a = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = Ut(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children
                          ? n.children(r())
                          : Ut(n).children(r());
                      })();
                    if (0 === a.length && t.params.createElements) {
                      var i = Et().createElement("div");
                      (a = Ut(i)),
                        (i.className = t.params.wrapperClass),
                        n.append(i),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            a.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: a,
                        wrapperEl: a[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === a.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      a = n.$el,
                      i = n.$wrapperEl,
                      l = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          a.removeAttr("style"),
                          i.removeAttr("style"),
                          l &&
                            l.length &&
                            l
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                          ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (n) {}
                              try {
                                delete t[e];
                              } catch (n) {}
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    Jt(_n, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return _n;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return Cn;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(Pn).forEach(function (e) {
        Object.keys(Pn[e]).forEach(function (t) {
          On.prototype[t] = Pn[e][t];
        });
      }),
        On.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              a = Tt(),
              i = null,
              l = null,
              o = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver(function (e) {
                    l = a.requestAnimationFrame(function () {
                      var n = t.width,
                        r = t.height,
                        a = n,
                        i = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          l = e.target;
                        (l && l !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && i === r) || o();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener("resize", o),
                  a.addEventListener("orientationchange", s));
            }),
              n("destroy", function () {
                l && a.cancelAnimationFrame(l),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", o),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              a = e.emit,
              i = [],
              l = Tt(),
              o = function (e, t) {
                void 0 === t && (t = {});
                var n = new (l.MutationObserver || l.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        a("observerUpdate", e[0]);
                      };
                      l.requestAnimationFrame
                        ? l.requestAnimationFrame(t)
                        : l.setTimeout(t, 0);
                    } else a("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      o(e[n]);
                  o(t.$el[0], { childList: t.params.observeSlideChildren }),
                    o(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                i.forEach(function (e) {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var zn = On;
      function Ln(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Mn(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : Ln(t[n]) && Ln(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Mn(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Nn(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function An(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function In(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function jn(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var Rn = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopedSlidesLimit",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function Dn(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = zn.prototype.getBreakpoint(t.breakpoints),
            a = r in t.breakpoints ? t.breakpoints[r] : void 0;
          a && a.slidesPerView && (n = a.slidesPerView);
        }
        var i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (
          (i += t.loopAdditionalSlides) > e.length &&
            t.loopedSlidesLimit &&
            (i = e.length),
          i
        );
      }
      function Fn(t) {
        var n = [];
        return (
          e.Children.toArray(t).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
                e.props.children &&
                Fn(e.props.children).forEach(function (e) {
                  return n.push(e);
                });
          }),
          n
        );
      }
      function Bn(t) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          e.Children.toArray(t).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = Fn(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                    return n.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Hn(e) {
        var t,
          n,
          r,
          a,
          i,
          l = e.swiper,
          o = e.slides,
          s = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          h = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          m = l.params,
          v = l.pagination,
          g = l.navigation,
          y = l.scrollbar,
          b = l.virtual,
          w = l.thumbs;
        u.includes("thumbs") &&
          s.thumbs &&
          s.thumbs.swiper &&
          m.thumbs &&
          !m.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            s.controller &&
            s.controller.control &&
            m.controller &&
            !m.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            s.pagination &&
            (s.pagination.el || p) &&
            (m.pagination || !1 === m.pagination) &&
            v &&
            !v.el &&
            (r = !0),
          u.includes("scrollbar") &&
            s.scrollbar &&
            (s.scrollbar.el || f) &&
            (m.scrollbar || !1 === m.scrollbar) &&
            y &&
            !y.el &&
            (a = !0),
          u.includes("navigation") &&
            s.navigation &&
            (s.navigation.prevEl || d) &&
            (s.navigation.nextEl || c) &&
            (m.navigation || !1 === m.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (i = !0);
        (h.forEach(function (e) {
          if (Ln(m[e]) && Ln(s[e])) Mn(m[e], s[e]);
          else {
            var t = s[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (m[e] = s[e])
              : !1 === t &&
                l[(n = e)] &&
                (l[n].destroy(),
                "navigation" === n
                  ? ((m[n].prevEl = void 0),
                    (m[n].nextEl = void 0),
                    (l[n].prevEl = void 0),
                    (l[n].nextEl = void 0))
                  : ((m[n].el = void 0), (l[n].el = void 0)));
          }
          var n;
        }),
        h.includes("controller") &&
          !n &&
          l.controller &&
          l.controller.control &&
          m.controller &&
          m.controller.control &&
          (l.controller.control = m.controller.control),
        u.includes("children") && o && b && m.virtual.enabled
          ? ((b.slides = o), b.update(!0))
          : u.includes("children") &&
            l.lazy &&
            l.params.lazy.enabled &&
            l.lazy.load(),
        t) &&
          w.init() &&
          w.update(!0);
        n && (l.controller.control = m.controller.control),
          r && (p && (m.pagination.el = p), v.init(), v.render(), v.update()),
          a &&
            (f && (m.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          i &&
            (c && (m.navigation.nextEl = c),
            d && (m.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (l.allowSlideNext = s.allowSlideNext),
          u.includes("allowSlidePrev") && (l.allowSlidePrev = s.allowSlidePrev),
          u.includes("direction") && l.changeDirection(s.direction, !1),
          l.update();
      }
      function Vn(t, n) {
        return "undefined" === typeof window
          ? (0, e.useEffect)(t, n)
          : (0, e.useLayoutEffect)(t, n);
      }
      var $n = (0, e.createContext)(null),
        Wn = (0, e.createContext)(null),
        Un = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function Gn() {
        return (
          (Gn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Gn.apply(this, arguments)
        );
      }
      var Qn = (0, e.forwardRef)(function (t, n) {
        var r = void 0 === t ? {} : t,
          a = r.className,
          i = r.tag,
          l = void 0 === i ? "div" : i,
          o = r.wrapperTag,
          s = void 0 === o ? "div" : o,
          u = r.children,
          c = r.onSwiper,
          d = vt(r, Un),
          f = !1,
          p = mt((0, e.useState)("swiper"), 2),
          h = p[0],
          m = p[1],
          v = mt((0, e.useState)(null), 2),
          g = v[0],
          y = v[1],
          b = mt((0, e.useState)(!1), 2),
          w = b[0],
          S = b[1],
          k = (0, e.useRef)(!1),
          x = (0, e.useRef)(null),
          E = (0, e.useRef)(null),
          C = (0, e.useRef)(null),
          T = (0, e.useRef)(null),
          P = (0, e.useRef)(null),
          _ = (0, e.useRef)(null),
          O = (0, e.useRef)(null),
          z = (0, e.useRef)(null),
          L = (function (e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            var n = { on: {} },
              r = {},
              a = {};
            Mn(n, zn.defaults),
              Mn(n, zn.extendedDefaults),
              (n._emitClasses = !0),
              (n.init = !1);
            var i = {},
              l = Rn.map(function (e) {
                return e.replace(/_/, "");
              }),
              o = Object.assign({}, e);
            return (
              Object.keys(o).forEach(function (o) {
                "undefined" !== typeof e[o] &&
                  (l.indexOf(o) >= 0
                    ? Ln(e[o])
                      ? ((n[o] = {}),
                        (a[o] = {}),
                        Mn(n[o], e[o]),
                        Mn(a[o], e[o]))
                      : ((n[o] = e[o]), (a[o] = e[o]))
                    : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                    ? t
                      ? (r["".concat(o[2].toLowerCase()).concat(o.substr(3))] =
                          e[o])
                      : (n.on[
                          "".concat(o[2].toLowerCase()).concat(o.substr(3))
                        ] = e[o])
                    : (i[o] = e[o]));
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
              }),
              { params: n, passedParams: a, rest: i, events: r }
            );
          })(d),
          M = L.params,
          N = L.passedParams,
          A = L.rest,
          I = L.events,
          j = Bn(u),
          R = j.slides,
          D = j.slots,
          F = function () {
            S(!w);
          };
        Object.assign(M.on, {
          _containerClasses: function (e, t) {
            m(t);
          },
        });
        var B = function () {
          if (
            (Object.assign(M.on, I),
            (f = !0),
            (E.current = new zn(M)),
            (E.current.loopCreate = function () {}),
            (E.current.loopDestroy = function () {}),
            M.loop && (E.current.loopedSlides = Dn(R, M)),
            E.current.virtual && E.current.params.virtual.enabled)
          ) {
            E.current.virtual.slides = R;
            var e = {
              cache: !1,
              slides: R,
              renderExternal: y,
              renderExternalUpdate: !1,
            };
            Mn(E.current.params.virtual, e),
              Mn(E.current.originalParams.virtual, e);
          }
        };
        x.current || B(), E.current && E.current.on("_beforeBreakpoint", F);
        return (
          (0, e.useEffect)(function () {
            return function () {
              E.current && E.current.off("_beforeBreakpoint", F);
            };
          }),
          (0, e.useEffect)(function () {
            !k.current &&
              E.current &&
              (E.current.emitSlidesClasses(), (k.current = !0));
          }),
          Vn(function () {
            if ((n && (n.current = x.current), x.current))
              return (
                E.current.destroyed && B(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    a = e.prevEl,
                    i = e.paginationEl,
                    l = e.scrollbarEl,
                    o = e.swiper;
                  Nn(t) &&
                    r &&
                    a &&
                    ((o.params.navigation.nextEl = r),
                    (o.originalParams.navigation.nextEl = r),
                    (o.params.navigation.prevEl = a),
                    (o.originalParams.navigation.prevEl = a)),
                    An(t) &&
                      i &&
                      ((o.params.pagination.el = i),
                      (o.originalParams.pagination.el = i)),
                    In(t) &&
                      l &&
                      ((o.params.scrollbar.el = l),
                      (o.originalParams.scrollbar.el = l)),
                    o.init(n);
                })(
                  {
                    el: x.current,
                    nextEl: P.current,
                    prevEl: _.current,
                    paginationEl: O.current,
                    scrollbarEl: z.current,
                    swiper: E.current,
                  },
                  M
                ),
                c && c(E.current),
                function () {
                  E.current &&
                    !E.current.destroyed &&
                    E.current.destroy(!0, !1);
                }
              );
          }, []),
          Vn(function () {
            !f &&
              I &&
              E.current &&
              Object.keys(I).forEach(function (e) {
                E.current.on(e, I[e]);
              });
            var e = (function (e, t, n, r, a) {
              var i = [];
              if (!t) return i;
              var l = function (e) {
                i.indexOf(e) < 0 && i.push(e);
              };
              if (n && r) {
                var o = r.map(a),
                  s = n.map(a);
                o.join("") !== s.join("") && l("children"),
                  r.length !== n.length && l("children");
              }
              return (
                Rn.filter(function (e) {
                  return "_" === e[0];
                })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (Ln(e[n]) && Ln(t[n])) {
                        var r = Object.keys(e[n]),
                          a = Object.keys(t[n]);
                        r.length !== a.length
                          ? l(n)
                          : (r.forEach(function (r) {
                              e[n][r] !== t[n][r] && l(n);
                            }),
                            a.forEach(function (r) {
                              e[n][r] !== t[n][r] && l(n);
                            }));
                      } else e[n] !== t[n] && l(n);
                  }),
                i
              );
            })(N, C.current, R, T.current, function (e) {
              return e.key;
            });
            return (
              (C.current = N),
              (T.current = R),
              e.length &&
                E.current &&
                !E.current.destroyed &&
                Hn({
                  swiper: E.current,
                  slides: R,
                  passedParams: N,
                  changedParams: e,
                  nextEl: P.current,
                  prevEl: _.current,
                  scrollbarEl: z.current,
                  paginationEl: O.current,
                }),
              function () {
                I &&
                  E.current &&
                  Object.keys(I).forEach(function (e) {
                    E.current.off(e, I[e]);
                  });
              }
            );
          }),
          Vn(
            function () {
              var e;
              !(e = E.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [g]
          ),
          e.createElement(
            l,
            Gn(
              {
                ref: x,
                className: jn("".concat(h).concat(a ? " ".concat(a) : "")),
              },
              A
            ),
            e.createElement(
              Wn.Provider,
              { value: E.current },
              D["container-start"],
              e.createElement(
                s,
                { className: "swiper-wrapper" },
                D["wrapper-start"],
                M.virtual
                  ? (function (t, n, r) {
                      if (!r) return null;
                      var a = t.isHorizontal()
                        ? Gt(
                            {},
                            t.rtlTranslate ? "right" : "left",
                            "".concat(r.offset, "px")
                          )
                        : { top: "".concat(r.offset, "px") };
                      return n
                        .filter(function (e, t) {
                          return t >= r.from && t <= r.to;
                        })
                        .map(function (n) {
                          return e.cloneElement(n, { swiper: t, style: a });
                        });
                    })(E.current, R, g)
                  : !M.loop || (E.current && E.current.destroyed)
                  ? R.map(function (t) {
                      return e.cloneElement(t, { swiper: E.current });
                    })
                  : (function (t, n, r) {
                      var a = n.map(function (n, r) {
                        return e.cloneElement(n, {
                          swiper: t,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function i(t, n, a) {
                        return e.cloneElement(t, {
                          key: ""
                            .concat(t.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(a),
                          className: ""
                            .concat(t.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var l =
                          r.slidesPerGroup - (a.length % r.slidesPerGroup);
                        if (l !== r.slidesPerGroup)
                          for (var o = 0; o < l; o += 1) {
                            var s = e.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            a.push(s);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = a.length);
                      for (
                        var u = Dn(a, r), c = [], d = [], f = 0;
                        f < u;
                        f += 1
                      ) {
                        var p = f - Math.floor(f / a.length) * a.length;
                        d.push(i(a[p], f, "append")),
                          c.unshift(i(a[a.length - p - 1], f, "prepend"));
                      }
                      return t && (t.loopedSlides = u), [].concat(c, gt(a), d);
                    })(E.current, R, M),
                D["wrapper-end"]
              ),
              Nn(M) &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement("div", {
                    ref: _,
                    className: "swiper-button-prev",
                  }),
                  e.createElement("div", {
                    ref: P,
                    className: "swiper-button-next",
                  })
                ),
              In(M) &&
                e.createElement("div", {
                  ref: z,
                  className: "swiper-scrollbar",
                }),
              An(M) &&
                e.createElement("div", {
                  ref: O,
                  className: "swiper-pagination",
                }),
              D["container-end"]
            )
          )
        );
      });
      Qn.displayName = "Swiper";
      var qn = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function Yn() {
        return (
          (Yn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Yn.apply(this, arguments)
        );
      }
      var Xn = (0, e.forwardRef)(function (t, n) {
        var r = void 0 === t ? {} : t,
          a = r.tag,
          i = void 0 === a ? "div" : a,
          l = r.children,
          o = r.className,
          s = void 0 === o ? "" : o,
          u = r.swiper,
          c = r.zoom,
          d = r.virtualIndex,
          f = vt(r, qn),
          p = (0, e.useRef)(null),
          h = mt((0, e.useState)("swiper-slide"), 2),
          m = h[0],
          v = h[1];
        function g(e, t, n) {
          t === p.current && v(n);
        }
        Vn(function () {
          if ((n && (n.current = p.current), p.current && u)) {
            if (!u.destroyed)
              return (
                u.on("_slideClass", g),
                function () {
                  u && u.off("_slideClass", g);
                }
              );
            "swiper-slide" !== m && v("swiper-slide");
          }
        }),
          Vn(
            function () {
              u && p.current && !u.destroyed && v(u.getSlideClasses(p.current));
            },
            [u]
          );
        var y = {
            isActive:
              m.indexOf("swiper-slide-active") >= 0 ||
              m.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              m.indexOf("swiper-slide-prev") >= 0 ||
              m.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              m.indexOf("swiper-slide-next") >= 0 ||
              m.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          b = function () {
            return "function" === typeof l ? l(y) : l;
          };
        return e.createElement(
          i,
          Yn(
            {
              ref: p,
              className: jn("".concat(m).concat(s ? " ".concat(s) : "")),
              "data-swiper-slide-index": d,
            },
            f
          ),
          e.createElement(
            $n.Provider,
            { value: y },
            c
              ? e.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof c ? c : void 0,
                  },
                  b()
                )
              : b()
          )
        );
      });
      Xn.displayName = "SwiperSlide";
      var Kn = function () {
          return (0, Ke.jsx)(Ke.Fragment, {
            children: (0, Ke.jsx)(De, {
              children: (0, Ke.jsxs)(Qn, {
                className: "mySwiper",
                children: [
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 1",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 2",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 3",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 4",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 5",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 6",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 7",
                    }),
                  }),
                  (0, Ke.jsx)(Xn, {
                    children: (0, Ke.jsx)("p", {
                      className: "m-16 text-center",
                      children: "Slide 8",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Jn = function () {
          return (0, Ke.jsxs)(Ke.Fragment, {
            children: [
              (0, Ke.jsx)(Je, {}),
              (0, Ke.jsx)(rt, {}),
              (0, Ke.jsx)(at, {}),
              (0, Ke.jsx)(ot, {}),
              (0, Ke.jsx)(dt, {}),
              (0, Ke.jsx)(Kn, {}),
              (0, Ke.jsx)(ft, {}),
            ],
          });
        },
        Zn = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  l = t.getTTFB;
                n(e), r(e), a(e), i(e), l(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render((0, Ke.jsx)(e.StrictMode, { children: (0, Ke.jsx)(Jn, {}) })),
        Zn();
    })();
})();
//# sourceMappingURL=main.a786d221.js.map
