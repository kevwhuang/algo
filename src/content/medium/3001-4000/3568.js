// 3568 - Minimum Moves to Clean the Classroom

function minMoves(classroom, energy) {
    const map = new Map(), M = classroom, m = M.length, n = M[0].length;
    let Q = [], acc = 0, tgt = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 'S') Q.push([r, c, 0, energy]);
            if (M[r][c] !== 'L') continue;
            map.set(n * r + c, 1 << acc);
            tgt |= 1 << acc++;
        }
    }
    if (acc === 0) return 0;
    let res = 1;
    const seen = Array.from({ length: m * n }, () => new Uint8Array(tgt + 1));
    seen[n * Q[0][0] + Q[0][1]][0] = energy;
    const D = [0, -1, 0, 1, 0];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const r = Q[i][0], c = Q[i][1];
            for (let j = 0; j < 4; j++) {
                const rr = r + D[j], cc = c + D[j + 1], key = n * rr + cc;
                if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
                const cur = M[rr][cc];
                if (cur === 'X') continue;
                let mask = Q[i][2], next = Q[i][3] - 1;
                if (cur === 'L' && !(mask & map.get(key))) {
                    mask |= map.get(key);
                    if (mask === tgt) return res;
                }
                if (cur === 'R') next = energy;
                if (next <= seen[key][mask]) continue;
                seen[key][mask] = next;
                N.push([rr, cc, mask, next]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
