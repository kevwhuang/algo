// 3073 - Maximum Increasing Triplet Value

function maximumTripletValue(nums) {
    const indices = Array.from({ length: nums.length }, (_, i) => i);
    indices.sort((a, b) => nums[a] - nums[b] || b - a);
    const suffix = new Uint32Array(nums.length);
    let suffixMax = nums.at(-1);
    for (let i = nums.length - 2; i; i--) {
        suffix[i] = suffixMax;
        suffixMax = Math.max(nums[i], suffixMax);
    }
    let max = 1;
    const stack = [];
    for (let i = 0; i < indices.length; i++) {
        const idx = indices[i];
        while (stack.length && idx < stack.at(-1)) stack.pop();
        if (stack.length && nums[idx] < suffix[idx]) {
            const val = nums[stack.at(-1)] - nums[idx] + suffix[idx];
            max = Math.max(val, max);
        }
        stack.push(idx);
    }
    return max;
}
