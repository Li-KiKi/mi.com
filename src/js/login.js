import { $ } from './library/jquery.js';
$(function() {
    let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
    let changeTo = null;
    let changeBack = null;
    changeTo = function(ind) {
        $('.phone-tip').eq(ind).removeClass('hide')
        $('.phone-input').css('border', '1px solid #ff6700')
    }
    changeBack = function(ind) {
        $('.phone-tip').eq(ind).addClass('hide')
        $('.phone-input').css('border', '1px solid #e0e0e0')
    }
    $('.country-icon').on('click', function(ev) {
        $('.country-selector').toggleClass('hide');
        ev.stopPropagation()
    })
    $(document).click(function(ev) {
        $('.country-selector').addClass('hide');
    })
    $('.phone-selector').on('click', function() {
        $('.selector-option').toggleClass('hide');
    })
    $('.phone-text').click(function() {
        if ($('.phone-text').val()) {
            $('.phone-text').keydown(function(ev) {
                if (ev.keyCode == 8) changeBack(1)
            })
        }
    })
    $('.phone-text').blur(function() {
        if (!$('.phone-text').val()) {
            changeTo(0)
            $('.phone-tip').eq(1).addClass('hide')
        }
        if ($('.phone-text').val()) {
            reg.test($('.phone-text').val()) ? changeBack(1) : changeTo(1);
        }

    })
    $('.phone-text').keypress(function() {
        if ($('.phone-text').val()) {
            changeBack(0)
        }
        console.log($('.phone-text').val().length)
        if (($('.phone-text').val().length != 10) && $('.phone-tip').eq(1).hasClass('hide')) {
            $('.res-btn').attr('type', 'button')
        } else {
            $('.res-btn').attr('type', 'submit')
        }
    })
})