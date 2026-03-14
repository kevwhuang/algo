// 456 - 132 Pattern

function find132pattern(nums) {
    const stack = [];
    for (let i = nums.length - 1, mid; ~i; i--) {
        if (nums[i] < mid) return true;
        while (stack.length && nums[i] > stack.at(-1)) mid = stack.pop();
        stack.push(nums[i]);
    }
    return false;
}
