// 3804 - Number of Centered Subarrays

function centeredSubarrays(nums) {
    let res = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const set = new Set();
        for (let acc = 0, j = i; j < n; j++) {
            acc += nums[j];
            set.add(nums[j]);
            if (set.has(acc)) res++;
        }
    }
    return res;
}
