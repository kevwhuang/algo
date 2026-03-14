// 3799 - Word Squares II

function wordSquares(words) {
    const res = [], A = words, n = A.sort().length;
    for (let i = 0; i < n; i++) {
        const s = A[i];
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            const ss = A[j];
            if (ss[0] !== s[0]) continue;
            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;
                const t = A[k];
                if (t[0] !== s[3]) continue;
                for (let l = 0; l < n; l++) {
                    if (l === i || l === j || l === k) continue;
                    const tt = A[l];
                    if (tt[0] !== ss[3] || tt[3] !== t[3]) continue;
                    res.push([s, ss, t, tt]);
                }
            }
        }
    }
    return res;
}
