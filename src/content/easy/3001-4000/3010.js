// 3010 - Divide an Array Into Subarrays With Minimum Cost I

function minimumCost(nums) {
    const head = nums.shift();
    nums = new Uint8Array(nums).sort();
    return head + nums[0] + nums[1];
}
