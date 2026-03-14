// 3597 - Partition String

function partitionString(s) {
    const set = new Set();
    let cur = '', i = -1;
    while (++i < s.length) {
        cur += s[i];
        if (set.has(cur)) continue;
        set.add(cur);
        cur = '';
    }
    return [...set];
}
