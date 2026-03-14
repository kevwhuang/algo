// 3835 - Count Subarrays With Cost Less Than or Equal to K

function countSubarrays(nums, k) {
    if (!this.Q1) Q1 = new Uint32Array(100000), Q2 = new Uint32Array(100000);
    let res = 0, l1 = 0, l2 = 0, l3 = 0, r1 = 0, r2 = 0, r3 = 0;
    while (r3 < nums.length) {
        const cur = nums[r3];
        while (l1 < r1 && nums[Q1[r1 - 1]] <= cur) r1--;
        while (l2 < r2 && nums[Q2[r2 - 1]] >= cur) r2--;
        Q1[r1++] = Q2[r2++] = r3;
        while ((nums[Q1[l1]] - nums[Q2[l2]]) * (r3 - l3 + 1) > k) {
            if (Q1[l1] === l3) l1++;
            if (Q2[l2] === l3) l2++;
            l3++;
        }
        res += ++r3 - l3;
    }
    return res;
}
