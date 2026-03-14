// 1062 - Longest Repeating Substring

function longestRepeatingSubstring(s) {
    function init() {
        dict = new Uint32Array(1999);
        let k = 1, i = 0;
        while (i < 1999) dict[i++] = k, k = 29 * k % mod;
    }
    const key = i => s.charCodeAt(i) - 97;
    const n = s.length, mod = 1000000007;
    if (this.dict === undefined) init();
    let l = 1, r = n - 1;
    while (l <= r) {
        let hash = 0, i = 0;
        const set = new Set(), m = (l + r >> 1) - 1, k = dict[m];
        while (i < m) hash = (hash + dict[m - i] * key(i++)) % mod;
        while (i < n) {
            if (set.has(hash += key(i)) && (hash = -1)) break;
            set.add(hash);
            hash = 29 * (hash + mod - k * key(i++ - m) % mod) % mod;
        }
        hash < 0 ? l = m + 2 : r = m;
    }
    return r;
}
