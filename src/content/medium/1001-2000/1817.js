// 1817 - Finding the Users Active Minutes

function findingUsersActiveMinutes(logs, k) {
    const map = new Map();
    for (let i = 0; i < logs.length; i++) {
        const id = logs[i][0];
        if (!map.has(id)) map.set(id, new Set());
        map.get(id).add(logs[i][1]);
    }
    const res = new Uint16Array(k);
    for (const e of map.values()) {
        res[e.size - 1]++;
    }
    return res;
}
