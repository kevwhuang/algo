// 994 - Rotting Oranges

function orangesRotting(grid) {
    let Q = [], acc = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) Q.push([r, c]);
            else if (grid[r][c] === 1) acc++;
        }
    }
    let res = 0;
    const D = [0, -1, 0, 1, 0];
    while (Q.length && acc && ++res) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let j = 0; j < 4; j++) {
                const r = Q[i][0] + D[j], c = Q[i][1] + D[j + 1];
                if (r === -1 || r === m || c === -1 || c === n) continue;
                if (grid[r][c] !== 1) continue;
                grid[r][c] = 2, acc--;
                N.push([r, c]);
            }
        }
        Q = N;
    }
    return acc ? -1 : res;
}
