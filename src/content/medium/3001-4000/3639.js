// 3639 - Minimum Time to Activate String

function minTime(s, order, k) {
    if (!this.arr) arr = new Uint32Array(100000);
    const n = s.length;
    let i = -1, l = 0, r = n - 1;
    while (++i < n) arr[order[i]] = i;
    while (l <= r) {
        const m = l + r >> 1;
        let acc = n * (n + 1) / 2, ll = -1, rr = -1;
        while (++rr < n) {
            if (arr[rr] <= m) ll = rr;
            else acc -= rr - ll;
        }
        if (acc < k) l = m + 1;
        else r = m - 1;
    }
    return l < n ? l : -1;
}
