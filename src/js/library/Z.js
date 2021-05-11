(function() {
    'use strict';

    const ready = callback => {
        // DOMContentLoaded 是来自HTML5标准的事件
        // DOM结构加载完毕后执行
        document.addEventListener('DOMContentLoaded', function fn() {
            document.removeEventListener('DOMContentLoaded', fn); // 事件触发一次就移除事件
            callback(); // 执行真正的回调函数
        });
    }

    const init = (selector, context) => {
        if (typeof selector == 'function') { // 判断传入的是函数 则执行就绪事件
            ready(selector);
            return;
        }

        return new Z(selector, context);
    }


    class Z extends Array {
        constructor(selector, context) {
            let elms;
            // 将数组或类数组转成 Z对象
            if (Array.isArray(selector) || selector.__proto__.constructor.name === 'NodeList') {
                super(...selector);
                return;
            }
            if (selector.nodeType === 1) { // 将单个的DOM元素转换成Z创建的对象
                super(selector);
            } else {
                // node.querySelectorAll()
                // context 上下文
                // 在上下文对象中查找元素/在文档中查找元素
                elms = context ? context.querySelectorAll(selector) : document.querySelectorAll(selector);
                super(...elms);
            }
        }

        on(eventType, callback) {
            if (typeof eventType == 'string' && typeof callback == 'function') {
                this.forEach(elm => { // 遍历所有被选择的元素
                    elm.addEventListener(eventType, callback); // 给每一个元素添加事件
                });
            } else if (eventType.constructor.name == 'Object') {
                for (let key in eventType) { // 遍历对象获得 key和value key是事件类型 value是事件处理函数
                    this.forEach(elm => { // 遍历所有被选择的元素
                        elm.addEventListener(key, eventType[key]); // 给每一个元素添加事件
                    });
                }
            }
        }

        css(style, value) {
            if (typeof style == 'string' && typeof value == 'string') {
                this.forEach(elm => {
                    elm.style[style] = value;
                });
            } else if (style.constructor.name == 'Object') {
                for (let key in style) {
                    this.forEach(elm => {
                        elm.style[key] = style[key];
                    });
                }
            }
            return this;
        }

        addClass(className) {
            if (typeof className == 'string' && className) {
                this.forEach(elm => {
                    elm.classList.add(className);
                });
            }

            return this; //公有函数中的return this 让函数支持链式调用
        }

        removeClass(className) {
            if (typeof className == 'string' && className) {
                this.forEach(elm => {
                    elm.classList.remove(className);
                });
            }

            return this; //公有函数中的return this 让函数支持链式调用
        }

        toggleClass(className) {
            if (typeof className == 'string' && className) {
                this.forEach(elm => {
                    elm.classList.toggle(className);
                });
            }

            return this; //公有函数中的return this 让函数支持链式调用
        }

        replaceClass(oldName, newName) {
            if (typeof oldName == 'string' && typeof newName == 'string' && oldName && newName) {
                this.forEach(elm => {
                    elm.classList.replace(oldName, newName);
                });
            }
            return this;
        }

        attr(attrname, value) {
            if (typeof attrname === 'string') {
                switch (typeof value) {
                    case 'undefined':
                        // 返回第一个被选元素的属性值
                        return this[0].getAttribute(attrname);
                    case 'string':
                        this.forEach(elm => {
                            elm.setAttribute(attrname, value);
                        });
                        break;
                    case 'function':
                        this.forEach((elm, i) => {
                            let result = value(elm.getAttribute(attrname), i);
                            elm.setAttribute(attrname, result);
                        });
                }
            }
        }


        removeAttr(attrname) {
            if (typeof attrname == 'string' && attrname) {
                this.forEach(elm => {
                    if (elm.hasAttribute(attrname)) {
                        elm.removeAttribute(attrname);
                    }
                });
            }
            return this;
        }


        // ----------------
        // 文档操作

        find(selector) {
            if (typeof selector === 'string' && selector) {
                let nodeList = []; // 用于存放被选择的元素
                this.forEach(elm => {
                    nodeList.push(...elm.querySelectorAll(selector));
                });

                // 在特定情况下 有可能出现重复选择元素 
                // 去重
                nodeList = [...new Set(nodeList)];

                return init(nodeList);
            }
        }


        eq(index) {
            if (typeof index === 'number' && index === parseInt(index) && !isNaN(index) && index >= 0) {
                return init(this[index]);
            }
        }

        siblings(selector) {
            let result = []; // 结果
            this.forEach(elm => {
                let sibling = Array.from(elm.parentNode.children); //获得包含目标在内的所有兄弟元素
                let _index = sibling.findIndex(el => el == elm); // 查找目标在所有兄弟中的索引
                sibling.splice(_index, 1); // 通过索引删除目标

                if (typeof selector == 'string' && selector) {
                    // 在父元素通过选择器进行元素查找
                    let selected = Array.from(elm.parentNode.querySelectorAll(selector));
                    // 在两个数组中查找相同的元素
                    sibling = sibling.filter(el => selected.indexOf(el) > -1);
                }
                result.push(...sibling);
            });

            result = [...new Set(result)];
            return init(result);
        }

        children(selector) {
            let result = [];
            this.forEach(elm => {
                let domList;

                if (typeof selector === 'string' && selector) {
                    domList = Array.from(elm.querySelectorAll(selector));
                    domList = domList.filter(el => el.parentNode === elm);
                } else {
                    domList = Array.from(elm.children);
                }
                result.push(...domList);
            });

            return init(result);
        }

        html(htmlContent) {
            switch (typeof htmlContent) {
                case 'undefined': // 没有参数 返回第一个元素的html内容
                    return this[0].innerHTML;
                case 'string':
                    this.forEach(elm => {
                        elm.innerHTML = htmlContent;
                    });
                    break;
                case 'function':
                    this.forEach((elm, i) => {
                        elm.innerHTML = htmlContent(elm.innerHTML, i);
                    });
            }
        }

        val(value) {
            switch (typeof value) {
                case 'undefined':
                    return this[0].value;
                case 'string':
                    this.forEach(elm => {
                        elm.value = value;
                    });
                    break;
                case 'function':
                    this.forEach((elm, i) => {
                        elm.value = value(elm.value, i);
                    });
            }
        }

        index(elm) {
            return this.findIndex(el => el == elm);
        }

        tabs(options) {
            let defaults = {
                ev: 'click', // 默认事件
                active: 'actived', // 默认选项类名
                display: 'display' // 默认显示切换类名
            };
            Object.assign(defaults, options); // 合并对象

            // 元素选择
            let btns = this.find('[data-type="tabs-btn"]');
            let div = this.find('[data-type="tabs-display"]');

            btns.on(defaults.ev, function() {
                let _index = btns.index(this);
                $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                div.eq(_index).addClass(defaults.display).siblings().removeClass(defaults.display);
            });

        }


        load(url, callback) {
            // 为每一个被选择的元素 加载一个模板
            const xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    this.forEach(el => {
                        $(el).html(xhr.responseText);
                    });
                    callback && callback();
                }
            }.bind(this);
        }

    }

    window.$ = init;
})();