$(function() {
    let blur = null;
    $('.login-switch').on('click', function() {
        $('.layout_card1').toggleClass('hide')
        $('.layout_card2').toggleClass('hide')
    })
    $('.tabs-userinput').on('click', function() {
        $(this).children('p').css('transform', 'scale(1)');
        $(this).children('input').focus();
        $(this).css('border', '1px solid #ff6700');
        $(this).css('box-shadow', '0 0 3px red')
    })
    $('.tabs-userinput').children('input').keydown(function() {
        if (!$(this).val()) {
            $(this).parent().css('background-color', 'rgb(252,242,243)')
            $(this).siblings('p').css('color', 'red')
            $(this).parent().next().removeClass('hide')
        } else {
            $(this).parent().css('background-color', 'rgb(249,249,249)')
            $(this).siblings('p').css('color', '#aaaaaa')
            $(this).parent().next().addClass('hide')
        }
    })
    $('.tabs-userinput').one('click', function() {
        $(this).css('background-color', '#fff')
    })
    blur = function(ind) {
        let userinput = $('.tabs-userinput').eq(ind)
        userinput.children('input').blur(function() {
            if (!userinput.children('input').val()) {
                userinput.children('p').css({
                    'transform': 'scale(1.4) translateY(7px)',
                    'color': 'red'
                });
                userinput.css('background-color', 'rgb(252,242,243)')
                userinput.next('p').removeClass('hide')
            } else {
                userinput.css('background-color', 'rgb(249,249,249)')
                userinput.children('p').css('color', '#aaaaaa')
                userinput.next('p').addClass('hide')
            }
            userinput.css('border', '1px solid rgb(252,242,243)');
            userinput.css('box-shadow', '0 0 0px rgb(252,242,243)')
        })
    }
    blur(0);
    blur(1);
    blur(3);
    blur(4);
    $('.tabs-list').children('span').on('click', function() {
        let ind = $(this).index()
        $('.tabs-longbox').children('div').eq(ind).removeClass('hide').siblings().addClass('hide')
        if (ind) {
            $('.tabs-longbox').css('transform', 'translateX(-350px)')
        } else {
            $('.tabs-longbox').css('transform', 'translateX(0)')
        }
    })
    $('.tabs-country').on('click', function() {
        $('.tabs-country-menu').toggleClass('hide')
    })
    $('.tabs-country').focusout(function() {
        $('#tabs-country').css('box-shadow', '0 0 0 black')
        $('#tabs-country').css('border', '1px solid rgb(249,249,249)')
    })
})