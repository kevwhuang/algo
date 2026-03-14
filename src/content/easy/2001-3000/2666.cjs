// 2666 - Allow One Function Call

function once(fn) {
    let flag;
    return (...args) => flag ? undefined : (flag = !flag) && fn(...args);
}
