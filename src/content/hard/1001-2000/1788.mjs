// 1788 - Maximize the Beauty of the Garden

function maximumBeauty(flowers) {
    let res = -Infinity;
    const map = new Map();
    for (let acc = 0, i = 0; i < flowers.length; i++) {
        const a = flowers[i];
        res = Math.max(2 * a + acc - (map.get(a) ?? Infinity), res);
        acc += Math.max(a, 0);
        if (!map.has(a)) map.set(a, acc);
    }
    return res;
}
