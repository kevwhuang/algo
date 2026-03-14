// 2832 - Maximal Range That Each Element Is Maximum in It

function maximumLengthOfRanges(nums) {
    nums.push(Infinity);
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack.at(-1)] < nums[i]) {
            nums[stack.pop()] = i - 1 - (stack.at(-1) ?? -1);
        }
        stack.push(i);
    }
    nums.pop();
    return nums;
}
