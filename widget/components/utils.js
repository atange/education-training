/**
 * 判断当前是否是小程序环境
 * 2021年1月9日 暂用 api.appVersion模拟
 console.log(api.appVersion)
 * @returns {boolean}
 */
function isMP() {
    return !api.appVersion;
}

/**
 * 判断当前是APP端
 * @returns {boolean}
 */
function isApp() {
    return !!(api.platform && api.platform === 'app');
}

/**
 * 让模板支持 slot
 * 2021-1-7 19:50:28 修正传入节点为 _slot 避免和小程序的模板冲突
 * @param VNode
 * @returns {*}
 */
function slotHook(VNode) {
    let slots = {};

    function slotFilter(VNode, i, p) {
        if (VNode) {
            if (VNode.nodeName === 'slot') { // 如果是组件中的挖空,记录下该空槽的位置
                slots[VNode.attributes.name] = {i, p, attr: VNode.attributes};
                p[i] = false;//当前节点标记为不渲染
            } else if (VNode.nodeName === 'input') { //不太清楚为何 input 后的元素被识别成了 input 的子代元素
                VNode.children = []; // 手动清除 input 下的子元素
            } else if (VNode.attributes && VNode.attributes._slot) {//如果从模板传来的带 _slot 属性的节点 尝试寻找有无该 _slot 取值的空槽
                const _slot = slots[VNode.attributes._slot];
                if (_slot) {//找到空槽位置
                    const {i: _i, p: _p, attr} = _slot;
                    VNode.attributes = attr;
                    _p[_i] = VNode;//放进当前节点
                    p[i] = false;//当前原始节点标记为不渲染
                }
            } else if (Array.isArray(VNode.children) && VNode.children.length) {//递归子节点
                VNode.children.forEach(slotFilter);
            }
        }
    }

    slotFilter(VNode);
    slotFilter(VNode);
    slots = {};// 清空插槽容器 释放内存
    // console.log(VNode)

    return VNode;
}

/**
 * 模拟 ref 和 toRef,将基本类型变成响应式数据
 * @param value
 * @returns {{value}}
 */

const ref = (value) => {
    return {value}
};
const toRef = (obj) => obj.value;

/**
 * 继承父组件的 class 、style 和 on事件
 * @param VNode
 * @returns {*}
 */
function extendsClassStyleEvents(VNode) {
    this.props.class && (VNode.attributes.class += ' ' + this.props.class);
    this.props.style && (VNode.attributes.style = this.props.style);
    Object.values(this.props).filter(item => typeof item === 'function' && item.name.startsWith('on')).forEach(ev => VNode.attributes[ev.name] = ev);
    return VNode;
}

/**
 * 混合class类
 * @param cls
 * @param extra
 * @returns {string}
 */
function mixedClass(cls, extra) {
    let classList = [cls];
    Object.entries(extra).forEach(([key, val]) => val && classList.push(key));
    return classList.join(' ');
}

/**
 * showModel组件对齐到微信小程序
 * @param options
 */
function showModal({...options}) {
    if (isMP()) {
        return wx.showModal(options);
    } else {
        options.msg = options.content;
        const showCancel = options.showCancel ?? true;
        if (showCancel) {
            api.confirm(options, _ => {
                _result({..._, confirm: _.buttonIndex === 2, cancel: _.buttonIndex === 1})
            });
        } else {
            api.alert(options, _ => {
                _result({..._, confirm: _.buttonIndex === 1, cancel: false})
            });
        }

        function _result(res) {
            if (res) {
                options.success && options.success(res);
            } else {
                options.fail && options.fail();
            }
            options.complete && options.complete(res);
        }
    }
}

/**
 * 快速格式化时间
 * @param time
 * @returns {string}
 */
function timer(time) {
    return new Date(new Date(time) - 0 - new Date().getTimezoneOffset() * 60 * 1000).toJSON().replace('T', ' ').slice(0, -5);
}

export {
    ref, toRef, slotHook, isMP, isApp, extendsClassStyleEvents, mixedClass,
    showModal, timer
}