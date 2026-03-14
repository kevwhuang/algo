// 2014 - Longest Subsequence Repeated K Times

function longestSubsequenceRepeatedK(s, k) {
    function dfs(s) {
        for (let i = 0; i < A.length; i++) {
            const t = s + A[i], n = t.length;
            let acc = 0, ii = 0, jj = 0;
            while (acc < k && ii < m) {
                const j = t.charCodeAt(jj) - 97;
                if (M[ii][j] === m) break;
                ii = M[ii][j] + 1;
                if (++jj === n) acc++, jj = 0;
            }
            if (acc < k) continue;
            if (n > res.length) res = t;
            dfs(t);
        }
    }
    if (!this.M) M = Array.from({ length: 2001 }, () => new Uint16Array(26));
    const B = new Uint16Array(26), m = s.length;
    M[m].fill(m);
    for (let i = m - 1; ~i; i--) {
        let j = -1;
        while (++j < 26) M[i][j] = M[i + 1][j];
        j = s.charCodeAt(i) - 97, B[j]++, M[i][j] = i;
    }
    const A = [];
    B.forEach((e, i) => e >= k && A.unshift(String.fromCharCode(i + 97)));
    let res = '';
    dfs('');
    return res;
}
