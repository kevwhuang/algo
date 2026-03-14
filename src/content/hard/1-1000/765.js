// 765 - Couples Holding Hands

function minSwapsCouples(row) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: row.length / 2 }, (_, v) => v);
    for (let i = 0; i < row.length; i += 2) {
        uf[find(row[i] >> 1)] = find(row[i + 1] >> 1);
    }
    return uf.reduce((s, _, v) => s - (v === find(v)), uf.length);
}
