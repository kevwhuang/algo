// 2044 - Count Number of Maximum Bitwise OR Subsets

function countMaxOrSubsets(nums) {
    function backtrack(i, or) {
        if (i === nums.length) return or === max && ++count;
        backtrack(i + 1, or);
        backtrack(i + 1, or | nums[i]);
    }
    let count = 0;
    const max = nums.reduce((s, e) => s | e, 0);
    backtrack(0, 0);
    return count;
}
