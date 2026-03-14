// 2975 - Maximum Square Area by Removing Fences From a Field

function maximizeSquareArea(m, n, hFences, vFences) {
    hFences.push(1, m);
    vFences.push(1, n);
    let H = new Uint32Array(hFences).sort();
    let V = new Uint32Array(vFences).sort();
    if (H.length > V.length) [H, V] = [V, H];
    m = H.length - 1, n = V.length - 1;
    const set = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j <= m; j++) {
            set.add(H[j] - H[i]);
        }
    }
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            const width = V[j] - V[i];
            if (width <= max) break;
            if (!set.has(width)) continue;
            max = width;
            break;
        }
    }
    return max ? Number(BigInt(max) ** 2n % 1000000007n) : -1;
}
