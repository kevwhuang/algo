// 2634 - Filter Elements From Array

function filter(arr, fn) {
    const res = [];
    arr.forEach((e, i) => fn(e, i) && res.push(e));
    return res;
}
