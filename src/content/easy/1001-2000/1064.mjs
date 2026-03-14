// 1064 - Fixed Point

function fixedPoint(arr) {
    let res = -1, l = 0, r = arr.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (arr[m] === m) res = m;
        if (arr[m] < m) l = m + 1;
        else r = m - 1;
    }
    return res;
}
