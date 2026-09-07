// 4044. Count Good Cyclic Rotations

function countGoodRotations(nums) {
    let acc1 = 0, acc2 = 0;
    const n = nums.length;
    for (let i = n / 2 - 1; ~i; i--) {
        acc1 += nums[i];
    }
    for (let i = n / 2; i < n; i++) {
        acc2 += nums[i];
    }
    let res = 0;
    for (let i = 0, j = n / 2; i < n; i++, j = (j + 1) % n) {
        if (acc1 > acc2) res++;
        acc1 += nums[j] - nums[i], acc2 += nums[i] - nums[j];
    }
    return res;
}
