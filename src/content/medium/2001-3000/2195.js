// 2195 - Append K Integers With Minimal Sum

function minimalKSum(nums, k) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length && k; i++) {
        const l = (nums[i - 1] ?? 0) + 1;
        const r = Math.min(nums[i] - 1, l + k - 1);
        if (l > r) continue;
        sum += (l + r) * (r - l + 1) / 2;
        k -= r - l + 1;
    }
    return sum + (2 * nums[nums.length - 1] + k + 1) * k / 2;
}
