jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

$(function () {

    //球下滚动
    $(window).on("scroll", function () {
        var num = $(window).scrollTop() / 38;
        if (num > 60) {
            $(".circle").css("transform", "translate3d(0px, 60%, 0px)");
        } else if (num < 0) {
            $(".circle").css("transform", "translate3d(0px, 0%, 0px)");
        } else {
            $(".circle").css("transform", "translate3d(0px, " + num.toFixed(4) + "%, 0px)");
        }
    }).on("resize", function () {
        $(window).scroll();
    });

    //向下伸缩
    $("#work li>a").click(function () {
        if($(this).hasClass(".a_open")) {
            //关闭
            $(this).removeClass(".a_open");
            $(this).children("img").css("transform", "");
            $(this).next().stop().animate({
                height: 0
            }, 500, "easeInOutQuart", function () {
                $(this).css({
                    "display": "none"
                })
            });
        } else {
            //打开
            $(this).addClass(".a_open");
            $(this).children("img").css("transform", "translate3d(0px, 30px, 0px) rotateZ(-180deg)");
            $(this).next().css({
                "display": "flex"
            }).stop().animate({
                height: 800
            }, 300, "easeInOutQuart");
        }
    });


    //向上箭头滚动
    $("#footer .right a").click(function () {
        $("html, body").stop().animate({scrollTop: 0}, 1500, "easeInOutQuart");
    });
});