// 3507 - Minimum Pair Removal to Sort Array I

function minimumPairRemoval(nums) {
    let res = 0;
    while (true) {
        let flag, idx = 1, i = 0;
        while (++i < nums.length) {
            const a = nums[i - 1], b = nums[i];
            if (a > b) flag = true;
            if (a + b < nums[idx - 1] + nums[idx]) idx = i;
        }
        if (!flag) return res;
        res++;
        nums.splice(idx - 1, 2, nums[idx - 1] + nums[idx]);
    }
}
