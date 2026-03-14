// 453 - Minimum Moves to Equal Array Elements

function minMoves(nums) {
    return nums.reduce((s, e) => s + e) - Math.min(...nums) * nums.length;
}
