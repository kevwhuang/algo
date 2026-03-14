// 2369 - Check If There Is a Valid Partition for the Array

function validPartition(nums) {
    const dp = [true, false, nums[0] === nums[1]];
    for (let i = 2; i < nums.length; i++) {
        const a = nums[i - 2], b = nums[i - 1], c = nums[i];
        let next = dp[1] && b === c;
        next ||= dp[0] && a === b && b === c;
        next ||= dp[0] && a + 1 === b && b + 1 === c;
        dp[0] = dp[1], dp[1] = dp[2], dp[2] = next;
    }
    return dp[2];
}
