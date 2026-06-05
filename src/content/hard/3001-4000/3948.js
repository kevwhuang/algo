// 3948. Lexicographically Maximum MEX Array

function maximumMEX(nums) {
    if (!this.B) B = new Uint32Array(100001), seen = new Uint32Array(100001);
    const res = [], n = nums.length;
    B.fill(0, 0, n + 1);
    seen.fill(0, 0, n + 1);
    nums.forEach(e => e <= n && B[e]++);
    let acc1 = 1, i = 0, j = 0;
    while (B[i]) i++;
    while (j < n) {
        if (i === 0) while (j < n) res.push(0) && j++;
        if (i === 0) break;
        res.push(i);
        acc1++;
        let acc2 = 0;
        const ii = i;
        while (acc2 < ii) {
            const a = nums[j++];
            if (a <= n && --B[a] === 0 && a < i) i = a;
            if (a < ii && seen[a] !== acc1) seen[a] = acc1, acc2++;
        }
    }
    return res;
}
