// 2492 - Minimum Score of a Path Between Two Cities

function minScore(n, roads) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 0; i < roads.length; i++) {
        uf[find(roads[i][0])] = find(roads[i][1]);
    }
    for (let i = 1; i < uf.length; i++) {
        find(i);
    }
    let min = Infinity;
    const root = uf[1];
    for (let i = 0; i < roads.length; i++) {
        const cur = roads[i];
        if (cur[2] >= min) continue;
        if (uf[cur[0]] === root) min = cur[2];
        else if (uf[cur[1]] === root) min = cur[2];
    }
    return min;
}
