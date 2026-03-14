// 1210 - Minimum Moves to Reach Target With Rotations

function minimumMoves(grid) {
    function check(r1, c1, r2, c2) {
        return r1 === r2 && r1 === c2 && r1 === n && c1 === n - 1;
    }
    function fn(r1, c1, r2, c2) {
        const key = `${r1}-${c1}-${r2}-${c2}`;
        if (seen.has(key)) return;
        seen.add(key);
        N.push([r1, c1, r2, c2]);
    }
    let res = 1, Q = [[0, 0, 0, 1]], N;
    const seen = new Set(), n = grid.length - 1;
    while (Q.length) {
        N = [];
        for (let i = 0; i < Q.length; i++) {
            const r1 = Q[i][0], c1 = Q[i][1], r2 = Q[i][2], c2 = Q[i][3];
            L: if (r1 < n && r2 < n) {
                if (check(r1 + 1, c1, r2 + 1, c2)) return res;
                if (grid[r1 + 1][c1] || grid[r2 + 1][c2]) break L;
                fn(r1 + 1, c1, r2 + 1, c2);
            }
            L: if (c1 < n && c2 < n) {
                if (check(r1, c1 + 1, r2, c2 + 1)) return res;
                if (grid[r1][c1 + 1] || grid[r2][c2 + 1]) break L;
                fn(r1, c1 + 1, r2, c2 + 1);
            }
            L: if (r1 + 1 === r2 && c1 < n) {
                if (grid[r1][c1 + 1] || grid[r1 + 1][c1 + 1]) break L;
                fn(r1, c1, r1, c1 + 1);
            }
            L: if (r1 < n && c1 + 1 === c2) {
                if (grid[r1 + 1][c1] || grid[r1 + 1][c1 + 1]) break L;
                fn(r1, c1, r1 + 1, c1);
            }
        }
        res++, Q = N;
    }
    return -1;
}
