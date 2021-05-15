import { $ } from './library/jquery.js';
import { common } from './common.js'
import './library/jquery.lazyload.js';
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
    // nav 搜索框
$(function() {
        $('#search').on('click', function() {
            $('.search-keyword').removeClass('hide')
            $('#search').css('border', '1px solid #ff6700')
            $('#submit').css('border', '1px solid #ff6700')
            $('.search-keyword').css('border', '1px solid #ff6700')
        })
        $('#search').blur(function() {
            if (!$('.search-keyword').hasClass('hide')) {
                $('.search-keyword').addClass('hide')
                $('#search').css('border', '1px solid #e0e0e0')
                $('#submit').css('border', '1px solid #e0e0e0')
                $('.search-keyword').css('border', '1px solid #e0e0e0')
            }
        })
    })
    // 计时器
$(function() {
        function NextTime(next, cb) {
            var t;
            (function ft() {
                var dif = (next.getTime() - (new Date()).getTime()) / 1000;
                if (dif > 0) {
                    t = setTimeout(ft, 1000);
                    if (cb)
                        cb(Math.floor(dif % 86400 / 3600), Math.floor(dif % 3600 / 60), Math.floor(dif % 60));
                } else {
                    clearTimeout(t);
                }
            })();
            return function() {
                clearTimeout(t);
            };
        }

        function lpad(num, n) {
            var len = num.toString().length;
            while (len < n) {
                num = "0" + num;
                len++;
            }
            return num;
        }
        var now = new Date();
        var next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        new NextTime(next, function(hour, minute, second) {
            $('.countdown').html(`<span>${lpad(hour, 2)}</span><i>:</i><span>${lpad(minute, 2)}</span><i>:</i><span>${lpad(second, 2)}</span>`)
        });
    })
    // 秒杀滑动
$(function() {
        $('.btn-right').on('click', function() {
            if ($('.flashsale-slide').css('left') == '0px') {
                $('.flashsale-slide').animate({
                    left: '-992px'
                }, 1000)
            }
        })
        $('.btn-left').on('click', function() {
            if ($('.flashsale-slide').css('left') == '-992px') {
                $('.flashsale-slide').animate({
                    left: '0px'
                }, 1000)
            }
        })
        let timer = setInterval(function() {
            if ($('.flashsale-slide').css('left') == '0px') {
                $('.flashsale-slide').animate({
                    left: '-992px'
                }, 1000)
            }
            if ($('.flashsale-slide').css('left') == '-992px') {
                $('.flashsale-slide').animate({
                    left: '0px'
                }, 1000)
            }
        }, 6000)

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
    // ajax请求数据
$(function() {
        $.ajax({
            type: "get",
            url: "../../interface/getData.php",
            dataType: "json",
            success: function(res) {
                let temp = '';
                res.forEach((elm, i) => {
                    let arr = elm.showpicture.split('"')
                    temp += `<li>
                <a href="../html/productpage.html?id=${elm.id}">
                    <img class="lazy" src="../${arr[3]}" alt="small" style="height: 160px;width: 160px;">
                    <h3 class="title">${elm.title}</h3>
                    <p class="desc">${elm.showtip}</p>
                    <p class="price">${elm.showprice}</p>
                </a>
            </li>`
                })
                $('.right-list-phone').append(temp)
            }
        });
    })
    // 懒加载
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
});
common()