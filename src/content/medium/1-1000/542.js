// 542 - 01 Matrix

function updateMatrix(mat) {
    let queue = [];
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c]) mat[r][c] = Infinity;
            else queue.push([r, c]);
        }
    }
    const dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            const nextVal = mat[r][c] + 1;
            for (let j = 0; j < 4; j++) {
                const rr = r + dr[j], cc = c + dc[j];
                if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
                if (mat[rr][cc] <= nextVal) continue;
                mat[rr][cc] = nextVal;
                nextQueue.push([rr, cc]);
            }
        }
        queue = nextQueue;
    }
    return mat;
}
