// 3927. Minimize Array Sum Using Divisible Replacements

function minArraySum(nums) {
    if (!this.B) B = new Uint32Array(100001);
    const max = Math.max(...nums) + 1;
    B.fill(0, 1, max);
    nums.forEach(e => B[e]++);
    let res = 0;
    for (let i = 1; i < max; i++) {
        if (B[i] === 0) continue;
        for (let j = i; j < max; j += i) {
            if (B[j]) res += i * B[j], B[j] = 0;
        }
    }
    return res;
}
