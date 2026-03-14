// 749 - Contain Virus

function containVirus(isInfected) {
    function check(r, c) {
        seen = new Set(), N1 = new Set(), N2 = new Set();
        dfs(r, c);
        if (seen.size < max) return;
        max = seen.size, set3 = N1, set4 = N2, rr = r, cc = c;
    }
    function dfs(r, c) {
        if (M[r][c] !== tgt) return;
        M[r][c] = next;
        const key = n * r + c;
        for (let i = 0; i < 4; i++) {
            const dr = D[i][0], rr = r + dr, cc = c + D[i][1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            dfs(rr, cc);
            if (M[rr][cc] || (dr ? set1 : set2).has(key + D[i][3])) continue;
            if (next) seen.add(key + D[i][2]);
            if (next > 1) (dr ? N1 : N2).add(key + D[i][3]);
        }
    }
    const set1 = new Set(), set2 = new Set();
    const M = isInfected, m = M.length, n = M[0].length;
    const D = [[-1, 0, -n, -n], [1, 0, n, 0], [0, -1, -1, -1], [0, 1, 1, 0]];
    let tgt, next, max, seen, N1, N2, set3, set4, rr, cc;
    while (true) {
        tgt = 1, next = 2, max = 0;
        M.forEach((e, r) => e.forEach((f, c) => f && check(r, c)));
        if (max === 0) return set1.size + set2.size;
        tgt = 2, next = 0;
        dfs(rr, cc);
        set3.forEach(e => set1.add(e));
        set4.forEach(e => set2.add(e));
        next = 1, seen = new Set();
        M.forEach((e, r) => e.forEach((f, c) => f && dfs(r, c)));
        seen.forEach(e => M[e / n >> 0][e % n] = 1);
    }
}
