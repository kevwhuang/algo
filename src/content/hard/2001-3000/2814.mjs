// 2814 - Minimum Time Takes to Reach Destination Without Drowning

function minimumSeconds(land) {
    function check(Q, N, flag) {
        for (let i = 0; i < 4; i++) {
            const dr = D[i], dc = D[i + 1];
            for (let j = 0; j < Q.length; j++) {
                const r = Q[j][0] + dr, c = Q[j][1] + dc;
                if (r === -1 || r === m || c === -1 || c === n) continue;
                if (flag && M[r][c] === 'D') return true;
                if (M[r][c] !== '.') continue;
                M[r][c] = '*';
                N.push([r, c]);
            }
        }
    }
    const M = land, m = M.length, n = M[0].length;
    let Q1 = [], Q2 = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === '*') Q1.push([r, c]);
            else if (M[r][c] === 'S') Q2.push([r, c]);
        }
    }
    let res = 1;
    const D = [0, -1, 0, 1, 0];
    while (Q2.length) {
        const N1 = [], N2 = [];
        check(Q1, N1);
        if (check(Q2, N2, true)) return res;
        res++, Q1 = N1, Q2 = N2;
    }
    return -1;
}
