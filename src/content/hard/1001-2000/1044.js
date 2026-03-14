// 1044 - Longest Duplicate Substring

function longestDupSubstring(s) {
    function init() {
        dict = new Array(29999);
        let k = 1, i = 0;
        while (i < 29999) dict[i++] = k, k = 29 * k % mod;
    }
    const fn = i => s.charCodeAt(i) - 97;
    const n = s.length, mod = 99999999977;
    if (this.dict === undefined) init();
    let left, right, l = 1, r = n - 1;
    while (l <= r) {
        let hash = 0, i = 0;
        const set = new Set(), m = (l + r >> 1) - 1, k = dict[m];
        while (i < m) hash = (hash + dict[m - i] * fn(i++)) % mod;
        while (i < n) {
            hash += fn(i);
            if (set.has(hash)) left = i - m, right = i;
            if (set.has(hash)) break;
            set.add(hash);
            hash = 29 * (hash + mod - k * fn(i++ - m) % mod) % mod;
        }
        if (right - left === m) l = m + 2;
        else r = m;
    }
    return s.slice(left, right + 1);
}
