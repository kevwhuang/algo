// 3566 - Partition Array Into Two Equal Product Subsets

function checkEqualPartitions(nums, target) {
    function dfs(i, acc, prod) {
        if (i === nums.length || prod > target) return false;
        if (acc && prod === target) return true;
        return dfs(i + 1, acc, prod) || dfs(i + 1, acc + 1, prod * nums[i]);
    }
    if (nums.reduce((s, e) => s * e) !== target ** 2) return false;
    return dfs(0, 0, 1);
}
