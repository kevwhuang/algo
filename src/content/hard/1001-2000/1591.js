// 1591 - Strange Printer II

function isPrintable(targetGrid) {
    let tgt = 0;
    const A1 = new Uint8Array(61).fill(100);
    const A2 = new Uint8Array(61);
    const A3 = new Uint8Array(61).fill(100);
    const A4 = new Uint8Array(61);
    const M = targetGrid, m = M.length, n = M[0].length;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            const a = M[x][y];
            if (A1[a] === 100) tgt++;
            A1[a] = Math.min(x, A1[a]);
            A2[a] = Math.max(x, A2[a]);
            A3[a] = Math.min(y, A3[a]);
            A4[a] = Math.max(y, A4[a]);
        }
    }
    let acc = 0;
    const seen = new Uint8Array(61);
    while (acc < tgt) {
        const cur = acc;
        for (let i = 1; i <= 60; i++) {
            if (A1[i] === 100 || seen[i]) continue;
            let flag = true;
            for (let x = A1[i]; flag && x <= A2[i]; x++) {
                for (let y = A3[i]; y <= A4[i]; y++) {
                    if (M[x][y] === i || seen[M[x][y]]) continue;
                    flag = false;
                    break;
                }
            }
            if (flag) acc++, seen[i]++;
        }
        if (acc === cur) return false;
    }
    return true;
}
