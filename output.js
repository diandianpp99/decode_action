//Thu Dec 26 2024 07:41:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var t = function () {
    return (() => {
      var t = {
          8564: (t, e, n) => {
            "use strict";

            const r = n(7193);
            t.exports = {
              ...r
            };
          },
          8912: (t, e, n) => {
            function r() {
              const t = ["_appearEvent", "$element", "layer_video", "7452962rgFTdh", "assign", "https://qa-assets.beuyinm.com/quickapp-puppet/assets/hx/b4.html?t=", "public", "9Stcbvk", "\u9875\u9762VM\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027data\u4E0D\u53EF\u4E0E\"", "__esModule", "6685540ZPNprb", "exports", "8ptWZNf", "1878440FPlhLi", "banck", "@app-module/service.ad", "\"\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u4F7F\u7528private\u66FF\u6362data\u540D\u79F0", "banckTimeout", "getPoolins", "getHWHost", "@app-module/system.router", "\u9875\u9762VM\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027", "function", "some", "canIUse", "__proto__", "object", "warn", "join", "showLayer", "MANIFEST", "reqInters", "click", "5538ltrdiW", "PB_CTX", "error", "params", "944122RmWDsU", "protected", "CONSTS", "32221kOUsGf", "951vXrgyF", "vivo", "checkShowInterval", "setExtraParams", "defineProperty", "clear", "default", "KEYS", "handlePageHide", "linkUp err: ", "private", "pageShowResolver", "handleFullScreen", "hideCB", "clearCheckInterval", "handlePageShow", "3065176lOEeTr", "data", "_descriptor", "updateExtraParams", "poolins", "jump2Index", "174koFCSy", "linkUp", "forEach", "VIVO_GG_TYPE_LIST", "banHide", "$page", "exitFullscreen", "SHOW_STATUS", "appShowCB", "@app-module/system.app", "requestFullscreen"];
              return (r = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            const a = i;
            function i(t, e) {
              const n = r();
              return (i = function (t, e) {
                return n[t -= 452];
              })(t, e);
            }
            (function (t, e) {
              const n = i,
                r = t();
              for (;;) try {
                if (562873 == parseInt(n(514)) / 1 + -parseInt(n(510)) / 2 * (-parseInt(n(518)) / 3) + -parseInt(n(489)) / 4 * (parseInt(n(490)) / 5) + -parseInt(n(466)) / 6 * (parseInt(n(517)) / 7) + -parseInt(n(460)) / 8 * (parseInt(n(484)) / 9) + -parseInt(n(487)) / 10 + parseInt(n(480)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[a(488)] = function (t, e, r) {
              "use strict";

              const i = a;
              Object[i(522)](e, i(486), {
                value: !0
              }), e[i(524)] = void 0;
              var s = d(r(i(492))),
                o = (d(r(i(475))), d(r(i(497)))),
                c = n(2067),
                p = n(1589),
                u = n(7705),
                h = n(1646),
                l = n(707),
                f = d(n(4668));
              function d(t) {
                return t && t.__esModule ? t : {
                  default: t
                };
              }
              e[i(524)] = $createPage({
                private: {
                  LOADING: f[i(524)],
                  params: {},
                  banck: !0,
                  banckTimeout: null,
                  killMenu: !0,
                  selfMenu: !1,
                  showLayer: !1,
                  pageShowResolver: [],
                  checkShowInterval: null,
                  banHide: !1,
                  websrc: i(482) + new Date().valueOf()
                },
                async onInit(t) {
                  const e = i;
                  await this[e(467)](t);
                },
                onShow() {
                  const t = i;
                  $aide[t(474)](), this.banHide = !1, this[t(456)](), this[t(459)]();
                },
                async onReady() {
                  const t = i;
                  this[t(456)]();
                  const {
                    versionCode: e
                  } = await $utils[t(496)](!0);
                  e >= 140401300 && (this[t(471)][t(472)](), setTimeout(() => this.handleFullScreen(), 500));
                },
                domAppear(t) {
                  const e = i;
                  try {
                    this[e(477)] = new t[e(502)].constructor(e(509));
                  } catch (t) {}
                },
                handleFullScreen() {
                  const t = i;
                  this[t(478)](t(479)) && this.$element(t(479))[t(476)]({
                    screenOrientation: "portrait"
                  });
                },
                onHide() {
                  const t = i;
                  setGlobalData(p[t(525)][t(511)], this), this.$page[t(472)](), this.banHide || $aide[t(457)](this), this[t(452)]();
                },
                handlePageShow() {
                  const t = i;
                  this[t(458)](), this[t(455)].forEach(t => t()), this.pageShowResolver = [];
                },
                handlePageHide() {
                  const t = i;
                  !this[t(520)] && (this[t(520)] = setInterval(() => {
                    const e = t;
                    this[e(473)] && (this.clearCheckInterval(), this[e(459)]());
                  }, 1000));
                },
                clearCheckInterval() {
                  const t = i;
                  this[t(520)] && (clearInterval(this[t(520)]), this[t(520)] = null);
                },
                showTrackData() {
                  const t = i;
                  if ($utils.getBrand() === t(519)) {
                    const e = {};
                    try {
                      c[t(516)][t(469)][t(468)](n => {
                        const r = t;
                        s.default[r(501)]({
                          type: n
                        }) && (e[n] = !0);
                      });
                    } catch (e) {
                      console[t(512)]("chech vivo caniuse err: ", e);
                    }
                    return {
                      vivoCanIUse: e
                    };
                  }
                  return {};
                },
                onBackPress() {
                  return this.banck;
                },
                onDestory() {
                  clearTimeout(this.banckTimeout);
                },
                reqInters() {
                  (0, l.getIntersIns)(this);
                },
                async linkUp(t, e = !1) {
                  const n = i;
                  this[n(513)] = t, $aide[n(521)](t);
                  const r = await (0, h.getConfig)(),
                    {
                      global: a = {},
                      layerGgSlot: s = {}
                    } = r || {},
                    {
                      kl: o,
                      uniqueId: c = "",
                      menubar: p = {},
                      firstEnterHome: l = !0
                    } = a;
                  if ($aide[n(463)]({
                    uniqueId: c
                  }), l) this[n(465)]();else try {
                    !this[n(470)] && !this[n(473)] && $aide[n(457)](this);
                    const {
                      ggSort: t = {},
                      ggSlots: e
                    } = s;
                    this[n(464)] = (0, u[n(495)])(this, {
                      codes: e,
                      ...t
                    }, !0), this.showLayer = !0, this[n(508)]();
                  } catch (t) {
                    console.error(n(453), t), this[n(465)]();
                  }
                },
                handleLayerDestroy({
                  detail: t
                }) {
                  this[i(506)] = !1, this.jump2Index();
                },
                async jump2Index() {
                  const t = i;
                  if (!this[t(473)]) {
                    const [e, n] = $PromiseWithResolvers();
                    this[t(455)].push(n), await e;
                  }
                  const {
                    errorPage: e = "index"
                  } = getGlobalData(p[t(525)][t(507)]).router;
                  this[t(494)] = setTimeout(() => {
                    const n = t;
                    this[n(470)] = !0, o[n(524)].replace({
                      uri: e
                    }), o.default[n(523)](), this[n(491)] = !1;
                  }, 0);
                }
              });
              const I = e[i(524)] || t[i(488)],
                v = [i(483), i(515), i(454)];
              if (I.data && v[i(500)](function (t) {
                return I[t];
              })) throw new Error(i(485) + v[i(505)](",") + i(493));
              !I[i(461)] && (I[i(461)] = {}, I[i(462)] = {}, v[i(468)](function (t) {
                const e = i,
                  n = typeof I[t];
                if (n === e(503)) {
                  I[e(461)] = Object[e(481)](I[e(461)], I[t]);
                  for (const n in I[t]) I[e(462)][n] = {
                    access: t
                  };
                } else n === e(499) && console[e(504)](e(498) + t + "\u7684\u503C\u4E0D\u80FD\u662F\u51FD\u6570\uFF0C\u8BF7\u4F7F\u7528\u5BF9\u8C61");
              }));
            };
          },
          6259: (t, e, n) => {
            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 403];
              })(t, e);
            }
            function a() {
              var t = ["__esModule", "1765SYGaZL", "touchTimer", "109615ykMYLl", "260QJGTuM", "282646KRVLXg", "HAS_CLKED", "delt", "defineProperty", "floor", "1574210Rjazcr", "3954490XMdsCd", "rowAdbClick", "816652mFsFZH", "default", "$emit", "40upcDkL", "4866VQBIzK", "9AIraCx", "1374bYLqXV"];
              return (a = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (249979 == parseInt(n(413)) / 1 + parseInt(n(403)) / 2 + parseInt(n(407)) / 3 * (parseInt(n(414)) / 4) + -parseInt(n(411)) / 5 * (-parseInt(n(409)) / 6) + parseInt(n(415)) / 7 * (-parseInt(n(406)) / 8) + -parseInt(n(408)) / 9 * (parseInt(n(421)) / 10) + parseInt(n(420)) / 11) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(a), t.exports = function (t, e, a) {
              "use strict";

              var i = r;
              Object[i(418)](e, i(410), {
                value: !0
              }), e[i(404)] = void 0;
              var s = n(1589);
              e[i(404)] = {
                props: {
                  adId: {
                    type: String,
                    default: ""
                  },
                  adUnitId: {
                    type: String,
                    default: ""
                  }
                },
                data: {
                  adId: null,
                  adUnitId: null,
                  loopArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                  done: !1,
                  touchTimer: null,
                  delt: 0
                },
                onInit() {
                  var t = i;
                  this[t(417)] = Math[t(419)](5 * Math.random());
                },
                touchStart() {},
                emitClick() {
                  var t = i;
                  clearTimeout(this[t(412)]), setGlobalData(s.KEYS[t(416)], $utils.ts()), this.done = !0, this[t(405)](t(422));
                }
              };
            };
          },
          3546: t => {
            function e() {
              var t = ["paddingBottom", "dsi", "adb", "4891977QRSVBx", "default", "\u3010ctr-render\u3011 material", "3jJOAnI", "__esModule", "@app-module/system.brightness", "center", "750px", "194490jukszp", "ggMaterial", "1959200xDHxsR", "80px", "@app-module/system.device", "log", "handleClick", "10JUipkx", "autoReportClk", "targetBright", "173860QRLcTC", "558514qKMDco", "defineProperty", "clkCover", "adbable", "bgImg", "layerLocation", "877844NnotHL", "setValue", "$emit", "21PXCVnx", "frameMaskOpacity", "486114PoCeRg"];
              return (e = function () {
                return t;
              })();
            }
            function n(t, r) {
              var a = e();
              return (n = function (t, e) {
                return a[t -= 468];
              })(t, r);
            }
            (function (t, e) {
              for (var r = n, a = t();;) try {
                if (169766 == parseInt(r(479)) / 1 + parseInt(r(480)) / 2 * (parseInt(r(498)) / 3) + parseInt(r(486)) / 4 + parseInt(r(469)) / 5 + -parseInt(r(491)) / 6 * (parseInt(r(489)) / 7) + parseInt(r(471)) / 8 + parseInt(r(495)) / 9 * (-parseInt(r(476)) / 10)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(e), t.exports = function (t, e, r) {
              "use strict";

              var a = n;
              Object[a(481)](e, a(499), {
                value: !0
              }), e[a(496)] = void 0;
              var i = s(r(a(500)));
              function s(t) {
                return t && t[a(499)] ? t : {
                  default: t
                };
              }
              s(r(a(473))), e[a(496)] = {
                props: {
                  ggMaterial: {
                    type: Object,
                    default: {}
                  },
                  targetBright: {
                    type: Number,
                    default: 0
                  }
                },
                data: {
                  btnCanRender: !1,
                  bgImg: "",
                  popImg: "",
                  adbable: "",
                  clkCover: !1,
                  layerLocation: "",
                  frameMaskOpacity: "",
                  dsi: null,
                  layerLocationStyle: "center",
                  paddingBottom: "0px",
                  rootStyle: {
                    width: a(468)
                  }
                },
                computed: {},
                async onInit() {
                  var t = a;
                  const {
                    dsi: e,
                    bgImg: n,
                    popImg: r,
                    clkCover: s,
                    layerLocation: o,
                    adbable: c,
                    frameMaskOpacity: p
                  } = this[t(470)];
                  this[t(493)] = e, this[t(484)] = n, this.popImg = r, this.adbable = c, this[t(482)] = s, this[t(485)] = o, this[t(490)] = p, this.layerLocationStyle = o === t(501) ? t(501) : "flex-end", this.btnCanRender = this[t(483)] && !this[t(482)], console[t(474)](t(497), this[t(482)], this[t(483)], this.btnCanRender, this[t(470)]), this[t(478)] && i.default[t(487)]({
                    value: this[t(478)]
                  });
                },
                navigatorLoaded() {
                  var t = a;
                  this[t(492)] = t(472);
                },
                handleImgClick() {
                  var t = a;
                  this.adbable = !1, this[t(475)]();
                },
                handleClick() {
                  var t = a;
                  !this[t(483)] && !this[t(482)] && this.dsi[t(477)](), this[t(488)]("clk", {
                    type: this[t(483)] ? t(494) : "img",
                    ggMaterial: this[t(470)]
                  });
                }
              };
            };
          },
          5981: (t, e, n) => {
            t = n.nmd(t);
            var r = i;
            function a() {
              var t = ["track", "adbable", "adb", "center", "autoReportClk", "layerLocation", "scaleX(10) scaleY(16)", "reportAdShow", "popImg", "ggMaterial", "maskStyle", "80px", "$emit", "616316gubPyy", "535px", "14IkwHiw", "649876bvLZZr", "30px", "660px", "@app-module/system.device", "728FUCJZd", "15560MTZroi", "absolute", "dsi", "officialX", "exports", "targetBright", "120px 0px", "rootStyle", "allStyle", "TRACK_EVENT", "cls", "4625604VJXmpT", "err", "default", "flex-end", "handleClkByType", "__esModule", "touchTimer", "\u3010ctr-tpl-render\u3011 material", "translateY(-620px) rotate(180deg)", "clked", "750px", "590px", "1104856nGTXvu", "475px 0px", "layerLocationStyle", "img", "officialErr", "1182459SkdpMQ", "getDesignSize", "setValue", "1251030wuymYs", "clk", "clkCover"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              var n = a();
              return (i = function (t, e) {
                return n[t -= 487];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (329516 == parseInt(n(524)) / 1 + -parseInt(n(527)) / 2 + -parseInt(n(505)) / 3 + parseInt(n(531)) / 4 * (-parseInt(n(532)) / 5) + parseInt(n(508)) / 6 + -parseInt(n(526)) / 7 * (-parseInt(n(500)) / 8) + parseInt(n(488)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(a), t[r(536)] = function (t, e, a) {
              "use strict";

              var i = r;
              Object.defineProperty(e, i(493), {
                value: !0
              }), e[i(490)] = void 0;
              var s = c(a("@app-module/system.brightness")),
                o = (c(a(i(530))), n(7268));
              function c(t) {
                return t && t.__esModule ? t : {
                  default: t
                };
              }
              e[i(490)] = {
                props: {
                  ggMaterial: {
                    type: Object,
                    default: {}
                  },
                  targetBright: {
                    type: Number,
                    default: 0
                  }
                },
                data: {
                  layerLocation: "",
                  dsi: null,
                  popImg: "",
                  adbable: !1,
                  clkCover: !1,
                  layerLocationStyle: i(514),
                  paddingBottom: i(522),
                  rootStyle: {
                    width: "750px"
                  },
                  touchTimer: null,
                  allStyle: {},
                  clked: !1,
                  maskStyle: {}
                },
                async onInit() {
                  var t = i;
                  this.targetBright && s.default[t(507)]({
                    value: this[t(537)]
                  });
                  const {
                    dsi: e,
                    adbable: n,
                    clkCover: r,
                    bgImg: a,
                    popImg: o,
                    layerLocation: c,
                    frameMaskOpacity: p
                  } = this[t(520)];
                  this[t(506)](a, p), this.dsi = e, this[t(519)] = o, this[t(512)] = n, this[t(510)] = r, this[t(516)] = c, this[t(502)] = c === t(514) ? t(514) : t(491), this[t(512)] && !this[t(510)] ? this[t(540)] = {
                    ct: {
                      position: "absolute",
                      bottom: t(528),
                      transform: "scaleX(10) scaleY(16)",
                      transformOrigin: t(501)
                    },
                    ict: {
                      width: t(498),
                      height: t(529),
                      transform: "translateY(-620px) rotate(180deg)"
                    },
                    gg: {
                      position: t(533),
                      width: t(498),
                      bottom: t(499)
                    }
                  } : this.allStyle = {
                    ct: {
                      position: t(533),
                      bottom: t(528),
                      transform: t(517),
                      transformOrigin: t(538)
                    },
                    ict: {
                      width: t(498),
                      height: t(529),
                      transform: t(496)
                    },
                    gg: {
                      position: "absolute",
                      width: t(498),
                      bottom: t(525)
                    }
                  }, console.log(t(495), this[t(520)]);
                },
                getDesignSize(t, e) {
                  var n = i;
                  this[n(539)] = {
                    backgroundImage: t
                  }, this[n(521)] = {
                    backgroundColor: "rgba(0, 0, 0, " + e + ")"
                  };
                },
                handleShow() {
                  var t = i;
                  this[t(534)][t(518)]();
                },
                handleTouch() {
                  var t = i;
                  this[t(512)] && (clearTimeout(this[t(494)]), this[t(494)] = setTimeout(() => {
                    var e = t;
                    this[e(497)] || (this[e(497)] = !0, this.$emit(e(509), {
                      type: "adb",
                      slide: !0,
                      ggMaterial: this[e(520)]
                    }));
                  }, 1000));
                },
                handleErr(t) {
                  var e = i;
                  this[e(497)] = !0;
                  const {
                    code: n,
                    description: r
                  } = t;
                  this[e(534)][e(511)](o[e(541)][e(489)], {
                    errCode: n,
                    errMsg: r
                  }), this[e(523)](e(487), {
                    clsType: e(504),
                    ggMaterial: this[e(520)]
                  });
                },
                handleFeedback(t) {
                  var e = i;
                  this[e(497)] = !0, this.$emit(e(487), {
                    clsType: e(535),
                    ggMaterial: this.ggMaterial
                  });
                },
                handleAllClick(t) {
                  var e = i;
                  if (this[e(512)]) {
                    if (this[e(497)]) return;
                    this.clked = !0, this.dsi[e(515)]();
                    const {
                      offsetX: n,
                      offsetY: r,
                      clientY: a,
                      clientX: i,
                      originX: s,
                      originY: o,
                      type: c,
                      pageY: p,
                      pageX: u
                    } = t;
                    this.$emit(e(509), {
                      type: this[e(512)] ? e(513) : e(503),
                      ggMaterial: this[e(520)],
                      clickInfo: {
                        offsetX: n,
                        offsetY: r,
                        clientY: a,
                        clientX: i,
                        originX: s,
                        originY: o,
                        type: c,
                        pageY: p,
                        pageX: u
                      }
                    });
                  }
                },
                handleClick() {
                  var t = i;
                  this[t(492)](t(503));
                },
                handleCoverClk() {
                  this[i(492)]();
                },
                handleClkByType(t = "adb") {
                  var e = i;
                  this[e(497)] || (this[e(497)] = !0, this[e(523)]("clk", {
                    type: t,
                    ggMaterial: this[e(520)]
                  }));
                }
              };
            };
          },
          6557: (t, e, n) => {
            t = n.nmd(t);
            const r = a;
            function a(t, e) {
              const n = i();
              return (a = function (t, e) {
                return n[t -= 191];
              })(t, e);
            }
            function i() {
              const t = ["linear", "572316eJCQJY", "2mPCNTX", "155691JorfyC", "45ZaKKQa", "579696LnUpYH", "defineProperty", "function", "1452178fmemUb", "showAppDetailPage", "28516WfVVao", "77454ERmYQS", "default", "exports", "dsi", "2695968OABgHa"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (111045 == -parseInt(n(191)) / 1 + -parseInt(n(199)) / 2 * (parseInt(n(200)) / 3) + parseInt(n(198)) / 4 + parseInt(n(201)) / 5 * (-parseInt(n(192)) / 6) + -parseInt(n(205)) / 7 + parseInt(n(202)) / 8 + parseInt(n(196)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(194)] = function (t, e, n) {
              "use strict";

              const a = r;
              Object[a(203)](e, "__esModule", {
                value: !0
              }), e[a(193)] = void 0, e.default = {
                props: [a(195)],
                data: {
                  mode: a(197),
                  legalInfo: {}
                },
                onInit() {
                  const t = a;
                  if (!this[t(195)]) return;
                  const {
                      instance: e = {},
                      ggData: n = {}
                    } = this[t(195)],
                    {
                      appPrivacyUrl: r,
                      appPermissionUrl: i,
                      appCompany: s,
                      appVersion: o
                    } = n;
                  this.legalInfo = {
                    appVersion: o,
                    appCompany: s,
                    appPrivacyUrl: r,
                    appPermissionUrl: i,
                    hasIntro: typeof e[t(206)] === t(204)
                  };
                }
              };
            };
          },
          3162: (t, e, n) => {
            t = n.nmd(t);
            const r = a;
            function a(t, e) {
              const n = i();
              return (a = function (t, e) {
                return n[t -= 100];
              })(t, e);
            }
            function i() {
              const t = ["expDuration", "exports", "defineProperty", "dsi", "track", "70508664YTGiLF", "huawei-box-theme", "348306WSUnWN", "35vGXanq", "adId", "BTN", "_path", "$emit", "instance", "7351275ZskhNr", "CLK_V", "12YgvUYs", "TRACK_EVENT", "122969YkCFYR", "REAL_IMG", "closed", "500CNnAoa", "IMG", "default", "cls", "imgUrlList.0", "$watch", "REAL_BTN", "CLK_BY", "81EvslVX", "getClkData", "imgURL", "@app-module/service.ad", "reportAdClick", "__esModule", "475976lFDfPE", "auto", "478752eYKInj", "adUnitId", "option", "1649688kEDTtU", "handleClk", "3PfzFwH", "trackExtra", "reqId", "clk", "reInit"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (870911 == parseInt(n(106)) / 1 * (-parseInt(n(146)) / 2) + parseInt(n(118)) / 3 * (-parseInt(n(127)) / 4) + -parseInt(n(125)) / 5 + -parseInt(n(104)) / 6 * (parseInt(n(119)) / 7) + parseInt(n(101)) / 8 * (-parseInt(n(140)) / 9) + parseInt(n(132)) / 10 * (-parseInt(n(129)) / 11) + parseInt(n(116)) / 12) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(112)] = function (t, e, a) {
              "use strict";

              const i = r;
              var s;
              Object[i(113)](e, "__esModule", {
                value: !0
              }), e[i(134)] = void 0, (s = a(i(143))) && s[i(145)];
              var o = n(7268);
              e[i(134)] = {
                props: {
                  dsi: {
                    type: Object,
                    default: {}
                  },
                  item: {
                    type: Object,
                    default: {}
                  },
                  showAdb: {
                    type: Boolean,
                    default: !0
                  },
                  showTip: {
                    type: Boolean,
                    default: !1
                  },
                  expDuration: {
                    type: Number,
                    default: 0
                  },
                  option: {
                    type: Object,
                    default: {}
                  },
                  trackExtra: {
                    type: Object,
                    default: {}
                  },
                  styleTheme: {
                    type: String,
                    default: i(117)
                  }
                },
                data: {
                  adId: "",
                  adUnitId: "",
                  imgURL: "",
                  instance: "",
                  closed: !1
                },
                externalClasses: ["box-cls"],
                onInit() {
                  const t = i;
                  this[t(137)](t(114), t(110)), this.reInit();
                },
                reInit() {
                  const t = i,
                    {
                      invalid: e
                    } = this.item;
                  if (e) return void (this[t(120)] = "");
                  if (!this[t(114)] || this.closed) return;
                  this.expDuration && setTimeout(() => this.handleAutoCls(), this[t(111)]);
                  const {
                    ggId: n,
                    instance: r,
                    ggData: a,
                    isAct: s
                  } = this[t(114)];
                  this[t(102)] = n, this[t(124)] = r, this[t(120)] = $utils[t(122)]("adId", a), this[t(142)] = $utils[t(122)](t(136), a);
                  const {
                    impPosition: o,
                    impV: c,
                    impT: p,
                    layerId: u,
                    layerLocation: h
                  } = this.option;
                  this[t(114)].impPosition = o, this[t(114)].trackImp({
                    ...this[t(107)],
                    layerLocation: h,
                    layerId: u,
                    isAct: s,
                    impT: p,
                    impV: c
                  });
                },
                handleAdbClick() {
                  const t = i;
                  this[t(105)](o[t(139)][t(121)], o[t(126)][t(138)]);
                },
                handleImgClick() {
                  const t = i;
                  this[t(105)](o[t(139)][t(133)], o.CLK_V[t(130)]);
                },
                handleClk(t, e) {
                  const n = i;
                  if (!$checkValid(this)) return;
                  const {
                      isAct: r
                    } = this[n(114)],
                    {
                      layerId: a
                    } = this[n(103)];
                  e === o[n(126)][n(130)] && this[n(124)][n(144)]({
                    adId: this[n(120)]
                  }), this[n(114)][n(115)](o[n(128)][n(109)], {
                    clkV: e,
                    isAct: r,
                    layerId: a,
                    ...this.dsi[n(141)]()
                  }), this[n(123)](n(109), {
                    type: t,
                    clkV: e
                  });
                },
                handleAutoCls() {
                  const t = i;
                  this[t(131)] = !0;
                  const {
                    clsType: e = t(100)
                  } = this[t(103)];
                  this[t(114)][t(115)](o.TRACK_EVENT[t(135)], {
                    clsType: e
                  }), this[t(123)](t(135), {
                    ...this.option,
                    key: this[t(114)][t(108)]
                  });
                }
              };
            };
          },
          9774: (t, e, n) => {
            t = n.nmd(t);
            const r = a;
            function a(t, e) {
              const n = i();
              return (a = function (t, e) {
                return n[t -= 468];
              })(t, e);
            }
            function i() {
              const t = ["defineProperty", "$emit", "err", "huawei-box-theme", "4419NGUdFU", "trackLog", "CLK_BY", "officialErr", "reInit", "$watch", "12HJwIAM", "2835515SnDFSd", "expDuration", "IMG", "10asLPMb", "option", "340dnLSiz", "4444404sTHUXT", "__esModule", "reqId", "auto", "@app-module/service.ad", "imgUrlList.0", "105936QuzLeB", "clk", "box-cls", "3853107plGvUk", "impPosition", "instance", "closed", "adId", "getClkData", "4fwyGHx", "1238232EopRmO", "exports", "REAL_IMG", "_path", "track", "cls", "close", "dsi", "default", "adUnitId", "TRACK_EVENT", "imgURL", "7vcnhlu", "1446335EESlTU"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (375672 == -parseInt(n(480)) / 1 + -parseInt(n(473)) / 2 * (-parseInt(n(508)) / 3) + parseInt(n(489)) / 4 * (parseInt(n(468)) / 5) + -parseInt(n(474)) / 6 + parseInt(n(502)) / 7 * (-parseInt(n(490)) / 8) + parseInt(n(483)) / 9 * (parseInt(n(471)) / 10) + parseInt(n(503)) / 11 * (parseInt(n(514)) / 12)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(491)] = function (t, e, a) {
              "use strict";

              const i = r;
              var s;
              Object[i(504)](e, i(475), {
                value: !0
              }), e[i(498)] = void 0, (s = a(i(478))) && s[i(475)];
              var o = n(7268);
              e[i(498)] = {
                props: {
                  dsi: {
                    type: Object,
                    default: {}
                  },
                  item: {
                    type: Object,
                    default: {}
                  },
                  showAdb: {
                    type: Boolean,
                    default: !0
                  },
                  showTip: {
                    type: Boolean,
                    default: !1
                  },
                  expDuration: {
                    type: Number,
                    default: 0
                  },
                  option: {
                    type: Object,
                    default: {}
                  },
                  trackExtra: {
                    type: Object,
                    default: {}
                  },
                  styleTheme: {
                    type: String,
                    default: i(507)
                  }
                },
                data: {
                  adId: "",
                  adUnitId: "",
                  imgURL: "",
                  instance: "",
                  closed: !1
                },
                externalClasses: [i(482)],
                onInit() {
                  const t = i;
                  this[t(513)](t(497), t(512)), this[t(512)]();
                },
                reInit() {
                  const t = i,
                    {
                      invalid: e
                    } = this.item;
                  if (e) return void (this[t(487)] = "");
                  if (!this[t(497)] || this.closed) return;
                  this[t(469)] && setTimeout(() => {
                    const e = t,
                      {
                        clsType: n = e(477)
                      } = this.option;
                    this[e(496)](n);
                  }, this.expDuration);
                  const {
                    ggId: n,
                    instance: r,
                    ggData: a,
                    isAct: s
                  } = this[t(497)];
                  this[t(499)] = n, this[t(485)] = r, this[t(487)] = $utils._path(t(487), a), this[t(501)] = $utils[t(493)](t(479), a);
                },
                handleShow() {
                  const t = i,
                    {
                      impPosition: e,
                      impV: n,
                      impT: r,
                      layerId: a,
                      layerLocation: s
                    } = this.option;
                  this[t(497)][t(484)] = e, this[t(497)][t(509)].imp || this[t(497)].trackImp({
                    ...this.trackExtra,
                    layerLocation: s,
                    isAct: !1,
                    layerId: a,
                    impT: r,
                    impV: n
                  });
                },
                handleClk() {
                  const t = i;
                  if (!$checkValid(this)) return;
                  const e = o[t(510)][t(470)],
                    n = o.CLK_V[t(492)],
                    {
                      isAct: r
                    } = this.dsi,
                    {
                      layerId: a
                    } = this[t(472)];
                  this[t(497)].track(o[t(500)][t(481)], {
                    clkV: n,
                    isAct: r,
                    layerId: a,
                    ...this.dsi[t(488)]()
                  }), this.$emit("clk", {
                    type: e,
                    clkV: n
                  });
                },
                handleErr(t) {
                  const e = i,
                    {
                      code: n,
                      description: r
                    } = t;
                  this.dsi[e(494)](o.TRACK_EVENT[e(506)], {
                    errCode: n,
                    errMsg: r
                  }), this[e(496)](e(511));
                },
                handleClx() {
                  this.close();
                },
                close(t = "officialX") {
                  const e = i;
                  this[e(486)] = !0, this.dsi[e(494)](o[e(500)][e(495)], {
                    clsType: t
                  }), this[e(505)](e(495), {
                    ...this[e(472)],
                    key: this.dsi[e(476)],
                    clsType: t
                  });
                }
              };
            };
          },
          8233: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 196];
              })(t, e);
            }
            function i() {
              var t = ["invalid", "handlePageHide", "delayTimeout", "log", "add-", "total", "compName", "key", "1212PxLAPA", "exports", "renderGroup", "13915cEjDoA", "getPoolins", "getDSI", "popShow", "expInterval", "length", "197VShKST", "SHOW_STATUS", "expDuration", "poolins", "hidden", "$root", "_path", "KEYS", "handlePageShow", "34659qJXFbo", "1183uMqgoT", "IMP_V", "2148201XGondq", "destroy add exp", "$on", "2796528LVZizy", "IMP_T", "reqId", "13432JolBPt", "defineProperty", "P_SHOW", "default", "generateBomb", "3275160RQhIAA", "2094FINDBP", "loopTimeout"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (464909 == parseInt(n(196)) / 1 * (-parseInt(n(220)) / 2) + parseInt(n(205)) / 3 + -parseInt(n(230)) / 4 * (-parseInt(n(233)) / 5) + -parseInt(n(211)) / 6 + parseInt(n(206)) / 7 * (-parseInt(n(214)) / 8) + parseInt(n(208)) / 9 + parseInt(n(219)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(231)] = function (t, e, a) {
              "use strict";

              var i = r;
              Object[i(215)](e, "__esModule", {
                value: !0
              }), e[i(217)] = void 0;
              var s = n(1589),
                o = n(7705),
                c = n(7268);
              e[i(217)] = {
                data: {
                  total: 0,
                  expInterval: 0,
                  expDuration: 0,
                  renderGroup: [],
                  loopTimeout: null,
                  hidden: !1,
                  popShow: !0,
                  option: {
                    clsType: "replaced",
                    impPosition: "bottom",
                    impV: c[i(207)].NO,
                    impT: c[i(212)].NO
                  }
                },
                onInit() {
                  var t = i;
                  const {
                    firstExpInterval: e = 0,
                    expNumber: n = 0,
                    expInterval: r = 0,
                    totalFrequency: a = 0
                  } = $utils[t(202)]("layerGgSlot.addExp", getGlobalData(s[t(203)].CONFIGER_KEY), {});
                  n && a && (this[t(210)](s[t(203)][t(216)], this[t(204)]), this[t(210)](s.KEYS.P_HIDE, this[t(223)]), this.total = a, this[t(237)] = r, this[t(198)] = n * r, this[t(224)] = setTimeout(() => {
                    var e = t;
                    this[e(199)] = (0, o[e(234)])(this), this.generateBomb();
                  }, e));
                },
                handlePageShow() {
                  var t = i;
                  this[t(200)] = !1, this[t(221)] || this[t(218)]();
                },
                handlePageHide() {
                  this[i(200)] = !0;
                },
                generateBomb() {
                  var t = i;
                  if (clearTimeout(this.loopTimeout), this[t(221)] = null, !$checkValid(this)) return void this.destroy();
                  if (this[t(227)] < 1) return void (this[t(232)][t(238)] || this.destroy());
                  if (!this[t(201)]()[t(197)]) return void this.handlePageHide();
                  const e = this[t(199)][t(235)]({
                    addExpable: !0,
                    syncable: !0
                  });
                  e && (this[t(227)]--, this[t(232)].push({
                    dsi: e,
                    key: e[t(213)],
                    compName: t(226) + e[t(228)]
                  })), this[t(221)] = setTimeout(() => this.generateBomb(), this[t(237)]);
                },
                destroy() {
                  var t = i;
                  console[t(225)](t(209)), this[t(236)] = !1, clearTimeout(this[t(221)]), clearTimeout(this[t(224)]), clearInterval(this.checkInterval);
                },
                onDestroy() {
                  this.destroy();
                },
                handleCls({
                  detail: t
                }) {
                  var e = i;
                  const {
                    key: n
                  } = t;
                  this[e(232)].forEach(t => {
                    var r = e;
                    t[r(222)] = t[r(229)] === n;
                  }), !this[e(227)] && !this[e(232)][e(238)] && this.destroy();
                }
              };
            };
          },
          5650: (t, e, n) => {
            t = n.nmd(t);
            var r = i;
            function a() {
              var t = ["@app-module/system.router", "setStore", "agreed", "$root", "PRIVACY_VISITED", "2266215sXSRxP", "privacyShow", "347765agKDhu", "slice", "getStore", "__esModule", "729195SwZMIF", "trigger", "getVisitedStatus", "81252zvfshE", "766878gLigCt", "KEYS", "default", "banHide", "exports", "userId", "2717649OIUQgB", "manifest", "defaultUserId", "36lvImXM", "1489304fZAVRH", "https://privacy.beuyinm.com/", "$app", "$watch", "AGREE_POLICY", "100px", "21PoDvfm", "$def"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              var n = a();
              return (i = function (t, e) {
                return n[t -= 121];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (713136 == parseInt(n(151)) / 1 + parseInt(n(122)) / 2 + -parseInt(n(145)) / 3 + -parseInt(n(131)) / 4 * (-parseInt(n(147)) / 5) + -parseInt(n(121)) / 6 + -parseInt(n(138)) / 7 * (parseInt(n(132)) / 8) + parseInt(n(128)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(a), t[r(126)] = function (t, e, a) {
              "use strict";

              var i = r;
              Object.defineProperty(e, i(150), {
                value: !0
              }), e[i(124)] = void 0;
              var s,
                o = (s = a(i(140))) && s[i(150)] ? s : {
                  default: s
                },
                c = n(1589);
              e[i(124)] = {
                props: [i(152)],
                data: {
                  privacyShow: !0,
                  agreed: !0,
                  userId: ""
                },
                computed: {
                  boxStyle() {
                    var t = i;
                    return this[t(142)] ? {
                      right: 0,
                      height: t(137)
                    } : {
                      right: 0,
                      bottom: 0
                    };
                  }
                },
                async onInit() {
                  var t = i;
                  const {
                    userId: e = t(130)
                  } = $utils.getQAIDs();
                  this[t(127)] = e[t(148)](-16), this[t(135)](t(152), t(153)), this.getVisitedStatus(2);
                },
                async getVisitedStatus(t) {
                  var e = i;
                  t < 2 ? this.agreed && this[e(146)] && (this[e(146)] = !1, $track(c[e(123)][e(136)]), $utils[e(141)](c[e(123)][e(144)], !0)) : (getGlobalData(c[e(123)].PRIVACY_VISITED) || (await $utils[e(149)](c[e(123)][e(144)], !1))) && (this[e(146)] = !1);
                },
                handleLinkClick() {
                  var t = i;
                  const {
                    package: e
                  } = this[t(134)][t(139)][t(129)];
                  this[t(143)]()[t(125)] = !0, o[t(124)].push({
                    uri: t(133) + e
                  });
                },
                handleSwitch() {
                  this.agreed = !this.agreed;
                }
              };
            };
          },
          3613: (t, e, n) => {
            t = n.nmd(t);
            const r = a;
            function a(t, e) {
              const n = i();
              return (a = function (t, e) {
                return n[t -= 309];
              })(t, e);
            }
            function i() {
              const t = ["1391344aalDOs", "C_INVALID", "getAdbable", "handleLayerTimeout", "getBrand", "layerMaterial", "extraImpData", "reportBgImgId", "KEYS", "layerPoolPromise", "SHOW_STATUS", "handlePageShow", "_path", "exports", "layerStopromise", "number", "destroy", "clearLayerTimeout", "getDSI", "TRACK_EVENT", "320004ofsAsY", "poolins", "loopImages", "layer", "39853lEPnaK", "pageShowResolvers", "default", "layer-", "cancelResolve", "handlePageHide", "CONFIGER_KEY", "brand", "clearCheckInterval", "shift", "handleDSI", "privacyTrigger", "layerBackground", "defaultImg", "actStopromise", "cls", "originBright", "3720NtJTwW", "length", "clk", "impNoAction", "tplLayerImages", "$on", "bgOpacity", "trackImp", "sucai", "startNextLayer", "__esModule", "458253YFJTqO", "push", "startNextAct", "forEach", "targetBright", "getClkData", "checkShowInterval", "setValue", "track", "DONE", "getValue", "layerTimeout", "invalid", "layerKyy", "getClkCover", "2bPVMjF", "backImages", "getSourceTypeAndStatus", "clsDelay", "key", "getDefaultBg", "materialOpt", "IMP_V", "1507275yWixsa", "layerImages", "IMP_POSITION_MAP", "fill", "593454gogoEO", "$root", "@app-module/system.brightness", "60JxuXVs", "actPoolPromise", "preLayerBgId", "defineProperty", "getShowPromise", "value", "layerGgSlot", "CLK_V", "tplBackImages", "officialX", "P_HIDE", "other", "layerOther", "1395fkzBMC", "isTpl", "SOURCE_TYPE", "getPoolins", "reportClkTimings", "total", "no-name", "handleClk", "actMaterial", "isAct"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (177487 == -parseInt(n(406)) / 1 * (-parseInt(n(344)) / 2) + -parseInt(n(402)) / 3 + -parseInt(n(318)) / 4 * (-parseInt(n(372)) / 5) + -parseInt(n(356)) / 6 + parseInt(n(352)) / 7 + parseInt(n(382)) / 8 + parseInt(n(329)) / 9 * (-parseInt(n(359)) / 10)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(395)] = function (t, e, a) {
              "use strict";

              const i = r;
              Object[i(362)](e, i(328), {
                value: !0
              }), e[i(408)] = void 0;
              var s,
                o = (s = a(i(358))) && s[i(328)] ? s : {
                  default: s
                },
                c = n(7268),
                p = n(7705),
                u = n(1589);
              const h = i(326),
                l = i(313),
                f = {
                  [c[i(374)].QUICKAPP]: i(342),
                  [c.SOURCE_TYPE.OTHER]: i(371)
                };
              e.default = {
                data: {
                  brand: "",
                  backImages: [],
                  layerImages: [],
                  tplBackImages: [],
                  tplLayerImages: [],
                  reportClkTimings: {},
                  pageShowResolvers: [],
                  defaultImg: "",
                  bgOpacity: 0,
                  clsDelay: 0,
                  total: 0,
                  poolins: null,
                  preLayerBgId: 0,
                  privacyTrigger: !1,
                  checkShowInterval: null,
                  layerPoolPromise: null,
                  layerStopromise: null,
                  actPoolPromise: null,
                  actStopromise: null,
                  layerTimeout: null,
                  C_INVALID: !1,
                  layerMaterial: null,
                  actMaterial: null,
                  originBright: 40,
                  targetBright: 40
                },
                computed: {
                  layerCompName() {
                    const t = i,
                      {
                        compName: e = t(378)
                      } = this[t(387)] || {};
                    return e;
                  },
                  actCompName() {
                    const t = i,
                      {
                        compName: e = t(378)
                      } = this[t(380)] || {};
                    return e;
                  }
                },
                onInit() {
                  const t = i;
                  this.poolins = (0, p[t(375)])(this), this[t(323)](u.KEYS.P_SHOW, this.handlePageShow), this.$on(u[t(390)][t(369)], this[t(411)]), this[t(413)] = $utils[t(386)](), o[t(408)][t(339)]({
                    success: e => {
                      const n = t;
                      this.originBright = e[n(364)], o.default.setValue({
                        value: e[n(364)]
                      });
                    }
                  });
                  const {
                      layerConf: e = {},
                      brightnessConf: n = {}
                    } = $utils[t(394)](t(365), getGlobalData(u[t(390)][t(412)]), {}),
                    {
                      firstExp: r,
                      finishLayer: a,
                      reportGgClick: s = [],
                      opacification: c = 50,
                      autoCloseTime: h = 0,
                      layerImages: l = [],
                      backImages: f = [],
                      templateLayerImages: d = [],
                      templateBackImages: I = []
                    } = e;
                  this[t(377)] = a, this.clsDelay = h, this[t(324)] = c, this[t(353)] = l, this[t(322)] = d;
                  const {
                    switch: v = !0,
                    brightness: g = 10
                  } = n;
                  this[t(333)] = v ? g : 0, s.forEach(t => this.reportClkTimings[t] = !0), f[t(332)](e => {
                    const n = t,
                      {
                        count: r,
                        ...a
                      } = e;
                    new Array(r)[n(355)](a)[n(332)](t => this[n(345)][n(330)](t));
                  }), I[t(332)](e => {
                    const n = t,
                      {
                        count: r,
                        ...a
                      } = e;
                    new Array(r)[n(355)](a).forEach(t => this[n(367)][n(330)](t));
                  }), this[t(349)](), typeof r === t(397) && setTimeout(() => {
                    const e = t;
                    this[e(331)](), this[e(327)]();
                  }, r);
                },
                getDefaultBg() {
                  const t = i,
                    {
                      image: e
                    } = this.backImages[0] || {};
                  this[t(314)] = e, this[t(312)] = !this[t(312)];
                },
                loopImages(t, e = !1) {
                  const n = i,
                    r = (t ? [this[n(322)], this.tplBackImages] : [this.layerImages, this[n(345)]])[Number(!!e)];
                  r[n(319)] && r.push(r[n(310)]());
                },
                handlePageShow() {
                  this[i(309)](), this.pageShowResolvers.forEach(t => t()), this.pageShowResolvers = [];
                },
                handlePageHide() {
                  const t = i;
                  !this[t(335)] && (this[t(335)] = setInterval(() => {
                    const e = t;
                    this[e(357)]().SHOW_STATUS && (this[e(309)](), this[e(393)]());
                  }, 1000));
                },
                getShowPromise() {
                  const t = i;
                  if (!this[t(357)]()[t(392)]) {
                    this[t(411)]();
                    const [e, n] = $PromiseWithResolvers();
                    return this[t(407)][t(330)](n), e;
                  }
                },
                reportBgImgId(t) {
                  const e = i;
                  this.preLayerBgId !== t && ($track(l, {
                    layerBackgroundId: t
                  }), this[e(361)] = t);
                },
                handleDSI(t, e) {
                  const n = i,
                    {
                      isTpl: r,
                      isAct: a,
                      compName: s,
                      waitImp: o
                    } = t,
                    p = r ? this[n(367)] : this[n(345)],
                    u = r ? this[n(322)] : this[n(353)],
                    {
                      id: h,
                      image: l
                    } = p[0] || {},
                    {
                      id: f,
                      image: d,
                      location: I
                    } = u[0] || {};
                  this[n(404)](r, !0);
                  const v = t[n(384)]();
                  return t.impPosition = c[n(354)][n(405)], t[n(388)] = {
                    impV: c[n(351)][n(338)],
                    layerLocation: I,
                    layerId: f,
                    isAct: a
                  }, o || t[n(325)](), this[n(389)](h), {
                    dsi: t,
                    bgImg: l,
                    popImg: d,
                    layerId: f,
                    adbable: v,
                    layerLocation: I,
                    compName: n(409) + s,
                    frameMaskOpacity: this[n(324)] / 100,
                    clkCover: e && t[n(343)]()
                  };
                },
                async startNextAct() {
                  const t = i;
                  if (this[t(377)] < 1 && !this[t(387)] || !$checkValid(this)) return void this[t(398)]();
                  if (this[t(315)] || this.actPoolPromise) return;
                  const e = this[t(403)][t(400)]({
                    activable: !0
                  });
                  let n = e;
                  $utils.isPromise(e) && (this[t(360)] = e, n = await e, this[t(360)] = null), this[t(399)]();
                  const r = this.getShowPromise();
                  r && (this.actStopromise = r, await r, this[t(315)] = null), this[t(380)] = this[t(311)](n);
                },
                async startNextLayer() {
                  const t = i;
                  if (this.clearLayerTimeout(), o[t(408)][t(336)]({
                    value: this[t(317)]
                  }), this[t(377)] < 1 || !$checkValid(this)) return void this[t(398)]();
                  if (this[t(396)] || this.layerPoolPromise) return;
                  const e = this[t(403)].getDSI();
                  let n = e;
                  $utils.isPromise(e) && (this[t(391)] = e, n = await e, this[t(391)] = null);
                  const r = this[t(363)]();
                  r && (this[t(396)] = r, await r, this[t(396)] = null), this[t(387)] = this[t(311)](n, !0), this.generateLayerTimeout();
                },
                generateLayerTimeout() {
                  const t = i,
                    {
                      dsi: e,
                      layerId: n,
                      adbable: r
                    } = this.layerMaterial,
                    {
                      ggSourceType: a
                    } = e[t(346)]();
                  let s = f[a],
                    o = 1000000;
                  s && this[t(347)] > 0 && (o = this.clsDelay);
                  let p = 1000000;
                  this[t(376)][t(350)] && !r && a === c[t(374)].DOWNLOADAPP ? p = 1000 : this[t(376)][t(321)] && (p = 5000);
                  let u = !1,
                    l = 0;
                  o < p ? l = o : p < 1000000 && (u = !0, l = p), l && (this[t(340)] = setTimeout(async () => {
                    const r = t;
                    if (this[r(340)] = null, this[r(380)]) ;else if (u) {
                      const t = this[r(363)]();
                      t && (await t), e.autoReportClk({
                        layerId: n,
                        clkV: c[r(366)].REPORT,
                        reportAdClick: 1000 === p ? h : "noOperation"
                      }), this.total--, this[r(404)](e.isTpl), this[r(385)]();
                    } else e[r(337)](c[r(401)][r(316)], {
                      clsType: s
                    }), this[r(385)]();
                  }, l));
                },
                handleLayerTimeout() {
                  const t = i;
                  this[t(349)](), this[t(387)] = null, setTimeout(() => this[t(327)](), 200);
                },
                handleLayerCls({
                  detail: t = {}
                }) {
                  const e = i,
                    {
                      clsType: n = e(368),
                      ggMaterial: r = {}
                    } = t,
                    {
                      dsi: a
                    } = r;
                  this.clearLayerTimeout(), this[e(349)](), this[e(404)](a[e(373)]), a.track(c.TRACK_EVENT[e(316)], {
                    clsType: n
                  }), this.layerMaterial = null, setTimeout(() => this[e(327)](), 200);
                },
                handleClk(t, e, n) {
                  const r = i,
                    {
                      dsi: a,
                      layerId: s,
                      clkCover: o
                    } = e;
                  this[r(377)]--, this[r(404)](a[r(373)]);
                  const {
                      slide: p,
                      ...u
                    } = n || {},
                    {
                      SLIDE_BTN: h,
                      SLIDE_IMG: l,
                      COVER: f,
                      REAL_BTN: d,
                      CTR: I
                    } = c[r(366)];
                  let v = I;
                  "adb" === t ? v = p ? h : o ? f : d : p && (v = l), a[r(337)](c[r(401)][r(320)], {
                    clkV: v,
                    layerId: s,
                    isAct: a[r(381)],
                    ...a[r(334)](),
                    ...u
                  });
                },
                handleActCls({
                  detail: t = {}
                }) {
                  const e = i,
                    {
                      clsType: n = "officialX",
                      ggMaterial: r = {}
                    } = t,
                    {
                      dsi: a
                    } = r;
                  this.getDefaultBg(), this.loopImages(a[e(373)]), a[e(337)](c.TRACK_EVENT[e(316)], {
                    clsType: n
                  }), this[e(380)] = null, setTimeout(() => this[e(331)](), 200);
                },
                handleActClk({
                  detail: t = {}
                }) {
                  const e = i;
                  this[e(349)]();
                  const {
                    type: n,
                    slide: r,
                    ggMaterial: a
                  } = t;
                  this[e(379)](n, a, {
                    slide: r
                  }), this[e(380)] = null, setTimeout(() => this.startNextAct(), 200);
                },
                handleLayerClk({
                  detail: t
                }) {
                  const e = i;
                  this[e(399)](), this[e(349)]();
                  const {
                    type: n,
                    slide: r,
                    ggMaterial: a,
                    clickInfo: s
                  } = t;
                  this[e(379)](n, a, {
                    slide: r,
                    clickInfo: s
                  }), this[e(387)] = null, setTimeout(() => this.startNextLayer(), 200);
                },
                clearCheckInterval() {
                  const t = i;
                  this[t(335)] && (clearInterval(this[t(335)]), this[t(335)] = null);
                },
                clearLayerTimeout() {
                  const t = i;
                  this[t(340)] && (clearTimeout(this[t(340)]), this[t(340)] = null);
                },
                destroy() {
                  const t = i;
                  this[t(383)] = !0, this.pageShowResolvers = [], this[t(391)] && this[t(403)].cancelResolve(this[t(391)][t(348)]), this.actPoolPromise && this[t(403)][t(410)](this[t(360)][t(348)]), this[t(309)](), this[t(399)](), setTimeout(() => this.$emit(t(398), {
                    type: this[t(377)] < 1 ? "end" : this[t(383)] ? t(341) : t(370)
                  }), 1000);
                }
              };
            };
          },
          2836: (t, e, n) => {
            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 296];
              })(t, e);
            }
            function a() {
              var t = ["_path", "198321CzlZzx", "204115NdFyyF", "4284660YtkfeJ", "CONFIGER_KEY", "__esModule", "defineProperty", "1643072AgYsHr", "1811691jXfoeR", "isShow", "9jcRMZv", "16tFbyBj", "default", "356637itSOse", "global.menubar", "320278tpxuna", "24TFhRVE"];
              return (a = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (184261 == -parseInt(n(308)) / 1 + parseInt(n(310)) / 2 + -parseInt(n(296)) / 3 * (parseInt(n(306)) / 4) + -parseInt(n(297)) / 5 * (-parseInt(n(311)) / 6) + parseInt(n(303)) / 7 + -parseInt(n(302)) / 8 + parseInt(n(305)) / 9 * (parseInt(n(298)) / 10)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(a), t.exports = function (t, e, a) {
              "use strict";

              var i = r;
              Object[i(301)](e, i(300), {
                value: !0
              }), e.default = void 0;
              var s,
                o = n(1589),
                c = (s = n(3871)) && s[i(300)] ? s : {
                  default: s
                };
              e[i(307)] = {
                props: {
                  istyle: {
                    type: Object,
                    default: () => ({})
                  }
                },
                data: {
                  isShow: !1,
                  imgURL: c[i(307)]
                },
                onInit() {
                  var t = i;
                  const {
                    selfDraw: e
                  } = $utils[t(312)](t(309), getGlobalData(o.KEYS[t(299)]), {});
                  this[t(304)] = e;
                }
              };
            };
          },
          9086: (t, e, n) => {
            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 486];
              })(t, e);
            }
            function a() {
              var t = ["global", "2939622DKoQCH", "__esModule", "5843176bVHQmw", "33gVIsDb", "7mdvNOo", "3898170LWXymM", "exports", "1634016FbDZNw", "imgURL", "31hIIpew", "defineProperty", "659925HulkkY", "isShow", "6058gdvnSi", "default", "KEYS", "getBrand", "4MjeikS", "423LGuvOP", "$emit", "6210UEfznq", "imgMap"];
              return (a = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            var i = r;
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (499567 == parseInt(n(488)) / 1 * (-parseInt(n(492)) / 2) + parseInt(n(502)) / 3 * (parseInt(n(496)) / 4) + parseInt(n(490)) / 5 + parseInt(n(507)) / 6 + parseInt(n(506)) / 7 * (-parseInt(n(504)) / 8) + parseInt(n(497)) / 9 * (-parseInt(n(499)) / 10) + -parseInt(n(505)) / 11 * (parseInt(n(486)) / 12)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(a), t[i(508)] = function (t, e, r) {
              "use strict";

              var a = i;
              Object[a(489)](e, "__esModule", {
                value: !0
              }), e[a(493)] = void 0;
              var s = n(1589),
                o = l(n(7564)),
                c = l(n(5112)),
                p = l(n(3386)),
                u = l(n(8743)),
                h = l(n(7833));
              function l(t) {
                return t && t[a(503)] ? t : {
                  default: t
                };
              }
              e[a(493)] = {
                data: {
                  imgMap: {
                    xiaomi: o[a(493)],
                    honor: c.default,
                    huawei: p.default,
                    vivo: u[a(493)],
                    oppo: h[a(493)]
                  },
                  imgURL: "",
                  isShow: !1
                },
                onInit() {
                  var t = a;
                  this[t(487)] = this[t(500)][$utils[t(495)]()];
                  const {
                    selfNav: e
                  } = $utils._path(t(501), getGlobalData(s[t(494)].CONFIGER_KEY), {});
                  this[t(491)] = e, this[t(491)] && setTimeout(() => {
                    this[t(498)]("navigatorLoaded", {
                      height: 80
                    });
                  });
                }
              };
            };
          },
          9536: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 333];
              })(t, e);
            }
            function i() {
              var t = ["8px", "46033moTsjH", "exports", "4px", "99zJhcTg", "6vrnjBy", "588NZtUmT", "26984mQVrin", "24px", "32px", "9mtSfgE", "3455000sjIYNe", "91318zmCNgP", "508812PBTusM", "center", "rgba(0,0,0,0.3)", "8095UndWAu", "630ZJZgZe", "760232GRXcfv"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (202153 == -parseInt(n(342)) / 1 + parseInt(n(334)) / 2 * (-parseInt(n(346)) / 3) + parseInt(n(340)) / 4 + -parseInt(n(338)) / 5 * (parseInt(n(339)) / 6) + -parseInt(n(347)) / 7 * (-parseInt(n(348)) / 8) + parseInt(n(351)) / 9 * (-parseInt(n(333)) / 10) + -parseInt(n(345)) / 11 * (-parseInt(n(335)) / 12)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(343)] = {
              ".root": {
                height: r(350)
              },
              ".text": {
                height: r(350),
                lineHeight: "32px",
                textAlign: r(336),
                backgroundColor: r(337),
                borderRadius: r(344),
                fontSize: r(349),
                color: "rgba(255,255,255,0.75)",
                paddingTop: "4px",
                paddingRight: r(341),
                paddingBottom: r(344),
                paddingLeft: r(341)
              }
            };
          },
          7658: t => {
            function e(t, n) {
              var a = r();
              return (e = function (t, e) {
                return a[t -= 427];
              })(t, n);
            }
            var n = e;
            function r() {
              var t = ["fb-content", "195626tEPgxJ", "2332600bwbvXI", "3810ZgcGMQ", "kfContentPa", "fb-origin-2", "{\"scaleX\":60,\"scaleY\":60}", "0px 180px", "fb-origin-1", "fb-div", "0px", "fb-origin-3", "fb-wrap-4", "0px 0px", "7048iZXFkD", "13116XIvmSB", "fb-box", "column", "695px", "180px", "12BFBSlI", "100px", "22203zJewDs", "557028yxXQYC", "element", "55px", "750px 180px", "22965288hnnRbH", "relative", "750px 0px", "750px", "center", "100%", "flex-end", "fb-wrap-3", "11kiokbP", "215px", "class", "5XBBLKB", "{\"translateY\":\"1px\"}", "absolute", "7147ZuQbBL", "fb-wrap"];
              return (r = function () {
                return t;
              })();
            }
            (function (t, n) {
              for (var r = e, a = t();;) try {
                if (507413 == parseInt(r(458)) / 1 * (parseInt(r(464)) / 2) + -parseInt(r(440)) / 3 * (-parseInt(r(443)) / 4) + -parseInt(r(465)) / 5 + parseInt(r(435)) / 6 + parseInt(r(461)) / 7 * (parseInt(r(434)) / 8) + parseInt(r(442)) / 9 * (parseInt(r(466)) / 10) + parseInt(r(455)) / 11 * (-parseInt(r(447)) / 12)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(r), t.exports = {
              ".fb-box": {
                width: "750px",
                height: n(452),
                paddingTop: n(441),
                position: n(448),
                flexDirection: "column",
                alignItems: "center",
                justifyContent: n(451),
                backgroundColor: "rgba(0,0,0,0.1)"
              },
              ".fb-box .kfContentPa": {
                position: n(460),
                justifyContent: "center",
                alignItems: n(451),
                bottom: n(430),
                left: n(430),
                top: n(430),
                right: n(430),
                transform: n(459),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-box"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(467)
                  }]
                }
              },
              ".fb-box .fb-div": {
                flexDirection: n(437),
                alignItems: n(451),
                justifyContent: n(453),
                height: n(452),
                width: n(452),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-div"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap": {
                width: n(450),
                height: n(456),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: "fb-box"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: "fb-div"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(462)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-content": {
                position: n(460),
                transform: n(469),
                width: "750px",
                height: n(439),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(462)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(463)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-content .fb": {
                position: n(460),
                width: n(450),
                height: "180px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: n(462)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-content"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: "fb"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-origin-0": {
                transformOrigin: n(433),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-box"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-wrap"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: "fb-origin-0"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-origin-1": {
                transformOrigin: n(449),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-wrap"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(428)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-origin-2": {
                transformOrigin: n(427),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-div"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(462)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(468)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-origin-3": {
                transformOrigin: n(446),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: "fb-div"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(462)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(431)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap .fb-origin-4": {
                transformOrigin: n(433),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(462)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: "fb-origin-4"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap-3 .fb-content": {
                width: n(438),
                left: n(445),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: n(454)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-content"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap-4 .fb-content": {
                width: n(438),
                left: n(445),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: "fb-div"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(432)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(463)
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap-3 .fb-content .fb": {
                width: "695px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: n(454)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(463)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: "fb"
                  }]
                }
              },
              ".fb-box .fb-div .fb-wrap-4 .fb-content .fb": {
                width: n(438),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(436)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(429)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: n(444),
                    v: n(432)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: n(457),
                    i: !1,
                    a: "element",
                    v: n(463)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: n(444),
                    v: "fb"
                  }]
                }
              }
            };
          },
          2125: (t, e, n) => {
            function r(t, e) {
              var n = i();
              return (r = function (t, e) {
                return n[t -= 209];
              })(t, e);
            }
            t = n.nmd(t);
            var a = r;
            function i() {
              var t = ["center", "100%", "absolute", "14304tBoTze", "6348176nZQHRC", "33477856nxovow", "element", "#000000", "750px", "flex", "no-repeat", "100% 100%", "1468bLeLAn", "adb-inject-mask-grey", "adb-inject-container", "8082435DYAAcG", "exports", "1797cRyGNK", "class", "0px", "679350VglRPr", "relative", "3822294nKLwIt"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (973746 == -parseInt(n(229)) / 1 + parseInt(n(215)) / 2 * (parseInt(n(220)) / 3) + -parseInt(n(230)) / 4 + -parseInt(n(218)) / 5 + parseInt(n(223)) / 6 + -parseInt(n(225)) / 7 + parseInt(n(231)) / 8) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(i), t[a(219)] = {
              ".root": {
                position: a(224),
                height: a(227),
                width: a(211)
              },
              ".adb-container": {
                position: a(228),
                top: a(222),
                right: a(222),
                bottom: a(222),
                left: a(222)
              },
              ".adb-inject-container": {
                height: a(227),
                width: a(211),
                display: a(212),
                alignItems: a(226),
                backgroundPosition: a(226),
                backgroundRepeat: a(213),
                backgroundSize: a(214)
              },
              ".adb-inject-container .adb-inject-mask-grey": {
                position: a(228),
                left: a(222),
                top: "0px",
                width: a(227),
                height: a(227),
                opacity: 0.5,
                backgroundColor: a(210),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: a(221),
                    i: !1,
                    a: "element",
                    v: a(217)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: a(221),
                    i: !1,
                    a: "element",
                    v: a(216)
                  }]
                }
              },
              ".adb-inject-container .adb-inject-pop-img": {
                width: a(227),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: a(209),
                    v: a(217)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: a(221),
                    i: !1,
                    a: a(209),
                    v: "adb-inject-pop-img"
                  }]
                }
              }
            };
          },
          1141: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 383];
              })(t, e);
            }
            function i() {
              var t = ["element", "100998Uweveh", "root", "750px", "exports", "3900760yLQvAN", "105438LbXQWD", "279474ITrxHs", "1631112dFJBwO", "mask-box", "100%", "center", "pop-img", "9eHkCTO", "adb-container", "relative", "0px", "5bsOfjF", "100% 100%", "rgba(0,0,0,0)", "class", "1983321KBcGWK", "689560bkIKoZ", "absolute", "49bNNdeT", "691px"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (181592 == parseInt(n(392)) / 1 + -parseInt(n(391)) / 2 * (-parseInt(n(398)) / 3) + -parseInt(n(407)) / 4 * (parseInt(n(402)) / 5) + -parseInt(n(386)) / 6 * (parseInt(n(383)) / 7) + parseInt(n(393)) / 8 + parseInt(n(406)) / 9 + -parseInt(n(390)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(389)] = {
              ".root": {
                position: r(400),
                height: r(395),
                width: r(388),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: r(396),
                backgroundPosition: r(396),
                backgroundRepeat: "no-repeat",
                backgroundSize: r(403)
              },
              ".root .mask-box": {
                position: r(408),
                top: r(401),
                left: "0px",
                right: "0px",
                bottom: r(401),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(405),
                    i: !1,
                    a: r(385),
                    v: r(394)
                  }]
                }
              },
              ".root .pop-img": {
                position: r(408),
                bottom: r(384),
                width: r(395),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(385),
                    v: "root"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(385),
                    v: r(397)
                  }]
                }
              },
              ".root .adb-container": {
                width: r(388),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(385),
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(405),
                    i: !1,
                    a: r(385),
                    v: r(399)
                  }]
                }
              },
              ".root .cover-box": {
                position: r(408),
                top: r(401),
                left: r(401),
                right: r(401),
                bottom: r(401),
                backgroundColor: r(404),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(405),
                    i: !1,
                    a: "element",
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(405),
                    i: !1,
                    a: r(385),
                    v: "cover-box"
                  }]
                }
              }
            };
          },
          8526: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 350];
              })(t, e);
            }
            function i() {
              var t = ["text", "48968gqceYv", "l-divider", "l-app-name", "1487310cAIiJG", "rgba(0,0,0,0.35)", "#3d3d3d", "4wJNkWc", "linner-container", "15RWlqbV", "729hvxhYJ", "#1890ff", "class", "center", "flex-start", "ellipsis", "454218XGEWeh", "exports", "l-comp-name", "45920xJXiOs", "20px", "7UgFrwK", "column", "flex-end", "#aea7a9", "space-between", "16375QpMJSH", "24px", "160px", "60px", "4px", "text-ellipsis", "element", "9005128uYxytu", "0px", "3px", "100%", "1646344zUJmcF", "#5b7adf"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (238307 == -parseInt(n(366)) / 1 + parseInt(n(380)) / 2 * (parseInt(n(388)) / 3) + parseInt(n(386)) / 4 * (parseInt(n(383)) / 5) + parseInt(n(356)) / 6 + -parseInt(n(361)) / 7 * (-parseInt(n(377)) / 8) + parseInt(n(350)) / 9 * (parseInt(n(359)) / 10) + -parseInt(n(373)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(357)] = {
              ".root": {
                justifyContent: r(365),
                width: r(376),
                height: "32px",
                backgroundColor: r(384)
              },
              ".root-fixed": {
                position: "fixed"
              },
              ".root-column": {
                flexDirection: r(362),
                paddingBottom: r(374)
              },
              ".links": {
                height: r(376),
                alignItems: r(354)
              },
              ".link": {
                fontSize: r(367),
                color: r(351)
              },
              ".divider": {
                fontSize: r(367),
                paddingTop: "0px",
                paddingRight: r(370),
                paddingBottom: r(374),
                paddingLeft: r(370),
                marginTop: r(374),
                marginRight: r(370),
                marginBottom: "0px",
                marginLeft: r(370)
              },
              ".meta": {
                flexDirection: r(362),
                alignItems: r(363)
              },
              ".company-name": {
                lines: 1,
                fontSize: r(360),
                color: r(385)
              },
              ".company-name-column": {
                width: r(368),
                textOverflow: r(355)
              },
              ".version": {
                lines: 1,
                fontSize: "20px",
                color: r(385)
              },
              ".linner-container": {
                display: "flex",
                alignItems: r(353),
                height: r(376),
                width: r(376)
              },
              ".linner-container .l-divider": {
                textAlign: r(353),
                paddingTop: r(374),
                paddingRight: "3px",
                paddingBottom: r(374),
                paddingLeft: r(375),
                color: r(364),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: "element",
                    v: r(381)
                  }]
                }
              },
              ".linner-container .text-ellipsis": {
                lines: 1,
                textOverflow: r(355),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: "element",
                    v: r(371)
                  }]
                }
              },
              ".linner-container .l-app-name": {
                width: "50px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: "linner-container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: r(382)
                  }]
                }
              },
              ".linner-container .l-comp-name": {
                width: r(369),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: "linner-container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: "element",
                    v: r(358)
                  }]
                }
              },
              ".linner-container .l-comp-version": {
                width: r(369),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: "element",
                    v: "linner-container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: "l-comp-version"
                  }]
                }
              },
              ".linner-container .l-link": {
                fontSize: r(367),
                color: r(378),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: "l-link"
                  }]
                }
              },
              ".linner-container text": {
                fontSize: r(360),
                color: "#ffffff",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(352),
                    i: !1,
                    a: r(372),
                    v: r(387)
                  }, {
                    t: "d"
                  }, {
                    t: "t",
                    n: r(379)
                  }]
                }
              }
            };
          },
          4437: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 351];
              })(t, e);
            }
            function i() {
              var t = ["3756252vpUFPV", "520px", "20px", "dsi-container", "insert-gg-theme", "relative", "ad-logo", "center", "ad-button", "300px", "class", "exports", "1521005RiwQNV", "24jMmJMY", "huawei-box-theme", "24itmfXA", "0px", "image", "174MVMjMZ", "element", "80px", "1673ayVhRV", "1kbaEea", "3936591sxzBwv", "8038450GIjzaj", "column", "#ffac10", "96px", "absolute", "tip", "150px", "2709927fXmeaN", "image-container", "100%", "1918884mHXrzE", "auto"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (947612 == parseInt(n(383)) / 1 * (parseInt(n(361)) / 2) + parseInt(n(359)) / 3 + -parseInt(n(374)) / 4 * (parseInt(n(373)) / 5) + parseInt(n(379)) / 6 * (-parseInt(n(382)) / 7) + parseInt(n(376)) / 8 * (parseInt(n(384)) / 9) + -parseInt(n(385)) / 10 + -parseInt(n(356)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(372)] = {
              ".huawei-box-theme": {
                position: r(366)
              },
              ".huawei-box-theme .dsi-container": {
                position: r(366),
                width: "360px",
                height: r(355),
                flexShrink: 0,
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }]
                }
              },
              ".huawei-box-theme .dsi-container .image-container": {
                width: r(358),
                justifyContent: r(368),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: "dsi-container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: "image-container"
                  }]
                }
              },
              ".huawei-box-theme .dsi-container .image-container image": {
                objectFit: "contain",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(357)
                  }, {
                    t: "d"
                  }, {
                    t: "t",
                    n: r(378)
                  }]
                }
              },
              ".huawei-box-theme .dsi-container .tip": {
                width: r(358),
                position: "absolute",
                bottom: "0px",
                left: r(377),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(354)
                  }]
                }
              },
              ".huawei-box-theme .dsi-container .tip .ad-logo": {
                position: r(353),
                top: r(377),
                right: r(377),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: "tip"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: "ad-logo"
                  }]
                }
              },
              ".huawei-box-theme .ad-button": {
                width: r(362),
                height: r(381),
                marginTop: r(363),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(375)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(369)
                  }]
                }
              },
              ".insert-gg-theme": {
                flexDirection: r(386)
              },
              ".insert-gg-theme .dsi-container": {
                marginTop: r(377),
                marginRight: r(360),
                marginBottom: r(377),
                marginLeft: r(360),
                width: r(358),
                height: r(370),
                flexDirection: "column",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: "insert-gg-theme"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: "dsi-container"
                  }]
                }
              },
              ".insert-gg-theme .dsi-container .image-container": {
                width: r(358),
                height: r(370),
                justifyContent: r(368),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(365)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(357)
                  }]
                }
              },
              ".insert-gg-theme .dsi-container .image-container image": {
                objectFit: "contain",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: r(365)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(357)
                  }, {
                    t: "d"
                  }, {
                    t: "t",
                    n: r(378)
                  }]
                }
              },
              ".insert-gg-theme .dsi-container .tip": {
                width: "100%",
                position: r(353),
                bottom: r(377),
                left: "0px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: r(365)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(354)
                  }]
                }
              },
              ".insert-gg-theme .dsi-container .tip .ad-logo": {
                position: "absolute",
                top: r(377),
                right: r(377),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: r(380),
                    v: r(365)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(380),
                    v: r(354)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: r(367)
                  }]
                }
              },
              ".insert-gg-theme .ad-button": {
                width: r(362),
                height: "80px",
                marginTop: "30px",
                backgroundColor: r(351),
                color: "#ffffff",
                borderRadius: r(352),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(371),
                    i: !1,
                    a: "element",
                    v: r(365)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: r(369)
                  }]
                }
              }
            };
          },
          9983: (t, e, n) => {
            function r(t, e) {
              var n = i();
              return (r = function (t, e) {
                return n[t -= 285];
              })(t, e);
            }
            t = n.nmd(t);
            var a = r;
            function i() {
              var t = ["exports", "1422252fYlmsw", "8ekqosN", "350367KsecQZ", "64028GdqxEp", "273CULhFO", "35EuKImw", "106254MqLzrR", "7062680shBjfy", "1456378OHPirc", "242935QjUaoP", "24bFBtLu"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (478693 == parseInt(n(294)) / 1 + -parseInt(n(286)) / 2 * (parseInt(n(287)) / 3) + parseInt(n(288)) / 4 * (parseInt(n(290)) / 5) + parseInt(n(291)) / 6 * (parseInt(n(289)) / 7) + parseInt(n(295)) / 8 * (parseInt(n(285)) / 9) + -parseInt(n(292)) / 10 + parseInt(n(293)) / 11) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(i), t[a(296)] = {
              ".huawei-box-theme": {
                position: "relative"
              },
              ".insert-gg-theme": {
                flexDirection: "column"
              },
              ".adtemplate": {
                backgroundColor: "#dd6522"
              }
            };
          },
          6931: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 211];
              })(t, e);
            }
            function i() {
              var t = ["16sCdOSi", "29366bQrZPa", "1265400HUAxqu", "431963jyPzKy", "wrap", "5003778CKtpwN", "2580549Hjutvu", "10XCnNPu", "flex", "exports", "absolute", "32822847cGRAlS", "4557640QKQlHG"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (579351 == -parseInt(n(221)) / 1 * (-parseInt(n(214)) / 2) + -parseInt(n(213)) / 3 + parseInt(n(220)) / 4 * (-parseInt(n(222)) / 5) + -parseInt(n(212)) / 6 + parseInt(n(223)) / 7 + -parseInt(n(219)) / 8 + parseInt(n(218)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(216)] = {
              ".add-exp": {
                position: r(217),
                width: "100%",
                display: r(215),
                flexWrap: r(211)
              }
            };
          },
          9497: (t, e, n) => {
            function r() {
              var t = ["1633440RspCpk", "345597hIpujr", "class", "exports", "column", "1842164NqfYHx", "507576iKQqae", "flex-start", "center", "text", "2738421drOoDW", "973195qVAzkE", "absolute", "flex", "5249322USzHOV", "0px", "element"];
              return (r = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            var a = i;
            function i(t, e) {
              var n = r();
              return (i = function (t, e) {
                return n[t -= 492];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (502575 == -parseInt(n(507)) / 1 + parseInt(n(495)) / 2 + -parseInt(n(506)) / 3 + parseInt(n(494)) / 4 + parseInt(n(500)) / 5 + parseInt(n(503)) / 6 + -parseInt(n(499)) / 7) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[a(492)] = {
              ".gg-privacy": {
                position: a(501),
                top: a(504),
                left: a(504),
                paddingTop: "5px",
                display: a(502),
                flexDirection: a(493),
                justifyContent: a(496),
                alignItems: a(497)
              },
              ".gg-privacy text": {
                color: "rgba(215,215,215,0.5)",
                fontSize: "15px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: a(508),
                    i: !1,
                    a: a(505),
                    v: "gg-privacy"
                  }, {
                    t: "d"
                  }, {
                    t: "t",
                    n: a(498)
                  }]
                }
              },
              ".gg-privacy .tip-text": {
                position: a(501),
                top: "70px",
                left: a(504),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: a(508),
                    i: !1,
                    a: a(505),
                    v: "gg-privacy"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: a(505),
                    v: "tip-text"
                  }]
                }
              }
            };
          },
          8428: (t, e, n) => {
            function r() {
              var t = ["exports", "228204RBGLJD", "10mpXrcQ", "element", "100%", "0px", "default-box", "246808aiDhXT", "default-img", "48GVukUv", "803RhOGEz", "251598WAAJOd", "85330ljMotp", "74605JSHfYT", "871017WkCeFu", "layer-box", "2wZAOKI", "fill", "517503eeJohT", "class"];
              return (r = function () {
                return t;
              })();
            }
            function a(t, e) {
              var n = r();
              return (a = function (t, e) {
                return n[t -= 319];
              })(t, e);
            }
            t = n.nmd(t);
            var i = a;
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (102878 == parseInt(n(319)) / 1 * (parseInt(n(322)) / 2) + -parseInt(n(324)) / 3 + -parseInt(n(333)) / 4 + -parseInt(n(328)) / 5 * (parseInt(n(337)) / 6) + -parseInt(n(320)) / 7 + parseInt(n(335)) / 8 * (-parseInt(n(327)) / 9) + -parseInt(n(338)) / 10 * (-parseInt(n(336)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[i(326)] = {
              ".layer-box": {
                width: i(330),
                height: i(330)
              },
              ".layer-box .default-box": {
                width: i(330),
                height: i(330),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: i(329),
                    v: i(321)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: i(329),
                    v: "default-box"
                  }]
                }
              },
              ".layer-box .default-box .default-img": {
                width: i(330),
                height: i(330),
                objectFit: i(323),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: i(329),
                    v: "layer-box"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: i(329),
                    v: i(332)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: "element",
                    v: i(334)
                  }]
                }
              },
              ".layer-box .gg-box": {
                position: "absolute",
                top: i(331),
                left: i(331),
                right: "0px",
                bottom: i(331),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: i(325),
                    i: !1,
                    a: i(329),
                    v: i(321)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "gg-box"
                  }]
                }
              }
            };
          },
          3947: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 261];
              })(t, e);
            }
            function i() {
              var t = ["class", "menu-bar-box", "100%", "exports", "36CmKiuv", "img", "745DxwmLF", "80px", "371BjwnmA", "326pgRYuF", "91930FvasrU", "absolute", "6348OiOnwO", "187XSauZp", "element", "976573GLxBpo", "20px", "0px", "20528rLRdhh", "349515KDvIbv", "8sFNpoL", "198711MAcLJN", "597pbsgHe"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (100224 == -parseInt(n(278)) / 1 * (-parseInt(n(265)) / 2) + -parseInt(n(277)) / 3 * (-parseInt(n(276)) / 4) + -parseInt(n(262)) / 5 * (parseInt(n(268)) / 6) + parseInt(n(264)) / 7 * (parseInt(n(274)) / 8) + -parseInt(n(275)) / 9 + parseInt(n(266)) / 10 * (parseInt(n(269)) / 11) + -parseInt(n(283)) / 12 * (parseInt(n(271)) / 13)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(282)] = {
              ".menu-bar": {
                position: r(267),
                top: r(263),
                right: r(273)
              },
              ".menu-bar-box": {
                height: "80px",
                paddingRight: r(272),
                paddingTop: "20px"
              },
              ".menu-bar-box .img": {
                height: r(281),
                opacity: 1,
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(279),
                    i: !1,
                    a: r(270),
                    v: r(280)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(270),
                    v: r(261)
                  }]
                }
              }
            };
          },
          8520: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 364];
              })(t, e);
            }
            function i() {
              var t = ["2348384yETnQg", "10pQIRwe", "80px", "100%", "954288DpFgbZ", "302715ikAEXV", "1868398NNELdT", "class", "navigator-bar", "exports", "38206uUBfaC", "88936EVWxUf", "4773789Mmrpqd", "img", "750px", "element", "5KUhGpY", "absolute"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (294881 == parseInt(n(372)) / 1 * (parseInt(n(366)) / 2) + -parseInt(n(379)) / 3 + -parseInt(n(367)) / 4 * (parseInt(n(375)) / 5) + -parseInt(n(378)) / 6 + parseInt(n(380)) / 7 + -parseInt(n(374)) / 8 + parseInt(n(368)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(365)] = {
              ".navigator-bar": {
                position: r(373),
                left: "0px",
                bottom: "0px",
                width: r(377)
              },
              ".navigator-bar .img": {
                height: r(376),
                width: r(370),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(371),
                    v: r(364)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(381),
                    i: !1,
                    a: r(371),
                    v: r(369)
                  }]
                }
              }
            };
          },
          2653: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 263];
              })(t, e);
            }
            function i() {
              var t = ["fill", "10px", "layer-video", "class", "entry-root", "1389JLtvzZ", "absolute", "9055977mvGHhW", "loading-text", "web-comp", "column", "5344250brfKOh", "0px", "#FFFFFF", "element", "6964tnFDKw", "39034764JuvPwm", "885024WPcVAN", "exports", "3941688oustaJ", "center", "5JTPFqE", "flex", "80px", "loading", "726992NwICSn", "10CZRXIj"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (942452 == -parseInt(n(281)) / 1 * (parseInt(n(285)) / 2) + parseInt(n(265)) / 3 * (-parseInt(n(275)) / 4) + parseInt(n(271)) / 5 + -parseInt(n(279)) / 6 + -parseInt(n(267)) / 7 + parseInt(n(277)) / 8 + parseInt(n(276)) / 9 * (parseInt(n(286)) / 10)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(278)] = {
              ".entry-root .layer-video": {
                position: r(266),
                backgroundColor: r(273),
                opacity: 0,
                display: "none",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: r(264)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: "element",
                    v: r(289)
                  }]
                }
              },
              ".entry-root .web-comp": {
                position: r(266),
                width: r(272),
                height: r(272),
                opacity: 0,
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: r(274),
                    v: "entry-root"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: r(274),
                    v: r(269)
                  }]
                }
              },
              ".entry-root .loading": {
                position: r(266),
                top: "0px",
                left: r(272),
                right: r(272),
                bottom: "0px",
                display: r(282),
                flexDirection: r(270),
                justifyContent: r(280),
                alignItems: r(280),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: r(274),
                    v: "entry-root"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: "element",
                    v: r(284)
                  }]
                }
              },
              ".entry-root .loading-img": {
                width: "80px",
                height: r(283),
                objectFit: r(287),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: r(274),
                    v: "entry-root"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: r(263),
                    i: !1,
                    a: "element",
                    v: "loading-img"
                  }]
                }
              },
              ".entry-root .loading-text": {
                marginTop: r(288),
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: r(274),
                    v: r(264)
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: r(268)
                  }]
                }
              }
            };
          },
          518: t => {
            function e(t, n) {
              var a = r();
              return (e = function (t, e) {
                return a[t -= 158];
              })(t, n);
            }
            var n = e;
            function r() {
              var t = ["9696240IJisZc", "435064xCqIDv", "div", "fb-div", "delt", "adId", "kfContentPa", "fb-content", "fb-origin-", "block", "fb-box", "6181050OWAnil", "92xESQsX", "uniqueId", "loopArr", "$idx", "33816JLNVJr", "1625472SaoRlN", "19390eFsDtN", "1119140lVnhRa", "default"];
              return (r = function () {
                return t;
              })();
            }
            (function (t, n) {
              for (var r = e, a = t();;) try {
                if (851569 == -parseInt(r(171)) / 1 * (-parseInt(r(177)) / 2) + -parseInt(r(175)) / 3 + parseInt(r(178)) / 4 + parseInt(r(170)) / 5 + -parseInt(r(176)) / 6 + -parseInt(r(160)) / 7 + -parseInt(r(159)) / 8) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(r), t.exports = {
              type: n(161),
              attr: {},
              classList: [n(169)],
              children: [{
                type: n(161),
                attr: {},
                classList: [n(165)],
                children: [{
                  type: "slot",
                  attr: {
                    name: n(158)
                  }
                }]
              }, {
                type: "block",
                attr: {},
                shown: function () {
                  return this.adId;
                },
                children: [{
                  type: n(161),
                  attr: {},
                  classList: [n(162)],
                  children: [{
                    type: n(168),
                    attr: {
                      tid: n(172)
                    },
                    repeat: {
                      exp: function () {
                        return this[n(173)];
                      },
                      value: "i"
                    },
                    children: [{
                      type: n(161),
                      attr: {},
                      classList: function () {
                        return ["fb-wrap", "fb-wrap-" + this[n(174)]];
                      },
                      children: [{
                        type: "div",
                        attr: {},
                        classList: function () {
                          var t = n;
                          return [t(166), "" + t(167) + (this[t(174)] + this[t(163)]) % 5];
                        },
                        children: [{
                          type: "ad-button",
                          attr: {
                            valuetype: "0",
                            adid: function () {
                              return this[n(164)];
                            },
                            adunitid: function () {
                              return this.adUnitId;
                            }
                          },
                          classList: ["fb"],
                          events: {
                            touchstart: "touchStart",
                            click: "emitClick"
                          }
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            };
          },
          8785: t => {
            function e(t, n) {
              var a = r();
              return (e = function (t, e) {
                return a[t -= 123];
              })(t, n);
            }
            var n = e;
            function r() {
              var t = ["310585ovyLxE", "bgImg", "image", "div", "ggId", "2JPwQye", "144yUYnvT", "549834sxlcSf", "1581970jvUmqU", "frameMaskOpacity", "204wMOGUI", "layerLocationStyle", "19986moyeAB", "adb-inject-container", "navigatorLoaded", "menu-bar", "popImg", "4cIhtqD", "handleImgClick", "adb-container", "2135495HBzeEM", "btnCanRender", "navigator-bar", "adId", "handleClick", "125475VUdzoO", "adb-huawei-slot", "adb-inject-mask-grey", "9jALtmm", "paddingBottom", "adb-inject-pop-img", "dsi", "58901lCVrhQ"];
              return (r = function () {
                return t;
              })();
            }
            (function (t, n) {
              for (var r = e, a = t();;) try {
                if (255435 == parseInt(r(128)) / 1 + parseInt(r(134)) / 2 * (-parseInt(r(141)) / 3) + parseInt(r(146)) / 4 * (parseInt(r(149)) / 5) + parseInt(r(136)) / 6 + parseInt(r(154)) / 7 * (parseInt(r(135)) / 8) + parseInt(r(124)) / 9 * (-parseInt(r(137)) / 10) + parseInt(r(129)) / 11 * (-parseInt(r(139)) / 12)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(r), t.exports = {
              type: n(132),
              attr: {},
              classList: ["root"],
              children: [{
                type: "div",
                attr: {},
                classList: [n(148)],
                children: [{
                  type: n(155),
                  attr: {
                    adUnitId: function () {
                      var t = n;
                      return this[t(127)][t(133)];
                    },
                    adId: function () {
                      var t = n;
                      return this[t(127)][t(152)];
                    }
                  },
                  shown: function () {
                    return this[n(150)];
                  },
                  events: {
                    "row-img-click": n(147),
                    "row-adb-click": "handleClick"
                  },
                  children: [{
                    type: n(132),
                    attr: {},
                    classList: ["adb-inject-container"],
                    style: {
                      backgroundImage: function () {
                        return this[n(130)];
                      },
                      alignItems: function () {
                        return this[n(140)];
                      },
                      paddingBottom: function () {
                        return this[n(125)];
                      }
                    },
                    children: [{
                      type: n(132),
                      attr: {},
                      classList: [n(123)],
                      style: {
                        opacity: function () {
                          return this.frameMaskOpacity;
                        }
                      }
                    }, {
                      type: n(144),
                      attr: {}
                    }, {
                      type: n(131),
                      attr: {
                        src: function () {
                          return this[n(145)];
                        }
                      },
                      classList: ["adb-inject-pop-img"]
                    }, {
                      type: n(151),
                      attr: {},
                      events: {
                        "navigator-loaded": n(143)
                      }
                    }]
                  }]
                }, {
                  type: n(132),
                  attr: {},
                  shown: function () {
                    return !this[n(150)];
                  },
                  classList: [n(142)],
                  style: {
                    backgroundImage: function () {
                      return this[n(130)];
                    },
                    alignItems: function () {
                      return this[n(140)];
                    },
                    paddingBottom: function () {
                      return this[n(125)];
                    }
                  },
                  events: {
                    click: n(153)
                  },
                  children: [{
                    type: n(132),
                    attr: {},
                    classList: [n(123)],
                    style: {
                      opacity: function () {
                        return this[n(138)];
                      }
                    }
                  }, {
                    type: n(144),
                    attr: {}
                  }, {
                    type: n(131),
                    attr: {
                      src: function () {
                        return this[n(145)];
                      }
                    },
                    classList: [n(126)]
                  }, {
                    type: n(151),
                    attr: {},
                    events: {
                      "navigator-loaded": n(143)
                    }
                  }]
                }]
              }]
            };
          },
          3349: (t, e, n) => {
            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 227];
              })(t, e);
            }
            function a() {
              var t = ["ict", "3991816LoRnmH", "handleShow", "/packages/fmmf/node_modules/@one-piece-official/qa-base/gg/ui/ctr-tpl-huawei/pop", "popImg", "handleTouch", "rootStyle", "cover-box", "clkCover", "menu-bar", "820844JmDodF", "clked", "div", "49PQqHVG", "maskStyle", "2567820oYgdIJ", "adb-inject-container", "adb-container", "mask-box", "image", "21mGkbmF", "730uBKDHh", "ad-template", "6061gtLsYZ", "handleStatus", "handleAllClick", "handleErr", "94273enEERE", "handleFeedback", "handleCoverClk", "allStyle", "exports", "root", "682098OrRHjW", "20xzRybv", "9MySHJn", "adId", "28698492PXrcNX", "13CbCODX", "gg-template"];
              return (a = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            var i = r;
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (753305 == parseInt(n(264)) / 1 * (-parseInt(n(231)) / 2) + -parseInt(n(257)) / 3 * (parseInt(n(247)) / 4) + -parseInt(n(252)) / 5 + parseInt(n(230)) / 6 * (parseInt(n(250)) / 7) + parseInt(n(238)) / 8 * (parseInt(n(232)) / 9) + -parseInt(n(258)) / 10 * (parseInt(n(260)) / 11) + -parseInt(n(234)) / 12 * (-parseInt(n(235)) / 13)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(a), t[i(228)] = {
              type: i(249),
              attr: {},
              classList: [i(229)],
              style: function () {
                return this[i(243)];
              },
              children: [{
                type: "div",
                attr: {},
                classList: [i(255)],
                style: function () {
                  return this[i(251)];
                }
              }, {
                type: i(256),
                attr: {
                  src: function () {
                    return this[i(241)];
                  },
                  alt: i(240)
                },
                classList: ["pop-img"]
              }, {
                type: i(246),
                attr: {}
              }, {
                type: "navigator-bar",
                attr: {}
              }, {
                type: i(249),
                attr: {},
                classList: [i(254)],
                style: function () {
                  return this[i(227)].ct;
                },
                children: [{
                  type: i(249),
                  attr: {},
                  classList: [i(253)],
                  style: function () {
                    var t = i;
                    return this[t(227)][t(237)];
                  },
                  children: [{
                    type: i(259),
                    attr: {
                      adid: function () {
                        var t = i;
                        return this.dsi[t(233)];
                      }
                    },
                    classList: [i(236)],
                    style: function () {
                      return this[i(227)].gg;
                    },
                    events: {
                      error: i(263),
                      feedback: i(265),
                      adimpression: i(239),
                      adclick: "handleClick",
                      downloadstatus: i(261),
                      click: i(262),
                      touchend: i(242)
                    }
                  }]
                }]
              }, {
                type: i(249),
                attr: {},
                shown: function () {
                  var t = i;
                  return this[t(245)] || this[t(248)];
                },
                classList: [i(244)],
                events: {
                  click: i(266)
                }
              }]
            };
          },
          5795: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 301];
              })(t, e);
            }
            function i() {
              var t = ["company-name-", "linner-container", "1548674NVvjVW", "2499205GKzcQN", "linear", " \u9690\u79C1 ", "div", "version-", "divider", " \u4ECB\u7ECD ", "ad-clickable-area", "l-comp-name", "430232gxIWLd", "5682ybfAig", "column", "appPrivacyUrl", "8458304aSlxkL", "31889106EjwwqY", "3fwdzrd", "l-divider", "l-link", "text", "version", "l-app-name", "links", "legalInfo", "text-ellipsis", " \u6743\u9650 ", " | ", "root", "block", "appCompany", "privacy", "handleIntroClick", "hasPrivacy", "683171wJyjWt", "link", "mode", "handlePrivacyClick", "exports", "handlePermissionClick", "l-comp-version", "appVersion", "appName", "9107PcMbZy", "company-name", "appPermissionUrl", "appIntroductionUrl", "hasIntro"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (737666 == -parseInt(n(338)) / 1 + -parseInt(n(305)) / 2 * (-parseInt(n(321)) / 3) + -parseInt(n(315)) / 4 + -parseInt(n(306)) / 5 + parseInt(n(316)) / 6 * (-parseInt(n(347)) / 7) + -parseInt(n(319)) / 8 + parseInt(n(320)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(342)] = {
              type: "div",
              attr: {},
              classList: [r(332)],
              children: [{
                type: r(333),
                attr: {},
                shown: function () {
                  var t = r;
                  return this[t(340)] === t(317);
                },
                children: [{
                  type: r(309),
                  attr: {},
                  style: {
                    justifyContent: "space-between"
                  },
                  children: [{
                    type: r(324),
                    attr: {
                      value: function () {
                        return this[r(328)].appCompany;
                      }
                    },
                    classList: function () {
                      var t = r;
                      return [t(348), "" + t(303) + this.mode];
                    },
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(334)];
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: function () {
                        var t = r;
                        return "v" + this[t(328)][t(345)];
                      }
                    },
                    classList: function () {
                      var t = r;
                      return ["version", "" + t(310) + this[t(340)]];
                    },
                    shown: function () {
                      return this[r(328)].appVersion;
                    }
                  }]
                }, {
                  type: "div",
                  attr: {},
                  children: [{
                    type: r(324),
                    attr: {
                      value: r(308)
                    },
                    classList: [r(339)],
                    shown: function () {
                      return this[r(328)].appPrivacyUrl;
                    },
                    events: {
                      click: r(341)
                    }
                  }, {
                    type: r(313),
                    attr: {
                      type: r(335)
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(337)];
                    },
                    classList: ["link"]
                  }, {
                    type: "text",
                    attr: {
                      value: r(331)
                    },
                    shown: function () {
                      var t = r;
                      return this.legalInfo.appPermissionUrl && this[t(328)][t(318)];
                    },
                    classList: ["divider"]
                  }, {
                    type: "text",
                    attr: {
                      value: r(330)
                    },
                    classList: [r(339)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(349)];
                    },
                    events: {
                      click: r(343)
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: r(331)
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(349)] && (this.legalInfo.hasIntro || this[t(328)][t(301)]);
                    },
                    classList: [r(311)]
                  }, {
                    type: "text",
                    attr: {
                      value: r(312)
                    },
                    classList: [r(339)],
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(302)] || this[t(328)][t(301)];
                    },
                    events: {
                      click: r(336)
                    }
                  }]
                }]
              }, {
                type: r(333),
                attr: {},
                shown: function () {
                  var t = r;
                  return this[t(340)] === t(307) && !("column" === this[t(340)]);
                },
                children: [{
                  type: "div",
                  attr: {},
                  classList: [r(304)],
                  children: [{
                    type: r(324),
                    attr: {
                      value: function () {
                        return this[r(328)].appName;
                      }
                    },
                    classList: [r(326), r(329)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(346)];
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: "|"
                    },
                    classList: [r(322)],
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(346)];
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: function () {
                        var t = r;
                        return this.legalInfo[t(334)];
                      }
                    },
                    classList: [r(314), r(329)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(334)];
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: "|"
                    },
                    classList: [r(322)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(334)];
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        return this[r(328)].appVersion;
                      }
                    },
                    classList: [r(344), r(329)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(345)];
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: "|"
                    },
                    classList: [r(322)],
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(345)];
                    }
                  }, {
                    type: r(313),
                    attr: {
                      type: r(335)
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(337)];
                    },
                    classList: [r(339)]
                  }, {
                    type: r(324),
                    attr: {
                      value: r(308)
                    },
                    classList: [r(323)],
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(318)];
                    },
                    events: {
                      click: r(341)
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: " | "
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)].appPermissionUrl && this[t(328)][t(318)];
                    },
                    classList: ["l-divider"]
                  }, {
                    type: "text",
                    attr: {
                      value: r(330)
                    },
                    classList: ["l-link"],
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(349)];
                    },
                    events: {
                      click: r(343)
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: " | "
                    },
                    classList: ["l-divider"],
                    shown: function () {
                      var t = r;
                      return this[t(328)].appPermissionUrl && (this.legalInfo.hasIntro || this[t(328)].appIntroductionUrl);
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: r(312)
                    },
                    classList: [r(323)],
                    shown: function () {
                      var t = r;
                      return this.legalInfo[t(302)] || this[t(328)].appIntroductionUrl;
                    },
                    events: {
                      click: r(336)
                    }
                  }]
                }]
              }, {
                type: "block",
                attr: {},
                shown: function () {
                  var t = r;
                  return !("column" === this[t(340)] || this[t(340)] === t(307));
                },
                children: [{
                  type: r(309),
                  attr: {},
                  classList: [r(327)],
                  children: [{
                    type: r(324),
                    attr: {
                      value: r(308)
                    },
                    classList: [r(339)],
                    shown: function () {
                      return this[r(328)].appPrivacyUrl;
                    },
                    events: {
                      click: r(341)
                    }
                  }, {
                    type: r(313),
                    attr: {
                      type: r(335)
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(337)];
                    },
                    classList: [r(339)]
                  }, {
                    type: "text",
                    attr: {
                      value: " | "
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)][t(349)] && this.legalInfo[t(318)];
                    },
                    classList: ["divider"]
                  }, {
                    type: r(324),
                    attr: {
                      value: r(330)
                    },
                    classList: [r(339)],
                    shown: function () {
                      return this[r(328)].appPermissionUrl;
                    },
                    events: {
                      click: r(343)
                    }
                  }, {
                    type: r(324),
                    attr: {
                      value: " | "
                    },
                    shown: function () {
                      var t = r;
                      return this[t(328)].appPermissionUrl && (this[t(328)][t(302)] || this[t(328)][t(301)]);
                    },
                    classList: [r(311)]
                  }, {
                    type: r(324),
                    attr: {
                      value: r(312)
                    },
                    classList: ["link"],
                    shown: function () {
                      var t = r;
                      return this[t(328)].hasIntro || this[t(328)][t(301)];
                    },
                    events: {
                      click: r(336)
                    }
                  }]
                }, {
                  type: r(309),
                  attr: {},
                  classList: ["meta"],
                  shown: function () {
                    var t = r;
                    return this[t(328)][t(334)] || this[t(328)][t(345)];
                  },
                  children: [{
                    type: "text",
                    attr: {
                      value: function () {
                        return this[r(328)].appCompany;
                      }
                    },
                    classList: [r(348)],
                    shown: function () {
                      return this.legalInfo.appCompany;
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        var t = r;
                        return "v" + this.legalInfo[t(345)];
                      }
                    },
                    classList: [r(325)],
                    shown: function () {
                      return this[r(328)].appVersion;
                    }
                  }]
                }]
              }]
            };
          },
          465: (t, e, n) => {
            function r() {
              var t = ["48fDgFIS", "2645262TVbVCa", "56748GtkySh", "282765rrVvDb", "674193fBaZlG", "6085902XrQnMn", "45250xOWXgA", "23RLZitU", "text", "15OUnTAP", "5FCQykO", "root", "113472ybOPTT", "319kOhmUt", "20uNBGOt", "exports", "div"];
              return (r = function () {
                return t;
              })();
            }
            function a(t, e) {
              var n = r();
              return (a = function (t, e) {
                return n[t -= 146];
              })(t, e);
            }
            t = n.nmd(t);
            var i = a;
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (657324 == parseInt(n(150)) / 1 * (parseInt(n(149)) / 2) + -parseInt(n(152)) / 3 * (-parseInt(n(155)) / 4) + parseInt(n(153)) / 5 * (parseInt(n(148)) / 6) + -parseInt(n(146)) / 7 * (parseInt(n(160)) / 8) + parseInt(n(161)) / 9 * (-parseInt(n(157)) / 10) + -parseInt(n(156)) / 11 * (parseInt(n(162)) / 12) + -parseInt(n(147)) / 13) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[i(158)] = {
              type: i(159),
              attr: {},
              classList: [i(154)],
              children: [{
                type: i(151),
                attr: {
                  value: "\u5E7F\u544A"
                },
                classList: [i(151)]
              }]
            };
          },
          5998: (t, e, n) => {
            function r() {
              var t = ["262vorxav", "adUnitId", "ad-button", "adId", "styleTheme", "image", "5452030FqAFkW", "showTip", "image-container", "55458DHAwRw", "11mrPVPd", "529GQLayH", "imgURL", "block", "dsi", "3FwqoQo", "tip", "exports", "handleImgClick", "9027347RmIVoo", "closed", "logo", "handleAdbClick", "7400600FvhecM", "7958718IwBnQt", "2719756ZMARRz", "div", "dsi-container", "690aIZUxb"];
              return (r = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            var a = i;
            function i(t, e) {
              var n = r();
              return (i = function (t, e) {
                return n[t -= 263];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (690341 == -parseInt(n(271)) / 1 * (-parseInt(n(289)) / 2) + -parseInt(n(275)) / 3 * (parseInt(n(285)) / 4) + -parseInt(n(288)) / 5 * (-parseInt(n(269)) / 6) + parseInt(n(279)) / 7 + -parseInt(n(283)) / 8 + -parseInt(n(284)) / 9 + parseInt(n(266)) / 10 * (parseInt(n(270)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[a(277)] = {
              type: a(286),
              attr: {},
              classList: function () {
                return ["box-cls", this[a(264)]];
              },
              children: [{
                type: a(273),
                attr: {},
                shown: function () {
                  var t = a;
                  return !this[t(280)] && this[t(263)];
                },
                children: [{
                  type: a(286),
                  attr: {},
                  classList: [a(287)],
                  children: [{
                    type: a(286),
                    attr: {},
                    classList: [a(268)],
                    events: {
                      click: a(278)
                    },
                    children: [{
                      type: a(265),
                      attr: {
                        src: function () {
                          return this[a(272)];
                        }
                      },
                      classList: [a(265)]
                    }]
                  }, {
                    type: "div",
                    attr: {},
                    classList: [a(276)],
                    shown: function () {
                      return this[a(267)];
                    },
                    children: [{
                      type: a(286),
                      attr: {},
                      classList: ["ad-logo"],
                      children: [{
                        type: a(281),
                        attr: {}
                      }]
                    }, {
                      type: "legal",
                      attr: {
                        dsi: function () {
                          return this[a(274)];
                        }
                      }
                    }]
                  }]
                }, {
                  type: a(291),
                  attr: {
                    valuetype: "0",
                    adid: function () {
                      return this[a(263)];
                    },
                    adunitid: function () {
                      return this[a(290)];
                    }
                  },
                  shown: function () {
                    return this.showAdb;
                  },
                  classList: [a(291)],
                  events: {
                    click: a(282)
                  }
                }]
              }]
            };
          },
          5751: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 407];
              })(t, e);
            }
            function i() {
              var t = ["2248gfUbvZ", "handleClx", "8FFdgBw", "704kuFwZJ", "2290ozshFZ", "handleShow", "60Zltick", "div", "302799dmSWxT", "2672928GPtRnu", "31874AhfRGA", "box-cls", "exports", "handleErr", "adId", "closed", "155450vCKKFD", "ad-template", "492947yhHrkZ", "2705310IzAzeU"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (262358 == parseInt(n(424)) / 1 + parseInt(n(416)) / 2 * (parseInt(n(412)) / 3) + -parseInt(n(426)) / 4 * (-parseInt(n(410)) / 5) + parseInt(n(415)) / 6 + -parseInt(n(414)) / 7 * (-parseInt(n(408)) / 8) + -parseInt(n(425)) / 9 + -parseInt(n(422)) / 10 * (parseInt(n(409)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(418)] = {
              type: r(413),
              attr: {},
              classList: function () {
                return [r(417), this.styleTheme];
              },
              children: [{
                type: "block",
                attr: {},
                shown: function () {
                  return !this[r(421)] && this.adId;
                },
                children: [{
                  type: r(423),
                  attr: {
                    adid: function () {
                      return this[r(420)];
                    }
                  },
                  classList: ["adtemplate"],
                  events: {
                    error: r(419),
                    feedback: r(407),
                    adimpression: r(411),
                    click: "handleClk"
                  }
                }]
              }]
            };
          },
          4855: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 255];
              })(t, e);
            }
            function i() {
              var t = ["dsi", "renderGroup", "3031846bBdIoJ", "8BlpfKD", "exports", "key", "6748565TbIWNL", "$item", "14749FEmFHY", "1242669lfqlHM", "673464DxqMlj", "4iGtAAL", "add-item", "handleCls", "56695878KoHIMp", "8674746EPRiiD", "component", "expDuration", "compName", "option", "div"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (902535 == -parseInt(n(270)) / 1 + -parseInt(n(262)) / 2 + -parseInt(n(269)) / 3 * (parseInt(n(271)) / 4) + -parseInt(n(266)) / 5 + -parseInt(n(275)) / 6 + parseInt(n(268)) / 7 + parseInt(n(263)) / 8 * (parseInt(n(274)) / 9)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(264)] = {
              type: "div",
              attr: {},
              classList: ["add-exp"],
              children: [{
                type: r(259),
                attr: {
                  tid: function () {
                    var t = r;
                    return this.$item[t(265)];
                  }
                },
                classList: [r(272)],
                repeat: function () {
                  return this[r(261)];
                },
                children: [{
                  type: r(255),
                  attr: {
                    item: function () {
                      return this[r(267)];
                    },
                    option: function () {
                      return this[r(258)];
                    },
                    dsi: function () {
                      var t = r;
                      return this.$item[t(260)];
                    },
                    showTip: function () {
                      return !0;
                    },
                    showAdb: function () {
                      return !0;
                    },
                    expDuration: function () {
                      return this[r(256)];
                    }
                  },
                  is: function () {
                    var t = r;
                    return this[t(267)][t(257)];
                  },
                  events: {
                    cls: r(273)
                  }
                }]
              }]
            };
          },
          9044: (t, e, n) => {
            t = n.nmd(t);
            var r = a;
            function a(t, e) {
              var n = i();
              return (a = function (t, e) {
                return n[t -= 374];
              })(t, e);
            }
            function i() {
              var t = ["1653048ZFTbwe", "207020aicrwm", "186022jnEdrm", "30fyRfHx", "gg-privacy", "userId", "exports", "text", "handleSwitch", "5912TtJQEo", "88398zRgakP", "60Lvpadr", "handleLinkClick", "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u300A\u9690\u79C1\u653F\u7B56\u548C\u7528\u6237\u534F\u8BAE\u300B", "2ORsPoo", "749edpcgr", "div", "privacyShow", "tip-text", "2791690zFUVQK", "3831gPOYZy", "boxStyle"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (128526 == -parseInt(n(378)) / 1 * (-parseInt(n(390)) / 2) + parseInt(n(374)) / 3 * (parseInt(n(387)) / 4) + -parseInt(n(379)) / 5 * (parseInt(n(386)) / 6) + -parseInt(n(391)) / 7 * (parseInt(n(385)) / 8) + -parseInt(n(376)) / 9 + parseInt(n(377)) / 10 + parseInt(n(395)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), t[r(382)] = {
              type: r(392),
              attr: {},
              classList: [r(380)],
              style: function () {
                return this[r(375)];
              },
              children: [{
                type: r(392),
                attr: {},
                children: [{
                  type: r(383),
                  attr: {
                    value: function () {
                      return this[r(381)];
                    }
                  }
                }]
              }, {
                type: "div",
                attr: {},
                shown: function () {
                  return this[r(393)];
                },
                children: [{
                  type: r(383),
                  attr: {
                    value: function () {
                      return this.agreed ? "\u2611" : "\u2612";
                    }
                  },
                  events: {
                    click: r(384)
                  }
                }, {
                  type: r(383),
                  attr: {
                    value: r(389)
                  },
                  events: {
                    click: r(388)
                  }
                }]
              }, {
                type: r(392),
                attr: {},
                classList: [r(394)],
                children: [{
                  type: r(383),
                  attr: {
                    value: "\u8BE5\u9875\u9762\u4E3A\u5E7F\u544A\u7D20\u6750\uFF0C\u70B9\u51FB\u5C4F\u5E55\u5B89\u88C5/\u5524\u8D77\u5E94\u7528\u6216\u4E0A\u6ED1\u5173\u95ED"
                  }
                }]
              }]
            };
          },
          27: (t, e, n) => {
            function r(t, e) {
              var n = i();
              return (r = function (t, e) {
                return n[t -= 412];
              })(t, e);
            }
            t = n.nmd(t);
            var a = r;
            function i() {
              var t = ["handleActClk", "targetBright", "6BnCixB", "handleLayerClk", "gg-privacy", "privacyTrigger", "32939235KrUWfi", "layerCompName", "handleLayerCls", "layerMaterial", "layer-box", "3357788QrFViV", "block", "defaultImg", "278288uMTuvh", "93DGvXgk", "menu-bar", "feed-back-fixed", "3652830hOkFyK", "actCompName", "image", "component", "exports", "103936EyjWVF", "originBright", "layer-native-huawei", "170444mpeVPQ", "layer-tpl-huawei", "div", "layer_box", "644762vpJtZx", "default-box", "stack", "actMaterial", "handleActCls", "navigator-bar"];
              return (i = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (737193 == -parseInt(n(431)) / 1 + -parseInt(n(438)) / 2 + parseInt(n(423)) / 3 * (-parseInt(n(434)) / 4) + -parseInt(n(426)) / 5 + parseInt(n(446)) / 6 * (-parseInt(n(419)) / 7) + parseInt(n(422)) / 8 + parseInt(n(414)) / 9) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(i), t[a(430)] = {
              type: a(440),
              attr: {
                id: a(437)
              },
              classList: [a(418)],
              id: "layer_box",
              children: [{
                type: a(436),
                attr: {},
                classList: [a(439)],
                children: [{
                  type: a(428),
                  attr: {
                    src: function () {
                      return this[a(421)];
                    }
                  },
                  classList: ["default-img"]
                }, {
                  type: a(424),
                  attr: {}
                }, {
                  type: a(443),
                  attr: {}
                }]
              }, {
                type: a(436),
                attr: {},
                shown: function () {
                  return this.layerMaterial;
                },
                classList: ["gg-box"],
                children: [{
                  type: a(435),
                  attr: {
                    ggMaterial: function () {
                      return this.layerMaterial;
                    },
                    originBright: function () {
                      return this[a(432)];
                    },
                    targetBright: function () {
                      return this[a(445)];
                    }
                  },
                  shown: function () {
                    var t = a;
                    return this[t(415)] === t(435);
                  },
                  events: {
                    clk: "handleLayerClk",
                    cls: a(416)
                  }
                }, {
                  type: a(433),
                  attr: {
                    ggMaterial: function () {
                      return this[a(417)];
                    },
                    originBright: function () {
                      return this.originBright;
                    },
                    targetBright: function () {
                      return this[a(445)];
                    }
                  },
                  shown: function () {
                    var t = a;
                    return "layer-native-huawei" === this[t(415)] && !(this[t(415)] === t(435));
                  },
                  events: {
                    clk: a(447)
                  }
                }, {
                  type: "block",
                  attr: {},
                  shown: function () {
                    var t = a;
                    return !(this[t(415)] === t(435) || this[t(415)] === t(433));
                  },
                  children: [{
                    type: a(429),
                    attr: {
                      ggMaterial: function () {
                        return this[a(417)];
                      }
                    },
                    is: function () {
                      return this[a(415)];
                    },
                    events: {
                      clk: "handleLayerClk"
                    }
                  }]
                }]
              }, {
                type: a(436),
                attr: {},
                shown: function () {
                  return this[a(441)];
                },
                classList: ["gg-box"],
                children: [{
                  type: a(435),
                  attr: {
                    ggMaterial: function () {
                      return this[a(441)];
                    },
                    originBright: function () {
                      return this.originBright;
                    },
                    targetBright: function () {
                      return this.targetBright;
                    }
                  },
                  shown: function () {
                    var t = a;
                    return this[t(427)] === t(435);
                  },
                  events: {
                    clk: a(444),
                    cls: a(442)
                  }
                }, {
                  type: a(433),
                  attr: {
                    ggMaterial: function () {
                      return this[a(441)];
                    },
                    originBright: function () {
                      return this[a(432)];
                    },
                    targetBright: function () {
                      return this.targetBright;
                    }
                  },
                  shown: function () {
                    var t = a;
                    return "layer-native-huawei" === this[t(427)] && !(this.actCompName === t(435));
                  },
                  events: {
                    clk: a(444)
                  }
                }, {
                  type: a(420),
                  attr: {},
                  shown: function () {
                    var t = a;
                    return !(this[t(427)] === t(435) || this[t(427)] === t(433));
                  },
                  children: [{
                    type: "component",
                    attr: {
                      ggMaterial: function () {
                        return this[a(441)];
                      }
                    },
                    is: function () {
                      return this.actCompName;
                    },
                    events: {
                      clk: a(444)
                    }
                  }]
                }]
              }, {
                type: a(412),
                attr: {
                  trigger: function () {
                    return this[a(413)];
                  }
                }
              }, {
                type: a(425),
                attr: {}
              }]
            };
          },
          1133: (t, e, n) => {
            function r() {
              var t = ["387tmpzWS", "93BXgrrO", "18620VbbZGw", "isShow", "34622WGnTYi", "image", "143490gGgJeq", "div", "img", "menu-bar-box", "339875GuBXjs", "1239aCgKQm", "14726063Mpzlep", "1036MpLaFC", "istyle", "imgURL", "7586640aWeebi", "6228uNsBTi", "exports"];
              return (r = function () {
                return t;
              })();
            }
            t = n.nmd(t);
            var a = i;
            function i(t, e) {
              var n = r();
              return (i = function (t, e) {
                return n[t -= 195];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (724872 == parseInt(n(203)) / 1 + parseInt(n(197)) / 2 * (-parseInt(n(213)) / 3) + parseInt(n(206)) / 4 * (parseInt(n(195)) / 5) + parseInt(n(210)) / 6 * (parseInt(n(204)) / 7) + -parseInt(n(209)) / 8 + parseInt(n(212)) / 9 * (-parseInt(n(199)) / 10) + parseInt(n(205)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[a(211)] = {
              type: "div",
              attr: {},
              classList: ["menu-bar"],
              children: [{
                type: a(200),
                attr: {},
                shown: function () {
                  return this[a(196)];
                },
                classList: [a(202)],
                style: function () {
                  return this[a(207)];
                },
                children: [{
                  type: a(198),
                  attr: {
                    src: function () {
                      return this[a(208)];
                    }
                  },
                  classList: [a(201)]
                }]
              }]
            };
          },
          1945: t => {
            function e(t, n) {
              var a = r();
              return (e = function (t, e) {
                return a[t -= 190];
              })(t, n);
            }
            var n = e;
            function r() {
              var t = ["2jehwTs", "div", "isShow", "imgURL", "109529tGPQpa", "1687389ajtHHU", "10IcSayd", "img", "25MkBJJu", "934407NrPMUT", "12wMsEQc", "43602bMIfKq", "image", "navigator-bar", "6828jgezKY", "69UGpDia", "104681ATZIhz", "344792QYCqgQ"];
              return (r = function () {
                return t;
              })();
            }
            (function (t, n) {
              for (var r = e, a = t();;) try {
                if (104397 == parseInt(r(194)) / 1 * (-parseInt(r(196)) / 2) + -parseInt(r(193)) / 3 * (parseInt(r(192)) / 4) + parseInt(r(204)) / 5 * (-parseInt(r(207)) / 6) + -parseInt(r(200)) / 7 + parseInt(r(195)) / 8 + parseInt(r(205)) / 9 * (parseInt(r(202)) / 10) + parseInt(r(201)) / 11 * (parseInt(r(206)) / 12)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(r), t.exports = {
              type: n(197),
              attr: {},
              classList: [n(191)],
              children: [{
                type: n(190),
                attr: {
                  src: function () {
                    return this[n(199)];
                  }
                },
                shown: function () {
                  return this[n(198)];
                },
                classList: [n(203)]
              }]
            };
          },
          1419: (t, e, n) => {
            function r() {
              var t = ["801588sFEANt", "showLayer", "3027728XMgPfN", "1410070hYhrhB", "entry-root", "stack", "layer-video", "landscape", "loading-text", "12268kfuomK", "exports", "1827712dgCPGb", "loading-img", "105puUAew", "11kiIsGv", "go_web", "websrc", "layer-gg", "text", "2418723HMNzCc", "https://qa-assets.xiaozuowen.net/quickapp-puppet/assets/frames/none-back.mp3", "14BZCHRB", "handleLayerDestroy", "web", "6mnujhp", "layer_video", "domAppear", "9982730IXIEJA", "div", "web-comp", "add-exp"];
              return (r = function () {
                return t;
              })();
            }
            function a(t, e) {
              var n = r();
              return (a = function (t, e) {
                return n[t -= 437];
              })(t, e);
            }
            t = n.nmd(t);
            var i = a;
            (function (t, e) {
              for (var n = a, r = t();;) try {
                if (529033 == -parseInt(n(448)) / 1 + parseInt(n(459)) / 2 + parseInt(n(461)) / 3 * (parseInt(n(457)) / 4) + -parseInt(n(451)) / 5 * (-parseInt(n(441)) / 6) + -parseInt(n(438)) / 7 * (-parseInt(n(450)) / 8) + parseInt(n(467)) / 9 + parseInt(n(444)) / 10 * (-parseInt(n(462)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(r), t[i(458)] = {
              type: "div",
              attr: {
                id: i(453),
                enablevideofullscreencontainer: function () {
                  return !0;
                }
              },
              id: i(453),
              classList: [i(452)],
              events: {
                appear: i(443)
              },
              children: [{
                type: "video",
                attr: {
                  id: i(442),
                  autoplay: function () {
                    return !0;
                  },
                  src: i(437),
                  orientation: i(455),
                  controls: function () {
                    return !1;
                  }
                },
                classList: [i(454)],
                id: i(442)
              }, {
                type: i(440),
                attr: {
                  id: i(463),
                  src: function () {
                    return this[i(464)];
                  }
                },
                id: i(463),
                classList: [i(446)]
              }, {
                type: i(445),
                attr: {},
                shown: function () {
                  return !this[i(449)];
                },
                classList: ["loading"],
                children: [{
                  type: "image",
                  attr: {
                    src: function () {
                      return this.LOADING;
                    }
                  },
                  classList: [i(460)]
                }, {
                  type: i(466),
                  attr: {
                    value: "\u52AA\u529B\u52A0\u8F7D\u4E2D"
                  },
                  classList: [i(456)]
                }]
              }, {
                type: i(447),
                attr: {},
                shown: function () {
                  return this[i(449)];
                }
              }, {
                type: i(465),
                attr: {},
                shown: function () {
                  return this.showLayer;
                },
                events: {
                  destroy: i(439)
                }
              }]
            };
          },
          177: (t, e, n) => {
            var r = i;
            function a() {
              var t = ["style", "2401647WCjGqS", "exports", "__esModule", "template", "180xrvtXg", "default", "628810QpsTTn", "4ekSxdX", "5867992gyiLHv", "1481816cSXiot", "477XmzPQY", "6356532NXMxyp", "@app-component/adb-huawei-slot", "184136AXeeYE", "64212QTvvhB"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              var n = a();
              return (i = function (t, e) {
                return n[t -= 258];
              })(t, e);
            }
            !function (t, e) {
              for (var n = i, r = t();;) try {
                if (864088 == parseInt(n(265)) / 1 + -parseInt(n(263)) / 2 * (parseInt(n(272)) / 3) + -parseInt(n(264)) / 4 + parseInt(n(260)) / 5 * (parseInt(n(270)) / 6) + parseInt(n(267)) / 7 + -parseInt(n(269)) / 8 * (-parseInt(n(266)) / 9) + -parseInt(n(262)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a);
            var s = n(7658),
              o = n(6259);
            $app_define$(r(268), [], function (t, e, a) {
              var i = r;
              o(a, e, t), e[i(258)] && e[i(261)] && (a[i(273)] = e.default), a[i(273)][i(259)] = n(518), a[i(273)][i(271)] = s;
            });
          },
          4253: (t, e, n) => {
            var r = o;
            (function (t, e) {
              for (var n = o, r = t();;) try {
                if (983071 == -parseInt(n(306)) / 1 + -parseInt(n(307)) / 2 + parseInt(n(305)) / 3 * (-parseInt(n(311)) / 4) + parseInt(n(319)) / 5 * (parseInt(n(316)) / 6) + parseInt(n(317)) / 7 * (parseInt(n(313)) / 8) + -parseInt(n(309)) / 9 + parseInt(n(314)) / 10 * (parseInt(n(318)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(s), n(1553), n(177), n(7017);
            var a = n(2125),
              i = n(3546);
            function s() {
              var t = ["1174767KoXOMX", "3143536svoowL", "exports", "3892068DkZiwp", "__esModule", "32472MRKhhY", "@app-component/layer-native-huawei", "24PJajaT", "10axDGcg", "default", "120yCAAjr", "86898LkIVtq", "45208614loJNEO", "46355AYMLAA", "style", "63GdRdau"];
              return (s = function () {
                return t;
              })();
            }
            function o(t, e) {
              var n = s();
              return (o = function (t, e) {
                return n[t -= 304];
              })(t, e);
            }
            $app_define$(r(312), [], function (t, e, s) {
              var o = r;
              i(s, e, t), e[o(310)] && e.default && (s[o(308)] = e[o(315)]), s[o(308)].template = n(8785), s[o(308)][o(304)] = a;
            });
          },
          8302: (t, e, n) => {
            (function (t, e) {
              for (var n = s, r = t();;) try {
                if (119866 == parseInt(n(391)) / 1 * (-parseInt(n(400)) / 2) + -parseInt(n(392)) / 3 * (parseInt(n(394)) / 4) + -parseInt(n(398)) / 5 + parseInt(n(401)) / 6 + -parseInt(n(399)) / 7 * (parseInt(n(389)) / 8) + -parseInt(n(393)) / 9 * (-parseInt(n(388)) / 10) + parseInt(n(390)) / 11) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(i), n(1553), n(7017);
            var r = n(1141),
              a = n(5981);
            function i() {
              var t = ["117avzidi", "32xTCEpr", "default", "exports", "style", "1023700NmVUDZ", "7vsuuMF", "127318xcnElp", "72324MswqHb", "__esModule", "template", "87500SGtWZe", "1276952loTEJI", "6518545jAyZcM", "2LfkkTj", "40071IKrClw"];
              return (i = function () {
                return t;
              })();
            }
            function s(t, e) {
              var n = i();
              return (s = function (t, e) {
                return n[t -= 388];
              })(t, e);
            }
            $app_define$("@app-component/layer-tpl-huawei", [], function (t, e, i) {
              var o = s;
              a(i, e, t), e[o(402)] && e.default && (i[o(396)] = e[o(395)]), i[o(396)][o(403)] = n(3349), i[o(396)][o(397)] = r;
            });
          },
          8956: (t, e, n) => {
            var r = s;
            !function (t, e) {
              for (var n = s, r = t();;) try {
                if (781196 == parseInt(n(191)) / 1 + -parseInt(n(187)) / 2 + -parseInt(n(194)) / 3 + -parseInt(n(192)) / 4 + parseInt(n(188)) / 5 + -parseInt(n(185)) / 6 + parseInt(n(193)) / 7) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(o);
            var a = n(8526),
              i = n(6557);
            function s(t, e) {
              var n = o();
              return (s = function (t, e) {
                return n[t -= 183];
              })(t, e);
            }
            function o() {
              var t = ["6011288PmpFFg", "21924812smzDuh", "2547879OGYXmW", "template", "__esModule", "@app-component/legal", "5723166rWizgW", "default", "236308ShXsFX", "2269795udMhCu", "exports", "style", "619251YIJjDn"];
              return (o = function () {
                return t;
              })();
            }
            $app_define$(r(184), [], function (t, e, s) {
              var o = r;
              i(s, e, t), e[o(183)] && e[o(186)] && (s.exports = e.default), s[o(189)][o(195)] = n(5795), s[o(189)][o(190)] = a;
            });
          },
          4062: (t, e, n) => {
            function r() {
              var t = ["102HLEhun", "template", "style", "256030XWrhfX", "exports", "32490RMdMMA", "91776nSHmAg", "808zrABQn", "147840MLmSSe", "51172JkhPhI", "5620zJvRyd", "2174068WYGcqL", "42154IqvHGs", "42ywyMJM"];
              return (r = function () {
                return t;
              })();
            }
            !function (t, e) {
              for (var n = i, r = t();;) try {
                if (675893 == -parseInt(n(280)) / 1 + parseInt(n(269)) / 2 * (-parseInt(n(276)) / 3) + -parseInt(n(274)) / 4 + -parseInt(n(271)) / 5 + parseInt(n(277)) / 6 * (-parseInt(n(275)) / 7) + parseInt(n(270)) / 8 * (-parseInt(n(282)) / 9) + parseInt(n(273)) / 10 * (parseInt(n(272)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(r);
            var a = n(9536);
            function i(t, e) {
              var n = r();
              return (i = function (t, e) {
                return n[t -= 269];
              })(t, e);
            }
            $app_define$("@app-component/logo", [], function (t, e, r) {
              var s = i;
              r[s(281)][s(278)] = n(465), r[s(281)][s(279)] = a;
            });
          },
          9923: (t, e, n) => {
            var r = o;
            function a() {
              var t = ["2604425pwOBam", "771772YXaigc", "template", "46388AsXFix", "84225ERHCeH", "2463903BHWkvX", "style", "738472NeoWcq", "16ETrxCZ", "4926NfjPFC", "2163zXaEoB", "@app-component/add-native-huawei", "default", "exports"];
              return (a = function () {
                return t;
              })();
            }
            (function (t, e) {
              for (var n = o, r = t();;) try {
                if (646196 == parseInt(n(353)) / 1 + parseInt(n(349)) / 2 + -parseInt(n(350)) / 3 + parseInt(n(347)) / 4 + parseInt(n(346)) / 5 + parseInt(n(341)) / 6 * (-parseInt(n(342)) / 7) + -parseInt(n(340)) / 8 * (parseInt(n(351)) / 9)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(a), n(4062), n(8956);
            var i = n(4437),
              s = n(3162);
            function o(t, e) {
              var n = a();
              return (o = function (t, e) {
                return n[t -= 340];
              })(t, e);
            }
            $app_define$(r(343), [], function (t, e, a) {
              var o = r;
              s(a, e, t), e.__esModule && e[o(344)] && (a[o(345)] = e[o(344)]), a[o(345)][o(348)] = n(5998), a.exports[o(352)] = i;
            });
          },
          3182: (t, e, n) => {
            function r(t, e) {
              var n = o();
              return (r = function (t, e) {
                return n[t -= 272];
              })(t, e);
            }
            var a = r;
            (function (t, e) {
              for (var n = r, a = t();;) try {
                if (620660 == -parseInt(n(282)) / 1 + parseInt(n(279)) / 2 + parseInt(n(281)) / 3 + parseInt(n(285)) / 4 * (parseInt(n(275)) / 5) + parseInt(n(274)) / 6 + -parseInt(n(278)) / 7 + parseInt(n(280)) / 8 * (-parseInt(n(272)) / 9)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            })(o), n(4062), n(8956);
            var i = n(9983),
              s = n(9774);
            function o() {
              var t = ["7186689ZqDCVv", "exports", "6688476menTgu", "48105DugDhn", "style", "@app-component/add-tpl-huawei", "960785majehR", "495334HZuGiJ", "16VHJBnK", "2572878QqktPa", "1067707tfLuoq", "default", "__esModule", "500WPAUwQ"];
              return (o = function () {
                return t;
              })();
            }
            $app_define$(a(277), [], function (t, e, r) {
              var o = a;
              s(r, e, t), e[o(284)] && e[o(283)] && (r[o(273)] = e[o(283)]), r[o(273)].template = n(5751), r.exports[o(276)] = i;
            });
          },
          6615: (t, e, n) => {
            var r = o;
            (function (t, e) {
              for (var n = o, r = t();;) try {
                if (842207 == parseInt(n(347)) / 1 * (-parseInt(n(359)) / 2) + parseInt(n(349)) / 3 * (parseInt(n(350)) / 4) + -parseInt(n(353)) / 5 * (-parseInt(n(345)) / 6) + parseInt(n(351)) / 7 + -parseInt(n(363)) / 8 * (parseInt(n(362)) / 9) + -parseInt(n(360)) / 10 * (-parseInt(n(354)) / 11) + -parseInt(n(355)) / 12 * (parseInt(n(356)) / 13)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(s), n(9923), n(3182);
            var a = n(6931),
              i = n(8233);
            function s() {
              var t = ["default", "1526127stYsJK", "style", "2172033JEemTj", "8pYxmXr", "8399671CxPAXW", "__esModule", "1670UJCQqQ", "176ROCprk", "900mvqDYy", "444847SSDEug", "exports", "template", "2stwCQF", "969790AEPuvX", "@app-component/add-exp", "18TWyILT", "320696azFJbf", "14646zdJJVG"];
              return (s = function () {
                return t;
              })();
            }
            function o(t, e) {
              var n = s();
              return (o = function (t, e) {
                return n[t -= 345];
              })(t, e);
            }
            $app_define$(r(361), [], function (t, e, s) {
              var o = r;
              i(s, e, t), e[o(352)] && e[o(346)] && (s[o(357)] = e[o(346)]), s[o(357)][o(358)] = n(4855), s[o(357)][o(348)] = a;
            });
          },
          5043: (t, e, n) => {
            var r = o;
            function a() {
              var t = ["164456TqyEiA", "exports", "305088upvnUt", "32856Wsohgm", "1382410hfUQGE", "7yummVt", "990SKBSJu", "27uiGvrO", "21856796pVhmAJ", "57237WBixkv", "68DHPMAU", "10wWBANe", "template", "@app-component/gg-privacy", "10YrwmUY", "6720136TFKVtP", "default", "__esModule"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              for (var n = o, r = t();;) try {
                if (457491 == -parseInt(n(454)) / 1 * (parseInt(n(447)) / 2) + -parseInt(n(445)) / 3 * (parseInt(n(446)) / 4) + parseInt(n(450)) / 5 * (parseInt(n(456)) / 6) + parseInt(n(459)) / 7 * (-parseInt(n(451)) / 8) + parseInt(n(461)) / 9 * (parseInt(n(458)) / 10) + parseInt(n(460)) / 11 * (parseInt(n(457)) / 12) + parseInt(n(462)) / 13) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a);
            var i = n(9497),
              s = n(5650);
            function o(t, e) {
              var n = a();
              return (o = function (t, e) {
                return n[t -= 445];
              })(t, e);
            }
            $app_define$(r(449), [], function (t, e, a) {
              var o = r;
              s(a, e, t), e[o(453)] && e[o(452)] && (a.exports = e[o(452)]), a[o(455)][o(448)] = n(9044), a.exports.style = i;
            });
          },
          6864: (t, e, n) => {
            var r = i;
            function a() {
              var t = ["791ANwxSK", "12RvZpFc", "55izozlF", "3147300LAiYOR", "334644cPaxyo", "442461QeAaEq", "104760yaeUuu", "style", "@app-component/layer-gg", "25591704pTRFxm", "336KMFLEN", "10eTlGxw", "8012114WnVwhD", "default", "template", "536APvQaY", "exports"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              var n = a();
              return (i = function (t, e) {
                return n[t -= 499];
              })(t, e);
            }
            (function (t, e) {
              for (var n = i, r = t();;) try {
                if (466943 == parseInt(n(508)) / 1 * (parseInt(n(506)) / 2) + -parseInt(n(513)) / 3 * (-parseInt(n(509)) / 4) + -parseInt(n(510)) / 5 * (parseInt(n(512)) / 6) + -parseInt(n(501)) / 7 * (parseInt(n(514)) / 8) + -parseInt(n(511)) / 9 + parseInt(n(502)) / 10 * (-parseInt(n(503)) / 11) + parseInt(n(500)) / 12) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            })(a), n(1553), n(5043), n(7017), n(4253), n(8302);
            var s = n(8428),
              o = n(3613);
            $app_define$(r(499), [], function (t, e, a) {
              var i = r;
              o(a, e, t), e.__esModule && e[i(504)] && (a[i(507)] = e[i(504)]), a[i(507)][i(505)] = n(27), a.exports[i(515)] = s;
            });
          },
          1553: (t, e, n) => {
            function r(t, e) {
              var n = o();
              return (r = function (t, e) {
                return n[t -= 451];
              })(t, e);
            }
            var a = r;
            !function (t, e) {
              for (var n = r, a = t();;) try {
                if (321105 == parseInt(n(464)) / 1 + -parseInt(n(454)) / 2 * (parseInt(n(452)) / 3) + -parseInt(n(459)) / 4 + -parseInt(n(457)) / 5 + -parseInt(n(458)) / 6 + parseInt(n(465)) / 7 * (parseInt(n(466)) / 8) + -parseInt(n(463)) / 9 * (-parseInt(n(453)) / 10)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(o);
            var i = n(3947),
              s = n(2836);
            function o() {
              var t = ["exports", "style", "38412Jtktra", "468416JzyeUn", "3534055SoVDpM", "8RTulVE", "__esModule", "6QWzvrQ", "2090ZqlhoL", "405764oSKxcx", "@app-component/menu-bar", "default", "2403535DRnQWO", "642546JkSiIG", "2202504uUQpqE", "template"];
              return (o = function () {
                return t;
              })();
            }
            $app_define$(a(455), [], function (t, e, r) {
              var o = a;
              s(r, e, t), e[o(451)] && e[o(456)] && (r.exports = e[o(456)]), r[o(461)][o(460)] = n(1133), r[o(461)][o(462)] = i;
            });
          },
          7017: (t, e, n) => {
            function r(t, e) {
              var n = o();
              return (r = function (t, e) {
                return n[t -= 226];
              })(t, e);
            }
            var a = r;
            !function (t, e) {
              for (var n = r, a = t();;) try {
                if (723098 == parseInt(n(230)) / 1 + -parseInt(n(226)) / 2 * (parseInt(n(240)) / 3) + parseInt(n(239)) / 4 + parseInt(n(229)) / 5 + parseInt(n(235)) / 6 * (-parseInt(n(233)) / 7) + -parseInt(n(234)) / 8 + parseInt(n(228)) / 9) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(o);
            var i = n(8520),
              s = n(9086);
            function o() {
              var t = ["__esModule", "13130955tTCvKt", "1188960dEuOwa", "58804yFuAee", "default", "@app-component/navigator-bar", "6988303iknVhC", "4697288hUbJrN", "6mxgBOr", "exports", "style", "template", "4265744UyEQmE", "3ydvRfm", "1026878FyNvZZ"];
              return (o = function () {
                return t;
              })();
            }
            $app_define$(a(232), [], function (t, e, r) {
              var o = a;
              s(r, e, t), e[o(227)] && e[o(231)] && (r[o(236)] = e.default), r[o(236)][o(238)] = n(1945), r[o(236)][o(237)] = i;
            });
          },
          2067: (t, e) => {
            "use strict";

            const n = r;
            function r(t, e) {
              const n = a();
              return (r = function (t, e) {
                return n[t -= 303];
              })(t, e);
            }
            function a() {
              const t = ["2307371ikKusn", "3QcbrUo", "196jDciBr", "24Qcrxfu", "honor", "http://qa-assets.beuyinm.com", "nativeadshowevent", "771815NuwpCS", "awake", "custom", "6582712GEUwoF", "10jKZqPK", "pull-back", "nativeadCloseBtn", "quickapp-puppet", "42gGKnXq", "huawei", "feedMultiAd", "defineProperty", "5177305VNpNNA", "nativeadlogo", "__esModule", "54660LfAMXz", "4162815pWYbhH", "native", "CONSTS", "ide", "284662BIIcTy"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = r,
                a = t();
              for (;;) try {
                if (581047 == parseInt(n(312)) / 1 * (-parseInt(n(310)) / 2) + parseInt(n(305)) / 3 * (parseInt(n(313)) / 4) + -parseInt(n(318)) / 5 * (-parseInt(n(326)) / 6) + parseInt(n(330)) / 7 + -parseInt(n(321)) / 8 + parseInt(n(306)) / 9 * (-parseInt(n(322)) / 10) + parseInt(n(311)) / 11 * (-parseInt(n(314)) / 12)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), Object[n(329)](e, n(304), {
              value: !0
            }), e[n(308)] = void 0;
            const i = n(325),
              s = n(316);
            e[n(308)] = {
              CDN_HOST: s,
              CDN_PACKAGE: i,
              STATIC_PREFIX: s + "/" + i + "/assets",
              ENGINE_PACKAGE_MAP: {
                miui: "xiaomi",
                nearme: "oppo",
                vivo: "vivo",
                honor: n(315),
                huawei: n(327),
                hapjs: n(309)
              },
              JUMP_MODE: {
                AWAKE: n(319),
                PULL_BACK: n(323)
              },
              VIVO_GG_TYPE_LIST: [n(307), n(320), n(328), n(303), n(317), n(324)]
            };
          },
          1589: (t, e) => {
            "use strict";

            const n = r;
            function r(t, e) {
              const n = a();
              return (r = function (t, e) {
                return n[t -= 360];
              })(t, e);
            }
            function a() {
              const t = ["pageDestroy", "batchArr", "appShowTS", "3003204eegBLr", "20993LCoghZ", "731502ngkuoG", "banCopyToken", "appDestroy", "pvId", "agreePolicy", "135KCICFO", "16612PlTfMX", "manifest", "hasClked", "setStatusChange", "780WbpmmK", "avId", "pageInit", "1503DIeXqk", "banPageJump", "appLeave", "15egtIlO", "exception", "699450RDYBQf", "pageview", "appSource", "KEYS", "appPageNotFound", "appError", "allowBatch", "privacyVisited", "968PgvahR", "39XWHEXb", "launchId", "1AMPUPw", "1kouling", "2912778OdUNbi", "appLaunch", "clickHotline", "ggConfiger", "executionLocation", "appRequest", "pageRefresh", "PCCSDKVersion"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = r,
                a = t();
              for (;;) try {
                if (236615 == parseInt(n(388)) / 1 * (parseInt(n(377)) / 2) + parseInt(n(364)) / 3 * (parseInt(n(365)) / 4) + parseInt(n(375)) / 5 * (parseInt(n(403)) / 6) + parseInt(n(402)) / 7 * (parseInt(n(385)) / 8) + parseInt(n(372)) / 9 * (-parseInt(n(369)) / 10) + -parseInt(n(390)) / 11 + -parseInt(n(401)) / 12 * (parseInt(n(386)) / 13)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), Object.defineProperty(e, "__esModule", {
              value: !0
            }), e[n(380)] = void 0, e[n(380)] = {
              SOURCE: n(379),
              MANIFEST: n(366),
              SDK_VERSION: n(397),
              CONFIGER_KEY: n(393),
              LAUNCH_ID: n(387),
              AV_ID: n(370),
              PV_ID: n(362),
              ALLOW_BATCH: n(383),
              BATCH_ARR: n(399),
              BAN_PAGE_JUMP: n(373),
              BAN_COPY_TOKEN: n(360),
              ONE_KL: n(389),
              PB_CTX: "pbCtx",
              HAS_CLKED: n(367),
              REAL_PA: "realPullApp",
              RESERVED_1: n(394),
              AGREE_POLICY: n(363),
              PRIVACY_VISITED: n(384),
              APP_SHOW_TS: n(400),
              EXCEPTION: n(376),
              A_EXIT: "aExit",
              CK_HLINE: n(392),
              STA_CHANGE: n(368),
              P_INIT: n(371),
              P_REFRESH: n(396),
              P_SHOW: n(378),
              P_HIDE: "pageLeave",
              P_DESTROY: n(398),
              A_CREATE: n(391),
              A_REQUEST: n(395),
              A_SHOW: "appView",
              A_HIDE: n(374),
              A_DESTROY: n(361),
              A_ERROR: n(382),
              A_PAGENOTFOUND: n(381)
            };
          },
          9425: (t, e) => {
            "use strict";

            const n = a;
            function r() {
              const t = ["8WNOjcB", "org.hapjs.mockup", "com.sie.mp", "defineProperty", "NEED_PKGS", "com.surfshark.vpnclient.android", "com.nordvpn.android", "705268kUPSdX", "com.fishervpn.freevpn", "com.whitebunny.vpn", "3317344lxZxKj", "com.huawei.hiad.apptest", "com.windscribe.vpn", "697704VCnLSZ", "516560XeRSPj", "com.xy.vpn", "cn.androidfun.apkfetch", "com.freevpnintouch", "com.wandou.network.wandoupod", "com.huawei.deveco.apptest.plrdtest", "com.ss.android.lark", "com.topjohnwu.magisk", "com.suxxt.vpnanonymity", "com.bytedance.ad.deliver", "com.huawei.welink", "com.littleb.store", "hotspotshield.android.vpn", "com.v2ray.ang", "com.expressvpn.vpn", "com.tencent.mm", "com.ocrm.im", "com.huawei.works", "com.ifast.virtualvpn", "com.avira.vpn", "CHECK_PKG_MAP", "771141CGTmAW", "com.vivo.hybrid.sdkdemo", "org.hapjs.debugger", "3409PXnFKO", "com.ss.android.lark.kami", "com.cosmos.tools", "__esModule", "cn.i4.mobile", "com.qq.gdt.conversion.assistant", "1338LHaCWH", "com.goldenfrog.vyprvpn.app", "ch.protonvpn.android", "com.huawei.fastapp.dev", "5462118imljHt", "com.vivo.hybrid.debugger", "com.fvcorp.android.aijiasuclient", "com.teamtalk.im"];
              return (r = function () {
                return t;
              })();
            }
            function a(t, e) {
              const n = r();
              return (a = function (t, e) {
                return n[t -= 365];
              })(t, e);
            }
            !function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (548151 == parseInt(n(407)) / 1 + parseInt(n(401)) / 2 + -parseInt(n(377)) / 3 * (-parseInt(n(394)) / 4) + -parseInt(n(408)) / 5 + -parseInt(n(386)) / 6 * (-parseInt(n(380)) / 7) + -parseInt(n(404)) / 8 + -parseInt(n(390)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(r), Object[n(397)](e, n(383), {
              value: !0
            }), e[n(398)] = e[n(376)] = void 0;
            const i = [n(414), n(365), n(379), n(395), "com.ljmobile.zlj.rom.release", n(410), "com.yiqixie.kem", n(382), n(370), n(388), "com.github.shadowsocks", n(399), n(406), n(400), n(411), n(415), n(412), n(368), n(387), n(409), "com.wl.ufovpn", n(374), n(385)];
            e[n(376)] = {
              huawei: [...i, n(366), n(389), n(373), n(413), n(405), "com.fvcorp.android.aijiasuclient", n(369), "cn.i4.mobile", "huawei.w3.smartcom.itrave", "com.huawei.works.wemeeting", "com.huawei.allianceapp"],
              oppo: [...i, n(393), "com.iknow.client", n(367), n(372), "com.suxxt.vpnanonymity", n(403), "com.avira.vpn", n(402)],
              vivo: [...i, n(378), n(396), n(391), "com.vivojsft.vmail", n(392), "com.v2ray.ang", n(384), n(416)],
              xiaomi: [...i, n(381), n(392), "com.v2ray.ang", n(384), n(416), "com.whitebunny.vpn", n(375), n(402)],
              honor: [...i, n(366), n(389), n(373), n(413), n(405), n(392), n(369), n(384)]
            }, e[n(398)] = [n(371)];
          },
          9791: (t, e, n) => {
            "use strict";

            const r = i;
            function a() {
              const t = ["1906224cBMWFo", "code", "catch", "__esModule", "cacheable", "map", "method", "1881404vwhqre", "autocatch", "verifyResponse", "getInstance", "then", "length", "ajax", "5jmVcVt", "processResponse", "250582QiOCsf", "974244LrXfzo", "appendURL", "GET", "default", "3470464NdPuwR", "HOST", "url", "host", "entries", "response error", "279226yATcQi", "383316qHvlZZ", "join", "defineProperty", "processError", "BaseEngine must be subclassed", "data", "BaseEngine"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              const n = a();
              return (i = function (t, e) {
                return n[t -= 185];
              })(t, e);
            }
            !function (t, e) {
              const n = i,
                r = t();
              for (;;) try {
                if (173132 == parseInt(n(187)) / 1 + -parseInt(n(198)) / 2 + -parseInt(n(188)) / 3 + parseInt(n(199)) / 4 * (-parseInt(n(185)) / 5) + parseInt(n(206)) / 6 + -parseInt(n(213)) / 7 + parseInt(n(192)) / 8) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a), Object[r(201)](e, r(209), {
              value: !0
            }), e[r(205)] = void 0;
            var s,
              o = (s = n(5131)) && s[r(209)] ? s : {
                default: s
              },
              c = n(8564);
            class p {
              static appendURL(t, e = {}) {
                const n = r,
                  a = Object[n(196)](e);
                if (!a[n(218)]) return t;
                const i = a[n(211)](([t, e]) => t + "=" + encodeURIComponent(JSON.stringify(e)))[n(200)]("&"),
                  s = t.indexOf("?") > -1 ? "&" : "?";
                return "" + t + s + i;
              }
              static [r(216)](t) {
                throw new Error(r(203));
              }
              constructor(t) {
                const e = r,
                  {
                    url: n,
                    method: a = e(190),
                    cacheable: i = !1,
                    autocatch: s = !1,
                    engineClass: o = p,
                    host: u = o[e(195)] || c[e(193)]
                  } = t;
                this.url = n, this.host = u, this[e(212)] = a, this[e(210)] = i, this[e(214)] = s;
              }
              [r(219)](t = {}) {
                return new Promise(async (e, n) => {
                  const r = i,
                    {
                      params: a,
                      data: s
                    } = t,
                    c = p[r(189)](this[r(195)] + this[r(194)], a);
                  o[r(191)].send({
                    method: this[r(212)],
                    url: c,
                    data: s
                  })[r(217)](t => {
                    if (!this[r(215)](t)) {
                      const e = new Error("response error");
                      throw e.response = t, e;
                    }
                    e(this.processResponse(t));
                  })[r(208)](t => {
                    const a = r;
                    this.autocatch ? e(!1) : n(this[a(202)](t));
                  });
                });
              }
              [r(215)](t) {
                return 200 === t[r(207)];
              }
              [r(186)](t) {
                return t[r(204)];
              }
              [r(202)](t) {
                const e = r,
                  {
                    message: n,
                    response: a
                  } = t;
                if (n === e(197)) {
                  const t = new Error(a[e(204)]);
                  return t.code = a[e(207)], t;
                }
                return "string" == typeof t ? new Error(t) : t;
              }
            }
            e[r(205)] = p;
          },
          5131: (t, e) => {
            "use strict";

            const n = o;
            !function (t, e) {
              const n = o,
                r = t();
              for (;;) try {
                if (561508 == parseInt(n(299)) / 1 * (parseInt(n(302)) / 2) + -parseInt(n(301)) / 3 + -parseInt(n(297)) / 4 + parseInt(n(298)) / 5 + -parseInt(n(296)) / 6 + parseInt(n(306)) / 7 + -parseInt(n(304)) / 8) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(i), Object[n(308)](e, n(309), {
              value: !0
            }), e[n(307)] = void 0;
            var r,
              a = (r = $app_require$("@app-module/system.fetch")) && r[n(309)] ? r : {
                default: r
              };
            function i() {
              const t = ["46fflKss", "GET", "2131984CykkGC", "application/json", "6196477KvoSnC", "default", "defineProperty", "__esModule", "2067408VxZZJW", "4340304SzfxPd", "4207150UDmJjC", "47708HTRjiG", "fetch", "1698825bNMDnU"];
              return (i = function () {
                return t;
              })();
            }
            const s = {
              async send(t) {
                const e = n,
                  {
                    url: r,
                    data: i = {},
                    method: s = e(303),
                    headers: o = {}
                  } = t;
                return new Promise((t, n) => {
                  const c = e;
                  a[c(307)][c(300)]({
                    url: r,
                    data: i,
                    method: s,
                    header: {
                      "content-type": c(305),
                      ...o
                    },
                    responseType: "json",
                    success(e) {
                      t(e);
                    },
                    fail(t) {
                      n(t);
                    }
                  });
                });
              }
            };
            function o(t, e) {
              const n = i();
              return (o = function (t, e) {
                return n[t -= 296];
              })(t, e);
            }
            e[n(307)] = s;
          },
          7193: (t, e) => {
            "use strict";

            const n = r;
            function r(t, e) {
              const n = a();
              return (r = function (t, e) {
                return n[t -= 124];
              })(t, e);
            }
            function a() {
              const t = ["18GpZpPp", "6epnAnk", "4594230mYClWZ", "883798iqgarL", "46415xwvZOC", "__esModule", "1ESHawW", "9395419COBzdx", "5727967aTDzmG", "8593120CJIePM", "HOST", "defineProperty", "defaultCid", "https://qa-gateway.beuyinm.com", "1811682IlYzQR", "80CvptVD"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = r,
                a = t();
              for (;;) try {
                if (539557 == -parseInt(n(132)) / 1 * (-parseInt(n(129)) / 2) + parseInt(n(124)) / 3 + parseInt(n(125)) / 4 * (-parseInt(n(130)) / 5) + -parseInt(n(127)) / 6 * (-parseInt(n(134)) / 7) + -parseInt(n(135)) / 8 + parseInt(n(126)) / 9 * (-parseInt(n(128)) / 10) + parseInt(n(133)) / 11) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), Object[n(137)](e, n(131), {
              value: !0
            }), e[n(138)] = e[n(136)] = void 0, e[n(136)] = n(139), e.defaultCid = "default";
          },
          5166: (t, e, n) => {
            "use strict";

            const r = o;
            function a() {
              const t = ["timer", "destroy", "req2", "10ftbLqE", "poolOutDelay", "tempStatusAndType", "bind", "\u8BF7\u5B9E\u73B0 getWinPrice \u65B9\u6CD5", "reqId", "ERR_CODE", "SOURCE_TYPE", "handleLoad", "7073409XZdGZy", "\u8BF7\u4F20\u5165code", "ggId", "TRACK_EVENT", "9Qxqgbw", "ggSourcePkgName", "slotReqId", "initial", "554628QImFmR", "2635851tMBQHK", "imp", "trackReq2", "NULL", "getSourceTypeAndStatus", "winPrice", "trackImp", "default", "1325132kXwFBH", "timeout", "getWinPrice", "baseTrackData", "\u8BF7\u5B9E\u73B0 handleLoad \u65B9\u6CD5", "defineProperty", "_path", "KEYS", "request", "adId", "ggWeight", "2292040JSanrS", "errorHandler", "preStatus", "trackLog", "statusOning", "startTimeout", "track", "\u4EE3\u7801\u4F4D\u8BF7\u6C42\u8D85\u65F6", "\u8BF7\u5B9E\u73B0 getImpData \u65B9\u6CD5", "\u8BF7\u5B9E\u73B0 request \u65B9\u6CD5", "handleError", "CONFIGER_KEY", "4642602qfeolk", "getImpData", "\u8BF7\u5B9E\u73B0 autoReportClk \u65B9\u6CD5", "autoReportClk", "isAct", "code", "20230664UKCQkE", "getUniqID", "isD1Act", "CALLBACK_EVENT", "slotType"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = o,
                r = t();
              for (;;) try {
                if (585114 == -parseInt(n(531)) / 1 + -parseInt(n(488)) / 2 + parseInt(n(469)) / 3 + -parseInt(n(477)) / 4 * (-parseInt(n(514)) / 5) + -parseInt(n(500)) / 6 + -parseInt(n(523)) / 7 + parseInt(n(506)) / 8 * (parseInt(n(527)) / 9)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a), Object[r(482)](e, "__esModule", {
              value: !0
            }), e[r(476)] = void 0;
            var i = n(1589),
              s = n(7268);
            function o(t, e) {
              const n = a();
              return (o = function (t, e) {
                return n[t -= 469];
              })(t, e);
            }
            class c {
              constructor(t, e) {
                const n = r;
                this[n(530)](t, e), this.loadHandler = this[n(522)][n(517)](this), this[n(489)] = this[n(498)][n(517)](this);
              }
              [r(530)](t, {
                cb: e = () => {},
                poolOutDelay: n,
                ...a
              } = {}) {
                const s = r;
                if (!t) throw new Error(s(524));
                this.cb = e, this[s(505)] = t, this.option = a, this[s(515)] = n, this[s(474)] = 0, this[s(487)] = 0, this.downloadProgress = 0, this[s(486)] = null, this[s(490)] = null, this.preSourceType = null, this[s(491)] = {}, this.commonData = {}, this[s(516)] = {}, this[s(504)] = !1, this[s(508)] = !1, this[s(492)] = !1, this[s(528)] = "", this[s(525)] = t[s(525)], this[s(519)] = $utils[s(507)](s(529), !0);
                const {
                  userGroup: o,
                  sceneID: c
                } = $utils[s(483)]("global", getGlobalData(i[s(484)][s(499)]), {});
                this.baseTrackData = {
                  ggId: this.ggId,
                  ggIdType: this[s(505)][s(510)],
                  reqId: this[s(519)],
                  sceneV4Id: c,
                  userGroupId: o
                };
              }
              [r(493)]() {
                const t = r;
                this.timer = setTimeout(() => {
                  const t = o;
                  this[t(511)] = null, this[t(489)]({
                    errCode: s[t(520)].TIMEOUT,
                    errMsg: t(495)
                  });
                }, Number(this[t(505)][t(478)]) || 1000);
              }
              [r(471)]() {
                const t = r,
                  {
                    source: e
                  } = this[t(505)];
                this[t(494)](s.TRACK_EVENT[t(513)], {
                  ggPlatform: e
                });
              }
              normalizeError(t) {
                const e = r,
                  {
                    errCode: n = s[e(520)].NATIVE_DEFAULT,
                    errMsg: a = "\u539F\u751F\u5E7F\u544A\u9ED8\u8BA4\u9519\u8BEF",
                    message: i = ""
                  } = t;
                return {
                  errCode: n,
                  errMsg: a + "," + i
                };
              }
              [r(498)](t) {
                const e = r;
                this[e(525)] && (this[e(494)](s[e(526)].err, this.normalizeError(t)), this[e(512)]());
              }
              getAdbable() {
                return !1;
              }
              [r(485)]() {
                throw new Error(r(497));
              }
              [r(503)]() {
                throw new Error(r(502));
              }
              [r(522)]() {
                throw new Error(r(481));
              }
              [r(479)]() {
                throw new Error(r(518));
              }
              [r(501)]() {
                throw new Error(r(496));
              }
              [r(473)]() {
                const t = r;
                return this[t(516)] = {
                  ggStatus: s.APP_STATUS[t(472)],
                  ggSourceType: s[t(521)].UNKNOWN
                }, this[t(516)];
              }
              [r(475)](t) {
                const e = r;
                this.track(s[e(526)][e(470)], {
                  ...this.extraImpData,
                  ...this[e(501)](),
                  ...t
                });
              }
              [r(494)](t, e) {
                const n = r;
                this[n(491)][t] = !0, s[n(509)][t] && this.cb(t, this, e), $track(t, {
                  ...e,
                  ...this[n(480)]
                });
              }
              [r(512)]() {
                const t = r;
                this[t(511)] && clearTimeout(this[t(511)]), this.timer = null, this.ggId = null;
              }
            }
            e[r(476)] = c;
          },
          707: (t, e, n) => {
            "use strict";

            const r = i;
            function a() {
              const t = ["offClose", "KEYS", "3815105hCByti", "clickCB", "createInterstitialAd", "req2", "bind", "handleClick", "load", "@app-module/service.ad", "show", "117ntAkrn", "ggId", "offLoad", "onError", "getIntersIns", "handleError", "intersGG", "38691040gZaRyR", "handleLoad", "1149784hEiCnA", "420684DjlpYl", "CONFIGER_KEY", "onLoad", "shift", "offClick", "closeCB", "length", "handleClose", "215052kqzItP", "loadCB", "createGG", "default", "unshift", "ctxGetter", "defineProperty", "rewardGG", "track", "imp", "valid", "_path", "clk", "errorCB", "TRACK_EVENT", "84wJzrwZ", "5492ayiJjF", "333512fszzfn", "destroy", "layerGgSlot", "3702vyhFIw", "onClose", "code", "slotReqId"];
              return (a = function () {
                return t;
              })();
            }
            function i(t, e) {
              const n = a();
              return (i = function (t, e) {
                return n[t -= 253];
              })(t, e);
            }
            !function (t, e) {
              const n = i,
                r = t();
              for (;;) try {
                if (920386 == parseInt(n(303)) / 1 + parseInt(n(304)) / 2 + -parseInt(n(279)) / 3 * (-parseInt(n(275)) / 4) + parseInt(n(285)) / 5 + parseInt(n(259)) / 6 * (parseInt(n(274)) / 7) + parseInt(n(276)) / 8 * (parseInt(n(294)) / 9) + -parseInt(n(301)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a), Object[r(265)](e, "__esModule", {
              value: !0
            }), e[r(262)] = void 0, e[r(298)] = function (t) {
              const e = r,
                {
                  INTERSTITIAL_INS: n
                } = t,
                {
                  interstitialSlots: a = []
                } = $utils[e(270)](e(278), getGlobalData(s[e(284)][e(305)]), {});
              if (a[e(257)] && !n[e(257)]) {
                const n = a[e(254)]();
                a.push(n), new c(n, () => t);
              }
            };
            var s = n(1589),
              o = n(7268);
            class c {
              constructor(t, e) {
                const n = r;
                this[n(281)] = t, this[n(295)] = t[n(295)], this.ctxGetter = e, this.intersGG = null, this[n(269)] = !1, this.reqId = $utils.getUniqID(n(282), !0), this[n(260)] = this[n(302)].bind(this), this[n(286)] = this.handleClick[n(289)](this), this[n(256)] = this[n(258)][n(289)](this), this[n(272)] = this[n(299)].bind(this), this[n(261)]();
              }
              [r(261)]() {
                const t = r,
                  e = $app_require$(t(292));
                this[t(300)] = e[t(287)]({
                  adUnitId: this[t(295)]
                }), this.intersGG[t(253)](this.loadCB), this[t(300)].onClick(this[t(286)]), this[t(300)][t(280)](this[t(256)]), this[t(300)][t(297)](this[t(272)]), this[t(291)]();
              }
              [r(291)]() {
                const t = r;
                this.intersGG[t(291)]();
                const {
                  source: e
                } = this.code;
                this[t(267)](o.TRACK_EVENT[t(288)], {
                  ggPlatform: e
                });
              }
              show(t) {
                const e = r;
                this.intersGG[e(293)](), this.valid = !1, this.track(o[e(273)][e(268)], t);
              }
              [r(302)](t) {
                const e = r;
                this[e(269)] = !0;
                const {
                  INTERSTITIAL_INS: n
                } = this[e(264)]();
                n[e(263)](this), this[e(267)](o[e(273)].send2);
              }
              [r(290)](t) {
                const e = r;
                this[e(269)] = !1, this[e(267)](o[e(273)][e(271)]);
              }
              handleClose(t) {
                const e = r;
                this[e(267)](o[e(273)].cls), this[e(277)]();
              }
              [r(299)](t) {
                const e = r,
                  {
                    errCode: n,
                    errMsg: a
                  } = t;
                this.track(o[e(273)].err, {
                  errCode: n,
                  errMsg: a
                }), this[e(277)]();
              }
              [r(277)]() {
                const t = r;
                this[t(269)] = !1, this.rewardGG && (this[t(266)][t(296)](), this[t(266)][t(255)](), this[t(266)][t(283)](), this.rewardGG.offError(), this[t(266)][t(277)]());
              }
              [r(267)](t, e) {
                const n = r,
                  {
                    ggId: a,
                    reqId: i
                  } = this,
                  {
                    slotType: s
                  } = this[n(281)];
                $track(t, {
                  ...e,
                  ggId: a,
                  reqId: i,
                  ggIdType: s
                });
              }
            }
            e[r(262)] = c;
          },
          4009: (t, e, n) => {
            "use strict";

            const r = l;
            !function (t, e) {
              const n = l,
                r = t();
              for (;;) try {
                if (337094 == -parseInt(n(378)) / 1 + parseInt(n(370)) / 2 + parseInt(n(343)) / 3 * (parseInt(n(344)) / 4) + -parseInt(n(318)) / 5 * (-parseInt(n(315)) / 6) + -parseInt(n(385)) / 7 * (parseInt(n(321)) / 8) + parseInt(n(335)) / 9 + -parseInt(n(307)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(f), Object[r(404)](e, "__esModule", {
              value: !0
            }), e[r(350)] = void 0;
            var a = u($app_require$(r(330))),
              i = $app_require$(r(309)),
              s = u(n(5166)),
              o = n(4084),
              c = n(7268),
              p = n(1589);
            function u(t) {
              return t && t[r(376)] ? t : {
                default: t
              };
            }
            class h extends s[r(350)] {
              constructor(...t) {
                const e = r;
                super(...t), this[e(351)] = !1, this.onStatusTimeout = null, this.onStatusWait = null;
                const {
                  slotType: n
                } = this[e(338)];
                this[e(326)] = n === c[e(355)][e(402)], this[e(390)] = this[e(326)] ? e(336) : "native-huawei", this.request();
              }
              request() {
                const t = r;
                this[t(342)]();
                const {
                  sourceCid: e
                } = $aide[t(333)]();
                this[t(359)] = a.default[t(331)]({
                  adUnitId: this[t(366)],
                  channel: e
                }), this[t(359)].onLoad(this.loadHandler), this[t(359)][t(381)](this[t(301)]), this[t(359)][t(369)]({
                  supportTemplate: this.isTpl
                }), this[t(316)]();
              }
              [r(298)]() {
                const t = r;
                this[t(359)].showAppDetailPage({
                  adId: this[t(297)]
                });
              }
              [r(291)]() {
                const {
                    ggId: t,
                    commonData: e
                  } = this,
                  {
                    ggSource: n
                  } = e;
                return t + "-" + n;
              }
              [r(339)]() {
                const {
                  ggSource: t = $utils.ts()
                } = this.commonData || {};
                return t;
              }
              [r(337)]() {
                return this[r(339)]();
              }
              [r(387)]() {
                const t = r,
                  {
                    appPrivacyUrl: e
                  } = this[t(323)],
                  {
                    DOWNLOAD: n,
                    PAUSE: a,
                    INSTALLED: i,
                    NULL: s
                  } = c[t(372)],
                  o = this[t(340)] ? this[t(306)] : this[t(359)] ? this[t(359)][t(324)]({
                    adId: this[t(297)]
                  }) || s : c.APP_STATUS[t(401)];
                this[t(306)] = o, this[t(304)] = c[t(305)][o];
                let p = c.SOURCE_TYPE.OTHER;
                return e ? o === i ? p = c[t(394)][t(354)] : [n, a].includes(o) && (p = c[t(394)][t(310)]) : [n, i, s][t(347)](o) ? p = c.SOURCE_TYPE[t(349)] : o === a && (p = c[t(394)][t(310)]), this[t(374)] = {
                  ggStatus: o,
                  ggSourceType: p
                }, this[t(374)];
              }
              [r(348)]() {
                const t = r,
                  {
                    icon: e,
                    imgUrlList: n = []
                  } = this.ggData;
                return n.filter(e => !e[t(363)](t(352)))[t(329)](e)[0];
              }
              [r(332)]() {
                const t = r,
                  {
                    source: e = ""
                  } = this[t(338)];
                return e + t(358);
              }
              getWinPrice() {
                const t = r;
                if (!this[t(313)]) {
                  const {
                    price: e
                  } = this.code;
                  this.winPrice = Number((0, o[t(384)])(e)) || 0;
                }
                return this[t(313)];
              }
              [r(377)]() {
                const t = r,
                  {
                    commonData: e = {},
                    isD1Act: n
                  } = this,
                  {
                    ggSource: a,
                    ggSourcePkgName: i
                  } = e,
                  {
                    ggSourceType: s
                  } = this[t(374)];
                return {
                  isD1Act: Number(n),
                  ggSource: a,
                  ggSourceType: s,
                  ggSourcePkgName: i,
                  ggParams: this[t(323)]
                };
              }
              [r(312)]() {
                const t = r,
                  {
                    ggSourceType: e
                  } = this.getSourceTypeAndStatus();
                return this[t(373)] = this.getAdbable() && e === c[t(394)].OTHER, this[t(373)];
              }
              [r(395)]() {
                const t = r,
                  {
                    isD1Act: e,
                    winPrice: n,
                    code: a = {},
                    commonData: i,
                    impPosition: s
                  } = this,
                  {
                    impDiff: o,
                    realtimeCtr: p,
                    targetCtr: u,
                    source: h
                  } = a;
                this.getClkCover();
                const {
                  ggStatus: l,
                  ggSourceType: f
                } = this[t(374)];
                return {
                  impPosition: s,
                  isD1Act: Number(e),
                  impDiff: o,
                  targetCtr: u,
                  currentCtr: p,
                  ggPlatform: h,
                  winPrice: n,
                  winSource: this[t(332)](),
                  impT: this[t(361)]() ? c.IMP_T[t(396)] : c.IMP_T.IMG,
                  ggStatus: l,
                  ggSourceType: f,
                  ...i
                };
              }
              [r(311)]() {
                const t = r,
                  {
                    source: e,
                    appName: n,
                    desc: a = "",
                    title: i = "",
                    appVersion: s,
                    appCompany: c,
                    imgUrlList: p,
                    creativeType: u,
                    appPrivacyUrl: h,
                    interactionType: l,
                    appPermissionUrl: f,
                    ext: {
                      hwPriceTag: d = ""
                    } = {}
                  } = this.ggData;
                this[t(362)] = {
                  ggDesc: a,
                  ggTitle: i,
                  ggParams: this[t(323)],
                  ggImg: this[t(348)](),
                  ggSource: n || e,
                  ggSourcePkgName: $utils[t(393)](f)[t(345)]
                };
                const {
                    prePrice: I,
                    proPrice: v
                  } = this.code,
                  {
                    ggStatus: g,
                    ggSourceType: m
                  } = this[t(387)]();
                return {
                  ggInteractionType: l,
                  ggTrueStyle: u,
                  ggImgList: p,
                  bidPrice: (0, o[t(296)])(d),
                  appPrivacyUrl: h,
                  ggPrePrice: I,
                  ggProPrice: v,
                  ggAppInfo: {
                    appName: n,
                    appVersion: s,
                    appCompany: c,
                    appPrivacyUrl: h,
                    permissionUrl: f
                  },
                  ggStatus: g,
                  ggSourceType: m,
                  ...this[t(362)]
                };
              }
              [r(303)](t = {}) {
                this[r(353)](), super.trackImp(t);
              }
              [r(353)]() {
                const t = r;
                this.showReported || this[t(326)] || (this.showReported = !0, this[t(359)].reportAdShow({
                  adId: this[t(297)]
                }), this[t(398)](c[t(300)][t(365)]));
              }
              [r(399)](t) {
                const e = r;
                setGlobalData(p.KEYS[e(360)], $utils.ts()), this[e(326)] || (this.instance[e(346)]({
                  adId: this[e(297)]
                }), t && this[e(398)](c[e(300)].clk, {
                  ...this[e(377)](),
                  ...t
                }));
              }
              getAdbable() {
                const t = r;
                if (void 0 === this[t(403)]) {
                  const {
                    targetBtn: e = 0
                  } = this[t(338)];
                  this[t(403)] = 100 * Math[t(320)]() < e;
                }
                return this[t(403)];
              }
              [r(308)]() {
                const t = r,
                  {
                    imgUrlList: e = [],
                    icon: n
                  } = this[t(323)];
                [e[0], n][t(314)](t => t && (0, i.fetch)({
                  url: t
                }));
              }
              [r(364)](t) {
                const e = r;
                try {
                  if (this[e(359)]) {
                    if (this.instance[e(400)](this[e(290)]), this[e(359)].offError(this.errorHandler), this[e(380)] && clearTimeout(this[e(380)]), this[e(380)] = null, this.ggData = $utils._path(e(317), t), !this[e(323)]) return void this[e(388)](new Error(e(397)));
                    this.isTpl && 99 !== this[e(323)][e(302)] && (this[e(326)] = !1, this[e(390)] = "native-huawei"), this[e(297)] = this[e(323)][e(297)], this[e(375)](), this[e(308)]();
                    const {
                      reportTiming: n = e(334)
                    } = this[e(368)];
                    n === c[e(300)][e(293)] && this[e(353)](), this[e(398)](c[e(300)][e(293)], this[e(311)]());
                  }
                } catch (t) {
                  console[e(392)](e(319), t[e(325)]);
                }
              }
              handleOnStatus(t, e) {
                const n = r;
                if (this[n(306)] === c[n(372)][n(357)]) return;
                if (this.onStatusTimeout) return void (this[n(383)] = t);
                const a = e ? 0 : 1000;
                this[n(386)] = setTimeout(() => {
                  const r = n;
                  this[r(386)] = null;
                  const a = e ? t : this[r(359)][r(324)]({
                    adId: this[r(297)]
                  });
                  if (a !== this[r(306)]) this.track(c[r(300)][r(327)], {
                    statusBefore: this.preStatus,
                    statusAfter: a
                  }), this[r(306)] = a, a === c.APP_STATUS[r(357)] && (setTimeout(() => this.cb(c[r(300)][r(322)], this), this[r(382)]), this[r(340)] = !1, this[r(306)] = a, this[r(383)] = null, this[r(359)][r(292)](), this[r(359)][r(299)](), this.track(c[r(300)][r(295)]));else if (this.onStatusWait) {
                    const t = this[r(383)];
                    this[r(383)] = null, this.handleOnStatus(t);
                  }
                }, a);
              }
              [r(294)]() {
                const t = r;
                this.statusOning || this[t(306)] === c.APP_STATUS[t(357)] || (this[t(340)] = !0, this[t(359)].onDownloadProgress(({
                  progress: e
                }) => {
                  const n = t;
                  this[n(391)] = e, 100 === e && this[n(359)].offDownloadProgress();
                }), this.instance.onStatusChanged(({
                  status: e
                } = {}) => {
                  const n = t;
                  e !== this[n(306)] && 100 === this.downloadProgress && this[n(367)](e);
                }));
              }
              [r(389)](t) {
                const e = r,
                  {
                    errCode: n = c[e(328)][e(356)],
                    errMsg: a = e(341),
                    message: i = "",
                    description: s,
                    code: o
                  } = t;
                return 99 === $utils._path("ggData.creativeType", this) ? {
                  errCode: o,
                  errMsg: s
                } : {
                  errCode: n,
                  errMsg: a + "," + i
                };
              }
              [r(379)]() {
                const t = r;
                this.instance[t(371)](this[t(301)]), this[t(359)][t(400)](this.loadHandler), this.instance = null, super[t(379)]();
              }
            }
            function l(t, e) {
              const n = f();
              return (l = function (t, e) {
                return n[t -= 290];
              })(t, e);
            }
            function f() {
              const t = ["error", "parseURL", "SOURCE_TYPE", "getImpData", "BTN", "huawei native \u8FD4\u56DE\u6570\u636E\u9519\u8BEF", "track", "autoReportClk", "offLoad", "NULL", "TPL", "adbable", "defineProperty", "loadHandler", "getTraitKey", "offStatusChanged", "send2", "onStatus", "realInstalled", "encrypt", "adId", "showAppDetailPage", "offDownloadProgress", "TRACK_EVENT", "errorHandler", "creativeType", "trackImp", "isActiving", "ACTIVE_STATUS", "preStatus", "6462010LQkLiJ", "reqImg", "@app-module/system.fetch", "DOWNLOADAPP", "getSend2Data", "getClkCover", "winPrice", "forEach", "114ARnMFr", "trackReq2", "adList.0", "2180vAbGmo", "huawei handleLoad err: ", "random", "40DMJfPe", "actable", "ggData", "getAppStatus", "message", "isTpl", "actStatusChange", "ERR_CODE", "concat", "@app-module/service.ad", "createNativeAd", "getWinSource", "getExtraParams", "imp", "797418YVHRgq", "tpl-huawei", "getClkRecordKey", "code", "getActTraitKey", "statusOning", "\u539F\u751F\u5E7F\u544A\u9ED8\u8BA4\u9519\u8BEF", "startTimeout", "1968sLaPQH", "3344cYswQu", "packageName", "reportAdClick", "includes", "ggImg", "QUICKAPP", "default", "showReported", ".mp4", "reportAdShow", "OPENAPP", "SLOT_TYPE_ENUMS", "NATIVE_DEFAULT", "INSTALLED", ".bnPrice", "instance", "HAS_CLKED", "getAdbable", "commonData", "endsWith", "handleLoad", "hwShow", "ggId", "handleOnStatus", "option", "load", "1051078bRmzsC", "offError", "APP_STATUS", "clkCover", "tempStatusAndType", "getWinPrice", "__esModule", "getClkData", "50571UvLHfZ", "destroy", "timer", "onError", "poolOutDelay", "onStatusWait", "decrypt", "191765vqPxEv", "onStatusTimeout", "getSourceTypeAndStatus", "handleError", "normalizeError", "compName", "downloadProgress"];
              return (f = function () {
                return t;
              })();
            }
            e[r(350)] = h;
          },
          7705: (t, e, n) => {
            "use strict";

            const r = l;
            function a() {
              const t = ["generateDSI", "PROD_LINK_MAP", "poolFailBreakCount", "clk", "clearPoolins", "default", "reqLockTimeout", "getClkRecordKey", "source_Clk_Record_key", "ggWeight", "layerReserveSize", "getNextCodes", "forEach", "isActiving", "APP_STATUS", "includes", "valid", "addExpResort", "initBreakRecord", "rententionMap", "global.retentionConf", "getSourceTypeAndStatus", "ERR_CODE", "2808855mBHKlq", "cancelResolve", "linkConfig", "2061090fKBUNY", "KEYS", "pop", "QUICKAPP", "imp", "actOut", "breakReq", "cls", "activeConf", "ctxGetter", "errBreakCount", "intoPool", "actable", "cachePoolEmpty", "isTpl", "actResolvers", "handleImp", "shift", "activeMap", "isAct", "fxxkingPoolMap", "ggId", "getDSI", "CLK_V", "unshift", "sort", "handleLinkConf", "5744glQgTq", "tempStatusAndType", "batchPromise", "gg4", "cacheResolvers", "filterRecord", "cachePoolOutCnt", "code", "updateClkRecord", "push", "length", "7445142NyXtBP", "time", "cachePoolImpMap", "invalid", "destroy", "getActTraitKey", "TRACK_EVENT", "isD1Act", "370832lQSQGY", "clkV", "1240194EDpEVU", "firstReqSize", "CONFIGER_KEY", "DOWNLOADAPP", "global.autoPullBack", "intoAddExpPool", "OPENAPP", "addExpPool", "err", "activablePool", "ecpm", "reqSize", "layerPoolOut", "handleCls", "clearPoolins error!", "1KytWre", "handleOnStatus", "winPrice", "commonData", "track", "findIndex", "getCacheWeightArr", "OTHER", "handleConsumed", "$page", "8407XehQRu", "getGlobalCache", "\u65E0\u586B\u5145", "map", "splice", "gg3", "global.productLink", "\u649E\u6C60\u5931\u8D25", "SOURCE_TYPE", "key", "getAddExpWeightArr", "intoCachePool", "intoActivePool", "cachePool", "PULLBACK_GG", "getUniqID", "_path", "defineProperty", "poolFailBreakRecord", "filter", "startBatchReq", "handleClk", "reportTiming", "codes", "cacheEmptyTimer", "send2", "10FcFuLI", "poolOut", "sourceClkRecord", "44BYoLSE", "Cache_Promsie_Key", "cacheResort", "errCode", "runLB", "onStatus", "requestInterval", "getTraitKey", "abs", "IMP_POSITION_MAP", "poolIn", "errBreakRecord", "requestDuration", "layerSourceImp", "minSize", "pullbackFlag", "6817644LgDZOe", "intoActivablePool"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = l,
                r = t();
              for (;;) try {
                if (624824 == parseInt(n(228)) / 1 * (-parseInt(n(213)) / 2) + -parseInt(n(162)) / 3 + parseInt(n(211)) / 4 * (parseInt(n(264)) / 5) + parseInt(n(283)) / 6 + parseInt(n(238)) / 7 * (parseInt(n(192)) / 8) + -parseInt(n(203)) / 9 + -parseInt(n(165)) / 10 * (-parseInt(n(267)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a), Object[r(255)](e, "__esModule", {
              value: !0
            }), e[r(289)] = function (t) {
              const e = r;
              try {
                const {
                    name: n
                  } = t[e(237)] || {},
                  r = $utils.getGlobalCache(c, () => ({}));
                let a = r[n];
                a && (delete r[n], a[e(207)]());
              } catch (t) {
                throw new Error(e(227));
              }
            }, e[r(290)] = void 0, e.getPoolins = function (t, e, n) {
              const a = r;
              try {
                const {
                    name: r
                  } = t.$page || {},
                  i = $utils.getGlobalCache(c, () => ({}));
                let s = i[r];
                return s && n && (s[a(207)](), s = void 0), !s && (s = new f({
                  ...e,
                  key: r
                }, () => t), i[r] = s), s;
              } catch (t) {
                throw t;
              }
            };
            var i = n(5536),
              s = n(1589),
              o = n(7268);
            const c = r(185),
              p = "Act_Promsie_Key",
              u = r(268),
              h = r(147);
            function l(t, e) {
              const n = a();
              return (l = function (t, e) {
                return n[t -= 146];
              })(t, e);
            }
            class f {
              constructor(t, e) {
                const n = r,
                  {
                    way: a = []
                  } = $utils[n(254)](n(217), getGlobalData(s.KEYS[n(215)]), {}),
                  {
                    link: i,
                    configs: o = []
                  } = $utils[n(254)](n(244), getGlobalData(s[n(166)][n(215)]), {}),
                  c = $utils[n(254)]("global.ggActive", getGlobalData(s[n(166)][n(215)])),
                  {
                    retentionFrequency: p = 1,
                    retentionD1Info: u = []
                  } = $utils[n(254)](n(159), getGlobalData(s.KEYS.CONFIGER_KEY), {}),
                  {
                    key: l,
                    codes: f,
                    bufferSize: d,
                    requestSize: I,
                    firstReqSize: v,
                    reportGgShow: g,
                    requestDuration: m,
                    requestInterval: y,
                    layerReserveSize: b,
                    poolFailBreakCount: k,
                    errBreakCount: _
                  } = t;
                this[n(174)] = e, this.key = l, this.codes = f || [], this[n(281)] = d || 8, this[n(224)] = I || 8, this[n(214)] = v || 10, this[n(273)] = y || 0, this[n(279)] = m || 0, this[n(260)] = g, this.activeConf = c, this[n(149)] = b || 1, this[n(287)] = k || 1, this[n(175)] = _ || 1, this[n(282)] = a.includes(n(243)) || a[n(154)](n(195)), this[n(251)] = [], this[n(220)] = [], this[n(183)] = {}, this[n(222)] = [], this[n(278)] = {}, this[n(256)] = {}, this[n(197)] = {}, this[n(266)] = $utils[n(239)](h, () => ({})), this[n(196)] = [], this.actResolvers = [], this[n(291)] = null, this[n(194)] = null, this[n(206)] = !1, this.rententionMap = {}, u[n(151)](({
                  packageName: t,
                  ggSource: e
                }) => {
                  this.rententionMap[e] = {
                    packageName: t,
                    count: p
                  };
                }), this[n(198)] = 0, this.cachePoolImpMap = {}, this[n(262)] = null, this.linkConfig = {}, i && o[n(151)](({
                  condition: t,
                  ...e
                }) => this.linkConfig[t] = e), this[n(157)](), this[n(258)](this.firstReqSize);
              }
              [r(207)]() {
                this[r(206)] = !0;
              }
              [r(157)]() {
                const t = r;
                this[t(261)][t(151)](e => {
                  const n = t;
                  this[n(278)][e[n(186)]] = this[n(175)], this.poolFailBreakRecord[e[n(186)]] = this.poolFailBreakCount;
                });
              }
              [r(150)](t) {
                const e = r,
                  n = [],
                  {
                    codes: a
                  } = this;
                for (let r = 0; t > 0 && r < a[e(202)]; r++) {
                  const r = a[e(182)]();
                  this[e(278)][r[e(186)]] > 0 && this[e(256)][r.ggId] > 0 && (n[e(201)](r), t--), a[e(201)](r);
                }
                return n;
              }
              [r(258)](t = this[r(224)]) {
                const e = r,
                  {
                    ctxGetter: n,
                    invalid: a,
                    codes: s,
                    minSize: c,
                    cachePool: p = [],
                    activeConf: u = {},
                    batchPromise: h,
                    requestDuration: f,
                    requestInterval: d,
                    reportTiming: I,
                    reqLockTimeout: v,
                    sourceClkRecord: g
                  } = this,
                  {
                    poolOutDelay: m = 0
                  } = u;
                if (a || !s[e(202)] || h || v || p.length >= c) return;
                const y = this[e(150)](t),
                  b = d + (y.length ? (y[e(202)] - 1) * f : 0);
                this[e(291)] = setTimeout(() => {
                  const t = e;
                  this[t(291)] = null, this[t(258)]();
                }, b);
                const k = y[e(241)]((t, e) => {
                  const [r, a, s] = $PromiseWithResolvers();
                  return setTimeout(() => {
                    const e = l;
                    (0, i[e(285)])(t, {
                      ctxGetter: n,
                      reportTiming: I,
                      poolOutDelay: m,
                      cb: (t, n, r) => {
                        const i = e;
                        if (!this[i(206)]) switch (t) {
                          case o.TRACK_EVENT[i(263)]:
                            this[i(176)](n), a(n);
                            break;
                          case o.TRACK_EVENT[i(177)]:
                            this[i(284)](n);
                            break;
                          case o[i(209)][i(169)]:
                            this[i(181)](n, r);
                            break;
                          case o[i(209)][i(288)]:
                            this[i(259)](n, r);
                            break;
                          case o[i(209)][i(172)]:
                            this[i(226)](n, r);
                            break;
                          case o.TRACK_EVENT[i(221)]:
                            const {
                              ggId: t
                            } = n;
                            r[i(270)] === o[i(161)].POOL_FAIL ? (this[i(256)][t]--, this.poolFailBreakRecord[t] || n.track(o.TRACK_EVENT[i(171)], {
                              breakReason: "\u649E\u6C60"
                            })) : (this[i(278)][t]--, this[i(278)][t] || n.track(o[i(209)][i(171)], {
                              breakReason: i(240)
                            })), s(r);
                        }
                      }
                    });
                  }, e * f), r;
                });
                k[e(202)] && (this[e(194)] = $PromiseAllSettled(k).then(() => {
                  this[e(194)] = null, this.startBatchReq();
                }));
              }
              intoPool(t) {
                const e = r,
                  n = t[e(274)](),
                  a = t[e(208)](),
                  i = t.getClkRecordKey(),
                  {
                    ggSourceType: s,
                    ggStatus: c
                  } = t[e(193)],
                  {
                    targetCtr: p,
                    realtimeCtr: u
                  } = t[e(199)],
                  {
                    appPrivacyUrl: h,
                    appPermissionUrl: l
                  } = t.ggData || {};
                this[e(266)][i] = this[e(266)][i] || {
                  valid: 0,
                  invalid: 0
                }, this[e(282)] && !t[e(179)] && (h || l) && (this[e(174)]()[e(252)] = t);
                const f = this[e(183)][a];
                if (c === o[e(153)].INSTALLED && f && !f[e(184)] && f[e(229)](c, !0), this[e(197)][n]) return void t[e(232)](o[e(209)][e(221)], {
                  errCode: o.ERR_CODE.POOL_FAIL,
                  errMsg: e(245)
                });
                this[e(197)][n] = !0;
                const d = this[e(173)] && !f,
                  {
                    count: I
                  } = this[e(158)][a] || {};
                if (I && s === o[e(246)][e(219)] && d) return this[e(158)][a].count--, this[e(183)][a] = t, t[e(210)] = !0, void this[e(284)](t);
                if (p <= u) this[e(218)](t);else switch (s) {
                  case o[e(246)][e(235)]:
                    d ? (this[e(183)][a] = t, this[e(250)](t)) : this[e(249)](t);
                    break;
                  case o[e(246)][e(219)]:
                  case o[e(246)][e(216)]:
                    this[e(249)](t);
                    break;
                  case o.SOURCE_TYPE[e(168)]:
                    this[e(218)](t);
                }
              }
              [r(218)](t) {
                const e = r;
                this.addExpPool[e(201)](t), this.addExpResort(), t.track(o[e(209)][e(277)], {
                  poolType: e(220)
                });
              }
              intoCachePool(t) {
                const e = r;
                this[e(251)][e(201)](t), this[e(262)] && (clearTimeout(this[e(262)]), this[e(262)] = null), this[e(269)](), t[e(232)](o.TRACK_EVENT[e(277)], {
                  poolType: e(251)
                }), this[e(196)][e(202)] && this[e(187)](this[e(196)][e(182)]());
              }
              [r(248)](t) {
                const e = r,
                  {
                    ggSourceType: n
                  } = t[e(160)](),
                  {
                    targetCtr: a,
                    realtimeCtr: i
                  } = t[e(199)];
                return [n === o[e(246)].QUICKAPP ? 1 : 0, t[e(230)], Math.abs(i - a)];
              }
              [r(156)]() {
                const t = r;
                this[t(220)][t(190)]((e, n) => {
                  const r = t,
                    a = this[r(248)](e),
                    i = this[r(248)](n);
                  let s = 0;
                  for (let t = 0; t < a.length && (s = a[t] - i[t], !s); t++);
                  return s;
                });
              }
              [r(234)](t) {
                const e = r,
                  n = {
                    [o[e(246)][e(216)]]: 2,
                    [o[e(246)][e(219)]]: 1
                  },
                  {
                    targetCtr: a,
                    realtimeCtr: i
                  } = t[e(199)],
                  {
                    ggSourceType: s
                  } = t.getSourceTypeAndStatus(),
                  c = this.sourceClkRecord[t[e(146)]()];
                return [n[s] || 0, -c[e(155)], c[e(206)], t.winPrice, Math[e(275)](i - a)];
              }
              [r(269)]() {
                const t = r;
                if (this[t(251)].sort((e, n) => {
                  const r = t,
                    a = this.getCacheWeightArr(e),
                    i = this[r(234)](n);
                  let s = 0;
                  for (let t = 0; t < a[r(202)] && (s = a[t] - i[t], !s); t++);
                  return s;
                }), this[t(173)]) {
                  const e = [];
                  this[t(251)] = this[t(251)][t(257)](n => {
                    const r = t,
                      a = n[r(208)]();
                    return !(!this[r(183)][a] && n[r(152)] && (this[r(183)][a] = n, e[r(201)](n), 1));
                  }), !this.cachePool[t(202)] && !this[t(262)] && this.handleLinkConf(o[t(286)][t(178)]), e[t(151)](e => this[t(250)](e));
                }
              }
              [r(250)](t) {
                const e = r;
                t[e(272)](), t[e(232)](o.TRACK_EVENT.actIn);
              }
              intoActivablePool(t) {
                const e = r;
                t[e(184)] = !0;
                const {
                  poolOutOrder: n = e(204)
                } = this[e(173)];
                if (n === e(223)) {
                  const n = this[e(222)].findIndex(n => n[e(210)] === t[e(210)] ? n[e(230)] > t.winPrice : n[e(210)] > t[e(210)]);
                  n > -1 ? this[e(222)][e(242)](n, 0, t) : this[e(222)].push(t);
                } else this[e(222)][e(189)](t);
                this[e(180)].length && this[e(187)](this[e(180)][e(182)]());
              }
              updateClkRecord(t, e, n = {}) {
                const a = r,
                  {
                    impPosition: i,
                    isAct: s
                  } = t;
                if (i !== o[a(276)].layer || s) return;
                const {
                    DOWNLOADAPP: c,
                    OPENAPP: p,
                    QUICKAPP: u,
                    OTHER: h
                  } = o.SOURCE_TYPE,
                  {
                    imp: l,
                    clk: f,
                    cls: d
                  } = o[a(209)],
                  {
                    ggSourceType: I
                  } = t[a(193)],
                  v = t.getClkRecordKey(),
                  g = this[a(266)][v];
                switch (I) {
                  case c:
                    e === f ? n[a(212)] === o[a(188)].REAL_BTN ? g.valid += 1 : g[a(206)] += 1 : e === d && (g[a(206)] += 1);
                    break;
                  case p:
                    e === f ? g[a(155)] += 1 : e === d && (g[a(206)] += 1);
                    break;
                  case h:
                  case u:
                    e === l && (I === u || I === h) && (g[a(155)] += 1);
                }
              }
              [r(181)](t, e = {}) {
                const n = r,
                  {
                    impPosition: a
                  } = e;
                if (!t[n(184)] && a === o[n(276)].layer) {
                  const {
                    ggSource: e = $utils.ts()
                  } = t[n(231)] || {};
                  this[n(205)][e] = this.cachePoolImpMap[e] || 0, this[n(205)][e]++, this.handleLinkConf(o.PROD_LINK_MAP[n(280)], this.cachePoolImpMap[e]);
                }
                this[n(200)](t, o.TRACK_EVENT.imp, e);
              }
              [r(259)](t, e = {}) {
                const n = r;
                this.updateClkRecord(t, o.TRACK_EVENT[n(288)], e), this[n(236)](t), this[n(269)](), this.addExpResort();
              }
              handleCls(t, e = {}) {
                const n = r;
                this[n(200)](t, o[n(209)].cls, e), this[n(236)](t);
              }
              handleConsumed(t) {
                const e = r;
                if (!t) return;
                const {
                    ggId: n,
                    isAct: a
                  } = t,
                  i = t[e(274)](),
                  s = t[e(208)]();
                this[e(197)][i] = !1, a && (this[e(183)][s] = !1), this.poolFailBreakRecord[n] || t[e(232)](o[e(209)].renewReq), this[e(256)][n] = this[e(287)];
              }
              [r(163)](t) {
                const e = r;
                if (!t) return;
                const n = t.startsWith(p) ? this.actResolvers : this.cacheResolvers,
                  a = n[e(233)](n => n[e(247)] === t);
                a > -1 && n.splice(a, 1);
              }
              [r(187)](t = {}) {
                const e = r;
                if (setTimeout(() => this[e(258)](), 0), this[e(206)]) return;
                let n;
                const {
                    z: a = 0,
                    addExpable: i,
                    syncable: s,
                    activable: c,
                    resolve: h
                  } = t,
                  l = i ? this[e(149)] : 0;
                if (c ? this[e(222)][e(202)] && (n = this.activablePool[e(167)](), n[e(232)](o[e(209)][e(170)])) : i && this[e(220)][e(202)] ? (n = this[e(220)][e(167)](), n[e(232)](o.TRACK_EVENT.poolOut, {
                  poolType: "addExpPool",
                  ggWeight: n[e(148)],
                  thenPoolCount: this[e(220)][e(202)]
                })) : this[e(251)][e(202)] > l && (n = i ? this[e(251)][e(182)]() : this[e(251)][e(167)](), this.cachePoolOutCnt++, this[e(191)](o.PROD_LINK_MAP[e(225)]), this[e(251)][e(202)] || this.handleLinkConf(o[e(286)][e(178)]), n[e(232)](o.TRACK_EVENT[e(265)], {
                  poolType: e(251),
                  ggWeight: n[e(148)],
                  thenPoolCount: this[e(251)][e(202)]
                })), n) return h ? h(n) : n;
                if (!s) {
                  const n = c ? this[e(180)] : this.cacheResolvers;
                  if (!h) {
                    const [t, r] = $PromiseWithResolvers(),
                      i = $utils[e(253)](c ? p : u, !0),
                      s = {
                        resolve: r,
                        activable: c,
                        key: i,
                        z: a
                      },
                      o = n[e(233)](t => t.z > a);
                    return o > -1 ? n[e(242)](o, 0, s) : n[e(201)](s), t[e(247)] = i, t;
                  }
                  n[e(201)](t);
                }
              }
              handleLinkConf(t, e) {
                const n = r,
                  a = this[n(164)][t],
                  {
                    layerPoolOut: i,
                    layerSourceImp: s,
                    cachePoolEmpty: c
                  } = o[n(286)];
                if (a) {
                  const {
                    pooloutTimes: r = 0,
                    duplicateTimes: o = 0,
                    poolEmptyDuration: p = 0
                  } = a;
                  let u = !1;
                  switch (t) {
                    case i:
                      u = this.cachePoolOutCnt === r && i;
                      break;
                    case s:
                      u = o === e && s;
                      break;
                    case c:
                      clearTimeout(this.cacheEmptyTimer), this[n(262)] = p ? setTimeout(() => {
                        const t = n;
                        this[t(262)] = null, this[t(164)][c] && (this.linkConfig = {}, $aide.runLB(this[t(174)](), c));
                      }, p) : null;
                  }
                  u && (this[n(164)] = {}, $aide[n(271)](this[n(174)](), u));
                }
              }
            }
            e[r(290)] = f;
          },
          5536: (t, e, n) => {
            "use strict";

            const r = o;
            !function (t, e) {
              const n = o,
                r = t();
              for (;;) try {
                if (241111 == -parseInt(n(468)) / 1 + parseInt(n(462)) / 2 + parseInt(n(460)) / 3 * (-parseInt(n(476)) / 4) + -parseInt(n(472)) / 5 * (-parseInt(n(466)) / 6) + -parseInt(n(470)) / 7 + -parseInt(n(473)) / 8 + parseInt(n(469)) / 9) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(c), Object[r(474)](e, r(465), {
              value: !0
            }), e[r(475)] = function (t, {
              ctxGetter: e,
              ...n
            } = {}) {
              const a = r;
              let o;
              const {
                source: c
              } = t;
              return s[a(467)][c] && "huawei" === $utils[a(464)]() && (o = new i[a(461)](t, n)), o || setTimeout(() => {
                const t = a,
                  {
                    cb: e
                  } = n;
                e && e(s[t(471)][t(463)]);
              }, 0), o;
            };
            var a,
              i = (a = n(4009)) && a[r(465)] ? a : {
                default: a
              },
              s = n(7268);
            function o(t, e) {
              const n = c();
              return (o = function (t, e) {
                return n[t -= 460];
              })(t, e);
            }
            function c() {
              const t = ["getBrand", "__esModule", "6asgTHe", "SOURCE_WITH_BRAND", "137434VyLdkF", "9468855BIULzb", "1730736itpPMC", "TRACK_EVENT", "388860XbnHBy", "2925944zoflKz", "defineProperty", "generateDSI", "44jvDewG", "88473eGSaoZ", "default", "372140PtasGS", "err"];
              return (c = function () {
                return t;
              })();
            }
          },
          7268: (t, e) => {
            "use strict";

            const n = r;
            function r(t, e) {
              const n = a();
              return (r = function (t, e) {
                return n[t -= 195];
              })(t, e);
            }
            function a() {
              const t = ["send", "err", "layer", "quickApp", "layer_poolout", "TRACK_EVENT", "img", "actable", "3545070YbfseS", "APP_STATUS", "NULL", "INSTALLED", "imp", "poolIn", "SOURCE_TYPE", "DOWNLOAD", "req2", "defineProperty", "gg3Ready", "realInstalled", "hwShow", "CLS_BY", "CLK_BY", "send2", "14429583VYephI", "PAUSE", "SOURCE_WITH_BRAND", "actStatusChange", "clk", "DOWNLOADED", "breakReq", "483992MrqSbJ", "ACTIVE_STATUS", "CALLBACK_EVENT", "515794ZHQOFW", "IMP_POSITION_MAP", "CLK_V", "layer_same_source", "ERR_CODE", "renewReq", "246qBUaUt", "3118304lUtTKT", "INSTALLING", "empty_pool", "btn", "1250450avLjaT", "cls", "win", "__esModule", "SLOT_TYPE_ENUMS", "WAITING", "INSTALL", "CACHE_STATUS", "IMP_V", "DOWNLOADFAILED", "3nLGaAJ", "rVideoEnterShow", "PROD_LINK_MAP", "unknown", "openApp", "DOWNLOADING", "downloadApp", "template", "115367emZfOJ", "poolOut", "IMP_T", "native"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = r,
                a = t();
              for (;;) try {
                if (391094 == parseInt(n(251)) / 1 + -parseInt(n(195)) / 2 + -parseInt(n(205)) / 3 * (-parseInt(n(258)) / 4) + parseInt(n(225)) / 5 + -parseInt(n(257)) / 6 * (-parseInt(n(213)) / 7) + -parseInt(n(248)) / 8 + -parseInt(n(241)) / 9) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), Object[n(234)](e, n(198), {
              value: !0
            }), e[n(222)] = e[n(243)] = e[n(231)] = e[n(199)] = e[n(207)] = e[n(203)] = e[n(215)] = e[n(252)] = e[n(255)] = e[n(238)] = e[n(253)] = e[n(239)] = e.CALLBACK_EVENT = e[n(202)] = e.APP_STATUS = e[n(249)] = void 0, e[n(255)] = {
              REND: 5001,
              REND_TIMEOUT: 5002,
              TOTAL_TIMEOUT: 5003,
              ID_NOT_EQUAL: 5004,
              TIMEOUT: 6001,
              INVALID_SOURCE: 6099,
              REWARD_EXIST: 6098,
              UX_INVALID: 6097,
              QA_FILTER: 6013,
              NOT_TPL: 6014,
              NATIVE_DEFAULT: 6100,
              RES_ERR: 6101,
              OPPO_VIDEO: 6102,
              OPPO_NATIVE: 6103,
              BD_DEFAULT: 6200,
              PRE_FAIL: 6201,
              ADX_DEFAULT: 6300,
              REPORT_FAIL: 6310,
              NO_REPORT_URL: 6311,
              YLH_DEFAULT: 6400,
              POOL_FAIL: 6500
            };
            const i = e[n(222)] = {
                req: "req",
                req2: "req2",
                send2: "send2",
                win: n(197),
                send: n(217),
                imp: n(229),
                clk: n(245),
                cls: n(196),
                err: n(218),
                breakReq: n(247),
                renewReq: n(256),
                realInstalled: n(236),
                actStatusChange: n(244),
                actIn: "actIn",
                actable: n(224),
                actOut: "actOut",
                poolIn: n(230),
                poolOut: n(214),
                hwShow: "reportAdShow",
                rvClk: "rVideoEnterClk",
                rvShow: n(206),
                gg3Ready: n(235)
              },
              s = (e[n(250)] = {
                [i[n(233)]]: !0,
                [i[n(240)]]: !0,
                [i[n(229)]]: !0,
                [i[n(245)]]: !0,
                [i[n(196)]]: !0,
                [i[n(218)]]: !0,
                [i[n(237)]]: !0,
                [i[n(224)]]: !0
              }, e[n(203)] = {
                DONE: 0,
                NO: 9
              }, e[n(215)] = {
                NO: -1,
                BTN: 1,
                IMG: 2
              }, e[n(253)] = {
                COVER: -1,
                CTR: 0,
                REAL_IMG: 1,
                REAL_BTN: 2,
                REPORT: 99,
                SLIDE_IMG: 101,
                SLIDE_BTN: 102
              }, e[n(239)] = {
                BTN: n(261),
                IMG: n(223),
                AUTO: "auto"
              }, e.CLS_BY = {}, e[n(226)] = {
                DOWNLOAD: n(232),
                DOWNLOADING: n(210),
                PAUSE: n(242),
                DOWNLOADFAILED: n(204),
                DOWNLOADED: n(246),
                INSTALL: "INSTALL",
                WAITING: n(200),
                INSTALLING: n(259),
                INSTALLED: "INSTALLED",
                NULL: n(227)
              });
            e[n(249)] = {
              [s[n(200)]]: !0,
              [s[n(201)]]: !0,
              [s[n(259)]]: !0,
              [s[n(246)]]: !0,
              [s.DOWNLOADING]: !0
            }, e[n(202)] = {
              [s[n(242)]]: !0,
              [s[n(232)]]: !0,
              [s[n(228)]]: !0,
              [s[n(204)]]: !0
            }, e[n(231)] = {
              OTHER: "other",
              UNKNOWN: n(208),
              OPENAPP: n(209),
              QUICKAPP: n(220),
              DOWNLOADAPP: n(211)
            }, e[n(243)] = {
              huawei_AGD: !0,
              huawei: !0,
              xiaomi: !0,
              honor: !0,
              OPPO: !0,
              VIVO: !0,
              ADX_api: !1,
              百度_SDK: !1,
              ylh: !1
            }, e[n(199)] = {
              NATIVE: n(216),
              TPL: n(212)
            }, e[n(252)] = {
              layer: n(219)
            }, e[n(207)] = {
              layerPoolOut: n(221),
              layerSourceImp: n(254),
              cachePoolEmpty: n(260)
            };
          },
          1646: (t, e, n) => {
            "use strict";

            const r = a;
            function a(t, e) {
              const n = u();
              return (a = function (t, e) {
                return n[t -= 404];
              })(t, e);
            }
            !function (t, e) {
              const n = a,
                r = t();
              for (;;) try {
                if (523902 == -parseInt(n(404)) / 1 + -parseInt(n(418)) / 2 + parseInt(n(435)) / 3 + -parseInt(n(415)) / 4 * (-parseInt(n(422)) / 5) + -parseInt(n(425)) / 6 * (parseInt(n(421)) / 7) + parseInt(n(420)) / 8 * (parseInt(n(410)) / 9) + parseInt(n(409)) / 10 * (-parseInt(n(406)) / 11)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(u), Object.defineProperty(e, "__esModule", {
              value: !0
            }), e[r(417)] = function (t, e) {
              const n = r;
              return $utils.getGlobalCache(c[n(423)][n(419)], () => $utils[n(427)](c.KEYS[n(419)], () => async function () {
                const t = r,
                  e = $utils.ts(),
                  n = $utils[t(413)](c[t(423)][t(433)]);
                try {
                  const [{
                      value: r = {}
                    }, {
                      value: a = {}
                    }] = await $PromiseAllSettled([$aide[t(405)](), (0, i[t(408)])()]),
                    {
                      brand: s,
                      model: u,
                      userId: h,
                      traceId: l,
                      uniqueId: f,
                      channelId: d,
                      accountId: I,
                      qaOAIDMD5: v,
                      sourceType: g,
                      packageName: m,
                      ggBodyLevel1: y,
                      ggBodyLevel2: b,
                      PCCSDKVersion: k,
                      sourcePackageName: _,
                      platformVersionCode: w,
                      platformVersionCode2: x
                    } = r,
                    {
                      packages: C,
                      uninstall_packages: T
                    } = a,
                    S = {
                      user_id: h,
                      oaid_md5: v,
                      package: m,
                      channel_id: d,
                      sourcePkg: _,
                      pccSdkVersion: k,
                      packages: C[t(434)](","),
                      stayTime: $aide[t(428)](),
                      uninstall_packages: T[t(434)](","),
                      platformVersionCode2: x,
                      platformVersionCode: w,
                      ggBodyLevel1: y,
                      ggBodyLevel2: b,
                      clientTime: e,
                      sourceType: g,
                      accountId: I,
                      launchId: n,
                      uniqueId: f,
                      traceId: l,
                      model: u,
                      brand: s
                    };
                  let E;
                  if (E = o[t(424)] ? o[t(411)][$utils[t(414)]()] || {} : (await new p()[t(412)]({
                    params: S
                  })[t(432)](t => {
                    throw t;
                  }))[t(429)], E) return setGlobalData(c[t(423)][t(419)], E), E;
                } catch (e) {
                  console[t(430)](t(431), e[t(416)]);
                }
                return {};
              }(), e), {});
            };
            var i = n(3980),
              s = n(9791),
              o = n(8564),
              c = n(1589);
            class p extends s.BaseEngine {
              constructor(t) {
                const e = r;
                super({
                  ...t,
                  url: e(426),
                  method: e(407)
                });
              }
            }
            function u() {
              const t = ["CONFIGER_KEY", "20560cHpRXi", "1241331XsBepF", "4155850iHaCUY", "KEYS", "mockable", "12RhGIRu", "/v4/ggconf", "getPromiseSingleton", "getDuration", "data", "log", "getConfig err: ", "catch", "LAUNCH_ID", "join", "2927226SQulNC", "808700DJZPYO", "getInfoParams", "11015851iYTsey", "get", "checkStatus", "10YNsgti", "3501LKjSOy", "mockData", "ajax", "getUniqID", "getBrand", "4osjVyF", "message", "getConfig", "235866ojYakU"];
              return (u = function () {
                return t;
              })();
            }
          },
          4084: (t, e, n) => {
            "use strict";

            function r(t, e) {
              var n = p();
              return (r = function (t, e) {
                return n[t -= 140];
              })(t, e);
            }
            var a = r;
            !function (t, e) {
              for (var n = r, a = t();;) try {
                if (984137 == parseInt(n(155)) / 1 + parseInt(n(142)) / 2 + -parseInt(n(153)) / 3 * (parseInt(n(140)) / 4) + parseInt(n(147)) / 5 * (-parseInt(n(148)) / 6) + -parseInt(n(160)) / 7 * (-parseInt(n(161)) / 8) + -parseInt(n(143)) / 9 * (-parseInt(n(157)) / 10) + -parseInt(n(151)) / 11) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(p), Object[a(146)](e, "__esModule", {
              value: !0
            }), e[a(154)] = function (t) {
              var e = a;
              const n = $utils[e(149)](e(162), getGlobalData(i[e(156)].CONFIGER_KEY));
              return n ? s[e(150)][e(154)](t, o.default[e(141)](n), {
                iv: o[e(150)][e(141)](n[e(158)](0, 16))
              })[e(144)](o[e(150)]) : t;
            }, e[a(152)] = function (t) {
              var e = a;
              const n = $utils._path(e(162), getGlobalData(i[e(156)][e(159)]));
              return n ? s[e(150)][e(152)](t, o[e(150)][e(141)](n), {
                iv: o.default[e(141)](n.substring(0, 16))
              })[e(144)]() : t;
            };
            var i = n(1589),
              s = c(n(149)),
              o = c(n(4900));
            function c(t) {
              return t && t[a(145)] ? t : {
                default: t
              };
            }
            function p() {
              var t = ["CONFIGER_KEY", "2215283YQisxt", "16mEeHUn", "global.key", "52RZLlMX", "parse", "3006842UylhCS", "9PYuRst", "toString", "__esModule", "defineProperty", "10fEfBxE", "2471778AIjFGy", "_path", "default", "12553068llIDyk", "encrypt", "159438Zzthra", "decrypt", "612617hnbYmB", "KEYS", "8911730WRjYJq", "substring"];
              return (p = function () {
                return t;
              })();
            }
          },
          3980: (t, e, n) => {
            "use strict";

            const r = c;
            function a() {
              const t = ["error", "26597XThCHy", "204812nLmhIo", "__esModule", "getInstallStatus", "map", "catch", "checkStatus", "huawei", "filter", "3lmMWwj", "keys", "2712sUbWQi", "2939853RcqemD", "54VlhXMd", "6ghatqz", "1525555tpTgnE", "19745xlTvDN", "22FGdvpZ", "getBrand", "CHECK_PKG_MAP", "5227296YosJZT", "reduce", "433490VkpgMd", "NEED_PKGS", "includes", "@app-module/system.package", "default"];
              return (a = function () {
                return t;
              })();
            }
            !function (t, e) {
              const n = c,
                r = t();
              for (;;) try {
                if (343880 == parseInt(n(462)) / 1 * (parseInt(n(479)) / 2) + parseInt(n(471)) / 3 * (-parseInt(n(463)) / 4) + parseInt(n(477)) / 5 * (-parseInt(n(476)) / 6) + parseInt(n(474)) / 7 + parseInt(n(482)) / 8 + -parseInt(n(475)) / 9 * (parseInt(n(484)) / 10) + parseInt(n(478)) / 11 * (-parseInt(n(473)) / 12)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(a), Object.defineProperty(e, r(464), {
              value: !0
            }), e[r(468)] = async function () {
              const t = r,
                e = o[t(481)][$utils[t(480)]()] || o[t(481)][t(469)],
                n = await p([...e, ...o[t(457)]]);
              return {
                packages: Object[t(472)](n)[t(470)](e => n[e] && !o[t(457)][t(458)](e)),
                uninstall_packages: o[t(457)][t(470)](t => !n[t])
              };
            }, e[r(465)] = p;
            var i,
              s = (i = $app_require$(r(459))) && i[r(464)] ? i : {
                default: i
              },
              o = n(9425);
            function c(t, e) {
              const n = a();
              return (c = function (t, e) {
                return n[t -= 457];
              })(t, e);
            }
            async function p(t) {
              const e = r,
                n = t[e(466)](t => new Promise(async n => {
                  const r = e,
                    a = await s[r(460)].hasInstalled({
                      package: t
                    })[r(467)](t => console[r(461)]("getInstalledPromises error: ", t)),
                    {
                      data: i = {}
                    } = a || {};
                  n({
                    [t]: !!i.result
                  });
                }));
              return (await $PromiseAllSettled(n))[e(483)]((t, e) => {
                const {
                  value: n
                } = e;
                return {
                  ...t,
                  ...n
                };
              }, {});
            }
          },
          149: (t, e, n) => {
            "use strict";

            function r(t, e) {
              var n = s();
              return (r = function (t, e) {
                return n[t -= 212];
              })(t, e);
            }
            var a, i;
            function s() {
              var t = ["_doCryptBlock", "_invKeySchedule", "581ckmMDe", "./enc-base64", "4299806kvrTuX", "_nRounds", "AES", "extend", "CryptoJS", "_createHelper", "378297AjrbkP", "1154akJBBJ", "4479296VaFYZc", "_keySchedule", "sigBytes", "amd", "./evpkdf", "6sEAVbA", "1529930FewmIU", "19658349EPYTSV", "algo", "6072416Lizqoo", "words"];
              return (s = function () {
                return t;
              })();
            }
            !function (t, e) {
              for (var n = r, a = t();;) try {
                if (823997 == parseInt(n(231)) / 1 * (parseInt(n(217)) / 2) + -parseInt(n(216)) / 3 + parseInt(n(218)) / 4 + parseInt(n(224)) / 5 + parseInt(n(223)) / 6 * (parseInt(n(233)) / 7) + parseInt(n(227)) / 8 + -parseInt(n(225)) / 9) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(s), t.exports = (a = n(5137), n(2115), n(5106), n(1517), n(4328), i = r, function () {
              var t = r,
                e = a,
                n = e.lib.BlockCipher,
                i = e[t(226)],
                s = [],
                o = [],
                c = [],
                p = [],
                u = [],
                h = [],
                l = [],
                f = [],
                d = [],
                I = [];
              !function () {
                for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var n = 0,
                  r = 0;
                for (e = 0; e < 256; e++) {
                  var a = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                  a = a >>> 8 ^ 255 & a ^ 99, s[n] = a, o[a] = n;
                  var i = t[n],
                    v = t[i],
                    g = t[v],
                    m = 257 * t[a] ^ 16843008 * a;
                  c[n] = m << 24 | m >>> 8, p[n] = m << 16 | m >>> 16, u[n] = m << 8 | m >>> 24, h[n] = m, m = 16843009 * g ^ 65537 * v ^ 257 * i ^ 16843008 * n, l[a] = m << 24 | m >>> 8, f[a] = m << 16 | m >>> 16, d[a] = m << 8 | m >>> 24, I[a] = m, n ? (n = i ^ t[t[t[g ^ i]]], r ^= t[t[r]]) : n = r = 1;
                }
              }();
              var v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                g = i.AES = n[t(213)]({
                  _doReset: function () {
                    var e = t;
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                      for (var n = this._keyPriorReset = this._key, r = n[e(228)], a = n[e(220)] / 4, i = 4 * ((this[e(234)] = a + 6) + 1), o = this[e(219)] = [], c = 0; c < i; c++) c < a ? o[c] = r[c] : (h = o[c - 1], c % a ? a > 6 && c % a == 4 && (h = s[h >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & h]) : (h = s[(h = h << 8 | h >>> 24) >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & h], h ^= v[c / a | 0] << 24), o[c] = o[c - a] ^ h);
                      for (var p = this[e(230)] = [], u = 0; u < i; u++) {
                        if (c = i - u, u % 4) var h = o[c];else h = o[c - 4];
                        p[u] = u < 4 || c <= 4 ? h : l[s[h >>> 24]] ^ f[s[h >>> 16 & 255]] ^ d[s[h >>> 8 & 255]] ^ I[s[255 & h]];
                      }
                    }
                  },
                  encryptBlock: function (t, e) {
                    this._doCryptBlock(t, e, this._keySchedule, c, p, u, h, s);
                  },
                  decryptBlock: function (e, n) {
                    var r = t,
                      a = e[n + 1];
                    e[n + 1] = e[n + 3], e[n + 3] = a, this[r(229)](e, n, this[r(230)], l, f, d, I, o), a = e[n + 1], e[n + 1] = e[n + 3], e[n + 3] = a;
                  },
                  _doCryptBlock: function (e, n, r, a, i, s, o, c) {
                    for (var p = this[t(234)], u = e[n] ^ r[0], h = e[n + 1] ^ r[1], l = e[n + 2] ^ r[2], f = e[n + 3] ^ r[3], d = 4, I = 1; I < p; I++) {
                      var v = a[u >>> 24] ^ i[h >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & f] ^ r[d++],
                        g = a[h >>> 24] ^ i[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[255 & u] ^ r[d++],
                        m = a[l >>> 24] ^ i[f >>> 16 & 255] ^ s[u >>> 8 & 255] ^ o[255 & h] ^ r[d++],
                        y = a[f >>> 24] ^ i[u >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[255 & l] ^ r[d++];
                      u = v, h = g, l = m, f = y;
                    }
                    v = (c[u >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & f]) ^ r[d++], g = (c[h >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & u]) ^ r[d++], m = (c[l >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & h]) ^ r[d++], y = (c[f >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & l]) ^ r[d++], e[n] = v, e[n + 1] = g, e[n + 2] = m, e[n + 3] = y;
                  },
                  keySize: 8
                });
              e[t(212)] = n[t(215)](g);
            }(), a[i(212)]);
          },
          4328: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c(t, e) {
              var n = p();
              return (c = function (t, e) {
                return n[t -= 418];
              })(t, e);
            }
            function p() {
              var t = ["toString", "Decryptor", "finalize", "string", "WordArray", "_mode", "words", "ivSize", "pad", "execute", "cfg", "ciphertext", "_minBufferSize", "_process", "BlockCipherMode", "padding", "_prevBlock", "565obWUMv", "_ENC_XFORM_MODE", "./evpkdf", "unpad", "amd", "_parse", "_iv", "StreamCipher", "Utf8", "sigBytes", "hasher", "salt", "_xformMode", "kdf", "format", "create", "createEncryptor", "_data", "encrypt", "object", "lib", "PasswordBasedCipher", "664510AElAJe", "__creator", "Cipher", "SerializableCipher", "Base", "createDecryptor", "Pkcs7", "blockSize", "slice", "function", "_cipher", "11288844HxBCNA", "6584020EjeKdx", "70293sAXXEr", "Base64", "3GSvODG", "Encryptor", "encryptBlock", "EvpKDF", "87579uLfMgT", "_append", "BufferedBlockAlgorithm", "2uesxDn", "mixIn", "reset", "concat", "mode", "34377744QUKytm", "formatter", "19002ncOsvu", "decryptBlock", "CipherParams", "compute", "keySize", "call", "CryptoJS", "random", "key", "extend", "_doFinalize", "enc", "processBlock", "algo", "OpenSSL", "_DEC_XFORM_MODE", "33dGhBgC", "8QWIitJ", "push", "stringify"];
              return (p = function () {
                return t;
              })();
            }
            !function (t, e) {
              for (var n = c, r = t();;) try {
                if (871085 == -parseInt(n(454)) / 1 * (parseInt(n(463)) / 2) + parseInt(n(456)) / 3 * (parseInt(n(453)) / 4) + parseInt(n(419)) / 5 * (parseInt(n(470)) / 6) + parseInt(n(452)) / 7 + -parseInt(n(487)) / 8 * (parseInt(n(460)) / 9) + parseInt(n(441)) / 10 * (parseInt(n(486)) / 11) + -parseInt(n(468)) / 12) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(p), s = function (t) {
              var e,
                n,
                r,
                a,
                i,
                s,
                o,
                p,
                u,
                h,
                l,
                f,
                d,
                I,
                v,
                g,
                m,
                y,
                b,
                k = c;
              t[k(439)][k(443)] || (a = (r = (n = t)[(e = k)(439)])[e(445)], i = r[e(494)], s = r[e(462)], (o = n[e(481)])[e(427)], p = o[e(455)], u = n[e(483)][e(459)], h = r[e(443)] = s[e(479)]({
                cfg: a.extend(),
                createEncryptor: function (t, n) {
                  var r = e;
                  return this[r(434)](this[r(420)], t, n);
                },
                createDecryptor: function (t, n) {
                  var r = e;
                  return this[r(434)](this[r(485)], t, n);
                },
                init: function (t, n, r) {
                  var a = e;
                  this[a(500)] = this[a(500)][a(479)](r), this[a(431)] = t, this._key = n, this[a(465)]();
                },
                reset: function () {
                  var t = e;
                  s[t(465)][t(475)](this), this._doReset();
                },
                process: function (t) {
                  var n = e;
                  return this[n(461)](t), this[n(503)]();
                },
                finalize: function (t) {
                  var n = e;
                  return t && this[n(461)](t), this[n(480)]();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function t(t) {
                    return typeof t == c(493) ? b : m;
                  }
                  return function (e) {
                    return {
                      encrypt: function (n, r, a) {
                        return t(r).encrypt(e, n, r, a);
                      },
                      decrypt: function (n, r, a) {
                        return t(r).decrypt(e, n, r, a);
                      }
                    };
                  };
                }()
              }), r[e(426)] = h[e(479)]({
                _doFinalize: function () {
                  return this[e(503)](!0);
                },
                blockSize: 1
              }), l = n[e(467)] = {}, f = r[e(504)] = a[e(479)]({
                createEncryptor: function (t, n) {
                  var r = e;
                  return this[r(457)][r(434)](t, n);
                },
                createDecryptor: function (t, n) {
                  var r = e;
                  return this[r(491)][r(434)](t, n);
                },
                init: function (t, n) {
                  var r = e;
                  this[r(451)] = t, this[r(425)] = n;
                }
              }), d = l.CBC = function () {
                var t = e,
                  n = f[t(479)]();
                function r(e, n, r) {
                  var a,
                    i = t,
                    s = this[i(425)];
                  s ? (a = s, this[i(425)] = void 0) : a = this[i(418)];
                  for (var o = 0; o < r; o++) e[n + o] ^= a[o];
                }
                return n[t(457)] = n[t(479)]({
                  processBlock: function (e, n) {
                    var a = t,
                      i = this[a(451)],
                      s = i[a(448)];
                    r[a(475)](this, e, n, s), i[a(458)](e, n), this[a(418)] = e.slice(n, n + s);
                  }
                }), n[t(491)] = n.extend({
                  processBlock: function (e, n) {
                    var a = t,
                      i = this[a(451)],
                      s = i[a(448)],
                      o = e[a(449)](n, n + s);
                    i[a(471)](e, n), r.call(this, e, n, s), this._prevBlock = o;
                  }
                }), n;
              }(), I = (n[e(498)] = {})[e(447)] = {
                pad: function (t, n) {
                  for (var r = e, a = 4 * n, s = a - t[r(428)] % a, o = s << 24 | s << 16 | s << 8 | s, c = [], p = 0; p < s; p += 4) c[r(488)](o);
                  var u = i[r(434)](c, s);
                  t.concat(u);
                },
                unpad: function (t) {
                  var n = e,
                    r = 255 & t[n(496)][t.sigBytes - 1 >>> 2];
                  t[n(428)] -= r;
                }
              }, r.BlockCipher = h[e(479)]({
                cfg: h[e(500)][e(479)]({
                  mode: d,
                  padding: I
                }),
                reset: function () {
                  var t,
                    n = e;
                  h[n(465)][n(475)](this);
                  var r = this.cfg,
                    a = r.iv,
                    i = r[n(467)];
                  this[n(431)] == this._ENC_XFORM_MODE ? t = i[n(435)] : (t = i[n(446)], this[n(502)] = 1), this[n(495)] && this[n(495)][n(442)] == t ? this[n(495)].init(this, a && a.words) : (this[n(495)] = t[n(475)](i, this, a && a[n(496)]), this[n(495)][n(442)] = t);
                },
                _doProcessBlock: function (t, n) {
                  var r = e;
                  this[r(495)][r(482)](t, n);
                },
                _doFinalize: function () {
                  var t,
                    n = e,
                    r = this[n(500)][n(505)];
                  return this[n(431)] == this._ENC_XFORM_MODE ? (r.pad(this[n(436)], this[n(448)]), t = this[n(503)](!0)) : (t = this[n(503)](!0), r[n(422)](t)), t;
                },
                blockSize: 4
              }), v = r[e(472)] = a[e(479)]({
                init: function (t) {
                  this[e(464)](t);
                },
                toString: function (t) {
                  var n = e;
                  return (t || this[n(469)])[n(489)](this);
                }
              }), g = (n[e(433)] = {})[e(484)] = {
                stringify: function (t) {
                  var n = e,
                    r = t.ciphertext,
                    a = t.salt;
                  return (a ? i[n(434)]([1398893684, 1701076831])[n(466)](a)[n(466)](r) : r)[n(490)](p);
                },
                parse: function (t) {
                  var n,
                    r = e,
                    a = p.parse(t),
                    s = a[r(496)];
                  return 1398893684 == s[0] && 1701076831 == s[1] && (n = i[r(434)](s.slice(2, 4)), s.splice(0, 4), a[r(428)] -= 16), v[r(434)]({
                    ciphertext: a,
                    salt: n
                  });
                }
              }, m = r[e(444)] = a[e(479)]({
                cfg: a[e(479)]({
                  format: g
                }),
                encrypt: function (t, n, r, a) {
                  var i = e;
                  a = this.cfg.extend(a);
                  var s = t.createEncryptor(r, a),
                    o = s.finalize(n),
                    c = s[i(500)];
                  return v[i(434)]({
                    ciphertext: o,
                    key: r,
                    iv: c.iv,
                    algorithm: t,
                    mode: c[i(467)],
                    padding: c[i(505)],
                    blockSize: t[i(448)],
                    formatter: a[i(433)]
                  });
                },
                decrypt: function (t, n, r, a) {
                  var i = e;
                  return a = this[i(500)][i(479)](a), n = this._parse(n, a[i(433)]), t[i(446)](r, a)[i(492)](n[i(501)]);
                },
                _parse: function (t, n) {
                  return typeof t == e(493) ? n.parse(t, this) : t;
                }
              }), y = (n.kdf = {})[e(484)] = {
                execute: function (t, n, r, a, s) {
                  var o = e;
                  if (!a && (a = i[o(477)](8)), s) c = u.create({
                    keySize: n + r,
                    hasher: s
                  })[o(473)](t, a);else var c = u[o(434)]({
                    keySize: n + r
                  })[o(473)](t, a);
                  var p = i.create(c.words[o(449)](n), 4 * r);
                  return c[o(428)] = 4 * n, v.create({
                    key: c,
                    iv: p,
                    salt: a
                  });
                }
              }, b = r[e(440)] = m[e(479)]({
                cfg: m[e(500)].extend({
                  kdf: y
                }),
                encrypt: function (t, n, r, a) {
                  var i = e,
                    s = (a = this.cfg[i(479)](a))[i(432)][i(499)](r, t[i(474)], t[i(497)], a[i(430)], a[i(429)]);
                  a.iv = s.iv;
                  var o = m[i(437)][i(475)](this, t, n, s[i(478)], a);
                  return o[i(464)](s), o;
                },
                decrypt: function (t, n, r, a) {
                  var i = e;
                  a = this[i(500)][i(479)](a), n = this[i(424)](n, a[i(433)]);
                  var s = a[i(432)][i(499)](r, t[i(474)], t.ivSize, n[i(430)], a[i(429)]);
                  return a.iv = s.iv, m.decrypt[i(475)](this, t, n, s.key, a);
                }
              }));
            }, typeof e === (o = c)(438) ? t.exports = e = s(n(5137), n(1517)) : "function" === o(450) && n.amdD[o(423)] ? (a = [n(5137), n(1281)(o(421))], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i)) : s((void 0)[o(476)]);
          },
          5137: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c(t, e) {
              var n = p();
              return (c = function (t, e) {
                return n[t -= 182];
              })(t, e);
            }
            function p() {
              var t = ["Latin1", "639ewPdnB", "fromCharCode", "HMAC", "_data", "Hex", "msCrypto", "sigBytes", "clamp", "blockSize", "2633640CPZgwr", "getRandomValues", "string", "Utf8", "length", "8261540AladtN", "toString", "function", "_doProcessBlock", "crypto", "finalize", "call", "_doFinalize", "words", "BufferedBlockAlgorithm", "175784kBVBZx", "lib", "max", "prototype", "Malformed UTF-8 data", "CryptoJS", "slice", "Native crypto module could not be used to get secure random number.", "30XYrtWE", "reset", "mixIn", "create", "5604bhGXlq", "2245270ufpMKY", "splice", "_append", "enc", "cfg", "substr", "1377344VHnLga", "1318628MmbvYA", "parse", "Hasher", "object", "charCodeAt", "WordArray", "undefined", "push", "readInt32LE", "hasOwnProperty", "apply", "extend", "concat", "init", "randomBytes", "$super", "clone", "ceil", "_process"];
              return (p = function () {
                return t;
              })();
            }
            !function (t, e) {
              for (var n = c, r = t();;) try {
                if (961609 == parseInt(n(186)) / 1 + parseInt(n(244)) / 2 + parseInt(n(216)) / 3 + parseInt(n(187)) / 4 + -parseInt(n(239)) / 5 * (parseInt(n(243)) / 6) + -parseInt(n(221)) / 7 + parseInt(n(231)) / 8 * (-parseInt(n(207)) / 9)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(p), s = function () {
              var t = t || function (t, e) {
                var r,
                  a = c;
                if (typeof window !== a(193) && window.crypto && (r = window[a(225)]), typeof self !== a(193) && self[a(225)] && (r = self[a(225)]), typeof globalThis !== a(193) && globalThis[a(225)] && (r = globalThis[a(225)]), !r && "undefined" != typeof window && window[a(212)] && (r = window[a(212)]), !r && typeof n.g !== a(193) && n.g[a(225)] && (r = n.g[a(225)]), !r && "function" === a(223)) try {
                  r = n(6326);
                } catch (t) {}
                var i = function () {
                    var t = a;
                    if (r) {
                      if (typeof r[t(217)] === t(223)) try {
                        return r.getRandomValues(new Uint32Array(1))[0];
                      } catch (t) {}
                      if ("function" == typeof r[t(201)]) try {
                        return r[t(201)](4)[t(195)]();
                      } catch (t) {}
                    }
                    throw new Error(t(238));
                  },
                  s = Object[a(242)] || function () {
                    function t() {}
                    return function (e) {
                      var n,
                        r = c;
                      return t[r(234)] = e, n = new t(), t[r(234)] = null, n;
                    };
                  }(),
                  o = {},
                  p = o[a(232)] = {},
                  u = p.Base = {
                    extend: function (t) {
                      var e = c,
                        n = s(this);
                      return t && n[e(241)](t), (!n.hasOwnProperty(e(200)) || this[e(200)] === n[e(200)]) && (n[e(200)] = function () {
                        var t = e;
                        n[t(202)][t(200)][t(197)](this, arguments);
                      }), n[e(200)][e(234)] = n, n.$super = this, n;
                    },
                    create: function () {
                      var t = c,
                        e = this[t(198)]();
                      return e.init[t(197)](e, arguments), e;
                    },
                    init: function () {},
                    mixIn: function (t) {
                      var e = c;
                      for (var n in t) t[e(196)](n) && (this[n] = t[n]);
                      t[e(196)]("toString") && (this[e(222)] = t.toString);
                    },
                    clone: function () {
                      var t = c;
                      return this[t(200)][t(234)][t(198)](this);
                    }
                  },
                  h = p[a(192)] = u.extend({
                    init: function (t, e) {
                      var n = a;
                      t = this.words = t || [], this[n(213)] = null != e ? e : 4 * t[n(220)];
                    },
                    toString: function (t) {
                      return (t || f).stringify(this);
                    },
                    concat: function (t) {
                      var e = a,
                        n = this[e(229)],
                        r = t[e(229)],
                        i = this[e(213)],
                        s = t.sigBytes;
                      if (this[e(214)](), i % 4) for (var o = 0; o < s; o++) {
                        var c = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        n[i + o >>> 2] |= c << 24 - (i + o) % 4 * 8;
                      } else for (var p = 0; p < s; p += 4) n[i + p >>> 2] = r[p >>> 2];
                      return this[e(213)] += s, this;
                    },
                    clamp: function () {
                      var e = a,
                        n = this[e(229)],
                        r = this[e(213)];
                      n[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, n[e(220)] = t[e(204)](r / 4);
                    },
                    clone: function () {
                      var t = a,
                        e = u[t(203)][t(227)](this);
                      return e.words = this[t(229)][t(237)](0), e;
                    },
                    random: function (t) {
                      for (var e = a, n = [], r = 0; r < t; r += 4) n[e(194)](i());
                      return new h[e(200)](n, t);
                    }
                  }),
                  l = o[a(183)] = {},
                  f = l[a(211)] = {
                    stringify: function (t) {
                      for (var e = a, n = t[e(229)], r = t[e(213)], i = [], s = 0; s < r; s++) {
                        var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                        i[e(194)]((o >>> 4).toString(16)), i[e(194)]((15 & o)[e(222)](16));
                      }
                      return i.join("");
                    },
                    parse: function (t) {
                      for (var e = a, n = t[e(220)], r = [], i = 0; i < n; i += 2) r[i >>> 3] |= parseInt(t[e(185)](i, 2), 16) << 24 - i % 8 * 4;
                      return new h[e(200)](r, n / 2);
                    }
                  },
                  d = l[a(206)] = {
                    stringify: function (t) {
                      for (var e = a, n = t.words, r = t[e(213)], i = [], s = 0; s < r; s++) {
                        var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                        i[e(194)](String[e(208)](o));
                      }
                      return i.join("");
                    },
                    parse: function (t) {
                      for (var e = a, n = t[e(220)], r = [], i = 0; i < n; i++) r[i >>> 2] |= (255 & t[e(191)](i)) << 24 - i % 4 * 8;
                      return new h[e(200)](r, n);
                    }
                  },
                  I = l[a(219)] = {
                    stringify: function (t) {
                      var e = a;
                      try {
                        return decodeURIComponent(escape(d.stringify(t)));
                      } catch (t) {
                        throw new Error(e(235));
                      }
                    },
                    parse: function (t) {
                      return d[a(188)](unescape(encodeURIComponent(t)));
                    }
                  },
                  v = p[a(230)] = u[a(198)]({
                    reset: function () {
                      var t = a;
                      this[t(210)] = new h[t(200)](), this._nDataBytes = 0;
                    },
                    _append: function (t) {
                      var e = a;
                      typeof t == e(218) && (t = I.parse(t)), this[e(210)][e(199)](t), this._nDataBytes += t.sigBytes;
                    },
                    _process: function (e) {
                      var n,
                        r = a,
                        i = this[r(210)],
                        s = i[r(229)],
                        o = i[r(213)],
                        c = this[r(215)],
                        p = o / (4 * c),
                        u = (p = e ? t[r(204)](p) : t[r(233)]((0 | p) - this._minBufferSize, 0)) * c,
                        l = t.min(4 * u, o);
                      if (u) {
                        for (var f = 0; f < u; f += c) this[r(224)](s, f);
                        n = s[r(245)](0, u), i[r(213)] -= l;
                      }
                      return new h.init(n, l);
                    },
                    clone: function () {
                      var t = a,
                        e = u.clone[t(227)](this);
                      return e[t(210)] = this._data[t(203)](), e;
                    },
                    _minBufferSize: 0
                  }),
                  g = (p[a(189)] = v[a(198)]({
                    cfg: u[a(198)](),
                    init: function (t) {
                      var e = a;
                      this.cfg = this[e(184)][e(198)](t), this[e(240)]();
                    },
                    reset: function () {
                      var t = a;
                      v[t(240)][t(227)](this), this._doReset();
                    },
                    update: function (t) {
                      var e = a;
                      return this._append(t), this[e(205)](), this;
                    },
                    finalize: function (t) {
                      var e = a;
                      return t && this[e(182)](t), this[e(228)]();
                    },
                    blockSize: 16,
                    _createHelper: function (t) {
                      return function (e, n) {
                        var r = c;
                        return new t.init(n)[r(226)](e);
                      };
                    },
                    _createHmacHelper: function (t) {
                      return function (e, n) {
                        var r = c;
                        return new g[r(209)][r(200)](t, n).finalize(e);
                      };
                    }
                  }), o.algo = {});
                return o;
              }(Math);
              return t;
            }, typeof e === (o = c)(190) ? t.exports = e = s() : "function" === o(223) && n.amdO ? (a = [], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i)) : (void 0)[o(236)] = s();
          },
          2115: (t, e, n) => {
            "use strict";

            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 449];
              })(t, e);
            }
            function a() {
              var t = ["push", "exports", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "9296wgyQGk", "CryptoJS", "44874wbbZSz", "834995GjGGyh", "lib", "length", "./core", "function", "charCodeAt", "words", "_map", "1059PrDFwv", "3718602IDnDbZ", "amd", "create", "indexOf", "charAt", "72ycIQUf", "1602564BRMSaX", "399070nnhOeE", "1103683RCzBZf", "_reverseMap"];
              return (a = function () {
                return t;
              })();
            }
            var i, s, o, c;
            t = n.nmd(t), function (t, e) {
              for (var n = r, a = t();;) try {
                if (519581 == -parseInt(n(459)) / 1 + -parseInt(n(458)) / 2 + -parseInt(n(451)) / 3 * (-parseInt(n(465)) / 4) + parseInt(n(468)) / 5 + parseInt(n(452)) / 6 + parseInt(n(460)) / 7 + -parseInt(n(457)) / 8 * (parseInt(n(467)) / 9)) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), t[r(463)] = (i = n(5137), c = (o = i)[(s = r)(469)].WordArray, o.enc.Base64 = {
              stringify: function (t) {
                var e = s,
                  n = t[e(449)],
                  r = t.sigBytes,
                  a = this[e(450)];
                t.clamp();
                for (var i = [], o = 0; o < r; o += 3) for (var c = (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (n[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | n[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, p = 0; p < 4 && o + 0.75 * p < r; p++) i[e(462)](a[e(456)](c >>> 6 * (3 - p) & 63));
                var u = a[e(456)](64);
                if (u) for (; i[e(470)] % 4;) i[e(462)](u);
                return i.join("");
              },
              parse: function (t) {
                var e = s,
                  n = t[e(470)],
                  r = this._map,
                  a = this[e(461)];
                if (!a) {
                  a = this[e(461)] = [];
                  for (var i = 0; i < r[e(470)]; i++) a[r[e(473)](i)] = i;
                }
                var o = r[e(456)](64);
                if (o) {
                  var p = t[e(455)](o);
                  -1 !== p && (n = p);
                }
                return function (t, e, n) {
                  for (var r = s, a = [], i = 0, o = 0; o < e; o++) if (o % 4) {
                    var p = n[t.charCodeAt(o - 1)] << o % 4 * 2 | n[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                    a[i >>> 2] |= p << 24 - i % 4 * 8, i++;
                  }
                  return c[r(454)](a, i);
                }(t, n, a);
              },
              _map: s(464)
            }, i.enc.Base64);
          },
          4900: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c() {
              var t = ["3235293pjAaMt", "483327HQrEkl", "exports", "10015080LHbWBB", "301902EpHduk", "object", "amd", "enc", "10nzYBhx", "7121oYrSax", "Utf8", "16ISAOKP", "4RJCSGZ", "./core", "5RVSdpi", "CryptoJS", "1677434CMCUmm", "18IPBlmc", "3849776EQXBmH", "function"];
              return (c = function () {
                return t;
              })();
            }
            function p(t, e) {
              var n = c();
              return (p = function (t, e) {
                return n[t -= 369];
              })(t, e);
            }
            t = n.nmd(t), function (t, e) {
              for (var n = p, r = t();;) try {
                if (429175 == parseInt(n(383)) / 1 * (-parseInt(n(371)) / 2) + -parseInt(n(375)) / 3 * (-parseInt(n(386)) / 4) + parseInt(n(388)) / 5 * (parseInt(n(378)) / 6) + parseInt(n(372)) / 7 + parseInt(n(385)) / 8 * (parseInt(n(374)) / 9) + -parseInt(n(382)) / 10 * (parseInt(n(370)) / 11) + -parseInt(n(377)) / 12) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(c), s = function (t) {
              var e = p;
              return t[e(381)][e(384)];
            }, typeof e === (o = p)(379) ? t[o(376)] = e = s(n(5137)) : "function" === o(373) && n.amdD[o(380)] ? (a = [n(1281)(o(387))], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i)) : s((void 0)[o(369)]);
          },
          1517: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c(t, e) {
              var n = p();
              return (c = function (t, e) {
                return n[t -= 401];
              })(t, e);
            }
            function p() {
              var t = ["lib", "exports", "update", "276233TQLtzw", "5449645HhHTSr", "174EGOwIX", "MD5", "iterations", "create", "./sha1", "4LmzJDM", "CryptoJS", "801064uWsdqG", "object", "WordArray", "extend", "words", "318584SNmVTP", "444198GmXJka", "2555559AEtFCZ", "14380060mqbQad", "finalize", "reset", "algo", "function", "concat", "cfg", "Base", "EvpKDF", "keySize", "6NZYmGY", "amd", "hasher"];
              return (p = function () {
                return t;
              })();
            }
            t = n.nmd(t), function (t, e) {
              for (var n = c, r = t();;) try {
                if (803474 == -parseInt(n(403)) / 1 * (parseInt(n(430)) / 2) + parseInt(n(418)) / 3 + parseInt(n(410)) / 4 * (-parseInt(n(404)) / 5) + parseInt(n(405)) / 6 * (parseInt(n(417)) / 7) + parseInt(n(412)) / 8 + -parseInt(n(419)) / 9 + parseInt(n(420)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(p), s = function (t) {
              var e,
                n,
                r,
                a,
                i,
                s,
                o,
                p,
                u = c;
              return a = (r = (n = t)[(e = c)(433)])[e(427)], i = r[e(414)], o = (s = n[e(423)])[e(406)], p = s.EvpKDF = a[e(415)]({
                cfg: a[e(415)]({
                  keySize: 4,
                  hasher: o,
                  iterations: 1
                }),
                init: function (t) {
                  var n = e;
                  this[n(426)] = this[n(426)].extend(t);
                },
                compute: function (t, n) {
                  for (var r, a = e, s = this[a(426)], o = s[a(432)][a(408)](), c = i.create(), p = c[a(416)], u = s[a(429)], h = s[a(407)]; p.length < u;) {
                    r && o[a(402)](r), r = o[a(402)](t)[a(421)](n), o[a(422)]();
                    for (var l = 1; l < h; l++) r = o[a(421)](r), o[a(422)]();
                    c[a(425)](r);
                  }
                  return c.sigBytes = 4 * u, c;
                }
              }), n.EvpKDF = function (t, n, r) {
                return p[e(408)](r).compute(t, n);
              }, t[u(428)];
            }, typeof e === (o = c)(413) ? t[o(401)] = e = s(n(5137), n(8115), n(7145)) : "function" === o(424) && n.amdD[o(431)] ? (a = [n(5137), n(1281)(o(409)), n(7145)], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i)) : s((void 0)[o(411)]);
          },
          7145: (t, e, n) => {
            "use strict";

            function r(t, e) {
              var n = a();
              return (r = function (t, e) {
                return n[t -= 475];
              })(t, e);
            }
            function a() {
              var t = ["_iKey", "words", "reset", "273rwLCJe", "algo", "parse", "HMAC", "88878tqSHro", "update", "exports", "9QSzHRr", "sigBytes", "lib", "_hasher", "10RhRqOG", "extend", "finalize", "186742oWEjwX", "683pBHLNr", "clone", "amd", "concat", "16373500fFiEhh", "_oKey", "65HrzHEi", "./core", "88840kVkuRA", "3282075mavEjb", "CryptoJS", "clamp", "1979744mEppuR"];
              return (a = function () {
                return t;
              })();
            }
            var i, s, o, c;
            t = n.nmd(t), function (t, e) {
              for (var n = r, a = t();;) try {
                if (284021 == parseInt(n(477)) / 1 + parseInt(n(476)) / 2 * (parseInt(n(500)) / 3) + -parseInt(n(489)) / 4 + -parseInt(n(483)) / 5 * (parseInt(n(497)) / 6) + -parseInt(n(493)) / 7 * (parseInt(n(485)) / 8) + -parseInt(n(486)) / 9 * (parseInt(n(504)) / 10) + parseInt(n(481)) / 11) break;
                a.push(a.shift());
              } catch (t) {
                a.push(a.shift());
              }
            }(a), t[r(499)] = (o = (s = n(5137))[(i = r)(502)].Base, c = s.enc.Utf8, void (s[i(494)][i(496)] = o[i(505)]({
              init: function (t, e) {
                var n = i;
                t = this[n(503)] = new t.init(), "string" == typeof e && (e = c[n(495)](e));
                var r = t.blockSize,
                  a = 4 * r;
                e.sigBytes > a && (e = t.finalize(e)), e[n(488)]();
                for (var s = this[n(482)] = e[n(478)](), o = this[n(490)] = e.clone(), p = s[n(491)], u = o[n(491)], h = 0; h < r; h++) p[h] ^= 1549556828, u[h] ^= 909522486;
                s[n(501)] = o[n(501)] = a, this[n(492)]();
              },
              reset: function () {
                var t = i,
                  e = this[t(503)];
                e[t(492)](), e[t(498)](this[t(490)]);
              },
              update: function (t) {
                return this[i(503)].update(t), this;
              },
              finalize: function (t) {
                var e = i,
                  n = this._hasher,
                  r = n.finalize(t);
                return n.reset(), n[e(475)](this[e(482)][e(478)]()[e(480)](r));
              }
            })));
          },
          5106: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c() {
              var t = ["_createHelper", "_data", "_hash", "_nDataBytes", "1138000nPcnFA", "call", "42AYeSPn", "floor", "WordArray", "1070881RSzIFU", "words", "sigBytes", "3221548NUlYgq", "extend", "1011060GTunur", "99krwzYG", "_createHmacHelper", "2187216cFgSdG", "sin", "_process", "MD5", "./core", "exports", "669580kAwkti", "algo", "1073114FKwSxg", "3KnCdDD", "object", "HmacMD5", "lib", "abs", "length"];
              return (c = function () {
                return t;
              })();
            }
            function p(t, e) {
              var n = c();
              return (p = function (t, e) {
                return n[t -= 260];
              })(t, e);
            }
            t = n.nmd(t), function (t, e) {
              for (var n = p, r = t();;) try {
                if (537626 == -parseInt(n(277)) / 1 + -parseInt(n(282)) / 2 + parseInt(n(262)) / 3 * (parseInt(n(280)) / 4) + -parseInt(n(272)) / 5 + -parseInt(n(274)) / 6 * (-parseInt(n(261)) / 7) + -parseInt(n(285)) / 8 + -parseInt(n(283)) / 9 * (-parseInt(n(291)) / 10)) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(c), s = function (t) {
              var e = p;
              return function (e) {
                var n = p,
                  r = t,
                  a = r[n(265)],
                  i = a[n(276)],
                  s = a.Hasher,
                  o = r[n(260)],
                  c = [];
                !function () {
                  for (var t = n, r = 0; r < 64; r++) c[r] = 4294967296 * e[t(266)](e[t(286)](r + 1)) | 0;
                }();
                var u = o[n(288)] = s[n(281)]({
                  _doReset: function () {
                    this[n(270)] = new i.init([1732584193, 4023233417, 2562383102, 271733878]);
                  },
                  _doProcessBlock: function (t, e) {
                    for (var r = n, a = 0; a < 16; a++) {
                      var i = e + a,
                        s = t[i];
                      t[i] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                    }
                    var o = this[r(270)][r(278)],
                      p = t[e + 0],
                      u = t[e + 1],
                      I = t[e + 2],
                      v = t[e + 3],
                      g = t[e + 4],
                      m = t[e + 5],
                      y = t[e + 6],
                      b = t[e + 7],
                      k = t[e + 8],
                      _ = t[e + 9],
                      w = t[e + 10],
                      x = t[e + 11],
                      C = t[e + 12],
                      T = t[e + 13],
                      S = t[e + 14],
                      E = t[e + 15],
                      P = o[0],
                      A = o[1],
                      L = o[2],
                      D = o[3];
                    P = h(P, A, L, D, p, 7, c[0]), D = h(D, P, A, L, u, 12, c[1]), L = h(L, D, P, A, I, 17, c[2]), A = h(A, L, D, P, v, 22, c[3]), P = h(P, A, L, D, g, 7, c[4]), D = h(D, P, A, L, m, 12, c[5]), L = h(L, D, P, A, y, 17, c[6]), A = h(A, L, D, P, b, 22, c[7]), P = h(P, A, L, D, k, 7, c[8]), D = h(D, P, A, L, _, 12, c[9]), L = h(L, D, P, A, w, 17, c[10]), A = h(A, L, D, P, x, 22, c[11]), P = h(P, A, L, D, C, 7, c[12]), D = h(D, P, A, L, T, 12, c[13]), L = h(L, D, P, A, S, 17, c[14]), P = l(P, A = h(A, L, D, P, E, 22, c[15]), L, D, u, 5, c[16]), D = l(D, P, A, L, y, 9, c[17]), L = l(L, D, P, A, x, 14, c[18]), A = l(A, L, D, P, p, 20, c[19]), P = l(P, A, L, D, m, 5, c[20]), D = l(D, P, A, L, w, 9, c[21]), L = l(L, D, P, A, E, 14, c[22]), A = l(A, L, D, P, g, 20, c[23]), P = l(P, A, L, D, _, 5, c[24]), D = l(D, P, A, L, S, 9, c[25]), L = l(L, D, P, A, v, 14, c[26]), A = l(A, L, D, P, k, 20, c[27]), P = l(P, A, L, D, T, 5, c[28]), D = l(D, P, A, L, I, 9, c[29]), L = l(L, D, P, A, b, 14, c[30]), P = f(P, A = l(A, L, D, P, C, 20, c[31]), L, D, m, 4, c[32]), D = f(D, P, A, L, k, 11, c[33]), L = f(L, D, P, A, x, 16, c[34]), A = f(A, L, D, P, S, 23, c[35]), P = f(P, A, L, D, u, 4, c[36]), D = f(D, P, A, L, g, 11, c[37]), L = f(L, D, P, A, b, 16, c[38]), A = f(A, L, D, P, w, 23, c[39]), P = f(P, A, L, D, T, 4, c[40]), D = f(D, P, A, L, p, 11, c[41]), L = f(L, D, P, A, v, 16, c[42]), A = f(A, L, D, P, y, 23, c[43]), P = f(P, A, L, D, _, 4, c[44]), D = f(D, P, A, L, C, 11, c[45]), L = f(L, D, P, A, E, 16, c[46]), P = d(P, A = f(A, L, D, P, I, 23, c[47]), L, D, p, 6, c[48]), D = d(D, P, A, L, b, 10, c[49]), L = d(L, D, P, A, S, 15, c[50]), A = d(A, L, D, P, m, 21, c[51]), P = d(P, A, L, D, C, 6, c[52]), D = d(D, P, A, L, v, 10, c[53]), L = d(L, D, P, A, w, 15, c[54]), A = d(A, L, D, P, u, 21, c[55]), P = d(P, A, L, D, k, 6, c[56]), D = d(D, P, A, L, E, 10, c[57]), L = d(L, D, P, A, y, 15, c[58]), A = d(A, L, D, P, T, 21, c[59]), P = d(P, A, L, D, g, 6, c[60]), D = d(D, P, A, L, x, 10, c[61]), L = d(L, D, P, A, I, 15, c[62]), A = d(A, L, D, P, _, 21, c[63]), o[0] = o[0] + P | 0, o[1] = o[1] + A | 0, o[2] = o[2] + L | 0, o[3] = o[3] + D | 0;
                  },
                  _doFinalize: function () {
                    var t = n,
                      r = this[t(269)],
                      a = r[t(278)],
                      i = 8 * this[t(271)],
                      s = 8 * r[t(279)];
                    a[s >>> 5] |= 128 << 24 - s % 32;
                    var o = e[t(275)](i / 4294967296),
                      c = i;
                    a[15 + (s + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), a[14 + (s + 64 >>> 9 << 4)] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), r.sigBytes = 4 * (a[t(267)] + 1), this[t(287)]();
                    for (var p = this[t(270)], u = p[t(278)], h = 0; h < 4; h++) {
                      var l = u[h];
                      u[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                    }
                    return p;
                  },
                  clone: function () {
                    var t = n,
                      e = s.clone[t(273)](this);
                    return e[t(270)] = this[t(270)].clone(), e;
                  }
                });
                function h(t, e, n, r, a, i, s) {
                  var o = t + (e & n | ~e & r) + a + s;
                  return (o << i | o >>> 32 - i) + e;
                }
                function l(t, e, n, r, a, i, s) {
                  var o = t + (e & r | n & ~r) + a + s;
                  return (o << i | o >>> 32 - i) + e;
                }
                function f(t, e, n, r, a, i, s) {
                  var o = t + (e ^ n ^ r) + a + s;
                  return (o << i | o >>> 32 - i) + e;
                }
                function d(t, e, n, r, a, i, s) {
                  var o = t + (n ^ (e | ~r)) + a + s;
                  return (o << i | o >>> 32 - i) + e;
                }
                r[n(288)] = s[n(268)](u), r[n(264)] = s[n(284)](u);
              }(Math), t[e(288)];
            }, typeof e === (o = p)(263) ? t[o(290)] = e = s(n(5137)) : (a = [n(1281)(o(289))], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i));
          },
          8115: (t, e, n) => {
            "use strict";

            var r, a, i, s, o;
            function c(t, e) {
              var n = p();
              return (c = function (t, e) {
                return n[t -= 154];
              })(t, e);
            }
            function p() {
              var t = ["3832696nxYeRA", "algo", "SHA1", "324395MWnAOW", "floor", "_createHmacHelper", "object", "331xbAIVB", "_hash", "init", "exports", "_createHelper", "sigBytes", "CryptoJS", "WordArray", "_nDataBytes", "54wfNdcE", "words", "12681820mCjdfB", "lib", "length", "4qUSeYT", "3053529JuGdXt", "557367ZYqlPF", "clone", "3006944FJwhWB", "extend", "_data", "call", "2212EMXpGP", "function"];
              return (p = function () {
                return t;
              })();
            }
            t = n.nmd(t), function (t, e) {
              for (var n = c, r = t();;) try {
                if (300017 == -parseInt(n(167)) / 1 * (parseInt(n(158)) / 2) + parseInt(n(183)) / 3 * (-parseInt(n(181)) / 4) + parseInt(n(163)) / 5 * (-parseInt(n(176)) / 6) + -parseInt(n(160)) / 7 + parseInt(n(154)) / 8 + parseInt(n(182)) / 9 + parseInt(n(178)) / 10) break;
                r.push(r.shift());
              } catch (t) {
                r.push(r.shift());
              }
            }(p), s = function (t) {
              var e,
                n,
                r,
                a,
                i,
                s,
                o,
                p,
                u = c;
              return r = (n = t)[(e = c)(179)], a = r[e(174)], i = r.Hasher, s = n[e(161)], o = [], p = s.SHA1 = i[e(155)]({
                _doReset: function () {
                  var t = e;
                  this[t(168)] = new a[t(169)]([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function (t, n) {
                  for (var r = e, a = this._hash[r(177)], i = a[0], s = a[1], c = a[2], p = a[3], u = a[4], h = 0; h < 80; h++) {
                    if (h < 16) o[h] = 0 | t[n + h];else {
                      var l = o[h - 3] ^ o[h - 8] ^ o[h - 14] ^ o[h - 16];
                      o[h] = l << 1 | l >>> 31;
                    }
                    var f = (i << 5 | i >>> 27) + u + o[h];
                    f += h < 20 ? 1518500249 + (s & c | ~s & p) : h < 40 ? 1859775393 + (s ^ c ^ p) : h < 60 ? (s & c | s & p | c & p) - 1894007588 : (s ^ c ^ p) - 899497514, u = p, p = c, c = s << 30 | s >>> 2, s = i, i = f;
                  }
                  a[0] = a[0] + i | 0, a[1] = a[1] + s | 0, a[2] = a[2] + c | 0, a[3] = a[3] + p | 0, a[4] = a[4] + u | 0;
                },
                _doFinalize: function () {
                  var t = e,
                    n = this[t(156)],
                    r = n[t(177)],
                    a = 8 * this[t(175)],
                    i = 8 * n[t(172)];
                  return r[i >>> 5] |= 128 << 24 - i % 32, r[14 + (i + 64 >>> 9 << 4)] = Math[t(164)](a / 4294967296), r[15 + (i + 64 >>> 9 << 4)] = a, n[t(172)] = 4 * r[t(180)], this._process(), this[t(168)];
                },
                clone: function () {
                  var t = e,
                    n = i[t(184)][t(157)](this);
                  return n[t(168)] = this[t(168)][t(184)](), n;
                }
              }), n[e(162)] = i[e(171)](p), n.HmacSHA1 = i[e(165)](p), t[u(162)];
            }, typeof e === (o = c)(166) ? t[o(170)] = e = s(n(5137)) : "function" === o(159) && n.amdO ? (a = [n(5137)], void 0 === (i = "function" == typeof (r = s) ? r.apply(e, a) : r) || (t.exports = i)) : s((void 0)[o(173)]);
          },
          1281: t => {
            function e(t) {
              var e = new Error("Cannot find module '" + t + "'");
              throw e.code = "MODULE_NOT_FOUND", e;
            }
            e.keys = () => [], e.resolve = e, e.id = 1281, t.exports = e;
          },
          4668: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/loading.png";
          },
          3871: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/menu-bar.png";
          },
          5112: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/honor.jpg";
          },
          3386: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/huawei.jpg";
          },
          7833: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/oppo.jpg";
          },
          8743: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/vivo.jpg";
          },
          7564: (t, e, n) => {
            "use strict";

            t.exports = n.p + "assets/xiaomi.jpg";
          },
          6326: () => {}
        },
        e = {};
      function n(r) {
        var a = e[r];
        if (void 0 !== a) return a.exports;
        var i = e[r] = {
          id: r,
          loaded: !1,
          exports: {}
        };
        return t[r](i, i.exports, n), i.loaded = !0, i.exports;
      }
      n.amdD = function () {
        throw new Error("define cannot be used indirect");
      }, n.amdO = {}, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.nmd = t => (t.paths = [], t.children || (t.children = []), t), n.p = "/", (() => {
        function t() {
          var e = ["__esModule", "style", "exports", "4487DJBfcQ", "57752abcfnH", "960522Nuwglg", "7328370cWXmWc", "template", "4475460lRiDTx", "1389050URntaS", "@app-component/index", "72JIJbOA", "default", "4458bQiwsY", "21KzIFqQ", "490923oLaEdW"];
          return (t = function () {
            return e;
          })();
        }
        var e = r;
        function r(e, n) {
          var a = t();
          return (r = function (t, e) {
            return a[t -= 272];
          })(e, n);
        }
        (function (t, e) {
          for (var n = r, a = t();;) try {
            if (543978 == parseInt(n(287)) / 1 + -parseInt(n(275)) / 2 + -parseInt(n(280)) / 3 * (-parseInt(n(286)) / 4) + parseInt(n(274)) / 5 + -parseInt(n(279)) / 6 * (parseInt(n(285)) / 7) + parseInt(n(277)) / 8 * (parseInt(n(281)) / 9) + -parseInt(n(272)) / 10) break;
            a.push(a.shift());
          } catch (t) {
            a.push(a.shift());
          }
        })(t), n(6615), n(6864);
        var a = n(2653),
          i = n(8912);
        $app_define$(e(276), [], function (t, r, s) {
          var o = e;
          i(s, r, t), r[o(282)] && r[o(278)] && (s[o(284)] = r[o(278)]), s[o(284)][o(273)] = n(1419), s.exports[o(283)] = a;
        }), $app_bootstrap$(e(276), {
          packagerVersion: "1.9.14"
        });
      })();
    })();
  };
  if ("undefined" == typeof window) return t();
  window.createPageHandler = t;
}();