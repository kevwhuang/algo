// 2289 - Steps to Make Array Non-Decreasing

function totalSteps(nums) {
    let steps = 0;
    const stack = [], arr = new Uint32Array(nums.length);
    for (let i = nums.length - 1; ~i; i--) {
        while (stack.length && nums[i] > nums[stack.at(-1)]) {
            arr[i] = Math.max(arr[stack.pop()], arr[i] + 1);
            if (arr[i] > steps) steps = arr[i];
        }
        stack.push(i);
    }
    return steps;
}
