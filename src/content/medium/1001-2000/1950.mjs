// 1950 - Maximum of Minimum Values in All Subarrays

function findMaximums(nums) {
    nums.push(-Infinity);
    const n = nums.length - 1;
    const res = new Uint32Array(n), stack = [];
    for (let i = 0; i <= n; i++) {
        while (stack.length && nums[stack.at(-1)] >= nums[i]) {
            const len = i - (stack.length > 1 && stack.at(-2) + 1);
            res[len - 1] = Math.max(nums[stack.pop()], res[len - 1]);
        }
        stack.push(i);
    }
    for (let i = n - 1; i; i--) {
        if (res[i - 1] < res[i]) res[i - 1] = res[i];
    }
    return res;
}
