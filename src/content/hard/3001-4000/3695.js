// 3695 - Maximize Alternating Sum Using Swaps

function maxAlternatingSum(nums, swaps) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    if (!this.uf) uf = new Uint32Array(100000);
    nums.forEach((_, i) => uf[i] = i);
    swaps.forEach(e => uf[find(e[0])] = find(e[1]));
    const map = new Map();
    for (let u = 0; u < nums.length; u++) {
        const v = find(u), arr = map.get(v) ?? [0];
        if (!map.has(v)) map.set(v, arr);
        if (u % 2 < 1) arr[0]--;
        arr.push(nums[u]);
    }
    let res = 0;
    for (const e of map.values()) {
        e.sort((a, b) => a - b);
        let acc = e[0], i = e.length - 1;
        while (acc++) res += e[i--];
        while (i) res -= e[i--];
    }
    return res;
}
