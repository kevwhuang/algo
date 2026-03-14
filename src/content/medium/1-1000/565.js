// 565 - Array Nesting

function arrayNesting(nums) {
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        let len = 0, cur = i, prev;
        while (nums[cur] !== null) {
            len++;
            prev = cur;
            cur = nums[cur];
            nums[prev] = null;
        }
        max = Math.max(len, max);
    }
    return max;
}
