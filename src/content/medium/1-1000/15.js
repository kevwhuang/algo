// 15 - 3Sum

function threeSum(nums) {
    nums = new Int32Array(nums).sort();
    const res = [];
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i && nums[i - 1] === nums[i]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0 && l++) continue;
            if (sum > 0 && r--) continue;
            res.push([nums[i], nums[l++], nums[r--]]);
            while (nums[l - 1] === nums[l]) l++;
            while (nums[r] === nums[r + 1]) r--;
        }
    }
    return res;
}
