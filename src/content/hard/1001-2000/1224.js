// 1224 - Maximum Equal Frequency

function maxEqualFreq(nums) {
    if (!this.B1) B1 = new Uint32Array(100001), B2 = new Uint32Array(100001);
    B1.fill(0);
    B2.fill(0);
    let res = 0, max = 0, i = -1;
    while (++i < nums.length) {
        B2[B1[nums[i]]]--, B2[++B1[nums[i]]]++;
        max = Math.max(B1[nums[i]], max);
        if (max === 1) res = i;
        else if (max * B2[max] === i) res = i;
        else if ((max - 1) * B2[max - 1] + max - 1 === i) res = i;
    }
    return res + 1;
}
