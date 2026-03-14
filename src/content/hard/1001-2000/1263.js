// 1263 - Minimum Moves to Move a Box to Their Target Location

function minPushBox(grid) {
    function check(Q, k) {
        seen2.fill(0, 0, nn)[Q[0]] = seen2[k] = 1;
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const j = Q[i], a = j - n, b = j + n, c = j - 1, d = j + 1;
                if (a >= 0 && A[a] && !seen2[a] && N.push(a)) seen2[a] = 1;
                if (b < nn && A[b] && !seen2[b] && N.push(b)) seen2[b] = 1;
                if (j % n && A[c] && !seen2[c] && N.push(c)) seen2[c] = 1;
                if (d % n && A[d] && !seen2[d] && N.push(d)) seen2[d] = 1;
            }
            Q = N;
        }
        const a = k >= n && seen2[k - n], b = k + n < nn && seen2[k + n];
        const c = k % n && seen2[k - 1], d = (k + 1) % n && seen2[k + 1];
        return 8 * a | 4 * b | 2 * c | d;
    }
    if (!this.A) A = new Uint8Array(400);
    if (!this.seen1) seen1 = new Uint8Array(400);
    if (!this.seen2) seen2 = new Uint8Array(400);
    let res = 1, Q1 = [], Q2 = [], tgt;
    const n = grid[0].length, nn = n * grid.length;
    for (let i = 0; i < nn; i++) {
        const s = grid[i / n | 0][i % n];
        A[i] = s !== '#', seen1[i] = 0;
        if (s === 'S') Q1.push(i);
        else if (s === 'B') Q2.push(i);
        else if (s === 'T') tgt = i;
    }
    while (Q1.length) {
        const N1 = [], N2 = [];
        for (let mask, i = 0; i < Q1.length; i++) {
            const j = Q2[i], a = j - n, b = j + n, c = j - 1, d = j + 1;
            seen1[j] |= mask = ~seen1[j] & check([Q1[i]], j);
            if (mask & 4 && a === tgt) return res;
            if (mask & 4 && a >= 0 && A[a]) N1.push(j), N2.push(a);
            if (mask & 8 && b === tgt) return res;
            if (mask & 8 && b < nn && A[b]) N1.push(j), N2.push(b);
            if (mask & 1 && j % n && c === tgt) return res;
            if (mask & 1 && j % n && A[c]) N1.push(j), N2.push(c);
            if (mask & 2 && d % n && d === tgt) return res;
            if (mask & 2 && d % n && A[d]) N1.push(j), N2.push(d);
        }
        res++, Q1 = N1, Q2 = N2;
    }
    return -1;
}
