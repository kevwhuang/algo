// 3434 - Maximum Frequency After Subarray Operation

function maxFrequency(nums, k) {
    let res = 0, acc = 0, i = -1;
    const B = new Array(51).fill(0);
    while (++i < nums.length) {
        const cur = nums[i];
        B[cur] = Math.max(acc, B[cur]) + 1;
        if (cur === k) res++, acc++;
        else res = Math.max(B[cur], res);
    }
    return res;
}
