// 3932. Count Kth Roots in a Range

function countKthRoots(l, r, k) {
    if (k === 1) return r - l + 1;
    let res = 0, a = -1;
    while (++a ** k <= r) if (a ** k >= l) res++;
    return res;
}
