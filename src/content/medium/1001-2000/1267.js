// 1267 - Count Servers That Communicate

function countServers(grid) {
    const m = grid.length, n = grid[0].length;
    const seenR = new Map(), seenC = new Map();
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            seenR.set(r, seenR.get(r) + 1 || 1);
            seenC.set(c, seenC.get(c) + 1 || 1);
        }
    }
    let servers = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            if (seenR.get(r) > 1 || seenC.get(c) > 1) servers++;
        }
    }
    return servers;
}
