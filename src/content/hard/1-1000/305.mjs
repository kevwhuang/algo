// 305 - Number of Islands II

function numIslands2(m, n, positions) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    let acc = 0;
    const uf = new Uint32Array(m * n).fill(1e9);
    const D = [0, -1, 0, 1, 0];
    for (let i = 0; i < positions.length; i++) {
        const r = positions[i][0], c = positions[i][1];
        let u = n * r + c;
        if (uf[u] !== 1e9) positions[i] = acc;
        if (uf[u] !== 1e9) continue;
        acc++, uf[u] = u;
        for (let j = 0; j < 4; j++) {
            const rr = r + D[j], cc = c + D[j + 1];
            if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
            const v = n * rr + cc;
            if (uf[v] === 1e9 || find(v) === u) continue;
            acc--, uf[u] = u = uf[v];
        }
        positions[i] = acc;
    }
    return positions;
}
