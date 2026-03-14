// 3736 - Minimum Moves to Equal Array Elements III

function minMoves(nums) {
    const max = Math.max(...nums);
    let res = 0, i = -1;
    while (++i < nums.length) res += max - nums[i];
    return res;
}
