$(function(){$(".timeline-nav").slick({autoplay:!0,autoplaySpeed:3e3,infinite:!0,slidesToShow:3,slidesToScroll:3,asNavFor:".timeline-slider",centerMode:!1,focusOnSelect:!0,mobileFirst:!0,arrows:!0,infinite:!1,responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:0,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".timeline-slider").slick({autoplay:!0,autoplaySpeed:3e3,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:$(".m74Left"),nextArrow:$(".m74Right"),asNavFor:".timeline-nav",centerMode:!0,cssEase:"ease",edgeFriction:.5,mobileFirst:!0,speed:500,responsive:[{breakpoint:0,settings:{centerMode:!1}},{breakpoint:768,settings:{centerMode:!0}}]})});

! function(t) {
    t.fn.fitText = function(i, e) {
        var n = i || 1,
            o = t.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, e);
        return this.each(function() {
            var i = t(this),
                e = function() {
                    i.css("font-size", Math.max(Math.min(i.width() / (10 * n), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
                };
            e(), t(window).on("resize.fittext orientationchange.fittext", e)
        })
    }
}(jQuery), $("#fittext1").fitText();
var lc = $("#instagram-info-id"),
    lc2 = $("#falin-info-id");
lc.owlCarousel({
        loop: !0,
        nav: !1,
        dots: !1,
        items: 4,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            922: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }), lc2.owlCarousel({
        loop: !0,
        nav: !1,
        dots: !1,
        items: 2,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            922: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }),
    function(t) {
        var i = {};

        function e(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        e.m = t, e.c = i, e.d = function(t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var i = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function(t, i) {
            return Object.prototype.hasOwnProperty.call(t, i)
        }, e.p = "", e(e.s = 0)
    }([function(t, i, e) {
        "use strict";
        var n, o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            s = function() {
                function t(t, i) {
                    for (var e = 0; e < i.length; e++) {
                        var n = i[e];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(i, e, n) {
                    return e && t(i.prototype, e), n && t(i, n), i
                }
            }();
        n = jQuery, o = function() {
            function t(i, e) {
                ! function(t, i) {
                    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                this.$element = n(i), this.settings = n.extend(!0, {
                    duration: 1.5,
                    shift: 10,
                    events: ["scroll", "gyro"],
                    gyroSensitivity: 30
                }, e), this.data_options = this.$element.data("parallax-content"), this.settings = n.extend(!0, this.settings, this.data_options), this.scrollTop = 0, this.windowHeight = 0, this.triggerPosition = 0, this.thisHeight = this.$element.outerHeight(), this.animationTriggerStart = 0, this.animationTriggerEnd = 0, this.offsetTop = 0, this.animationLength = 0, this.state = {
                    isOnScreen: !1
                }, this.init()
            }
            return s(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    t.updateTrigger(), n(window).on("scroll resize", function() {
                        t.updateTrigger()
                    }), t.settings.events.forEach(function(i) {
                        "scroll" == i ? t.subscribeScrollEvent() : "gyro" == i && t.subscribeGyroEvent()
                    })
                }
            }, {
                key: "refresh",
                value: function() {
                    this.animate(this.getElementAnimatePosition())
                }
            }, {
                key: "updateTrigger",
                value: function() {
                    this.scrollTop = n(window).scrollTop(), this.windowHeight = n(window).height(), this.triggerPosition = this.scrollTop + this.windowHeight, this.offsetTop = this.$element.offset().top, this.animationTriggerStart = this.offsetTop, this.animationTriggerEnd = this.animationTriggerStart + this.windowHeight, this.animationLength = this.animationTriggerEnd - this.animationTriggerStart, this.triggerPosition > this.animationTriggerStart && this.triggerPosition < this.animationTriggerEnd + this.thisHeight ? (this.$element.addClass("active"), this.state.isOnScreen = !0) : (this.$element.removeClass("active"), this.state.isOnScreen = !1)
                }
            }, {
                key: "subscribeGyroEvent",
                value: function() {
                    var t = this,
                        i = 0,
                        e = null,
                        n = Date.now();
                    window.addEventListener("deviceorientation", function(o) {
                        if (t.state.isOnScreen) {
                            var a = (e = Date.now()) - n,
                                s = o.beta - i,
                                r = Math.round(s / a * 100) / t.settings.gyroSensitivity * t.settings.shift;
                            t.animate(r), i = o.beta, n = e
                        }
                    }, !0)
                }
            }, {
                key: "subscribeScrollEvent",
                value: function() {
                    var t = this;
                    n(window).on("scroll resize", function() {
                        t.state.isOnScreen && t.animate(t.getElementAnimatePosition())
                    })
                }
            }, {
                key: "getElementAnimatePosition",
                value: function() {
                    var t = (this.triggerPosition - this.offsetTop - .5 * this.animationLength) / (this.animationLength / 100) * 2;
                    return this.settings.shift / 100 * t
                }
            }, {
                key: "animate",
                value: function(t) {
                    TweenLite.to(this.$element, this.settings.duration, {
                        y: t + "px"
                    })
                }
            }]), t
        }(), n.fn.parallaxContent = function() {
            var t = arguments[0],
                i = Array.prototype.slice.call(arguments, 1),
                e = this.length,
                n = void 0,
                s = void 0;
            for (n = 0; n < e; n++)
                if ("object" == (void 0 === t ? "undefined" : a(t)) || void 0 === t ? this[n].parallax_content = new o(this[n], t) : s = this[n].parallax_content[t].apply(this[n].parallax_content, i), void 0 !== s) return s;
            return this
        }
    }]), $(document).ready(function() {
        $nav = $(".nice-nav"), $nav.toggleClass("open"), $(".toggle-nav").click(function() {
            $this = $(this), $nav = $(".nice-nav"), $nav.toggleClass("open")
        }), $(".body-part").click(function() {
            $nav.addClass("open")
        }), $submenu = $(".child-menu-ul"), $(".child-menu .toggle-right").on("click", function(t) {
            t.preventDefault(), $this = $(this), $parent = $this.parent().next(), $tar = $(".child-menu-ul"), $parent.hasClass("active") ? $parent.removeClass("active").slideUp("fast") : ($tar.removeClass("active").slideUp("fast"), $parent.addClass("active").slideDown("fast"))
        })
    });
let i = 1,
    count = 5;

function parallaxIt(t, i, e) {
    var n = $("body"),
        o = t.pageX - n.offset().left,
        a = t.pageY - n.offset().top;
    TweenMax.to(i, 1, {
        x: (o - n.width() / 2) / n.width() * e,
        y: (a - n.height() / 2) / n.height() * e
    })
}
setInterval(() => {
    $(`.slider__list li:nth-of-type(${i}) label`).click(), $(`.slider__list li:nth-of-type(${i}) label`), i >= count ? i = 1 : i++
}, 3e3), (new WOW).init();
var a = 0;
$(window).scroll(function() {
    var t = $("#counter").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > t && ($(".counter-value").each(function() {
        var t = $(this),
            i = t.attr("data-count");
        $({
            countNum: t.text()
        }).animate({
            countNum: i
        }, {
            duration: 2e3,
            easing: "swing",
            step: function() {
                t.text(Math.floor(this.countNum))
            },
            complete: function() {
                t.text(this.countNum)
            }
        })
    }), a = 1);
    var i = $(".trigger1").offset().top - window.innerHeight;
    $(window).scrollTop() > i && $(".statistik .row").addClass("color");
    var e = $(".rechte").offset().top - window.innerHeight;
    $(window).scrollTop() > e && $(".rechte").removeClass("color");
    var n = $(".fair").offset().top - window.innerHeight;
    $(window).scrollTop() > n && $(".fair").addClass("color");
    var o = $(".contact-us").offset().top - window.innerHeight;
    $(window).scrollTop() > o && $(".contact-us").addClass("fadeIn");
    var s = $("footer").offset().top - window.innerHeight;
    $(window).scrollTop() > s && $("footer .footer-bottom--img").addClass("show");
    var r = $(".player").offset().top - window.innerHeight;
    $(window).scrollTop() > r && $(".player").addClass("fadeInAnimate");
    var l = $(".posts").offset().top - window.innerHeight;
    $(window).scrollTop() > l && $(".posts").addClass("fadeInAnimate");
    var c = $("#donate").offset().top - window.innerHeight;
    $(window).scrollTop() > c && $("#donate .row").addClass("fadeInAnimate")
}), $(document).ready(function() {
    $(".parallax").parallaxContent({
        shift: 45,
        duration: 1,
        gyroSensitivity: 30
    }), $(".paraLow").parallaxContent({
        shift: 85,
        duration: 1,
        gyroSensitivity: 30
    })
});