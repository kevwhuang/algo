// 1638 - Count Substrings That Differ by One Character

function countSubstrings(s, t) {
    let res = 0;
    const m = s.length, n = t.length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let acc = 0, ii = i, jj = j;
            while (acc < 2 && ii < m && jj < n) {
                if (s[ii++] !== t[jj++]) acc++;
                if (acc === 1) res++;
            }
        }
    }
    return res;
}
