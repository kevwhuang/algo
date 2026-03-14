// 3864 - Minimum Cost to Partition a Binary String

function minCost(s, encCost, flatCost) {
    function recurse(l, r) {
        const prod = encCost * (r - l + 1) * (pre[r + 1] - pre[l]);
        if (prod === 0) return flatCost;
        if ((r - l + 1) % 2) return prod;
        const m = l + r >> 1;
        return Math.min(recurse(l, m) + recurse(m + 1, r), prod);
    }
    const pre = new Uint32Array(s.length + 1);
    for (let i = 0; i < s.length; i++) {
        pre[i + 1] = pre[i] + (s[i] === '1');
    }
    return recurse(0, s.length - 1);
}
