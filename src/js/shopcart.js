$(function() {
    let shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        let idList = shop.map(el => el.id).join();
        $.ajax({
            type: "get",
            url: "../../interface/getItems.php",
            data: { idList: idList },
            dataType: "json",
            success: function(res) {
                let temp = '';
                res.forEach(elm => {
                    let current = shop.filter(val => val.id == elm.id)
                        // console.log(current)
                    let picture = elm.picture.split('"');
                    temp += `
                    <div class="item-box">
                        <!-- 商品主体 -->
                        <div class="item-table">
                            <div class="col col-check">
                                <i>√</i>
                            </div>
                            <div class="col col-img">
                                <a href="#">
                                    <img src="../${picture[3]}" alt="">
                                </a>
                            </div>
                            <div class="col col-name">
                                <a href="#">${elm.title} 8GB+256GB 陶瓷黑</a>
                            </div>
                            <div class="col col-price">${elm.price}元</div>
                            <div class="col col-num">
                                <div class="change-num">
                                    <p data-ids="${elm.id}">-</p>
                                    <span>${current[0].num}</span>
                                    <p data-ids="${elm.id}">+</p>
                                </div>
                            </div>
                            <div class="col col-total">${(current[0].num)*(current[0].allprice)}元</div>
                            <div class="col col-action">
                                <span data-id="${elm.id}">×</span>
                            </div>
                        </div>
                    </div>`
                })
                $('.bar-left').children('span').children('i').eq(0).html(`${shop.length}`)
                $('.body-item').append(temp).find('.col-action').children().on('click', function() {
                    let res = shop.filter(el => el.id != $(this).attr('data-id'));
                    cookie.set('shop', JSON.stringify(res), 1);
                    location.reload();
                })

                // 在购物车里改变数量之后改变cookie
                $('.body-item').on('click', '.change-num p', function() { // 采用事件委托，选择加减按钮p元素
                    if ($(this).index()) {
                        shop.forEach((el) => {
                            if (el.id == $(this).attr('data-ids')) {
                                el.num = el.num + 1
                                $(this).siblings('span').html(`${el.num}`)
                                $(this).parents('.col-num').next().html(`${parseInt($(this).parents('.col-num').prev().html())*el.num}元`)
                            }
                        });
                        cookie.set('shop', JSON.stringify(shop), 1);
                    } else {
                        shop.forEach((el) => {
                            if (el.id == $(this).attr('data-ids')) {
                                if (el.num != 0) {
                                    el.num = el.num - 1
                                    $(this).siblings('span').html(`${el.num}`)
                                    $(this).parents('.col-num').next().html(`${parseInt($(this).parents('.col-num').prev().html())*el.num}元`)
                                }
                            }
                        });
                        cookie.set('shop', JSON.stringify(shop), 1);
                    }
                })

                $('.shopcar-main').on('click', '.col-check', function() {
                    if (!$('.col-check').index(this)) {
                        if ($(this).children().hasClass('check-o')) {
                            $('.col-check').children().removeClass('check-o')
                        } else {
                            $('.col-check').children().addClass('check-o')
                        }
                    } else {
                        $(this).children().toggleClass('check-o')
                    }
                    $('.col-check:gt(0)').children().each(function() {
                        if (!$(this).hasClass('check-o')) {
                            $('.col-check:eq(0)').children().removeClass('check-o')
                            return false
                        } else {
                            $('.col-check:eq(0)').children().addClass('check-o')
                        }
                    })
                    let num = 0;
                    let price = 0;
                    $('.col-check:gt(0)').children().each(function() {
                        if ($(this).hasClass('check-o')) {
                            num++;
                            parseInt($(this).parents('.item-box').find('.col-total').html())
                            price = price + parseInt($(this).parents('.item-box').find('.col-total').html())
                                // $(this).index()
                        }
                        // console.log(price)
                        $('.bar-left').children('span').children('i').eq(1).html(`${num}`)
                        $('.total-price').children('em').html(`${price}`)
                    })
                })
            }
        });
    }
})