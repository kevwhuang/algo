// 698 - Partition to K Equal Sum Subsets

function canPartitionKSubsets(nums, k) {
    function backtrack(i, acc, subsets) {
        if (subsets === k) return true;
        if (acc === tgt) return backtrack(0, 0, subsets + 1);
        for (let j = i; j < nums.length; j++) {
            if (acc + nums[j] > tgt) continue;
            if (seen[j]) continue;
            seen[j] = true;
            if (backtrack(j + 1, acc + nums[j], subsets)) return true;
            seen[j] = false;
            if (acc === 0) return;
        }
    }
    nums = new Uint16Array(nums).sort().reverse();
    const sum = nums.reduce((s, e) => s + e);
    const tgt = sum / k;
    if (tgt !== tgt >> 0) return false;
    const seen = new Array(nums.length);
    return Boolean(backtrack(0, 0, 0));
}
