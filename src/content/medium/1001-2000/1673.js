// 1673 - Find the Most Competitive Subsequence

function mostCompetitive(nums, k) {
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (stack.length && num < stack[stack.length - 1]) {
            if (stack.length <= k + i - nums.length) break;
            stack.pop();
        }
        if (stack.length < k) stack.push(num);
    }
    return stack;
}
