// 668 - Kth Smallest Number in Multiplication Table

function findKthNumber(m, n, k) {
    let l = 1, r = m * n;
    while (l <= r) {
        let acc = 0, rr = 0;
        const mm = l + r >> 1;
        while (++rr <= m) acc += Math.min(mm / rr >> 0, n);
        if (acc < k) l = mm + 1;
        else r = mm - 1;
    }
    return l;
}
