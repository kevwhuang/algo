// 46 - Permutations

function permute(nums) {
    function backtrack(i) {
        if (i === nums.length) res.push(new Int8Array(nums));
        for (let j = i; j < nums.length; j++) {
            const cur = nums[i];
            nums[i] = nums[j], nums[j] = cur;
            backtrack(i + 1);
            nums[j] = nums[i], nums[i] = cur;
        }
    }
    const res = [];
    backtrack(0);
    return res;
}
