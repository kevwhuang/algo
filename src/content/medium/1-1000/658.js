// 658 - Find K Closest Elements

function findClosestElements(arr, k, x) {
    let l = 0, r = arr.length - k;
    while (l < r) {
        const m = l + r >> 1;
        if (arr[m] + arr[m + k] < x + x) l = m + 1;
        else r = m;
    }
    return arr.slice(l, l + k);
}
