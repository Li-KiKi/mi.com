$(function() {
        let id = location.search.split('=')[1];
        $.ajax({
            type: "get",
            url: "../../interface/getItem.php",
            data: {
                id: id
            },
            dataType: "json",
            success: function(res) {
                let arr = res.picture.split('"')
                let edition = res.edition.slice(1, -1).split(',').join('')
                let color = res.color.slice(1, -1).split(',').join('')
                let subs = res.subs.slice(1, -1).split(',').join('')
                let temp = `
            <div class="main-container w">
            <div class="main-left">
                <img src="../${arr[3]}" alt="big">
            </div>
            <div class="main-right">
                <h2>${res.title}</h2>
                <p>
                ${res.detail}
                </p>
                <p>小米自营</p>
                <p>${res.price}元</p>
                <div class="address">
                    <div>
                        <span>北京</span>
                        <span>北京市</span>
                        <span>海淀区</span>
                        <span>清河街道</span>
                        <span style="color: #ff4a00;">修改</span>
                    </div>
                    <p style="color: #ff4a00;">有现货</p>
                </div>
                <div class="buy-option">
                    <div class="selector selector-one">
                        <h2>选择版本</h2>
                        <ul>
                            ${edition}
                        </ul>
                    </div>
                    <div class="selector selector-two">
                        <h2>选择颜色</h2>
                        <ul>
                            ${color}
                        </ul>
                    </div>
                    <div class="selector selector-three">
                        <h2>选择套装</h2>
                        <ul>
                            ${subs}
                        </ul>
                    </div>
                </div>
                <div class="buy-service">
                    <div class="service service-one">
                        <h2>选择小米提供的尊享服务</h2>
                        <ul>
                            <li class="bcg zunxiang" data-price="949">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_1616928992.67528149.png" alt="">
                                <div class="box">
                                    <h3>
                                        MiCare保障服务<span>949元</span>
                                    </h3>
                                    <p>2年2次碎屏 1年延保维修 1年保值换新</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>949元</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="service service-two">
                        <h2>选择小米提供的意外保护</h2>
                        <ul>
                            <li class="bcg suiping" data-price="399">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_1616928992.67528149.png" alt="">
                                <div class="box">
                                    <h3>
                                        碎屏保障服务<span>399元</span>
                                    </h3>
                                    <p>碎屏保障服务</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>399元</div>
                                </div>
                            </li>
                            <li class="bcg yiwai" data-price="699">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_1616928992.67528149.png" alt="">
                                <div class="box">
                                    <h3>
                                        意外保障服务<span>699元</span>
                                    </h3>
                                    <p>意外保障服务</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>699元</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="service service-three">
                        <h2>选择小米提供的延长保修</h2>
                        <ul>
                            <li class="bcg yanbao" data-price="249">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_1616928992.67528149.png" alt="">
                                <div class="box">
                                    <h3>
                                        延长保修服务<span>249元</span>
                                    </h3>
                                    <p>延长保修服务</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>249元</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="service service-four">
                        <h2>选择小米提供的云空间服务</h2>
                        <ul>
                            <li class="bcg" data-price="208">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_yunkongjian.png" alt="">
                                <div class="box">
                                    <h3>
                                        云空间年卡200G<span>208元</span>
                                    </h3>
                                    <p>主商品签收后，自动激活至下单账号</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>208元</div>
                                </div>
                            </li>
                            <li class="bcg" data-price="58">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_yunkongjian.png" alt="">
                                <div class="box">
                                    <h3>
                                        云空间年卡50G<span>58元</span>
                                    </h3>
                                    <p>主商品签收后，自动激活至下单账号</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>58元</div>
                                </div>
                            </li>
                            <li class="bcg" data-price="21">
                                <div class="dot">
                                    <div>√</div>
                                </div>
                                <img src="../img/pms_yunkongjian.png" alt="">
                                <div class="box">
                                    <h3>
                                        云空间月卡200G<span>21元</span>
                                    </h3>
                                    <p>主商品签收后，自动激活至下单账号</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>21元</div>
                                </div>
                            </li>
                            <li class="bcg" data-price="6">
                                <div class="dot">
                                    <div class="bgg">√</div>
                                </div>
                                <img src="../img/pms_yunkongjian.png" alt="">
                                <div class="box">
                                    <h3>
                                        云空间月卡50G<span>6元</span>
                                    </h3>
                                    <p>主商品签收后，自动激活至下单账号</p>
                                    <div>
                                        <i>√</i>我已阅读
                                        <a href="#">服务条款</a>
                                        <span style="color: #ff4a00;">|</span>
                                        <a href="#">常见问题</a>
                                    </div>
                                    <div>6元</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="buy-all">
                    <ul>
                        <li>
                            小米11 Ultra 8GB+256GB 陶瓷黑
                            <span>${res.price}元</span>
                        </li>
                    </ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <div class="buy-price">总计：${res.price}元</div>
                </div>
                <div class="buy-btn">
                    <button>加入购物车</button>
                    <button>喜欢</button>
                </div>
                <div class="buy-img">
                    <img src="../img/QQ截图20210502152628.png" alt="">
                </div>
            </div>
        </div>`
                $('.product-main').append(temp)
            }
        });
        // 服务选择
        $('.product-main').on('click', '.buy-service .service ul li', function(ev) {
            if ($(this).hasClass('bco')) {
                $(this).removeClass('bco').addClass('bcg')
            } else {
                $(this).addClass('bco').removeClass('bcg').siblings().removeClass('bco').addClass('bcg');
            }
            let subprice = 0;
            $('.buy-service .service ul li').each(function() {
                if ($(this).css('border').slice(-2, -1) === "0") {
                    subprice = subprice + parseInt(this.dataset.price)
                }
            })
            let allprice = subprice + parseInt($('.main-right').children('p').eq(2).html())
            $('.buy-price').html(`总计：${allprice}元`)
        });
        // 版本选择
        $('.product-main').on('click', '.selector ul li', function(ev) {
            if ($(this).hasClass('bco')) {
                $(this).removeClass('bco').addClass('bcg')
            } else {
                $(this).addClass('bco').removeClass('bcg').siblings().removeClass('bco').addClass('bcg');
            }
        });
        // 设置cookie
        let num = 0; //计数处理，商品的数量
        $('.product-main').on('click', '.buy-btn button:nth-of-type(1)', function() {
            ++num;
            addItem(parseInt(location.search.split('=')[1]), parseInt($('.main-right').children('p').eq(2).html()), parseInt($('.buy-price').html().match(/\d+/g)[0]), num)
        })

        function addItem(id, price, allprice, num) {
            let shop = cookie.get('shop')
            let product = {
                id,
                price,
                allprice,
                num
            }
            if (shop) {
                shop = JSON.parse(shop)
                if (shop.some(el => el.id === id)) {
                    let _index = shop.findIndex(elm => elm.id == id);
                    shop[_index].num = num
                } else {
                    shop.push(product)
                }
            } else {
                shop = [];
                shop.push(product)
            }
            cookie.set('shop', JSON.stringify(shop), 1)
        }
    })
    // 浮动条
$(function() {
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 150) {
            $('.float-2').css('top', 0)
        } else {
            $('.float-2').css('top', -70)
        }
    })
})