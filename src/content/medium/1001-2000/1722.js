// 1722 - Minimize Hamming Distance After Swap Operations

function minimumHammingDistance(source, target, allowedSwaps) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const len = source.length;
    const uf = Array.from({ length: len }, (_, i) => i);
    for (let i = 0; i < allowedSwaps.length; i++) {
        uf[find(allowedSwaps[i][0])] = find(allowedSwaps[i][1]);
    }
    const groups = new Map();
    for (let n = 0; n < len; n++) {
        const p = find(n), num = source[n];
        if (!groups.has(p)) groups.set(p, new Map());
        const nextFreq = (groups.get(p).get(num) ?? 0) + 1;
        groups.get(p).set(num, nextFreq);
    }
    let hamming = len;
    for (let n = 0; n < len; n++) {
        const p = find(n), num = target[n];
        const freq = groups.get(p).get(num);
        if (!freq) continue;
        groups.get(p).set(num, freq - 1);
        hamming--;
    }
    return hamming;
}
