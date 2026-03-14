// 1877 - Minimize Maximum Pair Sum in Array

function minPairSum(nums) {
    const bucket = new Array(100001).fill(0);
    let i = -1, l = 100000, r = 1;
    while (++i < nums.length) {
        bucket[nums[i]]++;
        l = Math.min(nums[i], l);
        r = Math.max(nums[i], r);
    }
    let max = 0;
    while (l <= r) {
        if (bucket[l] <= 0) l++;
        else if (bucket[r] <= 0) r--;
        else {
            const count = Math.min(bucket[l], bucket[r]);
            bucket[l] -= count;
            bucket[r] -= count;
            max = Math.max(l + r, max);
        }
    }
    return max;
}
