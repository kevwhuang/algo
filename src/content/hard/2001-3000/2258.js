// 2258 - Escape the Spreading Fire

function maximumMinutes(grid) {
    function check(Q, acc, flag) {
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const r = Q[i][0], c = Q[i][1];
                for (let j = 0; j < 4; j++) {
                    const rr = r + D[j], cc = c + D[j + 1];
                    if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
                    if (grid[rr][cc]) continue;
                    if (flag) {
                        if (M[rr][cc] < 50000) continue;
                        M[rr][cc] = acc;
                        N.push([rr, cc]);
                    } else {
                        if (seen[rr][cc]) continue;
                        seen[rr][cc] = 1;
                        if (M[rr][cc] < acc) continue;
                        if (M[rr][cc] > acc) N.push([rr, cc]);
                        if (rr === mm && cc === nn) return true;
                    }
                }
            }
            acc++, Q = N;
        }
    }
    const m = grid.length, n = grid[0].length, mm = m - 1, nn = n - 1;
    const M = Array.from({ length: m }, () => new Uint16Array(n).fill(50000));
    const Q = [], D = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            M[r][c] = 0;
            Q.push([r, c]);
        }
    }
    check(Q, 1, true);
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    let l = 0, r = m * n >> 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (check([[0, 0]], m + 1)) l = m + 1;
        else r = m - 1;
        if (M[mm][nn] === 50000) return l === m + 1 ? 1e9 : -1;
        seen.forEach(e => e.fill(0));
        seen[0][0] = 1;
    }
    return r;
}
