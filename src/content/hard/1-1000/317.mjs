// 317 - Shortest Distance From All Buildings

function shortestDistance(grid) {
    let res, cur = 1;
    const M = grid, m = M.length, n = M[0].length;
    const C = Array.from({ length: m }, () => new Uint16Array(n));
    const D = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== 1) continue;
            res = Infinity, cur--;
            let acc = 1, Q = [[r, c]];
            while (Q.length) {
                const N = [];
                for (let i = 0; i < Q.length; i++) {
                    const r = Q[i][0], c = Q[i][1];
                    for (let j = 0; j < 4; j++) {
                        const rr = r + D[j], cc = c + D[j + 1];
                        if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
                        if (M[rr][cc] !== cur) continue;
                        M[rr][cc]--, C[rr][cc] += acc;
                        res = Math.min(C[rr][cc], res);
                        N.push([rr, cc]);
                    }
                }
                acc++, Q = N;
            }
        }
    }
    return res === Infinity ? -1 : res;
}
