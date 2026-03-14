// 3329 - Count Substrings With K-Frequency Characters II

function numberOfSubstrings(s, k) {
    let res = 0;
    const B = new Array(26).fill(0), n = s.length;
    for (let l = 0, r = 0; r < n; r++) {
        const key = s.charCodeAt(r) - 97;
        B[key]++;
        while (B[key] >= k) {
            res += n - r;
            B[s.charCodeAt(l++) - 97]--;
        }
    }
    return res;
}
