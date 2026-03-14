// 1293 - Shortest Path in a Grid With Obstacles Elimination

function shortestPath(grid, k) {
    const m = grid.length, n = grid[0].length;
    if (m === 1 && n === 1) return 0;
    let res = 1, Q = [[0, 0, k]];
    const seen = Array.from({ length: m }, () => new Int16Array(n).fill(-1));
    const D = [0, -1, 0, 1, 0];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const r = Q[i][0], c = Q[i][1], tgt = Q[i][2];
            for (let j = 0; j < 4; j++) {
                const rr = r + D[j], cc = c + D[j + 1];
                if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
                if (seen[rr][cc] >= tgt) continue;
                if (rr === m - 1 && cc === n - 1) return res;
                const next = grid[rr][cc] ? tgt - 1 : tgt;
                seen[rr][cc] = next;
                N.push([rr, cc, next]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
