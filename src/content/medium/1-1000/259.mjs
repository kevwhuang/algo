// 259 - 3Sum Smaller

function threeSumSmaller(nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < target) count += r - l++;
            else r--;
        }
    }
    return count;
}
