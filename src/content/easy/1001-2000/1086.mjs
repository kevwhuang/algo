// 1086 - High Five

function highFive(items) {
    const map = new Map();
    for (let i = 0; i < items.length; i++) {
        const key = items[i][0];
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(items[i][1]);
    }
    const res = [];
    for (const e of map) {
        const arr = e[1].sort((a, b) => b - a);
        const sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
        res.push([e[0], sum / 5 >> 0]);
    }
    return res.sort((a, b) => a[0] - b[0]);
}
