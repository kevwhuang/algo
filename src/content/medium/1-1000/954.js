// 954 - Array of Doubled Pairs

function canReorderDoubled(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    map = new Map([...map].sort((a, b) => a[0] - b[0]));
    if (map.has(0)) {
        if (map.get(0) % 2) return false;
        map.delete(0);
    }
    for (const n1 of map.keys()) {
        const f1 = map.get(n1);
        if (f1 === 0) continue;
        const n2 = n1 < 0 ? n1 / 2 : n1 * 2;
        if (!map.has(n2)) return false;
        const f2 = map.get(n2) - f1;
        if (f2 < 0) return false;
        map.set(n2, f2);
    }
    return true;
}
