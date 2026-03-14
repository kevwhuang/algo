// 2768 - Number of Black Blocks

function countBlackBlocks(m, n, coordinates) {
    const update = key => map.set(key, (map.get(key) ?? 0) + 1);
    const map = new Map();
    for (let i = 0; i < coordinates.length; i++) {
        const r = coordinates[i][0], c = coordinates[i][1];
        if (r && c) update((r - 1) * n + c - 1);
        if (r && c + 1 < n) update((r - 1) * n + c);
        if (r + 1 < m && c) update(r * n + c - 1);
        if (r + 1 < m && c + 1 < n) update(r * n + c);
    }
    const res = [, 0, 0, 0, 0];
    for (const count of map.values()) {
        res[count]++;
    }
    res[0] = (m - 1) * (n - 1) - res[1] - res[2] - res[3] - res[4];
    return res;
}
