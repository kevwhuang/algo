// 47 - Permutations II

function permuteUnique(nums) {
    function backtrack(nums, perm) {
        if (nums.length === 1) {
            return permutations.push(perm.concat(nums[0]));
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i - 1] === nums[i]) continue;
            perm.push(nums[i]);
            backtrack(nums.filter((_, j) => i !== j), perm);
            perm.pop();
        }
    }
    nums.sort((a, b) => a - b);
    const permutations = [];
    backtrack(nums, []);
    return permutations;
}
