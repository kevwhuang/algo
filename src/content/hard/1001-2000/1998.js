// 1998 - GCD Sort of an Array

function gcdSort(nums) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: Math.max(...nums) + 1 }, (_, v) => v);
    for (let i = 0; i < nums.length; i++) {
        const u = nums[i];
        if (u > uf[u]) continue;
        let cur = u;
        const sqrt = Math.sqrt(u);
        for (let v = 2; v <= sqrt; v++) {
            if (cur % v) continue;
            uf[find(u)] = find(v);
            while (cur % v === 0) cur /= v;
            if (cur === 1) break;
        }
        if (cur > 1) uf[find(u)] = find(cur);
    }
    const arr = new Uint32Array(nums).sort();
    return nums.every((e, i) => find(e) === find(arr[i]));
}
