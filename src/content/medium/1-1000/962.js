// 962 - Maximum Width Ramp

function maxWidthRamp(nums) {
    let max = 0;
    const stack = [0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[stack[stack.length - 1]]) continue;
        stack.push(i);
    }
    for (let i = nums.length - 1; ~i; i--) {
        while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
            max = Math.max(i - stack.pop(), max);
        }
    }
    return max;
}
