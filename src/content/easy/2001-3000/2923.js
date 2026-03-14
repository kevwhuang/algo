// 2923 - Find Champion I

function findChampion(grid) {
    const set = new Set(), n = grid.length;
    for (let i = 0; i < n; i++) {
        set.add(i);
    }
    for (let r = 0; r < n; r++) {
        if (!set.has(r)) continue;
        for (let c = 0; c < n; c++) {
            if (r === c) continue;
            if (grid[r][c]) set.delete(c);
        }
    }
    return set.keys().next().value;
}
