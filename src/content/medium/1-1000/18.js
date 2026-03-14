// 18 - 4Sum

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const quadruplets = [];
    const bound1 = nums.length - 3, bound2 = bound1 + 1, bound3 = bound2 + 1;
    for (let i = 0; i < bound1; i++) {
        const n1 = nums[i];
        for (let j = i + 1; j < bound2; j++) {
            const n2 = nums[j], newTarget = target - n1 - n2;
            let l = j + 1, r = bound3;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum < newTarget) l++;
                else if (sum > newTarget) r--;
                else {
                    quadruplets.push([n1, n2, nums[l], nums[r]]);
                    while (nums[l] === nums[l + 1]) l++;
                    while (nums[r] === nums[r - 1]) r--;
                    l++, r--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return quadruplets;
}
