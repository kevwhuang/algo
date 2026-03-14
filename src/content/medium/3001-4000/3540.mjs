// 3540 - Minimum Time to Visit All Houses

function minTotalTime(forward, backward, queries) {
    const ps1 = forward, ps2 = backward, n = ps1.length;
    let a = ps1[n - 1], b = ps2[0];
    for (let cur, acc = 0, i = 0; i < n; i++) {
        cur = ps1[i], ps1[i] = acc, acc += cur;
    }
    for (let cur, acc = 0, i = n - 1; ~i; i--) {
        cur = ps2[i], ps2[i] = acc, acc += cur;
    }
    a += ps1[n - 1], b += ps2[0];
    let res = 0, i = 0, j = 0;
    while (i < queries.length) {
        const k = queries[i++];
        const sum1 = ps1[k] - ps1[j] + (j > k ? a : 0);
        const sum2 = ps2[k] - ps2[j] + (j < k ? b : 0);
        res += Math.min(sum1, sum2), j = k;
    }
    return res;
}
