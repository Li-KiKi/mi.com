// 探出窗口
$(function() {
        $('.info-login').on('click', function() {
            $('.zhezhao').css('display', 'block').animate({
                opacity: 1,
            }, 700)
            $('.zhezhao-ch').animate({
                margin: '120px auto 0'
            }, 700)
        })
        $('.zhezhao-no').on('click', function() {
            $('.zhezhao').animate({
                opacity: 0,
            }, 700)
            $('.zhezhao-ch').animate({
                margin: '100px auto 0'
            }, 700, function() {
                $('.zhezhao').css('display', 'none')
            })
        })
    })
    // nav二级菜单
$(function() {
    $('.nav-item:lt(7)').on({
        mouseenter: function() {
            $('.item-children').stop(true);
            $('.item-children').delay(200).animate({
                height: '230px'
            }, 300);
        },
        mouseleave: function() {
            $('.item-children').finish();
            $('.item-children').delay(200).animate({
                height: '0px'
            }, 300)
        }
    })
})

// 侧边固定菜单
$(function() {
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 1000) {
            $('.return-top').css('opacity', 1)
        } else {
            $('.return-top').css('opacity', 0)
        }
    })
})