// 3728 - Stable Subarrays With Equal Boundary and Interior Sum

function countStableSubarrays(capacity) {
    const n = capacity.length, map = new Map();
    const ps = new Array(n + 1).fill(0, 0, 1);
    capacity.forEach((e, i) => ps[i + 1] = ps[i] + e);
    let res = 0, i = 1;
    while (++i < n) {
        const a = capacity[i - 2], b = capacity[i];
        if (!map.has(a)) map.set(a, new Map());
        map.get(a).set(ps[i - 2], (map.get(a).get(ps[i - 2]) ?? 0) + 1);
        res += map.get(b)?.get(ps[i] - b - b) ?? 0;
    }
    return res;
}
