// 3909. Compare Sums of Bitonic Parts

function compareBitonicSums(nums) {
    let acc1 = 0, acc2 = 0;
    const n = nums.length - 1;
    for (let flag = true, i = 0; i <= n; i++) {
        if (flag) acc1 += nums[i];
        if (i < n && nums[i] > nums[i + 1]) flag = false;
        if (!flag) acc2 += nums[i];
    }
    return acc1 === acc2 ? -1 : acc1 < acc2 ? 1 : 0;
}
