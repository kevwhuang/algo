// 16 - 3Sum Closest

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closest, diff = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        const cur = nums[i];
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = cur + nums[l] + nums[r];
            const delta = Math.abs(sum - target);
            if (delta < diff) {
                closest = sum;
                diff = delta;
            }
            if (sum < target) l++;
            else if (sum > target) r--;
            else return target;
        }
    }
    return closest;
}
