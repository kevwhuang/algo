// 2563 - Count the Number of Fair Pairs

function countFairPairs(nums, lower, upper) {
    function count(bound) {
        let pairs = 0, l = 0, r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] > bound) r--;
            else pairs += r - l++;
        }
        return pairs;
    }
    nums.sort((a, b) => a - b);
    return count(upper) - count(lower - 1);
}
