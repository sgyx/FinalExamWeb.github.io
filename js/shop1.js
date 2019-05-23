jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
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
    $("#footer .right a").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutQuart");
    });
});







/********************************************************************* */
$(document).ready(function () {
    var time;
    var flag = 0;
    $(function () {

        $('.dv-dv').mouseenter(function () {
            $('.shop1-left').fadeIn(200);;
            $('.shop1-right').fadeIn(200);
            clearInterval(time);
        }).mouseleave(function () {
            $('.shop1-left').fadeOut(200);;
            $('.shop1-right').fadeOut(200);
            time = setInterval(show1_right, 2000);
            flag = 1;
        })
    });
    var arr = ['p1', 'p2', 'p3'];
    var index = 0;
	
	if(flag == 0)
	{
		time = setInterval(show1_right, 2000);
	}
		
    $('.shop1-right').click(function () {
        show1_right();
    });


    $('.shop1-left').click(function () {
        show1_left();
    });


    function show1_left() {
        arr.unshift(arr[2]);
        arr.pop();
        $('.dv li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index--;
        if (index < 0) {
            index = 2;
        }
        show();
    }

    function show1_right() {
        arr.push(arr[0]);
        arr.shift();
        $('.dv li').each(function (i, e) {
            $(e).removeClass().addClass(arr[i]);
        })
        index++;
        if (index > 2) {
            index = 0;
        }
        show();
    }

    function show() {
        $('.buttons a').eq(index).css("background-color", "black").siblings().css("background", "white");
    }

    $('.buttons a').each(function () {
		$(this).on('click', function () {
			var myindex = $(this).index();
			var mindex = myindex - index;
			if (mindex == 0) {
				return;
			}
			else if (mindex > 0) {
				var newarr = arr.splice(0, mindex);
                arr = $.merge(arr, newarr);
				$('.dv-dv li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
			else if (mindex < 0) {
				arr.reverse();
				var oldarr = arr.splice(0, -mindex);
				arr = $.merge(arr, oldarr);
				arr.reverse();
				$('.dv-dv li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
		})
	})

});

/***************************************************************************** */
var intDiff = parseInt(5410); //倒计时总秒数量

function timer(intDiff) {
    window.setInterval(function () {
        var hour = 0,
            minute = 0,
            second = 0; //时间默认值		
        if (intDiff > 0) {
            hour = Math.floor(intDiff / (60 * 60));
            minute = Math.floor(intDiff / 60) - (hour * 60);
            second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#hour_show').html('<s id="h"></s>' + hour + '时');
        $('#minute_show').html('<s></s>' + minute + '分');
        $('#second_show').html('<s></s>' + second + '秒');
        intDiff--;
    }, 1000);
}

$(function () {
    timer(intDiff);
});
/***************************************************************************************** */