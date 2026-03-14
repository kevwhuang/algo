// 854 - K-Similar Strings

function kSimilarity(s1, s2) {
    if (s1 === s2) return 0;
    let res = 1, Q = [s1];
    const seen = new Set(Q);
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const s = Q[i];
            let j = 0;
            while (s[j] === s2[j]) j++;
            const a = s2[j], b = s[j], left = s.slice(0, j);
            let k = j;
            while (++k < s1.length) {
                if (s[k] === s2[k] || s[k] !== a) continue;
                const mid = s.slice(j + 1, k), right = s.slice(k + 1);
                const next = left + a + mid + b + right;
                if (next === s2) return res;
                if (seen.has(next)) continue;
                seen.add(next);
                N.push(next);
            }
        }
        res++, Q = N;
    }
}
