// 587. Erect the Fence

function outerTrees(trees) {
    function fn(a, b, c) {
        const prod1 = (b[0] - a[0]) * (c[1] - a[1]);
        const prod2 = (b[1] - a[1]) * (c[0] - a[0]);
        return prod1 - prod2;
    }
    if (this.seen === undefined) {
        seen = Array.from({ length: 101 }, () => new Uint8Array(101));
    }
    for (let x = 0; x < 101; x++) {
        seen[x].fill(0);
    }
    const M = trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const S = [];
    for (let i = 0; i < M.length; i++) {
        while (S.length >= 2 && fn(S.at(-2), S.at(-1), M[i]) < 0) S.pop();
        S.push(M[i]);
    }
    while (S.length) seen[S.at(-1)[0]][S.pop()[1]] = 1;
    for (let i = M.length - 1; ~i; i--) {
        while (S.length >= 2 && fn(S.at(-2), S.at(-1), M[i]) < 0) S.pop();
        S.push(M[i]);
    }
    while (S.length) seen[S.at(-1)[0]][S.pop()[1]] = 1;
    const res = [];
    for (let x = 0; x < 101; x++) {
        for (let y = 0; y < 101; y++) {
            if (seen[x][y]) res.push([x, y]);
        }
    }
    return res;
}
