import {
    JtStr,
    FtStr
} from "./util_char";

// 繁体化
export function traditionalized(cc) {
    var str = '';
    for (var i = 0; i < cc.length; i++) {
        if (JtStr.includes(cc.charAt(i))) {
            str += FtStr.charAt(JtStr.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
}

// 简体化
export function simplized(cc) {
    var str = '';
    for (var i = 0; i < cc.length; i++) {
        if (FtStr.includes(cc.charAt(i))) {
            str += JtStr.charAt(FtStr.indexOf(cc.charAt(i)));
        } else {
            str += cc.charAt(i);
        }
    }
    return str;
}

// 防抖函数
// 防抖(Debounce) 指的是触发事件后n秒后才能执行函数，如果在n秒内触发了事件，则会重新计算执行时间。
export function debounce(func, delay) {
    let timeout; //定时器
    return function (...argument) {
        // 判断定时器是否存在，存在的话进行清除，重新进行定时器计数
        if (timeout) clearTimeout(timeout); //清除之前的事件
        timeout = setTimeout(() => {
            func.call(this, ...argument); //执行事件
        }, delay);
    }
}

// 节流--定时器版
// 节流(Throttle) 指的是连续触发事件但是在n秒中只执行一次函数。即不管你在指定时间内触发多少次函数，但是它只执行一次事件。(只有一次生效)
export function throttle(func, delay) {
    let timeout; //定义一个定时器标记
    return function (...argument) {
        // 判断是否存在定时器
        if (!timeout) {
            // 创建一个定时器
            timeout = setTimeout(() => {
                // delay时间间隔清空定时器
                clearTimeout(timeout);
                func.call(this, ...argument);
            }, delay)
        }
    }
}