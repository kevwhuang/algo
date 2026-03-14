// 3038 - Maximum Number of Operations With the Same Score I

function maxOperations(nums) {
    let i = 2;
    const tgt = nums[0] + nums[1];
    while (nums[i] + nums[i + 1] === tgt) i += 2;
    return i / 2;
}
