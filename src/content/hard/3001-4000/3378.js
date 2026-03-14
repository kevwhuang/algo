// 3378 - Count Connected Components in LCM Graph

function countComponents(nums, threshold) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: threshold + 1 }, (_, v) => v);
    for (let i = 0; i < nums.length; i++) {
        const u = nums[i];
        if (u < 2) return nums.reduce((s, e) => s + (e > threshold ? 1 : 0), 1);
        let v = u;
        while (v <= threshold) uf[find(v)] = find(u), v += u;
    }
    let res = 0;
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) res++;
        else set.add(find(nums[i]));
    }
    return res + set.size;
}
