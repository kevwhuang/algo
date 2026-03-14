// 1300 - Sum of Mutated Array Closest to Target

function findBestValue(arr, target) {
    let res = 0, min = Infinity, l = 0, r = Math.max(...arr);
    while (l <= r) {
        const m = l + r >> 1;
        const sum = arr.reduce((s, e) => s + Math.min(e, m), 0);
        if (sum < target) l = m + 1;
        else r = m - 1;
        const abs = Math.abs(sum - target);
        if (abs > min) continue;
        if (abs === min && m > res) continue;
        res = m;
        min = abs;
    }
    return res;
}
