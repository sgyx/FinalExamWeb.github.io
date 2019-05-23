jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

$(function () {
    //向下箭头滚动
    $("#top a").click(function () {
        $("html, body").stop().animate({scrollTop: $("#about").offset().top}, 1000, "easeInOutQuart");
    });

    //向下伸缩
    $("#work li>a").click(function () {
        if($(this).hasClass(".a_open")) {
            //关闭
            $(this).removeClass(".a_open");
            $(this).children("h3").css("color", "");
            $(this).children("h4").css("color", "");
            $(this).children("img").css("transform", "");
            //$(this).next().slideUp(300);
            $(this).next().stop().animate({
                height: 0
            }, 500, function () {
                $(this).css({
                    //"will-change": "width, height",
                    "display": "none"
                })
            });
        } else {
            //打开
            $(this).addClass(".a_open");
            $(this).children("h3").css("color", "rgb(0, 92, 239)");
            $(this).children("h4").css("color", "rgb(0, 92, 239)");
            $(this).children("img").css("transform", "translate3d(0px, 30px, 0px) rotateZ(-180deg)");
            //$(this).next().css("display", "flex").slideDown(500);
            $(this).next().css({
                //"will-change": "width, height",
                "display": "flex"
            }).stop().animate({
                height: 800
            }, 300, "easeInOutQuart");
        }
    });

    //划条宽度
    $(window).on("scroll", function () {
        var lines = $(".line-yellow");
        for (var i = 0; i < lines.length; i++) {
            rewidth( lines.eq(i));
        }
    }).on("resize", function () {
        $(window).scroll();
    });
    function rewidth ( $this) {
        var width = parseInt(($(window).height() - ($this.offset().top - $(window).scrollTop() + $this.height() / 2)) / $(window).height() * 100);
        width = width > 100 ? 100 : width < 0 ? 0 : width;
        $this.width(width + "%");
    }

    //介绍
    var serArray = [
        "We like drawing pictures just as much as we like animating them. Yup, we still draw things with our hands. Whether it's an app run-through or a detailed animated narrative, storyboarding plays a key role in springboarding final picture. *sharpens Apple Pencil*",
        "Defining and maintaining a look is just as important as making it move. We pride ourselves on burning midnight oil when exploring the right direction. We'll jump on any opportunity to make something pretty, making sure it adds, rather than takes away from the brief.",
        "Senior detail in all aspects of production makes for a peach of a final product. Us old timers have a good grasp on standards; which means we have plenty fun overseeing the subtleties, be they sound, content or movement related.",
        "Sound is something dear to us *hugs*. We learnt a long time ago how important it is to appreciate crafted audio. So, we spend a substantial amount of time on Foley and Music. Because few things help a visual more than the right set of sounds.",
        "Ahem, this is a fairly wide term. And we tend to stay close to the conceptually driven side of the scale. For us, idea is king. We know plenty well that a solid concept can negate a heavy production. Either way, we film things, and enjoy doing so.",
        "Editing is a devil in the details process, and sometimes, one that people don't appreciate. That doesn't matter much to us, since we appreciate it just fine. Whether from our cameras or yours, we can piece together something that makes a fair bit more sense than a folder of MXFs.",
        'Ok, so this is a little different for us animation folk, veering away from the more traditional "everything after production". Whether colouring, light VFX or still frame retouching, post is a super time effective way of squeezing the last few drops of water from the stone.',
        "We like having something to animate, so we tend to illustrate what it is we are trying to showcase. Seems to make sense to us. Whether 2D based or something built in 3D space, illustration is a chance to buy good steel. And yes, that was a metaphor.",
        "Cool, back with another vague term. The best way to categorise 2D is to remove 3D and Live Action from the equation and see where you end up. 2D Animation is a cornerstone at Okalpha. Luckily we are pretty good at it.",
        "3D space pours a bucket full of techniques and tools into the equation. Be it asset creation, system builds, or rigged animation, we are obsessed with working in 3D space. When used right, it's our most powerful tool. That and our third world rates.",
        "We noticed that apps seem to be quite a big deal. We're not 100% sure, but it seems to be taking off? As a result, we do a ton of UI work. Slick, simple, and smart, we appreciate the approach of function meeting form. It's also a chance for us to test eases. Win-win.",
        "Having a heavy photographic background means product rendering and imagery is a mild obsession of ours. With photo-realism being fairly easy to achieve in 3D space, we have the freedom to work on a limitless stage. So, no studio and no cable management.",
        "Yup, photography, further confirming we do nearly everything under the sun. Being raised by photographers means it's in the blood of the studio. If the concept is unique and the direction intriguing, we will dive head first into capturing the right set of still frames.",
        "We like drawing pictures just as much as we like animating them. Yup, we still draw things with our hands. Whether it's an app run-through or a detailed animated narrative, storyboarding plays a key role in springboarding final picture. *sharpens Apple Pencil*",
        "Defining and maintaining a look is just as important as making it move. We pride ourselves on burning midnight oil when exploring the right direction. We'll jump on any opportunity to make something pretty, making sure it adds, rather than takes away from the brief.",
        "Senior detail in all aspects of production makes for a peach of a final product. Us old timers have a good grasp on standards; which means we have plenty fun overseeing the subtleties, be they sound, content or movement related.",
        "Sound is something dear to us *hugs*. We learnt a long time ago how important it is to appreciate crafted audio. So, we spend a substantial amount of time on Foley and Music. Because few things help a visual more than the right set of sounds.",
        "Ahem, this is a fairly wide term. And we tend to stay close to the conceptually driven side of the scale. For us, idea is king. We know plenty well that a solid concept can negate a heavy production. Either way, we film things, and enjoy doing so.",
        "Editing is a devil in the details process, and sometimes, one that people don't appreciate. That doesn't matter much to us, since we appreciate it just fine. Whether from our cameras or yours, we can piece together something that makes a fair bit more sense than a folder of MXFs.",
        'Ok, so this is a little different for us animation folk, veering away from the more traditional "everything after production". Whether colouring, light VFX or still frame retouching, post is a super time effective way of squeezing the last few drops of water from the stone.',
        "We like having something to animate, so we tend to illustrate what it is we are trying to showcase. Seems to make sense to us. Whether 2D based or something built in 3D space, illustration is a chance to buy good steel. And yes, that was a metaphor.",
        "Cool, back with another vague term. The best way to categorise 2D is to remove 3D and Live Action from the equation and see where you end up. 2D Animation is a cornerstone at Okalpha. Luckily we are pretty good at it.",
        "3D space pours a bucket full of techniques and tools into the equation. Be it asset creation, system builds, or rigged animation, we are obsessed with working in 3D space. When used right, it's our most powerful tool. That and our third world rates.",
        "We noticed that apps seem to be quite a big deal. We're not 100% sure, but it seems to be taking off? As a result, we do a ton of UI work. Slick, simple, and smart, we appreciate the approach of function meeting form. It's also a chance for us to test eases. Win-win.",
        "Having a heavy photographic background means product rendering and imagery is a mild obsession of ours. With photo-realism being fairly easy to achieve in 3D space, we have the freedom to work on a limitless stage. So, no studio and no cable management.",
        "Yup, photography, further confirming we do nearly everything under the sun. Being raised by photographers means it's in the blood of the studio. If the concept is unique and the direction intriguing, we will dive head first into capturing the right set of still frames.",
        "Senior detail in all aspects of production makes for a peach of a final product. Us old timers have a good grasp on standards; which means we have plenty fun overseeing the subtleties, be they sound, content or movement related.",
        "We like drawing pictures just as much as we like animating them. Yup, we still draw things with our hands. Whether it's an app run-through or a detailed animated narrative, storyboarding plays a key role in springboarding final picture. *sharpens Apple Pencil*",
        "Defining and maintaining a look is just as important as making it move. We pride ourselves on burning midnight oil when exploring the right direction. We'll jump on any opportunity to make something pretty, making sure it adds, rather than takes away from the brief."
    ];
    $(".services-link").click(function () {
        console.log($(this).index());
        console.log($(this).text().replace(".",""));
        $(".description h1").text($(this).text().replace(".",""));
        $(".description p").text(serArray[$(this).index()]);
        $(".description").css("transform", "translate3d(0%, 0px ,0px)");
        return false;
    });
    $(".description a").click(function () {
        $(".description").css("transform", "translate3d(-105%, 0px, 0px)");
        return false;
    });


    //向上箭头滚动
    $("#footer .right a").click(function () {
        $("html, body").stop().animate({scrollTop: 0}, 2500, "easeInOutQuart");
    });

    //球右滚动
    $(window).on("scroll", function () {
        var num = $(window).height() - $(".circle").offset().top + $(window).scrollTop();
        if (num > 0) {
            $(".circle").css("transform", "translate3d(" + (num / 24 - 60).toFixed(4) + "%, 0px, 0px)");
        } else {
            $(".circle").css("transform", "translate3d(-60%, 0px, 0px)");
        }
    });

    //斜方块滑动
    $(window).on("scroll", function () {
        var num = $(window).scrollTop() / 35;
        if (num < 0) {
            num = 0;
        } else if (num > 50) {
            num = 50;
        }
        $(".square").css("transform", "translate3d(" + num + "%, " + num + "%, 0px)");
    });
});