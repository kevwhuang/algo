// 3814 - Maximum Capacity Within Budget

function maxCapacity(costs, capacity, budget) {
    const n = costs.length, M = new Array(n);
    for (let i = 0; i < n; i++) {
        M[i] = [costs[i], capacity[i], capacity[i]];
    }
    M.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    for (let i = 1; i < n; i++) {
        M[i][2] = Math.max(M[i - 1][2], M[i][2]);
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        const tgt = budget - M[i][0];
        if (tgt <= 0) break;
        let l = 0, r = i - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (M[m][0] < tgt) l = m + 1;
            else r = m - 1;
        }
        res = Math.max(M[i][1] + (~r ? M[r][2] : 0), res);
    }
    return res;
}
