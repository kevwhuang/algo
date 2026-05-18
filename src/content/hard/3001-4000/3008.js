// 3008. Find Beautiful Indices in the Given Array II

function beautifulIndices(s, a, b, k) {
    function fn(s, t) {
        lps.fill(0, 0, s.length);
        let l = 0, r = 1;
        while (r < s.length) {
            if (s[l] === s[r]) lps[r++] = ++l;
            else if (l) l = lps[l - 1];
            else r++;
        }
        const A = [];
        for (let i = 0, j = 0; j < t.length; j++) {
            while (i && s[i] !== t[j]) i = lps[i - 1];
            if (s[i] === t[j]) i++;
            if (i === s.length) A[A.length] = j - i + 1, i = lps[i - 1];
        }
        return A;
    }
    if (!this.lps) lps = new Uint32Array(5e5);
    const res = [], A1 = fn(a, s), A2 = fn(b, s);
    for (let i = 0; i < A1.length; i++) {
        const tgt = A1[i];
        let l = 0, r = A2.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (A2[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        if (l < A2.length && A2[l] - tgt <= k) res.push(tgt);
        else if (l && tgt - A2[l - 1] <= k) res.push(tgt);
    }
    return res;
}
