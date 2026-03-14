// 2966 - Divide Array Into Arrays With Max Difference

function divideArray(nums, k) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] + k < nums[i + 2]) return [];
        res.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    return res;
}
