// 2141 - Maximum Running Time of N Computers

function maxRunTime(n, batteries) {
    let l = 1, r = Math.floor(batteries.reduce((s, e) => s + e) / n);
    while (l <= r) {
        let sum = 0;
        const m = Math.floor((l + r) / 2);
        for (let i = 0; i < batteries.length; i++) {
            sum += Math.min(batteries[i], m);
        }
        if (sum >= m * n) l = m + 1;
        else r = m - 1;
    }
    return r;
}
