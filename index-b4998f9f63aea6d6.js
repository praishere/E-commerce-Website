(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(6433)
            }])
        },
        8788: function(e, t, s) {
            "use strict";
            var i = s(5893),
                r = s(7514),
                o = s(5675),
                a = s.n(o),
                c = s(1664),
                n = s.n(c);
            s(7294);
            let x = e => {
                let {
                    data: {
                        attributes: t,
                        id: s
                    }
                } = e;
                return (0, i.jsxs)(n(), {
                    href: "/product/".concat(t.slug),
                    className: "transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer",
                    children: [(0, i.jsx)(a(), {
                        width: 500,
                        height: 500,
                        src: t.thumbnail.data.attributes.url,
                        alt: t.name
                    }), (0, i.jsxs)("div", {
                        className: "p-4 text-black/[0.9]",
                        children: [(0, i.jsx)("h2", {
                            className: "text-lg font-medium",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center text-black/[0.5]",
                            children: [(0, i.jsxs)("p", {
                                className: "mr-2 text-lg font-semibold",
                                children: ["₹", t.price]
                            }), t.original_price && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("p", {
                                    className: "text-base font-medium line-through",
                                    children: ["₹", t.original_price]
                                }), (0, i.jsxs)("p", {
                                    className: "ml-auto text-base font-medium text-green-500",
                                    children: [(0, r.h)(t.original_price, t.price), "% off"]
                                })]
                            })]
                        })]
                    })]
                })
            };
            t.Z = x
        },
        6433: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return x
                },
                default: function() {
                    return l
                }
            });
            var i = s(5893);
            s(7294), s(7731);
            var r = s(615),
                o = s(7516);
            let a = () => (0, i.jsx)("div", {
                className: "relative text-white text-[20px] w-full max-w-[1360px] mx-auto",
                children: (0, i.jsxs)(r.lr, {
                    autoPlay: !0,
                    infiniteLoop: !0,
                    showThumbs: !1,
                    showIndicators: !1,
                    showStatus: !1,
                    renderArrowPrev: (e, t) => (0, i.jsx)("div", {
                        onClick: e,
                        className: "absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90",
                        children: (0, i.jsx)(o.YiX, {
                            className: "text-sm md:text-lg"
                        })
                    }),
                    renderArrowNext: (e, t) => (0, i.jsx)("div", {
                        onClick: e,
                        className: "absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90",
                        children: (0, i.jsx)(o.YiX, {
                            className: "rotate-180 text-sm md:text-lg"
                        })
                    }),
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)("img", {
                            src: "/slide-1.png",
                            className: "aspect-[16/10] md:aspect-auto object-cover"
                        }), (0, i.jsx)("div", {
                            className: "px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90",
                            children: "Shop now"
                        })]
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("img", {
                            src: "/slide-2.png",
                            className: "aspect-[16/10] md:aspect-auto object-cover"
                        }), (0, i.jsx)("div", {
                            className: "px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90",
                            children: "Shop now"
                        })]
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("img", {
                            src: "/slide-3.png",
                            className: "aspect-[16/10] md:aspect-auto object-cover"
                        }), (0, i.jsx)("div", {
                            className: "px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90",
                            children: "Shop now"
                        })]
                    })]
                })
            });
            var c = s(8788),
                n = s(398),
                x = !0;

            function l(e) {
                var t;
                let {
                    products: s
                } = e;
                return (0, i.jsxs)("main", {
                    children: [(0, i.jsx)(a, {}), (0, i.jsxs)(n.Z, {
                        children: [(0, i.jsxs)("div", {
                            className: "text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]",
                            children: [(0, i.jsx)("div", {
                                className: "text-[28px] md:text-[34px] mb-5 font-semibold leading-tight",
                                children: "Cushioning for Your Miles"
                            }), (0, i.jsx)("div", {
                                className: "text-md md:text-xl",
                                children: "A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running."
                            })]
                        }), (0, i.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0",
                            children: null == s ? void 0 : null === (t = s.data) || void 0 === t ? void 0 : t.map(e => (0, i.jsx)(c.Z, {
                                data: e
                            }, null == e ? void 0 : e.id))
                        })]
                    })]
                })
            }
        },
        7514: function(e, t, s) {
            "use strict";
            s.d(t, {
                h: function() {
                    return i
                }
            });
            let i = (e, t) => ((e - t) / e * 100).toFixed(2)
        }
    },
    function(e) {
        e.O(0, [675, 416, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);