// 3071 - Minimum Operations to Write the Letter Y on a Grid

function minimumOperationsToWriteY(grid) {
    const check = (r, c) => r < mid ? r === c || r === n - c - 1 : c === mid;
    const freqs1 = [0, 0, 0], freqs2 = [0, 0, 0];
    const n = grid.length, mid = n / 2 >> 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            (check(r, c) ? freqs1 : freqs2)[grid[r][c]]++;
        }
    }
    const cells = freqs1[0] + freqs1[1] + freqs1[2];
    const a = cells - freqs1[0] + freqs2[0] + Math.min(freqs2[1], freqs2[2]);
    const b = cells - freqs1[1] + freqs2[1] + Math.min(freqs2[0], freqs2[2]);
    const c = cells - freqs1[2] + freqs2[2] + Math.min(freqs2[0], freqs2[1]);
    return Math.min(a, b, c);
}
