// 296 - Best Meeting Point

function minTotalDistance(grid) {
    let acc = 0;
    grid.forEach(e => e.forEach(f => f && acc++));
    const arr1 = new Uint8Array(acc);
    const arr2 = new Uint8Array(acc);
    const m = grid.length, n = grid[0].length;
    for (let i = 0, r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c]) arr1[i] = r, arr2[i++] = c;
        }
    }
    arr2.sort();
    let res = 0;
    const a = arr1[acc >> 1], b = arr2[acc >> 1];
    arr1.forEach(e => res += Math.abs(e - a));
    arr2.forEach(e => res += Math.abs(e - b));
    return res;
}
