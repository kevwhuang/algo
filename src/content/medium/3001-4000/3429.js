// 3429 - Paint House IV

function minCost(n, cost) {
    let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
    const nn = n / 2;
    for (let i = 0; i < nn; i++) {
        const left = cost[i], right = cost[n - i - 1];
        const aa = left[0] + right[1] + Math.min(c, d, e);
        const bb = left[0] + right[2] + Math.min(c, e, f);
        const cc = left[1] + right[0] + Math.min(a, b, f);
        const dd = left[1] + right[2] + Math.min(a, e, f);
        const ee = left[2] + right[0] + Math.min(a, b, d);
        const ff = left[2] + right[1] + Math.min(b, c, d);
        a = aa, b = bb, c = cc, d = dd, e = ee, f = ff;
    }
    return Math.min(a, b, c, d, e, f);
}
