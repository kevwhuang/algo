// 403 - Frog Jump

function canCross(stones) {
    if (stones[1] !== 1) return false;
    const map = new Map(), n = stones.length;
    for (let i = 1; i < n; i++) {
        map.set(stones[i], new Set());
    }
    map.get(1).add(1);
    const set = map.get(stones[n - 1]);
    for (let i = 1; i < n; i++) {
        const cur = stones[i];
        for (const a of map.get(cur)) {
            const b = a + 1, c = a - 1;
            if (map.has(cur + a)) map.get(cur + a).add(a);
            if (map.has(cur + b)) map.get(cur + b).add(b);
            if (c && map.has(cur + c)) map.get(cur + c).add(c);
        }
        if (set.size) return true;
    }
    return false;
}
