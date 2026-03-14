// 2904 - Shortest and Lexicographically Smallest Beautiful String

function shortestBeautifulSubstring(s, k) {
    let res;
    const n = s.length, lim = n - k + 1;
    for (let i = 0; i < lim; i++) {
        for (let j = i, ones = 0; j < n; j++) {
            if (s[j] === '1') ones++;
            if (ones !== k) continue;
            const len = j - i + 1;
            if (res && len > res.length) break;
            const slice = s.slice(i, j + 1);
            if (!res || len < res.length || slice < res) res = slice;
            break;
        }
    }
    return res ?? '';
}
