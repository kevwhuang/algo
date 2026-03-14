// 286 - Walls and Gates

function wallsAndGates(rooms) {
    let Q = [];
    const m = rooms.length, n = rooms[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rooms[r][c] === 0) Q.push([r, c]);
        }
    }
    let acc = 0;
    const D = [0, -1, 0, 1, 0];
    while (Q.length && ++acc) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let j = 0; j < 4; j++) {
                const r = Q[i][0] + D[j], c = Q[i][1] + D[j + 1];
                if (r === -1 || r === m || c === -1 || c === n) continue;
                if (rooms[r][c] <= acc) continue;
                rooms[r][c] = acc;
                N.push([r, c]);
            }
        }
        Q = N;
    }
}
