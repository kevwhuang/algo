// 3325 - Count Substrings With K-Frequency Characters I

function numberOfSubstrings(s, k) {
    let res = 0;
    const B = new Array(26).fill(0), n = s.length;
    for (let l = 0, r = 0; r < n; r++) {
        const code = s.charCodeAt(r) - 97;
        B[code]++;
        while (B[code] >= k) {
            res += n - r;
            B[s.charCodeAt(l++) - 97]--;
        }
    }
    return res;
}
