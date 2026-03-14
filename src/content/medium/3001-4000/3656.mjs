// 3656 - Determine If a Simple Graph Exists

function simpleGraphExists(degrees) {
    let acc1 = degrees.reduce((s, e) => s + e);
    if (acc1 % 2) return false;
    const n = degrees.length, arr = new Uint32Array(degrees).sort();
    let acc2 = 0, l = n - 1, r = n;
    while (~--r) {
        const k = n - r;
        while (l === r || ~l && arr[l] > k) acc1 -= arr[l--];
        acc2 += arr[r];
        if (k * (k + r - l - 2) < acc2 - acc1) return false;
    }
    return true;
}
