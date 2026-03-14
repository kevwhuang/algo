// 2733 - Neither Minimum nor Maximum

function findNonMinOrMax(nums) {
    return nums.length > 2 ? new Uint8Array(nums.slice(0, 3)).sort()[1] : -1;
}
