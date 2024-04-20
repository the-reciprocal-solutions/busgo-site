!(function (e) {
   "use strict";
   e(window).on("load", function () {
       e(".preloader").fadeOut();
   }),
       e(".preloader").length > 0 &&
           e(".preloaderCls").each(function () {
               e(this).on("click", function (t) {
                   t.preventDefault(), e(".preloader").css("display", "none");
               });
           }),
       (e.fn.vsmobilemenu = function (t) {
           var s = e.extend(
               {
                   menuToggleBtn: ".vs-menu-toggle",
                   bodyToggleClass: "vs-body-visible",
                   subMenuClass: "vs-submenu",
                   subMenuParent: "vs-item-has-children",
                   subMenuParentToggle: "vs-active",
                   meanExpandClass: "vs-mean-expand",
                   appendElement: '<span class="vs-mean-expand"></span>',
                   subMenuToggleClass: "vs-open",
                   toggleSpeed: 400,
               },
               t
           );
           return this.each(function () {
               var t = e(this);
               function o() {
                   t.toggleClass(s.bodyToggleClass),
                       e("." + s.subMenuClass).each(function () {
                           e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle));
                       });
               }
               t.find("li").each(function () {
                   var t = e(this).find("ul");
                   t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").append(s.appendElement), t.next("a").append(s.appendElement);
               }),
                   e("." + s.meanExpandClass).each(function () {
                       e(this).on("click", function (t) {
                           var o;
                           t.preventDefault(),
                               (o = e(this).parent()),
                               e(o).next("ul").length > 0
                                   ? (e(o).parent().toggleClass(s.subMenuParentToggle), e(o).next("ul").slideToggle(s.toggleSpeed), e(o).next("ul").toggleClass(s.subMenuToggleClass))
                                   : e(o).prev("ul").length > 0 && (e(o).parent().toggleClass(s.subMenuParentToggle), e(o).prev("ul").slideToggle(s.toggleSpeed), e(o).prev("ul").toggleClass(s.subMenuToggleClass));
                       });
                   }),
                   e(s.menuToggleBtn).each(function () {
                       e(this).on("click", function () {
                           o();
                       });
                   }),
                   t.on("click", function (e) {
                       e.stopPropagation(), o();
                   }),
                   t.find("div").on("click", function (e) {
                       e.stopPropagation();
                   });
           });
       }),
       e(".vs-menu-wrapper").vsmobilemenu();
   var t = "",
       s = ".scrollToTop";
   e(window).on("scroll", function () {
       var o,
           a,
           n,
           i = "active",
           l = "will-sticky";
       (o = e(".sticky-active")),
           (a = e(window).scrollTop()),
           (n = o.css("height")),
           o.parent().css("min-height", n),
           e(window).scrollTop() > 800 ? (o.parent().addClass(l), a > t ? o.removeClass(i) : o.addClass(i)) : (o.parent().css("min-height", "").removeClass(l), o.removeClass(i)),
           (t = a),
           e(this).scrollTop() > 500 ? e(s).addClass("show") : e(s).removeClass("show");
   }),
       e(s).each(function () {
           e(this).on("click", function (s) {
               return s.preventDefault(), e("html, body").animate({ scrollTop: 0 }, t / 3), !1;
           });
       }),
       e("[data-bg-src]").length > 0 &&
           e("[data-bg-src]").each(function () {
               var t = e(this).attr("data-bg-src");
               e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image");
           }),
       e(".vs-carousel").each(function () {
           var t = e(this);
           function s(e) {
               return t.data(e);
           }
           var o = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
               a = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
           e("[data-slick-next]").each(function () {
               e(this).on("click", function (t) {
                   t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext");
               });
           }),
               e("[data-slick-prev]").each(function () {
                   e(this).on("click", function (t) {
                       t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev");
                   });
               }),
               !0 != s("arrows") || t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap"),
               t.slick({
                   dots: !!s("dots"),
                   fade: !!s("fade"),
                   arrows: !!s("arrows"),
                   speed: s("speed") ? s("speed") : 1e3,
                   asNavFor: !!s("asnavfor") && s("asnavfor"),
                   autoplay: !1 != s("autoplay"),
                   infinite: !1 != s("infinite"),
                   slidesToShow: s("slide-show") ? s("slide-show") : 1,
                   adaptiveHeight: !!s("adaptive-height"),
                   centerMode: !!s("center-mode"),
                   autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
                   centerPadding: s("center-padding") ? s("center-padding") : "0",
                   focusOnSelect: !1 != s("focuson-select"),
                   pauseOnFocus: !!s("pauseon-focus"),
                   pauseOnHover: !!s("pauseon-hover"),
                   variableWidth: !!s("variable-width"),
                   vertical: !!s("vertical"),
                   verticalSwiping: !!s("vertical"),
                   prevArrow: s("prev-arrow") ? o : '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
                   nextArrow: s("next-arrow") ? a : '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                   rtl: "rtl" == e("html").attr("dir"),
                   responsive: [
                       { breakpoint: 1600, settings: { arrows: !!s("xl-arrows"), dots: !!s("xl-dots"), slidesToShow: s(s("xl-slide-show") ? "xl-slide-show" : "slide-show"), centerMode: !!s("xl-center-mode"), centerPadding: 0 } },
                       { breakpoint: 1400, settings: { arrows: !!s("ml-arrows"), dots: !!s("ml-dots"), slidesToShow: s(s("ml-slide-show") ? "ml-slide-show" : "slide-show"), centerMode: !!s("ml-center-mode"), centerPadding: 0 } },
                       {
                           breakpoint: 1200,
                           settings: { arrows: !!s("lg-arrows"), dots: !!s("lg-dots"), slidesToShow: s(s("lg-slide-show") ? "lg-slide-show" : "slide-show"), centerMode: !!s("lg-center-mode") && s("lg-center-mode"), centerPadding: 0 },
                       },
                       {
                           breakpoint: 992,
                           settings: { arrows: !!s("md-arrows"), dots: !!s("md-dots"), slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1, centerMode: !!s("md-center-mode") && s("md-center-mode"), centerPadding: 0 },
                       },
                       {
                           breakpoint: 767,
                           settings: { arrows: !!s("sm-arrows"), dots: !!s("sm-dots"), slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1, centerMode: !!s("sm-center-mode") && s("sm-center-mode"), centerPadding: 0 },
                       },
                       {
                           breakpoint: 576,
                           settings: { arrows: !!s("xs-arrows"), dots: !!s("xs-dots"), slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1, centerMode: !!s("xs-center-mode") && s("xs-center-mode"), centerPadding: 0 },
                       },
                   ],
               });
       });
   var o = ".ajax-contact",
       a = "is-invalid",
       n = '[name="email"]',
       i = e(o).find(".form-messages");
   function l(t, s, o, a) {
       e(s).on("click", function (s) {
           s.preventDefault(), e(t).addClass(a);
       }),
           e(t).on("click", function (s) {
               s.stopPropagation(), e(t).removeClass(a);
           }),
           e(t + " > div").on("click", function (s) {
               s.stopPropagation(), e(t).addClass(a);
           }),
           e(o).on("click", function (s) {
               s.preventDefault(), s.stopPropagation(), e(t).removeClass(a);
           });
   }
   function l(t, s, o, a) {
       e(s).on("click", function (s) {
           s.preventDefault(), e(t).addClass(a);
       }),
           e(t).on("click", function (s) {
               s.stopPropagation(), e(t).removeClass(a);
           }),
           e(t + " > div").on("click", function (s) {
               s.stopPropagation(), e(t).addClass(a);
           }),
           e(o).on("click", function (s) {
               s.preventDefault(), s.stopPropagation(), e(t).removeClass(a);
           });
   }
   e(o).on("submit", function (t) {
       var s, l, r, c;
       t.preventDefault(),
           (l = e(o).serialize()),
           (s =
               ((c = !0),
               (function t(s) {
                   s = s.split(",");
                   for (var n = 0; n < s.length; n++) e((r = o + " " + s[n])).val() ? (e(r).removeClass(a), (c = !0)) : (e(r).addClass(a), (c = !1));
               })('[name="fname"],[name="lname"],[name="email"],[name="number"],[name="message"]'),
               e(n).val() &&
               e(n)
                   .val()
                   .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
                   ? (e(n).removeClass(a), (c = !0))
                   : (e(n).addClass(a), (c = !1)),
               c)) &&
               jQuery
                   .ajax({ url: e(o).attr("action"), data: l, type: "POST" })
                   .done(function (t) {
                       i.removeClass("error"), i.addClass("success"), i.text(t), e(o + ' input:not([type="submit"]),' + o + " textarea").val("");
                   })
                   .fail(function (e) {
                       i.removeClass("success"), i.addClass("error"), "" !== e.responseText ? i.html(e.responseText) : i.html("Oops! An error occured and your message could not be sent.");
                   });
   }),
       l(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
       l(".sideCart-wrapper", ".sideCartToggler", ".sideMenuCls", "show");
   var r = ".popup-search-box",
       c = "show";
   function d(e) {
       return parseInt(e, 10);
   }
   e(".searchBoxTggler").on("click", function (t) {
       t.preventDefault(), e(r).addClass(c);
   }),
       e(r).on("click", function (t) {
           t.stopPropagation(), e(r).removeClass(c);
       }),
       e(r)
           .find("form")
           .on("click", function (t) {
               t.stopPropagation(), e(r).addClass(c);
           }),
       e(".searchClose").on("click", function (t) {
           t.preventDefault(), t.stopPropagation(), e(r).removeClass(c);
       }),
       e(".popup-image").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
       e(".gallery-img").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
       e(".popup-video").magnificPopup({ type: "iframe" }),
       (e.fn.sectionPosition = function (t, s) {
           e(this).each(function () {
               var o,
                   a,
                   n,
                   i,
                   l,
                   r = e(this);
               (o = Math.floor(r.height() / 2)),
                   (a = r.attr(t)),
                   (i = d(e((n = r.attr(s))).css("padding-top"))),
                   (l = d(e(n).css("padding-bottom"))),
                   "top-half" === a ? (e(n).css("padding-bottom", l + o + "px"), r.css("margin-top", "-" + o + "px")) : "bottom-half" === a && (e(n).css("padding-top", i + o + "px"), r.css("margin-bottom", "-" + o + "px"));
           });
       });
   var u = "[data-sec-pos]";
   e(u).length && e(u).sectionPosition("data-sec-pos", "data-pos-for"),
       (e.fn.vsTab = function (t) {
           var s = e.extend({ sliderTab: !1, tabButton: "button", indicator: !1 }, t);
           e(this).each(function () {
               var t = e(this),
                   o = t.find(s.tabButton);
               if (
                   (o.on("click", function (t) {
                       t.preventDefault();
                       var o = e(this);
                       o.addClass("active").siblings().removeClass("active"), s.sliderTab && e(a).slick("slickGoTo", o.data("slide-go-to"));
                   }),
                   s.sliderTab)
               ) {
                   var a = t.data("asnavfor"),
                       n = 0;
                   o.each(function () {
                       var o = e(this);
                       o.attr("data-slide-go-to", n),
                           n++,
                           o.hasClass("active") && e(a).slick("slickGoTo", o.data("slide-go-to")),
                           e(a).on("beforeChange", function (e, o, a, n) {
                               t.find(s.tabButton + '[data-slide-go-to="' + n + '"]')
                                   .addClass("active")
                                   .siblings()
                                   .removeClass("active");
                           });
                   });
               }
           });
       }),
       e(".vs-slider-tab").length && e(".vs-slider-tab").vsTab({ sliderTab: !0, tabButton: ".tab-btn" }),
       e(".gallery-mesonary").imagesLoaded(function () {
           e(".gallery-mesonary").isotope({ itemSelector: ".grid-item", percentPosition: !0, masonry: { columnWidth: 33, gutter: 5 } });
       }),
       jQuery.noConflict(),
       e(".filter-active").imagesLoaded(function () {
           var t = ".filter-active";
           if (e(t).length > 0) var s = e(t).isotope({ itemSelector: ".filter-item", filter: ".tab-content1" });
           e(".filter-menu-active").on("click", "button", function (t) {
               t.preventDefault();
               var o = e(this).attr("data-filter");
               s.isotope({ filter: o }), e(this).addClass("active"), e(this).siblings(".active").removeClass("active");
           });
       }),
       e(".tours-active").imagesLoaded(function () {
           var t = ".tours-active";
           e(t).length > 0 && e(t).isotope({ itemSelector: ".filter-item", filter: "*" });
       }),
       (e.fn.countdown = function () {
           e(this).each(function () {
               var t = e(this),
                   s = new Date(t.data("end-date")).getTime();
               function o(e) {
                   return t.find(e);
               }
               var a = setInterval(function () {
                   var e = new Date().getTime(),
                       n = s - e;
                   function i(e) {
                       return e < 10 ? "0" + e : e;
                   }
                   n < 0
                       ? (clearInterval(a), t.addClass("expired"), t.find(".message").css("display", "block"))
                       : (o(".day").html(i(Math.floor(n / 864e5))), o(".hour").html(i(Math.floor((n % 864e5) / 36e5))), o(".minute").html(i(Math.floor((n % 36e5) / 6e4))), o(".seconds").html(i(Math.floor((n % 6e4) / 1e3))));
               }, 1e3);
           });
       }),
       e(".countdown-active").length && e(".countdown-active").countdown(),
       e(".circle-progress")
           .circleProgress({ size: 150, thickness: 25, startAngle: -1.56, fill: "#FF681A", emptyFill: "#FFCCB1" })
           .on("circle-animation-progress", function (t, s, o) {
               e(this)
                   .find(".progress-value")
                   .text(o.toFixed(2).substr(2) + "%");
           }),
       e(".quantity-plus").each(function () {
           e(this).on("click", function (t) {
               t.preventDefault();
               var s = e(this).siblings(".qty-input"),
                   o = parseInt(s.val());
               isNaN(o) || s.val(o + 1);
           });
       }),
       e(".quantity-minus").each(function () {
           e(this).on("click", function (t) {
               t.preventDefault();
               var s = e(this).siblings(".qty-input"),
                   o = parseInt(s.val());
               !isNaN(o) && o > 1 && s.val(o - 1);
           });
       }),
       (e.fn.shapeMockup = function () {
           e(this).each(function () {
               var t = e(this),
                   s = t.data("top"),
                   o = t.data("right"),
                   a = t.data("bottom"),
                   n = t.data("left");
               t.css({ top: s, right: o, bottom: a, left: n }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap");
           });
       }),
       e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
       e(".price_slider").slider({
           range: !0,
           min: 100,
           max: 750,
           values: [100, 550],
           slide: function (t, s) {
               e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1]);
           },
       }),
       e(".from").text("$" + e(".price_slider").slider("values", 0)),
       e(".to").text("$" + e(".price_slider").slider("values", 1)),
       e("#ship-to-different-address-checkbox").on("change", function () {
           e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp();
       }),
       e(".woocommerce-form-login-toggle a").on("click", function (t) {
           t.preventDefault(), e(".woocommerce-form-login").slideToggle();
       }),
       e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
           t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
       }),
       e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(),
       e('.wc_payment_methods input[type="radio"]').each(function () {
           e(this).on("change", function () {
               e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown();
           });
       }),
       e(".rating-select .stars a").each(function () {
           e(this).on("click", function (t) {
               t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active");
           });
       }),
       e(".shipping-calculator-button").on("click", function (t) {
           t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle();
       }),
       e("input[name='varient-color']").on("change", function () {
           var t = e("input[name='varient-color']:checked").val();
           e("#product_color").text(t);
       }),
       new WOW({ boxClass: "wow", animateClass: "wow-animated", offset: 0, mobile: !1, live: !0, scrollContainer: null, resetAnimation: !1 }).init();
})(jQuery);

  
