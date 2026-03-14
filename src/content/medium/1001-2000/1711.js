// 1711 - Count Good Meals

function countPairs(deliciousness) {
    const map = new Map();
    let max = 0;
    for (let i = 0; i < deliciousness.length; i++) {
        const cur = deliciousness[i];
        map.set(cur, (map.get(cur) ?? 0) + 1);
        max = Math.max(cur, max);
    }
    let meals = 0;
    const zeros = map.get(0) ?? 0;
    map.delete(0);
    const bound = Math.min(20, (Math.log2(max) >> 0) + 1);
    const mod = 1e9 + 7;
    const powers = [
        null, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096,
        8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576,
    ];
    for (const cur of map.keys()) {
        const count = map.get(cur);
        map.delete(cur);
        let exp = (Math.log2(cur) >> 0) + 1;
        if (Number.isInteger(Math.log2(cur))) {
            meals += count * (zeros + (count - 1) / 2);
            meals %= mod;
            exp++;
        }
        while (exp <= bound) {
            const diff = powers[exp++] - cur;
            if (!map.has(diff)) continue;
            meals += count * map.get(diff);
            meals %= mod;
        }
    }
    return meals;
}
