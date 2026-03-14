// 3847 - Find the Score Difference in a Game

function scoreDifference(nums) {
    let res = 0, flag = true, i = -1;
    while (++i < nums.length) {
        if (nums[i] & 1) flag = !flag;
        if (i % 6 === 5) flag = !flag;
        res += flag ? nums[i] : -nums[i];
    }
    return res;
}
