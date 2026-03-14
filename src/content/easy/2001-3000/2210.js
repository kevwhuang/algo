// 2210 - Count Hills and Valleys in an Array

function countHillValley(nums) {
    let count = 0;
    const bound = nums.length - 1;
    for (let i = 1; i < bound; i++) {
        const a = nums[i - 1], b = nums[i];
        while (i < bound && nums[i] === nums[i + 1]) i++;
        const c = nums[i], d = nums[i + 1];
        if (a < b && c > d) count++;
        else if (a > b && c < d) count++;
    }
    return count;
}
