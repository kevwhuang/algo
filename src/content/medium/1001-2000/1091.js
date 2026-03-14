// 1091 - Shortest Path in Binary Matrix

function shortestPathBinaryMatrix(grid) {
    const M = grid, n = M.length, nn = n - 1;
    if (n === 1 && M[0][0] === 0) return 1;
    if (M[0][0] || M[nn][nn]) return -1;
    let res = 2, Q = [[0, 0]];
    const D1 = [-1, -1, -1, 0, 0, 1, 1, 1], D2 = [-1, 0, 1, -1, 1, -1, 0, 1];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const r = Q[i][0], c = Q[i][1];
            for (let j = 0; j < 8; j++) {
                const rr = r + D1[j], cc = c + D2[j];
                if (rr === nn && cc === nn) return res;
                if (rr === -1 || rr === n || cc === -1 || cc === n) continue;
                if (M[rr][cc]) continue;
                M[rr][cc] = 1;
                N.push([rr, cc]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
