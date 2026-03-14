// 462 - Minimum Moves to Equal Array Elements II

function minMoves2(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length, m = ~~(len / 2);
    const median = len & 1 ? nums[m] : ~~((nums[m - 1] + nums[m]) / 2);
    let moves = 0;
    for (let i = 0; i < nums.length; i++) {
        moves += Math.abs(nums[i] - median);
    }
    return moves;
}
