// 952 - Largest Component Size by Common Factor

function largestComponentSize(nums) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const n = nums.length;
    const uf = Array.from({ length: n }, (_, i) => i);
    const map = new Map();
    for (let i = 0; i < n; i++) {
        let cur = nums[i], k = 2;
        while (cur >= k * k) {
            if (cur % k && k++) continue;
            while (cur % k === 0) cur /= k;
            if (!map.has(k)) map.set(k, i);
            uf[find(map.get(k))] = i;
        }
        if (cur === 1) continue;
        if (!map.has(cur)) map.set(cur, i);
        uf[find(map.get(cur))] = i;
    }
    let res = 1;
    const B = new Map();
    for (let i = 0; i < n; i++) {
        B.set(find(i), (B.get(uf[i]) ?? 0) + 1);
        res = Math.max(B.get(uf[i]), res);
    }
    return res;
}
