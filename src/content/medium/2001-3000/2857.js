// 2857 - Count Pairs of Points With Distance K

function countPairs(coordinates, k) {
    let pairs = 0;
    const map = new Map();
    for (let i = 0; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        for (let n = 0; n <= k; n++) {
            pairs += map.get(x ^ n)?.get(y ^ (k - n)) ?? 0;
        }
        if (!map.has(x)) map.set(x, new Map());
        map.get(x).set(y, (map.get(x).get(y) ?? 0) + 1);
    }
    return pairs;
}
