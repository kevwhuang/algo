// 1520 - Maximum Number of Non-Overlapping Substrings

function maxNumOfSubstrings(s) {
    const fn = i => s.charCodeAt(i) - 97;
    const A1 = new Array(26), A2 = new Uint32Array(26);
    for (let i = 0; i < s.length; i++) {
        A1[fn(i)] ??= i, A2[fn(i)] = i;
    }
    const M = [];
    for (let l = 0; l < s.length; l++) {
        if (l > A1[fn(l)]) continue;
        let m = l, r = A2[fn(l)];
        while (++m < r) r = l <= A1[fn(m)] ? Math.max(A2[fn(m)], r) : -1;
        if (~r) M.push([l, r]);
    }
    M.sort((a, b) => a[1] - b[1]);
    const res = [];
    for (let prev = -1, i = 0; i < M.length; i++) {
        const l = M[i][0], r = M[i][1];
        if (l < prev) continue;
        res.push(s.slice(l, r + 1));
        prev = r;
    }
    return res;
}
