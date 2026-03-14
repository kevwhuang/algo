// 334 - Increasing Triplet Subsequence

function increasingTriplet(nums) {
    let n1 = Infinity, n2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n > n2) return true;
        if (n > n1) n2 = n;
        else n1 = n;
    }
    return false;
}
