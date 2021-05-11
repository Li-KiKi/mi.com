// banner轮播图
$(function() {
        // 抽象功能(将所有可能要执行的动作都声明成变量)
        let main = null, // 主函数(入口函数)
            init = null, // 初始化
            start = null, // 开始动画
            next = null, // 下一张
            prev = null, // 上一张
            timer = null, // 计时器
            elms = {}; // 命名空间 提供可共享作用域的变量
        init = function() {
            // 1. 获得元素
            elms.sliderElm = $('.slide-img');
            elms.dot = $('.slide-dot').children();
            elms.btns = $('.slide-btn').children('div');
            // 设置播放索引
            elms.index = 0;

            // 悬停事件
            $('.mi_banner').hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(start.bind(null, 1), 3000);
            });

            // 按钮点击事件
            elms.btns.on('click', function() {
                if (elms.btns.index(this)) {
                    next();
                } else {
                    prev();
                }
            });
            elms.dot.on('click', function() {
                elms.index = elms.dot.index(this) - 1
                start(1);
            })
        }.bind(this);
        start = function(direction) {
            if (direction) {
                elms.index++
            } else {
                elms.index--
            }
            if (elms.index > 4) {
                elms.index = 0;
            }
            elms.sliderElm.addClass('active-y').eq(elms.index).removeClass('active-y').addClass('active')
            elms.dot.addClass('dot-y').eq(elms.index).removeClass('dot-y').addClass('dot')
            if (!direction) {
                if (elms.index === 0) {
                    elms.index = 4;
                }
            }
        };
        next = function() {
            clearInterval(timer);
            start(1);
        }
        prev = function() {
            clearInterval(timer);
            start(0);
        }
        main = function() {
            init();
            timer = setInterval(start.bind(null, 1), 3000);
        }
        main();
    })
    // 计时器
    // 秒杀滑动
$(function() {
        let slide = $('.flashsale-slide');
        let start2 = null;

        function thottle(callback, delay) {
            let prev = 0; // 用于记录上次的执行时间
            return function() {
                // console.log(this);
                let now = Date.now(); // 获得当前时间

                if (now - prev >= delay) {
                    callback.apply(this, arguments); // 调用回调函数
                    prev = now; // 更新上一次的执行时间
                }
            }
        }


        if (slide.position().left == 0) {
            $(this).css('color', 'black')
        } else {
            $('.btn-left').on('click', thottle(function() {
                start2(0)
            }, 600))
            $(this).addClass('fc')
        }


        if (slide.position().left == -992) {
            $(this).css('color', 'black')
        } else {
            $('.btn-right').on('click', thottle(function() {
                start2(1)
            }, 600))
            $(this).addClass('fc')
        }


        start2 = function(direction) {
            let left = `-992`;
            if (!direction) {
                left = `0`;
            }
            slide.animate({
                left: left
            }, 600, function() {
                if (slide.position().left == 0) {
                    $('.btn-left').off('click')
                }
                if (slide.position().left == -992) {
                    $('.btn-right').off('click')
                }
            });
        };
    })
    // 产品列表切换
$(function() {
    $('.mi_jiadian .row-select-btn>span').on('mouseover', function() {
        $('.mi_jiadian .row-right').addClass('hide').eq($(this).index()).removeClass('hide')
        $(this).addClass('fc').siblings().removeClass('fc')
        $(this).children().css('opacity', 1)
        $(this).siblings().children().css('opacity', 0)
    })
    $('.mi_zhineng .row-select-btn>span').on('mouseover', function() {
        $('.mi_zhineng .row-right').addClass('hide').eq($(this).index()).removeClass('hide')
        $(this).addClass('fc').siblings().removeClass('fc')
        $(this).children().css('opacity', 1)
        $(this).siblings().children().css('opacity', 0)
    })
})