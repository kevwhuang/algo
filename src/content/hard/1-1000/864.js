// 864 - Shortest Path to Get All Keys

function shortestPathAllKeys(grid) {
    let Q = [], tgt = 0;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cur = M[r][c];
            if (cur === '@') Q.push([r, c, 0]);
            else if (cur >= 'a' && cur <= 'z') tgt = tgt << 1 | 1;
        }
    }
    let res = 1;
    const seen = new Set([`${Q[0][0]}-${Q[0][1]}-0`]);
    const D = [0, -1, 0, 1, 0];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const r = Q[i][0], c = Q[i][1];
            for (let j = 0; j < 4; j++) {
                const rr = r + D[j], cc = c + D[j + 1];
                if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
                const cur = M[rr][cc];
                if (cur === '#') continue;
                let mask = Q[i][2];
                if (cur >= 'a' && cur <= 'z') {
                    mask |= 1 << cur.charCodeAt() - 97;
                    if (mask === tgt) return res;
                } else if (cur >= 'A' && cur <= 'Z') {
                    if (!(mask & 1 << cur.charCodeAt() - 65)) continue;
                }
                const key = `${rr}-${cc}-${mask}`;
                if (!seen.has(key)) seen.add(key) && N.push([rr, cc, mask]);
            }
        }
        res++, Q = N;
    }
    return -1;
}
