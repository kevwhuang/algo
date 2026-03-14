// 2100 - Find Good Days to Rob the Bank

function goodDaysToRobBank(security, time) {
    const n = security.length;
    if (2 * time >= n) return [];
    if (time === 0) return Array.from({ length: n }, (_, i) => i);
    const prefix = new Uint32Array(n);
    prefix[0] = 1;
    for (let i = 1, len = 1; i < n; i++) {
        if (security[i - 1] < security[i]) len = 0;
        prefix[i] = ++len;
    }
    const suffix = new Uint32Array(n);
    suffix[n - 1] = 1;
    for (let i = n - 2, len = 1; ~i; i--) {
        if (security[i] > security[i + 1]) len = 0;
        suffix[i] = ++len;
    }
    const indices = [], lim = n - time;
    for (let i = time; i < lim; i++) {
        if (prefix[i] > time && suffix[i] > time) indices.push(i);
    }
    return indices;
}
